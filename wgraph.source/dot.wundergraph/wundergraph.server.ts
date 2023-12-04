import { configureWunderGraphServer } from '@wundergraph/sdk/server';

export default configureWunderGraphServer(() => ({
	options: {
		listen: {
			host: 'localhost'
		},
		serverUrl: 'http://localhost:9992/',
	},
	hooks: {
		queries: {
			Countries: {
				preResolve: async ({ operations }) => {},
			},
		},
		mutations: {},
	},
}));
