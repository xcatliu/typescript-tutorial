import projectConfig from '/pagic.config.js';
import Gitalk from '/_gitalk.js';
import Ga from '/_ga.js';
export default {
    config: { "srcDir": "src", "publicDir": "public", "base": "/", ...projectConfig },
    'pagePath': "engineering/compiler-options.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "engineering/compiler-options.html",
    'title': "编译选项",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>编译选项</h1>\n<p>TypeScript 提供了非常多的编译选项，但是官方文档对每一项的解释很抽象，这一章会详细介绍每一个选项的作用，并给出对应的示例。</p>\n<p>索引（点击选项跳转到详细介绍）：</p>\n<table>\n<thead>\n<tr>\n<th>选项</th>\n<th>类型</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><a href="#allowjs"><code>allowJs</code></a></td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>允许编译 js 文件</td>\n</tr>\n<tr>\n<td><a href="#allowsyntheticdefaultimports"><code>allowSyntheticDefaultImports</code></a></td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>允许对不包含默认导出的模块使用默认导入。这个选项不会影响生成的代码，只会影响类型检查。</td>\n</tr>\n</tbody>\n</table>\n<h2 id="allowjs">allowJs<a class="anchor" href="#allowjs">§</a></h2>\n<blockquote>\n<p>允许编译 js 文件。</p>\n</blockquote>\n<p>设置为 <code>true</code> 时，js 文件会被 tsc 编译，否则不会。一般在项目中 js, ts 混合开发时需要设置。</p>\n<p><a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/compiler-options/01-allowJs">查看示例</a></p>\n<pre class="language-bash"><code class="language-bash"><span class="token comment"># 设置为 true 时，编译后的文件包含 foo.js</span>\n├── lib\n│   ├── foo.js\n│   └── index.js\n├── src\n│   ├── foo.js\n│   └── index.ts\n├── package.json\n└── tsconfig.json\n</code></pre>\n<pre class="language-bash"><code class="language-bash"><span class="token comment"># 设置为 false 时，编译后的文件不包含 foo.js</span>\n├── lib\n│   └── index.js\n├── src\n│   ├── foo.js\n│   └── index.ts\n├── package.json\n└── tsconfig.json\n</code></pre>\n<h2 id="allowsyntheticdefaultimports">allowSyntheticDefaultImports<a class="anchor" href="#allowsyntheticdefaultimports">§</a></h2>\n<blockquote>\n<p>允许对不包含默认导出的模块使用默认导入。这个选项不会影响生成的代码，只会影响类型检查。</p>\n</blockquote>\n<p><code>export = foo</code> 是 ts 为了兼容 commonjs 创造的语法，它对应于 commonjs 中的 <code>module.exports = foo</code>。</p>\n<p>在 ts 中，如果要引入一个通过 <code>export = foo</code> 导出的模块，标准的语法是 <code>import foo = require(\'foo\')</code>，或者 <code>import * as foo from \'foo\'</code>。</p>\n<p>但由于历史原因，我们已经习惯了使用 <code>import foo from \'foo\'</code>。</p>\n<p>这个选项就是为了解决这个问题。当它设置为 <code>true</code> 时，允许使用 <code>import foo from \'foo\'</code> 来导入一个通过 <code>export = foo</code> 导出的模块。当它设置为 <code>false</code> 时，则不允许，会报错。</p>\n<p>当然，我们一般不会在 ts 文件中使用 <code>export = foo</code> 来导出模块，而是在<a href="../basics/declaration-files#export-1">写（符合 commonjs 规范的）第三方库的声明文件</a>时，才会用到 <code>export = foo</code> 来导出类型。</p>\n<p>比如 React 的声明文件中，就是通过 <code>export = React</code> 来导出类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">as</span> <span class="token keyword">namespace</span> <span class="token maybe-class-name">React</span><span class="token punctuation">;</span>\n\n<span class="token keyword">declare</span> <span class="token keyword">namespace</span> <span class="token maybe-class-name">React</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 声明 React 的类型</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>此时若我们通过 <code>import React from \'react\'</code> 来导入 react 则会报错，<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/compiler-options/02-allowSyntheticDefaultImports">查看示例</a>\n：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token maybe-class-name">React</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token comment">// Module \'"<a class="token email-link" href="mailto:typescript-tutorial/examples/compiler-options/02-allowSyntheticDefaultImports/false/node_modules/@types">typescript-tutorial/examples/compiler-options/02-allowSyntheticDefaultImports/false/node_modules/@types</a>/react/index"\' can only be default-imported using the \'esModuleInterop\' flagts(1259)</span>\n</code></pre>\n<p>解决办法就是将 <code>allowSyntheticDefaultImports</code> 设置为 <code>true</code>。</p>\n<hr>\n<ul>\n<li><a href="./lint.html">上一章：代码检查</a></li>\n<li><a href="../thanks/index.html">下一章：感谢</a></li>\n</ul>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#allowjs">allowJs</a></li><li><a href="#allowsyntheticdefaultimports">allowSyntheticDefaultImports</a></li></ol></nav>'
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
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "engineering/compiler-options.html", owner: "xcatliu", pagerDirection: "first", repo: "typescript-tutorial", title: "\u7F16\u8BD1\u9009\u9879" }),
    'ga': React.createElement(Ga, { id: "UA-45256157-14" })
};
