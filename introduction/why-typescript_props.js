import projectConfig from '/pagic.config.js';
import Ga from '/_ga.js';
import Gitalk from '/_gitalk.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "introduction/why-typescript.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "introduction/why-typescript.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>你可能或多或少听说过这样的言论：</p>\n<ul>\n<li>TypeScript 只适用于大公司的大型项目</li>\n<li>TypeScript 适合多人协作开发，一个人维护的项目就没必要使用了</li>\n<li>TypeScript 学习成本高，开发成本高</li>\n<li>旧项目是 JavaScript，所以没必要改造成 TypeScript 了</li>\n</ul>\n<p>我想说，都 2021 年了，赶紧上车吧，绝大部分项目都应该使用 TypeScript！</p>\n<p>大型项目不必多说，TypeScript 的类型系统能够集成到 IDE（或编辑器）中，通过代码补全、代码提示、跳转到定义等功能，极大的提高代码的可维护性，提高开发效率，降低 bug 率。</p>\n<blockquote>\n<p>动态类型一时爽，代码重构火葬场。</p>\n</blockquote>\n<p>如果你没有学过 TypeScript，那么可能连这样的接口提示都看不懂了：</p>\n<p><img src="../assets/what-is-typescript-tip.png" alt="what-is-typescript-tip"></p>\n<h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9-typescript">为什么选择 TypeScript<a class="anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9-typescript">§</a></h2>\n<p>[TypeScript 官网][TypeScript]列举了一些优势，不过我更愿意自己总结一下：</p>\n<h3 id="typescript-%E5%A2%9E%E5%8A%A0%E4%BA%86%E4%BB%A3%E7%A0%81%E7%9A%84%E5%8F%AF%E8%AF%BB%E6%80%A7%E5%92%8C%E5%8F%AF%E7%BB%B4%E6%8A%A4%E6%80%A7">TypeScript 增加了代码的可读性和可维护性<a class="anchor" href="#typescript-%E5%A2%9E%E5%8A%A0%E4%BA%86%E4%BB%A3%E7%A0%81%E7%9A%84%E5%8F%AF%E8%AF%BB%E6%80%A7%E5%92%8C%E5%8F%AF%E7%BB%B4%E6%8A%A4%E6%80%A7">§</a></h3>\n<ul>\n<li>类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了</li>\n<li>可以在编译阶段就发现大部分错误，这总比在运行时候出错好</li>\n<li>增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、代码重构等</li>\n</ul>\n<h3 id="typescript-%E9%9D%9E%E5%B8%B8%E5%8C%85%E5%AE%B9">TypeScript 非常包容<a class="anchor" href="#typescript-%E9%9D%9E%E5%B8%B8%E5%8C%85%E5%AE%B9">§</a></h3>\n<ul>\n<li>TypeScript 是 JavaScript 的超集，<code>.js</code> 文件可以直接重命名为 <code>.ts</code> 即可</li>\n<li>即使不显式的定义类型，也能够自动做出<a href="../basics/type-inference.html">类型推论</a></li>\n<li>TypeScript 的类型系统是图灵完备的，可以定义从简单到复杂的几乎一切类型</li>\n<li>即使 TypeScript 编译报错，也可以生成 JavaScript 文件</li>\n<li>兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 TypeScript 读取</li>\n</ul>\n<h3 id="typescript-%E6%8B%A5%E6%9C%89%E6%B4%BB%E8%B7%83%E7%9A%84%E7%A4%BE%E5%8C%BA">TypeScript 拥有活跃的社区<a class="anchor" href="#typescript-%E6%8B%A5%E6%9C%89%E6%B4%BB%E8%B7%83%E7%9A%84%E7%A4%BE%E5%8C%BA">§</a></h3>\n<ul>\n<li>大部分第三方库都有提供给 TypeScript 的类型定义文件</li>\n<li>Angular、Vue、VS Code、Ant Design 等等耳熟能详的项目都是使用 TypeScript 编写的</li>\n<li>TypeScript 拥抱了 ES6 规范，支持 ESNext 草案中处于第三阶状态（Stage 3）的特性</li>\n</ul>\n<h3 id="typescript-%E7%9A%84%E7%BC%BA%E7%82%B9">TypeScript 的缺点<a class="anchor" href="#typescript-%E7%9A%84%E7%BC%BA%E7%82%B9">§</a></h3>\n<p>任何事物都是有两面性的，我认为 TypeScript 的弊端在于：</p>\n<ul>\n<li>有一定的学习成本，需要理解接口（Interfaces）、泛型（Generics）、类（Classes）、枚举类型（Enums）等前端工程师可能不是很熟悉的概念</li>\n<li>短期可能会增加一些开发成本，毕竟要多写一些类型的定义，不过对于一个需要长期维护的项目，TypeScript 能够减少其维护成本</li>\n<li>集成到构建流程需要一些工作量</li>\n<li>可能和一些库结合的不是很完美</li>\n</ul>\n<p>大家可以根据自己团队和项目的情况判断是否需要使用 TypeScript。</p>\n<p>StackOverflow 2020 开发者调查报告，TypeScript 击败 Python</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-45256157-14" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>你可能或多或少听说过这样的言论：</p>\n<ul>\n<li>TypeScript 只适用于大公司的大型项目</li>\n<li>TypeScript 适合多人协作开发，一个人维护的项目就没必要使用了</li>\n<li>TypeScript 学习成本高，开发成本高</li>\n<li>旧项目是 JavaScript，所以没必要改造成 TypeScript 了</li>\n</ul>\n<p>我想说，都 2021 年了，赶紧上车吧，绝大部分项目都应该使用 TypeScript！</p>\n<p>大型项目不必多说，TypeScript 的类型系统能够集成到 IDE（或编辑器）中，通过代码补全、代码提示、跳转到定义等功能，极大的提高代码的可维护性，提高开发效率，降低 bug 率。</p>\n<blockquote>\n<p>动态类型一时爽，代码重构火葬场。</p>\n</blockquote>\n<p>如果你没有学过 TypeScript，那么可能连这样的接口提示都看不懂了：</p>\n<p><img src="../assets/what-is-typescript-tip.png" alt="what-is-typescript-tip"></p>\n<h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9-typescript">为什么选择 TypeScript<a class="anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9-typescript">§</a></h2>\n<p>[TypeScript 官网][TypeScript]列举了一些优势，不过我更愿意自己总结一下：</p>\n<h3 id="typescript-%E5%A2%9E%E5%8A%A0%E4%BA%86%E4%BB%A3%E7%A0%81%E7%9A%84%E5%8F%AF%E8%AF%BB%E6%80%A7%E5%92%8C%E5%8F%AF%E7%BB%B4%E6%8A%A4%E6%80%A7">TypeScript 增加了代码的可读性和可维护性<a class="anchor" href="#typescript-%E5%A2%9E%E5%8A%A0%E4%BA%86%E4%BB%A3%E7%A0%81%E7%9A%84%E5%8F%AF%E8%AF%BB%E6%80%A7%E5%92%8C%E5%8F%AF%E7%BB%B4%E6%8A%A4%E6%80%A7">§</a></h3>\n<ul>\n<li>类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了</li>\n<li>可以在编译阶段就发现大部分错误，这总比在运行时候出错好</li>\n<li>增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、代码重构等</li>\n</ul>\n<h3 id="typescript-%E9%9D%9E%E5%B8%B8%E5%8C%85%E5%AE%B9">TypeScript 非常包容<a class="anchor" href="#typescript-%E9%9D%9E%E5%B8%B8%E5%8C%85%E5%AE%B9">§</a></h3>\n<ul>\n<li>TypeScript 是 JavaScript 的超集，<code>.js</code> 文件可以直接重命名为 <code>.ts</code> 即可</li>\n<li>即使不显式的定义类型，也能够自动做出<a href="../basics/type-inference.html">类型推论</a></li>\n<li>TypeScript 的类型系统是图灵完备的，可以定义从简单到复杂的几乎一切类型</li>\n<li>即使 TypeScript 编译报错，也可以生成 JavaScript 文件</li>\n<li>兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 TypeScript 读取</li>\n</ul>\n<h3 id="typescript-%E6%8B%A5%E6%9C%89%E6%B4%BB%E8%B7%83%E7%9A%84%E7%A4%BE%E5%8C%BA">TypeScript 拥有活跃的社区<a class="anchor" href="#typescript-%E6%8B%A5%E6%9C%89%E6%B4%BB%E8%B7%83%E7%9A%84%E7%A4%BE%E5%8C%BA">§</a></h3>\n<ul>\n<li>大部分第三方库都有提供给 TypeScript 的类型定义文件</li>\n<li>Angular、Vue、VS Code、Ant Design 等等耳熟能详的项目都是使用 TypeScript 编写的</li>\n<li>TypeScript 拥抱了 ES6 规范，支持 ESNext 草案中处于第三阶状态（Stage 3）的特性</li>\n</ul>\n<h3 id="typescript-%E7%9A%84%E7%BC%BA%E7%82%B9">TypeScript 的缺点<a class="anchor" href="#typescript-%E7%9A%84%E7%BC%BA%E7%82%B9">§</a></h3>\n<p>任何事物都是有两面性的，我认为 TypeScript 的弊端在于：</p>\n<ul>\n<li>有一定的学习成本，需要理解接口（Interfaces）、泛型（Generics）、类（Classes）、枚举类型（Enums）等前端工程师可能不是很熟悉的概念</li>\n<li>短期可能会增加一些开发成本，毕竟要多写一些类型的定义，不过对于一个需要长期维护的项目，TypeScript 能够减少其维护成本</li>\n<li>集成到构建流程需要一些工作量</li>\n<li>可能和一些库结合的不是很完美</li>\n</ul>\n<p>大家可以根据自己团队和项目的情况判断是否需要使用 TypeScript。</p>\n<p>StackOverflow 2020 开发者调查报告，TypeScript 击败 Python</p>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9-typescript">为什么选择 TypeScript</a><ol><li><a href="#typescript-%E5%A2%9E%E5%8A%A0%E4%BA%86%E4%BB%A3%E7%A0%81%E7%9A%84%E5%8F%AF%E8%AF%BB%E6%80%A7%E5%92%8C%E5%8F%AF%E7%BB%B4%E6%8A%A4%E6%80%A7">TypeScript 增加了代码的可读性和可维护性</a></li><li><a href="#typescript-%E9%9D%9E%E5%B8%B8%E5%8C%85%E5%AE%B9">TypeScript 非常包容</a></li><li><a href="#typescript-%E6%8B%A5%E6%9C%89%E6%B4%BB%E8%B7%83%E7%9A%84%E7%A4%BE%E5%8C%BA">TypeScript 拥有活跃的社区</a></li><li><a href="#typescript-%E7%9A%84%E7%BC%BA%E7%82%B9">TypeScript 的缺点</a></li></ol></li></ol></nav>'
        } }),
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'date': "2016-05-31T13:49:18.000Z",
    'updated': "2021-01-10T13:11:03.000Z",
    'excerpt': "你可能或多或少听说过这样的言论： - TypeScript 只适用于大公司的大型项目 - TypeScript 适合多人协作开发，一个人维护的项目就没必要使用了 - TypeScript 学习成本高，开发成本高 - 旧项目是 JavaScript，所以没必要改造成 T...",
    'cover': "../assets/what-is-typescript-tip.png",
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
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "introduction/why-typescript.html", owner: "xcatliu", pagerDirection: "first", repo: "typescript-tutorial", title: undefined })
};
