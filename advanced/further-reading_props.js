import projectConfig from '/pagic.config.js';
import Ga from '/_ga.js';
import Gitalk from '/_gitalk.js';
export default {
    'prev': {
        "text": "声明合并",
        "link": "advanced/declaration-merging.html"
    },
    'next': {
        "link": "engineering/index.html",
        "text": "工程"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "advanced/further-reading.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "advanced/further-reading.html",
    'title': "扩展阅读",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>扩展阅读</h1>\n<p>此处记录了<a href="http://www.typescriptlang.org/docs/handbook/basic-types.html">官方手册</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/">中文版</a>）中包含，但是本书未涉及的概念。</p>\n<p>我认为它们是一些不重要或者不属于 TypeScript 的概念，所以这里只给出一个简单的释义，详细内容可以点击链接深入理解。</p>\n<ul>\n<li><a href="http://www.typescriptlang.org/docs/handbook/basic-types.html#never">Never</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#never">中文版</a>）：永远不存在值的类型，一般用于错误处理函数</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/variable-declarations.html">Variable Declarations</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Variable%20Declarations.html">中文版</a>）：使用 <code>let</code> 和 <code>const</code> 替代 <code>var</code>，这是 <a href="http://es6.ruanyifeng.com/#docs/let">ES6 的知识</a></li>\n<li><a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Functions.html#this"><code>this</code></a>：箭头函数的运用，这是 <a href="http://es6.ruanyifeng.com/#docs/function">ES6 的知识</a></li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/generics.html#using-class-types-in-generics">Using Class Types in Generics</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Generics.html#%E5%9C%A8%E6%B3%9B%E5%9E%8B%E9%87%8C%E4%BD%BF%E7%94%A8%E7%B1%BB%E7%B1%BB%E5%9E%8B">中文版</a>）：创建工厂函数时，需要引用构造函数的类类型</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/type-inference.html#best-common-type">Best common type</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html#%E6%9C%80%E4%BD%B3%E9%80%9A%E7%94%A8%E7%B1%BB%E5%9E%8B">中文版</a>）：数组的类型推论</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-type">Contextual Type</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html#%E4%B8%8A%E4%B8%8B%E6%96%87%E7%B1%BB%E5%9E%8B">中文版</a>）：函数输入的类型推论</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/type-compatibility.html">Type Compatibility</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Compatibility.html">中文版</a>）：允许不严格符合类型，只需要在一定规则下兼容即可</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types">Advanced Types</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E4%BA%A4%E5%8F%89%E7%B1%BB%E5%9E%8B%EF%BC%88intersection-types%EF%BC%89">中文版</a>）：使用 <code>&amp;</code> 将多种类型的共有部分叠加成一种类型</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types">Type Guards and Differentiating Types</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E7%B1%BB%E5%9E%8B%E4%BF%9D%E6%8A%A4%E4%B8%8E%E5%8C%BA%E5%88%86%E7%B1%BB%E5%9E%8B%EF%BC%88type-guards-and-differentiating-types%EF%BC%89">中文版</a>）：联合类型在一些情况下被识别为特定的类型</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions">Discriminated Unions</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%8F%AF%E8%BE%A8%E8%AF%86%E8%81%94%E5%90%88%EF%BC%88discriminated-unions%EF%BC%89">中文版</a>）：使用 <code>|</code> 联合多个接口的时候，通过一个共有的属性形成可辨识联合</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#polymorphic-this-types">Polymorphic <code>this</code> types</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%A4%9A%E6%80%81%E7%9A%84this%E7%B1%BB%E5%9E%8B">中文版</a>）：父类的某个方法返回 <code>this</code>，当子类继承父类后，子类的实例调用此方法，返回的 <code>this</code> 能够被 TypeScript 正确的识别为子类的实例。</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/symbols.html">Symbols</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Symbols.html">中文版</a>）：新原生类型，这是 <a href="http://es6.ruanyifeng.com/#docs/symbol">ES6 的知识</a></li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/iterators-and-generators.html">Iterators and Generators</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Iterators%20and%20Generators.html">中文版</a>）：迭代器，这是 <a href="http://es6.ruanyifeng.com/#docs/iterator">ES6 的知识</a></li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/namespaces.html">Namespaces</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Namespaces.html">中文版</a>）：避免全局污染，现在已被 <a href="http://es6.ruanyifeng.com/#docs/module">ES6 Module</a> 替代</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/decorators.html">Decorators</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Decorators.html">中文版</a>）：修饰器，这是 <a href="http://es6.ruanyifeng.com/#docs/decorator">ES7 的一个提案</a></li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/mixins.html">Mixins</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Mixins.html">中文版</a>）：一种编程模式，与 TypeScript 没有直接关系，可以参考 <a href="http://es6.ruanyifeng.com/#docs/class#Mixin%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%AE%9E%E7%8E%B0">ES6 中 Mixin 模式的实现</a></li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-45256157-14" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u6269\u5C55\u9605\u8BFB"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>此处记录了<a href="http://www.typescriptlang.org/docs/handbook/basic-types.html">官方手册</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/">中文版</a>）中包含，但是本书未涉及的概念。</p>\n<p>我认为它们是一些不重要或者不属于 TypeScript 的概念，所以这里只给出一个简单的释义，详细内容可以点击链接深入理解。</p>\n<ul>\n<li><a href="http://www.typescriptlang.org/docs/handbook/basic-types.html#never">Never</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#never">中文版</a>）：永远不存在值的类型，一般用于错误处理函数</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/variable-declarations.html">Variable Declarations</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Variable%20Declarations.html">中文版</a>）：使用 <code>let</code> 和 <code>const</code> 替代 <code>var</code>，这是 <a href="http://es6.ruanyifeng.com/#docs/let">ES6 的知识</a></li>\n<li><a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Functions.html#this"><code>this</code></a>：箭头函数的运用，这是 <a href="http://es6.ruanyifeng.com/#docs/function">ES6 的知识</a></li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/generics.html#using-class-types-in-generics">Using Class Types in Generics</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Generics.html#%E5%9C%A8%E6%B3%9B%E5%9E%8B%E9%87%8C%E4%BD%BF%E7%94%A8%E7%B1%BB%E7%B1%BB%E5%9E%8B">中文版</a>）：创建工厂函数时，需要引用构造函数的类类型</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/type-inference.html#best-common-type">Best common type</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html#%E6%9C%80%E4%BD%B3%E9%80%9A%E7%94%A8%E7%B1%BB%E5%9E%8B">中文版</a>）：数组的类型推论</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-type">Contextual Type</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html#%E4%B8%8A%E4%B8%8B%E6%96%87%E7%B1%BB%E5%9E%8B">中文版</a>）：函数输入的类型推论</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/type-compatibility.html">Type Compatibility</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Compatibility.html">中文版</a>）：允许不严格符合类型，只需要在一定规则下兼容即可</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types">Advanced Types</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E4%BA%A4%E5%8F%89%E7%B1%BB%E5%9E%8B%EF%BC%88intersection-types%EF%BC%89">中文版</a>）：使用 <code>&amp;</code> 将多种类型的共有部分叠加成一种类型</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types">Type Guards and Differentiating Types</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E7%B1%BB%E5%9E%8B%E4%BF%9D%E6%8A%A4%E4%B8%8E%E5%8C%BA%E5%88%86%E7%B1%BB%E5%9E%8B%EF%BC%88type-guards-and-differentiating-types%EF%BC%89">中文版</a>）：联合类型在一些情况下被识别为特定的类型</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions">Discriminated Unions</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%8F%AF%E8%BE%A8%E8%AF%86%E8%81%94%E5%90%88%EF%BC%88discriminated-unions%EF%BC%89">中文版</a>）：使用 <code>|</code> 联合多个接口的时候，通过一个共有的属性形成可辨识联合</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#polymorphic-this-types">Polymorphic <code>this</code> types</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%A4%9A%E6%80%81%E7%9A%84this%E7%B1%BB%E5%9E%8B">中文版</a>）：父类的某个方法返回 <code>this</code>，当子类继承父类后，子类的实例调用此方法，返回的 <code>this</code> 能够被 TypeScript 正确的识别为子类的实例。</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/symbols.html">Symbols</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Symbols.html">中文版</a>）：新原生类型，这是 <a href="http://es6.ruanyifeng.com/#docs/symbol">ES6 的知识</a></li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/iterators-and-generators.html">Iterators and Generators</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Iterators%20and%20Generators.html">中文版</a>）：迭代器，这是 <a href="http://es6.ruanyifeng.com/#docs/iterator">ES6 的知识</a></li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/namespaces.html">Namespaces</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Namespaces.html">中文版</a>）：避免全局污染，现在已被 <a href="http://es6.ruanyifeng.com/#docs/module">ES6 Module</a> 替代</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/decorators.html">Decorators</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Decorators.html">中文版</a>）：修饰器，这是 <a href="http://es6.ruanyifeng.com/#docs/decorator">ES7 的一个提案</a></li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/mixins.html">Mixins</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Mixins.html">中文版</a>）：一种编程模式，与 TypeScript 没有直接关系，可以参考 <a href="http://es6.ruanyifeng.com/#docs/class#Mixin%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%AE%9E%E7%8E%B0">ES6 中 Mixin 模式的实现</a></li>\n</ul>'
        } }),
    'toc': null,
    'author': "xcatliu",
    'contributors': [
        "xcatliu",
        "CENCHAOCHAO"
    ],
    'date': "2017-01-16T11:20:03.000Z",
    'updated': "2020-07-02T14:29:45.000Z",
    'excerpt': "此处记录了官方手册（中文版）中包含，但是本书未涉及的概念。 我认为它们是一些不重要或者不属于 TypeScript 的概念，所以这里只给出一个简单的释义，详细内容可以点击链接深入理解。 - Never（中文版）：永远不存在值的类型，...",
    'cover': undefined,
    'sidebar': [
        {
            "link": "introduction/index.html",
            "children": [
                {
                    "text": "什么是 TypeScript",
                    "link": "introduction/what-is-typescript.html",
                    "pagePath": "introduction/what-is-typescript.md"
                },
                {
                    "text": "安装 TypeScript",
                    "link": "introduction/get-typescript.html",
                    "pagePath": "introduction/get-typescript.md"
                },
                {
                    "text": "Hello TypeScript",
                    "link": "introduction/hello-typescript.html",
                    "pagePath": "introduction/hello-typescript.md"
                }
            ],
            "text": "简介",
            "pagePath": "introduction/README.md"
        },
        {
            "link": "basics/index.html",
            "children": [
                {
                    "text": "原始数据类型",
                    "link": "basics/primitive-data-types.html",
                    "pagePath": "basics/primitive-data-types.md"
                },
                {
                    "text": "任意值",
                    "link": "basics/any.html",
                    "pagePath": "basics/any.md"
                },
                {
                    "text": "类型推论",
                    "link": "basics/type-inference.html",
                    "pagePath": "basics/type-inference.md"
                },
                {
                    "text": "联合类型",
                    "link": "basics/union-types.html",
                    "pagePath": "basics/union-types.md"
                },
                {
                    "text": "对象的类型——接口",
                    "link": "basics/type-of-object-interfaces.html",
                    "pagePath": "basics/type-of-object-interfaces.md"
                },
                {
                    "text": "数组的类型",
                    "link": "basics/type-of-array.html",
                    "pagePath": "basics/type-of-array.md"
                },
                {
                    "text": "函数的类型",
                    "link": "basics/type-of-function.html",
                    "pagePath": "basics/type-of-function.md"
                },
                {
                    "text": "类型断言",
                    "link": "basics/type-assertion.html",
                    "pagePath": "basics/type-assertion.md"
                },
                {
                    "text": "声明文件",
                    "link": "basics/declaration-files.html",
                    "pagePath": "basics/declaration-files.md"
                },
                {
                    "text": "内置对象",
                    "link": "basics/built-in-objects.html",
                    "pagePath": "basics/built-in-objects.md"
                }
            ],
            "text": "基础",
            "pagePath": "basics/README.md"
        },
        {
            "link": "advanced/index.html",
            "children": [
                {
                    "text": "类型别名",
                    "link": "advanced/type-aliases.html",
                    "pagePath": "advanced/type-aliases.md"
                },
                {
                    "text": "字符串字面量类型",
                    "link": "advanced/string-literal-types.html",
                    "pagePath": "advanced/string-literal-types.md"
                },
                {
                    "text": "元组",
                    "link": "advanced/tuple.html",
                    "pagePath": "advanced/tuple.md"
                },
                {
                    "text": "枚举",
                    "link": "advanced/enum.html",
                    "pagePath": "advanced/enum.md"
                },
                {
                    "text": "类",
                    "link": "advanced/class.html",
                    "pagePath": "advanced/class.md"
                },
                {
                    "text": "类与接口",
                    "link": "advanced/class-and-interfaces.html",
                    "pagePath": "advanced/class-and-interfaces.md"
                },
                {
                    "text": "泛型",
                    "link": "advanced/generics.html",
                    "pagePath": "advanced/generics.md"
                },
                {
                    "text": "声明合并",
                    "link": "advanced/declaration-merging.html",
                    "pagePath": "advanced/declaration-merging.md"
                },
                {
                    "text": "扩展阅读",
                    "link": "advanced/further-reading.html",
                    "pagePath": "advanced/further-reading.md"
                }
            ],
            "text": "进阶",
            "pagePath": "advanced/README.md"
        },
        {
            "link": "engineering/index.html",
            "children": [
                {
                    "text": "代码检查",
                    "link": "engineering/lint.html",
                    "pagePath": "engineering/lint.md"
                },
                {
                    "text": "编译选项",
                    "link": "engineering/compiler-options.html",
                    "pagePath": "engineering/compiler-options.md"
                }
            ],
            "text": "工程",
            "pagePath": "engineering/README.md"
        },
        {
            "text": "感谢",
            "link": "thanks/index.html",
            "pagePath": "thanks/README.md"
        }
    ],
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "advanced/further-reading.html", owner: "xcatliu", pagerDirection: "first", repo: "typescript-tutorial", title: "\u6269\u5C55\u9605\u8BFB" })
};
