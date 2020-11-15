import throttle from 'https://cdn.pagic.org/lodash@4.17.20/esnext/throttle.js';
import Loading from './_loading.js';
import { dateFormatter } from './_utils.js';
const Main = (props) => {
    const { config, content, contentTitle, contentBody, blog, author, date, loading, toc, prev, next, gitalk } = props;
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
            loading ? (React.createElement(Loading, null)) : (blog === null || blog === void 0 ? void 0 : blog.isPost) ? (React.createElement(React.Fragment, null,
                contentTitle,
                date && (React.createElement("div", { className: "main_post_meta" },
                    React.createElement("time", { dateTime: date.toString() }, dateFormatter['YYYY-MM-DD'](date)),
                    " \u00B7 ", author !== null && author !== void 0 ? author : 'unknown')),
                contentBody)) : (content),
            (prev || next) && (React.createElement("div", { className: "prev_next" },
                prev && (React.createElement("a", { className: "prev button", href: `${config.root}${prev.link}` },
                    "\u00AB\u00A0\u00A0",
                    prev.title)),
                next && (React.createElement("a", { className: "next button", href: `${config.root}${next.link}` },
                    next.title,
                    "\u00A0\u00A0\u00BB")))),
            gitalk),
        toc && (React.createElement("div", { className: "main_toc_container nav_link_container" },
            React.createElement("div", { className: "main_toc" },
                config.tocAd && React.createElement("div", { className: "toc_ad" }, config.tocAd),
                toc)))));
};
export default Main;
