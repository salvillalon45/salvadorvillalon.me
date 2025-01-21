// // @ts-check

// import eslint from '@eslint/js';
// import tseslint from 'typescript-eslint';

// export default {
//   parser: tseslint.parsers['@typescript-eslint/parser'],
//   parserOptions: {
//     project: true
//   },
//   extends: [
//     'next/core-web-vitals',
//     tseslint.configs.recommended,
//     tseslint.configs.stylistic,
//   ],
//   rules: {
//     '@typescript-eslint/array-type': 'off',
//     '@typescript-eslint/consistent-type-definitions': 'off',
//     '@typescript-eslint/consistent-type-imports': [
//       'warn',
//       {
//         prefer: 'type-imports',
//         fixStyle: 'inline-type-imports'
//       }
//     ],
//     '@typescript-eslint/no-unused-vars': [
//       'warn',
//       {
//         argsIgnorePattern: '^_'
//       }
//     ],
//     '@typescript-eslint/require-await': 'off',
//     '@typescript-eslint/no-misused-promises': [
//       'error',
//       {
//         checksVoidReturn: {
//           attributes: false
//         }
//       }
//     ]
//   }
// };
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log({ dirname })
const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;