let loading = false;
let lastPathname = null;
let lastProps = null;
let Layout = null;

function clickHandler(e) {
  const { origin, pathname } = e.target;
  if (typeof pathname !== 'string') return;
  if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
  if (origin !== location.origin) return;
  rerender(e.target, {
    preventDefault: () => e.preventDefault(),
    pushState: () => window.history.pushState({}, '', e.target.href),
  }).catch(errorHandler);
}

function popstateHandler() {
  rerender(location).catch(errorHandler);
}

async function main() {
  document.addEventListener('click', clickHandler);
  window.addEventListener('popstate', popstateHandler);

  await rerender(location, { isHydrate: true }).catch(errorHandler);
}

async function errorHandler(e) {
  console.error(e);
  console.log('Error occured, disable spa.');

  document.removeEventListener('click', clickHandler);
  window.removeEventListener('popstate', popstateHandler);
}

async function rerender(
  { pathname, hash, href },
  { preventDefault = () => {}, pushState = () => {}, isHydrate = false } = {},
) {
  if (pathname === lastPathname) {
    if (!hash) {
      preventDefault();
    }
    return;
  }

  let propsPath = pathname;
  if (propsPath.endsWith('/')) {
    propsPath += 'index.html';
  }
  if (!propsPath.endsWith('.html')) {
    return;
  }
  propsPath = propsPath.replace(/\.html$/, '_props.js');

  preventDefault();
  if (loading === true) {
    return;
  }
  loading = true;
  if (!isHydrate) {
    // If render not complete in 0.1s, render a loading icon instead.
    setTimeout(() => {
      if (loading === false) return;
      window.ReactDOM.render(
        window.React.createElement(Layout, {
          ...lastProps,
          loading: true,
        }),
        document,
      );
    }, 100);
  }

  const props = (await import(propsPath)).default;
  window.pageProps = props;

  // Layout changed, reload page
  if (lastProps && lastProps.layoutPath !== props.layoutPath) {
    location.href = href;
    return;
  }

  let layoutPath = props.layoutPath.replace(/\.tsx$/, '.js');
  Layout = (await import(`${props.config.root}${layoutPath}`)).default;
  if (isHydrate) {
    window.ReactDOM.hydrate(window.React.createElement(Layout, props), document);
  } else {
    pushState();
    window.ReactDOM.render(window.React.createElement(Layout, props), document);
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView();
      }
    }
    window.dispatchEvent(new Event('rerender'));
  }
  lastPathname = pathname;
  lastProps = props;
  loading = false;
}

main().catch(errorHandler);
