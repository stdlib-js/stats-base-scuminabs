// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;var f=t,c=function(r,e,t){var f,c,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(r,e)||l.call(r,e)?(f=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=f):r[e]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&i&&i.call(r,e,t.set),r},_=e()?f:c;var p=function(r){return r!=r};var b=function(r){return Math.abs(r)};function y(r,e,t,n,o){var a,i,u,l,f;if(r<=0)return n;if(u=o<0?(1-r)*o:0,a=b(e[i=t<0?(1-r)*t:0]),n[u]=a,u+=o,f=1,!1===p(a))for(;f<r;f++){if(l=b(e[i+=t]),p(l)){a=l;break}l<a&&(a=l),n[u]=a,u+=o}if(p(a))for(;f<r;f++)n[u]=a,u+=o;return n}function v(r,e,t,n,o,a,i){var u,l,f,c,_;if(r<=0)return o;if(f=i,u=b(e[l=n]),o[f]=u,f+=a,_=1,!1===p(u))for(;_<r;_++){if(c=b(e[l+=t]),p(c)){u=c;break}c<u&&(u=c),o[f]=u,f+=a}if(p(u))for(;_<r;_++)o[f]=u,f+=a;return o}(function(r,e,t){_(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})})(y,"ndarray",v);export{y as default,v as ndarray};
//# sourceMappingURL=mod.js.map
