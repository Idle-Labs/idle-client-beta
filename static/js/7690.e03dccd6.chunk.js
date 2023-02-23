"use strict";(self.webpackChunkidle_dashboard_new=self.webpackChunkidle_dashboard_new||[]).push([[7690,7658,745,110,8024],{63330:function(t,e,n){n.r(e),n.d(e,{AssetPage:function(){return M}});var s=n(1413),a=n(29439),i=n(76566),o=n(16120),r=n(95173),l=n(98428),c=n(66288),d=n(86698),u=n(61617),x=n(97901),m=n(96362),f=n(15542),g=n(98365),p=n(85267),h=n(1669),v=n(75712),j=n(60110),w=n(7276),y=n(99594),b=n(61925),S=n(88089),C=n(3498),A=n(37658),I=n(44888),T=n(45263),M=function(){var t=(0,r.s0)(),e=(0,c.X)(),n=e.isMobile,M=e.environment,k=(0,p.m)(),Z=k.params,P=k.location,D=k.searchParams,U=(0,w.useState)(0),z=(0,a.Z)(U,2),B=z[0],E=z[1],O=(0,w.useState)(0),G=(0,a.Z)(O,2),L=G[0],H=G[1],_=(0,w.useState)(),F=(0,a.Z)(_,2),W=F[0],V=F[1],R=(0,w.useMemo)((function(){return D}),[D]),N=(0,a.Z)(R,2),q=N[0],K=N[1],X=(0,w.useState)(I.WE["6MONTHS"]),Y=(0,a.Z)(X,2),Q=Y[0],$=Y[1],J=(0,h.w)(),tt=J.isPortfolioLoaded,et=J.portfolioTimestamp,nt=J.assetsDataTimestamp,st=J.isPortfolioAccountReady,at=J.selectors,it=at.selectAssetById,ot=at.selectVaultById,rt=at.selectVaultGauge,lt=at.selectAssetBalance,ct=at.selectAssetPriceUsd,dt=(0,w.useMemo)((function(){return Object.keys(I.A2).find((function(t){return I.A2[t].route===Z.strategy}))}),[Z]),ut=(0,w.useMemo)((function(){return it&&it(Z.asset)}),[it,Z.asset]),xt=(0,w.useMemo)((function(){return ot&&ot(Z.asset)}),[ot,Z.asset]);(0,w.useEffect)((function(){ut&&H(Date.now())}),[ut]);var mt=(0,w.useMemo)((function(){if(!ut||!lt||null===ut||void 0===ut||!ut.underlyingId||!ct)return(0,y.gA)(0);var t=lt(ut.underlyingId),e=ct(ut.underlyingId);return(0,y.d5)(t).times((0,y.d5)(e))}),[ut,lt,ct]),ft=(0,w.useMemo)((function(){return rt&&rt(Z.asset)}),[rt,Z.asset]),gt=(0,w.useMemo)((function(){return ft&&it&&it(ft.id)}),[it,ft]),pt=(0,w.useMemo)((function(){var t;return gt&&"gaugeData"in gt&&null!==(t=gt.gaugeData)&&void 0!==t&&t.rewards?Object.values(gt.gaugeData.rewards).reduce((function(t,e){return t.plus((0,y.d5)(e.balance))}),(0,y.gA)(0)):(0,y.gA)(0)}),[gt]);(0,w.useEffect)((function(){if(tt&&it&&P&&L)return ut?void 0:t(P.pathname.replace("/".concat(Z.asset),""))}),[tt,it,L,ut,Z.asset,P,t]),(0,w.useEffect)((function(){!(st&&ut&&W!==(null===ut||void 0===ut?void 0:ut.id)&&et&&nt)||et>nt||nt>L||((0,y.AV)(ut,mt),V(ut.id))}),[ut,et,mt,nt,st,L,W,V]);var ht=(0,w.useMemo)((function(){var t=[{id:"earn",label:"navBar.earn",component:i.Earn,actions:[{type:"deposit",component:x.Deposit,label:"common.deposit",steps:[{type:"approve",component:m.Approve,label:"modals.approve.header"}]},{type:"withdraw",label:"common.withdraw",component:g.Withdraw,steps:[]}]}],e=ft&&"enabled"in ft&&!ft.enabled;ft&&(!e||(0,y.d5)(null===gt||void 0===gt?void 0:gt.balance).gt(0)||(0,y.d5)(pt).gt(0))&&t.push({id:"gauge",label:"navBar.gauge",component:o.GaugeStaking,icon:e&&(0,y.gA)(null===gt||void 0===gt?void 0:gt.balance).gt(0)?{src:"".concat(I.pm,"vaults/deprecated.png"),tooltip:"trade.vaults.GG.disabled",props:{width:5,height:5}}:null,actions:[{type:"stake",component:x.Deposit,label:"common.stake",steps:[{type:"approve",component:m.Approve,label:"modals.approve.header"}]},{type:"unstake",label:"common.unstake",component:g.Withdraw,steps:[]}]});var n=!(null!==xt&&void 0!==xt&&xt.flags)||void 0===xt.flags.statsEnabled||xt.flags.statsEnabled;return(0,y.xW)("stats",M)&&n&&t.push({id:"stats",label:"navBar.stats",component:d.AssetStats,componentProps:{timeframe:Q,assetOnly:!0,showHeader:!1,showAssetStrategy:!0}}),t}),[xt,ft,gt,Q,M,pt]),vt=(0,w.useMemo)((function(){return q.get("tab")}),[q]);(0,w.useEffect)((function(){if(vt){var t=ht.find((function(t){return t.id.toString()===vt.toString()}));if(t){var e=ht.indexOf(t);E(e)}else E(0)}else E(0)}),[ht,vt,E]);var jt=(0,w.useMemo)((function(){return ht[B]&&"gauge"===ht[B].id&&ft?ft.id:null===ut||void 0===ut?void 0:ut.id}),[ht,B,ut,ft]),wt=(0,w.useMemo)((function(){return ht[B]}),[ht,B]),yt=(0,w.useMemo)((function(){return wt.component}),[wt]),bt=(0,w.useCallback)((function(t){var e=ht[t];e&&K("?tab=".concat(e.id))}),[ht,K]),St=(0,w.useMemo)((function(){return(0,T.jsx)(S.mQ,{variant:"unstyled",index:B,width:["100%","auto"],children:(0,T.jsx)(S.td,{children:ht.map((function(t,e){return(0,T.jsx)(l.IconTab,{width:["".concat(100/ht.length,"%"),"auto"],icon:t.icon,onClick:function(){return bt(e)},children:(0,T.jsx)(f.Translation,{translation:t.label})},"tab_".concat(e))}))})})}),[ht,bt,B]),Ct=(0,w.useMemo)((function(){return wt.actions?(0,T.jsx)(A.InteractiveComponent,{vaultId:null===ut||void 0===ut?void 0:ut.id,assetId:jt,actions:wt.actions}):null}),[wt,ut,jt]),At=(0,w.useMemo)((function(){return"stats"===wt.id?(0,T.jsx)(b.TimeframeSelector,{style:{marginTop:"-20px"},variant:"button",timeframe:Q,setTimeframe:$,width:["100%","auto"],justifyContent:["center","initial"]}):!n&&(0,T.jsx)(j.StrategyLabel,{strategy:dt,color:"cta",textStyle:"italic"})}),[wt,dt,n,Q,$]);return(0,T.jsx)(v.AssetProvider,{wrapFlex:!0,assetId:Z.asset,children:(0,T.jsxs)(C.xu,{width:"100%",children:[(0,T.jsx)(C.kC,{my:[10,14],width:"100%",id:"asset-top-header",direction:["column","row"],justifyContent:["center","space-between"],children:(0,T.jsxs)(C.Kq,{width:"100%",spacing:[7,10],alignItems:"center",justifyContent:"center",direction:["column","row"],children:[(0,T.jsx)(u.AssetLabel,{assetId:Z.asset,fontSize:"h2"}),(0,T.jsxs)(C.Kq,{flex:1,direction:"row",width:["100%","auto"],borderBottom:"1px solid",borderColor:"divider",justifyContent:"space-between",children:[St,At]})]})}),(0,T.jsxs)(C.Ug,{width:"100%",spacing:[0,10],alignItems:"space-between",children:[(0,T.jsx)(C.Kq,{flex:1,mb:[20,0],spacing:10,width:["100%",.7],children:(0,T.jsx)(yt,(0,s.Z)({},ht[B].componentProps))}),Ct]})]})})}},16120:function(t,e,n){n.r(e),n.d(e,{GaugeStaking:function(){return v}});var s=n(29439),a=n(54447),i=n(44888),o=n(86059),r=n(7276),l=n(15542),c=n(1669),d=n(85267),u=n(99594),x=n(75712),m=n(3148),f=n(72258),g=n(3498),p=n(30422),h=n(45263),v=function(){var t,e,n,v,j,w=(0,d.m)().params,y=(0,r.useState)(0),b=(0,s.Z)(y,2),S=b[0],C=b[1],A=(0,r.useState)(),I=(0,s.Z)(A,2),T=I[0],M=I[1],k=(0,c.w)(),Z=k.portfolioTimestamp,P=k.assetsDataTimestamp,D=k.isPortfolioAccountReady,U=k.selectors,z=U.selectAssetById,B=U.selectVaultGauge,E=U.selectAssetBalance,O=U.selectAssetPriceUsd,G=(0,r.useMemo)((function(){return z&&z(w.asset)}),[z,w.asset]),L=(0,r.useMemo)((function(){return G&&B&&B(G.id)}),[B,G]),H=(0,r.useMemo)((function(){return z&&L&&z(L.id)}),[L,z]),_=(0,r.useMemo)((function(){return Object.keys(i.A2).find((function(t){return i.A2[t].route===w.strategy}))}),[w]),F=(0,r.useMemo)((function(){return _&&i.A2[_].color}),[_]),W=(0,r.useMemo)((function(){if(!L)return null;var t=i.A2[L.type];return null!==t&&void 0!==t&&t.carouselItems?(0,h.jsx)(p.StrategyDescriptionCarousel,{color:F,strategy:L.type,delay:1e4}):null}),[L,F]),V=(0,r.useMemo)((function(){var t;return(null===H||void 0===H?void 0:H.vaultPosition)&&(0,u.gA)(null===H||void 0===H||null===(t=H.vaultPosition)||void 0===t?void 0:t.underlying.redeemable).div(H.totalSupply)}),[H]),R=(0,r.useMemo)((function(){if(!H||null===H||void 0===H||!H.underlyingId||!E||!O)return(0,u.gA)(0);var t=E(H.underlyingId),e=O(H.underlyingId);return(0,u.d5)(t).times((0,u.d5)(e))}),[H,E,O]),N=(0,r.useMemo)((function(){return L&&"description"in L&&L.description?(0,h.jsx)(a.Card.Dark,{children:(0,h.jsx)(g.xv,{dangerouslySetInnerHTML:{__html:L.description}})}):null}),[L]);return(0,r.useEffect)((function(){H&&C(Date.now())}),[H]),(0,r.useEffect)((function(){!(D&&H&&T!==(null===H||void 0===H?void 0:H.id)&&Z&&P)||Z>P||P>S||((0,u.AV)(H,R),M(H.id))}),[H,Z,R,P,D,S,T,M]),(0,h.jsxs)(g.gC,{spacing:10,width:"100%",children:[N,H.vaultPosition&&(0,h.jsx)(x.AssetProvider,{wrapFlex:!1,assetId:L.id,children:(0,h.jsxs)(g.MI,{width:"100%",columns:[2,4],spacing:[10,14],alignItems:"flex-start",children:[(0,h.jsxs)(g.gC,{spacing:2,justifyContent:"center",children:[(0,h.jsx)(l.Translation,{component:g.xv,translation:"defi.deposited",textStyle:"titleSmall"}),(0,h.jsxs)(g.Ug,{spacing:1,alignItems:"baseline",children:[(0,h.jsx)(x.AssetProvider.Deposited,{textStyle:"heading",fontSize:"h3"}),(0,h.jsx)(x.AssetProvider.Name,{textStyle:"heading",fontSize:"h3"})]})]}),(0,h.jsxs)(g.gC,{spacing:2,justifyContent:"center",children:[(0,h.jsx)(l.Translation,{component:g.xv,translation:"defi.share",textStyle:"titleSmall"}),(0,h.jsx)(x.AssetProvider.GaugeShare,{minValue:.01,textStyle:"heading",fontSize:"h3"})]}),(0,h.jsxs)(g.gC,{spacing:2,justifyContent:"center",children:[(0,h.jsx)(l.Translation,{component:g.xv,translation:"defi.idleDistribution",textStyle:"titleSmall"}),(0,h.jsxs)(g.Ug,{spacing:1,alignItems:"baseline",children:[(0,h.jsx)(x.AssetProvider.GaugeUserDistribution,{suffix:" ".concat(null===(t=L.rewardToken)||void 0===t?void 0:t.token),textStyle:"heading",fontSize:"h3"}),(0,h.jsx)(l.Translation,{component:g.xv,translation:["/","common.day"],textStyle:"captionSmall",textTransform:"lowercase"})]})]}),(0,h.jsxs)(g.gC,{spacing:2,justifyContent:"center",children:[(0,h.jsx)(l.Translation,{component:g.xv,translation:"defi.additionalRewards",textStyle:"titleSmall"}),(0,h.jsx)(g.gC,{spacing:2,children:(null===(e=L.multiRewardsTokens)||void 0===e?void 0:e.length)>0?Object.keys(null===(n=H.gaugeData)||void 0===n?void 0:n.rewards).map((function(t){var e=H.gaugeData.rewards[t];if(t===L.rewardToken.address)return null;var n=z(t);return(0,h.jsxs)(g.Ug,{spacing:1,alignItems:"baseline",children:[(0,h.jsx)(o.Amount,{value:e.rate.times(V),suffix:" ".concat(n.token),textStyle:"heading",fontSize:"h3"}),(0,h.jsx)(l.Translation,{component:g.xv,translation:["/","common.day"],textStyle:"captionSmall",textTransform:"lowercase"})]},"reward_".concat(t))})):(0,h.jsx)(g.xv,{textStyle:"heading",fontSize:"h3",children:"-"})})]})]})}),(0,h.jsxs)(g.gC,{spacing:6,width:"100%",alignItems:"flex-start",children:[(0,h.jsx)(l.Translation,{component:g.X6,as:"h3",size:"md",translation:"defi.rewards"}),(0,h.jsx)(g.gC,{spacing:4,width:"100%",children:(0,u.xb)(null===(v=H.gaugeData)||void 0===v?void 0:v.rewards)?null:Object.keys(null===(j=H.gaugeData)||void 0===j?void 0:j.rewards).map((function(t){var e=H.gaugeData.rewards[t],n=L.getClaimRewardsContractSendMethod(t);return(0,h.jsx)(x.AssetProvider,{wrapFlex:!1,assetId:t,children:(0,h.jsx)(a.Card,{p:6,px:8,width:"100%",children:(0,h.jsxs)(g.Kq,{width:"100%",spacing:[4,0],alignItems:"center",direction:["column","row"],justifyContent:"space-between",children:[(0,h.jsxs)(g.MI,{width:"100%",spacing:[6,0],columns:[2,4],children:[(0,h.jsxs)(g.gC,{spacing:2,alignItems:"flex-start",justifyContent:"flex-start",children:[(0,h.jsx)(l.Translation,{component:g.xv,translation:"defi.asset",textStyle:"captionSmall"}),(0,h.jsx)(x.AssetProvider.GeneralData,{size:"xs",field:"asset"})]}),(0,h.jsxs)(g.gC,{spacing:2,alignItems:"flex-start",justifyContent:"flex-start",children:[(0,h.jsx)(l.Translation,{component:g.xv,translation:"defi.apy",textStyle:"captionSmall"}),(0,h.jsx)(o.Amount.Percentage,{textStyle:"tableCell",value:e.apr})]}),(0,h.jsxs)(g.gC,{spacing:2,alignItems:"flex-start",justifyContent:"flex-start",children:[(0,h.jsx)(l.Translation,{component:g.xv,translation:"defi.dailyDistribution",textStyle:"captionSmall"}),(0,h.jsxs)(g.Ug,{spacing:1,width:"100%",children:[(0,h.jsx)(o.Amount,{textStyle:"tableCell",value:e.rate}),(0,h.jsx)(x.AssetProvider.Name,{textStyle:"tableCell"})]})]}),(0,h.jsxs)(g.gC,{spacing:2,alignItems:"flex-start",justifyContent:"flex-start",children:[(0,h.jsx)(l.Translation,{component:g.xv,translation:"defi.claimable",textStyle:"captionSmall"}),(0,h.jsxs)(g.Ug,{spacing:1,width:"100%",children:[(0,h.jsx)(o.Amount,{textStyle:"tableCell",value:e.balance}),(0,h.jsx)(x.AssetProvider.Name,{textStyle:"tableCell"})]})]})]}),(0,h.jsx)(f.TransactionButton,{text:"defi.claim",vaultId:G.id,assetId:t,contractSendMethod:n,actionType:"claim",amount:e.balance.toString(),width:["100%","150px"],disabled:e.balance.lte(0)})]})})},"reward_".concat(t))}))})]}),(0,h.jsx)(m.AssetGeneralData,{assetId:null===L||void 0===L?void 0:L.id}),W]})}},98428:function(t,e,n){n.r(e),n.d(e,{IconTab:function(){return m}});var s=n(1413),a=n(7276),i=n(79681),o=n(88089),r=n(96699),l=n(43127),c=n(3498),d=n(70820),u=n(2092),x=n(45263),m=a.forwardRef((function(t,e){var n=(0,i.qM)(),a=(0,o.xD)((0,s.Z)((0,s.Z)({},t),{},{ref:e})),m=(0,r.jC)("Tabs",(0,s.Z)((0,s.Z)({},a),{},{variant:"unstyled"}));return(0,x.jsx)(l.zx,(0,s.Z)((0,s.Z)({background:"transparent",borderRadius:0,__css:m.tab},a),{},{children:(0,x.jsxs)(c.Ug,{spacing:2,width:"full",justifyContent:"center",children:[a.children,t.icon&&(0,x.jsx)(d.u,{hasArrow:!0,placement:"top",label:t.icon.tooltip?n(t.icon.tooltip):"",children:(0,x.jsx)(u.Ee,(0,s.Z)({src:t.icon.src},t.icon.props))})]})}))}))},37658:function(t,e,n){n.r(e),n.d(e,{InteractiveComponent:function(){return m}});var s=n(29439),a=n(7276),i=n(55967),o=n(66288),r=n(15542),l=n(3498),c=n(43127),d=n(18147),u=n(4710),x=n(45263),m=function(t){var e=t.assetId,n=t.vaultId,m=t.actions,f=(0,o.X)().isMobile,g=(0,a.useState)(!1),p=(0,s.Z)(g,2),h=p[0],v=p[1],j=(0,a.useState)(!1),w=(0,s.Z)(j,2),y=w[0],b=w[1];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(l.gC,{left:0,zIndex:[40,0],spacing:[0,6],id:"right-side",width:["100vw","27em"],height:["100vh","auto"],position:["fixed","relative"],top:[h?0:"100vh",0],bg:f?"rgba(0, 0, 0, 0.5)":void 0,sx:f?{transition:"top 0.3s ease-in-out"}:{},children:[(0,x.jsxs)(l.gC,{bottom:0,spacing:0,width:"100%",height:["100vh","auto"],position:["fixed","relative"],top:[h?0:"100vh",0],sx:f?{transition:"top 0.3s ease-in-out"}:{},children:[f&&(0,x.jsxs)(l.Ug,{px:4,py:2,bg:"card.bg",width:"100%",borderBottom:"1px solid",borderBottomColor:"divider",justifyContent:"space-between",children:[(0,x.jsx)(r.Translation,{alignItems:"center",display:"flex",variant:"unstyled",translation:"common.exit",component:c.zx,leftIcon:(0,x.jsx)(i.sG8,{size:24}),onClick:function(){return v(!1)}}),(0,x.jsx)(r.Translation,{alignItems:"center",display:"flex",variant:"unstyled",translation:["common.show","navBar.transactions"],component:c.zx,onClick:function(){return b(!0)}})]}),(0,x.jsx)(u.OperativeComponent,{flex:1,minHeight:f?"auto":"590px",borderRadius:f?0:void 0,assetId:e,actions:m})]}),(0,x.jsxs)(l.gC,{flex:1,bottom:0,spacing:0,width:"100%",height:["100vh","auto"],position:["fixed","relative"],top:[y?0:"100vh",0],sx:f?{transition:"top 0.3s ease-in-out"}:{},children:[f&&(0,x.jsxs)(l.Ug,{px:4,py:2,bg:"card.bg",width:"100%",borderBottom:"1px solid",borderBottomColor:"divider",justifyContent:"space-between",children:[(0,x.jsx)(r.Translation,{alignItems:"center",display:"flex",variant:"unstyled",translation:"common.back",component:c.zx,leftIcon:(0,x.jsx)(i.sG8,{size:24}),onClick:function(){return b(!1)}}),(0,x.jsx)(r.Translation,{textStyle:"ctaStatic",translation:"assets.assetDetails.assetHistory.transactionHistory",component:l.xv})]}),(0,x.jsx)(d.TransactionList,{assetIds:[n],fullHeightOnMobile:!0,maxH:["100%",600]})]})]}),f&&(0,x.jsx)(l.kC,{p:4,left:0,bottom:0,border:0,width:"100%",zIndex:[10,0],bg:"card.bgDark",position:"fixed",children:(0,x.jsx)(r.Translation,{component:c.zx,translation:["common.start","common.deposit"],variant:"ctaFull",onClick:function(){return v(!0)}})})]})}},98365:function(t,e,n){n.r(e),n.d(e,{Withdraw:function(){return A}});var s=n(74165),a=n(15861),i=n(29439),o=n(5128),r=n(54447),l=n(99594),c=n(88935),d=n(61617),u=n(15542),x=n(1128),m=n(85267),f=n(1669),g=n(43127),p=n(3498),h=n(7276),v=n(23023),j=n(4710),w=n(78951),y=n(66624),b=n(86393),S=n(75712),C=n(45263),A=function(t){var e=t.itemIndex,n=(0,h.useState)("0"),A=(0,i.Z)(n,2),I=A[0],T=A[1],M=(0,h.useState)(""),k=(0,i.Z)(M,2),Z=k[0],P=k[1],D=(0,h.useState)(0),U=(0,i.Z)(D,2),z=U[0],B=U[1],E=(0,c.Y)().account,O=(0,m.m)().searchParams,G=(0,j.useOperativeComponent)(),L=G.dispatch,H=G.activeItem,_=G.activeStep,F=(0,S.useAssetProvider)(),W=F.asset,V=F.vault,R=F.underlyingAsset,N=F.translate,q=(0,v.R)(),K=q.sendTransaction,X=q.setGasLimit,Y=q.state.transaction,Q=(0,f.w)().selectors,$=Q.selectAssetPriceUsd,J=Q.selectVaultPrice,tt=Q.selectAssetBalance,et=Q.selectVaultGauge,nt=Q.selectAssetById,st=(0,h.useMemo)((function(){return O}),[O]),at=(0,i.Z)(st,2)[1],it=(0,h.useMemo)((function(){return tt?tt(null===V||void 0===V?void 0:V.id):(0,l.gA)(0)}),[tt,null===V||void 0===V?void 0:V.id]),ot=(0,h.useMemo)((function(){return(null===W||void 0===W?void 0:W.id)&&et&&et(W.id)}),[et,null===W||void 0===W?void 0:W.id]),rt=(0,h.useMemo)((function(){return ot&&nt&&nt(ot.id)}),[nt,ot]),lt=(0,h.useMemo)((function(){if(!tt)return(0,l.gA)(0);var t=tt(null===V||void 0===V?void 0:V.id),e=J(null===V||void 0===V?void 0:V.id);return t.times(e)}),[tt,J,null===V||void 0===V?void 0:V.id]),ct=(0,h.useMemo)((function(){return P(""),!(!(0,l.gA)(I).isNaN()&&!(0,l.gA)(I).lte(0))||!!(0,l.gA)(I).gt(lt)&&(P(N("trade.errors.insufficientFundsForAmount",{symbol:null===R||void 0===R?void 0:R.name})),!0)}),[I,lt,R,N]),dt=(0,h.useCallback)((function(){E&&!ct&&V&&"getWithdrawContractSendMethod"in V&&"getWithdrawParams"in V&&(0,a.Z)((0,s.Z)().mark((function t(){var e,n,a,i;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=J(V.id),n=o.Z.minimum(it,(0,l.gA)(I).div(e)),a=V.getWithdrawParams(n),i=V.getWithdrawContractSendMethod(a),K(V.id,V.id,i);case 5:case"end":return t.stop()}}),t)})))()}),[E,ct,I,V,it,J,K]);(0,h.useEffect)((function(){_===e&&"success"===Y.status&&T("")}),[Y.status,_,e]),(0,h.useEffect)((function(){if($&&J&&R&&V){var t=$(R.id),e=parseFloat((0,l.gA)(I).times(t).toString())||0;B(e)}}),[R,V,I,J,$,L]);var ut=(0,h.useCallback)((function(){lt&&T(lt.toString())}),[lt]),xt=(0,h.useCallback)((0,a.Z)((0,s.Z)().mark((function t(){var e,n,a,i,o;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(V&&"getWithdrawContractSendMethod"in V&&"getWithdrawParams"in V){t.next=2;break}return t.abrupt("return");case 2:if(e=V.getMethodDefaultGasLimit("withdraw"),E&&!it.lte(0)){t.next=5;break}return t.abrupt("return",e);case 5:return n={from:null===E||void 0===E?void 0:E.address},a=V.getWithdrawParams(it.toFixed()),i=V.getWithdrawContractSendMethod(a),t.next=10,(0,l.$K)(i,n);case 10:if(t.t0=t.sent,t.t0){t.next=13;break}t.t0=e;case 13:return o=t.t0,t.abrupt("return",o);case 15:case"end":return t.stop()}}),t)}))),[E,it,V]);(0,h.useEffect)((function(){H===e&&(0,a.Z)((0,s.Z)().mark((function t(){var e;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,xt();case 2:e=t.sent,X(e);case 4:case"end":return t.stop()}}),t)})))()}),[H,e,xt,X]),(0,h.useEffect)((function(){H===e&&(L({type:"SET_ASSET",payload:W}),J&&V&&(L({type:"SET_AMOUNT",payload:(0,l.gA)(I).toString()}),L({type:"SET_DEFAULT_AMOUNT",payload:(0,l.gA)(I).toString()})))}),[V,W,I,J,H,e,L,dt]);var mt=(0,h.useMemo)((function(){return E?(0,C.jsx)(u.Translation,{component:g.zx,translation:"common.withdraw",disabled:ct,onClick:dt,variant:"ctaFull"}):(0,C.jsx)(b.ConnectWalletButton,{variant:"ctaFull"})}),[E,ct,dt]),ft=(0,h.useMemo)((function(){return V&&"messages"in V?V.messages:void 0}),[V]);return(0,C.jsx)(S.AssetProvider,{flex:1,width:"100%",assetId:null===W||void 0===W?void 0:W.id,children:(0,C.jsxs)(p.gC,{pt:8,flex:1,spacing:6,width:"100%",height:"100%",id:"withdraw-container",alignItems:"space-between",justifyContent:"flex-start",children:[(0,C.jsxs)(p.gC,{flex:1,spacing:6,width:"100%",alignItems:"flex-start",children:[(0,C.jsxs)(p.Ug,{width:"100%",spacing:[3,4],alignItems:"flex-start",children:[(0,C.jsx)(p.xu,{pt:8,children:(0,C.jsx)(d.AssetLabel,{assetId:null===W||void 0===W?void 0:W.id})}),(0,C.jsxs)(p.gC,{spacing:1,width:"100%",alignItems:"flex-start",children:[(0,C.jsx)(r.Card,{px:4,py:2,layerStyle:"cardLight",children:(0,C.jsxs)(p.gC,{spacing:2,alignItems:"flex-start",children:[(0,C.jsx)(x.InputAmount,{amount:I,amountUsd:z,setAmount:T}),(0,C.jsxs)(p.Ug,{width:"100%",justifyContent:"space-between",children:[(0,C.jsxs)(p.Ug,{spacing:1,children:[(0,C.jsx)(u.Translation,{component:p.xv,translation:"common.balance",textStyle:"captionSmaller"}),(0,C.jsx)(S.AssetProvider.VaultBalance,{abbreviate:!0,decimals:4,textStyle:"captionSmaller",color:"primary"})]}),(0,C.jsx)(g.zx,{variant:"selector",onClick:ut,children:"MAX"})]})]})}),Z&&(0,C.jsx)(p.xv,{textStyle:"captionSmaller",color:"orange",children:Z})]})]}),lt.gt(0)&&null!==ft&&void 0!==ft&&ft.withdraw?(0,C.jsx)(r.Card.Dark,{p:2,border:0,children:(0,C.jsx)(u.Translation,{textStyle:"captionSmaller",translation:ft.withdraw,textAlign:"center"})}):(0,l.gA)(null===rt||void 0===rt?void 0:rt.balance).gt(0)&&(0,C.jsx)(r.Card.Dark,{py:2,pl:3,pr:2,border:0,children:(0,C.jsxs)(p.Ug,{spacing:3,width:"full",children:[(0,C.jsx)(u.Translation,{textStyle:"captionSmaller",translation:"trade.actions.withdraw.messages.unstakeFromGauge",textAlign:"left"}),(0,C.jsx)(u.Translation,{component:g.zx,translation:"common.unstake",fontSize:"xs",height:"auto",width:"auto",py:3,px:7,onClick:function(){return at("?tab=gauge")}})]})}),(0,C.jsx)(y.DynamicActionFields,{assetId:null===W||void 0===W?void 0:W.id,action:"withdraw",amount:I,amountUsd:z})]}),(0,C.jsxs)(p.gC,{spacing:4,id:"footer",alignItems:"flex-start",children:[(0,C.jsx)(w.EstimatedGasFees,{}),mt]})]})})}},80745:function(t,e,n){n.r(e),n.d(e,{Scrollable:function(){return l}});var s=n(1413),a=n(45987),i=(n(7276),n(3498)),o=n(45263),r=["children"],l=function(t){var e=t.children,n=(0,a.Z)(t,r);return(0,o.jsx)(i.kC,(0,s.Z)((0,s.Z)({flex:1,width:"100%",overflowY:"auto",overflowX:"hidden",direction:"column",alignItems:"flex-start"},n),{},{children:e}))}},60110:function(t,e,n){n.r(e),n.d(e,{StrategyLabel:function(){return d}});var s=n(1413),a=n(45987),i=(n(7276),n(12056)),o=n(15542),r=n(3498),l=n(45263),c=["strategy","customText","showLabel"],d=function(t){var e=t.strategy,n=t.customText,d=t.showLabel,u=void 0===d||d,x=(0,a.Z)(t,c);if(!e)return null;var m=i.A[e];return m?(0,l.jsxs)(r.Ug,{spacing:2,alignItems:"center",children:[u&&(0,l.jsx)(o.Translation,(0,s.Z)({component:r.xv,translation:n||(null===m||void 0===m?void 0:m.label),textStyle:"ctaStatic"},x)),(0,l.jsx)(r.xu,{width:2,height:2,borderRadius:"50%",bg:m.color})]}):null}},48024:function(t,e,n){n.r(e),n.d(e,{TransactionItem:function(){return d}});var s=n(99594),a=n(87099),i=n(3498),o=n(97778),r=n(15542),l=n(10658),c=n(45263),d=function(t){var e=t.transaction;return(0,c.jsxs)(i.gC,{mb:2,pb:4,spacing:4,width:"100%",alignItems:"flex-start",borderBottomWidth:"1px",borderBottomColor:"divider",children:[(0,c.jsxs)(i.Ug,{width:"100%",justifyContent:"space-between",children:[(0,c.jsx)(i.Ug,{spacing:3,direction:"row",alignItems:"center",children:(0,c.jsx)(r.Translation,{component:i.xv,translation:"transactionRow.".concat(e.action),textStyle:"captionSmall"})}),(0,c.jsx)(i.xv,{textStyle:"captionSmall",children:(0,s.p6)(1e3*+e.timeStamp,a.Cu)})]}),(0,c.jsxs)(i.Ug,{width:"100%",justifyContent:"space-between",children:[(0,c.jsx)(o.TokenAmount,{assetId:e.assetId,amount:e.underlyingAmount,size:"xs",textStyle:"tableCell"}),(0,c.jsx)(l.TransactionLink,{hash:e.hash})]})]})}},18147:function(t,e,n){n.r(e),n.d(e,{TransactionList:function(){return w}});var s=n(1413),a=n(93433),i=n(29439),o=n(45987),r=n(99594),l=n(7276),c=n(54447),d=n(88935),u=n(80745),x=n(3498),m=n(89030),f=n(15542),g=n(1669),p=n(53293),h=n(48024),v=n(45263),j=["assetIds","showTitleOnMobile","fullHeightOnMobile"],w=function(t){var e=t.assetIds,n=t.showTitleOnMobile,w=void 0!==n&&n,y=t.fullHeightOnMobile,b=void 0!==y&&y,S=(0,o.Z)(t,j),C=(0,d.Y)().account,A=(0,p.Z)(),I=(0,i.Z)(A,2),T=I[0],M=I[1],k=(0,g.w)(),Z=k.isPortfolioLoaded,P=k.isVaultsPositionsLoaded,D=k.selectors,U=D.selectVaultTransactions,z=D.selectVaultGauge,B=(0,l.useMemo)((function(){return C&&e&&U&&z?e.reduce((function(t,e){var n=z(e),s=U(e),i=n?U(n.id):[];return[].concat((0,a.Z)(t),(0,a.Z)(s),(0,a.Z)(i))}),[]):[]}),[C,e,U,z]),E=(0,l.useMemo)((function(){return Z&&(!C||P)}),[Z,C,P]),O=(0,l.useMemo)((function(){return E?B.length>0?(0,r.Pf)(B,"timeStamp","desc").map((function(t,e){return(0,v.jsx)(h.TransactionItem,{transaction:t},"tx_".concat(e))})):(0,v.jsx)(x.kC,{flex:1,minH:250,width:"100%",alignItems:"center",justifyContent:"center",children:(0,v.jsx)(f.Translation,{component:x.xv,translation:"assets.assetDetails.assetHistory.emptyTransactions"})}):(0,v.jsxs)(x.gC,{spacing:4,width:"100%",children:[(0,v.jsx)(m.Od,{width:"100%",height:10}),(0,v.jsx)(m.Od,{width:"100%",height:10}),(0,v.jsx)(m.Od,{width:"100%",height:10}),(0,v.jsx)(m.Od,{width:"100%",height:10})]})}),[E,B]);return(0,v.jsx)(c.Card,(0,s.Z)((0,s.Z)({flex:1},S),{},{children:(0,v.jsxs)(x.gC,{flex:1,spacing:0,height:"100%",alignItems:"flex-start",ref:T,justifyContent:"flex-start",children:[(0,v.jsx)(f.Translation,{display:w?"block":["none","block"],component:c.Card.Heading,translation:"assets.assetDetails.assetHistory.transactionHistory"}),(0,v.jsx)(u.Scrollable,{maxH:[b?"100%":280,Math.max((null===M||void 0===M?void 0:M.height)||400)],children:O})]})}))}}}]);