import{R as e}from"./index-CTjT7uj6.js";import{d as c}from"./Close-DIUkXmz4.js";import{D as s,a as p,b as u,c as y}from"./DialogTitle-DZIDu4a8.js";import{m as g}from"./makeStyles-B-0HYIDn.js";import{I as d}from"./IconButton-Cpvn6z1Z.js";import{T as t}from"./Typography-HWeGzz7A.js";import{B as r}from"./Button-CvJbZQvD.js";import{c as h}from"./createStyles-Bp4GwXob.js";import"./typeof-Jcp7TgkT.js";import"./createSvgIcon-C3BJbdiB.js";import"./capitalize-Cv45LKJ9.js";import"./defaultTheme-BHCLteCA.js";import"./withStyles-CtFSFDis.js";import"./hoist-non-react-statics.cjs-DzIEFHQI.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-CAOX6Iqp.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-B_4ddUuK.js";import"./ownerWindow-C3iVrxHF.js";import"./useIsFocusVisible-DdvWPq7A.js";import"./index-BhgyLgKK.js";import"./useControlled-B47E2WMp.js";import"./unstable_useId-B3Hiq1YI.js";import"./Modal-C7AoR9r5.js";import"./classCallCheck-MFKM5G8b.js";import"./Portal-BLjQd1nq.js";import"./Backdrop-BOyCuEQv.js";import"./useTheme-BM15WviY.js";import"./utils-B0iRFg_i.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./Paper-CF_31tNe.js";import"./ButtonBase-C1TIxwC6.js";import"./createStyles-yD3y8ldD.js";const Y={title:"Layout/Dialog",component:s},T=g(o=>h({closeButton:{position:"absolute",right:o.spacing(1),top:o.spacing(1),color:o.palette.grey[500]}})),n={args:{open:!0},render:({open:o})=>{const m=T();return e.createElement(s,{"aria-labelledby":"dialog-title","aria-describedby":"dialog-description",open:o},e.createElement(p,{id:"dialog-title"},"Dialog Box Title",e.createElement(d,{"aria-label":"close",className:m.closeButton},e.createElement(c,null))),e.createElement(u,null,e.createElement(t,null,"This component is used whenever confirmation of some sort is needed, such as:"),e.createElement("ul",null,e.createElement("li",null,e.createElement(t,null,"Consent to sensitive matters like GDPR, access, etc;")),e.createElement("li",null,e.createElement(t,null,"Save, submit, cancel after a form is completed;")),e.createElement("li",null,e.createElement(t,null,"Alert message;")),e.createElement("li",null,e.createElement(t,null,"Buttons are optional."))),e.createElement(t,null,"The color for the secondary button is the same as the primary.")),e.createElement(y,null,e.createElement(r,{color:"primary"},"Secondary action"),e.createElement(r,{color:"primary"},"Primary action")))}};var a,l,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const Z=["Default"];export{n as Default,Z as __namedExportsOrder,Y as default};
