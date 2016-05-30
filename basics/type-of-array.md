## 数组（Array）

```ts
let list1: number[] = [1, 2, 3];
// or
let list2: Array<number> = [1, 2, 3];
```

数组有两种表示方法，第一种是在元素类型后面接上 `[]`，第二种是使用数组泛型 `Array<elemType>`。关于泛型（Generic），可以参考《？？？》一章。

类数组（Array-like Object）不是数组类型，比如 `arguments`：

```ts
function sum() {
  let args: number[] = arguments;
  // do something
}
```

编译时报错：

```shell
array-args.ts(2,7): error TS2322: Type 'IArguments' is not assignable to type 'number[]'.
  Property 'push' is missing in type 'IArguments'.
```

事实上常见的类数组都有自己的接口（Interface）定义，如 `IArguments`, `NodeList`, `HTMLCollection` 等。

> Tip: 一般我们使用 `Array.prototype.slice.call(argumants)` 或 `[].slice.call(argumants)` 来将一个类数组转化为数组。ES6 提供了 `Array.from` 方法，也可以将类数组转化为数组。在 TypsScript 中使用 `Array.from` 是没有问题的。关于 `Array.from`，可以参考[ES6 中的 Array.from](http://es6.ruanyifeng.com/#docs/array#Array-from)。
