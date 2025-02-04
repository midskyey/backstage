import{R as r}from"./index-CTjT7uj6.js";import{HeaderWorldClock as s}from"./index-Djnns1RC.js";import{H as d}from"./Header-CiuwDSiu.js";import{w as u}from"./appWrappers-mdpGg217.js";import"./HeaderLabel-B4iK3fdH.js";import"./makeStyles-Z1piKFaZ.js";import"./defaultTheme-BrZMNV87.js";import"./Grid-D0t_NOHX.js";import"./capitalize-CPKBZ2U-.js";import"./withStyles-BoERxSk9.js";import"./hoist-non-react-statics.cjs-DzIEFHQI.js";import"./Typography-DhqftZOJ.js";import"./Link-DUjduLHB.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-QA7F3UF1.js";import"./index-BkN7i-fW.js";import"./ApiRef-BSBwTmJJ.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-CxejcRCW.js";import"./useControlled-CogIeAPD.js";import"./createSvgIcon-DvLPikTD.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./Helmet-DPVyO7__.js";import"./index-BRV0Se7Z.js";import"./Box-BuQ0oRjb.js";import"./typography-DfA0rp-6.js";import"./Breadcrumbs-DXGMr5N9.js";import"./react-is.production.min-D0tnNtx9.js";import"./ButtonBase-g64HK8if.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./Popover-UDPOtf04.js";import"./Modal-D7Vu5nWs.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-DHXjgkAG.js";import"./Paper-C4Wu2ZRy.js";import"./Grow-GUSO4DqQ.js";import"./useTheme-CxCkHA_V.js";import"./utils-BJxIKHMK.js";import"./List-DOQrL9Id.js";import"./ListContext-DydK1sOh.js";import"./ListItem-Iyhdukvy.js";import"./Page-BDM0nstM.js";import"./useMediaQuery-CNb2c6fS.js";import"./Tooltip-dvcDS0rd.js";import"./Popper-B1XKQEe1.js";import"./MockTranslationApi-7lcFbsnT.js";import"./index-CFaqwFgm.js";import"./inherits-_rA3tygc.js";import"./toArray-DrgApUvy.js";import"./TranslationApi-eOxINumg.js";import"./WebStorage-D5Fgivzj.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-CM4hSmEF.js";import"./isSymbol-C_KZXW2d.js";import"./isObject-DlTwUI3n.js";import"./toString-B79bsZRM.js";import"./ApiProvider-CuNQiN7Z.js";import"./CssBaseline-qxBnr2ND.js";import"./ThemeProvider-D-Ryobkw.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";const Eo={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>u(r.createElement(o,null))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return r.createElement(d,{title:"Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))},t=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return r.createElement(d,{title:"24hr Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};var m,a,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
