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
    'pagePath': "advanced/class-and-interfaces.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "advanced/class-and-interfaces.html",
    'title': "类与接口",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1 id="%E7%B1%BB%E4%B8%8E%E6%8E%A5%E5%8F%A3">类与接口 <a class="header-anchor" href="#%E7%B1%BB%E4%B8%8E%E6%8E%A5%E5%8F%A3">§</a></h1>\n<p><a href="../basics/type-of-object-interfaces.html">之前学习过</a>，接口（Interfaces）可以用于对「对象的形状（Shape）」进行描述。</p>\n<p>这一章主要介绍接口的另一个用途，对类的一部分行为进行抽象。</p>\n<h2 id="%E7%B1%BB%E5%AE%9E%E7%8E%B0%E6%8E%A5%E5%8F%A3">类实现接口 <a class="header-anchor" href="#%E7%B1%BB%E5%AE%9E%E7%8E%B0%E6%8E%A5%E5%8F%A3">§</a></h2>\n<p>实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 <code>implements</code> 关键字来实现。这个特性大大提高了面向对象的灵活性。</p>\n<p>举例来说，门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Alarm</span></span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name"><span class="token maybe-class-name">Door</span></span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name"><span class="token maybe-class-name">SecurityDoor</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token maybe-class-name">Door</span></span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token maybe-class-name">Alarm</span></span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'SecurityDoor alert\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name"><span class="token maybe-class-name">Car</span></span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token maybe-class-name">Alarm</span></span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'Car alert\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>一个类可以实现多个接口：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Alarm</span></span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Light</span></span> <span class="token punctuation">{</span>\n    <span class="token function">lightOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n    <span class="token function">lightOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name"><span class="token maybe-class-name">Car</span></span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token maybe-class-name">Alarm</span></span><span class="token punctuation">,</span> <span class="token maybe-class-name">Light</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'Car alert\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">lightOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'Car light on\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">lightOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'Car light off\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>上例中，<code>Car</code> 实现了 <code>Alarm</code> 和 <code>Light</code> 接口，既能报警，也能开关车灯。</p>\n<h2 id="%E6%8E%A5%E5%8F%A3%E7%BB%A7%E6%89%BF%E6%8E%A5%E5%8F%A3">接口继承接口 <a class="header-anchor" href="#%E6%8E%A5%E5%8F%A3%E7%BB%A7%E6%89%BF%E6%8E%A5%E5%8F%A3">§</a></h2>\n<p>接口与接口之间可以是继承关系：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Alarm</span></span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">LightableAlarm</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token maybe-class-name">Alarm</span></span> <span class="token punctuation">{</span>\n    <span class="token function">lightOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n    <span class="token function">lightOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>这很好理解，<code>LightableAlarm</code> 继承了 <code>Alarm</code>，除了拥有 <code>alert</code> 方法之外，还拥有两个新方法 <code>lightOn</code> 和 <code>lightOff</code>。</p>\n<h2 id="%E6%8E%A5%E5%8F%A3%E7%BB%A7%E6%89%BF%E7%B1%BB">接口继承类 <a class="header-anchor" href="#%E6%8E%A5%E5%8F%A3%E7%BB%A7%E6%89%BF%E7%B1%BB">§</a></h2>\n<p>常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">class</span> <span class="token class-name"><span class="token maybe-class-name">Point</span></span> <span class="token punctuation">{</span>\n    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">x</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">y</span> <span class="token operator">=</span> y<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Point3d</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token maybe-class-name">Point</span></span> <span class="token punctuation">{</span>\n    z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> point3d<span class="token operator">:</span> <span class="token maybe-class-name">Point3d</span> <span class="token operator">=</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>为什么 TypeScript 会支持接口继承类呢？</p>\n<p>实际上，当我们在声明 <code>class Point</code> 时，除了会创建一个名为 <code>Point</code> 的类之外，同时也创建了一个名为 <code>Point</code> 的类型（实例的类型）。</p>\n<p>所以我们既可以将 <code>Point</code> 当做一个类来用（使用 <code>new Point</code> 创建它的实例）：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">class</span> <span class="token class-name"><span class="token maybe-class-name">Point</span></span> <span class="token punctuation">{</span>\n    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">x</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">y</span> <span class="token operator">=</span> y<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token maybe-class-name">Point</span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>也可以将 <code>Point</code> 当做一个类型来用（使用 <code>: Point</code> 表示参数的类型）：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">class</span> <span class="token class-name"><span class="token maybe-class-name">Point</span></span> <span class="token punctuation">{</span>\n    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">x</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">y</span> <span class="token operator">=</span> y<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">printPoint</span><span class="token punctuation">(</span>p<span class="token operator">:</span> <span class="token maybe-class-name">Point</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token property-access">x</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span><span class="token property-access">y</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">printPoint</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token maybe-class-name">Point</span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>这个例子实际上可以等价于：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">class</span> <span class="token class-name"><span class="token maybe-class-name">Point</span></span> <span class="token punctuation">{</span>\n    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">x</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">y</span> <span class="token operator">=</span> y<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">PointInstanceType</span></span> <span class="token punctuation">{</span>\n    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">printPoint</span><span class="token punctuation">(</span>p<span class="token operator">:</span> <span class="token maybe-class-name">PointInstanceType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token property-access">x</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span><span class="token property-access">y</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">printPoint</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token maybe-class-name">Point</span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>上例中我们新声明的 <code>PointInstanceType</code> 类型，与声明 <code>class Point</code> 时创建的 <code>Point</code> 类型是等价的。</p>\n<p>所以回到 <code>Point3d</code> 的例子中，我们就能很容易的理解为什么 TypeScript 会支持接口继承类了：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">class</span> <span class="token class-name"><span class="token maybe-class-name">Point</span></span> <span class="token punctuation">{</span>\n    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">x</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">y</span> <span class="token operator">=</span> y<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">PointInstanceType</span></span> <span class="token punctuation">{</span>\n    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 等价于 interface Point3d extends PointInstanceType</span>\n<span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Point3d</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token maybe-class-name">Point</span></span> <span class="token punctuation">{</span>\n    z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> point3d<span class="token operator">:</span> <span class="token maybe-class-name">Point3d</span> <span class="token operator">=</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>当我们声明 <code>interface Point3d extends Point</code> 时，<code>Point3d</code> 继承的实际上是类 <code>Point</code> 的实例的类型。</p>\n<p>换句话说，可以理解为定义了一个接口 <code>Point3d</code> 继承另一个接口 <code>PointInstanceType</code>。</p>\n<p>所以「接口继承类」和「接口继承接口」没有什么本质的区别。</p>\n<p>值得注意的是，<code>PointInstanceType</code> 相比于 <code>Point</code>，缺少了 <code>constructor</code> 方法，这是因为声明 <code>Point</code> 类时创建的 <code>Point</code> 类型是不包含构造函数的。另外，除了构造函数是不包含的，静态属性或静态方法也是不包含的（实例的类型当然不应该包括构造函数、静态属性或静态方法）。</p>\n<p>换句话说，声明 <code>Point</code> 类时创建的 <code>Point</code> 类型只包含其中的实例属性和实例方法：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">class</span> <span class="token class-name"><span class="token maybe-class-name">Point</span></span> <span class="token punctuation">{</span>\n    <span class="token doc-comment comment">/** 静态属性，坐标系原点 */</span>\n    <span class="token keyword">static</span> origin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token maybe-class-name">Point</span></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token doc-comment comment">/** 静态方法，计算与原点距离 */</span>\n    <span class="token keyword">static</span> <span class="token function">distanceToOrigin</span><span class="token punctuation">(</span>p<span class="token operator">:</span> <span class="token maybe-class-name">Point</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token known-class-name class-name">Math</span><span class="token punctuation">.</span><span class="token method function property-access">sqrt</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token property-access">x</span> <span class="token operator">*</span> p<span class="token punctuation">.</span><span class="token property-access">x</span> <span class="token operator">+</span> p<span class="token punctuation">.</span><span class="token property-access">y</span> <span class="token operator">*</span> p<span class="token punctuation">.</span><span class="token property-access">y</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token doc-comment comment">/** 实例属性，x 轴的值 */</span>\n    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token doc-comment comment">/** 实例属性，y 轴的值 */</span>\n    y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token doc-comment comment">/** 构造函数 */</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">x</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">y</span> <span class="token operator">=</span> y<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token doc-comment comment">/** 实例方法，打印此点 */</span>\n    <span class="token function">printPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">x</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">y</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">PointInstanceType</span></span> <span class="token punctuation">{</span>\n    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token function">printPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> p1<span class="token operator">:</span> <span class="token maybe-class-name">Point</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> p2<span class="token operator">:</span> <span class="token maybe-class-name">PointInstanceType</span><span class="token punctuation">;</span>\n</code></pre>\n<p>上例中最后的类型 <code>Point</code> 和类型 <code>PointInstanceType</code> 是等价的。</p>\n<p>同样的，在接口继承类的时候，也只会继承它的实例属性和实例方法。</p>\n<h2 id="%E5%8F%82%E8%80%83">参考 <a class="header-anchor" href="#%E5%8F%82%E8%80%83">§</a></h2>\n<ul>\n<li><a href="http://www.typescriptlang.org/docs/handbook/interfaces.html">Interfaces</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html">中文版</a>）</li>\n</ul>\n<hr>\n<ul>\n<li><a href="class.html">上一章：类</a></li>\n<li><a href="generics.html">下一章：泛型</a></li>\n</ul>\n'
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
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "advanced/class-and-interfaces.html", owner: "xcatliu", repo: "typescript-tutorial", title: "\u7C7B\u4E0E\u63A5\u53E3" }),
    'ga': React.createElement(Ga, { id: "UA-45256157-14" })
};
