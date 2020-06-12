// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"

import Sidebar from './_sidebar.js';
const Layout = ({ config, title, content, ga, gitalk, script, sidebar, outputPath }) => {
    const [isDark, setIsDark] = React.useState(
    // @ts-ignore
    window.Deno ? false : document.documentElement.classList.contains('is_dark'));
    return (React.createElement("html", { className: isDark ? 'is_dark' : '' },
        React.createElement("head", null,
            ga,
            React.createElement("title", null, outputPath !== 'index.html' ? `${title} · ${config.title}` : title),
            React.createElement("meta", { charSet: "utf-8" }),
            React.createElement("link", { id: "prismTheme", rel: "stylesheet", href: isDark ? `${config.base}assets/prism_tomorrow.css` : `${config.base}assets/prism.css` }),
            React.createElement("script", { dangerouslySetInnerHTML: {
                    __html: `
let shouldSetIsDark = document.cookie.includes('is_dark=1') ? true : document.cookie.includes('is_dark=0') ? false : window.matchMedia('(prefers-color-scheme: dark)').matches
if (shouldSetIsDark) {
  document.documentElement.classList.add('is_dark');
  document.getElementById('prismTheme').href = "${config.base}assets/prism_tomorrow.css";
}
`
                } }),
            React.createElement("link", { rel: "stylesheet", href: `${config.base}assets/index.css` })),
        React.createElement("body", null,
            React.createElement("header", null,
                React.createElement("h1", null,
                    React.createElement("a", { href: config.base }, config.title)),
                React.createElement("nav", null,
                    React.createElement("ul", null,
                        config.nav.map(({ text, link }) => (React.createElement("li", { key: link },
                            React.createElement("a", { href: link }, text)))),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#", onClick: (e) => {
                                    e.preventDefault();
                                    setIsDark(!isDark);
                                    // @ts-ignore
                                    document.cookie = `is_dark=${!isDark ? '1' : '0'}; expires=Tue, 19 Jun 2038 03:14:07 UTC; path=/`;
                                } }, isDark ? '关闭黑暗模式' : '开启黑暗模式'))))),
            React.createElement(Sidebar, { sidebar: sidebar, outputPath: outputPath, config: config }),
            React.createElement("section", { className: "main" },
                content,
                gitalk),
            script)));
};
export default Layout;
