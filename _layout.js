

import throttle from 'https://dev.jspm.io/lodash@4.17.15/throttle';
import Head from './_head.js';
import Header from './_header.js';
import Sidebar from './_sidebar.js';
import Loading from './_loading.js';
import { classnames } from './_utils.js';
const Layout = (props) => {
    const { config, content, loading, toc, previous, next, gitalk, script } = props;
    const [isDark, setIsDark] = React.useState(
    // @ts-ignore
    window.Deno ? false : document.documentElement.classList.contains('is_dark'));
    React.useEffect(() => {
        if (window.Deno) {
            return;
        }
        const scrollHandler = () => {
            let anchorPositionMap = new Map();
            // @ts-ignore
            for (let a of document.querySelectorAll('.toc a')) {
                // @ts-ignore
                const bounding = document.getElementById(a.hash.slice(1)).getBoundingClientRect();
                const belowTop = bounding.y > 64;
                // @ts-ignore
                const aboveBottom = bounding.y + bounding.height + 16 <= window.innerHeight;
                if ((belowTop && aboveBottom) || (!belowTop && !aboveBottom)) {
                    anchorPositionMap.set(a, 'inViewport');
                }
                else if (belowTop && !aboveBottom) {
                    anchorPositionMap.set(a, 'belowViewport');
                }
                else if (!belowTop && aboveBottom) {
                    anchorPositionMap.set(a, 'aboveViewport');
                }
            }
            let activeAnchor = null;
            for (let [a, position] of anchorPositionMap) {
                if (position === 'aboveViewport') {
                    activeAnchor = a;
                }
                else if (position === 'inViewport') {
                    if (activeAnchor === null) {
                        activeAnchor = a;
                        break;
                    }
                }
            }
            if (activeAnchor) {
                // @ts-ignore
                document.querySelectorAll('.toc a.active').forEach((node) => node.classList.remove('active'));
                activeAnchor.classList.add('active');
            }
        };
        window.addEventListener('scroll', throttle(scrollHandler, 100));
        scrollHandler();
    }, []);
    return (React.createElement("html", { className: classnames({ is_dark: isDark }) },
        React.createElement(Head, Object.assign({}, props, { isDark: isDark })),
        React.createElement("body", null,
            React.createElement(Header, Object.assign({}, props, { isDark: isDark, setIsDark: setIsDark })),
            React.createElement(Sidebar, Object.assign({}, props)),
            React.createElement("section", { className: "main" },
                React.createElement("div", { className: "main_article" },
                    loading ? React.createElement(Loading, null) : content,
                    (previous || next) && (React.createElement("div", { className: "previous_next" },
                        previous && (React.createElement("a", { className: "previous button", href: `${config.base}${previous.link}` },
                            "\u00AB\u00A0\u00A0",
                            previous.text)),
                        next && (React.createElement("a", { className: "next button", href: `${config.base}${next.link}` },
                            next.text,
                            "\u00A0\u00A0\u00BB")))),
                    gitalk),
                React.createElement("div", { className: "main_toc_container nav_link_container" },
                    React.createElement("div", { className: "main_toc" },
                        config.tocAd && React.createElement("div", { className: "toc_ad" }, config.tocAd),
                        toc))),
            React.createElement("div", { className: "scroll_to_top flex_center" },
                React.createElement("a", { className: "czs-pen button", href: `${config.github}/edit/master/${props.pagePath}`, target: "_blank", style: { backgroundImage: `url("${config.base}assets/czs-pen.svg")` } }),
                React.createElement("a", { className: "czs-angle-up-l button", href: "#", onClick: (e) => {
                        e.preventDefault();
                        window.scrollTo(0, 0);
                    }, style: { backgroundImage: `url("${config.base}assets/czs-angle-up-l.svg")` } })),
            script)));
};
export default Layout;
