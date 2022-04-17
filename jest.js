const base = require('./index');

module.exports = {
    extends:  [
        'plugin:jest/recommended',
        'plugin:jest/style',
    ],
    rules: {
        'no-restricted-syntax': [
            ...base.rules['no-restricted-syntax'].filter(
                (e) => (
                    e.selector !== 'TSTypeAssertion' &&
                    e.selector !== 'TSAsExpression'
                ),
            ),
        ],
    },
};
