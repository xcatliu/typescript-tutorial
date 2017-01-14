# 对象的类型——接口

在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

## 什么是接口（Interfaces）

在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implements）。

TypeScript 中的接口是一个非常灵活的概念，除了可用于[对类的一部分行为进行抽象](../advanced/use-of-class.md#实现接口)以外，也常用于对「对象的形状（Shape）」进行描述。

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

接口一般首字母大写。

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

可见，赋值的时候，变量的形状必须和接口的形状保持一致。

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

// examples/playground/index.ts(9,3): error TS2322: Type '{ name: string; age: number; website: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'website' does not exist in type 'Person'.
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

上面的例子中，任意属性的值允许是 `string`，但是可选属性 `age` 的值却是 `number`，`number` 不是 `string` 的子属性，所以报错了。

另外，在报错信息中可以看出，此时 `{ name: 'Xcat Liu', age: 25, website: 'http://xcatliu.com' }` 的类型被推断成了 `{ [x: string]: string | number; name: string; age: number; github: string; }`，这是联合类型和接口的结合。

## 参考 

- [Handbook - Interfaces](http://www.typescriptlang.org/docs/handbook/interfaces.html) | [中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html)
