function a0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function l0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kf={exports:{}},Ys={},Gf={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi=Symbol.for("react.element"),u0=Symbol.for("react.portal"),c0=Symbol.for("react.fragment"),d0=Symbol.for("react.strict_mode"),f0=Symbol.for("react.profiler"),p0=Symbol.for("react.provider"),h0=Symbol.for("react.context"),m0=Symbol.for("react.forward_ref"),g0=Symbol.for("react.suspense"),x0=Symbol.for("react.memo"),v0=Symbol.for("react.lazy"),rc=Symbol.iterator;function y0(e){return e===null||typeof e!="object"?null:(e=rc&&e[rc]||e["@@iterator"],typeof e=="function"?e:null)}var Qf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yf=Object.assign,qf={};function cr(e,t,n){this.props=e,this.context=t,this.refs=qf,this.updater=n||Qf}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xf(){}Xf.prototype=cr.prototype;function Nl(e,t,n){this.props=e,this.context=t,this.refs=qf,this.updater=n||Qf}var kl=Nl.prototype=new Xf;kl.constructor=Nl;Yf(kl,cr.prototype);kl.isPureReactComponent=!0;var ic=Array.isArray,Zf=Object.prototype.hasOwnProperty,Sl={current:null},Jf={key:!0,ref:!0,__self:!0,__source:!0};function ep(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Zf.call(t,r)&&!Jf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:bi,type:e,key:s,ref:o,props:i,_owner:Sl.current}}function w0(e,t){return{$$typeof:bi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Cl(e){return typeof e=="object"&&e!==null&&e.$$typeof===bi}function b0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var sc=/\/+/g;function jo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?b0(""+e.key):t.toString(36)}function es(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case bi:case u0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+jo(o,0):r,ic(i)?(n="",e!=null&&(n=e.replace(sc,"$&/")+"/"),es(i,t,n,"",function(c){return c})):i!=null&&(Cl(i)&&(i=w0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(sc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",ic(e))for(var l=0;l<e.length;l++){s=e[l];var u=r+jo(s,l);o+=es(s,t,n,u,i)}else if(u=y0(e),typeof u=="function")for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=r+jo(s,l++),o+=es(s,t,n,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Mi(e,t,n){if(e==null)return e;var r=[],i=0;return es(e,r,"","",function(s){return t.call(n,s,i++)}),r}function j0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},ts={transition:null},N0={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:ts,ReactCurrentOwner:Sl};function tp(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Mi,forEach:function(e,t,n){Mi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Mi(e,function(){t++}),t},toArray:function(e){return Mi(e,function(t){return t})||[]},only:function(e){if(!Cl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=cr;D.Fragment=c0;D.Profiler=f0;D.PureComponent=Nl;D.StrictMode=d0;D.Suspense=g0;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N0;D.act=tp;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yf({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Sl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)Zf.call(t,u)&&!Jf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:bi,type:e.type,key:i,ref:s,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:h0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:p0,_context:e},e.Consumer=e};D.createElement=ep;D.createFactory=function(e){var t=ep.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:m0,render:e}};D.isValidElement=Cl;D.lazy=function(e){return{$$typeof:v0,_payload:{_status:-1,_result:e},_init:j0}};D.memo=function(e,t){return{$$typeof:x0,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=ts.transition;ts.transition={};try{e()}finally{ts.transition=t}};D.unstable_act=tp;D.useCallback=function(e,t){return Ne.current.useCallback(e,t)};D.useContext=function(e){return Ne.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};D.useEffect=function(e,t){return Ne.current.useEffect(e,t)};D.useId=function(){return Ne.current.useId()};D.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return Ne.current.useMemo(e,t)};D.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};D.useRef=function(e){return Ne.current.useRef(e)};D.useState=function(e){return Ne.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return Ne.current.useTransition()};D.version="18.3.1";Gf.exports=D;var b=Gf.exports;const np=l0(b),k0=a0({__proto__:null,default:np},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0=b,C0=Symbol.for("react.element"),P0=Symbol.for("react.fragment"),T0=Object.prototype.hasOwnProperty,E0=S0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V0={key:!0,ref:!0,__self:!0,__source:!0};function rp(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)T0.call(t,r)&&!V0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:C0,type:e,key:s,ref:o,props:i,_owner:E0.current}}Ys.Fragment=P0;Ys.jsx=rp;Ys.jsxs=rp;Kf.exports=Ys;var a=Kf.exports,ua={},ip={exports:{}},Ie={},sp={exports:{}},op={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,M){var L=E.length;E.push(M);e:for(;0<L;){var J=L-1>>>1,ae=E[J];if(0<i(ae,M))E[J]=M,E[L]=ae,L=J;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var M=E[0],L=E.pop();if(L!==M){E[0]=L;e:for(var J=0,ae=E.length,Ai=ae>>>1;J<Ai;){var en=2*(J+1)-1,bo=E[en],tn=en+1,_i=E[tn];if(0>i(bo,L))tn<ae&&0>i(_i,bo)?(E[J]=_i,E[tn]=L,J=tn):(E[J]=bo,E[en]=L,J=en);else if(tn<ae&&0>i(_i,L))E[J]=_i,E[tn]=L,J=tn;else break e}}return M}function i(E,M){var L=E.sortIndex-M.sortIndex;return L!==0?L:E.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,f=null,p=3,x=!1,y=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(E){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=E)r(c),M.sortIndex=M.expirationTime,t(u,M);else break;M=n(c)}}function j(E){if(w=!1,g(E),!y)if(n(u)!==null)y=!0,Vi(k);else{var M=n(c);M!==null&&ie(j,M.startTime-E)}}function k(E,M){y=!1,w&&(w=!1,m(S),S=-1),x=!0;var L=p;try{for(g(M),f=n(u);f!==null&&(!(f.expirationTime>M)||E&&!ne());){var J=f.callback;if(typeof J=="function"){f.callback=null,p=f.priorityLevel;var ae=J(f.expirationTime<=M);M=e.unstable_now(),typeof ae=="function"?f.callback=ae:f===n(u)&&r(u),g(M)}else r(u);f=n(u)}if(f!==null)var Ai=!0;else{var en=n(c);en!==null&&ie(j,en.startTime-M),Ai=!1}return Ai}finally{f=null,p=L,x=!1}}var C=!1,T=null,S=-1,R=5,A=-1;function ne(){return!(e.unstable_now()-A<R)}function Nt(){if(T!==null){var E=e.unstable_now();A=E;var M=!0;try{M=T(!0,E)}finally{M?Jt():(C=!1,T=null)}}else C=!1}var Jt;if(typeof h=="function")Jt=function(){h(Nt)};else if(typeof MessageChannel<"u"){var xr=new MessageChannel,nc=xr.port2;xr.port1.onmessage=Nt,Jt=function(){nc.postMessage(null)}}else Jt=function(){N(Nt,0)};function Vi(E){T=E,C||(C=!0,Jt())}function ie(E,M){S=N(function(){E(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,Vi(k))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var L=p;p=M;try{return E()}finally{p=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,M){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var L=p;p=E;try{return M()}finally{p=L}},e.unstable_scheduleCallback=function(E,M,L){var J=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?J+L:J):L=J,E){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=L+ae,E={id:d++,callback:M,priorityLevel:E,startTime:L,expirationTime:ae,sortIndex:-1},L>J?(E.sortIndex=L,t(c,E),n(u)===null&&E===n(c)&&(w?(m(S),S=-1):w=!0,ie(j,L-J))):(E.sortIndex=ae,t(u,E),y||x||(y=!0,Vi(k))),E},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(E){var M=p;return function(){var L=p;p=M;try{return E.apply(this,arguments)}finally{p=L}}}})(op);sp.exports=op;var A0=sp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0=b,Re=A0;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ap=new Set,Qr={};function jn(e,t){qn(e,t),qn(e+"Capture",t)}function qn(e,t){for(Qr[e]=t,e=0;e<t.length;e++)ap.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ca=Object.prototype.hasOwnProperty,M0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oc={},ac={};function L0(e){return ca.call(ac,e)?!0:ca.call(oc,e)?!1:M0.test(e)?ac[e]=!0:(oc[e]=!0,!1)}function R0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function D0(e,t,n,r){if(t===null||typeof t>"u"||R0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pl=/[\-:]([a-z])/g;function Tl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Pl,Tl);he[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Pl,Tl);he[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pl,Tl);he[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function El(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(D0(t,n,i,r)&&(n=null),r||i===null?L0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=_0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Li=Symbol.for("react.element"),Pn=Symbol.for("react.portal"),Tn=Symbol.for("react.fragment"),Vl=Symbol.for("react.strict_mode"),da=Symbol.for("react.profiler"),lp=Symbol.for("react.provider"),up=Symbol.for("react.context"),Al=Symbol.for("react.forward_ref"),fa=Symbol.for("react.suspense"),pa=Symbol.for("react.suspense_list"),_l=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),cp=Symbol.for("react.offscreen"),lc=Symbol.iterator;function vr(e){return e===null||typeof e!="object"?null:(e=lc&&e[lc]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,No;function Tr(e){if(No===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);No=t&&t[1]||""}return`
`+No+e}var ko=!1;function So(e,t){if(!e||ko)return"";ko=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=l);break}}}finally{ko=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tr(e):""}function I0(e){switch(e.tag){case 5:return Tr(e.type);case 16:return Tr("Lazy");case 13:return Tr("Suspense");case 19:return Tr("SuspenseList");case 0:case 2:case 15:return e=So(e.type,!1),e;case 11:return e=So(e.type.render,!1),e;case 1:return e=So(e.type,!0),e;default:return""}}function ha(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tn:return"Fragment";case Pn:return"Portal";case da:return"Profiler";case Vl:return"StrictMode";case fa:return"Suspense";case pa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case up:return(e.displayName||"Context")+".Consumer";case lp:return(e._context.displayName||"Context")+".Provider";case Al:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _l:return t=e.displayName||null,t!==null?t:ha(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return ha(e(t))}catch{}}return null}function O0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ha(t);case 8:return t===Vl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function z0(e){var t=dp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ri(e){e._valueTracker||(e._valueTracker=z0(e))}function fp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=dp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ms(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ma(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function uc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pp(e,t){t=t.checked,t!=null&&El(e,"checked",t,!1)}function ga(e,t){pp(e,t);var n=Ut(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xa(e,t.type,n):t.hasOwnProperty("defaultValue")&&xa(e,t.type,Ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xa(e,t,n){(t!=="number"||ms(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Er=Array.isArray;function $n(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function va(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function dc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Er(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ut(n)}}function hp(e,t){var n=Ut(t.value),r=Ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ya(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Di,gp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Di=Di||document.createElement("div"),Di.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Di.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F0=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(e){F0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rr[t]=Rr[e]})});function xp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rr.hasOwnProperty(e)&&Rr[e]?(""+t).trim():t+"px"}function vp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var B0=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wa(e,t){if(t){if(B0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function ba(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ja=null;function Ml(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Na=null,Hn=null,Kn=null;function pc(e){if(e=ki(e)){if(typeof Na!="function")throw Error(P(280));var t=e.stateNode;t&&(t=eo(t),Na(e.stateNode,e.type,t))}}function yp(e){Hn?Kn?Kn.push(e):Kn=[e]:Hn=e}function wp(){if(Hn){var e=Hn,t=Kn;if(Kn=Hn=null,pc(e),t)for(e=0;e<t.length;e++)pc(t[e])}}function bp(e,t){return e(t)}function jp(){}var Co=!1;function Np(e,t,n){if(Co)return e(t,n);Co=!0;try{return bp(e,t,n)}finally{Co=!1,(Hn!==null||Kn!==null)&&(jp(),wp())}}function qr(e,t){var n=e.stateNode;if(n===null)return null;var r=eo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var ka=!1;if(mt)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){ka=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{ka=!1}function U0(e,t,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Dr=!1,gs=null,xs=!1,Sa=null,W0={onError:function(e){Dr=!0,gs=e}};function $0(e,t,n,r,i,s,o,l,u){Dr=!1,gs=null,U0.apply(W0,arguments)}function H0(e,t,n,r,i,s,o,l,u){if($0.apply(this,arguments),Dr){if(Dr){var c=gs;Dr=!1,gs=null}else throw Error(P(198));xs||(xs=!0,Sa=c)}}function Nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hc(e){if(Nn(e)!==e)throw Error(P(188))}function K0(e){var t=e.alternate;if(!t){if(t=Nn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hc(i),e;if(s===r)return hc(i),t;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Sp(e){return e=K0(e),e!==null?Cp(e):null}function Cp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cp(e);if(t!==null)return t;e=e.sibling}return null}var Pp=Re.unstable_scheduleCallback,mc=Re.unstable_cancelCallback,G0=Re.unstable_shouldYield,Q0=Re.unstable_requestPaint,te=Re.unstable_now,Y0=Re.unstable_getCurrentPriorityLevel,Ll=Re.unstable_ImmediatePriority,Tp=Re.unstable_UserBlockingPriority,vs=Re.unstable_NormalPriority,q0=Re.unstable_LowPriority,Ep=Re.unstable_IdlePriority,qs=null,it=null;function X0(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(qs,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:ex,Z0=Math.log,J0=Math.LN2;function ex(e){return e>>>=0,e===0?32:31-(Z0(e)/J0|0)|0}var Ii=64,Oi=4194304;function Vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ys(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Vr(l):(s&=o,s!==0&&(r=Vr(s)))}else o=n&~i,o!==0?r=Vr(o):s!==0&&(r=Vr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),i=1<<n,r|=e[n],t&=~i;return r}function tx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Ze(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=tx(l,t)):u<=t&&(e.expiredLanes|=l),s&=~l}}function Ca(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vp(){var e=Ii;return Ii<<=1,!(Ii&4194240)&&(Ii=64),e}function Po(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ji(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function rx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ze(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Rl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var z=0;function Ap(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _p,Dl,Mp,Lp,Rp,Pa=!1,zi=[],Mt=null,Lt=null,Rt=null,Xr=new Map,Zr=new Map,Tt=[],ix="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gc(e,t){switch(e){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function wr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ki(t),t!==null&&Dl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sx(e,t,n,r,i){switch(t){case"focusin":return Mt=wr(Mt,e,t,n,r,i),!0;case"dragenter":return Lt=wr(Lt,e,t,n,r,i),!0;case"mouseover":return Rt=wr(Rt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Xr.set(s,wr(Xr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Zr.set(s,wr(Zr.get(s)||null,e,t,n,r,i)),!0}return!1}function Dp(e){var t=ln(e.target);if(t!==null){var n=Nn(t);if(n!==null){if(t=n.tag,t===13){if(t=kp(n),t!==null){e.blockedOn=t,Rp(e.priority,function(){Mp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ns(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ta(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ja=r,n.target.dispatchEvent(r),ja=null}else return t=ki(n),t!==null&&Dl(t),e.blockedOn=n,!1;t.shift()}return!0}function xc(e,t,n){ns(e)&&n.delete(t)}function ox(){Pa=!1,Mt!==null&&ns(Mt)&&(Mt=null),Lt!==null&&ns(Lt)&&(Lt=null),Rt!==null&&ns(Rt)&&(Rt=null),Xr.forEach(xc),Zr.forEach(xc)}function br(e,t){e.blockedOn===t&&(e.blockedOn=null,Pa||(Pa=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,ox)))}function Jr(e){function t(i){return br(i,e)}if(0<zi.length){br(zi[0],e);for(var n=1;n<zi.length;n++){var r=zi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Mt!==null&&br(Mt,e),Lt!==null&&br(Lt,e),Rt!==null&&br(Rt,e),Xr.forEach(t),Zr.forEach(t),n=0;n<Tt.length;n++)r=Tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tt.length&&(n=Tt[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Tt.shift()}var Gn=wt.ReactCurrentBatchConfig,ws=!0;function ax(e,t,n,r){var i=z,s=Gn.transition;Gn.transition=null;try{z=1,Il(e,t,n,r)}finally{z=i,Gn.transition=s}}function lx(e,t,n,r){var i=z,s=Gn.transition;Gn.transition=null;try{z=4,Il(e,t,n,r)}finally{z=i,Gn.transition=s}}function Il(e,t,n,r){if(ws){var i=Ta(e,t,n,r);if(i===null)Io(e,t,r,bs,n),gc(e,r);else if(sx(i,e,t,n,r))r.stopPropagation();else if(gc(e,r),t&4&&-1<ix.indexOf(e)){for(;i!==null;){var s=ki(i);if(s!==null&&_p(s),s=Ta(e,t,n,r),s===null&&Io(e,t,r,bs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Io(e,t,r,null,n)}}var bs=null;function Ta(e,t,n,r){if(bs=null,e=Ml(r),e=ln(e),e!==null)if(t=Nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bs=e,null}function Ip(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y0()){case Ll:return 1;case Tp:return 4;case vs:case q0:return 16;case Ep:return 536870912;default:return 16}default:return 16}}var Vt=null,Ol=null,rs=null;function Op(){if(rs)return rs;var e,t=Ol,n=t.length,r,i="value"in Vt?Vt.value:Vt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return rs=i.slice(e,1<r?1-r:void 0)}function is(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fi(){return!0}function vc(){return!1}function Oe(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fi:vc,this.isPropagationStopped=vc,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Oe(dr),Ni=q({},dr,{view:0,detail:0}),ux=Oe(Ni),To,Eo,jr,Xs=q({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(To=e.screenX-jr.screenX,Eo=e.screenY-jr.screenY):Eo=To=0,jr=e),To)},movementY:function(e){return"movementY"in e?e.movementY:Eo}}),yc=Oe(Xs),cx=q({},Xs,{dataTransfer:0}),dx=Oe(cx),fx=q({},Ni,{relatedTarget:0}),Vo=Oe(fx),px=q({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),hx=Oe(px),mx=q({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gx=Oe(mx),xx=q({},dr,{data:0}),wc=Oe(xx),vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wx[e])?!!t[e]:!1}function Fl(){return bx}var jx=q({},Ni,{key:function(e){if(e.key){var t=vx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=is(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fl,charCode:function(e){return e.type==="keypress"?is(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?is(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nx=Oe(jx),kx=q({},Xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bc=Oe(kx),Sx=q({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fl}),Cx=Oe(Sx),Px=q({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=Oe(Px),Ex=q({},Xs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vx=Oe(Ex),Ax=[9,13,27,32],Bl=mt&&"CompositionEvent"in window,Ir=null;mt&&"documentMode"in document&&(Ir=document.documentMode);var _x=mt&&"TextEvent"in window&&!Ir,zp=mt&&(!Bl||Ir&&8<Ir&&11>=Ir),jc=" ",Nc=!1;function Fp(e,t){switch(e){case"keyup":return Ax.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function Mx(e,t){switch(e){case"compositionend":return Bp(t);case"keypress":return t.which!==32?null:(Nc=!0,jc);case"textInput":return e=t.data,e===jc&&Nc?null:e;default:return null}}function Lx(e,t){if(En)return e==="compositionend"||!Bl&&Fp(e,t)?(e=Op(),rs=Ol=Vt=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zp&&t.locale!=="ko"?null:t.data;default:return null}}var Rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rx[e.type]:t==="textarea"}function Up(e,t,n,r){yp(r),t=js(t,"onChange"),0<t.length&&(n=new zl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Or=null,ei=null;function Dx(e){Jp(e,0)}function Zs(e){var t=_n(e);if(fp(t))return e}function Ix(e,t){if(e==="change")return t}var Wp=!1;if(mt){var Ao;if(mt){var _o="oninput"in document;if(!_o){var Sc=document.createElement("div");Sc.setAttribute("oninput","return;"),_o=typeof Sc.oninput=="function"}Ao=_o}else Ao=!1;Wp=Ao&&(!document.documentMode||9<document.documentMode)}function Cc(){Or&&(Or.detachEvent("onpropertychange",$p),ei=Or=null)}function $p(e){if(e.propertyName==="value"&&Zs(ei)){var t=[];Up(t,ei,e,Ml(e)),Np(Dx,t)}}function Ox(e,t,n){e==="focusin"?(Cc(),Or=t,ei=n,Or.attachEvent("onpropertychange",$p)):e==="focusout"&&Cc()}function zx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zs(ei)}function Fx(e,t){if(e==="click")return Zs(t)}function Bx(e,t){if(e==="input"||e==="change")return Zs(t)}function Ux(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:Ux;function ti(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ca.call(t,i)||!et(e[i],t[i]))return!1}return!0}function Pc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tc(e,t){var n=Pc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pc(n)}}function Hp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kp(){for(var e=window,t=ms();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ms(e.document)}return t}function Ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wx(e){var t=Kp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hp(n.ownerDocument.documentElement,n)){if(r!==null&&Ul(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Tc(n,s);var o=Tc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $x=mt&&"documentMode"in document&&11>=document.documentMode,Vn=null,Ea=null,zr=null,Va=!1;function Ec(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Va||Vn==null||Vn!==ms(r)||(r=Vn,"selectionStart"in r&&Ul(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&ti(zr,r)||(zr=r,r=js(Ea,"onSelect"),0<r.length&&(t=new zl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vn)))}function Bi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var An={animationend:Bi("Animation","AnimationEnd"),animationiteration:Bi("Animation","AnimationIteration"),animationstart:Bi("Animation","AnimationStart"),transitionend:Bi("Transition","TransitionEnd")},Mo={},Gp={};mt&&(Gp=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function Js(e){if(Mo[e])return Mo[e];if(!An[e])return e;var t=An[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gp)return Mo[e]=t[n];return e}var Qp=Js("animationend"),Yp=Js("animationiteration"),qp=Js("animationstart"),Xp=Js("transitionend"),Zp=new Map,Vc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){Zp.set(e,t),jn(t,[e])}for(var Lo=0;Lo<Vc.length;Lo++){var Ro=Vc[Lo],Hx=Ro.toLowerCase(),Kx=Ro[0].toUpperCase()+Ro.slice(1);Qt(Hx,"on"+Kx)}Qt(Qp,"onAnimationEnd");Qt(Yp,"onAnimationIteration");Qt(qp,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(Xp,"onTransitionEnd");qn("onMouseEnter",["mouseout","mouseover"]);qn("onMouseLeave",["mouseout","mouseover"]);qn("onPointerEnter",["pointerout","pointerover"]);qn("onPointerLeave",["pointerout","pointerover"]);jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function Ac(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,H0(r,t,void 0,e),e.currentTarget=null}function Jp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Ac(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Ac(i,l,c),s=u}}}if(xs)throw e=Sa,xs=!1,Sa=null,e}function U(e,t){var n=t[Ra];n===void 0&&(n=t[Ra]=new Set);var r=e+"__bubble";n.has(r)||(eh(t,e,2,!1),n.add(r))}function Do(e,t,n){var r=0;t&&(r|=4),eh(n,e,r,t)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function ni(e){if(!e[Ui]){e[Ui]=!0,ap.forEach(function(n){n!=="selectionchange"&&(Gx.has(n)||Do(n,!1,e),Do(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ui]||(t[Ui]=!0,Do("selectionchange",!1,t))}}function eh(e,t,n,r){switch(Ip(t)){case 1:var i=ax;break;case 4:i=lx;break;default:i=Il}n=i.bind(null,t,n,e),i=void 0,!ka||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Io(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ln(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Np(function(){var c=s,d=Ml(n),f=[];e:{var p=Zp.get(e);if(p!==void 0){var x=zl,y=e;switch(e){case"keypress":if(is(n)===0)break e;case"keydown":case"keyup":x=Nx;break;case"focusin":y="focus",x=Vo;break;case"focusout":y="blur",x=Vo;break;case"beforeblur":case"afterblur":x=Vo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Cx;break;case Qp:case Yp:case qp:x=hx;break;case Xp:x=Tx;break;case"scroll":x=ux;break;case"wheel":x=Vx;break;case"copy":case"cut":case"paste":x=gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=bc}var w=(t&4)!==0,N=!w&&e==="scroll",m=w?p!==null?p+"Capture":null:p;w=[];for(var h=c,g;h!==null;){g=h;var j=g.stateNode;if(g.tag===5&&j!==null&&(g=j,m!==null&&(j=qr(h,m),j!=null&&w.push(ri(h,j,g)))),N)break;h=h.return}0<w.length&&(p=new x(p,y,null,n,d),f.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",p&&n!==ja&&(y=n.relatedTarget||n.fromElement)&&(ln(y)||y[gt]))break e;if((x||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=c,y=y?ln(y):null,y!==null&&(N=Nn(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=c),x!==y)){if(w=yc,j="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=bc,j="onPointerLeave",m="onPointerEnter",h="pointer"),N=x==null?p:_n(x),g=y==null?p:_n(y),p=new w(j,h+"leave",x,n,d),p.target=N,p.relatedTarget=g,j=null,ln(d)===c&&(w=new w(m,h+"enter",y,n,d),w.target=g,w.relatedTarget=N,j=w),N=j,x&&y)t:{for(w=x,m=y,h=0,g=w;g;g=Cn(g))h++;for(g=0,j=m;j;j=Cn(j))g++;for(;0<h-g;)w=Cn(w),h--;for(;0<g-h;)m=Cn(m),g--;for(;h--;){if(w===m||m!==null&&w===m.alternate)break t;w=Cn(w),m=Cn(m)}w=null}else w=null;x!==null&&_c(f,p,x,w,!1),y!==null&&N!==null&&_c(f,N,y,w,!0)}}e:{if(p=c?_n(c):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var k=Ix;else if(kc(p))if(Wp)k=Bx;else{k=zx;var C=Ox}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=Fx);if(k&&(k=k(e,c))){Up(f,k,n,d);break e}C&&C(e,p,c),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&xa(p,"number",p.value)}switch(C=c?_n(c):window,e){case"focusin":(kc(C)||C.contentEditable==="true")&&(Vn=C,Ea=c,zr=null);break;case"focusout":zr=Ea=Vn=null;break;case"mousedown":Va=!0;break;case"contextmenu":case"mouseup":case"dragend":Va=!1,Ec(f,n,d);break;case"selectionchange":if($x)break;case"keydown":case"keyup":Ec(f,n,d)}var T;if(Bl)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else En?Fp(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(zp&&n.locale!=="ko"&&(En||S!=="onCompositionStart"?S==="onCompositionEnd"&&En&&(T=Op()):(Vt=d,Ol="value"in Vt?Vt.value:Vt.textContent,En=!0)),C=js(c,S),0<C.length&&(S=new wc(S,e,null,n,d),f.push({event:S,listeners:C}),T?S.data=T:(T=Bp(n),T!==null&&(S.data=T)))),(T=_x?Mx(e,n):Lx(e,n))&&(c=js(c,"onBeforeInput"),0<c.length&&(d=new wc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}Jp(f,t)})}function ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function js(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qr(e,n),s!=null&&r.unshift(ri(e,s,i)),s=qr(e,t),s!=null&&r.push(ri(e,s,i))),e=e.return}return r}function Cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _c(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=qr(n,s),u!=null&&o.unshift(ri(n,u,l))):i||(u=qr(n,s),u!=null&&o.push(ri(n,u,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Qx=/\r\n?/g,Yx=/\u0000|\uFFFD/g;function Mc(e){return(typeof e=="string"?e:""+e).replace(Qx,`
`).replace(Yx,"")}function Wi(e,t,n){if(t=Mc(t),Mc(e)!==t&&n)throw Error(P(425))}function Ns(){}var Aa=null,_a=null;function Ma(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var La=typeof setTimeout=="function"?setTimeout:void 0,qx=typeof clearTimeout=="function"?clearTimeout:void 0,Lc=typeof Promise=="function"?Promise:void 0,Xx=typeof queueMicrotask=="function"?queueMicrotask:typeof Lc<"u"?function(e){return Lc.resolve(null).then(e).catch(Zx)}:La;function Zx(e){setTimeout(function(){throw e})}function Oo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Jr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Jr(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fr=Math.random().toString(36).slice(2),rt="__reactFiber$"+fr,ii="__reactProps$"+fr,gt="__reactContainer$"+fr,Ra="__reactEvents$"+fr,Jx="__reactListeners$"+fr,ev="__reactHandles$"+fr;function ln(e){var t=e[rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rc(e);e!==null;){if(n=e[rt])return n;e=Rc(e)}return t}e=n,n=e.parentNode}return null}function ki(e){return e=e[rt]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function eo(e){return e[ii]||null}var Da=[],Mn=-1;function Yt(e){return{current:e}}function W(e){0>Mn||(e.current=Da[Mn],Da[Mn]=null,Mn--)}function B(e,t){Mn++,Da[Mn]=e.current,e.current=t}var Wt={},we=Yt(Wt),Te=Yt(!1),mn=Wt;function Xn(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function ks(){W(Te),W(we)}function Dc(e,t,n){if(we.current!==Wt)throw Error(P(168));B(we,t),B(Te,n)}function th(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,O0(e)||"Unknown",i));return q({},n,r)}function Ss(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,mn=we.current,B(we,e),B(Te,Te.current),!0}function Ic(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=th(e,t,mn),r.__reactInternalMemoizedMergedChildContext=e,W(Te),W(we),B(we,e)):W(Te),B(Te,n)}var ut=null,to=!1,zo=!1;function nh(e){ut===null?ut=[e]:ut.push(e)}function tv(e){to=!0,nh(e)}function qt(){if(!zo&&ut!==null){zo=!0;var e=0,t=z;try{var n=ut;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ut=null,to=!1}catch(i){throw ut!==null&&(ut=ut.slice(e+1)),Pp(Ll,qt),i}finally{z=t,zo=!1}}return null}var Ln=[],Rn=0,Cs=null,Ps=0,Be=[],Ue=0,gn=null,ct=1,dt="";function rn(e,t){Ln[Rn++]=Ps,Ln[Rn++]=Cs,Cs=e,Ps=t}function rh(e,t,n){Be[Ue++]=ct,Be[Ue++]=dt,Be[Ue++]=gn,gn=e;var r=ct;e=dt;var i=32-Ze(r)-1;r&=~(1<<i),n+=1;var s=32-Ze(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ct=1<<32-Ze(t)+i|n<<i|r,dt=s+e}else ct=1<<s|n<<i|r,dt=e}function Wl(e){e.return!==null&&(rn(e,1),rh(e,1,0))}function $l(e){for(;e===Cs;)Cs=Ln[--Rn],Ln[Rn]=null,Ps=Ln[--Rn],Ln[Rn]=null;for(;e===gn;)gn=Be[--Ue],Be[Ue]=null,dt=Be[--Ue],Be[Ue]=null,ct=Be[--Ue],Be[Ue]=null}var Me=null,_e=null,H=!1,Xe=null;function ih(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Oc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,_e=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:ct,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,_e=null,!0):!1;default:return!1}}function Ia(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oa(e){if(H){var t=_e;if(t){var n=t;if(!Oc(e,t)){if(Ia(e))throw Error(P(418));t=Dt(n.nextSibling);var r=Me;t&&Oc(e,t)?ih(r,n):(e.flags=e.flags&-4097|2,H=!1,Me=e)}}else{if(Ia(e))throw Error(P(418));e.flags=e.flags&-4097|2,H=!1,Me=e}}}function zc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function $i(e){if(e!==Me)return!1;if(!H)return zc(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ma(e.type,e.memoizedProps)),t&&(t=_e)){if(Ia(e))throw sh(),Error(P(418));for(;t;)ih(e,t),t=Dt(t.nextSibling)}if(zc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Me?Dt(e.stateNode.nextSibling):null;return!0}function sh(){for(var e=_e;e;)e=Dt(e.nextSibling)}function Zn(){_e=Me=null,H=!1}function Hl(e){Xe===null?Xe=[e]:Xe.push(e)}var nv=wt.ReactCurrentBatchConfig;function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Hi(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fc(e){var t=e._init;return t(e._payload)}function oh(e){function t(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=Ft(m,h),m.index=0,m.sibling=null,m}function s(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,h,g,j){return h===null||h.tag!==6?(h=Ko(g,m.mode,j),h.return=m,h):(h=i(h,g),h.return=m,h)}function u(m,h,g,j){var k=g.type;return k===Tn?d(m,h,g.props.children,j,g.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ct&&Fc(k)===h.type)?(j=i(h,g.props),j.ref=Nr(m,h,g),j.return=m,j):(j=ds(g.type,g.key,g.props,null,m.mode,j),j.ref=Nr(m,h,g),j.return=m,j)}function c(m,h,g,j){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Go(g,m.mode,j),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function d(m,h,g,j,k){return h===null||h.tag!==7?(h=pn(g,m.mode,j,k),h.return=m,h):(h=i(h,g),h.return=m,h)}function f(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ko(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Li:return g=ds(h.type,h.key,h.props,null,m.mode,g),g.ref=Nr(m,null,h),g.return=m,g;case Pn:return h=Go(h,m.mode,g),h.return=m,h;case Ct:var j=h._init;return f(m,j(h._payload),g)}if(Er(h)||vr(h))return h=pn(h,m.mode,g,null),h.return=m,h;Hi(m,h)}return null}function p(m,h,g,j){var k=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:l(m,h,""+g,j);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Li:return g.key===k?u(m,h,g,j):null;case Pn:return g.key===k?c(m,h,g,j):null;case Ct:return k=g._init,p(m,h,k(g._payload),j)}if(Er(g)||vr(g))return k!==null?null:d(m,h,g,j,null);Hi(m,g)}return null}function x(m,h,g,j,k){if(typeof j=="string"&&j!==""||typeof j=="number")return m=m.get(g)||null,l(h,m,""+j,k);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Li:return m=m.get(j.key===null?g:j.key)||null,u(h,m,j,k);case Pn:return m=m.get(j.key===null?g:j.key)||null,c(h,m,j,k);case Ct:var C=j._init;return x(m,h,g,C(j._payload),k)}if(Er(j)||vr(j))return m=m.get(g)||null,d(h,m,j,k,null);Hi(h,j)}return null}function y(m,h,g,j){for(var k=null,C=null,T=h,S=h=0,R=null;T!==null&&S<g.length;S++){T.index>S?(R=T,T=null):R=T.sibling;var A=p(m,T,g[S],j);if(A===null){T===null&&(T=R);break}e&&T&&A.alternate===null&&t(m,T),h=s(A,h,S),C===null?k=A:C.sibling=A,C=A,T=R}if(S===g.length)return n(m,T),H&&rn(m,S),k;if(T===null){for(;S<g.length;S++)T=f(m,g[S],j),T!==null&&(h=s(T,h,S),C===null?k=T:C.sibling=T,C=T);return H&&rn(m,S),k}for(T=r(m,T);S<g.length;S++)R=x(T,m,S,g[S],j),R!==null&&(e&&R.alternate!==null&&T.delete(R.key===null?S:R.key),h=s(R,h,S),C===null?k=R:C.sibling=R,C=R);return e&&T.forEach(function(ne){return t(m,ne)}),H&&rn(m,S),k}function w(m,h,g,j){var k=vr(g);if(typeof k!="function")throw Error(P(150));if(g=k.call(g),g==null)throw Error(P(151));for(var C=k=null,T=h,S=h=0,R=null,A=g.next();T!==null&&!A.done;S++,A=g.next()){T.index>S?(R=T,T=null):R=T.sibling;var ne=p(m,T,A.value,j);if(ne===null){T===null&&(T=R);break}e&&T&&ne.alternate===null&&t(m,T),h=s(ne,h,S),C===null?k=ne:C.sibling=ne,C=ne,T=R}if(A.done)return n(m,T),H&&rn(m,S),k;if(T===null){for(;!A.done;S++,A=g.next())A=f(m,A.value,j),A!==null&&(h=s(A,h,S),C===null?k=A:C.sibling=A,C=A);return H&&rn(m,S),k}for(T=r(m,T);!A.done;S++,A=g.next())A=x(T,m,S,A.value,j),A!==null&&(e&&A.alternate!==null&&T.delete(A.key===null?S:A.key),h=s(A,h,S),C===null?k=A:C.sibling=A,C=A);return e&&T.forEach(function(Nt){return t(m,Nt)}),H&&rn(m,S),k}function N(m,h,g,j){if(typeof g=="object"&&g!==null&&g.type===Tn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Li:e:{for(var k=g.key,C=h;C!==null;){if(C.key===k){if(k=g.type,k===Tn){if(C.tag===7){n(m,C.sibling),h=i(C,g.props.children),h.return=m,m=h;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ct&&Fc(k)===C.type){n(m,C.sibling),h=i(C,g.props),h.ref=Nr(m,C,g),h.return=m,m=h;break e}n(m,C);break}else t(m,C);C=C.sibling}g.type===Tn?(h=pn(g.props.children,m.mode,j,g.key),h.return=m,m=h):(j=ds(g.type,g.key,g.props,null,m.mode,j),j.ref=Nr(m,h,g),j.return=m,m=j)}return o(m);case Pn:e:{for(C=g.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=Go(g,m.mode,j),h.return=m,m=h}return o(m);case Ct:return C=g._init,N(m,h,C(g._payload),j)}if(Er(g))return y(m,h,g,j);if(vr(g))return w(m,h,g,j);Hi(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,g),h.return=m,m=h):(n(m,h),h=Ko(g,m.mode,j),h.return=m,m=h),o(m)):n(m,h)}return N}var Jn=oh(!0),ah=oh(!1),Ts=Yt(null),Es=null,Dn=null,Kl=null;function Gl(){Kl=Dn=Es=null}function Ql(e){var t=Ts.current;W(Ts),e._currentValue=t}function za(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Qn(e,t){Es=e,Kl=Dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(Kl!==e)if(e={context:e,memoizedValue:t,next:null},Dn===null){if(Es===null)throw Error(P(308));Dn=e,Es.dependencies={lanes:0,firstContext:e}}else Dn=Dn.next=e;return t}var un=null;function Yl(e){un===null?un=[e]:un.push(e)}function lh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Yl(t)):(n.next=i.next,i.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function ql(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function It(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,xt(e,n)}return i=r.interleaved,i===null?(t.next=t,Yl(r)):(t.next=i.next,i.next=t),r.interleaved=t,xt(e,n)}function ss(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rl(e,n)}}function Bc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vs(e,t,n,r){var i=e.updateQueue;Pt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,l=s;do{var p=l.lane,x=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(p=t,x=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(x,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(x,f,p):y,p==null)break e;f=q({},f,p);break e;case 2:Pt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else x={eventTime:x,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=x,u=f):d=d.next=x,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);vn|=o,e.lanes=o,e.memoizedState=f}}function Uc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Si={},st=Yt(Si),si=Yt(Si),oi=Yt(Si);function cn(e){if(e===Si)throw Error(P(174));return e}function Xl(e,t){switch(B(oi,t),B(si,e),B(st,Si),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ya(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ya(t,e)}W(st),B(st,t)}function er(){W(st),W(si),W(oi)}function ch(e){cn(oi.current);var t=cn(st.current),n=ya(t,e.type);t!==n&&(B(si,e),B(st,n))}function Zl(e){si.current===e&&(W(st),W(si))}var K=Yt(0);function As(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fo=[];function Jl(){for(var e=0;e<Fo.length;e++)Fo[e]._workInProgressVersionPrimary=null;Fo.length=0}var os=wt.ReactCurrentDispatcher,Bo=wt.ReactCurrentBatchConfig,xn=0,Q=null,se=null,le=null,_s=!1,Fr=!1,ai=0,rv=0;function me(){throw Error(P(321))}function eu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function tu(e,t,n,r,i,s){if(xn=s,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,os.current=e===null||e.memoizedState===null?av:lv,e=n(r,i),Fr){s=0;do{if(Fr=!1,ai=0,25<=s)throw Error(P(301));s+=1,le=se=null,t.updateQueue=null,os.current=uv,e=n(r,i)}while(Fr)}if(os.current=Ms,t=se!==null&&se.next!==null,xn=0,le=se=Q=null,_s=!1,t)throw Error(P(300));return e}function nu(){var e=ai!==0;return ai=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Q.memoizedState=le=e:le=le.next=e,le}function Ke(){if(se===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=le===null?Q.memoizedState:le.next;if(t!==null)le=t,se=e;else{if(e===null)throw Error(P(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},le===null?Q.memoizedState=le=e:le=le.next=e}return le}function li(e,t){return typeof t=="function"?t(e):t}function Uo(e){var t=Ke(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=se,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((xn&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,o=r):u=u.next=f,Q.lanes|=d,vn|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,et(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Q.lanes|=s,vn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wo(e){var t=Ke(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);et(s,t.memoizedState)||(Pe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function dh(){}function fh(e,t){var n=Q,r=Ke(),i=t(),s=!et(r.memoizedState,i);if(s&&(r.memoizedState=i,Pe=!0),r=r.queue,ru(mh.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,ui(9,hh.bind(null,n,r,i,t),void 0,null),ue===null)throw Error(P(349));xn&30||ph(n,t,i)}return i}function ph(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hh(e,t,n,r){t.value=n,t.getSnapshot=r,gh(t)&&xh(e)}function mh(e,t,n){return n(function(){gh(t)&&xh(e)})}function gh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function xh(e){var t=xt(e,1);t!==null&&Je(t,e,1,-1)}function Wc(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:li,lastRenderedState:e},t.queue=e,e=e.dispatch=ov.bind(null,Q,e),[t.memoizedState,e]}function ui(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vh(){return Ke().memoizedState}function as(e,t,n,r){var i=nt();Q.flags|=e,i.memoizedState=ui(1|t,n,void 0,r===void 0?null:r)}function no(e,t,n,r){var i=Ke();r=r===void 0?null:r;var s=void 0;if(se!==null){var o=se.memoizedState;if(s=o.destroy,r!==null&&eu(r,o.deps)){i.memoizedState=ui(t,n,s,r);return}}Q.flags|=e,i.memoizedState=ui(1|t,n,s,r)}function $c(e,t){return as(8390656,8,e,t)}function ru(e,t){return no(2048,8,e,t)}function yh(e,t){return no(4,2,e,t)}function wh(e,t){return no(4,4,e,t)}function bh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jh(e,t,n){return n=n!=null?n.concat([e]):null,no(4,4,bh.bind(null,t,e),n)}function iu(){}function Nh(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&eu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kh(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&eu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sh(e,t,n){return xn&21?(et(n,t)||(n=Vp(),Q.lanes|=n,vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function iv(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=Bo.transition;Bo.transition={};try{e(!1),t()}finally{z=n,Bo.transition=r}}function Ch(){return Ke().memoizedState}function sv(e,t,n){var r=zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ph(e))Th(t,n);else if(n=lh(e,t,n,r),n!==null){var i=je();Je(n,e,r,i),Eh(n,t,r)}}function ov(e,t,n){var r=zt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ph(e))Th(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,et(l,o)){var u=t.interleaved;u===null?(i.next=i,Yl(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=lh(e,t,i,r),n!==null&&(i=je(),Je(n,e,r,i),Eh(n,t,r))}}function Ph(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Th(e,t){Fr=_s=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Eh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rl(e,n)}}var Ms={readContext:He,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},av={readContext:He,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:$c,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,as(4194308,4,bh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return as(4194308,4,e,t)},useInsertionEffect:function(e,t){return as(4,2,e,t)},useMemo:function(e,t){var n=nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=sv.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:Wc,useDebugValue:iu,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=Wc(!1),t=e[0];return e=iv.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=nt();if(H){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ue===null)throw Error(P(349));xn&30||ph(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,$c(mh.bind(null,r,s,e),[e]),r.flags|=2048,ui(9,hh.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=nt(),t=ue.identifierPrefix;if(H){var n=dt,r=ct;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ai++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lv={readContext:He,useCallback:Nh,useContext:He,useEffect:ru,useImperativeHandle:jh,useInsertionEffect:yh,useLayoutEffect:wh,useMemo:kh,useReducer:Uo,useRef:vh,useState:function(){return Uo(li)},useDebugValue:iu,useDeferredValue:function(e){var t=Ke();return Sh(t,se.memoizedState,e)},useTransition:function(){var e=Uo(li)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:dh,useSyncExternalStore:fh,useId:Ch,unstable_isNewReconciler:!1},uv={readContext:He,useCallback:Nh,useContext:He,useEffect:ru,useImperativeHandle:jh,useInsertionEffect:yh,useLayoutEffect:wh,useMemo:kh,useReducer:Wo,useRef:vh,useState:function(){return Wo(li)},useDebugValue:iu,useDeferredValue:function(e){var t=Ke();return se===null?t.memoizedState=e:Sh(t,se.memoizedState,e)},useTransition:function(){var e=Wo(li)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:dh,useSyncExternalStore:fh,useId:Ch,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ro={isMounted:function(e){return(e=e._reactInternals)?Nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),i=zt(e),s=ft(r,i);s.payload=t,n!=null&&(s.callback=n),t=It(e,s,i),t!==null&&(Je(t,e,i,r),ss(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),i=zt(e),s=ft(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=It(e,s,i),t!==null&&(Je(t,e,i,r),ss(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=zt(e),i=ft(n,r);i.tag=2,t!=null&&(i.callback=t),t=It(e,i,r),t!==null&&(Je(t,e,r,n),ss(t,e,r))}};function Hc(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!ti(n,r)||!ti(i,s):!0}function Vh(e,t,n){var r=!1,i=Wt,s=t.contextType;return typeof s=="object"&&s!==null?s=He(s):(i=Ee(t)?mn:we.current,r=t.contextTypes,s=(r=r!=null)?Xn(e,i):Wt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ro,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Kc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ro.enqueueReplaceState(t,t.state,null)}function Ba(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ql(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=He(s):(s=Ee(t)?mn:we.current,i.context=Xn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Fa(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ro.enqueueReplaceState(i,i.state,null),Vs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function tr(e,t){try{var n="",r=t;do n+=I0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function $o(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ua(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cv=typeof WeakMap=="function"?WeakMap:Map;function Ah(e,t,n){n=ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Rs||(Rs=!0,Za=r),Ua(e,t)},n}function _h(e,t,n){n=ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ua(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ua(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Gc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=kv.bind(null,e,t,n),t.then(e,e))}function Qc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ft(-1,1),t.tag=2,It(n,t,1))),n.lanes|=1),e)}var dv=wt.ReactCurrentOwner,Pe=!1;function be(e,t,n,r){t.child=e===null?ah(t,null,n,r):Jn(t,e.child,n,r)}function qc(e,t,n,r,i){n=n.render;var s=t.ref;return Qn(t,i),r=tu(e,t,n,r,s,i),n=nu(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(H&&n&&Wl(t),t.flags|=1,be(e,t,r,i),t.child)}function Xc(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!fu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Mh(e,t,s,r,i)):(e=ds(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ti,n(o,r)&&e.ref===t.ref)return vt(e,t,i)}return t.flags|=1,e=Ft(s,r),e.ref=t.ref,e.return=t,t.child=e}function Mh(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ti(s,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,vt(e,t,i)}return Wa(e,t,n,r,i)}function Lh(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(On,Ae),Ae|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(On,Ae),Ae|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,B(On,Ae),Ae|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,B(On,Ae),Ae|=r;return be(e,t,i,n),t.child}function Rh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wa(e,t,n,r,i){var s=Ee(n)?mn:we.current;return s=Xn(t,s),Qn(t,i),n=tu(e,t,n,r,s,i),r=nu(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(H&&r&&Wl(t),t.flags|=1,be(e,t,n,i),t.child)}function Zc(e,t,n,r,i){if(Ee(n)){var s=!0;Ss(t)}else s=!1;if(Qn(t,i),t.stateNode===null)ls(e,t),Vh(t,n,r),Ba(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=He(c):(c=Ee(n)?mn:we.current,c=Xn(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Kc(t,o,r,c),Pt=!1;var p=t.memoizedState;o.state=p,Vs(t,r,o,i),u=t.memoizedState,l!==r||p!==u||Te.current||Pt?(typeof d=="function"&&(Fa(t,n,d,r),u=t.memoizedState),(l=Pt||Hc(t,n,l,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,uh(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ye(t.type,l),o.props=c,f=t.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=He(u):(u=Ee(n)?mn:we.current,u=Xn(t,u));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||p!==u)&&Kc(t,o,r,u),Pt=!1,p=t.memoizedState,o.state=p,Vs(t,r,o,i);var y=t.memoizedState;l!==f||p!==y||Te.current||Pt?(typeof x=="function"&&(Fa(t,n,x,r),y=t.memoizedState),(c=Pt||Hc(t,n,c,r,p,y,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return $a(e,t,n,r,s,i)}function $a(e,t,n,r,i,s){Rh(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Ic(t,n,!1),vt(e,t,s);r=t.stateNode,dv.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Jn(t,e.child,null,s),t.child=Jn(t,null,l,s)):be(e,t,l,s),t.memoizedState=r.state,i&&Ic(t,n,!0),t.child}function Dh(e){var t=e.stateNode;t.pendingContext?Dc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Dc(e,t.context,!1),Xl(e,t.containerInfo)}function Jc(e,t,n,r,i){return Zn(),Hl(i),t.flags|=256,be(e,t,n,r),t.child}var Ha={dehydrated:null,treeContext:null,retryLane:0};function Ka(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ih(e,t,n){var r=t.pendingProps,i=K.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(K,i&1),e===null)return Oa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=oo(o,r,0,null),e=pn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ka(n),t.memoizedState=Ha,e):su(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return fv(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ft(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ft(l,s):(s=pn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Ka(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Ha,r}return s=e.child,e=s.sibling,r=Ft(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function su(e,t){return t=oo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ki(e,t,n,r){return r!==null&&Hl(r),Jn(t,e.child,null,n),e=su(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fv(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=$o(Error(P(422))),Ki(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=oo({mode:"visible",children:r.children},i,0,null),s=pn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Jn(t,e.child,null,o),t.child.memoizedState=Ka(o),t.memoizedState=Ha,s);if(!(t.mode&1))return Ki(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(P(419)),r=$o(s,r,void 0),Ki(e,t,o,r)}if(l=(o&e.childLanes)!==0,Pe||l){if(r=ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xt(e,i),Je(r,e,i,-1))}return du(),r=$o(Error(P(421))),Ki(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Sv.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,_e=Dt(i.nextSibling),Me=t,H=!0,Xe=null,e!==null&&(Be[Ue++]=ct,Be[Ue++]=dt,Be[Ue++]=gn,ct=e.id,dt=e.overflow,gn=t),t=su(t,r.children),t.flags|=4096,t)}function ed(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),za(e.return,t,n)}function Ho(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Oh(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(be(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ed(e,n,t);else if(e.tag===19)ed(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(K,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&As(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ho(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&As(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ho(t,!0,n,null,s);break;case"together":Ho(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ls(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pv(e,t,n){switch(t.tag){case 3:Dh(t),Zn();break;case 5:ch(t);break;case 1:Ee(t.type)&&Ss(t);break;case 4:Xl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Ts,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?Ih(e,t,n):(B(K,K.current&1),e=vt(e,t,n),e!==null?e.sibling:null);B(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Oh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Lh(e,t,n)}return vt(e,t,n)}var zh,Ga,Fh,Bh;zh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ga=function(){};Fh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,cn(st.current);var s=null;switch(n){case"input":i=ma(e,i),r=ma(e,r),s=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),s=[];break;case"textarea":i=va(e,i),r=va(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ns)}wa(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qr.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&U("scroll",e),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};Bh=function(e,t,n,r){n!==r&&(t.flags|=4)};function kr(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hv(e,t,n){var r=t.pendingProps;switch($l(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Ee(t.type)&&ks(),ge(t),null;case 3:return r=t.stateNode,er(),W(Te),W(we),Jl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&($i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(tl(Xe),Xe=null))),Ga(e,t),ge(t),null;case 5:Zl(t);var i=cn(oi.current);if(n=t.type,e!==null&&t.stateNode!=null)Fh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return ge(t),null}if(e=cn(st.current),$i(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[rt]=t,r[ii]=s,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<Ar.length;i++)U(Ar[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":uc(r,s),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},U("invalid",r);break;case"textarea":dc(r,s),U("invalid",r)}wa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Wi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Wi(r.textContent,l,e),i=["children",""+l]):Qr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&U("scroll",r)}switch(n){case"input":Ri(r),cc(r,s,!0);break;case"textarea":Ri(r),fc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ns)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[rt]=t,e[ii]=r,zh(e,t,!1,!1),t.stateNode=e;e:{switch(o=ba(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ar.length;i++)U(Ar[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":uc(e,r),i=ma(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),U("invalid",e);break;case"textarea":dc(e,r),i=va(e,r),U("invalid",e);break;default:i=r}wa(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?vp(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&gp(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Yr(e,u):typeof u=="number"&&Yr(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qr.hasOwnProperty(s)?u!=null&&s==="onScroll"&&U("scroll",e):u!=null&&El(e,s,u,o))}switch(n){case"input":Ri(e),cc(e,r,!1);break;case"textarea":Ri(e),fc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ut(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?$n(e,!!r.multiple,s,!1):r.defaultValue!=null&&$n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ns)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)Bh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=cn(oi.current),cn(st.current),$i(t)){if(r=t.stateNode,n=t.memoizedProps,r[rt]=t,(s=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:Wi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wi(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rt]=t,t.stateNode=r}return ge(t),null;case 13:if(W(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&_e!==null&&t.mode&1&&!(t.flags&128))sh(),Zn(),t.flags|=98560,s=!1;else if(s=$i(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(P(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[rt]=t}else Zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),s=!1}else Xe!==null&&(tl(Xe),Xe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?oe===0&&(oe=3):du())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return er(),Ga(e,t),e===null&&ni(t.stateNode.containerInfo),ge(t),null;case 10:return Ql(t.type._context),ge(t),null;case 17:return Ee(t.type)&&ks(),ge(t),null;case 19:if(W(K),s=t.memoizedState,s===null)return ge(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)kr(s,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=As(e),o!==null){for(t.flags|=128,kr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(K,K.current&1|2),t.child}e=e.sibling}s.tail!==null&&te()>nr&&(t.flags|=128,r=!0,kr(s,!1),t.lanes=4194304)}else{if(!r)if(e=As(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!H)return ge(t),null}else 2*te()-s.renderingStartTime>nr&&n!==1073741824&&(t.flags|=128,r=!0,kr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=te(),t.sibling=null,n=K.current,B(K,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return cu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ae&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function mv(e,t){switch($l(t),t.tag){case 1:return Ee(t.type)&&ks(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return er(),W(Te),W(we),Jl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Zl(t),null;case 13:if(W(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(K),null;case 4:return er(),null;case 10:return Ql(t.type._context),null;case 22:case 23:return cu(),null;case 24:return null;default:return null}}var Gi=!1,ve=!1,gv=typeof WeakSet=="function"?WeakSet:Set,V=null;function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function Qa(e,t,n){try{n()}catch(r){Z(e,t,r)}}var td=!1;function xv(e,t){if(Aa=ws,e=Kp(),Ul(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var x;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(x=f.firstChild)!==null;)p=f,f=x;for(;;){if(f===e)break t;if(p===n&&++c===i&&(l=o),p===s&&++d===r&&(u=o),(x=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(_a={focusedElem:e,selectionRange:n},ws=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,N=y.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ye(t.type,w),N);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(j){Z(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return y=td,td=!1,y}function Br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qa(t,n,s)}i=i.next}while(i!==r)}}function io(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ya(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Uh(e){var t=e.alternate;t!==null&&(e.alternate=null,Uh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rt],delete t[ii],delete t[Ra],delete t[Jx],delete t[ev])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wh(e){return e.tag===5||e.tag===3||e.tag===4}function nd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ns));else if(r!==4&&(e=e.child,e!==null))for(qa(e,t,n),e=e.sibling;e!==null;)qa(e,t,n),e=e.sibling}function Xa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xa(e,t,n),e=e.sibling;e!==null;)Xa(e,t,n),e=e.sibling}var ce=null,qe=!1;function kt(e,t,n){for(n=n.child;n!==null;)$h(e,t,n),n=n.sibling}function $h(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(qs,n)}catch{}switch(n.tag){case 5:ve||In(n,t);case 6:var r=ce,i=qe;ce=null,kt(e,t,n),ce=r,qe=i,ce!==null&&(qe?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(qe?(e=ce,n=n.stateNode,e.nodeType===8?Oo(e.parentNode,n):e.nodeType===1&&Oo(e,n),Jr(e)):Oo(ce,n.stateNode));break;case 4:r=ce,i=qe,ce=n.stateNode.containerInfo,qe=!0,kt(e,t,n),ce=r,qe=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qa(n,t,o),i=i.next}while(i!==r)}kt(e,t,n);break;case 1:if(!ve&&(In(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Z(n,t,l)}kt(e,t,n);break;case 21:kt(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,kt(e,t,n),ve=r):kt(e,t,n);break;default:kt(e,t,n)}}function rd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gv),t.forEach(function(r){var i=Cv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ce=l.stateNode,qe=!1;break e;case 3:ce=l.stateNode.containerInfo,qe=!0;break e;case 4:ce=l.stateNode.containerInfo,qe=!0;break e}l=l.return}if(ce===null)throw Error(P(160));$h(s,o,i),ce=null,qe=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Z(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hh(t,e),t=t.sibling}function Hh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),tt(e),r&4){try{Br(3,e,e.return),io(3,e)}catch(w){Z(e,e.return,w)}try{Br(5,e,e.return)}catch(w){Z(e,e.return,w)}}break;case 1:Ge(t,e),tt(e),r&512&&n!==null&&In(n,n.return);break;case 5:if(Ge(t,e),tt(e),r&512&&n!==null&&In(n,n.return),e.flags&32){var i=e.stateNode;try{Yr(i,"")}catch(w){Z(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&pp(i,s),ba(l,o);var c=ba(l,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?vp(i,f):d==="dangerouslySetInnerHTML"?gp(i,f):d==="children"?Yr(i,f):El(i,d,f,c)}switch(l){case"input":ga(i,s);break;case"textarea":hp(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?$n(i,!!s.multiple,x,!1):p!==!!s.multiple&&(s.defaultValue!=null?$n(i,!!s.multiple,s.defaultValue,!0):$n(i,!!s.multiple,s.multiple?[]:"",!1))}i[ii]=s}catch(w){Z(e,e.return,w)}}break;case 6:if(Ge(t,e),tt(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){Z(e,e.return,w)}}break;case 3:if(Ge(t,e),tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jr(t.containerInfo)}catch(w){Z(e,e.return,w)}break;case 4:Ge(t,e),tt(e);break;case 13:Ge(t,e),tt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lu=te())),r&4&&rd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(c=ve)||d,Ge(t,e),ve=c):Ge(t,e),tt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(V=e,d=e.child;d!==null;){for(f=V=d;V!==null;){switch(p=V,x=p.child,p.tag){case 0:case 11:case 14:case 15:Br(4,p,p.return);break;case 1:In(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){Z(r,n,w)}}break;case 5:In(p,p.return);break;case 22:if(p.memoizedState!==null){sd(f);continue}}x!==null?(x.return=p,V=x):sd(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=xp("display",o))}catch(w){Z(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){Z(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ge(t,e),tt(e),r&4&&rd(e);break;case 21:break;default:Ge(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wh(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yr(i,""),r.flags&=-33);var s=nd(e);Xa(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=nd(e);qa(e,l,o);break;default:throw Error(P(161))}}catch(u){Z(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vv(e,t,n){V=e,Kh(e)}function Kh(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var i=V,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Gi;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ve;l=Gi;var c=ve;if(Gi=o,(ve=u)&&!c)for(V=i;V!==null;)o=V,u=o.child,o.tag===22&&o.memoizedState!==null?od(i):u!==null?(u.return=o,V=u):od(i);for(;s!==null;)V=s,Kh(s),s=s.sibling;V=i,Gi=l,ve=c}id(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,V=s):id(e)}}function id(e){for(;V!==null;){var t=V;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||io(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Uc(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uc(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Jr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ve||t.flags&512&&Ya(t)}catch(p){Z(t,t.return,p)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function sd(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function od(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{io(4,t)}catch(u){Z(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Z(t,i,u)}}var s=t.return;try{Ya(t)}catch(u){Z(t,s,u)}break;case 5:var o=t.return;try{Ya(t)}catch(u){Z(t,o,u)}}}catch(u){Z(t,t.return,u)}if(t===e){V=null;break}var l=t.sibling;if(l!==null){l.return=t.return,V=l;break}V=t.return}}var yv=Math.ceil,Ls=wt.ReactCurrentDispatcher,ou=wt.ReactCurrentOwner,$e=wt.ReactCurrentBatchConfig,I=0,ue=null,re=null,pe=0,Ae=0,On=Yt(0),oe=0,ci=null,vn=0,so=0,au=0,Ur=null,Ce=null,lu=0,nr=1/0,lt=null,Rs=!1,Za=null,Ot=null,Qi=!1,At=null,Ds=0,Wr=0,Ja=null,us=-1,cs=0;function je(){return I&6?te():us!==-1?us:us=te()}function zt(e){return e.mode&1?I&2&&pe!==0?pe&-pe:nv.transition!==null?(cs===0&&(cs=Vp()),cs):(e=z,e!==0||(e=window.event,e=e===void 0?16:Ip(e.type)),e):1}function Je(e,t,n,r){if(50<Wr)throw Wr=0,Ja=null,Error(P(185));ji(e,n,r),(!(I&2)||e!==ue)&&(e===ue&&(!(I&2)&&(so|=n),oe===4&&Et(e,pe)),Ve(e,r),n===1&&I===0&&!(t.mode&1)&&(nr=te()+500,to&&qt()))}function Ve(e,t){var n=e.callbackNode;nx(e,t);var r=ys(e,e===ue?pe:0);if(r===0)n!==null&&mc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mc(n),t===1)e.tag===0?tv(ad.bind(null,e)):nh(ad.bind(null,e)),Xx(function(){!(I&6)&&qt()}),n=null;else{switch(Ap(r)){case 1:n=Ll;break;case 4:n=Tp;break;case 16:n=vs;break;case 536870912:n=Ep;break;default:n=vs}n=em(n,Gh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gh(e,t){if(us=-1,cs=0,I&6)throw Error(P(327));var n=e.callbackNode;if(Yn()&&e.callbackNode!==n)return null;var r=ys(e,e===ue?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Is(e,r);else{t=r;var i=I;I|=2;var s=Yh();(ue!==e||pe!==t)&&(lt=null,nr=te()+500,fn(e,t));do try{jv();break}catch(l){Qh(e,l)}while(!0);Gl(),Ls.current=s,I=i,re!==null?t=0:(ue=null,pe=0,t=oe)}if(t!==0){if(t===2&&(i=Ca(e),i!==0&&(r=i,t=el(e,i))),t===1)throw n=ci,fn(e,0),Et(e,r),Ve(e,te()),n;if(t===6)Et(e,r);else{if(i=e.current.alternate,!(r&30)&&!wv(i)&&(t=Is(e,r),t===2&&(s=Ca(e),s!==0&&(r=s,t=el(e,s))),t===1))throw n=ci,fn(e,0),Et(e,r),Ve(e,te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:sn(e,Ce,lt);break;case 3:if(Et(e,r),(r&130023424)===r&&(t=lu+500-te(),10<t)){if(ys(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=La(sn.bind(null,e,Ce,lt),t);break}sn(e,Ce,lt);break;case 4:if(Et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ze(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yv(r/1960))-r,10<r){e.timeoutHandle=La(sn.bind(null,e,Ce,lt),r);break}sn(e,Ce,lt);break;case 5:sn(e,Ce,lt);break;default:throw Error(P(329))}}}return Ve(e,te()),e.callbackNode===n?Gh.bind(null,e):null}function el(e,t){var n=Ur;return e.current.memoizedState.isDehydrated&&(fn(e,t).flags|=256),e=Is(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&tl(t)),e}function tl(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function wv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!et(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Et(e,t){for(t&=~au,t&=~so,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function ad(e){if(I&6)throw Error(P(327));Yn();var t=ys(e,0);if(!(t&1))return Ve(e,te()),null;var n=Is(e,t);if(e.tag!==0&&n===2){var r=Ca(e);r!==0&&(t=r,n=el(e,r))}if(n===1)throw n=ci,fn(e,0),Et(e,t),Ve(e,te()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,Ce,lt),Ve(e,te()),null}function uu(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(nr=te()+500,to&&qt())}}function yn(e){At!==null&&At.tag===0&&!(I&6)&&Yn();var t=I;I|=1;var n=$e.transition,r=z;try{if($e.transition=null,z=1,e)return e()}finally{z=r,$e.transition=n,I=t,!(I&6)&&qt()}}function cu(){Ae=On.current,W(On)}function fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qx(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch($l(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ks();break;case 3:er(),W(Te),W(we),Jl();break;case 5:Zl(r);break;case 4:er();break;case 13:W(K);break;case 19:W(K);break;case 10:Ql(r.type._context);break;case 22:case 23:cu()}n=n.return}if(ue=e,re=e=Ft(e.current,null),pe=Ae=t,oe=0,ci=null,au=so=vn=0,Ce=Ur=null,un!==null){for(t=0;t<un.length;t++)if(n=un[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}un=null}return e}function Qh(e,t){do{var n=re;try{if(Gl(),os.current=Ms,_s){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_s=!1}if(xn=0,le=se=Q=null,Fr=!1,ai=0,ou.current=null,n===null||n.return===null){oe=1,ci=t,re=null;break}e:{var s=e,o=n.return,l=n,u=t;if(t=pe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Qc(o);if(x!==null){x.flags&=-257,Yc(x,o,l,s,t),x.mode&1&&Gc(s,c,t),t=x,u=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(u),t.updateQueue=w}else y.add(u);break e}else{if(!(t&1)){Gc(s,c,t),du();break e}u=Error(P(426))}}else if(H&&l.mode&1){var N=Qc(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Yc(N,o,l,s,t),Hl(tr(u,l));break e}}s=u=tr(u,l),oe!==4&&(oe=2),Ur===null?Ur=[s]:Ur.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=Ah(s,u,t);Bc(s,m);break e;case 1:l=u;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ot===null||!Ot.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var j=_h(s,l,t);Bc(s,j);break e}}s=s.return}while(s!==null)}Xh(n)}catch(k){t=k,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Yh(){var e=Ls.current;return Ls.current=Ms,e===null?Ms:e}function du(){(oe===0||oe===3||oe===2)&&(oe=4),ue===null||!(vn&268435455)&&!(so&268435455)||Et(ue,pe)}function Is(e,t){var n=I;I|=2;var r=Yh();(ue!==e||pe!==t)&&(lt=null,fn(e,t));do try{bv();break}catch(i){Qh(e,i)}while(!0);if(Gl(),I=n,Ls.current=r,re!==null)throw Error(P(261));return ue=null,pe=0,oe}function bv(){for(;re!==null;)qh(re)}function jv(){for(;re!==null&&!G0();)qh(re)}function qh(e){var t=Jh(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,t===null?Xh(e):re=t,ou.current=null}function Xh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mv(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,re=null;return}}else if(n=hv(n,t,Ae),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);oe===0&&(oe=5)}function sn(e,t,n){var r=z,i=$e.transition;try{$e.transition=null,z=1,Nv(e,t,n,r)}finally{$e.transition=i,z=r}return null}function Nv(e,t,n,r){do Yn();while(At!==null);if(I&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(rx(e,s),e===ue&&(re=ue=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qi||(Qi=!0,em(vs,function(){return Yn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$e.transition,$e.transition=null;var o=z;z=1;var l=I;I|=4,ou.current=null,xv(e,n),Hh(n,e),Wx(_a),ws=!!Aa,_a=Aa=null,e.current=n,vv(n),Q0(),I=l,z=o,$e.transition=s}else e.current=n;if(Qi&&(Qi=!1,At=e,Ds=i),s=e.pendingLanes,s===0&&(Ot=null),X0(n.stateNode),Ve(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Rs)throw Rs=!1,e=Za,Za=null,e;return Ds&1&&e.tag!==0&&Yn(),s=e.pendingLanes,s&1?e===Ja?Wr++:(Wr=0,Ja=e):Wr=0,qt(),null}function Yn(){if(At!==null){var e=Ap(Ds),t=$e.transition,n=z;try{if($e.transition=null,z=16>e?16:e,At===null)var r=!1;else{if(e=At,At=null,Ds=0,I&6)throw Error(P(331));var i=I;for(I|=4,V=e.current;V!==null;){var s=V,o=s.child;if(V.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(V=c;V!==null;){var d=V;switch(d.tag){case 0:case 11:case 15:Br(8,d,s)}var f=d.child;if(f!==null)f.return=d,V=f;else for(;V!==null;){d=V;var p=d.sibling,x=d.return;if(Uh(d),d===c){V=null;break}if(p!==null){p.return=x,V=p;break}V=x}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}V=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,V=o;else e:for(;V!==null;){if(s=V,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Br(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,V=m;break e}V=s.return}}var h=e.current;for(V=h;V!==null;){o=V;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,V=g;else e:for(o=h;V!==null;){if(l=V,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:io(9,l)}}catch(k){Z(l,l.return,k)}if(l===o){V=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,V=j;break e}V=l.return}}if(I=i,qt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(qs,e)}catch{}r=!0}return r}finally{z=n,$e.transition=t}}return!1}function ld(e,t,n){t=tr(n,t),t=Ah(e,t,1),e=It(e,t,1),t=je(),e!==null&&(ji(e,1,t),Ve(e,t))}function Z(e,t,n){if(e.tag===3)ld(e,e,n);else for(;t!==null;){if(t.tag===3){ld(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=tr(n,e),e=_h(t,e,1),t=It(t,e,1),e=je(),t!==null&&(ji(t,1,e),Ve(t,e));break}}t=t.return}}function kv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(pe&n)===n&&(oe===4||oe===3&&(pe&130023424)===pe&&500>te()-lu?fn(e,0):au|=n),Ve(e,t)}function Zh(e,t){t===0&&(e.mode&1?(t=Oi,Oi<<=1,!(Oi&130023424)&&(Oi=4194304)):t=1);var n=je();e=xt(e,t),e!==null&&(ji(e,t,n),Ve(e,n))}function Sv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zh(e,n)}function Cv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Zh(e,n)}var Jh;Jh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,pv(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,H&&t.flags&1048576&&rh(t,Ps,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ls(e,t),e=t.pendingProps;var i=Xn(t,we.current);Qn(t,n),i=tu(null,t,r,e,i,n);var s=nu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(s=!0,Ss(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ql(t),i.updater=ro,t.stateNode=i,i._reactInternals=t,Ba(t,r,e,n),t=$a(null,t,r,!0,s,n)):(t.tag=0,H&&s&&Wl(t),be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ls(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Tv(r),e=Ye(r,e),i){case 0:t=Wa(null,t,r,e,n);break e;case 1:t=Zc(null,t,r,e,n);break e;case 11:t=qc(null,t,r,e,n);break e;case 14:t=Xc(null,t,r,Ye(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Wa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Zc(e,t,r,i,n);case 3:e:{if(Dh(t),e===null)throw Error(P(387));r=t.pendingProps,s=t.memoizedState,i=s.element,uh(e,t),Vs(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=tr(Error(P(423)),t),t=Jc(e,t,r,n,i);break e}else if(r!==i){i=tr(Error(P(424)),t),t=Jc(e,t,r,n,i);break e}else for(_e=Dt(t.stateNode.containerInfo.firstChild),Me=t,H=!0,Xe=null,n=ah(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zn(),r===i){t=vt(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return ch(t),e===null&&Oa(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Ma(r,i)?o=null:s!==null&&Ma(r,s)&&(t.flags|=32),Rh(e,t),be(e,t,o,n),t.child;case 6:return e===null&&Oa(t),null;case 13:return Ih(e,t,n);case 4:return Xl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Jn(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),qc(e,t,r,i,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,B(Ts,r._currentValue),r._currentValue=o,s!==null)if(et(s.value,o)){if(s.children===i.children&&!Te.current){t=vt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=ft(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),za(s.return,n,t),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),za(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Qn(t,n),i=He(i),r=r(i),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),Xc(e,t,r,i,n);case 15:return Mh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),ls(e,t),t.tag=1,Ee(r)?(e=!0,Ss(t)):e=!1,Qn(t,n),Vh(t,r,i),Ba(t,r,i,n),$a(null,t,r,!0,e,n);case 19:return Oh(e,t,n);case 22:return Lh(e,t,n)}throw Error(P(156,t.tag))};function em(e,t){return Pp(e,t)}function Pv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new Pv(e,t,n,r)}function fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tv(e){if(typeof e=="function")return fu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Al)return 11;if(e===_l)return 14}return 2}function Ft(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ds(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")fu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Tn:return pn(n.children,i,s,t);case Vl:o=8,i|=8;break;case da:return e=We(12,n,t,i|2),e.elementType=da,e.lanes=s,e;case fa:return e=We(13,n,t,i),e.elementType=fa,e.lanes=s,e;case pa:return e=We(19,n,t,i),e.elementType=pa,e.lanes=s,e;case cp:return oo(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lp:o=10;break e;case up:o=9;break e;case Al:o=11;break e;case _l:o=14;break e;case Ct:o=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=We(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function pn(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function oo(e,t,n,r){return e=We(22,e,r,t),e.elementType=cp,e.lanes=n,e.stateNode={isHidden:!1},e}function Ko(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function Go(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ev(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Po(0),this.expirationTimes=Po(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Po(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pu(e,t,n,r,i,s,o,l,u){return e=new Ev(e,t,n,l,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=We(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ql(s),e}function Vv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function tm(e){if(!e)return Wt;e=e._reactInternals;e:{if(Nn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ee(n))return th(e,n,t)}return t}function nm(e,t,n,r,i,s,o,l,u){return e=pu(n,r,!0,e,i,s,o,l,u),e.context=tm(null),n=e.current,r=je(),i=zt(n),s=ft(r,i),s.callback=t??null,It(n,s,i),e.current.lanes=i,ji(e,i,r),Ve(e,r),e}function ao(e,t,n,r){var i=t.current,s=je(),o=zt(i);return n=tm(n),t.context===null?t.context=n:t.pendingContext=n,t=ft(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=It(i,t,o),e!==null&&(Je(e,i,o,s),ss(e,i,o)),o}function Os(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ud(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hu(e,t){ud(e,t),(e=e.alternate)&&ud(e,t)}function Av(){return null}var rm=typeof reportError=="function"?reportError:function(e){console.error(e)};function mu(e){this._internalRoot=e}lo.prototype.render=mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));ao(e,t,null,null)};lo.prototype.unmount=mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){ao(null,e,null,null)}),t[gt]=null}};function lo(e){this._internalRoot=e}lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tt.length&&t!==0&&t<Tt[n].priority;n++);Tt.splice(n,0,e),n===0&&Dp(e)}};function gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cd(){}function _v(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Os(o);s.call(c)}}var o=nm(t,r,e,0,null,!1,!1,"",cd);return e._reactRootContainer=o,e[gt]=o.current,ni(e.nodeType===8?e.parentNode:e),yn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Os(u);l.call(c)}}var u=pu(e,0,!1,null,null,!1,!1,"",cd);return e._reactRootContainer=u,e[gt]=u.current,ni(e.nodeType===8?e.parentNode:e),yn(function(){ao(t,u,n,r)}),u}function co(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Os(o);l.call(u)}}ao(t,o,e,i)}else o=_v(n,t,e,i,r);return Os(o)}_p=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vr(t.pendingLanes);n!==0&&(Rl(t,n|1),Ve(t,te()),!(I&6)&&(nr=te()+500,qt()))}break;case 13:yn(function(){var r=xt(e,1);if(r!==null){var i=je();Je(r,e,1,i)}}),hu(e,1)}};Dl=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=je();Je(t,e,134217728,n)}hu(e,134217728)}};Mp=function(e){if(e.tag===13){var t=zt(e),n=xt(e,t);if(n!==null){var r=je();Je(n,e,t,r)}hu(e,t)}};Lp=function(){return z};Rp=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};Na=function(e,t,n){switch(t){case"input":if(ga(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=eo(r);if(!i)throw Error(P(90));fp(r),ga(r,i)}}}break;case"textarea":hp(e,n);break;case"select":t=n.value,t!=null&&$n(e,!!n.multiple,t,!1)}};bp=uu;jp=yn;var Mv={usingClientEntryPoint:!1,Events:[ki,_n,eo,yp,wp,uu]},Sr={findFiberByHostInstance:ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lv={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sp(e),e===null?null:e.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||Av,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yi.isDisabled&&Yi.supportsFiber)try{qs=Yi.inject(Lv),it=Yi}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mv;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gu(t))throw Error(P(200));return Vv(e,t,null,n)};Ie.createRoot=function(e,t){if(!gu(e))throw Error(P(299));var n=!1,r="",i=rm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=pu(e,1,!1,null,null,n,!1,r,i),e[gt]=t.current,ni(e.nodeType===8?e.parentNode:e),new mu(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Sp(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return yn(e)};Ie.hydrate=function(e,t,n){if(!uo(t))throw Error(P(200));return co(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!gu(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=rm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=nm(t,null,e,1,n??null,i,!1,s,o),e[gt]=t.current,ni(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new lo(t)};Ie.render=function(e,t,n){if(!uo(t))throw Error(P(200));return co(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!uo(e))throw Error(P(40));return e._reactRootContainer?(yn(function(){co(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Ie.unstable_batchedUpdates=uu;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!uo(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return co(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function im(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(im)}catch(e){console.error(e)}}im(),ip.exports=Ie;var Rv=ip.exports,dd=Rv;ua.createRoot=dd.createRoot,ua.hydrateRoot=dd.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function di(){return di=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},di.apply(null,arguments)}var _t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_t||(_t={}));const fd="popstate";function Dv(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:l}=r.location;return nl("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:zs(i)}return Ov(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Iv(){return Math.random().toString(36).substr(2,8)}function pd(e,t){return{usr:e.state,key:e.key,idx:t}}function nl(e,t,n,r){return n===void 0&&(n=null),di({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pr(t):t,{state:n,key:t&&t.key||r||Iv()})}function zs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function pr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ov(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=_t.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(di({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=_t.Pop;let N=d(),m=N==null?null:N-c;c=N,u&&u({action:l,location:w.location,delta:m})}function p(N,m){l=_t.Push;let h=nl(w.location,N,m);c=d()+1;let g=pd(h,c),j=w.createHref(h);try{o.pushState(g,"",j)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(j)}s&&u&&u({action:l,location:w.location,delta:1})}function x(N,m){l=_t.Replace;let h=nl(w.location,N,m);c=d();let g=pd(h,c),j=w.createHref(h);o.replaceState(g,"",j),s&&u&&u({action:l,location:w.location,delta:0})}function y(N){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof N=="string"?N:zs(N);return h=h.replace(/ $/,"%20"),Y(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let w={get action(){return l},get location(){return e(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(fd,f),u=N,()=>{i.removeEventListener(fd,f),u=null}},createHref(N){return t(i,N)},createURL:y,encodeLocation(N){let m=y(N);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:x,go(N){return o.go(N)}};return w}var hd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(hd||(hd={}));function zv(e,t,n){return n===void 0&&(n="/"),Fv(e,t,n)}function Fv(e,t,n,r){let i=typeof t=="string"?pr(t):t,s=rr(i.pathname||"/",n);if(s==null)return null;let o=sm(e);Bv(o);let l=null,u=Zv(s);for(let c=0;l==null&&c<o.length;++c)l=qv(o[c],u);return l}function sm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Y(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Bt([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Y(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),sm(s.children,t,d,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:Qv(c,s.index),routesMeta:d})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of om(s.path))i(s,o,u)}),t}function om(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=om(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function Bv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Yv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Uv=/^:[\w-]+$/,Wv=3,$v=2,Hv=1,Kv=10,Gv=-2,md=e=>e==="*";function Qv(e,t){let n=e.split("/"),r=n.length;return n.some(md)&&(r+=Gv),t&&(r+=$v),n.filter(i=>!md(i)).reduce((i,s)=>i+(Uv.test(s)?Wv:s===""?Hv:Kv),r)}function Yv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function qv(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f=rl({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),p=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Bt([s,f.pathname]),pathnameBase:ry(Bt([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Bt([s,f.pathnameBase]))}return o}function rl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Xv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:p,isOptional:x}=d;if(p==="*"){let w=l[f]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const y=l[f];return x&&!y?c[p]=void 0:c[p]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:e}}function Xv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),xu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Zv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return xu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function rr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Jv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ey=e=>Jv.test(e);function ty(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?pr(e):e,s;if(n)if(ey(n))s=n;else{if(n.includes("//")){let o=n;n=am(n),xu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=gd(n.substring(1),"/"):s=gd(n,t)}else s=t;return{pathname:s,search:iy(r),hash:sy(i)}}function gd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Qo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ny(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function vu(e,t){let n=ny(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function yu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=pr(e):(i=di({},e),Y(!i.pathname||!i.pathname.includes("?"),Qo("?","pathname","search",i)),Y(!i.pathname||!i.pathname.includes("#"),Qo("#","pathname","hash",i)),Y(!i.search||!i.search.includes("#"),Qo("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}l=f>=0?t[f]:"/"}let u=ty(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const am=e=>e.replace(/\/\/+/g,"/"),Bt=e=>am(e.join("/")),ry=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),iy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function oy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const lm=["post","put","patch","delete"];new Set(lm);const ay=["get",...lm];new Set(ay);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fi(){return fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fi.apply(null,arguments)}const fo=b.createContext(null),um=b.createContext(null),bt=b.createContext(null),po=b.createContext(null),jt=b.createContext({outlet:null,matches:[],isDataRoute:!1}),cm=b.createContext(null);function ly(e,t){let{relative:n}=t===void 0?{}:t;hr()||Y(!1);let{basename:r,navigator:i}=b.useContext(bt),{hash:s,pathname:o,search:l}=ho(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Bt([r,o])),i.createHref({pathname:u,search:l,hash:s})}function hr(){return b.useContext(po)!=null}function Xt(){return hr()||Y(!1),b.useContext(po).location}function dm(e){b.useContext(bt).static||b.useLayoutEffect(e)}function fm(){let{isDataRoute:e}=b.useContext(jt);return e?by():uy()}function uy(){hr()||Y(!1);let e=b.useContext(fo),{basename:t,future:n,navigator:r}=b.useContext(bt),{matches:i}=b.useContext(jt),{pathname:s}=Xt(),o=JSON.stringify(vu(i,n.v7_relativeSplatPath)),l=b.useRef(!1);return dm(()=>{l.current=!0}),b.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=yu(c,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Bt([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,s,e])}function pm(){let{matches:e}=b.useContext(jt),t=e[e.length-1];return t?t.params:{}}function ho(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(bt),{matches:i}=b.useContext(jt),{pathname:s}=Xt(),o=JSON.stringify(vu(i,r.v7_relativeSplatPath));return b.useMemo(()=>yu(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function cy(e,t){return dy(e,t)}function dy(e,t,n,r){hr()||Y(!1);let{navigator:i}=b.useContext(bt),{matches:s}=b.useContext(jt),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Xt(),d;if(t){var f;let N=typeof t=="string"?pr(t):t;u==="/"||(f=N.pathname)!=null&&f.startsWith(u)||Y(!1),d=N}else d=c;let p=d.pathname||"/",x=p;if(u!=="/"){let N=u.replace(/^\//,"").split("/");x="/"+p.replace(/^\//,"").split("/").slice(N.length).join("/")}let y=zv(e,{pathname:x}),w=gy(y&&y.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:Bt([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:Bt([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return t&&w?b.createElement(po.Provider,{value:{location:fi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:_t.Pop}},w):w}function fy(){let e=wy(),t=oy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const py=b.createElement(fy,null);class hy extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(jt.Provider,{value:this.props.routeContext},b.createElement(cm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function my(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(fo);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(jt.Provider,{value:t},r)}function gy(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||Y(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:x}=n,y=f.route.loader&&p[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||y){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let x,y=!1,w=null,N=null;n&&(x=l&&f.route.id?l[f.route.id]:void 0,w=f.route.errorElement||py,u&&(c<0&&p===0?(jy("route-fallback"),y=!0,N=null):c===p&&(y=!0,N=f.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,p+1)),h=()=>{let g;return x?g=w:y?g=N:f.route.Component?g=b.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,b.createElement(my,{match:f,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?b.createElement(hy,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var hm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(hm||{}),mm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(mm||{});function xy(e){let t=b.useContext(fo);return t||Y(!1),t}function vy(e){let t=b.useContext(um);return t||Y(!1),t}function yy(e){let t=b.useContext(jt);return t||Y(!1),t}function gm(e){let t=yy(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function wy(){var e;let t=b.useContext(cm),n=vy(),r=gm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function by(){let{router:e}=xy(hm.UseNavigateStable),t=gm(mm.UseNavigateStable),n=b.useRef(!1);return dm(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,fi({fromRouteId:t},s)))},[e,t])}const xd={};function jy(e,t,n){xd[e]||(xd[e]=!0)}function Ny(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ky(e){let{to:t,replace:n,state:r,relative:i}=e;hr()||Y(!1);let{future:s,static:o}=b.useContext(bt),{matches:l}=b.useContext(jt),{pathname:u}=Xt(),c=fm(),d=yu(t,vu(l,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return b.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Se(e){Y(!1)}function Sy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=_t.Pop,navigator:s,static:o=!1,future:l}=e;hr()&&Y(!1);let u=t.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:u,navigator:s,static:o,future:fi({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=pr(r));let{pathname:d="/",search:f="",hash:p="",state:x=null,key:y="default"}=r,w=b.useMemo(()=>{let N=rr(d,u);return N==null?null:{location:{pathname:N,search:f,hash:p,state:x,key:y},navigationType:i}},[u,d,f,p,x,y,i]);return w==null?null:b.createElement(bt.Provider,{value:c},b.createElement(po.Provider,{children:n,value:w}))}function Cy(e){let{children:t,location:n}=e;return cy(il(t),n)}new Promise(()=>{});function il(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let s=[...t,i];if(r.type===b.Fragment){n.push.apply(n,il(r.props.children,s));return}r.type!==Se&&Y(!1),!r.props.index||!r.props.children||Y(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=il(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fs(){return Fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fs.apply(null,arguments)}function xm(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Py(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ty(e,t){return e.button===0&&(!t||t==="_self")&&!Py(e)}const Ey=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Vy=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Ay="6";try{window.__reactRouterVersion=Ay}catch{}const _y=b.createContext({isTransitioning:!1}),My="startTransition",vd=k0[My];function Ly(e){let{basename:t,children:n,future:r,window:i}=e,s=b.useRef();s.current==null&&(s.current=Dv({window:i,v5Compat:!0}));let o=s.current,[l,u]=b.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=b.useCallback(f=>{c&&vd?vd(()=>u(f)):u(f)},[u,c]);return b.useLayoutEffect(()=>o.listen(d),[o,d]),b.useEffect(()=>Ny(r),[r]),b.createElement(Sy,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const Ry=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Dy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,F=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f}=t,p=xm(t,Ey),{basename:x}=b.useContext(bt),y,w=!1;if(typeof c=="string"&&Dy.test(c)&&(y=c,Ry))try{let g=new URL(window.location.href),j=c.startsWith("//")?new URL(g.protocol+c):new URL(c),k=rr(j.pathname,x);j.origin===g.origin&&k!=null?c=k+j.search+j.hash:w=!0}catch{}let N=ly(c,{relative:i}),m=Oy(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:f});function h(g){r&&r(g),g.defaultPrevented||m(g)}return b.createElement("a",Fs({},p,{href:y||N,onClick:w||s?r:h,ref:n,target:u}))}),yd=b.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:c,children:d}=t,f=xm(t,Vy),p=ho(u,{relative:f.relative}),x=Xt(),y=b.useContext(um),{navigator:w,basename:N}=b.useContext(bt),m=y!=null&&zy(p)&&c===!0,h=w.encodeLocation?w.encodeLocation(p).pathname:p.pathname,g=x.pathname,j=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(g=g.toLowerCase(),j=j?j.toLowerCase():null,h=h.toLowerCase()),j&&N&&(j=rr(j,N)||j);const k=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let C=g===h||!o&&g.startsWith(h)&&g.charAt(k)==="/",T=j!=null&&(j===h||!o&&j.startsWith(h)&&j.charAt(h.length)==="/"),S={isActive:C,isPending:T,isTransitioning:m},R=C?r:void 0,A;typeof s=="function"?A=s(S):A=[s,C?"active":null,T?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let ne=typeof l=="function"?l(S):l;return b.createElement(F,Fs({},f,{"aria-current":R,className:A,ref:n,style:ne,to:u,viewTransition:c}),typeof d=="function"?d(S):d)});var sl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(sl||(sl={}));var wd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wd||(wd={}));function Iy(e){let t=b.useContext(fo);return t||Y(!1),t}function Oy(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=t===void 0?{}:t,u=fm(),c=Xt(),d=ho(e,{relative:o});return b.useCallback(f=>{if(Ty(f,n)){f.preventDefault();let p=r!==void 0?r:zs(c)===zs(d);u(e,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,e,s,o,l])}function zy(e,t){t===void 0&&(t={});let n=b.useContext(_y);n==null&&Y(!1);let{basename:r}=Iy(sl.useViewTransitionState),i=ho(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=rr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=rr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return rl(i.pathname,o)!=null||rl(i.pathname,s)!=null}const wu=b.createContext({});function bu(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const mo=b.createContext(null),ju=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Fy extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function By({children:e,isPresent:t}){const n=b.useId(),r=b.useRef(null),i=b.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=b.useContext(ju);return b.useInsertionEffect(()=>{const{width:o,height:l,top:u,left:c}=i.current;if(t||!r.current||!o||!l)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return s&&(d.nonce=s),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${l}px !important;
            top: ${u}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),a.jsx(Fy,{isPresent:t,childRef:r,sizeRef:i,children:b.cloneElement(e,{ref:r})})}const Uy=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const l=bu(Wy),u=b.useId(),c=b.useCallback(f=>{l.set(f,!0);for(const p of l.values())if(!p)return;r&&r()},[l,r]),d=b.useMemo(()=>({id:u,initial:t,isPresent:n,custom:i,onExitComplete:c,register:f=>(l.set(f,!1),()=>l.delete(f))}),s?[Math.random(),c]:[n,c]);return b.useMemo(()=>{l.forEach((f,p)=>l.set(p,!1))},[n]),b.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),o==="popLayout"&&(e=a.jsx(By,{isPresent:n,children:e})),a.jsx(mo.Provider,{value:d,children:e})};function Wy(){return new Map}function vm(e=!0){const t=b.useContext(mo);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=b.useId();b.useEffect(()=>{e&&i(s)},[e]);const o=b.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,o]:[!0]}const qi=e=>e.key||"";function bd(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const Nu=typeof window<"u",ym=Nu?b.useLayoutEffect:b.useEffect,wn=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1})=>{const[l,u]=vm(o),c=b.useMemo(()=>bd(e),[e]),d=o&&!l?[]:c.map(qi),f=b.useRef(!0),p=b.useRef(c),x=bu(()=>new Map),[y,w]=b.useState(c),[N,m]=b.useState(c);ym(()=>{f.current=!1,p.current=c;for(let j=0;j<N.length;j++){const k=qi(N[j]);d.includes(k)?x.delete(k):x.get(k)!==!0&&x.set(k,!1)}},[N,d.length,d.join("-")]);const h=[];if(c!==y){let j=[...c];for(let k=0;k<N.length;k++){const C=N[k],T=qi(C);d.includes(T)||(j.splice(k,0,C),h.push(C))}s==="wait"&&h.length&&(j=h),m(bd(j)),w(c);return}const{forceRender:g}=b.useContext(wu);return a.jsx(a.Fragment,{children:N.map(j=>{const k=qi(j),C=o&&!l?!1:c===N||d.includes(k),T=()=>{if(x.has(k))x.set(k,!0);else return;let S=!0;x.forEach(R=>{R||(S=!1)}),S&&(g==null||g(),m(p.current),o&&(u==null||u()),r&&r())};return a.jsx(Uy,{isPresent:C,initial:!f.current||n?void 0:!1,custom:C?void 0:t,presenceAffectsLayout:i,mode:s,onExitComplete:C?void 0:T,children:j},k)})})},Le=e=>e;let wm=Le;function ku(e){let t;return()=>(t===void 0&&(t=e()),t)}const ir=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},pt=e=>e*1e3,ht=e=>e/1e3,$y={useManualTiming:!1};function Hy(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function l(c){s.has(c)&&(u.schedule(c),e()),c(o)}const u={schedule:(c,d=!1,f=!1)=>{const x=f&&r?t:n;return d&&s.add(c),x.has(c)||x.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(l),t.clear(),r=!1,i&&(i=!1,u.process(c))}};return u}const Xi=["read","resolveKeyframes","update","preRender","render","postRender"],Ky=40;function bm(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Xi.reduce((m,h)=>(m[h]=Hy(s),m),{}),{read:l,resolveKeyframes:u,update:c,preRender:d,render:f,postRender:p}=o,x=()=>{const m=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(m-i.timestamp,Ky),1),i.timestamp=m,i.isProcessing=!0,l.process(i),u.process(i),c.process(i),d.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(x))},y=()=>{n=!0,r=!0,i.isProcessing||e(x)};return{schedule:Xi.reduce((m,h)=>{const g=o[h];return m[h]=(j,k=!1,C=!1)=>(n||y(),g.schedule(j,k,C)),m},{}),cancel:m=>{for(let h=0;h<Xi.length;h++)o[Xi[h]].cancel(m)},state:i,steps:o}}const{schedule:$,cancel:$t,state:de,steps:Yo}=bm(typeof requestAnimationFrame<"u"?requestAnimationFrame:Le,!0),jm=b.createContext({strict:!1}),jd={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},sr={};for(const e in jd)sr[e]={isEnabled:t=>jd[e].some(n=>!!t[n])};function Gy(e){for(const t in e)sr[t]={...sr[t],...e[t]}}const Qy=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Bs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Qy.has(e)}let Nm=e=>!Bs(e);function Yy(e){e&&(Nm=t=>t.startsWith("on")?!Bs(t):e(t))}try{Yy(require("@emotion/is-prop-valid").default)}catch{}function qy(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Nm(i)||n===!0&&Bs(i)||!t&&!Bs(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function Xy(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const go=b.createContext({});function pi(e){return typeof e=="string"||Array.isArray(e)}function xo(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Su=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Cu=["initial",...Su];function vo(e){return xo(e.animate)||Cu.some(t=>pi(e[t]))}function km(e){return!!(vo(e)||e.variants)}function Zy(e,t){if(vo(e)){const{initial:n,animate:r}=e;return{initial:n===!1||pi(n)?n:void 0,animate:pi(r)?r:void 0}}return e.inherit!==!1?t:{}}function Jy(e){const{initial:t,animate:n}=Zy(e,b.useContext(go));return b.useMemo(()=>({initial:t,animate:n}),[Nd(t),Nd(n)])}function Nd(e){return Array.isArray(e)?e.join(" "):e}const e1=Symbol.for("motionComponentSymbol");function zn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function t1(e,t,n){return b.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):zn(n)&&(n.current=r))},[t])}const Pu=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),n1="framerAppearId",Sm="data-"+Pu(n1),{schedule:Tu}=bm(queueMicrotask,!1),Cm=b.createContext({});function r1(e,t,n,r,i){var s,o;const{visualElement:l}=b.useContext(go),u=b.useContext(jm),c=b.useContext(mo),d=b.useContext(ju).reducedMotion,f=b.useRef(null);r=r||u.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:l,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d}));const p=f.current,x=b.useContext(Cm);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&i1(f.current,n,i,x);const y=b.useRef(!1);b.useInsertionEffect(()=>{p&&y.current&&p.update(n,c)});const w=n[Sm],N=b.useRef(!!w&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,w))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,w)));return ym(()=>{p&&(y.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),Tu.render(p.render),N.current&&p.animationState&&p.animationState.animateChanges())}),b.useEffect(()=>{p&&(!N.current&&p.animationState&&p.animationState.animateChanges(),N.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)===null||m===void 0||m.call(window,w)}),N.current=!1))}),p}function i1(e,t,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:l,layoutScroll:u,layoutRoot:c}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Pm(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||l&&zn(l),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:u,layoutRoot:c})}function Pm(e){if(e)return e.options.allowProjection!==!1?e.projection:Pm(e.parent)}function s1({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var s,o;e&&Gy(e);function l(c,d){let f;const p={...b.useContext(ju),...c,layoutId:o1(c)},{isStatic:x}=p,y=Jy(c),w=r(c,x);if(!x&&Nu){a1();const N=l1(p);f=N.MeasureLayout,y.visualElement=r1(i,w,p,t,N.ProjectionNode)}return a.jsxs(go.Provider,{value:y,children:[f&&y.visualElement?a.jsx(f,{visualElement:y.visualElement,...p}):null,n(i,c,t1(w,y.visualElement,d),w,x,y.visualElement)]})}l.displayName=`motion.${typeof i=="string"?i:`create(${(o=(s=i.displayName)!==null&&s!==void 0?s:i.name)!==null&&o!==void 0?o:""})`}`;const u=b.forwardRef(l);return u[e1]=i,u}function o1({layoutId:e}){const t=b.useContext(wu).id;return t&&e!==void 0?t+"-"+e:e}function a1(e,t){b.useContext(jm).strict}function l1(e){const{drag:t,layout:n}=sr;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const u1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Eu(e){return typeof e!="string"||e.includes("-")?!1:!!(u1.indexOf(e)>-1||/[A-Z]/u.test(e))}function kd(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Vu(e,t,n,r){if(typeof t=="function"){const[i,s]=kd(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=kd(r);t=t(n!==void 0?n:e.custom,i,s)}return t}const ol=e=>Array.isArray(e),c1=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),d1=e=>ol(e)?e[e.length-1]||0:e,ye=e=>!!(e&&e.getVelocity);function fs(e){const t=ye(e)?e.get():e;return c1(t)?t.toValue():t}function f1({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,s){const o={latestValues:p1(r,i,s,e),renderState:t()};return n&&(o.onMount=l=>n({props:r,current:l,...o}),o.onUpdate=l=>n(l)),o}const Tm=e=>(t,n)=>{const r=b.useContext(go),i=b.useContext(mo),s=()=>f1(e,t,r,i);return n?s():bu(s)};function p1(e,t,n,r){const i={},s=r(e,{});for(const p in s)i[p]=fs(s[p]);let{initial:o,animate:l}=e;const u=vo(e),c=km(e);t&&c&&!u&&e.inherit!==!1&&(o===void 0&&(o=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const f=d?l:o;if(f&&typeof f!="boolean"&&!xo(f)){const p=Array.isArray(f)?f:[f];for(let x=0;x<p.length;x++){const y=Vu(e,p[x]);if(y){const{transitionEnd:w,transition:N,...m}=y;for(const h in m){let g=m[h];if(Array.isArray(g)){const j=d?g.length-1:0;g=g[j]}g!==null&&(i[h]=g)}for(const h in w)i[h]=w[h]}}}return i}const mr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],kn=new Set(mr),Em=e=>t=>typeof t=="string"&&t.startsWith(e),Vm=Em("--"),h1=Em("var(--"),Au=e=>h1(e)?m1.test(e.split("/*")[0].trim()):!1,m1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Am=(e,t)=>t&&typeof e=="number"?t.transform(e):e,yt=(e,t,n)=>n>t?t:n<e?e:n,gr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},hi={...gr,transform:e=>yt(0,1,e)},Zi={...gr,default:1},Ci=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),St=Ci("deg"),ot=Ci("%"),_=Ci("px"),g1=Ci("vh"),x1=Ci("vw"),Sd={...ot,parse:e=>ot.parse(e)/100,transform:e=>ot.transform(e*100)},v1={borderWidth:_,borderTopWidth:_,borderRightWidth:_,borderBottomWidth:_,borderLeftWidth:_,borderRadius:_,radius:_,borderTopLeftRadius:_,borderTopRightRadius:_,borderBottomRightRadius:_,borderBottomLeftRadius:_,width:_,maxWidth:_,height:_,maxHeight:_,top:_,right:_,bottom:_,left:_,padding:_,paddingTop:_,paddingRight:_,paddingBottom:_,paddingLeft:_,margin:_,marginTop:_,marginRight:_,marginBottom:_,marginLeft:_,backgroundPositionX:_,backgroundPositionY:_},y1={rotate:St,rotateX:St,rotateY:St,rotateZ:St,scale:Zi,scaleX:Zi,scaleY:Zi,scaleZ:Zi,skew:St,skewX:St,skewY:St,distance:_,translateX:_,translateY:_,translateZ:_,x:_,y:_,z:_,perspective:_,transformPerspective:_,opacity:hi,originX:Sd,originY:Sd,originZ:_},Cd={...gr,transform:Math.round},_u={...v1,...y1,zIndex:Cd,size:_,fillOpacity:hi,strokeOpacity:hi,numOctaves:Cd},w1={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},b1=mr.length;function j1(e,t,n){let r="",i=!0;for(let s=0;s<b1;s++){const o=mr[s],l=e[o];if(l===void 0)continue;let u=!0;if(typeof l=="number"?u=l===(o.startsWith("scale")?1:0):u=parseFloat(l)===0,!u||n){const c=Am(l,_u[o]);if(!u){i=!1;const d=w1[o]||o;r+=`${d}(${c}) `}n&&(t[o]=c)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Mu(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let o=!1,l=!1;for(const u in t){const c=t[u];if(kn.has(u)){o=!0;continue}else if(Vm(u)){i[u]=c;continue}else{const d=Am(c,_u[u]);u.startsWith("origin")?(l=!0,s[u]=d):r[u]=d}}if(t.transform||(o||n?r.transform=j1(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:u="50%",originY:c="50%",originZ:d=0}=s;r.transformOrigin=`${u} ${c} ${d}`}}const N1={offset:"stroke-dashoffset",array:"stroke-dasharray"},k1={offset:"strokeDashoffset",array:"strokeDasharray"};function S1(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?N1:k1;e[s.offset]=_.transform(-r);const o=_.transform(t),l=_.transform(n);e[s.array]=`${o} ${l}`}function Pd(e,t,n){return typeof e=="string"?e:_.transform(t+n*e)}function C1(e,t,n){const r=Pd(t,e.x,e.width),i=Pd(n,e.y,e.height);return`${r} ${i}`}function Lu(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...c},d,f){if(Mu(e,c,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:x,dimensions:y}=e;p.transform&&(y&&(x.transform=p.transform),delete p.transform),y&&(i!==void 0||s!==void 0||x.transform)&&(x.transformOrigin=C1(y,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&S1(p,o,l,u,!1)}const Ru=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),_m=()=>({...Ru(),attrs:{}}),Du=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Mm(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const Lm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Rm(e,t,n,r){Mm(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Lm.has(i)?i:Pu(i),t.attrs[i])}const Us={};function P1(e){Object.assign(Us,e)}function Dm(e,{layout:t,layoutId:n}){return kn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Us[e]||e==="opacity")}function Iu(e,t,n){var r;const{style:i}=e,s={};for(const o in i)(ye(i[o])||t.style&&ye(t.style[o])||Dm(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[o]=i[o]);return s}function Im(e,t,n){const r=Iu(e,t,n);for(const i in e)if(ye(e[i])||ye(t[i])){const s=mr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}function T1(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Td=["x","y","width","height","cx","cy","r"],E1={useVisualState:Tm({scrapeMotionValuesFromProps:Im,createRenderState:_m,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!e.drag;if(!s){for(const l in i)if(kn.has(l)){s=!0;break}}if(!s)return;let o=!t;if(t)for(let l=0;l<Td.length;l++){const u=Td[l];e[u]!==t[u]&&(o=!0)}o&&$.read(()=>{T1(n,r),$.render(()=>{Lu(r,i,Du(n.tagName),e.transformTemplate),Rm(n,r)})})}})},V1={useVisualState:Tm({scrapeMotionValuesFromProps:Iu,createRenderState:Ru})};function Om(e,t,n){for(const r in t)!ye(t[r])&&!Dm(r,n)&&(e[r]=t[r])}function A1({transformTemplate:e},t){return b.useMemo(()=>{const n=Ru();return Mu(n,t,e),Object.assign({},n.vars,n.style)},[t])}function _1(e,t){const n=e.style||{},r={};return Om(r,n,e),Object.assign(r,A1(e,t)),r}function M1(e,t){const n={},r=_1(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function L1(e,t,n,r){const i=b.useMemo(()=>{const s=_m();return Lu(s,t,Du(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};Om(s,e.style,e),i.style={...s,...i.style}}return i}function R1(e=!1){return(n,r,i,{latestValues:s},o)=>{const u=(Eu(n)?L1:M1)(r,s,o,n),c=qy(r,typeof n=="string",e),d=n!==b.Fragment?{...c,...u,ref:i}:{},{children:f}=r,p=b.useMemo(()=>ye(f)?f.get():f,[f]);return b.createElement(n,{...d,children:p})}}function D1(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...Eu(r)?E1:V1,preloadedFeatures:e,useRender:R1(i),createVisualElement:t,Component:r};return s1(o)}}function zm(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function yo(e,t,n){const r=e.getProps();return Vu(r,t,n!==void 0?n:r.custom,e)}const I1=ku(()=>window.ScrollTimeline!==void 0);class O1{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(I1()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class z1 extends O1{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Ou(e,t){return e?e[t]||e.default||e:void 0}const al=2e4;function Fm(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<al;)t+=n,r=e.next(t);return t>=al?1/0:t}function zu(e){return typeof e=="function"}function Ed(e,t){e.timeline=t,e.onfinish=null}const Fu=e=>Array.isArray(e)&&typeof e[0]=="number",F1={linearEasing:void 0};function B1(e,t){const n=ku(e);return()=>{var r;return(r=F1[t])!==null&&r!==void 0?r:n()}}const Ws=B1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Bm=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=e(ir(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function Um(e){return!!(typeof e=="function"&&Ws()||!e||typeof e=="string"&&(e in ll||Ws())||Fu(e)||Array.isArray(e)&&e.every(Um))}const _r=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,ll={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:_r([0,.65,.55,1]),circOut:_r([.55,0,1,.45]),backIn:_r([.31,.01,.66,-.59]),backOut:_r([.33,1.53,.69,.99])};function Wm(e,t){if(e)return typeof e=="function"&&Ws()?Bm(e,t):Fu(e)?_r(e):Array.isArray(e)?e.map(n=>Wm(n,t)||ll.easeOut):ll[e]}const Qe={x:!1,y:!1};function $m(){return Qe.x||Qe.y}function Hm(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const s=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}function Km(e,t){const n=Hm(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Vd(e){return t=>{t.pointerType==="touch"||$m()||e(t)}}function U1(e,t,n={}){const[r,i,s]=Km(e,n),o=Vd(l=>{const{target:u}=l,c=t(l);if(typeof c!="function"||!u)return;const d=Vd(f=>{c(f),u.removeEventListener("pointerleave",d)});u.addEventListener("pointerleave",d,i)});return r.forEach(l=>{l.addEventListener("pointerenter",o,i)}),s}const Gm=(e,t)=>t?e===t?!0:Gm(e,t.parentElement):!1,Bu=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,W1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function $1(e){return W1.has(e.tagName)||e.tabIndex!==-1}const Mr=new WeakSet;function Ad(e){return t=>{t.key==="Enter"&&e(t)}}function qo(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const H1=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Ad(()=>{if(Mr.has(n))return;qo(n,"down");const i=Ad(()=>{qo(n,"up")}),s=()=>qo(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function _d(e){return Bu(e)&&!$m()}function K1(e,t,n={}){const[r,i,s]=Km(e,n),o=l=>{const u=l.currentTarget;if(!_d(l)||Mr.has(u))return;Mr.add(u);const c=t(l),d=(x,y)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!_d(x)||!Mr.has(u))&&(Mr.delete(u),typeof c=="function"&&c(x,{success:y}))},f=x=>{d(x,n.useGlobalTarget||Gm(u,x.target))},p=x=>{d(x,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(l=>{!$1(l)&&l.getAttribute("tabindex")===null&&(l.tabIndex=0),(n.useGlobalTarget?window:l).addEventListener("pointerdown",o,i),l.addEventListener("focus",c=>H1(c,i),i)}),s}function G1(e){return e==="x"||e==="y"?Qe[e]?null:(Qe[e]=!0,()=>{Qe[e]=!1}):Qe.x||Qe.y?null:(Qe.x=Qe.y=!0,()=>{Qe.x=Qe.y=!1})}const Qm=new Set(["width","height","top","left","right","bottom",...mr]);let ps;function Q1(){ps=void 0}const at={now:()=>(ps===void 0&&at.set(de.isProcessing||$y.useManualTiming?de.timestamp:performance.now()),ps),set:e=>{ps=e,queueMicrotask(Q1)}};function Uu(e,t){e.indexOf(t)===-1&&e.push(t)}function Wu(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class $u{constructor(){this.subscriptions=[]}add(t){return Uu(this.subscriptions,t),()=>Wu(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Ym(e,t){return t?e*(1e3/t):0}const Md=30,Y1=e=>!isNaN(parseFloat(e));class q1{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=at.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=at.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Y1(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new $u);const r=this.events[t].add(n);return t==="change"?()=>{r(),$.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=at.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Md)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Md);return Ym(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function mi(e,t){return new q1(e,t)}function X1(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,mi(n))}function Z1(e,t){const n=yo(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const l=d1(s[o]);X1(e,o,l)}}function J1(e){return!!(ye(e)&&e.add)}function ul(e,t){const n=e.getValue("willChange");if(J1(n))return n.add(t)}function qm(e){return e.props[Sm]}const Xm=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,ew=1e-7,tw=12;function nw(e,t,n,r,i){let s,o,l=0;do o=t+(n-t)/2,s=Xm(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>ew&&++l<tw);return o}function Pi(e,t,n,r){if(e===t&&n===r)return Le;const i=s=>nw(s,0,1,e,n);return s=>s===0||s===1?s:Xm(i(s),t,r)}const Zm=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Jm=e=>t=>1-e(1-t),eg=Pi(.33,1.53,.69,.99),Hu=Jm(eg),tg=Zm(Hu),ng=e=>(e*=2)<1?.5*Hu(e):.5*(2-Math.pow(2,-10*(e-1))),Ku=e=>1-Math.sin(Math.acos(e)),rg=Jm(Ku),ig=Zm(Ku),sg=e=>/^0[^.\s]+$/u.test(e);function rw(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||sg(e):!0}const $r=e=>Math.round(e*1e5)/1e5,Gu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function iw(e){return e==null}const sw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Qu=(e,t)=>n=>!!(typeof n=="string"&&sw.test(n)&&n.startsWith(e)||t&&!iw(n)&&Object.prototype.hasOwnProperty.call(n,t)),og=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,l]=r.match(Gu);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:l!==void 0?parseFloat(l):1}},ow=e=>yt(0,255,e),Xo={...gr,transform:e=>Math.round(ow(e))},dn={test:Qu("rgb","red"),parse:og("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Xo.transform(e)+", "+Xo.transform(t)+", "+Xo.transform(n)+", "+$r(hi.transform(r))+")"};function aw(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const cl={test:Qu("#"),parse:aw,transform:dn.transform},Fn={test:Qu("hsl","hue"),parse:og("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ot.transform($r(t))+", "+ot.transform($r(n))+", "+$r(hi.transform(r))+")"},xe={test:e=>dn.test(e)||cl.test(e)||Fn.test(e),parse:e=>dn.test(e)?dn.parse(e):Fn.test(e)?Fn.parse(e):cl.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?dn.transform(e):Fn.transform(e)},lw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function uw(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Gu))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(lw))===null||n===void 0?void 0:n.length)||0)>0}const ag="number",lg="color",cw="var",dw="var(",Ld="${}",fw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function gi(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const l=t.replace(fw,u=>(xe.test(u)?(r.color.push(s),i.push(lg),n.push(xe.parse(u))):u.startsWith(dw)?(r.var.push(s),i.push(cw),n.push(u)):(r.number.push(s),i.push(ag),n.push(parseFloat(u))),++s,Ld)).split(Ld);return{values:n,split:l,indexes:r,types:i}}function ug(e){return gi(e).values}function cg(e){const{split:t,types:n}=gi(e),r=t.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=t[o],i[o]!==void 0){const l=n[o];l===ag?s+=$r(i[o]):l===lg?s+=xe.transform(i[o]):s+=i[o]}return s}}const pw=e=>typeof e=="number"?0:e;function hw(e){const t=ug(e);return cg(e)(t.map(pw))}const Ht={test:uw,parse:ug,createTransformer:cg,getAnimatableNone:hw},mw=new Set(["brightness","contrast","saturate","opacity"]);function gw(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Gu)||[];if(!r)return e;const i=n.replace(r,"");let s=mw.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const xw=/\b([a-z-]*)\(.*?\)/gu,dl={...Ht,getAnimatableNone:e=>{const t=e.match(xw);return t?t.map(gw).join(" "):e}},vw={..._u,color:xe,backgroundColor:xe,outlineColor:xe,fill:xe,stroke:xe,borderColor:xe,borderTopColor:xe,borderRightColor:xe,borderBottomColor:xe,borderLeftColor:xe,filter:dl,WebkitFilter:dl},Yu=e=>vw[e];function dg(e,t){let n=Yu(e);return n!==dl&&(n=Ht),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const yw=new Set(["auto","none","0"]);function ww(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!yw.has(s)&&gi(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=dg(n,i)}const Rd=e=>e===gr||e===_,Dd=(e,t)=>parseFloat(e.split(", ")[t]),Id=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Dd(i[1],t);{const s=r.match(/^matrix\((.+)\)$/u);return s?Dd(s[1],e):0}},bw=new Set(["x","y","z"]),jw=mr.filter(e=>!bw.has(e));function Nw(e){const t=[];return jw.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const or={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Id(4,13),y:Id(5,14)};or.translateX=or.x;or.translateY=or.y;const hn=new Set;let fl=!1,pl=!1;function fg(){if(pl){const e=Array.from(hn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=Nw(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var l;(l=r.getValue(s))===null||l===void 0||l.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}pl=!1,fl=!1,hn.forEach(e=>e.complete()),hn.clear()}function pg(){hn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(pl=!0)})}function kw(){pg(),fg()}class qu{constructor(t,n,r,i,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(hn.add(this),fl||(fl=!0,$.read(pg),$.resolveKeyframes(fg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const o=i==null?void 0:i.get(),l=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const u=r.readValue(n,l);u!=null&&(t[0]=u)}t[0]===void 0&&(t[0]=l),i&&o===void 0&&i.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),hn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,hn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const hg=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Sw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Cw(e){const t=Sw.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function mg(e,t,n=1){const[r,i]=Cw(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return hg(o)?parseFloat(o):o}return Au(i)?mg(i,t,n+1):i}const gg=e=>t=>t.test(e),Pw={test:e=>e==="auto",parse:e=>e},xg=[gr,_,ot,St,x1,g1,Pw],Od=e=>xg.find(gg(e));class vg extends qu{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<t.length;u++){let c=t[u];if(typeof c=="string"&&(c=c.trim(),Au(c))){const d=mg(c,n.current);d!==void 0&&(t[u]=d),u===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Qm.has(r)||t.length!==2)return;const[i,s]=t,o=Od(i),l=Od(s);if(o!==l)if(Rd(o)&&Rd(l))for(let u=0;u<t.length;u++){const c=t[u];typeof c=="string"&&(t[u]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)rw(t[i])&&r.push(i);r.length&&ww(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=or[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const o=i.length-1,l=i[o];i[o]=or[r](n.measureViewportBox(),window.getComputedStyle(n.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([u,c])=>{n.getValue(u).set(c)}),this.resolveNoneKeyframes()}}const zd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Ht.test(e)||e==="0")&&!e.startsWith("url("));function Tw(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Ew(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],o=zd(i,t),l=zd(s,t);return!o||!l?!1:Tw(e)||(n==="spring"||zu(n))&&r}const Vw=e=>e!==null;function wo(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(Vw),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const Aw=40;class yg{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",...l}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=at.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,...l},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Aw?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&kw(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=at.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:o,onComplete:l,onUpdate:u,isGenerator:c}=this.options;if(!c&&!Ew(t,r,i,s))if(o)this.options.duration=0;else{u&&u(wo(t,this.options,n)),l&&l(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const G=(e,t,n)=>e+(t-e)*n;function Zo(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function _w({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const l=n<.5?n*(1+t):n+t-n*t,u=2*n-l;i=Zo(u,l,e+1/3),s=Zo(u,l,e),o=Zo(u,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function $s(e,t){return n=>n>0?t:e}const Jo=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Mw=[cl,dn,Fn],Lw=e=>Mw.find(t=>t.test(e));function Fd(e){const t=Lw(e);if(!t)return!1;let n=t.parse(e);return t===Fn&&(n=_w(n)),n}const Bd=(e,t)=>{const n=Fd(e),r=Fd(t);if(!n||!r)return $s(e,t);const i={...n};return s=>(i.red=Jo(n.red,r.red,s),i.green=Jo(n.green,r.green,s),i.blue=Jo(n.blue,r.blue,s),i.alpha=G(n.alpha,r.alpha,s),dn.transform(i))},Rw=(e,t)=>n=>t(e(n)),Ti=(...e)=>e.reduce(Rw),hl=new Set(["none","hidden"]);function Dw(e,t){return hl.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Iw(e,t){return n=>G(e,t,n)}function Xu(e){return typeof e=="number"?Iw:typeof e=="string"?Au(e)?$s:xe.test(e)?Bd:Fw:Array.isArray(e)?wg:typeof e=="object"?xe.test(e)?Bd:Ow:$s}function wg(e,t){const n=[...e],r=n.length,i=e.map((s,o)=>Xu(s)(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function Ow(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Xu(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function zw(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const o=t.types[s],l=e.indexes[o][i[o]],u=(n=e.values[l])!==null&&n!==void 0?n:0;r[s]=u,i[o]++}return r}const Fw=(e,t)=>{const n=Ht.createTransformer(t),r=gi(e),i=gi(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?hl.has(e)&&!i.values.length||hl.has(t)&&!r.values.length?Dw(e,t):Ti(wg(zw(r,i),i.values),n):$s(e,t)};function bg(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?G(e,t,n):Xu(e)(e,t)}const Bw=5;function jg(e,t,n){const r=Math.max(t-Bw,0);return Ym(n-e(r),t-r)}const X={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ea=.001;function Uw({duration:e=X.duration,bounce:t=X.bounce,velocity:n=X.velocity,mass:r=X.mass}){let i,s,o=1-t;o=yt(X.minDamping,X.maxDamping,o),e=yt(X.minDuration,X.maxDuration,ht(e)),o<1?(i=c=>{const d=c*o,f=d*e,p=d-n,x=ml(c,o),y=Math.exp(-f);return ea-p/x*y},s=c=>{const f=c*o*e,p=f*n+n,x=Math.pow(o,2)*Math.pow(c,2)*e,y=Math.exp(-f),w=ml(Math.pow(c,2),o);return(-i(c)+ea>0?-1:1)*((p-x)*y)/w}):(i=c=>{const d=Math.exp(-c*e),f=(c-n)*e+1;return-ea+d*f},s=c=>{const d=Math.exp(-c*e),f=(n-c)*(e*e);return d*f});const l=5/e,u=$w(i,s,l);if(e=pt(e),isNaN(u))return{stiffness:X.stiffness,damping:X.damping,duration:e};{const c=Math.pow(u,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:e}}}const Ww=12;function $w(e,t,n){let r=n;for(let i=1;i<Ww;i++)r=r-e(r)/t(r);return r}function ml(e,t){return e*Math.sqrt(1-t*t)}const Hw=["duration","bounce"],Kw=["stiffness","damping","mass"];function Ud(e,t){return t.some(n=>e[n]!==void 0)}function Gw(e){let t={velocity:X.velocity,stiffness:X.stiffness,damping:X.damping,mass:X.mass,isResolvedFromDuration:!1,...e};if(!Ud(e,Kw)&&Ud(e,Hw))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*yt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:X.mass,stiffness:i,damping:s}}else{const n=Uw(e);t={...t,...n,mass:X.mass},t.isResolvedFromDuration=!0}return t}function Ng(e=X.visualDuration,t=X.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],l={done:!1,value:s},{stiffness:u,damping:c,mass:d,duration:f,velocity:p,isResolvedFromDuration:x}=Gw({...n,velocity:-ht(n.velocity||0)}),y=p||0,w=c/(2*Math.sqrt(u*d)),N=o-s,m=ht(Math.sqrt(u/d)),h=Math.abs(N)<5;r||(r=h?X.restSpeed.granular:X.restSpeed.default),i||(i=h?X.restDelta.granular:X.restDelta.default);let g;if(w<1){const k=ml(m,w);g=C=>{const T=Math.exp(-w*m*C);return o-T*((y+w*m*N)/k*Math.sin(k*C)+N*Math.cos(k*C))}}else if(w===1)g=k=>o-Math.exp(-m*k)*(N+(y+m*N)*k);else{const k=m*Math.sqrt(w*w-1);g=C=>{const T=Math.exp(-w*m*C),S=Math.min(k*C,300);return o-T*((y+w*m*N)*Math.sinh(S)+k*N*Math.cosh(S))/k}}const j={calculatedDuration:x&&f||null,next:k=>{const C=g(k);if(x)l.done=k>=f;else{let T=0;w<1&&(T=k===0?pt(y):jg(g,k,C));const S=Math.abs(T)<=r,R=Math.abs(o-C)<=i;l.done=S&&R}return l.value=l.done?o:C,l},toString:()=>{const k=Math.min(Fm(j),al),C=Bm(T=>j.next(k*T).value,k,30);return k+"ms "+C}};return j}function Wd({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:l,max:u,restDelta:c=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},x=S=>l!==void 0&&S<l||u!==void 0&&S>u,y=S=>l===void 0?u:u===void 0||Math.abs(l-S)<Math.abs(u-S)?l:u;let w=n*t;const N=f+w,m=o===void 0?N:o(N);m!==N&&(w=m-f);const h=S=>-w*Math.exp(-S/r),g=S=>m+h(S),j=S=>{const R=h(S),A=g(S);p.done=Math.abs(R)<=c,p.value=p.done?m:A};let k,C;const T=S=>{x(p.value)&&(k=S,C=Ng({keyframes:[p.value,y(p.value)],velocity:jg(g,S,p.value),damping:i,stiffness:s,restDelta:c,restSpeed:d}))};return T(0),{calculatedDuration:null,next:S=>{let R=!1;return!C&&k===void 0&&(R=!0,j(S),T(S)),k!==void 0&&S>=k?C.next(S-k):(!R&&j(S),p)}}}const Qw=Pi(.42,0,1,1),Yw=Pi(0,0,.58,1),kg=Pi(.42,0,.58,1),qw=e=>Array.isArray(e)&&typeof e[0]!="number",Xw={linear:Le,easeIn:Qw,easeInOut:kg,easeOut:Yw,circIn:Ku,circInOut:ig,circOut:rg,backIn:Hu,backInOut:tg,backOut:eg,anticipate:ng},$d=e=>{if(Fu(e)){wm(e.length===4);const[t,n,r,i]=e;return Pi(t,n,r,i)}else if(typeof e=="string")return Xw[e];return e};function Zw(e,t,n){const r=[],i=n||bg,s=e.length-1;for(let o=0;o<s;o++){let l=i(e[o],e[o+1]);if(t){const u=Array.isArray(t)?t[o]||Le:t;l=Ti(u,l)}r.push(l)}return r}function Jw(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(wm(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=Zw(t,r,i),u=l.length,c=d=>{if(o&&d<e[0])return t[0];let f=0;if(u>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=ir(e[f],e[f+1],d);return l[f](p)};return n?d=>c(yt(e[0],e[s-1],d)):c}function e2(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=ir(0,t,r);e.push(G(n,1,i))}}function t2(e){const t=[0];return e2(t,e.length-1),t}function n2(e,t){return e.map(n=>n*t)}function r2(e,t){return e.map(()=>t||kg).splice(0,e.length-1)}function Hs({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=qw(r)?r.map($d):$d(r),s={done:!1,value:t[0]},o=n2(n&&n.length===t.length?n:t2(t),e),l=Jw(o,t,{ease:Array.isArray(i)?i:r2(t,i)});return{calculatedDuration:e,next:u=>(s.value=l(u),s.done=u>=e,s)}}const i2=e=>{const t=({timestamp:n})=>e(n);return{start:()=>$.update(t,!0),stop:()=>$t(t),now:()=>de.isProcessing?de.timestamp:at.now()}},s2={decay:Wd,inertia:Wd,tween:Hs,keyframes:Hs,spring:Ng},o2=e=>e/100;class Zu extends yg{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:u}=this.options;u&&u()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,o=(i==null?void 0:i.KeyframeResolver)||qu,l=(u,c)=>this.onKeyframesResolved(u,c);this.resolver=new o(s,l,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=this.options,l=zu(n)?n:s2[n]||Hs;let u,c;l!==Hs&&typeof t[0]!="number"&&(u=Ti(o2,bg(t[0],t[1])),t=[0,100]);const d=l({...this.options,keyframes:t});s==="mirror"&&(c=l({...this.options,keyframes:[...t].reverse(),velocity:-o})),d.calculatedDuration===null&&(d.calculatedDuration=Fm(d));const{calculatedDuration:f}=d,p=f+i,x=p*(r+1)-i;return{generator:d,mirroredGenerator:c,mapPercentToKeyframes:u,calculatedDuration:f,resolvedDuration:p,totalDuration:x}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:S}=this.options;return{done:!0,value:S[S.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:o,mapPercentToKeyframes:l,keyframes:u,calculatedDuration:c,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:p,repeat:x,repeatType:y,repeatDelay:w,onUpdate:N}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-p*(this.speed>=0?1:-1),h=this.speed>=0?m<0:m>d;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let g=this.currentTime,j=s;if(x){const S=Math.min(this.currentTime,d)/f;let R=Math.floor(S),A=S%1;!A&&S>=1&&(A=1),A===1&&R--,R=Math.min(R,x+1),!!(R%2)&&(y==="reverse"?(A=1-A,w&&(A-=w/f)):y==="mirror"&&(j=o)),g=yt(0,1,A)*f}const k=h?{done:!1,value:u[0]}:j.next(g);l&&(k.value=l(k.value));let{done:C}=k;!h&&c!==null&&(C=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return T&&i!==void 0&&(k.value=wo(u,this.options,i)),N&&N(k.value),T&&this.finish(),k}get duration(){const{resolved:t}=this;return t?ht(t.calculatedDuration):0}get time(){return ht(this.currentTime)}set time(t){t=pt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=ht(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=i2,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const a2=new Set(["opacity","clipPath","filter","transform"]);function l2(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:l="easeInOut",times:u}={}){const c={[t]:n};u&&(c.offset=u);const d=Wm(l,i);return Array.isArray(d)&&(c.easing=d),e.animate(c,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const u2=ku(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ks=10,c2=2e4;function d2(e){return zu(e.type)||e.type==="spring"||!Um(e.ease)}function f2(e,t){const n=new Zu({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let s=0;for(;!r.done&&s<c2;)r=n.sample(s),i.push(r.value),s+=Ks;return{times:void 0,keyframes:i,duration:s-Ks,ease:"linear"}}const Sg={anticipate:ng,backInOut:tg,circInOut:ig};function p2(e){return e in Sg}class Hd extends yg{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new vg(s,(o,l)=>this.onKeyframesResolved(o,l),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:s,type:o,motionValue:l,name:u,startTime:c}=this.options;if(!l.owner||!l.owner.current)return!1;if(typeof s=="string"&&Ws()&&p2(s)&&(s=Sg[s]),d2(this.options)){const{onComplete:f,onUpdate:p,motionValue:x,element:y,...w}=this.options,N=f2(t,w);t=N.keyframes,t.length===1&&(t[1]=t[0]),r=N.duration,i=N.times,s=N.ease,o="keyframes"}const d=l2(l.owner.current,u,t,{...this.options,duration:r,times:i,ease:s});return d.startTime=c??this.calcStartTime(),this.pendingTimeline?(Ed(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;l.set(wo(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:o,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return ht(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return ht(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=pt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Le;const{animation:r}=n;Ed(r,t)}return Le}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:s,ease:o,times:l}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:d,onComplete:f,element:p,...x}=this.options,y=new Zu({...x,keyframes:r,duration:i,type:s,ease:o,times:l,isGenerator:!0}),w=pt(this.time);c.setWithVelocity(y.sample(w-Ks).value,y.sample(w).value,Ks)}const{onStop:u}=this.options;u&&u(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:o,type:l}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:u,transformTemplate:c}=n.owner.getProps();return u2()&&r&&a2.has(r)&&!u&&!c&&!i&&s!=="mirror"&&o!==0&&l!=="inertia"}}const h2={type:"spring",stiffness:500,damping:25,restSpeed:10},m2=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),g2={type:"keyframes",duration:.8},x2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},v2=(e,{keyframes:t})=>t.length>2?g2:kn.has(e)?e.startsWith("scale")?m2(t[1]):h2:x2;function y2({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:l,from:u,elapsed:c,...d}){return!!Object.keys(d).length}const Ju=(e,t,n,r={},i,s)=>o=>{const l=Ou(r,e)||{},u=l.delay||r.delay||0;let{elapsed:c=0}=r;c=c-pt(u);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-c,onUpdate:p=>{t.set(p),l.onUpdate&&l.onUpdate(p)},onComplete:()=>{o(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:s?void 0:i};y2(l)||(d={...d,...v2(e,d)}),d.duration&&(d.duration=pt(d.duration)),d.repeatDelay&&(d.repeatDelay=pt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!s&&t.get()!==void 0){const p=wo(d.keyframes,l);if(p!==void 0)return $.update(()=>{d.onUpdate(p),d.onComplete()}),new z1([])}return!s&&Hd.supports(d)?new Hd(d):new Zu(d)};function w2({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Cg(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:o=e.getDefaultTransition(),transitionEnd:l,...u}=t;r&&(o=r);const c=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in u){const p=e.getValue(f,(s=e.latestValues[f])!==null&&s!==void 0?s:null),x=u[f];if(x===void 0||d&&w2(d,f))continue;const y={delay:n,...Ou(o||{},f)};let w=!1;if(window.MotionHandoffAnimation){const m=qm(e);if(m){const h=window.MotionHandoffAnimation(m,f,$);h!==null&&(y.startTime=h,w=!0)}}ul(e,f),p.start(Ju(f,p,x,e.shouldReduceMotion&&Qm.has(f)?{type:!1}:y,e,w));const N=p.animation;N&&c.push(N)}return l&&Promise.all(c).then(()=>{$.update(()=>{l&&Z1(e,l)})}),c}function gl(e,t,n={}){var r;const i=yo(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const o=i?()=>Promise.all(Cg(e,i,n)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=s;return b2(e,t,d+c,f,p,n)}:()=>Promise.resolve(),{when:u}=s;if(u){const[c,d]=u==="beforeChildren"?[o,l]:[l,o];return c().then(()=>d())}else return Promise.all([o(),l(n.delay)])}function b2(e,t,n=0,r=0,i=1,s){const o=[],l=(e.variantChildren.size-1)*r,u=i===1?(c=0)=>c*r:(c=0)=>l-c*r;return Array.from(e.variantChildren).sort(j2).forEach((c,d)=>{c.notify("AnimationStart",t),o.push(gl(c,t,{...s,delay:n+u(d)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(o)}function j2(e,t){return e.sortNodePosition(t)}function N2(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>gl(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=gl(e,t,n);else{const i=typeof t=="function"?yo(e,t,n.custom):t;r=Promise.all(Cg(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const k2=Cu.length;function Pg(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Pg(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<k2;n++){const r=Cu[n],i=e.props[r];(pi(i)||i===!1)&&(t[r]=i)}return t}const S2=[...Su].reverse(),C2=Su.length;function P2(e){return t=>Promise.all(t.map(({animation:n,options:r})=>N2(e,n,r)))}function T2(e){let t=P2(e),n=Kd(),r=!0;const i=u=>(c,d)=>{var f;const p=yo(e,d,u==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:x,transitionEnd:y,...w}=p;c={...c,...w,...y}}return c};function s(u){t=u(e)}function o(u){const{props:c}=e,d=Pg(e.parent)||{},f=[],p=new Set;let x={},y=1/0;for(let N=0;N<C2;N++){const m=S2[N],h=n[m],g=c[m]!==void 0?c[m]:d[m],j=pi(g),k=m===u?h.isActive:null;k===!1&&(y=N);let C=g===d[m]&&g!==c[m]&&j;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),h.protectedKeys={...x},!h.isActive&&k===null||!g&&!h.prevProp||xo(g)||typeof g=="boolean")continue;const T=E2(h.prevProp,g);let S=T||m===u&&h.isActive&&!C&&j||N>y&&j,R=!1;const A=Array.isArray(g)?g:[g];let ne=A.reduce(i(m),{});k===!1&&(ne={});const{prevResolvedValues:Nt={}}=h,Jt={...Nt,...ne},xr=ie=>{S=!0,p.has(ie)&&(R=!0,p.delete(ie)),h.needsAnimating[ie]=!0;const E=e.getValue(ie);E&&(E.liveStyle=!1)};for(const ie in Jt){const E=ne[ie],M=Nt[ie];if(x.hasOwnProperty(ie))continue;let L=!1;ol(E)&&ol(M)?L=!zm(E,M):L=E!==M,L?E!=null?xr(ie):p.add(ie):E!==void 0&&p.has(ie)?xr(ie):h.protectedKeys[ie]=!0}h.prevProp=g,h.prevResolvedValues=ne,h.isActive&&(x={...x,...ne}),r&&e.blockInitialAnimation&&(S=!1),S&&(!(C&&T)||R)&&f.push(...A.map(ie=>({animation:ie,options:{type:m}})))}if(p.size){const N={};p.forEach(m=>{const h=e.getBaseTarget(m),g=e.getValue(m);g&&(g.liveStyle=!0),N[m]=h??null}),f.push({animation:N})}let w=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(w=!1),r=!1,w?t(f):Promise.resolve()}function l(u,c){var d;if(n[u].isActive===c)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var x;return(x=p.animationState)===null||x===void 0?void 0:x.setActive(u,c)}),n[u].isActive=c;const f=o(u);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:l,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Kd(),r=!0}}}function E2(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!zm(t,e):!1}function nn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Kd(){return{animate:nn(!0),whileInView:nn(),whileHover:nn(),whileTap:nn(),whileDrag:nn(),whileFocus:nn(),exit:nn()}}class Zt{constructor(t){this.isMounted=!1,this.node=t}update(){}}class V2 extends Zt{constructor(t){super(t),t.animationState||(t.animationState=T2(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();xo(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let A2=0;class _2 extends Zt{constructor(){super(...arguments),this.id=A2++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const M2={animation:{Feature:V2},exit:{Feature:_2}};function xi(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Ei(e){return{point:{x:e.pageX,y:e.pageY}}}const L2=e=>t=>Bu(t)&&e(t,Ei(t));function Hr(e,t,n,r){return xi(e,t,L2(n),r)}const Gd=(e,t)=>Math.abs(e-t);function R2(e,t){const n=Gd(e.x,t.x),r=Gd(e.y,t.y);return Math.sqrt(n**2+r**2)}class Tg{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=na(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,x=R2(f.offset,{x:0,y:0})>=3;if(!p&&!x)return;const{point:y}=f,{timestamp:w}=de;this.history.push({...y,timestamp:w});const{onStart:N,onMove:m}=this.handlers;p||(N&&N(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=ta(p,this.transformPagePoint),$.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:x,onSessionEnd:y,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const N=na(f.type==="pointercancel"?this.lastMoveEventInfo:ta(p,this.transformPagePoint),this.history);this.startEvent&&x&&x(f,N),y&&y(f,N)},!Bu(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=Ei(t),l=ta(o,this.transformPagePoint),{point:u}=l,{timestamp:c}=de;this.history=[{...u,timestamp:c}];const{onSessionStart:d}=n;d&&d(t,na(l,this.history)),this.removeListeners=Ti(Hr(this.contextWindow,"pointermove",this.handlePointerMove),Hr(this.contextWindow,"pointerup",this.handlePointerUp),Hr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),$t(this.updatePoint)}}function ta(e,t){return t?{point:t(e.point)}:e}function Qd(e,t){return{x:e.x-t.x,y:e.y-t.y}}function na({point:e},t){return{point:e,delta:Qd(e,Eg(t)),offset:Qd(e,D2(t)),velocity:I2(t,.1)}}function D2(e){return e[0]}function Eg(e){return e[e.length-1]}function I2(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Eg(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>pt(t)));)n--;if(!r)return{x:0,y:0};const s=ht(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const Vg=1e-4,O2=1-Vg,z2=1+Vg,Ag=.01,F2=0-Ag,B2=0+Ag;function De(e){return e.max-e.min}function U2(e,t,n){return Math.abs(e-t)<=n}function Yd(e,t,n,r=.5){e.origin=r,e.originPoint=G(t.min,t.max,e.origin),e.scale=De(n)/De(t),e.translate=G(n.min,n.max,e.origin)-e.originPoint,(e.scale>=O2&&e.scale<=z2||isNaN(e.scale))&&(e.scale=1),(e.translate>=F2&&e.translate<=B2||isNaN(e.translate))&&(e.translate=0)}function Kr(e,t,n,r){Yd(e.x,t.x,n.x,r?r.originX:void 0),Yd(e.y,t.y,n.y,r?r.originY:void 0)}function qd(e,t,n){e.min=n.min+t.min,e.max=e.min+De(t)}function W2(e,t,n){qd(e.x,t.x,n.x),qd(e.y,t.y,n.y)}function Xd(e,t,n){e.min=t.min-n.min,e.max=e.min+De(t)}function Gr(e,t,n){Xd(e.x,t.x,n.x),Xd(e.y,t.y,n.y)}function $2(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?G(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?G(n,e,r.max):Math.min(e,n)),e}function Zd(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function H2(e,{top:t,left:n,bottom:r,right:i}){return{x:Zd(e.x,n,i),y:Zd(e.y,t,r)}}function Jd(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function K2(e,t){return{x:Jd(e.x,t.x),y:Jd(e.y,t.y)}}function G2(e,t){let n=.5;const r=De(e),i=De(t);return i>r?n=ir(t.min,t.max-r,e.min):r>i&&(n=ir(e.min,e.max-i,t.min)),yt(0,1,n)}function Q2(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const xl=.35;function Y2(e=xl){return e===!1?e=0:e===!0&&(e=xl),{x:ef(e,"left","right"),y:ef(e,"top","bottom")}}function ef(e,t,n){return{min:tf(e,t),max:tf(e,n)}}function tf(e,t){return typeof e=="number"?e:e[t]||0}const nf=()=>({translate:0,scale:1,origin:0,originPoint:0}),Bn=()=>({x:nf(),y:nf()}),rf=()=>({min:0,max:0}),ee=()=>({x:rf(),y:rf()});function Fe(e){return[e("x"),e("y")]}function _g({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function q2({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function X2(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function ra(e){return e===void 0||e===1}function vl({scale:e,scaleX:t,scaleY:n}){return!ra(e)||!ra(t)||!ra(n)}function on(e){return vl(e)||Mg(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Mg(e){return sf(e.x)||sf(e.y)}function sf(e){return e&&e!=="0%"}function Gs(e,t,n){const r=e-n,i=t*r;return n+i}function of(e,t,n,r,i){return i!==void 0&&(e=Gs(e,i,r)),Gs(e,n,r)+t}function yl(e,t=0,n=1,r,i){e.min=of(e.min,t,n,r,i),e.max=of(e.max,t,n,r,i)}function Lg(e,{x:t,y:n}){yl(e.x,t.translate,t.scale,t.originPoint),yl(e.y,n.translate,n.scale,n.originPoint)}const af=.999999999999,lf=1.0000000000001;function Z2(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let l=0;l<i;l++){s=n[l],o=s.projectionDelta;const{visualElement:u}=s.options;u&&u.props.style&&u.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Wn(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Lg(e,o)),r&&on(s.latestValues)&&Wn(e,s.latestValues))}t.x<lf&&t.x>af&&(t.x=1),t.y<lf&&t.y>af&&(t.y=1)}function Un(e,t){e.min=e.min+t,e.max=e.max+t}function uf(e,t,n,r,i=.5){const s=G(e.min,e.max,i);yl(e,t,n,s,r)}function Wn(e,t){uf(e.x,t.x,t.scaleX,t.scale,t.originX),uf(e.y,t.y,t.scaleY,t.scale,t.originY)}function Rg(e,t){return _g(X2(e.getBoundingClientRect(),t))}function J2(e,t,n){const r=Rg(e,n),{scroll:i}=t;return i&&(Un(r.x,i.offset.x),Un(r.y,i.offset.y)),r}const Dg=({current:e})=>e?e.ownerDocument.defaultView:null,eb=new WeakMap;class tb{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ee(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ei(d).point)},s=(d,f)=>{const{drag:p,dragPropagation:x,onDragStart:y}=this.getProps();if(p&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=G1(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Fe(N=>{let m=this.getAxisMotionValue(N).get()||0;if(ot.test(m)){const{projection:h}=this.visualElement;if(h&&h.layout){const g=h.layout.layoutBox[N];g&&(m=De(g)*(parseFloat(m)/100))}}this.originPoint[N]=m}),y&&$.postRender(()=>y(d,f)),ul(this.visualElement,"transform");const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},o=(d,f)=>{const{dragPropagation:p,dragDirectionLock:x,onDirectionLock:y,onDrag:w}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:N}=f;if(x&&this.currentDirection===null){this.currentDirection=nb(N),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,N),this.updateAxis("y",f.point,N),this.visualElement.render(),w&&w(d,f)},l=(d,f)=>this.stop(d,f),u=()=>Fe(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Tg(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:l,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Dg(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&$.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ji(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=$2(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&zn(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=H2(i.layoutBox,n):this.constraints=!1,this.elastic=Y2(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Fe(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=Q2(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!zn(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=J2(r,i.root,this.visualElement.getTransformPagePoint());let o=K2(i.layout.layoutBox,s);if(n){const l=n(q2(o));this.hasMutatedConstraints=!!l,l&&(o=_g(l))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:l}=this.getProps(),u=this.constraints||{},c=Fe(d=>{if(!Ji(d,n,this.currentDirection))return;let f=u&&u[d]||{};o&&(f={min:0,max:0});const p=i?200:1e6,x=i?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,y)});return Promise.all(c).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return ul(this.visualElement,t),r.start(Ju(t,r,0,n,this.visualElement,!1))}stopAnimation(){Fe(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Fe(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Fe(n=>{const{drag:r}=this.getProps();if(!Ji(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:l}=i.layout.layoutBox[n];s.set(t[n]-G(o,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!zn(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Fe(o=>{const l=this.getAxisMotionValue(o);if(l&&this.constraints!==!1){const u=l.get();i[o]=G2({min:u,max:u},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Fe(o=>{if(!Ji(o,t,null))return;const l=this.getAxisMotionValue(o),{min:u,max:c}=this.constraints[o];l.set(G(u,c,i[o]))})}addListeners(){if(!this.visualElement.current)return;eb.set(this.visualElement,this);const t=this.visualElement.current,n=Hr(t,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(u)}),r=()=>{const{dragConstraints:u}=this.getProps();zn(u)&&u.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),$.read(r);const o=xi(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(Fe(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=u[d].translate,f.set(f.get()+u[d].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=xl,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:l}}}function Ji(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function nb(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class rb extends Zt{constructor(t){super(t),this.removeGroupControls=Le,this.removeListeners=Le,this.controls=new tb(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Le}unmount(){this.removeGroupControls(),this.removeListeners()}}const cf=e=>(t,n)=>{e&&$.postRender(()=>e(t,n))};class ib extends Zt{constructor(){super(...arguments),this.removePointerDownListener=Le}onPointerDown(t){this.session=new Tg(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Dg(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:cf(t),onStart:cf(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&$.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=Hr(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const hs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function df(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Cr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(_.test(e))e=parseFloat(e);else return e;const n=df(e,t.target.x),r=df(e,t.target.y);return`${n}% ${r}%`}},sb={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Ht.parse(e);if(i.length>5)return r;const s=Ht.createTransformer(e),o=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,u=n.y.scale*t.y;i[0+o]/=l,i[1+o]/=u;const c=G(l,u,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}};class ob extends b.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;P1(ab),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),hs.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||$.postRender(()=>{const l=o.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Tu.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Ig(e){const[t,n]=vm(),r=b.useContext(wu);return a.jsx(ob,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(Cm),isPresent:t,safeToRemove:n})}const ab={borderRadius:{...Cr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Cr,borderTopRightRadius:Cr,borderBottomLeftRadius:Cr,borderBottomRightRadius:Cr,boxShadow:sb};function lb(e,t,n){const r=ye(e)?e:mi(e);return r.start(Ju("",r,t,n)),r.animation}function ub(e){return e instanceof SVGElement&&e.tagName!=="svg"}const cb=(e,t)=>e.depth-t.depth;class db{constructor(){this.children=[],this.isDirty=!1}add(t){Uu(this.children,t),this.isDirty=!0}remove(t){Wu(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(cb),this.isDirty=!1,this.children.forEach(t)}}function fb(e,t){const n=at.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&($t(r),e(s-t))};return $.read(r,!0),()=>$t(r)}const Og=["TopLeft","TopRight","BottomLeft","BottomRight"],pb=Og.length,ff=e=>typeof e=="string"?parseFloat(e):e,pf=e=>typeof e=="number"||_.test(e);function hb(e,t,n,r,i,s){i?(e.opacity=G(0,n.opacity!==void 0?n.opacity:1,mb(r)),e.opacityExit=G(t.opacity!==void 0?t.opacity:1,0,gb(r))):s&&(e.opacity=G(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<pb;o++){const l=`border${Og[o]}Radius`;let u=hf(t,l),c=hf(n,l);if(u===void 0&&c===void 0)continue;u||(u=0),c||(c=0),u===0||c===0||pf(u)===pf(c)?(e[l]=Math.max(G(ff(u),ff(c),r),0),(ot.test(c)||ot.test(u))&&(e[l]+="%")):e[l]=c}(t.rotate||n.rotate)&&(e.rotate=G(t.rotate||0,n.rotate||0,r))}function hf(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const mb=zg(0,.5,rg),gb=zg(.5,.95,Le);function zg(e,t,n){return r=>r<e?0:r>t?1:n(ir(e,t,r))}function mf(e,t){e.min=t.min,e.max=t.max}function ze(e,t){mf(e.x,t.x),mf(e.y,t.y)}function gf(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function xf(e,t,n,r,i){return e-=t,e=Gs(e,1/n,r),i!==void 0&&(e=Gs(e,1/i,r)),e}function xb(e,t=0,n=1,r=.5,i,s=e,o=e){if(ot.test(t)&&(t=parseFloat(t),t=G(o.min,o.max,t/100)-o.min),typeof t!="number")return;let l=G(s.min,s.max,r);e===s&&(l-=t),e.min=xf(e.min,t,n,l,i),e.max=xf(e.max,t,n,l,i)}function vf(e,t,[n,r,i],s,o){xb(e,t[n],t[r],t[i],t.scale,s,o)}const vb=["x","scaleX","originX"],yb=["y","scaleY","originY"];function yf(e,t,n,r){vf(e.x,t,vb,n?n.x:void 0,r?r.x:void 0),vf(e.y,t,yb,n?n.y:void 0,r?r.y:void 0)}function wf(e){return e.translate===0&&e.scale===1}function Fg(e){return wf(e.x)&&wf(e.y)}function bf(e,t){return e.min===t.min&&e.max===t.max}function wb(e,t){return bf(e.x,t.x)&&bf(e.y,t.y)}function jf(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Bg(e,t){return jf(e.x,t.x)&&jf(e.y,t.y)}function Nf(e){return De(e.x)/De(e.y)}function kf(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class bb{constructor(){this.members=[]}add(t){Uu(this.members,t),t.scheduleRender()}remove(t){if(Wu(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function jb(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:d,rotateX:f,rotateY:p,skewX:x,skewY:y}=n;c&&(r=`perspective(${c}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),x&&(r+=`skewX(${x}deg) `),y&&(r+=`skewY(${y}deg) `)}const l=e.x.scale*t.x,u=e.y.scale*t.y;return(l!==1||u!==1)&&(r+=`scale(${l}, ${u})`),r||"none"}const an={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Lr=typeof window<"u"&&window.MotionDebug!==void 0,ia=["","X","Y","Z"],Nb={visibility:"hidden"},Sf=1e3;let kb=0;function sa(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Ug(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=qm(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",$,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Ug(r)}function Wg({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},l=t==null?void 0:t()){this.id=kb++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Lr&&(an.totalNodes=an.resolvedTargetDeltas=an.recalculatedProjection=0),this.nodes.forEach(Pb),this.nodes.forEach(_b),this.nodes.forEach(Mb),this.nodes.forEach(Tb),Lr&&window.MotionDebug.record(an)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new db)}addEventListener(o,l){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new $u),this.eventHandlers.get(o).add(l)}notifyListeners(o,...l){const u=this.eventHandlers.get(o);u&&u.notify(...l)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=ub(o),this.instance=o;const{layoutId:u,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(c||u)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=fb(p,250),hs.hasAnimatedSinceResize&&(hs.hasAnimatedSinceResize=!1,this.nodes.forEach(Pf))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&d&&(u||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:x,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||d.getDefaultTransition()||Ob,{onLayoutAnimationStart:N,onLayoutAnimationComplete:m}=d.getProps(),h=!this.targetLayout||!Bg(this.targetLayout,y)||x,g=!p&&x;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,g);const j={...Ou(w,"layout"),onPlay:N,onComplete:m};(d.shouldReduceMotion||this.options.layoutRoot)&&(j.delay=0,j.type=!1),this.startAnimation(j)}else p||Pf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,$t(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Lb),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ug(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:l,layout:u}=this.options;if(l===void 0&&!u)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Cf);return}this.isUpdating||this.nodes.forEach(Vb),this.isUpdating=!1,this.nodes.forEach(Ab),this.nodes.forEach(Sb),this.nodes.forEach(Cb),this.clearAllSnapshots();const l=at.now();de.delta=yt(0,1e3/60,l-de.timestamp),de.timestamp=l,de.isProcessing=!0,Yo.update.process(de),Yo.preRender.process(de),Yo.render.process(de),de.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Tu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Eb),this.sharedNodes.forEach(Rb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,$.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){$.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let u=0;u<this.path.length;u++)this.path[u].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ee(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(l=!1),l){const u=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:u,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:u}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!Fg(this.projectionDelta),u=this.getTransformTemplate(),c=u?u(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;o&&(l||on(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const l=this.measurePageBox();let u=this.removeElementScroll(l);return o&&(u=this.removeTransform(u)),zb(u),{animationId:this.root.animationId,measuredBox:l,layoutBox:u,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:l}=this.options;if(!l)return ee();const u=l.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(Fb))){const{scroll:d}=this.root;d&&(Un(u.x,d.offset.x),Un(u.y,d.offset.y))}return u}removeElementScroll(o){var l;const u=ee();if(ze(u,o),!((l=this.scroll)===null||l===void 0)&&l.wasRoot)return u;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&ze(u,o),Un(u.x,f.offset.x),Un(u.y,f.offset.y))}return u}applyTransform(o,l=!1){const u=ee();ze(u,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Wn(u,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),on(d.latestValues)&&Wn(u,d.latestValues)}return on(this.latestValues)&&Wn(u,this.latestValues),u}removeTransform(o){const l=ee();ze(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!c.instance||!on(c.latestValues))continue;vl(c.latestValues)&&c.updateSnapshot();const d=ee(),f=c.measurePageBox();ze(d,f),yf(l,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return on(this.latestValues)&&yf(l,this.latestValues),l}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==de.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var l;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==u;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=de.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ee(),this.relativeTargetOrigin=ee(),Gr(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),ze(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ee(),this.targetWithTransforms=ee()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),W2(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ze(this.target,this.layout.layoutBox),Lg(this.target,this.targetDelta)):ze(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ee(),this.relativeTargetOrigin=ee(),Gr(this.relativeTargetOrigin,this.target,x.target),ze(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Lr&&an.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||vl(this.parent.latestValues)||Mg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const l=this.getLead(),u=!!this.resumingFrom||this!==l;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===de.timestamp&&(c=!1),c)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;ze(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,x=this.treeScale.y;Z2(this.layoutCorrected,this.treeScale,this.path,u),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=ee());const{target:y}=l;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(gf(this.prevProjectionDelta.x,this.projectionDelta.x),gf(this.prevProjectionDelta.y,this.projectionDelta.y)),Kr(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==x||!kf(this.projectionDelta.x,this.prevProjectionDelta.x)||!kf(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),Lr&&an.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var l;if((l=this.options.visualElement)===null||l===void 0||l.scheduleRender(),o){const u=this.getStack();u&&u.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Bn(),this.projectionDelta=Bn(),this.projectionDeltaWithTransform=Bn()}setAnimationOrigin(o,l=!1){const u=this.snapshot,c=u?u.latestValues:{},d={...this.latestValues},f=Bn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const p=ee(),x=u?u.source:void 0,y=this.layout?this.layout.source:void 0,w=x!==y,N=this.getStack(),m=!N||N.members.length<=1,h=!!(w&&!m&&this.options.crossfade===!0&&!this.path.some(Ib));this.animationProgress=0;let g;this.mixTargetDelta=j=>{const k=j/1e3;Tf(f.x,o.x,k),Tf(f.y,o.y,k),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Gr(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Db(this.relativeTarget,this.relativeTargetOrigin,p,k),g&&wb(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=ee()),ze(g,this.relativeTarget)),w&&(this.animationValues=d,hb(d,c,this.latestValues,k,h,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&($t(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=$.update(()=>{hs.hasAnimatedSinceResize=!0,this.currentAnimation=lb(0,Sf,{...o,onUpdate:l=>{this.mixTargetDelta(l),o.onUpdate&&o.onUpdate(l)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Sf),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:l,target:u,layout:c,latestValues:d}=o;if(!(!l||!u||!c)){if(this!==o&&this.layout&&c&&$g(this.options.animationType,this.layout.layoutBox,c.layoutBox)){u=this.target||ee();const f=De(this.layout.layoutBox.x);u.x.min=o.target.x.min,u.x.max=u.x.min+f;const p=De(this.layout.layoutBox.y);u.y.min=o.target.y.min,u.y.max=u.y.min+p}ze(l,u),Wn(l,d),Kr(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(o,l){this.sharedNodes.has(o)||this.sharedNodes.set(o,new bb),this.sharedNodes.get(o).add(l);const c=l.options.initialPromotionConfig;l.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(l):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:l}=this.options;return l?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:l}=this.options;return l?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:l,preserveFollowOpacity:u}={}){const c=this.getStack();c&&c.promote(this,u),o&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let l=!1;const{latestValues:u}=o;if((u.z||u.rotate||u.rotateX||u.rotateY||u.rotateZ||u.skewX||u.skewY)&&(l=!0),!l)return;const c={};u.z&&sa("z",o,c,this.animationValues);for(let d=0;d<ia.length;d++)sa(`rotate${ia[d]}`,o,c,this.animationValues),sa(`skew${ia[d]}`,o,c,this.animationValues);o.render();for(const d in c)o.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);o.scheduleRender()}getProjectionStyles(o){var l,u;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Nb;const c={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=fs(o==null?void 0:o.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=fs(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!on(this.latestValues)&&(w.transform=d?d({},""):"none",this.hasProjected=!1),w}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=jb(this.projectionDeltaWithTransform,this.treeScale,p),d&&(c.transform=d(p,c.transform));const{x,y}=this.projectionDelta;c.transformOrigin=`${x.origin*100}% ${y.origin*100}% 0`,f.animationValues?c.opacity=f===this?(u=(l=p.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&u!==void 0?u:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const w in Us){if(p[w]===void 0)continue;const{correct:N,applyTo:m}=Us[w],h=c.transform==="none"?p[w]:N(p[w],f);if(m){const g=m.length;for(let j=0;j<g;j++)c[m[j]]=h}else c[w]=h}return this.options.layoutId&&(c.pointerEvents=f===this?fs(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var l;return(l=o.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(Cf),this.root.sharedNodes.clear()}}}function Sb(e){e.updateLayout()}function Cb(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=n.source!==e.layout.source;s==="size"?Fe(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],x=De(p);p.min=r[f].min,p.max=p.min+x}):$g(s,n.layoutBox,r)&&Fe(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],x=De(r[f]);p.max=p.min+x,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+x)});const l=Bn();Kr(l,r,n.layoutBox);const u=Bn();o?Kr(u,e.applyTransform(i,!0),n.measuredBox):Kr(u,r,n.layoutBox);const c=!Fg(l);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:x}=f;if(p&&x){const y=ee();Gr(y,n.layoutBox,p.layoutBox);const w=ee();Gr(w,r,x.layoutBox),Bg(y,w)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:u,layoutDelta:l,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Pb(e){Lr&&an.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Tb(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Eb(e){e.clearSnapshot()}function Cf(e){e.clearMeasurements()}function Vb(e){e.isLayoutDirty=!1}function Ab(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Pf(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function _b(e){e.resolveTargetDelta()}function Mb(e){e.calcProjection()}function Lb(e){e.resetSkewAndRotation()}function Rb(e){e.removeLeadSnapshot()}function Tf(e,t,n){e.translate=G(t.translate,0,n),e.scale=G(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Ef(e,t,n,r){e.min=G(t.min,n.min,r),e.max=G(t.max,n.max,r)}function Db(e,t,n,r){Ef(e.x,t.x,n.x,r),Ef(e.y,t.y,n.y,r)}function Ib(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Ob={duration:.45,ease:[.4,0,.1,1]},Vf=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Af=Vf("applewebkit/")&&!Vf("chrome/")?Math.round:Le;function _f(e){e.min=Af(e.min),e.max=Af(e.max)}function zb(e){_f(e.x),_f(e.y)}function $g(e,t,n){return e==="position"||e==="preserve-aspect"&&!U2(Nf(t),Nf(n),.2)}function Fb(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const Bb=Wg({attachResizeListener:(e,t)=>xi(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),oa={current:void 0},Hg=Wg({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!oa.current){const e=new Bb({});e.mount(window),e.setOptions({layoutScroll:!0}),oa.current=e}return oa.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Ub={pan:{Feature:ib},drag:{Feature:rb,ProjectionNode:Hg,MeasureLayout:Ig}};function Mf(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&$.postRender(()=>s(t,Ei(t)))}class Wb extends Zt{mount(){const{current:t}=this.node;t&&(this.unmount=U1(t,n=>(Mf(this.node,n,"Start"),r=>Mf(this.node,r,"End"))))}unmount(){}}class $b extends Zt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ti(xi(this.node.current,"focus",()=>this.onFocus()),xi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Lf(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&$.postRender(()=>s(t,Ei(t)))}class Hb extends Zt{mount(){const{current:t}=this.node;t&&(this.unmount=K1(t,n=>(Lf(this.node,n,"Start"),(r,{success:i})=>Lf(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const wl=new WeakMap,aa=new WeakMap,Kb=e=>{const t=wl.get(e.target);t&&t(e)},Gb=e=>{e.forEach(Kb)};function Qb({root:e,...t}){const n=e||document;aa.has(n)||aa.set(n,{});const r=aa.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Gb,{root:e,...t})),r[i]}function Yb(e,t,n){const r=Qb(t);return wl.set(e,n),r.observe(e),()=>{wl.delete(e),r.unobserve(e)}}const qb={some:0,all:1};class Xb extends Zt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:qb[i]},l=u=>{const{isIntersecting:c}=u;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=c?d:f;p&&p(u)};return Yb(this.node.current,o,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Zb(t,n))&&this.startObserver()}unmount(){}}function Zb({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Jb={inView:{Feature:Xb},tap:{Feature:Hb},focus:{Feature:$b},hover:{Feature:Wb}},ej={layout:{ProjectionNode:Hg,MeasureLayout:Ig}},bl={current:null},Kg={current:!1};function tj(){if(Kg.current=!0,!!Nu)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>bl.current=e.matches;e.addListener(t),t()}else bl.current=!1}const nj=[...xg,xe,Ht],rj=e=>nj.find(gg(e)),Rf=new WeakMap;function ij(e,t,n){for(const r in t){const i=t[r],s=n[r];if(ye(i))e.addValue(r,i);else if(ye(s))e.addValue(r,mi(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,mi(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Df=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class sj{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=qu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=at.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,$.render(this.render,!1,!0))};const{latestValues:u,renderState:c,onUpdate:d}=o;this.onUpdate=d,this.latestValues=u,this.baseTarget={...u},this.initialValues=n.initial?{...u}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.blockInitialAnimation=!!s,this.isControllingVariants=vo(n),this.isVariantNode=km(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const x in p){const y=p[x];u[x]!==void 0&&ye(y)&&y.set(u[x],!1)}}mount(t){this.current=t,Rf.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Kg.current||tj(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:bl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Rf.delete(this.current),this.projection&&this.projection.unmount(),$t(this.notifyUpdate),$t(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=kn.has(t),i=n.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&$.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in sr){const n=sr[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ee()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Df.length;r++){const i=Df[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=t[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=ij(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=mi(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(hg(i)||sg(i))?i=parseFloat(i):!rj(i)&&Ht.test(n)&&(i=dg(t,n)),this.setBaseTarget(t,ye(i)?i.get():i)),ye(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=Vu(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[t])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!ye(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new $u),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Gg extends sj{constructor(){super(...arguments),this.KeyframeResolver=vg}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;ye(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function oj(e){return window.getComputedStyle(e)}class aj extends Gg{constructor(){super(...arguments),this.type="html",this.renderInstance=Mm}readValueFromInstance(t,n){if(kn.has(n)){const r=Yu(n);return r&&r.default||0}else{const r=oj(t),i=(Vm(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Rg(t,n)}build(t,n,r){Mu(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Iu(t,n,r)}}class lj extends Gg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ee}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(kn.has(n)){const r=Yu(n);return r&&r.default||0}return n=Lm.has(n)?n:Pu(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Im(t,n,r)}build(t,n,r){Lu(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Rm(t,n,r,i)}mount(t){this.isSVGTag=Du(t.tagName),super.mount(t)}}const uj=(e,t)=>Eu(e)?new lj(t):new aj(t,{allowProjection:e!==b.Fragment}),cj=D1({...M2,...Jb,...Ub,...ej},uj),v=Xy(cj),dj={some:0,all:1};function fj(e,t,{root:n,margin:r,amount:i="some"}={}){const s=Hm(e),o=new WeakMap,l=c=>{c.forEach(d=>{const f=o.get(d.target);if(d.isIntersecting!==!!f)if(d.isIntersecting){const p=t(d);typeof p=="function"?o.set(d.target,p):u.unobserve(d.target)}else typeof f=="function"&&(f(d),o.delete(d.target))})},u=new IntersectionObserver(l,{root:n,rootMargin:r,threshold:typeof i=="number"?i:dj[i]});return s.forEach(c=>u.observe(c)),()=>u.disconnect()}function pj(e,{root:t,margin:n,amount:r,once:i=!1}={}){const[s,o]=b.useState(!1);return b.useEffect(()=>{if(!e.current||i&&s)return;const l=()=>(o(!0),i?void 0:()=>o(!1)),u={root:t&&t.current||void 0,margin:n,amount:r};return fj(e.current,l,u)},[t,e,n,i,r]),s}/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hj=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qg=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gj=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>b.createElement("svg",{ref:u,...mj,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Qg("lucide",i),...l},[...o.map(([c,d])=>b.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=(e,t)=>{const n=b.forwardRef(({className:r,...i},s)=>b.createElement(gj,{ref:s,iconNode:t,className:Qg(`lucide-${hj(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=O("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=O("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=O("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=O("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xj=O("BedDouble",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vj=O("BookUser",[["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=O("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yj=O("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=O("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=O("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bj=O("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jj=O("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=O("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nj=O("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kj=O("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=O("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cj=O("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=O("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=O("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pj=O("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=O("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tj=O("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=O("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ej=O("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vj=O("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aj=O("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=O("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=O("Stamp",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",key:"1sy9ra"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13",key:"cnxgux"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mj=O("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lj=O("TreePalm",[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",key:"foxbe7"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",key:"18arnh"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35",key:"ywahnh"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",key:"ft0feo"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rj=O("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dj=O("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ij=O("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function qg({scale:e=1,light:t=!1}){return a.jsx("div",{className:"flex items-center select-none",style:{transform:`scale(${e})`,transformOrigin:"left center"},children:a.jsx("img",{src:"/CLW logo.webp",alt:"CLW Visa Services",className:"h-12 w-auto object-contain sm:h-14"})})}const Of=[{label:"Home",to:"/"},{label:"About",to:"/about"},{label:"Services",to:"/services"},{label:"Destinations",to:"/destinations"},{label:"Process",to:"/process"},{label:"FAQ",to:"/faq"},{label:"Contact",to:"/contact"}];function Oj(){const[e,t]=b.useState(!1),[n,r]=b.useState(!1),i=Xt(),s=i.pathname==="/";b.useEffect(()=>{const l=()=>{t(window.scrollY>30)};return l(),window.addEventListener("scroll",l,{passive:!0}),()=>{window.removeEventListener("scroll",l)}},[]),b.useEffect(()=>{r(!1)},[i.pathname]),b.useEffect(()=>(document.body.style.overflow=n?"hidden":"",()=>{document.body.style.overflow=""}),[n]);const o=s&&!e;return a.jsx(a.Fragment,{children:a.jsxs(v.header,{initial:{y:-80,opacity:0},animate:{y:0,opacity:1},transition:{duration:.65,ease:[.22,1,.36,1]},className:`
          fixed
          left-0
          right-0
          top-0
          z-50
          transition-all
          duration-300
          ${o?"bg-transparent py-4 sm:py-5":"border-b border-clw-dark/5 bg-white/95 py-3 shadow-[0_8px_30px_-12px_rgba(23,27,77,0.20)] backdrop-blur-xl"}
        `,children:[a.jsxs("div",{className:`
            container-clw
            flex
            h-12
            items-center
            justify-between
            sm:h-14
          `,children:[a.jsx(F,{to:"/","aria-label":"CLW Visa Services home",className:`
              relative
              z-50
              flex
              shrink-0
              items-center
              outline-none
            `,children:a.jsx(v.div,{whileHover:{scale:1.02},transition:{duration:.2},children:a.jsx(qg,{scale:o?.95:.88,light:o})})}),a.jsx("nav",{className:`
              hidden
              items-center
              gap-1
              lg:flex
            `,"aria-label":"Primary navigation",children:Of.map(l=>a.jsx(yd,{to:l.to,end:l.to==="/",className:"relative px-3 py-2",children:({isActive:u})=>a.jsxs("span",{className:"relative block",children:[a.jsx("span",{className:`
                        relative
                        z-10
                        text-[13px]
                        font-semibold
                        tracking-[0.01em]
                        transition-colors
                        duration-200
                        ${o?u?"text-white":"text-white/75 hover:text-white":u?"text-clw-blue":"text-clw-dark/75 hover:text-clw-blue"}
                      `,children:l.label}),u&&a.jsx(v.span,{layoutId:"clw-nav-active",transition:{type:"spring",stiffness:500,damping:35},className:`
                          absolute
                          -bottom-1
                          left-1/2
                          h-[3px]
                          w-5
                          -translate-x-1/2
                          rounded-full
                          bg-clw-gold
                        `})]})},l.to))}),a.jsxs("div",{className:"hidden items-center gap-3 lg:flex",children:[a.jsxs("a",{href:"https://wa.me/919383349693",target:"_blank",rel:"noopener noreferrer",className:`
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                px-3
                py-2
                text-[13px]
                font-semibold
                transition-all
                duration-200
                ${o?"text-white/85 hover:bg-white/10 hover:text-white":"text-clw-blue hover:bg-clw-bg hover:text-clw-navy"}
              `,children:[a.jsx("span",{className:`
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  transition-transform
                  duration-200
                  group-hover:scale-105
                  ${o?"bg-white/10":"bg-clw-bg"}
                `,children:a.jsx(yi,{size:15})}),a.jsx("span",{children:"WhatsApp"})]}),a.jsxs(F,{to:"/contact",className:`
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-clw-blue
                px-5
                py-3
                text-[13px]
                font-bold
                text-white
                shadow-lg
                shadow-clw-blue/20
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-clw-navy
                hover:shadow-xl
              `,children:["Get Free Consultation",a.jsx(Kt,{size:15,className:`
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                `})]})]}),a.jsx(v.button,{whileTap:{scale:.92},type:"button",onClick:()=>r(l=>!l),"aria-label":n?"Close menu":"Open menu","aria-expanded":n,className:`
              relative
              z-50
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              transition-colors
              lg:hidden
              ${o?"text-white hover:bg-white/10":"text-clw-navy hover:bg-clw-bg"}
            `,children:a.jsx(wn,{mode:"wait",initial:!1,children:n?a.jsx(v.span,{initial:{opacity:0,rotate:-90,scale:.7},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.7},transition:{duration:.2},children:a.jsx(Ij,{size:25})},"close"):a.jsx(v.span,{initial:{opacity:0,rotate:90,scale:.7},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:-90,scale:.7},transition:{duration:.2},children:a.jsx(Pj,{size:25})},"menu")})})]}),a.jsx(wn,{children:n&&a.jsx(v.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3,ease:[.22,1,.36,1]},className:`
                overflow-hidden
                border-t
                border-clw-dark/5
                bg-white
                shadow-2xl
                lg:hidden
              `,children:a.jsxs("nav",{className:`
                  container-clw
                  flex
                  flex-col
                  gap-1
                  py-4
                  sm:py-5
                `,"aria-label":"Mobile navigation",children:[Of.map((l,u)=>a.jsx(v.div,{initial:{opacity:0,x:-15},animate:{opacity:1,x:0},transition:{duration:.25,delay:u*.04},children:a.jsx(yd,{to:l.to,end:l.to==="/",className:({isActive:c})=>`
                          group
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          px-4
                          py-3
                          text-[15px]
                          font-semibold
                          transition-all
                          duration-200
                          ${c?"bg-clw-bg text-clw-blue":"text-clw-dark hover:bg-clw-bg/70 hover:text-clw-blue"}
                        `,children:({isActive:c})=>a.jsxs(a.Fragment,{children:[a.jsx("span",{children:l.label}),c&&a.jsx(v.span,{layoutId:"mobile-nav-active",className:`
                                h-2
                                w-2
                                rounded-full
                                bg-clw-gold
                              `})]})})},l.to)),a.jsxs(v.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3,delay:.25},className:`
                    mt-3
                    flex
                    flex-col
                    gap-3
                    border-t
                    border-clw-dark/10
                    pt-4
                  `,children:[a.jsxs("a",{href:"https://wa.me/919383349693",target:"_blank",rel:"noopener noreferrer",className:`
                      inline-flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-clw-blue/15
                      bg-white
                      px-4
                      py-3
                      text-sm
                      font-bold
                      text-clw-blue
                      shadow-sm
                      transition-all
                      duration-200
                      hover:bg-clw-bg
                    `,children:[a.jsx(yi,{size:18}),"WhatsApp Us"]}),a.jsxs(F,{to:"/contact",className:`
                      group
                      inline-flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-clw-blue
                      px-4
                      py-3
                      text-sm
                      font-bold
                      text-white
                      shadow-lg
                      shadow-clw-blue/20
                      transition-all
                      duration-200
                      hover:bg-clw-navy
                    `,children:["Get Free Consultation",a.jsx(Kt,{size:16,className:`
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                      `})]})]})]})})})]})})}const zf=[{number:"01",title:"Understand Your Requirement",description:"We start by understanding your travel purpose, destination and timeline."},{number:"02",title:"Visa & Document Guidance",description:"You receive clear guidance on the visa category and documents required."},{number:"03",title:"Application Preparation",description:"We help you prepare and organise your application accurately."},{number:"04",title:"Appointment & Submission",description:"Your appointment and submission are coordinated and scheduled."},{number:"05",title:"Travel Arrangements",description:"Flights, hotels and other travel elements are arranged around your plans."},{number:"06",title:"Travel Support",description:"We remain available to support you as your travel date approaches."}],zj=[{question:"What visa services does CLW provide?",answer:"We assist with tourist, business, visitor, student, family/dependent and transit visas, along with documentation support and certificate attestation."},{question:"Which countries do you assist with?",answer:"We provide visa guidance for the UK, USA, Canada, Australia & New Zealand, Schengen countries, Europe, Asia, the Middle East and Africa."},{question:"Do you help with visa documentation?",answer:"Yes. We help you understand the required documents and organise your application documentation clearly and accurately."},{question:"Is visa approval guaranteed?",answer:"No. Visa decisions are made solely by the relevant embassy, consulate or immigration authority. We provide professional guidance and documentation support, but approval cannot be guaranteed."}],Fj=[{title:"Established in 2019",description:"A visa and travel consultancy built on years of consistent, dedicated service."},{title:"Professional Visa Assistance",description:"Structured guidance through every stage of your visa application."},{title:"Personalised Documentation Guidance",description:"Support that is organised around your specific travel requirement."},{title:"Multiple Visa Destinations",description:"Assistance spanning a wide range of countries and visa categories."},{title:"Travel & Booking Support",description:"Flights, hotels and holiday arrangements coordinated alongside your visa."},{title:"Dedicated Customer Service",description:"A team that stays available and responsive throughout your journey."}],fe={name:"CLW Visa Services",tagline:"Visa & Travel Solutions, Made Simple",established:"2019",founders:["Mr. Cyril Poul Rayen","Mr. Bhuvanesh Mahendran"],addressLines:["No. 4, S. No: G8, Alsa Mall","Montieth Road, Egmore","Chennai – 600008","Tamil Nadu, India"],phones:["+91 93833 49693","+91 9840366729"],email:"clwvisa@gmail.com"},lr=[{slug:"visa-assistance",icon:Sj,title:"Visa Assistance",image:"/images/services/visa-assistance1.webp",short:"Professional assistance for visa applications, documentation and appointment procedures.",description:"CLW Visa Services guides you through each stage of the visa process, from understanding the requirements of your destination country to preparing your documentation and booking your appointment. Our team works closely with you to keep the process clear and organised.",points:["Guidance on visa category and requirements","Documentation checklist support","Application form assistance","Appointment scheduling support"]},{slug:"passport-services",icon:vj,title:"Passport Services",image:"/images/services/passport-services.webp",short:"Support with new passport applications, renewals and related documentation.",description:"We assist individuals and families with passport-related documentation and procedures, helping you understand the steps involved for a new passport, renewal or reissue.",points:["New passport application guidance","Renewal and reissue support","Documentation assistance","Appointment coordination"]},{slug:"certificate-attestation",icon:_j,title:"Certificate Legalisation & Attestation",image:"/images/services/certificate-attestation.webp",short:"Assistance with certificate legalisation and attestation for study, work and travel abroad.",description:"Many visa and overseas requirements call for legalised or attested certificates. We help you understand the attestation process for your educational, personal or commercial documents.",points:["Educational certificate attestation guidance","Personal document legalisation support","Process and authority coordination","Document handling support"]},{slug:"flight-booking",icon:Ej,title:"Flight Ticket Booking",image:"/images/services/flight-booking.webp",short:"Domestic and international flight ticket booking support for individuals and groups.",description:"From single travellers to group itineraries, we help you find and book flight options that suit your travel plans and schedule.",points:["Domestic and international bookings","Group travel ticketing","Itinerary planning support","Fare and schedule assistance"]},{slug:"hotel-booking",icon:xj,title:"Hotel Booking",image:"/images/services/hotel-booking.webp",short:"Hotel reservations tailored to your destination, budget and travel dates.",description:"We assist with hotel reservations across a wide range of destinations, helping you find accommodation that fits your itinerary and preferences.",points:["Destination-based hotel search","Budget and preference matching","Booking coordination","Itinerary-aligned stays"]},{slug:"travel-insurance",icon:ar,title:"Travel Insurance",image:"/images/services/travel-insurance.webp",short:"Guidance on travel insurance options for your international journey.",description:"Travel insurance is often a requirement for international travel. We help you understand your options so you can travel with greater peace of mind.",points:["Policy option guidance","Coverage explanation support","Documentation assistance","Application coordination"]},{slug:"holiday-packages",icon:Lj,title:"Holiday Packages",image:"/images/services/holiday-packages.webp",short:"Curated holiday planning support for families, couples and solo travellers.",description:"We help design holiday itineraries that match your interests and schedule, coordinating the travel elements so your trip comes together smoothly.",points:["Personalised itinerary planning","Family, couple and solo travel support","Coordinated bookings","Destination guidance"]},{slug:"corporate-travel",icon:yj,title:"Corporate Travel",image:"/images/services/corporate-travel.webp",short:"Dependable travel coordination for organisations and their travelling teams.",description:"CLW Visa Services supports organisations with the coordination of travel arrangements for teams and employees, aiming for a dependable and organised process.",points:["Team travel coordination","Documentation support for employees","Itinerary management","Ongoing travel support"]},{slug:"business-travel",icon:Yg,title:"Business Travel",image:"/images/services/business-travel.webp",short:"Travel and visa support tailored for business trips and meetings abroad.",description:"For professionals travelling for meetings, conferences or business engagements, we help coordinate the visa and travel elements of your trip.",points:["Business visa guidance","Travel scheduling support","Documentation assistance","Point-of-contact coordination"]},{slug:"group-travel",icon:Dj,title:"Group Travel",image:"/images/services/group-travel.webp",short:"Coordinated visa and travel arrangements for groups travelling together.",description:"Travelling as a group brings its own coordination needs. We help manage documentation and bookings so your group can travel together smoothly.",points:["Group documentation coordination","Group booking support","Itinerary alignment","Single point of contact"]},{slug:"airport-transfers",icon:wj,title:"Airport Transfers",image:"/images/services/airport-transfers.webp",short:"Arrival and departure transfer support to keep your journey seamless.",description:"We help coordinate airport transfer arrangements so your journey between the airport and your destination is comfortable and well planned.",points:["Arrival transfer coordination","Departure transfer coordination","Schedule-based planning","Destination-specific support"]}],Bj=[{title:"Tourist Visa",image:"/images/visatypes/tourist-visa.webp",description:"Assistance for individuals and families travelling abroad for leisure and sightseeing."},{title:"Business Visa",image:"/images/visatypes/business-visa.webp",description:"Support for professionals travelling for meetings, conferences and business engagements."},{title:"Visitor Visa",image:"/images/visatypes/visitor-visa.webp",description:"Guidance for those visiting family, friends or attending personal occasions abroad."},{title:"Student Visa",image:"/images/visatypes/student-visa.webp",description:"Documentation and application guidance for students pursuing studies overseas."},{title:"Family / Dependent Visa",image:"/images/visatypes/family-visa.webp",description:"Assistance for family members joining relatives who are already residing abroad."},{title:"Transit Visa",image:"/images/visatypes/transit-visa.webp",description:"Support for travellers who require a transit visa while journeying through another country."}],Uj=[{label:"Home",to:"/"},{label:"About Us",to:"/about"},{label:"Visa Services",to:"/services"},{label:"Destinations",to:"/destinations"},{label:"Our Process",to:"/process"},{label:"FAQ",to:"/faq"},{label:"Contact Us",to:"/contact"}];function Wj(){return a.jsxs("footer",{className:"bg-clw-navy text-white/70",children:[a.jsx("div",{className:"container-clw py-10 sm:py-12 lg:py-14",children:a.jsxs("div",{className:"grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8",children:[a.jsxs("div",{className:"lg:col-span-4",children:[a.jsx(qg,{light:!0,scale:.9}),a.jsxs("p",{className:"mt-3 max-w-sm text-xs leading-6 text-white/60",children:[fe.tagline,"."]}),a.jsx("p",{className:"mt-2.5 max-w-sm text-xs leading-5 text-white/45",children:"Professional visa assistance and travel documentation support for individuals, families, students and business travellers."}),a.jsxs("a",{href:"https://www.google.com/maps/search/?api=1&query=CLW+Visa+Services+Chennai",target:"_blank",rel:"noopener noreferrer",className:`
                mt-4
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                border
                border-white/10
                bg-white/[0.04]
                px-3
                py-2
                text-[11px]
                font-semibold
                text-white/80
                transition-all
                duration-200
                hover:border-clw-gold/40
                hover:bg-clw-gold
                hover:text-clw-navy
              `,children:[a.jsx(vi,{size:14}),"Find Us on Google Maps",a.jsx(Nj,{size:12})]})]}),a.jsxs("div",{className:"lg:col-span-2",children:[a.jsx("h3",{className:"mb-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white",children:"Quick Links"}),a.jsx("ul",{className:"space-y-2",children:Uj.map(t=>a.jsx("li",{children:a.jsxs(F,{to:t.to,className:`
                      group
                      inline-flex
                      items-center
                      gap-1
                      text-xs
                      transition-colors
                      duration-200
                      hover:text-clw-gold
                    `,children:[t.label,a.jsx(Gt,{size:11,className:`
                        opacity-0
                        transition-all
                        duration-200
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:opacity-100
                      `})]})},t.to))})]}),a.jsxs("div",{className:"lg:col-span-3",children:[a.jsx("h3",{className:"mb-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white",children:"Visa Services"}),a.jsx("ul",{className:"grid grid-cols-2 gap-x-4 gap-y-2",children:lr.map(t=>a.jsx("li",{children:a.jsxs(F,{to:`/services/${t.slug}`,className:`
                      group
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      transition-colors
                      duration-200
                      hover:text-clw-gold
                    `,children:[a.jsx("span",{className:`
                        h-1
                        w-1
                        shrink-0
                        rounded-full
                        bg-clw-gold/70
                        transition-all
                        duration-200
                        group-hover:w-1.5
                      `}),t.title]})},t.slug))})]}),a.jsxs("div",{className:"lg:col-span-3",children:[a.jsx("h3",{className:"mb-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white",children:"Get in Touch"}),a.jsxs("ul",{className:"space-y-2.5 text-xs",children:[a.jsxs("li",{className:"flex items-start gap-2.5",children:[a.jsx("span",{className:"mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.05]",children:a.jsx(vi,{size:14,className:"text-clw-gold"})}),a.jsxs("div",{children:[a.jsx("span",{className:"block text-[9px] uppercase tracking-wider text-white/35",children:"Office"}),a.jsx("span",{className:"mt-0.5 block leading-5 text-white/60",children:"Chennai, Tamil Nadu, India"})]})]}),fe.phones.map(t=>a.jsxs("li",{className:"flex items-center gap-2.5",children:[a.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.05]",children:a.jsx(wi,{size:14,className:"text-clw-gold"})}),a.jsx("a",{href:`tel:${t.replace(/\s/g,"")}`,className:"transition-colors hover:text-clw-gold",children:t})]},t)),a.jsxs("li",{className:"flex items-center gap-2.5",children:[a.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.05]",children:a.jsx(Qs,{size:14,className:"text-clw-gold"})}),a.jsx("a",{href:`mailto:${fe.email}`,className:"break-all transition-colors hover:text-clw-gold",children:fe.email})]})]}),a.jsxs(F,{to:"/contact",className:`
                mt-4
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                bg-clw-gold
                px-4
                py-2.5
                text-[11px]
                font-extrabold
                text-clw-navy
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-[0_8px_20px_rgba(212,167,44,0.2)]
              `,children:["Start Your Visa Enquiry",a.jsx(Gt,{size:13})]})]})]})}),a.jsx("div",{className:"border-t border-white/[0.08]",children:a.jsxs("div",{className:`
            container-clw
            flex
            flex-col
            gap-2.5
            py-4
            text-[10px]
            text-white/40
            sm:flex-row
            sm:items-center
            sm:justify-between
          `,children:[a.jsxs("p",{className:"text-center sm:text-left",children:["© ",new Date().getFullYear()," CLW Visa Services. All Rights Reserved."]}),a.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 sm:justify-end",children:[a.jsx(F,{to:"/privacy-policy#legal-hero",className:"transition-colors hover:text-clw-gold",children:"Privacy Policy"}),a.jsx(F,{to:"/terms#legal-hero",className:"transition-colors hover:text-clw-gold",children:"Terms & Conditions"}),a.jsx(F,{to:"/visa-disclaimer#legal-hero",className:"transition-colors hover:text-clw-gold",children:"Visa Disclaimer"})]})]})})]})}const $j="919383349693",Hj=encodeURIComponent(`Hello CLW Visa Services,

I would like to enquire about your visa and travel services.

Please guide me regarding the visa process, requirements and documentation.

Thank you.`),Kj=`https://wa.me/${$j}?text=${Hj}`;function Gj(){const[e,t]=b.useState(!1);return a.jsxs("div",{className:"fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-5",children:[a.jsx(v.a,{href:"tel:+919383349693","aria-label":"Call CLW Visa Services",initial:{opacity:0,scale:.6,y:15},animate:{opacity:1,scale:1,y:0},transition:{delay:.5,duration:.45,type:"spring",stiffness:220,damping:15},whileHover:{scale:1.08,y:-2},whileTap:{scale:.94},className:`
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-clw-navy
          text-white
          shadow-[0_8px_25px_rgba(23,27,77,0.25)]
          sm:hidden
        `,children:a.jsx(wi,{size:18,strokeWidth:2.2})}),a.jsxs("div",{className:"relative flex items-center",children:[a.jsx(wn,{children:e&&a.jsxs(v.div,{initial:{opacity:0,x:10,scale:.95},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:10,scale:.95},transition:{duration:.2},className:`
                absolute
                right-full
                mr-3
                hidden
                whitespace-nowrap
                rounded-xl
                border
                border-white/10
                bg-clw-navy
                px-3.5
                py-2
                text-[11px]
                font-bold
                text-white
                shadow-[0_10px_30px_rgba(23,27,77,0.25)]
                sm:block
              `,children:[a.jsx("span",{className:"block",children:"Chat with CLW"}),a.jsx("span",{className:"mt-0.5 block text-[9px] font-medium text-white/50",children:"Quick visa assistance"})]})}),a.jsx(v.span,{animate:{scale:[1,1.35,1],opacity:[.35,0,.35]},transition:{duration:2.2,repeat:1/0,ease:"easeOut"},className:`
            pointer-events-none
            absolute
            inset-0
            rounded-full
            bg-[#25D366]
          `}),a.jsxs(v.a,{href:Kj,target:"_blank",rel:"noopener noreferrer","aria-label":"Chat with CLW Visa Services on WhatsApp",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),initial:{opacity:0,scale:.5,y:20},animate:{opacity:1,scale:1,y:0},transition:{delay:.8,duration:.55,type:"spring",stiffness:220,damping:14},whileHover:{scale:1.08,y:-3},whileTap:{scale:.92},className:`
            relative
            z-10
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border-[3px]
            border-white
            bg-[#25D366]
            text-white
            shadow-[0_10px_30px_rgba(37,211,102,0.35)]
            transition-shadow
            duration-300
            hover:shadow-[0_14px_38px_rgba(37,211,102,0.5)]
            sm:h-16
            sm:w-16
          `,children:[a.jsxs("svg",{viewBox:"0 0 32 32",className:"h-7 w-7 fill-white sm:h-8 sm:w-8","aria-hidden":"true",children:[a.jsx("path",{d:"M19.11 17.17c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.71-1.32-1.58-1.48-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.57.66.21 1.26.18 1.74.11.53-.08 1.6-.66 1.83-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.32z"}),a.jsx("path",{d:"M16 3.2A12.8 12.8 0 0 0 5.02 22.58L3.2 28.8l6.38-1.78A12.8 12.8 0 1 0 16 3.2zm0 23.35c-2.01 0-3.97-.54-5.7-1.56l-.41-.24-3.78 1.05 1.01-3.68-.27-.42A10.52 10.52 0 1 1 16 26.55z"})]}),a.jsx(v.span,{animate:{scale:[1,1.15,1]},transition:{duration:1.5,repeat:1/0},className:`
              absolute
              right-0
              top-0
              h-3
              w-3
              rounded-full
              border-2
              border-white
              bg-clw-gold
            `})]})]})]})}function Qj(){const{pathname:e}=Xt();return b.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"in window?"instant":"auto"})},[e]),null}const Yj={hidden:{},show:{transition:{staggerChildren:.12,delayChildren:.15}}},Pr={hidden:{opacity:0,y:18},show:{opacity:1,y:0,transition:{duration:.55,ease:"easeOut"}}};function qj(){return a.jsxs("section",{className:`
        relative
        overflow-hidden
        bg-clw-navy
        bg-cover
        bg-center
        bg-no-repeat
        pt-24
        pb-16
        sm:pt-28
        sm:pb-20
        lg:pt-32
        lg:pb-24
      `,style:{backgroundImage:"url('/images/Travel 1.jpg')"},children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-clw-navy via-clw-navy/90 to-clw-navy/60"}),a.jsxs("div",{className:"pointer-events-none absolute inset-0",children:[a.jsx("div",{className:"absolute -right-24 -top-32 h-80 w-80 rounded-full bg-clw-blue-2/20 blur-3xl"}),a.jsx("div",{className:"absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-clw-blue/20 blur-3xl"}),a.jsxs("svg",{className:"absolute inset-0 h-full w-full opacity-[0.02]","aria-hidden":"true",children:[a.jsx("pattern",{id:"heroDots",width:"28",height:"28",patternUnits:"userSpaceOnUse",children:a.jsx("circle",{cx:"1.5",cy:"1.5",r:"1.2",fill:"white"})}),a.jsx("rect",{width:"100%",height:"100%",fill:"url(#heroDots)"})]}),a.jsxs("svg",{className:`
            absolute
            left-1/2
            top-1/4
            hidden
            h-32
            w-[55%]
            -translate-x-1/2
            opacity-25
            lg:block
          `,viewBox:"0 0 600 160",fill:"none","aria-hidden":"true",children:[a.jsx("path",{d:"M10 140C160 20 440 20 590 140",stroke:"#D4A72C",strokeWidth:"1.5",strokeDasharray:"4 8"}),a.jsx("circle",{cx:"10",cy:"140",r:"3",fill:"#D4A72C"}),a.jsx("circle",{cx:"590",cy:"140",r:"3",fill:"#D4A72C"})]})]}),a.jsxs("div",{className:`
          container-clw
          relative
          grid
          grid-cols-1
          items-center
          gap-10
          lg:grid-cols-2
          lg:gap-12
        `,children:[a.jsxs(v.div,{variants:Yj,initial:"hidden",animate:"show",className:"relative z-10",children:[a.jsxs(v.div,{variants:Pr,className:`
    mt-2
    flex
    items-center
    gap-3
  `,children:[a.jsx(v.span,{initial:{width:0,opacity:0},animate:{width:42,opacity:1},transition:{duration:.7,delay:.35,ease:"easeOut"},className:`
      block
      h-[3px]
      rounded-full
      bg-clw-gold
      shadow-[0_0_10px_rgba(212,167,44,0.65)]
    `}),a.jsxs(v.span,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{duration:.6,delay:.55,ease:"easeOut"},className:`
      relative
      text-sm
      font-bold
      uppercase
      tracking-[0.22em]
      text-white
      drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]
      sm:text-base
    `,children:["Established in 2019",a.jsx(v.span,{initial:{scaleX:0},animate:{scaleX:1},transition:{duration:.8,delay:.75,ease:"easeOut"},className:`
        absolute
        -bottom-1
        left-0
        h-[2px]
        w-full
        origin-left
        rounded-full
        bg-clw-gold/70
      `})]})]}),a.jsxs(v.h1,{variants:Pr,className:`
              mt-4
              font-heading
              text-3xl
              font-bold
              leading-[1.08]
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
              lg:text-[3rem]
              xl:text-[3.3rem]
            `,children:["Visa & Travel",a.jsx("br",{}),"Solutions,",a.jsx("br",{}),a.jsx("span",{className:"text-clw-gold",children:"Made Simple."})]}),a.jsx(v.p,{variants:Pr,className:`
              mt-5
              max-w-lg
              text-sm
              leading-relaxed
              text-white/75
              sm:text-base
            `,children:"Professional visa assistance, travel services and personalised support for individuals, families, students, business travellers and corporate clients."}),a.jsxs(v.div,{variants:Pr,className:`
              mt-7
              flex
              flex-col
              gap-3
              sm:flex-row
            `,children:[a.jsxs(F,{to:"/contact",className:`
                btn-primary
                inline-flex
                items-center
                justify-center
                gap-2
              `,children:["Get Free Consultation",a.jsx(Kt,{size:16})]}),a.jsx(F,{to:"/services",className:`
                btn-ghost-white
                inline-flex
                items-center
                justify-center
              `,children:"Explore Services"})]}),a.jsxs(v.div,{variants:Pr,className:`
              mt-6
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
              text-xs
              font-medium
              text-white/55
            `,children:[a.jsx("span",{children:"Visa Assistance"}),a.jsx("span",{className:"h-1 w-1 rounded-full bg-clw-gold"}),a.jsx("span",{children:"Travel Services"}),a.jsx("span",{className:"h-1 w-1 rounded-full bg-clw-gold"}),a.jsx("span",{children:"Personalised Support"})]})]}),a.jsxs("div",{className:"relative z-10",children:[a.jsxs(v.div,{initial:{opacity:0,scale:.96,x:15},animate:{opacity:1,scale:1,x:0},transition:{duration:.8,ease:"easeOut",delay:.25},className:`
              relative
              mx-auto
              aspect-[4/5]
              w-full
              max-w-[340px]
              overflow-hidden
              rounded-2xl
              border
              border-white/20
              bg-clw-navy
              shadow-2xl
              sm:rounded-[1.5rem]
            `,children:[a.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",className:"absolute inset-0 h-full w-full object-cover",children:a.jsx("source",{src:"/Videos/travel-animation-web.mp4",type:"video/mp4"})}),a.jsx("div",{className:`
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-clw-navy/55
                via-transparent
                to-clw-navy/10
              `}),a.jsx(v.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.8},className:`
                absolute
                left-4
                top-4
                sm:left-5
                sm:top-5
              `,children:a.jsx("div",{className:`
                  inline-flex
                  rounded-full
                  border
                  border-white/20
                  bg-clw-navy/50
                  px-3
                  py-1.5
                  backdrop-blur-md
                `,children:a.jsx("span",{className:`
                    text-[9px]
                    font-semibold
                    tracking-[0.12em]
                    text-white
                    sm:text-[10px]
                  `,children:"VISA • TRAVEL • SUPPORT"})})}),a.jsx(v.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.5,delay:.7},className:`
                absolute
                bottom-3
                left-3
                right-3
                sm:bottom-4
                sm:left-4
                sm:right-4
              `,children:a.jsxs("div",{className:`
                  rounded-xl
                  border
                  border-white/20
                  bg-clw-navy/55
                  p-3
                  backdrop-blur-md
                  sm:p-4
                `,children:[a.jsx("p",{className:`
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-clw-gold
                    sm:text-[10px]
                  `,children:"Your Journey Starts Here"}),a.jsx("p",{className:`
                    mt-1
                    text-xs
                    font-semibold
                    text-white
                    sm:text-sm
                  `,children:"Professional Visa & Travel Assistance"})]})})]}),a.jsxs(v.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.55,delay:.7,ease:"easeOut"},className:`
              animate-float
              absolute
              -bottom-5
              -left-2
              rounded-xl
              bg-white
              p-3
              shadow-xl
              sm:-left-7
              sm:rounded-2xl
              sm:p-4
            `,children:[a.jsxs("p",{className:`
                font-heading
                text-2xl
                font-extrabold
                text-clw-blue
                sm:text-3xl
              `,children:["11",a.jsx("span",{className:"text-clw-gold",children:"+"})]}),a.jsx("p",{className:`
                text-[10px]
                font-medium
                text-clw-muted
                sm:text-xs
              `,children:"Travel Services"}),a.jsxs("div",{className:`
                mt-2
                border-t
                border-clw-dark/10
                pt-2
                sm:mt-3
                sm:pt-3
              `,children:[a.jsx("p",{className:`
                  text-[10px]
                  font-semibold
                  text-clw-navy
                  sm:text-xs
                `,children:"Trusted Travel Support"}),a.jsx("p",{className:`
                  mt-0.5
                  text-[9px]
                  text-clw-muted
                  sm:text-[11px]
                `,children:"Since 2019"})]})]}),a.jsx(v.div,{initial:{opacity:0,scale:.7,y:-15},animate:{opacity:1,scale:1,y:[0,-6,0]},transition:{opacity:{duration:.5,delay:.8},scale:{duration:.5,delay:.8,ease:"easeOut"},y:{duration:3.5,repeat:1/0,ease:"easeInOut",delay:1.2}},className:`
    absolute
    right-1
    top-3
    z-30
    block
    sm:-right-3
    sm:top-5
  `,children:a.jsx("div",{className:`
      flex
      h-16
      w-16
      items-center
      justify-center
      overflow-hidden
      rounded-full
      border-2
      border-white
      bg-white
      p-1
      shadow-xl
      sm:h-24
      sm:w-24
      sm:border-4
    `,children:a.jsx("img",{src:"/images/logo/iata-logo.jpg",alt:"IATA Accredited Travel Agent",className:`
        h-full
        w-full
        object-contain
      `})})})]})]}),a.jsx("div",{className:`
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-clw-gold/40
          to-transparent
        `})]})}function Ff({to:e,suffix:t=""}){const n=b.useRef(null),r=pj(n,{once:!0,amount:.5}),[i,s]=b.useState(0);return b.useEffect(()=>{if(!r)return;let o;const l=1800,u=performance.now(),c=d=>{const f=d-u,p=Math.min(f/l,1),x=1-Math.pow(1-p,3);s(Math.floor(x*e)),p<1?o=requestAnimationFrame(c):s(e)};return o=requestAnimationFrame(c),()=>{o&&cancelAnimationFrame(o)}},[r,e]),a.jsxs("span",{ref:n,children:[i,t]})}const Xj=[{value:2019,label:"Established",type:"year"},{value:11,suffix:"+",label:"Travel Services"},{value:9,suffix:"+",label:"Visa Destinations"}];function Zj(){return a.jsx("section",{className:"relative z-10 -mt-8 sm:-mt-10 lg:-mt-12",children:a.jsx("div",{className:"container-clw",children:a.jsxs(v.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,ease:[.22,1,.36,1]},className:`
            relative
            overflow-hidden
            rounded-2xl
            border
            border-clw-dark/5
            bg-white
            p-6
            shadow-[0_15px_50px_-20px_rgba(23,27,77,0.25)]
            sm:p-8
            lg:p-9
          `,children:[a.jsx("div",{className:"pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-clw-blue/5 blur-3xl"}),a.jsx("div",{className:"pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-clw-gold/5 blur-3xl"}),a.jsxs("div",{className:`
              relative
              grid
              grid-cols-2
              divide-x
              divide-y
              divide-clw-dark/10
              sm:grid-cols-4
              sm:divide-y-0
            `,children:[Xj.map((e,t)=>a.jsxs(v.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.5},transition:{duration:.5,delay:t*.1,ease:"easeOut"},className:`
                  group
                  relative
                  px-4
                  py-5
                  text-center
                  sm:px-5
                  sm:py-2
                  sm:text-left
                  lg:px-7
                `,children:[a.jsx(v.p,{initial:{scale:.8,opacity:0},whileInView:{scale:1,opacity:1},viewport:{once:!0,amount:.5},transition:{duration:.5,delay:t*.1+.15,ease:[.22,1,.36,1]},className:`
                    font-heading
                    text-3xl
                    font-extrabold
                    tracking-tight
                    text-clw-blue
                    sm:text-4xl
                    lg:text-[2.5rem]
                  `,children:e.type==="year"?a.jsx(Ff,{to:e.value}):a.jsx(Ff,{to:e.value,suffix:e.suffix})}),a.jsx("p",{className:`
                    mt-1.5
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-clw-muted
                    sm:text-xs
                  `,children:e.label}),a.jsx(v.span,{initial:{width:0,opacity:0},whileInView:{width:24,opacity:1},viewport:{once:!0},transition:{duration:.5,delay:t*.1+.35},className:`
                    mt-3
                    block
                    h-[2px]
                    rounded-full
                    bg-clw-gold
                  `}),a.jsx("div",{className:`
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-xl
                    bg-clw-blue/[0.02]
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  `})]},e.label)),a.jsxs(v.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.5},transition:{duration:.5,delay:.3,ease:"easeOut"},className:`
                group
                relative
                px-4
                py-5
                text-center
                sm:px-5
                sm:py-2
                sm:text-left
                lg:px-7
              `,children:[a.jsx(v.p,{initial:{scale:.8,opacity:0},whileInView:{scale:1,opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.45,ease:[.22,1,.36,1]},className:`
                  font-heading
                  text-2xl
                  font-extrabold
                  tracking-tight
                  text-clw-navy
                  sm:text-3xl
                  lg:text-[2.2rem]
                `,children:"Chennai"}),a.jsx("p",{className:`
                  mt-1.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-clw-muted
                  sm:text-xs
                `,children:"Head Office"}),a.jsx(v.span,{initial:{width:0,opacity:0},whileInView:{width:24,opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.65},className:`
                  mt-3
                  block
                  h-[2px]
                  rounded-full
                  bg-clw-gold
                `}),a.jsx("div",{className:`
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-xl
                  bg-clw-blue/[0.02]
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                `})]})]})]})})})}const Bf=[{rating:"5.0",text:"Excellent Service"},{rating:"5.0",text:"Trusted Travel Support"},{rating:"5.0",text:"Highly Recommended"}];function Xg(){const[e,t]=b.useState(0);b.useEffect(()=>{const r=setInterval(()=>{t(i=>(i+1)%Bf.length)},3e3);return()=>clearInterval(r)},[]);const n=Bf[e];return a.jsx("section",{className:"section-pad overflow-hidden bg-white",children:a.jsxs("div",{className:"container-clw grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16",children:[a.jsxs(v.div,{initial:{opacity:0,x:-35},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.25},transition:{duration:.7,ease:[.22,1,.36,1]},className:`
            relative
            order-2
            mx-auto
            w-full
            max-w-md
            lg:order-1
          `,children:[a.jsxs(v.div,{whileHover:{y:-5},transition:{duration:.3,ease:"easeOut"},className:`
              relative
              aspect-[4/5]
              w-full
              overflow-hidden
              rounded-[1.75rem]
              bg-clw-navy
              shadow-[0_25px_60px_-20px_rgba(23,27,77,0.35)]
            `,children:[a.jsx("img",{src:"/images/logo/clw-about.png",alt:"CLW Visa Services - Visa and Travel Services",className:`
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              `,loading:"lazy"}),a.jsx("div",{className:`
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-clw-navy/75
                via-transparent
                to-clw-navy/10
              `}),a.jsx("div",{className:`
                pointer-events-none
                absolute
                -bottom-20
                -left-20
                h-48
                w-48
                rounded-full
                bg-clw-gold/10
                blur-3xl
              `}),a.jsx(v.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.35},className:`
                absolute
                bottom-5
                left-5
                right-5
                sm:bottom-6
                sm:left-6
                sm:right-6
              `,children:a.jsxs("div",{className:`
                  rounded-2xl
                  border
                  border-white/20
                  bg-clw-navy/55
                  p-4
                  backdrop-blur-md
                `,children:[a.jsx("p",{className:`
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-clw-gold
                  `,children:"Trusted Travel Support"}),a.jsxs("p",{className:`
                    mt-1
                    text-sm
                    font-semibold
                    text-white
                  `,children:["Visa & Travel Solutions Since"," ",fe.established]})]})})]}),a.jsx(v.div,{initial:{opacity:0,x:12,y:-12},whileInView:{opacity:1,x:0,y:0},viewport:{once:!0},transition:{duration:.7,delay:.2},className:`
              pointer-events-none
              absolute
              -right-3
              -top-3
              -z-10
              hidden
              h-full
              w-full
              rounded-[1.75rem]
              border-2
              border-clw-gold/35
              sm:block
            `}),a.jsx(v.div,{initial:{opacity:0,scale:.8,y:20},whileInView:{opacity:1,scale:1,y:0},viewport:{once:!0,amount:.4},transition:{duration:.7,delay:.45,ease:[.22,1,.36,1]},className:`
  absolute
  -right-3
  -top-5
  z-20
  rounded-2xl
  border
  border-clw-gold/40
  bg-white
  px-4
  py-3
  shadow-[0_18px_45px_rgba(23,27,77,0.2)]
  sm:-right-6
  sm:py-4
  sm:px-5
`,children:a.jsxs(v.div,{animate:{y:[0,-5,0]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},children:[a.jsx(wn,{mode:"wait",children:a.jsxs(v.div,{initial:{opacity:0,x:-18},animate:{opacity:1,x:0},exit:{opacity:0,x:18},transition:{duration:.45,ease:"easeOut"},className:"flex items-center gap-2",children:[a.jsx("span",{className:`
                      font-heading
                      text-2xl
                      font-black
                      tracking-tight
                      text-clw-navy
                      sm:text-3xl
                    `,children:n.rating}),a.jsx("div",{className:"flex items-center gap-0.5",children:[0,1,2,3,4].map((r,i)=>a.jsx(v.span,{initial:{opacity:0,scale:0,rotate:-30},animate:{opacity:1,scale:[1,1.12,1],rotate:0},transition:{opacity:{duration:.3,delay:i*.07},rotate:{duration:.3,delay:i*.07},scale:{duration:1.2,delay:i*.1,repeat:1/0,repeatDelay:2.2,ease:"easeInOut"}},className:`
                          text-clw-gold
                          drop-shadow-[0_1px_2px_rgba(212,167,44,0.45)]
                        `,children:a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:a.jsx("path",{d:"M12 2.5l2.95 5.98 6.6.96-4.78 4.66 1.13 6.58L12 17.57l-5.9 3.11 1.13-6.58-4.78-4.66 6.6-.96L12 2.5z"})})},r))})]},e)}),a.jsx("div",{className:"relative mt-1 h-4 overflow-hidden",children:a.jsx(wn,{mode:"wait",children:a.jsx(v.p,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.4},className:`
                      absolute
                      left-0
                      whitespace-nowrap
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-clw-muted
                      sm:text-[10px]
                    `,children:n.text},e)})}),a.jsx(v.div,{animate:{scaleX:[.3,1,.3]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},className:`
                  mt-2
                  h-[2px]
                  origin-left
                  rounded-full
                  bg-clw-gold
                `})]})})]}),a.jsxs(v.div,{initial:{opacity:0,x:35},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.25},transition:{duration:.7,ease:[.22,1,.36,1]},className:"order-1 lg:order-2",children:[a.jsxs(v.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.25},transition:{duration:.6,ease:[.22,1,.36,1]},children:[a.jsx(v.span,{initial:{opacity:0,scale:.85},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.45,delay:.1},className:`
        inline-flex
        items-center
        rounded-full
        border
        border-clw-gold/35
        bg-clw-gold/10
        px-4
        py-1.5
        text-[10px]
        font-extrabold
        uppercase
        tracking-[0.16em]
        text-clw-gold
        sm:px-5
        sm:py-2
        sm:text-[11px]
      `,children:"About CLW Visa Services"}),a.jsx(v.h2,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.55,delay:.18},className:`
        mt-4
        max-w-xl
        font-heading
        text-2xl
        font-extrabold
        leading-tight
        tracking-tight
        text-clw-navy
        sm:text-3xl
        lg:text-4xl
      `,children:"Your Trusted Visa & Travel Partner"})]}),a.jsxs("p",{className:`
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-clw-muted
              sm:mt-6
              sm:text-base
            `,children:["CLW Visa Services was established in"," ",fe.established," with a vision to provide reliable and professional visa and travel services to individuals, families, students, business travellers and corporate clients."]}),a.jsxs("div",{className:`
              mt-6
              rounded-2xl
              border
              border-clw-dark/[0.06]
              bg-clw-bg/70
              p-5
              sm:p-6
            `,children:[a.jsx("p",{className:`
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-clw-blue
              `,children:"Founded By"}),a.jsx("div",{className:"mt-3 space-y-2",children:fe.founders.map(r=>a.jsxs(v.div,{whileHover:{x:3},transition:{duration:.2},className:`
                    flex
                    items-center
                    gap-2.5
                    text-sm
                    font-semibold
                    text-clw-navy
                  `,children:[a.jsx(bn,{size:16,className:"shrink-0 text-clw-gold"}),a.jsx("span",{children:r})]},r))})]}),a.jsx("div",{className:`
              mt-6
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
            `,children:[{text:"Personalised Service",color:"text-clw-blue",bg:"bg-clw-blue/10"},{text:"Professional Guidance",color:"text-clw-gold",bg:"bg-clw-gold/10"},{text:"Documentation Support",color:"text-clw-blue",bg:"bg-clw-blue/10"},{text:"Dedicated Support",color:"text-clw-gold",bg:"bg-clw-gold/10"}].map((r,i)=>a.jsxs(v.div,{initial:{opacity:0,x:-10},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.4,delay:i*.08},className:"flex items-center gap-3",children:[a.jsx("span",{className:`
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    ${r.bg}
                  `,children:a.jsx(bn,{size:17,className:r.color})}),a.jsx("span",{className:"text-sm font-medium text-clw-dark",children:r.text})]},r.text))}),a.jsxs(v.p,{initial:{opacity:0,x:-10},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5,delay:.25},className:`
              mt-6
              text-xs
              font-bold
              uppercase
              tracking-[0.15em]
              text-clw-gold
            `,children:["Established in ",fe.established]}),a.jsxs(F,{to:"/about",className:`
              group
              mt-5
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-clw-blue
              px-5
              py-3
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-clw-blue/15
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-clw-navy
              hover:shadow-xl
            `,children:["Discover Our Story",a.jsx(Kt,{size:16,className:`
                transition-transform
                duration-200
                group-hover:translate-x-1
              `})]})]})]})})}function ur({eyebrow:e,title:t,description:n,align:r="center",light:i=!1}){const s=r==="left";return a.jsxs(v.div,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.25},transition:{duration:.6,ease:[.22,1,.36,1]},className:`
        ${s?"text-left":"text-center"}
      `,children:[a.jsx(v.span,{initial:{opacity:0,scale:.85},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.45,delay:.1,ease:"easeOut"},className:`
          inline-flex
          items-center
          rounded-full
          border
          px-4
          py-1.5
          text-[10px]
          font-extrabold
          uppercase
          tracking-[0.18em]
          backdrop-blur-sm
          sm:px-5
          sm:py-2
          sm:text-[11px]

          ${i?"border-clw-gold/40 bg-clw-gold/10 text-clw-gold":"border-clw-gold/35 bg-clw-gold/10 text-clw-blue"}
        `,children:e}),a.jsx(v.h2,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.55,delay:.18,ease:[.22,1,.36,1]},className:`
          mt-4
          max-w-3xl
          font-heading
          text-2xl
          font-extrabold
          leading-tight
          tracking-tight
          sm:text-3xl
          lg:text-4xl

          ${i?"text-white":"text-clw-navy"}

          ${s?"":"mx-auto"}
        `,children:t}),n&&a.jsx(v.p,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.28},className:`
            mt-3
            max-w-2xl
            text-sm
            leading-relaxed
            sm:text-base

            ${i?"text-white/60":"text-clw-muted"}

            ${s?"":"mx-auto"}
          `,children:n})]})}const Jj={hidden:{opacity:0,y:15},show:{opacity:1,y:0,transition:{duration:.45,ease:[.22,1,.36,1]}}};function e5({service:e,index:t=0}){return a.jsxs(v.article,{variants:Jj,whileHover:{y:-5},transition:{duration:.25},className:`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-clw-navy/[0.08]
        bg-white
        shadow-[0_8px_25px_rgba(23,27,77,0.08)]
        transition-all
        duration-300
        hover:border-clw-blue/15
        hover:shadow-[0_16px_35px_rgba(23,27,77,0.14)]
      `,children:[a.jsxs("div",{className:`
          relative
          aspect-[16/8]
          overflow-hidden
          bg-clw-navy
        `,children:[a.jsx("img",{src:e.image,alt:e.title,loading:"lazy",className:`
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          `}),a.jsx("div",{className:`
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-clw-navy/55
            via-transparent
            to-transparent
          `}),a.jsx("span",{className:`
            absolute
            right-3
            top-3
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            border
            border-white/35
            bg-white/15
            text-[8px]
            font-bold
            text-white
            backdrop-blur-md
          `,children:String(t+1).padStart(2,"0")})]}),a.jsxs("div",{className:"bg-white p-4 sm:p-4.5",children:[a.jsx("h3",{className:`
            font-heading
            text-[14px]
            font-extrabold
            leading-tight
            tracking-tight
            text-clw-navy
            transition-colors
            duration-200
            group-hover:text-clw-blue
            sm:text-[15px]
          `,children:e.title}),a.jsx("p",{className:`
            mt-1.5
            line-clamp-2
            text-[10px]
            leading-[1.55]
            text-clw-muted
            sm:text-[11px]
          `,children:e.short}),a.jsxs(F,{to:`/services/${e.slug}`,className:`
            group/link
            mt-3
            inline-flex
            items-center
            gap-1
            text-[10px]
            font-bold
            text-clw-blue
            transition-colors
            duration-200
            hover:text-clw-gold
            sm:text-[11px]
          `,children:["Explore Service",a.jsx(Gt,{size:12,className:`
              transition-transform
              duration-300
              group-hover/link:translate-x-0.5
              group-hover/link:-translate-y-0.5
            `})]})]})]})}const t5={hidden:{},show:{transition:{staggerChildren:.07}}};function Zg({items:e}){return a.jsx(v.div,{variants:t5,initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.1},className:`
        grid
        grid-cols-1
        gap-3
        sm:grid-cols-2
        lg:grid-cols-3
        lg:gap-4
      `,children:e.map((t,n)=>a.jsx(e5,{service:t,index:n},t.slug))})}const n5={hidden:{},show:{transition:{staggerChildren:.07}}},r5={hidden:{opacity:0,y:15},show:{opacity:1,y:0,transition:{duration:.45,ease:[.22,1,.36,1]}}};function Jg(){return a.jsx("section",{className:"section-pad overflow-hidden bg-white",children:a.jsxs("div",{className:"container-clw",children:[a.jsxs(v.div,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.5,ease:"easeOut"},className:`
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-end
            sm:justify-between
          `,children:[a.jsx(ur,{align:"left",eyebrow:"Visa Assistance",title:"Expert Guidance for Your Global Journey",description:"Professional visa support to help you travel with confidence."}),a.jsxs(F,{to:"/contact",className:`
              group
              inline-flex
              shrink-0
              items-center
              gap-1.5
              self-start
              rounded-full
              border
              border-clw-blue/15
              bg-clw-blue/[0.04]
              px-4
              py-2
              text-[11px]
              font-bold
              text-clw-blue
              transition-all
              duration-200
              hover:border-clw-blue
              hover:bg-clw-blue
              hover:text-white
              sm:self-auto
            `,children:["Check Visa Requirements",a.jsx(Gt,{size:13,className:`
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              `})]})]}),a.jsx(v.div,{variants:n5,initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.1},className:`
            mt-8
            grid
            grid-cols-1
            gap-3
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-4
          `,children:Bj.map((e,t)=>a.jsxs(v.article,{variants:r5,whileHover:{y:-5},className:`
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-clw-navy/[0.08]
                bg-white
                shadow-[0_8px_25px_rgba(23,27,77,0.08)]
                transition-all
                duration-300
                hover:border-clw-blue/15
                hover:shadow-[0_16px_35px_rgba(23,27,77,0.14)]
              `,children:[a.jsxs("div",{className:`
                  relative
                  aspect-[16/8]
                  overflow-hidden
                  bg-clw-navy
                `,children:[a.jsx("img",{src:e.image,alt:e.title,loading:"lazy",className:`
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  `}),a.jsx("div",{className:`
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-clw-navy/55
                    via-transparent
                    to-transparent
                  `}),a.jsx("span",{className:`
                    absolute
                    right-3
                    top-3
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/35
                    bg-white/15
                    text-[8px]
                    font-bold
                    text-white
                    backdrop-blur-md
                  `,children:String(t+1).padStart(2,"0")})]}),a.jsxs("div",{className:"bg-white p-4 sm:p-4.5",children:[a.jsx("h3",{className:`
                    font-heading
                    text-[14px]
                    font-extrabold
                    leading-tight
                    tracking-tight
                    text-clw-navy
                    transition-colors
                    duration-200
                    group-hover:text-clw-blue
                    sm:text-[15px]
                  `,children:e.title}),a.jsx("p",{className:`
                    mt-1.5
                    line-clamp-2
                    text-[10px]
                    leading-[1.55]
                    text-clw-muted
                    sm:text-[11px]
                  `,children:e.description}),a.jsxs(F,{to:"/contact",className:`
                    group/link
                    mt-3
                    inline-flex
                    items-center
                    gap-1
                    text-[10px]
                    font-bold
                    text-clw-blue
                    transition-colors
                    duration-200
                    hover:text-clw-gold
                    sm:text-[11px]
                  `,children:["Explore Visa",a.jsx(Gt,{size:12,className:`
                      transition-transform
                      duration-300
                      group-hover/link:translate-x-0.5
                      group-hover/link:-translate-y-0.5
                    `})]})]})]},e.title))})]})})}const i5={hidden:{opacity:0,y:15},show:{opacity:1,y:0,transition:{duration:.45,ease:[.22,1,.36,1]}}};function e0({destination:e,index:t=0}){return a.jsxs(v.article,{variants:i5,whileHover:{y:-5},className:`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-clw-navy/[0.08]
        bg-white
        shadow-[0_8px_25px_rgba(23,27,77,0.08)]
        transition-all
        duration-300
        hover:shadow-[0_16px_35px_rgba(23,27,77,0.14)]
      `,children:[a.jsxs("div",{className:`
          relative
          aspect-[16/8]
          overflow-hidden
          bg-clw-navy
        `,children:[a.jsx("img",{src:e.image,alt:e.name,loading:"lazy",className:`
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          `}),a.jsx("div",{className:`
            absolute
            inset-0
            bg-gradient-to-t
            from-clw-navy/50
            via-transparent
            to-transparent
          `}),a.jsx("span",{className:`
            absolute
            right-3
            top-3
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            border
            border-white/40
            bg-white/20
            text-[8px]
            font-bold
            text-white
            backdrop-blur-md
          `,children:String(t+1).padStart(2,"0")})]}),a.jsxs("div",{className:"bg-white p-4 sm:p-4.5",children:[a.jsx("h3",{className:`
            font-heading
            text-[15px]
            font-extrabold
            leading-tight
            tracking-tight
            text-clw-navy
            transition-colors
            duration-200
            group-hover:text-clw-blue
            sm:text-base
          `,children:e.name}),a.jsx("p",{className:`
            mt-1.5
            line-clamp-2
            text-[10px]
            leading-[1.55]
            text-clw-muted
            sm:text-[11px]
          `,children:e.description}),a.jsxs(F,{to:`/destinations/${e.slug}`,className:`
    group/link
    mt-3
    inline-flex
    items-center
    gap-1
    text-[10px]
    font-bold
    text-clw-blue
    transition-colors
    duration-200
    hover:text-clw-gold
    sm:text-[11px]
  `,children:["Explore Destination",a.jsx(Gt,{size:12,className:`
      transition-transform
      duration-300
      group-hover/link:translate-x-0.5
      group-hover/link:-translate-y-0.5
    `})]})]})]})}const Uf={hidden:{},show:{transition:{staggerChildren:.15}}},Wf={hidden:{opacity:0,y:25,scale:.92},show:{opacity:1,y:0,scale:1,transition:{duration:.55,ease:[.22,1,.36,1]}}};function t0(){return a.jsx("section",{className:"relative overflow-hidden bg-clw-bg py-16 sm:py-20",children:a.jsxs("div",{className:"container-clw",children:[a.jsx(v.div,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.6,ease:"easeOut"},children:a.jsx(ur,{eyebrow:"Our Process",title:"Simple. Clear. Hassle-Free.",description:"A straightforward process designed to make your visa journey easier."})}),a.jsxs(v.div,{variants:Uf,initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.2},className:"relative mt-8 hidden lg:block",children:[a.jsx("div",{className:`
              absolute
              left-[8%]
              right-[8%]
              top-[29px]
              h-[2px]
              rounded-full
              bg-clw-navy/10
            `}),a.jsx(v.div,{initial:{scaleX:0},whileInView:{scaleX:1},viewport:{once:!0,amount:.3},transition:{duration:1.8,ease:[.22,1,.36,1]},className:`
              absolute
              left-[8%]
              right-[8%]
              top-[29px]
              h-[2px]
              origin-left
              rounded-full
              bg-clw-gold
            `}),a.jsx("div",{className:"grid grid-cols-6 gap-5",children:zf.map((e,t)=>a.jsxs(v.div,{variants:Wf,className:"group relative",children:[a.jsxs(v.div,{whileHover:{scale:1.12},transition:{type:"spring",stiffness:300,damping:15},className:`
                    relative
                    z-10
                    mb-5
                    flex
                    h-[58px]
                    w-[58px]
                    items-center
                    justify-center
                    rounded-full
                    border-[3px]
                    border-white
                    bg-clw-blue
                    text-sm
                    font-extrabold
                    text-white
                    shadow-[0_8px_20px_rgba(23,27,77,0.18)]
                    transition-colors
                    duration-300
                    group-hover:bg-clw-navy
                  `,children:[e.number,a.jsx(v.span,{initial:{scale:1,opacity:.5},animate:{scale:[1,1.25,1],opacity:[.45,0,.45]},transition:{duration:2.2,repeat:1/0,delay:t*.25,ease:"easeOut"},className:`
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-full
                      border
                      border-clw-gold
                    `}),a.jsx(v.span,{animate:{scale:[1,1.5,1]},transition:{duration:1.8,repeat:1/0,delay:t*.2},className:`
                      absolute
                      -right-0.5
                      -top-0.5
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-clw-gold
                      ring-2
                      ring-white
                    `})]}),a.jsx("h3",{className:`
                    font-heading
                    text-sm
                    font-extrabold
                    text-clw-navy
                    transition-colors
                    duration-300
                    group-hover:text-clw-blue
                  `,children:e.title}),a.jsx("p",{className:`
                    mt-1.5
                    max-w-[170px]
                    text-[11px]
                    leading-relaxed
                    text-clw-muted
                  `,children:e.description}),a.jsx(v.div,{initial:{width:0},whileInView:{width:"32px"},viewport:{once:!0},transition:{duration:.5,delay:.4+t*.1},className:`
                    mt-3
                    h-[2px]
                    rounded-full
                    bg-clw-gold
                  `})]},e.number))})]}),a.jsxs(v.div,{variants:Uf,initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.1},className:`
            relative
            mt-10
            space-y-7
            lg:hidden
          `,children:[a.jsx("div",{className:`
              absolute
              left-[27px]
              top-2
              bottom-2
              w-[2px]
              rounded-full
              bg-clw-navy/10
            `}),a.jsx(v.div,{initial:{scaleY:0},whileInView:{scaleY:1},viewport:{once:!0,amount:.1},transition:{duration:1.8,ease:[.22,1,.36,1]},className:`
              absolute
              left-[27px]
              top-2
              bottom-2
              w-[2px]
              origin-top
              rounded-full
              bg-clw-gold
            `}),zf.map((e,t)=>a.jsxs(v.div,{variants:Wf,className:"group relative flex gap-4",children:[a.jsxs(v.div,{whileTap:{scale:.95},className:`
                  relative
                  z-10
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border-[3px]
                  border-white
                  bg-clw-blue
                  text-sm
                  font-extrabold
                  text-white
                  shadow-[0_6px_18px_rgba(23,27,77,0.16)]
                `,children:[e.number,a.jsx(v.span,{animate:{scale:[1,1.25,1],opacity:[.4,0,.4]},transition:{duration:2.2,repeat:1/0,delay:t*.25},className:`
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-clw-gold
                  `})]}),a.jsxs(v.div,{whileHover:{x:4},className:`
                  flex-1
                  rounded-xl
                  border
                  border-clw-navy/[0.06]
                  bg-white
                  p-4
                  shadow-[0_6px_20px_rgba(23,27,77,0.06)]
                  transition-shadow
                  duration-300
                  group-hover:shadow-[0_10px_25px_rgba(23,27,77,0.10)]
                `,children:[a.jsx("h3",{className:`
                    font-heading
                    text-sm
                    font-extrabold
                    text-clw-navy
                    group-hover:text-clw-blue
                  `,children:e.title}),a.jsx("p",{className:`
                    mt-1.5
                    text-[11px]
                    leading-relaxed
                    text-clw-muted
                  `,children:e.description})]})]},e.number))]})]})})}const s5={"Professional Guidance":"Expert Guidance","Personalised Support":"Personal Support","Complete Travel Solutions":"Travel Support","Transparent Process":"Transparent Process","Experienced Team":"Experienced Team","Reliable Service":"Reliable Service"};function n0(){return a.jsxs("section",{className:`
        relative
        overflow-hidden
        bg-clw-navy
        py-14
        sm:py-16
      `,style:{backgroundImage:"url('/images/why-choose-us.jpg')",backgroundSize:"cover",backgroundPosition:"center"},children:[a.jsx("div",{className:"absolute inset-0 bg-clw-navy/[0.93]"}),a.jsx("div",{className:"pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-clw-blue/20 blur-3xl"}),a.jsx("div",{className:"pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-clw-blue-2/15 blur-3xl"}),a.jsxs("div",{className:"container-clw relative",children:[a.jsxs(v.div,{initial:{opacity:0,y:15,scale:.95},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.55,ease:[.22,1,.36,1]},className:"flex flex-col items-center text-center",children:[a.jsx(v.span,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.45,delay:.1,ease:"easeOut"},className:`
      inline-flex
      items-center
      rounded-full
      border
      border-clw-gold/40
      bg-clw-gold/10
      px-4
      py-1.5
      text-[10px]
      font-extrabold
      uppercase
      tracking-[0.18em]
      text-clw-gold
      shadow-[0_4px_15px_rgba(212,167,44,0.08)]
      backdrop-blur-sm
      sm:px-5
      sm:py-2
      sm:text-[11px]
    `,children:"Why Choose CLW?"}),a.jsx(v.h2,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.55,delay:.2,ease:[.22,1,.36,1]},className:`
      mt-4
      max-w-3xl
      font-heading
      text-2xl
      font-extrabold
      leading-tight
      tracking-tight
      text-white
      sm:text-3xl
      lg:text-4xl
    `,children:"Trusted Support. Seamless Travel."})]}),a.jsx(v.div,{initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.1},variants:{hidden:{},show:{transition:{staggerChildren:.07}}},className:`
            mt-8
            grid
            grid-cols-2
            gap-2.5
            sm:grid-cols-2
            sm:gap-3
            lg:grid-cols-3
          `,children:Fj.map((e,t)=>a.jsxs(v.article,{variants:{hidden:{opacity:0,y:16,scale:.97},show:{opacity:1,y:0,scale:1,transition:{duration:.45,ease:[.22,1,.36,1]}}},whileHover:{y:-4},className:`
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-white/[0.10]
                bg-white/[0.055]
                p-3
                shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-clw-gold/30
                hover:bg-white/[0.09]
                hover:shadow-[0_14px_30px_rgba(0,0,0,0.20)]
                sm:p-4
              `,children:[a.jsx("div",{className:`
                  pointer-events-none
                  absolute
                  -right-8
                  -top-8
                  h-20
                  w-20
                  rounded-full
                  bg-clw-gold/10
                  blur-2xl
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                `}),a.jsx("span",{className:`
                  absolute
                  right-2.5
                  top-2.5
                  text-[7px]
                  font-bold
                  tracking-widest
                  text-white/20
                `,children:String(t+1).padStart(2,"0")}),a.jsx(v.div,{whileHover:{scale:1.08,rotate:5},className:`
                  mb-2.5
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-clw-gold/20
                  bg-clw-gold/[0.08]
                  text-clw-gold
                `,children:a.jsx(bn,{size:16,strokeWidth:2})}),a.jsx("h3",{className:`
                  font-heading
                  text-[12px]
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-clw-gold
                  sm:text-[13px]
                `,children:s5[e.title]||e.title}),a.jsx("p",{className:`
                  mt-1
                  line-clamp-2
                  text-[9px]
                  leading-[1.55]
                  text-white/50
                  sm:text-[10px]
                `,children:e.description})]},e.title))})]})]})}const o5=[{type:"Mission",icon:Mj,title:"Our Mission",description:"To provide reliable, transparent and personalised visa and travel solutions while making the travel preparation process simple and convenient for our clients.",dark:!0},{type:"Vision",icon:kj,title:"Our Vision",description:"To become a trusted and preferred visa and travel services provider, recognised for professional service, customer care and dependable travel solutions.",dark:!1}];function r0(){return a.jsxs("section",{className:"relative overflow-hidden bg-clw-bg py-14 sm:py-16 lg:py-20",children:[a.jsx("div",{className:`
          pointer-events-none
          absolute
          -left-32
          top-10
          h-64
          w-64
          rounded-full
          bg-clw-blue/5
          blur-3xl
        `}),a.jsx("div",{className:`
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-64
          w-64
          rounded-full
          bg-clw-gold/5
          blur-3xl
        `}),a.jsxs("div",{className:"container-clw relative",children:[a.jsxs(v.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.25},transition:{duration:.55},className:"mb-8 text-center",children:[a.jsx("span",{className:`
              inline-flex
              items-center
              rounded-full
              border
              border-clw-gold/35
              bg-clw-gold/10
              px-4
              py-1.5
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.18em]
              text-clw-blue
              sm:px-5
              sm:py-2
              sm:text-[11px]
            `,children:"Our Purpose"}),a.jsx("h2",{className:`
              mx-auto
              mt-4
              max-w-2xl
              font-heading
              text-2xl
              font-extrabold
              leading-tight
              tracking-tight
              text-clw-navy
              sm:text-3xl
              lg:text-4xl
            `,children:"Driven by Purpose. Built on Trust."})]}),a.jsx("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:o5.map((e,t)=>{const n=e.icon;return a.jsxs(v.article,{initial:{opacity:0,y:22,scale:.97},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,amount:.2},transition:{duration:.55,delay:t*.08,ease:[.22,1,.36,1]},whileHover:{y:-5},className:`
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  p-5
                  shadow-[0_10px_30px_rgba(23,27,77,0.08)]
                  transition-all
                  duration-300
                  sm:p-6
                  ${e.dark?`
                        bg-clw-navy
                        text-white
                        hover:shadow-[0_18px_40px_rgba(23,27,77,0.18)]
                      `:`
                        border
                        border-clw-navy/[0.07]
                        bg-white
                        text-clw-navy
                        hover:border-clw-blue/15
                        hover:shadow-[0_18px_40px_rgba(23,27,77,0.12)]
                      `}
                `,children:[a.jsx("div",{className:`
                    pointer-events-none
                    absolute
                    -right-8
                    -top-8
                    h-24
                    w-24
                    rounded-full
                    transition-transform
                    duration-500
                    group-hover:scale-125
                    ${e.dark?"bg-white/[0.06]":"bg-clw-gold/[0.08]"}
                  `}),a.jsxs("span",{className:`
                    absolute
                    right-4
                    top-4
                    text-[8px]
                    font-extrabold
                    tracking-[0.18em]
                    ${e.dark?"text-white/25":"text-clw-navy/20"}
                  `,children:["0",t+1]}),a.jsx(v.div,{whileHover:{scale:1.08,rotate:4},transition:{type:"spring",stiffness:300,damping:15},className:`
                    relative
                    mb-4
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    ${e.dark?"border-clw-gold/25 bg-clw-gold/10 text-clw-gold":"border-clw-blue/10 bg-clw-blue/[0.06] text-clw-blue"}
                  `,children:a.jsx(n,{size:19,strokeWidth:1.8})}),a.jsxs("p",{className:`
                    mb-1
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    ${e.dark?"text-clw-gold":"text-clw-blue"}
                  `,children:["CLW ",e.type]}),a.jsx("h3",{className:`
                    font-heading
                    text-lg
                    font-extrabold
                    tracking-tight
                    sm:text-xl
                    ${e.dark?"text-white":"text-clw-navy"}
                  `,children:e.title}),a.jsx("p",{className:`
                    mt-2
                    max-w-xl
                    text-[11px]
                    leading-[1.65]
                    sm:text-xs
                    ${e.dark?"text-white/60":"text-clw-muted"}
                  `,children:e.description}),a.jsxs("div",{className:`
                    mt-4
                    flex
                    items-center
                    gap-1.5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-wider
                    ${e.dark?"text-clw-gold":"text-clw-blue"}
                  `,children:["Learn More",a.jsx(Gt,{size:12,className:`
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    `})]})]},e.type)})})]})]})}const $f={name:"",phone:"",email:"",service:"",destination:"",message:""};function i0(){const[e,t]=b.useState($f),[n,r]=b.useState({}),[i,s]=b.useState(!1),o=d=>f=>{t(p=>({...p,[d]:f.target.value})),n[d]&&r(p=>({...p,[d]:""}))},l=()=>{const d={};return e.name.trim()||(d.name="Enter your full name."),e.phone.trim()||(d.phone="Enter your phone number."),e.email.trim()?/^\S+@\S+\.\S+$/.test(e.email)||(d.email="Enter a valid email address."):d.email="Enter your email address.",e.service||(d.service="Select a service."),d},u=d=>{d.preventDefault();const f=l();r(f),Object.keys(f).length===0&&(s(!0),t($f))},c=d=>`
    w-full
    rounded-xl
    border
    bg-clw-bg/40
    px-3.5
    py-3
    text-xs
    font-medium
    text-clw-navy
    outline-none
    transition-all
    duration-200
    placeholder:text-clw-muted/50
    focus:bg-white
    focus:ring-4
    focus:ring-clw-blue/5
    ${n[d]?"border-red-400 focus:border-red-400":"border-clw-dark/[0.08] focus:border-clw-blue/40"}
  `;return a.jsxs("div",{className:"relative overflow-hidden rounded-2xl border border-clw-dark/[0.07] bg-white p-5 shadow-[0_12px_40px_rgba(23,27,77,0.07)] sm:p-6",children:[a.jsx("div",{className:"absolute left-6 right-6 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-clw-gold to-transparent"}),a.jsxs("div",{className:"mb-5",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-clw-blue/10 bg-clw-blue/[0.04] px-3 py-1",children:[a.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-clw-gold"}),a.jsx("span",{className:"text-[9px] font-extrabold uppercase tracking-[0.16em] text-clw-blue",children:"Quick Enquiry"})]}),a.jsx("h3",{className:"mt-3 font-heading text-xl font-extrabold tracking-tight text-clw-navy sm:text-2xl",children:"Tell Us About Your Journey"}),a.jsx("p",{className:"mt-1.5 max-w-md text-xs leading-relaxed text-clw-muted",children:"Share your requirements and our team will get back to you."})]}),a.jsxs("form",{onSubmit:u,noValidate:!0,className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[a.jsxs("div",{className:"sm:col-span-2",children:[a.jsx("label",{htmlFor:"name",className:"mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-clw-navy",children:"Full Name"}),a.jsxs("div",{className:"relative",children:[a.jsx(Rj,{size:15,className:"pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-clw-blue/60"}),a.jsx("input",{id:"name",type:"text",value:e.name,onChange:o("name"),placeholder:"Your full name",className:`${c("name")} pl-10`})]}),n.name&&a.jsx("p",{className:"mt-1 text-[10px] font-medium text-red-500",children:n.name})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"phone",className:"mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-clw-navy",children:"Phone Number"}),a.jsxs("div",{className:"relative",children:[a.jsx(wi,{size:15,className:"pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-clw-blue/60"}),a.jsx("input",{id:"phone",type:"tel",value:e.phone,onChange:o("phone"),placeholder:"Your phone number",className:`${c("phone")} pl-10`})]}),n.phone&&a.jsx("p",{className:"mt-1 text-[10px] font-medium text-red-500",children:n.phone})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"email",className:"mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-clw-navy",children:"Email Address"}),a.jsxs("div",{className:"relative",children:[a.jsx(Qs,{size:15,className:"pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-clw-blue/60"}),a.jsx("input",{id:"email",type:"email",value:e.email,onChange:o("email"),placeholder:"Your email address",className:`${c("email")} pl-10`})]}),n.email&&a.jsx("p",{className:"mt-1 text-[10px] font-medium text-red-500",children:n.email})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"service",className:"mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-clw-navy",children:"Service Required"}),a.jsxs("div",{className:"relative",children:[a.jsx(Yg,{size:15,className:"pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-clw-blue/60"}),a.jsxs("select",{id:"service",value:e.service,onChange:o("service"),className:`${c("service")} pl-10`,children:[a.jsx("option",{value:"",children:"Select a service"}),lr.map(d=>a.jsx("option",{value:d.title,children:d.title},d.slug))]})]}),n.service&&a.jsx("p",{className:"mt-1 text-[10px] font-medium text-red-500",children:n.service})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"destination",className:"mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-clw-navy",children:"Destination"}),a.jsxs("div",{className:"relative",children:[a.jsx(vi,{size:15,className:"pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-clw-blue/60"}),a.jsx("input",{id:"destination",type:"text",value:e.destination,onChange:o("destination"),placeholder:"Where are you travelling?",className:`${c("destination")} pl-10`})]})]}),a.jsxs("div",{className:"sm:col-span-2",children:[a.jsx("label",{htmlFor:"message",className:"mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-clw-navy",children:"Message"}),a.jsxs("div",{className:"relative",children:[a.jsx(Tj,{size:15,className:"pointer-events-none absolute left-3.5 top-4 text-clw-blue/60"}),a.jsx("textarea",{id:"message",rows:3,value:e.message,onChange:o("message"),placeholder:"Tell us briefly about your travel plans...",className:`${c("message")} min-h-[90px] resize-none pl-10`})]})]}),a.jsx("div",{className:"sm:col-span-2",children:a.jsxs(v.button,{type:"submit",whileHover:{y:-2},whileTap:{scale:.98},className:"group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-clw-blue px-5 py-3 text-xs font-extrabold text-white shadow-[0_8px_20px_rgba(23,27,77,0.16)] transition-all duration-300 hover:bg-clw-navy hover:shadow-[0_12px_28px_rgba(23,27,77,0.22)]",children:["Send Enquiry",a.jsx(Aj,{size:14,className:"transition-transform duration-300 group-hover:translate-x-1"})]})})]}),a.jsx(wn,{children:i&&a.jsxs(v.div,{initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.96},className:"absolute inset-0 z-20 flex flex-col items-center justify-center rounded-2xl bg-white/95 p-6 text-center backdrop-blur-md",children:[a.jsx(v.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:220,damping:15},className:"flex h-14 w-14 items-center justify-center rounded-full bg-clw-blue/[0.08] text-clw-blue",children:a.jsx(bn,{size:30,strokeWidth:1.8})}),a.jsx("h3",{className:"mt-4 font-heading text-lg font-extrabold text-clw-navy",children:"Enquiry Sent"}),a.jsx("p",{className:"mt-1.5 max-w-xs text-xs leading-relaxed text-clw-muted",children:"Thank you for contacting CLW Visa Services. Our team will get back to you shortly."}),a.jsx("button",{type:"button",onClick:()=>s(!1),className:"mt-5 rounded-full border border-clw-blue/15 bg-clw-blue/[0.04] px-4 py-2 text-[10px] font-bold text-clw-blue transition-all hover:bg-clw-blue hover:text-white",children:"Send Another Enquiry"})]})})]})}function Sn(){return a.jsxs("section",{className:`
        relative
        overflow-hidden
        bg-clw-navy
        bg-cover
        bg-center
        bg-no-repeat
        py-16
        sm:py-20
      `,style:{backgroundImage:"url('/images/sections/cta-background1.webp')"},children:[a.jsx("div",{className:`
          absolute
          inset-0
          bg-clw-navy/55
        `}),a.jsx(v.div,{animate:{x:[0,18,0],y:[0,-10,0],scale:[1,1.08,1]},transition:{duration:9,repeat:1/0,ease:"easeInOut"},className:`
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-clw-blue-2/20
          blur-3xl
        `}),a.jsx(v.div,{animate:{x:[0,-15,0],y:[0,10,0],scale:[1,1.06,1]},transition:{duration:11,repeat:1/0,ease:"easeInOut"},className:`
          pointer-events-none
          absolute
          -bottom-24
          -left-24
          h-64
          w-64
          rounded-full
          bg-clw-blue/20
          blur-3xl
        `}),a.jsx(v.div,{animate:{opacity:[.15,.35,.15],scale:[1,1.12,1]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},className:`
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-clw-gold/5
          blur-3xl
        `}),a.jsx("div",{className:"container-clw relative z-10",children:a.jsxs(v.div,{initial:{opacity:0,y:25,scale:.97},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,amount:.25},transition:{duration:.65,ease:[.22,1,.36,1]},className:`
            group
            relative
            mx-auto
            max-w-4xl
            overflow-hidden
            rounded-2xl
            border
            border-white/20
            bg-white/[0.08]
            px-5
            py-8
            text-center
            shadow-[0_20px_60px_rgba(0,0,0,0.22)]
            backdrop-blur-[4px]
            sm:px-10
            sm:py-10
          `,children:[a.jsx("div",{className:`
              pointer-events-none
              absolute
              inset-0
              bg-white/[0.035]
            `}),a.jsx("div",{className:`
              pointer-events-none
              absolute
              inset-0
              rounded-2xl
              ring-1
              ring-inset
              ring-white/[0.08]
            `}),a.jsxs("div",{className:"relative z-10",children:[a.jsx(v.div,{initial:{width:0,opacity:0},whileInView:{width:"80px",opacity:1},viewport:{once:!0},transition:{duration:.6,delay:.15,ease:"easeOut"},className:`
                absolute
                left-1/2
                top-[-32px]
                h-[2px]
                -translate-x-1/2
                rounded-full
                bg-clw-gold
                shadow-[0_0_12px_rgba(212,167,44,0.5)]
              `}),a.jsx(v.span,{initial:{opacity:0,scale:.85},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.45,delay:.1},className:`
                inline-flex
                items-center
                rounded-full
                border
                border-clw-gold/40
                bg-clw-gold/10
                px-3
                py-1
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                text-clw-gold
                backdrop-blur-sm
              `,children:"Start Your Journey"}),a.jsx(v.h2,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.55,delay:.16},className:`
                mx-auto
                mt-4
                max-w-2xl
                font-heading
                text-2xl
                font-extrabold
                leading-tight
                tracking-tight
                text-white
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
                sm:text-3xl
                lg:text-4xl
              `,children:"Planning Your Next Journey?"}),a.jsx(v.p,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.24},className:`
                mx-auto
                mt-3
                max-w-lg
                text-xs
                leading-relaxed
                text-white/80
                drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]
                sm:text-sm
              `,children:"Let CLW Visa Services make your visa and travel process simple, organised and stress-free."}),a.jsxs(v.div,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.32},className:`
                mt-6
                flex
                flex-col
                items-center
                justify-center
                gap-2.5
                sm:flex-row
              `,children:[a.jsxs(F,{to:"/contact",className:`
                  group/consult
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-clw-gold
                  px-5
                  py-2.5
                  text-[11px]
                  font-extrabold
                  text-clw-navy
                  shadow-[0_8px_20px_rgba(212,167,44,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#e2b83b]
                  hover:shadow-[0_12px_28px_rgba(212,167,44,0.35)]
                  active:translate-y-0
                `,children:["Get Free Consultation",a.jsx(Kt,{size:14,className:`
                    transition-transform
                    duration-300
                    group-hover/consult:translate-x-1
                  `})]}),a.jsxs("a",{href:"https://wa.me/919383349693",target:"_blank",rel:"noopener noreferrer",className:`
                  group/whatsapp
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[#25D366]/60
                  bg-[#25D366]/10
                  px-5
                  py-2.5
                  text-[11px]
                  font-extrabold
                  text-[#25D366]
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#25D366]
                  hover:bg-[#25D366]
                  hover:text-white
                  hover:shadow-[0_10px_25px_rgba(37,211,102,0.25)]
                  active:translate-y-0
                `,children:[a.jsx(yi,{size:15,strokeWidth:2.3,className:`
                    transition-transform
                    duration-300
                    group-hover/whatsapp:scale-110
                  `}),"WhatsApp Us"]})]})]})]})})]})}function a5({faq:e,isOpen:t,onToggle:n,index:r}){return a.jsxs(v.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.45,delay:r*.06,ease:[.22,1,.36,1]},whileHover:{y:-2},className:`
        group
        overflow-hidden
        rounded-xl
        border
        border-clw-navy/[0.07]
        bg-white
        shadow-[0_6px_24px_rgba(23,27,77,0.05)]
        transition-all
        duration-300
        hover:border-clw-blue/15
        hover:shadow-[0_12px_30px_rgba(23,27,77,0.08)]
      `,children:[a.jsxs("button",{type:"button",onClick:n,"aria-expanded":t,className:`
          flex
          w-full
          items-center
          justify-between
          gap-4
          px-4
          py-4
          text-left
          sm:px-5
        `,children:[a.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[a.jsx("span",{className:`
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              text-[9px]
              font-extrabold
              transition-all
              duration-300
              ${t?"bg-clw-blue text-white":"bg-clw-bg text-clw-blue"}
            `,children:String(r+1).padStart(2,"0")}),a.jsx("span",{className:`
              font-heading
              text-xs
              font-bold
              leading-5
              transition-colors
              duration-200
              sm:text-sm
              ${t?"text-clw-blue":"text-clw-navy"}
            `,children:e.question})]}),a.jsx(v.span,{animate:{rotate:t?45:0,backgroundColor:t?"#303795":"#f4f5fb",color:t?"#ffffff":"#303795"},transition:{duration:.25},className:`
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
          `,children:a.jsx(Vj,{size:15,strokeWidth:2.2})})]}),a.jsx(wn,{initial:!1,children:t&&a.jsx(v.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:[.22,1,.36,1]},children:a.jsxs("div",{className:"px-4 pb-4 pl-[3.75rem] sm:px-5 sm:pb-5 sm:pl-[4.25rem]",children:[a.jsx(v.div,{initial:{width:0},animate:{width:42},transition:{duration:.35,delay:.05},className:`
                  mb-3
                  h-[2px]
                  rounded-full
                  bg-clw-gold
                `}),a.jsx("p",{className:`
                  text-xs
                  leading-6
                  text-clw-muted
                  sm:text-sm
                  sm:leading-6
                `,children:e.answer})]})})})]})}function s0({showHeading:e=!0}){const[t,n]=b.useState(0),r=zj.slice(0,4);return a.jsx("section",{className:"bg-transparent",children:a.jsxs("div",{className:"container-clw",children:[e&&a.jsxs(v.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.25},transition:{duration:.5},className:"mb-8 text-center",children:[a.jsxs("div",{className:`
                mx-auto
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-clw-blue/15
                bg-white
                px-4
                py-1.5
                shadow-sm
              `,children:[a.jsx("span",{className:`
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-clw-gold
                `}),a.jsx("span",{className:`
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.18em]
                  text-clw-blue
                `,children:"FAQ"})]}),a.jsx("h2",{className:`
                mt-4
                font-heading
                text-2xl
                font-extrabold
                text-clw-navy
                sm:text-3xl
              `,children:"Frequently Asked Questions"})]}),a.jsx("div",{className:"mx-auto max-w-4xl space-y-3",children:r.map((i,s)=>a.jsx(a5,{faq:i,index:s,isOpen:t===s,onToggle:()=>n(t===s?-1:s)},i.question))})]})})}function o0(){return a.jsx("section",{className:"bg-clw-bg pb-12 sm:pb-16",children:a.jsx("div",{className:"container-clw",children:a.jsxs(v.div,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.5,ease:[.22,1,.36,1]},className:`
            group
            mx-auto
            flex
            max-w-3xl
            items-start
            gap-3
            rounded-xl
            border
            border-clw-blue/10
            bg-white/90
            px-4
            py-4
            shadow-[0_6px_20px_rgba(23,27,77,0.05)]
            transition-all
            duration-300
            hover:border-clw-blue/20
            hover:shadow-[0_10px_28px_rgba(23,27,77,0.08)]
            sm:px-5
            sm:py-4
          `,children:[a.jsx("div",{className:`
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-clw-blue/15
              bg-clw-blue/[0.06]
              text-clw-blue
              transition-all
              duration-300
              group-hover:bg-clw-blue
              group-hover:text-white
            `,children:a.jsx(Cj,{size:14,strokeWidth:2.2})}),a.jsxs("div",{className:"min-w-0",children:[a.jsx("h3",{className:`
                font-heading
                text-[11px]
                font-extrabold
                uppercase
                tracking-[0.08em]
                text-clw-navy
                sm:text-xs
              `,children:"Important Visa Disclaimer"}),a.jsx("p",{className:`
                mt-1
                text-[11px]
                leading-relaxed
                text-clw-muted
                sm:text-xs
                sm:leading-5
              `,children:"CLW Visa Services provides visa assistance and documentation support. Visa decisions are solely made by the respective embassy, consulate or immigration authority. Visa approval is not guaranteed. Fees, processing times and requirements may change according to the respective authorities."})]})]})})})}const tc=[{name:"United Kingdom",slug:"united-kingdom",tag:"Visa Assistance",image:"/images/destinations/uk.webp",description:"Guidance for tourist, business and family visa applications to the UK.",countries:["England","Scotland","Wales","Northern Ireland"]},{name:"United States",slug:"united-states",tag:"Visa Assistance",image:"/images/destinations/usa.webp",description:"Documentation and application support for US visa categories.",countries:["United States"]},{name:"Canada",slug:"canada",tag:"Visa Assistance",image:"/images/destinations/canada.webp",description:"Support for visitor, business and study-related travel to Canada.",countries:["Canada"]},{name:"Australia & New Zealand",slug:"australia-new-zealand",tag:"Visa Assistance",image:"/images/destinations/australia-new-zealand.webp",description:"Assistance for travellers heading to Australia and New Zealand.",countries:["Australia","New Zealand"]},{name:"Schengen Countries",slug:"schengen-countries",tag:"Visa Assistance",image:"/images/destinations/schengen.webp",description:"Guidance across the Schengen visa process for European travel.",countries:["Austria","Belgium","Croatia","Czech Republic","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Iceland","Italy","Latvia","Liechtenstein","Lithuania","Luxembourg","Malta","Netherlands","Norway","Poland","Portugal","Slovakia","Slovenia","Spain","Sweden","Switzerland"]},{name:"European Countries",slug:"european-countries",tag:"Visa Assistance",image:"/images/destinations/europe.webp",description:"Support for travel and visa requirements across Europe.",countries:["France","Germany","Italy","Spain","Portugal","Greece","Switzerland","Austria","Belgium","Netherlands","Ireland","United Kingdom","Norway","Sweden","Denmark","Finland","Poland","Czech Republic","Hungary"]},{name:"Asian Countries",slug:"asian-countries",tag:"Visa Assistance",image:"/images/destinations/asia.webp",description:"Assistance for travel across major Asian destinations.",countries:["India","Singapore","Malaysia","Thailand","Japan","South Korea","Indonesia","Vietnam","Philippines","China","Hong Kong","Sri Lanka","Nepal","Maldives","Cambodia"]},{name:"Middle East Countries",slug:"middle-east-countries",tag:"Visa Assistance",image:"/images/destinations/middle-east.webp",description:"Guidance for business and family travel across the Middle East.",countries:["United Arab Emirates","Saudi Arabia","Qatar","Oman","Bahrain","Kuwait","Jordan","Israel","Turkey"]},{name:"African Countries",slug:"african-countries",tag:"Visa Assistance",image:"/images/destinations/africa.webp",description:"Support for travel and visa documentation across African destinations.",countries:["South Africa","Egypt","Kenya","Mauritius","Seychelles","Tanzania","Morocco","Nigeria","Ghana","Ethiopia"]}];function l5(){return a.jsxs(a.Fragment,{children:[a.jsx(qj,{}),a.jsx(Zj,{}),a.jsx(Xg,{}),a.jsxs("section",{className:"relative overflow-hidden bg-clw-bg section-pad",children:[a.jsx("div",{className:`
            pointer-events-none
            absolute
            -right-40
            top-20
            h-80
            w-80
            rounded-full
            bg-clw-blue/5
            blur-3xl
          `}),a.jsx("div",{className:`
            pointer-events-none
            absolute
            -left-40
            bottom-10
            h-80
            w-80
            rounded-full
            bg-clw-gold/5
            blur-3xl
          `}),a.jsxs("div",{className:"container-clw relative",children:[a.jsx(ur,{eyebrow:"Our Services",title:"Complete Visa & Travel Solutions",description:"Professional services to make your journey simple, organised and stress-free."}),a.jsx("div",{className:"mt-10 sm:mt-12",children:a.jsx(Zg,{items:lr})})]})]}),a.jsx(Jg,{}),a.jsxs("section",{className:"relative overflow-hidden bg-clw-bg section-pad",children:[a.jsx("div",{className:`
            pointer-events-none
            absolute
            -left-40
            top-20
            h-80
            w-80
            rounded-full
            bg-clw-blue/5
            blur-3xl
          `}),a.jsxs("div",{className:"container-clw relative",children:[a.jsxs("div",{className:`
              flex
              flex-col
              gap-6
              sm:flex-row
              sm:items-end
              sm:justify-between
            `,children:[a.jsx(ur,{align:"left",eyebrow:"Visa Destinations",title:"Explore the World With Confidence",description:"Visa assistance for popular destinations across Europe, Asia, the Middle East and beyond."}),a.jsxs(F,{to:"/destinations",className:`
                group
                inline-flex
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-clw-blue/15
                bg-white
                px-5
                py-2.5
                text-xs
                font-bold
                text-clw-blue
                shadow-sm
                transition-all
                duration-300
                hover:border-clw-blue
                hover:bg-clw-blue
                hover:text-white
                sm:mb-1
              `,children:["View All Destinations",a.jsx("span",{className:`
                  ml-2
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                `,children:"→"})]})]}),a.jsx("div",{className:`
              mt-10
              grid
              grid-cols-1
              gap-4
              sm:mt-12
              sm:grid-cols-2
              lg:grid-cols-3
            `,children:tc.slice(0,6).map((e,t)=>a.jsx(e0,{destination:e,index:t},e.name))})]})]}),a.jsx(t0,{}),a.jsx(n0,{}),a.jsx(r0,{}),a.jsx(Sn,{}),a.jsx("section",{className:"relative overflow-hidden bg-clw-bg section-pad",children:a.jsxs("div",{className:"container-clw",children:[a.jsxs(v.div,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.25},transition:{duration:.55,ease:[.22,1,.36,1]},className:"mb-10 text-center",children:[a.jsxs("span",{className:`
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-clw-blue/15
                bg-white
                px-4
                py-1.5
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                text-clw-blue
                shadow-[0_5px_18px_rgba(23,27,77,0.06)]
              `,children:[a.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-clw-gold"}),"Get In Touch"]}),a.jsx("h2",{className:`
                mx-auto
                mt-4
                max-w-2xl
                font-heading
                text-3xl
                font-extrabold
                tracking-tight
                text-clw-navy
                sm:text-4xl
              `,children:"Let's Start Your Journey"}),a.jsx("p",{className:`
                mx-auto
                mt-3
                max-w-xl
                text-sm
                leading-relaxed
                text-clw-muted
              `,children:"Have questions about your visa or travel plans? Our team is here to help."})]}),a.jsxs("div",{className:`
              grid
              grid-cols-1
              gap-6
              lg:grid-cols-2
            `,children:[a.jsx(v.div,{initial:{opacity:0,x:-25},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:{duration:.6,ease:[.22,1,.36,1]},className:`
                overflow-hidden
                rounded-2xl
                border
                border-clw-dark/[0.06]
                bg-white
                p-5
                shadow-[0_10px_35px_rgba(23,27,77,0.06)]
                sm:p-6
              `,children:a.jsx(i0,{})}),a.jsx(v.div,{initial:{opacity:0,x:25},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:{duration:.6,delay:.1,ease:[.22,1,.36,1]},className:`
                relative
                min-h-[380px]
                overflow-hidden
                rounded-2xl
                border
                border-clw-dark/[0.06]
                bg-white
                shadow-[0_10px_35px_rgba(23,27,77,0.06)]
              `,children:a.jsx("iframe",{title:"CLW Visa Services Location",src:"https://www.google.com/maps?q=Alsa+Mall+Montieth+Road+Egmore+Chennai+600008&output=embed",className:"absolute inset-0 h-full w-full border-0",loading:"lazy",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade"})})]})]})}),a.jsx(s0,{}),a.jsx(o0,{})]})}function u5(){return a.jsxs(a.Fragment,{children:[a.jsxs("section",{className:"relative min-h-[520px] overflow-hidden bg-clw-navy sm:min-h-[580px]",children:[a.jsx("div",{className:`
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
          `,style:{backgroundImage:"url('/images/sections/about-hero.webp')"}}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-clw-navy via-clw-navy/80 to-clw-navy/25"}),a.jsx("div",{className:"absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-clw-navy/70 to-transparent"}),a.jsx(v.div,{animate:{x:[0,20,0],y:[0,-12,0],scale:[1,1.08,1]},transition:{duration:9,repeat:1/0,ease:"easeInOut"},className:`
            pointer-events-none
            absolute
            -right-24
            top-10
            h-72
            w-72
            rounded-full
            bg-clw-blue-2/20
            blur-3xl
          `}),a.jsx("div",{className:"container-clw relative flex min-h-[520px] items-center sm:min-h-[580px]",children:a.jsxs(v.div,{initial:{opacity:0,x:-35},animate:{opacity:1,x:0},transition:{duration:.8,ease:[.22,1,.36,1]},className:"max-w-2xl",children:[a.jsxs(v.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.5,delay:.15},className:`
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-clw-gold/30
                bg-white/[0.08]
                px-3.5
                py-1.5
                backdrop-blur-md
              `,children:[a.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-clw-gold"}),a.jsx("span",{className:`
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                text-clw-gold
                sm:text-[10px]
              `,children:"About CLW Visa Services"})]}),a.jsxs(v.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.65,delay:.25},className:`
                mt-5
                font-heading
                text-4xl
                font-extrabold
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              `,children:["Your Trusted",a.jsx("span",{className:"block text-clw-gold",children:"Visa & Travel Partner"})]}),a.jsxs(v.p,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.6,delay:.38},className:`
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-white/65
                sm:text-base
              `,children:[fe.tagline," since ",fe.established,". We help individuals, families, students and business travellers navigate visa and travel requirements with confidence."]}),a.jsxs(v.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.6,delay:.5},className:`
                mt-7
                flex
                flex-wrap
                gap-2.5
              `,children:[a.jsxs("div",{className:`
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.07]
                px-3
                py-2
                text-[10px]
                font-semibold
                text-white/80
                backdrop-blur-md
              `,children:[a.jsx(ar,{size:14,className:"text-clw-gold"}),"Professional Support"]}),a.jsxs("div",{className:`
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.07]
                px-3
                py-2
                text-[10px]
                font-semibold
                text-white/80
                backdrop-blur-md
              `,children:[a.jsx(jl,{size:14,className:"text-clw-gold"}),"Global Travel Assistance"]})]})]})}),a.jsxs(v.div,{animate:{y:[0,7,0]},transition:{duration:1.8,repeat:1/0,ease:"easeInOut"},className:`
            absolute
            bottom-6
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-1.5
            text-white/40
            sm:flex
          `,children:[a.jsx("span",{className:"text-[8px] font-bold uppercase tracking-[0.2em]",children:"Discover"}),a.jsx(ec,{size:14})]})]}),a.jsx(Xg,{}),a.jsx(r0,{}),a.jsx(n0,{}),a.jsx(Sn,{})]})}const c5={hidden:{},show:{transition:{staggerChildren:.12}}},la={hidden:{opacity:0,y:20},show:{opacity:1,y:0,transition:{duration:.6,ease:[.22,1,.36,1]}}};function d5(){return a.jsxs(a.Fragment,{children:[a.jsxs("section",{className:`
          relative
          overflow-hidden
          bg-clw-navy
          bg-cover
          bg-center
          bg-no-repeat
        `,style:{backgroundImage:"url('/images/sections/services-background.webp')"},children:[a.jsx("div",{className:"absolute inset-0 bg-clw-navy/55"}),a.jsx("div",{className:`
            absolute
            inset-0
            bg-gradient-to-r
            from-clw-navy/70
            via-clw-navy/35
            to-transparent
          `}),a.jsx(v.div,{animate:{x:[0,25,0],y:[0,-12,0],scale:[1,1.08,1]},transition:{duration:9,repeat:1/0,ease:"easeInOut"},className:`
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-clw-blue-2/20
            blur-3xl
          `}),a.jsx("div",{className:`
            container-clw
            relative
            flex
            min-h-[400px]
            items-center
            justify-center
            py-16
            text-center
            sm:min-h-[440px]
            sm:py-20
            lg:min-h-[470px]
          `,children:a.jsxs(v.div,{variants:c5,initial:"hidden",animate:"show",className:"max-w-3xl",children:[a.jsxs(v.div,{variants:la,className:`
                mx-auto
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-clw-gold/30
                bg-white/[0.08]
                px-4
                py-1.5
                backdrop-blur-md
              `,children:[a.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-clw-gold"}),a.jsx("span",{className:`
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.2em]
                  text-clw-gold
                `,children:"Our Services"})]}),a.jsxs(v.h1,{variants:la,className:`
                mt-5
                font-heading
                text-4xl
                font-extrabold
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              `,children:["Complete Visa & Travel",a.jsx("br",{className:"hidden sm:block"}),a.jsxs("span",{className:"text-clw-gold",children:[" ","Solutions Under One Roof"]})]}),a.jsx(v.p,{variants:la,className:`
                mx-auto
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-white/70
                sm:text-base
              `,children:"Professional visa assistance, documentation and travel support designed to make your journey simple and stress-free."})]})})]}),a.jsxs("section",{className:`
          relative
          overflow-hidden
          bg-clw-bg
          py-14
          sm:py-16
          lg:py-20
        `,children:[a.jsx("div",{className:`
            pointer-events-none
            absolute
            inset-0
            bg-cover
            bg-center
            opacity-[0.045]
          `,style:{backgroundImage:"url('/images/sections/travel-pattern.jpg')"}}),a.jsx("div",{className:`
            pointer-events-none
            absolute
            -left-40
            top-20
            h-80
            w-80
            rounded-full
            bg-clw-blue/5
            blur-3xl
          `}),a.jsx("div",{className:`
            pointer-events-none
            absolute
            -right-40
            bottom-10
            h-80
            w-80
            rounded-full
            bg-clw-gold/5
            blur-3xl
          `}),a.jsxs("div",{className:"container-clw relative",children:[a.jsx(v.div,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.25},transition:{duration:.55,ease:[.22,1,.36,1]},className:`
              mb-8
              text-center
              sm:mb-10
            `,children:a.jsx(ur,{eyebrow:"What We Offer",title:"Professional Travel Support",description:"Explore our visa and travel services designed around your journey."})}),a.jsx(Zg,{items:lr})]})]}),a.jsx(Jg,{}),a.jsx(Sn,{})]})}function f5(){const{slug:e}=pm(),t=lr.find(i=>i.slug===e);if(!t)return a.jsx(ky,{to:"/services",replace:!0});const n=t.icon,r=lr.filter(i=>i.slug!==e).slice(0,3);return a.jsxs(a.Fragment,{children:[a.jsxs("section",{className:"relative overflow-hidden bg-clw-navy",children:[a.jsx("div",{className:"absolute inset-0",children:a.jsx("img",{src:t.image,alt:"","aria-hidden":"true",className:"h-full w-full object-cover"})}),a.jsx("div",{className:"absolute inset-0 bg-clw-navy/40"}),a.jsx("div",{className:`
            absolute
            inset-0
            bg-gradient-to-r
            from-clw-navy/90
            via-clw-navy/75
            to-clw-navy/35
          `}),a.jsx(v.div,{animate:{x:[0,20,0],y:[0,-12,0],scale:[1,1.08,1]},transition:{duration:9,repeat:1/0,ease:"easeInOut"},className:`
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-80
            w-80
            rounded-full
            bg-clw-blue/20
            blur-3xl
          `}),a.jsxs("div",{className:`
            container-clw
            relative
            min-h-[430px]
            sm:min-h-[460px]
            lg:min-h-[480px]
          `,children:[a.jsx(v.div,{initial:{opacity:0,x:-15},animate:{opacity:1,x:0},transition:{duration:.5,delay:.1,ease:[.22,1,.36,1]},className:`
              absolute
              left-3
              top-16
              z-50

              sm:left-6
              sm:top-24

              lg:left-8
              lg:top-28
            `,children:a.jsxs(F,{to:"/services",className:`
                group
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-white/30
                bg-white/15
                px-3
                py-1.5
                text-[10px]
                font-bold
                text-white
                shadow-[0_8px_30px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:border-clw-gold
                hover:bg-clw-gold
                hover:text-clw-navy

                sm:gap-2.5
                sm:px-6
                sm:py-3
                sm:text-sm
              `,children:[a.jsx("span",{className:`
                  text-sm
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1

                  sm:text-base
                `,children:"←"}),a.jsx("span",{children:"Back to Services"})]})}),a.jsx("div",{className:`
              flex
              min-h-[430px]
              items-center
              justify-center
              px-4
              pb-16
              pt-32

              sm:min-h-[460px]
              sm:px-6
              sm:pt-28

              lg:min-h-[480px]
              lg:pt-32
            `,children:a.jsxs(v.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.7,ease:[.22,1,.36,1]},className:`
                flex
                w-full
                max-w-4xl
                flex-col
                items-center
                text-center
              `,children:[a.jsxs(v.div,{initial:{opacity:0,scale:.92,y:10},animate:{opacity:1,scale:1,y:0},transition:{duration:.5,delay:.1,ease:[.22,1,.36,1]},className:`
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  border
                  border-clw-gold/40
                  bg-white/[0.08]
                  px-5
                  py-2
                  shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                  backdrop-blur-xl
                `,children:[a.jsx("span",{className:`
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-clw-gold/30
                    bg-clw-gold/10
                  `,children:a.jsx(n,{size:13,strokeWidth:2.2,className:"text-clw-gold"})}),a.jsx("span",{className:`
                    text-[9px]
                    font-extrabold
                    uppercase
                    tracking-[0.22em]
                    text-clw-gold

                    sm:text-[10px]
                  `,children:"Our Services"}),a.jsx("span",{className:`
                    h-1
                    w-1
                    rounded-full
                    bg-clw-gold
                  `})]}),a.jsx(v.h1,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.6,delay:.18},className:`
                  mt-5
                  max-w-4xl
                  font-heading
                  text-4xl
                  font-extrabold
                  leading-[1.05]
                  tracking-tight
                  text-white

                  sm:text-5xl

                  lg:text-6xl
                `,children:t.title}),a.jsx(v.div,{initial:{width:0,opacity:0},animate:{width:58,opacity:1},transition:{duration:.55,delay:.3},className:`
                  mt-5
                  h-[2px]
                  rounded-full
                  bg-clw-gold
                  shadow-[0_0_14px_rgba(212,167,44,0.45)]
                `}),a.jsx(v.p,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.35},className:`
                  mx-auto
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-7
                  text-white/75

                  sm:text-base
                `,children:t.description})]})})]})]}),a.jsxs("section",{className:`
          relative
          overflow-hidden
          bg-clw-bg
          py-14
          sm:py-16
          lg:py-20
        `,children:[a.jsx("div",{className:`
            pointer-events-none
            absolute
            -left-40
            top-20
            h-80
            w-80
            rounded-full
            bg-clw-blue/5
            blur-3xl
          `}),a.jsx("div",{className:`
            pointer-events-none
            absolute
            -right-40
            bottom-20
            h-80
            w-80
            rounded-full
            bg-clw-gold/5
            blur-3xl
          `}),a.jsxs("div",{className:"container-clw relative",children:[a.jsxs("div",{className:`
              grid
              gap-8

              lg:grid-cols-[1.5fr_0.75fr]
              lg:gap-10
            `,children:[a.jsxs(v.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.6},className:`
                overflow-hidden
                rounded-3xl
                border
                border-clw-dark/[0.06]
                bg-white
                shadow-card
              `,children:[a.jsxs("div",{className:`
                  relative
                  h-56
                  overflow-hidden

                  sm:h-72
                `,children:[a.jsx("img",{src:t.image,alt:t.title,className:`
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  `}),a.jsx("div",{className:`
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-clw-navy/60
                    via-transparent
                    to-transparent
                  `}),a.jsxs("div",{className:`
                    absolute
                    bottom-5
                    left-5
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-clw-navy/70
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-white
                    backdrop-blur-md
                  `,children:[a.jsx(n,{size:13,className:"text-clw-gold"}),t.title]})]}),a.jsxs("div",{className:"p-6 sm:p-8",children:[a.jsxs("div",{className:`
                    mb-6
                    flex
                    items-center
                    gap-3
                  `,children:[a.jsx("span",{className:`
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-clw-blue/10
                      text-clw-blue
                    `,children:a.jsx(n,{size:21,strokeWidth:1.8})}),a.jsxs("div",{children:[a.jsx("p",{className:`
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-clw-blue
                      `,children:"Professional Support"}),a.jsx("h2",{className:`
                        mt-0.5
                        font-heading
                        text-xl
                        font-bold
                        text-clw-navy
                      `,children:"What's Included"})]})]}),a.jsx("p",{className:`
                    text-sm
                    leading-7
                    text-clw-muted
                  `,children:t.description}),a.jsx("ul",{className:`
                    mt-7
                    grid
                    gap-3

                    sm:grid-cols-2
                  `,children:t.points.map((i,s)=>a.jsxs(v.li,{initial:{opacity:0,x:-10},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.35,delay:s*.04},className:`
                        flex
                        items-start
                        gap-3
                        rounded-xl
                        border
                        border-clw-dark/[0.05]
                        bg-clw-bg
                        px-4
                        py-3
                        text-sm
                        text-clw-dark
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-clw-blue/15
                        hover:bg-white
                      `,children:[a.jsx(bn,{size:17,className:`
                          mt-0.5
                          shrink-0
                          text-clw-gold
                        `}),a.jsx("span",{children:i})]},i))})]})]}),a.jsxs(v.aside,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.6,delay:.1},className:`
                h-fit
                rounded-3xl
                border
                border-clw-blue/10
                bg-white
                p-6
                shadow-card

                lg:sticky
                lg:top-24
              `,children:[a.jsx("div",{className:`
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-clw-blue/10
                  text-clw-blue
                `,children:a.jsx(ar,{size:22})}),a.jsx("p",{className:`
                  mt-5
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.18em]
                  text-clw-blue
                `,children:"Need Assistance?"}),a.jsx("h3",{className:`
                  mt-2
                  font-heading
                  text-xl
                  font-bold
                  text-clw-navy
                `,children:"Ready to get started?"}),a.jsxs("p",{className:`
                  mt-3
                  text-sm
                  leading-6
                  text-clw-muted
                `,children:["Speak with our team for personalised guidance on"," ",t.title.toLowerCase(),"."]}),a.jsxs(F,{to:"/contact",className:`
                  btn-primary
                  mt-6
                  w-full
                `,children:["Get Free Consultation",a.jsx(Kt,{size:16})]}),a.jsxs("a",{href:"https://wa.me/919383349693?text=Hello%20CLW%20Visa%20Services%2C%20I%20would%20like%20to%20know%20more%20about%20your%20service.",target:"_blank",rel:"noopener noreferrer",className:`
                  btn-secondary
                  mt-3
                  w-full
                `,children:[a.jsx(yi,{size:17}),"WhatsApp Us"]}),a.jsxs("div",{className:`
                  mt-5
                  flex
                  items-center
                  gap-2
                  border-t
                  border-clw-dark/[0.06]
                  pt-5
                  text-xs
                  text-clw-muted
                `,children:[a.jsx(bn,{size:14,className:"text-clw-gold"}),"Professional documentation support"]})]})]}),a.jsxs("div",{className:"mt-14 sm:mt-16",children:[a.jsxs("div",{className:`
                mb-6
                flex
                items-end
                justify-between
              `,children:[a.jsxs("div",{children:[a.jsx("p",{className:`
                    text-[9px]
                    font-extrabold
                    uppercase
                    tracking-[0.18em]
                    text-clw-blue
                  `,children:"Explore More"}),a.jsx("h2",{className:`
                    mt-1.5
                    font-heading
                    text-2xl
                    font-extrabold
                    text-clw-navy
                  `,children:"Related Services"})]}),a.jsxs(F,{to:"/services",className:`
                  hidden
                  items-center
                  gap-1
                  text-xs
                  font-bold
                  text-clw-blue
                  transition-colors
                  hover:text-clw-gold

                  sm:inline-flex
                `,children:["View All",a.jsx(Gt,{size:14})]})]}),a.jsx("div",{className:`
                grid
                gap-4

                sm:grid-cols-3
              `,children:r.map((i,s)=>{const o=i.icon;return a.jsx(v.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.4,delay:s*.06},children:a.jsxs(F,{to:`/services/${i.slug}`,className:`
                        group
                        block
                        overflow-hidden
                        rounded-2xl
                        border
                        border-clw-dark/[0.06]
                        bg-white
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-clw-blue/15
                        hover:shadow-card-hover
                      `,children:[a.jsx("div",{className:`
                          h-32
                          overflow-hidden
                        `,children:a.jsx("img",{src:i.image,alt:i.title,className:`
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-105
                          `})}),a.jsxs("div",{className:"p-5",children:[a.jsx(o,{size:19,className:"mb-3 text-clw-blue",strokeWidth:1.8}),a.jsx("h3",{className:`
                            font-heading
                            text-sm
                            font-bold
                            text-clw-navy
                          `,children:i.title}),a.jsxs("span",{className:`
                            mt-3
                            inline-flex
                            items-center
                            gap-1
                            text-xs
                            font-semibold
                            text-clw-blue
                          `,children:["Learn more",a.jsx(Kt,{size:13,className:`
                              transition-transform
                              group-hover:translate-x-1
                            `})]})]})]})},i.slug)})})]})]})]}),a.jsx(Sn,{})]})}const p5={hidden:{},show:{transition:{staggerChildren:.07}}},h5={hidden:{opacity:0,y:22,scale:.98},show:{opacity:1,y:0,scale:1,transition:{duration:.5,ease:[.22,1,.36,1]}}};function m5(){return a.jsxs(a.Fragment,{children:[a.jsxs("section",{className:`
    relative
    overflow-hidden
    bg-clw-navy
    bg-cover
    bg-center
    bg-no-repeat
  `,style:{backgroundImage:"url('/images/sections/destinations-background.webp')"},children:[a.jsx("div",{className:"absolute inset-0 bg-clw-navy/45"}),a.jsx("div",{className:`
      absolute
      inset-0
      bg-gradient-to-r
      from-clw-navy/65
      via-clw-navy/30
      to-transparent
    `}),a.jsx(v.div,{animate:{x:[0,25,0],y:[0,-12,0],scale:[1,1.08,1]},transition:{duration:9,repeat:1/0,ease:"easeInOut"},className:`
      pointer-events-none
      absolute
      -right-24
      -top-24
      h-72
      w-72
      rounded-full
      bg-clw-blue-2/20
      blur-3xl
    `}),a.jsx(v.div,{animate:{opacity:[.12,.28,.12],scale:[1,1.12,1]},transition:{duration:7,repeat:1/0,ease:"easeInOut"},className:`
      pointer-events-none
      absolute
      -bottom-20
      left-1/2
      h-64
      w-64
      -translate-x-1/2
      rounded-full
      bg-clw-gold/10
      blur-3xl
    `}),a.jsx("div",{className:`
      container-clw
      relative
      flex
      min-h-[420px]
      items-center
      justify-center
      py-20
      text-center
      sm:min-h-[470px]
      sm:py-24
      lg:min-h-[500px]
    `,children:a.jsxs(v.div,{initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.7,ease:[.22,1,.36,1]},className:"relative z-10 max-w-3xl",children:[a.jsxs(v.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.45,delay:.1},className:`
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-clw-gold/30
          bg-white/[0.08]
          px-4
          py-1.5
          backdrop-blur-md
        `,children:[a.jsx(v.span,{animate:{scale:[1,1.4,1],opacity:[.6,1,.6]},transition:{duration:2,repeat:1/0},className:"h-1.5 w-1.5 rounded-full bg-clw-gold"}),a.jsx("span",{className:`
            text-[9px]
            font-extrabold
            uppercase
            tracking-[0.2em]
            text-clw-gold
          `,children:"Visa Destinations"})]}),a.jsxs(v.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.18},className:`
          mt-5
          font-heading
          text-4xl
          font-extrabold
          leading-[1.05]
          tracking-tight
          text-white
          sm:text-5xl
          lg:text-6xl
        `,children:["Explore the World",a.jsx("br",{className:"hidden sm:block"}),a.jsxs("span",{className:"text-clw-gold",children:[" ","With Confidence"]})]}),a.jsx(v.p,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.55,delay:.28},className:`
          mx-auto
          mt-5
          max-w-xl
          text-sm
          leading-7
          text-white/70
          sm:text-base
        `,children:"Visa guidance across a wide range of countries and regions, with professional support from application to travel."}),a.jsx(v.div,{initial:{opacity:0,scaleX:0},animate:{opacity:1,scaleX:1},transition:{duration:.6,delay:.45},className:`
          mx-auto
          mt-7
          h-[2px]
          w-12
          origin-center
          rounded-full
          bg-clw-gold
        `})]})})]}),a.jsxs("section",{className:`
          relative
          overflow-hidden
          bg-clw-bg
          py-14
          sm:py-18
          lg:py-20
        `,children:[a.jsx("div",{className:`
            pointer-events-none
            absolute
            inset-0
            bg-cover
            bg-center
            opacity-[0.08]
          `,style:{backgroundImage:"url('/images/sections/travel-pattern.webp')"}}),a.jsx("div",{className:`
            pointer-events-none
            absolute
            -left-40
            top-20
            h-80
            w-80
            rounded-full
            bg-clw-blue/5
            blur-3xl
          `}),a.jsx("div",{className:`
            pointer-events-none
            absolute
            -right-40
            bottom-10
            h-80
            w-80
            rounded-full
            bg-clw-gold/5
            blur-3xl
          `}),a.jsxs("div",{className:"container-clw relative",children:[a.jsx(v.div,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.25},transition:{duration:.55,ease:[.22,1,.36,1]},className:"mb-9 text-center sm:mb-11",children:a.jsx(ur,{eyebrow:"Our Destinations",title:"Visa Assistance Across the Globe",description:"Explore popular destinations and discover professional visa assistance tailored to your travel plans."})}),a.jsx(v.div,{variants:p5,initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.1},className:`
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
              lg:gap-5
            `,children:tc.map((e,t)=>a.jsx(v.div,{variants:h5,children:a.jsx(e0,{destination:e,index:t})},e.name))})]})]}),a.jsx(Sn,{})]})}function g5(){const{slug:e}=pm(),t=tc.find(n=>n.slug===e);return t?a.jsxs("section",{className:"relative overflow-hidden bg-clw-bg pb-12 pt-24 sm:py-16 lg:py-20",children:[a.jsx("div",{className:"pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-clw-blue/5 blur-3xl"}),a.jsx("div",{className:"pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-clw-gold/5 blur-3xl"}),a.jsxs("div",{className:"container-clw relative",children:[a.jsx(v.div,{initial:{opacity:0,x:-15},animate:{opacity:1,x:0},transition:{duration:.45},children:a.jsxs(F,{to:"/destinations",className:`\r
              group\r
              inline-flex\r
              items-center\r
              gap-1.5\r
              rounded-full\r
              border\r
              border-clw-dark/10\r
              bg-white\r
              px-3\r
              py-1.5\r
              text-[10px]\r
              font-bold\r
              text-clw-navy\r
              shadow-sm\r
              transition-all\r
              duration-300\r
\r
              hover:-translate-y-0.5\r
              hover:border-clw-blue/20\r
              hover:text-clw-blue\r
\r
              sm:gap-2\r
              sm:px-4\r
              sm:py-2\r
              sm:text-xs\r
            `,children:[a.jsx(If,{size:13,className:"transition-transform duration-300 group-hover:-translate-x-1"}),"Back to Destinations"]})}),a.jsxs("div",{className:"mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8",children:[a.jsx(v.div,{initial:{opacity:0,x:-25},animate:{opacity:1,x:0},transition:{duration:.65,ease:[.22,1,.36,1]},className:"group relative overflow-hidden rounded-2xl border border-white/70 bg-white p-1.5 shadow-[0_15px_45px_rgba(23,27,77,0.10)]",children:a.jsxs("div",{className:"relative h-[300px] overflow-hidden rounded-xl sm:h-[380px] lg:h-full lg:min-h-[470px]",children:[a.jsx("img",{src:t.image,alt:t.name,className:"h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"}),a.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-t from-clw-navy/65 via-transparent to-transparent"}),a.jsx("div",{className:"absolute left-4 top-4 rounded-full border border-white/25 bg-clw-navy/45 px-3 py-1.5 backdrop-blur-md",children:a.jsx("span",{className:"text-[9px] font-extrabold uppercase tracking-[0.15em] text-white",children:t.tag})}),a.jsxs("div",{className:"absolute bottom-4 left-4 right-4",children:[a.jsx("p",{className:"text-[9px] font-bold uppercase tracking-[0.16em] text-clw-gold",children:"Visa Destination"}),a.jsx("h2",{className:"mt-1 font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl",children:t.name})]})]})}),a.jsxs(v.div,{initial:{opacity:0,x:25},animate:{opacity:1,x:0},transition:{duration:.65,delay:.08,ease:[.22,1,.36,1]},className:"rounded-2xl border border-clw-dark/[0.06] bg-white p-5 shadow-[0_15px_45px_rgba(23,27,77,0.07)] sm:p-7 lg:p-8",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-clw-blue/10 bg-clw-blue/[0.04] px-3 py-1.5",children:[a.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-clw-gold"}),a.jsx("span",{className:"text-[9px] font-extrabold uppercase tracking-[0.17em] text-clw-blue",children:t.tag})]}),a.jsx("h1",{className:"mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-clw-navy sm:text-4xl",children:t.name}),a.jsx("p",{className:"mt-3 text-sm leading-6 text-clw-muted",children:t.description}),a.jsx("div",{className:"my-6 h-px bg-clw-dark/[0.06]"}),a.jsxs("div",{className:"flex items-center justify-between gap-3",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"font-heading text-base font-extrabold text-clw-navy sm:text-lg",children:"Countries We Support"}),a.jsx("p",{className:"mt-0.5 text-[10px] text-clw-muted",children:"Visa assistance available for these destinations."})]}),a.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-clw-blue/[0.06] text-clw-blue",children:a.jsx(jl,{size:16})})]}),a.jsx(v.div,{initial:"hidden",animate:"show",variants:{hidden:{},show:{transition:{staggerChildren:.05}}},className:"mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3",children:t.countries.map(n=>a.jsxs(v.div,{variants:{hidden:{opacity:0,y:10},show:{opacity:1,y:0}},whileHover:{y:-2},className:"group flex min-h-[42px] items-center gap-2 rounded-lg border border-clw-dark/[0.06] bg-clw-bg/60 px-2.5 py-2 transition-all duration-300 hover:border-clw-blue/15 hover:bg-white hover:shadow-[0_6px_18px_rgba(23,27,77,0.07)]",children:[a.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white text-clw-blue shadow-sm transition-colors group-hover:bg-clw-blue group-hover:text-white",children:a.jsx(vi,{size:12})}),a.jsx("span",{className:"text-[10px] font-bold leading-tight text-clw-navy transition-colors group-hover:text-clw-blue sm:text-[11px]",children:n})]},n))}),a.jsxs("div",{className:"mt-7 flex flex-col gap-3 sm:flex-row",children:[a.jsxs(F,{to:"/contact",className:"group inline-flex items-center justify-center gap-2 rounded-full bg-clw-blue px-5 py-2.5 text-xs font-extrabold text-white shadow-[0_8px_20px_rgba(23,27,77,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-clw-navy",children:["Get Visa Assistance",a.jsx(Kt,{size:14,className:"transition-transform duration-300 group-hover:translate-x-1"})]}),a.jsx(F,{to:"/destinations",className:"inline-flex items-center justify-center gap-2 rounded-full border border-clw-dark/10 bg-white px-5 py-2.5 text-xs font-bold text-clw-navy transition-all duration-300 hover:border-clw-blue/20 hover:text-clw-blue",children:"Other Destinations"})]})]})]})]})]}):a.jsx("section",{className:"min-h-[60vh] bg-clw-bg",children:a.jsxs("div",{className:"container-clw flex min-h-[60vh] flex-col items-center justify-center text-center",children:[a.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-full bg-clw-blue/10 text-clw-blue",children:a.jsx(jl,{size:24})}),a.jsx("h1",{className:"mt-4 font-heading text-2xl font-extrabold text-clw-navy sm:text-3xl",children:"Destination Not Found"}),a.jsx("p",{className:"mt-2 text-sm text-clw-muted",children:"The destination you are looking for is unavailable."}),a.jsxs(F,{to:"/destinations",className:`\r
              group\r
              mt-6\r
              inline-flex\r
              items-center\r
              gap-1.5\r
              rounded-full\r
              border\r
              border-clw-dark/10\r
              bg-white\r
              px-3\r
              py-1.5\r
              text-[10px]\r
              font-bold\r
              text-clw-navy\r
              shadow-sm\r
              transition-all\r
              duration-300\r
\r
              hover:-translate-y-0.5\r
              hover:border-clw-blue/20\r
              hover:text-clw-blue\r
\r
              sm:gap-2.5\r
              sm:px-6\r
              sm:py-3\r
              sm:text-sm\r
            `,children:[a.jsx(If,{size:14,className:"transition-transform duration-300 group-hover:-translate-x-1"}),"Back to Destinations"]})]})})}const x5={hidden:{},show:{transition:{staggerChildren:.08}}};function v5(){return a.jsxs(a.Fragment,{children:[a.jsxs("section",{className:`
          relative
          overflow-hidden
          bg-clw-navy
          bg-cover
          bg-center
          bg-no-repeat
        `,style:{backgroundImage:"url('/images/sections/process-background.webp')"},children:[a.jsx("div",{className:"absolute inset-0 bg-clw-navy/55"}),a.jsx("div",{className:`
            absolute
            inset-0
            bg-gradient-to-r
            from-clw-navy/75
            via-clw-navy/35
            to-transparent
          `}),a.jsx(v.div,{animate:{x:[0,25,0],y:[0,-12,0],scale:[1,1.08,1]},transition:{duration:9,repeat:1/0,ease:"easeInOut"},className:`
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-clw-blue-2/20
            blur-3xl
          `}),a.jsx("div",{className:`
            container-clw
            relative
            flex
            min-h-[390px]
            items-center
            justify-center
            py-16
            text-center
            sm:min-h-[430px]
            sm:py-20
            lg:min-h-[460px]
          `,children:a.jsxs(v.div,{initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.7,ease:[.22,1,.36,1]},className:"max-w-3xl",children:[a.jsxs(v.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.45,delay:.1},className:`
                mx-auto
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-clw-gold/30
                bg-white/[0.08]
                px-4
                py-1.5
                backdrop-blur-md
              `,children:[a.jsx("span",{className:`
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-clw-gold/10
                `,children:a.jsx(bj,{size:12,strokeWidth:2.4,className:"text-clw-gold"})}),a.jsx("span",{className:`
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.2em]
                  text-clw-gold
                  sm:text-[10px]
                `,children:"Our Process"})]}),a.jsxs(v.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.18},className:`
                mt-5
                font-heading
                text-4xl
                font-extrabold
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              `,children:["Simple. Clear.",a.jsx("br",{className:"hidden sm:block"}),a.jsxs("span",{className:"text-clw-gold",children:[" ","Hassle-Free."]})]}),a.jsx(v.div,{initial:{width:0,opacity:0},animate:{width:56,opacity:1},transition:{duration:.55,delay:.3},className:`
                mx-auto
                mt-5
                h-[2px]
                rounded-full
                bg-clw-gold
              `}),a.jsx(v.p,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.55,delay:.28},className:`
                mx-auto
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-white/65
                sm:text-base
              `,children:"A structured, step-by-step approach from your first enquiry to travel day, with professional guidance throughout your journey."})]})}),a.jsx("div",{className:`
            absolute
            bottom-0
            left-0
            right-0
            h-16
            bg-gradient-to-t
            from-clw-bg
            to-transparent
          `})]}),a.jsxs("section",{className:`
          relative
          overflow-hidden
          bg-clw-bg
          py-14
          sm:py-16
          lg:py-18
        `,children:[a.jsx("div",{className:`
            pointer-events-none
            absolute
            inset-0
            bg-cover
            bg-center
            opacity-[0.025]
          `,style:{backgroundImage:"url('/images/sections/travel-pattern.jpg')"}}),a.jsx("div",{className:`
            pointer-events-none
            absolute
            -left-40
            top-10
            h-80
            w-80
            rounded-full
            bg-clw-blue/5
            blur-3xl
          `}),a.jsx("div",{className:`
            pointer-events-none
            absolute
            -right-40
            bottom-10
            h-80
            w-80
            rounded-full
            bg-clw-gold/5
            blur-3xl
          `}),a.jsxs("div",{className:"container-clw relative",children:[a.jsxs(v.div,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.55},className:`
              mb-9
              text-center
              sm:mb-11
            `,children:[a.jsx("span",{className:`
                inline-flex
                items-center
                rounded-full
                border
                border-clw-gold/25
                bg-white
                px-4
                py-1.5
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.2em]
                text-clw-blue
                shadow-sm
              `,children:"How It Works"}),a.jsx("h2",{className:`
                mt-3
                font-heading
                text-2xl
                font-extrabold
                tracking-tight
                text-clw-navy
                sm:text-3xl
                lg:text-4xl
              `,children:"Your Journey, Step by Step"}),a.jsx("p",{className:`
                mx-auto
                mt-2
                max-w-xl
                text-xs
                leading-6
                text-clw-muted
                sm:text-sm
              `,children:"From understanding your requirements to preparing your documents and getting ready to travel."})]}),a.jsx(v.div,{variants:x5,initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.1},children:a.jsx(t0,{})})]})]}),a.jsx(Sn,{})]})}function y5(){return a.jsxs(a.Fragment,{children:[a.jsxs("section",{className:`
          relative
          overflow-hidden
          bg-clw-navy
          bg-cover
          bg-center
          bg-no-repeat
        `,style:{backgroundImage:"url('/images/sections/faq-background.webp')"},children:[a.jsx("div",{className:"absolute inset-0 bg-clw-navy/55"}),a.jsx("div",{className:`
            absolute
            inset-0
            bg-gradient-to-r
            from-clw-navy/75
            via-clw-navy/35
            to-transparent
          `}),a.jsx(v.div,{animate:{x:[0,20,0],y:[0,-12,0],scale:[1,1.08,1]},transition:{duration:9,repeat:1/0,ease:"easeInOut"},className:`
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-clw-blue-2/20
            blur-3xl
          `}),a.jsx("div",{className:`
            container-clw
            relative
            flex
            min-h-[380px]
            items-center
            justify-center
            py-20
            text-center
            sm:min-h-[420px]
            sm:py-24
          `,children:a.jsxs(v.div,{initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.7,ease:[.22,1,.36,1]},className:"relative z-10 max-w-3xl",children:[a.jsxs(v.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.45,delay:.1},className:`
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-clw-gold/30
                bg-white/[0.08]
                px-4
                py-1.5
                backdrop-blur-md
              `,children:[a.jsx(v.span,{animate:{scale:[1,1.35,1],opacity:[.6,1,.6]},transition:{duration:2,repeat:1/0},className:`
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-clw-gold
                `}),a.jsx("span",{className:`
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.2em]
                  text-clw-gold
                `,children:"Frequently Asked Questions"})]}),a.jsxs(v.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.18},className:`
                mt-5
                font-heading
                text-4xl
                font-extrabold
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              `,children:["Questions?",a.jsx("br",{className:"hidden sm:block"}),a.jsxs("span",{className:"text-clw-gold",children:[" ","We've Got Answers."]})]}),a.jsx(v.p,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.55,delay:.28},className:`
                mx-auto
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-white/70
                sm:text-base
              `,children:"Find answers to common questions about visa assistance, documentation and travel services."})]})})]}),a.jsxs("section",{className:"relative overflow-hidden bg-clw-bg py-12 sm:py-16 lg:py-20",children:[a.jsx("div",{className:`
            pointer-events-none
            absolute
            -right-40
            top-20
            h-72
            w-72
            rounded-full
            bg-clw-blue/5
            blur-3xl
          `}),a.jsx("div",{className:`
            pointer-events-none
            absolute
            -left-40
            bottom-10
            h-72
            w-72
            rounded-full
            bg-clw-gold/5
            blur-3xl
          `}),a.jsxs("div",{className:"container-clw relative",children:[a.jsxs(v.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.25},transition:{duration:.5},className:"mb-8 text-center sm:mb-10",children:[a.jsxs("div",{className:`
                mx-auto
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-clw-blue/15
                bg-white
                px-4
                py-1.5
                shadow-sm
              `,children:[a.jsx("span",{className:`
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-clw-gold
                `}),a.jsx("span",{className:`
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.18em]
                  text-clw-blue
                `,children:"Helpful Information"})]}),a.jsx("h2",{className:`
                mx-auto
                mt-4
                max-w-2xl
                font-heading
                text-2xl
                font-extrabold
                tracking-tight
                text-clw-navy
                sm:text-3xl
              `,children:"Everything You Need to Know"}),a.jsx("p",{className:`
                mx-auto
                mt-2
                max-w-xl
                text-sm
                leading-6
                text-clw-muted
              `,children:"Quick answers about our visa and travel assistance services."})]}),a.jsx(s0,{showHeading:!1})]})]}),a.jsx(o0,{}),a.jsx(Sn,{})]})}function w5(){var e;return a.jsxs(a.Fragment,{children:[a.jsxs("section",{className:"relative min-h-[480px] overflow-hidden bg-clw-navy sm:min-h-[530px]",children:[a.jsx("div",{className:`
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
          `,style:{backgroundImage:"url('/images/sections/contact-hero.jpg')"}}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-clw-navy via-clw-navy/80 to-clw-navy/25"}),a.jsx("div",{className:"absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-clw-navy/60 to-transparent"}),a.jsx(v.div,{animate:{x:[0,20,0],y:[0,-12,0],scale:[1,1.08,1]},transition:{duration:9,repeat:1/0,ease:"easeInOut"},className:`
            pointer-events-none
            absolute
            -right-24
            top-10
            h-72
            w-72
            rounded-full
            bg-clw-blue-2/20
            blur-3xl
          `}),a.jsx("div",{className:"container-clw relative flex min-h-[480px] items-center sm:min-h-[530px]",children:a.jsxs(v.div,{initial:{opacity:0,x:-35},animate:{opacity:1,x:0},transition:{duration:.8,ease:[.22,1,.36,1]},className:"max-w-2xl",children:[a.jsxs(v.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.5,delay:.15},className:`
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-clw-gold/30
                bg-white/[0.08]
                px-3.5
                py-1.5
                backdrop-blur-md
              `,children:[a.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-clw-gold"}),a.jsx("span",{className:`
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.18em]
                  text-clw-gold
                  sm:text-[10px]
                `,children:"Get In Touch"})]}),a.jsxs(v.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.65,delay:.25},className:`
                mt-5
                font-heading
                text-4xl
                font-extrabold
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              `,children:["Let's Start",a.jsx("span",{className:"block text-clw-gold",children:"Your Journey"})]}),a.jsx(v.p,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.6,delay:.38},className:`
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-white/65
                sm:text-base
              `,children:"Have questions about your visa or travel plans? Reach out to CLW Visa Services and let our team guide you through the next steps."}),a.jsxs(v.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.6,delay:.5},className:"mt-7 flex flex-wrap gap-2.5",children:[a.jsxs("a",{href:`tel:${(e=fe.phones[0])==null?void 0:e.replace(/\s/g,"")}`,className:`
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.07]
                  px-3
                  py-2
                  text-[10px]
                  font-semibold
                  text-white/80
                  backdrop-blur-md
                  transition-all
                  hover:bg-white/10
                  hover:text-white
                `,children:[a.jsx(wi,{size:13,className:"text-clw-gold"}),"Call Us"]}),a.jsxs("a",{href:`mailto:${fe.email}`,className:`
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.07]
                  px-3
                  py-2
                  text-[10px]
                  font-semibold
                  text-white/80
                  backdrop-blur-md
                  transition-all
                  hover:bg-white/10
                  hover:text-white
                `,children:[a.jsx(Qs,{size:13,className:"text-clw-gold"}),"Email Us"]}),a.jsxs("a",{href:"https://wa.me/919383349693",target:"_blank",rel:"noopener noreferrer",className:`
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#25D366]/30
                  bg-[#25D366]/10
                  px-3
                  py-2
                  text-[10px]
                  font-semibold
                  text-[#25D366]
                  backdrop-blur-md
                  transition-all
                  hover:bg-[#25D366]
                  hover:text-white
                `,children:[a.jsx(yi,{size:13}),"WhatsApp"]})]})]})}),a.jsxs(v.div,{animate:{y:[0,7,0]},transition:{duration:1.8,repeat:1/0,ease:"easeInOut"},className:`
            absolute
            bottom-5
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-1
            text-white/40
            sm:flex
          `,children:[a.jsx("span",{className:"text-[8px] font-bold uppercase tracking-[0.2em]",children:"Contact"}),a.jsx(ec,{size:13})]})]}),a.jsxs("section",{className:"relative overflow-hidden bg-clw-bg py-14 sm:py-18 lg:py-20",children:[a.jsx("div",{className:`
            pointer-events-none
            absolute
            -left-40
            top-20
            h-80
            w-80
            rounded-full
            bg-clw-blue/5
            blur-3xl
          `}),a.jsx("div",{className:`
            pointer-events-none
            absolute
            -right-40
            bottom-10
            h-80
            w-80
            rounded-full
            bg-clw-gold/5
            blur-3xl
          `}),a.jsxs("div",{className:"container-clw relative",children:[a.jsxs(v.div,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.6},className:"mb-9",children:[a.jsxs("div",{className:`
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-clw-blue/10
                bg-clw-blue/[0.04]
                px-3
                py-1.5
              `,children:[a.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-clw-gold"}),a.jsx("span",{className:`
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.18em]
                  text-clw-blue
                `,children:"Contact Information"})]}),a.jsx("h2",{className:`
                mt-3
                font-heading
                text-2xl
                font-extrabold
                tracking-tight
                text-clw-navy
                sm:text-3xl
              `,children:"We're Here to Help"}),a.jsx("p",{className:"mt-2 max-w-xl text-xs leading-6 text-clw-muted sm:text-sm",children:"Visit our office or contact us through your preferred channel."})]}),a.jsxs("div",{className:"grid grid-cols-1 gap-7 lg:grid-cols-12 lg:gap-8",children:[a.jsxs(v.div,{initial:{opacity:0,x:-25},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:{duration:.6},className:"lg:col-span-5",children:[a.jsxs("div",{className:`
                  rounded-2xl
                  border
                  border-clw-dark/[0.07]
                  bg-white
                  p-5
                  shadow-[0_12px_35px_rgba(23,27,77,0.06)]
                  sm:p-6
                `,children:[a.jsx("h3",{className:"font-heading text-lg font-extrabold text-clw-navy",children:fe.name}),a.jsx("p",{className:"mt-1 text-xs leading-5 text-clw-muted",children:"Visit us or reach out through any of the channels below."}),a.jsxs("div",{className:"mt-5 space-y-3.5",children:[a.jsxs("div",{className:"flex gap-3",children:[a.jsx("div",{className:`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-clw-blue/[0.06]
                        text-clw-blue
                      `,children:a.jsx(vi,{size:16})}),a.jsx("div",{className:"text-xs leading-5 text-clw-dark",children:fe.addressLines.map(t=>a.jsx("p",{children:t},t))})]}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("div",{className:`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-clw-blue/[0.06]
                        text-clw-blue
                      `,children:a.jsx(wi,{size:16})}),a.jsx("div",{className:"text-xs",children:fe.phones.map(t=>a.jsx("a",{href:`tel:${t.replace(/\s/g,"")}`,className:`
                            block
                            leading-5
                            transition-colors
                            hover:text-clw-blue
                          `,children:t},t))})]}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("div",{className:`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-clw-blue/[0.06]
                        text-clw-blue
                      `,children:a.jsx(Qs,{size:16})}),a.jsx("a",{href:`mailto:${fe.email}`,className:`
                        self-center
                        text-xs
                        transition-colors
                        hover:text-clw-blue
                      `,children:fe.email})]}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("div",{className:`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-clw-blue/[0.06]
                        text-clw-blue
                      `,children:a.jsx(jj,{size:16})}),a.jsxs("div",{className:"text-xs leading-5",children:[a.jsx("p",{className:"font-bold text-clw-navy",children:"Office Hours"}),a.jsx("p",{className:"text-clw-muted",children:"Contact us for current availability"})]})]})]})]}),a.jsx("div",{className:`
                  mt-4
                  overflow-hidden
                  rounded-2xl
                  border
                  border-clw-dark/[0.07]
                  bg-white
                  p-1.5
                  shadow-[0_12px_35px_rgba(23,27,77,0.06)]
                `,children:a.jsx("iframe",{title:"CLW Visa Services location",src:"https://www.google.com/maps?q=Alsa+Mall+Montieth+Road+Egmore+Chennai+600008&output=embed",width:"100%",height:"250",style:{border:0,borderRadius:"12px"},loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]}),a.jsx(v.div,{initial:{opacity:0,x:25},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:{duration:.6,delay:.1},className:"lg:col-span-7",children:a.jsx(i0,{})})]})]})]})]})}function Hf({title:e,children:t}){const n=()=>{var r;(r=document.getElementById("legal-content"))==null||r.scrollIntoView({behavior:"smooth",block:"start"})};return a.jsxs(a.Fragment,{children:[a.jsxs("section",{id:"legal-hero",className:`
          relative
          overflow-hidden
          bg-clw-navy
          bg-cover
          bg-center
          bg-no-repeat
          py-16
          sm:py-20
          lg:py-24
        `,style:{backgroundImage:"url('/images/sections/legal-background.webp')"},children:[a.jsx("div",{className:"absolute inset-0 bg-clw-navy/10"}),a.jsx("div",{className:`
            absolute
            inset-0
            bg-gradient-to-br
            from-clw-navy/95
            via-clw-navy/80
            to-clw-blue/30
          `}),a.jsx(v.div,{animate:{x:[0,20,0],y:[0,-12,0],scale:[1,1.08,1]},transition:{duration:9,repeat:1/0,ease:"easeInOut"},className:`
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-80
            w-80
            rounded-full
            bg-clw-blue/20
            blur-3xl
          `}),a.jsx(v.div,{animate:{x:[0,-15,0],y:[0,10,0],scale:[1,1.06,1]},transition:{duration:11,repeat:1/0,ease:"easeInOut"},className:`
            pointer-events-none
            absolute
            -bottom-32
            -left-32
            h-72
            w-72
            rounded-full
            bg-clw-gold/10
            blur-3xl
          `}),a.jsx("div",{className:`
            container-clw
            relative
            flex
            min-h-[300px]
            items-center
            justify-center
            text-center
            sm:min-h-[340px]
            lg:min-h-[380px]
          `,children:a.jsxs(v.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.7,ease:[.22,1,.36,1]},className:"max-w-3xl",children:[a.jsxs(v.div,{initial:{opacity:0,y:10,scale:.92},animate:{opacity:1,y:0,scale:1},transition:{duration:.5,delay:.1,ease:[.22,1,.36,1]},className:`
                mx-auto
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-clw-gold/35
                bg-white/[0.08]
                px-5
                py-2
                shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-clw-gold/55
                hover:bg-white/[0.12]
              `,children:[a.jsx("span",{className:`
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-clw-gold/30
                  bg-clw-gold/10
                `,children:a.jsx(ar,{size:13,strokeWidth:2.3,className:"text-clw-gold"})}),a.jsx("span",{className:`
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.22em]
                  text-clw-gold
                  sm:text-[10px]
                `,children:"Legal Information"}),a.jsx("span",{className:`
                  h-1
                  w-1
                  rounded-full
                  bg-clw-gold/70
                `})]}),a.jsx(v.h1,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.6,delay:.18},className:`
                mt-6
                font-heading
                text-4xl
                font-extrabold
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              `,children:e}),a.jsx(v.div,{initial:{width:0,opacity:0},animate:{width:56,opacity:1},transition:{duration:.55,delay:.3},className:`
                mx-auto
                mt-5
                h-[2px]
                rounded-full
                bg-clw-gold
                shadow-[0_0_12px_rgba(212,167,44,0.35)]
              `}),a.jsx(v.p,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.35},className:`
                mx-auto
                mt-5
                max-w-xl
                text-sm
                leading-6
                text-white/65
                sm:text-base
              `,children:"Important information about CLW Visa Services."}),a.jsx(v.button,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.6,duration:.5},onClick:n,"aria-label":"Scroll to legal information",className:`
                mx-auto
                mt-7
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/[0.06]
                text-white/60
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-clw-gold/40
                hover:bg-clw-gold/10
                hover:text-clw-gold
              `,children:a.jsx(v.span,{animate:{y:[0,3,0]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut"},children:a.jsx(ec,{size:15})})})]})})]}),a.jsxs("section",{id:"legal-content",className:`
          relative
          overflow-hidden
          bg-clw-bg
          py-12
          sm:py-16
          lg:py-20
        `,children:[a.jsx("div",{className:`
            pointer-events-none
            absolute
            -right-40
            top-10
            h-80
            w-80
            rounded-full
            bg-clw-blue/5
            blur-3xl
          `}),a.jsx("div",{className:`
            pointer-events-none
            absolute
            -left-40
            bottom-10
            h-80
            w-80
            rounded-full
            bg-clw-gold/5
            blur-3xl
          `}),a.jsx(v.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.15},transition:{duration:.6,ease:[.22,1,.36,1]},className:`
            container-clw
            relative
          `,children:a.jsx("div",{className:`
              mx-auto
              max-w-4xl
              rounded-2xl
              border
              border-clw-dark/[0.06]
              bg-white
              p-6
              shadow-[0_15px_50px_rgba(15,23,42,0.06)]
              sm:p-8
              lg:p-10
            `,children:a.jsx("div",{className:`
                text-sm
                leading-7
                text-clw-muted
              `,children:t})})})]})]})}function b5(){return a.jsxs("section",{className:"flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center",children:[a.jsx("p",{className:"font-heading text-6xl font-extrabold text-clw-blue",children:"404"}),a.jsx("h1",{className:"mt-4 font-heading text-2xl font-bold text-clw-navy",children:"Page Not Found"}),a.jsx("p",{className:"mt-2 max-w-sm text-sm text-clw-muted",children:"The page you're looking for doesn't exist or may have moved."}),a.jsx(F,{to:"/",className:"btn-primary mt-8",children:"Back to Home"})]})}const j5=[{title:"General Disclaimer",text:"CLW Visa Services provides visa assistance and documentation support to help applicants understand and prepare their visa applications. Visa approval is solely determined by the relevant embassy, consulate, immigration authority or government department."},{title:"Visa Approval",text:"Submission of a visa application does not guarantee approval. The final decision regarding visa issuance, duration, entry permission and conditions remains entirely with the respective immigration authority."},{title:"Processing Times",text:"Visa processing times may vary depending on the destination, visa category, embassy or consulate workload, documentation, background verification and other circumstances. Any processing time provided by CLW Visa Services is an estimated timeframe and should not be considered a guarantee."},{title:"Applicant Responsibility",text:"Applicants are responsible for providing accurate, complete and genuine information and documents. CLW Visa Services is not responsible for delays, refusals or cancellations resulting from incorrect, incomplete or misleading information supplied by the applicant."},{title:"No Guarantee",text:"CLW Visa Services does not guarantee visa approval, appointment availability, processing time, entry into a country or any particular immigration outcome."},{title:"Official Authorities",text:"Applicants should always verify the latest visa requirements, fees, immigration rules and travel regulations with the official embassy, consulate or government immigration authority before submitting an application or making travel arrangements."}],N5={hidden:{opacity:0,y:20},show:{opacity:1,y:0,transition:{duration:.5,ease:[.22,1,.36,1]}}};function k5(){return a.jsxs("main",{className:"min-h-screen bg-clw-bg",children:[a.jsxs("section",{id:"visa-disclaimer-hero",className:`\r
          relative\r
          overflow-hidden\r
          bg-clw-navy\r
          bg-cover\r
          bg-center\r
          bg-no-repeat\r
        `,style:{backgroundImage:"url('/images/sections/visa-disclaimer-background.webp')"},children:[a.jsx("div",{className:`\r
            absolute\r
            inset-0\r
            bg-clw-navy/\r
          `}),a.jsx("div",{className:`\r
            absolute\r
            inset-0\r
            bg-gradient-to-br\r
            from-clw-navy/95\r
            via-clw-navy/75\r
            to-clw-blue/25\r
          `}),a.jsx(v.div,{animate:{x:[0,20,0],y:[0,-15,0],scale:[1,1.08,1]},transition:{duration:9,repeat:1/0,ease:"easeInOut"},className:`\r
            pointer-events-none\r
            absolute\r
            -right-24\r
            -top-24\r
            h-80\r
            w-80\r
            rounded-full\r
            bg-clw-blue/20\r
            blur-3xl\r
          `}),a.jsx(v.div,{animate:{x:[0,-15,0],y:[0,10,0],scale:[1,1.06,1]},transition:{duration:11,repeat:1/0,ease:"easeInOut"},className:`\r
            pointer-events-none\r
            absolute\r
            -bottom-32\r
            -left-32\r
            h-72\r
            w-72\r
            rounded-full\r
            bg-clw-gold/10\r
            blur-3xl\r
          `}),a.jsx("div",{className:`\r
            container-clw\r
            relative\r
            flex\r
            min-h-[390px]\r
            items-center\r
            justify-center\r
            px-4\r
            py-20\r
            text-center\r
\r
            sm:min-h-[430px]\r
            sm:py-24\r
\r
            lg:min-h-[460px]\r
          `,children:a.jsxs(v.div,{initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.7,ease:[.22,1,.36,1]},className:`\r
              flex\r
              w-full\r
              max-w-4xl\r
              flex-col\r
              items-center\r
            `,children:[a.jsxs(v.div,{initial:{opacity:0,scale:.92},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.1},className:`\r
                inline-flex\r
                items-center\r
                gap-2.5\r
                rounded-full\r
                border\r
                border-clw-gold/40\r
                bg-white/[0.08]\r
                px-5\r
                py-2\r
                shadow-[0_8px_30px_rgba(0,0,0,0.18)]\r
                backdrop-blur-xl\r
              `,children:[a.jsx("span",{className:`\r
                  flex\r
                  h-6\r
                  w-6\r
                  items-center\r
                  justify-center\r
                  rounded-full\r
                  border\r
                  border-clw-gold/30\r
                  bg-clw-gold/10\r
                `,children:a.jsx(ar,{size:13,strokeWidth:2.3,className:"text-clw-gold"})}),a.jsx("span",{className:`\r
                  text-[9px]\r
                  font-extrabold\r
                  uppercase\r
                  tracking-[0.22em]\r
                  text-clw-gold\r
\r
                  sm:text-[10px]\r
                `,children:"Visa Information"}),a.jsx("span",{className:`\r
                  h-1\r
                  w-1\r
                  rounded-full\r
                  bg-clw-gold\r
                `})]}),a.jsx(v.h1,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.6,delay:.18},className:`\r
                mt-6\r
                font-heading\r
                text-4xl\r
                font-extrabold\r
                leading-[1.05]\r
                tracking-tight\r
                text-white\r
\r
                sm:text-5xl\r
\r
                lg:text-6xl\r
              `,children:"Visa Disclaimer"}),a.jsx(v.div,{initial:{width:0,opacity:0},animate:{width:58,opacity:1},transition:{duration:.55,delay:.3},className:`\r
                mt-5\r
                h-[2px]\r
                rounded-full\r
                bg-clw-gold\r
                shadow-[0_0_14px_rgba(212,167,44,0.45)]\r
              `}),a.jsx(v.p,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.35},className:`\r
                mx-auto\r
                mt-5\r
                max-w-2xl\r
                text-sm\r
                leading-7\r
                text-white/70\r
\r
                sm:text-base\r
              `,children:"Important information regarding visa applications, processing timelines and travel documentation."})]})})]}),a.jsxs("section",{className:`\r
          relative\r
          overflow-hidden\r
          bg-clw-bg\r
          py-14\r
          sm:py-16\r
          lg:py-20\r
        `,children:[a.jsx("div",{className:`\r
            pointer-events-none\r
            absolute\r
            -left-40\r
            top-20\r
            h-80\r
            w-80\r
            rounded-full\r
            bg-clw-blue/5\r
            blur-3xl\r
          `}),a.jsx("div",{className:`\r
            pointer-events-none\r
            absolute\r
            -right-40\r
            bottom-20\r
            h-80\r
            w-80\r
            rounded-full\r
            bg-clw-gold/5\r
            blur-3xl\r
          `}),a.jsxs("div",{className:"container-clw relative",children:[a.jsxs(v.div,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.5},className:`\r
              mx-auto\r
              mb-9\r
              max-w-2xl\r
              text-center\r
            `,children:[a.jsxs("span",{className:`\r
                inline-flex\r
                items-center\r
                gap-2\r
                rounded-full\r
                border\r
                border-clw-gold/30\r
                bg-clw-gold/10\r
                px-4\r
                py-1.5\r
                text-[9px]\r
                font-extrabold\r
                uppercase\r
                tracking-[0.18em]\r
                text-clw-blue\r
              `,children:[a.jsx(ar,{size:13,className:"text-clw-gold"}),"Important Information"]}),a.jsx("h2",{className:`\r
                mt-4\r
                font-heading\r
                text-2xl\r
                font-extrabold\r
                tracking-tight\r
                text-clw-navy\r
\r
                sm:text-3xl\r
              `,children:"Please Read Before Applying"}),a.jsx("p",{className:`\r
                mx-auto\r
                mt-3\r
                max-w-xl\r
                text-sm\r
                leading-6\r
                text-clw-muted\r
              `,children:"Please review the following information carefully before proceeding with your visa application or travel arrangements."})]}),a.jsx(v.div,{variants:{hidden:{},show:{transition:{staggerChildren:.07}}},initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.08},className:`\r
              mx-auto\r
              grid\r
              max-w-5xl\r
              gap-4\r
\r
              sm:grid-cols-2\r
            `,children:j5.map((e,t)=>a.jsxs(v.article,{variants:N5,className:`\r
                  group\r
                  rounded-2xl\r
                  border\r
                  border-clw-dark/[0.06]\r
                  bg-white\r
                  p-6\r
                  shadow-sm\r
                  transition-all\r
                  duration-300\r
\r
                  hover:-translate-y-1\r
                  hover:border-clw-blue/15\r
                  hover:shadow-card\r
                `,children:[a.jsxs("div",{className:`\r
                    flex\r
                    items-start\r
                    gap-4\r
                  `,children:[a.jsx("span",{className:`\r
                      flex\r
                      h-9\r
                      w-9\r
                      shrink-0\r
                      items-center\r
                      justify-center\r
                      rounded-xl\r
                      bg-clw-blue/10\r
                      text-[10px]\r
                      font-extrabold\r
                      text-clw-blue\r
                    `,children:String(t+1).padStart(2,"0")}),a.jsxs("div",{className:"min-w-0",children:[a.jsx("h3",{className:`\r
                        font-heading\r
                        text-base\r
                        font-bold\r
                        text-clw-navy\r
                      `,children:e.title}),a.jsx("div",{className:`\r
                        mt-2\r
                        h-[2px]\r
                        w-8\r
                        rounded-full\r
                        bg-clw-gold\r
                        transition-all\r
                        duration-300\r
                        group-hover:w-12\r
                      `})]})]}),a.jsx("p",{className:`\r
                    mt-4\r
                    text-sm\r
                    leading-6\r
                    text-clw-muted\r
                  `,children:e.text})]},e.title))}),a.jsx(v.div,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.5},className:`\r
              mx-auto\r
              mt-8\r
              max-w-5xl\r
              rounded-2xl\r
              border\r
              border-clw-gold/20\r
              bg-clw-navy\r
              p-5\r
              shadow-card\r
\r
              sm:p-6\r
            `,children:a.jsxs("div",{className:`\r
                flex\r
                items-start\r
                gap-4\r
              `,children:[a.jsx("span",{className:`\r
                  flex\r
                  h-10\r
                  w-10\r
                  shrink-0\r
                  items-center\r
                  justify-center\r
                  rounded-xl\r
                  bg-clw-gold/10\r
                `,children:a.jsx(bn,{size:19,className:"text-clw-gold"})}),a.jsxs("div",{children:[a.jsx("h3",{className:`\r
                    font-heading\r
                    text-sm\r
                    font-bold\r
                    text-white\r
                  `,children:"Always Verify With Official Authorities"}),a.jsx("p",{className:`\r
                    mt-1.5\r
                    text-xs\r
                    leading-6\r
                    text-white/60\r
\r
                    sm:text-sm\r
                  `,children:"Visa requirements, government fees, processing rules and immigration regulations can change. Applicants should confirm the latest information directly with the relevant official authority."})]})]})})]})]})]})}function S5(){return a.jsxs("div",{className:"flex min-h-screen flex-col",children:[a.jsx(Qj,{}),a.jsx(Oj,{}),a.jsx("main",{className:"flex-1",children:a.jsxs(Cy,{children:[a.jsx(Se,{path:"/",element:a.jsx(l5,{})}),a.jsx(Se,{path:"/about",element:a.jsx(u5,{})}),a.jsx(Se,{path:"/services",element:a.jsx(d5,{})}),a.jsx(Se,{path:"/services/:slug",element:a.jsx(f5,{})}),a.jsx(Se,{path:"/destinations",element:a.jsx(m5,{})}),a.jsx(Se,{path:"/process",element:a.jsx(v5,{})}),a.jsx(Se,{path:"/faq",element:a.jsx(y5,{})}),a.jsx(Se,{path:"/contact",element:a.jsx(w5,{})}),a.jsx(Se,{path:"/destinations/:slug",element:a.jsx(g5,{})}),a.jsx(Se,{path:"/privacy-policy",element:a.jsx(Hf,{title:"Privacy Policy",children:a.jsx("p",{children:"CLW Visa Services respects your privacy. Information submitted through our enquiry form is used solely to respond to your request and provide relevant travel and visa assistance. We do not sell or share your personal information with third parties beyond what is necessary to process your visa or travel request."})})}),a.jsx(Se,{path:"/terms",element:a.jsx(Hf,{title:"Terms & Conditions",children:a.jsx("p",{children:"By using this website and our services, you agree to engage with CLW Visa Services for visa assistance and travel-related support. Visa decisions rest solely with the relevant embassy, consulate or immigration authority — see our Visa Disclaimer for details."})})}),a.jsx(Se,{path:"/visa-disclaimer",element:a.jsx(k5,{})}),a.jsx(Se,{path:"*",element:a.jsx(b5,{})})]})}),a.jsx(Wj,{}),a.jsx(Gj,{})]})}ua.createRoot(document.getElementById("root")).render(a.jsx(np.StrictMode,{children:a.jsx(Ly,{children:a.jsx(S5,{})})}));
