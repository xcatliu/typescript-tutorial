import { React } from 'https://deno.land/x/pagic@v1.6.3/mod.ts';

export default {
  srcDir: '.',
  exclude: ['examples'],
  theme: 'docs',
  plugins: ['sidebar', 'prev_next', 'gitalk', 'ga'],
  title: 'TypeScript 入门教程',
  description: '从 JavaScript 程序员的角度总结思考，循序渐进的理解 TypeScript',
  github: 'https://github.com/xcatliu/typescript-tutorial',
  head: <link rel="icon" type="image/png" href="/favicon.png" />,
  nav: [
    {
      text: '赞助作者',
      link: 'https://github.com/xcatliu/buy-me-a-coffee',
      target: '_blank',
      popover: (
        <>
          <img src="/assets/wechat.jpg" width="256" style={{ marginRight: '1rem', verticalAlign: 'top' }} />
          <img src="/assets/alipay.jpg" width="256" style={{ verticalAlign: 'top' }} />
        </>
      ),
    },
    {
      text: '加入微信群',
      popover: (
        <>
          <p style={{ marginTop: 0, marginBottom: '1rem', width: 256 }}>一群已满，请扫码加二群</p>
          <img src="/assets/join-wechat.jpg" width="256" />
        </>
      ),
    },
    {
      text: '加入 QQ 群',
      link: 'https://jq.qq.com/?_wv=1027&k=5nkkFCl',
      target: '_blank',
      popover: (
        <>
          <p style={{ marginTop: 0, marginBottom: '1rem', width: 256 }}>
            一群（767142358）已满，请扫码加二群（706191218）
          </p>
          <img src="/assets/join-qq.jpg" width="256" />
        </>
      ),
    },
    {
      text: '本网站使用 Pagic 构建',
      link: 'https://github.com/xcatliu/pagic',
      target: '_blank',
    },
  ],
  sidebar: {
    '/': [
      {
        link: 'introduction/README.md',
        children: [
          'introduction/what-is-typescript.md',
          'introduction/get-typescript.md',
          'introduction/hello-typescript.md',
        ],
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
          'basics/built-in-objects.md',
        ],
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
          'advanced/decorator.md',
          'advanced/further-reading.md',
        ],
      },
      {
        link: 'engineering/README.md',
        children: ['engineering/lint.md', 'engineering/compiler-options.md'],
      },
      'thanks/README.md',
    ],
  },
  tools: {
    editOnGitHub: true,
    backToTop: true,
  },
  //   tocAd: (
  //     <div
  //       dangerouslySetInnerHTML={{
  //         __html: `
  // <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  // <!-- 192*128 -->
  // <ins
  //   class="adsbygoogle"
  //   style="display:inline-block;width:192px;height:128px"
  //   data-ad-client="ca-pub-8483371329009107"
  //   data-ad-slot="6487368873"
  // ></ins>
  // <script>
  //   (adsbygoogle = window.adsbygoogle || []).push({});
  // </script>`
  //       }}
  //     />
  //   ),
  gitalk: {
    clientID: '29aa4941759fc887ed4f',
    clientSecret: '33e355efdf3a1959624506a5d88311145208471b',
    repo: 'typescript-tutorial',
    owner: 'xcatliu',
    admin: ['xcatliu'],
    pagerDirection: 'first',
  },
  ga: {
    id: 'UA-45256157-14',
  },
  port: 8001,
};
