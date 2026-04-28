import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
    plugins: [
        cssInjectedByJsPlugin(),
        vue(),
        UnoCSS(),
        dts({ rollupTypes: false })
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, './src/index.ts'),
            name: 'MaxComponentsUi',
            fileName: (format: string) => `index.${format}.js`,
            formats: ['es', 'umd'],
            cssFileName: 'style'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        },
        cssTarget: 'esnext',
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
