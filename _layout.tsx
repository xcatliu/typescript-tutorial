// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1';
import { PagicLayout } from 'https://deno.land/x/pagic/mod.ts';

import Sidebar from './_sidebar.tsx';
import Gitalk from './_gitment.tsx';

const Layout: PagicLayout = ({ config, title, content, script, sidebar, outputPath }) => {
  const [isDark, setIsDark] = React.useState(
    // @ts-ignore
    window.Deno ? false : document.documentElement.classList.contains('is_dark')
  );
  return (
    <html className={isDark ? 'is_dark' : ''}>
      <head>
        <script async src="https://www.google-analytics.com/analytics.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-45256157-14');`
          }}
        />
        <title>{outputPath !== 'index.html' ? `${title} · ${config.title}` : title}</title>
        <meta charSet="utf-8" />

        <link rel="shortcut icon" type="image/png" href="//xcatliu.github.io/favicon.ico" />
        <link id="prismTheme" rel="stylesheet" href={isDark ? '/assets/prism_tomorrow.css' : '/assets/prism.css'} />
        <link rel="stylesheet" href="/assets/index.css" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
let shouldSetIsDark = document.cookie.includes('is_dark=1') ? true : document.cookie.includes('is_dark=0') ? false : window.matchMedia('(prefers-color-scheme: dark)').matches
if (shouldSetIsDark) {
  document.documentElement.classList.add('is_dark');
  document.getElementById('prismTheme').href = "/assets/prism_tomorrow.css";
}
`
          }}
        />
      </head>
      <body>
        <header>
          <h1>
            <a href="/">{config.title}</a>
          </h1>
          <nav>
            <ul>
              <li>
                <a href="https://github.com/xcatliu/typescript-tutorial">GitHub</a>
              </li>
              <li>
                <a href="https://github.com/xcatliu/buy-me-a-coffee">赞助作者</a>
              </li>
              <li>
                <a href="https://github.com/xcatliu/pagic">本网站使用 Pagic 构建</a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsDark(!isDark);
                    // @ts-ignore
                    document.cookie = `is_dark=${!isDark ? '1' : '0'}; expires=Tue, 19 Jun 2038 03:14:07 UTC; path=/`;
                  }}
                >
                  {isDark ? '关闭黑暗模式' : '开启黑暗模式'}
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <Sidebar sidebar={sidebar} outputPath={outputPath} />
        <section className="main">
          {content}
          <Gitalk
            clientID="29aa4941759fc887ed4f"
            clientSecret="33e355efdf3a1959624506a5d88311145208471b"
            repo="typescript-tutorial"
            owner="xcatliu"
            admin={['xcatliu']}
            id={outputPath}
          />
        </section>
        {script}
      </body>
    </html>
  );
};

export default Layout;
