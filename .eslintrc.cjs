module.exports = {
	env: { browser: true, es2021: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	plugins: ['react-refresh', 'import-helpers', '@typescript-eslint'],
	rules: {
		'react-refresh/only-export-components': 'warn',
		'quotes': ['error', 'single'],
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'windows'],
		'semi': ['error', 'always'],
		'object-curly-spacing': [
			'error', 'always'
		],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'import-helpers/order-imports': [
			'warn',
			{
				'newlinesBetween': 'always',
				'groups': [
					'/^react/',
					'/^next(-.*)?/',
					'/^iconsax-react/',
					'module',
					[
						'parent',
						'sibling',
						'index'
					],
					'/^.+\\.module\\.(scss|sass)$/',
					'/^@public/',
					'/^@shared/'
				],
				'alphabetize': {
					'order': 'asc',
					'ignoreCase': true
				}
			}
		]
	},
};
