"use strict";(self.webpackChunkidle_dashboard_new=self.webpackChunkidle_dashboard_new||[]).push([[6698,219,9220,6957,4389],{86698:function(t,e,n){n.r(e),n.d(e,{AssetStats:function(){return D}});var a=n(1413),r=n(93433),i=n(29439),o=n(54447),s=n(79681),l=n(87099),c=n(86059),u=n(12056),d=n(66288),f=n(61617),h=n(96957),g=n(15542),m=n(97778),x=n(85267),p=n(1669),v=n(84389),j=n(6634),b=n(75712),y=n(99594),w=n(7276),C=n(98440),S=n(15568),A=n(3498),M=n(50026),Z=n(61925),k=n(90219),I=n(68414),T=n(45263),D=function(t){var e,n,D,O=t.showHeader,P=void 0===O||O,z=t.showAssetStrategy,F=void 0!==z&&z,B=t.timeframe,E=(0,s.qM)(),L=(0,x.m)().params,W=(0,d.X)().isMobile,U=(0,w.useState)(C.W["6MONTHS"]),R=(0,i.Z)(U,2),H=R[0],N=R[1],q=(0,p.w)(),G=q.vaults,V=q.selectors,X=V.selectAssetById,K=V.selectVaultById,_=(0,w.useState)(void 0),J=(0,i.Z)(_,2),$=J[0],Q=J[1],Y=(0,w.useMemo)((function(){return L.asset&&X&&X(L.asset)}),[X,L.asset]),tt=(0,w.useMemo)((function(){return L.asset&&K&&K(L.asset)}),[K,L.asset]),et=(0,w.useMemo)((function(){return Y&&u.A[Y.type]}),[Y]),nt=(0,w.useMemo)((function(){return et&&et.color}),[et]),at=(0,w.useMemo)((function(){if(null!==Y&&void 0!==Y&&Y.type)return F?[Y.type]:["AA","BB"].includes(Y.type)?["AA","BB"]:[Y.type]}),[Y,F]);(0,w.useEffect)((function(){at&&!$&&Q(at)}),[$,at,Q]);var rt=(0,w.useMemo)((function(){if(null===Y||void 0===Y||!Y.type)return[];switch(Y.type){case"AA":case"BB":var t=(0,y.sj)(["AA","BB"],Y.type)[0],e=G.find((function(e){return"cdoConfig"in e&&"cdoConfig"in tt&&e.type===t&&e.cdoConfig.address===tt.cdoConfig.address}));return[Y.id,null===e||void 0===e?void 0:e.id];default:return[Y.id]}}),[Y,tt,G]),it=(0,w.useMemo)((function(){return $?rt.filter((function(t){var e=X(t);return e&&$.includes(e.type)})):[]}),[X,rt,$]),ot=(0,w.useMemo)((function(){return B||H}),[H,B]),st=(0,M.D)({assetIds:it,timeframe:ot}).volumeChartData,lt=function(t){var e=t.assetIds,n=t.timeframe,a=t.useDollarConversion,r=void 0===a||a,o=(0,w.useState)(!0),s=(0,i.Z)(o,2),l=s[0],c=s[1],u=(0,p.w)(),d=u.historicalTvls,f=u.selectors,h=f.selectAssetsByIds,g=f.selectAssetHistoricalTvls,m=f.selectAssetHistoricalTvlsUsd,x=(0,w.useMemo)((function(){return h?h(e):[]}),[e,h]),v=(0,w.useMemo)((function(){return n?(0,y.pM)(n):0}),[n]),j=(0,w.useMemo)((function(){var t={total:[],rainbow:[]};if(!Object.keys(d).length)return t;var e=x.reduce((function(e,n,a){if(!n.id)return e;var i=r?m(n.id):g(n.id);return i?(i.forEach((function(r){var i=r.date;if(!(i<v)){var o=r.value;e[i]||(e[i]={date:i,total:0}),n.id&&(e[i][n.id]=o,a||t.total.push({date:i,value:o}))}})),e):e}),{});return t.rainbow=Object.values(e),t}),[x,r,d,g,m,v]);return(0,w.useEffect)((function(){if(j.rainbow.length)return c(!1),function(){c(!0)}}),[j]),{assets:x,tvlChartData:j,tvlChartDataLoading:l}}({assetIds:it,timeframe:ot}),ct=lt.tvlChartData,ut=(0,I.C)({assetIds:it,timeframe:ot}).performanceChartData,dt=(0,S.h)({assetIds:it,timeframe:ot}).rateChartData,ft=((0,w.useCallback)((function(t){!$||1===$.length&&$.includes(t)||($.includes(t)?Q($.filter((function(e){return e!==t}))):Q([].concat((0,r.Z)($),[t])))}),[$,Q]),(0,w.useMemo)((function(){var t;return null!==ut&&void 0!==ut&&null!==(t=ut.rainbow)&&void 0!==t&&t.length?(0,T.jsx)(A.Ug,{spacing:4,width:"full",children:it.map((function(t){X(t);var e=et.color,n=ut.rainbow[0],a=ut.rainbow[ut.rainbow.length-1],r=Math.round((a.date-n.date)/1e3),i=(0,y.gA)(a[t]).div(n[t]).minus(1).times(l.eG).div(r).times(100);return(0,T.jsxs)(A.Ug,{spacing:1,alignItems:"baseline",children:[(0,T.jsx)(c.Amount.Percentage,{textStyle:"heading",fontSize:"lg",color:e,value:i}),(0,T.jsx)(g.Translation,{translation:"defi.apy",fontSize:"sm",color:e})]},"asset_".concat(t))}))}):null}),[it,X,et,ut])),ht=(0,w.useMemo)((function(){var t={data:[],colors:{}};return it?it.reduce((function(t,e){var n=X(e);return n?(t.colors[e]=et.color,t.data.push({value:parseFloat((0,y.gA)(n.tvlUsd).toFixed(2)),label:n.id,extraData:{asset:n}}),t):t}),t):t}),[it,et,X]),gt=(0,w.useCallback)((function(t){var e,n=ht.data.reduce((function(t,e){return t.plus(e.value)}),(0,y.gA)(0)),a=function(t){return"$".concat((0,y.dm)(t))},r=null===t||void 0===t||null===(e=t.extraData)||void 0===e?void 0:e.asset,i=(null===r||void 0===r?void 0:r.icon)||(null===Y||void 0===Y?void 0:Y.icon),o=E(r?u.A[r.type].label:"dashboard.portfolio.totalChart"),s=a(t?t.value:n),l=r?u.A[null===r||void 0===r?void 0:r.type].color:"#ffffff";return(0,T.jsxs)(T.Fragment,{children:[i&&(0,T.jsx)("image",{y:"35%",href:i,height:"34",width:"34",textAnchor:"middle",x:W?"44.5%":"46.5%"}),(0,T.jsx)("text",{x:"50%",y:"54%",fontSize:26,fill:"white",fontWeight:600,textAnchor:"middle",pointerEvents:"none",children:s}),(0,T.jsx)("text",{x:"50%",y:"61%",fill:l,fontSize:14,fontWeight:400,textAnchor:"middle",pointerEvents:"none",children:o})]})}),[ht,Y,E,W]),mt=(0,w.useMemo)((function(){return dt.total.reduce((function(t,e){return t.plus(e.value)}),(0,y.gA)(0)).div(dt.total.length)}),[dt]),xt=(0,w.useMemo)((function(){var t=dt.rainbow.reduce((function(t,e){return rt.forEach((function(n){t[n]||(t[n]=(0,y.gA)(0)),t[n]=t[n].plus(e[n])})),t}),{});return Object.keys(t).reduce((function(e,n){return e[n]=t[n].div(dt.rainbow.length),e}),{})}),[rt,dt]),pt=(0,w.useMemo)((function(){var t;return(0,y.d5)(null===(t=ct.total[ct.total.length-1])||void 0===t?void 0:t.value)}),[ct]),vt=(0,w.useMemo)((function(){return st.total.reduce((function(t,e){return t.plus(Math.abs(e.value))}),(0,y.gA)(0))}),[st]),jt=(0,w.useMemo)((function(){return ot?(0,y.pM)(ot):0}),[ot]),bt=(0,w.useMemo)((function(){return null!==Y&&void 0!==Y&&Y.collectedFees?Y.collectedFees.filter((function(t){return t.date>=jt})).reduce((function(t,e){return t.plus(e.value)}),(0,y.gA)(0)):(0,y.gA)(0)}),[Y,jt]);return(0,T.jsx)(b.AssetProvider,{assetId:L.asset,wrapFlex:!1,children:(0,T.jsxs)(A.gC,{spacing:16,width:"full",children:[P&&(0,T.jsxs)(A.Kq,{mt:14,width:"100%",spacing:[4,10],alignItems:["flex-start","center"],justifyContent:"flex-start",direction:["column","row"],children:[(0,T.jsx)(f.AssetLabel,{assetId:L.asset,fontSize:"h2"}),(0,T.jsxs)(A.Kq,{pb:3,flex:1,spacing:[4,0],borderBottom:"1px solid",borderColor:"divider",justifyContent:"space-between",direction:["column","row"],alignItems:["flex-start","center"],children:[(0,T.jsxs)(A.Ug,{spacing:4,width:["full","auto"],justifyContent:"flex-start",children:[(0,T.jsx)(h.StrategyTag,{strategy:null===et||void 0===et?void 0:et.strategy,py:2}),null===et||void 0===et||null===(e=et.stats)||void 0===e||null===(n=e.header)||void 0===n||null===(D=n.fields)||void 0===D?void 0:D.map((function(t){return(0,T.jsx)(b.AssetProvider.GeneralData,{field:t})}))]}),(0,T.jsx)(Z.TimeframeSelector,{variant:"button",timeframe:H,setTimeframe:N,width:["100%","auto"],justifyContent:["center","initial"]})]})]}),(0,T.jsxs)(A.MI,{spacing:4,width:"full",columns:[1,4],children:[(0,T.jsxs)(o.Card,{children:[(0,T.jsx)(g.Translation,{mb:1,translation:"defi.tvl",textStyle:"captionSmall"}),(0,T.jsx)(c.Amount.Usd,{value:pt,textStyle:"ctaStatic",fontSize:"xl"})]}),(0,T.jsxs)(o.Card,{children:[(0,T.jsx)(g.Translation,{mb:1,translation:"defi.avgApy",textStyle:"captionSmall"}),(0,T.jsx)(c.Amount.Percentage,{value:mt,textStyle:"ctaStatic",fontSize:"xl"})]}),(0,T.jsxs)(o.Card,{children:[(0,T.jsx)(g.Translation,{mb:1,translation:"stats.totalVolume",textStyle:"captionSmall"}),(0,T.jsx)(c.Amount.Usd,{value:vt,textStyle:"ctaStatic",fontSize:"xl"})]}),(0,T.jsxs)(o.Card,{children:[(0,T.jsx)(g.Translation,{mb:1,translation:"stats.collectedFees",textStyle:"captionSmall"}),(0,T.jsx)(m.TokenAmount,{assetId:null===Y||void 0===Y?void 0:Y.id,amount:bt,showIcon:!1,textStyle:"ctaStatic",fontSize:"xl"})]})]}),"tranches"===(null===et||void 0===et?void 0:et.strategy)&&(0,T.jsx)(A.MI,{spacing:4,width:"full",columns:[1,2],children:rt.map((function(t){var e,n,a=X(t);return(0,T.jsxs)(A.gC,{spacing:6,width:"full",alignItems:"flex-start",children:[(0,T.jsx)(g.Translation,{translation:u.A[a.type].label,textStyle:"ctaStatic",fontWeight:600,fontSize:"lg"}),(0,T.jsxs)(A.MI,{spacing:4,columns:2,width:"full",children:[(0,T.jsxs)(o.Card,{children:[(0,T.jsx)(g.Translation,{mb:1,translation:"defi.avgApy",textStyle:"captionSmall",color:"strategies.".concat(a.type)}),(0,T.jsx)(c.Amount.Percentage,{value:xt[t],textStyle:"ctaStatic",fontSize:"xl"})]}),null===(e=u.A[a.type].stats)||void 0===e||null===(n=e.strategyData)||void 0===n?void 0:n.fields.map((function(t){return(0,T.jsxs)(o.Card,{children:[(0,T.jsx)(g.Translation,{mb:1,translation:"stats.".concat(t),textStyle:"captionSmall"}),(0,T.jsx)(b.AssetProvider.GeneralData,{field:t,textStyle:"ctaStatic",fontSize:"xl"})]})}))]})]})}))}),(0,T.jsxs)(A.gC,{spacing:20,width:"full",children:[(0,T.jsxs)(A.Kq,{spacing:6,width:"full",direction:["column","row"],children:[(0,T.jsxs)(A.gC,{spacing:6,width:["full",2/3],alignItems:"flex-start",children:[(0,T.jsx)(g.Translation,{translation:"stats.performances",component:A.X6,as:"h3",textStyle:"heading",fontSize:"lg"}),(0,T.jsx)(o.Card.Dark,{p:6,children:(0,T.jsxs)(A.gC,{spacing:4,width:"full",children:[ft,(0,T.jsx)(j.GenericChart,{percentChange:0,assetIds:rt,color:nt,isRainbowChart:!0,data:ut,setPercentChange:function(){},timeframe:ot,height:W?"300px":"350px",margins:{top:10,right:0,bottom:40,left:0}})]})})]}),(0,T.jsxs)(A.gC,{flex:1,spacing:6,width:["full","auto"],alignItems:"flex-start",children:[(0,T.jsx)(g.Translation,{translation:"stats.tvlDistribution",component:A.X6,as:"h3",textStyle:"heading",fontSize:"lg"}),(0,T.jsx)(o.Card.Dark,{p:6,flex:1,children:(0,T.jsx)(k.DonutChart,(0,a.Z)((0,a.Z)({},ht),{},{getSliceData:gt}))})]})]}),(0,T.jsxs)(A.MI,{spacing:6,width:"full",columns:[1,3],children:[(0,T.jsxs)(A.gC,{spacing:6,width:"full",alignItems:"flex-start",children:[(0,T.jsx)(g.Translation,{translation:"defi.tvl",component:A.X6,as:"h3",textStyle:"heading",fontSize:"lg"}),(0,T.jsx)(o.Card.Dark,{p:6,children:(0,T.jsx)(j.GenericChart,{percentChange:0,data:ct,assetIds:rt,color:nt,maxMinEnabled:!1,isRainbowChart:!0,setPercentChange:function(){},timeframe:ot,height:W?"300px":"350px",margins:{top:10,right:0,bottom:40,left:0}})})]}),(0,T.jsxs)(A.gC,{spacing:6,width:"full",alignItems:"flex-start",children:[(0,T.jsx)(g.Translation,{translation:"defi.apy",component:A.X6,as:"h3",textStyle:"heading",fontSize:"lg"}),(0,T.jsx)(o.Card.Dark,{p:6,children:(0,T.jsx)(j.GenericChart,{percentChange:0,assetIds:rt,data:dt,color:nt,maxMinEnabled:!1,isRainbowChart:!0,setPercentChange:function(){},timeframe:ot,height:W?"300px":"350px",formatFn:function(t){return"".concat((0,y.rp)(t))},margins:{top:10,right:0,bottom:40,left:0}})})]}),(0,T.jsxs)(A.gC,{spacing:6,width:"full",alignItems:"flex-start",children:[(0,T.jsx)(g.Translation,{translation:"stats.volumes",component:A.X6,as:"h3",textStyle:"heading",fontSize:"lg"}),(0,T.jsx)(o.Card.Dark,{p:6,flex:1,children:(0,T.jsx)(v.VolumeChart,{timeframe:ot,assetIds:it})})]})]})]})]})})}},90219:function(t,e,n){n.r(e),n.d(e,{DonutChart:function(){return p},PieChart:function(){return h}});var a=n(1413),r=n(29439),i=n(14380),o=n(7276),s=n(28547),l=n(87563),c=n(68165),u=n(77806),d=n(45263),f={top:0,right:0,bottom:0,left:0};function h(t){var e=t.data,n=t.colors,l=t.width,c=t.height,h=t.margin,g=void 0===h?f:h,m=t.animate,p=void 0===m||m,v=t.getSliceData,j=(0,o.useState)(null),b=(0,r.Z)(j,2),y=b[0],w=b[1],C=l-g.left-g.right,S=c-g.top-g.bottom,A=Math.min(C,S)/2,M=S/2,Z=C/2,k=e.map((function(t){return t.label})),I=k.map((function(t){return n[t]})),T=(0,s.Z)({domain:k,range:I}),D=v&&v(y);return(0,d.jsxs)("svg",{width:l,height:c,children:[(0,d.jsx)("rect",{rx:14,width:l,height:c,fill:"url('#visx-pie-gradient')"}),D,(0,d.jsx)(i.Z,{top:M+g.top,left:Z+g.left,children:(0,d.jsx)(u.Z,{padAngle:0,cornerRadius:0,pieValue:function(t){return t.value},outerRadius:A,innerRadius:A-30,data:e,children:function(t){return(0,d.jsx)(x,(0,a.Z)((0,a.Z)({},t),{},{animate:p,onMouseOver:function(t){var e=t.data;return w(e)},getKey:function(t){return t.data.label},onMouseOut:function(){return w(null)},getColor:function(t){return T(t.data.label)}}))}})})]})}var g=function(t){var e=t.endAngle;return{startAngle:e>Math.PI?2*Math.PI:0,endAngle:e>Math.PI?2*Math.PI:0,opacity:0}},m=function(t){return{startAngle:t.startAngle,endAngle:t.endAngle,opacity:1}};function x(t){var e=t.animate,n=t.arcs,r=t.path,i=t.getKey,o=t.getColor,s=t.onMouseOut,l=t.onMouseOver,u=t.onClickDatum;return(0,c.useTransition)(n,{from:e?g:m,enter:m,update:m,leave:e?g:m,keys:i})((function(t,e){return(0,d.jsx)("g",{children:(0,d.jsx)(c.animated.path,{d:(0,c.interpolate)([t.startAngle,t.endAngle],(function(t,n){return r((0,a.Z)((0,a.Z)({},e),{},{startAngle:t,endAngle:n}))})),fill:o(e),onClick:function(){return u&&u(e)},onMouseOver:function(){return l&&l(e)},onMouseOut:function(){return s&&s(e)},onTouchStart:function(){return u&&u(e)}})},Math.random())}))}var p=function(t){var e=t.data,n=t.colors,a=t.getSliceData;return(0,d.jsx)(l.Z,{debounceTime:10,children:function(t){return(0,d.jsx)(h,{data:e,colors:n,width:t.width,height:t.height,getSliceData:a})}})}},9220:function(t,e,n){n.r(e),n.d(e,{HistogramChart:function(){return H}});var a=n(1413),r=n(93433),i=n(57118),o=n(99594),s=n(14380),l=n(7276),c=n(84033),u=n.n(c),d=n(64625),f=n(46177),h=n(97862),g=n(57478),m=n(25908),x=n(12528),p=n(23369),v=["data","className","top","left","x","y0","y1","xScale","yScale","color","keys","value","order","offset","children"];function j(){return j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},j.apply(this,arguments)}function b(t){var e=t.data,n=t.className,a=t.top,r=t.left,i=t.x,o=t.y0,c=void 0===o?f.l8:o,b=t.y1,y=void 0===b?f.xf:b,w=t.xScale,C=t.yScale,S=t.color,A=t.keys,M=t.value,Z=t.order,k=t.offset,I=t.children,T=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,v),D=(0,d.Z)();A&&D.keys(A),M&&(0,g.Z)(D.value,M),Z&&D.order((0,m.ZP)(Z)),k&&D.offset((0,x.ZP)(k));var O=D(e),P=(0,h.Z)(w),z=O.map((function(t,e){var n=t.key;return{index:e,key:n,bars:t.map((function(e,a){var r=(C(c(e))||0)-(C(y(e))||0),o=C(y(e)),s="bandwidth"in w?w(i(e.data)):Math.max((w(i(e.data))||0)-P/2);return{bar:e,key:n,index:a,height:r,width:P,x:s||0,y:o||0,color:S(t.key,a)}}))}}));return I?l.createElement(l.Fragment,null,I(z)):l.createElement(s.Z,{className:u()("visx-bar-stack",n),top:a,left:r},z.map((function(t){return t.bars.map((function(e){return l.createElement(p.Z,j({key:"bar-stack-"+t.index+"-"+e.index,x:e.x,y:e.y,height:e.height,width:e.width,fill:e.color},T))}))})))}var y,w=n(79866),C=n(10577),S=n(27091),A=n(87563),M=n(86059),Z=n(29564),k=n(26720),I=n(96699),T=n(3498),D=n(75712),O=n(61168),P=n(5151),z=n(82173),F=n(32802),B=n(20663),E=n(48379),L=n(28547),W=n(45263),U={top:20,left:0,right:0,bottom:35},R=(0,O.Z)((function(t){var e,n=t.data,l=t.colors,c=t.width,u=t.height,d=t.events,f=void 0!==d&&d,h=t.tooltip,g=void 0===h||h,m=t.margin,x=void 0===m?U:m,p=t.tooltipOpen,v=t.tooltipTop,j=t.tooltipData,A=t.hideTooltip,O=t.showTooltip,R=(0,I.Fg)(),H=(0,Z.R)().locale,N=function(t){return t.date},q={textAnchor:"middle",fontSize:12,fontWeight:"bold",fill:R.colors.table.axisLabel},G=u-x.top-x.bottom-10,V=c-x.left-x.right,X=Object.keys(l),K=X.map((function(t){return l[t]})),_=n.map((function(t){return t.total})),J=(0,F.Z)({padding:.2,range:[0,V],domain:n.map(N)}),$=(0,B.Z)({range:[0,V],domain:(0,i.Z)(n,(function(t){return(0,o.qF)(t.date).toDate()}))}),Q=Math.max.apply(Math,(0,r.Z)(_.map((function(t){return Math.abs(t)})))),Y=-Q,tt=(0,E.Z)({nice:!1,range:[G,0],domain:[Y,Q]}),et=(0,L.Z)({domain:X,range:K}),nt=(0,k.ff)("white",R.colors.card.bg),at=(0,k.ff)(R.colors.gray[200],R.colors.gray[700]),rt=(0,k.ff)(R.colors.gray[800],"white");return(0,W.jsxs)("div",{style:{position:"relative"},children:[(0,W.jsxs)(S.Z,{width:c,height:u,children:[(0,W.jsx)(s.Z,{top:x.top,children:(0,W.jsx)(b,{data:n,keys:X,x:N,color:et,xScale:J,yScale:tt,offset:"diverging",children:function(t){return t.map((function(t){return t.bars.map((function(e){return(0,W.jsx)("rect",{x:e.x,y:e.y,height:e.height,width:e.width,fill:e.color,onClick:function(){f&&alert("clicked: ".concat(JSON.stringify(e)))},onMouseLeave:function(){y=window.setTimeout((function(){A()}),300)},onMouseMove:function(t){y&&clearTimeout(y);var n=(0,C.Z)(t),a=e.x+e.width/2;O({tooltipData:e,tooltipTop:null===n||void 0===n?void 0:n.y,tooltipLeft:a})}},"bar-stack-".concat(t.index,"-").concat(e.index))}))}))}})}),(0,W.jsx)(w.Z,{strokeWidth:1,hideTicks:!0,top:G/2+x.top,scale:J,stroke:"white",tickFormat:function(){return""}}),(0,W.jsx)(w.Z,{hideTicks:!0,hideAxisLine:!0,numTicks:5,scale:$,top:u-x.bottom,tickLabelProps:function(){return q}})]}),g&&p&&j&&(0,W.jsx)(P.Z,{top:v,left:j.x,style:(0,a.Z)((0,a.Z)({},z.j),{},{border:"none",backgroundColor:"transparent",paddingTop:0,paddingLeft:0,paddingBottom:0,paddingRight:0}),children:(0,W.jsxs)(T.gC,{p:2,spacing:3,width:"full",alignItems:"flex-start",borderRadius:"lg",borderColor:at,borderWidth:1,color:rt,bgColor:nt,children:[(0,W.jsx)(T.gC,{spacing:4,width:"full",alignItems:"flex-start",children:Object.keys(j.bar.data).filter((function(t){return!["date","total"].includes(t)})).map((function(t){return(0,W.jsxs)(T.gC,{spacing:2,width:"full",alignItems:"flex-start",children:[(0,W.jsx)(D.AssetProvider,{assetId:t,children:(0,W.jsxs)(T.Ug,{spacing:1,children:[(0,W.jsx)(D.AssetProvider.Icon,{size:"2xs"}),(0,W.jsx)(D.AssetProvider.Name,{fontWeight:"bold"}),(0,W.jsx)(D.AssetProvider.Strategy,{color:et(t),fontWeight:"bold",prefix:"(",suffix:")"})]})}),(0,W.jsx)(M.Amount.Usd,{abbreviate:!1,fontWeight:"bold",fontSize:"md",value:j.bar.data[t]})]},t)}))}),(0,W.jsx)(T.xv,{fontSize:"xs",color:R.colors.gray[500],children:(e=j.bar.data,(0,o.qF)(N(e)).locale(H).format("LLL"))})]})},Math.random())]})})),H=function(t){var e=t.data,n=t.colors,a=t.labels,r=t.tooltip;return(0,W.jsx)(A.Z,{debounceTime:10,children:function(t){return(0,W.jsx)(R,{width:t.width,height:t.height,data:e,tooltip:r,colors:n,labels:a})}})}},96957:function(t,e,n){n.r(e),n.d(e,{StrategyTag:function(){return c}});var a=n(1413),r=n(45987),i=n(94586),o=n(15542),s=n(45263),l=["strategy"],c=function(t){var e=t.strategy,n=(0,r.Z)(t,l);return(0,s.jsx)(o.Translation,(0,a.Z)({component:i.Vp,translation:"strategies.".concat(e,".label"),bg:"tags.".concat(e),fontWeight:600,color:"primary",px:4,py:"5px"},n))}},84389:function(t,e,n){n.r(e),n.d(e,{VolumeChart:function(){return o}});var a=n(9220),r=n(50026),i=n(45263),o=function(t){var e=t.assetIds,n=t.timeframe,o=(0,r.D)({assetIds:e,timeframe:n}),s=o.labels,l=o.colors,c=o.volumeChartData;return o.volumeChartDataLoading?null:(0,i.jsx)(a.HistogramChart,{colors:l,labels:s,data:c.rainbow})}},50026:function(t,e,n){n.d(e,{D:function(){return u}});var a=n(4942),r=n(1413),i=n(29439),o=n(44888),s=n(7276),l=n(99594),c=n(1669),u=function(t){var e=t.assetIds,n=t.timeframe,u=t.useDollarConversion,d=void 0===u||u,f=(0,s.useState)(!0),h=(0,i.Z)(f,2),g=h[0],m=h[1],x=(0,c.w)(),p=x.historicalTvls,v=x.selectors,j=v.selectAssetsByIds,b=v.selectAssetHistoricalTvls,y=v.selectAssetHistoricalTvlsUsd,w=(0,s.useMemo)((function(){return j?j(e):[]}),[e,j]),C=(0,s.useMemo)((function(){return n?(0,l.pM)(n):0}),[n]),S=(0,s.useMemo)((function(){var t={total:[],rainbow:[]};if(!Object.keys(p).length)return t;var e=w.reduce((function(t,e){if(!e.id)return t;var n=d?y(e.id):b(e.id);if(!n)return t;var a=null;return n.forEach((function(n){var r=n.date;if(!(r<C)){if(a&&e.id){t[r]||(t[r]={date:r,total:0});var i=(0,l.gA)(n.value).minus(a.value);t[r][e.id]=Number(i.toFixed(8)),t[r].total=Number((0,l.gA)(t[r].total).plus(i).toFixed(8))}a=n}})),t}),{});return t.total=Object.values(e).map((function(t){return{date:t.date,value:t.total}})),t.rainbow=Object.values(e),t}),[w,d,p,b,y,C]),A=(0,s.useMemo)((function(){return w.length?w.reduce((function(t,e){return(0,r.Z)((0,r.Z)({},t),{},{labels:(0,r.Z)((0,r.Z)({},t.labels),{},(0,a.Z)({},e.id,e.name)),colors:(0,r.Z)((0,r.Z)({},t.colors),{},(0,a.Z)({},e.id,o.A2[e.type].color))})}),{labels:{},colors:{}}):{labels:{},colors:{}}}),[w]);return(0,s.useEffect)((function(){if(S.rainbow.length)return m(!1),function(){m(!0)}}),[S]),{volumeChartData:S,volumeChartDataLoading:g,labels:A.labels,colors:A.colors}}}}]);