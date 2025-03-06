import{i as k}from"./interopRequireDefault-Y9pwbXtE.js";import{r as P,i as x}from"./createSvgIcon-sTyAg92d.js";import{a as v,R as e,r as I}from"./index-CV65Cz2T.js";import{d as C}from"./ExpandMore-DNx61OL3.js";import{B as a,H as B}from"./Header-BYolxuC0.js";import{M as E}from"./index-CItkFWdb.js";import{T as r}from"./Typography-DFGLiOLt.js";import{P as S}from"./Page-DN05s2KU.js";import{L as t}from"./Link-Djz1WNQ-.js";import{B as R}from"./Box-Y2gNioDL.js";import{P as _}from"./Popover-C3NuGn4W.js";import{L as w}from"./List-DulzYPgQ.js";import{L as l}from"./ListItem-BzNdeZPd.js";import"./capitalize-52YtlJa-.js";import"./defaultTheme-WHYcXxGo.js";import"./withStyles-C_eMWQcb.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./useControlled-DPQJ7hKL.js";import"./createSvgIcon-BoOF83CO.js";import"./debounce-DJZHKdQ4.js";import"./isMuiElement-DG475NJP.js";import"./useIsFocusVisible-CkxE1YbK.js";import"./index-BBoiwMTC.js";import"./unstable_useId-DsWtIzNz.js";import"./Helmet-BCx2os5_.js";import"./index-BDlCPcVq.js";import"./makeStyles-CkJZxfhX.js";import"./Grid-DEL9PDyy.js";import"./Breadcrumbs-ElS9VG-V.js";import"./react-is.production.min-D0tnNtx9.js";import"./ButtonBase-DtZzUmL6.js";import"./TransitionGroupContext-C1n1zRT4.js";import"./Page-BN3hvIvt.js";import"./ApiRef-CiiQxZ8_.js";import"./ConfigApi-cQMGuQTo.js";import"./useMediaQuery-CFogxaVT.js";import"./Tooltip-Bg0rD3gN.js";import"./useTheme-CyYT1vdA.js";import"./Popper-BSfW9KPX.js";import"./Portal-W-tpMOzA.js";import"./Grow-BlrHKxvL.js";import"./utils-DmolnGpv.js";import"./index-DSEhRz7_.js";import"./ThemeProvider-UKwvVYMA.js";import"./lodash-D2SO6J9k.js";import"./useAnalytics-BFZbt2Mh.js";import"./typography-0XlFLCN0.js";import"./Modal-B_7UfOLo.js";import"./classCallCheck-BNzALLS0.js";import"./Paper-Ra1TVF2W.js";import"./ListContext-DDd8B5Hf.js";var i={},H=k,M=x;Object.defineProperty(i,"__esModule",{value:!0});var b=i.default=void 0,O=M(v()),A=H(P()),D=(0,A.default)(O.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");b=i.default=D;const Oe={title:"Layout/Breadcrumbs",component:a},o=()=>e.createElement(E,null,e.createElement("h2",null,"Standard breadcrumbs"),e.createElement(r,{paragraph:!0},"Underlined pages are links. This should show a hierarchical relationship."),e.createElement(S,{themeId:"other"},e.createElement(B,{title:"Current Page",type:"General Page",typeLink:"/"}))),n=()=>{const[p,s]=e.useState(null),L=T=>{s(T.currentTarget)},f=()=>{s(null)},m=!!p;return e.createElement(E,null,e.createElement(r,{paragraph:!0},"It might be the case that you want to keep your breadcrumbs outside of the header. In that case, they should be positioned above the title of the page."),e.createElement("h2",null,"Standard breadcrumbs"),e.createElement(r,{paragraph:!0},"Underlined pages are links. This should show a hierarchical relationship."),e.createElement(a,{color:"primaryText"}),e.createElement(a,{color:"primaryText"},e.createElement(t,{to:"/"},"General Page"),e.createElement(t,{to:"/"},"Second Page"),e.createElement(r,null,"Current page")),e.createElement("h2",null,"Hidden breadcrumbs"),e.createElement(r,{paragraph:!0},"Use this when you have more than three breadcrumbs. When user clicks on ellipses, expand the breadcrumbs out."),e.createElement(a,{color:"primaryText"},e.createElement(t,{to:"/"},"General Page"),e.createElement(t,{to:"/"},"Second Page"),e.createElement(t,{to:"/"},"Third Page"),e.createElement(t,{to:"/"},"Fourth Page"),e.createElement(r,null,"Current page")),e.createElement("h2",null,"Layered breadcrumbs"),e.createElement(r,{paragraph:!0},"Use this when you want to show alternative breadcrumbs on the same hierarchical level."),e.createElement(I.Fragment,null,e.createElement(a,{color:"primaryText"},e.createElement(t,{to:"/"},"General Page"),e.createElement(t,{to:"/",onClick:L},e.createElement(R,{display:"flex",alignItems:"center"},e.createElement(r,{component:"span"},"Second Page"),m?e.createElement(b,null):e.createElement(C,null))),e.createElement(r,null,"Current page")),e.createElement(_,{open:m,onClose:f,anchorEl:p,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},e.createElement(w,null,e.createElement(l,{button:!0,style:{textDecoration:"underline"}},"Parallel second page"),e.createElement(l,{button:!0,style:{textDecoration:"underline"}},"Another parallel second page"),e.createElement(l,{button:!0,style:{textDecoration:"underline"}},"Yet another, parallel second page")))))};o.__docgenInfo={description:"",methods:[],displayName:"InHeader"};n.__docgenInfo={description:"",methods:[],displayName:"OutsideOfHeader"};var c,h,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => <MemoryRouter>
    <h2>Standard breadcrumbs</h2>
    <Typography paragraph>
      Underlined pages are links. This should show a hierarchical relationship.
    </Typography>

    <Page themeId="other">
      <Header title="Current Page" type="General Page" typeLink="/" />
    </Page>
  </MemoryRouter>`,...(d=(h=o.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var u,g,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLAnchorElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return <MemoryRouter>
      <Typography paragraph>
        It might be the case that you want to keep your breadcrumbs outside of
        the header. In that case, they should be positioned above the title of
        the page.
      </Typography>

      <h2>Standard breadcrumbs</h2>
      <Typography paragraph>
        Underlined pages are links. This should show a hierarchical
        relationship.
      </Typography>

      <Breadcrumbs color="primaryText" />

      <Breadcrumbs color="primaryText">
        <Link to="/">General Page</Link>
        <Link to="/">Second Page</Link>
        <Typography>Current page</Typography>
      </Breadcrumbs>

      <h2>Hidden breadcrumbs</h2>
      <Typography paragraph>
        Use this when you have more than three breadcrumbs. When user clicks on
        ellipses, expand the breadcrumbs out.
      </Typography>

      <Breadcrumbs color="primaryText">
        <Link to="/">General Page</Link>
        <Link to="/">Second Page</Link>
        <Link to="/">Third Page</Link>
        <Link to="/">Fourth Page</Link>
        <Typography>Current page</Typography>
      </Breadcrumbs>

      <h2>Layered breadcrumbs</h2>
      <Typography paragraph>
        Use this when you want to show alternative breadcrumbs on the same
        hierarchical level.
      </Typography>

      <Fragment>
        <Breadcrumbs color="primaryText">
          <Link to="/">General Page</Link>
          <Link to="/" onClick={handleClick}>
            <Box display="flex" alignItems="center">
              <Typography component="span">Second Page</Typography>
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Box>
          </Link>
          <Typography>Current page</Typography>
        </Breadcrumbs>
        <Popover open={open} onClose={handleClose} anchorEl={anchorEl} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }} transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}>
          <List>
            <ListItem button style={{
            textDecoration: 'underline'
          }}>
              Parallel second page
            </ListItem>
            <ListItem button style={{
            textDecoration: 'underline'
          }}>
              Another parallel second page
            </ListItem>
            <ListItem button style={{
            textDecoration: 'underline'
          }}>
              Yet another, parallel second page
            </ListItem>
          </List>
        </Popover>
      </Fragment>
    </MemoryRouter>;
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const Ae=["InHeader","OutsideOfHeader"];export{o as InHeader,n as OutsideOfHeader,Ae as __namedExportsOrder,Oe as default};
