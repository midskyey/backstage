import{R as r}from"./index-CTjT7uj6.js";import{HeaderWorldClock as s}from"./index-DkomQ63u.js";import{H as d}from"./Header-D0g-pi5M.js";import{w as u}from"./appWrappers-CEy3c9Ev.js";import"./HeaderLabel-Z1IMtFC3.js";import"./makeStyles-3WuthtJ7.js";import"./defaultTheme-U8IXQtr7.js";import"./Grid-Cd4CaOSn.js";import"./capitalize-CjHL08xv.js";import"./withStyles-Dj_puyu8.js";import"./hoist-non-react-statics.cjs-DzIEFHQI.js";import"./Typography-CUBppVl0.js";import"./Link-CJVT9lvf.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-BhgyLgKK.js";import"./index-CNMBxS8v.js";import"./ApiRef-DUoQ5WvO.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-C0wwYXYi.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-CAWH9WqG.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-B_4ddUuK.js";import"./ownerWindow-C3iVrxHF.js";import"./useIsFocusVisible-DdvWPq7A.js";import"./useControlled-B47E2WMp.js";import"./unstable_useId-B3Hiq1YI.js";import"./useAnalytics-Dmj0Ntiu.js";import"./ConfigApi-BZwRYjFH.js";import"./Helmet-DPVyO7__.js";import"./index-BRV0Se7Z.js";import"./Box-BZcLdGyY.js";import"./typography-hVTC7Hfk.js";import"./Breadcrumbs-C1UfxgLP.js";import"./react-is.production.min-D0tnNtx9.js";import"./ButtonBase-CNBzUxW6.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./Popover-DRjxI3-G.js";import"./Modal-_LApm8q8.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-BLjQd1nq.js";import"./Paper-BZKq1osr.js";import"./Grow-D0LitfzP.js";import"./useTheme-hfNS2WFw.js";import"./utils-CbKpylqm.js";import"./List-BslH4zsa.js";import"./ListContext-DydK1sOh.js";import"./ListItem-tGPADnuj.js";import"./Page-DAFenuIC.js";import"./useMediaQuery-DtB-IR2v.js";import"./Tooltip-VVNP4nE6.js";import"./Popper-DOdik0YJ.js";import"./MockTranslationApi-1jo2KCqo.js";import"./index-CFaqwFgm.js";import"./inherits-Cm41Z5uw.js";import"./toArray-QeYAVC82.js";import"./TranslationApi-TmuXcaNh.js";import"./WebStorage-D9doizkM.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-BzTcs2ef.js";import"./isSymbol-C_KZXW2d.js";import"./isObject-DlTwUI3n.js";import"./toString-B79bsZRM.js";import"./ApiProvider-D8NVuZ3M.js";import"./CssBaseline-B78aEvSr.js";import"./ThemeProvider-HGIy1WSf.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-C1DVN5xY.js";const yo={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>u(r.createElement(o,null))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return r.createElement(d,{title:"Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))},t=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return r.createElement(d,{title:"24hr Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};var m,p,a;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
