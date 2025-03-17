"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var b=c(function(G,j){
var m=require('@stdlib/math-base-assert-is-nanf/dist'),x=require('@stdlib/math-base-special-absf/dist');function O(r,e,t,o,i,n,q){var a,f,s,v,u;if(r<=0)return i;if(f=o,s=q,a=x(e[f]),i[s]=a,s+=n,u=1,m(a)===!1)for(u;u<r;u++){if(f+=t,v=x(e[f]),m(v)){a=v;break}v<a&&(a=v),i[s]=a,s+=n}if(m(a))for(u;u<r;u++)i[s]=a,s+=n;return i}j.exports=O
});var d=c(function(H,y){
var l=require('@stdlib/strided-base-stride2offset/dist'),g=b();function h(r,e,t,o,i){var n=l(r,t),q=l(r,i);return g(r,e,t,n,o,i,q)}y.exports=h
});var k=c(function(I,_){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=d(),z=b();w(R,"ndarray",z);_.exports=R
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=k(),p,E=B(A(__dirname,"./native.js"));C(E)?p=D:p=E;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
