"use strict";(self.webpackChunkidle_dashboard_new=self.webpackChunkidle_dashboard_new||[]).push([[7041,1617,6624],{61617:function(e,t,n){n.r(t),n.d(t,{AssetLabel:function(){return u}});var a=n(1413),i=n(45987),r=n(3498),o=n(75712),s=n(45263),l=["assetId","size","spacing","extraFields"],u=function(e){var t=e.assetId,n=e.size,u=void 0===n?"sm":n,d=e.spacing,c=e.extraFields,m=(0,i.Z)(e,l);return(0,s.jsx)(o.AssetProvider,{wrapFlex:!1,assetId:t,children:(0,s.jsxs)(r.Ug,{spacing:d,alignItems:"center",justifyContent:"flex-start",children:[(0,s.jsx)(o.AssetProvider.Icon,{size:u}),(0,s.jsx)(o.AssetProvider.Name,(0,a.Z)({textStyle:"heading",fontSize:["15px","h3"],whiteSpace:"nowrap"},m)),null===c||void 0===c?void 0:c.map((function(e){return(0,s.jsx)(o.AssetProvider.GeneralData,{field:e},"extraField_".concat(e))}))]})})}},52734:function(e,t,n){n.r(t),n.d(t,{InputDate:function(){return d}});var a=n(1413),i=n(45987),r=(n(7276),n(99594)),o=n(3498),s=n(3497),l=n(45263),u=["inputHeight","value","setValue"],d=function(e){var t=e.inputHeight,n=e.value,d=e.setValue,c=(0,i.Z)(e,u);return(0,l.jsx)(o.Ug,{width:"100%",justifyContent:"space-between",children:(0,l.jsx)(s.II,(0,a.Z)({type:"date",height:t,flex:1,placeholder:"",variant:"balance",value:n||"",onChange:function(e){var t=e.target.value,n=(0,r.qF)(t).isValid()?(0,r.qF)(t):null;d(n)}},c))})}},66624:function(e,t,n){n.r(t),n.d(t,{DynamicActionFields:function(){return g}});var a=n(1413),i=n(45987),r=n(5128),o=n(7276),s=n(12056),l=n(86059),u=n(60062),d=n(99594),c=n(15542),m=n(1669),v=n(3498),p=n(45263),f=["assetId","field","amount","amountUsd","stakingPower"],x=function(e){var t,n,s=e.assetId,x=e.field,g=e.amount,h=e.amountUsd,y=e.stakingPower,k=(0,i.Z)(e,f),b=(0,m.w)(),A=b.stakingData,M=b.helpers.vaultFunctionsHelper,S=b.selectors,j=S.selectAssetById,w=S.selectVaultById,C=S.selectVaultGauge,Z=(0,o.useMemo)((function(){return s&&j&&j(s)}),[s,j]),I=(0,o.useMemo)((function(){return s&&w&&w(s)}),[s,w]),D=(0,o.useMemo)((function(){return s&&C&&C(s)}),[s,C]),Y=(0,o.useMemo)((function(){return D&&j&&j(D.id)}),[D,j]),F=(0,o.useMemo)((function(){return(0,d.gA)(Z.tvl).plus((0,d.d5)(g))}),[Z,g]),E=(0,o.useMemo)((function(){return null===M||void 0===M?void 0:M.getVaultNewApr(Z,I,(0,d.gA)(g))}),[Z,I,g,M]),T=(0,o.useMemo)((function(){if((0,d.d5)(E).gt(0)){var e=(0,d.Bs)((0,d.d5)(E).div(100)).times(100),t=Z.apyBreakdown?Object.keys(Z.apyBreakdown||{}).filter((function(e){return"base"!==e})).reduce((function(e,t){switch(t){case"gauge":var n=null===Y||void 0===Y?void 0:Y.gaugeData;if(n){var a=(0,d.d5)(null===n||void 0===n?void 0:n.totalSupply).plus((0,d.d5)(g)),i=(0,d.d5)(null===n||void 0===n?void 0:n.totalSupply).div(a),r=Z.apyBreakdown[t].times(i);return e.plus(r)}return e.plus(Z.apyBreakdown[t]);case"harvest":var o=(0,d.gA)(Z.tvl).div(F),s=Z.apyBreakdown[t].times(o);return e.plus(s);default:return e.plus(Z.apyBreakdown[t])}}),(0,d.gA)(0)):(0,d.gA)(0);return(0,d.gA)(e).plus(t)}return(0,d.d5)(null===Z||void 0===Z?void 0:Z.apy)}),[Z,g,F,Y,E]),P=(0,o.useMemo)((function(){return(0,d.d5)(h).gt(0)}),[h]),U=(0,o.useMemo)((function(){var e;return(0,d.d5)(null===Z||void 0===Z||null===(e=Z.vaultPosition)||void 0===e?void 0:e.underlying.redeemable)}),[Z]),B=(0,o.useMemo)((function(){var e;return(0,d.d5)(null===Z||void 0===Z||null===(e=Z.vaultPosition)||void 0===e?void 0:e.usd.redeemable)}),[Z]),O=(0,o.useMemo)((function(){var e,t;return"flags"in I&&(0,d.d5)(null===(e=I.flags)||void 0===e?void 0:e.withdrawFee).gt(0)?B.times(null===(t=I.flags)||void 0===t?void 0:t.withdrawFee):(0,d.gA)(0)}),[I,B]),_=(0,o.useMemo)((function(){var e;return r.Z.maximum(0,(0,d.d5)(null===Z||void 0===Z||null===(e=Z.vaultPosition)||void 0===e?void 0:e.usd.earnings).minus(O))}),[O,Z]),L=(0,o.useMemo)((function(){return r.Z.minimum(1,(0,d.d5)(h).div(B))}),[h,B]),q=(0,o.useMemo)((function(){return r.Z.minimum(_,L.times(_))}),[_,L]),z=(0,o.useMemo)((function(){var e;return r.Z.maximum(0,(0,d.d5)(null===Z||void 0===Z||null===(e=Z.vaultPosition)||void 0===e?void 0:e.usd.earnings).times(null===Z||void 0===Z?void 0:Z.fee))}),[Z]),V=(0,o.useMemo)((function(){return r.Z.minimum(z,(0,d.d5)(q).times(null===Z||void 0===Z?void 0:Z.fee))}),[z,q,Z]);I instanceof u.C&&(_=_.plus(V),q=q.plus(V));var N=P&&(0,d.d5)(g).lte(U),G="cta",H=null;switch(x){case"boost":var $=T&&null!==Z&&void 0!==Z&&null!==(t=Z.baseApr)&&void 0!==t&&t.gt(0)?T.div(null===Z||void 0===Z?void 0:Z.baseApr):(0,d.gA)(0);H=(0,p.jsxs)(v.xv,(0,a.Z)((0,a.Z)({},k),{},{textStyle:"titleSmall",color:"primary",children:[$.toFixed(2),"x"]}));break;case"overperformance":var Q=(0,d.d5)(h).times((0,d.gA)(null===Z||void 0===Z?void 0:Z.baseApr).div(100)),W=(0,d.d5)(h).times((0,d.gA)(null===Z||void 0===Z?void 0:Z.apy).div(100)),K=P?W.minus(Q):null;H=(0,p.jsx)(l.Amount.Usd,(0,a.Z)((0,a.Z)({textStyle:"titleSmall",color:"primary"},k),{},{value:K,suffix:"/year"}));break;case"newApy":H=(0,p.jsx)(l.Amount.Percentage,(0,a.Z)((0,a.Z)({textStyle:"titleSmall",color:"primary"},k),{},{value:T}));break;case"totalGain":H=(0,p.jsx)(l.Amount.Usd,(0,a.Z)((0,a.Z)({decimals:q.lt(1)?4:2,textStyle:"titleSmall",color:"primary"},k),{},{value:N?q:null}));break;case"fee":H=(0,p.jsx)(l.Amount.Usd,(0,a.Z)((0,a.Z)({decimals:V.lt(1)?4:2,textStyle:"titleSmall",color:"primary"},k),{},{value:N?-V:null}));break;case"withdrawFee":(0,d.d5)(null===(n=I.flags)||void 0===n?void 0:n.withdrawFee).gt(0)&&(G="orange",H=(0,p.jsx)(l.Amount.Usd,(0,a.Z)((0,a.Z)({decimals:O.lt(1)?4:2,textStyle:"titleSmall",color:"orange"},k),{},{value:N?-O:null})));break;case"netGain":var R=r.Z.minimum(_.minus(V),(0,d.d5)(q).minus(V));H=(0,p.jsx)(l.Amount.Usd,(0,a.Z)((0,a.Z)({decimals:R.lt(1)?4:2,textStyle:"titleSmall",color:"primary"},k),{},{value:N?R:null}));break;case"coverage":var X=j(null===I||void 0===I?void 0:I.vaultConfig.Tranches.BB.address),J=X.tvl&&F?X.tvl.div(F).times(100):0;H=(0,p.jsx)(l.Amount.Percentage,(0,a.Z)((0,a.Z)({textStyle:"titleSmall",color:"primary"},k),{},{value:J}));break;case"stakingPoolShare":if(A){var ee=(0,d.d5)(g).div(A.stkIDLE.totalSupply.plus((0,d.d5)(g))).times(100);H=(0,p.jsx)(l.Amount.Percentage,(0,a.Z)((0,a.Z)({textStyle:"titleSmall",color:"primary"},k),{},{value:ee}))}break;case"stkIDLE":case"stkIDLEAfterIncrease":H=(0,p.jsx)(l.Amount,(0,a.Z)((0,a.Z)({textStyle:"titleSmall",color:"primary",suffix:" stkIDLE"},k),{},{value:g}));break;case"stakingApy":if(A){var te=(0,d.d5)(y).times(A.maxApr);H=(0,p.jsx)(l.Amount.Percentage,(0,a.Z)((0,a.Z)({textStyle:"titleSmall",color:"primary"},k),{},{value:te}))}break;default:return null}return H?(0,p.jsxs)(v.Ug,{pb:2,px:4,width:"100%",alignItems:"center",borderBottom:"1px solid",borderBottomColor:"divider",justifyContent:"space-between",children:[(0,p.jsx)(c.Translation,{component:v.xv,translation:"dynamicActionFields.".concat(x),textStyle:"captionSmall",color:G}),H]}):null},g=function(e){var t=(0,m.w)().selectors.selectVaultById,n=e.assetId,i=e.action,r=(0,o.useMemo)((function(){return n&&t&&t(n)}),[n,t]),l=(0,o.useMemo)((function(){return(null===r||void 0===r?void 0:r.type)&&s.A[r.type]}),[r]),u=(0,o.useMemo)((function(){var e;return null!==l&&void 0!==l&&null!==(e=l.dynamicActionFields)&&void 0!==e&&e[i]?null===l||void 0===l?void 0:l.dynamicActionFields[i]:null}),[i,l]);return u?(0,p.jsx)(v.gC,{spacing:2,width:"100%",children:u.map((function(t){return(0,p.jsx)(x,(0,a.Z)((0,a.Z)({},e),{},{field:t}),"field_".concat(t))}))}):null}},67041:function(e,t,n){n.r(t),n.d(t,{Stake:function(){return F}});var a=n(93433),i=n(74165),r=n(15861),o=n(29439),s=n(5128),l=n(54447),u=n(55967),d=n(13708),c=n(13461),m=n(33482),v=n(52734),p=n(47174),f=n(61617),x=n(15542),g=n(1128),h=n(1669),y=n(7276),k=n(23023),b=n(4710),A=n(78951),M=n(66624),S=n(86393),j=n(75712),w=n(87099),C=n(43127),Z=n(3498),I=n(88089),D=n(99594),Y=n(45263),F=function(e){var t=e.itemIndex,n=(0,y.useState)(""),F=(0,o.Z)(n,2),E=F[0],T=F[1],P=(0,y.useState)("0"),U=(0,o.Z)(P,2),B=U[0],O=U[1],_=(0,y.useState)(""),L=(0,o.Z)(_,2),q=L[0],z=L[1],V=(0,y.useState)(0),N=(0,o.Z)(V,2),G=N[0],H=N[1],$=(0,y.useState)(null),Q=(0,o.Z)($,2),W=Q[0],K=Q[1],R=(0,c.x)().web3,X=(0,p.Y)().account,J=(0,j.useAssetProvider)(),ee=J.asset,te=J.vault,ne=J.underlyingAsset,ae=J.translate,ie=(0,k.R)(),re=ie.sendTransaction,oe=ie.setGasLimit,se=ie.state,le=se.transaction,ue=se.block,de=(0,b.useOperativeComponent)(),ce=de.dispatch,me=de.activeItem,ve=de.activeStep,pe=de.executeAction,fe=de.setActionIndex,xe=(0,h.w)(),ge=xe.stakingData,he=xe.selectors,ye=he.selectAssetBalance,ke=he.selectAssetPriceUsd,be=(0,y.useMemo)((function(){return ye?ye(null===ne||void 0===ne?void 0:ne.id):(0,D.gA)(0)}),[ye,null===ne||void 0===ne?void 0:ne.id]),Ae=(0,y.useMemo)((function(){if(ke&&ne){var e=ke(ne.id);return(0,D.d5)(B).times(e)}}),[ne,B,ke]),Me=(0,y.useMemo)((function(){return[{type:"amount",action:"increaseAmount",label:"staking.increaseAmount"},{type:"time",action:"increaseTime",label:"staking.increaseTime"}]}),[]),Se=(0,y.useMemo)((function(){var e,t;return!(null===ge||void 0===ge||null===(e=ge.position)||void 0===e||!e.lockEnd||!ue)&&(0,D.qF)(null===ge||void 0===ge||null===(t=ge.position)||void 0===t?void 0:t.lockEnd).isSameOrBefore((0,D.qF)(1e3*ue.timestamp))}),[ge,ue]),je=(0,y.useMemo)((function(){var e;return null===ge||void 0===ge||null===(e=ge.position)||void 0===e?void 0:e.deposited.gt(0)}),[ge]),we=(0,y.useMemo)((function(){return je?Me[G]:null}),[je,Me,G]),Ce=(0,y.useMemo)((function(){return we?we.type:null}),[we]),Ze=(0,y.useMemo)((function(){return we?we.action:"stake"}),[we]),Ie=(0,y.useMemo)((function(){var e,t;return null!==ge&&void 0!==ge&&null!==(e=ge.position)&&void 0!==e&&e.lockEnd?(0,D.qF)(null===ge||void 0===ge||null===(t=ge.position)||void 0===t?void 0:t.lockEnd).add(w.Bv,"second"):(0,D.qF)().add(w.z1,"second")}),[ge]),De=(0,y.useMemo)((function(){return(0,D.qF)().add(w.$O,"second")}),[]),Ye=(0,y.useMemo)((function(){var e;if("amount"===Ce&&null!==ge&&void 0!==ge&&null!==(e=ge.position)&&void 0!==e&&e.lockEnd)return Math.round(ge.position.lockEnd/1e3);var t=(0,D.qF)(),n=W&&W.set("hour",t.hour()).set("minute",t.minute()).set("second",t.second());return n?Math.round(n.toDate().getTime()/1e3):0}),[Ce,ge,W]),Fe=(0,y.useMemo)((function(){var e=Math.max(0,Ye-Math.round(Date.now()/1e3));return(0,D.gA)(e).div(w.$O)}),[Ye]),Ee=(0,y.useMemo)((function(){var e;return(0,D.d5)(null===ge||void 0===ge||null===(e=ge.position)||void 0===e?void 0:e.deposited)}),[ge]),Te=(0,y.useMemo)((function(){var e,t;return"time"===Ce&&null!==ge&&void 0!==ge&&ge.position?null===ge||void 0===ge||null===(t=ge.position)||void 0===t?void 0:t.deposited.times(Fe):(0,D.d5)(null===ge||void 0===ge||null===(e=ge.position)||void 0===e?void 0:e.balance).plus((0,D.d5)(B).times(Fe))}),[Ce,ge,Fe,B]);(0,y.useEffect)((function(){var e;null!==ge&&void 0!==ge&&null!==(e=ge.position)&&void 0!==e&&e.lockEnd&&"time"===Ce&&K(Ie)}),[ge,K,Ce,Ie]);var Pe=(0,y.useCallback)((function(){return W&&W.startOf("day").isSameOrAfter(Ie.startOf("day"))&&W.startOf("day").isSameOrBefore(De.startOf("day"))}),[W,Ie,De]),Ue=(0,y.useMemo)((function(){return[{label:"staking.6months",value:6,timeframe:"month"},{label:"staking.1year",value:1,timeframe:"year"},{label:"staking.4years",value:w.$O,timeframe:"second"}]}),[]),Be=(0,y.useMemo)((function(){if(T(""),z(""),!Ce||"amount"===Ce){if((0,D.gA)(B).isNaN()||(0,D.gA)(B).lte(0))return!0;if((0,D.gA)(B).gt(be))return T(ae("trade.errors.insufficientFundsForAmount",{symbol:null===ne||void 0===ne?void 0:ne.name})),!0}return!(Ce&&"time"!==Ce||Pe())&&(z(ae("time"===Ce?"trade.errors.stakingIncreaseLockEndDateNotCorrect":"trade.errors.stakingLockEndDateNotCorrect")),!0)}),[B,Ce,Pe,be,ne,ae]),Oe=(0,y.useCallback)((0,r.Z)((0,i.Z)().mark((function e(){var t,n,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ne&&te&&"getAllowanceContract"in te){e.next=2;break}return e.abrupt("return",(0,D.gA)(0));case 2:if(null!==X&&void 0!==X&&X.address){e.next=4;break}return e.abrupt("return",(0,D.gA)(0));case 4:if(t=te.getAllowanceContract()){e.next=7;break}return e.abrupt("return",(0,D.gA)(0));case 7:return n=(0,D.WP)(te),e.next=10,(0,D.RC)(t,X.address,n);case 10:return a=e.sent,e.abrupt("return",(0,D.I0)(a,ne.decimals));case 12:case"end":return e.stop()}}),e)}))),[ne,te,null===X||void 0===X?void 0:X.address]),_e=(0,y.useCallback)((function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];X&&!Be&&te&&"getDepositContractSendMethod"in te&&"getDepositParams"in te&&te instanceof m.y&&(0,r.Z)((0,i.Z)().mark((function t(){var n,r,o,s,l,u,c,m,v,p,f,x;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(je){t.next=26;break}if(!e){t.next=7;break}return t.next=4,Oe();case 4:t.t0=t.sent,t.next=8;break;case 7:t.t0=(0,D.gA)(B);case 8:if(!t.t0.gte(B)){t.next=23;break}if(n=Ye,r=(0,a.Z)(Ue).pop(),(null===W||void 0===W?void 0:W.format("YYYY-MM-DD"))!==(0,D.qF)().add(r.value,r.timeframe).format("YYYY-MM-DD")){t.next=17;break}return t.next=15,(0,D.Qg)(R);case 15:(o=t.sent)&&(n=+o.timestamp+w.$O);case 17:(0,d.tM)(ee,Ae),s=te.getDepositParams(B,n),l=te.getDepositContractSendMethod(s),re(te.id,null===ne||void 0===ne?void 0:ne.id,l,Ze),t.next=24;break;case 23:ce({type:"SET_ACTIVE_STEP",payload:1});case 24:t.next=51;break;case 26:t.t1=Ce,t.next="amount"===t.t1?29:"time"===t.t1?39:50;break;case 29:if(!e){t.next=35;break}return t.next=32,Oe();case 32:t.t2=t.sent,t.next=36;break;case 35:t.t2=(0,D.gA)(B);case 36:return t.t2.gte(B)?(u=te.getIncreaseAmountParams(B),c=te.getIncreaseAmountContractSendMethod(u),re(te.id,null===ne||void 0===ne?void 0:ne.id,c,Ze)):ce({type:"SET_ACTIVE_STEP",payload:1}),t.abrupt("break",51);case 39:if(m=Ye,v=(0,a.Z)(Ue).pop(),(null===W||void 0===W?void 0:W.format("YYYY-MM-DD"))!==(0,D.qF)().add(v.value,v.timeframe).format("YYYY-MM-DD")){t.next=46;break}return t.next=44,(0,D.Qg)(R);case 44:(p=t.sent)&&(m=+p.timestamp+w.$O);case 46:return f=te.getIncreaseTimeParams(m),x=te.getIncreaseTimeContractSendMethod(f),re(te.id,null===ne||void 0===ne?void 0:ne.id,x,Ze,(0,D.p6)(W,"YYYY-MM-DD HH:mm",!0)),t.abrupt("break",51);case 50:return t.abrupt("break",51);case 51:case"end":return t.stop()}}),t)})))()}),[X,ee,je,Ze,Ce,Be,B,Ae,Ue,R,W,Ye,te,ne,ce,Oe,re]);(0,y.useEffect)((function(){pe||ve!==t||"success"!==le.status||O("")}),[pe,le.status,ve,t]);var Le=(0,y.useCallback)((function(){null!==ne&&void 0!==ne&&ne.balance&&O(ne.balance.toString())}),[ne]),qe=(0,y.useCallback)((0,r.Z)((0,i.Z)().mark((function e(){var t,n,a,r,o,l,u,d,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(te&&"getDepositContractSendMethod"in te&&"getDepositParams"in te&&te instanceof m.y){e.next=2;break}return e.abrupt("return");case 2:if(t=te.getMethodDefaultGasLimit("stake"),X&&!be.lte(0)&&Pe()){e.next=5;break}return e.abrupt("return",t);case 5:return e.next=7,Oe();case 7:if(!(n=e.sent).lte(0)){e.next=10;break}return e.abrupt("return",t);case 10:if(a=s.Z.minimum(be,n),r={from:null===X||void 0===X?void 0:X.address},o=null,je?"amount"===Ce?(u=te.getIncreaseAmountParams(a.toFixed()),o=te.getIncreaseAmountContractSendMethod(u)):"time"===Ce&&(d=te.getIncreaseTimeParams(Ye),o=te.getIncreaseTimeContractSendMethod(d)):(l=te.getDepositParams(a.toFixed(),Ye),o=te.getDepositContractSendMethod(l)),o){e.next=16;break}return e.abrupt("return",t);case 16:return e.next=18,(0,D.$K)(o,r);case 18:if(e.t0=e.sent,e.t0){e.next=21;break}e.t0=t;case 21:return c=e.t0,e.abrupt("return",c);case 23:case"end":return e.stop()}}),e)}))),[X,je,Ce,te,Pe,Ye,Oe,be]);(0,y.useEffect)((function(){me===t&&(0,r.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,qe();case 2:t=e.sent,oe(t);case 4:case"end":return e.stop()}}),e)})))()}),[me,t,qe,oe]),(0,y.useEffect)((function(){me===t&&(ce({type:"SET_AMOUNT",payload:B}),ce({type:"SET_DEFAULT_AMOUNT",payload:B}),ce({type:"SET_ASSET",payload:ne}),pe&&(_e(!1),ce({type:"SET_EXECUTE_ACTION",payload:!1})))}),[B,me,ne,t,ce,pe,_e]);var ze=(0,y.useMemo)((function(){return X?(0,Y.jsx)(x.Translation,{component:C.zx,translation:"staking.".concat(Ze),disabled:Be,onClick:_e,variant:"ctaFull"}):(0,Y.jsx)(S.ConnectWalletButton,{variant:"ctaFull"})}),[X,Be,Ze,_e]),Ve=(0,y.useCallback)((function(e,t){var n=(0,D.dU)((0,D.dk)((0,D.qF)().add(e,t),Ie),De);K(n)}),[K,Ie,De]),Ne=(0,y.useCallback)((function(e){H(e)}),[H]),Ge=(0,y.useMemo)((function(){return je&&"amount"!==Ce?null:(0,Y.jsxs)(Z.Ug,{width:"100%",spacing:[3,4],alignItems:"flex-start",children:[(0,Y.jsx)(Z.xu,{pt:8,width:"110px",children:(0,Y.jsx)(f.AssetLabel,{assetId:null===ee||void 0===ee?void 0:ee.id})}),(0,Y.jsxs)(Z.gC,{flex:1,spacing:1,alignItems:"flex-start",children:[(0,Y.jsx)(l.Card,{px:4,py:2,layerStyle:"cardLight",children:(0,Y.jsxs)(Z.gC,{spacing:2,alignItems:"flex-start",children:[(0,Y.jsx)(g.InputAmount,{amount:B,amountUsd:null,setAmount:O}),(0,Y.jsxs)(Z.Ug,{width:"100%",justifyContent:"space-between",children:[(0,Y.jsxs)(Z.Ug,{spacing:1,children:[(0,Y.jsx)(x.Translation,{component:Z.xv,translation:"common.balance",textStyle:"captionSmaller"}),(0,Y.jsx)(j.AssetProvider.Balance,{abbreviate:!0,decimals:4,textStyle:"captionSmaller",color:"primary"})]}),(0,Y.jsx)(C.zx,{variant:"selector",onClick:Le,children:"MAX"})]})]})}),E&&(0,Y.jsx)(Z.xv,{textStyle:"captionSmaller",color:"orange",children:E})]})]})}),[ee,B,O,E,Le,je,Ce]),He=(0,y.useMemo)((function(){return je&&"time"!==Ce?null:(0,Y.jsxs)(Z.Ug,{spacing:4,width:"100%",alignItems:"flex-start",children:[(0,Y.jsx)(Z.xu,{pt:8,width:"110px",children:(0,Y.jsx)(x.Translation,{translation:"staking.lockEnd",textStyle:"titleSmall",fontSize:"md",color:"primary",whiteSpace:"nowrap"})}),(0,Y.jsxs)(Z.gC,{flex:1,spacing:1,alignItems:"flex-start",children:[(0,Y.jsx)(l.Card,{px:4,py:2,layerStyle:"cardLight",children:(0,Y.jsxs)(Z.gC,{spacing:2,alignItems:"flex-start",children:[(0,Y.jsx)(v.InputDate,{value:null===W||void 0===W?void 0:W.format("YYYY-MM-DD"),setValue:K,min:Ie.format("YYYY-MM-DD"),max:De.format("YYYY-MM-DD")}),(0,Y.jsx)(Z.MI,{spacing:1,width:"100%",columns:Ue.length,justifyContent:"space-between",children:Ue.map((function(e){var t=(null===W||void 0===W?void 0:W.format("YYYY-MM-DD"))===(0,D.qF)().add(e.value,e.timeframe).format("YYYY-MM-DD");return(0,Y.jsx)(x.Translation,{translation:e.label,component:C.zx,variant:"selector","aria-selected":t,onClick:function(){return Ve(e.value,e.timeframe)}},"option_".concat(e.label))}))})]})}),q&&(0,Y.jsx)(Z.xv,{textStyle:"captionSmaller",color:"orange",children:q})]})]})}),[je,Ce,W,K,Ie,De,Ue,Ve,q]);return(0,Y.jsx)(j.AssetProvider,{flex:1,width:"100%",assetId:null===ee||void 0===ee?void 0:ee.underlyingId,children:Se?(0,Y.jsx)(Z.M5,{px:10,flex:1,width:"100%",children:(0,Y.jsxs)(Z.gC,{spacing:6,children:[(0,Y.jsx)(u.ppH,{size:72}),(0,Y.jsxs)(Z.gC,{spacing:4,children:[(0,Y.jsx)(x.Translation,{component:Z.xv,translation:"staking.lockExpired",textStyle:"heading",fontSize:"h3",textAlign:"center"}),(0,Y.jsx)(x.Translation,{component:Z.xv,translation:"staking.canWithdrawLock",params:{amount:(0,D.dm)(Ee),asset:null===ee||void 0===ee?void 0:ee.name},textStyle:"captionSmall",textAlign:"center"}),(0,Y.jsx)(x.Translation,{component:C.zx,translation:"common.unstake",onClick:function(){return fe(1)},variant:"ctaPrimary",px:10})]})]})}):(0,Y.jsxs)(Z.gC,{pt:8,flex:1,spacing:6,height:"100%",id:"deposit-container",alignItems:"space-between",justifyContent:"flex-start",children:[(0,Y.jsxs)(Z.gC,{flex:1,spacing:6,width:"100%",alignItems:"flex-start",children:[je&&(0,Y.jsx)(I.mQ,{width:"100%",defaultIndex:0,variant:"buttonTertiary",onChange:Ne,children:(0,Y.jsx)(I.td,{width:"100%",children:(0,Y.jsx)(Z.MI,{spacing:2,width:"100%",columns:Me.length,children:Me.map((function(e){return(0,Y.jsx)(x.Translation,{component:I.OK,translation:e.label},"option_".concat(e.label))}))})})}),Ge,He,Te.gt(0)&&(0,Y.jsx)(M.DynamicActionFields,{assetId:null===ee||void 0===ee?void 0:ee.id,action:Ze,amount:Te.toFixed(),amountUsd:Te.toFixed(),stakingPower:Fe})]}),(0,Y.jsxs)(Z.gC,{spacing:4,id:"footer",alignItems:"flex-start",children:[(0,Y.jsx)(A.EstimatedGasFees,{}),ze]})]})})}}}]);