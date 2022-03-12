import airbnbBase from 'eslint-config-airbnb-base';
import airbnbBaseTypescript from 'airbnb-typescript/base';

module.exports = {
    extends: ['airbnb-base', 'airbnb-typescript/base'],
    rules: {
        '@typescript-eslint/indent': ['error', 4],
        'linebreak-style': 'off',
        'import/no-default-export': 'error',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                ...airbnbBaseTypescript.rules['@typescript-eslint/no-unused-vars'][1],
                args: 'all',
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/member-delimiter-style': 'error',
        eqeqeq: 'error',
        'no-restricted-syntax': [
            ...airbnbBase.rules['no-restricted-syntax'].filter(
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
        'max-len': [
            // identical to what's in airbnb except tabWidth
            'error',
            100,
            4,
            airbnbBase.rules['max-len'][3],
        ],
        '@typescript-eslint/type-annotation-spacing': 'error',
        'no-plusplus': 'off',
        'no-minusminus': 'off',
        '@typescript-eslint/no-explicit-any': 'error',

        // try to ensure cohesion
        'max-lines': ['error', 500],
        'max-statements': ['error', 50],
        'max-depth': 'error',
        complexity: 'error',
    },
};
