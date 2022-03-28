const rules = require('./index');

module.exports = {
    env: {
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json',
    },
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['**/*.js'],
    ...rules,
};
