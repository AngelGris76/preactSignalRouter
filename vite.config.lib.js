import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		minify: true,
		lib: {
			entry: resolve(__dirname, './src/main.js'),
			name: 'preact Router Signal',
			formats: ['es'],
			fileName: 'prect-router-signal',
		},
		rollupOptions: {
			external: ['preact', 'preact/hooks', '@preact/signals', 'path-to-regexp'],
			output: {
				globals: {
					preact: 'preact',
					'@preact/signals': '@preact/signals',
					'preact/hooks': 'preact/hooks',
					'path-to-regexp': 'path-to-regexp',
				},
			},
		},
	},
});
