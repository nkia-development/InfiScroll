import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as o}from"./index-CcnH5Kt0.js";import{ae as r}from"./index-xveyaKp-.js";import"./index-RYns6xqu.js";import"./iframe-ekXnYS_4.js";import"../sb-preview/runtime.js";import"./index-D16Yfzz8.js";import"./index-D-8MO0q_.js";import"./index-B23dhaOI.js";import"./index-DrFu-skq.js";function n(t){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"README"}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsxs("div",{className:"sb-section-title",children:[e.jsx(i.h1,{id:"welcom-to-infiscroll-storybook",children:e.jsx(i.strong,{children:"Welcom to InfiScroll Storybook"})}),e.jsx(i.p,{children:"Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup. Below, explore guides for configuring Storybook with popular frameworks and tools. If you get stuck, learn how you can ask for help from our community."})]}),e.jsx(i.h1,{id:"infiscroll",children:"InfiScroll"}),e.jsx(i.p,{children:e.jsx(i.img,{src:"InfiScrollLogo.png",alt:"alt text"})}),e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"InfiScroll"})," is an open-source React component designed to help developers easily implement infinite scrolling in their applications. With a focus on simplicity and flexibility, InfiScroll allows you to seamlessly load additional content as users reach the end of the page, providing a smooth and efficient user experience. Whether you’re building a social media feed, an e-commerce catalog, or any content-heavy application, InfiScroll makes infinite scrolling effortless to integrate and customize."]}),e.jsx(i.p,{children:"This description highlights the purpose and benefits of InfiScroll while also emphasizing its ease of use for developers."}),e.jsx(i.h2,{id:"features",children:"Features"}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Effortless Infinite Scrolling:"})," Easily set up infinite scrolling in your React applications, automatically triggering a callback function when the user reaches the end of the scrollable area."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Customizable Callback:"})," Define what happens when the user scrolls to the bottom, such as loading more data, updating the UI, or triggering any custom logic."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Smooth User Experience:"})," Ensures that new content loads seamlessly, providing a continuous and engaging user experience."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Simple Integration:"})," Designed for easy integration into your existing React projects with minimal setup required."]}),`
`]}),e.jsx(i.h2,{id:"installation",children:"Installation"}),e.jsx(i.p,{children:"Install the library using npm:"}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`npm install infiscroll
`})}),e.jsx(i.h2,{id:"examples",children:"Examples"}),e.jsx(i.h2,{id:"usage",children:"Usage"}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-jsx",children:`import React from "react";
import InfiScroll from "infiscroll";

const MyComponent = () => {
  const loadMoreData = () => {
    // Logic to load more data
  };

  return (
    <InfiScroll onScrollEnd={loadMoreData}>
      {/* Your content goes here */}
    </InfiScroll>
  );
};

export default MyComponent;
`})}),e.jsx(i.h2,{id:"contributing",children:"Contributing"}),e.jsxs(i.p,{children:["join our community on ",e.jsx(i.a,{href:"https://discord.gg/ncUegvM2",rel:"nofollow",children:"Discord"})," to get started!"]}),e.jsx(i.h2,{id:"code-of-conduct",children:e.jsx(i.a,{href:"./CODE_OF_CONDUCT.md",children:"Code of Conduct"})}),e.jsx(i.p,{children:"Nkia has adopted a Code of Conduct that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated."}),e.jsx(i.h3,{id:"contributors",children:"Contributors"})," ",e.jsx("a",{href:"https://github.com/nkia-development/InfiScroll/graphs/contributors",children:e.jsx("img",{src:"https://contrib.rocks/image?repo=nkia-development/InfiScroll",alt:"contributors"})}),e.jsx(i.h2,{id:"license",children:"License"}),e.jsxs(i.p,{children:["InfiScroll is ",e.jsx(i.a,{href:"./LICENSE",children:"MIT License"}),"."]})]}),`
`,e.jsx("style",{children:`
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  img {
    object-fit: cover;
  }

  .sb-section-title {
    margin-bottom: 32px;
  }

  .sb-section a:not(h1 a, h2 a, h3 a) {
    font-size: 14px;
  }

  .sb-section-item, .sb-grid-item {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .sb-section-item-heading {
    padding-top: 20px !important;
    padding-bottom: 5px !important;
    margin: 0 !important;
  }
  .sb-section-item-paragraph {
    margin: 0;
    padding-bottom: 10px;
  }

  .sb-chevron {
    margin-left: 5px;
  }

  .sb-features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px 20px;
  }

  .sb-socials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .sb-socials p {
    margin-bottom: 10px;
  }

  .sb-explore-image {
    max-height: 32px;
    align-self: flex-start;
  }

  .sb-addon {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #EEF3F8;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #EEF3F8;
    height: 180px;
    margin-bottom: 48px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 48px;
    max-width: 240px;
  }

  .sb-addon-text h4 {
    padding-top: 0px;
  }

  .sb-addon-img {
    position: absolute;
    left: 345px;
    top: 0;
    height: 100%;
    width: 200%;
    overflow: hidden;
  }

  .sb-addon-img img {
    width: 650px;
    transform: rotate(-15deg);
    margin-left: 40px;
    margin-top: -72px;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0);
    backface-visibility: hidden;
  }

  @media screen and (max-width: 800px) {
    .sb-addon-img {
      left: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    .sb-section {
      flex-direction: column;
    }

    .sb-features-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .sb-socials {
      grid-template-columns: repeat(2, 1fr);
    }

    .sb-addon {
      height: 280px;
      align-items: flex-start;
      padding-top: 32px;
      overflow: hidden;
    }

    .sb-addon-text {
      padding-left: 24px;
    }

    .sb-addon-img {
      right: 0;
      left: 0;
      top: 130px;
      bottom: 0;
      overflow: hidden;
      height: auto;
      width: 124%;
    }

    .sb-addon-img img {
      width: 1200px;
      transform: rotate(-12deg);
      margin-left: 0;
      margin-top: 48px;
      margin-bottom: -40px;
      margin-left: -24px;
    }
  }
  `})]})}function f(t={}){const{wrapper:i}={...o(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{f as default};
