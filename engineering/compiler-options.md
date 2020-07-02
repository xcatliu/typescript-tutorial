# 编译选项

TypeScript 提供了非常多的编译选项，但是官方文档对每一项的解释很抽象，这一章会详细介绍每一个选项的作用，并给出对应的示例。

索引（点击选项跳转到详细介绍）：

选项 | 类型 | 默认值 | 描述
--- | --- | --- | ---
[`allowJs`](#allowjs) | `boolean` | `false` | 允许编译 js 文件
[`allowSyntheticDefaultImports`](#allowsyntheticdefaultimports) | `boolean` | `false` | 允许对不包含默认导出的模块使用默认导入。这个选项不会影响生成的代码，只会影响类型检查。

## allowJs

> 允许编译 js 文件。

设置为 `true` 时，js 文件会被 tsc 编译，否则不会。一般在项目中 js, ts 混合开发时需要设置。

[查看示例](https://github.com/xcatliu/typescript-tutorial/tree/master/examples/compiler-options/01-allowJs)

```bash
# 设置为 true 时，编译后的文件包含 foo.js
├── lib
│   ├── foo.js
│   └── index.js
├── src
│   ├── foo.js
│   └── index.ts
├── package.json
└── tsconfig.json
```

```bash
# 设置为 false 时，编译后的文件不包含 foo.js
├── lib
│   └── index.js
├── src
│   ├── foo.js
│   └── index.ts
├── package.json
└── tsconfig.json
```

## allowSyntheticDefaultImports

> 允许对不包含默认导出的模块使用默认导入。这个选项不会影响生成的代码，只会影响类型检查。

`export = foo` 是 ts 为了兼容 commonjs 创造的语法，它对应于 commonjs 中的 `module.exports = foo`。

在 ts 中，如果要引入一个通过 `export = foo` 导出的模块，标准的语法是 `import foo = require('foo')`，或者 `import * as foo from 'foo'`。

但由于历史原因，我们已经习惯了使用 `import foo from 'foo'`。

这个选项就是为了解决这个问题。当它设置为 `true` 时，允许使用 `import foo from 'foo'` 来导入一个通过 `export = foo` 导出的模块。当它设置为 `false` 时，则不允许，会报错。

当然，我们一般不会在 ts 文件中使用 `export = foo` 来导出模块，而是在[写（符合 commonjs 规范的）第三方库的声明文件](../basics/declaration-files#export-1)时，才会用到 `export = foo` 来导出类型。

比如 React 的声明文件中，就是通过 `export = React` 来导出类型：

```ts
export = React;
export as namespace React;

declare namespace React {
    // 声明 React 的类型
}
```

此时若我们通过 `import React from 'react'` 来导入 react 则会报错，[查看示例](https://github.com/xcatliu/typescript-tutorial/tree/master/examples/compiler-options/02-allowSyntheticDefaultImports)
：

```ts
import React from 'react';
// Module '"typescript-tutorial/examples/compiler-options/02-allowSyntheticDefaultImports/false/node_modules/@types/react/index"' can only be default-imported using the 'esModuleInterop' flagts(1259)
```

解决办法就是将 `allowSyntheticDefaultImports` 设置为 `true`。
