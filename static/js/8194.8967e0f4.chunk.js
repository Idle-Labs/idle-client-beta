"use strict";(self.webpackChunkidle_dashboard_new=self.webpackChunkidle_dashboard_new||[]).push([[8194],{58194:function(e,r,t){t.r(r),t.d(r,{ReactTable:function(){return g}});var o=t(1413),a=t(7276),n=t(55967),i=t(63591),s=t(96699),l=t(3498),d=t(26720),c=t(67503),u=t(45263),p=function(e){var r=e.column,t=(0,s.Fg)();return(0,u.jsxs)(l.kC,{alignItems:"center",layerStyle:"tableHeader",justifyContent:"space-between",children:[r.render("Header"),r.canSort&&(0,u.jsxs)(l.kC,{direction:"column",children:[(0,u.jsx)(n.rWj,{size:20,fill:r.isSorted&&r.isSortedDesc?t.colors.primary:t.colors.table.arrow,"aria-label":"sorted ascending",style:{position:"absolute"}}),(0,u.jsx)(n.Ix0,{size:20,fill:r.isSorted?r.isSortedDesc?t.colors.table.arrow:t.colors.primary:t.colors.table.arrow,"aria-label":"sorted descending",style:{marginTop:10}})]})]})},g=function(e){var r=e.columns,t=e.data,n=e.page,s=e.rowsPerPage,l=e.displayHeaders,g=void 0===l||l,h=e.onRowClick,b=e.initialState,f=(0,d.ff)("black","white"),m=(0,i.useTable)({columns:r,data:t,initialState:b},i.useSortBy),y=m.getTableProps,x=m.getTableBodyProps,v=m.headerGroups,w=m.rows,j=m.prepareRow,R=(0,a.useMemo)((function(){return s&&n?w.slice(s*(n-1),s*n):w}),[w,n,s]),S=(0,a.useMemo)((function(){return R.map((function(e){var r=!1;return j(e),(0,u.jsx)(c.Tr,(0,o.Z)((0,o.Z)({},e.getRowProps()),{},{tabIndex:e.index,layerStyle:"tableRow",onClick:function(){return null===h||void 0===h?void 0:h(e)},cursor:h?"pointer":void 0,children:e.cells.map((function(t,a){var n=!r&&"none"!==t.column.display,i=a===e.cells.length-1;n&&(r=!0);var s=n?{borderTopLeftRadius:8,borderBottomLeftRadius:8}:i?{borderTopRightRadius:8,borderBottomRightRadius:8}:{};return(0,u.jsx)(c.Td,(0,o.Z)((0,o.Z)({},t.getCellProps()),{},{display:t.column.display,sx:s,children:t.render("Cell")}))}))}))}))}),[j,R,h]);return(0,u.jsxs)(c.iA,(0,o.Z)((0,o.Z)({variant:"clickable",size:{base:"sm",md:"md"}},y()),{},{children:[g&&(0,u.jsx)(c.hr,{children:v.map((function(e){var r=!1;return(0,u.jsx)(c.Tr,(0,o.Z)((0,o.Z)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(t,a){var n=!r&&"none"!==t.display,i=a===e.headers.length-1;n&&(r=!0);var s=n?{paddingLeft:0,paddingRight:4}:i?{paddingLeft:4,paddingRight:0}:{paddingLeft:4,paddingRight:4};return(0,u.jsx)(c.Th,(0,o.Z)((0,o.Z)({},t.getHeaderProps(t.getSortByToggleProps({title:void 0}))),{},{color:"gray.500",fontWeight:400,display:t.display,textAlign:t.textAlign,_hover:{color:t.canSort?f:"gray.500"},style:s,children:(0,u.jsx)(p,{column:t})}))}))}))}))}),(0,u.jsx)(c.p3,(0,o.Z)((0,o.Z)({},x()),{},{children:S}))]}))}}}]);