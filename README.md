# TypeScript 入门教程

[![Build Status](https://travis-ci.org/xcatliu/typescript-tutorial.svg?branch=master)](https://travis-ci.org/xcatliu/typescript-tutorial) [![Greenkeeper badge](https://badges.greenkeeper.io/xcatliu/typescript-tutorial.svg)](https://greenkeeper.io/)

从 JavaScript 程序员的角度总结思考，循序渐进的理解 TypeScript。

## 关于本书

- [在线阅读](https://ts.xcatliu.com/)（部署在 [GitBook](https://www.gitbook.com/book/xcatliu/typescript-tutorial/details) 上，可能需要翻墙）
- [在线阅读（GitHub 版）](https://github.com/xcatliu/typescript-tutorial/blob/master/README.md)
- [GitHub 地址][GitHub]
- 作者：[xcatliu](https://github.com/xcatliu/)
- 官方 QQ 群：[加入 QQ 群 767142358](https://jq.qq.com/?_wv=1027&k=5nkkFCl)

本书是作者在学习 [TypeScript] 后整理的学习笔记。

随着对 TypeScript 理解的加深和 TypeScript 社区的发展，本书也会做出相应的更新，欢迎大家 [Star 收藏][GitHub]。

- 发现文章内容有问题，可以直接在页面下方评论
- 对项目的建议，可以[提交 issue](https://github.com/xcatliu/typescript-tutorial/issues/new) 向作者反馈
- 欢迎直接提交 pull-request 参与贡献

## 为什么要写本书

TypeScript 虽然有[官方手册][Handbook]及其[非官方中文版][中文手册]，但是它每一章都希望能详尽的描述一个概念，导致前面的章节就会包含很多后面才会学习到的内容，而有些本该一开始就了解的基础知识却在后面才会涉及。如果是初学者，可能需要阅读多次才能理解。所以它更适合用来查阅，而不是学习。

与官方手册不同，本书着重于从 JavaScript 程序员的角度总结思考，循序渐进的理解 TypeScript，希望能给大家一些帮助和启示。

由于一些知识点与官方手册重合度很高，本书会在相应章节推荐直接阅读中文手册。

## 关于 TypeScript

[TypeScript] 是 JavaScript 的一个超集，主要提供了**类型系统**和**对 ES6 的支持**，它由 Microsoft 开发，代码[开源于 GitHub](https://github.com/Microsoft/TypeScript) 上。

它的第一个版本发布于 2012 年 10 月，经历了多次更新后，现在已成为前端社区中不可忽视的力量，不仅在 Microsoft 内部得到广泛运用，而且 Google 的 [Angular2](https://angular.io/) 也使用了 TypeScript 作为开发语言。

## 适合人群

本书适合以下人群

- 熟悉 JavaScript，至少阅读过一遍[《JavaScript 高级程序设计》](https://book.douban.com/subject/10546125/)
- 了解 ES6，推荐阅读 [ECMAScript 6 入门]
- 了解 Node.js，会用 npm 安装及使用一些工具
- 想了解 TypeScript 或者想对 TypeScript 有更深的理解

本书**不适合**以下人群

- 没有系统学习过 JavaScript
- 已经能够很熟练的运用 TypeScript

## 评价

> 《TypeScript 入门教程》全面介绍了 TS 强大的类型系统，完整而简洁，示例丰富，比官方文档更易读，非常适合作为初学者学习 TS 的第一本书。
>
> —— [阮一峰](https://github.com/ruanyf)

## 目录

- [前言](README.md)
- [简介](introduction/README.md)
  - [什么是 TypeScript](introduction/what-is-typescript.md)
  - [安装 TypeScript](introduction/get-typescript.md)
  - [Hello TypeScript](introduction/hello-typescript.md)
- [基础](basics/README.md)
  - [原始数据类型](basics/primitive-data-types.md)
  - [任意值](basics/any.md)
  - [类型推论](basics/type-inference.md)
  - [联合类型](basics/union-types.md)
  - [对象的类型——接口](basics/type-of-object-interfaces.md)
  - [数组的类型](basics/type-of-array.md)
  - [函数的类型](basics/type-of-function.md)
  - [类型断言](basics/type-assertion.md)
  - [声明文件](basics/declaration-files.md)
  - [内置对象](basics/built-in-objects.md)
- [进阶](advanced/README.md)
  - [类型别名](advanced/type-aliases.md)
  - [字符串字面量类型](advanced/string-literal-types.md)
  - [元组](advanced/tuple.md)
  - [枚举](advanced/enum.md)
  - [类](advanced/class.md)
  - [类与接口](advanced/class-and-interfaces.md)
  - [泛型](advanced/generics.md)
  - [声明合并](advanced/declaration-merging.md)
  - [扩展阅读](advanced/further-reading.md)
- [工程](engineering/README.md)
  - [代码检查](engineering/lint.md)
- [感谢](thanks/README.md)

## 版权许可

本书采用「保持署名—非商用」创意共享 4.0 许可证。

只要保持原作者署名和非商用，您可以自由地阅读、分享、修改本书。

详细的法律条文请参见[创意共享](http://creativecommons.org/licenses/by-nc/4.0/)网站。

## 相关资料

- [TypeScript 官网][TypeScript]
- [Handbook]（[中文版][中文手册]）
- [ECMAScript 6 入门]

---

- [下一章：简介](introduction/README.md)

[GitHub]: https://github.com/xcatliu/typescript-tutorial
[TypeScript]: http://www.typescriptlang.org/
[Handbook]: http://www.typescriptlang.org/docs/handbook/basic-types.html
[中文手册]: https://zhongsp.gitbooks.io/typescript-handbook/content/
[ECMAScript 6 入门]: http://es6.ruanyifeng.com/
