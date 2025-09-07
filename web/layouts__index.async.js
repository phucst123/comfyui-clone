"use strict";(self.webpackChunkgenerative_flow=self.webpackChunkgenerative_flow||[]).push([[717],{8123:function(co,we,o){o.r(we),o.d(we,{default:function(){return ro}});var be=o(5600),ln=o(228),q=o.n(ln),dn=o(7999),me=o.n(dn),cn=o(8305),w=o.n(cn),un=o(3649),I=o.n(un),te=o(3563),mn=o(9021),pn=o(5721),gn=o(447),ke=o(2275),Me=o(4560),se=o(4848),oe=o(1359),Ne=o(524),hn=o(6084),pe=o(5401),J=o(4081),vn=o(4887),Oe=o(6310),fn=o(8826),ge=o(4175),h=o(6622),s=o(959),ie=o(5552),xn=o(3098),n=o(1527),Cn=function(t){var r=t.label,a=t.value;return(0,n.jsxs)("div",{children:[r,": ",a]})},Te=s.memo(Cn),bn=function(t){var r=t.queue,a=t.onDeleteFromQueue;return r.length===0?[{label:"Empty queue",key:0}]:r.map(function(l,u){return{icon:u===0?(0,n.jsx)(Oe.Z,{size:"small",indicator:(0,n.jsx)(ke.Z,{spin:!0})}):(0,n.jsx)(xn.Z,{}),onClick:function(){return void a(l.id)},label:(0,n.jsxs)("div",{style:{marginLeft:8},children:[(0,n.jsxs)("h5",{children:["Queue ",l.id]}),(0,n.jsx)(Te,{label:"model",value:l.model===void 0?"N/A":l.model}),l.prompts.map(function(c,p){return(0,n.jsx)(Te,{label:"prompt",value:c},p)})]}),key:l.id}})},Sn=bn,yn=o(332),Pn=o(5644),jn=o(2325),Dn=o(7359),N=o(9971),uo="https://gw.alipayobjects.com/zos/bmw-prod/9ecb2822-1592-4cb0-a087-ce0097fef2ca.svg",mo="https://gw.alipayobjects.com/zos/bmw-prod/e146116d-c65a-4306-a3d2-bb8d05e1c49b.svg",An=N.ZP.div.withConfig({componentId:"sc-19p43la-0"})(["display:flex;align-items:center;justify-content:space-between;height:46px;padding:16px 24px;background:",";border-bottom:1px solid ",";"],function(e){var t=e.theme;return t.colorBgContainer},function(e){var t=e.theme;return t.colorBorderSecondary}),Se={auto:(0,n.jsx)("span",{role:"img",className:"anticon anticon-github",children:(0,n.jsx)("svg",{viewBox:"0 0 16 16",width:"1em",height:"1em",fill:"currentColor",children:(0,n.jsx)("path",{d:"M14.595 8a6.595 6.595 0 1 1-13.19 0 6.595 6.595 0 0 1 13.19 0ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm0 2.014v11.972A5.986 5.986 0 0 0 8 2.014Z"})})}),light:(0,n.jsx)("span",{role:"img",className:"anticon anticon-github",children:(0,n.jsx)("svg",{viewBox:"0 0 16 16",width:"1em",height:"1em",fill:"currentColor",children:(0,n.jsx)("path",{d:"M8 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM8 3a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm7 4a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM3 8a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm9.95 3.536.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414Zm-9.9-7.072-.707-.707a1 1 0 0 1 1.414-1.414l.707.707A1 1 0 0 1 3.05 4.464Zm9.9 0a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707Zm-9.9 7.072a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})})}),dark:(0,n.jsx)("span",{role:"img",className:"anticon anticon-github",children:(0,n.jsx)("svg",{viewBox:"0 0 16 16",width:"1em",height:"1em",fill:"currentColor",children:(0,n.jsx)("path",{d:"M8.218 1.455c3.527.109 6.327 3.018 6.327 6.545 0 3.6-2.945 6.545-6.545 6.545a6.562 6.562 0 0 1-6.036-4h.218c3.6 0 6.545-2.945 6.545-6.545 0-.91-.182-1.745-.509-2.545m0-1.455c-.473 0-.909.218-1.2.618-.29.4-.327.946-.145 1.382.254.655.4 1.31.4 2 0 2.8-2.291 5.09-5.091 5.09h-.218c-.473 0-.91.22-1.2.62-.291.4-.328.945-.146 1.38C1.891 14.074 4.764 16 8 16c4.4 0 8-3.6 8-8a7.972 7.972 0 0 0-7.745-8h-.037Z"})})})},In=function(t){var r=t.onSetThemeMode;return[{icon:Se.light,label:"Light",key:"light",onClick:function(){return r("light")}},{icon:Se.dark,label:"Dark",key:"dark",onClick:function(){return r("dark")}}]},le={default:(0,n.jsx)(yn.Z,{}),straight:(0,n.jsx)(Pn.Z,{}),step:(0,n.jsx)(jn.Z,{}),smoothstep:(0,n.jsx)(Dn.Z,{})},En=function(t){var r=t.onEdgesType;return[{icon:le.default,label:"Bezier",key:"default",onClick:function(){return r("default")}},{icon:le.straight,label:"Straight",key:"straight",onClick:function(){return r("straight")}},{icon:le.step,label:"Step",key:"step",onClick:function(){return r("step")}},{icon:le.smoothstep,label:"SmoothStep",key:"smoothstep",onClick:function(){return r("smoothstep")}}]},ye=o(255),wn=o(2972),Pe=o(1178),kn=o(8473),Mn=o(2790),Nn=o(7978),On=o.p+"static/logo-light.c003c5b2.png",Tn=o.p+"static/logo-dark.cf9ce614.png",Re,Rn=Me.Z.useToken,Zn=(0,h.kc)(function(e){var t=e.prefixCls,r=e.css,a=e.token;return{linearGradientButton:r(Re||(Re=I()([`
    &.`,"-btn-primary:not([disabled]):not(.",`-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, `,", ",`);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
        z-index: 0;
      }

      > span {
        position: relative;
        z-index: 1;
      }

      &:hover::before {
        background: linear-gradient(135deg, `,", ",`);
        opacity: 0.85; // Slightly increase transparency for better distinction
        transform: scale(1.02); // Add subtle scale effect
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.15); // Add subtle glow
      }
    }
  `])),t,t,a.colorPrimary,a.colorInfo,a.colorWarning,a.colorError)}}),zn=[{label:"Editor",value:"flow",icon:(0,n.jsx)(kn.Z,{})},{label:"Gallery",value:"gallery",icon:(0,n.jsx)(Mn.Z,{})}],Ln=function(t){var r=t.children,a=Rn(),l=a.token,u=se.ZP.useMessage(),c=w()(u,2),p=c[0],y=c[1],m=(0,s.useState)(0),i=w()(m,2),x=i[0],C=i[1],b=(0,s.useState)(!1),d=w()(b,2),g=d[0],P=d[1],S=(0,s.useState)(!1),j=w()(S,2),Z=j[0],O=j[1],T=(0,s.useState)(""),z=w()(T,2),$=z[0],D=z[1],f=(0,te.q)(function(F){return F},ie.X),W=f.page,B=f.onSetPage,U=f.themeMode,Q=f.onSetThemeMode,re=f.onSubmit,_=f.queue,M=f.onDeleteFromQueue,v=f.promptError,R=f.onEdgesAnimate,E=f.edgeType,H=f.onEdgesType,K=f.onSaveLocalWorkFlow,L=f.onLoadWorkflow,G=Zn(),ee=G.styles;(0,s.useEffect)(function(){v!==void 0&&p.open({type:"error",content:v,duration:4})},[v,x,p]),(0,s.useEffect)(function(){R(_.length>0)},[_,R]);var fe=(0,s.useCallback)(function(){re(),C(function(F){return F+1})},[re]),xe=(0,s.useCallback)(me()(q()().mark(function F(){var X,Ce,Ee,ne,ue;return q()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.prev=0,X=te.q.getState(),Ce=(0,Pe.Mg)(X),Ee=(0,wn.Fh)({graph:Ce,widgets:X.widgets,customWidgets:X.customWidgets,clientId:X.clientId}),ne=Ee.prompt,P(!0),V.next=8,ye.Z.post("http://".concat("localhost:8188","/install_model"),{workflow:ne},{headers:{"Content-Type":"application/json"}});case 8:ue=V.sent,P(!1),ue.data.status===!0?se.ZP.success("Models installed successfully"):se.ZP.error("Error installing models: ".concat(ue.data.models_not_found.join(", "))),V.next=18;break;case 13:V.prev=13,V.t0=V.catch(0),P(!1),console.error("Error installing models:",V.t0),se.ZP.error("Failed to install models. Please try again later.");case 18:case"end":return V.stop()}},F,null,[[0,13]])})),[]),sn=(0,s.useCallback)(function(){D(""),O(!0)},[]),A=(0,s.useCallback)(function(){if(!$.trim()){p.error("Please enter a filename.");return}K($),C(function(F){return F+1}),p.success("Success! ".concat($," has been saved.")),O(!1)},[$,K,p]),Y=(0,s.useCallback)(function(){O(!1)},[]),so=(0,s.useCallback)(function(){var F=me()(q()().mark(function X(Ce){return q()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:return ne.next=2,(0,Pe.Sk)(Ce,L);case 2:p.success("Workflow imported successfully."),C(function(ue){return ue+1});case 4:case"end":return ne.stop()}},X)}));return function(X){return F.apply(this,arguments)}}(),[L,p]),io=(0,s.useCallback)(function(){(0,Pe.W)(),L(Nn.Z),p.success("New workflow created."),C(function(F){return F+1})},[L,p]),lo=_.length>0;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(An,{children:[(0,n.jsx)(oe.Z,{align:"center",style:{marginRight:16},children:(0,n.jsx)(Ne.Z,{preview:!1,src:U==="dark"?Tn:On,alt:"Logo",height:40})}),(0,n.jsx)("div",{}),(0,n.jsx)(hn.Z,{options:zn,value:W,size:"middle",onChange:B,block:!0,style:{width:"240px"}}),(0,n.jsxs)(oe.Z,{children:[r,(0,n.jsx)(pe.Z,{trigger:["click"],placement:"bottomRight",menu:{items:En({onEdgesType:H})},children:(0,n.jsx)(J.ZP,{icon:le[E]})}),(0,n.jsx)(pe.Z,{trigger:["click"],placement:"bottomRight",menu:{items:In({onSetThemeMode:Q})},children:(0,n.jsx)(J.ZP,{icon:Se[U]})}),(0,n.jsx)(J.ZP,{icon:(0,n.jsx)(mn.Z,{}),onClick:io,title:"New Workflow"}),(0,n.jsx)(J.ZP,{icon:(0,n.jsx)(pn.Z,{}),onClick:sn,title:"Save Workflow"}),(0,n.jsx)(vn.Z,{accept:".json",maxCount:1,itemRender:function(){return null},beforeUpload:so,showUploadList:!1,children:(0,n.jsx)(J.ZP,{icon:(0,n.jsx)(gn.Z,{}),title:"Import Workflow"})}),(0,n.jsx)(J.ZP,{type:"primary",onClick:xe,loading:g,className:ee.linearGradientButton,children:"Install Missing Models"}),(0,n.jsx)(pe.Z.Button,{type:"primary",trigger:["hover"],placement:"bottomRight",onClick:fe,menu:{items:Sn({queue:_,onDeleteFromQueue:M})},icon:lo?(0,n.jsx)(Oe.Z,{size:"small",indicator:(0,n.jsx)(ke.Z,{spin:!0,style:{color:"#fff"}})}):void 0,disabled:g,children:"Run Queue"})]})]}),(0,n.jsx)(fn.Z,{title:"Save Workflow",open:Z,onOk:A,onCancel:Y,okText:"Save",cancelText:"Cancel",children:(0,n.jsx)(ge.Z,{placeholder:"Enter workflow filename",value:$,onChange:function(X){return D(X.target.value)},onPressEnter:A})}),y]})},Wn=s.memo(Ln),je=o(909),Hn=o(6068),k=o.n(Hn),Fn=o(2092),he=o.n(Fn),Ze=o(9708),Bn=o(1009),Un=o(3616),$n=o(7840),Gn=o(826),Vn=o(6958),ze=o(3251),Le,We,He,Fe,Be,Ue,$e,Ge,Ve,Qe,Ke,Xe,Je,Ye=(0,h.kc)(function(e,t){var r=e.token,a=(0,h.iv)(Le||(Le=I()([`
    position: relative;
    &::before {
      content: '';
      position: absolute;
      z-index: 50;
      transition: all 0.3s ease-in-out;
    }

    &:hover,
    &:active {
      &::before {
        background: `,`;
      }
    }
  `])),r.colorPrimary),l=(0,h.iv)(We||(We=I()([`
    cursor: pointer;

    position: absolute;
    z-index: 1001;

    color: `,`;

    opacity: 0;
    background: `,`;
    border-color: `,`;
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;

    transition: opacity 0.1s;

    &:hover {
      color: `,`;
      background: `,`;
    }
  `])),r.colorTextTertiary,r.colorBgElevated,r.colorBorder,r.colorTextSecondary,r.colorFillQuaternary),u=17,c=40,p=16;return{container:(0,h.cx)(t,(0,h.iv)(He||(He=I()([`
        position: relative;
        flex-shrink: 0;
        border: 0 solid `,`;

        &:hover {
          .`,`-toggle {
            opacity: 1;
          }
        }
      `])),r.colorSplit,t)),toggleLeft:(0,h.cx)("".concat(t,"-toggle"),"".concat(t,"-toggle-left"),l,(0,h.iv)(Fe||(Fe=I()([`
        top: 50%;
        left: -`,`px;

        width: `,`px;
        height: `,`px;
        margin-top: -20px;

        border-right-width: 0;
        border-radius: 4px 0 0 4px;
      `])),u,p,c)),toggleRight:(0,h.cx)("".concat(t,"-toggle"),"".concat(t,"-toggle-right"),l,(0,h.iv)(Be||(Be=I()([`
        top: 50%;
        right: -`,`px;

        width: `,`px;
        height: `,`px;
        margin-top: -20px;

        border-left-width: 0;
        border-radius: 0 4px 4px 0;
      `])),u,p,c)),toggleTop:(0,h.cx)("".concat(t,"-toggle"),"".concat(t,"-toggle-top"),l,(0,h.iv)(Ue||(Ue=I()([`
        top: -`,`px;
        left: 50%;

        width: `,`px;
        height: `,`px;
        margin-left: -20px;

        border-bottom-width: 0;
        border-radius: 4px 4px 0 0;
      `])),u,c,p)),toggleBottom:(0,h.cx)("".concat(t,"-toggle"),"".concat(t,"-toggle-bottom"),l,(0,h.iv)($e||($e=I()([`
        bottom: -`,`px;
        left: 50%;

        width: `,`px;
        height: 16px;
        margin-left: -20px;

        border-top-width: 0;
        border-radius: 0 0 4px 4px;
      `])),u,c)),fixed:(0,h.cx)("".concat(t,"-fixed"),(0,h.iv)(Ge||(Ge=I()([`
        overflow: hidden;
        background: `,`;
      `])),r.colorBgContainer)),float:(0,h.cx)("".concat(t,"-float"),(0,h.iv)(Ve||(Ve=I()([`
        z-index: 2000;

        overflow: hidden;

        background: `,`;
        border-radius: 8px;
        box-shadow: `,`;
      `])),r.colorBgElevated,r.boxShadowSecondary)),leftHandle:(0,h.cx)((0,h.iv)(Qe||(Qe=I()([`
        `,`;

        &::before {
          left: 50%;
          width: 2px;
          height: 100%;
        }
      `])),a),"".concat(t,"-left-handle")),rightHandle:(0,h.cx)((0,h.iv)(Ke||(Ke=I()([`
        `,`;
        &::before {
          right: 50%;
          width: 2px;
          height: 100%;
        }
      `])),a),"".concat(t,"-right-handle")),topHandle:(0,h.cx)("".concat(t,"-top-handle"),(0,h.iv)(Xe||(Xe=I()([`
        `,`;

        &::before {
          top: 50%;
          width: 100%;
          height: 2px;
        }
      `])),a)),bottomHandle:(0,h.cx)("".concat(t,"-bottom-handle"),(0,h.iv)(Je||(Je=I()([`
        `,`;

        &::before {
          bottom: 50%;
          width: 100%;
          height: 2px;
        }
      `])),a))}}),Qn=150,Kn=400,De=function(t){switch(t){case"bottom":return"top";case"top":return"bottom";case"right":return"left";case"left":return"right"}},Xn=(0,s.memo)(function(e){var t=e.children,r=e.placement,a=r===void 0?"right":r,l=e.resize,u=e.style,c=e.size,p=e.defaultSize,y=e.minWidth,m=e.minHeight,i=e.prefixCls,x=e.onSizeChange,C=e.onSizeDragging,b=e.expandable,d=b===void 0?!0:b,g=e.isExpand,P=e.onExpandChange,S=e.className,j=(0,je.k2)("draggable-panel",i),Z=a==="top"||a==="bottom",O=Ye(j),T=O.styles,z=O.cx,$=(0,ze.Z)(!0,{value:g,onChange:P}),D=w()($,2),f=D[0],W=D[1],B=l!==!1&&f,U=(0,s.useMemo)(function(){return B?he()({},De(a),T["".concat(De(a),"Handle")]):{}},[B,a]),Q=k()(he()({top:!1,bottom:!1,right:!1,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},De(a),!0),l),re=(0,s.useMemo)(function(){return Z?k()({width:"100%",height:Qn},p):k()({width:Kn,height:"100%"},p)},[Z]),_=f?{minWidth:typeof y=="number"?Math.max(y,0):280,minHeight:typeof m=="number"?Math.max(m,0):void 0,defaultSize:re,size:c,style:u}:{minWidth:0,minHeight:0,size:{width:0,height:0}},M=(0,s.useMemo)(function(){switch(a){case"top":return{className:"Bottom",Arrow:Ze.Z};case"bottom":return{className:"Top",Arrow:Bn.Z};case"right":return{className:"Left",Arrow:Un.Z};case"left":return{className:"Right",Arrow:$n.Z}}},[T,a]),v=M.Arrow,R=M.className;return(0,n.jsxs)("div",{className:z(T.container,S),style:he()({},"border".concat(R,"Width"),1),children:[d&&(0,n.jsx)(Vn.Z,{className:z(T["toggle".concat(R)]),onClick:function(){W(!f)},style:{opacity:f?void 0:1},children:(0,n.jsx)(v,{rotate:f?180:0})}),(0,n.jsx)(Gn.e,k()(k()({},_),{},{className:T.fixed,enable:B?Q:void 0,handleClasses:U,onResizeStop:function(H,K,L,G){x==null||x(G,{width:L.style.width,height:L.style.height})},onResize:function(H,K,L,G){C==null||C(G,{width:L.style.width,height:L.style.height})},children:t}))]})}),Jn=o(5424),Yn=300,qn=400,_n=(0,s.memo)(function(e){var t=e.children,r=e.direction,a=e.resize,l=e.style,u=e.position,c=e.onPositionChange,p=e.size,y=e.defaultSize,m=e.defaultPosition,i=e.minWidth,x=i===void 0?280:i,C=e.minHeight,b=C===void 0?200:C,d=e.prefixCls,g=e.canResizing,P=Ye(d),S=P.styles,j=(0,s.useMemo)(function(){return g?{right:S.rightHandle,left:S.leftHandle,top:S.topHandle,bottom:S.bottomHandle}:{}},[g,r]),Z=(0,s.useMemo)(function(){return g?a:k()({top:!0,bottom:!0,right:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},a)},[g,a]),O=k()({width:qn,height:Yn},y),T=k()({x:100,y:100},m),z={minWidth:Math.max(x,0),minHeight:Math.max(b,0),defaultSize:O,size:p,style:l};return(0,n.jsx)(Jn.s,k()(k()({position:u,resizeHandleClasses:j,default:k()(k()({},T),O),onDragStop:function(D,f){c==null||c({x:f.x,y:f.y})},bound:"parent",enableResizing:Z},z),{},{className:S.float,children:t}))}),et=(0,s.memo)(function(e){var t=e.children,r=e.className,a=e.mode,l=e.placement,u=l===void 0?"right":l,c=e.resize,p=e.style,y=e.position,m=e.onPositionChange,i=e.size,x=e.defaultSize,C=e.defaultPosition,b=e.minWidth,d=e.minHeight,g=e.prefixCls,P=e.onSizeChange,S=e.onSizeDragging,j=e.expandable,Z=j===void 0?!0:j,O=e.isExpand,T=e.onExpandChange,z=(0,je.k2)("draggable-panel",g);switch(a){case"fixed":default:return(0,n.jsx)(Xn,{prefixCls:z,size:i,defaultSize:x,onSizeDragging:S,onSizeChange:P,minHeight:d,minWidth:b,resize:c,onExpandChange:T,expandable:Z,isExpand:O,className:r,placement:u,style:p,children:t});case"float":return(0,n.jsx)(_n,{prefixCls:z,defaultPosition:C,position:y,onPositionChange:m,minHeight:d,minWidth:b,defaultSize:x,size:i,onSizeDragging:S,onSizeChange:P,resize:c,canResizing:c!==!1,className:r,style:p,children:t})}}),nt=o(906),de=o(6434),ve=o(7094),tt=o(8277),ot=o(7333),at=o(9087),qe=o(95),rt=o(6142),st=o(4412),it=o.p+"static/flow-pilot.c3b5914d.png",lt=Me.Z.useToken,dt=ge.Z.TextArea,ct=N.ZP.div.withConfig({componentId:"sc-1i4gfeb-0"})(["height:100%;display:flex;flex-direction:column;padding:0px;"]),ut=N.ZP.div.withConfig({componentId:"sc-1i4gfeb-1"})(["display:flex;flex-direction:column;flex:1;overflow-y:auto;margin-bottom:16px;"]),mt=N.ZP.div.withConfig({componentId:"sc-1i4gfeb-2"})(["background-color:",";align-self:",";padding:12px 16px;border-radius:12px;max-width:70%;word-break:break-word;display:flex;flex-direction:column;font-size:1.1em;box-shadow:0 2px 8px rgba(0,0,0,0.06);"],function(e){return e.$sender==="user"?e.$token.colorBgTextHover:e.$token.colorFillSecondary},function(e){return e.$sender==="user"?"flex-end":"flex-start"}),pt=N.ZP.div.withConfig({componentId:"sc-1i4gfeb-3"})(["font-size:0.9em;color:",";margin-top:8px;padding:6px 8px;border-radius:6px;cursor:pointer;transition:all 0.3s ease;border:1px solid ",";&:hover{color:",";background-color:",";border-color:",";}"],function(e){return e.$token.colorTextSecondary},function(e){return e.$token.colorBorder},function(e){return e.$token.colorPrimary},function(e){return e.$token.colorBgTextHover},function(e){return e.$token.colorPrimary}),gt=N.ZP.div.withConfig({componentId:"sc-1i4gfeb-4"})(["background:",";border:1px solid ",";border-radius:12px;padding:0;box-shadow:0 2px 8px rgba(0,0,0,0.06);overflow:hidden;"],function(e){return e.$token.colorBgContainer},function(e){return e.$token.colorBorder}),ht=N.ZP.div.withConfig({componentId:"sc-1i4gfeb-5"})(["display:flex;align-items:center;gap:8px;padding:12px 16px 8px 16px;color:",";font-weight:500;font-size:14px;background:",";"],function(e){return e.$mode==="generate"?"#52c41a":"#1890ff"},function(e){return e.$mode==="generate"?"rgba(82, 196, 26, 0.02)":"rgba(24, 144, 255, 0.02)"}),vt=(0,N.ZP)(dt).withConfig({componentId:"sc-1i4gfeb-6"})(["border:none !important;box-shadow:none !important;padding:12px 16px !important;font-size:14px !important;resize:none !important;&:focus{border:none !important;box-shadow:none !important;}&.ant-input{background:transparent !important;}"]),ft=N.ZP.div.withConfig({componentId:"sc-1i4gfeb-7"})(["display:flex;justify-content:space-between;align-items:center;padding:8px 16px 12px 16px;background:transparent;"]),xt=(0,N.ZP)(J.ZP).withConfig({componentId:"sc-1i4gfeb-8"})(["border-color:"," !important;color:"," !important;&:hover{border-color:"," !important;color:"," !important;background:"," !important;}"],function(e){return e.$mode==="generate"?"#52c41a":"#1890ff"},function(e){return e.$mode==="generate"?"#52c41a":"#1890ff"},function(e){return e.$mode==="generate"?"#52c41a":"#1890ff"},function(e){return e.$mode==="generate"?"#52c41a":"#1890ff"},function(e){return e.$mode==="generate"?"rgba(82, 196, 26, 0.1)":"rgba(24, 144, 255, 0.1)"}),Ct=at.Z.Text,bt=function(){var t=(0,nt.S)(),r=lt(),a=r.token,l=(0,te.q)(function(M){return M},ie.X),u=l.messages,c=l.onAddMessage,p=(0,s.useRef)(null),y=(0,s.useState)(""),m=w()(y,2),i=m[0],x=m[1],C=(0,s.useState)("query"),b=w()(C,2),d=b[0],g=b[1],P=(0,s.useState)(!1),S=w()(P,2),j=S[0],Z=S[1],O=se.ZP.useMessage(),T=w()(O,2),z=T[0],$=T[1],D=(0,te.q)(function(M){return M},ie.X),f=D.onLoadWorkflow,W=function(){var v;(v=p.current)===null||v===void 0||v.scrollIntoView({behavior:"smooth"})};(0,s.useEffect)(function(){W()},[u]);var B=(0,s.useCallback)(function(){var M=me()(q()().mark(function v(R){return q()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,f(R);case 2:z.success("Success! Workflow have been loaded.");case 3:case"end":return H.stop()}},v)}));return function(v){return M.apply(this,arguments)}}(),[z,f]),U=function(v){v.key==="Enter"&&!v.shiftKey&&(v.preventDefault(),Q())},Q=(0,s.useCallback)(me()(q()().mark(function M(){var v,R,E,H,K,L,G,ee,fe,xe;return q()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(v=i.trim(),!(!v||j)){A.next=3;break}return A.abrupt("return");case 3:if(R={content:[k()({text:v},d!=="query"?{command:"/".concat(d)}:{})],sender:"user"},c(R),x(""),Z(!0),A.prev=7,console.log("Sending message to server:",v),console.log("Selected mode:",d),d!=="generate"){A.next=16;break}return A.next=13,ye.Z.post("http://localhost:6969/gen-workflow",{query:v,command:"generate"});case 13:E=A.sent,A.next=19;break;case 16:return A.next=18,ye.Z.post("http://localhost:6969/completion",{query:v,command:"query"});case 18:E=A.sent;case 19:H=E,K=H.data,L=K.type,G=K.data,console.log("Response from server:",K),L==="query"?G.num>0?ee=G.data.map(function(Y){return{text:Y.description,name:Y.name,metadata:Y.metadata}}):ee=[{text:"No workflow found."}]:L==="generate"&&(G.num>0?ee=G.data.map(function(Y){return{text:Y.description,name:Y.name,metadata:Y.metadata}}):ee=[{text:"No workflow generated."}]),fe={content:ee,sender:"bot"},c(fe),A.next=31;break;case 27:A.prev=27,A.t0=A.catch(7),xe={content:[{text:"Failed to get a response from the server."}],sender:"bot"},c(xe);case 31:return A.prev=31,Z(!1),A.finish(31);case 34:case"end":return A.stop()}},M,null,[[7,27,31,34]])})),[i,d,c,j]),re=[{key:"query",label:(0,n.jsxs)(oe.Z,{children:[(0,n.jsx)(de.Z,{style:{color:"#1890ff"}}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{fontWeight:500,color:"#1890ff"},children:"Search"}),(0,n.jsx)("div",{style:{fontSize:"12px",color:"#8c8c8c"},children:"Access to desired workflow"})]})]})},{key:"generate",label:(0,n.jsxs)(oe.Z,{children:[(0,n.jsx)(ve.Z,{style:{color:"#52c41a"}}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{fontWeight:500,color:"#52c41a"},children:"Generate"}),(0,n.jsx)("div",{style:{fontSize:"12px",color:"#8c8c8c"},children:"Turn your ideas into reality"})]})]})}],_=function(v){var R=v.key;g(R)};return(0,n.jsxs)(n.Fragment,{children:[$,(0,n.jsxs)(ct,{children:[(0,n.jsxs)(ut,{children:[(0,n.jsx)(qe.Z,{dataSource:u,renderItem:function(v,R){return!v.content||!Array.isArray(v.content)?(console.error("Invalid message at index ".concat(R,":"),v),null):(0,n.jsxs)(qe.Z.Item,{style:{display:"flex",justifyContent:v.sender==="user"?"flex-end":"flex-start",alignItems:"flex-start",border:"none",width:"100%",padding:"8px 4px",gap:"12px",maxWidth:"100%"},children:[v.sender==="bot"&&(0,n.jsx)(Ne.Z,{width:36,height:36,preview:!1,src:it||"/placeholder.svg",alt:"Bot Icon",style:{borderRadius:"50%",flexShrink:0}}),(0,n.jsx)(mt,{$sender:v.sender,$token:a,children:v.content.map(function(E,H){return(0,n.jsxs)("div",{children:["command"in E&&E.command?(0,n.jsx)(rt.Z,{color:E.command==="/generate"?"green":"blue",style:{marginBottom:8,fontWeight:600,borderRadius:6,fontSize:"0.85em"},children:E.command==="/generate"?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ve.Z,{style:{marginRight:4}}),"Generate"]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(de.Z,{style:{marginRight:4}}),"Search"]})}):null,E.name&&(0,n.jsx)(Ct,{strong:!0,style:{display:"block",marginBottom:4,fontSize:"1.05em"},children:E.name}),(0,n.jsx)("div",{style:{lineHeight:1.6},children:E.text}),E.metadata&&(0,n.jsx)(st.Z,{title:"Click to import workflow",placement:"right",children:(0,n.jsxs)(pt,{$token:a,onClick:function(){return B(E.metadata)},children:[(0,n.jsx)(tt.Z,{style:{marginRight:6}}),"Import: ",E.name]})})]},"content-".concat(R,"-").concat(H))})})]})}}),(0,n.jsx)("div",{ref:p})]}),(0,n.jsxs)(gt,{$token:a,children:[(0,n.jsxs)(ht,{$token:a,$mode:d,children:[d==="generate"?(0,n.jsx)(ve.Z,{}):(0,n.jsx)(de.Z,{}),(0,n.jsxs)("span",{children:[d==="generate"?"Generate Mode":"Search Mode"," -",d==="generate"?" Turn your ideas into reality":" Access to desired workflow"]})]}),(0,n.jsx)(vt,{$token:a,value:i,onChange:function(v){return x(v.target.value)},placeholder:d==="generate"?"Describe the workflow you want to create...":"What type of workflow are you looking for?",onKeyDown:U,disabled:j,autoSize:{minRows:2,maxRows:6}}),(0,n.jsxs)(ft,{$token:a,children:[(0,n.jsx)(pe.Z,{menu:{items:re,onClick:_},trigger:["click"],placement:"topLeft",children:(0,n.jsx)(xt,{$mode:d,type:"default",size:"small",children:(0,n.jsxs)(oe.Z,{size:4,children:[d==="generate"?(0,n.jsx)(ve.Z,{}):(0,n.jsx)(de.Z,{}),(0,n.jsx)("span",{children:d==="generate"?"Generate":"Search"}),(0,n.jsx)(Ze.Z,{style:{fontSize:"10px"}})]})})}),(0,n.jsx)(J.ZP,{icon:(0,n.jsx)(ot.Z,{}),type:"primary",onClick:Q,loading:j,disabled:!i.trim()||j,children:j?"Sending...":"Send"})]})]})]})]})},St=s.memo(bt),yt=o(335),Pt=o.n(yt),jt=o(8772),Ae=o(1012),ce=o(4231),Dt=N.ZP.div.withConfig({componentId:"sc-1mc9338-0"})(["margin-top:6px;background:",";"],function(e){var t=e.isRequired,r=e.theme;return t?r.colorPrimary:r.colorBorder}),At=function(t){var r=t.data,a=(0,s.useMemo)(function(){return r.output.map(function(m){return{name:m,type:m}})},[r.output]),l=(0,s.useMemo)(function(){var m=[],i=[];return Object.entries(r.input.required).forEach(function(x){var C=w()(x,2),b=C[0],d=C[1];jt.l.isParameterOrList(d)?m.push({name:b,type:d[0],input:d}):i.push({name:b,type:d[0]})}),[m,i]},[r.input.required]),u=w()(l,2),c=u[0],p=u[1],y=(0,s.useCallback)(function(m){var i=m.item,x=m.position,C=m.isRequired;return(0,n.jsxs)("h5",{children:[(0,n.jsx)(Dt,{className:"react-flow__handle",style:he()({},x,-3),isRequired:C}),(0,Ae.Z)(i.name)]})},[]);return(0,n.jsxs)(ce.OE,{size:"small",title:r.name,active:0,style:{minWidth:240},children:[(0,n.jsxs)(ce.VA,{children:[(0,n.jsx)(ce.zw,{children:p.map(function(m,i){return(0,n.jsx)(y,{item:m,position:"left",isRequired:1},i)})}),(0,n.jsx)(ce.zw,{style:{textAlign:"right"},children:a.map(function(m,i){return(0,n.jsx)(y,{item:m,position:"right",isRequired:1},i)})})]}),(0,n.jsx)(ce.zw,{children:c.map(function(m,i){return(0,n.jsx)(y,{item:m,position:"left",isRequired:0},i)})})]})},_e=s.memo(At),It=o(8239),Et=o(8865),Ie=o(9629),en,nn,tn,on,wt=(0,h.kc)(function(e,t){var r=e.token,a=e.stylish,l=t.prefixCls,u=t.className,c=t.showPanel;return{container:(0,h.cx)(l,u,c?(0,h.iv)(en||(en=I()([`
            margin-bottom: 8px;
            padding: 6px 8px 12px 8px;
            background: `,`;
            border-radius: 4px;
          `])),r.colorFillQuaternary):""),header:(0,h.cx)(c?"".concat(l,"-expand"):"".concat(l,"-collapsed"),c?"":(0,h.iv)(nn||(nn=I()([`
            user-select: none;
            padding: 6px 8px;
            border-radius: 4px;
            `,`
          `])),a.containerBgL2)),title:(0,h.cx)((0,h.iv)(tn||(tn=I()([`
        height: 24px;
      `]))),c?(0,h.iv)(on||(on=I()([`
            user-select: none;
            margin-left: -4px;
            padding: 4px;
            border-radius: 4px;

            `,`
          `])),a.containerBgHover):"")}}),kt=function(t){var r=t.defaultExpand,a=r===void 0?!1:r,l=t.expand,u=t.onExpandChange,c=t.prefixCls,p=t.title,y=t.children,m=t.className,i=t.extra,x=(0,je.k2)("collapse-title",c),C=(0,ze.Z)(a,{value:l,onChange:u}),b=w()(C,2),d=b[0],g=b[1],P=function(){g(!d)},S=wt({showPanel:d,prefixCls:x,className:m}),j=S.styles;return(0,n.jsx)(be.i,{children:(0,n.jsxs)(Ie.D,{className:j.container,children:[(0,n.jsxs)(Ie.D,{direction:"horizontal",distribution:"space-between",align:"center",className:j.header,onClick:d?void 0:P,children:[(0,n.jsxs)(Ie.D,{direction:"horizontal",gap:4,align:"center",onClick:d?P:void 0,className:j.title,children:[(0,n.jsx)(It.Z,{style:{fontSize:10},rotate:d?90:0}),(0,n.jsx)("div",{children:p})]}),i&&i(d)]}),d?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Et.Z,{style:{margin:"4px 0 12px"},dashed:!0}),y]}):null]})})},Mt=kt,Nt=o(3483),Ot="8px 4px",Tt=N.ZP.div.withConfig({componentId:"sc-fv8tvn-0"})(["cursor:pointer;padding:",";"],Ot),Rt=function(t){var r=t.cat,a=t.data,l=t.onAddNode,u=t.globalExpand,c=t.cardView,p=(0,s.useState)(!0),y=w()(p,2),m=y[0],i=y[1];(0,s.useEffect)(function(){i(u)},[u]);var x=(0,s.useCallback)(function(g,P){g.dataTransfer.setData("application/reactflow",JSON.stringify(P)),g.dataTransfer.effectAllowed="move"},[]),C=(0,s.useCallback)(function(){return(0,n.jsx)("div",{children:a.map(function(g){return(0,n.jsx)(Tt,{draggable:!0,onDragStart:function(S){return x(S,g)},onClick:function(){return l({widget:g})},children:(0,n.jsx)(_e,{data:g})},g.name)})})},[a,x,l]),b=(0,s.useCallback)(function(){return(0,n.jsx)(oe.Z,{wrap:!0,align:"baseline",children:a.map(function(g){return(0,n.jsx)(Nt.Z,{content:(0,n.jsx)(_e,{data:g}),placement:"left",overlayStyle:{pointerEvents:"none"},destroyTooltipOnHide:!0,children:(0,n.jsx)(J.ZP,{onClick:function(){return l({widget:g})},draggable:!0,onDragStart:function(S){return x(S,g)},children:(0,Ae.Z)(g.name)})},g.name)})})},[a,x,l]),d=(0,s.useCallback)(function(g){i(g)},[]);return(0,n.jsx)(Mt,{title:(0,Ae.Z)(r),expand:m,onExpandChange:d,children:c?C():b()},r)},Zt=s.memo(Rt),zt=N.ZP.div.withConfig({componentId:"sc-e793qc-0"})(["display:flex;flex-direction:column;align-items:center;gap:8px;margin-bottom:8px;"]),Lt=N.ZP.div.withConfig({componentId:"sc-e793qc-1"})(["overflow:auto;flex:1;"]),po=ge.Z.Search,Wt=function(){var t=(0,te.q)(function(D){return D},ie.X),r=t.widgets,a=t.onAddNode,l=(0,s.useState)({}),u=w()(l,2),c=u[0],p=u[1],y=(0,s.useState)(""),m=w()(y,2),i=m[0],x=m[1],C=(0,s.useState)(!0),b=w()(C,2),d=b[0],g=b[1],P=(0,s.useState)(!1),S=w()(P,2),j=S[0],Z=S[1];(0,s.useEffect)(function(){var D={},f=Object.values(r);i&&(f=f.filter(function(Q){return Q.name.toLowerCase().includes(i.toLowerCase())}));var W=Pt()(f),B;try{for(W.s();!(B=W.n()).done;){var U=B.value;D[U.category]?D[U.category].push(U):D[U.category]=[U]}}catch(Q){W.e(Q)}finally{W.f()}p(D)},[r,i]);var O=(0,s.useCallback)(function(D){x(D.target.value)},[]),T=(0,s.useCallback)(function(){Z(function(D){return!D})},[]),z=(0,s.useCallback)(function(){g(!0)},[]),$=(0,s.useCallback)(function(){g(!1)},[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(zt,{children:(0,n.jsx)(ge.Z,{addonBefore:(0,n.jsx)(de.Z,{}),placeholder:"Input search text",onChange:O,style:{width:"100%"}})}),(0,n.jsx)(Lt,{children:Object.entries(c).map(function(D){var f=w()(D,2),W=f[0],B=f[1];return(0,n.jsx)(Zt,{data:B,cat:W,onAddNode:a,globalExpand:d,cardView:j},W)})})]})},Ht=s.memo(Wt),Ft=o(8788),an,Bt=(0,h.kc)(function(e){var t=e.token,r=e.prefixCls,a=e.css,l=e.stylish,u=".".concat(r,"-tabs");return{cls:a(an||(an=I()([`
      position: relative;

      display: flex;
      flex: 1;
      flex-direction: column;

      max-height: 100%;

      `,"-tab + ",`-tab {
        margin: 8px 4px !important;
        padding: 0 12px !important;
      }

      `,`-tab {
        color: `,`;
        transition: background-color 150ms ease-out;

        &:first-child {
          margin: 8px 4px 8px 0;
          padding: 4px 12px !important;
        }

        &:hover {
          color: `,` !important;
          background: `,`;
          border-radius: 4px;
        }
      }

      `,`-nav {
        position: relative;
        z-index: 10;

        flex: none;

        width: 100%;
        height: 46px;
        margin: 0;
        padding: 0 12px;

        `,`;
      }

      `,`-content {
        height: 100%;
      }

      `,`-tabpane-active {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      `,`-content-holder {
        overflow-y: auto;
        flex: 1;
        padding: 8px 12px;
      }
    `])),u,u,u,t.colorTextSecondary,t.colorText,t.colorFillTertiary,u,l.backgroundBlur,u,u,u)}}),Ut=function(t){var r=Bt(),a=r.styles,l=r.cx;return(0,n.jsx)(be.i,{children:(0,n.jsx)(Ft.Z,k()(k()({},t),{},{className:l(t.className,a.cls)}))})},ae=function(e){return e.NODES="Nodes",e.CHATBOT="Flow Pilot",e}(ae||{}),$t=N.ZP.div.withConfig({componentId:"sc-2jub1t-0"})(["display:flex;flex-direction:column;height:100%;"]),Gt=function(){var t=(0,s.useMemo)(function(){return[{label:ae.CHATBOT,key:ae.CHATBOT,children:(0,n.jsx)(St,{})},{label:ae.NODES,key:ae.NODES,children:(0,n.jsx)(Ht,{})}]},[]);return(0,n.jsx)($t,{children:(0,n.jsx)(Ut,{defaultActiveKey:ae.CHATBOT,items:t})})},Vt=s.memo(Gt),Qt=o(8775),go=o(3569),Kt=o(5791),Xt=o(1503),rn,Jt=(0,h.vJ)(rn||(rn=I()([`
  body {
    color: `,`;
    background: `,`;
  }

  div {
    user-select: none;
  }

  code,.react-json-view {
    font-family: 'Hack', 'IBM Plex Mono', 'ui-monospace', 'Consolas', monospace !important;
  }

  .react-flow__node[type="Group"] {
    pointer-events: none !important;
    z-index: -1 !important;
  }

  .react-flow__handle {
    width: 8px;
    height: 8px;
    border-radius: 4px;
  }

  .ant-card[type="Reroute"] .react-flow__handle {
    margin-top: 0;
  }


  .react-json-view {
    background: transparent !important;
  }

    /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: `,`;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background:  `,`;
  }




  .react-flow__handle-connecting {
    background: `,` !important;
  }

  .react-flow__handle-valid {
    background: `,` !important;
  }

  .react-flow__minimap-mask {
    fill: `,`;
  }

  .react-flow__minimap {
    overflow: hidden;

    height: 150px;

    background: `,`;
    /* backdrop-filter: blur(24px); */
    border: 1px solid `,`;
    border-radius: 4px;
    box-shadow: `,`;
  }

  .react-flow__minimap-node {
    opacity: .5;
  }

  .react-flow__attribution {
    display: none;
  }

  .react-flow__controls {
    border: 1px solid `,`;
    box-shadow: `,`;

    button {
      color: `,`;
      background-color: `,`;
      border-bottom: none;
      path {
        fill: currentColor;
      }
    }

    button + button {
      border-top: 1px solid `,`;
    }

    button:hover {
      background-color: `,`;
    }
  }
`])),function(e){var t=e.theme;return t.colorTextBase},function(e){var t=e.theme;return t.colorBgBase},function(e){var t=e.theme;return t.colorBorderSecondary},function(e){var t=e.theme;return t.colorBorder},function(e){var t=e.theme;return t.colorError},function(e){var t=e.theme;return t.colorSuccess},function(e){var t=e.theme;return t.colorBgMask},function(e){var t=e.theme;return(0,Xt.m4)(t.colorBgContainer,.8)},function(e){var t=e.theme;return t.colorBorderSecondary},function(e){var t=e.theme;return t.boxShadowTertiary},function(e){var t=e.theme;return t.colorBorder},function(e){var t=e.theme;return t.boxShadow},function(e){var t=e.theme;return t.colorTextBase},function(e){var t=e.theme;return t.colorBgElevated},function(e){var t=e.theme;return t.colorBorder},function(e){var t=e.theme;return t.colorBgSpotlight}),Yt=Jt,qt=o(9395),_t=o(5199),eo="ws://".concat(qt.Z.host,"/ws"),no=function(){var t=(0,te.q)(function(m){var i;return k()(k()({},m),{},{nodeIdInProgress:(i=m.nodeInProgress)===null||i===void 0?void 0:i.id})},ie.X),r=t.clientId,a=t.nodeIdInProgress,l=t.onNewClientId,u=t.onQueueUpdate,c=t.onNodeInProgress,p=t.onImageSave,y=(0,s.useCallback)(function(m){var i=JSON.parse(m.data),x={status:function(){i.data.sid!==void 0&&i.data.sid!==r&&l(i.data.sid),u()},executing:function(){i.data.node!==void 0?c(i.data.node,0):a!==void 0&&c(a,0)},progress:function(){a!==void 0&&c(a,i.data.value/i.data.max)},executed:function(){var g=i.data.output.images;Array.isArray(g)&&p(i.data.node,g)}},C=i.type,b=x[C];b&&b()},[r,a,l,u,c,p]);return(0,_t.useWebSocket)(eo,{onMessage:y,shouldReconnect:function(i){return!0},reconnectAttempts:10,reconnectInterval:5e3}),null},to=s.memo(no),oo=N.ZP.div.withConfig({componentId:"sc-1k2gi0p-0"})(["display:flex;width:100vw;height:100vh;"]),ao=function(){return(0,n.jsxs)(be.i,{children:[(0,n.jsxs)(oo,{children:[(0,n.jsxs)(Qt.Z,{children:[(0,n.jsx)(Wn,{}),(0,n.jsx)(Kt.j3,{})]}),(0,n.jsx)(et,{children:(0,n.jsx)(Vt,{})})]}),(0,n.jsx)(Yt,{}),(0,n.jsx)(to,{})]})},ro=ao}}]);
