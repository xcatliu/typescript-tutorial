# 对象的类型——接口

> 使用接口（Interfaces）来定义对象的类型。

## 什么是接口（Interfaces）

在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implements）。

理解面向对象中的接口，需要对类、继承、抽象类等有相关的概念，感兴趣的朋友可以看看这篇博客：[java提高篇(五)——抽象类与接口]。

TypeScript 中的接口有一些区别。在 TypeScript 中，接口除了可用于对类的一部分行为进行抽象以外，更常用于对「对象的形状（Shape）」进行描述。先举一个简单的例子：

## 简单的例子

```ts
interface Person {
  name: string;
  age: number;
}

let xcatliu: Person = {
  name: 'Xcat Liu',
  age: 25,
};
```

上面的例子中，我们定义了一个接口 `Person`，接着定义了一个变量 `xcatliu`，它的类型是 `Person`。这样，我们就约束了 `xcatliu` 的形状必须和接口 `Person` 一致。

> Tip: 接口的定义一般首字母大写。

如果定义的变量比接口少了一些属性会怎么样呢？

```ts
interface Person {
  name: string;
  age: number;
}

let xcatliu: Person = {
  name: 'Xcat Liu',
};

// index.ts(6,5): error TS2322: Type '{ name: string; }' is not assignable to type 'Person'.
//   Property 'age' is missing in type '{ name: string; }'.
```

如果多了一些属性呢？

```ts
interface Person {
  name: string;
  age: number;
}

let xcatliu: Person = {
  name: 'Xcat Liu',
  age: 25,
  website: 'http://xcatliu.com',
};

// index.ts(9,3): error TS2322: Type '{ name: string; age: number; github: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'github' does not exist in type 'Person'.
```

赋值的时候，变量的形状必须和接口的形状保持一致。

## 可选属性

有时我们希望不要完全匹配一个形状，那么可以用可选属性：

```ts
interface Person {
  name: string;
  age?: number;
}

let xcatliu: Person = {
  name: 'Xcat Liu',
};
```

```ts
interface Person {
  name: string;
  age?: number;
}

let xcatliu: Person = {
  name: 'Xcat Liu',
  age: 25,
};
```

可选属性的含义是该属性可以不存在。

那如果这时候添加了未定义的属性呢？

```ts
interface Person {
  name: string;
  age?: number;
}

let xcatliu: Person = {
  name: 'Xcat Liu',
  age: 25,
  website: 'http://xcatliu.com',
};

// index.ts(9,3): error TS2322: Type '{ name: string; age: number; github: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'github' does not exist in type 'Person'
```

由此可见，即使有可选属性，也不可以添加未定义的属性。

## 任意属性

有时候我们希望一个接口允许有任意的属性，可以使用如下方式：

```ts
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}

let xcatliu: Person = {
  name: 'Xcat Liu',
  website: 'http://xcatliu.com',
};
```

使用 `[propName: string]` 可以定义任意属性是 `string` 的值的类型。

需要注意的是，一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性：

```ts
interface Person {
  name: string;
  age?: number;
  [propName: string]: string;
}

let xcatliu: Person = {
  name: 'Xcat Liu',
  age: 25,
  website: 'http://xcatliu.com',
};

// index.ts(3,3): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; github: string; }' is not assignable to type 'Person'.
//   Index signatures are incompatible.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.
```

```ts
interface Person {
  name: string;
  age?: number;
  [propName: string]: number;
}

let xcatliu: Person = {
  name: 'Xcat Liu',
  age: 25,
  website: 'http://xcatliu.com',
};

// index.ts(2,3): error TS2411: Property 'name' of type 'string' is not assignable to string index type 'number'.
// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; github: string; }' is not assignable to type 'Person'.
//   Index signatures are incompatible.
//     Type 'string | number' is not assignable to type 'number'.
//       Type 'string' is not assignable to type 'number'.
```

此时 `{ name: 'Xcat Liu', age: 25, website: 'http://xcatliu.com' }` 的类型被推断成了 `{ [x: string]: string | number; name: string; age: number; github: string; }`，这是联合类型和接口的结合。

## Links

- [Handbook - Interfaces](http://www.typescriptlang.org/docs/handbook/interfaces.html)
- [中文手册 - 接口](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html)
- [java提高篇(五)——抽象类与接口]

[java提高篇(五)——抽象类与接口]: http://www.cnblogs.com/chenssy/p/3376708.html
