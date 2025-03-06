import{R as e}from"./index-CV65Cz2T.js";import{d as c}from"./Close-MNO4e--m.js";import{D as s,a as p,b as u,c as y}from"./DialogTitle-BbwotIdk.js";import{m as g}from"./makeStyles-CkJZxfhX.js";import{I as d}from"./IconButton-shkqm6j7.js";import{T as t}from"./Typography-DFGLiOLt.js";import{B as a}from"./Button-DU_mMl0C.js";import{c as h}from"./createStyles-Bp4GwXob.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-sTyAg92d.js";import"./capitalize-52YtlJa-.js";import"./defaultTheme-WHYcXxGo.js";import"./withStyles-C_eMWQcb.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./useControlled-DPQJ7hKL.js";import"./createSvgIcon-BoOF83CO.js";import"./debounce-DJZHKdQ4.js";import"./isMuiElement-DG475NJP.js";import"./useIsFocusVisible-CkxE1YbK.js";import"./index-BBoiwMTC.js";import"./unstable_useId-DsWtIzNz.js";import"./Modal-B_7UfOLo.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-W-tpMOzA.js";import"./Backdrop-BGr-F4l6.js";import"./useTheme-CyYT1vdA.js";import"./utils-DmolnGpv.js";import"./TransitionGroupContext-C1n1zRT4.js";import"./Paper-Ra1TVF2W.js";import"./ButtonBase-DtZzUmL6.js";import"./createStyles-yD3y8ldD.js";const W={title:"Layout/Dialog",component:s},T=g(o=>h({closeButton:{position:"absolute",right:o.spacing(1),top:o.spacing(1),color:o.palette.grey[500]}})),n={args:{open:!0},render:({open:o})=>{const m=T();return e.createElement(s,{"aria-labelledby":"dialog-title","aria-describedby":"dialog-description",open:o},e.createElement(p,{id:"dialog-title"},"Dialog Box Title",e.createElement(d,{"aria-label":"close",className:m.closeButton},e.createElement(c,null))),e.createElement(u,null,e.createElement(t,null,"This component is used whenever confirmation of some sort is needed, such as:"),e.createElement("ul",null,e.createElement("li",null,e.createElement(t,null,"Consent to sensitive matters like GDPR, access, etc;")),e.createElement("li",null,e.createElement(t,null,"Save, submit, cancel after a form is completed;")),e.createElement("li",null,e.createElement(t,null,"Alert message;")),e.createElement("li",null,e.createElement(t,null,"Buttons are optional."))),e.createElement(t,null,"The color for the secondary button is the same as the primary.")),e.createElement(y,null,e.createElement(a,{color:"primary"},"Secondary action"),e.createElement(a,{color:"primary"},"Primary action")))}};var r,l,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
