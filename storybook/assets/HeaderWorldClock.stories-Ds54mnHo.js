import{R as r}from"./index-CTjT7uj6.js";import{HeaderWorldClock as s}from"./index-7KR2INgv.js";import{H as d}from"./Header-DqkDh4VU.js";import{w as u}from"./appWrappers-BSqMYNKU.js";import"./HeaderLabel-C2ZS1JTN.js";import"./makeStyles-BZw-HJLd.js";import"./defaultTheme-DezMpTIo.js";import"./Grid--ddFL0KQ.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./capitalize-CEQeKh-K.js";import"./withStyles-BgNv_OyU.js";import"./Typography-9Z2Fqq1t.js";import"./Link-C9hKUk0G.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-QA7F3UF1.js";import"./index-DNAWfEOe.js";import"./ApiRef-BSBwTmJJ.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-hW_4NFvU.js";import"./useControlled-CogIeAPD.js";import"./createSvgIcon-CEu-9q0m.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./Helmet-DPVyO7__.js";import"./index-BRV0Se7Z.js";import"./Box-Bp1TnhXQ.js";import"./typography-DyYqqlXd.js";import"./Breadcrumbs-B8-uurhB.js";import"./react-is.production.min-D0tnNtx9.js";import"./ButtonBase-yy6Og9D-.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./Popover-Bztmh1sR.js";import"./Modal-6sUM5zfZ.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-DHXjgkAG.js";import"./Paper-Ke9XSqW5.js";import"./Grow-jBfYqf2m.js";import"./useTheme-NGQJGM2h.js";import"./utils-jlWbup7k.js";import"./List-Bh5ydWqT.js";import"./ListContext-DydK1sOh.js";import"./ListItem-Bxb0CNHD.js";import"./Page--_yTGwiK.js";import"./useMediaQuery-BBixSgSL.js";import"./Tooltip-C9cCQzQU.js";import"./Popper-CXFT7TxZ.js";import"./MockTranslationApi-Bqd-OB5I.js";import"./index-CFaqwFgm.js";import"./inherits-DGC6g2nO.js";import"./toArray-CwyM_zEO.js";import"./TranslationApi-eOxINumg.js";import"./WebStorage-D5Fgivzj.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-CM4hSmEF.js";import"./mapValues-D5qC5jJW.js";import"./toString-bNjqhuyi.js";import"./ApiProvider-CuNQiN7Z.js";import"./CssBaseline-BycpB-r2.js";import"./ThemeProvider-BPNZSjw5.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";const _o={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>u(r.createElement(o,null))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return r.createElement(d,{title:"Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))},t=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return r.createElement(d,{title:"24hr Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};var m,a,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
