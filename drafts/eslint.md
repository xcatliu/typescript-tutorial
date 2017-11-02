# TypeScript 与 ESLint

ESLint 

运行 eslint 时报错 Cannot find module 'typescript-eslint-parser'

你运行的是全局的 eslint，需要运行 `./node_modules/.bin/eslint xxx.ts'

不支持某些 规则，比如 no-undef

有冲突的规则，比如 spaced-comment


cannot read property type of null

react 规则不可用


react/sort-comp type-annotations