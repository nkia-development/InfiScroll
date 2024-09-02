import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as n}from"./index-RYns6xqu.js";const I=({isLoading:r,loadMore:s,hasMore:c,children:x,loadingComponent:u,style:p,threshold:j=.1,searchKeyword:m,debouncedLoadMore:g},v)=>{const l=n.useRef(!0),i=n.useRef(null);return n.useEffect(()=>{const o=i.current,d=new IntersectionObserver(y=>{y.forEach(E=>{E.isIntersecting&&!r&&c&&s()})},{threshold:j});return o&&d.observe(i.current),()=>{o&&d.disconnect()}},[r,c,s]),n.useEffect(()=>{if(l.current){l.current=!1;return}g()},[m]),e.jsxs("div",{ref:v,style:p??{height:"100%",overflow:"scroll"},children:[x,e.jsx("div",{ref:i,children:r?u||e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",margin:"4px 0"},children:e.jsx("div",{children:"Loading..."})}):e.jsx("div",{style:{fontSize:"1px",color:"transparent",width:"1px",height:"1px"},children:"end"})})]})},R=n.forwardRef(I),b={title:"Example/InfiScroll",component:R,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{children:e.jsxs("ol",{children:[e.jsx("li",{children:"content"}),e.jsx("li",{children:"content"}),e.jsx("li",{children:"content"}),e.jsx("li",{children:"content"}),e.jsx("li",{children:"content"}),e.jsx("li",{children:"content"}),e.jsx("li",{children:"content"})]})}};var a,f,h;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    // [To Do] : Add other props here
    children: <ol>
        <li>content</li>
        <li>content</li>
        <li>content</li>
        <li>content</li>
        <li>content</li>
        <li>content</li>
        <li>content</li>
      </ol>
  }
} satisfies Story`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,b as default};
