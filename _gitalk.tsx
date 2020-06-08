// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1';
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/react-dom.d.ts"
import ReactDOM from 'https://dev.jspm.io/react-dom@16.13.1';

interface GitalkProps {
  clientID: string;
  clientSecret: string;
  repo: string;
  owner: string;
  admin: string[];
  id: string;
  title: string;
}

declare global {
  interface Window {
    gitalk: any;
    Gitalk: any;
  }
}

const Gitalk = (props: GitalkProps) => {
  React.useEffect(() => {
    // @ts-ignore
    const container = document.getElementById('gitalk-container');
    ReactDOM.unmountComponentAtNode(container);
    container.innerHTML = '';
    new window.Gitalk(props).render(container);
  }, [props.id]);
  return (
    <>
      <div id="gitalk-container" />
      <link rel="stylesheet" href="https://unpkg.com/gitalk@1.6.2/dist/gitalk.css" />
      <script src="https://unpkg.com/gitalk@1.6.2/dist/gitalk.min.js" />
    </>
  );
};

export default Gitalk;
