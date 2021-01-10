
你可能或多或少听说过这样的言论：

- TypeScript 只适用于大公司的大型项目
- TypeScript 适合多人协作开发，一个人维护的项目就没必要使用了
- TypeScript 学习成本高，开发成本高
- 旧项目是 JavaScript，所以没必要改造成 TypeScript 了

我想说，都 2021 年了，赶紧上车吧，绝大部分项目都应该使用 TypeScript！

大型项目不必多说，TypeScript 的类型系统能够集成到 IDE（或编辑器）中，通过代码补全、代码提示、跳转到定义等功能，极大的提高代码的可维护性，提高开发效率，降低 bug 率。



> 动态类型一时爽，代码重构火葬场。


如果你没有学过 TypeScript，那么可能连这样的接口提示都看不懂了：

![what-is-typescript-tip](../assets/what-is-typescript-tip.png)



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

StackOverflow 2020 开发者调查报告，TypeScript 击败 Python
