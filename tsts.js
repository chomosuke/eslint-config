const base = require('./index');

module.exports = {
    ...base,
    rules: {
        ...base.rules,
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
