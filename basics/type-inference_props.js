import projectConfig from '/pagic.config.js';
import Ga from '/_ga.js';
import Gitalk from '/_gitalk.js';
export default {
    'prev': {
        "title": "任意值",
        "link": "basics/any.html"
    },
    'next': {
        "title": "联合类型",
        "link": "basics/union-types.html"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "basics/type-inference.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "basics/type-inference.html",
    'title': "类型推论",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>类型推论</h1>\n<p>如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。</p>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E5%9E%8B%E6%8E%A8%E8%AE%BA">什么是类型推论<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E5%9E%8B%E6%8E%A8%E8%AE%BA">§</a></h2>\n<p>以下代码虽然没有指定类型，但是会在编译的时候报错：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> myFavoriteNumber <span class="token operator">=</span> <span class="token string">\'seven\'</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(2,1): error TS2322: Type \'number\' is not assignable to type \'string\'.</span>\n</code></pre>\n<p>事实上，它等价于：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">\'seven\'</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(2,1): error TS2322: Type \'number\' is not assignable to type \'string\'.</span>\n</code></pre>\n<p>TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。</p>\n<p><strong>如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 <code>any</code> 类型而完全不被类型检查</strong>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> myFavoriteNumber<span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token string">\'seven\'</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E5%8F%82%E8%80%83">参考<a class="anchor" href="#%E5%8F%82%E8%80%83">§</a></h2>\n<ul>\n<li><a href="http://www.typescriptlang.org/docs/handbook/type-inference.html">Type Inference</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html">中文版</a>）</li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-45256157-14" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u7C7B\u578B\u63A8\u8BBA"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。</p>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E5%9E%8B%E6%8E%A8%E8%AE%BA">什么是类型推论<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E5%9E%8B%E6%8E%A8%E8%AE%BA">§</a></h2>\n<p>以下代码虽然没有指定类型，但是会在编译的时候报错：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> myFavoriteNumber <span class="token operator">=</span> <span class="token string">\'seven\'</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(2,1): error TS2322: Type \'number\' is not assignable to type \'string\'.</span>\n</code></pre>\n<p>事实上，它等价于：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">\'seven\'</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(2,1): error TS2322: Type \'number\' is not assignable to type \'string\'.</span>\n</code></pre>\n<p>TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。</p>\n<p><strong>如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 <code>any</code> 类型而完全不被类型检查</strong>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> myFavoriteNumber<span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token string">\'seven\'</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E5%8F%82%E8%80%83">参考<a class="anchor" href="#%E5%8F%82%E8%80%83">§</a></h2>\n<ul>\n<li><a href="http://www.typescriptlang.org/docs/handbook/type-inference.html">Type Inference</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html">中文版</a>）</li>\n</ul>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E5%9E%8B%E6%8E%A8%E8%AE%BA">什么是类型推论</a></li><li><a href="#%E5%8F%82%E8%80%83">参考</a></li></ol></nav>'
        } }),
    'author': "xcatliu",
    'contributors': [
        "xcatliu",
        "Wang Guan"
    ],
    'date': "2016-05-31T09:20:49.000Z",
    'updated': "2020-07-02T14:29:45.000Z",
    'excerpt': "如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。 什么是类型推论 以下代码虽然没有指定类型，但是会在编译的时候报错： let myFavoriteNumber = 'seven'; myFavoriteNumber ...",
    'cover': undefined,
    'sidebar': [
        {
            "link": "introduction/index.html",
            "children": [
                {
                    "title": "什么是 TypeScript",
                    "link": "introduction/what-is-typescript.html",
                    "pagePath": "introduction/what-is-typescript.md"
                },
                {
                    "title": "安装 TypeScript",
                    "link": "introduction/get-typescript.html",
                    "pagePath": "introduction/get-typescript.md"
                },
                {
                    "title": "Hello TypeScript",
                    "link": "introduction/hello-typescript.html",
                    "pagePath": "introduction/hello-typescript.md"
                }
            ],
            "title": "简介",
            "pagePath": "introduction/README.md"
        },
        {
            "link": "basics/index.html",
            "children": [
                {
                    "title": "原始数据类型",
                    "link": "basics/primitive-data-types.html",
                    "pagePath": "basics/primitive-data-types.md"
                },
                {
                    "title": "任意值",
                    "link": "basics/any.html",
                    "pagePath": "basics/any.md"
                },
                {
                    "title": "类型推论",
                    "link": "basics/type-inference.html",
                    "pagePath": "basics/type-inference.md"
                },
                {
                    "title": "联合类型",
                    "link": "basics/union-types.html",
                    "pagePath": "basics/union-types.md"
                },
                {
                    "title": "对象的类型——接口",
                    "link": "basics/type-of-object-interfaces.html",
                    "pagePath": "basics/type-of-object-interfaces.md"
                },
                {
                    "title": "数组的类型",
                    "link": "basics/type-of-array.html",
                    "pagePath": "basics/type-of-array.md"
                },
                {
                    "title": "函数的类型",
                    "link": "basics/type-of-function.html",
                    "pagePath": "basics/type-of-function.md"
                },
                {
                    "title": "类型断言",
                    "link": "basics/type-assertion.html",
                    "pagePath": "basics/type-assertion.md"
                },
                {
                    "title": "声明文件",
                    "link": "basics/declaration-files.html",
                    "pagePath": "basics/declaration-files.md"
                },
                {
                    "title": "内置对象",
                    "link": "basics/built-in-objects.html",
                    "pagePath": "basics/built-in-objects.md"
                }
            ],
            "title": "基础",
            "pagePath": "basics/README.md"
        },
        {
            "link": "advanced/index.html",
            "children": [
                {
                    "title": "类型别名",
                    "link": "advanced/type-aliases.html",
                    "pagePath": "advanced/type-aliases.md"
                },
                {
                    "title": "字符串字面量类型",
                    "link": "advanced/string-literal-types.html",
                    "pagePath": "advanced/string-literal-types.md"
                },
                {
                    "title": "元组",
                    "link": "advanced/tuple.html",
                    "pagePath": "advanced/tuple.md"
                },
                {
                    "title": "枚举",
                    "link": "advanced/enum.html",
                    "pagePath": "advanced/enum.md"
                },
                {
                    "title": "类",
                    "link": "advanced/class.html",
                    "pagePath": "advanced/class.md"
                },
                {
                    "title": "类与接口",
                    "link": "advanced/class-and-interfaces.html",
                    "pagePath": "advanced/class-and-interfaces.md"
                },
                {
                    "title": "泛型",
                    "link": "advanced/generics.html",
                    "pagePath": "advanced/generics.md"
                },
                {
                    "title": "声明合并",
                    "link": "advanced/declaration-merging.html",
                    "pagePath": "advanced/declaration-merging.md"
                },
                {
                    "title": "扩展阅读",
                    "link": "advanced/further-reading.html",
                    "pagePath": "advanced/further-reading.md"
                }
            ],
            "title": "进阶",
            "pagePath": "advanced/README.md"
        },
        {
            "link": "engineering/index.html",
            "children": [
                {
                    "title": "代码检查",
                    "link": "engineering/lint.html",
                    "pagePath": "engineering/lint.md"
                },
                {
                    "title": "编译选项",
                    "link": "engineering/compiler-options.html",
                    "pagePath": "engineering/compiler-options.md"
                }
            ],
            "title": "工程",
            "pagePath": "engineering/README.md"
        },
        {
            "title": "感谢",
            "link": "thanks/index.html",
            "pagePath": "thanks/README.md"
        }
    ],
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "basics/type-inference.html", owner: "xcatliu", pagerDirection: "first", repo: "typescript-tutorial", title: "\u7C7B\u578B\u63A8\u8BBA" })
};
