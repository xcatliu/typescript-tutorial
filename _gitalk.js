// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"

// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/react-dom.d.ts"

const Gitalk = (props) => {
    React.useEffect(() => {
        // @ts-ignore
        const container = document.getElementById('gitalk-container');
        ReactDOM.unmountComponentAtNode(container);
        container.innerHTML = '';
        new window.Gitalk(props).render(container);
    }, [props.id]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { id: "gitalk-container" }),
        React.createElement("link", { rel: "stylesheet", href: "https://unpkg.com/gitalk@1.6.2/dist/gitalk.css" }),
        React.createElement("script", { src: "https://unpkg.com/gitalk@1.6.2/dist/gitalk.min.js" })));
};
export default Gitalk;
