import Popover from './_popover.js';
const Header = ({ config, isDark, setIsDark }) => (React.createElement("header", null,
    React.createElement("h1", null,
        React.createElement("a", { href: config.root }, config.title)),
    React.createElement("nav", null,
        React.createElement("ul", null,
            config.nav
                .filter(({ align }) => align !== 'right')
                .map(({ text, link, target, popover }) => (React.createElement("li", { key: link, className: "nav_custom_item" }, popover ? (React.createElement(Popover, { placement: "bottom-start", content: popover },
                React.createElement("a", { href: link, target: target }, text))) : (React.createElement("a", { href: link, target: target }, text))))),
            React.createElement("li", { className: "mobile_menu flex_center" },
                React.createElement("a", { className: "czs-menu-l", href: "#", style: { backgroundImage: `url("${config.root}assets/czs-menu-l.svg")` }, onClick: (e) => {
                        e.preventDefault();
                        // @ts-ignore
                        if (document.documentElement.classList.contains('show_sidebar')) {
                            // @ts-ignore
                            document.documentElement.classList.remove('show_sidebar');
                        }
                        else {
                            // @ts-ignore
                            document.documentElement.classList.add('show_sidebar');
                        }
                    } })),
            React.createElement("li", { className: "mobile_header" },
                React.createElement("h1", null,
                    React.createElement("a", { href: config.root, onClick: () => {
                            // @ts-ignore
                            document.documentElement.classList.remove('show_sidebar');
                        } }, config.title))),
            React.createElement("li", { style: { flexGrow: 1 } }),
            config.nav
                .filter(({ align }) => align === 'right')
                .map(({ text, link, target, popover }) => (React.createElement("li", { key: link, className: "nav_custom_item" }, popover ? (React.createElement(Popover, { placement: "bottom-end", content: popover },
                React.createElement("a", { href: link, target: target }, text))) : (React.createElement("a", { href: link, target: target }, text))))),
            config.github && (React.createElement("li", { className: "flex_center" },
                React.createElement("a", { className: "czs-github-logo", href: config.github, target: "_blank", style: { backgroundImage: `url("${config.root}assets/czs-github-logo.svg")` } }))),
            React.createElement("li", { onClick: () => {
                    setIsDark(!isDark);
                    // @ts-ignore
                    document.cookie = `is_dark=${!isDark ? '1' : '0'}; expires=Tue, 19 Jun 2038 03:14:07 UTC; path=/`;
                }, className: "toggle_dark flex_center" },
                React.createElement("span", { className: "czs-sun", style: { backgroundImage: `url("${config.root}assets/czs-sun.svg")` } }),
                React.createElement("span", { className: "czs-sun-l", style: { backgroundImage: `url("${config.root}assets/czs-sun-l.svg")` } }),
                React.createElement("span", { className: "czs-moon", style: { backgroundImage: `url("${config.root}assets/czs-moon.svg")` } }),
                React.createElement("span", { className: "czs-moon-l", style: { backgroundImage: `url("${config.root}assets/czs-moon-l.svg")` } }))))));
export default Header;
