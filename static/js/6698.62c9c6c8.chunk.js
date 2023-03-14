"use strict";(self.webpackChunkidle_dashboard_new=self.webpackChunkidle_dashboard_new||[]).push([[6698,219,9220,745,6957,8024,4389],{86698:function(t,e,n){n.r(e),n.d(e,{AssetStats:function(){return B}});var a=n(1413),r=n(93433),i=n(29439),o=n(58383),s=n(54447),l=n(79681),c=n(86059),u=n(44888),d=n(66288),f=n(80745),h=n(61617),x=n(39177),g=n(96957),m=n(97778),p=n(85267),v=n(1669),j=n(84389),y=n(6634),b=n(75712),w=n(99594),C=n(7276),S=n(15568),A=n(18147),M=n(50026),Z=n(61925),T=n(15542),I=n(3498),k=n(98440),D=n(24606),O=n(90219),P=n(68414),z=n(45263),F=function(t){var e=t.translation,n=t.address;return(0,z.jsxs)(I.Ug,{py:4,width:"full",justifyContent:"space-between",borderBottomWidth:"1px",borderBottomColor:"divider",children:[(0,z.jsx)(T.Translation,{translation:e,textStyle:"tableCell"}),(0,z.jsx)(x.AddressLink,{address:n})]})},B=function(t){var e,n,x,B=t.showHeader,E=void 0===B||B,L=t.assetOnly,H=void 0!==L&&L,U=t.showAssetStrategy,W=void 0!==U&&U,R=t.timeframe,_=(0,l.qM)(),V=(0,p.m)().params,G=(0,d.X)().isMobile,N=(0,C.useState)(k.W.WEEK),X=(0,i.Z)(N,2),q=X[0],K=X[1],Y=(0,C.useState)(void 0),$=(0,i.Z)(Y,2),J=$[0],Q=$[1],tt=(0,v.w)(),et=tt.vaults,nt=tt.contracts,at=tt.selectors,rt=at.selectAssetById,it=at.selectVaultById,ot=(0,C.useMemo)((function(){return V.asset&&rt&&rt(V.asset)}),[rt,V.asset]),st=(0,C.useMemo)((function(){return V.asset&&it&&it(V.asset)}),[it,V.asset]),lt=(0,C.useMemo)((function(){return ot&&u.A2[ot.type]}),[ot]),ct=(0,C.useMemo)((function(){return lt&&lt.color}),[lt]),ut=(0,C.useMemo)((function(){if(null!==ot&&void 0!==ot&&ot.type)return W?[ot.type]:["AA","BB"].includes(ot.type)?["AA","BB"]:[ot.type]}),[ot,W]);(0,C.useEffect)((function(){ut&&!J&&Q(ut)}),[J,ut,Q]);var dt=(0,C.useMemo)((function(){if(null===ot||void 0===ot||!ot.type)return[];if(H)return[ot.id];switch(ot.type){case"AA":case"BB":var t=(0,w.sj)(["AA","BB"],ot.type)[0],e=et.find((function(e){return"cdoConfig"in e&&"cdoConfig"in st&&e.type===t&&e.cdoConfig.address===st.cdoConfig.address}));return[ot.id,null===e||void 0===e?void 0:e.id];default:return[ot.id]}}),[ot,st,et,H]),ft=(0,C.useMemo)((function(){return R||q}),[q,R]),ht="BY"===(null===ot||void 0===ot?void 0:ot.type),xt=(0,S.h)({assetIds:dt,timeframe:ft}).rateChartData,gt=(0,M.D)({assetIds:dt,timeframe:ft}).volumeChartData,mt=function(t){var e=t.assetIds,n=t.timeframe,a=t.useDollarConversion,r=void 0===a||a,o=(0,C.useState)(!0),s=(0,i.Z)(o,2),l=s[0],c=s[1],u=(0,v.w)(),d=u.historicalTvls,f=u.selectors,h=f.selectAssetsByIds,x=f.selectAssetHistoricalTvls,g=f.selectAssetHistoricalTvlsUsd,m=(0,C.useMemo)((function(){return h?h(e):[]}),[e,h]),p=(0,C.useMemo)((function(){return n?(0,w.pM)(n):0}),[n]),j=(0,C.useMemo)((function(){var t={total:[],rainbow:[]};if(!Object.keys(d).length)return t;var e=m.reduce((function(e,n,a){if(!n.id)return e;var i=r?g(n.id):x(n.id);return i?(i.forEach((function(r){var i=r.date;if(!(i<p)){var o=r.value;e[i]||(e[i]={date:i,total:0}),n.id&&(e[i][n.id]=o,a||t.total.push({date:i,value:o}))}})),e):e}),{});return t.rainbow=Object.values(e),t}),[m,r,d,x,g,p]);return(0,C.useEffect)((function(){if(j.rainbow.length)return c(!1),function(){c(!0)}}),[j]),{assets:m,tvlChartData:j,tvlChartDataLoading:l}}({assetIds:dt,timeframe:ft}),pt=mt.tvlChartData,vt=(0,D.U)({assetIds:dt}),jt=vt.allocations,yt=vt.colors,bt=vt.labels,wt=(0,P.C)({useRates:ht,assetIds:dt,timeframe:ft}).performanceChartData,Ct=(0,C.useMemo)((function(){var t;return null!==xt&&void 0!==xt&&null!==(t=xt.rainbow)&&void 0!==t&&t.length?(0,z.jsx)(I.Ug,{spacing:4,width:"full",children:dt.map((function(t){var e=rt(t),n=u.A2[e.type].color,a=xt.rainbow.reduce((function(t,n){return(0,w.gA)(n[e.id]).gt(9999)?t:t.plus(n[e.id])}),(0,w.gA)(0)).div(xt.rainbow.length);return(0,z.jsxs)(I.Ug,{spacing:1,alignItems:"baseline",children:[(0,z.jsx)(c.Amount.Percentage,{textStyle:"heading",fontSize:"lg",color:n,value:a}),(0,z.jsx)(T.Translation,{translation:"defi.avgApy",fontSize:"sm",color:"cta"})]},"asset_".concat(t))}))}):null}),[dt,rt,xt]),St=(0,C.useMemo)((function(){return dt.reduce((function(t,e){var n=rt(e);return t=t.plus(n.tvlUsd)}),(0,w.gA)(0))}),[dt,rt]),At=(0,C.useMemo)((function(){var t={data:[],colors:{}};if(!dt)return t;if("best"===(null===lt||void 0===lt?void 0:lt.strategy)){var e=t;return Object.keys(jt).forEach((function(t){var n=(0,o.iL)(t),a=(0,w.gA)(jt[t]),r=St.times(a.div(100));e.colors[t]=yt[t],e.data.push({value:parseFloat(r.toFixed(2)),label:t,extraData:{icon:null===n||void 0===n?void 0:n.icon,color:yt[t],label:bt[t]}})})),e}return dt.reduce((function(t,e){var n=rt(e);return n?(t.colors[e]=u.A2[n.type].color,t.data.push({value:parseFloat((0,w.gA)(n.tvlUsd).toFixed(2)),label:n.id,extraData:{asset:n}}),t):t}),t)}),[St,dt,lt,rt,jt,yt,bt]),Mt=(0,C.useCallback)((function(t){var e,n,a,r,i=At.data.reduce((function(t,e){return t.plus(e.value)}),(0,w.gA)(0)),o=function(t){return"$".concat((0,w.dm)(t))},s=null===t||void 0===t||null===(e=t.extraData)||void 0===e?void 0:e.asset,l=null===t||void 0===t||null===(n=t.extraData)||void 0===n?void 0:n.icon,c=null===t||void 0===t||null===(a=t.extraData)||void 0===a?void 0:a.label,d=null===t||void 0===t||null===(r=t.extraData)||void 0===r?void 0:r.color,f=l||(null===s||void 0===s?void 0:s.icon)||(null===ot||void 0===ot?void 0:ot.icon),h=c||_(s?u.A2[s.type].label:"dashboard.portfolio.totalChart"),x=o(t?t.value:i),g=d||(s?u.A2[null===s||void 0===s?void 0:s.type].color:"#ffffff");return(0,z.jsxs)(z.Fragment,{children:[f&&(0,z.jsx)("image",{y:"35%",href:f,height:"34",width:"34",textAnchor:"middle",x:G?"44.5%":"46.5%"}),(0,z.jsx)("text",{x:"50%",y:"54%",fontSize:26,fill:"white",fontWeight:700,textAnchor:"middle",pointerEvents:"none",children:x}),(0,z.jsx)("text",{x:"50%",y:"61%",fill:g,fontSize:14,fontWeight:400,textAnchor:"middle",pointerEvents:"none",children:h})]})}),[At,ot,_,G]),Zt=(0,C.useMemo)((function(){return xt.total.reduce((function(t,e){return(0,w.gA)(e.value).gt(9999)?t:t.plus(e.value)}),(0,w.gA)(0)).div(xt.total.length)}),[xt]),Tt=(0,C.useMemo)((function(){var t=xt.rainbow.reduce((function(t,e){return dt.forEach((function(n){t[n]||(t[n]=(0,w.gA)(0)),t[n]=t[n].plus(e[n])})),t}),{});return Object.keys(t).reduce((function(e,n){return e[n]=t[n].div(xt.rainbow.length),e}),{})}),[dt,xt]),It=(0,C.useMemo)((function(){return gt.total.reduce((function(t,e){return t.plus(Math.abs(e.value))}),(0,w.gA)(0))}),[gt]),kt=(0,C.useMemo)((function(){return ft?(0,w.pM)(ft):0}),[ft]),Dt=(0,C.useMemo)((function(){var t=dt.reduce((function(t,e){var n=rt(e);return n&&n.collectedFees?[].concat((0,r.Z)(t),(0,r.Z)(n.collectedFees)):t}),[]);return t.filter((function(t){return 1e3*+t.timeStamp>=kt}))}),[dt,rt,kt]),Ot=(0,C.useMemo)((function(){return Dt.reduce((function(t,e){return t.plus(e.underlyingAmount)}),(0,w.gA)(0))}),[Dt]),Pt=(0,C.useMemo)((function(){var t=[];if("tranches"===(null===lt||void 0===lt?void 0:lt.strategy))t.push({address:st.cdoConfig.address,translation:"about.cdo"}),t.push({address:st.strategyConfig.address,translation:"about.strategy"});dt.forEach((function(e){var n=rt(e);if(!n)return null;t.push({address:n.id,translation:["about.".concat(n.type)]})})),u.MQ.forEach((function(e){t.push({address:e,translation:"about.feeCollector"})}));var e=nt.find((function(t){return"Timelock"===t.name}));e&&t.push({address:e.id,translation:"about.timelock"});var n=nt.find((function(t){return"GovernorBravo"===t.name}));return n&&t.push({address:n.id,translation:"about.governance"}),t.map((function(t,e){return(0,z.jsx)(F,(0,a.Z)({},t),e)}))}),[dt,lt,rt,st,nt]),zt=(0,C.useMemo)((function(){return(0,z.jsxs)(I.MI,{spacing:4,width:"full",columns:[1,4],children:[(0,z.jsxs)(s.Card,{children:[(0,z.jsx)(T.Translation,{mb:1,translation:"defi.tvl",textStyle:"captionSmall"}),(0,z.jsx)(c.Amount.Usd,{value:St,textStyle:"ctaStatic",fontSize:"xl"})]}),"tranches"===(null===lt||void 0===lt?void 0:lt.strategy)?(0,z.jsxs)(s.Card,{children:[(0,z.jsx)(T.Translation,{mb:1,translation:"defi.apyRatio",textStyle:"captionSmall"}),(0,z.jsx)(I.Ug,{spacing:5,children:dt.map((function(t){var e=rt(t);return e?(0,z.jsx)(b.AssetProvider,{assetId:t,wrapFlex:!1,children:(0,z.jsx)(b.AssetProvider.ApyRatio,{textStyle:"ctaStatic",color:dt.length>1?"strategies.".concat(e.type):"primary",fontSize:"xl"})},"asset_".concat(t)):null}))})]}):(0,z.jsxs)(s.Card,{children:[(0,z.jsx)(T.Translation,{mb:1,translation:"defi.avgApy",textStyle:"captionSmall"}),(0,z.jsx)(c.Amount.Percentage,{value:Zt,textStyle:"ctaStatic",fontSize:"xl"})]}),(0,z.jsxs)(s.Card,{children:[(0,z.jsx)(T.Translation,{mb:1,translation:"stats.totalVolume",textStyle:"captionSmall"}),(0,z.jsx)(c.Amount.Usd,{value:It,textStyle:"ctaStatic",fontSize:"xl"})]}),(0,z.jsxs)(s.Card,{children:[(0,z.jsx)(T.Translation,{mb:1,translation:"stats.collectedFees",textStyle:"captionSmall"}),(0,z.jsx)(m.TokenAmount,{assetId:null===ot||void 0===ot?void 0:ot.id,amount:Ot,showIcon:!1,textStyle:"ctaStatic",fontSize:"xl"})]})]})}),[St,Zt,It,dt,ot,Ot,rt,lt]);return(0,z.jsx)(b.AssetProvider,{assetId:V.asset,wrapFlex:!1,children:(0,z.jsxs)(I.gC,{spacing:16,width:"full",children:[E&&(0,z.jsxs)(I.Kq,{mt:14,width:"100%",spacing:[4,10],alignItems:["flex-start","center"],justifyContent:"flex-start",direction:["column","row"],children:[(0,z.jsx)(h.AssetLabel,{assetId:V.asset,fontSize:"h2"}),(0,z.jsxs)(I.Kq,{pb:3,flex:1,spacing:[4,0],borderBottom:"1px solid",borderColor:"divider",justifyContent:"space-between",direction:["column","row"],alignItems:["flex-start","center"],children:[(0,z.jsxs)(I.Ug,{spacing:6,width:["full","auto"],justifyContent:"flex-start",children:[(0,z.jsxs)(I.Ug,{spacing:0,position:"relative",children:[(0,z.jsx)(g.StrategyTag,{strategy:null===lt||void 0===lt?void 0:lt.strategy,py:2}),(0,z.jsx)(I.kC,{top:"-12px",right:"-12px",position:"absolute",children:(0,z.jsx)(b.AssetProvider.Strategies,{})})]}),null===lt||void 0===lt||null===(e=lt.stats)||void 0===e||null===(n=e.header)||void 0===n||null===(x=n.fields)||void 0===x?void 0:x.map((function(t){return(0,z.jsx)(b.AssetProvider.GeneralData,{field:t,color:"cta"},"field_".concat(t))}))]}),(0,z.jsx)(Z.TimeframeSelector,{variant:"button",timeframe:q,setTimeframe:K,width:["100%","auto"],justifyContent:["center","initial"]})]})]}),zt,!H&&"tranches"===(null===lt||void 0===lt?void 0:lt.strategy)&&(0,z.jsx)(I.MI,{spacing:4,width:"full",columns:[1,2],children:dt.map((function(t){var e,n,a=rt(t);return(0,z.jsx)(b.AssetProvider,{wrapFlex:!1,assetId:a.id,children:(0,z.jsxs)(I.gC,{spacing:6,width:"full",alignItems:"flex-start",children:[(0,z.jsx)(T.Translation,{translation:u.A2[a.type].label,textStyle:"ctaStatic",fontWeight:600,fontSize:"lg"}),(0,z.jsxs)(I.MI,{spacing:4,columns:2,width:"full",children:[(0,z.jsxs)(s.Card,{children:[(0,z.jsx)(T.Translation,{mb:1,translation:"defi.avgApy",textStyle:"captionSmall"}),(0,z.jsx)(c.Amount.Percentage,{value:Tt[t],textStyle:"ctaStatic",color:"strategies.".concat(a.type),fontSize:"xl"})]}),null===(e=u.A2[a.type].stats)||void 0===e||null===(n=e.strategyData)||void 0===n?void 0:n.fields.map((function(t){return(0,z.jsxs)(s.Card,{children:[(0,z.jsx)(T.Translation,{mb:1,translation:"stats.".concat(t),textStyle:"captionSmall"}),(0,z.jsx)(b.AssetProvider.GeneralData,{field:t,textStyle:"ctaStatic",fontSize:"xl"})]},"field_".concat(t))}))]})]})},"row_".concat(t))}))}),(0,z.jsxs)(I.gC,{spacing:20,width:"full",children:[(0,z.jsxs)(I.Kq,{spacing:6,width:"full",direction:["column","row"],children:[(0,z.jsxs)(I.gC,{spacing:6,width:["full",2/3],alignItems:"flex-start",children:[(0,z.jsx)(T.Translation,{translation:"stats.performances",component:I.X6,as:"h3",textStyle:"heading",fontSize:"lg"}),(0,z.jsx)(s.Card.Dark,{p:6,children:(0,z.jsxs)(I.gC,{spacing:4,width:"full",children:[Ct,(0,z.jsx)(y.GenericChart,{percentChange:0,assetIds:dt,color:ct,maxMinEnabled:!0,isRainbowChart:!0,data:wt,setPercentChange:function(){},timeframe:ft,height:G?"300px":"350px",margins:{top:10,right:0,bottom:60,left:0},formatFn:function(t){return"$".concat((0,w.dm)(t,3))}})]})})]}),(0,z.jsxs)(I.gC,{flex:1,spacing:6,width:["full","auto"],alignItems:"flex-start",children:[(0,z.jsx)(T.Translation,{translation:"stats.tvlDistribution",component:I.X6,as:"h3",textStyle:"heading",fontSize:"lg"}),(0,z.jsx)(s.Card.Dark,{p:6,flex:1,children:(0,z.jsx)(O.DonutChart,(0,a.Z)((0,a.Z)({},At),{},{getSliceData:Mt}))})]})]}),(0,z.jsxs)(I.MI,{spacing:6,width:"full",columns:[1,3],children:[(0,z.jsxs)(I.gC,{spacing:6,width:"full",alignItems:"flex-start",children:[(0,z.jsx)(T.Translation,{translation:"defi.tvl",component:I.X6,as:"h3",textStyle:"heading",fontSize:"lg"}),(0,z.jsx)(s.Card.Dark,{p:6,children:(0,z.jsx)(y.GenericChart,{percentChange:0,assetIds:dt,maxMinEnabled:!0,isRainbowChart:!0,color:ct,data:pt,setPercentChange:function(){},timeframe:ft,height:G?"300px":"350px",margins:{top:10,right:0,bottom:60,left:0}})})]}),(0,z.jsxs)(I.gC,{spacing:6,width:"full",alignItems:"flex-start",children:[(0,z.jsx)(T.Translation,{translation:"defi.apy",component:I.X6,as:"h3",textStyle:"heading",fontSize:"lg"}),(0,z.jsx)(s.Card.Dark,{p:6,children:(0,z.jsx)(y.GenericChart,{percentChange:0,assetIds:dt,data:xt,color:ct,maxMinEnabled:!0,isRainbowChart:!0,setPercentChange:function(){},timeframe:ft,height:G?"300px":"350px",formatFn:function(t){return"".concat((0,w.rp)(t))},margins:{top:10,right:0,bottom:60,left:0}})})]}),(0,z.jsxs)(I.gC,{spacing:6,width:"full",alignItems:"flex-start",children:[(0,z.jsx)(T.Translation,{translation:"stats.volumes",component:I.X6,as:"h3",textStyle:"heading",fontSize:"lg"}),(0,z.jsx)(s.Card.Dark,{p:6,flex:1,children:(0,z.jsx)(j.VolumeChart,{timeframe:ft,assetIds:dt})})]})]})]}),(0,z.jsxs)(I.MI,{width:"full",spacing:6,columns:[1,2],children:[(0,z.jsx)(A.TransactionList,{assetIds:dt,transactions:Dt,showTitleOnMobile:!0,title:"stats.collectedFees",emptyText:"stats.collectedFeesEmpty",maxH:600}),(0,z.jsx)(s.Card,{children:(0,z.jsxs)(I.gC,{flex:1,spacing:0,height:"100%",alignItems:"flex-start",justifyContent:"flex-start",children:[(0,z.jsx)(T.Translation,{component:s.Card.Heading,translation:"common.about"}),(0,z.jsx)(f.Scrollable,{maxH:600,children:Pt})]})})]})]})})}},90219:function(t,e,n){n.r(e),n.d(e,{DonutChart:function(){return p},PieChart:function(){return h}});var a=n(1413),r=n(29439),i=n(14380),o=n(7276),s=n(28547),l=n(87563),c=n(68165),u=n(77806),d=n(45263),f={top:0,right:0,bottom:0,left:0};function h(t){var e=t.data,n=t.colors,l=t.width,c=t.height,h=t.margin,x=void 0===h?f:h,g=t.animate,p=void 0===g||g,v=t.getSliceData,j=(0,o.useState)(null),y=(0,r.Z)(j,2),b=y[0],w=y[1],C=l-x.left-x.right,S=c-x.top-x.bottom,A=Math.min(C,S)/2,M=S/2,Z=C/2,T=e.map((function(t){return t.label})),I=T.map((function(t){return n[t]})),k=(0,s.Z)({domain:T,range:I}),D=v&&v(b);return(0,d.jsxs)("svg",{width:l,height:c,children:[(0,d.jsx)("rect",{rx:14,width:l,height:c,fill:"url('#visx-pie-gradient')"}),D,(0,d.jsx)(i.Z,{top:M+x.top,left:Z+x.left,children:(0,d.jsx)(u.Z,{padAngle:0,cornerRadius:0,pieValue:function(t){return t.value},outerRadius:A,innerRadius:A-30,data:e,children:function(t){return(0,d.jsx)(m,(0,a.Z)((0,a.Z)({},t),{},{animate:p,onMouseOver:function(t){var e=t.data;return w(e)},getKey:function(t){return t.data.label},onMouseOut:function(){return w(null)},getColor:function(t){return k(t.data.label)}}))}})})]})}var x=function(t){var e=t.endAngle;return{startAngle:e>Math.PI?2*Math.PI:0,endAngle:e>Math.PI?2*Math.PI:0,opacity:0}},g=function(t){return{startAngle:t.startAngle,endAngle:t.endAngle,opacity:1}};function m(t){var e=t.animate,n=t.arcs,r=t.path,i=t.getKey,o=t.getColor,s=t.onMouseOut,l=t.onMouseOver,u=t.onClickDatum;return(0,c.useTransition)(n,{from:e?x:g,enter:g,update:g,leave:e?x:g,keys:i})((function(t,e){return(0,d.jsx)("g",{children:(0,d.jsx)(c.animated.path,{d:(0,c.interpolate)([t.startAngle,t.endAngle],(function(t,n){return r((0,a.Z)((0,a.Z)({},e),{},{startAngle:t,endAngle:n}))})),fill:o(e),onClick:function(){return u&&u(e)},onMouseOver:function(){return l&&l(e)},onMouseOut:function(){return s&&s(e)},onTouchStart:function(){return u&&u(e)}})},Math.random())}))}var p=function(t){var e=t.data,n=t.colors,a=t.getSliceData;return(0,d.jsx)(l.Z,{debounceTime:10,children:function(t){return(0,d.jsx)(h,{data:e,colors:n,width:t.width,height:t.height,getSliceData:a})}})}},9220:function(t,e,n){n.r(e),n.d(e,{HistogramChart:function(){return R}});var a=n(1413),r=n(93433),i=n(57118),o=n(99594),s=n(14380),l=n(7276),c=n(84033),u=n.n(c),d=n(64625),f=n(46177),h=n(97862),x=n(57478),g=n(25908),m=n(12528),p=n(23369),v=["data","className","top","left","x","y0","y1","xScale","yScale","color","keys","value","order","offset","children"];function j(){return j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},j.apply(this,arguments)}function y(t){var e=t.data,n=t.className,a=t.top,r=t.left,i=t.x,o=t.y0,c=void 0===o?f.l8:o,y=t.y1,b=void 0===y?f.xf:y,w=t.xScale,C=t.yScale,S=t.color,A=t.keys,M=t.value,Z=t.order,T=t.offset,I=t.children,k=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,v),D=(0,d.Z)();A&&D.keys(A),M&&(0,x.Z)(D.value,M),Z&&D.order((0,g.ZP)(Z)),T&&D.offset((0,m.ZP)(T));var O=D(e),P=(0,h.Z)(w),z=O.map((function(t,e){var n=t.key;return{index:e,key:n,bars:t.map((function(e,a){var r=(C(c(e))||0)-(C(b(e))||0),o=C(b(e)),s="bandwidth"in w?w(i(e.data)):Math.max((w(i(e.data))||0)-P/2);return{bar:e,key:n,index:a,height:r,width:P,x:s||0,y:o||0,color:S(t.key,a)}}))}}));return I?l.createElement(l.Fragment,null,I(z)):l.createElement(s.Z,{className:u()("visx-bar-stack",n),top:a,left:r},z.map((function(t){return t.bars.map((function(e){return l.createElement(p.Z,j({key:"bar-stack-"+t.index+"-"+e.index,x:e.x,y:e.y,height:e.height,width:e.width,fill:e.color},k))}))})))}var b,w=n(79866),C=n(10577),S=n(27091),A=n(87563),M=n(86059),Z=n(29564),T=n(26720),I=n(96699),k=n(3498),D=n(75712),O=n(61168),P=n(5151),z=n(82173),F=n(32802),B=n(20663),E=n(48379),L=n(28547),H=n(45263),U={top:20,left:0,right:0,bottom:35},W=(0,O.Z)((function(t){var e,n=t.data,l=t.colors,c=t.width,u=t.height,d=t.events,f=void 0!==d&&d,h=t.tooltip,x=void 0===h||h,g=t.margin,m=void 0===g?U:g,p=t.tooltipOpen,v=t.tooltipTop,j=t.tooltipData,A=t.hideTooltip,O=t.showTooltip,W=(0,I.Fg)(),R=(0,Z.R)().locale,_=function(t){return t.date},V={textAnchor:"middle",fontSize:12,fontWeight:"bold",fill:W.colors.table.axisLabel},G=u-m.top-m.bottom-10,N=c-m.left-m.right,X=Object.keys(l),q=X.map((function(t){return l[t]})),K=n.map((function(t){return t.total})),Y=(0,F.Z)({padding:.2,range:[0,N],domain:n.map(_)}),$=(0,B.Z)({range:[0,N],domain:(0,i.Z)(n,(function(t){return(0,o.qF)(t.date).toDate()}))}),J=Math.max.apply(Math,(0,r.Z)(K.map((function(t){return Math.abs(t)})))),Q=-J,tt=(0,E.Z)({nice:!1,range:[G,0],domain:[Q,J]}),et=(0,L.Z)({domain:X,range:q}),nt=(0,T.ff)("white",W.colors.card.bg),at=(0,T.ff)(W.colors.gray[200],W.colors.gray[700]),rt=(0,T.ff)(W.colors.gray[800],"white");return(0,H.jsxs)("div",{style:{position:"relative"},children:[(0,H.jsxs)(S.Z,{width:c,height:u,children:[(0,H.jsx)(s.Z,{top:m.top,children:(0,H.jsx)(y,{data:n,keys:X,x:_,color:et,xScale:Y,yScale:tt,offset:"diverging",children:function(t){return t.map((function(t){return t.bars.map((function(e){return(0,H.jsx)("rect",{x:e.x,y:e.y,height:e.height,width:e.width,fill:e.color,onClick:function(){f&&alert("clicked: ".concat(JSON.stringify(e)))},onMouseLeave:function(){b=window.setTimeout((function(){A()}),300)},onMouseMove:function(t){b&&clearTimeout(b);var n=(0,C.Z)(t),a=e.x+e.width/2;O({tooltipData:e,tooltipTop:null===n||void 0===n?void 0:n.y,tooltipLeft:a})}},"bar-stack-".concat(t.index,"-").concat(e.index))}))}))}})}),(0,H.jsx)(w.Z,{strokeWidth:1,hideTicks:!0,top:G/2+m.top,scale:Y,stroke:"white",tickFormat:function(){return""}}),(0,H.jsx)(w.Z,{hideTicks:!0,hideAxisLine:!0,numTicks:5,scale:$,top:u-m.bottom,tickLabelProps:function(){return V}})]}),x&&p&&j&&(0,H.jsx)(P.Z,{top:v,left:j.x,style:(0,a.Z)((0,a.Z)({},z.j),{},{border:"none",backgroundColor:"transparent",paddingTop:0,paddingLeft:0,paddingBottom:0,paddingRight:0}),children:(0,H.jsxs)(k.gC,{p:2,spacing:3,width:"full",alignItems:"flex-start",borderRadius:"lg",borderColor:at,borderWidth:1,color:rt,bgColor:nt,children:[(0,H.jsx)(k.gC,{spacing:4,width:"full",alignItems:"flex-start",children:Object.keys(j.bar.data).filter((function(t){return!["date","total"].includes(t)})).map((function(t){return(0,H.jsxs)(k.gC,{spacing:2,width:"full",alignItems:"flex-start",children:[(0,H.jsx)(D.AssetProvider,{assetId:t,children:(0,H.jsxs)(k.Ug,{spacing:1,children:[(0,H.jsx)(D.AssetProvider.Icon,{size:"2xs"}),(0,H.jsx)(D.AssetProvider.Name,{fontWeight:"bold"}),(0,H.jsx)(D.AssetProvider.Strategy,{color:"gray.500",fontWeight:"bold",prefix:"(",suffix:")"})]})}),(0,H.jsx)(M.Amount.Usd,{abbreviate:!1,fontWeight:"bold",fontSize:"md",value:j.bar.data[t],color:et(t)})]},t)}))}),(0,H.jsx)(k.xv,{fontSize:"xs",color:W.colors.gray[500],children:(e=j.bar.data,(0,o.qF)(_(e)).locale(R).format("LLL"))})]})},Math.random())]})})),R=function(t){var e=t.data,n=t.colors,a=t.labels,r=t.tooltip;return(0,H.jsx)(A.Z,{debounceTime:10,children:function(t){return(0,H.jsx)(W,{width:t.width,height:t.height,data:e,tooltip:r,colors:n,labels:a})}})}},80745:function(t,e,n){n.r(e),n.d(e,{Scrollable:function(){return l}});var a=n(1413),r=n(45987),i=(n(7276),n(3498)),o=n(45263),s=["children"],l=function(t){var e=t.children,n=(0,r.Z)(t,s);return(0,o.jsx)(i.kC,(0,a.Z)((0,a.Z)({flex:1,width:"100%",overflowY:"auto",overflowX:"hidden",direction:"column",alignItems:"flex-start"},n),{},{children:e}))}},96957:function(t,e,n){n.r(e),n.d(e,{StrategyTag:function(){return c}});var a=n(1413),r=n(45987),i=n(94586),o=n(15542),s=n(45263),l=["strategy"],c=function(t){var e=t.strategy,n=(0,r.Z)(t,l);return e?(0,s.jsx)(o.Translation,(0,a.Z)({px:4,py:"5.5px",component:i.Vp,fontWeight:600,color:"primary",bg:"tags.".concat(e),translation:"strategies.".concat(e,".label")},n)):null}},48024:function(t,e,n){n.r(e),n.d(e,{TransactionItem:function(){return u}});var a=n(99594),r=n(87099),i=n(3498),o=n(97778),s=n(15542),l=n(10658),c=n(45263),u=function(t){var e=t.transaction;return(0,c.jsxs)(i.gC,{mb:2,pb:4,spacing:4,width:"100%",alignItems:"flex-start",borderBottomWidth:"1px",borderBottomColor:"divider",children:[(0,c.jsxs)(i.Ug,{width:"100%",justifyContent:"space-between",children:[(0,c.jsx)(i.Ug,{spacing:3,direction:"row",alignItems:"center",children:(0,c.jsx)(s.Translation,{component:i.xv,translation:"transactionRow.".concat(e.action),textStyle:"captionSmall"})}),(0,c.jsx)(i.xv,{textStyle:"captionSmall",children:(0,a.p6)(1e3*+e.timeStamp,r.Cu)})]}),(0,c.jsxs)(i.Ug,{width:"100%",justifyContent:"space-between",children:[(0,c.jsx)(o.TokenAmount,{assetId:e.assetId,amount:e.underlyingAmount,size:"xs",textStyle:"tableCell"}),(0,c.jsx)(l.TransactionLink,{hash:e.hash})]})]})}},18147:function(t,e,n){n.r(e),n.d(e,{TransactionList:function(){return y}});var a=n(1413),r=n(93433),i=n(29439),o=n(45987),s=n(99594),l=n(7276),c=n(54447),u=n(88935),d=n(80745),f=n(3498),h=n(89030),x=n(15542),g=n(1669),m=n(53293),p=n(48024),v=n(45263),j=["assetIds","showTitleOnMobile","fullHeightOnMobile","title","transactions","emptyText"],y=function(t){var e=t.assetIds,n=t.showTitleOnMobile,y=void 0!==n&&n,b=t.fullHeightOnMobile,w=void 0!==b&&b,C=t.title,S=t.transactions,A=t.emptyText,M=(0,o.Z)(t,j),Z=(0,u.Y)().account,T=(0,m.Z)(),I=(0,i.Z)(T,2),k=I[0],D=I[1],O=(0,g.w)(),P=O.isPortfolioLoaded,z=O.isVaultsPositionsLoaded,F=O.selectors,B=F.selectVaultTransactions,E=F.selectVaultGauge,L=(0,l.useMemo)((function(){return S||(Z&&e&&B&&E?e.reduce((function(t,e){var n=E(e),a=B(e),i=n?B(n.id):[];return[].concat((0,r.Z)(t),(0,r.Z)(a),(0,r.Z)(i))}),[]):[])}),[S,Z,e,B,E]),H=(0,l.useMemo)((function(){return P&&(!Z||z)}),[P,Z,z]),U=(0,l.useMemo)((function(){return H?L.length>0?(0,s.Pf)(L,"timeStamp","desc").map((function(t,e){return(0,v.jsx)(p.TransactionItem,{transaction:t},"tx_".concat(t.hash,"_").concat(e))})):(0,v.jsx)(f.kC,{flex:1,minH:250,width:"100%",alignItems:"center",justifyContent:"center",children:(0,v.jsx)(x.Translation,{component:f.xv,translation:A||"assets.assetDetails.assetHistory.emptyTransactions"})}):(0,v.jsxs)(f.gC,{spacing:4,width:"100%",children:[(0,v.jsx)(h.Od,{width:"100%",height:10}),(0,v.jsx)(h.Od,{width:"100%",height:10}),(0,v.jsx)(h.Od,{width:"100%",height:10}),(0,v.jsx)(h.Od,{width:"100%",height:10})]})}),[H,L,A]);return(0,v.jsx)(c.Card,(0,a.Z)((0,a.Z)({flex:1},M),{},{children:(0,v.jsxs)(f.gC,{flex:1,spacing:0,height:"100%",alignItems:"flex-start",ref:k,justifyContent:"flex-start",children:[(0,v.jsx)(x.Translation,{display:y?"block":["none","block"],component:c.Card.Heading,fontSize:"lg",translation:C||"assets.assetDetails.assetHistory.transactionHistory"}),(0,v.jsx)(d.Scrollable,{maxH:[w?"100%":280,Math.max((null===D||void 0===D?void 0:D.height)||400)],children:U})]})}))}},84389:function(t,e,n){n.r(e),n.d(e,{VolumeChart:function(){return o}});var a=n(9220),r=n(50026),i=n(45263),o=function(t){var e=t.assetIds,n=t.timeframe,o=(0,r.D)({assetIds:e,timeframe:n}),s=o.labels,l=o.colors,c=o.volumeChartData;return o.volumeChartDataLoading?null:(0,i.jsx)(a.HistogramChart,{colors:l,labels:s,data:c.rainbow})}},50026:function(t,e,n){n.d(e,{D:function(){return u}});var a=n(4942),r=n(1413),i=n(29439),o=n(44888),s=n(7276),l=n(99594),c=n(1669),u=function(t){var e=t.assetIds,n=t.timeframe,u=t.useDollarConversion,d=void 0===u||u,f=(0,s.useState)(!0),h=(0,i.Z)(f,2),x=h[0],g=h[1],m=(0,c.w)(),p=m.historicalTvls,v=m.selectors,j=v.selectAssetsByIds,y=v.selectAssetHistoricalTvls,b=v.selectAssetHistoricalTvlsUsd,w=(0,s.useMemo)((function(){return j?j(e):[]}),[e,j]),C=(0,s.useMemo)((function(){return n?(0,l.pM)(n):0}),[n]),S=(0,s.useMemo)((function(){var t={total:[],rainbow:[]};if(!Object.keys(p).length)return t;var e=w.reduce((function(t,e){if(!e.id)return t;var n=d?b(e.id):y(e.id);if(!n)return t;var a=null;return n.forEach((function(n){var r=n.date;if(!(r<C)){if(a&&e.id){t[r]||(t[r]={date:r,total:0});var i=(0,l.gA)(n.value).minus(a.value);t[r][e.id]=Number(i.toFixed(8)),t[r].total=Number((0,l.gA)(t[r].total).plus(i).toFixed(8))}a=n}})),t}),{});return t.total=Object.values(e).map((function(t){return{date:t.date,value:t.total}})),t.rainbow=Object.values(e),t}),[w,d,p,y,b,C]),A=(0,s.useMemo)((function(){return w.length?w.reduce((function(t,e){return(0,r.Z)((0,r.Z)({},t),{},{labels:(0,r.Z)((0,r.Z)({},t.labels),{},(0,a.Z)({},e.id,e.name)),colors:(0,r.Z)((0,r.Z)({},t.colors),{},(0,a.Z)({},e.id,o.A2[e.type].color))})}),{labels:{},colors:{}}):{labels:{},colors:{}}}),[w]);return(0,s.useEffect)((function(){if(S.rainbow.length)return g(!1),function(){g(!0)}}),[S]),{volumeChartData:S,volumeChartDataLoading:x,labels:A.labels,colors:A.colors}}}}]);