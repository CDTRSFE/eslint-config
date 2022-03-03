// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
    extends: [
        '@trscd/basic',
        'plugin:@typescript-eslint/recommended',
    ],
    overrides: [
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
    rules: {
        // Override JS
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-redeclare': 'off',
        'indent': 'off',
        '@typescript-eslint/indent': ['error', 4, { SwitchCase: 1 }],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],

        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'semi' }}],
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
        '@typescript-eslint/prefer-ts-expect-error': 'error',
    },
});
