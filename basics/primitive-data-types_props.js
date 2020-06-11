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
                "link": "https://github.com/xcatliu/typescript-tutorial"
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
    'pagePath': "basics/primitive-data-types.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "basics/primitive-data-types.html",
    'title': "原始数据类型",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1 id="%E5%8E%9F%E5%A7%8B%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">原始数据类型 <a class="header-anchor" href="#%E5%8E%9F%E5%A7%8B%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">§</a></h1>\n<p>JavaScript 的类型分为两种：原始数据类型（<a href="https://developer.mozilla.org/en-US/docs/Glossary/Primitive">Primitive data types</a>）和对象类型（Object types）。</p>\n<p>原始数据类型包括：布尔值、数值、字符串、<code>null</code>、<code>undefined</code> 以及 <a href="http://es6.ruanyifeng.com/#docs/symbol">ES6 中的新类型 <code>Symbol</code></a>。</p>\n<p>本节主要介绍<strong>前五种</strong>原始数据类型在 TypeScript 中的应用。</p>\n<h2 id="%E5%B8%83%E5%B0%94%E5%80%BC">布尔值 <a class="header-anchor" href="#%E5%B8%83%E5%B0%94%E5%80%BC">§</a></h2>\n<p>布尔值是最基础的数据类型，在 TypeScript 中，使用 <code>boolean</code> 定义布尔值类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> isDone<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 编译通过</span>\n<span class="token comment">// 后面约定，未强调编译错误的代码片段，默认为编译通过</span>\n</code></pre>\n<p>注意，使用构造函数 <code>Boolean</code> 创造的对象<strong>不是</strong>布尔值：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> createdByNewBoolean<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token known-class-name class-name">Boolean</span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Type \'Boolean\' is not assignable to type \'boolean\'.</span>\n<span class="token comment">//   \'boolean\' is a primitive, but \'Boolean\' is a wrapper object. Prefer using \'boolean\' when possible.</span>\n</code></pre>\n<p>事实上 <code>new Boolean()</code> 返回的是一个 <code>Boolean</code> 对象：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> createdByNewBoolean<span class="token operator">:</span> <span class="token known-class-name class-name">Boolean</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token known-class-name class-name">Boolean</span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>直接调用 <code>Boolean</code> 也可以返回一个 <code>boolean</code> 类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> createdByBoolean<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token known-class-name class-name">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>在 TypeScript 中，<code>boolean</code> 是 JavaScript 中的基本类型，而 <code>Boolean</code> 是 JavaScript 中的构造函数。其他基本类型（除了 <code>null</code> 和 <code>undefined</code>）一样，不再赘述。</p>\n<h2 id="%E6%95%B0%E5%80%BC">数值 <a class="header-anchor" href="#%E6%95%B0%E5%80%BC">§</a></h2>\n<p>使用 <code>number</code> 定义数值类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> decLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> hexLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0xf00d</span><span class="token punctuation">;</span>\n<span class="token comment">// ES6 中的二进制表示法</span>\n<span class="token keyword">let</span> binaryLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0b1010</span><span class="token punctuation">;</span>\n<span class="token comment">// ES6 中的八进制表示法</span>\n<span class="token keyword">let</span> octalLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0o744</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> notANumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">NaN</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> infinityNumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>\n</code></pre>\n<p>编译结果：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> decLiteral <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> hexLiteral <span class="token operator">=</span> <span class="token number">0xf00d</span><span class="token punctuation">;</span>\n<span class="token comment">// ES6 中的二进制表示法</span>\n<span class="token keyword">var</span> binaryLiteral <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n<span class="token comment">// ES6 中的八进制表示法</span>\n<span class="token keyword">var</span> octalLiteral <span class="token operator">=</span> <span class="token number">484</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> notANumber <span class="token operator">=</span> <span class="token number">NaN</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> infinityNumber <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>\n</code></pre>\n<p>其中 <code>0b1010</code> 和 <code>0o744</code> 是 <a href="http://es6.ruanyifeng.com/#docs/number#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%92%8C%E5%85%AB%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E6%B3%95">ES6 中的二进制和八进制表示法</a>，它们会被编译为十进制数字。</p>\n<h2 id="%E5%AD%97%E7%AC%A6%E4%B8%B2">字符串 <a class="header-anchor" href="#%E5%AD%97%E7%AC%A6%E4%B8%B2">§</a></h2>\n<p>使用 <code>string</code> 定义字符串类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> myName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">\'Tom\'</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> myAge<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 模板字符串</span>\n<span class="token keyword">let</span> sentence<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>myName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.\nI\'ll be </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>myAge <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old next month.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n</code></pre>\n<p>编译结果：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">\'Tom\'</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> myAge <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>\n<span class="token comment">// 模板字符串</span>\n<span class="token keyword">var</span> sentence <span class="token operator">=</span> <span class="token string">"Hello, my name is "</span> <span class="token operator">+</span> myName <span class="token operator">+</span> <span class="token string">".\nI\'ll be "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>myAge <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" years old next month."</span><span class="token punctuation">;</span>\n</code></pre>\n<p>其中 <code>`</code> 用来定义 <a href="http://es6.ruanyifeng.com/#docs/string#%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2">ES6 中的模板字符串</a>，<code>${expr}</code> 用来在模板字符串中嵌入表达式。</p>\n<h2 id="%E7%A9%BA%E5%80%BC">空值 <a class="header-anchor" href="#%E7%A9%BA%E5%80%BC">§</a></h2>\n<p>JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 <code>void</code> 表示没有任何返回值的函数：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">alertName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'My name is Tom\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>声明一个 <code>void</code> 类型的变量没有什么用，因为你只能将它赋值为 <code>undefined</code> 和 <code>null</code>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> unusable<span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="null-%E5%92%8C-undefined">Null 和 Undefined <a class="header-anchor" href="#null-%E5%92%8C-undefined">§</a></h2>\n<p>在 TypeScript 中，可以使用 <code>null</code> 和 <code>undefined</code> 来定义这两个原始数据类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> n<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n</code></pre>\n<p>与 <code>void</code> 的区别是，<code>undefined</code> 和 <code>null</code> 是所有类型的子类型。也就是说 <code>undefined</code> 类型的变量，可以赋值给 <code>number</code> 类型的变量：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// 这样不会报错</span>\n<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n</code></pre>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// 这样也不会报错</span>\n<span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> u<span class="token punctuation">;</span>\n</code></pre>\n<p>而 <code>void</code> 类型的变量不能赋值给 <code>number</code> 类型的变量：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> u<span class="token punctuation">;</span>\n\n<span class="token comment">// Type \'void\' is not assignable to type \'number\'.</span>\n</code></pre>\n<h2 id="%E5%8F%82%E8%80%83">参考 <a class="header-anchor" href="#%E5%8F%82%E8%80%83">§</a></h2>\n<ul>\n<li><a href="http://www.typescriptlang.org/docs/handbook/basic-types.html">Basic Types</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html">中文版</a>）</li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Glossary/Primitive">Primitive data types</a></li>\n<li><a href="http://es6.ruanyifeng.com/#docs/symbol">ES6 中的新类型 <code>Symbol</code></a></li>\n<li><a href="http://es6.ruanyifeng.com/#docs/number#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%92%8C%E5%85%AB%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E6%B3%95">ES6 中的二进制和八进制表示法</a></li>\n<li><a href="http://es6.ruanyifeng.com/#docs/string#%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2">ES6 中的模板字符串</a></li>\n</ul>\n<hr>\n<ul>\n<li><a href="index.html">上一章：基础</a></li>\n<li><a href="any.html">下一章：任意值</a></li>\n</ul>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
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
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "basics/primitive-data-types.html", owner: "xcatliu", repo: "typescript-tutorial", title: "\u539F\u59CB\u6570\u636E\u7C7B\u578B" }),
    'ga': React.createElement(Ga, { id: "UA-45256157-14" })
};
