import projectConfig from '/pagic.config.js';
import Gitalk from '/_gitalk.js';
import Ga from '/_ga.js';
export default {
    config: { "srcDir": "src", "publicDir": "public", "base": "/", ...projectConfig },
    'pagePath': "basics/type-of-array.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "basics/type-of-array.html",
    'title': "数组的类型",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>数组的类型</h1>\n<p>在 TypeScript 中，数组类型有多种定义方式，比较灵活。</p>\n<h2 id="%E3%80%8C%E7%B1%BB%E5%9E%8B-%2B-%E6%96%B9%E6%8B%AC%E5%8F%B7%E3%80%8D%E8%A1%A8%E7%A4%BA%E6%B3%95">「类型 + 方括号」表示法<a class="anchor" href="#%E3%80%8C%E7%B1%BB%E5%9E%8B-%2B-%E6%96%B9%E6%8B%AC%E5%8F%B7%E3%80%8D%E8%A1%A8%E7%A4%BA%E6%B3%95">§</a></h2>\n<p>最简单的方法是使用「类型 + 方括号」来表示数组：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> fibonacci<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n<p>数组的项中<strong>不允许</strong>出现其他的类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> fibonacci<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Type \'string\' is not assignable to type \'number\'.</span>\n</code></pre>\n<p>数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> fibonacci<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nfibonacci<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token string">\'8\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Argument of type \'"8"\' is not assignable to parameter of type \'number\'.</span>\n</code></pre>\n<p>上例中，<code>push</code> 方法只允许传入 <code>number</code> 类型的参数，但是却传了一个 <code>&quot;8&quot;</code> 类型的参数，所以报错了。这里 <code>&quot;8&quot;</code> 是一个字符串字面量类型，会在后续章节中详细介绍。</p>\n<h2 id="%E6%95%B0%E7%BB%84%E6%B3%9B%E5%9E%8B">数组泛型<a class="anchor" href="#%E6%95%B0%E7%BB%84%E6%B3%9B%E5%9E%8B">§</a></h2>\n<p>我们也可以使用数组泛型（Array Generic） <code>Array&lt;elemType&gt;</code> 来表示数组：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> fibonacci<span class="token operator">:</span> <span class="token known-class-name class-name">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n<p>关于泛型，可以参考<a href="../advanced/generics.html">泛型</a>一章。</p>\n<h2 id="%E7%94%A8%E6%8E%A5%E5%8F%A3%E8%A1%A8%E7%A4%BA%E6%95%B0%E7%BB%84">用接口表示数组<a class="anchor" href="#%E7%94%A8%E6%8E%A5%E5%8F%A3%E8%A1%A8%E7%A4%BA%E6%95%B0%E7%BB%84">§</a></h2>\n<p>接口也可以用来描述数组：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">NumberArray</span></span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> fibonacci<span class="token operator">:</span> <span class="token maybe-class-name">NumberArray</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n<p><code>NumberArray</code> 表示：只要索引的类型是数字时，那么值的类型必须是数字。</p>\n<p>虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。</p>\n<p>不过有一种情况例外，那就是它常用来表示类数组。</p>\n<h2 id="%E7%B1%BB%E6%95%B0%E7%BB%84">类数组<a class="anchor" href="#%E7%B1%BB%E6%95%B0%E7%BB%84">§</a></h2>\n<p>类数组（Array-like Object）不是数组类型，比如 <code>arguments</code>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> args<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> arguments<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Type \'IArguments\' is missing the following properties from type \'number[]\': pop, push, concat, join, and 24 more.</span>\n</code></pre>\n<p>上例中，<code>arguments</code> 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> args<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n        length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n        callee<span class="token operator">:</span> <span class="token known-class-name class-name">Function</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token operator">=</span> arguments<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>在这个例子中，我们除了约束当索引的类型是数字时，值的类型必须是数字之外，也约束了它还有 <code>length</code> 和 <code>callee</code> 两个属性。</p>\n<p>事实上常用的类数组都有自己的接口定义，如 <code>IArguments</code>, <code>NodeList</code>, <code>HTMLCollection</code> 等：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> args<span class="token operator">:</span> <span class="token maybe-class-name">IArguments</span> <span class="token operator">=</span> arguments<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>其中 <code>IArguments</code> 是 TypeScript 中定义好了的类型，它实际上就是：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">IArguments</span></span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>\n    length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    callee<span class="token operator">:</span> <span class="token known-class-name class-name">Function</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>关于内置对象，可以参考<a href="./built-in-objects.html">内置对象</a>一章。</p>\n<h2 id="any-%E5%9C%A8%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8">any 在数组中的应用<a class="anchor" href="#any-%E5%9C%A8%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8">§</a></h2>\n<p>一个比较常见的做法是，用 <code>any</code> 表示数组中允许出现任意类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> list<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'xcatliu\'</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> website<span class="token operator">:</span> <span class="token string">\'<a class="token url-link" href="http://xcatliu.com">http://xcatliu.com</a>\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E5%8F%82%E8%80%83">参考<a class="anchor" href="#%E5%8F%82%E8%80%83">§</a></h2>\n<ul>\n<li><a href="http://www.typescriptlang.org/docs/handbook/basic-types.html#array">Basic Types # Array</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#%E6%95%B0%E7%BB%84">中文版</a>）</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types">Interfaces # Indexable Types</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html#%E6%95%B0%E7%BB%84%E7%B1%BB%E5%9E%8B">中文版</a>）</li>\n</ul>\n<hr>\n<ul>\n<li><a href="type-of-object-interfaces.html">上一章：对象的类型——接口</a></li>\n<li><a href="type-of-function.html">下一章：函数的类型</a></li>\n</ul>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E3%80%8C%E7%B1%BB%E5%9E%8B-%2B-%E6%96%B9%E6%8B%AC%E5%8F%B7%E3%80%8D%E8%A1%A8%E7%A4%BA%E6%B3%95">「类型 + 方括号」表示法</a></li><li><a href="#%E6%95%B0%E7%BB%84%E6%B3%9B%E5%9E%8B">数组泛型</a></li><li><a href="#%E7%94%A8%E6%8E%A5%E5%8F%A3%E8%A1%A8%E7%A4%BA%E6%95%B0%E7%BB%84">用接口表示数组</a></li><li><a href="#%E7%B1%BB%E6%95%B0%E7%BB%84">类数组</a></li><li><a href="#any-%E5%9C%A8%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8">any 在数组中的应用</a></li><li><a href="#%E5%8F%82%E8%80%83">参考</a></li></ol></nav>'
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
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "basics/type-of-array.html", owner: "xcatliu", pagerDirection: "first", repo: "typescript-tutorial", title: "\u6570\u7EC4\u7684\u7C7B\u578B" }),
    'ga': React.createElement(Ga, { id: "UA-45256157-14" })
};
