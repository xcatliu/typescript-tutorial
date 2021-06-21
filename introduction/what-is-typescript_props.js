import projectConfig from '/pagic.config.js';
import Ga from '/_ga.js';
import Gitalk from '/_gitalk.js';
export default {
    'prev': {
        "link": "introduction/index.html",
        "text": "简介"
    },
    'next': {
        "text": "安装 TypeScript",
        "link": "introduction/get-typescript.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "introduction/what-is-typescript.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "introduction/what-is-typescript.html",
    'title': "什么是 TypeScript",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>什么是 TypeScript</h1>\n<blockquote>\n<p>Typed JavaScript at Any Scale.<br>\n添加了类型系统的 JavaScript，适用于任何规模的项目。</p>\n</blockquote>\n<p>以上描述是官网<sup><a href="#link-1">[1]</a></sup>对于 TypeScript 的定义。</p>\n<p>它强调了 TypeScript 的两个最重要的特性——类型系统、适用于任何规模。</p>\n<h2 id="typescript-%E7%9A%84%E7%89%B9%E6%80%A7">TypeScript 的特性<a class="anchor" href="#typescript-%E7%9A%84%E7%89%B9%E6%80%A7">§</a></h2>\n<h3 id="%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F">类型系统<a class="anchor" href="#%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F">§</a></h3>\n<p>从 TypeScript 的名字就可以看出来，「类型」是其最核心的特性。</p>\n<p>我们知道，JavaScript 是一门非常灵活的编程语言：</p>\n<ul>\n<li>它没有类型约束，一个变量可能初始化时是字符串，过一会儿又被赋值为数字。</li>\n<li>由于隐式类型转换的存在，有的变量的类型很难在运行前就确定。</li>\n<li>基于原型的面向对象编程，使得原型上的属性或方法可以在运行时被修改。</li>\n<li>函数是 JavaScript 中的一等公民<sup><a href="#link-2">[2]</a></sup>，可以赋值给变量，也可以当作参数或返回值。</li>\n</ul>\n<p>这种灵活性就像一把双刃剑，一方面使得 JavaScript 蓬勃发展，无所不能，从 2013 年开始就一直蝉联最普遍使用的编程语言排行榜冠军<sup><a href="#link-3">[3]</a></sup>；另一方面也使得它的代码质量参差不齐，维护成本高，运行时错误多。</p>\n<p>而 TypeScript 的类型系统，在很大程度上弥补了 JavaScript 的缺点。</p>\n<h4 id="typescript-%E6%98%AF%E9%9D%99%E6%80%81%E7%B1%BB%E5%9E%8B">TypeScript 是静态类型<a class="anchor" href="#typescript-%E6%98%AF%E9%9D%99%E6%80%81%E7%B1%BB%E5%9E%8B">§</a></h4>\n<p>类型系统按照「类型检查的时机」来分类，可以分为动态类型和静态类型。</p>\n<p>动态类型是指在运行时才会进行类型检查，这种语言的类型错误往往会导致运行时错误。JavaScript 是一门解释型语言<sup><a href="#link-4">[4]</a></sup>，没有编译阶段，所以它是动态类型，以下这段代码在运行时才会报错：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\nfoo<span class="token punctuation">.</span><span class="token method function property-access">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Uncaught TypeError: foo.split is not a function</span>\n<span class="token comment">// 运行时会报错（foo.split 不是一个函数），造成线上 bug</span>\n</code></pre>\n<p>静态类型是指编译阶段就能确定每个变量的类型，这种语言的类型错误往往会导致语法错误。TypeScript 在运行前需要先编译为 JavaScript，而在编译阶段就会进行类型检查，所以 <strong>TypeScript 是静态类型</strong>，这段 TypeScript 代码在编译阶段就会报错了：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\nfoo<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Property \'split\' does not exist on type \'number\'.</span>\n<span class="token comment">// 编译时会报错（数字没有 split 方法），无法通过编译</span>\n</code></pre>\n<p>你可能会奇怪，这段 TypeScript 代码看上去和 JavaScript 没有什么区别呀。</p>\n<p>没错！大部分 JavaScript 代码都只需要经过少量的修改（或者完全不用修改）就变成 TypeScript 代码，这得益于 TypeScript 强大的[类型推论][]，即使不去手动声明变量 <code>foo</code> 的类型，也能在变量初始化时自动推论出它是一个 <code>number</code> 类型。</p>\n<p>完整的 TypeScript 代码是这样的：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\nfoo<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Property \'split\' does not exist on type \'number\'.</span>\n<span class="token comment">// 编译时会报错（数字没有 split 方法），无法通过编译</span>\n</code></pre>\n<h4 id="typescript-%E6%98%AF%E5%BC%B1%E7%B1%BB%E5%9E%8B">TypeScript 是弱类型<a class="anchor" href="#typescript-%E6%98%AF%E5%BC%B1%E7%B1%BB%E5%9E%8B">§</a></h4>\n<p>类型系统按照「是否允许隐式类型转换」来分类，可以分为强类型和弱类型。</p>\n<p>以下这段代码不管是在 JavaScript 中还是在 TypeScript 中都是可以正常运行的，运行时数字 <code>1</code> 会被隐式类型转换为字符串 <code>\'1\'</code>，加号 <code>+</code> 被识别为字符串拼接，所以打印出结果是字符串 <code>\'11\'</code>。</p>\n<pre class="language-js"><code class="language-js"><span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token string">\'1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 打印出字符串 \'11\'</span>\n</code></pre>\n<p>TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性，所以<strong>它们都是弱类型</strong>。</p>\n<p>作为对比，Python 是强类型，以下代码会在运行时报错：</p>\n<pre class="language-py"><code class="language-py"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token string">\'1\'</span><span class="token punctuation">)</span>\n<span class="token comment"># TypeError: unsupported operand type(s) for +: \'int\' and \'str\'</span>\n</code></pre>\n<p>若要修复该错误，需要进行强制类型转换：</p>\n<pre class="language-py"><code class="language-py"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">\'1\'</span><span class="token punctuation">)</span>\n<span class="token comment"># 打印出字符串 \'11\'</span>\n</code></pre>\n<blockquote>\n<p>强/弱是相对的，Python 在处理整型和浮点型相加时，会将整型隐式转换为浮点型，但是这并不影响 Python 是强类型的结论，因为大部分情况下 Python 并不会进行隐式类型转换。相比而言，JavaScript 和 TypeScript 中不管加号两侧是什么类型，都可以通过隐式类型转换计算出一个结果——而不是报错——所以 JavaScript 和 TypeScript 都是弱类型。</p>\n</blockquote>\n<blockquote>\n<p>虽然 TypeScript 不限制加号两侧的类型，但是我们可以借助 TypeScript 提供的类型系统，以及 ESLint 提供的代码检查功能，来限制加号两侧必须同为数字或同为字符串<sup><a href="#link-5">[5]</a></sup>。这在一定程度上使得 TypeScript 向「强类型」更近一步了——当然，这种限制是可选的。</p>\n</blockquote>\n<p>这样的类型系统体现了 TypeScript 的核心设计理念<sup><a href="#link-6">[6]</a></sup>：在完整保留 JavaScript 运行时行为的基础上，通过引入静态类型系统来提高代码的可维护性，减少可能出现的 bug。</p>\n<h3 id="%E9%80%82%E7%94%A8%E4%BA%8E%E4%BB%BB%E4%BD%95%E8%A7%84%E6%A8%A1">适用于任何规模<a class="anchor" href="#%E9%80%82%E7%94%A8%E4%BA%8E%E4%BB%BB%E4%BD%95%E8%A7%84%E6%A8%A1">§</a></h3>\n<p>TypeScript 非常适用于大型项目——这是显而易见的，类型系统可以为大型项目带来更高的可维护性，以及更少的 bug。</p>\n<p>在中小型项目中推行 TypeScript 的最大障碍就是认为使用 TypeScript 需要写额外的代码，降低开发效率。但事实上，由于有[类型推论][]，大部分类型都不需要手动声明了。相反，TypeScript 增强了编辑器（IDE）的功能，包括代码补全、接口提示、跳转到定义、代码重构等，这在很大程度上提高了开发效率。而且 TypeScript 有近百个[编译选项][]，如果你认为类型检查过于严格，那么可以通过修改编译选项来降低类型检查的标准。</p>\n<p>TypeScript 还可以和 JavaScript 共存。这意味着如果你有一个使用 JavaScript 开发的旧项目，又想使用 TypeScript 的特性，那么你不需要急着把整个项目都迁移到 TypeScript，你可以使用 TypeScript 编写新文件，然后在后续更迭中逐步迁移旧文件。如果一些 JavaScript 文件的迁移成本太高，TypeScript 也提供了一个方案，可以让你在不修改 JavaScript 文件的前提下，编写一个[类型声明文件][]，实现旧项目的渐进式迁移。</p>\n<p>事实上，就算你从来没学习过 TypeScript，你也可能已经在不知不觉中使用到了 TypeScript——在 VSCode 编辑器中编写 JavaScript 时，代码补全和接口提示等功能就是通过 TypeScript Language Service 实现的<sup><a href="#link-7">[7]</a></sup>：</p>\n<p><img src="../assets/what-is-typescript-vscode.png" alt="what-is-typescript-vscode"></p>\n<p>一些第三方库原生支持了 TypeScript，在使用时就能获得代码补全了，比如 Vue 3.0<sup><a href="#link-8">[8]</a></sup>：</p>\n<p><img src="../assets/what-is-typescript-vue.png" alt="what-is-typescript-vue"></p>\n<p>有一些第三方库原生不支持 TypeScript，但是可以通过安装社区维护的类型声明库<sup><a href="#link-9">[9]</a></sup>（比如通过运行 <code>npm install --save-dev @types/react</code> 来安装 React 的类型声明库）来获得代码补全能力——不管是在 JavaScript 项目中还是在 TypeScript 中项目中都是支持的：</p>\n<p><img src="../assets/what-is-typescript-react.png" alt="what-is-typescript-react"></p>\n<p>由此可见，TypeScript 的发展已经深入到前端社区的方方面面了，任何规模的项目都或多或少得到了 TypeScript 的支持。</p>\n<h3 id="%E4%B8%8E%E6%A0%87%E5%87%86%E5%90%8C%E6%AD%A5%E5%8F%91%E5%B1%95">与标准同步发展<a class="anchor" href="#%E4%B8%8E%E6%A0%87%E5%87%86%E5%90%8C%E6%AD%A5%E5%8F%91%E5%B1%95">§</a></h3>\n<p>TypeScript 的另一个重要的特性就是坚持与 ECMAScript 标准<sup><a href="#link-10">[10]</a></sup>同步发展。</p>\n<p>ECMAScript 是 JavaScript 核心语法的标准，自 2015 年起，每年都会发布一个新版本，包含一些新的语法。</p>\n<p>一个新的语法从提案到变成正式标准，需要经历以下几个阶段：</p>\n<ul>\n<li>Stage 0：展示阶段，仅仅是提出了讨论、想法，尚未正式提案。</li>\n<li>Stage 1：征求意见阶段，提供抽象的 API 描述，讨论可行性，关键算法等。</li>\n<li>Stage 2：草案阶段，使用正式的规范语言精确描述其语法和语义。</li>\n<li>Stage 3：候选人阶段，语法的设计工作已完成，需要浏览器、Node.js 等环境支持，搜集用户的反馈。</li>\n<li>Stage 4：定案阶段，已准备好将其添加到正式的 ECMAScript 标准中。</li>\n</ul>\n<p>一个语法进入到 Stage 3 阶段后，TypeScript 就会实现它。一方面，让我们可以尽早的使用到最新的语法，帮助它进入到下一个阶段；另一方面，处于 Stage 3 阶段的语法已经比较稳定了，基本不会有语法的变更，这使得我们能够放心的使用它。</p>\n<p>除了实现 ECMAScript 标准之外，TypeScript 团队也推进了诸多语法提案，比如可选链操作符（<code>?.</code>）<sup><a href="#link-11">[11]</a></sup>、空值合并操作符（<code>??</code>）<sup><a href="#link-12">[12]</a></sup>、Throw 表达式<sup><a href="#link-13">[13]</a></sup>、正则匹配索引<sup><a href="#link-14">[14]</a></sup>等。</p>\n<h2 id="%E6%80%BB%E7%BB%93">总结<a class="anchor" href="#%E6%80%BB%E7%BB%93">§</a></h2>\n<p>什么是 TypeScript？</p>\n<ul>\n<li>TypeScript 是添加了类型系统的 JavaScript，适用于任何规模的项目。</li>\n<li>TypeScript 是一门静态类型、弱类型的语言。</li>\n<li>TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性。</li>\n<li>TypeScript 可以编译为 JavaScript，然后运行在浏览器、Node.js 等任何能运行 JavaScript 的环境中。</li>\n<li>TypeScript 拥有很多编译选项，类型检查的严格程度由你决定。</li>\n<li>TypeScript 可以和 JavaScript 共存，这意味着 JavaScript 项目能够渐进式的迁移到 TypeScript。</li>\n<li>TypeScript 增强了编辑器（IDE）的功能，提供了代码补全、接口提示、跳转到定义、代码重构等能力。</li>\n<li>TypeScript 拥有活跃的社区，大多数常用的第三方库都提供了类型声明。</li>\n<li>TypeScript 与标准同步发展，符合最新的 ECMAScript 标准（stage 3）。</li>\n</ul>\n<h2 id="%E9%99%84typescript-%E7%9A%84%E5%8F%91%E5%B1%95%E5%8E%86%E5%8F%B2">附：TypeScript 的发展历史<a class="anchor" href="#%E9%99%84typescript-%E7%9A%84%E5%8F%91%E5%B1%95%E5%8E%86%E5%8F%B2">§</a></h2>\n<ul>\n<li>2012-10：微软发布了 TypeScript 第一个版本（0.8），此前已经在微软内部开发了两年。</li>\n<li>2014-04：TypeScript 发布了 1.0 版本。</li>\n<li>2014-10：Angular 发布了 2.0 版本，它是一个基于 TypeScript 开发的前端框架。</li>\n<li>2015-01：ts-loader 发布，webpack 可以编译 TypeScript 文件了。</li>\n<li>2015-04：微软发布了 Visual Studio Code，它内置了对 TypeScript 语言的支持，它自身也是用 TypeScript 开发的。</li>\n<li>2016-05：<code>@types/react</code> 发布，TypeScript 可以开发 React 应用了。</li>\n<li>2016-05：<code>@types/node</code> 发布，TypeScript 可以开发 Node.js 应用了。</li>\n<li>2016-09：TypeScript 发布了 2.0 版本。</li>\n<li>2018-06：TypeScript 发布了 3.0 版本。</li>\n<li>2019-02：TypeScript 宣布由官方团队来维护 typescript-eslint，以支持在 TypeScript 文件中运行 ESLint 检查。</li>\n<li>2020-05：Deno 发布了 1.0 版本，它是一个 JavaScript 和 TypeScript 运行时。</li>\n<li>2020-08：TypeScript 发布了 4.0 版本。</li>\n<li>2020-09：Vue 发布了 3.0 版本，官方支持 TypeScript。</li>\n</ul>\n<h2 id="%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">参考资料<a class="anchor" href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">§</a></h2>\n<ol>\n<li><span id="link-1"><a href="https://www.typescriptlang.org/">TypeScript 官网</a></span></li>\n<li><span id="link-2"><a href="https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch2.html">第 2 章: 一等公民的函数</a> · 函数式编程指北</span></li>\n<li><span id="link-3"><a href="https://insights.stackoverflow.com/survey/2020">StackOverflow 2020 开发者调查报告</a></span></li>\n<li><span id="link-4"><a href="https://web.stanford.edu/class/cs98si/slides/overview.html">斯坦福 JavaScript 第一课</a></span></li>\n<li><span id="link-5"><a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md">TypeScript ESLint 规则 <code>restrict-plus-operands</code></a></span></li>\n<li><span id="link-6"><a href="https://github.com/microsoft/TypeScript/wiki/TypeScript-Design-Goals">TypeScript 设计理念</a></span></li>\n<li><span id="link-7"><a href="https://code.visualstudio.com/docs/languages/typescript">Visual Studio Code 中集成了 TypeScript</a></span></li>\n<li><span id="link-8"><a href="https://v3.vuejs.org/guide/typescript-support.html">Vue 3.0 支持 TypeScript</a></span></li>\n<li><span id="link-9"><a href="https://github.com/DefinitelyTyped/DefinitelyTyped">Definitely Typed</a>——TypeScript 团队帮助维护的类型定义仓库</span></li>\n<li><span id="link-10"><a href="https://tc39.es/process-document/">ECMAScript 标准</a></span></li>\n<li><span id="link-11"><a href="https://github.com/tc39/proposal-optional-chaining">可选链操作符（<code>?.</code>）</a></span></li>\n<li><span id="link-12"><a href="https://github.com/tc39/proposal-nullish-coalescing">空值合并操作符（<code>??</code>）</a></span></li>\n<li><span id="link-13"><a href="https://github.com/tc39/proposal-throw-expressions">Throw 表达式</a></span></li>\n<li><span id="link-14"><a href="https://github.com/tc39/proposal-regexp-match-indices">正则匹配索引</a></span></li>\n</ol>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-45256157-14" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u4EC0\u4E48\u662F TypeScript"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<blockquote>\n<p>Typed JavaScript at Any Scale.<br>\n添加了类型系统的 JavaScript，适用于任何规模的项目。</p>\n</blockquote>\n<p>以上描述是官网<sup><a href="#link-1">[1]</a></sup>对于 TypeScript 的定义。</p>\n<p>它强调了 TypeScript 的两个最重要的特性——类型系统、适用于任何规模。</p>\n<h2 id="typescript-%E7%9A%84%E7%89%B9%E6%80%A7">TypeScript 的特性<a class="anchor" href="#typescript-%E7%9A%84%E7%89%B9%E6%80%A7">§</a></h2>\n<h3 id="%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F">类型系统<a class="anchor" href="#%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F">§</a></h3>\n<p>从 TypeScript 的名字就可以看出来，「类型」是其最核心的特性。</p>\n<p>我们知道，JavaScript 是一门非常灵活的编程语言：</p>\n<ul>\n<li>它没有类型约束，一个变量可能初始化时是字符串，过一会儿又被赋值为数字。</li>\n<li>由于隐式类型转换的存在，有的变量的类型很难在运行前就确定。</li>\n<li>基于原型的面向对象编程，使得原型上的属性或方法可以在运行时被修改。</li>\n<li>函数是 JavaScript 中的一等公民<sup><a href="#link-2">[2]</a></sup>，可以赋值给变量，也可以当作参数或返回值。</li>\n</ul>\n<p>这种灵活性就像一把双刃剑，一方面使得 JavaScript 蓬勃发展，无所不能，从 2013 年开始就一直蝉联最普遍使用的编程语言排行榜冠军<sup><a href="#link-3">[3]</a></sup>；另一方面也使得它的代码质量参差不齐，维护成本高，运行时错误多。</p>\n<p>而 TypeScript 的类型系统，在很大程度上弥补了 JavaScript 的缺点。</p>\n<h4 id="typescript-%E6%98%AF%E9%9D%99%E6%80%81%E7%B1%BB%E5%9E%8B">TypeScript 是静态类型<a class="anchor" href="#typescript-%E6%98%AF%E9%9D%99%E6%80%81%E7%B1%BB%E5%9E%8B">§</a></h4>\n<p>类型系统按照「类型检查的时机」来分类，可以分为动态类型和静态类型。</p>\n<p>动态类型是指在运行时才会进行类型检查，这种语言的类型错误往往会导致运行时错误。JavaScript 是一门解释型语言<sup><a href="#link-4">[4]</a></sup>，没有编译阶段，所以它是动态类型，以下这段代码在运行时才会报错：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\nfoo<span class="token punctuation">.</span><span class="token method function property-access">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Uncaught TypeError: foo.split is not a function</span>\n<span class="token comment">// 运行时会报错（foo.split 不是一个函数），造成线上 bug</span>\n</code></pre>\n<p>静态类型是指编译阶段就能确定每个变量的类型，这种语言的类型错误往往会导致语法错误。TypeScript 在运行前需要先编译为 JavaScript，而在编译阶段就会进行类型检查，所以 <strong>TypeScript 是静态类型</strong>，这段 TypeScript 代码在编译阶段就会报错了：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\nfoo<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Property \'split\' does not exist on type \'number\'.</span>\n<span class="token comment">// 编译时会报错（数字没有 split 方法），无法通过编译</span>\n</code></pre>\n<p>你可能会奇怪，这段 TypeScript 代码看上去和 JavaScript 没有什么区别呀。</p>\n<p>没错！大部分 JavaScript 代码都只需要经过少量的修改（或者完全不用修改）就变成 TypeScript 代码，这得益于 TypeScript 强大的[类型推论][]，即使不去手动声明变量 <code>foo</code> 的类型，也能在变量初始化时自动推论出它是一个 <code>number</code> 类型。</p>\n<p>完整的 TypeScript 代码是这样的：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\nfoo<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Property \'split\' does not exist on type \'number\'.</span>\n<span class="token comment">// 编译时会报错（数字没有 split 方法），无法通过编译</span>\n</code></pre>\n<h4 id="typescript-%E6%98%AF%E5%BC%B1%E7%B1%BB%E5%9E%8B">TypeScript 是弱类型<a class="anchor" href="#typescript-%E6%98%AF%E5%BC%B1%E7%B1%BB%E5%9E%8B">§</a></h4>\n<p>类型系统按照「是否允许隐式类型转换」来分类，可以分为强类型和弱类型。</p>\n<p>以下这段代码不管是在 JavaScript 中还是在 TypeScript 中都是可以正常运行的，运行时数字 <code>1</code> 会被隐式类型转换为字符串 <code>\'1\'</code>，加号 <code>+</code> 被识别为字符串拼接，所以打印出结果是字符串 <code>\'11\'</code>。</p>\n<pre class="language-js"><code class="language-js"><span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token string">\'1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 打印出字符串 \'11\'</span>\n</code></pre>\n<p>TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性，所以<strong>它们都是弱类型</strong>。</p>\n<p>作为对比，Python 是强类型，以下代码会在运行时报错：</p>\n<pre class="language-py"><code class="language-py"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token string">\'1\'</span><span class="token punctuation">)</span>\n<span class="token comment"># TypeError: unsupported operand type(s) for +: \'int\' and \'str\'</span>\n</code></pre>\n<p>若要修复该错误，需要进行强制类型转换：</p>\n<pre class="language-py"><code class="language-py"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">\'1\'</span><span class="token punctuation">)</span>\n<span class="token comment"># 打印出字符串 \'11\'</span>\n</code></pre>\n<blockquote>\n<p>强/弱是相对的，Python 在处理整型和浮点型相加时，会将整型隐式转换为浮点型，但是这并不影响 Python 是强类型的结论，因为大部分情况下 Python 并不会进行隐式类型转换。相比而言，JavaScript 和 TypeScript 中不管加号两侧是什么类型，都可以通过隐式类型转换计算出一个结果——而不是报错——所以 JavaScript 和 TypeScript 都是弱类型。</p>\n</blockquote>\n<blockquote>\n<p>虽然 TypeScript 不限制加号两侧的类型，但是我们可以借助 TypeScript 提供的类型系统，以及 ESLint 提供的代码检查功能，来限制加号两侧必须同为数字或同为字符串<sup><a href="#link-5">[5]</a></sup>。这在一定程度上使得 TypeScript 向「强类型」更近一步了——当然，这种限制是可选的。</p>\n</blockquote>\n<p>这样的类型系统体现了 TypeScript 的核心设计理念<sup><a href="#link-6">[6]</a></sup>：在完整保留 JavaScript 运行时行为的基础上，通过引入静态类型系统来提高代码的可维护性，减少可能出现的 bug。</p>\n<h3 id="%E9%80%82%E7%94%A8%E4%BA%8E%E4%BB%BB%E4%BD%95%E8%A7%84%E6%A8%A1">适用于任何规模<a class="anchor" href="#%E9%80%82%E7%94%A8%E4%BA%8E%E4%BB%BB%E4%BD%95%E8%A7%84%E6%A8%A1">§</a></h3>\n<p>TypeScript 非常适用于大型项目——这是显而易见的，类型系统可以为大型项目带来更高的可维护性，以及更少的 bug。</p>\n<p>在中小型项目中推行 TypeScript 的最大障碍就是认为使用 TypeScript 需要写额外的代码，降低开发效率。但事实上，由于有[类型推论][]，大部分类型都不需要手动声明了。相反，TypeScript 增强了编辑器（IDE）的功能，包括代码补全、接口提示、跳转到定义、代码重构等，这在很大程度上提高了开发效率。而且 TypeScript 有近百个[编译选项][]，如果你认为类型检查过于严格，那么可以通过修改编译选项来降低类型检查的标准。</p>\n<p>TypeScript 还可以和 JavaScript 共存。这意味着如果你有一个使用 JavaScript 开发的旧项目，又想使用 TypeScript 的特性，那么你不需要急着把整个项目都迁移到 TypeScript，你可以使用 TypeScript 编写新文件，然后在后续更迭中逐步迁移旧文件。如果一些 JavaScript 文件的迁移成本太高，TypeScript 也提供了一个方案，可以让你在不修改 JavaScript 文件的前提下，编写一个[类型声明文件][]，实现旧项目的渐进式迁移。</p>\n<p>事实上，就算你从来没学习过 TypeScript，你也可能已经在不知不觉中使用到了 TypeScript——在 VSCode 编辑器中编写 JavaScript 时，代码补全和接口提示等功能就是通过 TypeScript Language Service 实现的<sup><a href="#link-7">[7]</a></sup>：</p>\n<p><img src="../assets/what-is-typescript-vscode.png" alt="what-is-typescript-vscode"></p>\n<p>一些第三方库原生支持了 TypeScript，在使用时就能获得代码补全了，比如 Vue 3.0<sup><a href="#link-8">[8]</a></sup>：</p>\n<p><img src="../assets/what-is-typescript-vue.png" alt="what-is-typescript-vue"></p>\n<p>有一些第三方库原生不支持 TypeScript，但是可以通过安装社区维护的类型声明库<sup><a href="#link-9">[9]</a></sup>（比如通过运行 <code>npm install --save-dev @types/react</code> 来安装 React 的类型声明库）来获得代码补全能力——不管是在 JavaScript 项目中还是在 TypeScript 中项目中都是支持的：</p>\n<p><img src="../assets/what-is-typescript-react.png" alt="what-is-typescript-react"></p>\n<p>由此可见，TypeScript 的发展已经深入到前端社区的方方面面了，任何规模的项目都或多或少得到了 TypeScript 的支持。</p>\n<h3 id="%E4%B8%8E%E6%A0%87%E5%87%86%E5%90%8C%E6%AD%A5%E5%8F%91%E5%B1%95">与标准同步发展<a class="anchor" href="#%E4%B8%8E%E6%A0%87%E5%87%86%E5%90%8C%E6%AD%A5%E5%8F%91%E5%B1%95">§</a></h3>\n<p>TypeScript 的另一个重要的特性就是坚持与 ECMAScript 标准<sup><a href="#link-10">[10]</a></sup>同步发展。</p>\n<p>ECMAScript 是 JavaScript 核心语法的标准，自 2015 年起，每年都会发布一个新版本，包含一些新的语法。</p>\n<p>一个新的语法从提案到变成正式标准，需要经历以下几个阶段：</p>\n<ul>\n<li>Stage 0：展示阶段，仅仅是提出了讨论、想法，尚未正式提案。</li>\n<li>Stage 1：征求意见阶段，提供抽象的 API 描述，讨论可行性，关键算法等。</li>\n<li>Stage 2：草案阶段，使用正式的规范语言精确描述其语法和语义。</li>\n<li>Stage 3：候选人阶段，语法的设计工作已完成，需要浏览器、Node.js 等环境支持，搜集用户的反馈。</li>\n<li>Stage 4：定案阶段，已准备好将其添加到正式的 ECMAScript 标准中。</li>\n</ul>\n<p>一个语法进入到 Stage 3 阶段后，TypeScript 就会实现它。一方面，让我们可以尽早的使用到最新的语法，帮助它进入到下一个阶段；另一方面，处于 Stage 3 阶段的语法已经比较稳定了，基本不会有语法的变更，这使得我们能够放心的使用它。</p>\n<p>除了实现 ECMAScript 标准之外，TypeScript 团队也推进了诸多语法提案，比如可选链操作符（<code>?.</code>）<sup><a href="#link-11">[11]</a></sup>、空值合并操作符（<code>??</code>）<sup><a href="#link-12">[12]</a></sup>、Throw 表达式<sup><a href="#link-13">[13]</a></sup>、正则匹配索引<sup><a href="#link-14">[14]</a></sup>等。</p>\n<h2 id="%E6%80%BB%E7%BB%93">总结<a class="anchor" href="#%E6%80%BB%E7%BB%93">§</a></h2>\n<p>什么是 TypeScript？</p>\n<ul>\n<li>TypeScript 是添加了类型系统的 JavaScript，适用于任何规模的项目。</li>\n<li>TypeScript 是一门静态类型、弱类型的语言。</li>\n<li>TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性。</li>\n<li>TypeScript 可以编译为 JavaScript，然后运行在浏览器、Node.js 等任何能运行 JavaScript 的环境中。</li>\n<li>TypeScript 拥有很多编译选项，类型检查的严格程度由你决定。</li>\n<li>TypeScript 可以和 JavaScript 共存，这意味着 JavaScript 项目能够渐进式的迁移到 TypeScript。</li>\n<li>TypeScript 增强了编辑器（IDE）的功能，提供了代码补全、接口提示、跳转到定义、代码重构等能力。</li>\n<li>TypeScript 拥有活跃的社区，大多数常用的第三方库都提供了类型声明。</li>\n<li>TypeScript 与标准同步发展，符合最新的 ECMAScript 标准（stage 3）。</li>\n</ul>\n<h2 id="%E9%99%84typescript-%E7%9A%84%E5%8F%91%E5%B1%95%E5%8E%86%E5%8F%B2">附：TypeScript 的发展历史<a class="anchor" href="#%E9%99%84typescript-%E7%9A%84%E5%8F%91%E5%B1%95%E5%8E%86%E5%8F%B2">§</a></h2>\n<ul>\n<li>2012-10：微软发布了 TypeScript 第一个版本（0.8），此前已经在微软内部开发了两年。</li>\n<li>2014-04：TypeScript 发布了 1.0 版本。</li>\n<li>2014-10：Angular 发布了 2.0 版本，它是一个基于 TypeScript 开发的前端框架。</li>\n<li>2015-01：ts-loader 发布，webpack 可以编译 TypeScript 文件了。</li>\n<li>2015-04：微软发布了 Visual Studio Code，它内置了对 TypeScript 语言的支持，它自身也是用 TypeScript 开发的。</li>\n<li>2016-05：<code>@types/react</code> 发布，TypeScript 可以开发 React 应用了。</li>\n<li>2016-05：<code>@types/node</code> 发布，TypeScript 可以开发 Node.js 应用了。</li>\n<li>2016-09：TypeScript 发布了 2.0 版本。</li>\n<li>2018-06：TypeScript 发布了 3.0 版本。</li>\n<li>2019-02：TypeScript 宣布由官方团队来维护 typescript-eslint，以支持在 TypeScript 文件中运行 ESLint 检查。</li>\n<li>2020-05：Deno 发布了 1.0 版本，它是一个 JavaScript 和 TypeScript 运行时。</li>\n<li>2020-08：TypeScript 发布了 4.0 版本。</li>\n<li>2020-09：Vue 发布了 3.0 版本，官方支持 TypeScript。</li>\n</ul>\n<h2 id="%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">参考资料<a class="anchor" href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">§</a></h2>\n<ol>\n<li><span id="link-1"><a href="https://www.typescriptlang.org/">TypeScript 官网</a></span></li>\n<li><span id="link-2"><a href="https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch2.html">第 2 章: 一等公民的函数</a> · 函数式编程指北</span></li>\n<li><span id="link-3"><a href="https://insights.stackoverflow.com/survey/2020">StackOverflow 2020 开发者调查报告</a></span></li>\n<li><span id="link-4"><a href="https://web.stanford.edu/class/cs98si/slides/overview.html">斯坦福 JavaScript 第一课</a></span></li>\n<li><span id="link-5"><a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md">TypeScript ESLint 规则 <code>restrict-plus-operands</code></a></span></li>\n<li><span id="link-6"><a href="https://github.com/microsoft/TypeScript/wiki/TypeScript-Design-Goals">TypeScript 设计理念</a></span></li>\n<li><span id="link-7"><a href="https://code.visualstudio.com/docs/languages/typescript">Visual Studio Code 中集成了 TypeScript</a></span></li>\n<li><span id="link-8"><a href="https://v3.vuejs.org/guide/typescript-support.html">Vue 3.0 支持 TypeScript</a></span></li>\n<li><span id="link-9"><a href="https://github.com/DefinitelyTyped/DefinitelyTyped">Definitely Typed</a>——TypeScript 团队帮助维护的类型定义仓库</span></li>\n<li><span id="link-10"><a href="https://tc39.es/process-document/">ECMAScript 标准</a></span></li>\n<li><span id="link-11"><a href="https://github.com/tc39/proposal-optional-chaining">可选链操作符（<code>?.</code>）</a></span></li>\n<li><span id="link-12"><a href="https://github.com/tc39/proposal-nullish-coalescing">空值合并操作符（<code>??</code>）</a></span></li>\n<li><span id="link-13"><a href="https://github.com/tc39/proposal-throw-expressions">Throw 表达式</a></span></li>\n<li><span id="link-14"><a href="https://github.com/tc39/proposal-regexp-match-indices">正则匹配索引</a></span></li>\n</ol>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#typescript-%E7%9A%84%E7%89%B9%E6%80%A7">TypeScript 的特性</a><ol><li><a href="#%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F">类型系统</a><ol></ol></li><li><a href="#%E9%80%82%E7%94%A8%E4%BA%8E%E4%BB%BB%E4%BD%95%E8%A7%84%E6%A8%A1">适用于任何规模</a></li><li><a href="#%E4%B8%8E%E6%A0%87%E5%87%86%E5%90%8C%E6%AD%A5%E5%8F%91%E5%B1%95">与标准同步发展</a></li></ol></li><li><a href="#%E6%80%BB%E7%BB%93">总结</a></li><li><a href="#%E9%99%84typescript-%E7%9A%84%E5%8F%91%E5%B1%95%E5%8E%86%E5%8F%B2">附：TypeScript 的发展历史</a></li><li><a href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">参考资料</a></li></ol></nav>'
        } }),
    'author': "xcatliu",
    'contributors': [
        "xcatliu",
        "双向极端"
    ],
    'date': "2016-05-31T13:49:18.000Z",
    'updated': "2021-06-21T14:45:54.000Z",
    'excerpt': "以上描述是官网[1]对于 TypeScript 的定义。 它强调了 TypeScript 的两个最重要的特性——类型系统、适用于任何规模。 TypeScript 的特性 类型系统 从 TypeScript 的名字就可以看出来，「类型」是其最核心的特性。 我们知道，J...",
    'cover': "../assets/what-is-typescript-vscode.png",
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
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "introduction/what-is-typescript.html", owner: "xcatliu", pagerDirection: "first", repo: "typescript-tutorial", title: "\u4EC0\u4E48\u662F TypeScript" })
};
