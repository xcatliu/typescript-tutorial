# 初识

在代码中学习，我们从一个简单的例子开始。

## 安装 TypeScript

TypeScript 可以很方便的在各种环境下运行。本书涉及到编译的部分默认都使用命令行工具，如需了解如何在其他编辑器或 IDE 中使用 TypeScript，可以参阅《？？？》一章。

TypeScript 的命令行工具安装方法如下：

```shell
npm install -g typescript
```

安装完成之后，就有了 `tsc` 命令。编译一个 TypeScript 文件很简单：

```shell
tsc helloworld.ts
```

> Tip: 我们约定使用 TypeScript 编写的文件以 `.ts` 为后缀（如果在 React 中使用 TypeScript，那么我们约定使用 `.tsx` 后缀）。

### Greeter.ts

将以下代码复制到 `greeter.ts` 中：

```ts
function greeter(person: string) {
    return 'Hello, ' + person;
}

let user = 'Jane User';
document.body.innerHTML = greeter(user);
```

然后执行

```shell
tsc greeter.ts
```

这时候会生成一个编译好的文件 `greeter.js`：

```js
function greeter(person) {
    return 'Hello, ' + person;
}
var user = 'Jane User';
document.body.innerHTML = greeter(user);
```

TypeScript 中，使用 `:` 指定变量的类型，`:` 的前后有没有空格都可以。

上述例子中，我们用 `:` 指定 `person` 参数类型为 `string`。但是编译为 js 之后，并没有什么检查的代码被插入进来。

**TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。**

> Tip: `let` 是 ES6 中的关键字，和 `var` 类似，用于定义一个局部变量，可以参阅 [let 和 const 命令](http://es6.ruanyifeng.com/#docs/let)。

下面尝试把这段代码编译一下：

```ts
function greeter2(person: string) {
    return 'Hello, ' + person;
}

let user2 = [0, 1, 2];
document.body.innerHTML = greeter2(user2);
```

编译的时候，报了如下错误：

```shell
greeter.ts(6,35): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```

但是还是生成了 js 文件：

```js
function greeter(person) {
    return 'Hello, ' + person;
}
var user = [0, 1, 2];
document.body.innerHTML = greeter(user);
```

TypeScript 编译的时候即使报错了，还是会生成编译结果，我们仍然可以使用这个编译之后的文件。

> 如果要在报错的时候终止 js 文件的生成，可以在 `tsconfig.json` 中配置 ？？？ 即可。关于 `tsconfig.json`，请参阅《？？？》一章。
