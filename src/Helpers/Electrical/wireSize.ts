import { toValue, MaybeRefOrGetter } from 'vue';
import { isBlank } from '../Types/isBlank';

type T = MaybeRefOrGetter<string | number | null>;

type Material = 'copper' | 'aluminum' | 'cobre' | 'aluminio' | 'alumínio' | 'cu' | 'al';
type Temperature = '90' | '70' | 90 | 70;
type Isolation = 'pvc' | 'epr' | 'xlpe';
type Phases = 1 | 2 |3 | '1' | '2' | '3';

export type WireOptions = {
    material?: Material;
    isolation?: Temperature | Isolation;
    method?: 'b1' | 'b2' | 'c1' | 'c2' | 'd';
    length?: number;
    voltage: 115 | 120 | 127 | 220 | 230 | 240 | 380 | 400 | 440 | 480;
    phases?: Phases;
    max_loss?: number;
    voltage_drop?: number;
};

function toPhasePhase(phaseNeutralVoltage: number): number {
    const array = [110, 120, 127, 210, 220, 240, 380, 440, 480];
    const valor = phaseNeutralVoltage * Math.sqrt(3);
    return array.reduce((anterior, atual) => Math.abs(atual - valor) < Math.abs(anterior - valor) ? atual : anterior);
}

export async function wireSize(current: T, options: WireOptions) {
    const data = toValue(current);
    if (isBlank(data)) return null;

    const currentVal = parseFloat(String(data));

    if (currentVal === 0) return { wire: 0, max_current: 0, voltage_drop: 0, loss_percent: 0 };

    const material = String(options.material ?? '').includes('al') ? 'al' : 'cu';
    const isolation = String(options.isolation ?? '').includes('xlpe') || String(options.isolation ?? '').includes('epr') || String(options.isolation ?? '').includes('90') ? '90' : '70';
    const method = options.method ?? null;
    const phase_name = Number(options?.phases) > 2 ? 'tri' : 'bi';

    const phases = Number(options?.phases) > 2 ? 3 : 2;
    const voltage = options?.voltage ?? 220;
    const length = Number(options?.length ?? 10);
    const max_percent = Number(options?.max_loss ?? 5);

    const resistivity = {
        'cu': { '70': 0.0225, '90': 0.0240 },
        'al':{ '70': 0.0360, '90': 0.0360 }
    };

    const safeMaterial = material as keyof typeof resistivity;
    const safeIsolation = isolation as keyof typeof resistivity[typeof safeMaterial];
    const rho = resistivity[safeMaterial][safeIsolation];
    const voltage_base = phases === 3 ? toPhasePhase(Number(voltage)) : voltage;
    const voltage_drop_allowed = (phases === 3 ? voltage_base: voltage) * (max_percent / 100);

    const section = phases === 3
        ? (Math.sqrt(3) * currentVal * length * rho) / voltage_drop_allowed
        : (2 * currentVal * length * rho) / voltage_drop_allowed;

    const all_wires = [0.5, 0.75, 1, 1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300, 400, 500, 630, 800, 1000];
    const data_return = {
        wire: Number(all_wires.find((w) => w >= section) || 1000),
        max_current: currentVal,
        voltage_drop: Number(voltage_drop_allowed.toFixed(2)),
        loss_percent: Number(max_percent.toFixed(2))
    };

    try {
        const resposta = await fetch(`../json/${material}-${isolation}-${phase_name}-${method}.json`);
        const dados = await resposta.json();
        const item = dados.find((c: { wire: number; max_current: number }) => c.max_current >= currentVal);
        if (item && item.wire >= data_return.wire) {
            data_return.wire = item.wire;
            data_return.max_current = item.max_current;
        }
        else if (item) {
            const wire_table = dados.find((c: { wire: number; max_current: number }) => c.wire === data_return.wire);
            if (wire_table) data_return.max_current = wire_table.max_current;
        }

    } catch {
        // Silently fail if JSON is not available
    }

    const cosPhi = 0.95;
    const R_por_metro = rho / data_return.wire;
    const X_por_metro = 0.0001; 
    const sinPhi = Math.sqrt(1 - Math.pow(cosPhi, 2));
    const Z_efetiva = (R_por_metro * cosPhi) + (X_por_metro * sinPhi);
    const k = (phases === 3) ? Math.sqrt(3) : 2;
    const voltage_drop = Number(k * currentVal * length * Z_efetiva);
    const percent_drop = Number((voltage_drop / voltage_base) * 100);

    data_return.voltage_drop = Number(voltage_drop.toFixed(2));
    data_return.loss_percent = Number(percent_drop.toFixed(2));

    return data_return;
}
