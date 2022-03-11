module.exports = {
    extends: ["airbnb-base", "airbnb-typescript/base"],
    rules: {
        "@typescript-eslint/indent": ["error", 4],
        "linebreak-style": "off",
        "import/no-default-export": "error",
        "import/prefer-default-export": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                args: "all",
                argsIgnorePattern: "^_",
                ignoreRestSiblings: true,
            },
        ],
        "@typescript-eslint/member-delimiter-style": "error",
        eqeqeq: "error",
        "no-restricted-syntax": [
            "error",
            {
                selector: "ForInStatement",
                message:
                    "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
            },
            {
                selector: "LabeledStatement",
                message:
                    "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
            },
            {
                selector: "WithStatement",
                message:
                    "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
            },
            {
                selector: "TSTypeAssertion",
                message:
                    "Type assertion are considered unsafe. Consider using a typeguard instead.",
            },
            {
                selector: "TSAsExpression",
                message:
                    "Type assertion are considered unsafe. Consider using a typeguard instead.",
            },
        ],
        "@typescript-eslint/no-use-before-define": "off",
        "max-len": [
            // identical to what's in airbnb except tabWidth
            "error",
            {
                code: 100,
                tabWidth: 4,
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        "@typescript-eslint/type-annotation-spacing": "error",
        "no-plusplus": "off",
        "no-minusminus": "off",
        "@typescript-eslint/no-explicit-any": "error",

        // try to ensure cohesion
        "max-lines": ["error", 500],
        "max-statements": ["error", 50],
        "max-depth": "error",
        complexity: "error",
    },
};
