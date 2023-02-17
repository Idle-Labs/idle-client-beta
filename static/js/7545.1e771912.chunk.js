"use strict";(self.webpackChunkidle_dashboard_new=self.webpackChunkidle_dashboard_new||[]).push([[7545,1617,4447,8194,5349],{61617:function(e,t,n){n.r(t),n.d(t,{AssetLabel:function(){return c}});var r=n(1413),a=n(45987),i=n(3498),s=n(75712),l=n(45263),o=["assetId","size","spacing"],c=function(e){var t=e.assetId,n=e.size,c=void 0===n?"sm":n,d=e.spacing,u=(0,a.Z)(e,o);return(0,l.jsx)(s.AssetProvider,{wrapFlex:!1,assetId:t,children:(0,l.jsxs)(i.Ug,{spacing:d,alignItems:"center",justifyContent:"flex-start",children:[(0,l.jsx)(s.AssetProvider.Icon,{size:c}),(0,l.jsx)(s.AssetProvider.Name,(0,r.Z)({textStyle:"heading",fontSize:["15px","h3"],whiteSpace:"nowrap"},u))]})})}},54447:function(e,t,n){n.r(t),n.d(t,{Card:function(){return p},CardFlex:function(){return x},Dark:function(){return m},Light:function(){return h},Outline:function(){return g}});var r=n(1413),a=n(45987),i=n(3498),s=n(45263),l=["children"],o=["children","layerStyle"],c=["children","layerStyle"],d=["children"],u=["children"],f=["children"],p=function(e){var t=e.children,n=e.layerStyle,l=(0,a.Z)(e,o);return(0,s.jsx)(i.xu,(0,r.Z)((0,r.Z)({width:"100%",position:"relative",layerStyle:n||"card"},l),{},{children:t}))},x=function(e){var t=e.children,n=e.layerStyle,l=(0,a.Z)(e,c);return(0,s.jsx)(i.kC,(0,r.Z)((0,r.Z)({width:"100%",layerStyle:n||"card"},l),{},{children:t}))},m=function(e){var t=e.children,n=(0,a.Z)(e,d),i=["cardDark"].concat(e.layerStyle);return(0,s.jsx)(p,(0,r.Z)((0,r.Z)({},n),{},{layerStyle:i,children:t}))},h=function(e){var t=e.children,n=(0,a.Z)(e,u),i=["cardLight"].concat(e.layerStyle);return(0,s.jsx)(p,(0,r.Z)((0,r.Z)({},n),{},{layerStyle:i,children:t}))},g=function(e){var t=e.children,n=(0,a.Z)(e,f),i=["cardOutline"].concat(e.layerStyle);return(0,s.jsx)(p,(0,r.Z)((0,r.Z)({},n),{},{layerStyle:i,children:t}))};p.Dark=m,p.Light=h,p.Flex=x,p.Outline=g,p.Heading=function(e){var t=e.children,n=(0,a.Z)(e,l);return(0,s.jsx)(i.X6,(0,r.Z)((0,r.Z)({as:"h3",size:"md",mb:6},n),{},{children:t}))}},58194:function(e,t,n){n.r(t),n.d(t,{ReactTable:function(){return p}});var r=n(1413),a=n(7276),i=n(55967),s=n(63591),l=n(96699),o=n(3498),c=n(26720),d=n(67503),u=n(45263),f=function(e){var t=e.column,n=(0,l.Fg)();return(0,u.jsxs)(o.kC,{alignItems:"center",layerStyle:"tableHeader",justifyContent:"space-between",children:[t.render("Header"),t.canSort&&(0,u.jsxs)(o.kC,{direction:"column",children:[(0,u.jsx)(i.rWj,{size:20,fill:t.isSorted&&t.isSortedDesc?n.colors.primary:n.colors.table.arrow,"aria-label":"sorted ascending",style:{position:"absolute"}}),(0,u.jsx)(i.Ix0,{size:20,fill:t.isSorted?t.isSortedDesc?n.colors.table.arrow:n.colors.primary:n.colors.table.arrow,"aria-label":"sorted descending",style:{marginTop:10}})]})]})},p=function(e){var t=e.columns,n=e.data,i=e.page,l=e.rowsPerPage,o=e.displayHeaders,p=void 0===o||o,x=e.onRowClick,m=e.initialState,h=(0,c.ff)("black","white"),g=(0,s.useTable)({columns:t,data:n,initialState:m},s.useSortBy),v=g.getTableProps,y=g.getTableBodyProps,j=g.headerGroups,b=g.rows,S=g.prepareRow,C=(0,a.useMemo)((function(){return l&&i?b.slice(l*(i-1),l*i):b}),[b,i,l]),w=(0,a.useMemo)((function(){return C.map((function(e){var t=!1;return S(e),(0,u.jsx)(d.Tr,(0,r.Z)((0,r.Z)({},e.getRowProps()),{},{tabIndex:e.index,layerStyle:"tableRow",onClick:function(){return null===x||void 0===x?void 0:x(e)},cursor:x?"pointer":void 0,children:e.cells.map((function(n,a){var i=!t&&"none"!==n.column.display,s=a===e.cells.length-1;i&&(t=!0);var l=i?{borderTopLeftRadius:8,borderBottomLeftRadius:8}:s?{borderTopRightRadius:8,borderBottomRightRadius:8}:{};return(0,u.jsx)(d.Td,(0,r.Z)((0,r.Z)({},n.getCellProps()),{},{display:n.column.display,sx:l,children:n.render("Cell")}))}))}))}))}),[S,C,x]);return(0,u.jsxs)(d.iA,(0,r.Z)((0,r.Z)({variant:"clickable",size:{base:"sm",md:"md"}},v()),{},{children:[p&&(0,u.jsx)(d.hr,{children:j.map((function(e){var t=!1;return(0,u.jsx)(d.Tr,(0,r.Z)((0,r.Z)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(n,a){var i=!t&&"none"!==n.display,s=a===e.headers.length-1;i&&(t=!0);var l=i?{paddingLeft:0,paddingRight:4}:s?{paddingLeft:4,paddingRight:0}:{paddingLeft:4,paddingRight:4};return(0,u.jsx)(d.Th,(0,r.Z)((0,r.Z)({},n.getHeaderProps(n.getSortByToggleProps({title:void 0}))),{},{color:"gray.500",fontWeight:400,display:n.display,textAlign:n.textAlign,_hover:{color:n.canSort?h:"gray.500"},style:l,children:(0,u.jsx)(f,{column:n})}))}))}))}))}),(0,u.jsx)(d.p3,(0,r.Z)((0,r.Z)({},y()),{},{children:w}))]}))}},87545:function(e,t,n){n.r(t),n.d(t,{Strategy:function(){return k},TableField:function(){return I}});var r=n(93433),a=n(1413),i=n(29439),s=n(54447),l=n(79681),o=n(95173),c=n(86059),d=n(55967),u=n(80265),f=n(66288),p=n(75349),x=n(88935),m=n(58194),h=n(15542),g=n(85267),v=n(1669),y=n(12056),j=n(75712),b=n(7276),S=n(99594),C=n(89030),w=n(3498),Z=n(82137),A=n(2092),T=n(45263),I=function(e){var t=e.field,n=e.row,r=e.value,a=n.original.id;return(0,T.jsx)(C.N2,{noOfLines:2,isLoaded:!!r,children:(0,T.jsx)(j.AssetProvider,{assetId:a,children:(0,T.jsx)(j.AssetProvider.GeneralData,{section:"strategy",field:t})})})},k=function(){var e=(0,o.s0)(),t=(0,l.qM)(),n=(0,x.Y)().account,j=(0,f.X)().isMobile,k=(0,u.f)().openModal,_=(0,g.m)(),P=_.location,M=_.params,N=(0,b.useState)(null),z=(0,i.Z)(N,2),E=z[0],L=z[1],R=(0,b.useState)(null),B=(0,i.Z)(R,2),F=B[0],H=B[1],O=(0,v.w)(),U=O.isPortfolioLoaded,D=O.selectors,G=D.selectVaultsWithBalance,V=D.selectVaultsAssetsByType,Y=D.selectVaultsAssetsWithBalance,$=(0,b.useMemo)((function(){return Object.keys(y.A).find((function(e){return y.A[e].route===M.strategy}))}),[M]),q=(0,b.useCallback)((function(t,n,r){return(0,S.fU)(n,r,t.original),e("".concat(null===P||void 0===P?void 0:P.pathname.replace(/\/$/,""),"/").concat(t.original.id))}),[e,P]),K=(0,b.useMemo)((function(){return $&&y.A[$].columns}),[$]),W=(0,b.useMemo)((function(){return $&&K?K.map((function(e){var n=e.id,r=e.accessor,i=e.sortType,s="alpha"===i?S.YC:"numeric"===i?S._O:void 0;return{id:n,accessor:r,disableSortBy:!s,defaultCanSort:!!s,Header:t(e.title||"defi.".concat(n)),sortType:s?function(e,t){return s(e,t,r)}:void 0,Cell:function(t){var r=t.value,i=t.row;return e.extraFields&&e.extraFields.length>0?(0,T.jsxs)(w.Kq,(0,a.Z)((0,a.Z)({spacing:2,width:"full",direction:"row"},e.stackProps),{},{children:[(0,T.jsx)(I,{field:n,value:r,row:i}),e.extraFields.map((function(e){return(0,T.jsx)(I,{field:e,value:r,row:i},"extraField_".concat(e))}))]})):(0,T.jsx)(I,{field:n,value:r,row:i})}}})):[]}),[$,K,t]),X=(0,b.useMemo)((function(){return $&&K?K.filter((function(e){return!e.tables||e.tables.includes("Deposited")})).map((function(e){var n=e.id,r=e.accessor,i=e.sortType,s="alpha"===i?S.YC:"numeric"===i?S._O:void 0;return{id:n,accessor:r,disableSortBy:!s,defaultCanSort:!!s,Header:t(e.title||"defi.".concat(n)),sortType:s?function(e,t){return s(e,t,r)}:void 0,Cell:function(t){var r=t.value,i=t.row;return e.extraFields&&e.extraFields.length>0?(0,T.jsxs)(w.Kq,(0,a.Z)((0,a.Z)({spacing:2,width:"full",direction:"row"},e.stackProps),{},{children:[(0,T.jsx)(I,{field:n,value:r,row:i}),e.extraFields.map((function(e){return(0,T.jsx)(I,{field:e,value:r,row:i},"extraField_".concat(e))}))]})):(0,T.jsx)(I,{field:n,value:r,row:i})}}})):[]}),[$,K,t]),J=(0,b.useMemo)((function(){return[{Header:"#",accessor:"id",display:"none"}].concat((0,r.Z)(X),[{accessor:"balanceUsd",Header:t("defi.balance"),Cell:function(e){var t=e.value;return(0,T.jsx)(C.N2,{noOfLines:2,isLoaded:!!t,children:(0,T.jsx)(c.Amount.Usd,{value:t,textStyle:"tableCell"})})},sortType:S._O},{accessor:"vaultPosition",Header:t("defi.realizedApy"),Cell:function(e){var t=e.value;return(0,T.jsx)(C.N2,{noOfLines:2,isLoaded:!!t,children:t&&(0,T.jsx)(Z.kN,{children:(0,T.jsx)(Z.Jf,{children:(0,T.jsxs)(w.kC,{direction:"row",alignItems:"center",children:[!t.realizedApy.isNaN()&&(0,T.jsx)(Z.uY,{type:"increase"}),(0,T.jsx)(c.Amount.Percentage,{value:t.realizedApy,textStyle:"tableCell"})]})})})})},sortType:function(e,t){return(0,S._O)(e,t,"vaultPosition.earningsPercentage")}}])}),[t,X]),Q=(0,b.useMemo)((function(){return[{Header:"#",accessor:"id",display:"none"}].concat((0,r.Z)(W))}),[W]),ee=(0,b.useMemo)((function(){return G&&U?Y($):[]}),[U,G,Y,$]),te=(0,b.useMemo)((function(){return V&&U?V($).filter((function(e){return!ee.map((function(e){return e.id})).includes(e.id)})):[]}),[U,V,ee,$]),ne=(0,b.useMemo)((function(){return $?"".concat($,"_deposited"):""}),[$]),re=(0,b.useMemo)((function(){if(!$)return"";var e=t(y.A[$].label);return"".concat(e," - ").concat(t("defi.deposited"))}),[$,t]),ae=(0,b.useMemo)((function(){return $?"".concat($,"_available"):""}),[$]),ie=(0,b.useMemo)((function(){if(!$)return"";var e=t(y.A[$].label);return"".concat(e," - ").concat(t("common.available"))}),[$,t]);(0,b.useEffect)((function(){if($&&F!==$&&ee.length){var e=ee.map((function(e){return(0,S.ym)(e,ne,re)}));(0,S.y6)(ne,re,e),H($)}}),[n,$,t,ne,re,ee,F,H]),(0,b.useEffect)((function(){if($&&E!==$&&te.length){var e=te.map((function(e){return(0,S.ym)(e,ae,ie)}));(0,S.y6)(ae,ie,e),L($)}}),[n,t,ae,ie,E,L,$,te]);var se=(0,b.useMemo)((function(){if(!ee.length)return null;return j?(0,T.jsxs)(w.gC,{mt:20,spacing:6,width:"100%",alignItems:"flex-start",children:[(0,T.jsx)(h.Translation,{translation:"defi.depositedAssets",component:w.X6,as:"h3",fontSize:"lg"}),(0,T.jsx)(w.gC,{spacing:2,width:"100%",alignItems:"flex-start",children:ee.map((function(e){return e.id&&(0,T.jsx)(p.VaultCard,{assetId:e.id},"vault_".concat(e.id))}))})]}):(0,T.jsxs)(s.Card,{mt:10,children:[(0,T.jsx)(h.Translation,{translation:"defi.depositedAssets",component:s.Card.Heading}),(0,T.jsx)(m.ReactTable,{columns:J,data:ee,initialState:{sortBy:[{id:"balanceUsd",desc:!1}]},onRowClick:function(e){return q(e,ne,re)}})]})}),[j,J,ne,re,ee,q]),le=(0,b.useMemo)((function(){if(U&&!te.length)return null;return j?(0,T.jsxs)(w.gC,{mt:20,spacing:6,width:"100%",alignItems:"flex-start",children:[(0,T.jsx)(h.Translation,{translation:"defi.availableAssets",component:w.X6,as:"h2",fontSize:"lg"}),(0,T.jsx)(w.gC,{spacing:2,width:"100%",alignItems:"flex-start",children:te.map((function(e){return e.id&&(0,T.jsx)(p.VaultCard,{assetId:e.id},"vault_".concat(e.id))}))})]}):(0,T.jsxs)(s.Card,{mt:10,children:[(0,T.jsx)(h.Translation,{translation:"defi.availableAssets",component:s.Card.Heading}),te.length?(0,T.jsx)(m.ReactTable,{columns:Q,data:te,initialState:{sortBy:[{id:"tvl",desc:!1}]},onRowClick:function(e){return q(e,ae,ie)}}):(0,T.jsxs)(w.Kq,{children:[(0,T.jsx)(C.Od,{}),(0,T.jsx)(C.Od,{})]})]})}),[j,U,Q,ae,ie,te,q]),oe=(0,b.useMemo)((function(){var e,t,n,r;if(!$||!y.A[$].banner)return null;var a=null===(e=y.A[$].banner)||void 0===e?void 0:e.modal;return(0,T.jsx)(s.Card.Dark,{p:[4,5],border:0,position:"relative",children:(0,T.jsxs)(w.Kq,{width:"full",spacing:[2,3],alignItems:"center",justifyContent:"center",direction:["column","row"],children:[(0,T.jsx)(h.Translation,{component:w.xu,width:"auto",textAlign:"center",translation:"common.new",layerStyle:"gradientBadge"}),(0,T.jsx)(h.Translation,{textAlign:"center",translation:null===(t=y.A[$].banner)||void 0===t?void 0:t.text,isHtml:!0,textStyle:"caption"}),"BY"===$&&(0,T.jsxs)(w.Ug,{spacing:2,children:[(0,T.jsx)(A.Ee,{src:"images/strategies/AA.svg",width:6}),(0,T.jsx)(A.Ee,{src:"images/strategies/BB.svg",width:6})]}),(null===(n=y.A[$].banner)||void 0===n?void 0:n.cta)&&(0,T.jsxs)(w.Ug,{spacing:2,right:[0,6],alignItems:"center",justifyContent:"center",position:["relative","absolute"],children:[(0,T.jsx)(h.Translation,{translation:null===(r=y.A[$].banner)||void 0===r?void 0:r.cta,textAlign:"center",textStyle:"cta",onClick:function(){return k(a)}}),(0,T.jsx)(d.KEG,{})]})]})})}),[$,k]),ce=(0,b.useMemo)((function(){return $?(0,T.jsxs)(w.gC,{width:"full",spacing:10,children:[oe,(0,T.jsxs)(w.Kq,{spacing:[10,0],direction:["column","row"],alignItems:["center","flex-start"],width:["100%","100%","100%","100%","70%"],children:[(0,T.jsxs)(w.gC,{pr:[0,14],pt:[0,20],spacing:10,direction:"column",width:["100%","65%"],alignItems:["center","flex-start"],children:[(0,T.jsx)(h.Translation,{isHtml:!0,translation:y.A[$].title||y.A[$].label,component:w.X6,fontFamily:"body",as:"h2",size:"3xl",fontWeight:"bold"}),!j&&(0,T.jsx)(w.kC,{width:["100%","80%"],children:(0,T.jsx)(h.Translation,{translation:y.A[$].description,textAlign:["center","left"]})})]}),(0,T.jsx)(A.Ee,{width:["70%","33%"],src:y.A[$].image}),j&&(0,T.jsx)(h.Translation,{translation:y.A[$].description,textAlign:["center","left"]})]})]}):null}),[$,oe,j]);return(0,T.jsxs)(w.kC,{mt:14,width:"100%",direction:"column",alignItems:"center",children:[ce,se,le]})}},75349:function(e,t,n){n.r(t),n.d(t,{VaultCard:function(){return h}});var r=n(1413),a=n(45987),i=n(7276),s=n(95173),l=n(54447),o=n(61617),c=n(15542),d=n(85267),u=n(1669),f=n(75712),p=n(3498),x=n(45263),m=["assetId","fields","onClick"],h=function(e){var t=e.assetId,n=(0,s.s0)(),r=(0,d.m)().location,a=(0,u.w)().selectors.selectAssetById,m=(0,i.useMemo)((function(){if(a)return a(t)}),[t,a]),h=(0,i.useMemo)((function(){var e;return null!==m&&void 0!==m&&null!==(e=m.vaultPosition)&&void 0!==e&&e.usd.deposited?(0,x.jsxs)(p.gC,{spacing:1,alignItems:"flex-start",children:[(0,x.jsx)(c.Translation,{translation:"defi.deposited",textStyle:"captionSmall"}),(0,x.jsx)(f.AssetProvider.DepositedUsd,{textStyle:"tableCell"})]}):"BY"===(null===m||void 0===m?void 0:m.type)?(0,x.jsxs)(p.gC,{spacing:1,alignItems:"flex-start",children:[(0,x.jsx)(c.Translation,{translation:"defi.protocols",textStyle:"captionSmall"}),(0,x.jsx)(f.AssetProvider.Protocols,{iconMargin:-1,size:"xs"})]}):(0,x.jsxs)(p.gC,{spacing:1,alignItems:"flex-start",children:[(0,x.jsx)(c.Translation,{translation:"defi.rewards",textStyle:"captionSmall"}),(0,x.jsx)(f.AssetProvider.Rewards,{iconMargin:-1,size:"xs"})]})}),[m]);return(0,x.jsx)(f.AssetProvider,{wrapFlex:!1,assetId:t,children:(0,x.jsx)(l.Card,{p:4,onClick:function(){return n("".concat(null===r||void 0===r?void 0:r.pathname,"/").concat(t))},children:(0,x.jsxs)(p.gC,{spacing:3,alignItems:"flex-start",children:[(0,x.jsx)(o.AssetLabel,{assetId:t,size:"sm"}),(0,x.jsxs)(p.MI,{pt:3,pl:4,columns:3,width:"100%",borderTop:"1px solid",borderTopColor:"divider",children:[(0,x.jsxs)(p.gC,{spacing:1,alignItems:"flex-start",children:[(0,x.jsx)(c.Translation,{translation:"defi.pool",textStyle:"captionSmall"}),(0,x.jsx)(f.AssetProvider.PoolUsd,{textStyle:"tableCell"})]}),(0,x.jsxs)(p.gC,{spacing:1,alignItems:"flex-start",children:[(0,x.jsx)(c.Translation,{translation:"defi.apy",textStyle:"captionSmall"}),(0,x.jsx)(f.AssetProvider.Apy,{textStyle:"tableCell"})]}),h]})]})})})};h.Inline=function(e){var t=e.assetId,n=e.fields,s=e.onClick,o=(0,a.Z)(e,m);return(0,x.jsx)(f.AssetProvider,{wrapFlex:!1,assetId:t,children:(0,x.jsx)(l.Card,(0,r.Z)((0,r.Z)({py:2,px:[4,6],layerStyle:["card","cardHover"],onClick:s},o),{},{children:(0,x.jsx)(p.Ug,{width:"100%",justifyContent:"space-between",children:(0,x.jsxs)(p.Ug,{spacing:3,width:"100%",alignItems:"center",children:[(0,x.jsx)(f.AssetProvider.Icon,{size:"xs"}),n.map((function(e,t){return(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)(p.xu,{width:1,height:1,bg:"divider",borderRadius:"50%"}),(0,x.jsxs)(p.Ug,{spacing:2,children:[(0,x.jsx)(c.Translation,{translation:e.label,component:p.xv,textStyle:"captionSmall"}),(0,x.jsx)(f.AssetProvider.GeneralData,(0,r.Z)({field:e.field,textStyle:"tableCell"},e.props))]})]},"field_".concat(t))}))]})})}))})}},82137:function(e,t,n){n.d(t,{Jf:function(){return S},kN:function(){return v},uY:function(){return b}});var r=n(45987),a=n(1413),i=n(29439),s=n(7276),l=n(32390),o=n(96699),c=n(2548),d=n(11486),u=["className","children"],f=["type","aria-label"],p=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},x=(0,c.k)({name:"StatStylesContext",errorMessage:"useStatStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Stat />\" "}),m=(0,i.Z)(x,2),h=m[0],g=m[1],v=(0,o.Gp)((function(e,t){var n=(0,o.jC)("Stat",e),i=(0,a.Z)({position:"relative",flex:"1 1 0%"},n.container),l=(0,d.Lr)(e),c=l.className,f=l.children,x=(0,r.Z)(l,u);return s.createElement(h,{value:n},s.createElement(o.m$.div,(0,a.Z)((0,a.Z)({ref:t},x),{},{className:p("chakra-stat",c),__css:i}),s.createElement("dl",null,f)))}));v.displayName="Stat";var y=function(e){return s.createElement(l.JO,(0,a.Z)({color:"red.400"},e),s.createElement("path",{fill:"currentColor",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"}))};function j(e){return s.createElement(l.JO,(0,a.Z)({color:"green.400"},e),s.createElement("path",{fill:"currentColor",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"}))}function b(e){var t=e.type,n=e["aria-label"],i=(0,r.Z)(e,f),l=g(),c="increase"===t?j:y,d=n||("increase"===t?"increased by":"decreased by");return s.createElement(s.Fragment,null,s.createElement(o.m$.span,{srOnly:!0},d),s.createElement(c,(0,a.Z)((0,a.Z)({"aria-hidden":!0},i),{},{__css:l.icon})))}y.displayName="StatDownArrow",j.displayName="StatUpArrow",b.displayName="StatArrow",(0,o.Gp)((function(e,t){return s.createElement(o.m$.div,(0,a.Z)((0,a.Z)({},e),{},{ref:t,role:"group",className:p("chakra-stat__group",e.className),__css:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignItems:"flex-start"}}))})).displayName="StatGroup",(0,o.Gp)((function(e,t){var n=g();return s.createElement(o.m$.dd,(0,a.Z)((0,a.Z)({ref:t},e),{},{className:p("chakra-stat__help-text",e.className),__css:n.helpText}))})).displayName="StatHelpText",(0,o.Gp)((function(e,t){var n=g();return s.createElement(o.m$.dt,(0,a.Z)((0,a.Z)({ref:t},e),{},{className:p("chakra-stat__label",e.className),__css:n.label}))})).displayName="StatLabel";var S=(0,o.Gp)((function(e,t){var n=g();return s.createElement(o.m$.dd,(0,a.Z)((0,a.Z)({ref:t},e),{},{className:p("chakra-stat__number",e.className),__css:(0,a.Z)((0,a.Z)({},n.number),{},{fontFeatureSettings:"pnum",fontVariantNumeric:"proportional-nums"})}))}));S.displayName="StatNumber"}}]);