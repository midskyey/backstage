import{r as _,R as e}from"./index-CTjT7uj6.js";import{m as q}from"./makeStyles-BZw-HJLd.js";import{w as M}from"./capitalize-CEQeKh-K.js";import{C as P}from"./CardHeader-3z2aBkEm.js";import{C as D,a as V}from"./CardContent--Ku_kWID.js";import{E as N}from"./ErrorBoundary-DVO7OhfH.js";import{T as A,a as F}from"./Tabs-BblL2yA-.js";import{D as j}from"./Divider-DWEczUXl.js";import{B as G}from"./BottomLink-CrobxV_e.js";import{S as E}from"./Grid--ddFL0KQ.js";import{T as U}from"./Typography-9Z2Fqq1t.js";import{M as X}from"./index-DNAWfEOe.js";import"./defaultTheme-DezMpTIo.js";import"./withStyles-BgNv_OyU.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./Paper-Ke9XSqW5.js";import"./translation-67MxozS3.js";import"./TranslationApi-eOxINumg.js";import"./ApiRef-BSBwTmJJ.js";import"./ErrorPanel-DDHsyeqm.js";import"./WarningPanel-C8lTIiCv.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-hW_4NFvU.js";import"./useControlled-CogIeAPD.js";import"./index-QA7F3UF1.js";import"./createSvgIcon-CEu-9q0m.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./ExpandMore-CHMDyj05.js";import"./AccordionDetails-DvJ7tK3R.js";import"./toArray-CwyM_zEO.js";import"./react-is.production.min-D0tnNtx9.js";import"./Collapse-C4amah7z.js";import"./utils-jlWbup7k.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./useTheme-NGQJGM2h.js";import"./ButtonBase-yy6Og9D-.js";import"./IconButton-DMfZr1mO.js";import"./MarkdownContent-CtY-jLEo.js";import"./index-BRV0Se7Z.js";import"./CodeSnippet-SJ1zpOyY.js";import"./iframe-CYDWKUeb.js";import"../sb-preview/runtime.js";import"./objectWithoutProperties-C_MEUZXD.js";import"./classCallCheck-BNzALLS0.js";import"./inherits-DGC6g2nO.js";import"./toConsumableArray-BEwiObev.js";import"./Box-Bp1TnhXQ.js";import"./typography-DyYqqlXd.js";import"./CopyTextButton-BgQRecf3.js";import"./useCopyToClipboard-CAnobEfl.js";import"./useMountedState-DkESzBh4.js";import"./Tooltip-C9cCQzQU.js";import"./Popper-CXFT7TxZ.js";import"./Portal-DHXjgkAG.js";import"./Grow-jBfYqf2m.js";import"./List-Bh5ydWqT.js";import"./ListContext-DydK1sOh.js";import"./ListItem-Bxb0CNHD.js";import"./ListItemText-DydOiixD.js";import"./LinkButton-CpatNKW_.js";import"./Link-C9hKUk0G.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./Button-pj3OYYJt.js";import"./KeyboardArrowRight-BpGxn4vq.js";import"./ArrowForward-hZGFZ6QH.js";const Y=q(t=>({root:{padding:t.spacing(0,2,0,2.5),minHeight:t.spacing(3)},indicator:{backgroundColor:t.palette.info.main,height:t.spacing(.3)}}),{name:"BackstageTabbedCard"}),Z=M(t=>({root:{padding:t.spacing(2,2,2,2.5),display:"inline-block"},title:{fontWeight:700},subheader:{paddingTop:t.spacing(1)}}),{name:"BackstageTabbedCardBoldHeader"})(P);function d(t){const{slackChannel:i,errorBoundaryProps:l,children:o,title:c,deepLink:y,value:u,onChange:v}=t,x=Y(),[T,H]=_.useState(0),I=v||((n,C)=>H(C));let b;u?e.Children.map(o,n=>{e.isValidElement(n)&&(n==null?void 0:n.props.value)===u&&(b=n==null?void 0:n.props.children)}):e.Children.map(o,(n,C)=>{e.isValidElement(n)&&C===T&&(b=n==null?void 0:n.props.children)});const B=l||(i?{slackChannel:i}:{});return e.createElement(D,null,e.createElement(N,{...B},c&&e.createElement(Z,{title:c}),e.createElement(A,{classes:x,value:u||T,onChange:I},o),e.createElement(j,null),e.createElement(V,null,b),y&&e.createElement(G,{...y})))}const z=q(t=>({root:{minWidth:t.spacing(6),minHeight:t.spacing(3),margin:t.spacing(0,2,0,0),padding:t.spacing(.5,0,.5,0),textTransform:"none","&:hover":{opacity:1,backgroundColor:"transparent",color:t.palette.text.primary}},selected:{fontWeight:t.typography.fontWeightBold}}),{name:"BackstageCardTab"});function r(t){const{children:i,...l}=t,o=z();return e.createElement(F,{disableRipple:!0,classes:o,...l})}d.__docgenInfo={description:"",methods:[],displayName:"TabbedCard",props:{slackChannel:{required:!1,tsType:{name:"string"},description:"@deprecated Use errorBoundaryProps instead"},errorBoundaryProps:{required:!1,tsType:{name:"ReactPropsWithChildren",raw:`React.PropsWithChildren<{
  slackChannel?: string | SlackChannel;
  onError?: (error: Error, errorInfo: string) => null;
}>`,elements:[{name:"signature",type:"object",raw:`{
  slackChannel?: string | SlackChannel;
  onError?: (error: Error, errorInfo: string) => null;
}`,signature:{properties:[{key:"slackChannel",value:{name:"union",raw:"string | SlackChannel",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  name: string;
  href?: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}}]}}],required:!1}},{key:"onError",value:{name:"signature",type:"function",raw:"(error: Error, errorInfo: string) => null",signature:{arguments:[{type:{name:"Error"},name:"error"},{type:{name:"string"},name:"errorInfo"}],return:{name:"null"}},required:!1}}]}}]},description:""},children:{required:!1,tsType:{name:"Array",elements:[{name:"ReactElement",elements:[{name:"TabProps"}],raw:"ReactElement<TabProps>"}],raw:"ReactElement<TabProps>[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<{}>, value: number | string) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<{}>",elements:[{name:"signature",type:"object",raw:"{}",signature:{properties:[]}}]},name:"event"},{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"value"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},deepLink:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  link: string;
  title: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}`,signature:{properties:[{key:"link",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}]},name:"event"}],return:{name:"void"}},required:!1}}]}},description:""}}};r.__docgenInfo={description:`Card tab component used in {@link TabbedCard}

