import{R as r}from"./index-CTjT7uj6.js";import{HeaderWorldClock as s}from"./index-Dml9pMNN.js";import{H as d}from"./Header-BsSzq5Sg.js";import{w as u}from"./appWrappers-BKy5LqQt.js";import"./HeaderLabel-CZ5PKqor.js";import"./makeStyles-3WuthtJ7.js";import"./defaultTheme-U8IXQtr7.js";import"./Grid-Cd4CaOSn.js";import"./capitalize-CjHL08xv.js";import"./withStyles-Dj_puyu8.js";import"./hoist-non-react-statics.cjs-DzIEFHQI.js";import"./Typography-CUBppVl0.js";import"./Link-Diak7Gn3.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-QA7F3UF1.js";import"./index-BkN7i-fW.js";import"./ApiRef-BSBwTmJJ.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-C4PsBp0A.js";import"./useControlled-CogIeAPD.js";import"./createSvgIcon-CAWH9WqG.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./Helmet-DPVyO7__.js";import"./index-BRV0Se7Z.js";import"./Box-BZcLdGyY.js";import"./typography-hVTC7Hfk.js";import"./Breadcrumbs-DXNPBl6u.js";import"./react-is.production.min-D0tnNtx9.js";import"./ButtonBase-tHw6RLJZ.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./Popover-EHwVSRZs.js";import"./Modal-BZrBnL3T.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-DHXjgkAG.js";import"./Paper-BZKq1osr.js";import"./Grow-BMsAcGvY.js";import"./useTheme-hfNS2WFw.js";import"./utils-D7nA_lC_.js";import"./List-BslH4zsa.js";import"./ListContext-DydK1sOh.js";import"./ListItem-C1ZFbryo.js";import"./Page-CBHregaw.js";import"./useMediaQuery-DtB-IR2v.js";import"./Tooltip-n646yQ2-.js";import"./Popper-RF-Wjgln.js";import"./MockTranslationApi-YWe2Dh37.js";import"./index-CFaqwFgm.js";import"./inherits-Cm41Z5uw.js";import"./toArray-QeYAVC82.js";import"./TranslationApi-eOxINumg.js";import"./WebStorage-D5Fgivzj.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-CM4hSmEF.js";import"./isSymbol-C_KZXW2d.js";import"./isObject-DlTwUI3n.js";import"./toString-B79bsZRM.js";import"./ApiProvider-CuNQiN7Z.js";import"./CssBaseline-B78aEvSr.js";import"./ThemeProvider-HGIy1WSf.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";const Eo={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>u(r.createElement(o,null))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return r.createElement(d,{title:"Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))},t=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return r.createElement(d,{title:"24hr Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};var m,a,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const No=["Default","TwentyFourHourClocks"];export{e as Default,t as TwentyFourHourClocks,No as __namedExportsOrder,Eo as default};
