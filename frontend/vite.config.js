import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig,searchForWorkspaceRoot  } from 'vite';

export default defineConfig({
	plugins: [sveltekit(),],
	vite: {
		server: {
			port: 8000,
			strictPort: false,
		},
    }

});

