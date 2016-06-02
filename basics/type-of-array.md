# 数组的类型

> 数组类型有多种定义方式，比较灵活

## 「类型+方括号」表示法

最简单的方法是使用「类型+方括号」来表示数组：

```ts
let fibonacci: number[] = [1, 1, 2, 3, 5];
```

数组的项中不允许出现其他的类型：

```ts
let fibonacci: number[] = [1, '1', 2, 3, 5];

// index.ts(1,5): error TS2322: Type '(number | string)[]' is not assignable to type 'number[]'.
//   Type 'number | string' is not assignable to type 'number'.
//     Type 'string' is not assignable to type 'number'.
```

此时 `[1, '1', 2, 3, 5]` 的类型被推断为 `(number | string)[]`，这是联合类型和数组的结合。

```ts
let fibonacci: number[] = [1, 1, 2, 3, 5];
fibonacci.push('8');

// index.ts(2,16): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
```

## 数组泛型（Generic）

也可以使用数组泛型 `Array<elemType>` 来表示数组：

```ts
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
```

关于泛型，可以参考《？？？》一章。

## 用接口表示数组

接口也可以用来描述数组：

```ts
interface NumberArray {
  [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
```

`NumberArray` 表示：只要 `index` 的类型是 `number`，那么值的类型必须是 `number`。

## any 在数组中的应用

一个比较常见的做法是，用 `any` 表示数组中允许出现任意类型：

```ts
let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];
```

## 类数组

类数组（Array-like Object）不是数组类型，比如 `arguments`：

```ts
function sum() {
  let args: number[] = arguments;
}

// index.ts(2,7): error TS2322: Type 'IArguments' is not assignable to type 'number[]'.
//   Property 'push' is missing in type 'IArguments'.
```

事实上常见的类数组都有自己的接口定义，如 `IArguments`, `NodeList`, `HTMLCollection` 等：

```ts
function sum() {
  let args: IArguments = arguments;
}
```

> Tip: 一般我们使用 `Array.prototype.slice.call(argumants)` 或 `[].slice.call(argumants)` 来将一个类数组转化为数组。ES6 中可以使用 [Array.from][ES6 中的 Array.from] 或者 [rest 参数][ES6 中的 rest 参数]实现类似功能。

## Links

- [Handbook - Basic Types # Array](http://www.typescriptlang.org/docs/handbook/basic-types.html#array)
- [Handbook - Interfaces # Indexable Types](http://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types)
- [中文手册 - 基础类型 # 数组](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#数组)
- [中文手册 - 接口 # 数组类型](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html#数组类型)
- [ES6 中的 Array.from]
- [ES6 中的 rest 参数]

[ES6 中的 Array.from]: http://es6.ruanyifeng.com/#docs/array#Array-from
[ES6 中的 rest 参数]: http://es6.ruanyifeng.com/#docs/function#rest参数
