# 函数的类型

> [函数是 JavaScript 中的一等公民。](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch2.html)

## 函数声明（Function Declaration）

在 JavaScript 中，有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式（Function Expression）：

```js
// 函数声明（Function Declaration）
function sum(x, y) {
  return x + y;
}

// 函数表达式（Function Expression）
let mySum = function (x, y) {
  return x + y;
};
```

一个函数是有输入和输出的，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：

```ts
function sum(x: number, y: number): number {
  return x + y;
}
```

需要注意的是，输入多余的（或者少于要求的）参数，是不被允许的：

```ts
function sum(x: number, y: number): number {
  return x + y;
}
sum(1, 2, 3);

// index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.
```

```ts
function sum(x: number, y: number): number {
  return x + y;
}
sum(1);

// index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.
```

## 函数表达式（Function Expression）

如果要我们现在写一个对函数表达式的定义，可能会写成这样：

```ts
let mySum = function (x: number, y: number): number {
  return x + y;
};
```

这是可以通过编译的，不过事实上，上面的代码等价于：

```ts
let mySum;
mySum = function (x: number, y: number): number {
  return x + y;
};
```

其中 `mySum` 的类型是通过赋值操作推断出来的。如果需要我们手动给 `mySum` 添加类型，则应该是这样：

```ts
let mySum: (x: number, y: number) => number;
mySum = function (x: number, y: number): number {
  return x + y;
};
```

也等价于：

```ts
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};
```

在 TypeScript 的类型定义中，`=>` 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

> Tip: `=>` 在 ES6 中叫箭头函数，应用十分广泛，可以参考 [ES6 中的箭头函数]。

## 接口中函数的定义

在接口中，需要这样定义一个函数：

```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}
```

## 可选参数

前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？

与接口中的可选属性类似，我们用 `?` 表示可选的参数：

```ts
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}
let xcatliu = buildName('Xcat', 'Liu');
let xcat = buildName('Xcat');
```

需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了：

```ts
function buildName(firstName?: string, lastName: string) {
  if (firstName) {
    return firstName + " " + lastName;
  } else {
    return lastName;
  }
}
let xcatliu = buildName('Xcat', 'Liu');
let xcat = buildName(undefined, 'Xcat');

// index.ts(1,40): error TS1016: A required parameter cannot follow an optional parameter.
```

## 参数默认值

在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：

```ts
function buildName(firstName: string, lastName: string = 'Liu') {
  return firstName + " " + lastName;
}
let xcatliu = buildName('Xcat', 'Liu');
let xcat = buildName('Xcat');
```

此时就不受「可选参数必须接在必需参数后面」的限制了：

```ts
function buildName(firstName: string = 'Xcat', lastName: string) {
  return firstName + " " + lastName;
}
let xcatliu = buildName('Xcat', 'Liu');
let xcat = buildName(undefined, 'Xcat');
```

> Tip: 关于默认参数，可以参考 [ES6 中函数参数的默认值]。

## 剩余参数（rest 参数）

ES6 中，可以使用 `...rest` 的方式获取函数中的剩余参数：

```js
function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);
```

事实上，`rest` 是一个数组。所以我们用数组的类型来定义它：

```ts
function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
    array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);
```

> Tip: 注意 rest 参数只能是最后一个参数，关于 rest 参数，可以参考 [ES6 中的 rest 参数]。

## Links

- [Handbook - Functions](http://www.typescriptlang.org/docs/handbook/functions.html)
- [Handbook - Functions # Function Types](http://www.typescriptlang.org/docs/handbook/interfaces.html#function-types)
- [中文文档 - 函数](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Functions.html)
- [中文文档 - 接口 # 函数类型](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html#函数类型)
- [JS 函数式编程指南](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/)
- [ES6 中的箭头函数]
- [ES6 中函数参数的默认值]
- [ES6 中的 rest 参数]

[ES6 中的箭头函数]: http://es6.ruanyifeng.com/#docs/function#箭头函数
[ES6 中函数参数的默认值]: http://es6.ruanyifeng.com/#docs/function#函数参数的默认值
[ES6 中的 rest 参数]: http://es6.ruanyifeng.com/#docs/function#rest参数
