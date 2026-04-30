import path from 'node:path';
import { defineConfig, Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        vue(),
        dts({ rollupTypes: false }),
        generateExportsManifest()
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, './src/index.ts'),
            name: 'MaxUse',
            fileName: (format: string) => `index.${format}.js`,
            formats: ['es', 'umd']
        },
        rollupOptions: {
            external: ['vue','node:fs', 'node:fs/promises', 'fs', 'fs/promises', 'path', 'node:path'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue'
                }
            }
        },
        sourcemap: true,
        minify: false
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@helpers': path.resolve(__dirname, './src/helpers')
        }
    }
});


function generateExportsManifest(): Plugin {
    return {
        name: 'generate-exports-manifest',
        generateBundle(options, bundle) {
            let exportsList: string[] = [];

            // Procura pelo arquivo principal gerado (entry chunk)
            for (const fileName in bundle) {
                const chunk = bundle[fileName];
                if (chunk.type === 'chunk' && chunk.isEntry) {
                    // A propriedade 'exports' contém apenas o que foi exposto publicamente!
                    exportsList = chunk.exports;
                    break;
                }
            }

            // Remove a exportação padrão 'default' se não quiser usá-la
            const filteredExports = exportsList.filter((name) => name !== 'default');

            // Emite um novo arquivo JSON na pasta dist
            this.emitFile({
                type: 'asset',
                fileName: 'exports.json',
                source: JSON.stringify(filteredExports, null, 2)
            });
        }
    };
}