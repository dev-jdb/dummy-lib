/**
 * In ESLint 9, the concept of a "flat" configuration file was introduced. This
 * configuration file is simply a JavaScript object, instead of the custom
 * format used previously.
 */

import path from 'path';
import { fileURLToPath } from 'url';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import typescriptParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ resolvePluginsRelativeTo: __dirname });

/**
 * The various configuration objects below are merged together based on the file
 * matching. The order of the objects in the array is important, as the objects
 * are merged in order.
 */
export default [
  js.configs.recommended,
  // Global Ignores
  // see: https://eslint.org/docs/next/use/configure/configuration-files#globally-ignoring-files-with-ignores
  {
    ignores: ['node_modules/', 'dist/*', 'docs/**/*'],
  },
  // use TS recommended config
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  // General rules used by all JS/TS file types.
  {
    files: ['**/*.{cjs,js,jsx,mjs,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      parser: typescriptParser,
      globals: { ...globals.builtin, ...globals.browser, ...globals.node, ...globals.es2021 },
    },
    rules: {
      indent: ['error', 2, { SwitchCase: 1 }],
      'no-console': 'off',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
    },
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
];
