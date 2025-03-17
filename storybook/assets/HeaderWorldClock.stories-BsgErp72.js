import{R as r}from"./index-CTjT7uj6.js";import{HeaderWorldClock as s}from"./index-CROc0UYz.js";import{H as d}from"./Header-DU2Usuom.js";import{w as u}from"./appWrappers-Sd9OcGY_.js";import"./HeaderLabel-B7Z8vNiT.js";import"./makeStyles-B-0HYIDn.js";import"./defaultTheme-BHCLteCA.js";import"./Grid-CDLWd65S.js";import"./capitalize-Cv45LKJ9.js";import"./withStyles-CtFSFDis.js";import"./hoist-non-react-statics.cjs-DzIEFHQI.js";import"./Typography-HWeGzz7A.js";import"./Link-tNmn5xaV.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-BhgyLgKK.js";import"./index-CNMBxS8v.js";import"./ApiRef-DUoQ5WvO.js";import"./typeof-Jcp7TgkT.js";import"./createSvgIcon-C3BJbdiB.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-CAOX6Iqp.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-B_4ddUuK.js";import"./ownerWindow-C3iVrxHF.js";import"./useIsFocusVisible-DdvWPq7A.js";import"./useControlled-B47E2WMp.js";import"./unstable_useId-B3Hiq1YI.js";import"./useAnalytics-Dmj0Ntiu.js";import"./ConfigApi-BZwRYjFH.js";import"./Helmet-DPVyO7__.js";import"./index-BRV0Se7Z.js";import"./Box-Df2VByPp.js";import"./typography-BUwukQ0P.js";import"./Breadcrumbs-DbOsL_Kp.js";import"./react-is.production.min-D0tnNtx9.js";import"./ButtonBase-C1TIxwC6.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./Popover-B97mF0tJ.js";import"./Modal-C7AoR9r5.js";import"./classCallCheck-MFKM5G8b.js";import"./Portal-BLjQd1nq.js";import"./Paper-CF_31tNe.js";import"./Grow-CH5d6Enl.js";import"./useTheme-BM15WviY.js";import"./utils-B0iRFg_i.js";import"./List-D13tgy_V.js";import"./ListContext-DydK1sOh.js";import"./ListItem-DWehhXMK.js";import"./Page-DxVcxSZf.js";import"./useMediaQuery-BeGzF5T0.js";import"./Tooltip-CMWzn1c0.js";import"./Popper-B5Zu5T7p.js";import"./MockTranslationApi-KwXzFS_3.js";import"./index-CFaqwFgm.js";import"./getPrototypeOf-Ce9gVrZV.js";import"./toArray-OIRUTGpx.js";import"./TranslationApi-TmuXcaNh.js";import"./WebStorage-D9doizkM.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-BzTcs2ef.js";import"./isSymbol-C_KZXW2d.js";import"./isObject-DlTwUI3n.js";import"./toString-B79bsZRM.js";import"./ApiProvider-D8NVuZ3M.js";import"./CssBaseline-Da8-4ZAc.js";import"./ThemeProvider-UBYjSdZ0.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-C1DVN5xY.js";const yo={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>u(r.createElement(o,null))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return r.createElement(d,{title:"Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))},t=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return r.createElement(d,{title:"24hr Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};var m,p,a;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
