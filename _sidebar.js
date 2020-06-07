// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1';
const Sidebar = ({ sidebar, outputPath }) => (React.createElement("aside", null,
    React.createElement("ul", null, sidebar.map(({ title, link, children }) => (React.createElement("li", { key: link },
        React.createElement("a", { href: link, className: link === `/${outputPath}` ? 'active' : '' }, title),
        children && (React.createElement("ul", null, children.map(({ title, link }) => (React.createElement("li", { key: link },
            React.createElement("a", { href: link, className: link === `/${outputPath}` ? 'active' : '' }, title))))))))))));
export default Sidebar;
