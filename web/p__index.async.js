"use strict";(self.webpackChunkgenerative_flow=self.webpackChunkgenerative_flow||[]).push([[866],{5875:function(me,N,n){n.r(N),n.d(N,{default:function(){return q}});var y=n(5910),P=n(228),E=n.n(P),R=n(7999),Z=n.n(R),x=n(6068),S=n.n(x),O=n(8305),F=n.n(O),U=n(5762),D=n(5180),G=n(8429),r=n(959),m=n(2508),I=n(8200),l=n(1527),L={sdNode:U.Z},V=function(){var c=(0,r.useRef)(null),u=navigator.platform.includes("Win"),f=(0,r.useRef)(!0),v=(0,r.useState)(null),p=F()(v,2),d=p[0],_=p[1],t=(0,y.q)(function(e){return S()(S()({},e),{},{onEdgesChange:(0,G.Z)(e.onEdgesChange,16),onNodesChange:(0,G.Z)(e.onNodesChange,16)})},I.X),ee=t.nodes,ne=t.edges,oe=t.onInit,ae=t.onNodesChange,h=t.onEdgesChange,w=t.onConnect,re=t.onAddNode,te=t.onCopyNode,le=t.onPasteNode,se=t.onSetNodesGroup,de=t.onDeleteNode,ie=t.onCreateGroup,ce=(0,r.useCallback)(function(){f.current=!1},[]),ue=(0,r.useCallback)(function(e,o){f.current=!0,h([{id:e.id,type:"remove"}]),w(o)},[]),ge=(0,r.useCallback)(function(e,o){f.current||h([{id:o.id,type:"remove"}]),f.current=!0},[]),fe=(0,r.useCallback)(function(e){e.preventDefault(),e.dataTransfer.dropEffect="move"},[]),ve=(0,r.useCallback)(function(e){e.preventDefault();var o=JSON.parse(e.dataTransfer.getData("application/reactflow"));if(o){var i=(0,D.yY)(e.clientX,e.clientY,d);re({widget:o,position:i})}},[d]),K=(0,r.useCallback)(function(e,o,i){if(console.log("[Drag]",o,i),console.log("node length",i.length),console.log("node name",o.data.name),i.length>2||o.data.name!=="Group"){console.log("Skipping due to condition");return}console.log("[Drag123]",o,i);var g=d.getIntersectingNodes(o).filter(function(a){return console.log(a),a.data.name!=="Group"&&(a.parentId===o.id||!a.parentId)}).map(function(a){return a.id});se(g,o)},[d]),pe=(0,r.useCallback)(function(){var e=te();navigator.clipboard.writeText(JSON.stringify(e)),console.log("[Copy]",e)},[]),ye=(0,r.useCallback)(function(){var e=Z()(E()().mark(function o(i){var g,a,C;return E()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,navigator.clipboard.readText();case 3:g=s.sent,a=JSON.parse(g),C=(0,D.rf)(c,i),a&&le(a,C),console.log("[Paste]",a,C),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(0),console.log("[Paste]",s.t0);case 13:case"end":return s.stop()}},o,null,[[0,10]])}));return function(o){return e.apply(this,arguments)}}(),[]),A=(0,r.useCallback)(function(e){var o=e.metaKey||e.ctrlKey&&!e.altKey,i={KeyC:function(){return pe()},KeyV:function(){return ye(d)},KeyG:function(){return ie()}};if(o){var g=i[e.code];g&&g()}else(e.code==="Delete"||e.code==="Backspace")&&d.getNodes().forEach(function(a){return a.selected&&de(a.id)})},[d]);return(0,r.useEffect)(function(){return window.addEventListener("keydown",A),function(){window.removeEventListener("keydown",A)}},[d]),(0,l.jsxs)(m.x$,{onlyRenderVisibleElements:!0,nodes:ee,edges:ne,nodeTypes:L,ref:c,fitView:!0,snapToGrid:!0,snapGrid:[50,50],minZoom:.05,multiSelectionKeyCode:["Shift"],deleteKeyCode:[],panOnScroll:!u,zoomOnScroll:u,disableKeyboardA11y:!0,onNodesChange:ae,onEdgesChange:h,onReconnect:ue,onReconnectStart:ce,onReconnectEnd:ge,onConnect:w,onNodeDragStop:K,onNodeDragStart:K,onDrop:ve,onDragOver:fe,onInit:function(o){_(o),oe()},children:[(0,l.jsx)(m.Aq,{}),(0,l.jsx)(m.ZX,{})]})},X=r.memo(V),Y=n(520),z=n(4565),T=n(2473),J=n(6597),M=n(7467),b=n(7298),W="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",$="Nothing here yet!",B=b.ZP.div.withConfig({componentId:"sc-7tw5r0-0"})(["display:flex;flex-wrap:wrap;"]),H=function(){var c=(0,y.q)(function(v){return v},I.X),u=c.gallery,f=(0,r.useCallback)(function(v){var p=v.image,d=(0,z.l9)(M.Z.stringifyUrl({url:"/view",query:p}));return(0,l.jsx)(T.Z,{src:d,fallback:Y.z2,width:125,height:125},p.filename)},[]);return(0,l.jsx)(T.Z.PreviewGroup,{children:u.length?(0,l.jsx)(B,{children:u.map(f)}):(0,l.jsx)(J.Z,{style:{marginTop:"40vh"},image:W,description:$})})},Q=r.memo(H),k=function(){var c=(0,y.q)(function(u){return u.page});return(0,l.jsxs)(l.Fragment,{children:[c==="flow"&&(0,l.jsx)(X,{}),c==="gallery"&&(0,l.jsx)(Q,{})]})},q=k}}]);
