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
                args: "none",
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
        ],
        "@typescript-eslint/no-use-before-define": "off",
        "max-len": [
            "error",
            {
                code: 80,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
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
