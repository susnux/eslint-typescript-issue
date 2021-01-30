const { resolve } = require('path');

module.exports = {
	parserOptions: {
		project: resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
         parser: '@typescript-eslint/parser',
extraFileExtensions: ['.vue'],
      sourceType: "module",
		ecmaVersion: 2019,
  }
,
	extends: [
     'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

 'plugin:vue/vue3-essential'
		],
	plugins: [
    '@typescript-eslint',
    'vue',
  ],
}
