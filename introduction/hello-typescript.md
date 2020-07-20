# Hello TypeScript

我们从一个简单的例子开始。

将以下代码复制到 `hello.ts` 中：

```ts
function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));
```

然后执行

```bash
tsc hello.ts
```

这时候会生成一个编译好的文件 `hello.js`：

```js
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
console.log(sayHello(user));
```

在 TypeScript 中，我们使用 `:` 指定变量的类型，`:` 的前后有没有空格都可以。

上述例子中，我们用 `:` 指定 `person` 参数类型为 `string`。但是编译为 js 之后，并没有什么检查的代码被插入进来。

这是因为 **TypeScript 只会在编译时对类型进行静态检查，如果发现有错误，编译的时候就会报错**。而在运行时，与普通的 JavaScript 文件一样，不会对类型进行检查。

如果我们需要保证运行时的参数类型，还是得手动对类型进行判断：

```ts
function sayHello(person: string) {
    if (typeof person === 'string') {
        return 'Hello, ' + person;
    } else {
        throw new Error('person is not a string');
    }
}

let user = 'Tom';
console.log(sayHello(user));
```

> `let` 是 ES6 中的关键字，和 `var` 类似，用于定义一个局部变量，可以参阅 [let 和 const 命令](http://es6.ruanyifeng.com/#docs/let)。

下面尝试把这段代码编译一下：

```ts
function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = [0, 1, 2];
console.log(sayHello(user));
```

编辑器中会提示错误，编译的时候也会出错：

```bash
hello.ts:6:22 - error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```

但是还是生成了 js 文件：

```js
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = [0, 1, 2];
console.log(sayHello(user));
```

这是因为 **TypeScript 编译的时候即使报错了，还是会生成编译结果**，我们仍然可以使用这个编译之后的文件。

如果要在报错的时候终止 js 文件的生成，可以在 `tsconfig.json` 中配置 `noEmitOnError` 即可。关于 `tsconfig.json`，请参阅[官方手册](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html)）。
