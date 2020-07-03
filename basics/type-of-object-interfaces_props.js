import Ga from '/_ga.js';
import Gitalk from '/_gitalk.js';
import projectConfig from '/pagic.config.js';
export default {
    'ga': React.createElement(Ga, { id: "UA-45256157-14" }),
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "basics/type-of-object-interfaces.html", owner: "xcatliu", pagerDirection: "first", repo: "typescript-tutorial", title: "\u5BF9\u8C61\u7684\u7C7B\u578B\u2014\u2014\u63A5\u53E3" }),
    'prev': {
        "text": "联合类型",
        "link": "basics/union-types.html"
    },
    'next': {
        "text": "数组的类型",
        "link": "basics/type-of-array.html"
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
    'pagePath': "basics/type-of-object-interfaces.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "basics/type-of-object-interfaces.html",
    'title': "对象的类型——接口",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>对象的类型——接口</h1>\n<p>在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。</p>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E6%8E%A5%E5%8F%A3">什么是接口<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E6%8E%A5%E5%8F%A3">§</a></h2>\n<p>在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。</p>\n<p>TypeScript 中的接口是一个非常灵活的概念，除了可用于<a href="../advanced/class-and-interfaces.html#%E7%B1%BB%E5%AE%9E%E7%8E%B0%E6%8E%A5%E5%8F%A3">对类的一部分行为进行抽象</a>以外，也常用于对「对象的形状（Shape）」进行描述。</p>\n<h2 id="%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90">简单的例子<a class="anchor" href="#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90">§</a></h2>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Person</span></span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token maybe-class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">\'Tom\'</span><span class="token punctuation">,</span>\n    age<span class="token operator">:</span> <span class="token number">25</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>上面的例子中，我们定义了一个接口 <code>Person</code>，接着定义了一个变量 <code>tom</code>，它的类型是 <code>Person</code>。这样，我们就约束了 <code>tom</code> 的形状必须和接口 <code>Person</code> 一致。</p>\n<p>接口一般首字母大写。<a href="https://msdn.microsoft.com/en-us/library/8bc1fexb%28v=vs.71%29.aspx">有的编程语言中会建议接口的名称加上 <code>I</code> 前缀</a>。</p>\n<p>定义的变量比接口少了一些属性是不允许的：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Person</span></span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token maybe-class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">\'Tom\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(6,5): error TS2322: Type \'{ name: string; }\' is not assignable to type \'Person\'.</span>\n<span class="token comment">//   Property \'age\' is missing in type \'{ name: string; }\'.</span>\n</code></pre>\n<p>多一些属性也是不允许的：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Person</span></span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token maybe-class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">\'Tom\'</span><span class="token punctuation">,</span>\n    age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>\n    gender<span class="token operator">:</span> <span class="token string">\'male\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(9,5): error TS2322: Type \'{ name: string; age: number; gender: string; }\' is not assignable to type \'Person\'.</span>\n<span class="token comment">//   Object literal may only specify known properties, and \'gender\' does not exist in type \'Person\'.</span>\n</code></pre>\n<p>可见，<strong>赋值的时候，变量的形状必须和接口的形状保持一致</strong>。</p>\n<h2 id="%E5%8F%AF%E9%80%89%E5%B1%9E%E6%80%A7">可选属性<a class="anchor" href="#%E5%8F%AF%E9%80%89%E5%B1%9E%E6%80%A7">§</a></h2>\n<p>有时我们希望不要完全匹配一个形状，那么可以用可选属性：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Person</span></span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token maybe-class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">\'Tom\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Person</span></span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token maybe-class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">\'Tom\'</span><span class="token punctuation">,</span>\n    age<span class="token operator">:</span> <span class="token number">25</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>可选属性的含义是该属性可以不存在。</p>\n<p>这时<strong>仍然不允许添加未定义的属性</strong>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Person</span></span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token maybe-class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">\'Tom\'</span><span class="token punctuation">,</span>\n    age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>\n    gender<span class="token operator">:</span> <span class="token string">\'male\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// examples/playground/index.ts(9,5): error TS2322: Type \'{ name: string; age: number; gender: string; }\' is not assignable to type \'Person\'.</span>\n<span class="token comment">//   Object literal may only specify known properties, and \'gender\' does not exist in type \'Person\'.</span>\n</code></pre>\n<h2 id="%E4%BB%BB%E6%84%8F%E5%B1%9E%E6%80%A7">任意属性<a class="anchor" href="#%E4%BB%BB%E6%84%8F%E5%B1%9E%E6%80%A7">§</a></h2>\n<p>有时候我们希望一个接口允许有任意的属性，可以使用如下方式：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Person</span></span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token maybe-class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">\'Tom\'</span><span class="token punctuation">,</span>\n    gender<span class="token operator">:</span> <span class="token string">\'male\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>使用 <code>[propName: string]</code> 定义了任意属性取 <code>string</code> 类型的值。</p>\n<p>需要注意的是，<strong>一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集</strong>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Person</span></span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token maybe-class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">\'Tom\'</span><span class="token punctuation">,</span>\n    age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>\n    gender<span class="token operator">:</span> <span class="token string">\'male\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(3,5): error TS2411: Property \'age\' of type \'number\' is not assignable to string index type \'string\'.</span>\n<span class="token comment">// index.ts(7,5): error TS2322: Type \'{ [x: string]: string | number; name: string; age: number; gender: string; }\' is not assignable to type \'Person\'.</span>\n<span class="token comment">//   Index signatures are incompatible.</span>\n<span class="token comment">//     Type \'string | number\' is not assignable to type \'string\'.</span>\n<span class="token comment">//       Type \'number\' is not assignable to type \'string\'.</span>\n</code></pre>\n<p>上例中，任意属性的值允许是 <code>string</code>，但是可选属性 <code>age</code> 的值却是 <code>number</code>，<code>number</code> 不是 <code>string</code> 的子属性，所以报错了。</p>\n<p>另外，在报错信息中可以看出，此时 <code>{ name: \'Tom\', age: 25, gender: \'male\' }</code> 的类型被推断成了 <code>{ [x: string]: string | number; name: string; age: number; gender: string; }</code>，这是联合类型和接口的结合。</p>\n<p>一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Person</span></span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token maybe-class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">\'Tom\'</span><span class="token punctuation">,</span>\n    age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>\n    gender<span class="token operator">:</span> <span class="token string">\'male\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E5%8F%AA%E8%AF%BB%E5%B1%9E%E6%80%A7">只读属性<a class="anchor" href="#%E5%8F%AA%E8%AF%BB%E5%B1%9E%E6%80%A7">§</a></h2>\n<p>有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 <code>readonly</code> 定义只读属性：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Person</span></span> <span class="token punctuation">{</span>\n    <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token maybe-class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    id<span class="token operator">:</span> <span class="token number">89757</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">\'Tom\'</span><span class="token punctuation">,</span>\n    gender<span class="token operator">:</span> <span class="token string">\'male\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\ntom<span class="token punctuation">.</span><span class="token property-access">id</span> <span class="token operator">=</span> <span class="token number">9527</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(14,5): error TS2540: Cannot assign to \'id\' because it is a constant or a read-only property.</span>\n</code></pre>\n<p>上例中，使用 <code>readonly</code> 定义的属性 <code>id</code> 初始化后，又被赋值了，所以报错了。</p>\n<p><strong>注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候</strong>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Person</span></span> <span class="token punctuation">{</span>\n    <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token maybe-class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">\'Tom\'</span><span class="token punctuation">,</span>\n    gender<span class="token operator">:</span> <span class="token string">\'male\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\ntom<span class="token punctuation">.</span><span class="token property-access">id</span> <span class="token operator">=</span> <span class="token number">89757</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(8,5): error TS2322: Type \'{ name: string; gender: string; }\' is not assignable to type \'Person\'.</span>\n<span class="token comment">//   Property \'id\' is missing in type \'{ name: string; gender: string; }\'.</span>\n<span class="token comment">// index.ts(13,5): error TS2540: Cannot assign to \'id\' because it is a constant or a read-only property.</span>\n</code></pre>\n<p>上例中，报错信息有两处，第一处是在对 <code>tom</code> 进行赋值的时候，没有给 <code>id</code> 赋值。</p>\n<p>第二处是在给 <code>tom.id</code> 赋值的时候，由于它是只读属性，所以报错了。</p>\n<h2 id="%E5%8F%82%E8%80%83">参考<a class="anchor" href="#%E5%8F%82%E8%80%83">§</a></h2>\n<ul>\n<li><a href="http://www.typescriptlang.org/docs/handbook/interfaces.html">Interfaces</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html">中文版</a>）</li>\n</ul>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E6%8E%A5%E5%8F%A3">什么是接口</a></li><li><a href="#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90">简单的例子</a></li><li><a href="#%E5%8F%AF%E9%80%89%E5%B1%9E%E6%80%A7">可选属性</a></li><li><a href="#%E4%BB%BB%E6%84%8F%E5%B1%9E%E6%80%A7">任意属性</a></li><li><a href="#%E5%8F%AA%E8%AF%BB%E5%B1%9E%E6%80%A7">只读属性</a></li><li><a href="#%E5%8F%82%E8%80%83">参考</a></li></ol></nav>'
        } })
};
