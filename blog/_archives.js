import { dateFormatter } from '../_utils.js';
const Archives = (props) => {
    const { config, contentTitle, title, blog } = props;
    return (React.createElement("section", { className: "main" },
        React.createElement("div", { className: "main_article" },
            React.createElement("article", null, contentTitle !== null && contentTitle !== void 0 ? contentTitle : (title && React.createElement("h1", null, title)),
                React.createElement("ul", { className: "main_archives" }, blog === null || blog === void 0 ? void 0 : blog.posts.map(({ title, link, date }) => (React.createElement("li", { key: link },
                    React.createElement("time", { dateTime: date.toString() }, dateFormatter['YYYY-MM-DD'](date)),
                    React.createElement("div", null,
                        React.createElement("a", { href: `${config.root}${link}` }, title))))))))));
};
export default Archives;
