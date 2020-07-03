import Ga from '/_ga.js';
import Gitalk from '/_gitalk.js';
import projectConfig from '/pagic.config.js';
export default {
    'ga': React.createElement(Ga, { id: "UA-45256157-14" }),
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "advanced/declaration-merging.html", owner: "xcatliu", pagerDirection: "first", repo: "typescript-tutorial", title: "\u58F0\u660E\u5408\u5E76" }),
    'prev': {
        "text": "泛型",
        "link": "advanced/generics.html"
    },
    'next': {
        "text": "扩展阅读",
        "link": "advanced/further-reading.html"
    },
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
    config: { "srcDir": "src", "publicDir": "public", "base": "/", ...projectConfig },
    'pagePath': "advanced/declaration-merging.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "advanced/declaration-merging.html",
    'title': "声明合并",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>声明合并</h1>\n<p>如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型：</p>\n<h2 id="%E5%87%BD%E6%95%B0%E7%9A%84%E5%90%88%E5%B9%B6">函数的合并<a class="anchor" href="#%E5%87%BD%E6%95%B0%E7%9A%84%E5%90%88%E5%B9%B6">§</a></h2>\n<p><a href="../basics/type-of-function.html#%E9%87%8D%E8%BD%BD">之前学习过</a>，我们可以使用重载定义多个函数类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">\'number\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token known-class-name class-name">Number</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">split</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">\'string\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token method function property-access">split</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h2 id="%E6%8E%A5%E5%8F%A3%E7%9A%84%E5%90%88%E5%B9%B6">接口的合并<a class="anchor" href="#%E6%8E%A5%E5%8F%A3%E7%9A%84%E5%90%88%E5%B9%B6">§</a></h2>\n<p>接口中的属性在合并时会简单的合并到一个接口中：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Alarm</span></span> <span class="token punctuation">{</span>\n    price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Alarm</span></span> <span class="token punctuation">{</span>\n    weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>相当于：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Alarm</span></span> <span class="token punctuation">{</span>\n    price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>注意，<strong>合并的属性的类型必须是唯一的</strong>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Alarm</span></span> <span class="token punctuation">{</span>\n    price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Alarm</span></span> <span class="token punctuation">{</span>\n    price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>  <span class="token comment">// 虽然重复了，但是类型都是 `number`，所以不会报错</span>\n    weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Alarm</span></span> <span class="token punctuation">{</span>\n    price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Alarm</span></span> <span class="token punctuation">{</span>\n    price<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>  <span class="token comment">// 类型不一致，会报错</span>\n    weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// index.ts(5,3): error TS2403: Subsequent variable declarations must have the same type.  Variable \'price\' must be of type \'number\', but here has type \'string\'.</span>\n</code></pre>\n<p>接口中方法的合并，与函数的合并一样：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Alarm</span></span> <span class="token punctuation">{</span>\n    price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Alarm</span></span> <span class="token punctuation">{</span>\n    weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>相当于：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Alarm</span></span> <span class="token punctuation">{</span>\n    price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h2 id="%E7%B1%BB%E7%9A%84%E5%90%88%E5%B9%B6">类的合并<a class="anchor" href="#%E7%B1%BB%E7%9A%84%E5%90%88%E5%B9%B6">§</a></h2>\n<p>类的合并与接口的合并规则一致。</p>\n<h2 id="%E5%8F%82%E8%80%83">参考<a class="anchor" href="#%E5%8F%82%E8%80%83">§</a></h2>\n<ul>\n<li><a href="http://www.typescriptlang.org/docs/handbook/declaration-merging.html">Declaration Merging</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Declaration%20Merging.html">中文版</a>）</li>\n</ul>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%87%BD%E6%95%B0%E7%9A%84%E5%90%88%E5%B9%B6">函数的合并</a></li><li><a href="#%E6%8E%A5%E5%8F%A3%E7%9A%84%E5%90%88%E5%B9%B6">接口的合并</a></li><li><a href="#%E7%B1%BB%E7%9A%84%E5%90%88%E5%B9%B6">类的合并</a></li><li><a href="#%E5%8F%82%E8%80%83">参考</a></li></ol></nav>'
        } })
};
