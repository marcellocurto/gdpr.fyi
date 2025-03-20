import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

const config = [
	...compat.extends("next", "next/core-web-vitals", "next/typescript"),
	{
		rules: {
			camelcase: "off",
			"import/prefer-default-export": "off",
			"react/jsx-filename-extension": "off",
			"react/jsx-props-no-spreading": "off",
			"react/no-unused-prop-types": "off",
			"react/require-default-props": "off",
			"react/no-unescaped-entities": "off",
			"import/extensions": [
				"error",
				"ignorePackages",
				{
					ts: "never",
					tsx: "never",
					js: "never",
					jsx: "never",
				},
			],
		},
	},
	...compat.extends("plugin:@typescript-eslint/recommended").map((config) => ({
		...config,
		files: ["**/*.+(ts|tsx)"],
	})),
	{
		files: ["**/*.+(ts|tsx)"],
		plugins: {
			"@typescript-eslint": typescriptEslintPlugin,
		},
		languageOptions: {
			parser: tsParser,
		},
		rules: {
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					vars: "all",
					args: "after-used",
					ignoreRestSiblings: false,
				},
			],
			"@typescript-eslint/no-explicit-any": "warn",
		},
	},
];

export default config;
