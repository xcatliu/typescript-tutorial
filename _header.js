

import Popover from './_popover.js';
const Header = ({ config, isDark, setIsDark }) => (React.createElement("header", null,
    React.createElement("h1", null,
        React.createElement("a", { href: config.base }, config.title)),
    React.createElement("nav", null,
        React.createElement("ul", null,
            config.nav
                .filter(({ align }) => align !== 'right')
                .map(({ text, link, target, popover }) => (React.createElement("li", { key: link }, popover ? (React.createElement(Popover, { placement: "bottom-start", content: popover },
                React.createElement("a", { href: link, target: target }, text))) : (React.createElement("a", { href: link, target: target }, text))))),
            React.createElement("li", { style: { flexGrow: 1 } }),
            React.createElement("li", { onClick: () => {
                    setIsDark(!isDark);
                    // @ts-ignore
                    document.cookie = `is_dark=${!isDark ? '1' : '0'}; expires=Tue, 19 Jun 2038 03:14:07 UTC; path=/`;
                }, className: "toggle_dark" },
                React.createElement("span", { className: "czs-sun", style: { backgroundImage: `url("${config.base}assets/czs-sun.svg")` } }),
                React.createElement("span", { className: "czs-sun-l", style: { backgroundImage: `url("${config.base}assets/czs-sun-l.svg")` } }),
                React.createElement("span", { className: "czs-moon", style: { backgroundImage: `url("${config.base}assets/czs-moon.svg")` } }),
                React.createElement("span", { className: "czs-moon-l", style: { backgroundImage: `url("${config.base}assets/czs-moon-l.svg")` } })),
            config.nav
                .filter(({ align }) => align === 'right')
                .map(({ text, link, target, popover }) => (React.createElement("li", { key: link }, popover ? (React.createElement(Popover, { placement: "bottom-end", content: popover },
                React.createElement("a", { href: link, target: target }, text))) : (React.createElement("a", { href: link, target: target }, text)))))))));
export default Header;
