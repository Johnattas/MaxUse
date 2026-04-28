export async function calculaCabo(current: number | string, voltage: number, phases: number, options: any = null) {
    if (typeof current === 'string') {
        current = parseFloat(current);
    }
    if (current === 0) {
        return 0;
    }

    const material_isolation = options?.material_isolation ? options?.material_isolation.split('-') : null;
    let type_line = (options?.type_line ?? options?.type_instalation ?? options?.line ?? options?.instalation ?? 'b1').toLowerCase();
    let material = material_isolation?.length > 0 ? material_isolation[0] : (options?.type_cable ?? options?.material ?? options?.material_cable ?? 'cobre').toLowerCase();
    let isolation = material_isolation?.length > 1 ? material_isolation[1] : (options?.isolation ?? options?.isolation_cable ?? '70').toLowerCase();
    let length = parseFloat((options?.length ?? options?.comprimento ?? options?.distancia ?? options?.tamanho ?? '10') + '');
    let cables = parseFloat((options?.number_of_cables ?? options?.n_cabos ?? options?.qtd_cabos ?? options?.number_cables ?? options?.cables ?? phases) + '');
    let wire = parseFloat((options?.wire_target ?? options?.target ?? options?.target_wire ?? options?.target_cable ?? options?.target_cabo ?? options?.wire ?? 0) + '');

    let max_percent = parseFloat(options?.percent ?? options?.lost ?? options?.max_lost ?? options?.max_loss ?? options?.max_percent ?? (phases === 1 ? 3 : 5) + '');

    material = material === 'aluminio' || material === 'alumínio' ? 'aluminum' : material;
    material = material === 'cobre' ? 'copper' : material;

    isolation = isolation === 'pvc' ? '70' : isolation;
    isolation = isolation === 'epr' || isolation === 'xlpe' ? '90' : isolation;

    const api_response = await apiGetRoute('electrical.wire.size', { current: current, material: material, isolation: isolation, length: length, type_line: type_line, cables: cables, voltage: voltage, phases: phases, max_percent: max_percent, wire: wire });
    api_response.material = material;
    api_response.isolation = isolation;
    api_response.type_line = type_line;
    api_response.length = length;
    api_response.cables = cables;
    api_response.voltage = voltage;
    return api_response;
}
