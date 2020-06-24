import projectConfig from '/pagic.config.js';
import Gitalk from '/_gitalk.js';
import Ga from '/_ga.js';
export default {
    config: { "srcDir": "src", "publicDir": "public", "base": "/", ...projectConfig },
    'pagePath': "basics/union-types.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "basics/union-types.html",
    'title': "联合类型",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>联合类型</h1>\n<p>联合类型（Union Types）表示取值可以为多种类型中的一种。</p>\n<h2 id="%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90">简单的例子<a class="anchor" href="#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90">§</a></h2>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token string">\'seven\'</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n</code></pre>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(2,1): error TS2322: Type \'boolean\' is not assignable to type \'string | number\'.</span>\n<span class="token comment">//   Type \'boolean\' is not assignable to type \'number\'.</span>\n</code></pre>\n<p>联合类型使用 <code>|</code> 分隔每个类型。</p>\n<p>这里的 <code>let myFavoriteNumber: string | number</code> 的含义是，允许 <code>myFavoriteNumber</code> 的类型是 <code>string</code> 或者 <code>number</code>，但是不能是其他类型。</p>\n<h2 id="%E8%AE%BF%E9%97%AE%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%B1%9E%E6%80%A7%E6%88%96%E6%96%B9%E6%B3%95">访问联合类型的属性或方法<a class="anchor" href="#%E8%AE%BF%E9%97%AE%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%B1%9E%E6%80%A7%E6%88%96%E6%96%B9%E6%B3%95">§</a></h2>\n<p>当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们<strong>只能访问此联合类型的所有类型里共有的属性或方法</strong>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">getLength</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> something<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// index.ts(2,22): error TS2339: Property \'length\' does not exist on type \'string | number\'.</span>\n<span class="token comment">//   Property \'length\' does not exist on type \'number\'.</span>\n</code></pre>\n<p>上例中，<code>length</code> 不是 <code>string</code> 和 <code>number</code> 的共有属性，所以会报错。</p>\n<p>访问 <code>string</code> 和 <code>number</code> 的共有属性是没问题的：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">getString</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> something<span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token string">\'seven\'</span><span class="token punctuation">;</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>myFavoriteNumber<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>myFavoriteNumber<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 编译时报错</span>\n\n<span class="token comment">// index.ts(5,30): error TS2339: Property \'length\' does not exist on type \'number\'.</span>\n</code></pre>\n<p>上例中，第二行的 <code>myFavoriteNumber</code> 被推断成了 <code>string</code>，访问它的 <code>length</code> 属性不会报错。</p>\n<p>而第四行的 <code>myFavoriteNumber</code> 被推断成了 <code>number</code>，访问它的 <code>length</code> 属性时就报错了。</p>\n<h2 id="%E5%8F%82%E8%80%83">参考<a class="anchor" href="#%E5%8F%82%E8%80%83">§</a></h2>\n<ul>\n<li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types">Advanced Types # Union Types</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B">中文版</a>）</li>\n</ul>\n<hr>\n<ul>\n<li><a href="type-inference.html">上一章：类型推论</a></li>\n<li><a href="type-of-object-interfaces.html">下一章：对象的类型——接口</a></li>\n</ul>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90">简单的例子</a></li><li><a href="#%E8%AE%BF%E9%97%AE%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%B1%9E%E6%80%A7%E6%88%96%E6%96%B9%E6%B3%95">访问联合类型的属性或方法</a></li><li><a href="#%E5%8F%82%E8%80%83">参考</a></li></ol></nav>'
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
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "basics/union-types.html", owner: "xcatliu", repo: "typescript-tutorial", title: "\u8054\u5408\u7C7B\u578B" }),
    'ga': React.createElement(Ga, { id: "UA-45256157-14" })
};
