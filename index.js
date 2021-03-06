const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style');
const airbnbBaseTypescript = require('eslint-config-airbnb-typescript/lib/shared');

module.exports = {
    extends: [
        // order is important here, we want airbnb-typescript/base to override
        // typescript-eslint
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript/base',
    ],
    rules: {
        '@typescript-eslint/indent': ['error', 4],
        'max-len': [
            'error',
            {
                code: 80,
                ignoreRegExpLiterals: true,
                ignoreUrls: true,
            },
        ],
        'import/no-default-export': 'error',
        'import/prefer-default-export': 'off', // support no-default-export
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                ...airbnbBaseTypescript.rules['@typescript-eslint/no-unused-vars'][1],
                args: 'all',
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        'no-underscore-dangle': 'off', // support no-unused-vars
        '@typescript-eslint/naming-convention': [ // support no-unused-vars
            ...airbnbBaseTypescript.rules['@typescript-eslint/naming-convention'].map((e) => {
                if (e.selector === 'variable') {
                    return {
                        ...e,
                        leadingUnderscore: 'allow',
                    };
                }
                return e;
            }),
        ],
        '@typescript-eslint/member-delimiter-style': 'error',
        eqeqeq: ['error', 'always'],
        'no-restricted-syntax': [
            ...baseStyleRules['no-restricted-syntax'].filter(
                (e) => e.selector !== 'ForOfStatement',
            ),
            {
                selector: 'TSTypeAssertion',
                message:
                    'Type assertion are considered unsafe. Consider using a typeguard or a runtime type check library instead.',
            },
            {
                selector: 'TSAsExpression',
                message:
                    'Type assertion are considered unsafe. Consider using a typeguard or a runtime type check library instead.',
            },
        ],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/type-annotation-spacing': 'error',
        'no-plusplus': 'off',
        'no-minusminus': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        'no-constant-condition': [
            'error',
            { checkLoops: false },
        ],
        '@typescript-eslint/no-floating-promises': 'error',
        'no-void': [ // support @typescript-eslint/no-floating-promises
            'error',
            {
                allowAsStatement: true,
            },
        ],
        '@typescript-eslint/strict-boolean-expressions': [
            'error',
            {
                allowString: false,
                allowNumber: false,
                allowNullableObject: false,
            },
        ],
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'error',

        // try to ensure cohesion
        'max-lines': ['error', 300],
        'max-statements': ['error', 50],
        'max-depth': ['error', 4],
        complexity: ['error', 20],
    },
};
