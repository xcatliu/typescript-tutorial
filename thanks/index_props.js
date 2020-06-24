import projectConfig from '/pagic.config.js';
import Gitalk from '/_gitalk.js';
import Ga from '/_ga.js';
export default {
    config: { "srcDir": "src", "publicDir": "public", "base": "/", ...projectConfig },
    'pagePath': "thanks/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "thanks/index.html",
    'title': "感谢",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>感谢</h1>\n<ul>\n<li>感谢<a href="https://github.com/Microsoft/TypeScript/graphs/contributors">创造和维护 TypeScript 的人们</a>，给我们带来了如此优秀的工具</li>\n<li>感谢 <a href="https://github.com/zhongsp/">@zhongsp</a> 对<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/index.html">官方手册的翻译</a>，本书参考了大量他的翻译，能一直坚持跟进非常不容易</li>\n<li>感谢 <a href="http://www.ruanyifeng.com/home.html">@阮一峰</a> 老师的 <a href="http://es6.ruanyifeng.com/">ECMAScript 6 入门</a>，本书引用了多处 ES6 的知识</li>\n</ul>\n<p>最后，感谢你阅读完本书，希望你会有所收获。</p>\n<h2 id="%E4%B8%8B%E4%B8%80%E6%AD%A5">下一步<a class="anchor" href="#%E4%B8%8B%E4%B8%80%E6%AD%A5">§</a></h2>\n<ul>\n<li>在 <a href="https://github.com/xcatliu/typescript-tutorial">GitHub</a> 上关注本书</li>\n<li>阅读<a href="http://www.typescriptlang.org/docs/handbook/basic-types.html">官方手册</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/">中文版</a>）巩固知识</li>\n<li>阅读 <a href="http://www.typescriptlang.org/docs/handbook/tsconfig-json.html">Project Configuration</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html">中文版</a>） 学习如何配置 TypeScript 工程</li>\n<li>查看<a href="http://www.typescriptlang.org/samples/index.html">官方示例</a>，学习真实项目</li>\n</ul>\n<hr>\n<ul>\n<li><a href="../engineering/lint.html">上一章：代码检查</a></li>\n</ul>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%B8%8B%E4%B8%80%E6%AD%A5">下一步</a></li></ol></nav>'
        } }),
    'sidebar': [
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
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "thanks/index.html", owner: "xcatliu", repo: "typescript-tutorial", title: "\u611F\u8C22" }),
    'ga': React.createElement(Ga, { id: "UA-45256157-14" })
};
