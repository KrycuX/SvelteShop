export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Pof_EEGV.js","app":"_app/immutable/entry/app.Cn_sIH0L.js","imports":["_app/immutable/entry/start.Pof_EEGV.js","_app/immutable/chunks/entry.IPCZaokZ.js","_app/immutable/chunks/scheduler.BOveaGQ6.js","_app/immutable/chunks/index.DhKR1buT.js","_app/immutable/entry/app.Cn_sIH0L.js","_app/immutable/chunks/scheduler.BOveaGQ6.js","_app/immutable/chunks/index.DFPIkN7S.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/shopCart",
				pattern: /^\/shopCart\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
