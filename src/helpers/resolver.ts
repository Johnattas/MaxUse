import type { ComponentResolver } from 'unplugin-vue-components/types';
import manifest from '@/components-manifest.json';

export function MaxComponentsUiResolver(): ComponentResolver {
    return {
        type: 'component',
        resolve: (name: string) => {
            const originalName = (manifest.aliases as Record<string, string>)[name];
            if (originalName) return {
                name: originalName,
                from: 'max-components-ui'
            };
        }
    };
}