/*! For license information please see 01d1c020.d6aa985a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[392901],{984687:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>i});var n=t(824246),o=t(511151);const c={id:"core-components.dependencygraphtypes.ranker",title:"DependencyGraphTypes.Ranker",description:"API reference for DependencyGraphTypes.Ranker"},s=void 0,a={id:"reference/core-components.dependencygraphtypes.ranker",title:"DependencyGraphTypes.Ranker",description:"API reference for DependencyGraphTypes.Ranker",source:"@site/../docs/reference/core-components.dependencygraphtypes.ranker.md",sourceDirName:"reference",slug:"/reference/core-components.dependencygraphtypes.ranker",permalink:"/docs/reference/core-components.dependencygraphtypes.ranker",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-components.dependencygraphtypes.ranker.md",tags:[],version:"current",frontMatter:{id:"core-components.dependencygraphtypes.ranker",title:"DependencyGraphTypes.Ranker",description:"API reference for DependencyGraphTypes.Ranker"}},u={},i=[{value:"Enumeration Members",id:"enumeration-members",level:2}];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-components",children:(0,n.jsx)(r.code,{children:"@backstage/core-components"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-components.dependencygraphtypes",children:(0,n.jsx)(r.code,{children:"DependencyGraphTypes"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-components.dependencygraphtypes.ranker",children:(0,n.jsx)(r.code,{children:"Ranker"})})]}),"\n",(0,n.jsx)(r.p,{children:"Algorithm used to rand nodes in graph"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"enum Ranker \n"})}),"\n",(0,n.jsx)(r.h2,{id:"enumeration-members",children:"Enumeration Members"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Member"}),(0,n.jsx)(r.th,{children:"Value"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"LONGEST_PATH"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'"longest-path"'})}),(0,n.jsx)(r.td,{children:"Longest path algorithm"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"NETWORK_SIMPLEX"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'"network-simplex"'})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Network_simplex_algorithm",children:"Network Simplex"})," algorithm"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"TIGHT_TREE"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'"tight-tree"'})}),(0,n.jsx)(r.td,{children:"Tight Tree algorithm"})]})]})]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,c={},i=null,l=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,n)&&!u.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:l,props:c,_owner:a.current}}r.Fragment=c,r.jsx=i,r.jsxs=i},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function _(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}function b(){}function j(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}_.prototype.isReactComponent={},_.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=_.prototype;var x=j.prototype=new b;x.constructor=j,y(x,_.prototype),x.isPureReactComponent=!0;var g=Array.isArray,k=Object.prototype.hasOwnProperty,v={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,n){var o,c={},s=null,a=null;if(null!=r)for(o in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(s=""+r.key),r)k.call(r,o)&&!S.hasOwnProperty(o)&&(c[o]=r[o]);var u=arguments.length-2;if(1===u)c.children=n;else if(1<u){for(var i=Array(u),l=0;l<u;l++)i[l]=arguments[l+2];c.children=i}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===c[o]&&(c[o]=u[o]);return{$$typeof:t,type:e,key:s,ref:a,props:c,_owner:v.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function O(e,r,o,c,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case t:case n:u=!0}}if(u)return s=s(u=e),e=""===c?"."+C(u,0):c,g(s)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),O(s,r,o,"",(function(e){return e}))):null!=s&&(R(s)&&(s=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+e)),r.push(s)),1;if(u=0,c=""===c?".":c+":",g(e))for(var i=0;i<e.length;i++){var l=c+C(a=e[i],i);u+=O(a,r,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(a=e.next()).done;)u+=O(a=a.value,r,o,l=c+C(a,i++),s);else if("object"===a)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return u}function T(e,r,t){if(null==e)return e;var n=[],o=0;return O(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function $(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},I={transition:null},D={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:I,ReactCurrentOwner:v};r.Children={map:T,forEach:function(e,r,t){T(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return T(e,(function(){r++})),r},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=_,r.Fragment=o,r.Profiler=s,r.PureComponent=j,r.StrictMode=c,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),c=e.key,s=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,a=v.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(i in r)k.call(r,i)&&!S.hasOwnProperty(i)&&(o[i]=void 0===r[i]&&void 0!==u?u[i]:r[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){u=Array(i);for(var l=0;l<i;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:t,type:e.type,key:c,ref:s,props:o,_owner:a}},r.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var r=E.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=R,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return P.current.useCallback(e,r)},r.useContext=function(e){return P.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return P.current.useDeferredValue(e)},r.useEffect=function(e,r){return P.current.useEffect(e,r)},r.useId=function(){return P.current.useId()},r.useImperativeHandle=function(e,r,t){return P.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return P.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return P.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return P.current.useMemo(e,r)},r.useReducer=function(e,r,t){return P.current.useReducer(e,r,t)},r.useRef=function(e){return P.current.useRef(e)},r.useState=function(e){return P.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return P.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return P.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>a,ah:()=>c});var n=t(667294);const o=n.createContext({});function c(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const s={};function a({components:e,children:r,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||s:c(e),n.createElement(o.Provider,{value:a},r)}}}]);