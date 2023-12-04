import { configureWunderGraphApplication, cors, EnvironmentVariable, introspect, templates } from '@wundergraph/sdk';
import server from './wundergraph.server';
import operations from './wundergraph.operations';

const countries = introspect.graphql({
	apiNamespace: 'countries',
	url: 'https://countries.trevorblades.com/',
});

const dcat2 = introspect.graphql({
	apiNamespace: 'dcat2',
	url: 'http://localhost:4001/graphql',
});

const woz = introspect.graphql({
	apiNamespace: 'woz',
	url: 'http://localhost:4002/graphql',
});

const product_pfb = introspect.openApi({
  apiNamespace: 'product_pfb',
  source: {
    kind: 'file',
    filePath: './product_pfb.yaml', // this is the OpenAPI specification.
  },
});

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
	options: {
		listen: {
			host: 'localhost'
		},
	nodeUrl: 'http://localhost:9991/',
	publicNodeUrl: 'http://localhost:9991/',
	},
	apis: [dcat2,woz,product_pfb],
	server,
	operations,
	generate: {
		codeGenerators: [],
	},
	cors: {
		...cors.allowAll,
		allowedOrigins:
			process.env.NODE_ENV === 'production'
				? [
						// change this before deploying to production to the actual domain where you're deploying your app
						'http://localhost:3000',
				  ]
				: ['http://localhost:3000', new EnvironmentVariable('WG_ALLOWED_ORIGIN')],
	},
	security: {
		enableGraphQLEndpoint: process.env.NODE_ENV !== 'production' || process.env.GITPOD_WORKSPACE_ID !== undefined,
	},
});
