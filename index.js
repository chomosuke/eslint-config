const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style');
const airbnbBaseTypescript = require('eslint-config-airbnb-typescript/lib/shared');

module.exports = {
    extends: ['airbnb-base', 'airbnb-typescript/base'],
    rules: {
        '@typescript-eslint/indent': ['error', 4],
        'max-len': [ // support indent
            // identical to what's in airbnb except tabWidth
            'error',
            100,
            4,
            baseStyleRules['max-len'][3],
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
                    'Type assertion are considered unsafe. Consider using a typeguard instead.',
            },
            {
                selector: 'TSAsExpression',
                message:
                    'Type assertion are considered unsafe. Consider using a typeguard instead.',
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

        // try to ensure cohesion
        'max-lines': ['error', 300],
        'max-statements': ['error', 50],
        'max-depth': ['error', 4],
        complexity: ['error', 20],
    },
};
