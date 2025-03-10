import{R as r}from"./index-CV65Cz2T.js";import{HeaderWorldClock as s}from"./index-TaHrImys.js";import{H as d}from"./Header-ChPiM4PC.js";import{w as u}from"./appWrappers-C1RGoohP.js";import"./HeaderLabel-Ck57ypsp.js";import"./makeStyles-CkJZxfhX.js";import"./defaultTheme-WHYcXxGo.js";import"./Grid-DEL9PDyy.js";import"./capitalize-52YtlJa-.js";import"./withStyles-C_eMWQcb.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./Typography-DFGLiOLt.js";import"./Link-Dw_mDdlu.js";import"./index-DSEhRz7_.js";import"./lodash-D2SO6J9k.js";import"./index-CpD63NMF.js";import"./index-CItkFWdb.js";import"./ApiRef-CiiQxZ8_.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-DMBTaFtW.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-BoOF83CO.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-DG475NJP.js";import"./ownerWindow-D1FXuRdm.js";import"./useIsFocusVisible-DMiTmV9E.js";import"./useControlled-ltvK4nzt.js";import"./unstable_useId-DsWtIzNz.js";import"./useAnalytics-BFZbt2Mh.js";import"./ConfigApi-cQMGuQTo.js";import"./Helmet-BCx2os5_.js";import"./index-BDlCPcVq.js";import"./Box-Y2gNioDL.js";import"./typography-0XlFLCN0.js";import"./Breadcrumbs-D7olG0sn.js";import"./react-is.production.min-D0tnNtx9.js";import"./ButtonBase-CDKLPdMe.js";import"./TransitionGroupContext-C1n1zRT4.js";import"./Popover-Dw-CFBsR.js";import"./Modal-B2uJO048.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-Cz7V7drg.js";import"./Paper-Ra1TVF2W.js";import"./Grow-BnF02GAk.js";import"./useTheme-CyYT1vdA.js";import"./utils-BUZBPLOI.js";import"./List-DulzYPgQ.js";import"./ListContext-DDd8B5Hf.js";import"./ListItem-n7gzuof_.js";import"./Page-BN3hvIvt.js";import"./useMediaQuery-CFogxaVT.js";import"./Tooltip-BPdkt62o.js";import"./Popper-Bc_KRM1A.js";import"./MockTranslationApi-DwLbFbAR.js";import"./index-DWA0-5lI.js";import"./inherits-CkEHJ8Ip.js";import"./toArray-CoXhHPie.js";import"./TranslationApi-CvQSfhLI.js";import"./WebStorage-iw8HYKkY.js";import"./useAsync-cwiHyrW_.js";import"./useMountedState-BG_s6PIB.js";import"./componentData-BZi7rffK.js";import"./isSymbol-B6IIivl5.js";import"./isObject-CDdS0vB1.js";import"./toString-C4GbLIMt.js";import"./ApiProvider-B6zkipAU.js";import"./CssBaseline-D5AXl3S9.js";import"./ThemeProvider-UKwvVYMA.js";import"./jsx-runtime-B1AhRb-V.js";import"./palettes-C1DVN5xY.js";const yo={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>u(r.createElement(o,null))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return r.createElement(d,{title:"Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))},t=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return r.createElement(d,{title:"24hr Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};var m,p,a;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const clockConfigs: ClockConfig[] = [{
    label: 'NYC',
    timeZone: 'America/New_York'
  }, {
    label: 'UTC',
    timeZone: 'UTC'
  }, {
    label: 'STO',
    timeZone: 'Europe/Stockholm'
  }, {
    label: 'TYO',
    timeZone: 'Asia/Tokyo'
  }];
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };
  return <Header title="Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock clockConfigs={clockConfigs} customTimeFormat={timeFormat} />
    </Header>;
}`,...(a=(p=e.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};var l,c,n;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const clockConfigs: ClockConfig[] = [{
    label: 'NYC',
    timeZone: 'America/New_York'
  }, {
    label: 'UTC',
    timeZone: 'UTC'
  }, {
    label: 'STO',
    timeZone: 'Europe/Stockholm'
  }, {
    label: 'TYO',
    timeZone: 'Asia/Tokyo'
  }];
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };
  return <Header title="24hr Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock clockConfigs={clockConfigs} customTimeFormat={timeFormat} />
    </Header>;
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const Ao=["Default","TwentyFourHourClocks"];export{e as Default,t as TwentyFourHourClocks,Ao as __namedExportsOrder,yo as default};
