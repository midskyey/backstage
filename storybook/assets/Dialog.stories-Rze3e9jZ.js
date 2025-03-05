import{R as e}from"./index-CTjT7uj6.js";import{d as c}from"./Close-BlNJ8XSi.js";import{D as s,a as p,b as u,c as y}from"./DialogTitle-TiqLp1J5.js";import{m as g}from"./makeStyles-3WuthtJ7.js";import{I as d}from"./IconButton-C-oFUHIh.js";import{T as t}from"./Typography-CUBppVl0.js";import{B as a}from"./Button-S9mGqR9V.js";import{c as h}from"./createStyles-Bp4GwXob.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-CsAvdOT5.js";import"./capitalize-CjHL08xv.js";import"./defaultTheme-U8IXQtr7.js";import"./withStyles-Dj_puyu8.js";import"./hoist-non-react-statics.cjs-DzIEFHQI.js";import"./useControlled-Hu_S6sGp.js";import"./createSvgIcon-CAWH9WqG.js";import"./debounce-BO-l2B6S.js";import"./isMuiElement-B_4ddUuK.js";import"./useIsFocusVisible-Cc1qTAFu.js";import"./index-QA7F3UF1.js";import"./unstable_useId-B3Hiq1YI.js";import"./Modal-CU5fXPGM.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-C-K0NGyB.js";import"./Backdrop-C0W2dVL3.js";import"./useTheme-hfNS2WFw.js";import"./utils-D7nA_lC_.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./Paper-BZKq1osr.js";import"./ButtonBase-BC5AO5jE.js";import"./createStyles-yD3y8ldD.js";const W={title:"Layout/Dialog",component:s},T=g(o=>h({closeButton:{position:"absolute",right:o.spacing(1),top:o.spacing(1),color:o.palette.grey[500]}})),n={args:{open:!0},render:({open:o})=>{const m=T();return e.createElement(s,{"aria-labelledby":"dialog-title","aria-describedby":"dialog-description",open:o},e.createElement(p,{id:"dialog-title"},"Dialog Box Title",e.createElement(d,{"aria-label":"close",className:m.closeButton},e.createElement(c,null))),e.createElement(u,null,e.createElement(t,null,"This component is used whenever confirmation of some sort is needed, such as:"),e.createElement("ul",null,e.createElement("li",null,e.createElement(t,null,"Consent to sensitive matters like GDPR, access, etc;")),e.createElement("li",null,e.createElement(t,null,"Save, submit, cancel after a form is completed;")),e.createElement("li",null,e.createElement(t,null,"Alert message;")),e.createElement("li",null,e.createElement(t,null,"Buttons are optional."))),e.createElement(t,null,"The color for the secondary button is the same as the primary.")),e.createElement(y,null,e.createElement(a,{color:"primary"},"Secondary action"),e.createElement(a,{color:"primary"},"Primary action")))}};var r,l,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: ({
    open
  }: {
    open: boolean;
  }) => {
    const classes = styles();
    return <Dialog aria-labelledby="dialog-title" aria-describedby="dialog-description" open={open}>
        <DialogTitle id="dialog-title">
          Dialog Box Title
          <IconButton aria-label="close" className={classes.closeButton}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography>
            This component is used whenever confirmation of some sort is needed,
            such as:
          </Typography>
          <ul>
            <li>
              <Typography>
                Consent to sensitive matters like GDPR, access, etc;
              </Typography>
            </li>
            <li>
              <Typography>
                Save, submit, cancel after a form is completed;
              </Typography>
            </li>
            <li>
              <Typography>Alert message;</Typography>
            </li>
            <li>
              <Typography>Buttons are optional.</Typography>
            </li>
          </ul>
          <Typography>
            The color for the secondary button is the same as the primary.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button color="primary">Secondary action</Button>
          <Button color="primary">Primary action</Button>
        </DialogActions>
      </Dialog>;
  }
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const X=["Default"];export{n as Default,X as __namedExportsOrder,W as default};
