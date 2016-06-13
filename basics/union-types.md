# 联合类型（Union Types）

> 联合类型表示支持多种类型。

## 简单的例子

```ts
let myFavoriteNumber: string | number = 'seven';
myFavoriteNumber = 25;
```

```ts
let myFavoriteNumber: string | number = 'seven';
myFavoriteNumber = true;

// index.ts(2,1): error TS2322: Type 'boolean' is not assignable to type 'string | number'.
//   Type 'boolean' is not assignable to type 'number'.
```

联合类型使用 `|` 分隔每个类型。这里的 `string | number` 的含义就是允许 `myFavoriteNumber` 的类型是 `string` 或者 `number` 但是不能是其他类型。

## 访问联合类型的属性或方法

如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的属性或方法：

```ts
let myFavoriteNumber: string | number = 'seven';
myFavoriteNumber.slice(' ');

// index.ts(2,18): error TS2339: Property 'slice' does not exist on type 'string | number'.
```

虽然 `string` 有 `slice` 方法，但是 `number` 没有 `slice` 方法，所以这里会报错。只能调用 `string` 和 `number` 共有的方法：

```ts
let myFavoriteNumber: string | number = 'seven';
myFavoriteNumber.toString();
```

## Links

- [Handbook - Advanced Types # Union Types](http://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types)
- [中文手册 - 高级类型 # 联合类型](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#联合类型)
