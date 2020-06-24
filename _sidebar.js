// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"

const Sidebar = (props) => (React.createElement("aside", { className: "sidebar" },
    React.createElement("ol", null, props.sidebar.map((sidebarConfig) => (React.createElement(FoldableItem, Object.assign({}, props, sidebarConfig)))))));
const FoldableItem = ({ outputPath, config, text, link, children }) => {
    const [fold, setFold] = React.useState(false);
    const [olHeight, setOlHeight] = React.useState('auto');
    const measuredRef = React.useCallback((node) => {
        if (node !== null) {
            setOlHeight(node.getBoundingClientRect().height);
        }
    }, []);
    return (React.createElement("li", { className: fold ? 'fold' : 'unfold' },
        React.createElement("a", { href: `${config.base}${link}`, className: link === outputPath ? 'active' : '', onClick: () => {
                if (!children) {
                    return;
                }
                if (link === outputPath) {
                    setFold(!fold);
                }
                else {
                    setFold(false);
                }
            } },
            text,
            children && (React.createElement(React.Fragment, null,
                React.createElement("span", { className: "czs-angle czs-angle-up-l", style: { backgroundImage: `url("${config.base}assets/czs-angle-up-l.svg")` }, onClick: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setFold(!fold);
                    } }),
                React.createElement("span", { className: "czs-angle czs-angle-down-l", style: { backgroundImage: `url("${config.base}assets/czs-angle-down-l.svg")` }, onClick: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setFold(!fold);
                    } })))),
        children && (React.createElement("ol", { ref: measuredRef, style: { height: olHeight } }, children.map(({ text, link }) => (React.createElement("li", { key: link },
            React.createElement("a", { href: `${config.base}${link}`, className: link === outputPath ? 'active' : '' }, text))))))));
};
export default Sidebar;
