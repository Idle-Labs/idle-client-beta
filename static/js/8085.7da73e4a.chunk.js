"use strict";(self.webpackChunkidle_dashboard_new=self.webpackChunkidle_dashboard_new||[]).push([[8085,1407,1608],{3148:function(t,e,n){n.r(e),n.d(e,{AssetGeneralData:function(){return p}});var a=n(7276),i=n(55967),s=n(54447),r=n(79681),o=n(15542),l=n(92505),c=n(12056),d=n(7386),u=n(6940),f=n(96699),x=n(3498),m=n(70820),g=n(45263),v=function(t){var e=t.generalData,n=(0,f.Fg)(),a=(0,r.qM)();return e.tooltip?(0,g.jsxs)(x.Ug,{spacing:1,alignItems:"center",children:[(0,g.jsx)(o.Translation,{component:x.xv,translation:e.label,textStyle:"captionSmall"}),(0,g.jsx)(m.u,{hasArrow:!0,placement:"top",label:a(e.tooltip),children:(0,g.jsx)(u.TooltipContent,{children:(0,g.jsx)(i.I5p,{color:n.colors.cta,size:16})})})]}):(0,g.jsx)(o.Translation,{component:x.xv,translation:e.label,textStyle:"captionSmall"})},p=function(t){var e=t.assetId,n=(0,l.w)().selectors.selectAssetById,i=(0,a.useMemo)((function(){return n&&n(e)}),[n,e]),r=(0,a.useMemo)((function(){return(null===i||void 0===i?void 0:i.type)&&c.A[i.type]}),[i]);return(0,g.jsx)(d.AssetProvider,{wrapFlex:!1,assetId:e,children:(0,g.jsxs)(s.Card.Dark,{children:[(0,g.jsx)(x.MI,{spacing:[6,0],columns:[2,Math.min(null===r||void 0===r?void 0:r.generalDataFields.length,5)],children:(null===r||void 0===r?void 0:r.generalDataFields)&&(null===r||void 0===r?void 0:r.generalDataFields.slice(0,5).map((function(t){return(0,g.jsxs)(x.gC,{spacing:2,alignItems:"flex-start",justifyContent:"flex-start",children:[(0,g.jsx)(v,{generalData:t}),(0,g.jsx)(d.AssetProvider.GeneralData,{section:"asset",field:t.field})]},"field_".concat(t.field))})))}),(null===r||void 0===r?void 0:r.generalDataFields)&&(null===r||void 0===r?void 0:r.generalDataFields.length)>5&&(0,g.jsx)(x.MI,{pt:6,mt:6,spacing:[6,0],columns:[2,Math.min(null===r||void 0===r?void 0:r.generalDataFields.length,5)],borderTop:"1px solid",borderTopColor:"divider",children:null===r||void 0===r?void 0:r.generalDataFields.slice(5).map((function(t){return(0,g.jsxs)(x.gC,{spacing:2,alignItems:"flex-start",justifyContent:"flex-start",children:[(0,g.jsx)(v,{generalData:t}),(0,g.jsx)(d.AssetProvider.GeneralData,{section:"asset",field:t.field})]},"field_".concat(t.field))}))})]})})}},16120:function(t,e,n){n.r(e),n.d(e,{GaugeStaking:function(){return p}});var a=n(41273),i=n(86510),s=n(54447),r=n(7276),o=n(86059),l=n(15542),c=n(92505),d=n(85267),u=n(7386),f=n(3148),x=n(72258),m=n(3498),g=n(30422),v=n(45263),p=function(){var t,e,n,p,h,j=(0,d.m)().params,y=(0,c.w)().selectors,S=y.selectAssetById,C=y.selectVaultGauge,w=(0,r.useMemo)((function(){return S&&S(j.asset)}),[S,j.asset]),b=(0,r.useMemo)((function(){return w&&C&&C(w.id)}),[C,w]),I=(0,r.useMemo)((function(){return S&&b&&S(b.id)}),[b,S]),T=(0,r.useMemo)((function(){return Object.keys(a.A2).find((function(t){return a.A2[t].route===j.strategy}))}),[j]),M=(0,r.useMemo)((function(){return T&&a.A2[T].color}),[T]),A=(0,r.useMemo)((function(){if(!b)return null;var t=a.A2[b.type];return null!==t&&void 0!==t&&t.carouselItems?(0,v.jsx)(g.StrategyDescriptionCarousel,{color:M,strategy:b.type,delay:1e4}):null}),[b,M]),D=(0,r.useMemo)((function(){var t;return(null===I||void 0===I?void 0:I.vaultPosition)&&(0,i.gA)(null===I||void 0===I||null===(t=I.vaultPosition)||void 0===t?void 0:t.underlying.redeemable).div(I.totalSupply)}),[I]);return(0,v.jsxs)(m.gC,{spacing:10,width:"100%",children:[I.vaultPosition&&(0,v.jsx)(u.AssetProvider,{wrapFlex:!1,assetId:b.id,children:(0,v.jsxs)(m.MI,{width:"100%",columns:[2,4],spacing:[10,14],alignItems:"flex-start",children:[(0,v.jsxs)(m.gC,{spacing:2,justifyContent:"center",children:[(0,v.jsx)(l.Translation,{component:m.xv,translation:"defi.deposited",textStyle:"titleSmall"}),(0,v.jsxs)(m.Ug,{spacing:1,alignItems:"baseline",children:[(0,v.jsx)(u.AssetProvider.Deposited,{textStyle:"heading",fontSize:"h3"}),(0,v.jsx)(u.AssetProvider.Name,{textStyle:"heading",fontSize:"h3"})]})]}),(0,v.jsxs)(m.gC,{spacing:2,justifyContent:"center",children:[(0,v.jsx)(l.Translation,{component:m.xv,translation:"defi.share",textStyle:"titleSmall"}),(0,v.jsx)(u.AssetProvider.GaugeShare,{minValue:.01,textStyle:"heading",fontSize:"h3"})]}),(0,v.jsxs)(m.gC,{spacing:2,justifyContent:"center",children:[(0,v.jsx)(l.Translation,{component:m.xv,translation:"defi.idleDistribution",textStyle:"titleSmall"}),(0,v.jsxs)(m.Ug,{spacing:1,alignItems:"baseline",children:[(0,v.jsx)(u.AssetProvider.GaugeUserDistribution,{suffix:" ".concat(null===(t=b.rewardToken)||void 0===t?void 0:t.token),textStyle:"heading",fontSize:"h3"}),(0,v.jsx)(l.Translation,{component:m.xv,translation:["/","common.day"],textStyle:"captionSmall",textTransform:"lowercase"})]})]}),(0,v.jsxs)(m.gC,{spacing:2,justifyContent:"center",children:[(0,v.jsx)(l.Translation,{component:m.xv,translation:"defi.additionalRewards",textStyle:"titleSmall"}),(0,v.jsx)(m.gC,{spacing:2,children:(null===(e=b.multiRewardsTokens)||void 0===e?void 0:e.length)>0?Object.keys(null===(n=I.gaugeData)||void 0===n?void 0:n.rewards).map((function(t){var e=I.gaugeData.rewards[t];if(t===b.rewardToken.address)return null;var n=S(t);return(0,v.jsxs)(m.Ug,{spacing:1,alignItems:"baseline",children:[(0,v.jsx)(o.Amount,{value:e.rate.times(D),suffix:" ".concat(n.token),textStyle:"heading",fontSize:"h3"}),(0,v.jsx)(l.Translation,{component:m.xv,translation:["/","common.day"],textStyle:"captionSmall",textTransform:"lowercase"})]},"reward_".concat(t))})):(0,v.jsx)(m.xv,{textStyle:"heading",fontSize:"h3",children:"-"})})]})]})}),(0,v.jsxs)(m.gC,{spacing:6,width:"100%",alignItems:"flex-start",children:[(0,v.jsx)(l.Translation,{component:m.X6,as:"h3",size:"md",translation:"defi.rewards"}),(0,v.jsx)(m.gC,{spacing:4,width:"100%",children:(0,i.xb)(null===(p=I.gaugeData)||void 0===p?void 0:p.rewards)?null:Object.keys(null===(h=I.gaugeData)||void 0===h?void 0:h.rewards).map((function(t){var e=I.gaugeData.rewards[t],n=b.getClaimRewardsContractSendMethod(t);return(0,v.jsx)(u.AssetProvider,{wrapFlex:!1,assetId:t,children:(0,v.jsx)(s.Card,{p:6,px:8,width:"100%",children:(0,v.jsxs)(m.Kq,{width:"100%",spacing:[4,0],alignItems:"center",direction:["column","row"],justifyContent:"space-between",children:[(0,v.jsxs)(m.MI,{width:"100%",spacing:[6,0],columns:[2,4],children:[(0,v.jsxs)(m.gC,{spacing:2,alignItems:"flex-start",justifyContent:"flex-start",children:[(0,v.jsx)(l.Translation,{component:m.xv,translation:"defi.asset",textStyle:"captionSmall"}),(0,v.jsx)(u.AssetProvider.GeneralData,{size:"xs",field:"asset"})]}),(0,v.jsxs)(m.gC,{spacing:2,alignItems:"flex-start",justifyContent:"flex-start",children:[(0,v.jsx)(l.Translation,{component:m.xv,translation:"defi.apy",textStyle:"captionSmall"}),(0,v.jsx)(o.Amount.Percentage,{textStyle:"tableCell",value:e.apr})]}),(0,v.jsxs)(m.gC,{spacing:2,alignItems:"flex-start",justifyContent:"flex-start",children:[(0,v.jsx)(l.Translation,{component:m.xv,translation:"defi.dailyDistribution",textStyle:"captionSmall"}),(0,v.jsxs)(m.Ug,{spacing:1,width:"100%",children:[(0,v.jsx)(o.Amount,{textStyle:"tableCell",value:e.rate}),(0,v.jsx)(u.AssetProvider.Name,{textStyle:"tableCell"})]})]}),(0,v.jsxs)(m.gC,{spacing:2,alignItems:"flex-start",justifyContent:"flex-start",children:[(0,v.jsx)(l.Translation,{component:m.xv,translation:"defi.claimable",textStyle:"captionSmall"}),(0,v.jsxs)(m.Ug,{spacing:1,width:"100%",children:[(0,v.jsx)(o.Amount,{textStyle:"tableCell",value:e.balance}),(0,v.jsx)(u.AssetProvider.Name,{textStyle:"tableCell"})]})]})]}),(0,v.jsx)(x.TransactionButton,{text:"defi.claim",vaultId:w.id,assetId:t,contractSendMethod:n,actionType:"claim",amount:e.balance.toString(),width:["100%","150px"],disabled:e.balance.lte(0)})]})})},"reward_".concat(t))}))})]}),(0,v.jsx)(f.AssetGeneralData,{assetId:null===b||void 0===b?void 0:b.id}),A]})}},72258:function(t,e,n){n.r(e),n.d(e,{TransactionButton:function(){return j},TransactionButtonValue:function(){return h}});var a=n(1413),i=n(29439),s=n(44925),r=(n(81608),n(55967)),o=n(53293),l=n(7276),c=n(15542),d=n(23023),u=n(96699),f=n(52486),x=n(3498),m=n(43127),g=n(45263),v=["text","contractSendMethod"],p=["text","amount","assetId","vaultId","actionType","contractSendMethod"],h=function(t){var e,n=t.text,o=t.contractSendMethod,m=(0,s.Z)(t,v),p=(0,u.Fg)(),h=(0,l.useRef)(null),j=(0,l.useState)(null),y=(0,i.Z)(j,2),S=y[0],C=y[1],w=(0,d.R)(),b=w.state.transaction,I=w.cleanTransaction,T=(0,l.useMemo)((function(){var t;return JSON.stringify(null===b||void 0===b||null===(t=b.contractSendMethod)||void 0===t?void 0:t._method)===JSON.stringify(o._method)}),[b,o]),M=(0,l.useMemo)((function(){return T&&b.status&&["pending","success","failed"].includes(b.status)&&b.estimatedTime}),[b,T]),A=(0,l.useMemo)((function(){return M&&"pending"===b.status?b.estimatedTime:.5}),[M,b]),D=(0,l.useCallback)((function(){if(!b.timestamp||!b.estimatedTime)return null;var t=+b.timestamp+1e3*b.estimatedTime,e=Math.max(0,Math.ceil((t-Date.now())/1e3));C(e),e&&(h.current=setTimeout((function(){D()}),1e3))}),[b]);(0,l.useEffect)((function(){var t;"success"===b.status||"failed"===b.status?(h.current&&(clearInterval(h.current),h.current=null),"success"!==b.status&&4001===(null===(t=b.error)||void 0===t?void 0:t.code)||setTimeout((function(){I()}),4e3)):"pending"!==b.status||h.current||D()}),[b.status,D,I,null===(e=b.error)||void 0===e?void 0:e.code]);var k=(0,l.useMemo)((function(){var t;if(T)switch(null===b||void 0===b?void 0:b.status){case"created":return(0,g.jsx)(f.$,{size:"sm"});case"pending":return b.timestamp&&b.estimatedTime&&S?(0,g.jsxs)(x.xv,{textStyle:"ctaStatic",children:[S,"s"]}):(0,g.jsx)(f.$,{size:"sm"});case"success":return(0,g.jsx)(x.kC,(0,a.Z)((0,a.Z)({},m),{},{alignItems:"center",justifyContent:"center",children:(0,g.jsx)(r.ddU,{size:24,color:p.colors.green[400]})}));case"failed":if(4001!==(null===(t=b.error)||void 0===t?void 0:t.code))return(0,g.jsx)(x.kC,(0,a.Z)((0,a.Z)({},m),{},{alignItems:"center",justifyContent:"center",children:(0,g.jsx)(r.lTq,{size:24,color:p.colors.red[400]})}))}return(0,g.jsx)(c.Translation,{translation:n,textStyle:"ctaStatic"})}),[T,S,b,n,p,m]),_=(0,l.useMemo)((function(){switch(b.status){case"success":case"failed":return"transparent";default:return"primary"}}),[b]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x.kC,{top:0,left:0,bottom:0,bg:_,overflow:"hidden",position:"absolute",alignItems:"center",justifyContent:"center",transition:"background 0.5s ease-in-out",sx:{animationIterationCount:1,animationFillMode:"forwards",animationTimingFunction:"ease-in-out",animationDuration:"".concat(A,"s"),animationName:M?"progress":"none",animationPlayState:M?"running":"stopped"},children:(0,g.jsx)(x.kC,{left:0,width:m.width,alignItems:"center",position:"absolute",justifyContent:"center",sx:{"> *":{color:"black !important",borderColor:"black !important"}},children:k})}),k]})},j=function(t){var e=t.text,n=t.amount,r=t.assetId,c=t.vaultId,u=t.actionType,f=t.contractSendMethod,x=(0,s.Z)(t,p),v=(0,o.Z)(),j=(0,i.Z)(v,2),y=j[0],S=j[1].width,C=(0,d.R)(),w=C.sendTransaction,b=C.state.transaction,I=(0,l.useMemo)((function(){var t;return JSON.stringify(null===b||void 0===b||null===(t=b.contractSendMethod)||void 0===t?void 0:t._method)===JSON.stringify(f._method)}),[b,f]),T=(0,l.useCallback)((function(){if("created"!==b.status&&"pending"!==b.status)return w(c,r,f,u,n)}),[b,c,r,f,u,n,w]),M=(0,l.useMemo)((function(){var t;if(!I)return"primary";switch(b.status){case"success":return"green.400";case"failed":return 4001!==(null===(t=b.error)||void 0===t?void 0:t.code)?"red.400":"primary";default:return"primary"}}),[I,b]);return(0,g.jsx)(m.zx,(0,a.Z)((0,a.Z)({py:2,px:10,overflow:"hidden",position:"relative",width:S||"auto",borderColor:M,onClick:function(){return T()},ref:y,variant:"ctaPrimaryOutline",transition:"border 0.5s ease-in-out"},x),{},{children:(0,g.jsx)(h,{text:e,vaultId:c,assetId:r,contractSendMethod:f,width:S})}))}},81608:function(t,e,n){n.r(e),e.default={}},83336:function(t,e,n){n.d(e,{_:function(){return d}});var a=n(93845),i=n(55680),s=n(13420),r=n(18293);function o(){var t=!1,e=[],n=new Set,o={subscribe:function(t){return n.add(t),function(){n.delete(t)}},start:function(a,i){if(t){var r=[];return n.forEach((function(t){r.push((0,s.d5)(t,a,{transitionOverride:i}))})),Promise.all(r)}return new Promise((function(t){e.push({animation:[a,i],resolve:t})}))},set:function(e){return(0,i.k)(t,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),n.forEach((function(t){(0,r.gg)(t,e)}))},stop:function(){n.forEach((function(t){(0,s.p_)(t)}))},mount:function(){return t=!0,e.forEach((function(t){var e=t.animation,n=t.resolve;o.start.apply(o,(0,a.__spreadArray)([],(0,a.__read)(e),!1)).then(n)})),function(){t=!1,o.stop()}}};return o}var l=n(7276),c=n(5268);var d=function(){var t=(0,c.h)(o);return(0,l.useEffect)(t.mount,[]),t}},79243:function(t,e,n){n.d(e,{c:function(){return l}});var a=n(93845),i=n(7276),s=n(65289),r=n(83022),o=n(5268);function l(t){var e=(0,o.h)((function(){return(0,s.B)(t)}));if((0,i.useContext)(r._).isStatic){var n=(0,a.__read)((0,i.useState)(t),2)[1];(0,i.useEffect)((function(){return e.onChange(n)}),[])}return e}}}]);