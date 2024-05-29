import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.WnIF0GFF.js","_app/immutable/chunks/scheduler.BOveaGQ6.js","_app/immutable/chunks/index.DFPIkN7S.js","_app/immutable/chunks/cart.ZjbDfNsz.js","_app/immutable/chunks/index.DhKR1buT.js"];
export const stylesheets = ["_app/immutable/assets/2.ly_0MsGf.css"];
export const fonts = [];