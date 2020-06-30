

import Head from './_head.js';
import Header from './_header.js';
import Sidebar from './_sidebar.js';
import Loading from './_loading.js';
import { classnames } from './_utils.js';
const Layout = (props) => {
    const { config, content, loading, toc, gitalk, script } = props;
    const [isDark, setIsDark] = React.useState(
    // @ts-ignore
    window.Deno ? false : document.documentElement.classList.contains('is_dark'));
    return (React.createElement("html", { className: classnames({ is_dark: isDark }) },
        React.createElement(Head, Object.assign({}, props, { isDark: isDark })),
        React.createElement("body", null,
            React.createElement(Header, Object.assign({}, props, { isDark: isDark, setIsDark: setIsDark })),
            React.createElement(Sidebar, Object.assign({}, props)),
            React.createElement("section", { className: "main" },
                React.createElement("div", { className: "main_article" },
                    loading ? React.createElement(Loading, null) : content,
                    gitalk),
                React.createElement("div", { className: "main_toc_container nav_link_container" },
                    React.createElement("div", { className: "main_toc" },
                        config.tocAd && React.createElement("div", { className: "toc_ad" }, config.tocAd),
                        toc))),
            script)));
};
export default Layout;