@public`,methods:[],displayName:"CardTab",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const a={height:200,width:500},g=({children:t})=>e.createElement(X,null,t),ct={title:"Layout/Tabbed Card",component:d,decorators:[t=>e.createElement(E,{container:!0,spacing:4},e.createElement(E,{item:!0},t()))]},s=()=>e.createElement(g,null,e.createElement(d,{title:"Default Example Header"},e.createElement(r,{label:"Option 1"},e.createElement("div",{style:a},"Some content")),e.createElement(r,{label:"Option 2"},e.createElement("div",{style:a},"Some content 2")),e.createElement(r,{label:"Option 3"},e.createElement("div",{style:a},"Some content 3")),e.createElement(r,{label:"Option 4"},e.createElement("div",{style:a},"Some content 4")))),J={title:"Go to XYZ Location",link:"#"},m=()=>e.createElement(g,null,e.createElement(d,{title:"Footer Link Example Header",deepLink:J},e.createElement(r,{label:"Option 1"},e.createElement("div",{style:a},"Some content")),e.createElement(r,{label:"Option 2"},e.createElement("div",{style:a},"Some content 2")),e.createElement(r,{label:"Option 3"},e.createElement("div",{style:a},"Some content 3")),e.createElement(r,{label:"Option 4"},e.createElement("div",{style:a},"Some content 4")))),p=()=>{const[t,i]=_.useState("one"),l=(o,c)=>i(c);return e.createElement(g,null,e.createElement(U,{component:"span"},"Selected tab is ",t),e.createElement(d,{value:t,onChange:l,title:"Controlled Value Example"},e.createElement(r,{value:"one",label:"Option 1"},e.createElement("div",{style:a},"Some content")),e.createElement(r,{value:"two",label:"Option 2"},e.createElement("div",{style:a},"Some content 2")),e.createElement(r,{value:"three",label:"Option 3"},e.createElement("div",{style:a},"Some content 3")),e.createElement(r,{value:"four",label:"Option 4"},e.createElement("div",{style:a},"Some content 4"))))};s.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"WithFooterLink"};p.__docgenInfo={description:"",methods:[],displayName:"WithControlledTabValue"};var S,f,h;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Wrapper>
      <TabbedCard title="Default Example Header">
        <CardTab label="Option 1">
          <div style={cardContentStyle}>Some content</div>
        </CardTab>
        <CardTab label="Option 2">
          <div style={cardContentStyle}>Some content 2</div>
        </CardTab>
        <CardTab label="Option 3">
          <div style={cardContentStyle}>Some content 3</div>
        </CardTab>
        <CardTab label="Option 4">
          <div style={cardContentStyle}>Some content 4</div>
        </CardTab>
      </TabbedCard>
    </Wrapper>;
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var k,O,w;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <Wrapper>
      <TabbedCard title="Footer Link Example Header" deepLink={linkInfo}>
        <CardTab label="Option 1">
          <div style={cardContentStyle}>Some content</div>
        </CardTab>
        <CardTab label="Option 2">
          <div style={cardContentStyle}>Some content 2</div>
        </CardTab>
        <CardTab label="Option 3">
          <div style={cardContentStyle}>Some content 3</div>
        </CardTab>
        <CardTab label="Option 4">
          <div style={cardContentStyle}>Some content 4</div>
        </CardTab>
      </TabbedCard>
    </Wrapper>;
}`,...(w=(O=m.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var W,R,L;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const [selectedTab, setSelectedTab] = useState<string | number>('one');
  const handleChange = (_ev: any, newSelectedTab: string | number) => setSelectedTab(newSelectedTab);
  return <Wrapper>
      <Typography component="span">Selected tab is {selectedTab}</Typography>

      <TabbedCard value={selectedTab} onChange={handleChange} title="Controlled Value Example">
        <CardTab value="one" label="Option 1">
          <div style={cardContentStyle}>Some content</div>
        </CardTab>
        <CardTab value="two" label="Option 2">
          <div style={cardContentStyle}>Some content 2</div>
        </CardTab>
        <CardTab value="three" label="Option 3">
          <div style={cardContentStyle}>Some content 3</div>
        </CardTab>
        <CardTab value="four" label="Option 4">
          <div style={cardContentStyle}>Some content 4</div>
        </CardTab>
      </TabbedCard>
    </Wrapper>;
}`,...(L=(R=p.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};const ut=["Default","WithFooterLink","WithControlledTabValue"];export{s as Default,p as WithControlledTabValue,m as WithFooterLink,ut as __namedExportsOrder,ct as default};
