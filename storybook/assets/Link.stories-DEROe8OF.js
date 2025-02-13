import{R as e}from"./index-CTjT7uj6.js";import{L as n,N as R}from"./Link-gEam-Uu5.js";import{R as u,a as d,u as k}from"./index-BkN7i-fW.js";import{w as f,a as E}from"./appWrappers-h3WezMUi.js";import{u as h}from"./useRouteRef-ahYS9ypG.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-QA7F3UF1.js";import"./typeof-Jcp7TgkT.js";import"./createSvgIcon-CwHgCKDX.js";import"./capitalize-Cv45LKJ9.js";import"./defaultTheme-BHCLteCA.js";import"./withStyles-CtFSFDis.js";import"./hoist-non-react-statics.cjs-DzIEFHQI.js";import"./useControlled-CogIeAPD.js";import"./createSvgIcon-CAOX6Iqp.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./makeStyles-B-0HYIDn.js";import"./useAnalytics-DTrkS1Gy.js";import"./ApiRef-BSBwTmJJ.js";import"./ConfigApi-DBUUc3nU.js";import"./Typography-HWeGzz7A.js";import"./MockTranslationApi-DK99EZxn.js";import"./index-CFaqwFgm.js";import"./classCallCheck-MFKM5G8b.js";import"./getPrototypeOf-Ce9gVrZV.js";import"./toArray-OIRUTGpx.js";import"./TranslationApi-eOxINumg.js";import"./WebStorage-D5Fgivzj.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-CM4hSmEF.js";import"./isSymbol-C_KZXW2d.js";import"./isObject-DlTwUI3n.js";import"./toString-B79bsZRM.js";import"./ApiProvider-CuNQiN7Z.js";import"./index-BRV0Se7Z.js";import"./CssBaseline-Da8-4ZAc.js";import"./ThemeProvider-UBYjSdZ0.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";const i=E({id:"storybook.test-route"}),L=()=>{const t=k();return e.createElement("pre",null,"Current location: ",t.pathname)},se={title:"Navigation/Link",component:n,decorators:[t=>f(e.createElement("div",null,e.createElement("div",null,e.createElement(L,null)),e.createElement(t,null)),{mountedRoutes:{"/hello":i}})]},r=()=>{const t=h(i);return e.createElement(e.Fragment,null,e.createElement(n,{to:t()},"This link")," will utilize the react-router MemoryRouter's navigation",e.createElement(u,null,e.createElement(d,{path:t(),element:e.createElement("h1",null,"Hi there!")})))},o=()=>{const t=h(i);return e.createElement(e.Fragment,null,e.createElement(n,{to:t(),component:R,color:"secondary"},"This link")," has props for both material-ui's component as well as for react-router-dom's",e.createElement(u,null,e.createElement(d,{path:t(),element:e.createElement("h1",null,"Hi there!")})))};o.story={name:"Accepts material-ui Link's and react-router-dom Link's props"};r.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"PassProps"};var a,m,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const link = useRouteRef(routeRef);
  return <>
      <Link to={link()}>This link</Link>&nbsp;will utilize the react-router
      MemoryRouter's navigation
      <Routes>
        <Route path={link()} element={<h1>Hi there!</h1>} />
      </Routes>
    </>;
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const link = useRouteRef(routeRef);
  return <>
      <Link to={link()}
    /** react-router-dom related prop */ component={RouterNavLink}
    /** material-ui related prop */ color="secondary">
        This link
      </Link>
      &nbsp;has props for both material-ui's component as well as for
      react-router-dom's
      <Routes>
        <Route path={link()} element={<h1>Hi there!</h1>} />
      </Routes>
    </>;
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const pe=["Default","PassProps"];export{r as Default,o as PassProps,pe as __namedExportsOrder,se as default};
