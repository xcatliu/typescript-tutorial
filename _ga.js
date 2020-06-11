// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"

const Ga = ({ id }) => {
    React.useEffect(() => {
        window.addEventListener('rerender', () => {
            // @ts-ignore
            window.ga('set', 'page', location.pathname);
            window.ga('send', 'pageview');
        });
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("script", { async: true, src: "https://www.google-analytics.com/analytics.js" }),
        React.createElement("script", { dangerouslySetInnerHTML: {
                __html: `window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', '${id}');`
            } })));
};
export default Ga;
