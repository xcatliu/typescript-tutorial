import Popover from './_popover.js';
const Header = ({ config, language, isDark, setIsDark }) => {
    var _a, _b, _c;
    return (React.createElement("header", null,
        React.createElement("h1", { className: "hide_on_mobile" },
            React.createElement("a", { href: `${config.root}${(_a = language === null || language === void 0 ? void 0 : language.root.slice(1)) !== null && _a !== void 0 ? _a : ''}` }, config.title)),
        React.createElement("nav", null,
            React.createElement("ul", null,
                React.createElement("li", { className: "show_on_mobile flex_center" },
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
                React.createElement("li", { className: "show_on_mobile" },
                    React.createElement("h1", { className: "mobile_title" },
                        React.createElement("a", { href: config.root, onClick: () => {
                                // @ts-ignore
                                document.documentElement.classList.remove('show_sidebar');
                            } }, config.title))), (_b = config.nav) === null || _b === void 0 ? void 0 :
                _b.filter(({ align }) => align !== 'right').map(({ text, link, target, popover }) => (React.createElement("li", { key: link, className: "hide_on_mobile" }, popover ? (React.createElement(Popover, { placement: "bottom-start", content: popover },
                    React.createElement("a", { href: link, target: target }, text))) : (React.createElement("a", { href: link, target: target }, text))))),
                React.createElement("li", { style: { flexGrow: 1 } }), (_c = config.nav) === null || _c === void 0 ? void 0 :
                _c.filter(({ align }) => align === 'right').map(({ text, link, target, popover }) => (React.createElement("li", { key: link, className: "hide_on_mobile" }, popover ? (React.createElement(Popover, { placement: "bottom-end", content: popover },
                    React.createElement("a", { href: link, target: target }, text))) : (React.createElement("a", { href: link, target: target }, text))))),
                config.github && (React.createElement("li", { className: "flex_center" },
                    React.createElement("a", { className: "czs-github-logo", href: config.github, target: "_blank", style: { backgroundImage: `url("${config.root}assets/czs-github-logo.svg")` } }))),
                config.i18n && language && (React.createElement("li", { className: "flex_center" },
                    React.createElement("select", { value: language.code, onChange: (e) => {
                            var _a;
                            // @ts-ignore
                            let url = new URL(location.href);
                            // @ts-ignore
                            const nextLanguageCode = e.target.value;
                            if (language.root !== '/') {
                                url.pathname = url.pathname.replace(language.root, '/');
                            }
                            const nextLanguage = (_a = config.i18n) === null || _a === void 0 ? void 0 : _a.languages.find(({ code }) => code === nextLanguageCode);
                            url.pathname = `${config.root}${nextLanguage.root.slice(1)}${url.pathname.replace(config.root, '')}`;
                            // @ts-ignore
                            location.href = url.toString();
                        } }, config.i18n.languages.map(({ code, name }) => (React.createElement("option", { key: code, value: code }, name)))))),
                React.createElement("li", { onClick: () => {
                        setIsDark(!isDark);
                        // @ts-ignore
                        document.cookie = `is_dark=${!isDark ? '1' : '0'}; expires=Tue, 19 Jun 2038 03:14:07 UTC; path=/`;
                    }, className: "toggle_dark flex_center" },
                    React.createElement("span", { className: "czs-sun", style: { backgroundImage: `url("${config.root}assets/czs-sun.svg")` } }),
                    React.createElement("span", { className: "czs-sun-l", style: { backgroundImage: `url("${config.root}assets/czs-sun-l.svg")` } }),
                    React.createElement("span", { className: "czs-moon", style: { backgroundImage: `url("${config.root}assets/czs-moon.svg")` } }),
                    React.createElement("span", { className: "czs-moon-l", style: { backgroundImage: `url("${config.root}assets/czs-moon-l.svg")` } }))))));
};
export default Header;
