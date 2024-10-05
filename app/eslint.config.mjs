import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';


export default [
  { 
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      'max-len': 'off',
      'semi': ['error', 'always'],
      'require-await': 'warn',
      'no-debugger': 'off',
      'quotes': [
        'error',
        'single',
        {
          'allowTemplateLiterals': true,
          'avoidEscape': true
        }
      ],
      indent : ['error', 2],
      'space-before-function-paren': [
        'error',
        {
          'anonymous': 'always',
          'named': 'never',
          'asyncArrow': 'always'
        }
      ]
    }  
  },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig
];