!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.popcattino=t():n.popcattino=t()}(globalThis,(()=>{return n={36:(n,t)=>{var r,i,e,u;"object"!=typeof globalThis&&(Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__),void 0===Math.imul&&(Math.imul=function(n,t){return(4294901760&n)*(65535&t)+(65535&n)*(0|t)|0}),void 0===ArrayBuffer.isView&&(ArrayBuffer.isView=function(n){return null!=n&&null!=n.__proto__&&n.__proto__.__proto__===Int8Array.prototype.__proto__}),void 0===Array.prototype.fill&&Object.defineProperty(Array.prototype,"fill",{value:function(n){if(null==this)throw new TypeError("this is null or not defined");for(var t=Object(this),r=t.length>>>0,i=0|arguments[1],e=i<0?Math.max(r+i,0):Math.min(i,r),u=arguments[2],o=void 0===u?r:0|u,a=o<0?Math.max(r+o,0):Math.min(o,r);e<a;)t[e]=n,e++;return t}}),[Int8Array,Int16Array,Uint16Array,Int32Array,Float32Array,Float64Array].forEach((function(n){void 0===n.prototype.fill&&Object.defineProperty(n.prototype,"fill",{value:Array.prototype.fill})})),void 0===Math.clz32&&(Math.clz32=(e=Math.log,u=Math.LN2,function(n){var t=n>>>0;return 0===t?32:31-(e(t)/u|0)|0})),void 0===(i="function"==typeof(r=function(n){"use strict";var t,r,i,e,u,o,a,f,c,l,s,h,v,_,p,d,g,w,m,y,$,b,x,I,A,E,k,S,M,O,j,T,z,q,C,L=Math.imul,B=ArrayBuffer.isView,N=Math.clz32;function P(){}function R(){}function F(n,t,r,i,e,u,o){return t=t===l?", ":t,r=r===l?"":r,i=i===l?"":i,e=e===l?-1:e,u=u===l?"...":u,o=o===l?null:o,function(n,t,r,i,e,u,o,a){r=r===l?", ":r,i=i===l?"":i,e=e===l?"":e,u=u===l?-1:u,o=o===l?"...":o,a=a===l?null:a,t.c(i);var f=0,c=0,s=n.length;n:for(;c<s;){var h=n[c];if(c=c+1|0,(f=f+1|0)>1&&t.c(r),!(u<0||f<=u))break n;$r(t,h,a)}return u>=0&&f>u&&t.c(o),t.c(e),t}(n,Tt(),t,r,i,e,u,o).toString()}function H(n,t,r,i,e,u,o){return t=t===l?", ":t,r=r===l?"":r,i=i===l?"":i,e=e===l?-1:e,u=u===l?"...":u,o=o===l?null:o,function(n,t,r,i,e,u,o,a){r=r===l?", ":r,i=i===l?"":i,e=e===l?"":e,u=u===l?-1:u,o=o===l?"...":o,a=a===l?null:a,t.c(i);var f=0,c=n.d();n:for(;c.e();){var s=c.f();if((f=f+1|0)>1&&t.c(r),!(u<0||f<=u))break n;$r(t,s,a)}return u>=0&&f>u&&t.c(o),t.c(e),t}(n,Tt(),t,r,i,e,u,o).toString()}function U(n,t){return n-t|0}function D(n,t){return n-t|0}function V(n){return String.fromCharCode(n)}function J(){}function K(){}function W(){}function X(n,t){this.j_1=n,this.k_1=t}function G(n){var t=null==n?null:cn(n);return null==t?"null":t}function Q(){t=this,this.n_1=new Y(0,-2147483648),this.o_1=new Y(-1,2147483647),this.p_1=8,this.q_1=64}function Y(n,r){null==t&&new Q,R.call(this),this.r_1=n,this.s_1=r}function Z(n){for(var t=1,r=[],i=0,e=n.length;i<e;){var u=n[i];i=i+1|0;var o=t,a=u.prototype.$imask$,f=null==a?u.$imask$:a;null!=f&&(r.push(f),o=f.length);var c=u.$metadata$.iid,l=null==c?null:(h=void 0,v=void 0,_=void 0,h=(s=c)>>5,v=new Int32Array(h+1|0),_=1<<(31&s),v[h]=v[h]|_,v);null!=l&&(r.push(l),o=Math.max(o,l.length)),o>t&&(t=o)}var s,h,v,_;return function(n,t){for(var r=0,i=new Int32Array(n);r<n;){for(var e=r,u=0,o=0,a=t.length;o<a;){var f=t[o];o=o+1|0,e<f.length&&(u|=f[e])}i[e]=u,r=r+1|0}return i}(t,r)}function nn(){}function tn(n,t){var r;if(rn(n)){var i=n.charCodeAt(t);if(i<0||i>65535)throw pt("Invalid Char code: "+i);r=Dn(i)}else r=n.b(t);return r}function rn(n){return"string"==typeof n}function en(n){return cn(n)}function un(n,t){var r;switch(typeof n){case"number":r="number"==typeof t?on(n,t):t instanceof Y?on(n,t.a1()):an(n,t);break;case"string":case"boolean":r=an(n,t);break;default:r=function(n,t){return n.m(t)}(n,t)}return r}function on(n,t){var r;if(n<t)r=-1;else if(n>t)r=1;else if(n===t){var i;if(0!==n)i=0;else{var e=1/n;i=e===1/t?0:e<0?-1:1}r=i}else r=n!=n?t!=t?0:1:-1;return r}function an(n,t){return n<t?-1:n>t?1:0}function fn(n){return n=n===l?null:n,Object.create(n)}function cn(n){return null==n?"null":function(n){return t=n,Array.isArray(t)||B(n);var t}(n)?"[...]":"function"!=typeof n.toString?function(n){return Object.prototype.toString.call(n)}(n):n.toString()}function ln(n,t){return null==n?null==t:null!=t&&("object"==typeof n&&"function"==typeof n.equals?n.equals(t):n!=n?t!=t:"number"==typeof n&&"number"==typeof t?n===t&&(0!==n||1/n==1/t):n===t)}function sn(n,t){null!=Error.captureStackTrace?Error.captureStackTrace(n,t):n.stack=(new Error).stack}function hn(n){return n.prototype}function vn(n,t,r){Error.call(n),function(n,t,r){var i=Kn(Object.getPrototypeOf(n));if(!(1&i)){var e;if(null==t){var u;if(null!==t){var o=null==r?null:r.toString();u=null==o?l:o}else u=l;e=u}else e=t;n.message=e}2&i||(n.cause=r),n.name=Object.getPrototypeOf(n).constructor.name}(n,t,r)}function _n(){throw Et()}function pn(){return Bn(),r}function dn(){return Bn(),i}function gn(){return Bn(),e}function wn(){return Bn(),o}function mn(){return Bn(),a}function yn(n,t){if(Bn(),kn(n,t))return 0;var r=Mn(n),i=Mn(t);return r&&!i?-1:!r&&i?1:Mn(bn(n,t))?-1:1}function $n(n,t){Bn();var r=n.s_1>>>16|0,i=65535&n.s_1,e=n.r_1>>>16|0,u=65535&n.r_1,o=t.s_1>>>16|0,a=65535&t.s_1,f=t.r_1>>>16|0,c=0,l=0,s=0,h=0;return c=(c=c+((l=(l=l+((s=(s=s+((h=h+(u+(65535&t.r_1)|0)|0)>>>16|0)|0)+(e+f|0)|0)>>>16|0)|0)+(i+a|0)|0)>>>16|0)|0)+(r+o|0)|0,new Y((s&=65535)<<16|(h&=65535),(c&=65535)<<16|(l&=65535))}function bn(n,t){return Bn(),$n(n,t.x())}function xn(n,t){if(Bn(),On(n))return pn();if(On(t))return pn();if(kn(n,wn()))return jn(t)?wn():pn();if(kn(t,wn()))return jn(n)?wn():pn();if(Mn(n))return Mn(t)?xn(Tn(n),Tn(t)):Tn(xn(Tn(n),t));if(Mn(t))return Tn(xn(n,Tn(t)));if(zn(n,mn())&&zn(t,mn()))return qn(An(n)*An(t));var r=n.s_1>>>16|0,i=65535&n.s_1,e=n.r_1>>>16|0,u=65535&n.r_1,o=t.s_1>>>16|0,a=65535&t.s_1,f=t.r_1>>>16|0,c=65535&t.r_1,l=0,s=0,h=0,v=0;return h=h+((v=v+L(u,c)|0)>>>16|0)|0,v&=65535,s=(s=s+((h=h+L(e,c)|0)>>>16|0)|0)+((h=(h&=65535)+L(u,f)|0)>>>16|0)|0,h&=65535,l=(l=(l=l+((s=s+L(i,c)|0)>>>16|0)|0)+((s=(s&=65535)+L(e,f)|0)>>>16|0)|0)+((s=(s&=65535)+L(u,a)|0)>>>16|0)|0,s&=65535,l=l+(((L(r,c)+L(i,f)|0)+L(e,a)|0)+L(u,o)|0)|0,new Y(h<<16|v,(l&=65535)<<16|s)}function In(n,t){if(Bn(),On(t))throw vt("division by zero");if(On(n))return pn();if(kn(n,wn())){if(kn(t,dn())||kn(t,gn()))return wn();if(kn(t,wn()))return dn();var r=function(n,t){Bn();var r=63&t;return 0===r?n:r<32?new Y(n.r_1<<r,n.s_1<<r|n.r_1>>>(32-r|0)):new Y(0,n.r_1<<r-32)}(function(n,t){Bn();var r=63&t;return 0===r?n:r<32?new Y(n.r_1>>>r|n.s_1<<32-r,n.s_1>>r):new Y(n.s_1>>r-32,n.s_1>=0?0:-1)}(n,1).w(t),1);return kn(r,pn())?Mn(t)?dn():gn():$n(r,bn(n,xn(t,r)).w(t))}if(kn(t,wn()))return pn();if(Mn(n))return Mn(t)?Tn(n).w(Tn(t)):Tn(Tn(n).w(t));if(Mn(t))return Tn(n.w(Tn(t)));for(var i=pn(),e=n;Ln(e,t);){for(var u=An(e)/An(t),o=Math.max(1,Math.floor(u)),a=Math.ceil(Math.log(o)/Math.LN2),f=a<=48?1:Math.pow(2,a-48),c=qn(o),l=xn(c,t);Mn(l)||Cn(l,e);)l=xn(c=qn(o-=f),t);On(c)&&(c=dn()),i=$n(i,c),e=bn(e,l)}return i}function An(n){return Bn(),4294967296*n.s_1+function(n){return Bn(),n.r_1>=0?n.r_1:4294967296+n.r_1}(n)}function En(n,t){if(Bn(),t<2||36<t)throw vt("radix out of range: "+t);if(On(n))return"0";if(Mn(n)){if(kn(n,wn())){var r=Sn(t),i=n.w(r),e=bn(xn(i,r),n).z();return En(i,t)+e.toString(t)}return"-"+En(Tn(n),t)}for(var u=2===t?31:t<=10?9:t<=21?7:t<=35?6:5,o=qn(Math.pow(t,u)),a=n,f="";;){var c=a.w(o),l=bn(a,xn(c,o)).z().toString(t);if(On(a=c))return l+f;for(;l.length<u;)l="0"+l;f=l+f}}function kn(n,t){return Bn(),n.s_1===t.s_1&&n.r_1===t.r_1}function Sn(n){return Bn(),new Y(n,n<0?-1:0)}function Mn(n){return Bn(),n.s_1<0}function On(n){return Bn(),0===n.s_1&&0===n.r_1}function jn(n){return Bn(),!(1&~n.r_1)}function Tn(n){return Bn(),n.x()}function zn(n,t){return Bn(),yn(n,t)<0}function qn(n){if(Bn(),(t=n)!=t)return pn();var t;if(n<=-0x8000000000000000)return wn();if(n+1>=0x8000000000000000)return Bn(),u;if(n<0)return Tn(qn(-n));var r=4294967296;return new Y(n%r|0,n/r|0)}function Cn(n,t){return Bn(),yn(n,t)>0}function Ln(n,t){return Bn(),yn(n,t)>=0}function Bn(){f||(f=!0,r=Sn(0),i=Sn(1),e=Sn(-1),u=new Y(-1,2147483647),o=new Y(0,-2147483648),a=Sn(16777216))}function Nn(n,t,r,i,e,u,o,a,f){null!=e&&(t.prototype=Object.create(e.prototype),t.prototype.constructor=t);var s=function(n,t,r,i,e,u){return{kind:n,simpleName:t,associatedObjectKey:i,associatedObjects:e,suspendArity:u,$kClass$:l,defaultConstructor:r,iid:"interface"===n?(c===l&&(c=0),c=c+1|0):l}}(n,r,i,a,f,o);t.$metadata$=s,null!=u&&((ln(s.iid,l)?t.prototype:t).$imask$=Z(u))}function Pn(n,t,r,i,e,u,o,a){Nn("class",n,t,r,i,e,u,o,a)}function Rn(n,t,r,i,e,u,o,a){Nn("object",n,t,r,i,e,u,o,a)}function Fn(n,t,r,i,e,u,o,a){Nn("interface",n,t,r,i,e,u,o,a)}function Hn(n,t,r,i){Rn(n,"Companion",l,t,r,i,l,l)}function Un(n){return n<<24>>24}function Dn(n){return t=function(n){return n<<16>>16}(function(n){return n instanceof Y?n.z():function(n){return n>2147483647?2147483647:n<-2147483648?-2147483648:0|n}(n)}(n)),65535&t;var t}function Vn(n){return Sn(n)}function Jn(n,t){return function(n,t){var r=n.$imask$;return null!=r&&function(n,t){var r=t>>5;if(r>n.length)return!1;var i=1<<(31&t);return!!(n[r]&i)}(r,t)}(n,t.$metadata$.iid)}function Kn(n){var t=n.constructor,r=null==t?null:t.$metadata$,i=null==r?null:r.errorInfo;if(null!=i)return i;var e,u=0;if(Wn(n,"message")&&(u|=1),Wn(n,"cause")&&(u|=2),3!==u){var o=(e=n,Object.getPrototypeOf(e));o!=Error.prototype&&(u|=Kn(o))}return null!=r&&(r.errorInfo=u),u}function Wn(n,t){return n.hasOwnProperty(t)}function Xn(n,t,r,i){r=r===l?0:r,i=i===l?n.length:i,$.d1(r,i,n.length),n.fill(t,r,i)}function Gn(){s=this,this.e1_1=new Int32Array([48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296])}function Qn(){return null==s&&new Gn,s}function Yn(){}function Zn(){}function nt(n){return function(n){if(n.h())return[];for(var t=n.g(),r=function(n,t){var r=0,i=n.length-1|0;if(r<=i)do{var e=r;r=r+1|0,n[e]=t}while(e!==i);return n}(Array(t),null),i=n.d(),e=0;i.e();){var u=e;e=u+1|0,r[u]=i.f()}return r}(n)}function tt(){Gt.call(this)}function rt(n){this.h1_1=n,this.f1_1=0,this.g1_1=-1}function it(){tt.call(this),this.i1_1=0}function et(){v=this;var n=function(n,t){var r=[];if(ut.call(t,r),!(n>=0))throw pt(cn("Negative initial capacity: "+n));return t}(0,fn(hn(ut)));n.m1_1=!0,this.n1_1=n}function ut(n){null==v&&new et,it.call(this),this.l1_1=n,this.m1_1=!1}function ot(){}function at(n){ot.call(this),this.t1_1=n}function ft(){ct.call(this)}function ct(){ot.call(this),this.v1_1=""}function lt(){if(!p){p=!0;var n="undefined"!=typeof process&&process.versions&&!!process.versions.node;_=n?new at(process.stdout):new ft}}function st(n){return vn(n),_t.call(n),n}function ht(n,t){return vn(t,n),_t.call(t),t}function vt(n){var t=ht(n,fn(hn(_t)));return sn(t,vt),t}function _t(){sn(this,_t)}function pt(n){var t=function(n,t){return yt(n,t),dt.call(t),t}(n,fn(hn(dt)));return sn(t,pt),t}function dt(){sn(this,dt)}function gt(n){var t=function(n,t){return yt(n,t),wt.call(t),t}(n,fn(hn(wt)));return sn(t,gt),t}function wt(){sn(this,wt)}function mt(n){return st(n),$t.call(n),n}function yt(n,t){return ht(n,t),$t.call(t),t}function $t(){sn(this,$t)}function bt(){var n,t=(mt(n=fn(hn(xt))),xt.call(n),n);return sn(t,bt),t}function xt(){sn(this,xt)}function It(n){var t=function(n,t){return yt(n,t),At.call(t),t}(n,fn(hn(At)));return sn(t,It),t}function At(){sn(this,At)}function Et(){var n,t=(mt(n=fn(hn(kt))),kt.call(n),n);return sn(t,Et),t}function kt(){sn(this,kt)}function St(){return d||(d=!0,Math.pow(2,-26),Math.pow(2,-53)),n=Math.random()*Math.pow(2,32)|0,function(n,t,r){return yr.call(r,n,t,0,0,~n,n<<10^t>>>4),r}(n,n>>31,fn(hn(yr)));var n}function Mt(n){ht(n,this),sn(this,Mt)}function Ot(n){return jt(t=fn(hn(zt))),t;var t}function jt(n){return zt.call(n,""),n}function Tt(){return jt(fn(hn(zt)))}function zt(n){this.z1_1=n}function qt(n){var t=V(n).toUpperCase();return t.length>1?n:tn(t,0)}function Ct(n){if(!(2<=n&&n<=36))throw pt("radix "+n+" was not in valid range 2..36");return n}function Lt(n,t){var r,i,e,u=U(n,48)>=0&&U(n,57)<=0?D(n,48):U(n,65)>=0&&U(n,90)<=0?D(n,65)+10|0:U(n,97)>=0&&U(n,122)<=0?D(n,97)+10|0:U(n,128)<0?-1:U(n,65313)>=0&&U(n,65338)<=0?D(n,65313)+10|0:U(n,65345)>=0&&U(n,65370)<=0?D(n,65345)+10|0:(r=n,i=function(n,t){for(var r=0,i=n.length-1|0,e=-1,u=0;r<=i;)if(t>(u=n[e=(r+i|0)/2|0]))r=e+1|0;else{if(t===u)return e;i=e-1|0}return e-(t<u?1:0)|0}(Qn().e1_1,r),(e=r-Qn().e1_1[i]|0)<10?e:-1);return u>=t?-1:u}function Bt(n,t){return n.toString(Ct(t))}function Nt(){g=this,this.b2_1=new RegExp("[\\\\^$*+?.()|[\\]{}]","g"),this.c2_1=new RegExp("[\\\\$]","g"),this.d2_1=new RegExp("\\$","g")}function Pt(){return null==g&&new Nt,g}function Rt(n){this.g2_1=n}function Ft(n,t){return Ht(),function(n,t,r){if(r=r!==l&&r,Ht(),r){var i=n.length,e=t.length,u=Math.min(i,e);if(0===u)return i-e|0;var o=0;if(o<u)do{var a=o;o=o+1|0;var f=tn(n,a),c=tn(t,a);if(f!==c&&(f=qt(f))!==(c=qt(c))&&(f=tn(V(f).toLowerCase(),0))!==(c=tn(V(c).toLowerCase(),0)))return U(f,c)}while(o<u);return i-e|0}return un(n,t)}(n,t,!0)}function Ht(){w||(w=!0,new Rt(Ft))}function Ut(){return Xt(),m}function Dt(n,t,r,i,e){if(Xt(),!(55296<=t&&t<=56319)||r>=i)return Wt(0,r,e);var u=tn(n,r);return 56320<=u&&u<=57343?65536+((1023&t)<<10)|1023&u:Wt(0,r,e)}function Vt(n,t,r,i,e){if(Xt(),!(30&t)||r>=i)return Wt(0,r,e);var u=n[r];return 128!=(192&u)?Wt(0,r,e):t<<6^u^3968}function Jt(n,t,r,i,e){if(Xt(),r>=i)return Wt(0,r,e);var u=n[r];if(15&t){if(13==(15&t)){if(128!=(224&u))return Wt(0,r,e)}else if(128!=(192&u))return Wt(0,r,e)}else if(160!=(224&u))return Wt(0,r,e);if((r+1|0)===i)return Wt(1,r,e);var o=n[r+1|0];return 128!=(192&o)?Wt(1,r,e):t<<12^u<<6^o^-123008}function Kt(n,t,r,i,e){if(Xt(),r>=i)return Wt(0,r,e);var u=n[r];if(15&t){if(4==(15&t)){if(128!=(240&u))return Wt(0,r,e)}else if((15&t)>4)return Wt(0,r,e)}else if((240&u)<=128)return Wt(0,r,e);if(128!=(192&u))return Wt(0,r,e);if((r+1|0)===i)return Wt(1,r,e);var o=n[r+1|0];if(128!=(192&o))return Wt(1,r,e);if((r+2|0)===i)return Wt(2,r,e);var a=n[r+2|0];return 128!=(192&a)?Wt(2,r,e):t<<18^u<<12^o<<6^a^3678080}function Wt(n,t,r){if(Xt(),r)throw new Mt("Malformed sequence starting at "+(t-1|0));return 0|-n}function Xt(){y||(y=!0,m=new Int8Array([-17,-65,-67]))}function Gt(){}function Qt(){this.c1_1=2147483639}function Yt(){b=this,this.j2_1=new Y(-1478467534,-1720727600)}function Zt(){}function nr(){return _r(),I}function tr(){return _r(),A}function rr(){return _r(),E}function ir(){if(j)return h;j=!0,S=new er("PRESENT",0),M=new er("ABSENT",1),O=new er("PRESENT_OPTIONAL",2),new er("ABSENT_OPTIONAL",3)}function er(n,t){X.call(this,n,t)}function ur(n){return n.m2_1.equals(hr())||n.m2_1.equals((ir(),O))}function or(n,t,r,i,e,u){var o=n.k2_1?(_r(),k):tr(),a=0,f=-8,c=e,l=i,s=!1;n:for(;c<u;){if(-8===f&&(c+3|0)<u){var h=c,v=c=h+1|0,_=c=v+1|0,p=c=_+1|0;c=p+1|0;var d=o[255&t[h]]<<18|o[255&t[v]]<<12|o[255&t[_]]<<6|o[255&t[p]];if(d>=0){var g=l;l=g+1|0,r[g]=Un(d>>16);var w=l;l=w+1|0,r[w]=Un(d>>8);var m=l;l=m+1|0,r[m]=Un(d);continue n}c=c-4|0}var y=255&t[c],$=o[y];if($<0){if(-2===$){s=!0,c=ar(n,t,c,u,f);break n}if(n.l2_1){c=c+1|0;continue n}throw pt("Invalid symbol '"+V(Dn(y))+"'("+Bt(y,8)+") at index "+c)}if(c=c+1|0,a=a<<6|$,(f=f+6|0)>=0){var b=l;l=b+1|0,r[b]=Un(a>>>f|0),a&=(1<<f)-1,f=f-8|0}}if(-2===f)throw pt("The last unit of input does not have enough bits");if(-8!==f&&!s&&n.m2_1.equals(hr()))throw pt("The padding option is set to PRESENT, but the input is not properly padded");if(0!==a)throw pt("The pad bits must be zeros");if((c=cr(n,t,c,u))<u){var x=255&t[c];throw pt("Symbol '"+V(Dn(x))+"'("+Bt(x,8)+") at index "+(c-1|0)+" is prohibited after the pad character")}return l-i|0}function ar(n,t,r,i,e){var u;switch(e){case-8:throw pt("Redundant pad character at index "+r);case-2:u=r+1|0;break;case-4:fr(n,r);var o=cr(n,t,r+1|0,i);if(o===i||61!==t[o])throw pt("Missing one pad character at index "+o);u=o+1|0;break;case-6:fr(n,r),u=r+1|0;break;default:throw gt(cn("Unreachable"))}return u}function fr(n,t){if(n.m2_1.equals((ir(),M)))throw pt("The padding option is set to ABSENT, but the input has a pad character at index "+t)}function cr(n,t,r,i){if(!n.l2_1)return r;for(var e=r;e<i;){var u=255&t[e];if(-1!==tr()[u])return e;e=e+1|0}return e}function lr(){T=this,vr.call(this,!1,!1,hr()),this.q2_1=8,this.r2_1=6,this.s2_1=3,this.t2_1=4,this.u2_1=61,this.v2_1=76,this.w2_1=19;var n=Un(13);this.x2_1=new Int8Array([n,Un(10)]),this.y2_1=new vr(!0,!1,hr()),this.z2_1=new vr(!1,!0,hr())}function sr(){return null==T&&new lr,T}function hr(){return ir(),S}function vr(n,t,r){if(sr(),this.k2_1=n,this.l2_1=t,this.m2_1=r,this.k2_1&&this.l2_1)throw pt(cn("Failed requirement."))}function _r(){if(!z){z=!0,I=new Int8Array([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,43,47]);var n=new Int32Array(256);Xn(n,-1),n[61]=-2;for(var t=0,r=nr(),i=0,e=r.length;i<e;){var u=r[i];i=i+1|0;var o=t;t=o+1|0,n[u]=o}A=n,E=new Int8Array([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,45,95]);var a=new Int32Array(256);Xn(a,-1),a[61]=-2;for(var f=0,c=rr(),l=0,s=c.length;l<s;){var h=c[l];l=l+1|0;var v=f;f=v+1|0,a[h]=v}k=a}}function pr(){q=this,gr.call(this),this.k3_1=St()}function dr(){return null==q&&new pr,q}function gr(){dr()}function wr(n,t){if(!(t>n))throw pt(cn(function(n,t){return"Random range is empty: ["+cn(n)+", "+cn(t)+")."}(n,t)))}function mr(){C=this,this.p3_1=new Y(0,0)}function yr(n,t,r,i,e,u){if(null==C&&new mr,gr.call(this),this.q3_1=n,this.r3_1=t,this.s3_1=r,this.t3_1=i,this.u3_1=e,this.v3_1=u,!(this.q3_1|this.r3_1|this.s3_1|this.t3_1|this.u3_1))throw pt(cn("Initial state must have at least one non-zero element."));var o=0;if(o<64)do{o=o+1|0,this.m3()}while(o<64)}function $r(n,t,r){var i;null!=r?n.c(r(t)):null==t||("string"==typeof(i=t)||Jn(i,P))?n.c(t):t instanceof J?n.a2(t.w3_1):n.c(cn(t))}return Fn(P,"CharSequence"),Pn(R,"Number"),Pn(J,"Char"),Fn(K,"List"),Hn(W),Pn(X,"Enum"),Hn(Q),Pn(Y,"Long",l,R),Fn(nn,"FunctionAdapter"),Rn(Gn,"Digit"),Fn(Yn,"Comparator"),Rn(Zn,"Unit"),Pn(Gt,"AbstractCollection"),Pn(tt,"AbstractMutableCollection",l,Gt),Pn(rt,"IteratorImpl"),Pn(it,"AbstractMutableList",l,tt,[tt,K]),Hn(et),Pn(ut,"ArrayList",(function(){return n=fn(hn(ut)),ut.call(n,[]),n;var n}),it,[it,K]),Pn(ot,"BaseOutput"),Pn(at,"NodeJsOutput",l,ot),Pn(ct,"BufferedOutput",ct,ot),Pn(ft,"BufferedOutputToConsoleLog",ft,ct),Pn(_t,"Exception",(function n(){var t=st(fn(hn(_t)));return sn(t,n),t}),Error),Pn($t,"RuntimeException",(function n(){var t=mt(fn(hn($t)));return sn(t,n),t}),_t),Pn(dt,"IllegalArgumentException",(function n(){var t,r=(mt(t=fn(hn(dt))),dt.call(t),t);return sn(r,n),r}),$t),Pn(wt,"IllegalStateException",(function n(){var t,r=(mt(t=fn(hn(wt))),wt.call(t),t);return sn(r,n),r}),$t),Pn(xt,"NoSuchElementException",bt,$t),Pn(At,"IndexOutOfBoundsException",(function n(){var t,r=(mt(t=fn(hn(At))),At.call(t),t);return sn(r,n),r}),$t),Pn(kt,"ClassCastException",Et,$t),Pn(Mt,"CharacterCodingException",(function n(){var t,r=(t=fn(hn(Mt)),Mt.call(t,null),t);return sn(r,n),r}),_t),Pn(zt,"StringBuilder",Tt,l,[P]),Hn(Nt),Pn(Rt,"sam$kotlin_Comparator$0",l,l,[Yn,nn]),Hn(Qt),Rn(Yt,"EmptyList",l,l,[K]),Rn(Zt,"EmptyIterator"),Pn(er,"PaddingOption",l,X),Pn(vr,"Base64"),Rn(lr,"Default",l,vr),Pn(gr,"Random"),Rn(pr,"Default",l,gr),Hn(mr),Pn(yr,"XorWowRandom",l,gr),hn(X).l=function(n){return un(this.k_1,n.k_1)},hn(X).m=function(n){return this.l(n instanceof X?n:_n())},hn(X).equals=function(n){return this===n},hn(X).toString=function(){return this.j_1},hn(Y).t=function(n){return yn(this,n)},hn(Y).m=function(n){return this.t(n instanceof Y?n:_n())},hn(Y).u=function(n){return $n(this,n)},hn(Y).v=function(n){return xn(this,n)},hn(Y).w=function(n){return In(this,n)},hn(Y).x=function(){return this.y().u(new Y(1,0))},hn(Y).y=function(){return new Y(~this.r_1,~this.s_1)},hn(Y).z=function(){return this.r_1},hn(Y).a1=function(){return An(this)},hn(Y).toString=function(){return En(this,10)},hn(Y).equals=function(n){return n instanceof Y&&kn(this,n)},hn(Y).valueOf=function(){return this.a1()},hn(Zn).toString=function(){return"kotlin.Unit"},hn(tt).toJSON=function(){return this.toArray()},hn(rt).e=function(){return this.f1_1<this.h1_1.g()},hn(rt).f=function(){if(!this.e())throw bt();var n=this.f1_1;return this.f1_1=n+1|0,this.g1_1=n,this.h1_1.i(this.g1_1)},hn(it).d=function(){return new rt(this)},hn(it).equals=function(n){return n===this||!(null==n||!Jn(n,K))&&$.j1(this,n)},hn(ut).g=function(){return this.l1_1.length},hn(ut).i=function(n){var t=this.l1_1[function(n,t){return $.o1(t,n.g()),t}(this,n)];return null==t||null!=t?t:_n()},hn(ut).toString=function(){return F(this.l1_1,", ","[","]",l,l,en)},hn(ut).p1=function(){return[].slice.call(this.l1_1)},hn(ut).toArray=function(){return this.p1()},hn(ot).q1=function(){this.r1("\n")},hn(ot).s1=function(n){this.r1(n),this.q1()},hn(at).r1=function(n){var t=null==n?null:cn(n),r=null==t?"null":t;this.t1_1.write(r)},hn(ft).r1=function(n){var t=null==n?null:cn(n),r=null==t?"null":t,i=r.lastIndexOf("\n",0);if(i>=0){var e=this.v1_1;this.v1_1=e+r.substring(0,i),this.w1();var u=i+1|0;r=r.substring(u)}this.v1_1=this.v1_1+r},hn(ft).w1=function(){console.log(this.v1_1),this.v1_1=""},hn(ct).r1=function(n){var t=this.v1_1,r=null==n?null:cn(n);this.v1_1=t+(null==r?"null":r)},hn(zt).a=function(){return this.z1_1.length},hn(zt).b=function(n){var t,r=this.z1_1;if(!(0<=n&&n<=(0|(t=r,(rn(t)?t.length:t.a())-1))))throw It("index: "+n+", length: "+this.a()+"}");return tn(r,n)},hn(zt).a2=function(n){return this.z1_1=this.z1_1+V(n),this},hn(zt).c=function(n){return this.z1_1=this.z1_1+G(n),this},hn(zt).toString=function(){return this.z1_1},hn(Nt).e2=function(n){var t=this.b2_1;return n.replace(t,"\\$&")},hn(Nt).f2=function(n){var t=this.d2_1;return n.replace(t,"$$$$")},hn(Rt).h2=function(n,t){return this.g2_1(n,t)},hn(Rt).compare=function(n,t){return this.h2(n,t)},hn(Rt).b1=function(){return this.g2_1},hn(Rt).equals=function(n){return!(null==n||!Jn(n,Yn))&&!(null==n||!Jn(n,nn))&&ln(this.b1(),n.b1())},hn(Gt).h=function(){return 0===this.g()},hn(Gt).toString=function(){return H(this,", ","[","]",l,l,(n=this,function(t){return t===n?"(this Collection)":G(t)}));var n},hn(Gt).toArray=function(){return nt(this)},hn(Qt).o1=function(n,t){if(n<0||n>=t)throw It("index: "+n+", size: "+t)},hn(Qt).d1=function(n,t,r){if(n<0||t>r)throw It("fromIndex: "+n+", toIndex: "+t+", size: "+r);if(n>t)throw pt("fromIndex: "+n+" > toIndex: "+t)},hn(Qt).i2=function(n,t,r){if(n<0||t>r)throw It("startIndex: "+n+", endIndex: "+t+", size: "+r);if(n>t)throw pt("startIndex: "+n+" > endIndex: "+t)},hn(Qt).j1=function(n,t){if(n.g()!==t.g())return!1;for(var r=t.d(),i=n.d();i.e();)if(!ln(i.f(),r.f()))return!1;return!0},hn(Yt).equals=function(n){return!(null==n||!Jn(n,K))&&n.h()},hn(Yt).toString=function(){return"[]"},hn(Yt).g=function(){return 0},hn(Yt).h=function(){return!0},hn(Yt).i=function(n){throw It("Empty list doesn't contain element at index "+n+".")},hn(Yt).d=function(){return x},hn(Zt).e=function(){return!1},hn(Zt).f=function(){throw bt()},hn(vr).a3=function(n,t,r){var i=this.e3(n,t,r);return this.i3(i)},hn(vr).b3=function(n,t,r,i){return t=t===l?0:t,r=r===l?n.length:r,i===l?this.a3(n,t,r):i.a3.call(this,n,t,r)},hn(vr).c3=function(n,t,r){this.j3(n.length,t,r);var i=this.h3(n,t,r),e=new Int8Array(i);if(or(this,n,e,0,t,r)!==e.length)throw gt("Check failed.");return e},hn(vr).d3=function(n,t,r,i){return t=t===l?0:t,r=r===l?n.length:r,i===l?this.c3(n,t,r):i.c3.call(this,n,t,r)},hn(vr).e3=function(n,t,r){this.j3(n.length,t,r);var i=this.g3(r-t|0),e=new Int8Array(i);return this.f3(n,e,0,t,r),e},hn(vr).f3=function(n,t,r,i,e){this.j3(n.length,i,e),function(n,t,r,i){if(r<0||r>t)throw It("destination offset: "+r+", destination size: "+t);var e=r+i|0;if(e<0||e>t)throw It("The destination array does not have enough capacity, destination offset: "+r+", destination size: "+t+", capacity needed: "+i)}(0,t.length,r,this.g3(e-i|0));for(var u=this.k2_1?rr():nr(),o=i,a=r,f=this.l2_1?19:2147483647;(o+2|0)<e;){var c=(e-o|0)/3|0,l=Math.min(c,f),s=0;if(s<l)do{s=s+1|0;var h=o,v=o=h+1|0,_=o=v+1|0;o=_+1|0;var p=(255&n[h])<<16|(255&n[v])<<8|255&n[_],d=a;a=d+1|0,t[d]=u[p>>>18|0];var g=a;a=g+1|0,t[g]=u[p>>>12&63];var w=a;a=w+1|0,t[w]=u[p>>>6&63];var m=a;a=m+1|0,t[m]=u[63&p]}while(s<l);if(l===f&&o!==e){var y=a;a=y+1|0,t[y]=sr().x2_1[0];var $=a;a=$+1|0,t[$]=sr().x2_1[1]}}var b=e-o|0;if(1===b){var x=o;o=x+1|0;var I=(255&n[x])<<4,A=a;a=A+1|0,t[A]=u[I>>>6|0];var E=a;if(a=E+1|0,t[E]=u[63&I],ur(this)){var k=a;a=k+1|0,t[k]=61;var S=a;a=S+1|0,t[S]=61}}else if(2===b){var M=o,O=o=M+1|0;o=O+1|0;var j=(255&n[M])<<10|(255&n[O])<<2,T=a;a=T+1|0,t[T]=u[j>>>12|0];var z=a;a=z+1|0,t[z]=u[j>>>6&63];var q=a;if(a=q+1|0,t[q]=u[63&j],ur(this)){var C=a;a=C+1|0,t[C]=61}}if(o!==e)throw gt("Check failed.");return a-r|0},hn(vr).g3=function(n){var t=n%3|0,r=L(n/3|0,4);if(0!==t&&(r=r+(ur(this)?4:t+1|0)|0),this.l2_1&&(r=r+L((r-1|0)/76|0,2)|0),r<0)throw pt("Input is too big");return r},hn(vr).h3=function(n,t,r){var i=r-t|0;if(0===i)return 0;if(1===i)throw pt("Input should have at least 2 symbols for Base64 decoding, startIndex: "+t+", endIndex: "+r);if(this.l2_1){var e=t;if(e<r)n:do{var u=e;e=e+1|0;var o=255&n[u],a=tr()[o];if(a<0){if(-2===a){i=i-(r-u|0)|0;break n}i=i-1|0}}while(e<r)}else 61===n[r-1|0]&&(i=i-1|0,61===n[r-2|0]&&(i=i-1|0));return Vn(i).v(Vn(6)).w(Vn(8)).z()},hn(vr).i3=function(n){for(var t=Ot(n.length),r=0,i=n.length;r<i;){var e=n[r];r=r+1|0,t.a2(Dn(e))}return t.toString()},hn(vr).j3=function(n,t,r){$.i2(t,r,n)},hn(pr).l3=function(n){return this.k3_1.l3(n)},hn(pr).m3=function(){return this.k3_1.m3()},hn(pr).n3=function(n){return this.k3_1.n3(n)},hn(pr).o3=function(n,t){return this.k3_1.o3(n,t)},hn(gr).m3=function(){return this.l3(32)},hn(gr).n3=function(n){return this.o3(0,n)},hn(gr).o3=function(n,t){wr(n,t);var r=t-n|0;if(r>0||-2147483648===r){var i;if((r&-r)===r){var e=31-N(r)|0;i=this.l3(e)}else{var u;do{var o=this.m3()>>>1|0;u=o%r|0}while(((o-u|0)+(r-1|0)|0)<0);i=u}return n+i|0}for(;;){var a=this.m3();if(n<=a&&a<t)return a}},hn(yr).m3=function(){var n=this.q3_1;n^=n>>>2,this.q3_1=this.r3_1,this.r3_1=this.s3_1,this.s3_1=this.t3_1;var t=this.u3_1;return this.t3_1=t,n=n^n<<1^t^t<<4,this.u3_1=n,this.v3_1=this.v3_1+362437|0,n+this.v3_1|0},hn(yr).l3=function(n){return function(n,t){return n>>>(32-t|0)&-t>>31}(this.m3(),n)},new W,h=new Zn,$=new Qt,x=new Zt,n.$_$=n.$_$||{},n.$_$.a=l,n.$_$.b=sr,n.$_$.c=dr,n.$_$.d=h,n.$_$.e=function(n){return n.length>0?new ut(n):(null==b&&new Yt,b)},n.$_$.f=function(n){lt(),(lt(),_).s1(n)},n.$_$.g=function(n){return Ht(),function(n,t,r,i){if(Xt(),!(t>=0&&r<=n.length&&t<=r))throw pt(cn("Failed requirement."));for(var e=t,u=Tt();e<r;){var o=e;e=o+1|0;var a=n[o];if(a>=0)u.a2(Dn(a));else if(a>>5==-2){var f=Vt(n,a,e,r,i);f<=0?(u.a2(65533),e=e+(0|-f)|0):(u.a2(Dn(f)),e=e+1|0)}else if(a>>4==-2){var c=Jt(n,a,e,r,i);c<=0?(u.a2(65533),e=e+(0|-c)|0):(u.a2(Dn(c)),e=e+2|0)}else if(a>>3==-2){var l=Kt(n,a,e,r,i);if(l<=0)u.a2(65533),e=e+(0|-l)|0;else{var s=l-65536>>10|55296,h=1023&l|56320;u.a2(Dn(s)),u.a2(Dn(h)),e=e+3|0}}else Wt(0,e,i),u.a2(65533)}return u.toString()}(n,0,n.length,!1)},n.$_$.h=function(n){return Ht(),function(n,t,r,i){if(Xt(),!(t>=0&&r<=n.length&&t<=r))throw pt(cn("Failed requirement."));for(var e=new Int8Array(L(r-t|0,3)),u=0,o=t;o<r;){var a=o;o=a+1|0;var f=tn(n,a);if(f<128){var c=u;u=c+1|0,e[c]=Un(f)}else if(f<2048){var l=u;u=l+1|0,e[l]=Un(f>>6|192);var s=u;u=s+1|0,e[s]=Un(63&f|128)}else if(f<55296||f>=57344){var h=u;u=h+1|0,e[h]=Un(f>>12|224);var v=u;u=v+1|0,e[v]=Un(f>>6&63|128);var _=u;u=_+1|0,e[_]=Un(63&f|128)}else{var p=Dt(n,f,o,r,i);if(p<=0){var d=u;u=d+1|0,e[d]=Ut()[0];var g=u;u=g+1|0,e[g]=Ut()[1];var w=u;u=w+1|0,e[w]=Ut()[2]}else{var m=u;u=m+1|0,e[m]=Un(p>>18|240);var y=u;u=y+1|0,e[y]=Un(p>>12&63|128);var $=u;u=$+1|0,e[$]=Un(p>>6&63|128);var b=u;u=b+1|0,e[b]=Un(63&p|128),o=o+1|0}}}return e.length===u?e:function(n,t){if(!(t>=0))throw pt(cn("Invalid new array size: "+t+"."));return function(n,t){for(var r=n.length,i=t.length,e=0,u=t;e<r&&e<i;){var o=e,a=e;e=a+1|0,u[o]=n[a]}return t}(n,new Int8Array(t))}(e,u)}(n,0,n.length,!1)},n.$_$.i=function(n,t,r,i){i=i!==l&&i;var e=new RegExp(Pt().e2(t),i?"gui":"gu"),u=Pt().f2(r);return n.replace(e,u)},n.$_$.j=function(n){return function(n,t){Ct(t);var r,i,e,u=n.length;if(0===u)return null;var o=tn(n,0);if(U(o,48)<0){if(1===u)return null;if(r=1,45===o)i=!0,e=-2147483648;else{if(43!==o)return null;i=!1,e=-2147483647}}else r=0,i=!1,e=-2147483647;var a=-59652323,f=a,c=0,l=r;if(l<u)do{var s=l;l=l+1|0;var h=Lt(tn(n,s),t);if(h<0)return null;if(c<f){if(f!==a)return null;if(c<(f=e/t|0))return null}if((c=L(c,t))<(e+h|0))return null;c=c-h|0}while(l<u);return i?c:0|-c}(n,10)},n.$_$.k=_n,n})?r.apply(t,[t]):r)||(n.exports=i)},629:(n,t,r)=>{var i,e,u;e=[t,r(36)],void 0===(u="function"==typeof(i=function(n,t){"use strict";var r,i=t.$_$.d,e=t.$_$.k,u=t.$_$.f,o=t.$_$.a,a=t.$_$.e,f=t.$_$.c,c=t.$_$.i,l=t.$_$.j,s=t.$_$.b,h=t.$_$.h,v=t.$_$.g;function _(){localStorage.popcattino_version="1",function(){u("begin load encoded");var n=localStorage.popcattino_score;if(null==n)return r=0,i;var t,e=l(c((t=n,v(s().d3(h(t)))),"don'tcheathaiyah",""));if(null==e)return r=0,i;r=e}(),u("score is "+r),p(!1);var n,t,o=(document.getElementById("app")instanceof HTMLDivElement||e(),document.getElementById("image")),a=o instanceof HTMLImageElement?o:e(),f=document.getElementById("pop-sound"),_=f instanceof HTMLAudioElement?f:e(),d=document.body;if(null==d);else{d.addEventListener("mousedown",(n=a,t=_,function(e){return n.src="pop-open.png",t.currentTime=0,t.play(),r=r+1|0,p(),i}))}var w=document.body;null==w||w.addEventListener("mouseup",function(n){return function(t){return n.src="pop-close.png",i}}(a)),window.setInterval(g,2e3)}function p(n){n=n===o||n;var t=document.getElementById("score"),u=t instanceof HTMLHeadingElement?t:e();if(u.innerText=r.toString(),!n)return i;var c,l,s=a(["rot-ll","rot-l","rot-c","rot-r","rot-rr"]),h=s.i(f().n3(s.g()));u.classList.add("pop-out-enter-active","pop-out-enter",h),window.setTimeout((c=u,l=h,function(){return c.classList.remove("pop-out-enter-active","pop-out-enter",l),i}),80)}function d(){var n;localStorage.popcattino_score=(n=r+"don'tcheathaiyah",s().b3(h(n)))}function g(){return d(),i}return r=0,_(),n})?i.apply(t,e):i)||(n.exports=u)}},t={},function r(i){var e=t[i];if(void 0!==e)return e.exports;var u=t[i]={exports:{}};return n[i](u,u.exports,r),u.exports}(629);var n,t}));
//# sourceMappingURL=popcattino.js.map