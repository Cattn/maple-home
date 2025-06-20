/* import adapter from '@sveltejs/adapter-auto';
 */import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
 import adapter from '@sveltejs/adapter-cloudflare';


const config = {
	preprocess: vitePreprocess(),
	kit: { adapter: adapter({
		fallback: 'plaintext',
		routes: {
			include: ['/*'],
			exclude: ['<all>']
		}
	})
 }
};

export default config;
