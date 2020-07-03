

export default {
    srcDir: '.',
    ignore: [/\/examples\//, /\/public\//, /\/\./, /\/package\-lock\.json/, /\/package\.json/, /\/pagic\.config\.ts/],
    theme: 'docs',
    plugins: ['sidebar', 'prev_next', 'gitalk', 'ga'],
    title: 'TypeScript 入门教程',
    description: '从 JavaScript 程序员的角度总结思考，循序渐进的理解 TypeScript。',
    github: 'https://github.com/xcatliu/typescript-tutorial',
    head: React.createElement("link", { rel: "icon", type: "image/png", href: "/favicon.png" }),
    nav: [
        {
            text: '赞助作者',
            link: 'https://github.com/xcatliu/buy-me-a-coffee',
            target: '_blank',
            popover: (React.createElement(React.Fragment, null,
                React.createElement("img", { src: "/assets/wechat.jpg", width: "256", style: { marginRight: '1rem', verticalAlign: 'top' } }),
                React.createElement("img", { src: "/assets/alipay.jpg", width: "256", style: { verticalAlign: 'top' } })))
        }
    ],
    sidebar: [
        {
            link: 'introduction/README.md',
            children: [
                'introduction/what-is-typescript.md',
                'introduction/get-typescript.md',
                'introduction/hello-typescript.md'
            ]
        },
        {
            link: 'basics/README.md',
            children: [
                'basics/primitive-data-types.md',
                'basics/any.md',
                'basics/type-inference.md',
                'basics/union-types.md',
                'basics/type-of-object-interfaces.md',
                'basics/type-of-array.md',
                'basics/type-of-function.md',
                'basics/type-assertion.md',
                'basics/declaration-files.md',
                'basics/built-in-objects.md'
            ]
        },
        {
            link: 'advanced/README.md',
            children: [
                'advanced/type-aliases.md',
                'advanced/string-literal-types.md',
                'advanced/tuple.md',
                'advanced/enum.md',
                'advanced/class.md',
                'advanced/class-and-interfaces.md',
                'advanced/generics.md',
                'advanced/declaration-merging.md',
                'advanced/further-reading.md'
            ]
        },
        {
            link: 'engineering/README.md',
            children: ['engineering/lint.md', 'engineering/compiler-options.md']
        },
        'thanks/README.md'
    ],
    tools: {
        editOnGithub: true,
        backToTop: true
    },
    tocAd: (React.createElement("div", { dangerouslySetInnerHTML: {
            __html: `
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- 192*128 -->
<ins class="adsbygoogle"
     style="display:inline-block;width:192px;height:128px"
     data-ad-client="ca-pub-8483371329009107"
     data-ad-slot="6487368873"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>`
        } })),
    gitalk: {
        clientID: '29aa4941759fc887ed4f',
        clientSecret: '33e355efdf3a1959624506a5d88311145208471b',
        repo: 'typescript-tutorial',
        owner: 'xcatliu',
        admin: ['xcatliu'],
        pagerDirection: 'first'
    },
    ga: {
        id: 'UA-45256157-14'
    }
};
