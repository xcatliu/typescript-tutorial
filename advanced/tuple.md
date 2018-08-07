# 元组

数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。

元组起源于函数编程语言（如 F#）,在这些语言中频繁使用元组。

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

也可以只赋值其中一项：

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

当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：

```ts
let xcatliu: [string, number];
xcatliu = ['Xcat Liu', 25];
xcatliu.push('http://xcatliu.com/');
xcatliu.push(true);

// index.ts(4,14): error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
//   Type 'boolean' is not assignable to type 'number'.
```


## 参考

- [Basic Types # Tuple](http://www.typescriptlang.org/docs/handbook/basic-types.html#tuple)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#元组-tuple)）

---

- [上一章：字符串字面量类型](string-literal-types.md)
- [下一章：枚举](enum.md)
