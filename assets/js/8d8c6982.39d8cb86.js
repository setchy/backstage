/*! For license information please see 8d8c6982.39d8cb86.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[636256],{153716:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var n=r(824246),o=r(511151);const c={id:"plugin-scaffolder-backend-module-gcp",title:"@backstage/plugin-scaffolder-backend-module-gcp",description:"API Reference for @backstage/plugin-scaffolder-backend-module-gcp"},u=void 0,a={id:"reference/plugin-scaffolder-backend-module-gcp",title:"@backstage/plugin-scaffolder-backend-module-gcp",description:"API Reference for @backstage/plugin-scaffolder-backend-module-gcp",source:"@site/../docs/reference/plugin-scaffolder-backend-module-gcp.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-gcp",permalink:"/docs/reference/plugin-scaffolder-backend-module-gcp",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend-module-gcp.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend-module-gcp",title:"@backstage/plugin-scaffolder-backend-module-gcp",description:"API Reference for @backstage/plugin-scaffolder-backend-module-gcp"}},l={},s=[{value:"Variables",id:"variables",level:2}];function i(e){const t={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-gcp",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-gcp"})})]}),"\n",(0,n.jsx)(t.p,{children:"A module for the scaffolder backend that lets you interact with azure"}),"\n",(0,n.jsx)(t.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-gcp.gcpbucketmodule",children:"gcpBucketModule"})}),(0,n.jsx)(t.td,{children:"The Azure Module for the Scaffolder Backend"})]})})]})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,c={},s=null,i=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(i=t.ref),t)u.call(t,n)&&!l.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:i,props:c,_owner:a.current}}t.Fragment=c,t.jsx=s,t.jsxs=s},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,b={};function m(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}function g(){}function _(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var k=_.prototype=new g;k.constructor=_,h(k,m.prototype),k.isPureReactComponent=!0;var v=Array.isArray,S=Object.prototype.hasOwnProperty,j={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var o,c={},u=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)S.call(t,o)&&!x.hasOwnProperty(o)&&(c[o]=t[o]);var l=arguments.length-2;if(1===l)c.children=n;else if(1<l){for(var s=Array(l),i=0;i<l;i++)s[i]=arguments[i+2];c.children=s}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===c[o]&&(c[o]=l[o]);return{$$typeof:r,type:e,key:u,ref:a,props:c,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,c,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return u=u(l=e),e=""===c?"."+C(l,0):c,v(u)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),$(u,t,o,"",(function(e){return e}))):null!=u&&(w(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||l&&l.key===u.key?"":(""+u.key).replace(R,"$&/")+"/")+e)),t.push(u)),1;if(l=0,c=""===c?".":c+":",v(e))for(var s=0;s<e.length;s++){var i=c+C(a=e[s],s);l+=$(a,t,o,i,u)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),s=0;!(a=e.next()).done;)l+=$(a=a.value,t,o,i=c+C(a,s++),u);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},A={transition:null},T={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:A,ReactCurrentOwner:j};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=u,t.PureComponent=_,t.StrictMode=c,t.Suspense=i,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),c=e.key,u=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,a=j.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)S.call(t,s)&&!x.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){l=Array(s);for(var i=0;i<s;i++)l[i]=arguments[i+2];o.children=l}return{$$typeof:r,type:e.type,key:c,ref:u,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>u});var n=r(667294);const o={},c=n.createContext(o);function u(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);