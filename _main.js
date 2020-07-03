

import throttle from 'https://dev.jspm.io/lodash@4.17.15/throttle';
import Loading from './_loading.js';
const Main = (props) => {
    const { config, content, loading, toc, previous, next, gitalk } = props;
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
    return (React.createElement("section", { className: "main" },
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
                toc))));
};
export default Main;
