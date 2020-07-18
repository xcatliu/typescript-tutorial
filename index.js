let loading = false;
let lastPathname = null;
let lastLayout = null;
let lastProps = null;

function clickHandler(e) {
  const { origin, pathname } = e.target;
  if (typeof pathname !== 'string') return;
  if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
  if (origin !== location.origin) return;
  rerender(e.target, {
    preventDefault: () => e.preventDefault(),
    pushState: () => window.history.pushState({}, '', e.target.href)
  }).catch(errorHandler);
}

function popstateHandler() {
  rerender(location).catch(errorHandler);
}

async function main() {
  await rerender(location, { isHydrate: true }).catch(errorHandler);

  document.addEventListener('click', clickHandler);
  window.addEventListener('popstate', popstateHandler);
}

async function errorHandler(e) {
  console.error(e);
  console.log('Error occured, disable spa.');

  document.removeEventListener('click', clickHandler);
  window.removeEventListener('popstate', popstateHandler);
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

  preventDefault();
  if (loading === true) {
    return;
  }
  loading = true;
  if (!isHydrate) {
    // If render not complete in 0.1s, render a loading icon instead.
    setTimeout(() => {
      if (loading === false) return;
      ReactDOM.render(
        React.createElement(lastLayout, {
          ...lastProps,
          loading: true
        }),
        document
      );
    }, 100);
  }

  let propsPath = pathname;
  if (propsPath.endsWith('/')) {
    propsPath += 'index.html';
  }
  propsPath = propsPath.replace(/\.html$/, '_props.js');
  const props = (await import(propsPath)).default;
  let layoutPath = props.layoutPath.replace(/\.tsx$/, '.js');
  const Layout = (await import(`${props.config.root}${layoutPath}`)).default;
  if (isHydrate) {
    ReactDOM.hydrate(React.createElement(Layout, props), document);
  } else {
    pushState();
    ReactDOM.render(React.createElement(Layout, props), document);
    window.scrollTo(0, 0);
    window.dispatchEvent(new Event('rerender'));
  }
  lastPathname = pathname;
  lastLayout = Layout;
  lastProps = props;
  loading = false;
}

main().catch(errorHandler);
