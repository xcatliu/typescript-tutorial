# 一些基本概念

> TypeScript 中有一些基本概念，需要先有一个初步的理解，后续的章节中再深入。

## 任意值（Any）类型

> 任意值（Any）用来表示允许赋值为任意类型。

如果是一个普通类型，在赋值过程中改变类型是不被允许的：

```ts
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

但是如果是 `any` 类型，则允许被赋值为任意类型。

```ts
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
```

`any` 的应用很广泛，后面的章节中会逐一介绍，这里是一个汇总：

- [对象中的可选属性](https://xcatliu.gitbooks.io/from-javascript-to-typescript/content/basics/type-of-object-interfaces.html#可选的属性)
- [any 在数组中的应用](https://xcatliu.gitbooks.io/from-javascript-to-typescript/content/basics/type-of-array.html#any-在数组中的应用)

## 类型推论

> 如果没有明确的指定类型，那么 TypeScript 会依照类型推论的规则推断出一个类型。

以下代码虽然没有指定类型，但是会在编译的时候报错：

```ts
let myName = 'xcatliu';
myName = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

事实上，它等价于：

```ts
let myName: string = 'xcatliu';
myName = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

TypeScript 会在没有明确的指定类型的时候，这就是类型推论。

如果定义的时候没有赋值，则会推断成 `any` 类型：

```ts
let myName;
myName = 'xcatliu';
myName = 7;
```

大部分类型推论都很容易判断，但是有时候也挺复杂，后面的章节遇到的时候再进行说明，下面是与类型推论有关的章节的汇总：

- [函数表达式中的类型推论](https://xcatliu.gitbooks.io/from-javascript-to-typescript/content/basics/type-of-function.html#函数表达式（function-expression）)

## Links

- [Handbook - Basic Types # Any](http://www.typescriptlang.org/docs/handbook/basic-types.html#any)
- [Handbook - Type Inference](http://www.typescriptlang.org/docs/handbook/type-inference.html)
- [中文手册 - 基础类型 # 任意值](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#任意值)
- [中文手册 - 类型推论](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html)
