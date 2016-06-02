# 一些基本概念

> TypeScript 中有一些基本概念，需要先有一个初步的理解，后续的章节中再深入。

## 任意值（Any）

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

下面是与任意值相关章节的汇总：

- [对象中的可选属性](https://xcatliu.gitbooks.io/from-javascript-to-typescript/content/basics/type-of-object-interfaces.html#可选的属性)
- [任意值在数组中的应用](https://xcatliu.gitbooks.io/from-javascript-to-typescript/content/basics/type-of-array.html#any-在数组中的应用)

## 类型推论

> 如果没有明确的指定类型，那么 TypeScript 会依照类型推论的规则推断出一个类型。

以下代码虽然没有指定类型，但是会在编译的时候报错：

```ts
let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

事实上，它等价于：

```ts
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

TypeScript 会在没有明确的指定类型的时候，这就是类型推论。

如果定义的时候没有赋值，则会推断成 `any` 类型：

```ts
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

下面是与类型推论相关章节的汇总：

- [函数表达式中的类型推论](https://xcatliu.gitbooks.io/from-javascript-to-typescript/content/basics/type-of-function.html#函数表达式（function-expression）)

## 联合类型（Union Types）

> 联合类型表示支持多种类型。

```ts
let myFavoriteNumber: string | number = 'seven';
myFavoriteNumber = 25;
```

```ts
let myFavoriteNumber: string | number = 'seven';
myFavoriteNumber = true;

// index.ts(2,1): error TS2322: Type 'boolean' is not assignable to type 'string | number'.
//   Type 'boolean' is not assignable to type 'number'.
```

联合类型使用 `|` 分隔每个类型。这里的 `string | number` 的含义就是允许 `myFavoriteNumber` 的类型是 `string` 或者 `number` 但是不能是其他类型。

如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员：

```ts
let myFavoriteNumber: string | number = 'seven';
myFavoriteNumber.slice(' ');

// index.ts(2,18): error TS2339: Property 'slice' does not exist on type 'string | number'.
```

虽然 `string` 有 `slice` 方法，但是 `number` 没有 `slice` 方法，所以这里会报错。只能调用 `string` 和 `number` 共有的方法：

```ts
let myFavoriteNumber: string | number = 'seven';
myFavoriteNumber.toString();
```

下面是与联合类型相关章节的汇总：

- [数组的类型被推断成了联合类型的数组](https://xcatliu.gitbooks.io/from-javascript-to-typescript/content/basics/type-of-array.html#「类型方括号」表示法)
- [接口中任意属性的类型被推断成了联合类型](https://xcatliu.gitbooks.io/from-javascript-to-typescript/content/basics/type-of-object-interfaces.html#任意属性)
- [元组中越界的元素的类型是所有元素类型的联合类型](https://xcatliu.gitbooks.io/from-javascript-to-typescript/content/advanced/tuple.html#越界的元素)

## Links

- [Handbook - Basic Types # Any](http://www.typescriptlang.org/docs/handbook/basic-types.html#any)
- [Handbook - Type Inference](http://www.typescriptlang.org/docs/handbook/type-inference.html)
- [Handbook - Advanced Types # Union Types](http://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types)
- [中文手册 - 基础类型 # 任意值](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#任意值)
- [中文手册 - 类型推论](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html)
- [中文手册 - 高级类型 # 联合类型](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#联合类型)
