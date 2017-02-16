# 类型推论

如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

## 什么是类型推论

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

TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

**在TypeScript 2.1 之前，如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 `any` 类型而完全不被类型检查**：

```ts
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

**TypeScript 2.1 中，编译器会考虑对 myFavoriteNumber 的最后一次赋值来检查类型**：[例](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#improved-any-inference)

## 参考

- [Type Inference](http://www.typescriptlang.org/docs/handbook/type-inference.html)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html)）
- [TypeScript 2.1 Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html)

---

- [上一章：任意值](any.md)
- [下一章：联合类型](union-types.md)
