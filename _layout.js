// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"

import Header from './_header.js';
import Sidebar from './_sidebar.js';
import Loading from './_loading.js';
import { classnames } from './_utils.js';
const Layout = ({ config, title, content, loading, toc, ga, gitalk, script, sidebar, outputPath }) => {
    const [isDark, setIsDark] = React.useState(
    // @ts-ignore
    window.Deno ? false : document.documentElement.classList.contains('is_dark'));
    return (React.createElement("html", { className: classnames({
            is_dark: isDark
        }) },
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
            React.createElement("link", { rel: "stylesheet", href: `${config.base}assets/index.css` }),
            config.head),
        React.createElement("body", null,
            React.createElement(Header, { config: config, isDark: isDark, setIsDark: setIsDark }),
            React.createElement(Sidebar, { sidebar: sidebar, outputPath: outputPath, config: config }),
            React.createElement("section", { className: "main" },
                React.createElement("div", { className: "main-article" },
                    loading ? React.createElement(Loading, null) : content,
                    gitalk),
                React.createElement("div", { className: "main-toc nav_link_container" }, toc)),
            script)));
};
export default Layout;
