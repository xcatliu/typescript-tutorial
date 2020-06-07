import React from 'https://dev.jspm.io/react@16.13.1';
import ReactDOM from 'https://dev.jspm.io/react-dom@16.13.1';

import layoutMap from './layout_map.js';

async function main() {
  let pathname = location.pathname;
  if (pathname.endsWith('/')) {
    pathname += 'index.html';
  }
  pathname = pathname.slice(1);
  const layoutPath = layoutMap[pathname];
  const propsPath = pathname.replace(/\.html$/, '_props.js');
  const Layout = (await import('/' + layoutPath)).default;
  const props = (await import('/' + propsPath)).default;
  ReactDOM.hydrate(React.createElement(Layout, props), document);

  document.addEventListener('click', handler);

  async function handler(e) {
    const { origin, pathname } = e.target;
    if (typeof pathname !== 'string') {
      return;
    }
    if (origin !== location.origin) {
      return;
    }
    if (pathname === location.pathname) {
      return;
    }
    let outputPath = pathname;
    if (outputPath.endsWith('/')) {
      outputPath += 'index.html';
    }
    outputPath = outputPath.slice(1);
    const layoutPath = layoutMap[outputPath];
    if (!layoutPath) {
      return;
    }
    e.preventDefault();
    const propsPath = outputPath.replace(/\.html$/, '_props.js');
    const Layout = (await import('/' + layoutPath)).default;
    const props = (await import('/' + propsPath)).default;
    ReactDOM.render(React.createElement(Layout, props), document);
    window.scrollTo(0, 0);
    window.history.pushState({}, '', e.target.href);
  }
}

main();
