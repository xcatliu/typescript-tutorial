# 元组（Tuple）

> 在 TypeScript 中，元组类型表示一些特定类型组合成的数组类型。

## 简单的例子

定义一对值分别为 `string` 和 `number` 的元组：

```ts
let xcatliu: [string, number];
xcatliu = ['Xcat Liu', 25];
```

当访问一个已知索引的元素，会得到正确的类型：

```ts
let xcatliu: [string, number];
xcatliu = ['Xcat Liu', 25, 'http://xcatliu.com/'];

xcatliu[1] = 26;
console.log(xcatliu[0].split(' '));
console.log(xcatliu[1].toFixed(2));
```

## 越界的元素

越界的元素的类型会被限制为元组中每个类型的联合类型：

```ts
let xcatliu: [string, number];
xcatliu = ['Xcat Liu', 25, 'http://xcatliu.com/'];
```

```ts
let xcatliu: [string, number];
xcatliu = ['Xcat Liu', 25, 'http://xcatliu.com/'];
xcatliu.push(true);

// index.ts(3,14): error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
//   Type 'boolean' is not assignable to type 'number'.
```

当访问一个越界的元素，会识别为元组中每个类型的联合类型：

```ts
let xcatliu: [string, number];
xcatliu = ['Xcat Liu', 25, 'http://xcatliu.com/'];

console.log(xcatliu[2].slice(1));

// index.ts(4,24): error TS2339: Property 'slice' does not exist on type 'string | number'.
```

前面提到过，[如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。](https://xcatliu.gitbooks.io/from-javascript-to-typescript/content/basics/basic-types.html#联合类型（Union+Types）)

> Tip: 元组的概念来源于 [C#](https://msdn.microsoft.com/en-us/library/system.tuple(v=vs.110).aspx) 和 [Python](http://www.tutorialspoint.com/python/python_tuples.htm)。区别是，C# 和 Python 中的元组都是只读的。

## Links

- [Handbook - Basic Types # Tuple](http://www.typescriptlang.org/docs/handbook/basic-types.html#tuple)
- [中文手册 - 基础类型 # 元组 Tuple](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#元组-tuple)
