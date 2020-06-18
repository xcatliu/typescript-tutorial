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
    'pagePath': "basics/type-of-function.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "basics/type-of-function.html",
    'title': "函数的类型",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>函数的类型</h1>\n<blockquote>\n<p><a href="https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch2.html">函数是 JavaScript 中的一等公民</a></p>\n</blockquote>\n<h2 id="%E5%87%BD%E6%95%B0%E5%A3%B0%E6%98%8E">函数声明<a class="anchor" href="#%E5%87%BD%E6%95%B0%E5%A3%B0%E6%98%8E">§</a></h2>\n<p>在 JavaScript 中，有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式（Function Expression）：</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// 函数声明（Function Declaration）</span>\n<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 函数表达式（Function Expression）</span>\n<span class="token keyword">let</span> <span class="token function-variable function">mySum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>注意，<strong>输入多余的（或者少于要求的）参数，是不被允许的</strong>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.</span>\n</code></pre>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.</span>\n</code></pre>\n<h2 id="%E5%87%BD%E6%95%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F">函数表达式<a class="anchor" href="#%E5%87%BD%E6%95%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F">§</a></h2>\n<p>如果要我们现在写一个对函数表达式（Function Expression）的定义，可能会写成这样：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> <span class="token function-variable function">mySum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 <code>mySum</code>，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 <code>mySum</code> 添加类型，则应该是这样：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> <span class="token function-variable function">mySum</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token function-variable function">number</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>注意不要混淆了 TypeScript 中的 <code>=&gt;</code> 和 ES6 中的 <code>=&gt;</code>。</p>\n<p>在 TypeScript 的类型定义中，<code>=&gt;</code> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。</p>\n<p>在 ES6 中，<code>=&gt;</code> 叫做箭头函数，应用十分广泛，可以参考 <a href="http://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0">ES6 中的箭头函数</a>。</p>\n<h2 id="%E7%94%A8%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89%E5%87%BD%E6%95%B0%E7%9A%84%E5%BD%A2%E7%8A%B6">用接口定义函数的形状<a class="anchor" href="#%E7%94%A8%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89%E5%87%BD%E6%95%B0%E7%9A%84%E5%BD%A2%E7%8A%B6">§</a></h2>\n<p>我们也可以使用接口的方式来定义一个函数需要符合的形状：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">SearchFunc</span></span> <span class="token punctuation">{</span>\n    <span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> subString<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> mySearch<span class="token operator">:</span> <span class="token maybe-class-name">SearchFunc</span><span class="token punctuation">;</span>\n<span class="token function-variable function">mySearch</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> subString<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token method function property-access">search</span><span class="token punctuation">(</span>subString<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。</p>\n<h2 id="%E5%8F%AF%E9%80%89%E5%8F%82%E6%95%B0">可选参数<a class="anchor" href="#%E5%8F%AF%E9%80%89%E5%8F%82%E6%95%B0">§</a></h2>\n<p>前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？</p>\n<p>与接口中的可选属性类似，我们用 <code>?</code> 表示可选的参数：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lastName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>lastName<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">\' \'</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> firstName<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> tomcat <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">\'Tom\'</span><span class="token punctuation">,</span> <span class="token string">\'Cat\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> tom <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">\'Tom\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>需要注意的是，可选参数必须接在必需参数后面。换句话说，<strong>可选参数后面不允许再出现必需参数了</strong>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span>firstName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>firstName<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">\' \'</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> lastName<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> tomcat <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">\'Tom\'</span><span class="token punctuation">,</span> <span class="token string">\'Cat\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> tom <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token string">\'Tom\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(1,40): error TS1016: A required parameter cannot follow an optional parameter.</span>\n</code></pre>\n<h2 id="%E5%8F%82%E6%95%B0%E9%BB%98%E8%AE%A4%E5%80%BC">参数默认值<a class="anchor" href="#%E5%8F%82%E6%95%B0%E9%BB%98%E8%AE%A4%E5%80%BC">§</a></h2>\n<p>在 ES6 中，我们允许给函数的参数添加默认值，<strong>TypeScript 会将添加了默认值的参数识别为可选参数</strong>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">\'Cat\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">\' \'</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> tomcat <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">\'Tom\'</span><span class="token punctuation">,</span> <span class="token string">\'Cat\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> tom <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">\'Tom\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>此时就不受「可选参数必须接在必需参数后面」的限制了：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">\'Tom\'</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">\' \'</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> tomcat <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">\'Tom\'</span><span class="token punctuation">,</span> <span class="token string">\'Cat\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> cat <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token string">\'Cat\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<blockquote>\n<p>关于默认参数，可以参考 <a href="http://es6.ruanyifeng.com/#docs/function#%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC">ES6 中函数参数的默认值</a>。</p>\n</blockquote>\n<h2 id="%E5%89%A9%E4%BD%99%E5%8F%82%E6%95%B0">剩余参数<a class="anchor" href="#%E5%89%A9%E4%BD%99%E5%8F%82%E6%95%B0">§</a></h2>\n<p>ES6 中，可以使用 <code>...rest</code> 的方式获取函数中的剩余参数（rest 参数）：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> <span class="token spread operator">...</span>items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    items<span class="token punctuation">.</span><span class="token method function property-access">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        array<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> a<span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token function">push</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>事实上，<code>items</code> 是一个数组。所以我们可以用数组的类型来定义它：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span>array<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token spread operator">...</span>items<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    items<span class="token punctuation">.</span><span class="token method function property-access">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        array<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token function">push</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>注意，rest 参数只能是最后一个参数，关于 rest 参数，可以参考 <a href="http://es6.ruanyifeng.com/#docs/function#rest%E5%8F%82%E6%95%B0">ES6 中的 rest 参数</a>。</p>\n<h2 id="%E9%87%8D%E8%BD%BD">重载<a class="anchor" href="#%E9%87%8D%E8%BD%BD">§</a></h2>\n<p>重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。</p>\n<p>比如，我们需要实现一个函数 <code>reverse</code>，输入数字 <code>123</code> 的时候，输出反转的数字 <code>321</code>，输入字符串 <code>\'hello\'</code> 的时候，输出反转的字符串 <code>\'olleh\'</code>。</p>\n<p>利用联合类型，我们可以这么实现：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">\'number\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token known-class-name class-name">Number</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">split</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">\'string\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token method function property-access">split</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><strong>然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。</strong></p>\n<p>这时，我们可以使用重载定义多个 <code>reverse</code> 的函数类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">\'number\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token known-class-name class-name">Number</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">split</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">\'string\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token method function property-access">split</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>上例中，我们重复定义了多次函数 <code>reverse</code>，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。</p>\n<p>注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。</p>\n<h2 id="%E5%8F%82%E8%80%83">参考<a class="anchor" href="#%E5%8F%82%E8%80%83">§</a></h2>\n<ul>\n<li><a href="http://www.typescriptlang.org/docs/handbook/functions.html">Functions</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Functions.html">中文版</a>）</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/interfaces.html#function-types">Functions # Function Types</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html#%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B">中文版</a>）</li>\n<li><a href="https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/">JS 函数式编程指南</a></li>\n<li><a href="http://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0">ES6 中的箭头函数</a></li>\n<li><a href="http://es6.ruanyifeng.com/#docs/function#%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC">ES6 中函数参数的默认值</a></li>\n<li><a href="http://es6.ruanyifeng.com/#docs/function#rest%E5%8F%82%E6%95%B0">ES6 中的 rest 参数</a></li>\n</ul>\n<hr>\n<ul>\n<li><a href="type-of-array.html">上一章：数组的类型</a></li>\n<li><a href="type-assertion.html">下一章：类型断言</a></li>\n</ul>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%87%BD%E6%95%B0%E5%A3%B0%E6%98%8E">函数声明</a></li><li><a href="#%E5%87%BD%E6%95%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F">函数表达式</a></li><li><a href="#%E7%94%A8%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89%E5%87%BD%E6%95%B0%E7%9A%84%E5%BD%A2%E7%8A%B6">用接口定义函数的形状</a></li><li><a href="#%E5%8F%AF%E9%80%89%E5%8F%82%E6%95%B0">可选参数</a></li><li><a href="#%E5%8F%82%E6%95%B0%E9%BB%98%E8%AE%A4%E5%80%BC">参数默认值</a></li><li><a href="#%E5%89%A9%E4%BD%99%E5%8F%82%E6%95%B0">剩余参数</a></li><li><a href="#%E9%87%8D%E8%BD%BD">重载</a></li><li><a href="#%E5%8F%82%E8%80%83">参考</a></li></ol></nav>'
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
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "basics/type-of-function.html", owner: "xcatliu", repo: "typescript-tutorial", title: "\u51FD\u6570\u7684\u7C7B\u578B" }),
    'ga': React.createElement(Ga, { id: "UA-45256157-14" })
};
