"use strict";(self.webpackChunkidle_dashboard_new=self.webpackChunkidle_dashboard_new||[]).push([[4681],{53293:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(74165),i=n(15861),o=n(29439),u=n(7276),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,n=null;return function(){n&&clearTimeout(n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];n=setTimeout(e,t,i)}},c={x:0,y:0,top:0,left:0,width:0,height:0,right:0,bottom:0};function d(t){var e=t.getBoundingClientRect();return{x:e.x,y:e.y,top:e.top,left:e.left,width:e.width,height:e.height,right:e.right,bottom:e.bottom}}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=(0,u.useState)(null),n=(0,o.Z)(e,2),s=n[0],f=n[1],l=(0,u.useState)(c),h=(0,o.Z)(l,2),w=h[0],v=h[1],g=(0,u.useCallback)((function(t){f(t)}),[]);return(0,u.useLayoutEffect)((function(){if("undefined"!==typeof window&&s){var e=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.requestAnimationFrame((function(){v(d(s))}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e();var n=a(t||100,e);return window.addEventListener("resize",n),window.addEventListener("scroll",n),function(){window.removeEventListener("resize",n),window.removeEventListener("scroll",n)}}}),[s,t]),[g,w,s]}}}]);