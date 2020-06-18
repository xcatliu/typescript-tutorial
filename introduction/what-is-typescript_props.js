import Gitalk from '/_gitalk.js';
import Ga from '/_ga.js';
export default {
    'config': {
        "srcDir": ".",
        "publicDir": "public",
        "ignore": [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        "base": "/",
        "theme": "docs",
        "plugins": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        "watch": false,
        "serve": false,
        "port": 8000,
        "title": "TypeScript 入门教程",
        "sidebar": [
            "README.md",
            {
                "link": "introduction/README.md",
                "children": [
                    "introduction/what-is-typescript.md",
                    "introduction/get-typescript.md",
                    "introduction/hello-typescript.md"
                ]
            },
            {
                "link": "basics/README.md",
                "children": [
                    "basics/primitive-data-types.md",
                    "basics/any.md",
                    "basics/type-inference.md",
                    "basics/union-types.md",
                    "basics/type-of-object-interfaces.md",
                    "basics/type-of-array.md",
                    "basics/type-of-function.md",
                    "basics/type-assertion.md",
                    "basics/declaration-files.md",
                    "basics/built-in-objects.md"
                ]
            },
            {
                "link": "advanced/README.md",
                "children": [
                    "advanced/type-aliases.md",
                    "advanced/string-literal-types.md",
                    "advanced/tuple.md",
                    "advanced/enum.md",
                    "advanced/class.md",
                    "advanced/class-and-interfaces.md",
                    "advanced/generics.md",
                    "advanced/declaration-merging.md",
                    "advanced/further-reading.md"
                ]
            },
            {
                "link": "engineering/README.md",
                "children": [
                    "engineering/lint.md",
                    "engineering/compiler-options.md"
                ]
            },
            "thanks/README.md"
        ],
        "nav": [
            {
                "text": "GitHub",
                "link": "https://github.com/xcatliu/typescript-tutorial"
            },
            {
                "text": "赞助作者",
                "link": "https://github.com/xcatliu/buy-me-a-coffee"
            },
            {
                "text": "本网站使用 Pagic 构建",
                "link": "https://github.com/xcatliu/pagic"
            }
        ],
        "gitalk": {
            "clientID": "29aa4941759fc887ed4f",
            "clientSecret": "33e355efdf3a1959624506a5d88311145208471b",
            "repo": "typescript-tutorial",
            "owner": "xcatliu",
            "admin": [
                "xcatliu"
            ]
        },
        "ga": {
            "id": "UA-45256157-14"
        }
    },
    'pagePath': "introduction/what-is-typescript.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "introduction/what-is-typescript.html",
    'title': "什么是 TypeScript",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>什么是 TypeScript</h1>\n<p>首先，我对 TypeScript 的理解如下：</p>\n<p><a href="http://www.typescriptlang.org/">TypeScript</a> 是 JavaScript 的一个超集，主要提供了<strong>类型系统</strong>和<strong>对 ES6 的支持</strong>，它由 Microsoft 开发，代码<a href="https://github.com/Microsoft/TypeScript">开源于 GitHub</a> 上。</p>\n<p>其次引用<a href="http://www.typescriptlang.org/">官网</a>的定义：</p>\n<blockquote>\n<p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.</p>\n</blockquote>\n<p>翻译成中文即是：</p>\n<blockquote>\n<p>TypeScript 是 JavaScript 的类型的超集，它可以编译成纯 JavaScript。编译出来的 JavaScript 可以运行在任何浏览器上。TypeScript 编译工具可以运行在任何服务器和任何系统上。TypeScript 是开源的。</p>\n</blockquote>\n<h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9-typescript">为什么选择 TypeScript<a class="anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9-typescript">§</a></h2>\n<p><a href="http://www.typescriptlang.org/">TypeScript 官网</a>列举了一些优势，不过我更愿意自己总结一下：</p>\n<h3 id="typescript-%E5%A2%9E%E5%8A%A0%E4%BA%86%E4%BB%A3%E7%A0%81%E7%9A%84%E5%8F%AF%E8%AF%BB%E6%80%A7%E5%92%8C%E5%8F%AF%E7%BB%B4%E6%8A%A4%E6%80%A7">TypeScript 增加了代码的可读性和可维护性<a class="anchor" href="#typescript-%E5%A2%9E%E5%8A%A0%E4%BA%86%E4%BB%A3%E7%A0%81%E7%9A%84%E5%8F%AF%E8%AF%BB%E6%80%A7%E5%92%8C%E5%8F%AF%E7%BB%B4%E6%8A%A4%E6%80%A7">§</a></h3>\n<ul>\n<li>类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了</li>\n<li>可以在编译阶段就发现大部分错误，这总比在运行时候出错好</li>\n<li>增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等</li>\n</ul>\n<h3 id="typescript-%E9%9D%9E%E5%B8%B8%E5%8C%85%E5%AE%B9">TypeScript 非常包容<a class="anchor" href="#typescript-%E9%9D%9E%E5%B8%B8%E5%8C%85%E5%AE%B9">§</a></h3>\n<ul>\n<li>TypeScript 是 JavaScript 的超集，<code>.js</code> 文件可以直接重命名为 <code>.ts</code> 即可</li>\n<li>即使不显式的定义类型，也能够自动做出<a href="../basics/type-inference.html">类型推论</a></li>\n<li>可以定义从简单到复杂的几乎一切类型</li>\n<li>即使 TypeScript 编译报错，也可以生成 JavaScript 文件</li>\n<li>兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 TypeScript 读取</li>\n</ul>\n<h3 id="typescript-%E6%8B%A5%E6%9C%89%E6%B4%BB%E8%B7%83%E7%9A%84%E7%A4%BE%E5%8C%BA">TypeScript 拥有活跃的社区<a class="anchor" href="#typescript-%E6%8B%A5%E6%9C%89%E6%B4%BB%E8%B7%83%E7%9A%84%E7%A4%BE%E5%8C%BA">§</a></h3>\n<ul>\n<li>大部分第三方库都有提供给 TypeScript 的类型定义文件</li>\n<li>Google 开发的 Angular2 就是使用 TypeScript 编写的</li>\n<li>TypeScript 拥抱了 ES6 规范，也支持部分 ESNext 草案的规范</li>\n</ul>\n<h3 id="typescript-%E7%9A%84%E7%BC%BA%E7%82%B9">TypeScript 的缺点<a class="anchor" href="#typescript-%E7%9A%84%E7%BC%BA%E7%82%B9">§</a></h3>\n<p>任何事物都是有两面性的，我认为 TypeScript 的弊端在于：</p>\n<ul>\n<li>有一定的学习成本，需要理解接口（Interfaces）、泛型（Generics）、类（Classes）、枚举类型（Enums）等前端工程师可能不是很熟悉的概念</li>\n<li>短期可能会增加一些开发成本，毕竟要多写一些类型的定义，不过对于一个需要长期维护的项目，TypeScript 能够减少其维护成本</li>\n<li>集成到构建流程需要一些工作量</li>\n<li>可能和一些库结合的不是很完美</li>\n</ul>\n<p>大家可以根据自己团队和项目的情况判断是否需要使用 TypeScript。</p>\n<hr>\n<ul>\n<li><a href="index.html">上一章：简介</a></li>\n<li><a href="get-typescript.html">下一章：安装 TypeScript</a></li>\n</ul>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9-typescript">为什么选择 TypeScript</a><ol><li><a href="#typescript-%E5%A2%9E%E5%8A%A0%E4%BA%86%E4%BB%A3%E7%A0%81%E7%9A%84%E5%8F%AF%E8%AF%BB%E6%80%A7%E5%92%8C%E5%8F%AF%E7%BB%B4%E6%8A%A4%E6%80%A7">TypeScript 增加了代码的可读性和可维护性</a></li><li><a href="#typescript-%E9%9D%9E%E5%B8%B8%E5%8C%85%E5%AE%B9">TypeScript 非常包容</a></li><li><a href="#typescript-%E6%8B%A5%E6%9C%89%E6%B4%BB%E8%B7%83%E7%9A%84%E7%A4%BE%E5%8C%BA">TypeScript 拥有活跃的社区</a></li><li><a href="#typescript-%E7%9A%84%E7%BC%BA%E7%82%B9">TypeScript 的缺点</a></li></ol></li></ol></nav>'
        } }),
    'sidebar': [
        {
            "text": "TypeScript 入门教程",
            "link": "index.html"
        },
        {
            "link": "introduction/index.html",
            "children": [
                {
                    "text": "什么是 TypeScript",
                    "link": "introduction/what-is-typescript.html"
                },
                {
                    "text": "安装 TypeScript",
                    "link": "introduction/get-typescript.html"
                },
                {
                    "text": "Hello TypeScript",
                    "link": "introduction/hello-typescript.html"
                }
            ],
            "text": "简介"
        },
        {
            "link": "basics/index.html",
            "children": [
                {
                    "text": "原始数据类型",
                    "link": "basics/primitive-data-types.html"
                },
                {
                    "text": "任意值",
                    "link": "basics/any.html"
                },
                {
                    "text": "类型推论",
                    "link": "basics/type-inference.html"
                },
                {
                    "text": "联合类型",
                    "link": "basics/union-types.html"
                },
                {
                    "text": "对象的类型——接口",
                    "link": "basics/type-of-object-interfaces.html"
                },
                {
                    "text": "数组的类型",
                    "link": "basics/type-of-array.html"
                },
                {
                    "text": "函数的类型",
                    "link": "basics/type-of-function.html"
                },
                {
                    "text": "类型断言",
                    "link": "basics/type-assertion.html"
                },
                {
                    "text": "声明文件",
                    "link": "basics/declaration-files.html"
                },
                {
                    "text": "内置对象",
                    "link": "basics/built-in-objects.html"
                }
            ],
            "text": "基础"
        },
        {
            "link": "advanced/index.html",
            "children": [
                {
                    "text": "类型别名",
                    "link": "advanced/type-aliases.html"
                },
                {
                    "text": "字符串字面量类型",
                    "link": "advanced/string-literal-types.html"
                },
                {
                    "text": "元组",
                    "link": "advanced/tuple.html"
                },
                {
                    "text": "枚举",
                    "link": "advanced/enum.html"
                },
                {
                    "text": "类",
                    "link": "advanced/class.html"
                },
                {
                    "text": "类与接口",
                    "link": "advanced/class-and-interfaces.html"
                },
                {
                    "text": "泛型",
                    "link": "advanced/generics.html"
                },
                {
                    "text": "声明合并",
                    "link": "advanced/declaration-merging.html"
                },
                {
                    "text": "扩展阅读",
                    "link": "advanced/further-reading.html"
                }
            ],
            "text": "进阶"
        },
        {
            "link": "engineering/index.html",
            "children": [
                {
                    "text": "代码检查",
                    "link": "engineering/lint.html"
                },
                {
                    "text": "编译选项",
                    "link": "engineering/compiler-options.html"
                }
            ],
            "text": "工程"
        },
        {
            "text": "感谢",
            "link": "thanks/index.html"
        }
    ],
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "introduction/what-is-typescript.html", owner: "xcatliu", repo: "typescript-tutorial", title: "\u4EC0\u4E48\u662F TypeScript" }),
    'ga': React.createElement(Ga, { id: "UA-45256157-14" })
};
