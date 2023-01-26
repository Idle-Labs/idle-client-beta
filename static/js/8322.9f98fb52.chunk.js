"use strict";(self.webpackChunkidle_dashboard_new=self.webpackChunkidle_dashboard_new||[]).push([[8322],{13961:function(e,n,a){a.d(n,{D8:function(){return x},Ex:function(){return D},ip:function(){return N}});var t=a(29439),i=a(1413),r=a(44925),o=a(7276),l=a(96699),s=a(33991),u=a(11486),d=a(2548),c=["size","isIndeterminate"],v=["size","max","min","valueText","getValueText","value","capIsRound","children","thickness","color","trackColor","isIndeterminate"],f=["min","max","value","isIndeterminate"],m=["value","min","max","hasStripe","isAnimated","children","borderRadius","isIndeterminate","aria-label","aria-labelledby"];var h=(0,s.F4)({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),b=(0,s.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),p=(0,s.F4)({"0%":{left:"-40%"},"100%":{left:"100%"}}),Z=(0,s.F4)({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function g(e){var n=e.value,a=void 0===n?0:n,t=e.min,i=e.max,r=e.valueText,o=e.getValueText,l=e.isIndeterminate,s=function(e,n,a){return 100*(e-n)/(a-n)}(a,t,i);return{bind:{"data-indeterminate":l?"":void 0,"aria-valuemax":i,"aria-valuemin":t,"aria-valuenow":l?void 0:a,"aria-valuetext":function(){if(null!=a)return"function"===typeof o?o(a,s):r}(),role:"progressbar"},percent:s,value:a}}var y=function(e){var n=e.size,a=e.isIndeterminate,t=(0,r.Z)(e,c);return o.createElement(l.m$.svg,(0,i.Z)({viewBox:"0 0 100 100",__css:{width:n,height:n,animation:a?"".concat(b," 2s linear infinite"):void 0}},t))};y.displayName="Shape";var k=function(e){return o.createElement(l.m$.circle,(0,i.Z)({cx:50,cy:50,r:42,fill:"transparent"},e))};k.displayName="Circle";var x=function(e){var n,a=e.size,t=void 0===a?"48px":a,s=e.max,u=void 0===s?100:s,d=e.min,c=void 0===d?0:d,f=e.valueText,m=e.getValueText,b=e.value,p=e.capIsRound,Z=e.children,x=e.thickness,C=void 0===x?"10px":x,_=e.color,I=void 0===_?"#0078d4":_,w=e.trackColor,S=void 0===w?"#edebe9":w,D=e.isIndeterminate,N=(0,r.Z)(e,v),E=g({min:c,max:u,value:b,valueText:f,getValueText:m,isIndeterminate:D}),P=D?void 0:2.64*(null!==(n=E.percent)&&void 0!==n?n:0),F=null==P?void 0:"".concat(P," ").concat(264-P),R=D?{css:{animation:"".concat(h," 1.5s linear infinite")}}:{strokeDashoffset:66,strokeDasharray:F,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"},T={display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:t};return o.createElement(l.m$.div,(0,i.Z)((0,i.Z)((0,i.Z)({className:"chakra-progress"},E.bind),N),{},{__css:T}),o.createElement(y,{size:t,isIndeterminate:D},o.createElement(k,{stroke:S,strokeWidth:C,className:"chakra-progress__track"}),o.createElement(k,(0,i.Z)({stroke:I,strokeWidth:C,className:"chakra-progress__indicator",strokeLinecap:p?"round":void 0,opacity:0!==E.value||D?void 0:0},R))),Z)};x.displayName="CircularProgress";var C=(0,d.k)({name:"ProgressStylesContext",errorMessage:"useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Progress />\" "}),_=(0,t.Z)(C,2),I=_[0],w=_[1],S=function(e){var n=e.min,a=e.max,t=e.value,s=e.isIndeterminate,u=(0,r.Z)(e,f),d=g({value:t,min:n,max:a,isIndeterminate:s}),c=w(),v=(0,i.Z)({height:"100%"},c.filledTrack);return o.createElement(l.m$.div,(0,i.Z)((0,i.Z)((0,i.Z)({style:(0,i.Z)({width:"".concat(d.percent,"%")},u.style)},d.bind),u),{},{__css:v}))},D=function(e){var n,a=(0,u.Lr)(e),t=a.value,s=a.min,d=void 0===s?0:s,c=a.max,v=void 0===c?100:c,f=a.hasStripe,h=a.isAnimated,b=a.children,g=a.borderRadius,y=a.isIndeterminate,k=a["aria-label"],x=a["aria-labelledby"],C=(0,r.Z)(a,m),_=(0,l.jC)("Progress",e),w=null!==g&&void 0!==g?g:null==(n=_.track)?void 0:n.borderRadius,D={animation:"".concat(Z," 1s linear infinite")},N=!y&&f&&h,E=(0,i.Z)((0,i.Z)({},N&&D),y&&{position:"absolute",willChange:"left",minWidth:"50%",animation:"".concat(p," 1s ease infinite normal none running")}),P=(0,i.Z)({overflow:"hidden",position:"relative"},_.track);return o.createElement(l.m$.div,(0,i.Z)({borderRadius:w,__css:P},C),o.createElement(I,{value:_},o.createElement(S,{"aria-label":k,"aria-labelledby":x,min:d,max:v,value:t,isIndeterminate:y,css:E,borderRadius:w}),b))};D.displayName="Progress";var N=(0,l.m$)("div",{baseStyle:{fontSize:"0.24em",top:"50%",left:"50%",width:"100%",textAlign:"center",position:"absolute",transform:"translate(-50%, -50%)"}});N.displayName="CircularProgressLabel"},96209:function(e,n,a){a.d(n,{Y8:function(){return P}});var t=a(4942),i=a(1413),r=a(44925),o=a(29439),l=a(7276),s=a(96699),u=a(11486),d=a(2548),c=a(17981),v=a(61844),f=a(17443),m=["onChange","value","defaultValue","name","isDisabled","isFocusable","isNative"],h=["colorScheme","size","variant","children","className","isDisabled","isFocusable"],b=["defaultChecked","isChecked","isFocusable","isDisabled","isReadOnly","isRequired","onChange","isInvalid","name","value","id","data-radiogroup","aria-describedby"],p=["spacing","children","isDisabled","isFocusable","inputProps"],Z=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return n.filter(Boolean).join(" ")};function g(e){var n=typeof e;return null!=e&&("object"===n||"function"===n)&&!Array.isArray(e)}var y=function(e){return e?"":void 0},k=function(e){return!!e||void 0};function x(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return function(e){n.some((function(n){return null==n||n(e),null==e?void 0:e.defaultPrevented}))}}function C(e){return e&&g(e)&&g(e.target)}var _=(0,d.k)({name:"RadioGroupContext",strict:!1}),I=(0,o.Z)(_,2),w=I[0],S=I[1],D=(0,s.Gp)((function(e,n){var a=e.colorScheme,u=e.size,d=e.variant,v=e.children,f=e.className,b=e.isDisabled,p=e.isFocusable,g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.onChange,a=e.value,s=e.defaultValue,u=e.name,d=e.isDisabled,v=e.isFocusable,f=e.isNative,h=(0,r.Z)(e,m),b=(0,l.useState)(s||""),p=(0,o.Z)(b,2),Z=p[0],g=p[1],y="undefined"!==typeof a,k=y?a:Z,x=(0,l.useRef)(null),_=(0,l.useCallback)((function(){var e=x.current;if(e){var n="input:not(:disabled):checked",a=e.querySelector(n);if(a)a.focus();else{n="input:not(:disabled)";var t=e.querySelector(n);null==t||t.focus()}}}),[]),I=(0,l.useId)(),w="radio-".concat(I),S=u||w,D=(0,l.useCallback)((function(e){var a=C(e)?e.target.value:e;y||g(a),null==n||n(String(a))}),[n,y]),N=(0,l.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:(0,c.lq)(n,x),role:"radiogroup"})}),[]),E=(0,l.useCallback)((function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=f?"checked":"isChecked";return(0,i.Z)((0,i.Z)({},n),{},(e={ref:a,name:S},(0,t.Z)(e,r,null!=k?n.value===k:void 0),(0,t.Z)(e,"onChange",(function(e){D(e)})),(0,t.Z)(e,"data-radiogroup",!0),e))}),[f,S,D,k]);return{getRootProps:N,getRadioProps:E,name:S,ref:x,focus:_,setValue:g,value:k,onChange:D,isDisabled:d,isFocusable:v,htmlProps:h}}((0,r.Z)(e,h)),y=g.value,k=g.onChange,x=g.getRootProps,_=g.name,I=g.htmlProps,S=(0,l.useMemo)((function(){return{name:_,size:u,onChange:k,colorScheme:a,value:y,variant:d,isDisabled:b,isFocusable:p}}),[_,u,k,a,y,d,b,p]);return l.createElement(w,{value:S},l.createElement(s.m$.div,(0,i.Z)((0,i.Z)({},x(I,n)),{},{className:Z("chakra-radio-group",f)}),v))}));D.displayName="RadioGroup";var N={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};function E(e){e.preventDefault(),e.stopPropagation()}(0,s.m$)("span",{baseStyle:N}).displayName="VisuallyHidden",(0,s.m$)("input",{baseStyle:N}).displayName="VisuallyHiddenInput";var P=(0,s.Gp)((function(e,n){var a,t=S(),d=e.onChange,c=e.value,m=(0,s.jC)("Radio",(0,i.Z)((0,i.Z)({},t),e)),h=(0,u.Lr)(e),Z=h.spacing,g=void 0===Z?"0.5rem":Z,C=h.children,_=h.isDisabled,I=void 0===_?null==t?void 0:t.isDisabled:_,w=h.isFocusable,D=void 0===w?null==t?void 0:t.isFocusable:w,P=h.inputProps,F=(0,r.Z)(h,p),R=e.isChecked;null!=(null==t?void 0:t.value)&&null!=c&&(R=t.value===c);var T=d;(null==t?void 0:t.onChange)&&null!=c&&(T=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return function(e){n.forEach((function(n){null==n||n(e)}))}}(t.onChange,d));var z=null!==(a=null==e?void 0:e.name)&&void 0!==a?a:null==t?void 0:t.name,A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.defaultChecked,a=e.isChecked,t=e.isFocusable,s=e.isDisabled,u=e.isReadOnly,d=e.isRequired,c=e.onChange,m=e.isInvalid,h=e.name,p=e.value,Z=e.id,g=e["data-radiogroup"],C=e["aria-describedby"],_=(0,r.Z)(e,b),I="radio-".concat((0,l.useId)()),w=(0,v.NJ)(),D=!!S()||!!g,P=w&&!D?w.id:I;P=null!==Z&&void 0!==Z?Z:P;var F=null!==s&&void 0!==s?s:null==w?void 0:w.isDisabled,R=null!==u&&void 0!==u?u:null==w?void 0:w.isReadOnly,T=null!==d&&void 0!==d?d:null==w?void 0:w.isRequired,z=null!==m&&void 0!==m?m:null==w?void 0:w.isInvalid,A=(0,l.useState)(!1),M=(0,o.Z)(A,2),$=M[0],L=M[1],B=(0,l.useState)(!1),q=(0,o.Z)(B,2),G=q[0],j=q[1],V=(0,l.useState)(!1),O=(0,o.Z)(V,2),K=O[0],H=O[1],U=(0,l.useState)(!1),W=(0,o.Z)(U,2),J=W[0],Q=W[1],Y=(0,l.useState)(Boolean(n)),X=(0,o.Z)(Y,2),ee=X[0],ne=X[1],ae="undefined"!==typeof a,te=ae?a:ee;(0,l.useEffect)((function(){return(0,f.B)(L)}),[]);var ie=(0,l.useCallback)((function(e){R||F?e.preventDefault():(ae||ne(e.target.checked),null==c||c(e))}),[ae,F,R,c]),re=(0,l.useCallback)((function(e){" "===e.key&&Q(!0)}),[Q]),oe=(0,l.useCallback)((function(e){" "===e.key&&Q(!1)}),[Q]),le=(0,l.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,"data-active":y(J),"data-hover":y(K),"data-disabled":y(F),"data-invalid":y(z),"data-checked":y(te),"data-focus":y(G),"data-focus-visible":y(G&&$),"data-readonly":y(R),"aria-hidden":!0,onMouseDown:x(e.onMouseDown,(function(){return Q(!0)})),onMouseUp:x(e.onMouseUp,(function(){return Q(!1)})),onMouseEnter:x(e.onMouseEnter,(function(){return H(!0)})),onMouseLeave:x(e.onMouseLeave,(function(){return H(!1)}))})}),[J,K,F,z,te,G,R,$]),se=null!==w&&void 0!==w?w:{},ue=se.onFocus,de=se.onBlur,ce=(0,l.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=F&&!t;return(0,i.Z)((0,i.Z)({},e),{},{id:P,ref:n,type:"radio",name:h,value:p,onChange:x(e.onChange,ie),onBlur:x(de,e.onBlur,(function(){return j(!1)})),onFocus:x(ue,e.onFocus,(function(){return j(!0)})),onKeyDown:x(e.onKeyDown,re),onKeyUp:x(e.onKeyUp,oe),checked:te,disabled:a,readOnly:R,required:T,"aria-invalid":k(z),"aria-disabled":k(a),"aria-required":k(T),"data-readonly":y(R),"aria-describedby":C,style:N})}),[F,t,P,h,p,ie,de,ue,re,oe,te,R,T,z,C]),ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,onMouseDown:x(e.onMouseDown,E),onTouchStart:x(e.onTouchStart,E),"data-disabled":y(F),"data-checked":y(te),"data-invalid":y(z)})},fe=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,"data-disabled":y(F),"data-checked":y(te),"data-invalid":y(z)})};return{state:{isInvalid:z,isFocused:G,isChecked:te,isActive:J,isHovered:K,isDisabled:F,isReadOnly:R,isRequired:T},getCheckboxProps:le,getInputProps:ce,getLabelProps:ve,getRootProps:fe,htmlProps:_}}((0,i.Z)((0,i.Z)({},F),{},{isChecked:R,isFocusable:D,isDisabled:I,onChange:T,name:z})),M=A.getInputProps,$=A.getCheckboxProps,L=A.getLabelProps,B=A.getRootProps,q=function(e,n){for(var a={},t={},i=0,r=Object.entries(e);i<r.length;i++){var l=(0,o.Z)(r[i],2),s=l[0],u=l[1];n.includes(s)?a[s]=u:t[s]=u}return[a,t]}(A.htmlProps,u.oE),G=(0,o.Z)(q,2),j=G[0],V=$(G[1]),O=M(P,n),K=L(),H=Object.assign({},j,B()),U=(0,i.Z)({display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer",position:"relative"},m.container),W=(0,i.Z)({display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},m.control),J=(0,i.Z)({userSelect:"none",marginStart:g},m.label);return l.createElement(s.m$.label,(0,i.Z)((0,i.Z)({className:"chakra-radio"},H),{},{__css:U}),l.createElement("input",(0,i.Z)({className:"chakra-radio__input"},O)),l.createElement(s.m$.span,(0,i.Z)((0,i.Z)({className:"chakra-radio__control"},V),{},{__css:W})),C&&l.createElement(s.m$.span,(0,i.Z)((0,i.Z)({className:"chakra-radio__label"},K),{},{__css:J}),C))}));P.displayName="Radio"},88089:function(e,n,a){a.d(n,{OK:function(){return W},mQ:function(){return H},td:function(){return U},xD:function(){return A}});var t=a(1413),i=a(4942),r=a(44925),o=a(29439),l=a(7276),s=a(96699),u=a(2548),d=a(11486),c=a(68639),v=a(92165),f=a(54135),m=a(48894),h=a(3142),b=a(17981),p=a(14485),Z=["defaultIndex","onChange","index","isManual","isLazy","lazyBehavior","orientation","direction"],g=["isDisabled","isFocusable"],y=["children"],k=["children","className"],x=["htmlProps","descendants"],C=["isFitted"],_=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return n.filter(Boolean).join(" ")};function I(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return function(e){n.some((function(n){return null==n||n(e),null==e?void 0:e.defaultPrevented}))}}var w=(0,v.n)(),S=(0,o.Z)(w,4),D=S[0],N=S[1],E=S[2],P=S[3];var F=(0,u.k)({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"}),R=(0,o.Z)(F,2),T=R[0],z=R[1];function A(e){var n=e.isDisabled,a=e.isFocusable,i=(0,r.Z)(e,g),o=z(),l=o.setSelectedIndex,s=o.isManual,u=o.id,d=o.setFocusedIndex,v=o.selectedIndex,f=P({disabled:n&&!a}),m=f.index,h=f.register,p=m===v,Z=(0,c.h)((0,t.Z)((0,t.Z)({},i),{},{ref:(0,b.lq)(h,e.ref),isDisabled:n,isFocusable:a,onClick:I(e.onClick,(function(){l(m)}))}));return(0,t.Z)((0,t.Z)({},Z),{},{id:q(u,m),role:"tab",tabIndex:p?0:-1,type:"button","aria-selected":p,"aria-controls":G(u,m),onFocus:n?void 0:I(e.onFocus,(function(){d(m),!s&&!(n&&a)&&l(m)}))})}var M=(0,u.k)({}),$=(0,o.Z)(M,2),L=$[0],B=$[1];function q(e,n){return"".concat(e,"--tab-").concat(n)}function G(e,n){return"".concat(e,"--tabpanel-").concat(n)}var j=(0,u.k)({name:"TabsStylesContext",errorMessage:"useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tabs />\" "}),V=(0,o.Z)(j,2),O=V[0],K=V[1],H=(0,s.Gp)((function(e,n){var a=(0,s.jC)("Tabs",e),i=(0,d.Lr)(e),u=i.children,c=i.className,v=function(e){var n,a=e.defaultIndex,t=e.onChange,i=e.index,s=e.isManual,u=e.isLazy,d=e.lazyBehavior,c=void 0===d?"unmount":d,v=e.orientation,f=void 0===v?"horizontal":v,h=e.direction,b=void 0===h?"ltr":h,p=(0,r.Z)(e,Z),g=(0,l.useState)(null!==a&&void 0!==a?a:0),y=(0,o.Z)(g,2),k=y[0],x=y[1],C=(0,m.T)({defaultValue:null!==a&&void 0!==a?a:0,value:i,onChange:t}),_=(0,o.Z)(C,2),I=_[0],w=_[1];(0,l.useEffect)((function(){null!=i&&x(i)}),[i]);var S=E(),D=(0,l.useId)(),N=null!==(n=e.id)&&void 0!==n?n:D;return{id:"tabs-".concat(N),selectedIndex:I,focusedIndex:k,setSelectedIndex:w,setFocusedIndex:x,isManual:s,isLazy:u,lazyBehavior:c,orientation:f,descendants:S,direction:b,htmlProps:p}}((0,r.Z)(i,k)),f=v.htmlProps,h=v.descendants,b=(0,r.Z)(v,x),p=(0,l.useMemo)((function(){return b}),[b]),g=(f.isFitted,(0,r.Z)(f,C));return l.createElement(D,{value:h},l.createElement(T,{value:p},l.createElement(O,{value:a},l.createElement(s.m$.div,(0,t.Z)((0,t.Z)({className:_("chakra-tabs",c),ref:n},g),{},{__css:a.root}),u))))}));H.displayName="Tabs",(0,s.Gp)((function(e,n){var a=function(){var e=z(),n=N(),a=e.selectedIndex,i=e.orientation,r="horizontal"===i,s="vertical"===i,u=(0,l.useState)((function(){return r?{left:0,width:0}:s?{top:0,height:0}:void 0})),d=(0,o.Z)(u,2),c=d[0],v=d[1],m=(0,l.useState)(!1),h=(0,o.Z)(m,2),b=h[0],p=h[1];return(0,f.G)((function(){if(null!=a){var e=n.item(a);if(null!=e){r&&v({left:e.node.offsetLeft,width:e.node.offsetWidth}),s&&v({top:e.node.offsetTop,height:e.node.offsetHeight});var t=requestAnimationFrame((function(){p(!0)}));return function(){t&&cancelAnimationFrame(t)}}}}),[a,r,s,n]),(0,t.Z)({position:"absolute",transitionProperty:"left, right, top, bottom, height, width",transitionDuration:b?"200ms":"0ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)"},c)}(),i=(0,t.Z)((0,t.Z)({},e.style),a),r=K();return l.createElement(s.m$.div,(0,t.Z)((0,t.Z)({ref:n},e),{},{className:_("chakra-tabs__tab-indicator",e.className),style:i,__css:r.indicator}))})).displayName="TabIndicator";var U=(0,s.Gp)((function(e,n){var a=function(e){var n=z(),a=n.focusedIndex,r=n.orientation,o=n.direction,s=N(),u=(0,l.useCallback)((function(e){var n,t=function(){var e,n=s.nextEnabled(a);n&&(null==(e=n.node)||e.focus())},l=function(){var e,n=s.prevEnabled(a);n&&(null==(e=n.node)||e.focus())},u="horizontal"===r,d="vertical"===r,c=e.key,v="ltr"===o?"ArrowLeft":"ArrowRight",f="ltr"===o?"ArrowRight":"ArrowLeft",m=(n={},(0,i.Z)(n,v,(function(){return u&&l()})),(0,i.Z)(n,f,(function(){return u&&t()})),(0,i.Z)(n,"ArrowDown",(function(){return d&&t()})),(0,i.Z)(n,"ArrowUp",(function(){return d&&l()})),(0,i.Z)(n,"Home",(function(){var e,n=s.firstEnabled();n&&(null==(e=n.node)||e.focus())})),(0,i.Z)(n,"End",(function(){var e,n=s.lastEnabled();n&&(null==(e=n.node)||e.focus())})),n)[c];m&&(e.preventDefault(),m(e))}),[s,a,r,o]);return(0,t.Z)((0,t.Z)({},e),{},{role:"tablist","aria-orientation":r,onKeyDown:I(e.onKeyDown,u)})}((0,t.Z)((0,t.Z)({},e),{},{ref:n})),r=K(),o=(0,t.Z)({display:"flex"},r.tablist);return l.createElement(s.m$.div,(0,t.Z)((0,t.Z)({},a),{},{className:_("chakra-tabs__tablist",e.className),__css:o}))}));U.displayName="TabList",(0,s.Gp)((function(e,n){var a=function(e){var n=e.children,a=(0,r.Z)(e,y),i=z(),o=i.isLazy,s=i.lazyBehavior,u=B(),d=u.isSelected,c=u.id,v=u.tabId,f=(0,l.useRef)(!1);d&&(f.current=!0);var m=(0,p.k)({wasSelected:f.current,isSelected:d,enabled:o,mode:s});return(0,t.Z)((0,t.Z)({tabIndex:0},a),{},{children:m?n:null,role:"tabpanel","aria-labelledby":v,hidden:!d,id:c})}((0,t.Z)((0,t.Z)({},e),{},{ref:n})),i=K();return l.createElement(s.m$.div,(0,t.Z)((0,t.Z)({outline:"0"},a),{},{className:_("chakra-tabs__tab-panel",e.className),__css:i.tabpanel}))})).displayName="TabPanel",(0,s.Gp)((function(e,n){var a=function(e){var n=z(),a=n.id,i=n.selectedIndex,r=(0,h.W)(e.children).map((function(e,n){return(0,l.createElement)(L,{key:n,value:{isSelected:n===i,id:G(a,n),tabId:q(a,n),selectedIndex:i}},e)}));return(0,t.Z)((0,t.Z)({},e),{},{children:r})}(e),i=K();return l.createElement(s.m$.div,(0,t.Z)((0,t.Z)({},a),{},{width:"100%",ref:n,className:_("chakra-tabs__tab-panels",e.className),__css:i.tabpanels}))})).displayName="TabPanels";var W=(0,s.Gp)((function(e,n){var a=K(),i=A((0,t.Z)((0,t.Z)({},e),{},{ref:n})),r=(0,t.Z)({outline:"0",display:"flex",alignItems:"center",justifyContent:"center"},a.tab);return l.createElement(s.m$.button,(0,t.Z)((0,t.Z)({},i),{},{className:_("chakra-tabs__tab",e.className),__css:r}))}));W.displayName="Tab"}}]);