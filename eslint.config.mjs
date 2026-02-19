import { dirname } from 'path'
import { fileURLToPath } from 'url'

import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  {
    ignores: [
      '.next/**',
      'public/**',
      '*.config.{js,cjs,mjs}',
      '**/*.json',
      '.idea/**',
      '**/tsconfig.json',
      'pnpm-lock.yaml',
      'package.json'
    ]
  },
  {
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
      '@typescript-eslint': tseslint.plugin,
      'simple-import-sort': simpleImportSort
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
      }
    },
    rules: {
      ...prettierConfig.rules,
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react$', '^next'],
            ['^@?\\w'],
            ['^@/'],
            ['^\\./', '^\\.\\./'],
            ['^.+\\.s?css$']
          ]
        }
      ],
      'simple-import-sort/exports': 'error',
      'no-duplicate-imports': 'error',

      // General formatting
      indent: ['error', 2],
      semi: ['error', 'never'],
      'comma-dangle': ['error', 'never'],
      quotes: ['error', 'single'],
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],

      // Spacing and alignment
      'space-before-function-paren': ['error', 'never'],
      'space-in-parens': ['error', 'never'],
      'array-bracket-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],

      // Code quality
      camelcase: [
        'error',
        {
          properties: 'never',
          allow: ['required_error', 'invalid_type_error']
        }
      ],
      eqeqeq: ['error', 'always'],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-debugger': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'arrow-spacing': ['error', { before: true, after: true }],

      // JSX/React
      'react/jsx-indent': ['error', 2],
      'react/jsx-curly-spacing': ['error', { when: 'always', children: { when: 'always' } }],
      'react/self-closing-comp': 'error',
      'react/jsx-props-no-multi-spaces': 'error',
      'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }]
    }
  }
]

export default eslintConfig
