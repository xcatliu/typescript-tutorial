import Ga from '/_ga.js';
import Gitalk from '/_gitalk.js';
import projectConfig from '/pagic.config.js';
export default {
    'ga': React.createElement(Ga, { id: "UA-45256157-14" }),
    'prev': {
        "text": "什么是 TypeScript",
        "link": "introduction/what-is-typescript.html"
    },
    'next': {
        "text": "Hello TypeScript",
        "link": "introduction/hello-typescript.html"
    },
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "introduction/get-typescript.html", owner: "xcatliu", pagerDirection: "first", repo: "typescript-tutorial", title: "\u5B89\u88C5 TypeScript" }),
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
    config: { "root": "/", ...projectConfig },
    'pagePath': "introduction/get-typescript.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "introduction/get-typescript.html",
    'title': "安装 TypeScript",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>安装 TypeScript</h1>\n<p>TypeScript 的命令行工具安装方法如下：</p>\n<pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> -g typescript\n</code></pre>\n<p>以上命令会在全局环境下安装 <code>tsc</code> 命令，安装完成之后，我们就可以在任何地方执行 <code>tsc</code> 命令了。</p>\n<p>编译一个 TypeScript 文件很简单：</p>\n<pre class="language-bash"><code class="language-bash">tsc hello.ts\n</code></pre>\n<p>我们约定使用 TypeScript 编写的文件以 <code>.ts</code> 为后缀，用 TypeScript 编写 React 时，以 <code>.tsx</code> 为后缀。</p>\n<h2 id="%E7%BC%96%E8%BE%91%E5%99%A8">编辑器<a class="anchor" href="#%E7%BC%96%E8%BE%91%E5%99%A8">§</a></h2>\n<p>TypeScript 最大的优势之一便是增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等。</p>\n<p>主流的编辑器都支持 TypeScript，这里我推荐使用 <a href="https://code.visualstudio.com/">Visual Studio Code</a>。</p>\n<p>它是一款开源，跨终端的轻量级编辑器，内置了对 TypeScript 的支持。</p>\n<p>另外它本身也是<a href="https://github.com/Microsoft/vscode/">用 TypeScript 编写的</a>。</p>\n<p>下载安装：https://code.visualstudio.com/</p>\n<p>获取其他编辑器或 IDE 对 TypeScript 的支持：</p>\n<ul>\n<li><a href="https://github.com/Microsoft/TypeScript-Sublime-Plugin">Sublime Text</a></li>\n<li><a href="https://www.jetbrains.com/webstorm/">WebStorm</a></li>\n<li><a href="https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support#vim">Vim</a></li>\n<li><a href="https://github.com/ananthakumaran/tide">Emacs</a></li>\n<li><a href="https://github.com/palantir/eclipse-typescript">Eclipse</a></li>\n<li><a href="https://atom.io/packages/atom-typescript">Atom</a></li>\n<li><a href="https://marketplace.visualstudio.com/search?term=TypeScriptTeam&amp;target=VS&amp;category=All%20categories&amp;vsVersion=vs2019&amp;sortBy=UpdatedDate">Visual Studio 2019</a></li>\n<li><a href="https://marketplace.visualstudio.com/search?term=TypeScriptTeam&amp;target=VS&amp;category=All%20categories&amp;vsVersion=vs15&amp;sortBy=UpdatedDate">Visual Studio 2017</a></li>\n</ul>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E7%BC%96%E8%BE%91%E5%99%A8">编辑器</a></li></ol></nav>'
        } })
};
