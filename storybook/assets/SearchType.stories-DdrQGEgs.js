import{d as S}from"./MenuBook-DV7aIxAl.js";import{i as V}from"./interopRequireDefault-Y9pwbXtE.js";import{r as _,i as E}from"./createSvgIcon-DMBTaFtW.js";import{a as g,R as e}from"./index-CV65Cz2T.js";import{d as R}from"./Person-Z8L18pQg.js";import{S as o}from"./SearchType-uRuinsvP.js";import{s as A,M as D}from"./api-CnXCC1gD.js";import{S as I}from"./SearchContext-CALk0UPB.js";import{S as i}from"./Grid-DEL9PDyy.js";import{P}from"./Paper-Ra1TVF2W.js";import{T as b}from"./TestApiProvider-BLErwEGl.js";import"./capitalize-52YtlJa-.js";import"./defaultTheme-WHYcXxGo.js";import"./withStyles-C_eMWQcb.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-BoOF83CO.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-DG475NJP.js";import"./ownerWindow-D1FXuRdm.js";import"./useIsFocusVisible-DMiTmV9E.js";import"./index-CpD63NMF.js";import"./useControlled-ltvK4nzt.js";import"./unstable_useId-DsWtIzNz.js";import"./ExpandMore-BTSKRJmt.js";import"./useAsync-cwiHyrW_.js";import"./useMountedState-BG_s6PIB.js";import"./makeStyles-CkJZxfhX.js";import"./Box-Y2gNioDL.js";import"./typography-0XlFLCN0.js";import"./Typography-DFGLiOLt.js";import"./AccordionDetails-Cx-AgQa8.js";import"./toArray-CoXhHPie.js";import"./react-is.production.min-D0tnNtx9.js";import"./Collapse-Dq83n8mO.js";import"./utils-BUZBPLOI.js";import"./TransitionGroupContext-C1n1zRT4.js";import"./useTheme-CyYT1vdA.js";import"./ButtonBase-CDKLPdMe.js";import"./IconButton-CCb2T_-R.js";import"./List-DulzYPgQ.js";import"./ListContext-DDd8B5Hf.js";import"./Divider-7Y8U8H8a.js";import"./ListItem-n7gzuof_.js";import"./ListItemIcon-DUgu-gxe.js";import"./ListItemText-C5lSDp-V.js";import"./ApiRef-CiiQxZ8_.js";import"./Tabs-BMxZEGR_.js";import"./KeyboardArrowRight-Dch7uEGd.js";import"./FormLabel-DHO9Aw1o.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-Cf2zJBza.js";import"./InputLabel-C1BQdAFz.js";import"./Select-BCgprwNU.js";import"./Popover-Dw-CFBsR.js";import"./Modal-B2uJO048.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-Cz7V7drg.js";import"./Grow-BnF02GAk.js";import"./Chip-em7hIogO.js";import"./MenuItem-BnDj-8iT.js";import"./Checkbox-BgG5_RL-.js";import"./SwitchBase-Uaj8O7qC.js";import"./lodash-D2SO6J9k.js";import"./useAnalytics-BFZbt2Mh.js";import"./ConfigApi-cQMGuQTo.js";import"./ApiProvider-B6zkipAU.js";import"./index-BDlCPcVq.js";var m={},q=V,w=E;Object.defineProperty(m,"__esModule",{value:!0});var h=m.default=void 0,x=w(g()),O=q(_()),H=(0,O.default)(x.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description");h=m.default=H;const Ke={title:"Plugins/Search/SearchType",component:o,decorators:[y=>e.createElement(b,{apis:[[A,new D]]},e.createElement(I,null,e.createElement(i,{container:!0,direction:"row"},e.createElement(i,{item:!0,xs:4},e.createElement(y,null)))))]},p=["value-1","value-2","value-3"],r=()=>e.createElement(P,{style:{padding:10}},e.createElement(o,{name:"Search type",values:p,defaultValue:p[0]})),a=()=>e.createElement(o.Accordion,{name:"Result Types",defaultValue:"value-1",types:[{value:"value-1",name:"Value One",icon:e.createElement(S,null)},{value:"value-2",name:"Value Two",icon:e.createElement(h,null)},{value:"value-3",name:"Value Three",icon:e.createElement(R,null)}]}),t=()=>e.createElement(o.Tabs,{defaultValue:"value-1",types:[{value:"value-1",name:"Value One"},{value:"value-2",name:"Value Two"},{value:"value-3",name:"Value Three"}]});r.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"Accordion"};t.__docgenInfo={description:"",methods:[],displayName:"Tabs"};var l,u,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchType name="Search type" values={values} defaultValue={values[0]} />
    </Paper>;
}`,...(n=(u=r.parameters)==null?void 0:u.docs)==null?void 0:n.source}}};var s,c,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <SearchType.Accordion name="Result Types" defaultValue="value-1" types={[{
    value: 'value-1',
    name: 'Value One',
    icon: <CatalogIcon />
  }, {
    value: 'value-2',
    name: 'Value Two',
    icon: <DocsIcon />
  }, {
    value: 'value-3',
    name: 'Value Three',
    icon: <UsersGroupsIcon />
  }]} />;
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var v,f,T;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <SearchType.Tabs defaultValue="value-1" types={[{
    value: 'value-1',
    name: 'Value One'
  }, {
    value: 'value-2',
    name: 'Value Two'
  }, {
    value: 'value-3',
    name: 'Value Three'
  }]} />;
}`,...(T=(f=t.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const Qe=["Default","Accordion","Tabs"];export{a as Accordion,r as Default,t as Tabs,Qe as __namedExportsOrder,Ke as default};
