# 任意值

> 任意值（Any）用来表示允许赋值为任意类型。

## 简单的例子

如果是一个普通类型，在赋值过程中改变类型是不被允许的：

```ts
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

但是如果是 `any` 类型，则可以改变类型：

```ts
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
```

## 常用的场景

`any` 常用于以下场景，将在后面的章节中详细介绍：

- [对象中的可选属性](https://xcatliu.gitbooks.io/from-javascript-to-typescript/content/basics/type-of-object-interfaces.html#可选的属性)
- [any 在数组中的应用](https://xcatliu.gitbooks.io/from-javascript-to-typescript/content/basics/type-of-array.html#any-在数组中的应用)

## Links

- [Handbook - Basic Types](http://www.typescriptlang.org/docs/handbook/basic-types.html#any)
- [中文文档 - 基础类型](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#任意值)
