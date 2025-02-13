import{R as r}from"./index-CTjT7uj6.js";import{HeaderWorldClock as s}from"./index-DQ78Y4dN.js";import{H as d}from"./Header-CrzDI-U7.js";import{w as u}from"./appWrappers-h3WezMUi.js";import"./HeaderLabel-C-6rUDaA.js";import"./makeStyles-B-0HYIDn.js";import"./defaultTheme-BHCLteCA.js";import"./Grid-CDLWd65S.js";import"./capitalize-Cv45LKJ9.js";import"./withStyles-CtFSFDis.js";import"./hoist-non-react-statics.cjs-DzIEFHQI.js";import"./Typography-HWeGzz7A.js";import"./Link-gEam-Uu5.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-QA7F3UF1.js";import"./index-BkN7i-fW.js";import"./ApiRef-BSBwTmJJ.js";import"./typeof-Jcp7TgkT.js";import"./createSvgIcon-CwHgCKDX.js";import"./useControlled-CogIeAPD.js";import"./createSvgIcon-CAOX6Iqp.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./Helmet-DPVyO7__.js";import"./index-BRV0Se7Z.js";import"./Box-Df2VByPp.js";import"./typography-BUwukQ0P.js";import"./Breadcrumbs-CbuyJfls.js";import"./react-is.production.min-D0tnNtx9.js";import"./ButtonBase-C6t0-Yo5.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./Popover-CfBxwpol.js";import"./Modal-BE7Mw-2d.js";import"./classCallCheck-MFKM5G8b.js";import"./Portal-DHXjgkAG.js";import"./Paper-CF_31tNe.js";import"./Grow-cjTcaHas.js";import"./useTheme-BM15WviY.js";import"./utils-DJkMlKMA.js";import"./List-D13tgy_V.js";import"./ListContext-DydK1sOh.js";import"./ListItem-Bavcl9H5.js";import"./Page-BD5hq3i-.js";import"./useMediaQuery-BeGzF5T0.js";import"./Tooltip-BzCHySxB.js";import"./Popper-BHHCULL6.js";import"./MockTranslationApi-DK99EZxn.js";import"./index-CFaqwFgm.js";import"./getPrototypeOf-Ce9gVrZV.js";import"./toArray-OIRUTGpx.js";import"./TranslationApi-eOxINumg.js";import"./WebStorage-D5Fgivzj.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-CM4hSmEF.js";import"./isSymbol-C_KZXW2d.js";import"./isObject-DlTwUI3n.js";import"./toString-B79bsZRM.js";import"./ApiProvider-CuNQiN7Z.js";import"./CssBaseline-Da8-4ZAc.js";import"./ThemeProvider-UBYjSdZ0.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";const Eo={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>u(r.createElement(o,null))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return r.createElement(d,{title:"Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))},t=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return r.createElement(d,{title:"24hr Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};var m,a,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
