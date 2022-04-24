# eslint-config-chomosuke
This is an opinionated eslint config for typescript based on airbnb-typescript/base & typescript/recommended

This config is published to [NPM](https://www.npmjs.com/package/eslint-config-chomosuke)

Changes on top of airbnb-typescript/base & typecript/recommended:
- Indent with 4 spaces instead of 2.
    - According to [Linux kernel coding style](https://www.kernel.org/doc/html/v4.10/process/coding-style.html#indentation), if you need more than 3 levels of indentation, you’re screwed anyway, and should fix your program.
- Turned off `import/prefer-default-export` and replaced it with `import/no-default-export`.
    - Naming things are hard enough already, let's only do it once.
    - This also enables auto import in some IDEs.
    - People will get confused when they see the same thing with different name in different files.
    - `max-lines` will take care of preventing files exporting too many things.
- Overridden `no-unused-vars` to allow and enforce leading `_` to indicate intentionally unused vars
    - Enforce all unused vars to be intentional.
    - Unused args could make sense sometimes.
- Added `@typescript-eslint/member-delimiter-style` to enforce semicolon style.
    - It's good to have consistency.
- Added `eqeqeq`.
    - You almost never want `==`. Even when comparing against `null` it's better to explicitly state if you want to allow `undefined` or not.
- Allowed `ForOfStatement`.
    - Most programmers are more familiar with for loop syntax compared to `forEach()`.
    - Performance shouldn't really be a consideration when using typescript.
- Disallowed type assertion.
    - Type assertion causes the runtime type to be different than the static type. This can cause great confusion especially when the assertion happens much earlier in the execution.
    - Either write a typeguard or use a run time typechecking library like [zod](https://www.npmjs.com/package/zod) or [io-ts](https://www.npmjs.com/package/io-ts) instead.
- Turned off `no-use-before-define`.
    - It's preferable to have public interfaces at the top of a module because it allows the reader to see the part they are going to use first. This rule forbids that.
- Added `@typescript-eslint/type-annotation-spacing`.
    - It's good to have consistency.
- Turned off `no-plusplus` & `no-minusminus`.
    - Most programmers are more familiar with for loop syntax compared to `forEach()`.
    - Most programmers are very familiar with `++` & `--` and know most its nuance.
- Made `@typescript-eslint/no-explicit-any` an error.
    - `any` defeats the purpose of typescript, use `unknown` instead.
    - This should be used with `noImplicitAny` in tsconfig.
- No checkLoops for `no-constant-condition`.
    - Infinite loop are almost always intended.
- Added `@typescript-eslint/no-floating-promises`.
    - I've forgotten to await too many times to not have this rule.
- Added `@typescript-eslint/strict-boolean-expressions`.
    - It's always better to define explicitly what you do or do not allow. It's less error prone and more intension revealing.
- Turned off `@typescript-eslint/no-inferrable-types`.
    - Sometimes we like to write the type annotation explicitely to make our code more readable.
- Added `@typescript-eslint/explicit-member-accessibility`.
    - It's good to have consistency.
- Added `max-lines`, `max-statements`, `max-depth` & `complexity`.
    - This is aimed to increase cohesion.

## Contributing
If you're adding new rules, please add your justification in the readme as well as in the PR.
