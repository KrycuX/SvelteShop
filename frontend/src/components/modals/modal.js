import Modal from './Modal.svelte';

/**
 * @param {{ title: string; message: string; }} options
 */
export function confirm(options) {
	return new Promise(resolve => {
		const modal = new Modal({
			target: document.body,
			props: options,
		});
		modal.$on('result', e => {
			resolve(e.detail);
			modal.$destroy();
		});
	})
}