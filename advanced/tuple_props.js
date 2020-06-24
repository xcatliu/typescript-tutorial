import projectConfig from '/pagic.config.js';
import Gitalk from '/_gitalk.js';
import Ga from '/_ga.js';
export default {
    config: { "srcDir": "src", "publicDir": "public", "base": "/", ...projectConfig },
    'pagePath': "advanced/tuple.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "advanced/tuple.html",
    'title': "元组",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>元组</h1>\n<p>数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。</p>\n<p>元组起源于函数编程语言（如 F#），这些语言中会频繁使用元组。</p>\n<h2 id="%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90">简单的例子<a class="anchor" href="#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90">§</a></h2>\n<p>定义一对值分别为 <code>string</code> 和 <code>number</code> 的元组：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'Tom\'</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n<p>当赋值或访问一个已知索引的元素时，会得到正确的类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\ntom<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">\'Tom\'</span><span class="token punctuation">;</span>\ntom<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>\n\ntom<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token method function property-access">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ntom<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token method function property-access">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>也可以只赋值其中一项：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\ntom<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">\'Tom\'</span><span class="token punctuation">;</span>\n</code></pre>\n<p>但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\ntom <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'Tom\'</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\ntom <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'Tom\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Property \'1\' is missing in type \'[string]\' but required in type \'[string, number]\'.</span>\n</code></pre>\n<h2 id="%E8%B6%8A%E7%95%8C%E7%9A%84%E5%85%83%E7%B4%A0">越界的元素<a class="anchor" href="#%E8%B6%8A%E7%95%8C%E7%9A%84%E5%85%83%E7%B4%A0">§</a></h2>\n<p>当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\ntom <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'Tom\'</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\ntom<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token string">\'male\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ntom<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Argument of type \'true\' is not assignable to parameter of type \'string | number\'.</span>\n</code></pre>\n<h2 id="%E5%8F%82%E8%80%83">参考<a class="anchor" href="#%E5%8F%82%E8%80%83">§</a></h2>\n<ul>\n<li><a href="http://www.typescriptlang.org/docs/handbook/basic-types.html#tuple">Basic Types # Tuple</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#%E5%85%83%E7%BB%84-tuple">中文版</a>）</li>\n</ul>\n<hr>\n<ul>\n<li><a href="string-literal-types.html">上一章：字符串字面量类型</a></li>\n<li><a href="enum.html">下一章：枚举</a></li>\n</ul>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90">简单的例子</a></li><li><a href="#%E8%B6%8A%E7%95%8C%E7%9A%84%E5%85%83%E7%B4%A0">越界的元素</a></li><li><a href="#%E5%8F%82%E8%80%83">参考</a></li></ol></nav>'
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
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "advanced/tuple.html", owner: "xcatliu", repo: "typescript-tutorial", title: "\u5143\u7EC4" }),
    'ga': React.createElement(Ga, { id: "UA-45256157-14" })
};
