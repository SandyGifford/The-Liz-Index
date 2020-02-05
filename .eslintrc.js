module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	plugins: [
		'@typescript-eslint',
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		"indent": ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"comma-dangle": ["error", "always-multiline"],
		"no-cond-assign": ["error", "always"],
		"no-console": "off",
		"@typescript-eslint/indent": ["error", "tab"],
		"@typescript-eslint/no-empty-interface": 0,
		"@typescript-eslint/explicit-function-return-type": 0,
		"@typescript-eslint/no-explicit-any": 0,
		"@typescript-eslint/no-var-requires": 0
	}
};