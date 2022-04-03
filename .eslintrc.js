module.exports = {
    extends: ['./index'],
    env: { node: true },
    overrides: [
        {
            files: ['**/*.test.ts'],
            env: { 'jest': true },
            extends: ['./jest'],
            plugins: ['jest'],
        }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json',
    },
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['**/*.js'],
};
