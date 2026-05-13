import { wireSize } from './src/Helpers/Electrical/wireSize.ts';

async function run() {
    const res = await wireSize(50, {
        "material": "cu", "isolation": "70", "method": "E", "length": 10, "voltage": 220, "phases": 3, "max_loss": 5
    });
    console.log(res);
}
run();
