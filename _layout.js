import Head from './_head.js';
import Header from './_header.js';
import Sidebar from './_sidebar.js';
import Main from './_main.js';
import Tools from './_tools.js';
import Footer from './_footer.js';
import { classnames } from './_utils.js';
const Layout = (props) => {
    const [isDark, setIsDark] = React.useState(
    // @ts-ignore
    window.Deno ? false : document.documentElement.classList.contains('is_dark'));
    return (React.createElement("html", { className: classnames({ is_dark: isDark }) },
        React.createElement(Head, Object.assign({}, props, { isDark: isDark })),
        React.createElement("body", null,
            React.createElement(Header, Object.assign({}, props, { isDark: isDark, setIsDark: setIsDark })),
            React.createElement(Sidebar, Object.assign({}, props)),
            React.createElement(Main, Object.assign({}, props)),
            React.createElement(Footer, Object.assign({}, props)),
            React.createElement(Tools, Object.assign({}, props)),
            props.script)));
};
export default Layout;
