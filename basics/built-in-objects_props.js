import projectConfig from '/pagic.config.js';
import Gitalk from '/_gitalk.js';
import Ga from '/_ga.js';
export default {
    config: { "srcDir": "src", "publicDir": "public", "base": "/", ...projectConfig },
    'pagePath': "basics/built-in-objects.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "basics/built-in-objects.html",
    'title': "内置对象",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>内置对象</h1>\n<p>JavaScript 中有很多<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects">内置对象</a>，它们可以直接在 TypeScript 中当做定义好了的类型。</p>\n<p>内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。</p>\n<h2 id="ecmascript-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">ECMAScript 的内置对象<a class="anchor" href="#ecmascript-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">§</a></h2>\n<p>ECMAScript 标准提供的内置对象有：</p>\n<p><code>Boolean</code>、<code>Error</code>、<code>Date</code>、<code>RegExp</code> 等。</p>\n<p>我们可以在 TypeScript 中将变量定义为这些类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token known-class-name class-name">Boolean</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token known-class-name class-name">Boolean</span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> e<span class="token operator">:</span> <span class="token known-class-name class-name">Error</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token known-class-name class-name">Error</span></span><span class="token punctuation">(</span><span class="token string">\'Error occurred\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> d<span class="token operator">:</span> <span class="token known-class-name class-name">Date</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token known-class-name class-name">Date</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> r<span class="token operator">:</span> <span class="token known-class-name class-name">RegExp</span> <span class="token operator">=</span> <span class="token regex">/[a-z]/</span><span class="token punctuation">;</span>\n</code></pre>\n<p>更多的内置对象，可以查看 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects">MDN 的文档</a>。</p>\n<p>而他们的定义文件，则在 <a href="https://github.com/Microsoft/TypeScript/tree/master/src/lib">TypeScript 核心库的定义文件</a>中。</p>\n<h2 id="dom-%E5%92%8C-bom-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">DOM 和 BOM 的内置对象<a class="anchor" href="#dom-%E5%92%8C-bom-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">§</a></h2>\n<p>DOM 和 BOM 提供的内置对象有：</p>\n<p><code>Document</code>、<code>HTMLElement</code>、<code>Event</code>、<code>NodeList</code> 等。</p>\n<p>TypeScript 中会经常用到这些类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> body<span class="token operator">:</span> <span class="token maybe-class-name">HTMLElement</span> <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token property-access">body</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> allDiv<span class="token operator">:</span> <span class="token maybe-class-name">NodeList</span> <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token maybe-class-name">MouseEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Do something</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>它们的定义文件同样在 <a href="https://github.com/Microsoft/TypeScript/tree/master/src/lib">TypeScript 核心库的定义文件</a>中。</p>\n<h2 id="typescript-%E6%A0%B8%E5%BF%83%E5%BA%93%E7%9A%84%E5%AE%9A%E4%B9%89%E6%96%87%E4%BB%B6">TypeScript 核心库的定义文件<a class="anchor" href="#typescript-%E6%A0%B8%E5%BF%83%E5%BA%93%E7%9A%84%E5%AE%9A%E4%B9%89%E6%96%87%E4%BB%B6">§</a></h2>\n<p><a href="https://github.com/Microsoft/TypeScript/tree/master/src/lib">TypeScript 核心库的定义文件</a>中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中的。</p>\n<p>当你在使用一些常用的方法的时候，TypeScript 实际上已经帮你做了很多类型判断的工作了，比如：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token known-class-name class-name">Math</span><span class="token punctuation">.</span><span class="token method function property-access">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">\'2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(1,14): error TS2345: Argument of type \'string\' is not assignable to parameter of type \'number\'.</span>\n</code></pre>\n<p>上面的例子中，<code>Math.pow</code> 必须接受两个 <code>number</code> 类型的参数。事实上 <code>Math.pow</code> 的类型定义如下：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token known-class-name class-name">Math</span></span> <span class="token punctuation">{</span>\n    <span class="token doc-comment comment">/**\n     * Returns the value of a base expression taken to a specified power.\n     * <span class="token keyword">@param</span> <span class="token parameter">x</span> The base value of the expression.\n     * <span class="token keyword">@param</span> <span class="token parameter">y</span> The exponent value of the expression.\n     */</span>\n    <span class="token function">pow</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>再举一个 DOM 中的例子：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token property-access">targetCurrent</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(2,17): error TS2339: Property \'targetCurrent\' does not exist on type \'MouseEvent\'.</span>\n</code></pre>\n<p>上面的例子中，<code>addEventListener</code> 方法是在 TypeScript 核心库中定义的：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Document</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token maybe-class-name">Node</span></span><span class="token punctuation">,</span> <span class="token maybe-class-name">GlobalEventHandlers</span><span class="token punctuation">,</span> <span class="token maybe-class-name">NodeSelector</span><span class="token punctuation">,</span> <span class="token maybe-class-name">DocumentEvent</span> <span class="token punctuation">{</span>\n    <span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token function-variable function">listener</span><span class="token operator">:</span> <span class="token punctuation">(</span>ev<span class="token operator">:</span> <span class="token maybe-class-name">MouseEvent</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token builtin">any</span><span class="token punctuation">,</span> useCapture<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>所以 <code>e</code> 被推断成了 <code>MouseEvent</code>，而 <code>MouseEvent</code> 是没有 <code>targetCurrent</code> 属性的，所以报错了。</p>\n<p>注意，TypeScript 核心库的定义中不包含 Node.js 部分。</p>\n<h2 id="%E7%94%A8-typescript-%E5%86%99-node.js">用 TypeScript 写 Node.js<a class="anchor" href="#%E7%94%A8-typescript-%E5%86%99-node.js">§</a></h2>\n<p>Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：</p>\n<pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> @types/node --save-dev\n</code></pre>\n<h2 id="%E5%8F%82%E8%80%83">参考<a class="anchor" href="#%E5%8F%82%E8%80%83">§</a></h2>\n<ul>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects">内置对象</a></li>\n<li><a href="https://github.com/Microsoft/TypeScript/tree/master/src/lib">TypeScript 核心库的定义文件</a></li>\n</ul>\n<hr>\n<ul>\n<li><a href="declaration-files.html">上一章：声明文件</a></li>\n<li><a href="../advanced/index.html">下一章：进阶</a></li>\n</ul>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#ecmascript-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">ECMAScript 的内置对象</a></li><li><a href="#dom-%E5%92%8C-bom-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">DOM 和 BOM 的内置对象</a></li><li><a href="#typescript-%E6%A0%B8%E5%BF%83%E5%BA%93%E7%9A%84%E5%AE%9A%E4%B9%89%E6%96%87%E4%BB%B6">TypeScript 核心库的定义文件</a></li><li><a href="#%E7%94%A8-typescript-%E5%86%99-node.js">用 TypeScript 写 Node.js</a></li><li><a href="#%E5%8F%82%E8%80%83">参考</a></li></ol></nav>'
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
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "basics/built-in-objects.html", owner: "xcatliu", repo: "typescript-tutorial", title: "\u5185\u7F6E\u5BF9\u8C61" }),
    'ga': React.createElement(Ga, { id: "UA-45256157-14" })
};
