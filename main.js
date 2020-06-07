import layoutMap from './layout_map.js';

let loading = false;
let lastPathname = null;
let lastLayout = null;
let lastProps = null;

async function main() {
  rerender(location, { isHydrate: true });

  document.addEventListener('click', async (e) => {
    const { origin, pathname } = e.target;
    if (typeof pathname !== 'string') return;
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    if (origin !== location.origin) return;
    await rerender(e.target, {
      preventDefault: () => e.preventDefault(),
      pushState: () => window.history.pushState({}, '', e.target.href)
    });
  });

  window.addEventListener('popstate', () => rerender(location));
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

async function rerender(
  { pathname, hash },
  { preventDefault = () => {}, pushState = () => {}, isHydrate = false } = {}
) {
  if (pathname === lastPathname) {
    if (!hash) {
      preventDefault();
    }
    return;
  }
  const { layoutPath, propsPath } = getPaths(pathname);
  if (!layoutPath) return;
  preventDefault();
  if (loading === true) {
    return;
  }
  loading = true;
  if (!isHydrate) {
    setTimeout(() => {
      if (loading === false) return;
      ReactDOM.render(
        React.createElement(lastLayout, {
          ...lastProps,
          content: React.createElement('article', { className: 'loading' }, 'Loading...')
        }),
        document
      );
    }, 100);
  }
  const Layout = (await import('/' + layoutPath)).default;
  const props = (await import('/' + propsPath)).default;
  if (isHydrate) {
    ReactDOM.hydrate(React.createElement(Layout, props), document);
  } else {
    ReactDOM.render(React.createElement(Layout, props), document);
    window.scrollTo(0, 0);
    pushState();
  }
  lastPathname = pathname;
  lastLayout = Layout;
  lastProps = props;
  loading = false;
}

main();
