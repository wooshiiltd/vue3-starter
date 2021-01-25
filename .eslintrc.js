const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    ignorePatterns: [
        'node_modules',
        '*.js'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:vue/vue3-recommended',
        '@vue/typescript/recommended',
    ],
    plugins: [
        '@typescript-eslint',
        'vue'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        extraFileExtensions: ['.vue'],
    },
    overrides: [
        {
            files: [
                '*.test.ts(x)$'
            ],
            env: {
                jest: true
            },
            parser: '@typescript-eslint/parser'
        }
    ],
    rules: {
        // https://eslint.org/docs/rules/
        'no-console': isProduction ? 'error': 'warn',
        'no-debugger': isProduction ? 'error' : 'warn',
        'semi': 'off',
        'indent': 'off',
        'no-unused-expressions': 'off',
        'space-before-function-paren': ['error', 'never'],
        'no-trailing-spaces': 'warn',
        'no-any': 'off',
        'no-prototype-builtins': 'off',
        'no-unused-vars': 'off',
        'prefer-rest-params': 'warn',
        'no-extra-parens': 'off',
        'quotes': 'off',
        'func-call-spacing': 'off',
        'comma-spacing': 'off',
        'keyword-spacing': 'off',
        'object-curly-spacing': ['warn', 'always'],
        'comma-dangle': ['warn', 'never'],
        'max-len': ['warn', 120],
        'eqeqeq': 'error',

        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
        '@typescript-eslint/indent': ['warn', 4],
        '@typescript-eslint/semi': 'error',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/quotes': ['warn', 'single'],
        '@typescript-eslint/no-extra-parens': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-useless-constructor': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        // '@typescript-eslint/explicit-module-boundary-types': ['error', { 'allowArgumentsExplicitlyTypedAsAny': true }],
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/prefer-ts-expect-error': 'warn',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        '@typescript-eslint/comma-spacing': 'warn',
        '@typescript-eslint/keyword-spacing': 'warn',
        // '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'], // waiting on dependency updates
        // '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
        '@typescript-eslint/member-delimiter-style': 'warn',
        '@typescript-eslint/type-annotation-spacing': 'warn',
        '@typescript-eslint/naming-convention': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',

        // https://eslint.vuejs.org/rules/
        // if unsure and eslint doesn't cover it please refer to https://v3.vuejs.org/style-guide/
        'vue/html-indent': ['warn', 4],
        'vue/component-name-in-template-casing': ['warn', 'PascalCase'],
        'vue/match-component-file-name': ['error', {
            extensions: ['jsx', 'vue']
        }],
        'vue/new-line-between-multi-line-property': 'warn',
        'vue/max-attributes-per-line': ['warn', {
            'singleline': 3,
            'multiline': {
                'max': 1,
                'allowFirstLine': true
            }
        }],
        'vue/no-boolean-default': ['error', 'default-false'],
        'vue/no-duplicate-attr-inheritance': 'error',
        'vue/no-empty-component-block': 'warn',
        'vue/no-multiple-objects-in-class': 'error',
        'vue/no-potential-component-option-typo': ['error', {
            presets: ['vue', 'vue-router']
        }],
        'vue/no-reserved-component-names': ['error', {
            'disallowVueBuiltInComponents': true,
            'disallowVue3BuiltInComponents': true
        }],
        'vue/no-template-target-blank': 'error',
        'vue/no-unsupported-features': ['error', {
            'version': '^3.0.0'
        }],
        'vue/no-useless-mustaches': 'warn',
        'vue/no-useless-v-bind': 'error',
        'vue/padding-line-between-blocks': 'warn',
        'vue/require-name-property': 'error',
        'vue/v-for-delimiter-style': 'error',
        'vue/v-on-event-hyphenation': 'error',
        'vue/v-on-function-call': ['error', 'never', {
            'ignoreIncludesComment': true
        }],
        'vue/eqeqeq': 'error',
        'vue/no-extra-parens': 'warn',
    }
}
