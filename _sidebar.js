// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"

const Sidebar = ({ sidebar, outputPath, config }) => (React.createElement("aside", { className: "sidebar" },
    React.createElement("ol", null, sidebar.map(({ text, link, children }) => (React.createElement("li", { key: link },
        React.createElement("a", { href: `${config.base}${link}`, className: link === outputPath ? 'active' : '' }, text),
        children && (React.createElement("ol", null, children.map(({ text, link }) => (React.createElement("li", { key: link },
            React.createElement("a", { href: `${config.base}${link}`, className: link === outputPath ? 'active' : '' }, text))))))))))));
export default Sidebar;
