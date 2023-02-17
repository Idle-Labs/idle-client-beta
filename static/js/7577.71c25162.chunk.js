"use strict";(self.webpackChunkidle_dashboard_new=self.webpackChunkidle_dashboard_new||[]).push([[7577,4447,8194,8024],{54447:function(e,n,t){t.r(n),t.d(n,{Card:function(){return x},CardFlex:function(){return m},Dark:function(){return g},Light:function(){return p},Outline:function(){return f}});var r=t(1413),i=t(45987),a=t(3498),l=t(45263),o=["children"],s=["children","layerStyle"],d=["children","layerStyle"],c=["children"],u=["children"],h=["children"],x=function(e){var n=e.children,t=e.layerStyle,o=(0,i.Z)(e,s);return(0,l.jsx)(a.xu,(0,r.Z)((0,r.Z)({width:"100%",position:"relative",layerStyle:t||"card"},o),{},{children:n}))},m=function(e){var n=e.children,t=e.layerStyle,o=(0,i.Z)(e,d);return(0,l.jsx)(a.kC,(0,r.Z)((0,r.Z)({width:"100%",layerStyle:t||"card"},o),{},{children:n}))},g=function(e){var n=e.children,t=(0,i.Z)(e,c),a=["cardDark"].concat(e.layerStyle);return(0,l.jsx)(x,(0,r.Z)((0,r.Z)({},t),{},{layerStyle:a,children:n}))},p=function(e){var n=e.children,t=(0,i.Z)(e,u),a=["cardLight"].concat(e.layerStyle);return(0,l.jsx)(x,(0,r.Z)((0,r.Z)({},t),{},{layerStyle:a,children:n}))},f=function(e){var n=e.children,t=(0,i.Z)(e,h),a=["cardOutline"].concat(e.layerStyle);return(0,l.jsx)(x,(0,r.Z)((0,r.Z)({},t),{},{layerStyle:a,children:n}))};x.Dark=g,x.Light=p,x.Flex=m,x.Outline=f,x.Heading=function(e){var n=e.children,t=(0,i.Z)(e,o);return(0,l.jsx)(a.X6,(0,r.Z)((0,r.Z)({as:"h3",size:"md",mb:6},t),{},{children:n}))}},58194:function(e,n,t){t.r(n),t.d(n,{ReactTable:function(){return x}});var r=t(1413),i=t(7276),a=t(55967),l=t(63591),o=t(96699),s=t(3498),d=t(26720),c=t(67503),u=t(45263),h=function(e){var n=e.column,t=(0,o.Fg)();return(0,u.jsxs)(s.kC,{alignItems:"center",layerStyle:"tableHeader",justifyContent:"space-between",children:[n.render("Header"),n.canSort&&(0,u.jsxs)(s.kC,{direction:"column",children:[(0,u.jsx)(a.rWj,{size:20,fill:n.isSorted&&n.isSortedDesc?t.colors.primary:t.colors.table.arrow,"aria-label":"sorted ascending",style:{position:"absolute"}}),(0,u.jsx)(a.Ix0,{size:20,fill:n.isSorted?n.isSortedDesc?t.colors.table.arrow:t.colors.primary:t.colors.table.arrow,"aria-label":"sorted descending",style:{marginTop:10}})]})]})},x=function(e){var n=e.columns,t=e.data,a=e.page,o=e.rowsPerPage,s=e.displayHeaders,x=void 0===s||s,m=e.onRowClick,g=e.initialState,p=(0,d.ff)("black","white"),f=(0,l.useTable)({columns:n,data:t,initialState:g},l.useSortBy),y=f.getTableProps,v=f.getTableBodyProps,j=f.headerGroups,b=f.rows,w=f.prepareRow,S=(0,i.useMemo)((function(){return o&&a?b.slice(o*(a-1),o*a):b}),[b,a,o]),C=(0,i.useMemo)((function(){return S.map((function(e){var n=!1;return w(e),(0,u.jsx)(c.Tr,(0,r.Z)((0,r.Z)({},e.getRowProps()),{},{tabIndex:e.index,layerStyle:"tableRow",onClick:function(){return null===m||void 0===m?void 0:m(e)},cursor:m?"pointer":void 0,children:e.cells.map((function(t,i){var a=!n&&"none"!==t.column.display,l=i===e.cells.length-1;a&&(n=!0);var o=a?{borderTopLeftRadius:8,borderBottomLeftRadius:8}:l?{borderTopRightRadius:8,borderBottomRightRadius:8}:{};return(0,u.jsx)(c.Td,(0,r.Z)((0,r.Z)({},t.getCellProps()),{},{display:t.column.display,sx:o,children:t.render("Cell")}))}))}))}))}),[w,S,m]);return(0,u.jsxs)(c.iA,(0,r.Z)((0,r.Z)({variant:"clickable",size:{base:"sm",md:"md"}},y()),{},{children:[x&&(0,u.jsx)(c.hr,{children:j.map((function(e){var n=!1;return(0,u.jsx)(c.Tr,(0,r.Z)((0,r.Z)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(t,i){var a=!n&&"none"!==t.display,l=i===e.headers.length-1;a&&(n=!0);var o=a?{paddingLeft:0,paddingRight:4}:l?{paddingLeft:4,paddingRight:0}:{paddingLeft:4,paddingRight:4};return(0,u.jsx)(c.Th,(0,r.Z)((0,r.Z)({},t.getHeaderProps(t.getSortByToggleProps({title:void 0}))),{},{color:"gray.500",fontWeight:400,display:t.display,textAlign:t.textAlign,_hover:{color:t.canSort?p:"gray.500"},style:o,children:(0,u.jsx)(h,{column:t})}))}))}))}))}),(0,u.jsx)(c.p3,(0,r.Z)((0,r.Z)({},v()),{},{children:C}))]}))}},87577:function(e,n,t){t.r(n),t.d(n,{StakingDistributedRewards:function(){return Z}});var r=t(1413),i=t(29439),a=t(54447),l=t(79681),o=t(87099),s=t(58383),d=t(66288),c=t(88935),u=t(58194),h=t(7276),x=t(15542),m=t(97778),g=t(1669),p=t(55967),f=t(48024),y=t(10658),v=t(96699),j=t(89030),b=t(3498),w=t(43127),S=t(99594),C=t(45263),Z=function(){var e=(0,v.Fg)(),n=(0,l.qM)(),t=(0,d.X)().isMobile,Z=(0,h.useState)(1),k=(0,i.Z)(Z,2),T=k[0],R=k[1],I=(0,g.w)().stakingData,L=(0,c.Y)(),M=L.chainId,H=L.explorer,P=(0,h.useCallback)((function(e){var n=(0,S.QG)(M,H,e.original.hash);return(0,S.xw)(n)}),[M,H]),D=(0,h.useMemo)((function(){return M?(0,s.Zs)(M,o.MI):null}),[M]),A=(0,h.useMemo)((function(){return I?I.rewards:[]}),[I]),z=(0,h.useMemo)((function(){return Math.max(1,Math.ceil(A.length/5))}),[A]),B=(0,h.useMemo)((function(){return[{id:"date",accessor:"timeStamp",Header:n("transactionRow.date"),Cell:function(e){var n=e.value;return(0,C.jsx)(j.N2,{noOfLines:2,isLoaded:!!n,children:(0,C.jsx)(b.xv,{textStyle:"tableCell",children:(0,S.p6)(1e3*+n,"YYYY/MM/DD HH:mm",!0)})})},sortType:S._O},{id:"amount",accessor:"value",Header:n("transactionRow.amount"),Cell:function(e){var n=e.value,t=(0,S.I0)(n,null===D||void 0===D?void 0:D.decimals);return(0,C.jsx)(j.N2,{noOfLines:2,isLoaded:!!n,children:(0,C.jsx)(m.TokenAmount,{assetId:null===D||void 0===D?void 0:D.address,amount:t,size:"xs",textStyle:"tableCell"})})},sortType:S._O},{id:"hash",accessor:"hash",Header:n("transactionRow.hash"),Cell:function(e){var n=e.value;return(0,C.jsx)(j.N2,{noOfLines:2,isLoaded:!!n,children:(0,C.jsx)(y.TransactionLink,{hash:n})})},sortType:S.YC}]}),[n,D]);return(0,C.jsxs)(b.gC,{spacing:4,width:"full",children:[t?(0,C.jsxs)(b.gC,{spacing:0,width:"full",alignItems:"flex-start",children:[(0,C.jsx)(x.Translation,{textAlign:"left",translation:"staking.distributedRewards",component:a.Card.Heading}),(0,C.jsx)(a.Card,{children:A.slice(5*(T-1),5*T).map((function(e){var n=(0,r.Z)((0,r.Z)({},e),{},{idlePrice:(0,S.gA)(1),action:"distributed",assetId:null===D||void 0===D?void 0:D.address,idleAmount:(0,S.I0)(e.value,null===D||void 0===D?void 0:D.decimals),underlyingAmount:(0,S.I0)(e.value,null===D||void 0===D?void 0:D.decimals)});return(0,C.jsx)(f.TransactionItem,{transaction:n},"tx_".concat(n.hash))}))})]}):(0,C.jsxs)(a.Card,{mt:10,children:[(0,C.jsx)(x.Translation,{translation:"staking.distributedRewards",component:a.Card.Heading}),(0,C.jsx)(u.ReactTable,{columns:B,data:A,page:T,rowsPerPage:5,initialState:{sortBy:[{id:"date",desc:!1}]},onRowClick:P})]}),(0,C.jsx)(b.kC,{width:"100%",alignItems:"center",justifyContent:"flex-end",children:(0,C.jsxs)(b.Ug,{spacing:2,children:[(0,C.jsx)(w.zx,{variant:"link",minW:"auto",onClick:function(){R((function(e){return Math.max(1,e-1)}))},children:(0,C.jsx)(p.lrP,{color:1===T?e.colors.ctaDisabled:e.colors.primary})}),(0,C.jsxs)(b.xv,{textStyle:"ctaStatic",children:[T,"/",z]}),(0,C.jsx)(w.zx,{variant:"link",minW:"auto",onClick:function(){R((function(e){return Math.min(z,e+1)}))},children:(0,C.jsx)(p.KEG,{color:T===z?e.colors.ctaDisabled:e.colors.primary})})]})})]})}},48024:function(e,n,t){t.r(n),t.d(n,{TransactionItem:function(){return c}});var r=t(99594),i=t(87099),a=t(3498),l=t(97778),o=t(15542),s=t(10658),d=t(45263),c=function(e){var n=e.transaction;return(0,d.jsxs)(a.gC,{mb:2,pb:4,spacing:4,width:"100%",alignItems:"flex-start",borderBottomWidth:"1px",borderBottomColor:"divider",children:[(0,d.jsxs)(a.Ug,{width:"100%",justifyContent:"space-between",children:[(0,d.jsx)(a.Ug,{spacing:3,direction:"row",alignItems:"center",children:(0,d.jsx)(o.Translation,{component:a.xv,translation:"transactionRow.".concat(n.action),textStyle:"captionSmall"})}),(0,d.jsx)(a.xv,{textStyle:"captionSmall",children:(0,r.p6)(1e3*+n.timeStamp,i.Cu)})]}),(0,d.jsxs)(a.Ug,{width:"100%",justifyContent:"space-between",children:[(0,d.jsx)(l.TokenAmount,{assetId:n.assetId,amount:n.underlyingAmount,size:"xs",textStyle:"tableCell"}),(0,d.jsx)(s.TransactionLink,{hash:n.hash})]})]})}}}]);