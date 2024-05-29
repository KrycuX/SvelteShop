import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig,searchForWorkspaceRoot  } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve:{
		alias:{
			components:'/src/components'
		} 
	}
    }
	);

