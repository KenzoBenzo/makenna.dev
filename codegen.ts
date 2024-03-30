import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema:
		"https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clue6kg7o000008ks4i5d57yc/master",
	documents: "graphql/**/*.gql",
	generates: {
		"utils/graphql-generated.ts": {
			plugins: [
				"typescript",
				"typescript-operations",
				"typescript-react-apollo",
			],
			config: {
				withHooks: true,
			},
		},
	},
};

export default config;
