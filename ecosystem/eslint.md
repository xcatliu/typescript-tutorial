# TypeScript 与 ESLint（草稿）

[ESLint][] 是一个代码检查工具，主要用来发现代码错误、统一代码风格，目前已被广泛的应用于各种 JavaScript 项目中。

它通过插件化的特性极大的丰富了适用范围，搭配 [`typescript-eslint-parser`][] 之后，甚至可以用来检查 TypeScript 代码。

## 为什么需要 ESLint

TypeScript 除了是一个编译 ts 文件的工具以外，还可以[作为一个静态代码检查工具使用]()。

TypeScript 会对文件进行语法解析，如果遇到一些语法错误，或使用了未定义的变量，则会报错。

ESLint 也会对文件进行语法解析，它可以对一些代码风格进行约束，发现未定义的变量，但是对于错误的属性或方法引用，却无能为力。

我们对同样一段代码分别运行 `tsc` 和 `eslint`，会得到如下报错信息：

```ts
let myName = 'Tom';

comsole.log(`My name is ${myName}`);
console.log(`My name is ${myNane}`);
console.log(`My name is ${myName.toStrng()}`);
console.log(`My name is ${ myName }`)

// tsc 报错信息：
//
// index.ts(3,1): error TS2552: Cannot find name 'comsole'. Did you mean 'Console'?
// index.ts(4,27): error TS2552: Cannot find name 'myNane'. Did you mean 'myName'?
// index.ts(5,34): error TS2551: Property 'toStrng' does not exist on type 'string'. Did you mean 'toString'?
//
//
// eslint 报错信息：
//
// index.ts
//   3:1   error  'comsole' is not defined        no-undef
//   4:27  error  'myNane' is not defined         no-undef
//   6:25  error  Unexpected space(s) after '${'  template-curly-spacing
//   6:35  error  Unexpected space(s) before '}'  template-curly-spacing
//   6:38  error  Missing semicolon               semi
//
// ✖ 5 problems (5 errors, 0 warnings)
//   3 errors, 0 warnings potentially fixable with the `--fix` option.
```

| 存在的问题 | `tsc` 是否报错 | `eslint` 是否报错 |
| --------- | ------------- | ---------------- |
| `console` 被勿写成了 `comsole` | ✅ | ✅ |
| `myName` 被勿写成了 `myNane` | ✅ | ✅ |
| `toString` 被勿写成了 `toStrng` | ✅️ | ❌ |
| 模版字符串中 `${}` 内前后多出了两个空格 | ❌ | ✅ |
| 少了一个分号 | ❌ | ✅ |

上例中，由于 `eslint` 无法识别 `myName` 存在哪些方法，所以对于拼写错误的 `toString` 没有检查出来。后面两个错误是代码风格，不影响编译，故 `tsc` 没有检查出来。而未定义的变量两者都能检查出来。

值得注意的是，`tsc` 不仅检查出来了代码问题，还非常智能的给出了修改建议。

下面 TypeScirpt 作为一个静态代码检查工具，与 ESLint 的关系图：

![TypeScript 和 ESLint 的关系](../assets/typescript-eslint.png)

上图中，静态代码检查包括了很多种，其中 TypeScirpt 与 ESLint 有重叠的部分，也有各自独立的部分，虽然发现代码错误比统一的代码风格更重要，但是当一个项目越来越庞大，开发人员也越来越多的时候，代码风格的约束还是必不可少的。

下面我们就来一步一步给我们的 TypeScript 项目添加 ESLint 检查。

## 安装

首先，我们需要安装 ESLint：

```bash
npm install -g eslint
```

以上命令会在全局环境下安装 `eslint` 命令，安装完成之后，我们就可以在任何地方执行 `eslint` 命令了。

由于 ESLint 默认使用 [Espree](https://github.com/eslint/espree) 进行语法解析，无法识别 TypeScript 的一些语法，故我们需要安装 `typescript-eslint-parser`，替代掉默认的解析器：

```bash
npm install -g typescript-eslint-parser
```

## 创建配置文件

如果没有创建配置文件，那么

- 使用 ESLint 加上

运行 eslint 时报错 Cannot find module 'typescript-eslint-parser'

你运行的是全局的 eslint，需要运行 `./node_modules/.bin/eslint xxx.ts'

不支持某些 规则，比如 no-undef

有冲突的规则，比如 spaced-comment


cannot read property type of null
react 规则不可用


react/sort-comp type-annotations

[ESLint]: https://eslint.org/
[`typescript-eslint-parser`]: https://github.com/eslint/typescript-eslint-parser