# 基本类型

> TypeScript 提供了一系列数据结构，这是 TypeScript 的核心内容。

JavaScript 一共有六种基本类型：布尔值、数值、字符串、`null`、`undefined`、对象，其中对象类型的定义较复杂，后面再详细介绍。

## 布尔值（Boolean）

```ts
let isDone: boolean = false;

// 编译通过
// 后面约定，未强调编译错误的代码片段，默认为编译通过
```

注意，使用构造函数 `Boolean` 创造的对象不是布尔值：

```ts
let createdByNewBoolean1: boolean = new Boolean(1);

// index.ts(1,5): error TS2322: Type 'Boolean' is not assignable to type 'boolean'.
// 后面约定，未强调编译错误的代码片段，默认为编译通过
```

事实上 `new Boolean()` 返回的是一个 `Boolean 对象`：

```ts
let createdByNewBoolean2: Boolean = new Boolean(1);
```

直接使用 `Boolean` 也可以返回一个 `boolean` 类型：

```ts
let createdByBoolean: boolean = Boolean(1);
```

在 TypeScript 中，`boolean` 是 JavaScript 中的基本类型，而 `Boolean` 是 JavaScript 中的构造函数。其他基本类型一样，不再赘述。

## 数值（Number）

```ts
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
```

编译结果：

```js
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
```

> Tip: 数值支持 [ES6 中的二进制和八进制表示法](http://es6.ruanyifeng.com/#docs/number#二进制和八进制表示法)，会被编译为十进制数字。

## 字符串（String）

```ts
let myName: string = 'bob';
let myAge: number = 13;

// Template string
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
```

> Tip: 字符串支持 [ES6 中的模板字符串](http://es6.ruanyifeng.com/#docs/string#模板字符串)

## 空值（Void）

在 TypeScript 中，`null` 和 `undefined` 没有做区分，统一为空值，常用于函数返回值：

```ts
function warnUser(): void {
    alert('This is my warning message');
}
```

声明一个 `void` 类型的变量没有什么大用，因为你只能为它赋予 `undefined` 和 `null`：

```ts
let unusable: void = undefined;
```

事实上，TypeScript 认为使用 `null` 容易出问题，所以 TypeScript 自身的开发规范里面就[规定了不允许使用 `null`](https://basarat.gitbooks.io/typescript/content/docs/tips/null.html)。

## Links

- [英文文档](http://www.typescriptlang.org/docs/handbook/basic-types.html)
- [中文文档](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html)
