import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		minify: true,
		lib: {
			entry: resolve(__dirname, './src/main.js'),
			formats: ['es'],
			name: 'preact router with signal',
		},
		rollupOptions: {
			external: ['preact', 'preact/hooks', '@preact/signals', 'path-to-regexp'],
			output: {
				globals: {
					preact: 'preact',
					'preact/hooks': 'preact/hooks',
					'@preact/signals': '@preact/signals',
					'path-to-regexp': 'path-to-regexp',
				},
			},
		},
	},
});
