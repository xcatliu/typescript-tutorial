# 任意值

任意值（Any）用来表示允许赋值为任意类型。

## 什么是任意值类型

如果是一个普通类型，在赋值过程中改变类型是不被允许的：

```ts
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

但如果是 `any` 类型，则允许被赋值为任意类型。

```ts
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
```

## 任意值的属性和方法

在任意值上访问任何属性都是允许的：

```ts
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
```

也允许调用任何方法：

```ts
let anyThing: any = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
```

可以认为，**声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值**。

## 未声明类型的变量

**变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型**：

```ts
let something;
something = 'seven';
something = 7;

something.setName('Tom');
```

等价于

```ts
let something: any;
something = 'seven';
something = 7;

something.setName('Tom');
```

## 参考

- [Basic Types # Any](http://www.typescriptlang.org/docs/handbook/basic-types.html#any)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#任意值)）

---

- [上一章：原始数据类型](primitive-data-types.md)
- [下一章：类型推论](type-inference.md)
