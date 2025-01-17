import{R as e,r as s}from"./index-CTjT7uj6.js";import{s as h,M as S}from"./api-CKDuuaL7.js";import{c as J}from"./SearchResult-3VwSB4vZ.js";import{S as o}from"./SearchResultList-DBc2mRbg.js";import{S as R}from"./Grid-CBQ1icfc.js";import{S as K}from"./SearchContext-BQYqBmky.js";import{L as j}from"./ListItemText-BX9zGtDE.js";import{H as z}from"./DefaultResultListItem-DG2e8lLe.js";import{C as U}from"./icons-BSxbFZ8X.js";import{L as V}from"./ListItem-CSkRdGDn.js";import{L as X}from"./ListItemIcon-Og7kjTTH.js";import{w as Y,a as Z}from"./appWrappers-B7brRsb9.js";import{T as y}from"./TestApiProvider-CoiMLMhd.js";import{L as $}from"./Link-sHRyb5L8.js";import{c as ee}from"./Plugin-BnFuRug-.js";import"./ApiRef-BSBwTmJJ.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./lodash-CoGan1YB.js";import"./List-8K2z9BBk.js";import"./defaultTheme-BZnwX-AO.js";import"./capitalize-C0HMsxFp.js";import"./withStyles-D5xo8Zvm.js";import"./hoist-non-react-statics.cjs-DzIEFHQI.js";import"./ListContext-DydK1sOh.js";import"./useElementFilter-BZAH5q3J.js";import"./componentData-CM4hSmEF.js";import"./MockTranslationApi-OU0wA2ee.js";import"./index-CFaqwFgm.js";import"./classCallCheck-BNzALLS0.js";import"./inherits-COrQANJe.js";import"./toArray-DEuwxUA-.js";import"./TranslationApi-eOxINumg.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./Progress-Cy85YDvv.js";import"./useTheme-B0Tllvzg.js";import"./LinearProgress-C3zgvE7k.js";import"./Box-BhefsZI4.js";import"./typography-DkPzPTTp.js";import"./ResponseErrorPanel-KzPEd-a5.js";import"./makeStyles-DWiKrdWi.js";import"./ErrorPanel-Dbq2Q81n.js";import"./WarningPanel-COcehAnO.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-NnaZS6Sc.js";import"./useControlled-CogIeAPD.js";import"./index-QA7F3UF1.js";import"./createSvgIcon-B3zyeFdi.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./ExpandMore-D_BZWeFd.js";import"./AccordionDetails-BRdSOc_O.js";import"./react-is.production.min-D0tnNtx9.js";import"./Paper-7I0ie8cU.js";import"./Collapse-D1t9ktih.js";import"./utils-BQ2ma3Ta.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./ButtonBase-CCjuLnt4.js";import"./IconButton-D_iA1XrS.js";import"./Typography-McXCTIBl.js";import"./MarkdownContent-BLzngFvm.js";import"./index-BRV0Se7Z.js";import"./CodeSnippet-DmZQ6bIb.js";import"./iframe-BbP_VxyV.js";import"../sb-preview/runtime.js";import"./objectWithoutProperties-C_MEUZXD.js";import"./toConsumableArray-BEwiObev.js";import"./CopyTextButton-Ck6l9RCx.js";import"./useCopyToClipboard-Cv8pqakE.js";import"./translation-67MxozS3.js";import"./Tooltip-BxMC8dXm.js";import"./Popper-CytmXsJF.js";import"./Portal-DHXjgkAG.js";import"./Grow-DXTnQw2U.js";import"./Divider-BQHD6bRp.js";import"./EmptyState-BJ-dnMoK.js";import"./index-DNAWfEOe.js";import"./WebStorage-D5Fgivzj.js";import"./mapValues-CYzCqEPF.js";import"./toString-DbZLRxcJ.js";import"./ApiProvider-CuNQiN7Z.js";import"./CssBaseline-DIwQbu3F.js";import"./ThemeProvider-DDPqTrIG.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";import"./index-Cqve-NHl.js";import"./useRouteRef-D0BCYqYb.js";const te=Z({id:"storybook.search.results.list.route"}),re=new S({results:[{type:"techdocs",document:{location:"search/search-result1",title:"Search Result 1",text:"Some text from the search result 1"}},{type:"custom",document:{location:"search/search-result2",title:"Search Result 2",text:"Some text from the search result 2"}}]}),Ht={title:"Plugins/Search/SearchResultList",component:o,decorators:[t=>Y(e.createElement(y,{apis:[[h,re]]},e.createElement(R,{container:!0,direction:"row"},e.createElement(R,{item:!0,xs:12},e.createElement(t,null)))),{mountedRoutes:{"/":te}})]},n=()=>e.createElement(K,null,e.createElement(o,null)),a=()=>{const[t]=s.useState({types:["techdocs"]});return e.createElement(o,{query:t})},m=()=>{const[t]=s.useState({types:["techdocs"]});return e.createElement(y,{apis:[[h,{query:()=>new Promise(()=>{})}]]},e.createElement(o,{query:t}))},c=()=>{const[t]=s.useState({types:["techdocs"]});return e.createElement(y,{apis:[[h,{query:()=>new Promise(()=>{throw new Error})}]]},e.createElement(o,{query:t}))},u=()=>{const[t]=s.useState({types:["techdocs"]});return e.createElement(y,{apis:[[h,new S]]},e.createElement(o,{query:t}))},p=()=>{const[t]=s.useState({types:["techdocs"]});return e.createElement(y,{apis:[[h,new S]]},e.createElement(o,{query:t,noResultsComponent:e.createElement(j,{primary:"No results were found"})}))},oe=t=>{const{icon:i,result:r}=t;return e.createElement($,{to:r.location},e.createElement(V,{alignItems:"flex-start",divider:!0},i&&e.createElement(X,null,i),e.createElement(j,{primary:r.title,primaryTypographyProps:{variant:"h6"},secondary:r.text})))},l=()=>{const[t]=s.useState({types:["custom"]});return e.createElement(o,{query:t,renderResultItem:({type:i,document:r,highlight:B,rank:F})=>{switch(i){case"custom":return e.createElement(oe,{key:r.location,icon:e.createElement(U,null),result:r,highlight:B,rank:F});default:return e.createElement(z,{key:r.location,result:r})}}})},d=()=>{const[t]=s.useState({types:["techdocs"]}),r=ee({id:"plugin"}).provide(J({name:"DefaultResultListItem",component:async()=>z}));return e.createElement(o,{query:t},e.createElement(r,null))};n.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"WithQuery"};m.__docgenInfo={description:"",methods:[],displayName:"Loading"};c.__docgenInfo={description:"",methods:[],displayName:"WithError"};u.__docgenInfo={description:"",methods:[],displayName:"WithDefaultNoResultsComponent"};p.__docgenInfo={description:"",methods:[],displayName:"WithCustomNoResultsComponent"};l.__docgenInfo={description:"",methods:[],displayName:"WithCustomResultItem"};d.__docgenInfo={description:"",methods:[],displayName:"WithResultItemExtensions"};var f,g,E;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <SearchContextProvider>
      <SearchResultList />
    </SearchContextProvider>;
}`,...(E=(g=n.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var I,L,q;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  return <SearchResultList query={query} />;
}`,...(q=(L=a.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var P,C,w;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  return <TestApiProvider apis={[[searchApiRef, {
    query: () => new Promise<SearchResultSet>(() => {})
  }]]}>
      <SearchResultList query={query} />
    </TestApiProvider>;
}`,...(w=(C=m.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var x,A,_;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  return <TestApiProvider apis={[[searchApiRef, {
    query: () => new Promise<SearchResultSet>(() => {
      throw new Error();
    })
  }]]}>
      <SearchResultList query={query} />
    </TestApiProvider>;
}`,...(_=(A=c.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var W,v,N;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  return <TestApiProvider apis={[[searchApiRef, new MockSearchApi()]]}>
      <SearchResultList query={query} />
    </TestApiProvider>;
}`,...(N=(v=u.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var D,T,k;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  return <TestApiProvider apis={[[searchApiRef, new MockSearchApi()]]}>
      <SearchResultList query={query} noResultsComponent={<ListItemText primary="No results were found" />} />
    </TestApiProvider>;
}`,...(k=(T=p.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var Q,M,H;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['custom']
  });
  return <SearchResultList query={query} renderResultItem={({
    type,
    document,
    highlight,
    rank
  }) => {
    switch (type) {
      case 'custom':
        return <CustomResultListItem key={document.location} icon={<CatalogIcon />} result={document} highlight={highlight} rank={rank} />;
      default:
        return <DefaultResultListItem key={document.location} result={document} />;
    }
  }} />;
}`,...(H=(M=l.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var O,b,G;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  const plugin = createPlugin({
    id: 'plugin'
  });
  const DefaultSearchResultListItem = plugin.provide(createSearchResultListItemExtension({
    name: 'DefaultResultListItem',
    component: async () => DefaultResultListItem
  }));
  return <SearchResultList query={query}>
      <DefaultSearchResultListItem />
    </SearchResultList>;
}`,...(G=(b=d.parameters)==null?void 0:b.docs)==null?void 0:G.source}}};const Ot=["Default","WithQuery","Loading","WithError","WithDefaultNoResultsComponent","WithCustomNoResultsComponent","WithCustomResultItem","WithResultItemExtensions"];export{n as Default,m as Loading,p as WithCustomNoResultsComponent,l as WithCustomResultItem,u as WithDefaultNoResultsComponent,c as WithError,a as WithQuery,d as WithResultItemExtensions,Ot as __namedExportsOrder,Ht as default};
