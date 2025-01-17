import{R as r}from"./index-CTjT7uj6.js";import{HeaderWorldClock as s}from"./index-BrVnqTfP.js";import{H as d}from"./Header-gM0moiVr.js";import{w as u}from"./appWrappers-B7brRsb9.js";import"./HeaderLabel-CHN038kE.js";import"./makeStyles-DWiKrdWi.js";import"./defaultTheme-BZnwX-AO.js";import"./Grid-CBQ1icfc.js";import"./capitalize-C0HMsxFp.js";import"./withStyles-D5xo8Zvm.js";import"./hoist-non-react-statics.cjs-DzIEFHQI.js";import"./Typography-McXCTIBl.js";import"./Link-sHRyb5L8.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-QA7F3UF1.js";import"./index-DNAWfEOe.js";import"./ApiRef-BSBwTmJJ.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-NnaZS6Sc.js";import"./useControlled-CogIeAPD.js";import"./createSvgIcon-B3zyeFdi.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./Helmet-DPVyO7__.js";import"./index-BRV0Se7Z.js";import"./Box-BhefsZI4.js";import"./typography-DkPzPTTp.js";import"./Breadcrumbs-Cbkn57tT.js";import"./react-is.production.min-D0tnNtx9.js";import"./ButtonBase-CCjuLnt4.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./Popover-CbTYmybU.js";import"./Modal-BjcCNJ2-.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-DHXjgkAG.js";import"./Paper-7I0ie8cU.js";import"./Grow-DXTnQw2U.js";import"./useTheme-B0Tllvzg.js";import"./utils-BQ2ma3Ta.js";import"./List-8K2z9BBk.js";import"./ListContext-DydK1sOh.js";import"./ListItem-CSkRdGDn.js";import"./Page-Dfgl2Cpe.js";import"./useMediaQuery-CzUOLa2_.js";import"./Tooltip-BxMC8dXm.js";import"./Popper-CytmXsJF.js";import"./MockTranslationApi-OU0wA2ee.js";import"./index-CFaqwFgm.js";import"./inherits-COrQANJe.js";import"./toArray-DEuwxUA-.js";import"./TranslationApi-eOxINumg.js";import"./WebStorage-D5Fgivzj.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-CM4hSmEF.js";import"./mapValues-CYzCqEPF.js";import"./toString-DbZLRxcJ.js";import"./ApiProvider-CuNQiN7Z.js";import"./CssBaseline-DIwQbu3F.js";import"./ThemeProvider-DDPqTrIG.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";const _o={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>u(r.createElement(o,null))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return r.createElement(d,{title:"Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))},t=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return r.createElement(d,{title:"24hr Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};var m,a,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var p,c,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const Eo=["Default","TwentyFourHourClocks"];export{e as Default,t as TwentyFourHourClocks,Eo as __namedExportsOrder,_o as default};
