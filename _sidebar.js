import { classnames } from './_utils.js';
const Sidebar = ({ config, outputPath, sidebar }) => {
    if (!sidebar) {
        return null;
    }
    return (React.createElement("aside", { className: "sidebar" },
        React.createElement("ol", { className: "list_style_none" }, sidebar.map((sidebarItem, index) => (React.createElement(FoldableItem, { key: index, config: config, outputPath: outputPath, sidebarItem: sidebarItem }))))));
};
const FoldableItem = ({ config, outputPath, sidebarItem: { text, link, children } }) => {
    const olRef = React.useRef(null);
    const [fold, setFold] = React.useState(false);
    const [olHeight, setOlHeight] = React.useState(0);
    const isActive = link === outputPath;
    const foldOl = (fold) => {
        if (olRef.current === null) {
            return;
        }
        const currentHeight = olRef.current.getBoundingClientRect().height;
        if (fold) {
            setOlHeight(currentHeight);
            olRef.current.style.height = `${currentHeight}px`;
            setTimeout(() => {
                olRef.current.style.height = 0;
                setFold(fold);
            }, 17);
        }
        else {
            olRef.current.style.height = `${olHeight}px`;
            setFold(fold);
            setTimeout(() => {
                olRef.current.style.height = 'auto';
            }, 300);
        }
    };
    const toggleFold = (e) => {
        e.preventDefault();
        e.stopPropagation();
        foldOl(!fold);
    };
    return (React.createElement("li", { className: children ? (fold ? 'fold' : 'unfold') : '' },
        React.createElement("a", { href: link ? `${config.root}${link}` : '#', className: classnames('nav_link', {
                active: isActive,
                no_link: !link,
            }), onClick: (e) => {
                if (link) {
                    if (children) {
                        if (isActive) {
                            toggleFold(e);
                        }
                        else {
                            // @ts-ignore
                            document.documentElement.classList.remove('show_sidebar');
                            if (fold) {
                                foldOl(false);
                            }
                        }
                    }
                    else {
                        // @ts-ignore
                        document.documentElement.classList.remove('show_sidebar');
                    }
                }
                else {
                    toggleFold(e);
                }
            } },
            text,
            children && (React.createElement(React.Fragment, null,
                React.createElement("span", { className: "czs-angle-up-l", style: { backgroundImage: `url("${config.root}assets/czs-angle-up-l.svg")` }, onClick: toggleFold }),
                React.createElement("span", { className: "czs-angle-down-l", style: { backgroundImage: `url("${config.root}assets/czs-angle-down-l.svg")` }, onClick: toggleFold })))),
        children && (React.createElement("ol", { className: "list_style_none", ref: olRef }, children.map((sidebarItem, index) => (React.createElement(FoldableItem, { key: index, config: config, outputPath: outputPath, sidebarItem: sidebarItem })))))));
};
export default Sidebar;
