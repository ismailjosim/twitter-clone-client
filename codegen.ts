import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	schema: 'http://localhost:5000/graphql',
	documents: [
		'src/**/*.{tsx,ts}', // ← scan inside src/
		'!src/gql/**', // ← exclude generated output folder
		'!node_modules/**', // ← exclude node_modules
	],
	generates: {
		'src/gql/': {
			// ← output inside src/
			preset: 'client',
			plugins: [],
		},
		'./graphql.schema.json': {
			plugins: ['introspection'],
		},
	},
}

export default config
