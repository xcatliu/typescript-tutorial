import Head from '../_head.js';
import Header from '../_header.js';
import Sidebar from '../_sidebar.js';
import Main from '../_main.js';
import Archives from './_archives.js';
import Tools from '../_tools.js';
import { classnames } from '../_utils.js';
const Layout = (props) => {
    var _a;
    const [isDark, setIsDark] = React.useState(
    // @ts-ignore
    window.Deno ? false : document.documentElement.classList.contains('is_dark'));
    return (React.createElement("html", { className: classnames({ is_dark: isDark }) },
        React.createElement(Head, { ...props, isDark: isDark }),
        React.createElement("body", null,
            React.createElement(Header, { ...props, isDark: isDark, setIsDark: setIsDark }),
            React.createElement(Sidebar, { ...props }),
            ((_a = props.blog) === null || _a === void 0 ? void 0 : _a.isPost) ? React.createElement(Main, { ...props }) : React.createElement(Archives, { ...props }),
            props.footer,
            React.createElement(Tools, { ...props }),
            props.script)));
};
export default Layout;
