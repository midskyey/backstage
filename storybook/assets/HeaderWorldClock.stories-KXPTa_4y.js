import{R as r}from"./index-CTjT7uj6.js";import{HeaderWorldClock as s}from"./index-BZpcf3s3.js";import{H as d}from"./Header-I3lBbWO2.js";import{w as u}from"./appWrappers-S8EknMj5.js";import"./HeaderLabel-CaDNXLNU.js";import"./makeStyles-CRB_T0k9.js";import"./defaultTheme-DquFOgf8.js";import"./Grid-CFE-uVXf.js";import"./capitalize-BWjKmKKm.js";import"./withStyles-DWaS6n8x.js";import"./hoist-non-react-statics.cjs-DzIEFHQI.js";import"./Typography-D5Gm01bp.js";import"./Link-w7sdsOKM.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-QA7F3UF1.js";import"./index-BkN7i-fW.js";import"./ApiRef-BSBwTmJJ.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-D7HBgcTi.js";import"./useControlled-Hu_S6sGp.js";import"./createSvgIcon-CL6P1I3F.js";import"./debounce-BO-l2B6S.js";import"./isMuiElement-B_4ddUuK.js";import"./useIsFocusVisible-Cc1qTAFu.js";import"./unstable_useId-B3Hiq1YI.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./Helmet-DPVyO7__.js";import"./index-BRV0Se7Z.js";import"./Box-DU2WS7ls.js";import"./typography-1q_m8518.js";import"./Breadcrumbs-B7ch2G4y.js";import"./react-is.production.min-D0tnNtx9.js";import"./ButtonBase-C5vBVldS.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./Popover-DWMLgb4I.js";import"./Modal-DRukd71L.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-C-K0NGyB.js";import"./Paper-2nKWzoda.js";import"./Grow-IFUUo7Bg.js";import"./useTheme-0ztDbzjM.js";import"./utils-C77xYEoA.js";import"./List-B21WyO9K.js";import"./ListContext-DydK1sOh.js";import"./ListItem-BqNetBt0.js";import"./Page-DpLMY4cw.js";import"./useMediaQuery-CW8PMJkr.js";import"./Tooltip-CEAy7RgQ.js";import"./Popper-OF5Y-VYl.js";import"./MockTranslationApi-WG1gjFYw.js";import"./index-CFaqwFgm.js";import"./inherits-BBh9Yz5k.js";import"./toArray-n7tUSQe9.js";import"./TranslationApi-eOxINumg.js";import"./WebStorage-D5Fgivzj.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-CM4hSmEF.js";import"./isSymbol-C_KZXW2d.js";import"./isObject-DlTwUI3n.js";import"./toString-B79bsZRM.js";import"./ApiProvider-CuNQiN7Z.js";import"./CssBaseline-0XN_ELQr.js";import"./ThemeProvider-iV7LyTO2.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";const So={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>u(r.createElement(o,null))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return r.createElement(d,{title:"Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))},t=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return r.createElement(d,{title:"24hr Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};var m,a,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const wo=["Default","TwentyFourHourClocks"];export{e as Default,t as TwentyFourHourClocks,wo as __namedExportsOrder,So as default};
