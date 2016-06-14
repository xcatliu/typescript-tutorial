# 声明文件（.d.ts）

> 当使用第三方库时，我们需要引用它的声明文件。

## 什么是声明文件

假如我们想使用第三方库，比如 jQuery，我们通常这样获取一个 `id` 是 `foo` 的元素：

```js
$('#foo');
// or
jQuery('#foo');
```

但是在 TypeScript 中，我们并不知道 `$` 或 `jQuery` 是什么东西：

```ts
jQuery('#foo');

// index.ts(1,1): error TS2304: Cannot find name 'jQuery'.
```

这时，我们需要使用 `declare` 关键字来定义它的类型，帮助 TypeScript 判断我们传入的参数类型对不对：

```ts
declare var jQuery: (string) => any;

jQuery('#foo');
```

也可以将这个类型声明放到一个单独的文件中，这就是声明文件：

```ts
// jQuery.d.ts

declare var jQuery: (string) => any;
```

> Tip: 我们约定声明文件以 `.d.ts` 为后缀。

然后在使用到的文件的开头，用「三斜线指令」表示引用的声明文件：

```ts
/// <reference path="./jQuery.d.ts" />

jQuery('#foo');
```

这就是声明文件的用法。

## 第三方声明文件

当然，jQuery 的声明文件不需要我们定义了，已经有人帮我们定义好了：[jquery.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/jquery/jquery.d.ts)。

我们可以下载下来使用，也可以使用 `typing` 方便的获取任何第三方库的声明文件。

关于 `typing` 的使用方法，可以参考《typing》一章。

## Links

- [Handbook - Writing Declaration Files](http://www.typescriptlang.org/docs/handbook/writing-declaration-files.html)
- [中文手册 - 书写 d.ts 文件](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Writing%20Definition%20Files.html)
- [Handbook - Triple-Slash Directives](http://www.typescriptlang.org/docs/handbook/triple-slash-directives.html)
- [中文手册 - 三斜线指令](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Triple-Slash%20Directives.html)
