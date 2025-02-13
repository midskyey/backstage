import{R as e}from"./index-CTjT7uj6.js";import{C as t}from"./CodeSnippet-CUIoZ1VP.js";import{I as o}from"./InfoCard-CiaBhSqW.js";import"./iframe-CkDEnOBj.js";import"../sb-preview/runtime.js";import"./typeof-Jcp7TgkT.js";import"./objectWithoutProperties-CdIeJ4eD.js";import"./toConsumableArray-D-vava-m.js";import"./useTheme-BM15WviY.js";import"./defaultTheme-BHCLteCA.js";import"./Box-Df2VByPp.js";import"./typography-BUwukQ0P.js";import"./hoist-non-react-statics.cjs-DzIEFHQI.js";import"./CopyTextButton-DTWKjGH0.js";import"./useCopyToClipboard-CzDffvHb.js";import"./createSvgIcon-CwHgCKDX.js";import"./capitalize-Cv45LKJ9.js";import"./withStyles-CtFSFDis.js";import"./useControlled-CogIeAPD.js";import"./index-QA7F3UF1.js";import"./createSvgIcon-CAOX6Iqp.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./useMountedState-DkESzBh4.js";import"./translation-67MxozS3.js";import"./TranslationApi-eOxINumg.js";import"./ApiRef-BSBwTmJJ.js";import"./Tooltip-BzCHySxB.js";import"./Popper-BHHCULL6.js";import"./Portal-DHXjgkAG.js";import"./Grow-cjTcaHas.js";import"./utils-DJkMlKMA.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./IconButton-CgbiVzpa.js";import"./ButtonBase-C6t0-Yo5.js";import"./index-Cqve-NHl.js";import"./makeStyles-B-0HYIDn.js";import"./CardActions-D5v38Lis.js";import"./CardContent-BJR3Ho-Q.js";import"./Paper-CF_31tNe.js";import"./ErrorBoundary-C0NgOhLu.js";import"./ErrorPanel-C-jYFfWC.js";import"./WarningPanel-kGCms8x2.js";import"./ExpandMore-0jt7twm3.js";import"./AccordionDetails-DvRZFpfb.js";import"./toArray-OIRUTGpx.js";import"./react-is.production.min-D0tnNtx9.js";import"./Collapse-D8uK77t2.js";import"./Typography-HWeGzz7A.js";import"./MarkdownContent-BrFRVXg8.js";import"./index-BRV0Se7Z.js";import"./Grid-CDLWd65S.js";import"./List-D13tgy_V.js";import"./ListContext-DydK1sOh.js";import"./ListItem-Bavcl9H5.js";import"./ListItemText-BSKfKcuk.js";import"./LinkButton-CYyVOmjB.js";import"./Link-gEam-Uu5.js";import"./lodash-CoGan1YB.js";import"./index-BkN7i-fW.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./Button-B68FPtUb.js";import"./CardHeader-DPkygOUY.js";import"./Divider-D5hcVqge.js";import"./BottomLink-C__chd3h.js";import"./ArrowForward-CDEXVNih.js";const qe={title:"Data Display/CodeSnippet",component:t},l={width:300},r=`const greeting = "Hello";
const world = "World";

const greet = person => greeting + " " + person + "!";

greet(world);
`,j=`const greeting: string = "Hello";
const world: string = "World";

const greet = (person: string): string => greeting + " " + person + "!";

greet(world);
`,A=`greeting = "Hello"
world = "World"

def greet(person):
    return f"{greeting} {person}!"

greet(world)
`,a=()=>e.createElement(o,{title:"JavaScript example"},e.createElement(t,{text:"const hello = 'World';",language:"javascript"})),i=()=>e.createElement(o,{title:"JavaScript multi-line example"},e.createElement(t,{text:r,language:"javascript"})),n=()=>e.createElement(o,{title:"Show line numbers"},e.createElement(t,{text:r,language:"javascript",showLineNumbers:!0})),p=()=>e.createElement(o,{title:"Overflow"},e.createElement("div",{style:l},e.createElement(t,{text:r,language:"javascript"})),e.createElement("div",{style:l},e.createElement(t,{text:r,language:"javascript",showLineNumbers:!0}))),s=()=>e.createElement(o,{title:"Multiple languages"},e.createElement(t,{text:r,language:"javascript",showLineNumbers:!0}),e.createElement(t,{text:j,language:"typescript",showLineNumbers:!0}),e.createElement(t,{text:A,language:"python",showLineNumbers:!0})),m=()=>e.createElement(o,{title:"Copy Code"},e.createElement(t,{text:r,language:"javascript",showCopyCodeButton:!0}));a.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"MultipleLines"};n.__docgenInfo={description:"",methods:[],displayName:"LineNumbers"};p.__docgenInfo={description:"",methods:[],displayName:"Overflow"};s.__docgenInfo={description:"",methods:[],displayName:"Languages"};m.__docgenInfo={description:"",methods:[],displayName:"CopyCode"};var c,d,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => <InfoCard title="JavaScript example">
    <CodeSnippet text="const hello = 'World';" language="javascript" />
  </InfoCard>`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,C,S;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => <InfoCard title="JavaScript multi-line example">
    <CodeSnippet text={JAVASCRIPT} language="javascript" />
  </InfoCard>`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => <InfoCard title="Show line numbers">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
  </InfoCard>`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var w,h,y;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`() => <InfoCard title="Overflow">
    <div style={containerStyle}>
      <CodeSnippet text={JAVASCRIPT} language="javascript" />
    </div>
    <div style={containerStyle}>
      <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
    </div>
  </InfoCard>`,...(y=(h=p.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,N,E;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => <InfoCard title="Multiple languages">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
    <CodeSnippet text={TYPESCRIPT} language="typescript" showLineNumbers />
    <CodeSnippet text={PYTHON} language="python" showLineNumbers />
  </InfoCard>`,...(E=(N=s.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var L,b,_;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`() => <InfoCard title="Copy Code">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showCopyCodeButton />
  </InfoCard>`,...(_=(b=m.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};const ze=["Default","MultipleLines","LineNumbers","Overflow","Languages","CopyCode"];export{m as CopyCode,a as Default,s as Languages,n as LineNumbers,i as MultipleLines,p as Overflow,ze as __namedExportsOrder,qe as default};
