import{R as r}from"./index-CTjT7uj6.js";import{HeaderWorldClock as s}from"./index-DdOXuvLl.js";import{H as d}from"./Header-BAhpH3BV.js";import{w as u}from"./appWrappers-DsYf8s-s.js";import"./HeaderLabel-DKNle0JS.js";import"./makeStyles-O1Zgszeq.js";import"./defaultTheme-BpWAG8l7.js";import"./Grid-CD7ii6lD.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./capitalize-DASy9xXX.js";import"./withStyles-DTrfb9QI.js";import"./Typography-D79kQbbF.js";import"./Link-CJIJZi7X.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-QA7F3UF1.js";import"./index-DNAWfEOe.js";import"./ApiRef-BSBwTmJJ.js";import"./typeof-Jcp7TgkT.js";import"./createSvgIcon-C9m_AR9m.js";import"./useControlled-CogIeAPD.js";import"./createSvgIcon-DOZx1A7T.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./Helmet-DPVyO7__.js";import"./index-BRV0Se7Z.js";import"./Box-TlIT8Xo6.js";import"./typography-DYSa9j7C.js";import"./Breadcrumbs-viuEnjOV.js";import"./react-is.production.min-D0tnNtx9.js";import"./ButtonBase-DhxJeoJA.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./Popover-8sdkd6MC.js";import"./Modal-rbs6syU2.js";import"./classCallCheck-MFKM5G8b.js";import"./Portal-DHXjgkAG.js";import"./Paper-CNw0YR66.js";import"./Grow-D7hzYYwt.js";import"./useTheme-Dj9WCHCM.js";import"./utils-Ybsg3rVJ.js";import"./List-DbeycpOm.js";import"./ListContext-DydK1sOh.js";import"./ListItem-CnES1b62.js";import"./Page-n9ZGIE_z.js";import"./useMediaQuery-B_R1Y-wv.js";import"./Tooltip-0G_qUpW2.js";import"./Popper-D_Ucq8Tk.js";import"./MockTranslationApi-Bkamw-0s.js";import"./index-CFaqwFgm.js";import"./getPrototypeOf-qry8KeL-.js";import"./toArray-2sVpwNqX.js";import"./TranslationApi-eOxINumg.js";import"./WebStorage-D5Fgivzj.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-CM4hSmEF.js";import"./mapValues-uGpuQnk_.js";import"./toString-bNjqhuyi.js";import"./ApiProvider-CuNQiN7Z.js";import"./CssBaseline-Dh-NClw5.js";import"./ThemeProvider-COjTAoHg.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";const _o={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>u(r.createElement(o,null))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return r.createElement(d,{title:"Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))},t=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return r.createElement(d,{title:"24hr Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};var m,a,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
