

import { classnames } from './_utils.js';
const Sidebar = (props) => (React.createElement("aside", { className: "sidebar" },
    React.createElement("ol", null, props.sidebar.map((sidebarConfig) => (React.createElement(FoldableItem, Object.assign({}, props, sidebarConfig))))),
    React.createElement("hr", null),
    React.createElement("a", { className: "powered_by", href: "https://github.com/xcatliu/pagic", target: "_blank" },
        "Powered by\u00A0",
        React.createElement("img", { src: `${props.config.base}assets/pagic.png` }),
        "agic")));
const FoldableItem = ({ outputPath, config, text, link, children }) => {
    const [fold, setFold] = React.useState(false);
    const [olHeight, setOlHeight] = React.useState('auto');
    const measuredRef = React.useCallback((node) => {
        if (node !== null) {
            setOlHeight(node.getBoundingClientRect().height);
        }
    }, []);
    const isActive = link === outputPath;
    const toggleFold = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setFold(!fold);
    };
    return (React.createElement("li", { className: fold ? 'fold' : 'unfold' },
        React.createElement("a", { href: link ? `${config.base}${link}` : '#', className: classnames('nav_link', {
                active: isActive,
                no_link: !link
            }), onClick: () => {
                if (link) {
                    if (children) {
                        if (isActive) {
                            setFold(!fold);
                        }
                        else {
                            setFold(false);
                        }
                    }
                }
                else {
                    setFold(!fold);
                }
            } },
            text,
            children && (React.createElement(React.Fragment, null,
                React.createElement("span", { className: "czs-angle czs-angle-up-l", style: { backgroundImage: `url("${config.base}assets/czs-angle-up-l.svg")` }, onClick: toggleFold }),
                React.createElement("span", { className: "czs-angle czs-angle-down-l", style: { backgroundImage: `url("${config.base}assets/czs-angle-down-l.svg")` }, onClick: toggleFold })))),
        children && (React.createElement("ol", { ref: measuredRef, style: { height: olHeight } }, children.map(({ text, link }, index) => (React.createElement("li", { key: index },
            React.createElement("a", { href: `${config.base}${link}`, className: classnames('nav_link', { active: link === outputPath }) }, text))))))));
};
export default Sidebar;
