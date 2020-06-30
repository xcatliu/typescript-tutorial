

import ReactHelmet from 'https://dev.jspm.io/react-helmet@6.1.0';
const { Helmet } = ReactHelmet;
const Head = ({ config, title, ga, outputPath, isDark }) => {
    const scriptSetIsDark = `
    const shouldSetIsDark = document.cookie.includes('is_dark=1') ? true : document.cookie.includes('is_dark=0') ? false : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (shouldSetIsDark) {
      document.documentElement.classList.add('is_dark');
      document.getElementById('prismTheme').href = "${config.base}assets/prism_tomorrow.css";
    }
  `;
    return (React.createElement("head", null,
        ga,
        config.head,
        React.createElement(Helmet, null,
            React.createElement("title", null, outputPath !== 'index.html' ? `${title} · ${config.title}` : title),
            React.createElement("meta", { charSet: "utf-8" }),
            React.createElement("link", { rel: "stylesheet", href: `${config.base}assets/index.css` }),
            React.createElement("link", { id: "prismTheme", rel: "stylesheet", href: isDark ? `${config.base}assets/prism_tomorrow.css` : `${config.base}assets/prism.css` }),
            React.createElement("script", null, scriptSetIsDark))));
};
export default Head;
