/*! For license information please see 9538.26866174.chunk.js.LICENSE.txt */
(self.webpackChunkidle_dashboard_new=self.webpackChunkidle_dashboard_new||[]).push([[9538,1617,4447,5349,7413],{61617:function(e,n,t){"use strict";t.r(n),t.d(n,{AssetLabel:function(){return d}});var r=t(1413),i=t(45987),a=t(3498),l=t(75712),s=t(45263),o=["assetId","size","spacing"],d=function(e){var n=e.assetId,t=e.size,d=void 0===t?"sm":t,c=e.spacing,u=(0,i.Z)(e,o);return(0,s.jsx)(l.AssetProvider,{wrapFlex:!1,assetId:n,children:(0,s.jsxs)(a.Ug,{spacing:c,alignItems:"center",justifyContent:"flex-start",children:[(0,s.jsx)(l.AssetProvider.Icon,{size:d}),(0,s.jsx)(l.AssetProvider.Name,(0,r.Z)({textStyle:"heading",fontSize:["15px","h3"],whiteSpace:"nowrap"},u))]})})}},54447:function(e,n,t){"use strict";t.r(n),t.d(n,{Card:function(){return p},CardFlex:function(){return v},Dark:function(){return x},Light:function(){return h},Outline:function(){return y}});var r=t(1413),i=t(45987),a=t(3498),l=t(45263),s=["children"],o=["children","layerStyle"],d=["children","layerStyle"],c=["children"],u=["children"],f=["children"],p=function(e){var n=e.children,t=e.layerStyle,s=(0,i.Z)(e,o);return(0,l.jsx)(a.xu,(0,r.Z)((0,r.Z)({width:"100%",position:"relative",layerStyle:t||"card"},s),{},{children:n}))},v=function(e){var n=e.children,t=e.layerStyle,s=(0,i.Z)(e,d);return(0,l.jsx)(a.kC,(0,r.Z)((0,r.Z)({width:"100%",layerStyle:t||"card"},s),{},{children:n}))},x=function(e){var n=e.children,t=(0,i.Z)(e,c),a=["cardDark"].concat(e.layerStyle);return(0,l.jsx)(p,(0,r.Z)((0,r.Z)({},t),{},{layerStyle:a,children:n}))},h=function(e){var n=e.children,t=(0,i.Z)(e,u),a=["cardLight"].concat(e.layerStyle);return(0,l.jsx)(p,(0,r.Z)((0,r.Z)({},t),{},{layerStyle:a,children:n}))},y=function(e){var n=e.children,t=(0,i.Z)(e,f),a=["cardOutline"].concat(e.layerStyle);return(0,l.jsx)(p,(0,r.Z)((0,r.Z)({},t),{},{layerStyle:a,children:n}))};p.Dark=x,p.Light=h,p.Flex=v,p.Outline=y,p.Heading=function(e){var n=e.children,t=(0,i.Z)(e,s);return(0,l.jsx)(a.X6,(0,r.Z)((0,r.Z)({as:"h3",size:"md",mb:6},t),{},{children:n}))}},75349:function(e,n,t){"use strict";t.r(n),t.d(n,{VaultCard:function(){return h}});var r=t(1413),i=t(45987),a=t(7276),l=t(95173),s=t(54447),o=t(61617),d=t(15542),c=t(85267),u=t(1669),f=t(75712),p=t(3498),v=t(45263),x=["assetId","fields","onClick"],h=function(e){var n=e.assetId,t=(0,l.s0)(),r=(0,c.m)().location,i=(0,u.w)().selectors.selectAssetById,x=(0,a.useMemo)((function(){if(i)return i(n)}),[n,i]),h=(0,a.useMemo)((function(){var e;return null!==x&&void 0!==x&&null!==(e=x.vaultPosition)&&void 0!==e&&e.usd.deposited?(0,v.jsxs)(p.gC,{spacing:1,alignItems:"flex-start",children:[(0,v.jsx)(d.Translation,{translation:"defi.deposited",textStyle:"captionSmall"}),(0,v.jsx)(f.AssetProvider.DepositedUsd,{textStyle:"tableCell"})]}):"BY"===(null===x||void 0===x?void 0:x.type)?(0,v.jsxs)(p.gC,{spacing:1,alignItems:"flex-start",children:[(0,v.jsx)(d.Translation,{translation:"defi.protocols",textStyle:"captionSmall"}),(0,v.jsx)(f.AssetProvider.Protocols,{iconMargin:-1,size:"xs"})]}):(0,v.jsxs)(p.gC,{spacing:1,alignItems:"flex-start",children:[(0,v.jsx)(d.Translation,{translation:"defi.rewards",textStyle:"captionSmall"}),(0,v.jsx)(f.AssetProvider.Rewards,{iconMargin:-1,size:"xs"})]})}),[x]);return(0,v.jsx)(f.AssetProvider,{wrapFlex:!1,assetId:n,children:(0,v.jsx)(s.Card,{p:4,onClick:function(){return t("".concat(null===r||void 0===r?void 0:r.pathname,"/").concat(n))},children:(0,v.jsxs)(p.gC,{spacing:3,alignItems:"flex-start",children:[(0,v.jsx)(o.AssetLabel,{assetId:n,size:"sm"}),(0,v.jsxs)(p.MI,{pt:3,pl:4,columns:3,width:"100%",borderTop:"1px solid",borderTopColor:"divider",children:[(0,v.jsxs)(p.gC,{spacing:1,alignItems:"flex-start",children:[(0,v.jsx)(d.Translation,{translation:"defi.pool",textStyle:"captionSmall"}),(0,v.jsx)(f.AssetProvider.PoolUsd,{textStyle:"tableCell"})]}),(0,v.jsxs)(p.gC,{spacing:1,alignItems:"flex-start",children:[(0,v.jsx)(d.Translation,{translation:"defi.apy",textStyle:"captionSmall"}),(0,v.jsx)(f.AssetProvider.Apy,{textStyle:"tableCell"})]}),h]})]})})})};h.Inline=function(e){var n=e.assetId,t=e.fields,l=e.onClick,o=(0,i.Z)(e,x);return(0,v.jsx)(f.AssetProvider,{wrapFlex:!1,assetId:n,children:(0,v.jsx)(s.Card,(0,r.Z)((0,r.Z)({py:2,px:[4,6],layerStyle:["card","cardHover"],onClick:l},o),{},{children:(0,v.jsx)(p.Ug,{width:"100%",justifyContent:"space-between",children:(0,v.jsxs)(p.Ug,{spacing:3,width:"100%",alignItems:"center",children:[(0,v.jsx)(f.AssetProvider.Icon,{size:"xs"}),t.map((function(e,n){return(0,v.jsxs)(a.Fragment,{children:[(0,v.jsx)(p.xu,{width:1,height:1,bg:"divider",borderRadius:"50%"}),(0,v.jsxs)(p.Ug,{spacing:2,children:[(0,v.jsx)(d.Translation,{translation:e.label,component:p.xv,textStyle:"captionSmall"}),(0,v.jsx)(f.AssetProvider.GeneralData,(0,r.Z)({field:e.field,textStyle:"tableCell"},e.props))]})]},"field_".concat(n))}))]})})}))})}},39538:function(e,n,t){"use strict";t.r(n),t.d(n,{VaultsCarousel:function(){return f}});t(37413),t(7276);var r=t(10604),i=t(3498),a=t(95173),l=t(12056),s=t(99594),o=t(66288),d=t(75349),c=t(1669),u=t(45263),f=function(){var e=(0,a.s0)(),n=(0,o.X)().isMobile,t=(0,c.w)(),f=t.vaults;return t.isPortfolioLoaded?(0,u.jsx)(i.Ug,{left:0,zIndex:1,spacing:2,width:"100%",overflow:"hidden",position:"absolute",top:["90px","110px"],children:(0,u.jsx)(r.Z,{gradient:!1,pauseOnHover:!0,speed:n?40:50,children:(0,u.jsx)(i.Ug,{ml:2,spacing:2,children:f.map((function(n){var t=l.A[n.type];if(!t||!t.route)return null;var r=(0,s.qC)("earn",[t.route]);return(0,u.jsx)(d.VaultCard.Inline,{onClick:function(){return e("".concat(r,"/").concat(n.id))},assetId:"".concat(n.id),fields:[{label:"defi.tvl",field:"tvl"},{label:"defi.apy",field:"apy",props:{color:t.color}}]},"vault_".concat(n.id))}))})})}):null}},10604:function(e,n,t){var r=t(7276);function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var a=i(r),l=function(){return l=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},l.apply(this,arguments)};!function(e){if(e&&"undefined"!==typeof window){var n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n)}}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');n.Z=function(e){var n,t,i,s,o=e.style,d=void 0===o?{}:o,c=e.className,u=void 0===c?"":c,f=e.play,p=void 0===f||f,v=e.pauseOnHover,x=void 0!==v&&v,h=e.pauseOnClick,y=void 0!==h&&h,m=e.direction,g=void 0===m?"left":m,j=e.speed,w=void 0===j?20:j,C=e.delay,S=void 0===C?0:C,b=e.loop,Z=void 0===b?0:b,I=e.gradient,A=void 0===I||I,k=e.gradientColor,P=void 0===k?[255,255,255]:k,z=e.gradientWidth,E=void 0===z?200:z,L=e.onFinish,O=e.onCycleComplete,T=e.children,q=r.useState(0),F=q[0],U=q[1],M=r.useState(0),N=M[0],R=M[1],_=r.useState(!1),D=_[0],H=_[1],B=r.useRef(null),X=r.useRef(null);r.useEffect((function(){if(D){var e=function(){X.current&&B.current&&(U(B.current.getBoundingClientRect().width),R(X.current.getBoundingClientRect().width))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[D]),r.useEffect((function(){H(!0)}),[]);var V="rgba("+P[0]+", "+P[1]+", "+P[2],G=N<F?F/w:N/w;return a.default.createElement(r.Fragment,null,D?a.default.createElement("div",{ref:B,style:l(l({},d),(n={},n["--pause-on-hover"]=!p||x?"paused":"running",n["--pause-on-click"]=!p||x&&!y||y?"paused":"running",n)),className:u+" marquee-container"},A&&a.default.createElement("div",{style:(t={},t["--gradient-color"]=V+", 1), "+V+", 0)",t["--gradient-width"]="number"===typeof E?E+"px":E,t),className:"overlay"}),a.default.createElement("div",{ref:X,style:(i={},i["--play"]=p?"running":"paused",i["--direction"]="left"===g?"normal":"reverse",i["--duration"]=G+"s",i["--delay"]=S+"s",i["--iteration-count"]=Z?""+Z:"infinite",i),className:"marquee",onAnimationIteration:O,onAnimationEnd:L},T),a.default.createElement("div",{style:(s={},s["--play"]=p?"running":"paused",s["--direction"]="left"===g?"normal":"reverse",s["--duration"]=G+"s",s["--delay"]=S+"s",s["--iteration-count"]=Z?""+Z:"infinite",s),className:"marquee","aria-hidden":"true"},T)):null)}},37413:function(e,n,t){"use strict";t.r(n),n.default={}}}]);