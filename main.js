import layoutMap from './layout_map.js';

let lastPathname = location.pathname;

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

  document.addEventListener('click', async (e) => {
    const { origin, pathname, hash } = e.target;
    if (typeof pathname !== 'string') return;
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    if (origin !== location.origin) return;
    if (pathname === lastPathname) {
      if (!hash) {
        e.preventDefault();
      }
      return;
    }
    const { layoutPath } = getPaths(pathname);
    if (!layoutPath) return;
    e.preventDefault();
    await rerender(pathname);
    window.history.pushState({}, '', e.target.href);
  });

  window.addEventListener('popstate', async (e) => {
    const { pathname } = location;
    if (pathname === lastPathname) {
      return;
    }
    const { layoutPath } = getPaths(pathname);
    if (!layoutPath) return;
    await rerender(pathname);
  });
}

function getPaths(pathname) {
  let outputPath = pathname;
  if (outputPath.endsWith('/')) {
    outputPath += 'index.html';
  }
  outputPath = outputPath.slice(1);
  const layoutPath = layoutMap[outputPath];
  const propsPath = outputPath.replace(/\.html$/, '_props.js');
  return {
    layoutPath,
    propsPath
  };
}

async function rerender(pathname) {
  const { layoutPath, propsPath } = getPaths(pathname);
  const Layout = (await import('/' + layoutPath)).default;
  const props = (await import('/' + propsPath)).default;
  ReactDOM.render(React.createElement(Layout, props), document);
  window.scrollTo(0, 0);
  lastPathname = pathname;
}

main();
