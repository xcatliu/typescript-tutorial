# Greeter

## Installation

首先我们使用 npm 安装 TypeScript 的编译工具：

```shell
npm install -g typescript
```

安装完成之后，就有了 `tsc` 命令。

> Tip: 我们约定使用 TypeScript 编写的文件以 .ts 为后缀。

将以下代码复制到 `greeter.ts` 中：

```js
function greeter(person: string) {
    return "Hello, " + person;
}

var user = "Jane User";

document.body.innerHTML = greeter(user);
```

然后执行

```shell
tsc greeter.ts
```

这时候会生成一个编译好的文件 `greeter.js`：

```js
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
```

编译前的文件中，我们用 `:` 指定变量类型为 `string`，但是编译为 js 之后，并没有什么检查的代码被插入进来。

> Tip: TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。

下面尝试把这段代码编译一下：

```js
function greeter(person: string) {
    return "Hello, " + person;
}

var user = [0, 1, 2];

document.body.innerHTML = greeter(user);
```

编译的时候，报了如下错误：

```shell
greeter.ts(7,35): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```

但是还是生成了 js 文件：

```js
function greeter(person) {
    return "Hello, " + person;
}
var user = [0, 1, 2];
document.body.innerHTML = greeter(user);
```

> Tip: TypeScript 编译的时候即使报错了，还是会生成编译结果，我们仍然可以使用这个编译之后的文件。
