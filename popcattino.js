!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.popcattino=n():t.popcattino=n()}(globalThis,(()=>{return t={36:(t,n)=>{var r,i,e,u;"object"!=typeof globalThis&&(Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__),void 0===Math.imul&&(Math.imul=function(t,n){return(4294901760&t)*(65535&n)+(65535&t)*(0|n)|0}),void 0===ArrayBuffer.isView&&(ArrayBuffer.isView=function(t){return null!=t&&null!=t.__proto__&&t.__proto__.__proto__===Int8Array.prototype.__proto__}),void 0===Array.prototype.fill&&Object.defineProperty(Array.prototype,"fill",{value:function(t){if(null==this)throw new TypeError("this is null or not defined");for(var n=Object(this),r=n.length>>>0,i=0|arguments[1],e=i<0?Math.max(r+i,0):Math.min(i,r),u=arguments[2],o=void 0===u?r:0|u,a=o<0?Math.max(r+o,0):Math.min(o,r);e<a;)n[e]=t,e++;return n}}),[Int8Array,Int16Array,Uint16Array,Int32Array,Float32Array,Float64Array].forEach((function(t){void 0===t.prototype.fill&&Object.defineProperty(t.prototype,"fill",{value:Array.prototype.fill})})),void 0===Math.clz32&&(Math.clz32=(e=Math.log,u=Math.LN2,function(t){var n=t>>>0;return 0===n?32:31-(e(n)/u|0)|0})),void 0===(i="function"==typeof(r=function(t){"use strict";var n,r,i,e,u,o,a,f,c,s,l,h,v,_,d,p,w,g,y,m,$,b,x,I,A,E,S,j,k,M,O,z,C,L=Math.imul,T=ArrayBuffer.isView,q=Math.clz32;function N(){}function B(){}function P(t,n,r,i,e,u,o){return n=n===s?", ":n,r=r===s?"":r,i=i===s?"":i,e=e===s?-1:e,u=u===s?"...":u,o=o===s?null:o,function(t,n,r,i,e,u,o,a){r=r===s?", ":r,i=i===s?"":i,e=e===s?"":e,u=u===s?-1:u,o=o===s?"...":o,a=a===s?null:a,n.c(i);var f=0,c=0,l=t.length;t:for(;c<l;){var h=t[c];if(c=c+1|0,(f=f+1|0)>1&&n.c(r),!(u<0||f<=u))break t;_r(n,h,a)}return u>=0&&f>u&&n.c(o),n.c(e),n}(t,An(),n,r,i,e,u,o).toString()}function R(t,n,r,i,e,u,o){return n=n===s?", ":n,r=r===s?"":r,i=i===s?"":i,e=e===s?-1:e,u=u===s?"...":u,o=o===s?null:o,function(t,n,r,i,e,u,o,a){r=r===s?", ":r,i=i===s?"":i,e=e===s?"":e,u=u===s?-1:u,o=o===s?"...":o,a=a===s?null:a,n.c(i);var f=0,c=t.d();t:for(;c.e();){var l=c.f();if((f=f+1|0)>1&&n.c(r),!(u<0||f<=u))break t;_r(n,l,a)}return u>=0&&f>u&&n.c(o),n.c(e),n}(t,An(),n,r,i,e,u,o).toString()}function F(t,n){return t-n|0}function U(t,n){return t-n|0}function D(t){return String.fromCharCode(t)}function V(){}function J(){}function K(){}function W(t,n){this.j_1=t,this.k_1=n}function X(t){var n=null==t?null:ot(t);return null==n?"null":n}function G(){n=this,this.n_1=new H(0,-2147483648),this.o_1=new H(-1,2147483647),this.p_1=8,this.q_1=64}function H(t,r){null==n&&new G,B.call(this),this.r_1=t,this.s_1=r}function Q(t){for(var n=1,r=[],i=0,e=t.length;i<e;){var u=t[i];i=i+1|0;var o=n,a=u.prototype.$imask$,f=null==a?u.$imask$:a;null!=f&&(r.push(f),o=f.length);var c=u.$metadata$.iid,s=null==c?null:(h=void 0,v=void 0,_=void 0,h=(l=c)>>5,v=new Int32Array(h+1|0),_=1<<(31&l),v[h]=v[h]|_,v);null!=s&&(r.push(s),o=Math.max(o,s.length)),o>n&&(n=o)}var l,h,v,_;return function(t,n){for(var r=0,i=new Int32Array(t);r<t;){for(var e=r,u=0,o=0,a=n.length;o<a;){var f=n[o];o=o+1|0,e<f.length&&(u|=f[e])}i[e]=u,r=r+1|0}return i}(n,r)}function Y(){}function Z(t,n){var r;if(tt(t)){var i=t.charCodeAt(n);if(i<0||i>65535)throw fn("Invalid Char code: "+i);r=Ft(i)}else r=t.b(n);return r}function tt(t){return"string"==typeof t}function nt(t){return ot(t)}function rt(t,n){var r;switch(typeof t){case"number":r="number"==typeof n?it(t,n):n instanceof H?it(t,n.a1()):et(t,n);break;case"string":case"boolean":r=et(t,n);break;default:r=function(t,n){return t.m(n)}(t,n)}return r}function it(t,n){var r;if(t<n)r=-1;else if(t>n)r=1;else if(t===n){var i;if(0!==t)i=0;else{var e=1/t;i=e===1/n?0:e<0?-1:1}r=i}else r=t!=t?n!=n?0:1:-1;return r}function et(t,n){return t<n?-1:t>n?1:0}function ut(t){return t=t===s?null:t,Object.create(t)}function ot(t){return null==t?"null":function(t){return n=t,Array.isArray(n)||T(t);var n}(t)?"[...]":"function"!=typeof t.toString?function(t){return Object.prototype.toString.call(t)}(t):t.toString()}function at(t,n){return null==t?null==n:null!=n&&("object"==typeof t&&"function"==typeof t.equals?t.equals(n):t!=t?n!=n:"number"==typeof t&&"number"==typeof n?t===n&&(0!==t||1/t==1/n):t===n)}function ft(t,n){null!=Error.captureStackTrace?Error.captureStackTrace(t,n):t.stack=(new Error).stack}function ct(t){return t.prototype}function st(t,n,r){Error.call(t),function(t,n,r){var i=Vt(Object.getPrototypeOf(t));if(!(1&i)){var e;if(null==n){var u;if(null!==n){var o=null==r?null:r.toString();u=null==o?s:o}else u=s;e=u}else e=n;t.message=e}2&i||(t.cause=r),t.name=Object.getPrototypeOf(t).constructor.name}(t,n,r)}function lt(){throw yn()}function ht(){return Lt(),r}function vt(){return Lt(),i}function _t(){return Lt(),e}function dt(){return Lt(),o}function pt(){return Lt(),a}function wt(t,n){if(Lt(),It(t,n))return 0;var r=Et(t),i=Et(n);return r&&!i?-1:!r&&i?1:Et(yt(t,n))?-1:1}function gt(t,n){Lt();var r=t.s_1>>>16|0,i=65535&t.s_1,e=t.r_1>>>16|0,u=65535&t.r_1,o=n.s_1>>>16|0,a=65535&n.s_1,f=n.r_1>>>16|0,c=0,s=0,l=0,h=0;return c=(c=c+((s=(s=s+((l=(l=l+((h=h+(u+(65535&n.r_1)|0)|0)>>>16|0)|0)+(e+f|0)|0)>>>16|0)|0)+(i+a|0)|0)>>>16|0)|0)+(r+o|0)|0,new H((l&=65535)<<16|(h&=65535),(c&=65535)<<16|(s&=65535))}function yt(t,n){return Lt(),gt(t,n.x())}function mt(t,n){if(Lt(),St(t))return ht();if(St(n))return ht();if(It(t,dt()))return jt(n)?dt():ht();if(It(n,dt()))return jt(t)?dt():ht();if(Et(t))return Et(n)?mt(kt(t),kt(n)):kt(mt(kt(t),n));if(Et(n))return kt(mt(t,kt(n)));if(Mt(t,pt())&&Mt(n,pt()))return Ot(bt(t)*bt(n));var r=t.s_1>>>16|0,i=65535&t.s_1,e=t.r_1>>>16|0,u=65535&t.r_1,o=n.s_1>>>16|0,a=65535&n.s_1,f=n.r_1>>>16|0,c=65535&n.r_1,s=0,l=0,h=0,v=0;return h=h+((v=v+L(u,c)|0)>>>16|0)|0,v&=65535,l=(l=l+((h=h+L(e,c)|0)>>>16|0)|0)+((h=(h&=65535)+L(u,f)|0)>>>16|0)|0,h&=65535,s=(s=(s=s+((l=l+L(i,c)|0)>>>16|0)|0)+((l=(l&=65535)+L(e,f)|0)>>>16|0)|0)+((l=(l&=65535)+L(u,a)|0)>>>16|0)|0,l&=65535,s=s+(((L(r,c)+L(i,f)|0)+L(e,a)|0)+L(u,o)|0)|0,new H(h<<16|v,(s&=65535)<<16|l)}function $t(t,n){if(Lt(),St(n))throw on("division by zero");if(St(t))return ht();if(It(t,dt())){if(It(n,vt())||It(n,_t()))return dt();if(It(n,dt()))return vt();var r=function(t,n){Lt();var r=63&n;return 0===r?t:r<32?new H(t.r_1<<r,t.s_1<<r|t.r_1>>>(32-r|0)):new H(0,t.r_1<<r-32)}(function(t,n){Lt();var r=63&n;return 0===r?t:r<32?new H(t.r_1>>>r|t.s_1<<32-r,t.s_1>>r):new H(t.s_1>>r-32,t.s_1>=0?0:-1)}(t,1).w(n),1);return It(r,ht())?Et(n)?vt():_t():gt(r,yt(t,mt(n,r)).w(n))}if(It(n,dt()))return ht();if(Et(t))return Et(n)?kt(t).w(kt(n)):kt(kt(t).w(n));if(Et(n))return kt(t.w(kt(n)));for(var i=ht(),e=t;Ct(e,n);){for(var u=bt(e)/bt(n),o=Math.max(1,Math.floor(u)),a=Math.ceil(Math.log(o)/Math.LN2),f=a<=48?1:Math.pow(2,a-48),c=Ot(o),s=mt(c,n);Et(s)||zt(s,e);)s=mt(c=Ot(o-=f),n);St(c)&&(c=vt()),i=gt(i,c),e=yt(e,s)}return i}function bt(t){return Lt(),4294967296*t.s_1+function(t){return Lt(),t.r_1>=0?t.r_1:4294967296+t.r_1}(t)}function xt(t,n){if(Lt(),n<2||36<n)throw on("radix out of range: "+n);if(St(t))return"0";if(Et(t)){if(It(t,dt())){var r=At(n),i=t.w(r),e=yt(mt(i,r),t).z();return xt(i,n)+e.toString(n)}return"-"+xt(kt(t),n)}for(var u=2===n?31:n<=10?9:n<=21?7:n<=35?6:5,o=Ot(Math.pow(n,u)),a=t,f="";;){var c=a.w(o),s=yt(a,mt(c,o)).z().toString(n);if(St(a=c))return s+f;for(;s.length<u;)s="0"+s;f=s+f}}function It(t,n){return Lt(),t.s_1===n.s_1&&t.r_1===n.r_1}function At(t){return Lt(),new H(t,t<0?-1:0)}function Et(t){return Lt(),t.s_1<0}function St(t){return Lt(),0===t.s_1&&0===t.r_1}function jt(t){return Lt(),!(1&~t.r_1)}function kt(t){return Lt(),t.x()}function Mt(t,n){return Lt(),wt(t,n)<0}function Ot(t){if(Lt(),(n=t)!=n)return ht();var n;if(t<=-0x8000000000000000)return dt();if(t+1>=0x8000000000000000)return Lt(),u;if(t<0)return kt(Ot(-t));var r=4294967296;return new H(t%r|0,t/r|0)}function zt(t,n){return Lt(),wt(t,n)>0}function Ct(t,n){return Lt(),wt(t,n)>=0}function Lt(){f||(f=!0,r=At(0),i=At(1),e=At(-1),u=new H(-1,2147483647),o=new H(0,-2147483648),a=At(16777216))}function Tt(t,n,r,i,e,u,o,a,f){null!=e&&(n.prototype=Object.create(e.prototype),n.prototype.constructor=n);var l=function(t,n,r,i,e,u){return{kind:t,simpleName:n,associatedObjectKey:i,associatedObjects:e,suspendArity:u,$kClass$:s,defaultConstructor:r,iid:"interface"===t?(c===s&&(c=0),c=c+1|0):s}}(t,r,i,a,f,o);n.$metadata$=l,null!=u&&((at(l.iid,s)?n.prototype:n).$imask$=Q(u))}function qt(t,n,r,i,e,u,o,a){Tt("class",t,n,r,i,e,u,o,a)}function Nt(t,n,r,i,e,u,o,a){Tt("object",t,n,r,i,e,u,o,a)}function Bt(t,n,r,i,e,u,o,a){Tt("interface",t,n,r,i,e,u,o,a)}function Pt(t,n,r,i){Nt(t,"Companion",s,n,r,i,s,s)}function Rt(t){return t<<24>>24}function Ft(t){return n=function(t){return t<<16>>16}(function(t){return t instanceof H?t.z():function(t){return t>2147483647?2147483647:t<-2147483648?-2147483648:0|t}(t)}(t)),65535&n;var n}function Ut(t){return At(t)}function Dt(t,n){return function(t,n){var r=t.$imask$;return null!=r&&function(t,n){var r=n>>5;if(r>t.length)return!1;var i=1<<(31&n);return!!(t[r]&i)}(r,n)}(t,n.$metadata$.iid)}function Vt(t){var n=t.constructor,r=null==n?null:n.$metadata$,i=null==r?null:r.errorInfo;if(null!=i)return i;var e,u=0;if(Jt(t,"message")&&(u|=1),Jt(t,"cause")&&(u|=2),3!==u){var o=(e=t,Object.getPrototypeOf(e));o!=Error.prototype&&(u|=Vt(o))}return null!=r&&(r.errorInfo=u),u}function Jt(t,n){return t.hasOwnProperty(n)}function Kt(t,n,r,i){r=r===s?0:r,i=i===s?t.length:i,y.d1(r,i,t.length),t.fill(n,r,i)}function Wt(){l=this,this.e1_1=new Int32Array([48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296])}function Xt(){return null==l&&new Wt,l}function Gt(){}function Ht(){}function Qt(t){return function(t){if(t.h())return[];for(var n=t.g(),r=function(t,n){var r=0,i=t.length-1|0;if(r<=i)do{var e=r;r=r+1|0,t[e]=n}while(e!==i);return t}(Array(n),null),i=t.d(),e=0;i.e();){var u=e;e=u+1|0,r[u]=i.f()}return r}(t)}function Yt(){Dn.call(this)}function Zt(t){this.h1_1=t,this.f1_1=0,this.g1_1=-1}function tn(){Yt.call(this),this.i1_1=0}function nn(){v=this;var t=function(t,n){var r=[];if(rn.call(n,r),!(t>=0))throw fn(ot("Negative initial capacity: "+t));return n}(0,ut(ct(rn)));t.m1_1=!0,this.n1_1=t}function rn(t){null==v&&new nn,tn.call(this),this.l1_1=t,this.m1_1=!1}function en(t){return st(t),an.call(t),t}function un(t,n){return st(n,t),an.call(n),n}function on(t){var n=un(t,ut(ct(an)));return ft(n,on),n}function an(){ft(this,an)}function fn(t){var n=function(t,n){return vn(t,n),cn.call(n),n}(t,ut(ct(cn)));return ft(n,fn),n}function cn(){ft(this,cn)}function sn(t){var n=function(t,n){return vn(t,n),ln.call(n),n}(t,ut(ct(ln)));return ft(n,sn),n}function ln(){ft(this,ln)}function hn(t){return en(t),_n.call(t),t}function vn(t,n){return un(t,n),_n.call(n),n}function _n(){ft(this,_n)}function dn(){var t,n=(hn(t=ut(ct(pn))),pn.call(t),t);return ft(n,dn),n}function pn(){ft(this,pn)}function wn(t){var n=function(t,n){return vn(t,n),gn.call(n),n}(t,ut(ct(gn)));return ft(n,wn),n}function gn(){ft(this,gn)}function yn(){var t,n=(hn(t=ut(ct(mn))),mn.call(t),t);return ft(n,yn),n}function mn(){ft(this,mn)}function $n(){return _||(_=!0,Math.pow(2,-26),Math.pow(2,-53)),t=Math.random()*Math.pow(2,32)|0,function(t,n,r){return vr.call(r,t,n,0,0,~t,t<<10^n>>>4),r}(t,t>>31,ut(ct(vr)));var t}function bn(t){un(t,this),ft(this,bn)}function xn(t){return In(n=ut(ct(En))),n;var n}function In(t){return En.call(t,""),t}function An(){return In(ut(ct(En)))}function En(t){this.s1_1=t}function Sn(t){var n=D(t).toUpperCase();return n.length>1?t:Z(n,0)}function jn(t){if(!(2<=t&&t<=36))throw fn("radix "+t+" was not in valid range 2..36");return t}function kn(t,n){var r,i,e,u=F(t,48)>=0&&F(t,57)<=0?U(t,48):F(t,65)>=0&&F(t,90)<=0?U(t,65)+10|0:F(t,97)>=0&&F(t,122)<=0?U(t,97)+10|0:F(t,128)<0?-1:F(t,65313)>=0&&F(t,65338)<=0?U(t,65313)+10|0:F(t,65345)>=0&&F(t,65370)<=0?U(t,65345)+10|0:(r=t,i=function(t,n){for(var r=0,i=t.length-1|0,e=-1,u=0;r<=i;)if(n>(u=t[e=(r+i|0)/2|0]))r=e+1|0;else{if(n===u)return e;i=e-1|0}return e-(n<u?1:0)|0}(Xt().e1_1,r),(e=r-Xt().e1_1[i]|0)<10?e:-1);return u>=n?-1:u}function Mn(t,n){return t.toString(jn(n))}function On(){d=this,this.u1_1=new RegExp("[\\\\^$*+?.()|[\\]{}]","g"),this.v1_1=new RegExp("[\\\\$]","g"),this.w1_1=new RegExp("\\$","g")}function zn(){return null==d&&new On,d}function Cn(t){this.z1_1=t}function Ln(t,n){return Tn(),function(t,n,r){if(r=r!==s&&r,Tn(),r){var i=t.length,e=n.length,u=Math.min(i,e);if(0===u)return i-e|0;var o=0;if(o<u)do{var a=o;o=o+1|0;var f=Z(t,a),c=Z(n,a);if(f!==c&&(f=Sn(f))!==(c=Sn(c))&&(f=Z(D(f).toLowerCase(),0))!==(c=Z(D(c).toLowerCase(),0)))return F(f,c)}while(o<u);return i-e|0}return rt(t,n)}(t,n,!0)}function Tn(){p||(p=!0,new Cn(Ln))}function qn(){return Un(),w}function Nn(t,n,r,i,e){if(Un(),!(55296<=n&&n<=56319)||r>=i)return Fn(0,r,e);var u=Z(t,r);return 56320<=u&&u<=57343?65536+((1023&n)<<10)|1023&u:Fn(0,r,e)}function Bn(t,n,r,i,e){if(Un(),!(30&n)||r>=i)return Fn(0,r,e);var u=t[r];return 128!=(192&u)?Fn(0,r,e):n<<6^u^3968}function Pn(t,n,r,i,e){if(Un(),r>=i)return Fn(0,r,e);var u=t[r];if(15&n){if(13==(15&n)){if(128!=(224&u))return Fn(0,r,e)}else if(128!=(192&u))return Fn(0,r,e)}else if(160!=(224&u))return Fn(0,r,e);if((r+1|0)===i)return Fn(1,r,e);var o=t[r+1|0];return 128!=(192&o)?Fn(1,r,e):n<<12^u<<6^o^-123008}function Rn(t,n,r,i,e){if(Un(),r>=i)return Fn(0,r,e);var u=t[r];if(15&n){if(4==(15&n)){if(128!=(240&u))return Fn(0,r,e)}else if((15&n)>4)return Fn(0,r,e)}else if((240&u)<=128)return Fn(0,r,e);if(128!=(192&u))return Fn(0,r,e);if((r+1|0)===i)return Fn(1,r,e);var o=t[r+1|0];if(128!=(192&o))return Fn(1,r,e);if((r+2|0)===i)return Fn(2,r,e);var a=t[r+2|0];return 128!=(192&a)?Fn(2,r,e):n<<18^u<<12^o<<6^a^3678080}function Fn(t,n,r){if(Un(),r)throw new bn("Malformed sequence starting at "+(n-1|0));return 0|-t}function Un(){g||(g=!0,w=new Int8Array([-17,-65,-67]))}function Dn(){}function Vn(){this.c1_1=2147483639}function Jn(){m=this,this.c2_1=new H(-1478467534,-1720727600)}function Kn(){}function Wn(){return ar(),b}function Xn(){return ar(),x}function Gn(){return ar(),I}function Hn(){if(k)return h;k=!0,E=new Qn("PRESENT",0),S=new Qn("ABSENT",1),j=new Qn("PRESENT_OPTIONAL",2),new Qn("ABSENT_OPTIONAL",3)}function Qn(t,n){W.call(this,t,n)}function Yn(t){return t.f2_1.equals(ur())||t.f2_1.equals((Hn(),j))}function Zn(t,n,r,i,e,u){var o=t.d2_1?(ar(),A):Xn(),a=0,f=-8,c=e,s=i,l=!1;t:for(;c<u;){if(-8===f&&(c+3|0)<u){var h=c,v=c=h+1|0,_=c=v+1|0,d=c=_+1|0;c=d+1|0;var p=o[255&n[h]]<<18|o[255&n[v]]<<12|o[255&n[_]]<<6|o[255&n[d]];if(p>=0){var w=s;s=w+1|0,r[w]=Rt(p>>16);var g=s;s=g+1|0,r[g]=Rt(p>>8);var y=s;s=y+1|0,r[y]=Rt(p);continue t}c=c-4|0}var m=255&n[c],$=o[m];if($<0){if(-2===$){l=!0,c=tr(t,n,c,u,f);break t}if(t.e2_1){c=c+1|0;continue t}throw fn("Invalid symbol '"+D(Ft(m))+"'("+Mn(m,8)+") at index "+c)}if(c=c+1|0,a=a<<6|$,(f=f+6|0)>=0){var b=s;s=b+1|0,r[b]=Rt(a>>>f|0),a&=(1<<f)-1,f=f-8|0}}if(-2===f)throw fn("The last unit of input does not have enough bits");if(-8!==f&&!l&&t.f2_1.equals(ur()))throw fn("The padding option is set to PRESENT, but the input is not properly padded");if(0!==a)throw fn("The pad bits must be zeros");if((c=rr(t,n,c,u))<u){var x=255&n[c];throw fn("Symbol '"+D(Ft(x))+"'("+Mn(x,8)+") at index "+(c-1|0)+" is prohibited after the pad character")}return s-i|0}function tr(t,n,r,i,e){var u;switch(e){case-8:throw fn("Redundant pad character at index "+r);case-2:u=r+1|0;break;case-4:nr(t,r);var o=rr(t,n,r+1|0,i);if(o===i||61!==n[o])throw fn("Missing one pad character at index "+o);u=o+1|0;break;case-6:nr(t,r),u=r+1|0;break;default:throw sn(ot("Unreachable"))}return u}function nr(t,n){if(t.f2_1.equals((Hn(),S)))throw fn("The padding option is set to ABSENT, but the input has a pad character at index "+n)}function rr(t,n,r,i){if(!t.e2_1)return r;for(var e=r;e<i;){var u=255&n[e];if(-1!==Xn()[u])return e;e=e+1|0}return e}function ir(){M=this,or.call(this,!1,!1,ur()),this.j2_1=8,this.k2_1=6,this.l2_1=3,this.m2_1=4,this.n2_1=61,this.o2_1=76,this.p2_1=19;var t=Rt(13);this.q2_1=new Int8Array([t,Rt(10)]),this.r2_1=new or(!0,!1,ur()),this.s2_1=new or(!1,!0,ur())}function er(){return null==M&&new ir,M}function ur(){return Hn(),E}function or(t,n,r){if(er(),this.d2_1=t,this.e2_1=n,this.f2_1=r,this.d2_1&&this.e2_1)throw fn(ot("Failed requirement."))}function ar(){if(!O){O=!0,b=new Int8Array([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,43,47]);var t=new Int32Array(256);Kt(t,-1),t[61]=-2;for(var n=0,r=Wn(),i=0,e=r.length;i<e;){var u=r[i];i=i+1|0;var o=n;n=o+1|0,t[u]=o}x=t,I=new Int8Array([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,45,95]);var a=new Int32Array(256);Kt(a,-1),a[61]=-2;for(var f=0,c=Gn(),s=0,l=c.length;s<l;){var h=c[s];s=s+1|0;var v=f;f=v+1|0,a[h]=v}A=a}}function fr(){z=this,sr.call(this),this.d3_1=$n()}function cr(){return null==z&&new fr,z}function sr(){cr()}function lr(t,n){if(!(n>t))throw fn(ot(function(t,n){return"Random range is empty: ["+ot(t)+", "+ot(n)+")."}(t,n)))}function hr(){C=this,this.i3_1=new H(0,0)}function vr(t,n,r,i,e,u){if(null==C&&new hr,sr.call(this),this.j3_1=t,this.k3_1=n,this.l3_1=r,this.m3_1=i,this.n3_1=e,this.o3_1=u,!(this.j3_1|this.k3_1|this.l3_1|this.m3_1|this.n3_1))throw fn(ot("Initial state must have at least one non-zero element."));var o=0;if(o<64)do{o=o+1|0,this.f3()}while(o<64)}function _r(t,n,r){var i;null!=r?t.c(r(n)):null==n||("string"==typeof(i=n)||Dt(i,N))?t.c(n):n instanceof V?t.t1(n.p3_1):t.c(ot(n))}return Bt(N,"CharSequence"),qt(B,"Number"),qt(V,"Char"),Bt(J,"List"),Pt(K),qt(W,"Enum"),Pt(G),qt(H,"Long",s,B),Bt(Y,"FunctionAdapter"),Nt(Wt,"Digit"),Bt(Gt,"Comparator"),Nt(Ht,"Unit"),qt(Dn,"AbstractCollection"),qt(Yt,"AbstractMutableCollection",s,Dn),qt(Zt,"IteratorImpl"),qt(tn,"AbstractMutableList",s,Yt,[Yt,J]),Pt(nn),qt(rn,"ArrayList",(function(){return t=ut(ct(rn)),rn.call(t,[]),t;var t}),tn,[tn,J]),qt(an,"Exception",(function t(){var n=en(ut(ct(an)));return ft(n,t),n}),Error),qt(_n,"RuntimeException",(function t(){var n=hn(ut(ct(_n)));return ft(n,t),n}),an),qt(cn,"IllegalArgumentException",(function t(){var n,r=(hn(n=ut(ct(cn))),cn.call(n),n);return ft(r,t),r}),_n),qt(ln,"IllegalStateException",(function t(){var n,r=(hn(n=ut(ct(ln))),ln.call(n),n);return ft(r,t),r}),_n),qt(pn,"NoSuchElementException",dn,_n),qt(gn,"IndexOutOfBoundsException",(function t(){var n,r=(hn(n=ut(ct(gn))),gn.call(n),n);return ft(r,t),r}),_n),qt(mn,"ClassCastException",yn,_n),qt(bn,"CharacterCodingException",(function t(){var n,r=(n=ut(ct(bn)),bn.call(n,null),n);return ft(r,t),r}),an),qt(En,"StringBuilder",An,s,[N]),Pt(On),qt(Cn,"sam$kotlin_Comparator$0",s,s,[Gt,Y]),Pt(Vn),Nt(Jn,"EmptyList",s,s,[J]),Nt(Kn,"EmptyIterator"),qt(Qn,"PaddingOption",s,W),qt(or,"Base64"),Nt(ir,"Default",s,or),qt(sr,"Random"),Nt(fr,"Default",s,sr),Pt(hr),qt(vr,"XorWowRandom",s,sr),ct(W).l=function(t){return rt(this.k_1,t.k_1)},ct(W).m=function(t){return this.l(t instanceof W?t:lt())},ct(W).equals=function(t){return this===t},ct(W).toString=function(){return this.j_1},ct(H).t=function(t){return wt(this,t)},ct(H).m=function(t){return this.t(t instanceof H?t:lt())},ct(H).u=function(t){return gt(this,t)},ct(H).v=function(t){return mt(this,t)},ct(H).w=function(t){return $t(this,t)},ct(H).x=function(){return this.y().u(new H(1,0))},ct(H).y=function(){return new H(~this.r_1,~this.s_1)},ct(H).z=function(){return this.r_1},ct(H).a1=function(){return bt(this)},ct(H).toString=function(){return xt(this,10)},ct(H).equals=function(t){return t instanceof H&&It(this,t)},ct(H).valueOf=function(){return this.a1()},ct(Ht).toString=function(){return"kotlin.Unit"},ct(Yt).toJSON=function(){return this.toArray()},ct(Zt).e=function(){return this.f1_1<this.h1_1.g()},ct(Zt).f=function(){if(!this.e())throw dn();var t=this.f1_1;return this.f1_1=t+1|0,this.g1_1=t,this.h1_1.i(this.g1_1)},ct(tn).d=function(){return new Zt(this)},ct(tn).equals=function(t){return t===this||!(null==t||!Dt(t,J))&&y.j1(this,t)},ct(rn).g=function(){return this.l1_1.length},ct(rn).i=function(t){var n=this.l1_1[function(t,n){return y.o1(n,t.g()),n}(this,t)];return null==n||null!=n?n:lt()},ct(rn).toString=function(){return P(this.l1_1,", ","[","]",s,s,nt)},ct(rn).p1=function(){return[].slice.call(this.l1_1)},ct(rn).toArray=function(){return this.p1()},ct(En).a=function(){return this.s1_1.length},ct(En).b=function(t){var n,r=this.s1_1;if(!(0<=t&&t<=(0|(n=r,(tt(n)?n.length:n.a())-1))))throw wn("index: "+t+", length: "+this.a()+"}");return Z(r,t)},ct(En).t1=function(t){return this.s1_1=this.s1_1+D(t),this},ct(En).c=function(t){return this.s1_1=this.s1_1+X(t),this},ct(En).toString=function(){return this.s1_1},ct(On).x1=function(t){var n=this.u1_1;return t.replace(n,"\\$&")},ct(On).y1=function(t){var n=this.w1_1;return t.replace(n,"$$$$")},ct(Cn).a2=function(t,n){return this.z1_1(t,n)},ct(Cn).compare=function(t,n){return this.a2(t,n)},ct(Cn).b1=function(){return this.z1_1},ct(Cn).equals=function(t){return!(null==t||!Dt(t,Gt))&&!(null==t||!Dt(t,Y))&&at(this.b1(),t.b1())},ct(Dn).h=function(){return 0===this.g()},ct(Dn).toString=function(){return R(this,", ","[","]",s,s,(t=this,function(n){return n===t?"(this Collection)":X(n)}));var t},ct(Dn).toArray=function(){return Qt(this)},ct(Vn).o1=function(t,n){if(t<0||t>=n)throw wn("index: "+t+", size: "+n)},ct(Vn).d1=function(t,n,r){if(t<0||n>r)throw wn("fromIndex: "+t+", toIndex: "+n+", size: "+r);if(t>n)throw fn("fromIndex: "+t+" > toIndex: "+n)},ct(Vn).b2=function(t,n,r){if(t<0||n>r)throw wn("startIndex: "+t+", endIndex: "+n+", size: "+r);if(t>n)throw fn("startIndex: "+t+" > endIndex: "+n)},ct(Vn).j1=function(t,n){if(t.g()!==n.g())return!1;for(var r=n.d(),i=t.d();i.e();)if(!at(i.f(),r.f()))return!1;return!0},ct(Jn).equals=function(t){return!(null==t||!Dt(t,J))&&t.h()},ct(Jn).toString=function(){return"[]"},ct(Jn).g=function(){return 0},ct(Jn).h=function(){return!0},ct(Jn).i=function(t){throw wn("Empty list doesn't contain element at index "+t+".")},ct(Jn).d=function(){return $},ct(Kn).e=function(){return!1},ct(Kn).f=function(){throw dn()},ct(or).t2=function(t,n,r){var i=this.x2(t,n,r);return this.b3(i)},ct(or).u2=function(t,n,r,i){return n=n===s?0:n,r=r===s?t.length:r,i===s?this.t2(t,n,r):i.t2.call(this,t,n,r)},ct(or).v2=function(t,n,r){this.c3(t.length,n,r);var i=this.a3(t,n,r),e=new Int8Array(i);if(Zn(this,t,e,0,n,r)!==e.length)throw sn("Check failed.");return e},ct(or).w2=function(t,n,r,i){return n=n===s?0:n,r=r===s?t.length:r,i===s?this.v2(t,n,r):i.v2.call(this,t,n,r)},ct(or).x2=function(t,n,r){this.c3(t.length,n,r);var i=this.z2(r-n|0),e=new Int8Array(i);return this.y2(t,e,0,n,r),e},ct(or).y2=function(t,n,r,i,e){this.c3(t.length,i,e),function(t,n,r,i){if(r<0||r>n)throw wn("destination offset: "+r+", destination size: "+n);var e=r+i|0;if(e<0||e>n)throw wn("The destination array does not have enough capacity, destination offset: "+r+", destination size: "+n+", capacity needed: "+i)}(0,n.length,r,this.z2(e-i|0));for(var u=this.d2_1?Gn():Wn(),o=i,a=r,f=this.e2_1?19:2147483647;(o+2|0)<e;){var c=(e-o|0)/3|0,s=Math.min(c,f),l=0;if(l<s)do{l=l+1|0;var h=o,v=o=h+1|0,_=o=v+1|0;o=_+1|0;var d=(255&t[h])<<16|(255&t[v])<<8|255&t[_],p=a;a=p+1|0,n[p]=u[d>>>18|0];var w=a;a=w+1|0,n[w]=u[d>>>12&63];var g=a;a=g+1|0,n[g]=u[d>>>6&63];var y=a;a=y+1|0,n[y]=u[63&d]}while(l<s);if(s===f&&o!==e){var m=a;a=m+1|0,n[m]=er().q2_1[0];var $=a;a=$+1|0,n[$]=er().q2_1[1]}}var b=e-o|0;if(1===b){var x=o;o=x+1|0;var I=(255&t[x])<<4,A=a;a=A+1|0,n[A]=u[I>>>6|0];var E=a;if(a=E+1|0,n[E]=u[63&I],Yn(this)){var S=a;a=S+1|0,n[S]=61;var j=a;a=j+1|0,n[j]=61}}else if(2===b){var k=o,M=o=k+1|0;o=M+1|0;var O=(255&t[k])<<10|(255&t[M])<<2,z=a;a=z+1|0,n[z]=u[O>>>12|0];var C=a;a=C+1|0,n[C]=u[O>>>6&63];var L=a;if(a=L+1|0,n[L]=u[63&O],Yn(this)){var T=a;a=T+1|0,n[T]=61}}if(o!==e)throw sn("Check failed.");return a-r|0},ct(or).z2=function(t){var n=t%3|0,r=L(t/3|0,4);if(0!==n&&(r=r+(Yn(this)?4:n+1|0)|0),this.e2_1&&(r=r+L((r-1|0)/76|0,2)|0),r<0)throw fn("Input is too big");return r},ct(or).a3=function(t,n,r){var i=r-n|0;if(0===i)return 0;if(1===i)throw fn("Input should have at least 2 symbols for Base64 decoding, startIndex: "+n+", endIndex: "+r);if(this.e2_1){var e=n;if(e<r)t:do{var u=e;e=e+1|0;var o=255&t[u],a=Xn()[o];if(a<0){if(-2===a){i=i-(r-u|0)|0;break t}i=i-1|0}}while(e<r)}else 61===t[r-1|0]&&(i=i-1|0,61===t[r-2|0]&&(i=i-1|0));return Ut(i).v(Ut(6)).w(Ut(8)).z()},ct(or).b3=function(t){for(var n=xn(t.length),r=0,i=t.length;r<i;){var e=t[r];r=r+1|0,n.t1(Ft(e))}return n.toString()},ct(or).c3=function(t,n,r){y.b2(n,r,t)},ct(fr).e3=function(t){return this.d3_1.e3(t)},ct(fr).f3=function(){return this.d3_1.f3()},ct(fr).g3=function(t){return this.d3_1.g3(t)},ct(fr).h3=function(t,n){return this.d3_1.h3(t,n)},ct(sr).f3=function(){return this.e3(32)},ct(sr).g3=function(t){return this.h3(0,t)},ct(sr).h3=function(t,n){lr(t,n);var r=n-t|0;if(r>0||-2147483648===r){var i;if((r&-r)===r){var e=31-q(r)|0;i=this.e3(e)}else{var u;do{var o=this.f3()>>>1|0;u=o%r|0}while(((o-u|0)+(r-1|0)|0)<0);i=u}return t+i|0}for(;;){var a=this.f3();if(t<=a&&a<n)return a}},ct(vr).f3=function(){var t=this.j3_1;t^=t>>>2,this.j3_1=this.k3_1,this.k3_1=this.l3_1,this.l3_1=this.m3_1;var n=this.n3_1;return this.m3_1=n,t=t^t<<1^n^n<<4,this.n3_1=t,this.o3_1=this.o3_1+362437|0,t+this.o3_1|0},ct(vr).e3=function(t){return function(t,n){return t>>>(32-n|0)&-n>>31}(this.f3(),t)},new K,h=new Ht,y=new Vn,$=new Kn,t.$_$=t.$_$||{},t.$_$.a=s,t.$_$.b=er,t.$_$.c=cr,t.$_$.d=h,t.$_$.e=function(t){return t.length>0?new rn(t):(null==m&&new Jn,m)},t.$_$.f=function(t){return Tn(),function(t,n,r,i){if(Un(),!(n>=0&&r<=t.length&&n<=r))throw fn(ot("Failed requirement."));for(var e=n,u=An();e<r;){var o=e;e=o+1|0;var a=t[o];if(a>=0)u.t1(Ft(a));else if(a>>5==-2){var f=Bn(t,a,e,r,i);f<=0?(u.t1(65533),e=e+(0|-f)|0):(u.t1(Ft(f)),e=e+1|0)}else if(a>>4==-2){var c=Pn(t,a,e,r,i);c<=0?(u.t1(65533),e=e+(0|-c)|0):(u.t1(Ft(c)),e=e+2|0)}else if(a>>3==-2){var s=Rn(t,a,e,r,i);if(s<=0)u.t1(65533),e=e+(0|-s)|0;else{var l=s-65536>>10|55296,h=1023&s|56320;u.t1(Ft(l)),u.t1(Ft(h)),e=e+3|0}}else Fn(0,e,i),u.t1(65533)}return u.toString()}(t,0,t.length,!1)},t.$_$.g=function(t){return Tn(),function(t,n,r,i){if(Un(),!(n>=0&&r<=t.length&&n<=r))throw fn(ot("Failed requirement."));for(var e=new Int8Array(L(r-n|0,3)),u=0,o=n;o<r;){var a=o;o=a+1|0;var f=Z(t,a);if(f<128){var c=u;u=c+1|0,e[c]=Rt(f)}else if(f<2048){var s=u;u=s+1|0,e[s]=Rt(f>>6|192);var l=u;u=l+1|0,e[l]=Rt(63&f|128)}else if(f<55296||f>=57344){var h=u;u=h+1|0,e[h]=Rt(f>>12|224);var v=u;u=v+1|0,e[v]=Rt(f>>6&63|128);var _=u;u=_+1|0,e[_]=Rt(63&f|128)}else{var d=Nn(t,f,o,r,i);if(d<=0){var p=u;u=p+1|0,e[p]=qn()[0];var w=u;u=w+1|0,e[w]=qn()[1];var g=u;u=g+1|0,e[g]=qn()[2]}else{var y=u;u=y+1|0,e[y]=Rt(d>>18|240);var m=u;u=m+1|0,e[m]=Rt(d>>12&63|128);var $=u;u=$+1|0,e[$]=Rt(d>>6&63|128);var b=u;u=b+1|0,e[b]=Rt(63&d|128),o=o+1|0}}}return e.length===u?e:function(t,n){if(!(n>=0))throw fn(ot("Invalid new array size: "+n+"."));return function(t,n){for(var r=t.length,i=n.length,e=0,u=n;e<r&&e<i;){var o=e,a=e;e=a+1|0,u[o]=t[a]}return n}(t,new Int8Array(n))}(e,u)}(t,0,t.length,!1)},t.$_$.h=function(t,n,r,i){i=i!==s&&i;var e=new RegExp(zn().x1(n),i?"gui":"gu"),u=zn().y1(r);return t.replace(e,u)},t.$_$.i=function(t){return function(t,n){jn(n);var r,i,e,u=t.length;if(0===u)return null;var o=Z(t,0);if(F(o,48)<0){if(1===u)return null;if(r=1,45===o)i=!0,e=-2147483648;else{if(43!==o)return null;i=!1,e=-2147483647}}else r=0,i=!1,e=-2147483647;var a=-59652323,f=a,c=0,s=r;if(s<u)do{var l=s;s=s+1|0;var h=kn(Z(t,l),n);if(h<0)return null;if(c<f){if(f!==a)return null;if(c<(f=e/n|0))return null}if((c=L(c,n))<(e+h|0))return null;c=c-h|0}while(s<u);return i?c:0|-c}(t,10)},t.$_$.j=lt,t})?r.apply(n,[n]):r)||(t.exports=i)},629:(t,n,r)=>{var i,e,u;e=[n,r(36)],void 0===(u="function"==typeof(i=function(t,n){"use strict";var r,i=n.$_$.j,e=n.$_$.d,u=n.$_$.a,o=n.$_$.h,a=n.$_$.i,f=n.$_$.e,c=n.$_$.c,s=n.$_$.b,l=n.$_$.g,h=n.$_$.f;function v(){return document.body}function _(){var t=document.getElementById("image-close");return null==t||null!=t?t:i()}function d(){var t=document.getElementById("image-open");return null==t||null!=t?t:i()}function p(){var t=document.getElementById("score");return null==t||null!=t?t:i()}function w(){localStorage.popcattino_version="1",function(){var t=localStorage.popcattino_score;if(null==t)return r=0,e;var n,i=a(o((n=t,h(s().w2(l(n)))),"don'tcheathaiyah",""));if(null==i)return r=0,e;r=i}(),m(!1);var t=v();if(null==t);else{t.addEventListener("mousedown",b)}var n=v();null==n||n.addEventListener("mouseup",x),window.setInterval(I,2e3)}function g(){var t=document.getElementById("pop-sound"),n=null==t||null!=t?t:i();(function(){var t=d();t.classList.add("show"),t.classList.remove("hide");var n=_();n.classList.add("hide"),n.classList.remove("show")})(),n.currentTime=0,n.play(),r=r+1|0,m()}function y(){!function(){var t=_();t.classList.add("show"),t.classList.remove("hide");var n=d();n.classList.add("hide"),n.classList.remove("show")}()}function m(t){if(t=t===u||t,p().innerText=r.toString(),!t)return e;var n,i,o;n=f(["rot-ll","rot-l","rot-c","rot-r","rot-rr"]),i=n.i(c().g3(n.g())),p().classList.add("pop-out-enter-active","pop-out-enter",i),window.setTimeout((o=i,function(){return p().classList.remove("pop-out-enter-active","pop-out-enter",o),e}),80)}function $(){var t;localStorage.popcattino_score=(t=r+"don'tcheathaiyah",s().u2(l(t)))}function b(t){return g(),e}function x(t){return y(),e}function I(){return $(),e}return r=0,w(),t})?i.apply(n,e):i)||(t.exports=u)}},n={},function r(i){var e=n[i];if(void 0!==e)return e.exports;var u=n[i]={exports:{}};return t[i](u,u.exports,r),u.exports}(629);var t,n}));
//# sourceMappingURL=popcattino.js.map