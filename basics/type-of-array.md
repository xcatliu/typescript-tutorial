# 数组的类型

在 TypeScript 中，数组类型有多种定义方式，比较灵活。

## 「类型 + 方括号」表示法

最简单的方法是使用「类型 + 方括号」来表示数组：

```ts
let fibonacci: number[] = [1, 1, 2, 3, 5];
```

数组的项中**不允许**出现其他的类型：

```ts
let fibonacci: number[] = [1, '1', 2, 3, 5];

// Type 'string' is not assignable to type 'number'.
```

数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：

```ts
let fibonacci: number[] = [1, 1, 2, 3, 5];
fibonacci.push('8');

// Argument of type '"8"' is not assignable to parameter of type 'number'.
```

上例中，`push` 方法只允许传入 `number` 类型的参数，但是却传了一个 `"8"` 类型的参数，所以报错了。这里 `"8"` 是一个字符串字面量类型，会在后续章节中详细介绍。

## 数组泛型

我们也可以使用数组泛型（Array Generic） `Array<elemType>` 来表示数组：

```ts
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
```

关于泛型，可以参考[泛型](../advanced/generics.md)一章。

## 用接口表示数组

接口也可以用来描述数组：

```ts
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
```

`NumberArray` 表示：只要索引的类型是数字时，那么值的类型必须是数字。

虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。

不过有一种情况例外，那就是它常用来表示类数组。

## 类数组

类数组（Array-like Object）不是数组类型，比如 `arguments`：

```ts
function sum() {
    let args: number[] = arguments;
}

// Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.
```

上例中，`arguments` 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：

```ts
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
```

在这个例子中，我们除了约束当索引的类型是数字时，值的类型必须是数字之外，也约束了它还有 `length` 和 `callee` 两个属性。

事实上常用的类数组都有自己的接口定义，如 `IArguments`, `NodeList`, `HTMLCollection` 等：

```ts
function sum() {
    let args: IArguments = arguments;
}
```

其中 `IArguments` 是 TypeScript 中定义好了的类型，它实际上就是：

```ts
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
```

关于内置对象，可以参考[内置对象](./built-in-objects.md)一章。

## any 在数组中的应用

一个比较常见的做法是，用 `any` 表示数组中允许出现任意类型：

```ts
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
```

## 参考

- [Basic Types # Array](http://www.typescriptlang.org/docs/handbook/basic-types.html#array)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#数组)）
- [Interfaces # Indexable Types](http://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html#数组类型)）
