const Tools = ({ config, pagePath }) => {
    if (!config.tools) {
        return null;
    }
    return (React.createElement("div", { className: "tools flex_center hide_on_mobile" },
        config.tools.editOnGithub && (React.createElement("a", { className: "czs-pen button", href: `${config.github}/edit/master/${pagePath}`, target: "_blank", style: { backgroundImage: `url("${config.root}assets/czs-pen.svg")` } })),
        config.tools.backToTop && (React.createElement("a", { className: "czs-angle-up-l button", href: "#", onClick: (e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
            }, style: { backgroundImage: `url("${config.root}assets/czs-angle-up-l.svg")` } }))));
};
export default Tools;
