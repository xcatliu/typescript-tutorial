# 什么是 TypeScript

> Typed JavaScript at Any Scale.  
> 类型化的 JavaScript，适用于各种规模的项目。

以上描述是[官网][TypeScript]对于 TypeScript 的定义。

它强调了 TypeScript 的两个最重要的特性——类型系统、适用于各种规模。

## TypeScript 的特性

### 类型系统

从 TypeScript 的名字就可以看出来，「类型」是其最核心的特性。

我们知道，JavaScript 是一门非常灵活的编程语言：

- 它没有类型约束，一个变量可能初始化时是字符串，过一会儿又被赋值为数字。
- 由于隐式类型转换的存在，有时候变量的类型很难在运行之前就确定。
- 基于原型的面向对象编程，使得原型上的属性或方法可以在运行时被修改。
- [函数是 JavaScript 中的一等公民](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch2.html)，可以赋值给变量，也可以当作参数或返回值。

这种灵活性就像一把双刃剑，一方面使得 JavaScript 蓬勃发展，无所不能，从 2013 年开始就一直蝉联[最普遍使用的编程语言排行榜](https://insights.stackoverflow.com/survey/2020)冠军；另一方面也使得它的代码质量参次不起，维护成本高，运行时错误多。

而 TypeScript 的类型系统，在很大程度上弥补了 JavaScript 的缺点。

#### 静态类型

类型系统按照类型检查的时机分类，可以分为动态类型和静态类型。

动态类型是指在运行时才会进行类型检查，类型错误会导致运行时的错误。JavaScript 是动态类型，因为缺少了编译期，所以这段代码在运行时才会报错：

```js
let foo = 1;
foo.split(' ');
// 运行时会报错，造成线上 bug
// Uncaught TypeError: foo.split is not a function
```

静态类型是指编译期间就能确定每个变量的类型，类型错误会导致语法错误。TypeScript 是静态类型，上面那段代码在 TypeScript 的编译过程中就会报错了：

```ts
let foo = 1;
foo.split(' ');
// 编译时会报错，无法通过编译
// Property 'split' does not exist on type 'number'.
```

#### 弱类型




## 为什么要用 TypeScript

## TypeScript 的发展历史

首先，我对 TypeScript 的理解如下：

[TypeScript][] 是 JavaScript 的一个超集，主要提供了**类型系统**和**对 ES6 的支持**，它由 Microsoft 开发，代码[开源于 GitHub](https://github.com/Microsoft/TypeScript) 上。

其次引用[官网][TypeScript]的定义：

> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.

翻译成中文即是：

> TypeScript 是 JavaScript 的类型的超集，它可以编译成纯 JavaScript。编译出来的 JavaScript 可以运行在任何浏览器上。TypeScript 编译工具可以运行在任何服务器和任何系统上。TypeScript 是开源的。

## 为什么选择 TypeScript

[TypeScript 官网][TypeScript]列举了一些优势，不过我更愿意自己总结一下：

### TypeScript 增加了代码的可读性和可维护性

- 类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了
- 可以在编译阶段就发现大部分错误，这总比在运行时候出错好
- 增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、代码重构等

### TypeScript 非常包容

- TypeScript 是 JavaScript 的超集，`.js` 文件可以直接重命名为 `.ts` 即可
- 即使不显式的定义类型，也能够自动做出[类型推论](../basics/type-inference.md)
- TypeScript 的类型系统是图灵完备的，可以定义从简单到复杂的几乎一切类型
- 即使 TypeScript 编译报错，也可以生成 JavaScript 文件
- 兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 TypeScript 读取

### TypeScript 拥有活跃的社区

- 大部分第三方库都有提供给 TypeScript 的类型定义文件
- Angular、Vue、VS Code、Ant Design 等等耳熟能详的项目都是使用 TypeScript 编写的
- TypeScript 拥抱了 ES6 规范，支持 ESNext 草案中处于第三阶状态（Stage 3）的特性

### TypeScript 的缺点

任何事物都是有两面性的，我认为 TypeScript 的弊端在于：

- 有一定的学习成本，需要理解接口（Interfaces）、泛型（Generics）、类（Classes）、枚举类型（Enums）等前端工程师可能不是很熟悉的概念
- 短期可能会增加一些开发成本，毕竟要多写一些类型的定义，不过对于一个需要长期维护的项目，TypeScript 能够减少其维护成本
- 集成到构建流程需要一些工作量
- 可能和一些库结合的不是很完美

大家可以根据自己团队和项目的情况判断是否需要使用 TypeScript。

[TypeScript]: http://www.typescriptlang.org/
