"use strict";(self.webpackChunkidle_dashboard_new=self.webpackChunkidle_dashboard_new||[]).push([[6698,9177,1617,219,4011,6634,9220,745,1925,8024,4389],{39177:function(t,e,n){n.r(e),n.d(e,{AddressLink:function(){return d}});var a=n(1413),r=n(45987),i=n(7276),o=n(3498),s=n(99594),l=n(47174),c=n(45263),u=["address","text"],d=function(t){var e=t.address,n=t.text,d=(0,r.Z)(t,u),f=(0,l.Y)(),h=f.chainId,x=f.explorer,m=(0,i.useMemo)((function(){return(0,s.SV)(h,x,e)}),[h,x,e]);return(0,c.jsx)(o.rU,(0,a.Z)((0,a.Z)({href:m,textStyle:"tableCell",color:"link",isExternal:!0},d),{},{children:n||(0,s.pc)(e)}))}},61617:function(t,e,n){n.r(e),n.d(e,{AssetLabel:function(){return c}});var a=n(1413),r=n(45987),i=n(3498),o=n(75712),s=n(45263),l=["assetId","size","spacing","extraFields"],c=function(t){var e=t.assetId,n=t.size,c=void 0===n?"sm":n,u=t.spacing,d=t.extraFields,f=(0,r.Z)(t,l);return(0,s.jsx)(o.AssetProvider,{wrapFlex:!1,assetId:e,children:(0,s.jsxs)(i.Ug,{spacing:u,alignItems:"center",justifyContent:"flex-start",children:[(0,s.jsx)(o.AssetProvider.Icon,{size:c}),(0,s.jsx)(o.AssetProvider.Name,(0,a.Z)({textStyle:"heading",fontSize:["15px","h3"],whiteSpace:"nowrap"},f)),null===d||void 0===d?void 0:d.map((function(t){return(0,s.jsx)(o.AssetProvider.GeneralData,{field:t},"extraField_".concat(t))}))]})})}},86698:function(t,e,n){n.r(e),n.d(e,{AssetStats:function(){return _}});var a=n(1413),r=n(93433),i=n(29439),o=n(58383),s=n(54447),l=n(79681),c=n(86059),u=n(44888),d=n(66288),f=n(29482),h=n(80745),x=n(61617),m=n(3717),g=n(39177),v=n(97778),p=n(85267),j=n(1669),b=n(84389),y=n(6634),C=n(75712),w=n(99594),S=n(7276),A=n(15568),M=n(64011),D=n(18147),Z=n(50026),I=n(61925),k=n(15542),T=n(3498),O=n(24606),P=n(98440),R=n(90219),z=n(68414),F=n(45263),E=function(t){var e=t.translation,n=t.address;return(0,F.jsxs)(T.Ug,{py:4,width:"full",justifyContent:"space-between",borderBottomWidth:"1px",borderBottomColor:"divider",children:[(0,F.jsx)(k.Translation,{translation:e,textStyle:"tableCell"}),(0,F.jsx)(g.AddressLink,{address:n})]})},_=function(t){var e,n,g,_=t.showHeader,U=void 0===_||_,B=t.assetOnly,L=void 0!==B&&B,H=t.showAssetStrategy,N=void 0!==H&&H,W=t.timeframe,V=t.dateRange,G=(0,l.qM)(),q=(0,p.m)().params,K=(0,d.X)().isMobile,X=(0,S.useState)({startDate:null,endDate:null}),Y=(0,i.Z)(X,2),$=Y[0],J=Y[1],Q=(0,S.useState)(void 0),tt=(0,i.Z)(Q,2),et=tt[0],nt=tt[1],at=(0,S.useState)(P.W.WEEK),rt=(0,i.Z)(at,2),it=rt[0],ot=rt[1],st=(0,j.w)(),lt=st.vaults,ct=st.contracts,ut=st.selectors,dt=ut.selectAssetById,ft=ut.selectVaultById,ht=(0,S.useMemo)((function(){return!!$.startDate&&!!$.endDate}),[$]);(0,S.useEffect)((function(){ht&&ot(void 0)}),[ht,ot]),(0,S.useEffect)((function(){it&&J({endDate:null,startDate:null})}),[it,J]);var xt=(0,S.useMemo)((function(){return q.asset&&dt&&dt(q.asset)}),[dt,q.asset]),mt=(0,S.useMemo)((function(){return q.asset&&ft&&ft(q.asset)}),[ft,q.asset]),gt=(0,S.useMemo)((function(){return xt&&u.A2[xt.type]}),[xt]),vt=(0,S.useMemo)((function(){return gt&&gt.color}),[gt]),pt=(0,S.useMemo)((function(){if(null!==xt&&void 0!==xt&&xt.type)return N?[xt.type]:["AA","BB"].includes(xt.type)?["AA","BB"]:[xt.type]}),[xt,N]);(0,S.useEffect)((function(){pt&&!et&&nt(pt)}),[et,pt,nt]);var jt=(0,S.useMemo)((function(){if(null===xt||void 0===xt||!xt.type)return[];if(L)return[xt.id];switch(xt.type){case"AA":case"BB":var t=(0,w.sj)(["AA","BB"],xt.type)[0],e=lt.find((function(e){return"cdoConfig"in e&&"cdoConfig"in mt&&e.type===t&&e.cdoConfig.address===mt.cdoConfig.address}));return[xt.id,null===e||void 0===e?void 0:e.id];default:return[xt.id]}}),[xt,mt,lt,L]),bt=(0,S.useMemo)((function(){return W||it}),[it,W]),yt=(0,S.useMemo)((function(){return V||$}),[$,V]),Ct="BY"===(null===xt||void 0===xt?void 0:xt.type),wt=(0,O.U)({assetIds:jt}),St=wt.allocations,At=wt.colors,Mt=wt.labels,Dt=(0,A.h)({assetIds:jt,timeframe:bt,dateRange:yt}).rateChartData,Zt=(0,Z.D)({assetIds:jt,timeframe:bt,dateRange:yt}).volumeChartData,It=function(t){var e=t.assetIds,n=t.dateRange,a=t.timeframe,r=t.useDollarConversion,o=void 0===r||r,s=(0,S.useState)(!0),l=(0,i.Z)(s,2),c=l[0],u=l[1],d=(0,j.w)(),f=d.historicalTvls,h=d.selectors,x=h.selectAssetsByIds,m=h.selectAssetHistoricalTvls,g=h.selectAssetHistoricalTvlsUsd,v=(0,S.useMemo)((function(){return x?x(e):[]}),[e,x]),p=(0,S.useMemo)((function(){return(0,w.yb)(a,n)}),[a,n]),b=(0,i.Z)(p,2),y=b[0],C=b[1],A=(0,S.useMemo)((function(){var t={total:[],rainbow:[]};if(!Object.keys(f).length)return t;var e=v.reduce((function(e,n,a){if(!n.id)return e;var r=o?g(n.id):m(n.id);return r?(r.forEach((function(r){var i=r.date;if(!(i<y||C&&i>C)){var o=r.value;e[i]||(e[i]={date:i,total:0}),n.id&&(e[i][n.id]=o,a||t.total.push({date:i,value:o}))}})),e):e}),{});return t.rainbow=Object.values(e),t}),[v,o,f,m,g,y,C]);return(0,S.useEffect)((function(){if(A.rainbow.length)return u(!1),function(){u(!0)}}),[A]),{assets:v,tvlChartData:A,tvlChartDataLoading:c}}({assetIds:jt,timeframe:bt,dateRange:yt}),kt=It.tvlChartData,Tt=(0,z.C)({useRates:Ct,assetIds:jt,timeframe:bt,dateRange:yt}).performanceChartData,Ot=(0,S.useMemo)((function(){var t;return null!==Dt&&void 0!==Dt&&null!==(t=Dt.rainbow)&&void 0!==t&&t.length?(0,F.jsx)(T.Ug,{spacing:4,width:"full",children:jt.map((function(t){var e=dt(t),n=u.A2[e.type].color,a=Dt.rainbow.reduce((function(t,n){return(0,w.gA)(n[e.id]).gt(9999)?t:t.plus(n[e.id])}),(0,w.gA)(0)).div(Dt.rainbow.length);return(0,F.jsxs)(T.Ug,{spacing:1,alignItems:"baseline",children:[(0,F.jsx)(c.Amount.Percentage,{textStyle:"heading",fontSize:"lg",color:n,value:a}),(0,F.jsx)(k.Translation,{translation:"defi.avgApy",fontSize:"sm",color:"cta"})]},"asset_".concat(t))}))}):null}),[jt,dt,Dt]),Pt=(0,S.useMemo)((function(){return jt.reduce((function(t,e){var n=dt(e);return t=t.plus(n.tvlUsd)}),(0,w.gA)(0))}),[jt,dt]),Rt=(0,S.useMemo)((function(){var t={data:[],colors:{}};if(!jt)return t;if("best"===(null===gt||void 0===gt?void 0:gt.strategy)){var e=t;return Object.keys(St).forEach((function(t){var n=(0,o.iL)(t),a=(0,w.gA)(St[t]),r=Pt.times(a.div(100));e.colors[t]=At[t],e.data.push({value:parseFloat(r.toFixed(2)),label:t,extraData:{icon:null===n||void 0===n?void 0:n.icon,color:At[t],label:Mt[t]}})})),e}return jt.reduce((function(t,e){var n=dt(e);return n?(t.colors[e]=u.A2[n.type].color,t.data.push({value:parseFloat((0,w.gA)(n.tvlUsd).toFixed(2)),label:n.id,extraData:{asset:n}}),t):t}),t)}),[Pt,jt,gt,dt,St,At,Mt]),zt=(0,S.useCallback)((function(t){var e,n,a,r,i=Rt.data.reduce((function(t,e){return t.plus(e.value)}),(0,w.gA)(0)),o=function(t){return"$".concat((0,w.dm)(t))},s=null===t||void 0===t||null===(e=t.extraData)||void 0===e?void 0:e.asset,l=null===t||void 0===t||null===(n=t.extraData)||void 0===n?void 0:n.icon,c=null===t||void 0===t||null===(a=t.extraData)||void 0===a?void 0:a.label,d=null===t||void 0===t||null===(r=t.extraData)||void 0===r?void 0:r.color,f=l||(null===s||void 0===s?void 0:s.icon)||(null===xt||void 0===xt?void 0:xt.icon),h=c||G(s?u.A2[s.type].label:"dashboard.portfolio.totalChart"),x=o(t?t.value:i),m=d||(s?u.A2[null===s||void 0===s?void 0:s.type].color:"#ffffff");return(0,F.jsxs)(F.Fragment,{children:[f&&(0,F.jsx)("image",{y:"35%",href:f,height:"34",width:"34",textAnchor:"middle",x:K?"44.5%":"46.5%"}),(0,F.jsx)("text",{x:"50%",y:"54%",fontSize:26,fill:"white",fontWeight:700,textAnchor:"middle",pointerEvents:"none",children:x}),(0,F.jsx)("text",{x:"50%",y:"61%",fill:m,fontSize:14,fontWeight:400,textAnchor:"middle",pointerEvents:"none",children:h})]})}),[Rt,xt,G,K]),Ft=(0,S.useMemo)((function(){return Dt.total.reduce((function(t,e){return(0,w.gA)(e.value).gt(9999)?t:t.plus(e.value)}),(0,w.gA)(0)).div(Dt.total.length)}),[Dt]),Et=(0,S.useMemo)((function(){var t=Dt.rainbow.reduce((function(t,e){return jt.forEach((function(n){t[n]||(t[n]=(0,w.gA)(0)),t[n]=t[n].plus(e[n])})),t}),{});return Object.keys(t).reduce((function(e,n){return e[n]=t[n].div(Dt.rainbow.length),e}),{})}),[jt,Dt]),_t=(0,S.useMemo)((function(){return Zt.total.reduce((function(t,e){return t.plus(Math.abs(e.value))}),(0,w.gA)(0))}),[Zt]),Ut=(0,S.useMemo)((function(){return(0,w.yb)(it,$)}),[it,$]),Bt=(0,i.Z)(Ut,2),Lt=Bt[0],Ht=Bt[1],Nt=(0,S.useMemo)((function(){var t=jt.reduce((function(t,e){var n=dt(e);return n&&n.collectedFees?[].concat((0,r.Z)(t),(0,r.Z)(n.collectedFees)):t}),[]);return t.filter((function(t){return 1e3*+t.timeStamp>=Lt&&(!Ht||1e3*+t.timeStamp<=Ht)}))}),[jt,dt,Lt,Ht]),Wt=(0,S.useMemo)((function(){return Nt.reduce((function(t,e){return t.plus(e.underlyingAmount)}),(0,w.gA)(0))}),[Nt]),Vt=(0,S.useMemo)((function(){var t=[];if("tranches"===(null===gt||void 0===gt?void 0:gt.strategy))t.push({address:mt.cdoConfig.address,translation:"about.cdo"}),t.push({address:mt.strategyConfig.address,translation:"about.strategy"});jt.forEach((function(e){var n=dt(e);if(!n)return null;t.push({address:n.id,translation:["about.".concat(n.type)]})})),u.MQ.forEach((function(e){t.push({address:e,translation:"about.feeCollector"})}));var e=ct.find((function(t){return"Timelock"===t.name}));e&&t.push({address:e.id,translation:"about.timelock"});var n=ct.find((function(t){return"GovernorBravo"===t.name}));return n&&t.push({address:n.id,translation:"about.governance"}),t.map((function(t,e){return(0,F.jsx)(E,(0,a.Z)({},t),e)}))}),[jt,gt,dt,mt,ct]),Gt=(0,S.useMemo)((function(){return(0,F.jsxs)(T.MI,{spacing:4,width:"full",columns:[1,4],children:[(0,F.jsxs)(s.Card,{children:[(0,F.jsx)(k.Translation,{mb:1,translation:"defi.tvl",textStyle:"captionSmall"}),(0,F.jsx)(c.Amount.Usd,{value:Pt,textStyle:"ctaStatic",fontSize:"xl"})]}),"tranches"===(null===gt||void 0===gt?void 0:gt.strategy)?(0,F.jsxs)(s.Card,{children:[(0,F.jsx)(k.Translation,{mb:1,translation:"defi.apyRatio",textStyle:"captionSmall"}),(0,F.jsx)(T.Ug,{spacing:5,children:jt.map((function(t){var e=dt(t);return e?(0,F.jsx)(C.AssetProvider,{assetId:t,wrapFlex:!1,children:(0,F.jsx)(C.AssetProvider.ApyRatio,{textStyle:"ctaStatic",color:jt.length>1?"strategies.".concat(e.type):"primary",fontSize:"xl"})},"asset_".concat(t)):null}))})]}):(0,F.jsxs)(s.Card,{children:[(0,F.jsx)(k.Translation,{mb:1,translation:"defi.avgApy",textStyle:"captionSmall"}),(0,F.jsx)(c.Amount.Percentage,{value:Ft,textStyle:"ctaStatic",fontSize:"xl"})]}),(0,F.jsxs)(s.Card,{children:[(0,F.jsx)(k.Translation,{mb:1,translation:"stats.totalVolume",textStyle:"captionSmall"}),(0,F.jsx)(c.Amount.Usd,{value:_t,textStyle:"ctaStatic",fontSize:"xl"})]}),(0,F.jsxs)(s.Card,{children:[(0,F.jsx)(k.Translation,{mb:1,translation:"stats.collectedFees",textStyle:"captionSmall"}),(0,F.jsx)(v.TokenAmount,{assetId:null===xt||void 0===xt?void 0:xt.id,amount:Wt,showIcon:!1,textStyle:"ctaStatic",fontSize:"xl"})]})]})}),[Pt,Ft,_t,jt,xt,Wt,dt,gt]);return(0,F.jsx)(C.AssetProvider,{assetId:q.asset,wrapFlex:!1,children:(0,F.jsxs)(T.gC,{spacing:16,width:"full",children:[U&&(0,F.jsxs)(T.Kq,{mt:14,width:"100%",spacing:[4,10],alignItems:["flex-start","center"],justifyContent:"flex-start",direction:["column","row"],children:[(0,F.jsx)(x.AssetLabel,{assetId:q.asset,fontSize:"h2"}),(0,F.jsxs)(T.Kq,{pb:3,flex:1,spacing:[4,0],width:["full","auto"],borderBottom:"1px solid",borderColor:"divider",justifyContent:"space-between",direction:["column","row"],alignItems:["flex-start","center"],children:[(0,F.jsxs)(T.Ug,{spacing:6,width:["full","auto"],justifyContent:"flex-start",children:[(0,F.jsxs)(T.Ug,{spacing:0,position:"relative",children:[(0,F.jsx)(f.ProductTag,{type:null===gt||void 0===gt?void 0:gt.strategy,py:2}),(0,F.jsx)(T.kC,{top:"-12px",right:"-12px",position:"absolute",children:(0,F.jsx)(C.AssetProvider.Strategies,{})})]}),null===gt||void 0===gt||null===(e=gt.stats)||void 0===e||null===(n=e.header)||void 0===n||null===(g=n.fields)||void 0===g?void 0:g.map((function(t){return(0,F.jsx)(C.AssetProvider.GeneralData,{field:t,color:"cta"},"field_".concat(t))}))]}),(0,F.jsxs)(T.Kq,{spacing:2,width:["full","auto"],direction:["column","row"],justifyContent:["flex-start","center"],children:[(0,F.jsx)(I.TimeframeSelector,{variant:"button",timeframe:it,setTimeframe:ot,width:["100%","auto"],justifyContent:["center","initial"]}),(0,F.jsx)(m.DatePicker,{selected:ht,setDateRange:J})]})]})]}),Gt,!L&&"tranches"===(null===gt||void 0===gt?void 0:gt.strategy)&&(0,F.jsx)(T.MI,{spacing:4,width:"full",columns:[1,2],children:jt.map((function(t){var e,n,a=dt(t);return(0,F.jsx)(C.AssetProvider,{wrapFlex:!1,assetId:a.id,children:(0,F.jsxs)(T.gC,{spacing:6,width:"full",alignItems:"flex-start",children:[(0,F.jsx)(k.Translation,{translation:u.A2[a.type].label,textStyle:"ctaStatic",fontWeight:600,fontSize:"lg"}),(0,F.jsxs)(T.MI,{spacing:4,columns:2,width:"full",children:[(0,F.jsxs)(s.Card,{children:[(0,F.jsx)(k.Translation,{mb:1,translation:"defi.avgApy",textStyle:"captionSmall"}),(0,F.jsx)(c.Amount.Percentage,{value:Et[t],textStyle:"ctaStatic",color:"strategies.".concat(a.type),fontSize:"xl"})]}),null===(e=u.A2[a.type].stats)||void 0===e||null===(n=e.strategyData)||void 0===n?void 0:n.fields.map((function(t){return(0,F.jsxs)(s.Card,{children:[(0,F.jsx)(k.Translation,{mb:1,translation:"stats.".concat(t),textStyle:"captionSmall"}),(0,F.jsx)(C.AssetProvider.GeneralData,{field:t,textStyle:"ctaStatic",fontSize:"xl"})]},"field_".concat(t))}))]})]})},"row_".concat(t))}))}),(0,F.jsxs)(T.gC,{spacing:20,width:"full",children:[(0,F.jsxs)(T.Kq,{spacing:6,width:"full",direction:["column","row"],children:[(0,F.jsxs)(T.gC,{spacing:6,width:["full",2/3],alignItems:"flex-start",children:[(0,F.jsx)(k.Translation,{translation:"stats.performances",component:T.X6,as:"h3",textStyle:"heading",fontSize:"lg"}),(0,F.jsx)(s.Card.Dark,{p:6,children:(0,F.jsxs)(T.gC,{spacing:4,width:"full",children:[(0,F.jsxs)(T.Ug,{width:"full",justifyContent:"space-between",children:[Ot,(0,F.jsx)(M.DownloadCsvData,{chartData:Tt,isRainbowChart:!0,fileName:"performances_".concat(null===xt||void 0===xt?void 0:xt.id,"_").concat(Lt,"_").concat(Ht,".csv")})]}),(0,F.jsx)(y.GenericChart,{percentChange:0,assetIds:jt,color:vt,maxMinEnabled:!0,isRainbowChart:!0,data:Tt,setPercentChange:function(){},timeframe:bt,height:K?"300px":"350px",margins:{top:10,right:0,bottom:60,left:0},formatFn:function(t){return"$".concat((0,w.dm)(t,8))}})]})})]}),(0,F.jsxs)(T.gC,{flex:1,spacing:6,width:["full","auto"],alignItems:"flex-start",children:[(0,F.jsx)(k.Translation,{translation:"stats.tvlDistribution",component:T.X6,as:"h3",textStyle:"heading",fontSize:"lg"}),(0,F.jsx)(s.Card.Dark,{p:6,flex:1,children:(0,F.jsx)(R.DonutChart,(0,a.Z)((0,a.Z)({},Rt),{},{getSliceData:zt}))})]})]}),(0,F.jsxs)(T.MI,{spacing:6,width:"full",columns:[1,3],children:[(0,F.jsxs)(T.gC,{spacing:6,width:"full",alignItems:"flex-start",children:[(0,F.jsx)(k.Translation,{translation:"defi.tvl",component:T.X6,as:"h3",textStyle:"heading",fontSize:"lg"}),(0,F.jsx)(s.Card.Dark,{p:6,children:(0,F.jsx)(y.GenericChart,{percentChange:0,assetIds:jt,maxMinEnabled:!0,isRainbowChart:!0,color:vt,data:kt,setPercentChange:function(){},timeframe:bt,height:K?"300px":"350px",margins:{top:10,right:0,bottom:60,left:0},fileName:"tvls_".concat(null===xt||void 0===xt?void 0:xt.id,"_").concat(Lt,"_").concat(Ht,".csv")})})]}),(0,F.jsxs)(T.gC,{spacing:6,width:"full",alignItems:"flex-start",children:[(0,F.jsx)(k.Translation,{translation:"defi.apy",component:T.X6,as:"h3",textStyle:"heading",fontSize:"lg"}),(0,F.jsx)(s.Card.Dark,{p:6,children:(0,F.jsx)(y.GenericChart,{percentChange:0,assetIds:jt,data:Dt,color:vt,maxMinEnabled:!0,isRainbowChart:!0,setPercentChange:function(){},timeframe:bt,height:K?"300px":"350px",formatFn:function(t){return"".concat((0,w.rp)(t))},margins:{top:10,right:0,bottom:60,left:0},fileName:"rates_".concat(null===xt||void 0===xt?void 0:xt.id,"_").concat(Lt,"_").concat(Ht,".csv")})})]}),(0,F.jsxs)(T.gC,{spacing:6,width:"full",alignItems:"flex-start",children:[(0,F.jsx)(k.Translation,{translation:"stats.volumes",component:T.X6,as:"h3",textStyle:"heading",fontSize:"lg"}),(0,F.jsx)(s.Card.Dark,{p:6,flex:1,children:(0,F.jsxs)(T.gC,{flex:1,spacing:4,width:"full",height:"full",alignItems:"flex-end",children:[(0,F.jsx)(M.DownloadCsvData,{chartData:Zt,isRainbowChart:!0,fileName:"volumes_".concat(null===xt||void 0===xt?void 0:xt.id,"_").concat(Lt,"_").concat(Ht,".csv")}),(0,F.jsx)(b.VolumeChart,{assetIds:jt,dateRange:$,timeframe:bt})]})})]})]})]}),(0,F.jsxs)(T.MI,{width:"full",spacing:6,columns:[1,2],children:[(0,F.jsx)(D.TransactionList,{assetIds:jt,transactions:Nt,showTitleOnMobile:!0,title:"stats.collectedFees",emptyText:"stats.collectedFeesEmpty",maxH:600}),(0,F.jsx)(s.Card,{children:(0,F.jsxs)(T.gC,{flex:1,spacing:0,height:"100%",alignItems:"flex-start",justifyContent:"flex-start",children:[(0,F.jsx)(k.Translation,{component:s.Card.Heading,translation:"common.about"}),(0,F.jsx)(h.Scrollable,{maxH:600,children:Vt})]})})]})]})})}},3717:function(t,e,n){n.r(e),n.d(e,{DatePicker:function(){return g}});var a=n(29439),r=(n(89822),n(4550)),i=n.n(r),o=n(55967),s=n(7276),l=n(66288),c=n(15542),u=n(58942),d=n(7630),f=n(43127),h=n(3498),x=(n(82237),n(36358),n(51499)),m=n(45263),g=function(t){var e=t.selected,n=void 0!==e&&e,r=t.setDateRange,g=void 0===r?function(){}:r,v=(0,l.X)().isMobile,p=(0,d.qY)(),j=p.isOpen,b=p.onOpen,y=p.onClose,C=(0,s.useState)("startDate"),w=(0,a.Z)(C,2),S=w[0],A=w[1],M=(0,s.useState)({startDate:null,endDate:null}),D=(0,a.Z)(M,2),Z=D[0],I=D[1],k=(0,s.useCallback)((function(t){return A(t||"startDate")}),[A]),T=(0,s.useCallback)((function(){return g(Z),y()}),[y,Z,g]);return(0,m.jsxs)(s.Fragment,{children:[(0,m.jsx)(f.zx,{px:4,border:0,textStyle:"cta",variant:"filter","aria-selected":n,leftIcon:(0,m.jsx)(o.kVv,{}),onClick:function(){return b()},children:(0,m.jsxs)(h.Ug,{spacing:2,alignItems:"center",children:[(0,m.jsx)(c.Translation,{translation:"common.calendar"}),n&&(0,m.jsx)(h.xu,{width:2,height:2,bg:"cta",borderRadius:"50%"})]})}),(0,m.jsxs)(x.u_,{size:"2xl",isOpen:j,onClose:y,isCentered:!v,blockScrollOnMount:!1,children:[(0,m.jsx)(x.ZA,{}),(0,m.jsxs)(x.hz,{children:[(0,m.jsx)(c.Translation,{component:x.xB,translation:"stats.selectDateRange",textStyle:"heading",fontSize:"md",color:"cta"}),(0,m.jsx)(x.ol,{}),(0,m.jsx)(x.fe,{children:(0,m.jsx)(u.DayPickerRangeController,{endDate:Z.endDate,maxDate:i()(),focusedInput:S,startDate:Z.startDate,numberOfMonths:v?1:2,renderKeyboardShortcutsButton:function(){return null},onDatesChange:function(t){return I(t)},initialVisibleMonth:function(){return i()().subtract(1,"M")},isDayBlocked:function(t){return t.isAfter(i()())},onFocusChange:function(t){return k(t)}})}),(0,m.jsx)(x.mz,{children:(0,m.jsx)(h.kC,{width:"full",justifyContent:"center",children:(0,m.jsx)(c.Translation,{component:f.zx,translation:"common.apply",variant:"ctaPrimary",px:10,onClick:T})})})]})]})]})}},90219:function(t,e,n){n.r(e),n.d(e,{DonutChart:function(){return v},PieChart:function(){return h}});var a=n(1413),r=n(29439),i=n(14380),o=n(7276),s=n(28547),l=n(87563),c=n(68165),u=n(77806),d=n(45263),f={top:0,right:0,bottom:0,left:0};function h(t){var e=t.data,n=t.colors,l=t.width,c=t.height,h=t.margin,x=void 0===h?f:h,m=t.animate,v=void 0===m||m,p=t.getSliceData,j=(0,o.useState)(null),b=(0,r.Z)(j,2),y=b[0],C=b[1],w=l-x.left-x.right,S=c-x.top-x.bottom,A=Math.min(w,S)/2,M=S/2,D=w/2,Z=e.map((function(t){return t.label})),I=Z.map((function(t){return n[t]})),k=(0,s.Z)({domain:Z,range:I}),T=p&&p(y);return(0,d.jsxs)("svg",{width:l,height:c,children:[(0,d.jsx)("rect",{rx:14,width:l,height:c,fill:"url('#visx-pie-gradient')"}),T,(0,d.jsx)(i.Z,{top:M+x.top,left:D+x.left,children:(0,d.jsx)(u.Z,{padAngle:0,cornerRadius:0,pieValue:function(t){return t.value},outerRadius:A,innerRadius:A-30,data:e,children:function(t){return(0,d.jsx)(g,(0,a.Z)((0,a.Z)({},t),{},{animate:v,onMouseOver:function(t){var e=t.data;return C(e)},getKey:function(t){return t.data.label},onMouseOut:function(){return C(null)},getColor:function(t){return k(t.data.label)}}))}})})]})}var x=function(t){var e=t.endAngle;return{startAngle:e>Math.PI?2*Math.PI:0,endAngle:e>Math.PI?2*Math.PI:0,opacity:0}},m=function(t){return{startAngle:t.startAngle,endAngle:t.endAngle,opacity:1}};function g(t){var e=t.animate,n=t.arcs,r=t.path,i=t.getKey,o=t.getColor,s=t.onMouseOut,l=t.onMouseOver,u=t.onClickDatum;return(0,c.useTransition)(n,{from:e?x:m,enter:m,update:m,leave:e?x:m,keys:i})((function(t,e){return(0,d.jsx)("g",{children:(0,d.jsx)(c.animated.path,{d:(0,c.interpolate)([t.startAngle,t.endAngle],(function(t,n){return r((0,a.Z)((0,a.Z)({},e),{},{startAngle:t,endAngle:n}))})),fill:o(e),onClick:function(){return u&&u(e)},onMouseOver:function(){return l&&l(e)},onMouseOut:function(){return s&&s(e)},onTouchStart:function(){return u&&u(e)}})},Math.random())}))}var v=function(t){var e=t.data,n=t.colors,a=t.getSliceData;return(0,d.jsx)(l.Z,{debounceTime:10,children:function(t){return(0,d.jsx)(h,{data:e,colors:n,width:t.width,height:t.height,getSliceData:a})}})}},64011:function(t,e,n){n.r(e),n.d(e,{DownloadCsvData:function(){return u}});var a=n(7276),r=n(79681),i=n(70820),o=n(3498),s=n(55967),l=n(99594),c=n(45263),u=function(t){var e=t.fileName,n=t.chartData,u=t.isRainbowChart,d=(0,r.qM)(),f=(0,a.useMemo)((function(){return(0,l.Fy)(n.total)}),[n]),h=(0,a.useMemo)((function(){return(0,l.jW)(n.rainbow)}),[n]),x=(0,a.useCallback)((function(){return(0,l.Sv)(u?h:f,e)}),[f,h,u,e]);return(0,c.jsx)(i.u,{hasArrow:!0,placement:"top",label:d("transactionHistory.downloadCSV"),children:(0,c.jsx)(o.rU,{children:(0,c.jsx)(s.qm7,{color:"primary",size:24,onClick:function(){return x()}})})})}},6634:function(t,e,n){n.r(e),n.d(e,{GenericChart:function(){return c}});var a=n(7276),r=n(99594),i=n(3498),o=n(45327),s=n(64011),l=n(45263),c=function(t){var e=t.data,n=t.assetIds,c=t.fileName,u=t.isRainbowChart,d=t.height,f=void 0===d?"350px":d,h=t.maxMinEnabled,x=void 0===h||h,m=t.color,g=void 0===m?"chart.stroke":m,v=t.formatFn,p=void 0===v?function(t){return"$".concat((0,r.dm)(t))}:v,j=t.margins,b=void 0===j?{top:0,right:0,bottom:0,left:0}:j,y=(0,a.useMemo)((function(){return e||{total:[],rainbow:[]}}),[e]),C=(0,a.useMemo)((function(){return!y.rainbow.length}),[y]);return(0,l.jsxs)(i.gC,{spacing:4,width:"full",alignItems:"flex-end",children:[c&&(0,l.jsx)(s.DownloadCsvData,{chartData:y,isRainbowChart:u,fileName:c}),(0,l.jsx)(i.xu,{width:"full",p:0,height:f,children:(0,l.jsx)(o.Graph,{color:g,data:y,loading:C,margins:b,assetIds:n,isLoaded:!C,formatFn:p,maxMinEnabled:x,isRainbowChart:u})})]})}},9220:function(t,e,n){n.r(e),n.d(e,{HistogramChart:function(){return H}});var a=n(1413),r=n(93433),i=n(57118),o=n(99594),s=n(14380),l=n(7276),c=n(84033),u=n.n(c),d=n(64625),f=n(46177),h=n(97862),x=n(57478),m=n(25908),g=n(12528),v=n(23369),p=["data","className","top","left","x","y0","y1","xScale","yScale","color","keys","value","order","offset","children"];function j(){return j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},j.apply(this,arguments)}function b(t){var e=t.data,n=t.className,a=t.top,r=t.left,i=t.x,o=t.y0,c=void 0===o?f.l8:o,b=t.y1,y=void 0===b?f.xf:b,C=t.xScale,w=t.yScale,S=t.color,A=t.keys,M=t.value,D=t.order,Z=t.offset,I=t.children,k=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,p),T=(0,d.Z)();A&&T.keys(A),M&&(0,x.Z)(T.value,M),D&&T.order((0,m.ZP)(D)),Z&&T.offset((0,g.ZP)(Z));var O=T(e),P=(0,h.Z)(C),R=O.map((function(t,e){var n=t.key;return{index:e,key:n,bars:t.map((function(e,a){var r=(w(c(e))||0)-(w(y(e))||0),o=w(y(e)),s="bandwidth"in C?C(i(e.data)):Math.max((C(i(e.data))||0)-P/2);return{bar:e,key:n,index:a,height:r,width:P,x:s||0,y:o||0,color:S(t.key,a)}}))}}));return I?l.createElement(l.Fragment,null,I(R)):l.createElement(s.Z,{className:u()("visx-bar-stack",n),top:a,left:r},R.map((function(t){return t.bars.map((function(e){return l.createElement(v.Z,j({key:"bar-stack-"+t.index+"-"+e.index,x:e.x,y:e.y,height:e.height,width:e.width,fill:e.color},k))}))})))}var y,C=n(79866),w=n(10577),S=n(27091),A=n(87563),M=n(86059),D=n(29564),Z=n(26720),I=n(96699),k=n(3498),T=n(75712),O=n(61168),P=n(5151),R=n(82173),z=n(32802),F=n(20663),E=n(48379),_=n(28547),U=n(45263),B={top:20,left:0,right:0,bottom:35},L=(0,O.Z)((function(t){var e,n=t.data,l=t.colors,c=t.width,u=t.height,d=t.events,f=void 0!==d&&d,h=t.tooltip,x=void 0===h||h,m=t.margin,g=void 0===m?B:m,v=t.tooltipOpen,p=t.tooltipTop,j=t.tooltipData,A=t.hideTooltip,O=t.showTooltip,L=(0,I.Fg)(),H=(0,D.R)().locale,N=function(t){return t.date},W={textAnchor:"middle",fontSize:12,fontWeight:"bold",fill:L.colors.table.axisLabel},V=u-g.top-g.bottom-10,G=c-g.left-g.right,q=Object.keys(l),K=q.map((function(t){return l[t]})),X=n.map((function(t){return t.total})),Y=(0,z.Z)({padding:.2,range:[0,G],domain:n.map(N)}),$=(0,F.Z)({range:[0,G],domain:(0,i.Z)(n,(function(t){return(0,o.qF)(t.date).toDate()}))}),J=Math.max.apply(Math,(0,r.Z)(X.map((function(t){return Math.abs(t)})))),Q=-J,tt=(0,E.Z)({nice:!1,range:[V,0],domain:[Q,J]}),et=(0,_.Z)({domain:q,range:K}),nt=(0,Z.ff)("white",L.colors.card.bg),at=(0,Z.ff)(L.colors.gray[200],L.colors.gray[700]),rt=(0,Z.ff)(L.colors.gray[800],"white");return(0,U.jsxs)("div",{style:{position:"relative"},children:[(0,U.jsxs)(S.Z,{width:c,height:u,children:[(0,U.jsx)(s.Z,{top:g.top,children:(0,U.jsx)(b,{data:n,keys:q,x:N,color:et,xScale:Y,yScale:tt,offset:"diverging",children:function(t){return t.map((function(t){return t.bars.map((function(e){return(0,U.jsx)("rect",{x:e.x,y:e.y,height:e.height,width:e.width,fill:e.color,onClick:function(){f&&alert("clicked: ".concat(JSON.stringify(e)))},onMouseLeave:function(){y=window.setTimeout((function(){A()}),300)},onMouseMove:function(t){y&&clearTimeout(y);var n=(0,w.Z)(t),a=e.x+e.width/2;O({tooltipData:e,tooltipTop:null===n||void 0===n?void 0:n.y,tooltipLeft:a})}},"bar-stack-".concat(t.index,"-").concat(e.index))}))}))}})}),(0,U.jsx)(C.Z,{strokeWidth:1,hideTicks:!0,top:V/2+g.top,scale:Y,stroke:"white",tickFormat:function(){return""}}),(0,U.jsx)(C.Z,{hideTicks:!0,hideAxisLine:!0,numTicks:5,scale:$,top:u-g.bottom,tickLabelProps:function(){return W}})]}),x&&v&&j&&(0,U.jsx)(P.Z,{top:p,left:j.x,style:(0,a.Z)((0,a.Z)({},R.j),{},{border:"none",backgroundColor:"transparent",paddingTop:0,paddingLeft:0,paddingBottom:0,paddingRight:0}),children:(0,U.jsxs)(k.gC,{p:2,spacing:3,width:"full",alignItems:"flex-start",borderRadius:"lg",borderColor:at,borderWidth:1,color:rt,bgColor:nt,children:[(0,U.jsx)(k.gC,{spacing:4,width:"full",alignItems:"flex-start",children:Object.keys(j.bar.data).filter((function(t){return!["date","total"].includes(t)})).map((function(t){return(0,U.jsxs)(k.gC,{spacing:2,width:"full",alignItems:"flex-start",children:[(0,U.jsx)(T.AssetProvider,{assetId:t,children:(0,U.jsxs)(k.Ug,{spacing:1,children:[(0,U.jsx)(T.AssetProvider.Icon,{size:"2xs"}),(0,U.jsx)(T.AssetProvider.Name,{fontWeight:"bold"}),(0,U.jsx)(T.AssetProvider.Strategy,{color:"gray.500",fontWeight:"bold",prefix:"(",suffix:")"})]})}),(0,U.jsx)(M.Amount.Usd,{abbreviate:!1,fontWeight:"bold",fontSize:"md",value:j.bar.data[t],color:et(t)})]},t)}))}),(0,U.jsx)(k.xv,{fontSize:"xs",color:L.colors.gray[500],children:(e=j.bar.data,(0,o.qF)(N(e)).locale(H).format("LLL"))})]})},Math.random())]})})),H=function(t){var e=t.data,n=t.colors,a=t.labels,r=t.tooltip;return(0,U.jsx)(A.Z,{debounceTime:10,children:function(t){return(0,U.jsx)(L,{width:t.width,height:t.height,data:e,tooltip:r,colors:n,labels:a})}})}},80745:function(t,e,n){n.r(e),n.d(e,{Scrollable:function(){return l}});var a=n(1413),r=n(45987),i=(n(7276),n(3498)),o=n(45263),s=["children"],l=function(t){var e=t.children,n=(0,r.Z)(t,s);return(0,o.jsx)(i.kC,(0,a.Z)((0,a.Z)({flex:1,width:"100%",overflowY:"auto",overflowX:"hidden",direction:"column",alignItems:"flex-start"},n),{},{children:e}))}},61925:function(t,e,n){n.r(e),n.d(e,{TimeframeSelector:function(){return u}});var a=n(1413),r=n(45987),i=(n(7276),n(98440)),o=n(3498),s=n(43127),l=n(45263),c=["timeframe","setTimeframe","variant"],u=function(t){var e=t.timeframe,n=t.setTimeframe,u=t.variant,d=void 0===u?"text":u,f=(0,r.Z)(t,c);return(0,l.jsx)(o.Ug,(0,a.Z)((0,a.Z)({spacing:"button"===d?4:[6,10]},f),{},{children:Object.values(i.W).map((function(t){var a=t===e;switch(d){default:case"text":return(0,l.jsx)(o.xv,{textStyle:"cta",color:"ctaDisabled","aria-selected":a,onClick:function(){return n(t)},children:t.toUpperCase()},"timeframe_".concat(t));case"button":return(0,l.jsx)(s.zx,{px:3,border:0,textStyle:"cta",variant:"filter","aria-selected":a,onClick:function(){return n(t)},children:t.toUpperCase()},"timeframe_".concat(t))}}))}))}},48024:function(t,e,n){n.r(e),n.d(e,{TransactionItem:function(){return u}});var a=n(99594),r=n(87099),i=n(3498),o=n(97778),s=n(15542),l=n(10658),c=n(45263),u=function(t){var e=t.transaction;return(0,c.jsxs)(i.gC,{mb:2,pb:4,spacing:4,width:"100%",alignItems:"flex-start",borderBottomWidth:"1px",borderBottomColor:"divider",children:[(0,c.jsxs)(i.Ug,{width:"100%",justifyContent:"space-between",children:[(0,c.jsx)(i.Ug,{spacing:3,direction:"row",alignItems:"center",children:(0,c.jsx)(s.Translation,{component:i.xv,translation:"transactionRow.".concat(e.action),textStyle:"captionSmall"})}),(0,c.jsx)(i.xv,{textStyle:"captionSmall",children:(0,a.p6)(1e3*+e.timeStamp,r.Cu)})]}),(0,c.jsxs)(i.Ug,{width:"100%",justifyContent:"space-between",children:[(0,c.jsx)(o.TokenAmount,{assetId:e.assetId,amount:e.underlyingAmount,size:"xs",textStyle:"tableCell"}),(0,c.jsx)(l.TransactionLink,{hash:e.hash})]})]})}},18147:function(t,e,n){n.r(e),n.d(e,{TransactionList:function(){return b}});var a=n(1413),r=n(93433),i=n(29439),o=n(45987),s=n(99594),l=n(7276),c=n(54447),u=n(47174),d=n(80745),f=n(3498),h=n(89030),x=n(15542),m=n(1669),g=n(53293),v=n(48024),p=n(45263),j=["assetIds","showTitleOnMobile","fullHeightOnMobile","title","transactions","emptyText"],b=function(t){var e=t.assetIds,n=t.showTitleOnMobile,b=void 0!==n&&n,y=t.fullHeightOnMobile,C=void 0!==y&&y,w=t.title,S=t.transactions,A=t.emptyText,M=(0,o.Z)(t,j),D=(0,u.Y)().account,Z=(0,g.Z)(),I=(0,i.Z)(Z,2),k=I[0],T=I[1],O=(0,m.w)(),P=O.isPortfolioLoaded,R=O.isVaultsPositionsLoaded,z=O.selectors,F=z.selectVaultTransactions,E=z.selectVaultGauge,_=(0,l.useMemo)((function(){return S||(D&&e&&F&&E?e.reduce((function(t,e){var n=E(e),a=F(e),i=n?F(n.id):[];return[].concat((0,r.Z)(t),(0,r.Z)(a),(0,r.Z)(i))}),[]):[])}),[S,D,e,F,E]),U=(0,l.useMemo)((function(){return P&&(!D||R)}),[P,D,R]),B=(0,l.useMemo)((function(){return U?_.length>0?(0,s.Pf)(_,"timeStamp","desc").map((function(t,e){return(0,p.jsx)(v.TransactionItem,{transaction:t},"tx_".concat(t.hash,"_").concat(e))})):(0,p.jsx)(f.kC,{flex:1,minH:250,width:"100%",alignItems:"center",justifyContent:"center",children:(0,p.jsx)(x.Translation,{component:f.xv,translation:A||"assets.assetDetails.assetHistory.emptyTransactions"})}):(0,p.jsxs)(f.gC,{spacing:4,width:"100%",children:[(0,p.jsx)(h.Od,{width:"100%",height:10}),(0,p.jsx)(h.Od,{width:"100%",height:10}),(0,p.jsx)(h.Od,{width:"100%",height:10}),(0,p.jsx)(h.Od,{width:"100%",height:10})]})}),[U,_,A]);return(0,p.jsx)(c.Card,(0,a.Z)((0,a.Z)({flex:1},M),{},{children:(0,p.jsxs)(f.gC,{flex:1,spacing:0,height:"100%",alignItems:"flex-start",ref:k,justifyContent:"flex-start",children:[(0,p.jsx)(x.Translation,{display:b?"block":["none","block"],component:c.Card.Heading,fontSize:"lg",translation:w||"assets.assetDetails.assetHistory.transactionHistory"}),(0,p.jsx)(d.Scrollable,{maxH:[C?"100%":280,Math.max((null===T||void 0===T?void 0:T.height)||400)],children:B})]})}))}},84389:function(t,e,n){n.r(e),n.d(e,{VolumeChart:function(){return o}});var a=n(9220),r=n(50026),i=n(45263),o=function(t){var e=t.assetIds,n=t.timeframe,o=t.dateRange,s=(0,r.D)({assetIds:e,timeframe:n,dateRange:o}),l=s.labels,c=s.colors,u=s.volumeChartData;return s.volumeChartDataLoading?null:(0,i.jsx)(a.HistogramChart,{colors:c,labels:l,data:u.rainbow})}},68414:function(t,e,n){n.d(e,{C:function(){return l}});var a=n(29439),r=n(44888),i=n(7276),o=n(99594),s=n(1669),l=function(t){var e=(0,i.useState)(!0),n=(0,a.Z)(e,2),l=n[0],c=n[1],u=(0,s.w)(),d=u.historicalRates,f=u.historicalPrices,h=u.selectors,x=h.selectAssetsByIds,m=h.selectVaultById,g=h.selectAssetHistoricalPrices,v=h.selectAssetHistoricalRates,p=t.useRates,j=void 0!==p&&p,b=t.assetIds,y=t.timeframe,C=t.dateRange,w=(0,i.useMemo)((function(){return x?x(b):[]}),[b,x]),S=(0,i.useMemo)((function(){return(0,o.yb)(y,C)}),[y,C]),A=(0,a.Z)(S,2),M=A[0],D=A[1],Z=(0,i.useMemo)((function(){var t={total:[],rainbow:[]};if(j){if(!Object.keys(d).length)return t;var e=w.reduce((function(e,n,a){if(!n.id)return e;var i=v(n.id);if(!i)return e;var s=m(n.id),l=(0,o.gA)(1),c=null;return i.forEach((function(i){var u,d=i.date,f=i.value,h="stats"in s&&(null===(u=s.stats)||void 0===u?void 0:u.startTimestamp);if(!(d<(h&&h>M?h:M)||D&&d>D)){if(c&&(0,o.gA)(f).lt(9999)){var x=Math.round((d-c.date)/1e3),m=(0,o.gA)(f).div(100).times(x).div(r.eG);l=l.plus(l.times(m))}var g=l.toNumber();e[d]||(e[d]={date:d,total:0}),n.id&&(e[d][n.id]=g,a||t.total.push({date:d,value:g})),c=i}})),e}),{});t.rainbow=Object.values(e)}else{if(!Object.keys(f).length)return t;var n=w.reduce((function(e,n,a){if(!n.id)return e;var r=g(n.id);if(!r)return e;var i=m(n.id);return r.forEach((function(r){var o,s=r.date,l="stats"in i&&(null===(o=i.stats)||void 0===o?void 0:o.startTimestamp);if(!(s<(l&&l>M?l:M)||D&&s>D)){var c=r.value;e[s]||(e[s]={date:s,total:0}),n.id&&(e[s][n.id]=c,a||t.total.push({date:s,value:c}))}})),e}),{});t.rainbow=Object.values(n)}return t}),[w,f,g,v,d,j,m,M,D]);return(0,i.useEffect)((function(){if(Z.rainbow.length)return c(!1),function(){c(!0)}}),[Z]),{assets:w,performanceChartData:Z,performanceChartDataLoading:l}}},50026:function(t,e,n){n.d(e,{D:function(){return u}});var a=n(4942),r=n(1413),i=n(29439),o=n(44888),s=n(7276),l=n(99594),c=n(1669),u=function(t){var e=t.assetIds,n=t.dateRange,u=t.timeframe,d=t.useDollarConversion,f=void 0===d||d,h=(0,s.useState)(!0),x=(0,i.Z)(h,2),m=x[0],g=x[1],v=(0,c.w)(),p=v.historicalTvls,j=v.selectors,b=j.selectAssetsByIds,y=j.selectAssetHistoricalTvls,C=j.selectAssetHistoricalTvlsUsd,w=(0,s.useMemo)((function(){return b?b(e):[]}),[e,b]),S=(0,s.useMemo)((function(){return(0,l.yb)(u,n)}),[u,n]),A=(0,i.Z)(S,2),M=A[0],D=A[1],Z=(0,s.useMemo)((function(){var t={total:[],rainbow:[]};if(!Object.keys(p).length)return t;var e=w.reduce((function(t,e){if(!e.id)return t;var n=f?C(e.id):y(e.id);if(!n)return t;var a=null;return n.forEach((function(n){var r=n.date;if(!(r<M||D&&r>D)){if(a&&e.id){t[r]||(t[r]={date:r,total:0});var i=(0,l.gA)(n.value).minus(a.value);t[r][e.id]=Number(i.toFixed(8)),t[r].total=Number((0,l.gA)(t[r].total).plus(i).toFixed(8))}a=n}})),t}),{});return t.total=Object.values(e).map((function(t){return{date:t.date,value:t.total}})),t.rainbow=Object.values(e),t}),[w,f,p,y,C,M,D]),I=(0,s.useMemo)((function(){return w.length?w.reduce((function(t,e){return(0,r.Z)((0,r.Z)({},t),{},{labels:(0,r.Z)((0,r.Z)({},t.labels),{},(0,a.Z)({},e.id,e.name)),colors:(0,r.Z)((0,r.Z)({},t.colors),{},(0,a.Z)({},e.id,o.A2[e.type].color))})}),{labels:{},colors:{}}):{labels:{},colors:{}}}),[w]);return(0,s.useEffect)((function(){if(Z.rainbow.length)return g(!1),function(){g(!0)}}),[Z]),{volumeChartData:Z,volumeChartDataLoading:m,labels:I.labels,colors:I.colors}}},36358:function(t,e,n){n.r(e),e.default={}}}]);