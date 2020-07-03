

import Head from './_head.js';
import Header from './_header.js';
import Sidebar from './_sidebar.js';
import Main from './_main.js';
import { classnames } from './_utils.js';
const Layout = (props) => {
    const { config, script } = props;
    const [isDark, setIsDark] = React.useState(
    // @ts-ignore
    window.Deno ? false : document.documentElement.classList.contains('is_dark'));
    return (React.createElement("html", { className: classnames({ is_dark: isDark }) },
        React.createElement(Head, Object.assign({}, props, { isDark: isDark })),
        React.createElement("body", null,
            React.createElement(Header, Object.assign({}, props, { isDark: isDark, setIsDark: setIsDark })),
            React.createElement(Sidebar, Object.assign({}, props)),
            React.createElement(Main, Object.assign({}, props)),
            React.createElement("div", { className: "scroll_to_top flex_center" },
                React.createElement("a", { className: "czs-pen button", href: `${config.github}/edit/master/${props.pagePath}`, target: "_blank", style: { backgroundImage: `url("${config.base}assets/czs-pen.svg")` } }),
                React.createElement("a", { className: "czs-angle-up-l button", href: "#", onClick: (e) => {
                        e.preventDefault();
                        window.scrollTo(0, 0);
                    }, style: { backgroundImage: `url("${config.base}assets/czs-angle-up-l.svg")` } })),
            script)));
};
export default Layout;
