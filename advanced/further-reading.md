# 扩展阅读

此处记录了[官方手册](http://www.typescriptlang.org/docs/handbook/basic-types.html)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/)）中包含，但是本书未涉及的概念。

我认为它们是一些不重要或者不属于 TypeScript 的概念，所以这里只给出一个简单的释义，详细内容可以点击链接深入理解。

- [Never](http://www.typescriptlang.org/docs/handbook/basic-types.html#never)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#never)）：永远不存在值的类型，一般用于错误处理函数
- [Variable Declarations](http://www.typescriptlang.org/docs/handbook/variable-declarations.html)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Variable%20Declarations.html)）：使用 `let` 和 `const` 替代 `var`，这是 [ES6 的知识](http://es6.ruanyifeng.com/#docs/let)
- [`this`](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Functions.html#this)：箭头函数的运用，这是 [ES6 的知识](http://es6.ruanyifeng.com/#docs/function)
- [Using Class Types in Generics](http://www.typescriptlang.org/docs/handbook/generics.html#using-class-types-in-generics)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Generics.html#在泛型里使用类类型)）：创建工厂函数时，需要引用构造函数的类类型
- [Best common type](http://www.typescriptlang.org/docs/handbook/type-inference.html#best-common-type)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html#最佳通用类型)）：数组的类型推论
- [Contextual Type](http://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-type)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html#上下文类型)）：函数输入的类型推论
- [Type Compatibility](http://www.typescriptlang.org/docs/handbook/type-compatibility.html)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Compatibility.html)）：允许不严格符合类型，只需要在一定规则下兼容即可
- [Advanced Types](http://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#交叉类型（intersection-types）)）：使用 `&` 将多种类型的共有部分叠加成一种类型
- [Type Guards and Differentiating Types](http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#类型保护与区分类型（type-guards-and-differentiating-types）)）：联合类型在一些情况下被识别为特定的类型
- [Discriminated Unions](http://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#可辨识联合（discriminated-unions）)）：使用 `|` 联合多个接口的时候，通过一个共有的属性形成可辨识联合
- [Polymorphic `this` types](http://www.typescriptlang.org/docs/handbook/advanced-types.html#polymorphic-this-types)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#多态的this类型)）：父类的某个方法返回 `this`，当子类继承父类后，子类的实例调用此方法，返回的 `this` 能够被 TypeScript 正确的识别为子类的实例。
- [Symbols](http://www.typescriptlang.org/docs/handbook/symbols.html)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Symbols.html)）：新原生类型，这是 [ES6 的知识](http://es6.ruanyifeng.com/#docs/symbol)
- [Iterators and Generators](http://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Iterators%20and%20Generators.html)）：迭代器，这是 [ES6 的知识](http://es6.ruanyifeng.com/#docs/iterator)
- [Namespaces](http://www.typescriptlang.org/docs/handbook/namespaces.html)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Namespaces.html)）：避免全局污染，现在已被 [ES6 Module](http://es6.ruanyifeng.com/#docs/module) 替代
- [Mixins](http://www.typescriptlang.org/docs/handbook/mixins.html)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Mixins.html)）：一种编程模式，与 TypeScript 没有直接关系，可以参考 [ES6 中 Mixin 模式的实现](http://es6.ruanyifeng.com/#docs/class#Mixin模式的实现)
