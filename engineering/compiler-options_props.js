import projectConfig from '/pagic.config.js';
import Ga from '/_ga.js';
import Gitalk from '/_gitalk.js';
export default {
    'prev': {
        "title": "代码检查",
        "link": "engineering/lint.html"
    },
    'next': {
        "title": "感谢",
        "link": "thanks/index.html"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "engineering/compiler-options.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "engineering/compiler-options.html",
    'title': "编译选项",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>编译选项</h1>\n<p>TypeScript 提供了非常多的编译选项，但是官方文档对每一项的解释很抽象，这一章会详细介绍每一个选项的作用，并给出对应的示例。</p>\n<p>索引（点击选项跳转到详细介绍）：</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>选项</th>\n<th>类型</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><a href="#allowjs"><code>allowJs</code></a></td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>允许编译 js 文件</td>\n</tr>\n<tr>\n<td><a href="#allowsyntheticdefaultimports"><code>allowSyntheticDefaultImports</code></a></td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>允许对不包含默认导出的模块使用默认导入。这个选项不会影响生成的代码，只会影响类型检查。</td>\n</tr>\n</tbody>\n</table></div>\n<h2 id="allowjs">allowJs<a class="anchor" href="#allowjs">§</a></h2>\n<blockquote>\n<p>允许编译 js 文件。</p>\n</blockquote>\n<p>设置为 <code>true</code> 时，js 文件会被 tsc 编译，否则不会。一般在项目中 js, ts 混合开发时需要设置。</p>\n<p><a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/compiler-options/01-allowJs">查看示例</a></p>\n<pre class="language-bash"><code class="language-bash"><span class="token comment"># 设置为 true 时，编译后的文件包含 foo.js</span>\n├── lib\n│   ├── foo.js\n│   └── index.js\n├── src\n│   ├── foo.js\n│   └── index.ts\n├── package.json\n└── tsconfig.json\n</code></pre>\n<pre class="language-bash"><code class="language-bash"><span class="token comment"># 设置为 false 时，编译后的文件不包含 foo.js</span>\n├── lib\n│   └── index.js\n├── src\n│   ├── foo.js\n│   └── index.ts\n├── package.json\n└── tsconfig.json\n</code></pre>\n<h2 id="allowsyntheticdefaultimports">allowSyntheticDefaultImports<a class="anchor" href="#allowsyntheticdefaultimports">§</a></h2>\n<blockquote>\n<p>允许对不包含默认导出的模块使用默认导入。这个选项不会影响生成的代码，只会影响类型检查。</p>\n</blockquote>\n<p><code>export = foo</code> 是 ts 为了兼容 commonjs 创造的语法，它对应于 commonjs 中的 <code>module.exports = foo</code>。</p>\n<p>在 ts 中，如果要引入一个通过 <code>export = foo</code> 导出的模块，标准的语法是 <code>import foo = require(\'foo\')</code>，或者 <code>import * as foo from \'foo\'</code>。</p>\n<p>但由于历史原因，我们已经习惯了使用 <code>import foo from \'foo\'</code>。</p>\n<p>这个选项就是为了解决这个问题。当它设置为 <code>true</code> 时，允许使用 <code>import foo from \'foo\'</code> 来导入一个通过 <code>export = foo</code> 导出的模块。当它设置为 <code>false</code> 时，则不允许，会报错。</p>\n<p>当然，我们一般不会在 ts 文件中使用 <code>export = foo</code> 来导出模块，而是在<a href="../basics/declaration-files#export-1">写（符合 commonjs 规范的）第三方库的声明文件</a>时，才会用到 <code>export = foo</code> 来导出类型。</p>\n<p>比如 React 的声明文件中，就是通过 <code>export = React</code> 来导出类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token operator">=</span> React<span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">as</span> <span class="token keyword">namespace</span> React<span class="token punctuation">;</span>\n\n<span class="token keyword">declare</span> <span class="token keyword">namespace</span> React <span class="token punctuation">{</span>\n    <span class="token comment">// 声明 React 的类型</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>此时若我们通过 <code>import React from \'react\'</code> 来导入 react 则会报错，<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/compiler-options/02-allowSyntheticDefaultImports">查看示例</a>\n：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token comment">// Module \'"<a class="token email-link" href="mailto:typescript-tutorial/examples/compiler-options/02-allowSyntheticDefaultImports/false/node_modules/@types">typescript-tutorial/examples/compiler-options/02-allowSyntheticDefaultImports/false/node_modules/@types</a>/react/index"\' can only be default-imported using the \'esModuleInterop\' flagts(1259)</span>\n</code></pre>\n<p>解决办法就是将 <code>allowSyntheticDefaultImports</code> 设置为 <code>true</code>。</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-45256157-14" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u7F16\u8BD1\u9009\u9879"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>TypeScript 提供了非常多的编译选项，但是官方文档对每一项的解释很抽象，这一章会详细介绍每一个选项的作用，并给出对应的示例。</p>\n<p>索引（点击选项跳转到详细介绍）：</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>选项</th>\n<th>类型</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><a href="#allowjs"><code>allowJs</code></a></td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>允许编译 js 文件</td>\n</tr>\n<tr>\n<td><a href="#allowsyntheticdefaultimports"><code>allowSyntheticDefaultImports</code></a></td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>允许对不包含默认导出的模块使用默认导入。这个选项不会影响生成的代码，只会影响类型检查。</td>\n</tr>\n</tbody>\n</table></div>\n<h2 id="allowjs">allowJs<a class="anchor" href="#allowjs">§</a></h2>\n<blockquote>\n<p>允许编译 js 文件。</p>\n</blockquote>\n<p>设置为 <code>true</code> 时，js 文件会被 tsc 编译，否则不会。一般在项目中 js, ts 混合开发时需要设置。</p>\n<p><a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/compiler-options/01-allowJs">查看示例</a></p>\n<pre class="language-bash"><code class="language-bash"><span class="token comment"># 设置为 true 时，编译后的文件包含 foo.js</span>\n├── lib\n│   ├── foo.js\n│   └── index.js\n├── src\n│   ├── foo.js\n│   └── index.ts\n├── package.json\n└── tsconfig.json\n</code></pre>\n<pre class="language-bash"><code class="language-bash"><span class="token comment"># 设置为 false 时，编译后的文件不包含 foo.js</span>\n├── lib\n│   └── index.js\n├── src\n│   ├── foo.js\n│   └── index.ts\n├── package.json\n└── tsconfig.json\n</code></pre>\n<h2 id="allowsyntheticdefaultimports">allowSyntheticDefaultImports<a class="anchor" href="#allowsyntheticdefaultimports">§</a></h2>\n<blockquote>\n<p>允许对不包含默认导出的模块使用默认导入。这个选项不会影响生成的代码，只会影响类型检查。</p>\n</blockquote>\n<p><code>export = foo</code> 是 ts 为了兼容 commonjs 创造的语法，它对应于 commonjs 中的 <code>module.exports = foo</code>。</p>\n<p>在 ts 中，如果要引入一个通过 <code>export = foo</code> 导出的模块，标准的语法是 <code>import foo = require(\'foo\')</code>，或者 <code>import * as foo from \'foo\'</code>。</p>\n<p>但由于历史原因，我们已经习惯了使用 <code>import foo from \'foo\'</code>。</p>\n<p>这个选项就是为了解决这个问题。当它设置为 <code>true</code> 时，允许使用 <code>import foo from \'foo\'</code> 来导入一个通过 <code>export = foo</code> 导出的模块。当它设置为 <code>false</code> 时，则不允许，会报错。</p>\n<p>当然，我们一般不会在 ts 文件中使用 <code>export = foo</code> 来导出模块，而是在<a href="../basics/declaration-files#export-1">写（符合 commonjs 规范的）第三方库的声明文件</a>时，才会用到 <code>export = foo</code> 来导出类型。</p>\n<p>比如 React 的声明文件中，就是通过 <code>export = React</code> 来导出类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token operator">=</span> React<span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">as</span> <span class="token keyword">namespace</span> React<span class="token punctuation">;</span>\n\n<span class="token keyword">declare</span> <span class="token keyword">namespace</span> React <span class="token punctuation">{</span>\n    <span class="token comment">// 声明 React 的类型</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>此时若我们通过 <code>import React from \'react\'</code> 来导入 react 则会报错，<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/compiler-options/02-allowSyntheticDefaultImports">查看示例</a>\n：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token comment">// Module \'"<a class="token email-link" href="mailto:typescript-tutorial/examples/compiler-options/02-allowSyntheticDefaultImports/false/node_modules/@types">typescript-tutorial/examples/compiler-options/02-allowSyntheticDefaultImports/false/node_modules/@types</a>/react/index"\' can only be default-imported using the \'esModuleInterop\' flagts(1259)</span>\n</code></pre>\n<p>解决办法就是将 <code>allowSyntheticDefaultImports</code> 设置为 <code>true</code>。</p>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#allowjs">allowJs</a></li><li><a href="#allowsyntheticdefaultimports">allowSyntheticDefaultImports</a></li></ol></nav>'
        } }),
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'date': "2019-12-04T07:56:38.000Z",
    'updated': "2020-07-02T14:29:45.000Z",
    'excerpt': "TypeScript 提供了非常多的编译选项，但是官方文档对每一项的解释很抽象，这一章会详细介绍每一个选项的作用，并给出对应的示例。 索引（点击选项跳转到详细介绍）： 选项 类型 默认值 描述 allowJs boolean false 允许编译 js...",
    'cover': undefined,
    'sidebar': [
        {
            "link": "introduction/index.html",
            "children": [
                {
                    "title": "什么是 TypeScript",
                    "link": "introduction/what-is-typescript.html",
                    "pagePath": "introduction/what-is-typescript.md"
                },
                {
                    "title": "安装 TypeScript",
                    "link": "introduction/get-typescript.html",
                    "pagePath": "introduction/get-typescript.md"
                },
                {
                    "title": "Hello TypeScript",
                    "link": "introduction/hello-typescript.html",
                    "pagePath": "introduction/hello-typescript.md"
                }
            ],
            "title": "简介",
            "pagePath": "introduction/README.md"
        },
        {
            "link": "basics/index.html",
            "children": [
                {
                    "title": "原始数据类型",
                    "link": "basics/primitive-data-types.html",
                    "pagePath": "basics/primitive-data-types.md"
                },
                {
                    "title": "任意值",
                    "link": "basics/any.html",
                    "pagePath": "basics/any.md"
                },
                {
                    "title": "类型推论",
                    "link": "basics/type-inference.html",
                    "pagePath": "basics/type-inference.md"
                },
                {
                    "title": "联合类型",
                    "link": "basics/union-types.html",
                    "pagePath": "basics/union-types.md"
                },
                {
                    "title": "对象的类型——接口",
                    "link": "basics/type-of-object-interfaces.html",
                    "pagePath": "basics/type-of-object-interfaces.md"
                },
                {
                    "title": "数组的类型",
                    "link": "basics/type-of-array.html",
                    "pagePath": "basics/type-of-array.md"
                },
                {
                    "title": "函数的类型",
                    "link": "basics/type-of-function.html",
                    "pagePath": "basics/type-of-function.md"
                },
                {
                    "title": "类型断言",
                    "link": "basics/type-assertion.html",
                    "pagePath": "basics/type-assertion.md"
                },
                {
                    "title": "声明文件",
                    "link": "basics/declaration-files.html",
                    "pagePath": "basics/declaration-files.md"
                },
                {
                    "title": "内置对象",
                    "link": "basics/built-in-objects.html",
                    "pagePath": "basics/built-in-objects.md"
                }
            ],
            "title": "基础",
            "pagePath": "basics/README.md"
        },
        {
            "link": "advanced/index.html",
            "children": [
                {
                    "title": "类型别名",
                    "link": "advanced/type-aliases.html",
                    "pagePath": "advanced/type-aliases.md"
                },
                {
                    "title": "字符串字面量类型",
                    "link": "advanced/string-literal-types.html",
                    "pagePath": "advanced/string-literal-types.md"
                },
                {
                    "title": "元组",
                    "link": "advanced/tuple.html",
                    "pagePath": "advanced/tuple.md"
                },
                {
                    "title": "枚举",
                    "link": "advanced/enum.html",
                    "pagePath": "advanced/enum.md"
                },
                {
                    "title": "类",
                    "link": "advanced/class.html",
                    "pagePath": "advanced/class.md"
                },
                {
                    "title": "类与接口",
                    "link": "advanced/class-and-interfaces.html",
                    "pagePath": "advanced/class-and-interfaces.md"
                },
                {
                    "title": "泛型",
                    "link": "advanced/generics.html",
                    "pagePath": "advanced/generics.md"
                },
                {
                    "title": "声明合并",
                    "link": "advanced/declaration-merging.html",
                    "pagePath": "advanced/declaration-merging.md"
                },
                {
                    "title": "扩展阅读",
                    "link": "advanced/further-reading.html",
                    "pagePath": "advanced/further-reading.md"
                }
            ],
            "title": "进阶",
            "pagePath": "advanced/README.md"
        },
        {
            "link": "engineering/index.html",
            "children": [
                {
                    "title": "代码检查",
                    "link": "engineering/lint.html",
                    "pagePath": "engineering/lint.md"
                },
                {
                    "title": "编译选项",
                    "link": "engineering/compiler-options.html",
                    "pagePath": "engineering/compiler-options.md"
                }
            ],
            "title": "工程",
            "pagePath": "engineering/README.md"
        },
        {
            "title": "感谢",
            "link": "thanks/index.html",
            "pagePath": "thanks/README.md"
        }
    ],
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "engineering/compiler-options.html", owner: "xcatliu", pagerDirection: "first", repo: "typescript-tutorial", title: "\u7F16\u8BD1\u9009\u9879" })
};
