// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'
import stylisticTs from '@stylistic/eslint-plugin-ts'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@stylistic': stylisticTs,
    },
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'always'],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      'comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/indent': ['error', 2],
      'sort-imports': ['warn', { ignoreDeclarationSort: true }],
      'space-before-function-paren': ['error', 'always'],
      'quote-props': ['error', 'as-needed'],
      'no-trailing-spaces': ['error'],
      'no-multi-spaces': ['error'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'no-duplicate-imports': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'prefer-template': ['error'],
      '@typescript-eslint/no-non-null-asserted-optional-chain': 0
    },
  },
  { ignores: ['dist', 'node_modules', 'coverage'] },
)


