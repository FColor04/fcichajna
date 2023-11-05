import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { mdsvex } from 'mdsvex';

//** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
	extensions: ['.md'],
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [ vitePreprocess(), mdsvex(mdsvexConfig)],
	
	vitePlugin: {
		inspector: true,
	},
	kit: {
		adapter: adapter()
	}
};
export default config;