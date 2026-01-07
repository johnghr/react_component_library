import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import sassDts from 'vite-plugin-sass-dts';

export default defineConfig({
    plugins: [react(), sassDts()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'vcreate-components',
            fileName: (format) => `vcreate-components.${format}.js`
        },
        manifest: true,
        rollupOptions: {
            external: ['react', 'react-dom', 'react-router-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react-router-dom': 'ReactRouterDOM'
                }
            },
            input: {
                main: path.resolve(__dirname, 'src/index.ts')
            }
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
});
