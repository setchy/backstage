/*! For license information please see c87b517a.4a7ed12f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[996731],{149966:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>u,toc:()=>f});var n=t(824246),o=t(511151);const c={id:"plugin-scaffolder-react.scaffolderrjsfformprops.name",title:"ScaffolderRJSFFormProps.name",description:"API reference for ScaffolderRJSFFormProps.name"},a=void 0,u={id:"reference/plugin-scaffolder-react.scaffolderrjsfformprops.name",title:"ScaffolderRJSFFormProps.name",description:"API reference for ScaffolderRJSFFormProps.name",source:"@site/../docs/reference/plugin-scaffolder-react.scaffolderrjsfformprops.name.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-react.scaffolderrjsfformprops.name",permalink:"/docs/reference/plugin-scaffolder-react.scaffolderrjsfformprops.name",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-react.scaffolderrjsfformprops.name.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-react.scaffolderrjsfformprops.name",title:"ScaffolderRJSFFormProps.name",description:"API reference for ScaffolderRJSFFormProps.name"}},s={},f=[];function i(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-react",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-scaffolder-react"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-react.scaffolderrjsfformprops",children:(0,n.jsx)(r.code,{children:"ScaffolderRJSFFormProps"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-react.scaffolderrjsfformprops.name",children:(0,n.jsx)(r.code,{children:"name"})})]}),"\n",(0,n.jsxs)(r.p,{children:["The value of this prop will be passed to the ",(0,n.jsx)(r.code,{children:"name"})," HTML attribute on the form"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"name?: string;\n"})})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(i,e)})):i(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function f(e,r,t){var n,c={},f=null,i=null;for(n in void 0!==t&&(f=""+t),void 0!==r.key&&(f=""+r.key),void 0!==r.ref&&(i=r.ref),r)a.call(r,n)&&!s.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:f,ref:i,props:c,_owner:u.current}}r.Fragment=c,r.jsx=f,r.jsxs=f},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),s=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function _(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function b(){}function v(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=_.prototype;var S=v.prototype=new b;S.constructor=v,m(S,_.prototype),S.isPureReactComponent=!0;var g=Array.isArray,j=Object.prototype.hasOwnProperty,k={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function R(e,r,n){var o,c={},a=null,u=null;if(null!=r)for(o in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(a=""+r.key),r)j.call(r,o)&&!x.hasOwnProperty(o)&&(c[o]=r[o]);var s=arguments.length-2;if(1===s)c.children=n;else if(1<s){for(var f=Array(s),i=0;i<s;i++)f[i]=arguments[i+2];c.children=f}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===c[o]&&(c[o]=s[o]);return{$$typeof:t,type:e,key:a,ref:u,props:c,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function P(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,o,c,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case n:s=!0}}if(s)return a=a(s=e),e=""===c?"."+P(s,0):c,g(a)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),C(a,r,o,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(w,"$&/")+"/")+e)),r.push(a)),1;if(s=0,c=""===c?".":c+":",g(e))for(var f=0;f<e.length;f++){var i=c+P(u=e[f],f);s+=C(u,r,o,i,a)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),f=0;!(u=e.next()).done;)s+=C(u=u.value,r,o,i=c+P(u,f++),a);else if("object"===u)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return s}function $(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var F={current:null},I={transition:null},T={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=_,r.Fragment=o,r.Profiler=a,r.PureComponent=v,r.StrictMode=c,r.Suspense=i,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),c=e.key,a=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,u=k.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(f in r)j.call(r,f)&&!x.hasOwnProperty(f)&&(o[f]=void 0===r[f]&&void 0!==s?s[f]:r[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){s=Array(f);for(var i=0;i<f;i++)s[i]=arguments[i+2];o.children=s}return{$$typeof:t,type:e.type,key:c,ref:a,props:o,_owner:u}},r.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=R,r.createFactory=function(e){var r=R.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:f,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return F.current.useCallback(e,r)},r.useContext=function(e){return F.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return F.current.useDeferredValue(e)},r.useEffect=function(e,r){return F.current.useEffect(e,r)},r.useId=function(){return F.current.useId()},r.useImperativeHandle=function(e,r,t){return F.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return F.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return F.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return F.current.useMemo(e,r)},r.useReducer=function(e,r,t){return F.current.useReducer(e,r,t)},r.useRef=function(e){return F.current.useRef(e)},r.useState=function(e){return F.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return F.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return F.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>u,ah:()=>c});var n=t(667294);const o=n.createContext({});function c(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const a={};function u({components:e,children:r,disableParentContext:t}){let u;return u=t?"function"==typeof e?e({}):e||a:c(e),n.createElement(o.Provider,{value:u},r)}}}]);