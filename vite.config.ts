/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import tsPaths from './tsconfig.path.json';

/**
 * Resolve tsconfig.json paths to Webpack aliases
 * @return {object Alias} - Alias config
 * @param paths
 */
function resolveTsconfigPathsToAlias(paths = tsPaths.compilerOptions.paths) {
    return Object.keys(paths).reduce((alias, item) => {
        const key = item.replace('/*', '');
        alias[key] = path.resolve(__dirname, paths[item][0].replace('/*', ''));
        return alias;
    }, {});
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        https: false,
        host: 'dongntd.bkav.com',
        port: 8080,
    },
    resolve: {
        alias: resolveTsconfigPathsToAlias(),
    },
});
