// @deno-types="../../types/any.d.ts"
import Helmet from 'https://cdn.pagic.org/react-helmet@6.1.0/esnext/react-helmet.js';
const Head = ({ config, title, head, outputPath, isDark }) => {
    var _a, _b;
    const scriptSetIsDark = `
    const shouldSetIsDark = document.cookie.includes('is_dark=1') ? true : document.cookie.includes('is_dark=0') ? false : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (shouldSetIsDark) {
      document.documentElement.classList.add('is_dark');
      document.getElementById('prismTheme').href = "${config.root}assets/prism_tomorrow.css";
    }
  `;
    const isNotIndexPage = outputPath !== 'index.html';
    const pageTitle = title ? (isNotIndexPage ? `${title} · ${config.title}` : title) : config.title;
    return (React.createElement("head", null,
        React.createElement(Helmet, null,
            React.createElement("meta", { charSet: "utf-8" }),
            React.createElement("meta", { httpEquiv: "x-ua-compatible", content: "ie=edge" }),
            React.createElement("title", null, pageTitle),
            config.description && React.createElement("meta", { name: "description", content: config.description }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
            React.createElement("meta", { property: "og:title", content: pageTitle }),
            config.description && React.createElement("meta", { property: "og:description", content: config.description }),
            React.createElement("meta", { property: "og:type", content: isNotIndexPage ? 'article' : 'website' }),
            React.createElement("meta", { name: "twitter:card", content: "summary" }),
            ((_b = (_a = config.blog) === null || _a === void 0 ? void 0 : _a.social) === null || _b === void 0 ? void 0 : _b.twitter) && React.createElement("meta", { name: "twitter:site", content: `@${config.blog.social.twitter}` }),
            React.createElement("link", { rel: "stylesheet", href: `${config.root}assets/index.css` }),
            React.createElement("link", { id: "prismTheme", rel: "stylesheet", href: isDark ? `${config.root}assets/prism_tomorrow.css` : `${config.root}assets/prism.css` }),
            React.createElement("script", null, scriptSetIsDark)),
        head));
};
export default Head;
