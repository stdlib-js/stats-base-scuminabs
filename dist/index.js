"use strict";var c=function(e,u){return function(){return u||e((u={exports:{}}).exports,u),u.exports}};var j=c(function(I,x){
var m=require('@stdlib/math-base-assert-is-nanf/dist'),p=require('@stdlib/math-base-special-abs/dist');function w(e,u,o,s,n){var i,f,r,v,a;if(e<=0)return s;if(o<0?f=(1-e)*o:f=0,n<0?r=(1-e)*n:r=0,i=p(u[f]),s[r]=i,r+=n,a=1,m(i)===!1)for(a;a<e;a++){if(f+=o,v=p(u[f]),m(v)){i=v;break}v<i&&(i=v),s[r]=i,r+=n}if(m(i))for(a;a<e;a++)s[r]=i,r+=n;return s}x.exports=w
});var _=c(function(J,R){
var b=require('@stdlib/math-base-assert-is-nanf/dist'),k=require('@stdlib/math-base-special-abs/dist');function z(e,u,o,s,n,i,f){var r,v,a,q,t;if(e<=0)return n;if(v=s,a=f,r=k(u[v]),n[a]=r,a+=i,t=1,b(r)===!1)for(t;t<e;t++){if(v+=o,q=k(u[v]),b(q)){r=q;break}q<r&&(r=q),n[a]=r,a+=i}if(b(r))for(t;t<e;t++)n[a]=r,a+=i;return n}R.exports=z
});var g=c(function(K,O){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=j(),B=_();A(E,"ndarray",B);O.exports=E
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=g(),l,h=D(C(__dirname,"./native.js"));F(h)?l=G:l=h;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
