const Tools = ({ config, pagePath }) => {
    var _a;
    if (!config.tools) {
        return null;
    }
    return (React.createElement("div", { className: "tools flex_center hide_on_mobile" },
        config.tools.editOnGitHub && (React.createElement("a", { className: "czs-pen button", href: `${config.github}/edit/${(_a = config.branch) !== null && _a !== void 0 ? _a : 'main'}/${config.srcDir}/${pagePath}`, target: "_blank", style: { backgroundImage: `url("${config.root}assets/czs-pen.svg")` } })),
        config.tools.backToTop && (React.createElement("a", { className: "czs-angle-up-l button", href: "#", onClick: (e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
            }, style: { backgroundImage: `url("${config.root}assets/czs-angle-up-l.svg")` } }))));
};
export default Tools;
