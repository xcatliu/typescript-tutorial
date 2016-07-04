# 元组（Tuple）

> 在 TypeScript 中，元组类型表示一些特定类型组合成的数组类型。

## 简单的例子

定义一对值分别为 `string` 和 `number` 的元组：

```ts
let xcatliu: [string, number] = ['Xcat Liu', 25];
```

当赋值或访问一个已知索引的元素时，会得到正确的类型：

```ts
let xcatliu: [string, number];
xcatliu[0] = 'Xcat Liu';
xcatliu[1] = 25;

xcatliu[0].slice(1);
xcatliu[1].toFixed(2);
```

即使只赋值其中一项也可以：

```ts
let xcatliu: [string, number];
xcatliu[0] = 'Xcat Liu';
```

但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。

```ts
let xcatliu: [string, number];
xcatliu = ['Xcat Liu', 25];
```

```ts
let xcatliu: [string, number] = ['Xcat Liu'];

// index.ts(1,5): error TS2322: Type '[string]' is not assignable to type '[string, number]'.
//   Property '1' is missing in type '[string]'.
```

```ts
let xcatliu: [string, number];
xcatliu = ['Xcat Liu'];
xcatliu[1] = 25;

// index.ts(2,1): error TS2322: Type '[string]' is not assignable to type '[string, number]'.
//   Property '1' is missing in type '[string]'.
```

## 越界的元素

当赋值给越界的元素时，它类型会被限制为元组中每个类型的联合类型：

```ts
let xcatliu: [string, number];
xcatliu = ['Xcat Liu', 25, 'http://xcatliu.com/'];
```

```ts
let xcatliu: [string, number];
xcatliu = ['Xcat Liu', 25];
xcatliu.push('http://xcatliu.com/');
xcatliu.push(true);

// index.ts(4,14): error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
//   Type 'boolean' is not assignable to type 'number'.
```

当访问一个越界的元素，也会识别为元组中每个类型的联合类型：

```ts
let xcatliu: [string, number];
xcatliu = ['Xcat Liu', 25, 'http://xcatliu.com/'];

console.log(xcatliu[2].slice(1));

// index.ts(4,24): error TS2339: Property 'slice' does not exist on type 'string | number'.
```

之前提到过，[如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的属性或方法。](https://xcatliu.gitbooks.io/from-javascript-to-typescript/content/basics/union-types.html#访问联合类型的属性或方法)

> Tip: 元组的概念来源于 [C#][C# Tuple]。区别是，C# 中的元组是只读的。

## Links

- [Handbook - Basic Types # Tuple](http://www.typescriptlang.org/docs/handbook/basic-types.html#tuple)
- [中文手册 - 基础类型 # 元组 Tuple](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#元组-tuple)
- [C# Tuple]

[C# Tuple]: https://msdn.microsoft.com/en-us/library/system.tuple(v=vs.110).aspx
