(function(){var g,aa=aa||{},m=this;function n(a){return void 0!==a}
function p(a,b,c){a=a.split(".");c=c||m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&n(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||m,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function t(){}
function ca(a){a.getInstance=function(){return a.V?a.V:a.V=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ea(a){return"array"==da(a)}
function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function u(a){return"string"==typeof a}
function ga(a){return"number"==typeof a}
function ha(a){return"function"==da(a)}
function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ka(a){return a[la]||(a[la]=++ma)}
var la="closure_uid_"+(1E9*Math.random()>>>0),ma=0;function na(a,b,c){return a.call.apply(a.bind,arguments)}
function oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?na:oa;return v.apply(null,arguments)}
function qa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var w=Date.now||function(){return+new Date};
function x(a,b){function c(){}
c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}}
;var ra;var sa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ta(a){return decodeURIComponent(a.replace(/\+/g," "))}
var ua=/&/g,va=/</g,wa=/>/g,xa=/"/g,ya=/'/g,za=/\x00/g,Aa=/[\x00&<>"']/;function Ba(a){return-1!=a.indexOf("&")?"document"in m?Ca(a):Da(a):a}
function Ca(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=m.document.createElement("div");return a.replace(Ea,function(a,e){var f=b[a];if(f)return f;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(f=String.fromCharCode(h))}f||(c.innerHTML=a+" ",f=c.firstChild.nodeValue.slice(0,-1));return b[a]=f})}
function Da(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}
var Ea=/&([^;\s<&]+);?/g,Fa={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Ga={"'":"\\'"};
function Ha(a,b){for(var c=0,d=sa(String(a)).split("."),e=sa(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var k=d[h]||"",l=e[h]||"",q=RegExp("(\\d*)(\\D*)","g"),E=RegExp("(\\d*)(\\D*)","g");do{var ba=q.exec(k)||["","",""],pa=E.exec(l)||["","",""];if(0==ba[0].length&&0==pa[0].length)break;c=Ia(0==ba[1].length?0:parseInt(ba[1],10),0==pa[1].length?0:parseInt(pa[1],10))||Ia(0==ba[2].length,0==pa[2].length)||Ia(ba[2],pa[2])}while(0==c)}return c}
function Ia(a,b){return a<b?-1:a>b?1:0}
function Ja(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;function Ka(){}
;var La=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},y=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ma=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=u(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},z=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=u(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));
return e},Na=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1},Oa=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function Pa(a,b,c){b=Qa(a,b,c);return 0>b?null:u(a)?a.charAt(b):a[b]}
function Qa(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function A(a,b){return 0<=La(a,b)}
function Ra(){var a=Sa;if(!ea(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0}
function Ta(a,b){A(a,b)||a.push(b)}
function Ua(a,b){var c=La(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Va(a,b){var c=Qa(a,b,void 0);0<=c&&Array.prototype.splice.call(a,c,1)}
function Wa(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Xa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ya(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(fa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Za(a,b,c,d){return Array.prototype.splice.apply(a,$a(arguments,1))}
function $a(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function ab(a,b,c){if(!fa(a)||!fa(b)||a.length!=b.length)return!1;var d=a.length;c=c||bb;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0}
function cb(a,b){return a>b?1:a<b?-1:0}
function bb(a,b){return a===b}
;function db(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function eb(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function fb(a){var b=0,c;for(c in a)b++;return b}
function gb(a,b){return ib(a,b)}
function jb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function kb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function lb(a){return null!==a&&"withCredentials"in a}
function ib(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function nb(a){var b=ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function pb(a){for(var b in a)return!1;return!0}
function qb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function rb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function sb(a){var b=da(a);if("object"==b||"array"==b){if(ha(a.clone))return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=sb(a[c]);return b}return a}
var tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<tb.length;f++)c=tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var vb;a:{var wb=m.navigator;if(wb){var xb=wb.userAgent;if(xb){vb=xb;break a}}vb=""}function B(a){return-1!=vb.indexOf(a)}
;function yb(){return B("Opera")||B("OPR")}
function zb(){return(B("Chrome")||B("CriOS"))&&!yb()&&!B("Edge")}
;function Ab(){this.f=""}
Ab.prototype.Sb=!0;Ab.prototype.Nb=function(){return this.f};
Ab.prototype.toString=function(){return"Const{"+this.f+"}"};
function Bb(a){var b=new Ab;b.f=a;return b}
;function Cb(){this.f="";this.h=Db}
Cb.prototype.Sb=!0;Cb.prototype.Nb=function(){return this.f};
function Eb(a){return a instanceof Cb&&a.constructor===Cb&&a.h===Db?a.f:"type_error:SafeUrl"}
var Fb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Gb(a){if(a instanceof Cb)return a;a=a.Sb?a.Nb():String(a);Fb.test(a)||(a="about:invalid#zClosurez");var b=new Cb;b.f=a;return b}
var Db={};function Hb(){this.f="";this.h=Ib;this.j=null}
Hb.prototype.Sb=!0;Hb.prototype.Nb=function(){return this.f};
function Jb(a){return a instanceof Hb&&a.constructor===Hb&&a.h===Ib?a.f:"type_error:SafeHtml"}
var Ib={};function Kb(a,b){var c=new Hb;c.f=a;c.j=b;return c}
Kb("<!DOCTYPE html>",0);Kb("",0);function Lb(a,b){var c;c=b instanceof Cb?b:Gb(b);a.href=Eb(c)}
;function Mb(a,b,c){a&&(a.dataset?a.dataset[Nb(b)]=c:a.setAttribute("data-"+b,c))}
function C(a,b){return a?a.dataset?a.dataset[Nb(b)]:a.getAttribute("data-"+b):null}
function Ob(a,b){a&&(a.dataset?delete a.dataset[Nb(b)]:a.removeAttribute("data-"+b))}
var Pb={};function Nb(a){return Pb[a]||(Pb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Qb(a){m.setTimeout(function(){throw a;},0)}
var Rb;
function Sb(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(n(c.next)){c=c.next;var a=c.kc;c.kc=null;a()}};
return function(a){d.next={kc:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function Tb(a,b,c){this.o=c;this.j=a;this.l=b;this.h=0;this.f=null}
Tb.prototype.get=function(){var a;0<this.h?(this.h--,a=this.f,this.f=a.next,a.next=null):a=this.j();return a};
Tb.prototype.put=function(a){this.l(a);this.h<this.o&&(this.h++,a.next=this.f,this.f=a)};function Ub(){this.h=this.f=null}
var Wb=new Tb(function(){return new Vb},function(a){a.reset()},100);
Ub.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.h=null),a.next=null);return a};
function Vb(){this.next=this.scope=this.f=null}
Vb.prototype.reset=function(){this.next=this.scope=this.f=null};function Xb(a){Yb||Zb();$b||(Yb(),$b=!0);var b=ac,c=Wb.get();c.f=a;c.scope=void 0;c.next=null;b.h?b.h.next=c:b.f=c;b.h=c}
var Yb;function Zb(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);Yb=function(){a.then(bc)}}else Yb=function(){var a=bc;
!ha(m.setImmediate)||m.Window&&m.Window.prototype&&!B("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Rb||(Rb=Sb()),Rb(a)):m.setImmediate(a)}}
var $b=!1,ac=new Ub;function bc(){for(var a=null;a=ac.remove();){try{a.f.call(a.scope)}catch(b){Qb(b)}Wb.put(a)}$b=!1}
;function D(){this.La=this.La;this.W=this.W}
D.prototype.La=!1;D.prototype.isDisposed=function(){return this.La};
D.prototype.dispose=function(){this.La||(this.La=!0,this.G())};
function cc(a,b){a.La?b.call(void 0):(a.W||(a.W=[]),a.W.push(n(void 0)?v(b,void 0):b))}
D.prototype.G=function(){if(this.W)for(;this.W.length;)this.W.shift()()};
function dc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function ec(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];fa(d)?ec.apply(null,d):dc(d)}}
;function F(a){D.call(this);this.o=1;this.h=[];this.j=0;this.f=[];this.ga={};this.l=Boolean(a)}
x(F,D);g=F.prototype;g.subscribe=function(a,b,c){var d=this.ga[a];d||(d=this.ga[a]=[]);var e=this.o;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.o=e+3;d.push(e);return e};
g.unsubscribe=function(a,b,c){if(a=this.ga[a]){var d=this.f;if(a=Pa(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.oa(a)}return!1};
g.oa=function(a){var b=this.f[a];if(b){var c=this.ga[b];0!=this.j?(this.h.push(a),this.f[a+1]=t):(c&&Ua(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
g.D=function(a,b){var c=this.ga[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.l)for(e=0;e<c.length;e++){var h=c[e];fc(this.f[h+1],this.f[h+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.f[h+1].apply(this.f[h+2],d)}finally{if(this.j--,0<this.h.length&&0==this.j)for(;c=this.h.pop();)this.oa(c)}}return 0!=e}return!1};
function fc(a,b,c){Xb(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.ga[a];b&&(y(b,this.oa,this),delete this.ga[a])}else this.f.length=0,this.ga={}};
g.Y=function(a){if(a){var b=this.ga[a];return b?b.length:0}a=0;for(b in this.ga)a+=this.Y(b);return a};
g.G=function(){F.I.G.call(this);this.clear();this.h.length=0};var gc=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};p("yt.config_",gc,void 0);p("yt.tokens_",window.yt&&window.yt.tokens_||{},void 0);var hc=window.yt&&window.yt.msgs_||r("window.ytcfg.msgs")||{};p("yt.msgs_",hc,void 0);function ic(a){jc(gc,arguments)}
function G(a,b){return a in gc?gc[a]:b}
function H(a,b){ha(a)&&(a=kc(a));return window.setTimeout(a,b)}
function lc(a,b){ha(a)&&(a=kc(a));window.setInterval(a,b)}
function I(a){window.clearTimeout(a)}
function kc(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw mc(b),b;}}:a}
function mc(a,b){var c=r("yt.logging.errors.log");c?c(a,b):(c=G("ERRORS",[]),c.push([a,b]),ic("ERRORS",c))}
function nc(){var a={},b="FLASH_UPGRADE"in hc?hc.FLASH_UPGRADE:'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>';if(b)for(var c in a)b=b.replace(new RegExp("\\$"+c,"gi"),function(){return a[c]});
return b}
function jc(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var oc="Microsoft Internet Explorer"==navigator.appName;var pc=r("yt.pubsub.instance_")||new F;F.prototype.subscribe=F.prototype.subscribe;F.prototype.unsubscribeByKey=F.prototype.oa;F.prototype.publish=F.prototype.D;F.prototype.clear=F.prototype.clear;p("yt.pubsub.instance_",pc,void 0);var qc=r("yt.pubsub.subscribedKeys_")||{};p("yt.pubsub.subscribedKeys_",qc,void 0);var rc=r("yt.pubsub.topicToKeys_")||{};p("yt.pubsub.topicToKeys_",rc,void 0);var sc=r("yt.pubsub.isSynchronous_")||{};p("yt.pubsub.isSynchronous_",sc,void 0);
var tc=r("yt.pubsub.skipSubId_")||null;p("yt.pubsub.skipSubId_",tc,void 0);function uc(a,b,c){var d=vc();if(d){var e=d.subscribe(a,function(){if(!tc||tc!=e){var d=arguments,h=function(){qc[e]&&b.apply(c||window,d)};
try{sc[a]?h():H(h,0)}catch(k){mc(k)}}},c);
qc[e]=!0;rc[a]||(rc[a]=[]);rc[a].push(e);return e}return 0}
function wc(a){var b=vc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),y(a,function(a){b.unsubscribeByKey(a);delete qc[a]}))}
function J(a,b){var c=vc();return c?c.publish.apply(c,arguments):!1}
function xc(a,b){sc[a]=!0;var c=vc();c&&c.publish.apply(c,arguments);sc[a]=!1}
function yc(a){rc[a]&&(a=rc[a],y(a,function(a){qc[a]&&delete qc[a]}),a.length=0)}
function zc(a){var b=vc();if(b)if(b.clear(a),a)yc(a);else for(var c in rc)yc(c)}
function vc(){return r("yt.pubsub.instance_")}
;function Ac(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Bc,""),c=c.replace(Cc,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Dc(a,b)}
function Dc(a,b){var c=Ec(a),d=document.getElementById(c),e=d&&C(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=uc(c,b),h=""+ka(b);Fc[h]=e}f||(d=Gc(a,c,function(){C(d,"loaded")||(Mb(d,"loaded","true"),J(c),H(qa(zc,c),0))}))}}
function Gc(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Hc(a,b){if(a&&b){var c=""+ka(b);(c=Fc[c])&&wc(c)}}
function Ec(a){var b=document.createElement("a");Lb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ja(a)}
var Bc=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Cc=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,Fc={};var Ic=null;function Jc(){var a=G("BG_I",null),b=G("BG_IU",null),c=G("BG_P",void 0);b?Ac(b,function(){Ic=new botguard.bg(c)}):a&&(eval(a),Ic=new botguard.bg(c))}
function Kc(){return null!=Ic}
function Lc(){return Ic?Ic.invoke():null}
;function Mc(a,b){return Kb(b,null)}
;var Nc="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Oc(){}
Oc.prototype.next=function(){throw Nc;};
Oc.prototype.ua=function(){return this};
function Pc(a){if(a instanceof Oc)return a;if("function"==typeof a.ua)return a.ua(!1);if(fa(a)){var b=0,c=new Oc;c.next=function(){for(;;){if(b>=a.length)throw Nc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Qc(a,b,c){if(fa(a))try{y(a,b,c)}catch(d){if(d!==Nc)throw d;}else{a=Pc(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Nc)throw d;}}}
function Rc(a){if(fa(a))return Xa(a);a=Pc(a);var b=[];Qc(a,function(a){b.push(a)});
return b}
;function Sc(a,b){this.h={};this.f=[];this.Ea=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)Tc(this,arguments[d],arguments[d+1])}else if(a){a instanceof Sc?(c=a.ra(),d=a.U()):(c=kb(a),d=jb(a));for(var e=0;e<c.length;e++)Tc(this,c[e],d[e])}}
g=Sc.prototype;g.Y=function(){return this.j};
g.U=function(){Uc(this);for(var a=[],b=0;b<this.f.length;b++)a.push(this.h[this.f[b]]);return a};
g.ra=function(){Uc(this);return this.f.concat()};
g.Za=function(a){for(var b=0;b<this.f.length;b++){var c=this.f[b];if(Vc(this.h,c)&&this.h[c]==a)return!0}return!1};
g.equals=function(a,b){if(this===a)return!0;if(this.j!=a.Y())return!1;var c=b||Wc;Uc(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Wc(a,b){return a===b}
g.isEmpty=function(){return 0==this.j};
g.clear=function(){this.h={};this.Ea=this.j=this.f.length=0};
g.remove=function(a){return Vc(this.h,a)?(delete this.h[a],this.j--,this.Ea++,this.f.length>2*this.j&&Uc(this),!0):!1};
function Uc(a){if(a.j!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Vc(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.j!=a.f.length){for(var e={},c=b=0;b<a.f.length;)d=a.f[b],Vc(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
g.get=function(a,b){return Vc(this.h,a)?this.h[a]:b};
function Tc(a,b,c){Vc(a.h,b)||(a.j++,a.f.push(b),a.Ea++);a.h[b]=c}
g.forEach=function(a,b){for(var c=this.ra(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.clone=function(){return new Sc(this)};
g.ua=function(a){Uc(this);var b=0,c=this.Ea,d=this,e=new Oc;e.next=function(){if(c!=d.Ea)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Nc;var e=d.f[b++];return a?e:d.h[e]};
return e};
function Vc(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Xc(a){return a.Y&&"function"==typeof a.Y?a.Y():fa(a)||u(a)?a.length:fb(a)}
function Yc(a){if(a.U&&"function"==typeof a.U)return a.U();if(u(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return jb(a)}
function Zc(a){if(a.ra&&"function"==typeof a.ra)return a.ra();if(!a.U||"function"!=typeof a.U){if(fa(a)||u(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return kb(a)}}
function $c(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(fa(a)||u(a))y(a,b,void 0);else for(var c=Zc(a),d=Yc(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}
function ad(a,b){if("function"==typeof a.every)return a.every(b,void 0);if(fa(a)||u(a))return Oa(a,b,void 0);for(var c=Zc(a),d=Yc(a),e=d.length,f=0;f<e;f++)if(!b.call(void 0,d[f],c&&c[f],a))return!1;return!0}
;function bd(a){this.f=new Sc;if(a){a=Yc(a);for(var b=a.length,c=0;c<b;c++){var d=a[c];Tc(this.f,cd(d),d)}}}
function cd(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+ka(a):b.substr(0,1)+a}
g=bd.prototype;g.Y=function(){return this.f.Y()};
g.removeAll=function(a){a=Yc(a);for(var b=a.length,c=0;c<b;c++)this.remove(a[c])};
g.remove=function(a){return this.f.remove(cd(a))};
g.clear=function(){this.f.clear()};
g.isEmpty=function(){return this.f.isEmpty()};
g.contains=function(a){a=cd(a);return Vc(this.f.h,a)};
g.U=function(){return this.f.U()};
g.clone=function(){return new bd(this)};
g.equals=function(a){return this.Y()==Xc(a)&&dd(this,a)};
function dd(a,b){var c=Xc(b);if(a.Y()>c)return!1;!(b instanceof bd)&&5<c&&(b=new bd(b));return ad(a,function(a){var c=b;return c.contains&&"function"==typeof c.contains?c.contains(a):c.Za&&"function"==typeof c.Za?c.Za(a):fa(c)||u(c)?A(c,a):ib(c,a)})}
g.ua=function(){return this.f.ua(!1)};function ed(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;var fd=yb(),K=B("Trident")||B("MSIE"),gd=B("Edge"),hd=B("Gecko")&&!(-1!=vb.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),id=-1!=vb.toLowerCase().indexOf("webkit")&&!B("Edge"),jd=B("Macintosh"),kd=B("Windows");function ld(){var a=vb;if(hd)return/rv\:([^\);]+)(\)|;)/.exec(a);if(gd)return/Edge\/([\d\.]+)/.exec(a);if(K)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(id)return/WebKit\/(\S+)/.exec(a)}
function md(){var a=m.document;return a?a.documentMode:void 0}
var nd=function(){if(fd&&m.opera){var a;var b=m.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=ld())&&(a=b?b[1]:"");return K&&(b=md(),b>parseFloat(a))?String(b):a}(),od={};
function pd(a){return od[a]||(od[a]=0<=Ha(nd,a))}
var qd=m.document,rd=qd&&K?md()||("CSS1Compat"==qd.compatMode?parseInt(nd,10):5):void 0;function sd(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function td(a){return eval("("+a+")")}
function L(a){return ud(new vd(void 0),a)}
function vd(a){this.f=a}
function ud(a,b){var c=[];wd(a,b,c);return c.join("")}
function wd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ea(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],wd(a,a.f?a.f.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),xd(d,c),c.push(":"),wd(a,a.f?a.f.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":xd(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var yd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},zd=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function xd(a,b){b.push('"',a.replace(zd,function(a){var b=yd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),yd[a]=b);return b}),'"')}
;var Ad=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Bd(a){return(a=a.match(Ad)[3]||null)?decodeURI(a):a}
function Cd(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null,h=null;0<=e?(f=c[d].substring(0,e),h=c[d].substring(e+1)):f=c[d];b(f,h?ta(h):"")}}
function Dd(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Ed(a,b,c){if(ea(b))for(var d=0;d<b.length;d++)Ed(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Fd(a,b,c){for(c=c||0;c<b.length;c+=2)Ed(b[c],b[c+1],a);return a}
function Gd(a,b){for(var c in b)Ed(c,b[c],a);return a}
function Hd(a){a=Gd([],a);a[0]="";return a.join("")}
function Id(a,b){return Dd(2==arguments.length?Fd([a],arguments[1],0):Fd([a],arguments,1))}
function Jd(a,b){return Dd(Gd([a],b))}
;function Kd(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=ta(e[0]||""),e=ta(e[1]||"");f in b?ea(b[f])?Ya(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Ld(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Kd(d[1]||""),e;for(e in b)d[e]=b[e];return Jd(a,d)+c}
function Md(a){a=Bd(a);a=null===a?null:a.split(".").reverse();return(null===a?!1:"com"==a[0]&&a[1].match(/^youtube(?:-nocookie)?$/)?!0:!1)||(null===a?!1:"google"==a[1]?!0:"google"==a[2]?"au"==a[0]&&"com"==a[1]?!0:"uk"==a[0]&&"co"==a[1]?!0:!1:!1)}
;var Nd=null;"undefined"!=typeof XMLHttpRequest?Nd=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Nd=function(){return new ActiveXObject("Microsoft.XMLHTTP")});function Od(a,b,c,d,e,f,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&kc(b)(l)}
var l=Nd&&Nd();if(!("open"in l))return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";l.open(c,a,!0);f&&(l.responseType=f);h&&(l.withCredentials=!0);f="POST"==c;if(e=Pd(a,e))for(var q in e)l.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(f=!1);f&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
function Pd(a,b){b=b||{};for(var c in Qd){var d=G(Qd[c]),e;if(e=d){e=a;var f=void 0;f=window.location.href;var h=e.match(Ad)[1]||null,k=Bd(e);h&&k?(e=e.match(Ad),f=f.match(Ad),e=e[3]==f[3]&&e[1]==f[1]&&e[4]==f[4]):e=k?Bd(f)==k&&(Number(f.match(Ad)[4]||null)||null)==(Number(e.match(Ad)[4]||null)||null):!0;e||(e=c,f=G("CORS_HEADER_WHITELIST")||{},e=(h=Bd(a))?(f=f[h])?A(f,e):!1:!0)}e&&(b[c]=d)}return b}
function Rd(a,b){var c=G("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.ef&&(!Bd(a)||b.withCredentials||Bd(a)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.R&&b.R[c])}
function Sd(a,b){var c=b.format||"JSON";b.ff&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=G("XSRF_FIELD_NAME",void 0),e=G("XSRF_TOKEN",void 0),f=b.ac;f&&(f[d]&&delete f[d],a=Ld(a,f||{}));var h=b.postBody||"",f=b.R;Rd(a,b)&&(f||(f={}),f[d]=e);f&&u(h)&&(d=Kd(h),ub(d,f),h=Hd(d));var k=!1,l,q=Od(a,function(a){if(!k){k=!0;l&&I(l);var d;a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:d=
!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=Td(c,a,b.df);if(d)a:{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.ca&&b.ca.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Wb&&b.Wb.call(f,a,e)}},b.method,h,b.headers,b.responseType,b.withCredentials);
b.xb&&0<b.timeout&&(l=H(function(){k||(k=!0,q.abort(),I(l),b.xb.call(b.context||m,q))},b.timeout));
return q}
function Td(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=td(a));break;case "XML":if(b=(b=b.responseXML)?Ud(b):null)d={},y(b.getElementsByTagName("*"),function(a){d[a.tagName]=Vd(a)})}c&&Wd(d);
return d}
function Wd(a){if(ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=Mc(Bb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):Wd(a[b])}}
function Ud(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Vd(a){var b="";y(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Qd={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var Xd={},Yd=0;function Zd(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,0,b):void 0===b?(a(),NaN):H(a,b||0)}
function $d(a){return Zd(a,5E3)}
;var ae=[],be=!1;function ce(){function a(){be=!0;"google_ad_status"in window?ic("DCLKSTAT",1):ic("DCLKSTAT",2)}
Ac("//static.doubleclick.net/instream/ad_status.js",a);ae.push($d(function(){be||"google_ad_status"in window||(Hc("//static.doubleclick.net/instream/ad_status.js",a),ic("DCLKSTAT",3))}))}
function de(){return parseInt(G("DCLKSTAT",0),10)}
;function ee(a){if(a.classList)return a.classList;a=a.className;return u(a)&&a.match(/\S+/g)||[]}
function fe(a,b){return a.classList?a.classList.contains(b):A(ee(a),b)}
function ge(a,b){a.classList?a.classList.add(b):fe(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function he(a,b){a.classList?a.classList.remove(b):fe(a,b)&&(a.className=Ma(ee(a),function(a){return a!=b}).join(" "))}
function ie(a,b,c){c?ge(a,b):he(a,b)}
;function je(a,b){this.x=n(a)?a:0;this.y=n(b)?b:0}
je.prototype.clone=function(){return new je(this.x,this.y)};
je.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
je.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function ke(a,b){this.width=a;this.height=b}
ke.prototype.clone=function(){return new ke(this.width,this.height)};
ke.prototype.isEmpty=function(){return!(this.width*this.height)};
ke.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
ke.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};!hd&&!K||K&&9<=rd||hd&&pd("1.9.1");var le=K&&!pd("9");function me(a){return a?new ne(oe(a)):ra||(ra=new ne)}
function pe(a){return u(a)?document.getElementById(a):a}
function qe(a){var b=document;return u(a)?b.getElementById(a):a}
function re(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):se(a,void 0)}
function se(a,b){var c,d,e,f;c=document;c=b||c;if(c.querySelectorAll&&c.querySelector&&a)return c.querySelectorAll(""+(a?"."+a:""));if(a&&c.getElementsByClassName){var h=c.getElementsByClassName(a);return h}h=c.getElementsByTagName("*");if(a){f={};for(d=e=0;c=h[d];d++){var k=c.className;"function"==typeof k.split&&A(k.split(/\s+/),a)&&(f[e++]=c)}f.length=e;return f}return h}
function te(a){var b=a.scrollingElement?a.scrollingElement:!id&&ue(a)?a.documentElement:a.body||a.documentElement;a=a.parentWindow||a.defaultView;return K&&pd("10")&&a.pageYOffset!=b.scrollTop?new je(b.scrollLeft,b.scrollTop):new je(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function ue(a){return"CSS1Compat"==a.compatMode}
function ve(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function we(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function xe(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function oe(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function ye(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{ve(a);var c=oe(a);a.appendChild(c.createTextNode(String(b)))}}
var ze={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Ae={IMG:" ",BR:"\n"};function Be(a){if(le&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Ce(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");le||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Ce(a,b,c){if(!(a.nodeName in ze))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Ae)b.push(Ae[a.nodeName]);else for(a=a.firstChild;a;)Ce(a,b,c),a=a.nextSibling}
function De(a){var b=Ee.bd;return b?Fe(a,function(a){return!b||u(a.className)&&A(a.className.split(/\s+/),b)},!0,void 0):null}
function Fe(a,b,c,d){c||(a=a.parentNode);c=null==d;for(var e=0;a&&(c||e<=d);){if(b(a))return a;a=a.parentNode;e++}return null}
function ne(a){this.f=a||m.document||document}
ne.prototype.createElement=function(a){return this.f.createElement(a)};
ne.prototype.appendChild=function(a,b){a.appendChild(b)};
ne.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var Ge=id?"webkit":hd?"moz":K?"ms":fd?"o":"",He=r("yt.dom.getNextId_");if(!He){He=function(){return++Ie};
p("yt.dom.getNextId_",He,void 0);var Ie=0}function Je(){var a=document,b;Na(["fullscreenElement","fullScreenElement"],function(c){c in a?b=a[c]:(c=Ge+c.charAt(0).toUpperCase()+c.substr(1),b=c in a?a[c]:void 0);return!!b});
return b}
;function Ke(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Le||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Ke.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
var Le={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var ob=r("yt.events.listeners_")||{};p("yt.events.listeners_",ob,void 0);var Me=r("yt.events.counter_")||{count:0};p("yt.events.counter_",Me,void 0);function Ne(a,b,c,d){return nb(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function M(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=Ne(a,b,c,d);if(e)return e;var e=++Me.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),h;h=f?function(d){d=new Ke(d);if(!Fe(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Ke(b);
b.currentTarget=a;return c.call(a,b)};
h=kc(h);ob[e]=[a,b,c,h,d];a.addEventListener?"mouseenter"==b&&f?a.addEventListener("mouseover",h,d):"mouseleave"==b&&f?a.addEventListener("mouseout",h,d):"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style?a.addEventListener("MozMousePixelScroll",h,d):a.addEventListener(b,h,d):a.attachEvent("on"+b,h);return e}
function Oe(a){a&&("string"==typeof a&&(a=[a]),y(a,function(a){if(a in ob){var c=ob[a],d=c[0],e=c[1],f=c[3],c=c[4];d.removeEventListener?d.removeEventListener(e,f,c):d.detachEvent&&d.detachEvent("on"+e,f);delete ob[a]}}))}
;function Pe(){if(null==r("_lact",window)){var a=parseInt(G("LACT"),10),a=isFinite(a)?w()-Math.max(a,0):-1;p("_lact",a,window);-1==a&&Qe();M(document,"keydown",Qe);M(document,"keyup",Qe);M(document,"mousedown",Qe);M(document,"mouseup",Qe);uc("page-mouse",Qe);uc("page-scroll",Qe);uc("page-resize",Qe)}}
function Qe(){null==r("_lact",window)&&(Pe(),r("_lact",window));var a=w();p("_lact",a,window);J("USER_ACTIVE")}
function Re(){var a=r("_lact",window);return null==a?-1:Math.max(w()-a,0)}
;function Se(a){this.f=a}
var Te=/\s*;\s*/;g=Se.prototype;g.isEnabled=function(){return navigator.cookieEnabled};
function Ue(a,b,c,d,e,f){if(/[;=\s]/.test(b))throw Error('Invalid cookie name "'+b+'"');if(/[;\r\n]/.test(c))throw Error('Invalid cookie value "'+c+'"');n(d)||(d=-1);f=f?";domain="+f:"";e=e?";path="+e:"";d=0>d?"":0==d?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(w()+1E3*d)).toUTCString();a.f.cookie=b+"="+c+f+e+d+""}
g.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(Te),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.remove=function(a,b,c){var d=n(this.get(a));Ue(this,a,"",0,b,c);return d};
g.ra=function(){return Ve(this).keys};
g.U=function(){return Ve(this).values};
g.isEmpty=function(){return!this.f.cookie};
g.Y=function(){return this.f.cookie?(this.f.cookie||"").split(Te).length:0};
g.Za=function(a){for(var b=Ve(this).values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};
g.clear=function(){for(var a=Ve(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Ve(a){a=(a.f.cookie||"").split(Te);for(var b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var We=new Se(document);We.h=3950;function Xe(a,b,c){Ue(We,""+a,b,c,"/","youtube.com")}
;function Ye(a,b,c){var d=G("EVENT_ID");d&&(b||(b={}),b.ei||(b.ei=d));if(b){var d=G("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Bd(window.location.href);e&&d.push(e);e=Bd(a);if(A(d,e)||!e&&0==a.lastIndexOf("/",0)){var f=a.match(Ad),d=f[5],e=f[6],f=f[7],h="";d&&(h+=d);e&&(h+="?"+e);f&&(h+="#"+f);d=h;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e))d=G("SMALLER_SESSION_TEMPDATA_NAME")?"ST-"+Ja(d).toString(36):"s_tempdata-"+Ja(d),b=b?Hd(b):"",Xe(d,b,5)}}if(c)return!1;(window.ytspf||{}).enabled?spf.navigate(a):(c=
window.location,a=Jd(a,{})+"",a=a instanceof Cb?a:Gb(a),c.href=Eb(a));return!0}
;function Ze(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||rb($e);this.assets=a.assets||{};this.attrs=a.attrs||rb(af);this.params=a.params||rb(bf);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var $e={enablejsapi:1},af={},bf={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function cf(a){a instanceof Ze||(a=new Ze(a));return a}
Ze.prototype.clone=function(){var a=new Ze,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==da(c)?a[b]=rb(c):a[b]=c}return a};function df(a){df[" "](a);return a}
df[" "]=t;var ef=!K||9<=rd,ff=K&&!pd("9");!id||pd("528");hd&&pd("1.9b")||K&&pd("8")||fd&&pd("9.5")||id&&pd("528");hd&&!pd("8")||K&&pd("9");function gf(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=!1;this.Nc=!0}
gf.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Nc=!1};function hf(a,b){gf.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.f=this.state=null;a&&this.init(a,b)}
x(hf,gf);
hf.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(hd){var f;a:{try{df(e.nodeName);f=!0;break a}catch(h){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||
0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.f=a;a.defaultPrevented&&this.preventDefault()};
hf.prototype.preventDefault=function(){hf.I.preventDefault.call(this);var a=this.f;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ff)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var jf="closure_listenable_"+(1E6*Math.random()|0),kf=0;function lf(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.pb=!!d;this.tb=e;this.key=++kf;this.Va=this.ob=!1}
function mf(a){a.Va=!0;a.listener=null;a.f=null;a.src=null;a.tb=null}
;function nf(a){this.src=a;this.f={};this.h=0}
function of(a,b,c,d,e){var f=b.toString();b=a.f[f];b||(b=a.f[f]=[],a.h++);var h=pf(b,c,d,e);-1<h?(a=b[h],a.ob=!1):(a=new lf(c,a.src,f,!!d,e),a.ob=!1,b.push(a));return a}
nf.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.f))return!1;var e=this.f[a];b=pf(e,b,c,d);return-1<b?(mf(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.f[a],this.h--),!0):!1};
function qf(a,b){var c=b.type;c in a.f&&Ua(a.f[c],b)&&(mf(b),0==a.f[c].length&&(delete a.f[c],a.h--))}
nf.prototype.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.f)if(!a||c==a){for(var d=this.f[c],e=0;e<d.length;e++)++b,mf(d[e]);delete this.f[c];this.h--}return b};
function rf(a,b,c,d,e){a=a.f[b.toString()];b=-1;a&&(b=pf(a,c,d,e));return-1<b?a[b]:null}
function pf(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Va&&f.listener==b&&f.pb==!!c&&f.tb==d)return e}return-1}
;var sf="closure_lm_"+(1E6*Math.random()|0),tf={},uf=0;
function vf(a,b,c,d,e){if(ea(b)){for(var f=0;f<b.length;f++)vf(a,b[f],c,d,e);return null}c=wf(c);if(a&&a[jf])a=a.ub(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,h=xf(a);h||(a[sf]=h=new nf(a));c=of(h,b,c,d,e);if(!c.f){d=yf();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(zf(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");uf++}a=c}return a}
function yf(){var a=Af,b=ef?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Bf(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)Bf(a,b[f],c,d,e);else c=wf(c),a&&a[jf]?a.$b(b,c,d,e):a&&(a=xf(a))&&(b=rf(a,b,c,!!d,e))&&Cf(b)}
function Cf(a){if(!ga(a)&&a&&!a.Va){var b=a.src;if(b&&b[jf])qf(b.Ba,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.pb):b.detachEvent&&b.detachEvent(zf(c),d);uf--;(c=xf(b))?(qf(c,a),0==c.h&&(c.src=null,b[sf]=null)):mf(a)}}}
function zf(a){return a in tf?tf[a]:tf[a]="on"+a}
function Df(a,b,c,d){var e=!0;if(a=xf(a))if(b=a.f[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.pb==c&&!f.Va&&(f=Ef(f,d),e=e&&!1!==f)}return e}
function Ef(a,b){var c=a.listener,d=a.tb||a.src;a.ob&&Cf(a);return c.call(d,b)}
function Af(a,b){if(a.Va)return!0;if(!ef){var c=b||r("window.event"),d=new hf(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;0<=h;h--){d.currentTarget=c[h];var k=Df(c[h],f,!0,d),e=e&&k}for(h=0;h<c.length;h++)d.currentTarget=c[h],k=Df(c[h],f,!1,d),e=e&&k}return e}return Ef(a,new hf(b,this))}
function xf(a){a=a[sf];return a instanceof nf?a:null}
var Ff="__closure_events_fn_"+(1E9*Math.random()>>>0);function wf(a){if(ha(a))return a;a[Ff]||(a[Ff]=function(b){return a.handleEvent(b)});
return a[Ff]}
;function Gf(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
Gf.prototype.clone=function(){return new Gf(this.top,this.right,this.bottom,this.left)};
Gf.prototype.contains=function(a){return this&&a?a instanceof Gf?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
Gf.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
Gf.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Hf(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
Hf.prototype.clone=function(){return new Hf(this.left,this.top,this.width,this.height)};
Hf.prototype.contains=function(a){return a instanceof Hf?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
Hf.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
Hf.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function If(a,b){var c=oe(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Jf(a,b){return If(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Kf(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}K&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Lf(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Mf(a){var b=Nf;if("none"!=Jf(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Nf(a){var b=a.offsetWidth,c=a.offsetHeight,d=id&&!b&&!c;return n(b)&&!d||!a.getBoundingClientRect?new ke(b,c):(a=Kf(a),new ke(a.right-a.left,a.bottom-a.top))}
function Of(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e}
function Pf(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Of(a,c):0}
var Qf={thin:2,medium:4,thick:6};function Rf(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Qf?Qf[c]:Of(a,c)}
;var Sf=B("Firefox"),Tf=ed()||B("iPod"),Uf=B("iPad"),Vf=B("Android")&&!(zb()||B("Firefox")||yb()||B("Silk")),Wf=zb(),Xf=B("Safari")&&!(zb()||B("Coast")||yb()||B("Edge")||B("Silk")||B("Android"))&&!(ed()||B("iPad")||B("iPod"));function Yf(){var a;if(a=We.get("PREF",void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Zf[d]=c.toString())}}}
ca(Yf);var Zf=r("yt.prefs.UserPrefs.prefs_")||{};p("yt.prefs.UserPrefs.prefs_",Zf,void 0);function $f(a){if(/^f([1-9][0-9]*)$/.test(a))throw"ExpectedRegexMatch: "+a;}
function ag(a){if(!/^\w+$/.test(a))throw"ExpectedRegexMismatch: "+a;}
function bg(a){a=void 0!==Zf[a]?Zf[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Yf.prototype.get=function(a,b){ag(a);$f(a);var c=void 0!==Zf[a]?Zf[a].toString():null;return null!=c?c:b?b:""};
function cg(a,b){return!!((bg("f"+(Math.floor(b/31)+1))||0)&1<<b%31)}
Yf.prototype.remove=function(a){ag(a);$f(a);delete Zf[a]};
Yf.prototype.clear=function(){Zf={}};function dg(a,b){(a=pe(a))&&a.style&&(a.style.display=b?"":"none",ie(a,"hid",!b))}
function eg(a){y(arguments,function(a){!fa(a)||a instanceof Element?dg(a,!0):y(a,function(a){eg(a)})})}
function fg(a){y(arguments,function(a){!fa(a)||a instanceof Element?dg(a,!1):y(a,function(a){fg(a)})})}
;function gg(){this.j=this.h=this.f=0;this.o="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.o=b;b=a;this.f=b[0];this.h=b[1];this.j=b[2];if(0>=this.f){var h,k,l,q;if(oc)try{h=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(E){h=null}else l=document.body,q=document.createElement("object"),q.setAttribute("type","application/x-shockwave-flash"),h=l.appendChild(q);if(h&&"GetVariable"in h)try{k=h.GetVariable("$version")}catch(E){k=""}l&&q&&l.removeChild(q);(h=k||"")?(h=h.split(" ")[1].split(","),h=[parseInt(h[0],10)||0,parseInt(h[1],10)||0,parseInt(h[2],
10)||0]):h=[0,0,0];this.f=h[0];this.h=h[1];this.j=h[2]}}
ca(gg);function hg(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.f>b[0]||a.f==b[0]&&a.h>b[1]||a.f==b[0]&&a.h==b[1]&&a.j>=b[2]}
function ig(a){return-1<a.o.indexOf("Gnash")&&-1==a.o.indexOf("AVM2")||9==a.f&&1==a.h||9==a.f&&0==a.h&&1==a.j?!1:9<=a.f}
function jg(a){return kd?!hg(a,11,2):jd?!hg(a,11,3):!ig(a)}
;function kg(a,b,c){if(b){a=u(a)?qe(a):a;var d=rb(c.attrs);d.tabindex=0;var e=rb(c.params);e.flashvars=Hd(c.args);if(oc){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=b;b=document.createElement("object");for(var f in d)b.setAttribute(f,d[f]);for(f in e)d=document.createElement("param"),d.setAttribute("name",f),d.setAttribute("value",e[f]),b.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=b;b=document.createElement("embed");b.setAttribute("name",d.id);for(f in d)b.setAttribute(f,
d[f]);for(f in e)b.setAttribute(f,e[f])}e=document.createElement("div");e.appendChild(b);a.innerHTML=e.innerHTML}}
function lg(a,b,c){if(a&&a.attrs&&a.attrs.id){a=cf(a);var d=!!b,e=pe(a.attrs.id),f=e?e.parentNode:null;if(e&&f){if(window!=window.top){var h=null;if(document.referrer){var k=document.referrer.substring(0,128);Md(k)||(h=k)}else h="unknown";h&&(d=!0,a.args.framer=h)}h=gg.getInstance();if(hg(h,a.minVersion)){var k=mg(a,h),l="";-1<navigator.userAgent.indexOf("Sony/COM2")||(l=e.getAttribute("src")||e.movie);(l!=k||d)&&kg(f,k,a);jg(h)&&ng()}else og(f,a,h);c&&c()}else H(function(){lg(a,b,c)},50)}}
function og(a,b,c){0==c.f&&b.fallback?b.fallback():0==c.f&&b.fallbackMessage?b.fallbackMessage():a.innerHTML='<div id="flash-upgrade">'+nc()+"</div>"}
function mg(a,b){return ig(b)&&a.url||(-1<navigator.userAgent.indexOf("Sony/COM2")&&!hg(b,9,1,58)?!1:!0)&&a.urlV9As2||a.url}
function ng(){var a=pe("flash10-promo-div"),b=cg(Yf.getInstance(),107);a&&!b&&eg(a)}
;function pg(a){if(window.spf){var b=a.match(qg);spf.style.load(a,b?b[1]:"",void 0)}else rg(a)}
function rg(a){var b=sg(a),c=document.getElementById(b),d=c&&C(c,"loaded");d||c&&!d||(c=tg(a,b,function(){C(c,"loaded")||(Mb(c,"loaded","true"),J(b),H(qa(zc,b),0))}))}
function tg(a,b,c){var d=document.createElement("link");d.id=b;d.rel="stylesheet";d.onload=function(){c&&setTimeout(c,0)};
Lb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function sg(a){var b=document.createElement("a");Lb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ja(a)}
var qg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var ug;var vg=vb,vg=vg.toLowerCase();if(-1!=vg.indexOf("android")){var wg=vg.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(wg)ug=Number(wg[1]);else{var xg={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},yg=vg.match("("+kb(xg).join("|")+")");ug=yg?xg[yg[0]]:0}}else ug=void 0;var zg=Tf||Uf;var Ag=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Bg=['audio/mp4; codecs="mp4a.40.2"'];function Cg(a,b){this.h=this.F=this.o="";this.B=null;this.l=this.f="";this.A=!1;var c;a instanceof Cg?(this.A=n(b)?b:a.A,Dg(this,a.o),this.F=a.F,Eg(this,a.h),Fg(this,a.B),this.f=a.f,Gg(this,a.j.clone()),this.l=a.l):a&&(c=String(a).match(Ad))?(this.A=!!b,Dg(this,c[1]||"",!0),this.F=Hg(c[2]||""),Eg(this,c[3]||"",!0),Fg(this,c[4]),this.f=Hg(c[5]||"",!0),Gg(this,c[6]||"",!0),this.l=Hg(c[7]||"")):(this.A=!!b,this.j=new Ig(null,0,this.A))}
Cg.prototype.toString=function(){var a=[],b=this.o;b&&a.push(Jg(b,Kg,!0),":");var c=this.h;if(c||"file"==b)a.push("//"),(b=this.F)&&a.push(Jg(b,Kg,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.B,null!=c&&a.push(":",String(c));if(c=this.f)this.h&&"/"!=c.charAt(0)&&a.push("/"),a.push(Jg(c,"/"==c.charAt(0)?Lg:Mg,!0));(c=this.j.toString())&&a.push("?",c);(c=this.l)&&a.push("#",Jg(c,Ng));return a.join("")};
Cg.prototype.resolve=function(a){var b=this.clone(),c=!!a.o;c?Dg(b,a.o):c=!!a.F;c?b.F=a.F:c=!!a.h;c?Eg(b,a.h):c=null!=a.B;var d=a.f;if(c)Fg(b,a.B);else if(c=!!a.f){if("/"!=d.charAt(0))if(this.h&&!this.f)d="/"+d;else{var e=b.f.lastIndexOf("/");-1!=e&&(d=b.f.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],h=0;h<e.length;){var k=e[h++];"."==k?d&&h==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.f=d:c=""!==a.j.toString();c?Gg(b,Hg(a.j.toString())):c=!!a.l;c&&(b.l=a.l);return b};
Cg.prototype.clone=function(){return new Cg(this)};
function Dg(a,b,c){a.o=c?Hg(b,!0):b;a.o&&(a.o=a.o.replace(/:$/,""))}
function Eg(a,b,c){a.h=c?Hg(b,!0):b}
function Fg(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.B=b}else a.B=null}
function Gg(a,b,c){b instanceof Ig?(a.j=b,Og(a.j,a.A)):(c||(b=Jg(b,Pg)),a.j=new Ig(b,0,a.A))}
function N(a,b,c){a=a.j;Qg(a);a.j=null;b=Rg(a,b);Sg(a,b)&&(a.h-=a.f.get(b).length);Tc(a.f,b,[c]);a.h++}
function Tg(a,b,c){ea(c)||(c=[String(c)]);Ug(a.j,b,c)}
function Vg(a){N(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^w()).toString(36));return a}
function Wg(a){return a instanceof Cg?a.clone():new Cg(a,void 0)}
function Xg(a,b,c,d){var e=new Cg(null,void 0);a&&Dg(e,a);b&&Eg(e,b);c&&Fg(e,c);d&&(e.f=d);return e}
function Hg(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Jg(a,b,c){return u(a)?(a=encodeURI(a).replace(b,Yg),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Yg(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Kg=/[#\/\?@]/g,Mg=/[\#\?:]/g,Lg=/[\#\?]/g,Pg=/[\#\?@]/g,Ng=/#/g;function Ig(a,b,c){this.h=this.f=null;this.j=a||null;this.o=!!c}
function Qg(a){a.f||(a.f=new Sc,a.h=0,a.j&&Cd(a.j,function(b,c){var d=ta(b);Qg(a);a.j=null;var d=Rg(a,d),e=a.f.get(d);e||Tc(a.f,d,e=[]);e.push(c);a.h++}))}
g=Ig.prototype;g.Y=function(){Qg(this);return this.h};
g.remove=function(a){Qg(this);a=Rg(this,a);return Vc(this.f.h,a)?(this.j=null,this.h-=this.f.get(a).length,this.f.remove(a)):!1};
g.clear=function(){this.f=this.j=null;this.h=0};
g.isEmpty=function(){Qg(this);return 0==this.h};
function Sg(a,b){Qg(a);b=Rg(a,b);return Vc(a.f.h,b)}
g.Za=function(a){var b=this.U();return A(b,a)};
g.ra=function(){Qg(this);for(var a=this.f.U(),b=this.f.ra(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.U=function(a){Qg(this);var b=[];if(u(a))Sg(this,a)&&(b=Wa(b,this.f.get(Rg(this,a))));else{a=this.f.U();for(var c=0;c<a.length;c++)b=Wa(b,a[c])}return b};
g.get=function(a,b){var c=a?this.U(a):[];return 0<c.length?String(c[0]):b};
function Ug(a,b,c){a.remove(b);0<c.length&&(a.j=null,Tc(a.f,Rg(a,b),Xa(c)),a.h+=c.length)}
g.toString=function(){if(this.j)return this.j;if(!this.f)return"";for(var a=[],b=this.f.ra(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.U(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.j=a.join("&")};
g.clone=function(){var a=new Ig;a.j=this.j;this.f&&(a.f=this.f.clone(),a.h=this.h);return a};
function Rg(a,b){var c=String(b);a.o&&(c=c.toLowerCase());return c}
function Og(a,b){b&&!a.o&&(Qg(a),a.j=null,a.f.forEach(function(a,b){var e=b.toLowerCase();b!=e&&(this.remove(b),Ug(this,e,a))},a));
a.o=b}
;var Zg="corp.google.com googleplex.com youtube.com youtube-nocookie.com youtubeeducation.com borg.google.com prod.google.com sandbox.google.com books.googleusercontent.com docs.google.com drive.google.com mail.google.com photos.google.com plus.google.com lh2.google.com picasaweb.google.com play.google.com googlevideo.com talkgadget.google.com survey.g.doubleclick.net youtube.googleapis.com vevo.com".split(" "),$g="";
function ah(a){return a&&a==$g?!0:(new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*("+Zg.join("|").replace(/\./g,".")+")(:[0-9]+)?([/?#]|$)","i")).test(a)?($g=a,!0):!1}
;var bh={},ch=0,dh=r("yt.net.ping.workerUrl_")||null;p("yt.net.ping.workerUrl_",dh,void 0);function eh(a){try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||a&&fh(a)}catch(b){a&&fh(a)}}
function fh(a){var b=new Image,c=""+ch++;bh[c]=b;b.onload=b.onerror=function(){delete bh[c]};
b.src=a}
;function O(a,b){this.version=a;this.args=b}
function gh(a){if(!a.Ea){var b={};a.call(b);a.Ea=b.version}return a.Ea}
function hh(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=gh(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function P(a,b){this.topic=a;this.f=b}
P.prototype.toString=function(){return this.topic};var ih=r("yt.pubsub2.instance_")||new F;F.prototype.subscribe=F.prototype.subscribe;F.prototype.unsubscribeByKey=F.prototype.oa;F.prototype.publish=F.prototype.D;F.prototype.clear=F.prototype.clear;p("yt.pubsub2.instance_",ih,void 0);var jh=r("yt.pubsub2.subscribedKeys_")||{};p("yt.pubsub2.subscribedKeys_",jh,void 0);var kh=r("yt.pubsub2.topicToKeys_")||{};p("yt.pubsub2.topicToKeys_",kh,void 0);var lh=r("yt.pubsub2.isAsync_")||{};p("yt.pubsub2.isAsync_",lh,void 0);
p("yt.pubsub2.skipSubKey_",null,void 0);function Q(a,b){var c=mh();c&&c.publish.call(c,a.toString(),a,b)}
function nh(a,b,c){var d=mh();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,h){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var k=function(){if(jh[e])try{if(h&&a instanceof P&&a!=d)try{h=hh(a.f,h)}catch(k){throw k.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,h)}catch(k){mc(k)}};
lh[a.toString()]?r("yt.scheduler.instance")?Zd(k,void 0):H(k,0):k()}});
jh[e]=!0;kh[a.toString()]||(kh[a.toString()]=[]);kh[a.toString()].push(e);return e}
function oh(a){var b=mh();b&&(ga(a)&&(a=[a]),y(a,function(a){b.unsubscribeByKey(a);delete jh[a]}))}
function mh(){return r("yt.pubsub2.instance_")}
;function ph(a){O.call(this,1,arguments)}
x(ph,O);var qh=new P("timing-sent",ph);var R=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{},rh=v(R.clearResourceTimings||R.webkitClearResourceTimings||R.mozClearResourceTimings||R.msClearResourceTimings||R.oClearResourceTimings||t,R),sh=R.mark?function(a){R.mark(a)}:t;
function th(a){uh()[a]=w();sh(a);var b=G("TIMING_ACTION",void 0);a=uh();if(r("yt.timing.ready_")&&b&&a._start&&vh()){var b=!0,c=G("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}if(b)if(c=uh(),a=wh().span,d=wh().info,b=r("yt.timing.reportbuilder_")){if(b=b(c,a,d,void 0))xh(b),yh()}else{b={v:2,s:G("CSI_SERVICE_NAME","youtube"),action:G("TIMING_ACTION",void 0)};R.now&&R.timing&&(e=R.timing.navigationStart+R.now(),e=Math.round(w()-e),d.yt_hrd=e);var e=G("TIMING_INFO",
{}),f;for(f in e)d[f]=e[f];f=d.srt;delete d.srt;var h;f||0===f||(h=R.timing||{},f=Math.max(0,h.responseStart-h.navigationStart),isNaN(f)&&d.pt&&(f=d.pt));if(f||0===f)d.srt=f;d.h5jse&&(e=window.location.protocol+r("ytplayer.config.assets.js"),(e=R.getEntriesByName?R.getEntriesByName(e)[0]:null)?d.h5jse=Math.round(d.h5jse-e.responseEnd):delete d.h5jse);c.aft=vh();e=c._start;if("cold"==d.yt_lt){h||(h=R.timing||{});var k;a:if(k=h,k.msFirstPaint)k=Math.max(0,k.msFirstPaint);else{var l=window.chrome;if(l&&
(l=l.loadTimes,ha(l))){var l=l(),q=1E3*Math.min(l.requestTime||Infinity,l.startLoadTime||Infinity),q=Infinity===q?0:k.navigationStart-q;k=Math.max(0,Math.round(1E3*l.firstPaintTime+q)||0);break a}k=0}0<k&&k>e&&(c.fpt=k);k=a||wh().span;l=h.redirectEnd-h.redirectStart;0<l&&(k.rtime_=l);l=h.domainLookupEnd-h.domainLookupStart;0<l&&(k.dns_=l);l=h.connectEnd-h.connectStart;0<l&&(k.tcp_=l);l=h.connectEnd-h.secureConnectionStart;h.secureConnectionStart>=h.navigationStart&&0<l&&(k.stcp_=l);l=h.responseStart-
h.requestStart;0<l&&(k.req_=l);l=h.responseEnd-h.responseStart;0<l&&(k.rcv_=l);R.getEntriesByType&&zh(c)}l=uh();h=l.pbr;k=l.vc;l=l.pbs;h&&k&&l&&h<k&&k<l&&1==wh().info.yt_vis&&(wh().info.yt_lt="hot_bg",h=c.vc,k=c.pbs,delete c.aft,a.aft=Math.round(k-h));(h=G("PREVIOUS_ACTION"))&&(d.pa=h);d.p=G("CLIENT_PROTOCOL")||"unknown";d.t=G("CLIENT_TRANSPORT")||"unknown";window.navigator&&window.navigator.sendBeacon&&(d.ba=1);for(var E in d)"_"!=E.charAt(0)&&(b[E]=d[E]);c.ps=w();E={};var d=[],ba;for(ba in c)"_"!=
ba.charAt(0)&&(k=Math.max(Math.round(c[ba]-e),0),E[ba]=k,d.push(ba+"."+k));b.rt=d.join(",");ba=b;var c=[],pa;for(pa in a)"_"!=pa.charAt(0)&&c.push(pa+"."+a[pa]);ba.it=c.join(",");(pa=r("ytdebug.logTiming"))&&pa(b,E,a);yh();G("EXP_DEFER_CSI_PING")?(Ah(),p("yt.timing.deferredPingArgs_",b,void 0),pa=H(Ah,0),p("yt.timing.deferredPingTimer_",pa,void 0)):xh(b);Q(qh,new ph(E.aft+(f||0)))}}}
function yh(){Bh();rh();p("yt.timing.pingSent_",!1,void 0)}
function vh(){var a=uh();if(a.aft)return a.aft;for(var b=G("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Ch(a){return Math.round(R.timing.navigationStart+a)}
function zh(a){var b=window.location.protocol,c=R.getEntriesByType("resource"),d=c.filter(function(a){return 0==a.name.indexOf(b+"//fonts.googleapis.com/css?family=")})[0],c=c.filter(function(a){return 0==a.name.indexOf(b+"//fonts.gstatic.com/s/")}).reduce(function(a,b){return b.duration>a.duration?b:a},{duration:0});
d&&0<d.startTime&&0<d.responseEnd&&(a.wfcs=Ch(d.startTime),a.wfce=Ch(d.responseEnd));c&&0<c.startTime&&0<c.responseEnd&&(a.wffs=Ch(c.startTime),a.wffe=Ch(c.responseEnd))}
function xh(a){if(G("DEBUG_CSI_DATA")){var b=r("yt.timing.csiData");b||(b=[],p("yt.timing.csiData",b,void 0));b.push({page:location.href,time:new Date,args:a})}G("EXP_DEFER_CSI_PING")&&(I(r("yt.timing.deferredPingTimer_")),p("yt.timing.deferredPingArgs_",null,void 0));var c="https:"==window.location.protocol?"https://gg.google.com/csi":"http://csi.gstatic.com/csi",b="",d;for(d in a)b+="&"+d+"="+a[d];a=c+"?"+b.substring(1);b=G("CSI_LOG_WITH_YT")?"/csi_204?"+b.substring(1):null;window.navigator&&window.navigator.sendBeacon?
(eh(a),b&&eh(b)):(a&&fh(a),b&&b&&fh(b));p("yt.timing.pingSent_",!0,void 0)}
function Ah(a){if(G("EXP_DEFER_CSI_PING")){var b=r("yt.timing.deferredPingArgs_");b&&(a&&(b.yt_fss=a),xh(b))}}
function uh(){return wh().tick}
function wh(){return r("ytcsi.data_")||Bh()}
function Bh(){var a={tick:{},span:{},info:{}};p("ytcsi.data_",a,void 0);return a}
;var Dh={"api.invalidparam":2,auth:150,"drm.auth":150,heartbeat:150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"drm.unavailable":5};function Eh(a,b){D.call(this);this.l=this.J=a;this.Z=b;this.F=!1;this.h={};this.Oa=this.S=null;this.qa=new F;cc(this,qa(dc,this.qa));this.o={};this.A=this.lb=this.j=this.Gb=this.f=null;this.sa=!1;this.K=this.B=this.O=this.P=null;this.nb={};this.kd=["onReady"];this.Ma=[];this.Hb=null;this.hc=0;this.ta={};Fh(this);this.va("onDetailedError",v(this.Vd,this));this.va("onTabOrderChange",v(this.nd,this));this.va("onTabAnnounce",v(this.ic,this));this.va("WATCH_LATER_VIDEO_ADDED",v(this.Wd,this));this.va("WATCH_LATER_VIDEO_REMOVED",
v(this.Xd,this));this.va("onMouseWheelCapture",v(this.Sd,this));this.va("onMouseWheelRelease",v(this.Td,this));this.va("onAdAnnounce",v(this.ic,this));this.Na=!1;this.dc=Wf||Sf;this.ya=this.ha=null;vf(this.J,"mousewheel",this.Ac,!1,this);vf(this.J,"wheel",this.Ac,!1,this)}
x(Eh,D);var Gh=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g=Eh.prototype;g.cc=function(a,b){this.isDisposed()||(Hh(this,a),b||Ih(this),Jh(this,b),this.F&&Kh(this))};
function Hh(a,b){a.Gb=b;a.f=b.clone();a.j=a.f.attrs.id||a.j;"video-player"==a.j&&(a.j=a.Z,a.f.attrs.id=a.Z);a.l.id==a.j&&(a.j+="-player",a.f.attrs.id=a.j);a.f.args.enablejsapi="1";a.f.args.playerapiid=a.Z;a.lb||(a.lb=Lh(a,a.f.args.jsapicallback||"onYouTubePlayerReady"));a.f.args.jsapicallback=null;var c=a.f.attrs.width;c&&(a.l.style.width=Lf(Number(c)||c,!0));if(c=a.f.attrs.height)a.l.style.height=Lf(Number(c)||c,!0)}
g.xd=function(){return this.Gb};
function Kh(a){a.f.loaded||(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.h.loadVideoByPlayerVars(a.f.args):a.h.cueVideoByPlayerVars(a.f.args))}
function Mh(a){if(!n(a.f.disable.flash)){var b=a.f.disable,c;c=hg(gg.getInstance(),a.f.minVersion);b.flash=!c}return!a.f.disable.flash}
function Ih(a){var b;if(!(b=!a.f.html5&&Mh(a))){if(!n(a.f.disable.html5)){var c;b=!0;void 0!=a.f.args.deviceHasDisplay&&(b=a.f.args.deviceHasDisplay);if(2.2==ug)c=!0;else{a:{var d=b;b=r("yt.player.utils.videoElement_");b||(b=document.createElement("video"),p("yt.player.utils.videoElement_",b,void 0));try{if(b.canPlayType)for(var d=d?Ag:Bg,e=0;e<d.length;e++)if(b.canPlayType(d[e])){c=null;break a}c="fmt.noneavailable"}catch(f){c="html5.missingapi"}}c=!c}c&&(c=Nh(a)||a.f.assets.js);a.f.disable.html5=
!c;c||(a.f.args.html5_unavailable="1")}b=!!a.f.disable.html5}return b?Mh(a)?"flash":"unsupported":"html5"}
function Oh(a,b){if(!b||(5!=(Dh[b.errorCode]||5)?0:-1!=Gh.indexOf(b.errorCode))){var c=Ph(a);c&&c.stopVideo&&c.stopVideo();if(Mh(a)){var d=a.f;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=cf(c));d.args.autoplay=1;d.args.html5_unavailable="1";Hh(a,d);Jh(a,"flash")}}}
function Jh(a,b){a.isDisposed()||(b||(b=Ih(a)),("flash"==b?a.Fe:"html5"==b?a.Ge:a.He).call(a))}
function Nh(a){var b=!0,c=Ph(a);c&&a.f&&(a=a.f,b=C(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
g.Ge=function(){if(!this.sa){var a=Nh(this);a&&"html5"==Qh(this)?(this.A="html5",this.F||this.Ua()):(Rh(this),this.A="html5",a&&this.O?(this.J.appendChild(this.O),this.Ua()):(this.f.loaded=!0,this.P=v(function(){var a=this.J,c=this.f.clone();r("yt.player.Application.create")(a,c);this.Ua()},this),this.sa=!0,a?this.P():(Ac(this.f.assets.js,this.P),pg(this.f.assets.css))))}};
g.Fe=function(){var a=this.f.clone();if(!this.B){var b=Ph(this);b&&(this.B=document.createElement("span"),this.B.tabIndex=0,this.Ma.push(M(this.B,"focus",v(this.xc,this))),this.K=document.createElement("span"),this.K.tabIndex=0,this.Ma.push(M(this.K,"focus",v(this.xc,this))),b.parentNode&&b.parentNode.insertBefore(this.B,b),b.parentNode&&b.parentNode.insertBefore(this.K,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Qh(this))this.A="flash",this.F||
lg(a,!1,v(this.Ua,this));else{Rh(this);this.A="flash";this.f.loaded=!0;b=this.J;b=u(b)?qe(b):b;a=cf(a);if(window!=window.top){var c=null;document.referrer&&(c=document.referrer.substring(0,128));a.args.framer=c}c=gg.getInstance();hg(c,a.minVersion)?(c=mg(a,c),kg(b,c,a)):og(b,a,c);this.Ua()}};
g.xc=function(){Ph(this).focus()};
function Ph(a){var b=pe(a.j);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.j));return b}
g.Ua=function(){if(!this.isDisposed()){var a=Ph(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.sa=!1,a.isNotServable&&a.isNotServable(this.f.args.video_id))Oh(this);else{Fh(this);this.F=!0;a=Ph(this);a.addEventListener&&(this.S=Sh(this,a,"addEventListener"));a.removeEventListener&&(this.Oa=Sh(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.h[d]||(this.h[d]=Sh(this,a,d))}for(var e in this.o)this.S(e,
this.o[e]);Kh(this);this.lb&&this.lb(this.h);this.qa.D("onReady",this.h)}else this.hc=H(v(this.Ua,this),50)}};
function Sh(a,b,c){var d=b[c];return function(){try{return a.Hb=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Hb=e,mc(e,"WARNING"))}}}
function Fh(a){a.F=!1;if(a.Oa)for(var b in a.o)a.Oa(b,a.o[b]);for(var c in a.ta)I(parseInt(c,10));a.ta={};a.S=null;a.Oa=null;for(var d in a.h)a.h[d]=null;a.h.addEventListener=v(a.va,a);a.h.removeEventListener=v(a.qe,a);a.h.destroy=v(a.dispose,a);a.h.getLastError=v(a.yd,a);a.h.getPlayerType=v(a.zd,a);a.h.getCurrentVideoConfig=v(a.xd,a);a.h.loadNewVideoConfig=v(a.cc,a);a.h.isReady=v(a.Se,a)}
g.Se=function(){return this.F};
g.va=function(a,b){if(!this.isDisposed()){var c=Lh(this,b);if(c){if(!A(this.kd,a)&&!this.o[a]){var d=Th(this,a);this.S&&this.S(a,d)}this.qa.subscribe(a,c);"onReady"==a&&this.F&&H(qa(c,this.h),0)}}};
g.qe=function(a,b){if(!this.isDisposed()){var c=Lh(this,b);c&&this.qa.unsubscribe(a,c)}};
function Lh(a,b){var c=b;if("string"==typeof b){if(a.nb[b])return a.nb[b];c=function(){var a=r(b);a&&a.apply(m,arguments)};
a.nb[b]=c}return c?c:null}
function Th(a,b){var c="ytPlayer"+b+a.Z;a.o[b]=c;m[c]=function(c){var e=H(function(){if(!a.isDisposed()){a.qa.D(b,c);var f=a.ta,h=String(e);h in f&&delete f[h]}},0);
qb(a.ta,String(e))};
return c}
g.nd=function(a){a=a?xe:we;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.B||b==this.K||(b.focus(),b!=document.activeElement));)b=a(b)};
g.ic=function(a){J("a11y-announce",a)};
g.Vd=function(a){Oh(this,a)};
g.Wd=function(a){J("WATCH_LATER_VIDEO_ADDED",a)};
g.Xd=function(a){J("WATCH_LATER_VIDEO_REMOVED",a)};
g.Sd=function(){this.dc&&(this.Na||(this.ya=te(document)),this.ha||(this.ha=vf(window,"scroll",this.le,!1,this)));this.Na=!0};
g.Td=function(){this.ha&&(Cf(this.ha),this.ha=null);this.Na=!1};
g.Ac=function(a){this.Na&&!this.dc&&a.preventDefault()};
g.le=function(){this.ya&&window.scrollTo(this.ya.x,this.ya.y)};
g.He=function(){Rh(this);this.A="unsupported";var a='Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>',b=navigator.userAgent.match(/Version\/(\d).*Safari/);b&&5<=parseInt(b[1],10)&&(a='Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/"> Get the latest Flash Player</a> <br> <a href="http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>');
b=this.f.messages.player_fallback||a;a=pe("player-unavailable");if(pe("unavailable-submessage")&&a){pe("unavailable-submessage").innerHTML=b;var b=a||document,c=null;b.getElementsByClassName?c=b.getElementsByClassName("icon")[0]:b.querySelectorAll&&b.querySelector?c=b.querySelector(".icon"):c=se("icon",a)[0];if(c=b=c||null)c=b?b.dataset?Nb("icon")in b.dataset:b.hasAttribute?!!b.hasAttribute("data-icon"):!!b.getAttribute("data-icon"):!1;c&&(b.src=C(b,"icon"));a.style.display="";ge(pe("player"),"off-screen-trigger")}};
g.zd=function(){return this.A||Qh(this)};
g.yd=function(){return this.Hb};
function Qh(a){return(a=Ph(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Rh(a){th("dcp");a.cancel();Fh(a);a.A=null;a.f&&(a.f.loaded=!1);var b=Ph(a);"html5"==Qh(a)?a.O=b:b&&b.destroy&&b.destroy();ve(a.J);Oe(a.Ma);a.Ma.length=0;a.B=null;a.K=null}
g.cancel=function(){this.P&&Hc(this.f.assets.js,this.P);I(this.hc);this.sa=!1};
g.G=function(){Rh(this);if(this.O&&this.f&&this.f.args.fflags&&-1!=this.f.args.fflags.indexOf("new_html5_dispose=true"))try{this.O.destroy()}catch(b){mc(b)}this.nb=null;for(var a in this.o)m[this.o[a]]=null;this.h=null;delete this.J;delete this.l;this.f&&(this.Gb=this.f=this.f.fallback=null);Eh.I.G.call(this)};var Uh={},Vh="player_uid_"+(1E9*Math.random()>>>0);function Wh(a,b){a=u(a)?qe(a):a;b=cf(b);var c=Vh+"_"+ka(a),d=Uh[c];if(d)return d.cc(b),d.h;d=new Eh(a,c);Uh[c]=d;J("player-added",d.h);cc(d,qa(Xh,d));H(function(){d.cc(b)},0);
return d.h}
function Xh(a){Uh[a.Z]=null}
function Yh(a){a=pe(a);if(!a)return null;var b=Vh+"_"+ka(a),c=Uh[b];c||(c=new Eh(a,b),Uh[b]=c);return c.h}
;var Zh=r("yt.abuse.botguardInitialized")||Kc;p("yt.abuse.botguardInitialized",Zh,void 0);var $h=r("yt.abuse.invokeBotguard")||Lc;p("yt.abuse.invokeBotguard",$h,void 0);var ai=r("yt.abuse.dclkstatus.checkDclkStatus")||de;p("yt.abuse.dclkstatus.checkDclkStatus",ai,void 0);var bi=r("yt.player.exports.navigate")||Ye;p("yt.player.exports.navigate",bi,void 0);var ci=r("yt.player.embed")||Wh;p("yt.player.embed",ci,void 0);var di=r("yt.player.getPlayerByElement")||Yh;p("yt.player.getPlayerByElement",di,void 0);
var ei=r("yt.util.activity.init")||Pe;p("yt.util.activity.init",ei,void 0);var fi=r("yt.util.activity.getTimeSinceActive")||Re;p("yt.util.activity.getTimeSinceActive",fi,void 0);var gi=r("yt.util.activity.setTimestamp")||Qe;p("yt.util.activity.setTimestamp",gi,void 0);function hi(a){O.call(this,1,arguments);this.f=a}
x(hi,O);function ii(a){O.call(this,1,arguments);this.f=a}
x(ii,O);function ji(a,b){O.call(this,1,arguments);this.f=a;this.isEnabled=b}
x(ji,O);function ki(a,b,c,d,e){O.call(this,2,arguments);this.h=a;this.f=b;this.o=c||null;this.j=d||null;this.source=e||null}
x(ki,O);function li(a,b,c){O.call(this,1,arguments);this.f=a;this.subscriptionId=b}
x(li,O);function mi(a,b,c,d,e,f,h){O.call(this,1,arguments);this.h=a;this.subscriptionId=b;this.f=c;this.l=d||null;this.o=e||null;this.j=f||null;this.source=h||null}
x(mi,O);
var ni=new P("subscription-batch-subscribe",hi),oi=new P("subscription-batch-unsubscribe",hi),pi=new P("subscription-pref-email",ji),qi=new P("subscription-subscribe",ki),ri=new P("subscription-subscribe-loading",ii),si=new P("subscription-subscribe-loaded",ii),ti=new P("subscription-subscribe-success",li),ui=new P("subscription-subscribe-external",ki),vi=new P("subscription-unsubscribe",mi),wi=new P("subscription-unsubscirbe-loading",ii),xi=new P("subscription-unsubscribe-loaded",ii),yi=new P("subscription-unsubscribe-success",
ii),zi=new P("subscription-external-unsubscribe",mi),Ai=new P("subscription-enable-ypc",ii),Bi=new P("subscription-disable-ypc",ii);function Ci(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=Id(c,"mode",b));c=Id("/signin?context=popup","next",c);c=Id(c,"feature","sub_button");if(c=window.open(c,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var d=uc("LOGGED_IN",function(b){wc(G("LOGGED_IN_PUBSUB_KEY",void 0));ic("LOGGED_IN",!0);a(b)});
ic("LOGGED_IN_PUBSUB_KEY",d);c.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
p("yt.pubsub.publish",J,void 0);function Di(){var a=G("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!G("SESSION_INDEX")&&!G("LOGGED_IN"))}
;var Ei={},Fi="ontouchstart"in document;function Gi(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return Fe(c,function(a){return fe(a,b)},!0,d)}
function Hi(a){var b="mouseover"==a.type&&"mouseenter"in Ei||"mouseout"==a.type&&"mouseleave"in Ei,c=a.type in Ei||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=Ei[b],d;for(d in c.ga){var e=Gi(b,d,a.target);e&&!Fe(a.relatedTarget,function(a){return a==e},!0)&&c.D(d,e,b,a)}}if(b=Ei[a.type])for(d in b.ga)(e=Gi(a.type,d,a.target))&&b.D(d,e,a.type,a)}}
M(document,"blur",Hi,!0);M(document,"change",Hi,!0);M(document,"click",Hi);M(document,"focus",Hi,!0);M(document,"mouseover",Hi);M(document,"mouseout",Hi);M(document,"mousedown",Hi);M(document,"keydown",Hi);M(document,"keyup",Hi);M(document,"keypress",Hi);M(document,"cut",Hi);M(document,"paste",Hi);Fi&&(M(document,"touchstart",Hi),M(document,"touchend",Hi),M(document,"touchcancel",Hi));function Ii(a){this.j=a;this.o={};this.Kc=[];this.l=[]}
function S(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
Ii.prototype.init=t;Ii.prototype.dispose=t;function Ji(a,b,c){a.l.push(nh(b,c,a))}
function Ki(a,b,c){var d=S(a,void 0),e=v(c,a);b in Ei||(Ei[b]=new F);Ei[b].subscribe(d,e);a.o[c]=e}
function Li(a,b){Mb(a,"tooltip-text",b)}
;function Mi(){Ii.call(this,"tooltip");this.f=0;this.h={}}
x(Mi,Ii);ca(Mi);g=Mi.prototype;g.register=function(){Ki(this,"mouseover",this.Vb);Ki(this,"mouseout",this.fb);Ki(this,"focus",this.wd);Ki(this,"blur",this.md);Ki(this,"click",this.fb);Ki(this,"touchstart",this.De);Ki(this,"touchend",this.Sc);Ki(this,"touchcancel",this.Sc)};
g.dispose=function(){for(var a in this.h)this.fb(this.h[a]);this.h={}};
g.Vb=function(a){if(!(this.f&&1E3>w()-this.f)){var b=parseInt(C(a,"tooltip-hide-timer"),10);b&&(Ob(a,"tooltip-hide-timer"),I(b));var b=v(function(){Ni(this,a);Ob(a,"tooltip-show-timer")},this),c=parseInt(C(a,"tooltip-show-delay"),10)||0,b=H(b,c);
Mb(a,"tooltip-show-timer",b.toString());a.title&&(Li(a,Oi(a)),a.title="");b=ka(a).toString();this.h[b]=a}};
g.fb=function(a){var b=parseInt(C(a,"tooltip-show-timer"),10);b&&(I(b),Ob(a,"tooltip-show-timer"));b=v(function(){if(a){var b=pe(Pi(this,a));b&&(Qi(b),b&&b.parentNode&&b.parentNode.removeChild(b),Ob(a,"content-id"));(b=pe(Pi(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}Ob(a,"tooltip-hide-timer")},this);
b=H(b,50);Mb(a,"tooltip-hide-timer",b.toString());if(b=C(a,"tooltip-text"))a.title=b;b=ka(a).toString();delete this.h[b]};
g.wd=function(a){this.f=0;this.Vb(a)};
g.md=function(a){this.f=0;this.fb(a)};
g.De=function(a,b,c){c.changedTouches&&(this.f=0,a=Gi(b,S(this),c.changedTouches[0].target),this.Vb(a))};
g.Sc=function(a,b,c){c.changedTouches&&(this.f=w(),a=Gi(b,S(this),c.changedTouches[0].target),this.fb(a))};
function Ri(a,b){Li(a,b);var c=C(a,"content-id");(c=pe(c))&&ye(c,b)}
function Oi(a){return C(a,"tooltip-text")||a.title}
function Ni(a,b){if(b){var c=Oi(b);if(c){var d=pe(Pi(a,b));if(!d){d=document.createElement("div");d.id=Pi(a,b);d.className=S(a,"tip");var e=document.createElement("div");e.className=S(a,"tip-body");var f=document.createElement("div");f.className=S(a,"tip-arrow");var h=document.createElement("div");h.setAttribute("aria-hidden","true");h.className=S(a,"tip-content");var k=Si(a,b),l=Pi(a,b,"content");h.id=l;Mb(b,"content-id",l);e.appendChild(h);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);var l=
Be(b),q=Pi(a,b,"arialabel"),f=document.createElement("div");ge(f,S(a,"arialabel"));f.id=q;"rtl"==document.body.getAttribute("dir")?ye(f,c+" "+l):ye(f,l+" "+c);b.setAttribute("aria-labelledby",q);l=Je()||document.body;l.appendChild(f);l.appendChild(d);Ri(b,c);(c=parseInt(C(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",ge(h,S(a,"normal-wrap")));h=fe(b,S(a,"reverse"));Ti(a,b,d,e,k,h)||Ti(a,b,d,e,k,!h);var E=S(a,"tip-visible");H(function(){ge(d,E)},0)}}}}
function Ti(a,b,c,d,e,f){ie(c,S(a,"tip-reverse"),f);var h=0;f&&(h=1);a=Mf(b);f=new je((a.width-10)/2,f?a.height:0);var k=oe(b),l=new je(0,0),q;q=k?oe(k):document;var E;(E=!K||9<=rd)||(E=me(q),E=ue(E.f));b!=(E?q.documentElement:q.body)&&(q=Kf(b),k=me(k),k=te(k.f),l.x=q.left+k.x,l.y=q.top+k.y);f=new je(l.x+f.x,l.y+f.y);f=f.clone();l=(h&4&&"rtl"==Jf(c,"direction")?h^2:h)&-5;h=Mf(c);k=h.clone();q=f.clone();k=k.clone();0!=l&&(l&2&&(q.x-=k.width+0),l&1&&(q.y-=k.height+0));f=new Hf(0,0,0,0);f.left=q.x;f.top=
q.y;f.width=k.width;f.height=k.height;k=new je(f.left,f.top);k instanceof je?(l=k.x,k=k.y):(l=k,k=void 0);c.style.left=Lf(l,!1);c.style.top=Lf(k,!1);k=new ke(f.width,f.height);if(!(h==k||h&&k&&h.width==k.width&&h.height==k.height))if(h=k,f=oe(c),f=me(f),l=ue(f.f),!K||pd("10")||l&&pd("8"))f=c.style,hd?f.MozBoxSizing="border-box":id?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(h.width,0)+"px",f.height=Math.max(h.height,0)+"px";else if(f=c.style,l){K?(l=Pf(c,"paddingLeft"),
k=Pf(c,"paddingRight"),q=Pf(c,"paddingTop"),E=Pf(c,"paddingBottom"),l=new Gf(q,k,E,l)):(l=If(c,"paddingLeft"),k=If(c,"paddingRight"),q=If(c,"paddingTop"),E=If(c,"paddingBottom"),l=new Gf(parseFloat(q),parseFloat(k),parseFloat(E),parseFloat(l)));if(!K||9<=rd)k=If(c,"borderLeftWidth"),q=If(c,"borderRightWidth"),E=If(c,"borderTopWidth"),ba=If(c,"borderBottomWidth"),k=new Gf(parseFloat(E),parseFloat(q),parseFloat(ba),parseFloat(k));else{k=Rf(c,"borderLeft");q=Rf(c,"borderRight");E=Rf(c,"borderTop");var ba=
Rf(c,"borderBottom"),k=new Gf(E,q,ba,k)}f.pixelWidth=h.width-k.left-l.left-l.right-k.right;f.pixelHeight=h.height-k.top-l.top-l.bottom-k.bottom}else f.pixelWidth=h.width,f.pixelHeight=h.height;h=window.document;h=ue(h)?h.documentElement:h.body;f=new ke(h.clientWidth,h.clientHeight);1==c.nodeType?(c=Kf(c),k=new je(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,k=new je(c.clientX,c.clientY));c=Mf(d);q=Math.floor(c.width/2);h=!!(f.height<k.y+a.height);a=!!(k.y<a.height);l=!!(k.x<q);f=!!(f.width<
k.x+q);k=(c.width+3)/-2- -5;b=C(b,"force-tooltip-direction");if("left"==b||l)k=-5;else if("right"==b||f)k=20-c.width-3;b=Math.floor(k)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(h||a)}
function Pi(a,b,c){a=S(a);var d=b.__yt_uid_key;d||(d=He(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function Si(a,b){var c=null;kd&&fe(b,S(a,"masked"))&&((c=pe("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),eg(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=S(a,"tip-mask")));return c}
function Qi(a){var b=pe("yt-uix-tooltip-shared-mask"),c=b&&Fe(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),fg(b),document.body.appendChild(b))}
;function Ui(){Ii.call(this,"subscription-button")}
x(Ui,Ii);ca(Ui);Ui.prototype.register=function(){Ki(this,"click",this.oc);Ji(this,ri,this.zc);Ji(this,si,this.yc);Ji(this,ti,this.ee);Ji(this,wi,this.zc);Ji(this,xi,this.yc);Ji(this,yi,this.je);Ji(this,Ai,this.Rd);Ji(this,Bi,this.Qd)};
var Ee={ec:"hover-enabled",$c:"yt-uix-button-subscribe",ad:"yt-uix-button-subscribed",Ue:"ypc-enabled",bd:"yt-uix-button-subscription-container",cd:"yt-subscription-button-disabled-mask-container"},Vi={Ve:"channel-external-id",ed:"subscriber-count-show-when-subscribed",fd:"subscriber-count-tooltip",gd:"subscriber-count-title",We:"href",fc:"is-subscribed",Ye:"parent-url",$e:"clicktracking",hd:"style-type",gc:"subscription-id",cf:"target",jd:"ypc-enabled"};g=Ui.prototype;
g.oc=function(a){var b=C(a,"href"),c=Di();if(b)a=C(a,"target")||"_self",window.open(b,a);else if(c){var b=C(a,"channel-external-id"),c=C(a,"clicktracking"),d;if(C(a,"ypc-enabled")){d=C(a,"ypc-item-type");var e=C(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=C(a,"parent-url");if(C(a,"is-subscribed")){var f=C(a,"subscription-id");Q(vi,new mi(b,f,d,a,c,e))}else Q(qi,new ki(b,d,c,e))}else Wi(this,a)};
g.zc=function(a){this.Pa(a.f,this.Pc,!0)};
g.yc=function(a){this.Pa(a.f,this.Pc,!1)};
g.ee=function(a){this.Pa(a.f,this.Qc,!0,a.subscriptionId)};
g.je=function(a){this.Pa(a.f,this.Qc,!1)};
g.Rd=function(a){this.Pa(a.f,this.qd)};
g.Qd=function(a){this.Pa(a.f,this.pd)};
g.Qc=function(a,b,c){b?(Mb(a,Vi.fc,"true"),c&&Mb(a,Vi.gc,c)):(Ob(a,Vi.fc),Ob(a,Vi.gc));Xi(a)};
g.Pc=function(a,b){var c;c=De(a);ie(c,Ee.cd,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Xi(a){var b=C(a,Vi.hd),c=!!C(a,"is-subscribed"),b="-"+b,d=Ee.ad+b;ie(a,Ee.$c+b,!c);ie(a,d,c);C(a,Vi.fd)&&!C(a,Vi.ed)&&(b=S(Mi.getInstance()),ie(a,b,!c),a.title=c?"":C(a,Vi.gd));c?H(function(){ge(a,Ee.ec)},1E3):he(a,Ee.ec)}
g.qd=function(a){var b=!!C(a,"ypc-item-type"),c=!!C(a,"ypc-item-id");!C(a,"ypc-enabled")&&b&&c&&(ge(a,"ypc-enabled"),Mb(a,Vi.jd,"true"))};
g.pd=function(a){C(a,"ypc-enabled")&&(he(a,"ypc-enabled"),Ob(a,"ypc-enabled"))};
function Yi(a,b){var c=re(S(a));return Ma(c,function(a){return b==C(a,"channel-external-id")},a)}
g.ld=function(a,b,c){var d=$a(arguments,2);y(a,function(a){b.apply(this,Wa(a,d))},this)};
g.Pa=function(a,b,c){var d=Yi(this,a),d=Wa([d],$a(arguments,1));this.ld.apply(this,d)};
function Wi(a,b){var c=v(function(a){a.discoverable_subscriptions&&ic("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.oc(b)},a);
Ci(c,"subscribe")}
;var Zi=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};p("yt.uix.widgets_",Zi,void 0);function $i(a,b){this.source=null;this.o=a||null;this.origin="*";this.B=window.document.location.protocol+"//"+window.document.location.hostname;this.l=b;this.j=this.f=this.h=this.sourceId=null;M(window,"message",v(this.A,this))}
$i.prototype.A=function(a){var b=this.l||G("POST_MESSAGE_ORIGIN",void 0)||this.B;if("*"!=b&&a.origin!=b)window.console&&window.console.warn("Untrusted origin: "+a.origin);else if(!this.o||a.source==this.o)if(this.source=a.source,this.origin="null"==a.origin?this.origin:a.origin,a=a.data,u(a)){try{a=sd(a)}catch(c){return}this.sourceId=a.id;switch(a.event){case "listening":this.f&&(this.f(),this.f=null);break;case "command":this.h&&(this.j&&!A(this.j,a.func)||this.h(a.func,a.args))}}};
$i.prototype.sendMessage=function(a){this.source&&(a.id=this.sourceId,a=L(a),this.source.postMessage(a,this.origin))};function aj(){}
;function bj(){}
x(bj,aj);bj.prototype.Y=function(){var a=0;Qc(this.ua(!0),function(){a++});
return a};
bj.prototype.clear=function(){var a=Rc(this.ua(!0)),b=this;y(a,function(a){b.remove(a)})};function cj(a){this.f=a}
x(cj,bj);g=cj.prototype;g.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
g.Bd=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.f.getItem(a);if(!u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.f.removeItem(a)};
g.Y=function(){return this.f.length};
g.ua=function(a){var b=0,c=this.f,d=new Oc;d.next=function(){if(b>=c.length)throw Nc;var d;d=c.key(b++);if(a)return d;d=c.getItem(d);if(!u(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.f.clear()};
g.key=function(a){return this.f.key(a)};function dj(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
x(dj,cj);function ej(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.f=a}
x(ej,cj);function fj(a){this.f=a}
fj.prototype.h=function(a,b){n(b)?this.f.Bd(a,L(b)):this.f.remove(a)};
fj.prototype.get=function(a){var b;try{b=this.f.get(a)}catch(c){return}if(null!==b)try{return sd(b)}catch(c){throw"Storage: Invalid value was encountered";}};
fj.prototype.remove=function(a){this.f.remove(a)};function gj(a){this.f=a}
x(gj,fj);function hj(a){this.data=a}
function ij(a){return!n(a)||a instanceof hj?a:new hj(a)}
gj.prototype.h=function(a,b){gj.I.h.call(this,a,ij(b))};
gj.prototype.j=function(a){a=gj.I.get.call(this,a);if(!n(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
gj.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,!n(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function jj(a){this.f=a}
x(jj,gj);function kj(a){var b=a.creation;a=a.expiration;return!!a&&a<w()||!!b&&b>w()}
jj.prototype.h=function(a,b,c){if(b=ij(b)){if(c){if(c<w()){jj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=w()}jj.I.h.call(this,a,b)};
jj.prototype.j=function(a,b){var c=jj.I.j.call(this,a);if(c)if(!b&&kj(c))jj.prototype.remove.call(this,a);else return c};function lj(a){this.f=a}
x(lj,jj);function mj(a,b){var c=[];Qc(b,function(a){var b;try{b=lj.prototype.j.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}n(b)?kj(b)&&c.push(a):c.push(a)},a);
return c}
function nj(a,b){var c=mj(a,b);y(c,function(a){lj.prototype.remove.call(this,a)},a)}
function oj(){var a=pj;nj(a,a.f.ua(!0))}
;function T(a,b,c){var d=c&&0<c?c:0;c=d?w()+1E3*d:0;if((d=d?pj:qj)&&window.JSON){u(b)||(b=JSON.stringify(b,void 0));try{d.h(a,b,c)}catch(e){d.remove(a)}}}
function U(a){if(!qj&&!pj||!window.JSON)return null;var b;try{b=qj.get(a)}catch(c){}if(!u(b))try{b=pj.get(a)}catch(c){}if(!u(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b}
function rj(a){qj&&qj.remove(a);pj&&pj.remove(a)}
var pj,sj=new dj;pj=sj.isAvailable()?new lj(sj):null;var qj,tj=new ej;qj=tj.isAvailable()?new lj(tj):null;function uj(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function vj(a,b,c){u(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=a;c=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);b.videoId=c&&c[2]?c[2]:null;return wj(a)}
function wj(a,b,c){if(ia(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function xj(a,b,c,d){if(ia(a)&&!ea(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};u(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function yj(a){var b=a.video_id||a.videoId;if(u(b)){var c=U("yt-player-two-stage-token")||{},d=U("yt-player-two-stage-token")||{};n(void 0)?d[b]=void 0:delete d[b];T("yt-player-two-stage-token",d,300);(b=c[b])&&(a.two_stage_token=b)}}
;var zj=document.currentScript&&-1!=document.currentScript.src.indexOf("?loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",Aj=0<window.location.hash.indexOf("__CastInternalExtensionIds__"),Bj=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm"],Cj=["hfaagokkkhdbgiakmmlclaapfelnkoah","fmfcbgogabcbclcofgocippekhfcmgfj","enhhojjnijigcajfphajepfemndkmdlo","eojlgccfgnjlphjnlopmadngcgmmdgpk"],Dj=["fjhoaacokmgbjemoflkofnenfaiekifl"],Ej=["ekpaaapppgpmolpcldedioblbkmijaca","lhkfccafpkdlaodkicmokbmfapjadkij",
"ibiljbkambkbohapfhoonkcpcikdglop","enhhojjnijigcajfphajepfemndkmdlo"],Fj=Aj?Bj.concat(Cj):Bj,Gj=Aj?Ej.concat(Dj):Dj,Hj=window.navigator.presentation?Fj.concat(Gj):Fj;function Ij(a){window.chrome?Jj(0,a):a(null)}
function Jj(a,b){a==Hj.length?b(null):Kj(Hj[a],function(c){c?b(Hj[a]):Jj(a+1,b)})}
function Kj(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET","chrome-extension://"+a+zj,!0),c.send()}catch(d){b(!1)}}
function Lj(a){var b=document.createElement("script");b.src=a;(document.head||document.documentElement).appendChild(b)}
function Mj(){var a=window.navigator.userAgent;return 0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")}
function Nj(){if(window.navigator.presentation&&Mj())Lj("//www.gstatic.com/eureka/clank"+zj);else{if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;if(a){a({command:"cast.sender.init"});return}}Ij(function(a){a?(window.chrome=window.chrome||{},window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=a,Lj("chrome-extension://"+a+zj)):(a=window.__onGCastApiAvailable)&&"function"==typeof a&&a(!1,"No cast extension found")})}}
;var Oj=w(),Pj=null,Qj=Array(50),Rj=-1,Sj=!1;function Tj(a){Uj();Pj.push(a);Vj(Pj)}
function Wj(a){var b=r("yt.mdx.remote.debug.handlers_");Ua(b||[],a)}
function Xj(a,b){Uj();var c=Pj,d=Yj(a,String(b));0==c.length?Zj(d):(Vj(c),y(c,function(a){a(d)}))}
function Uj(){Pj||(Pj=r("yt.mdx.remote.debug.handlers_")||[],p("yt.mdx.remote.debug.handlers_",Pj,void 0))}
function Zj(a){var b=(Rj+1)%50;Rj=b;Qj[b]=a;Sj||(Sj=49==b)}
function Vj(a){var b=Qj;if(b[0]){var c=Rj,d=Sj?c:-1;do{var d=(d+1)%50,e=b[d];y(a,function(a){a(e)})}while(d!=c);
Qj=Array(50);Rj=-1;Sj=!1}}
function Yj(a,b){var c=(w()-Oj)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function ak(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.f=a.uuid||a.dialId||""}
function bk(a,b){return!!b&&(a.id==b||a.f==b)}
function ck(a,b){return a||b?!a!=!b?!1:a.id==b.id:!0}
function dk(a,b){return a||b?!a!=!b?!1:a.id==b.id&&a.token==b.token&&a.name==b.name&&a.f==b.f:!0}
function ek(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.f}}
function fk(a){return new ak(a)}
function gk(a){return ea(a)?z(a,fk):[]}
function hk(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.f?".."+a.f.slice(-6):"-")+"}":"null"}
function ik(a){return ea(a)?"["+z(a,hk).join(",")+"]":"null"}
;var jk={Te:"atp",bf:"ska",Ze:"que",Xe:"mus",af:"sus"};function kk(a){this.o=this.j="";this.f="/api/lounge";this.h=!0;a=a||document.location.href;var b=Number(a.match(Ad)[4]||null)||null||"";b&&(this.o=":"+b);this.j=Bd(a)||"";a=vb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Ha(a,"10.0")&&(this.h=!1))}
function lk(a,b,c,d){var e=a.f;if(n(d)?d:a.h)e="https://"+a.j+a.o+a.f;return Jd(e+b,c||{})}
function mk(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,ca:qa(a.A,d,!0),onError:qa(a.l,e),xb:qa(a.B,e)};c&&(a.R=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return Sd(b,a)}
kk.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
kk.prototype.l=function(a,b){a(Error("Request error: "+b.status))};
kk.prototype.B=function(a){a(Error("request timed out"))};function nk(a){this.f=this.name=this.id="";this.status="UNKNOWN";a&&(this.id=a.id||"",this.name=a.name||"",this.f=a.activityId||"",this.status=a.status||"UNKNOWN")}
function ok(a){return{id:a.id,name:a.name,activityId:a.f,status:a.status}}
nk.prototype.toString=function(){return"{id:"+this.id+",name:"+this.name+",activityId:"+this.f+",status:"+this.status+"}"};
function pk(a){a=a||[];return"["+z(a,function(a){return a?a.toString():"null"}).join(",")+"]"}
;function qk(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function rk(a,b){return Pa(a,function(a){return a.key==b})}
function sk(a){return z(a,function(a){return{key:a.id,name:a.name}})}
function tk(a){return z(a,function(a){return ok(a)})}
function uk(a){return z(a,function(a){return new nk(a)})}
function vk(a,b){return a||b?a&&b?a.id==b.id&&a.name==b.name:!1:!0}
function wk(a,b){return Pa(a,function(a){return a.id==b})}
function xk(a,b){return Pa(a,function(a){return ck(a,b)})}
function yk(a,b){return Pa(a,function(a){return bk(a,b)})}
;function V(){D.call(this);this.o=new F;cc(this,qa(dc,this.o))}
x(V,D);V.prototype.subscribe=function(a,b,c){return this.isDisposed()?0:this.o.subscribe(a,b,c)};
V.prototype.unsubscribe=function(a,b,c){return this.isDisposed()?!1:this.o.unsubscribe(a,b,c)};
V.prototype.oa=function(a){return this.isDisposed()?!1:this.o.oa(a)};
V.prototype.D=function(a,b){return this.isDisposed()?!1:this.o.D.apply(this.o,arguments)};function zk(a){V.call(this);this.B=a;this.screens=[]}
x(zk,V);zk.prototype.$=function(){return this.screens};
zk.prototype.contains=function(a){return!!xk(this.screens,a)};
zk.prototype.get=function(a){return a?yk(this.screens,a):null};
function Ak(a,b){var c=a.get(b.f)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.f=b.f||c.f;return c.name!=d}a.screens.push(b);return!0}
function Bk(a,b){var c=a.screens.length!=b.length;a.screens=Ma(a.screens,function(a){return!!xk(b,a)});
for(var d=0,e=b.length;d<e;d++)c=Ak(a,b[d])||c;return c}
function Ck(a,b){var c=a.screens.length;a.screens=Ma(a.screens,function(a){return!ck(a,b)});
return a.screens.length<c}
zk.prototype.info=function(a){Xj(this.B,a)};function Dk(a,b,c,d){V.call(this);this.F=a;this.B=b;this.l=c;this.A=d;this.j=0;this.f=null;this.h=NaN}
x(Dk,V);var Ek=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=Dk.prototype;g.start=function(){!this.f&&isNaN(this.h)&&this.Jc()};
g.stop=function(){this.f&&(this.f.abort(),this.f=null);isNaN(this.h)||(I(this.h),this.h=NaN)};
g.G=function(){this.stop();Dk.I.G.call(this)};
g.Jc=function(){this.h=NaN;this.f=Sd(lk(this.F,"/pairing/get_screen"),{method:"POST",R:{pairing_code:this.B},timeout:5E3,ca:v(this.Ke,this),onError:v(this.Je,this),xb:v(this.Le,this)})};
g.Ke=function(a,b){this.f=null;var c=b.screen||{};c.dialId=this.l;c.name=this.A;this.D("pairingComplete",new ak(c))};
g.Je=function(a){this.f=null;a.status&&404==a.status?this.j>=Ek.length?this.D("pairingFailed",Error("DIAL polling timed out")):(a=Ek[this.j],this.h=H(v(this.Jc,this),a),this.j++):this.D("pairingFailed",Error("Server error "+a.status))};
g.Le=function(){this.f=null;this.D("pairingFailed",Error("Server not responding"))};function Fk(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.avatar=this.username="";this.capabilities=new bd;this.theme="u";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.theme=a.theme||"u",this.capabilities=new bd(Ma((a.capabilities||"").split(","),qa(gb,jk))))}
Fk.prototype.equals=function(a){return a?this.id==a.id:!1};var Gk;function Hk(){var a=Ik(),b=Jk();A(a,b);if(Kk()){var c=a,d;d=0;for(var e=c.length,f;d<e;){var h=d+e>>1,k;k=cb(b,c[h]);0<k?d=h+1:(e=h,f=!k)}d=f?d:~d;0>d&&Za(c,-(d+1),0,b)}a=Lk(a);if(0==a.length)try{a="remote_sid",We.remove(""+a,"/","youtube.com")}catch(l){}else try{Xe("remote_sid",a.join(","),-1)}catch(l){}}
function Ik(){var a=U("yt-remote-connected-devices")||[];a.sort(cb);return a}
function Lk(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return z(a,function(a,b){return 0==b?a:a.substring(c.length)})}
function Mk(a){T("yt-remote-connected-devices",a,86400)}
function Jk(){if(Nk)return Nk;var a=U("yt-remote-device-id");a||(a=qk(),T("yt-remote-device-id",a,31536E3));for(var b=Ik(),c=1,d=a;A(b,d);)c++,d=a+"#"+c;return Nk=d}
function Ok(){return U("yt-remote-session-browser-channel")}
function Kk(){return U("yt-remote-session-screen-id")}
function Pk(a){5<a.length&&(a=a.slice(a.length-5));var b=z(Qk(),function(a){return a.loungeToken}),c=z(a,function(a){return a.loungeToken});
Oa(c,function(a){return!A(b,a)})&&Rk();
T("yt-remote-local-screens",a,31536E3)}
function Qk(){return U("yt-remote-local-screens")||[]}
function Rk(){T("yt-remote-lounge-token-expiration",!0,86400)}
function Sk(){return!U("yt-remote-lounge-token-expiration")}
function Tk(a){T("yt-remote-online-screens",a,60)}
function Uk(){return U("yt-remote-online-screens")||[]}
function Vk(a){T("yt-remote-online-dial-devices",a,30)}
function Wk(){return U("yt-remote-online-dial-devices")||[]}
function Xk(a,b){T("yt-remote-session-browser-channel",a);T("yt-remote-session-screen-id",b);var c=Ik(),d=Jk();A(c,d)||c.push(d);Mk(c);Hk()}
function Yk(a){a||(rj("yt-remote-session-screen-id"),rj("yt-remote-session-video-id"));Hk();a=Ik();Ua(a,Jk());Mk(a)}
function Zk(){if(!Gk){var a;a=new dj;(a=a.isAvailable()?a:null)&&(Gk=new fj(a))}return Gk?!!Gk.get("yt-remote-use-staging-server"):!1}
var Nk="";function $k(a){zk.call(this,"LocalScreenService");this.h=a;this.f=NaN;al(this);this.info("Initializing with "+ik(this.screens))}
x($k,zk);g=$k.prototype;g.start=function(){al(this)&&this.D("screenChange");Sk()&&bl(this);I(this.f);this.f=H(v(this.start,this),1E4)};
g.Fb=function(a,b){al(this);Ak(this,a);cl(this,!1);this.D("screenChange");b(a);a.token||bl(this)};
g.remove=function(a,b){var c=al(this);Ck(this,a)&&(cl(this,!1),c=!0);b(a);c&&this.D("screenChange")};
g.Cb=function(a,b,c,d){var e=al(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,cl(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.D("screenChange")};
g.G=function(){I(this.f);$k.I.G.call(this)};
function bl(a){if(a.screens.length){var b=z(a.screens,function(a){return a.id}),c=lk(a.h,"/pairing/get_lounge_token_batch");
mk(a.h,c,{screen_ids:b.join(",")},v(a.Ed,a),v(a.Dd,a))}}
g.Ed=function(a){al(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}cl(this,!b);b&&Xj(this.B,"Missed "+b+" lounge tokens.")};
g.Dd=function(a){Xj(this.B,"Requesting lounge tokens failed: "+a)};
function al(a){var b=gk(Qk()),b=Ma(b,function(a){return!a.f});
return Bk(a,b)}
function cl(a,b){Pk(z(a.screens,ek));b&&Rk()}
;function dl(a,b){V.call(this);this.A=b;for(var c=U("yt-remote-online-screen-ids")||"",c=c?c.split(","):[],d={},e=this.A(),f=0,h=e.length;f<h;++f){var k=e[f].id;d[k]=A(c,k)}this.f=d;this.B=a;this.j=this.l=NaN;this.h=null;el("Initialized with "+L(this.f))}
x(dl,V);g=dl.prototype;g.start=function(){var a=parseInt(U("yt-remote-fast-check-period")||"0",10);(this.l=w()-144E5<a?0:a)?fl(this):(this.l=w()+3E5,T("yt-remote-fast-check-period",this.l),this.Xb())};
g.isEmpty=function(){return pb(this.f)};
g.update=function(){el("Updating availability on schedule.");var a=this.A(),b=eb(this.f,function(b,d){return b&&!!yk(a,d)},this);
gl(this,b)};
function hl(a,b,c){var d=lk(a.B,"/pairing/get_screen_availability");mk(a.B,d,{lounge_token:b.token},v(function(a){a=a.screens||[];for(var d=0,h=a.length;d<h;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),v(function(){c(!1)},a))}
g.G=function(){I(this.j);this.j=NaN;this.h&&(this.h.abort(),this.h=null);dl.I.G.call(this)};
function gl(a,b){var c;a:if(fb(b)!=fb(a.f))c=!1;else{c=kb(b);for(var d=0,e=c.length;d<e;++d)if(!a.f[c[d]]){c=!1;break a}c=!0}c||(el("Updated online screens: "+L(a.f)),a.f=b,a.D("screenChange"));il(a)}
function fl(a){isNaN(a.j)||I(a.j);a.j=H(v(a.Xb,a),0<a.l&&a.l<w()?2E4:1E4)}
g.Xb=function(){I(this.j);this.j=NaN;this.h&&this.h.abort();var a=jl(this);if(fb(a)){var b=lk(this.B,"/pairing/get_screen_availability"),c={lounge_token:kb(a).join(",")};this.h=mk(this.B,b,c,v(this.ce,this,a),v(this.be,this))}else gl(this,{}),fl(this)};
g.ce=function(a,b){this.h=null;var c=kb(jl(this));if(ab(c,kb(a))){for(var c=b.screens||[],d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;gl(this,d);fl(this)}else this.M("Changing Screen set during request."),this.Xb()};
g.be=function(a){this.M("Screen availability failed: "+a);this.h=null;fl(this)};
function el(a){Xj("OnlineScreenService",a)}
g.M=function(a){Xj("OnlineScreenService",a)};
function jl(a){var b={};y(a.A(),function(a){a.token?b[a.token]=a.id:this.M("Requesting availability of screen w/o lounge token.")});
return b}
function il(a){var b=kb(eb(a.f,function(a){return a}));
b.sort(cb);b.length?T("yt-remote-online-screen-ids",b.join(","),60):rj("yt-remote-online-screen-ids");a=Ma(a.A(),function(a){return!!this.f[a.id]},a);
Tk(z(a,ek))}
;function W(a){zk.call(this,"ScreenService");this.A=a;this.f=this.h=null;this.j=[];this.l={};kl(this)}
x(W,zk);g=W.prototype;g.start=function(){this.h.start();this.f.start();this.screens.length&&(this.D("screenChange"),this.f.isEmpty()||this.D("onlineScreenChange"))};
g.Fb=function(a,b,c){this.h.Fb(a,b,c)};
g.remove=function(a,b,c){this.h.remove(a,b,c);this.f.update()};
g.Cb=function(a,b,c,d){this.h.contains(a)?this.h.Cb(a,b,c,d):(a="Updating name of unknown screen: "+a.name,Xj(this.B,a),d(Error(a)))};
g.$=function(a){return a?this.screens:Wa(this.screens,Ma(this.j,function(a){return!this.contains(a)},this))};
g.Uc=function(){return Ma(this.$(!0),function(a){return!!this.f.f[a.id]},this)};
function ll(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.l[b]);var h=a.$();if(h=(c?yk(h,c):null)||yk(h,b)){h.f=b;var k=ml(a,h);hl(a.f,k,function(a){e(a?k:null)})}else c?nl(a,c,v(function(a){var f=ml(this,new ak({name:d,
screenId:c,loungeToken:a,dialId:b||""}));hl(this.f,f,function(a){e(a?f:null)})},a),f):e(null)}
g.Vc=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new Dk(this.A,a,b,c);f.subscribe("pairingComplete",v(function(a){dc(f);d(ml(this,a))},this));
f.subscribe("pairingFailed",function(a){dc(f);e(a)});
f.start();return v(f.stop,f)};
function ol(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];return null}
g.sc=function(a,b){for(var c=2,d=b(a,c);ol(this,d);){c++;if(20<c)return a;d=b(a,c)}return d};
g.Ne=function(a,b,c,d){Sd(lk(this.A,"/pairing/get_screen"),{method:"POST",R:{pairing_code:a},timeout:5E3,ca:v(function(a,d){var h=new ak(d.screen||{});if(!h.name||ol(this,h.name))h.name=this.sc(h.name,b);c(ml(this,h))},this),
onError:v(function(a){d(Error("pairing request failed: "+a.status))},this),
xb:v(function(){d(Error("pairing request timed out."))},this)})};
g.G=function(){dc(this.h);dc(this.f);W.I.G.call(this)};
function nl(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={R:{screen_ids:b},method:"POST",context:a,ca:function(a,e){var k=e&&e.screens||[];k[0]&&k[0].screenId==b?c(k[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
Sd(lk(a.A,"/pairing/get_lounge_token_batch"),e)}
function pl(a){a.screens=a.h.$();var b=a.l,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.f=c[e.id]||""}a.info("Updated manual screens: "+ik(a.screens))}
g.Fd=function(){pl(this);this.D("screenChange");this.f.update()};
function kl(a){ql(a);a.h=new $k(a.A);a.h.subscribe("screenChange",v(a.Fd,a));pl(a);a.j=gk(U("yt-remote-automatic-screen-cache")||[]);ql(a);a.info("Initializing automatic screens: "+ik(a.j));a.f=new dl(a.A,v(a.$,a,!0));a.f.subscribe("screenChange",v(function(){this.D("onlineScreenChange")},a))}
function ml(a,b){var c=a.get(b.id);c?(c.f=b.f,b=c):((c=yk(a.j,b.f))?(c.id=b.id,c.token=b.token,b=c):a.j.push(b),T("yt-remote-automatic-screen-cache",z(a.j,ek)));ql(a);a.l[b.f]=b.id;T("yt-remote-device-id-map",a.l,31536E3);return b}
function ql(a){a.l=U("yt-remote-device-id-map")||{}}
W.prototype.dispose=W.prototype.dispose;function rl(a,b,c){V.call(this);this.S=c;this.K=a;this.h=b;this.j=null}
x(rl,V);g=rl.prototype;g.wb=function(a){this.j=a;this.D("sessionScreen",this.j)};
g.aa=function(a){this.isDisposed()||(a&&sl(this,""+a),this.j=null,this.D("sessionScreen",null))};
g.info=function(a){Xj(this.S,a)};
function sl(a,b){Xj(a.S,b)}
g.Xc=function(){return null};
g.Zb=function(a){var b=this.h;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,v(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),v(function(){sl(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.G=function(){this.Zb("");rl.I.G.call(this)};function tl(a,b){rl.call(this,a,b,"CastSession");this.f=null;this.A=0;this.l=null;this.F=v(this.Oe,this);this.B=v(this.me,this);this.A=H(v(function(){ul(this,null)},this),12E4)}
x(tl,rl);g=tl.prototype;g.Yb=function(a){if(this.f){if(this.f==a)return;sl(this,"Overriding cast sesison with new session object");this.f.removeUpdateListener(this.F);this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.f=a;this.f.addUpdateListener(this.F);this.f.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);this.l&&vl(this);wl(this,"getMdxSessionStatus")};
g.Ta=function(a){this.info("launchWithParams: "+L(a));this.l=a;this.f&&vl(this)};
g.stop=function(){this.f?this.f.stop(v(function(){this.aa()},this),v(function(){this.aa(Error("Failed to stop receiver app."))},this)):this.aa(Error("Stopping cast device witout session."))};
g.Zb=t;g.G=function(){this.info("disposeInternal");I(this.A);this.A=0;this.f&&(this.f.removeUpdateListener(this.F),this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.f=null;tl.I.G.call(this)};
function vl(a){var b=a.l.videoId||a.l.videoIds[a.l.index];b&&wl(a,"flingVideo",{videoId:b,currentTime:a.l.currentTime||0});a.l=null}
function wl(a,b,c){a.info("sendYoutubeMessage_: "+b+" "+L(c));var d={};d.type=b;c&&(d.data=c);a.f?a.f.sendMessage("urn:x-cast:com.google.youtube.mdx",d,t,v(function(){sl(this,"Failed to send message: "+b+".")},a)):sl(a,"Sending yt message without session: "+L(d))}
g.me=function(a,b){if(!this.isDisposed())if(b){var c=td(b);if(c){var d=""+c.type,c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+L(c));switch(d){case "mdxSessionStatus":ul(this,c.screenId);break;default:sl(this,"Unknown youtube message: "+d)}}else sl(this,"Unable to parse message.")}else sl(this,"No data in message.")};
function ul(a,b){I(a.A);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.j||a.j.id!=b){var c=v(a.wb,a),d=v(a.aa,a);a.qc(b,c,d,5)}}else a.aa(Error("Waiting for session status timed out."))}
g.qc=function(a,b,c,d){ll(this.K,this.h.label,a,this.h.friendlyName,v(function(e){e?b(e):0<=d?(sl(this,"Screen "+a+" appears to be offline. "+d+" retries left."),H(v(this.qc,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.Xc=function(){return this.f};
g.Oe=function(a){this.isDisposed()||a||(sl(this,"Cast session died."),this.aa())};function xl(a,b){rl.call(this,a,b,"DialSession");this.A=this.J=null;this.O="";this.l=null;this.F=t;this.B=NaN;this.P=v(this.Re,this);this.f=t}
x(xl,rl);g=xl.prototype;g.Yb=function(a){this.A=a;this.A.addUpdateListener(this.P)};
g.Ta=function(a){this.l=a;this.F()};
g.stop=function(){this.f();this.f=t;I(this.B);this.A?this.A.stop(v(this.aa,this,null),v(this.aa,this,"Failed to stop DIAL device.")):this.aa()};
g.G=function(){this.f();this.f=t;I(this.B);this.A&&this.A.removeUpdateListener(this.P);this.A=null;xl.I.G.call(this)};
function yl(a){a.f=a.K.Vc(a.O,a.h.label,a.h.friendlyName,v(function(a){this.f=t;this.wb(a)},a),v(function(a){this.f=t;
this.aa(a)},a))}
g.Re=function(a){this.isDisposed()||a||(sl(this,"DIAL session died."),this.f(),this.f=t,this.aa())};
function zl(a){var b={};b.pairingCode=a.O;if(a.l){var c=a.l.index||0,d=a.l.currentTime||0;b.v=a.l.videoId||a.l.videoIds[c];b.t=d}Zk()&&(b.env_useStageMdx=1);return Hd(b)}
g.Tb=function(a){this.O=qk();if(this.l){var b=new chrome.cast.DialLaunchResponse(!0,zl(this));a(b);yl(this)}else this.F=v(function(){I(this.B);this.F=t;this.B=NaN;var b=new chrome.cast.DialLaunchResponse(!0,zl(this));a(b);yl(this)},this),this.B=H(v(function(){this.F()},this),100)};
g.Gd=function(a,b){ll(this.K,this.J.receiver.label,a,this.h.friendlyName,v(function(a){a&&a.token?(this.wb(a),b(new chrome.cast.DialLaunchResponse(!1))):this.Tb(b)},this),v(function(a){sl(this,"Failed to get DIAL screen: "+a);
this.Tb(b)},this))};function Al(a,b){rl.call(this,a,b,"ManualSession");this.f=H(v(this.Ta,this,null),150)}
x(Al,rl);Al.prototype.stop=function(){this.aa()};
Al.prototype.Yb=t;Al.prototype.Ta=function(){I(this.f);this.f=NaN;var a=yk(this.K.$(),this.h.label);a?this.wb(a):this.aa(Error("No such screen"))};
Al.prototype.G=function(){I(this.f);this.f=NaN;Al.I.G.call(this)};function Bl(a){V.call(this);this.h=a;this.f=null;this.A=!1;this.j=[];this.l=v(this.$d,this)}
x(Bl,V);g=Bl.prototype;
g.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest("233637DE");c.dialRequest=new chrome.cast.DialRequest("YouTube");var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,c=new chrome.cast.ApiConfig(c,v(this.Dc,this),v(this.ae,this),d,e);c.customDialLaunchCallback=v(this.Pd,this);chrome.cast.initialize(c,v(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.l),
Tj(Cl),this.h.subscribe("onlineScreenChange",v(this.Wc,this)),this.j=Dl(this),chrome.cast.setCustomReceivers(this.j,t,v(function(a){this.M("Failed to set initial custom receivers: "+L(a))},this)),this.D("yt-remote-cast2-availability-change",El(this)),b(!0))},this),v(function(a){this.M("Failed to initialize API: "+L(a));
b(!1)},this))};
g.ze=function(a,b){Fl("Setting connected screen ID: "+a+" -> "+b);if(this.f){var c=this.f.j;if(!a||c&&c.id!=a)Fl("Unsetting old screen status: "+this.f.h.friendlyName),dc(this.f),this.f=null}if(a&&b){if(!this.f){c=yk(this.h.$(),a);if(!c){Fl("setConnectedScreenStatus: Unknown screen.");return}var d=Gl(this,c);d||(Fl("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.f?c.f:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.j.push(d),chrome.cast.setCustomReceivers(this.j,
t,v(function(a){this.M("Failed to set initial custom receivers: "+L(a))},this)));
Fl("setConnectedScreenStatus: new active receiver: "+d.friendlyName);Hl(this,new Al(this.h,d),!0)}this.f.Zb(b)}else Fl("setConnectedScreenStatus: no screen.")};
function Gl(a,b){return b?Pa(a.j,function(a){return bk(b,a.label)},a):null}
g.Ae=function(a){this.isDisposed()?this.M("Setting connection data on disposed cast v2"):this.f?this.f.Ta(a):this.M("Setting connection data without a session")};
g.Qe=function(){this.isDisposed()?this.M("Stopping session on disposed cast v2"):this.f?(this.f.stop(),dc(this.f),this.f=null):Fl("Stopping non-existing session")};
g.requestSession=function(){chrome.cast.requestSession(v(this.Dc,this),v(this.de,this))};
g.G=function(){this.h.unsubscribe("onlineScreenChange",v(this.Wc,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.l);Wj(Cl);dc(this.f);Bl.I.G.call(this)};
function Fl(a){Xj("Controller",a)}
g.M=function(a){Xj("Controller",a)};
function Cl(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function El(a){return a.A||!!a.j.length||!!a.f}
function Hl(a,b,c){dc(a.f);(a.f=b)?(c?a.D("yt-remote-cast2-receiver-resumed",b.h):a.D("yt-remote-cast2-receiver-selected",b.h),b.subscribe("sessionScreen",v(a.Ec,a,b)),b.j?a.D("yt-remote-cast2-session-change",b.j):c&&a.f.Ta(null)):a.D("yt-remote-cast2-session-change",null)}
g.Ec=function(a,b){this.f==a&&(b||Hl(this,null),this.D("yt-remote-cast2-session-change",b))};
g.$d=function(a,b){if(!this.isDisposed())if(a)switch(Fl("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.f)if(this.f.h.label!=a.label)Fl("onReceiverAction_: Stopping active receiver: "+this.f.h.friendlyName),this.f.stop();else{Fl("onReceiverAction_: Casting to active receiver.");this.f.j&&this.D("yt-remote-cast2-session-change",this.f.j);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:Hl(this,new Al(this.h,a));break;case chrome.cast.ReceiverType.DIAL:Hl(this,
new xl(this.h,a));break;case chrome.cast.ReceiverType.CAST:Hl(this,new tl(this.h,a));break;default:this.M("Unknown receiver type: "+a.receiverType);return}break;case chrome.cast.ReceiverAction.STOP:this.f&&this.f.h.label==a.label?this.f.stop():this.M("Stopping receiver w/o session: "+a.friendlyName)}else this.M("onReceiverAction_ called without receiver.")};
g.Pd=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.M("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.f?this.f.h:null;if(!c||c.label!=b.label)return this.M("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.f.j)return Fl("Reselecting dial screen."),
this.D("yt-remote-cast2-session-change",this.f.j),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.M('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);Hl(this,new xl(this.h,b))}b=this.f;b.J=a;return b.J.appState==chrome.cast.DialAppState.RUNNING?new Promise(v(b.Gd,b,(b.J.extraData||{}).screenId||null)):new Promise(v(b.Tb,b))};
g.Dc=function(a){if(!this.isDisposed()){Fl("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.f)if(b.receiverType==chrome.cast.ReceiverType.CAST)Fl("Got resumed cast session before resumed mdx connection."),Hl(this,new tl(this.h,b),!0);else{this.M("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.f.h,d=yk(this.h.$(),c.label);d&&bk(d,b.label)&&c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==
chrome.cast.ReceiverType.CAST&&(Fl("onSessionEstablished_: manual to cast session change "+b.friendlyName),dc(this.f),this.f=new tl(this.h,b),this.f.subscribe("sessionScreen",v(this.Ec,this,this.f)),this.f.Ta(null));this.f.Yb(a)}}};
g.Pe=function(){return this.f?this.f.Xc():null};
g.de=function(a){this.isDisposed()||(this.M("Failed to estabilish a session: "+L(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&Hl(this,null))};
g.ae=function(a){Fl("Receiver availability updated: "+a);if(!this.isDisposed()){var b=El(this);this.A=a==chrome.cast.ReceiverAvailability.AVAILABLE;El(this)!=b&&this.D("yt-remote-cast2-availability-change",El(this))}};
function Dl(a){var b=a.h.Uc(),c=a.f&&a.f.h;a=z(b,function(a){c&&bk(a,c.label)&&(c=null);var b=a.f?a.f:a.id,f=Gl(this,a);f?(f.label=b,f.friendlyName=a.name):(f=new chrome.cast.Receiver(b,a.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
g.Wc=function(){if(!this.isDisposed()){var a=El(this);this.j=Dl(this);Fl("Updating custom receivers: "+L(this.j));chrome.cast.setCustomReceivers(this.j,t,v(function(){this.M("Failed to set custom receivers.")},this));
var b=El(this);b!=a&&this.D("yt-remote-cast2-availability-change",b)}};
Bl.prototype.setLaunchParams=Bl.prototype.Ae;Bl.prototype.setConnectedScreenStatus=Bl.prototype.ze;Bl.prototype.stopSession=Bl.prototype.Qe;Bl.prototype.getCastSession=Bl.prototype.Pe;Bl.prototype.requestSession=Bl.prototype.requestSession;Bl.prototype.init=Bl.prototype.init;Bl.prototype.dispose=Bl.prototype.dispose;function Il(a,b,c){Jl()?Ll(a)&&(Ml(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Nl(b):(window.__onGCastApiAvailable=function(a,c){a?Nl(b):(Ol("Failed to load cast API: "+c),Pl(!1),Ml(!1),rj("yt-remote-cast-available"),rj("yt-remote-cast-receiver"),Ql(),b(!1))},c?Ac("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):Nj())):Kl("Cannot initialize because not running Chrome")}
function Ql(){Kl("dispose");var a=Rl();a&&a.dispose();Sl=null;p("yt.mdx.remote.cloudview.instance_",null,void 0);Tl(!1);wc(Ul);Ul.length=0}
function Vl(){return!!U("yt-remote-cast-installed")}
function Wl(){var a=U("yt-remote-cast-receiver");return a?Ba(a.friendlyName):null}
function Xl(){Kl("clearCurrentReciever");rj("yt-remote-cast-receiver")}
function Yl(){Vl()?Rl()?Zl()?(Kl("Requesting cast selector."),Sl.requestSession()):(Kl("Wait for cast API to be ready to request the session."),Ul.push(uc("yt-remote-cast2-api-ready",Yl))):Ol("requestCastSelector: Cast is not initialized."):Ol("requestCastSelector: Cast API is not installed!")}
function $l(a){Zl()?Rl().setLaunchParams(a):Ol("setLaunchParams called before ready.")}
function am(a,b){Zl()?Rl().setConnectedScreenStatus(a,b):Ol("setConnectedScreenStatus called before ready.")}
var Sl=null;function Jl(){var a;a=0<=vb.search(/\ (CrMo|Chrome|CriOS)\//);return Wf||a}
function bm(a){Sl.init(!0,a)}
function Ll(a){var b=!1;if(!Sl){var c=r("yt.mdx.remote.cloudview.instance_");c||(c=new Bl(a),c.subscribe("yt-remote-cast2-availability-change",function(a){T("yt-remote-cast-available",a);J("yt-remote-cast2-availability-change",a)}),c.subscribe("yt-remote-cast2-receiver-selected",function(a){Kl("onReceiverSelected: "+a.friendlyName);
T("yt-remote-cast-receiver",a);J("yt-remote-cast2-receiver-selected",a)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(a){Kl("onReceiverResumed: "+a.friendlyName);
T("yt-remote-cast-receiver",a)}),c.subscribe("yt-remote-cast2-session-change",function(a){Kl("onSessionChange: "+hk(a));
a||rj("yt-remote-cast-receiver");J("yt-remote-cast2-session-change",a)}),p("yt.mdx.remote.cloudview.instance_",c,void 0),b=!0);
Sl=c}Kl("cloudview.createSingleton_: "+b);return b}
function Rl(){Sl||(Sl=r("yt.mdx.remote.cloudview.instance_"));return Sl}
function Nl(a){Pl(!0);Ml(!1);bm(function(b){b?(Tl(!0),J("yt-remote-cast2-api-ready")):(Ol("Failed to initialize cast API."),Pl(!1),rj("yt-remote-cast-available"),rj("yt-remote-cast-receiver"),Ql());a(b)})}
function Kl(a){Xj("cloudview",a)}
function Ol(a){Xj("cloudview",a)}
function Pl(a){Kl("setCastInstalled_ "+a);T("yt-remote-cast-installed",a)}
function Zl(){return!!r("yt.mdx.remote.cloudview.apiReady_")}
function Tl(a){Kl("setApiReady_ "+a);p("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function Ml(a){p("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var Ul=[];function cm(){if(!("cast"in window))return!1;var a=window.cast||{};return"ActivityStatus"in a&&"Api"in a&&"LaunchRequest"in a&&"Receiver"in a}
function dm(a){Xj("CAST",a)}
function em(a){var b=fm();b&&b.logMessage&&b.logMessage(a)}
function gm(a){if(a.event.source==window&&a.event.data&&"CastApi"==a.event.data.source&&"Hello"==a.event.data.event)for(;hm.length;)hm.shift()()}
function im(){if(!r("yt.mdx.remote.castv2_")&&!jm&&(0==Sa.length&&Ya(Sa,Wk()),cm())){var a=fm();a?(a.removeReceiverListener("YouTube",km),a.addReceiverListener("YouTube",km),dm("API initialized in the other binary")):(a=new cast.Api,lm(a),a.addReceiverListener("YouTube",km),a.setReloadTabRequestHandler&&a.setReloadTabRequestHandler(function(){H(function(){window.location.reload(!0)},1E3)}),Tj(em),dm("API initialized"));
jm=!0}}
function mm(){var a=fm();a&&(dm("API disposed"),Wj(em),a.setReloadTabRequestHandler&&a.setReloadTabRequestHandler(t),a.removeReceiverListener("YouTube",km),lm(null));jm=!1;hm=null;(a=Ne(window,"message",gm,!1))&&Oe(a)}
function nm(a){var b=Qa(Sa,function(b){return b.id==a.id});
0<=b&&(Sa[b]=ok(a))}
function km(a){a.length&&dm("Updating receivers: "+L(a));om(a);J("yt-remote-cast-device-list-update");y(pm(),function(a){qm(a.id)});
y(a,function(a){if(a.isTabProjected){var c=rm(a.id);dm("Detected device: "+c.id+" is tab projected. Firing DEVICE_TAB_PROJECTED event.");H(function(){J("yt-remote-cast-device-tab-projected",c.id)},1E3)}})}
function sm(a,b){dm("Updating "+a+" activity status: "+L(b));var c=rm(a);c?(b.activityId&&(c.f=b.activityId),c.status="running"==b.status?"RUNNING":"stopped"==b.status?"STOPPED":"error"==b.status?"ERROR":"UNKNOWN","RUNNING"!=c.status&&(c.f=""),nm(c),J("yt-remote-cast-device-status-update",c)):dm("Device not found")}
function pm(){im();return uk(Sa)}
function om(a){a=z(a,function(a){var c={id:a.id,name:Ba(a.name)};if(a=rm(a.id))c.activityId=a.f,c.status=a.status;return c});
Ra();Ya(Sa,a)}
function rm(a){var b=pm();return Pa(b,function(b){return b.id==a})||null}
function qm(a){var b=rm(a),c=fm();c&&b&&b.f&&c.getActivityStatus(b.f,function(b){"error"==b.status&&(b.status="stopped");sm(a,b)})}
function tm(a){im();var b=rm(a),c=fm();c&&b&&b.f?(dm("Stopping cast activity"),c.stopActivity(b.f,qa(sm,a))):dm("Dropping cast activity stop")}
function fm(){return r("yt.mdx.remote.castapi.api_")}
function lm(a){p("yt.mdx.remote.castapi.api_",a,void 0)}
var jm=!1,hm=null,Sa=r("yt.mdx.remote.castapi.devices_")||[];p("yt.mdx.remote.castapi.devices_",Sa,void 0);function um(a,b){this.action=a;this.params=b||null}
;function vm(){}
;function wm(){this.f=w()}
new wm;wm.prototype.reset=function(){this.f=w()};
wm.prototype.get=function(){return this.f};function xm(){D.call(this);this.Ba=new nf(this);this.ya=this;this.ha=null}
x(xm,D);xm.prototype[jf]=!0;g=xm.prototype;g.addEventListener=function(a,b,c,d){vf(this,a,b,c,d)};
g.removeEventListener=function(a,b,c,d){Bf(this,a,b,c,d)};
function ym(a,b){var c,d=a.ha;if(d){c=[];for(var e=1;d;d=d.ha)c.push(d),++e}var d=a.ya,e=b,f=e.type||e;if(u(e))e=new gf(e,d);else if(e instanceof gf)e.target=e.target||d;else{var h=e,e=new gf(f,d);ub(e,h)}var h=!0,k;if(c)for(var l=c.length-1;0<=l;l--)k=e.currentTarget=c[l],h=zm(k,f,!0,e)&&h;k=e.currentTarget=d;h=zm(k,f,!0,e)&&h;h=zm(k,f,!1,e)&&h;if(c)for(l=0;l<c.length;l++)k=e.currentTarget=c[l],h=zm(k,f,!1,e)&&h}
g.G=function(){xm.I.G.call(this);this.removeAllListeners();this.ha=null};
g.ub=function(a,b,c,d){return of(this.Ba,String(a),b,c,d)};
g.$b=function(a,b,c,d){return this.Ba.remove(String(a),b,c,d)};
g.removeAllListeners=function(a){return this.Ba?this.Ba.removeAll(a):0};
function zm(a,b,c,d){b=a.Ba.f[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.Va&&h.pb==c){var k=h.listener,l=h.tb||h.src;h.ob&&qf(a.Ba,h);e=!1!==k.call(l,d)&&e}}return e&&0!=d.Nc}
;function Am(a,b){this.h=new vd(a);this.f=b?td:sd}
Am.prototype.stringify=function(a){return ud(this.h,a)};
Am.prototype.parse=function(a){return this.f(a)};function Bm(a,b){xm.call(this);this.f=a||1;this.h=b||m;this.j=v(this.Ce,this);this.o=w()}
x(Bm,xm);g=Bm.prototype;g.enabled=!1;g.ea=null;function Cm(a,b){a.f=b;a.ea&&a.enabled?(a.stop(),a.start()):a.ea&&a.stop()}
g.Ce=function(){if(this.enabled){var a=w()-this.o;0<a&&a<.8*this.f?this.ea=this.h.setTimeout(this.j,this.f-a):(this.ea&&(this.h.clearTimeout(this.ea),this.ea=null),ym(this,"tick"),this.enabled&&(this.ea=this.h.setTimeout(this.j,this.f),this.o=w()))}};
g.start=function(){this.enabled=!0;this.ea||(this.ea=this.h.setTimeout(this.j,this.f),this.o=w())};
g.stop=function(){this.enabled=!1;this.ea&&(this.h.clearTimeout(this.ea),this.ea=null)};
g.G=function(){Bm.I.G.call(this);this.stop();delete this.h};
function Dm(a,b,c){if(ha(a))c&&(a=v(a,c));else if(a&&"function"==typeof a.handleEvent)a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:m.setTimeout(a,b||0)}
;function Em(a,b,c){D.call(this);this.o=null!=c?v(a,c):a;this.j=b;this.h=v(this.fe,this);this.f=[]}
x(Em,D);g=Em.prototype;g.Bb=!1;g.Ra=null;g.ud=function(a){this.f=arguments;this.Ra?this.Bb=!0:Fm(this)};
g.stop=function(){this.Ra&&(m.clearTimeout(this.Ra),this.Ra=null,this.Bb=!1,this.f=[])};
g.G=function(){Em.I.G.call(this);this.stop()};
g.fe=function(){this.Ra=null;this.Bb&&(this.Bb=!1,Fm(this))};
function Fm(a){a.Ra=Dm(a.h,a.j);a.o.apply(null,a.f)}
;function Gm(a){D.call(this);this.h=a;this.f={}}
x(Gm,D);var Hm=[];g=Gm.prototype;g.ub=function(a,b,c,d){ea(b)||(b&&(Hm[0]=b.toString()),b=Hm);for(var e=0;e<b.length;e++){var f=vf(a,b[e],c||this.handleEvent,d||!1,this.h||this);if(!f)break;this.f[f.key]=f}return this};
g.$b=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)this.$b(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.h||this,c=wf(c),d=!!d,b=a&&a[jf]?rf(a.Ba,String(b),c,d,e):a?(a=xf(a))?rf(a,b,c,d,e):null:null,b&&(Cf(b),delete this.f[b.key]);return this};
g.removeAll=function(){db(this.f,function(a,b){this.f.hasOwnProperty(b)&&Cf(a)},this);
this.f={}};
g.G=function(){Gm.I.G.call(this);this.removeAll()};
g.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Im(){}
Im.prototype.f=null;function Jm(a){var b;(b=a.f)||(b={},Km(a)&&(b[0]=!0,b[1]=!0),b=a.f=b);return b}
;var Lm;function Mm(){}
x(Mm,Im);function Nm(a){return(a=Km(a))?new ActiveXObject(a):new XMLHttpRequest}
function Km(a){if(!a.h&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.h=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.h}
Lm=new Mm;function Om(a,b,c,d,e){this.f=a;this.j=c;this.F=d;this.B=e||1;this.l=45E3;this.o=new Gm(this);this.h=new Bm;Cm(this.h,250)}
g=Om.prototype;g.Ia=null;g.ma=!1;g.Xa=null;g.bc=null;g.ib=null;g.Wa=null;g.za=null;g.Da=null;g.Ka=null;g.N=null;g.kb=0;g.na=null;g.Eb=null;g.Ja=null;g.eb=-1;g.Oc=!0;g.Fa=!1;g.Rb=0;g.zb=null;var Pm={},Qm={};g=Om.prototype;g.setTimeout=function(a){this.l=a};
function Rm(a,b,c){a.Wa=1;a.za=Vg(b.clone());a.Ka=c;a.A=!0;Sm(a,null)}
function Tm(a,b,c,d,e){a.Wa=1;a.za=Vg(b.clone());a.Ka=null;a.A=c;e&&(a.Oc=!1);Sm(a,d)}
function Sm(a,b){a.ib=w();Um(a);a.Da=a.za.clone();Tg(a.Da,"t",a.B);a.kb=0;a.N=a.f.Kb(a.f.jb()?b:null);0<a.Rb&&(a.zb=new Em(v(a.Tc,a,a.N),a.Rb));a.o.ub(a.N,"readystatechange",a.oe);var c=a.Ia?rb(a.Ia):{};a.Ka?(a.Eb="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.N.send(a.Da,a.Eb,a.Ka,c)):(a.Eb="GET",a.Oc&&!id&&(c.Connection="close"),a.N.send(a.Da,a.Eb,null,c));a.f.la(1)}
g.oe=function(a){a=a.target;var b=this.zb;b&&3==Vm(a)?b.ud():this.Tc(a)};
g.Tc=function(a){try{if(a==this.N)a:{var b=Vm(this.N),c=this.N.o,d=this.N.getStatus();if(K&&!(10<=rd)||id&&!pd("420+")){if(4>b)break a}else if(3>b||3==b&&!fd&&!Wm(this.N))break a;this.Fa||4!=b||7==c||(8==c||0>=d?this.f.la(3):this.f.la(2));Xm(this);var e=this.N.getStatus();this.eb=e;var f=Wm(this.N);(this.ma=200==e)?(4==b&&Ym(this),this.A?(Zm(this,b,f),fd&&this.ma&&3==b&&(this.o.ub(this.h,"tick",this.ne),this.h.start())):$m(this,f),this.ma&&!this.Fa&&(4==b?this.f.vb(this):(this.ma=!1,Um(this)))):(this.Ja=
400==e&&0<f.indexOf("Unknown SID")?3:0,X(),Ym(this),an(this))}}catch(h){this.N&&Wm(this.N)}finally{}};
function Zm(a,b,c){for(var d=!0;!a.Fa&&a.kb<c.length;){var e=bn(a,c);if(e==Qm){4==b&&(a.Ja=4,X(),d=!1);break}else if(e==Pm){a.Ja=4;X();d=!1;break}else $m(a,e)}4==b&&0==c.length&&(a.Ja=1,X(),d=!1);a.ma=a.ma&&d;d||(Ym(a),an(a))}
g.ne=function(){var a=Vm(this.N),b=Wm(this.N);this.kb<b.length&&(Xm(this),Zm(this,a,b),this.ma&&4!=a&&Um(this))};
function bn(a,b){var c=a.kb,d=b.indexOf("\n",c);if(-1==d)return Qm;c=Number(b.substring(c,d));if(isNaN(c))return Pm;d+=1;if(d+c>b.length)return Qm;var e=b.substr(d,c);a.kb=d+c;return e}
function cn(a,b){a.ib=w();Um(a);var c=b?window.location.hostname:"";a.Da=a.za.clone();N(a.Da,"DOMAIN",c);N(a.Da,"t",a.B);try{a.na=new ActiveXObject("htmlfile")}catch(q){Ym(a);a.Ja=7;X();an(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)e=e+"\\x3c";else if(">"==h)e=e+"\\x3e";else{if(h in Ga)h=Ga[h];else if(h in Fa)h=Ga[h]=Fa[h];else{var k=h,l=h.charCodeAt(0);if(31<l&&127>l)k=h;else{if(256>l){if(k="\\x",16>l||256<l)k+="0"}else k="\\u",4096>l&&(k+="0");
k+=l.toString(16).toUpperCase()}h=Ga[h]=k}e+=h}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=Mc(Bb("b/12014412"),d);a.na.open();a.na.write(Jb(c));a.na.close();a.na.parentWindow.m=v(a.ie,a);a.na.parentWindow.d=v(a.Hc,a,!0);a.na.parentWindow.rpcClose=v(a.Hc,a,!1);c=a.na.createElement("DIV");a.na.parentWindow.document.body.appendChild(c);d=Gb(a.Da.toString());d=Eb(d);Aa.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(ua,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(va,"&lt;")),-1!=
d.indexOf(">")&&(d=d.replace(wa,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(xa,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(ya,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(za,"&#0;")));d=Mc(Bb("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=Jb(d);a.f.la(1)}
g.ie=function(a){dn(v(this.he,this,a),0)};
g.he=function(a){this.Fa||(Xm(this),$m(this,a),Um(this))};
g.Hc=function(a){dn(v(this.ge,this,a),0)};
g.ge=function(a){this.Fa||(Ym(this),this.ma=a,this.f.vb(this),this.f.la(4))};
g.cancel=function(){this.Fa=!0;Ym(this)};
function Um(a){a.bc=w()+a.l;en(a,a.l)}
function en(a,b){if(null!=a.Xa)throw Error("WatchDog timer not null");a.Xa=dn(v(a.ke,a),b)}
function Xm(a){a.Xa&&(m.clearTimeout(a.Xa),a.Xa=null)}
g.ke=function(){this.Xa=null;var a=w();0<=a-this.bc?(2!=this.Wa&&this.f.la(3),Ym(this),this.Ja=2,X(),an(this)):en(this,this.bc-a)};
function an(a){a.f.uc()||a.Fa||a.f.vb(a)}
function Ym(a){Xm(a);dc(a.zb);a.zb=null;a.h.stop();a.o.removeAll();if(a.N){var b=a.N;a.N=null;fn(b);b.dispose()}a.na&&(a.na=null)}
function $m(a,b){try{a.f.Cc(a,b),a.f.la(4)}catch(c){}}
;function gn(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;hn(a,b,function(e){e?c(!0):m.setTimeout(function(){gn(a,b,c,d,f)},f)})}}
function hn(a,b,c){var d=new Image;d.onload=function(){try{jn(d),c(!0)}catch(a){}};
d.onerror=function(){try{jn(d),c(!1)}catch(a){}};
d.onabort=function(){try{jn(d),c(!1)}catch(a){}};
d.ontimeout=function(){try{jn(d),c(!1)}catch(a){}};
m.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a}
function jn(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function kn(a){this.f=a;this.h=new Am(null,!0)}
g=kn.prototype;g.Pb=null;g.da=null;g.Ab=!1;g.Rc=null;g.qb=null;g.Ub=null;g.Qb=null;g.fa=null;g.xa=-1;g.cb=null;g.Ya=null;g.connect=function(a){this.Qb=a;a=ln(this.f,null,this.Qb);X();this.Rc=w();var b=this.f.F;null!=b?(this.cb=b[0],(this.Ya=b[1])?(this.fa=1,mn(this)):(this.fa=2,nn(this))):(Tg(a,"MODE","init"),this.da=new Om(this,0,void 0,void 0,void 0),this.da.Ia=this.Pb,Tm(this.da,a,!1,null,!0),this.fa=0)};
function mn(a){var b=ln(a.f,a.Ya,"/mail/images/cleardot.gif");Vg(b);gn(b.toString(),5E3,v(a.od,a),3,2E3);a.la(1)}
g.od=function(a){if(a)this.fa=2,nn(this);else{X();var b=this.f;b.ia=b.Aa.xa;on(b,9)}a&&this.la(2)};
function nn(a){var b=a.f.W;if(null!=b)X(),b?(X(),pn(a.f,a,!1)):(X(),pn(a.f,a,!0));else if(a.da=new Om(a,0,void 0,void 0,void 0),a.da.Ia=a.Pb,b=a.f,b=ln(b,b.jb()?a.cb:null,a.Qb),X(),!K||10<=rd)Tg(b,"TYPE","xmlhttp"),Tm(a.da,b,!1,a.cb,!1);else{Tg(b,"TYPE","html");var c=a.da;a=Boolean(a.cb);c.Wa=3;c.za=Vg(b.clone());cn(c,a)}}
g.Kb=function(a){return this.f.Kb(a)};
g.uc=function(){return!1};
g.Cc=function(a,b){this.xa=a.eb;if(0==this.fa)if(b){try{var c=this.h.parse(b)}catch(d){c=this.f;c.ia=this.xa;on(c,2);return}this.cb=c[0];this.Ya=c[1]}else c=this.f,c.ia=this.xa,on(c,2);else if(2==this.fa)if(this.Ab)X(),this.Ub=w();else if("11111"==b){if(X(),this.Ab=!0,this.qb=w(),c=this.qb-this.Rc,!K||10<=rd||500>c)this.xa=200,this.da.cancel(),X(),pn(this.f,this,!0)}else X(),this.qb=this.Ub=w(),this.Ab=!1};
g.vb=function(){this.xa=this.da.eb;if(this.da.ma)0==this.fa?this.Ya?(this.fa=1,mn(this)):(this.fa=2,nn(this)):2==this.fa&&(a=!1,(a=!K||10<=rd?this.Ab:200>this.Ub-this.qb?!1:!0)?(X(),pn(this.f,this,!0)):(X(),pn(this.f,this,!1)));else{0==this.fa?X():2==this.fa&&X();var a=this.f;a.ia=this.xa;on(a,2)}};
g.jb=function(){return this.f.jb()};
g.isActive=function(){return this.f.isActive()};
g.la=function(a){this.f.la(a)};function qn(a){xm.call(this);this.headers=new Sc;this.P=a||null;this.h=!1;this.O=this.f=null;this.qa=this.F="";this.o=0;this.l="";this.j=this.Z=this.B=this.S=!1;this.A=0;this.J=null;this.sa="";this.K=this.ta=!1}
x(qn,xm);var rn=/^https?$/i,sn=["POST","PUT"];g=qn.prototype;
g.send=function(a,b,c,d){if(this.f)throw Error("[goog.net.XhrIo] Object is active with another request="+this.F+"; newUri="+a);b=b?b.toUpperCase():"GET";this.F=a;this.l="";this.o=0;this.qa=b;this.S=!1;this.h=!0;this.f=this.P?Nm(this.P):Nm(Lm);this.O=this.P?Jm(this.P):Jm(Lm);this.f.onreadystatechange=v(this.Bc,this);try{vm(tn(this,"Opening Xhr")),this.Z=!0,this.f.open(b,String(a),!0),this.Z=!1}catch(f){vm(tn(this,"Error opening Xhr: "+f.message));un(this,f);return}a=c||"";var e=this.headers.clone();
d&&$c(d,function(a,b){Tc(e,b,a)});
d=Pa(e.ra(),vn);c=m.FormData&&a instanceof m.FormData;!A(sn,b)||d||c||Tc(e,"Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.f.setRequestHeader(b,a)},this);
this.sa&&(this.f.responseType=this.sa);lb(this.f)&&(this.f.withCredentials=this.ta);try{wn(this),0<this.A&&(this.K=xn(this.f),vm(tn(this,"Will abort after "+this.A+"ms if incomplete, xhr2 "+this.K)),this.K?(this.f.timeout=this.A,this.f.ontimeout=v(this.tc,this)):this.J=Dm(this.tc,this.A,this)),vm(tn(this,"Sending request")),this.B=!0,this.f.send(a),this.B=!1}catch(f){vm(tn(this,"Send error: "+f.message)),un(this,f)}};
function xn(a){return K&&pd(9)&&ga(a.timeout)&&n(a.ontimeout)}
function vn(a){return"content-type"==a.toLowerCase()}
g.tc=function(){"undefined"!=typeof aa&&this.f&&(this.l="Timed out after "+this.A+"ms, aborting",this.o=8,tn(this,this.l),ym(this,"timeout"),fn(this,8))};
function un(a,b){a.h=!1;a.f&&(a.j=!0,a.f.abort(),a.j=!1);a.l=b;a.o=5;yn(a);zn(a)}
function yn(a){a.S||(a.S=!0,ym(a,"complete"),ym(a,"error"))}
function fn(a,b){a.f&&a.h&&(tn(a,"Aborting"),a.h=!1,a.j=!0,a.f.abort(),a.j=!1,a.o=b||7,ym(a,"complete"),ym(a,"abort"),zn(a))}
g.G=function(){this.f&&(this.h&&(this.h=!1,this.j=!0,this.f.abort(),this.j=!1),zn(this,!0));qn.I.G.call(this)};
g.Bc=function(){this.isDisposed()||(this.Z||this.B||this.j?An(this):this.Yd())};
g.Yd=function(){An(this)};
function An(a){if(a.h&&"undefined"!=typeof aa)if(a.O[1]&&4==Vm(a)&&2==a.getStatus())tn(a,"Local request error detected and ignored");else if(a.B&&4==Vm(a))Dm(a.Bc,0,a);else if(ym(a,"readystatechange"),4==Vm(a)){tn(a,"Request complete");a.h=!1;try{var b=a.getStatus(),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.F).match(Ad)[1]||null;if(!f&&m.self&&m.self.location)var h=m.self.location.protocol,
f=h.substr(0,h.length-1);e=!rn.test(f?f.toLowerCase():"")}d=e}if(d)ym(a,"complete"),ym(a,"success");else{a.o=6;var k;try{k=2<Vm(a)?a.f.statusText:""}catch(l){k=""}a.l=k+" ["+a.getStatus()+"]";yn(a)}}finally{zn(a)}}}
function zn(a,b){if(a.f){wn(a);var c=a.f,d=a.O[0]?t:null;a.f=null;a.O=null;b||ym(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function wn(a){a.f&&a.K&&(a.f.ontimeout=null);ga(a.J)&&(m.clearTimeout(a.J),a.J=null)}
g.isActive=function(){return!!this.f};
function Vm(a){return a.f?a.f.readyState:0}
g.getStatus=function(){try{return 2<Vm(this)?this.f.status:-1}catch(a){return-1}};
function Wm(a){try{return a.f?a.f.responseText:""}catch(b){return""}}
function tn(a,b){return b+" ["+a.qa+" "+a.F+" "+a.getStatus()+"]"}
;function Bn(a,b,c){this.B=a||null;this.f=1;this.h=[];this.o=[];this.l=new Am(null,!0);this.F=b||null;this.W=null!=c?c:null}
function Cn(a,b){this.f=a;this.map=b;this.context=null}
g=Bn.prototype;g.ab=null;g.X=null;g.L=null;g.Ob=null;g.rb=null;g.jc=null;g.sb=null;g.gb=0;g.Id=0;g.T=null;g.Ca=null;g.wa=null;g.Ha=null;g.Aa=null;g.Db=null;g.Sa=-1;g.wc=-1;g.ia=-1;g.bb=0;g.Qa=0;g.Ga=8;var Dn=new xm;function En(a){gf.call(this,"statevent",a)}
x(En,gf);function Fn(a,b){gf.call(this,"timingevent",a);this.size=b}
x(Fn,gf);function Gn(a){gf.call(this,"serverreachability",a)}
x(Gn,gf);g=Bn.prototype;g.connect=function(a,b,c,d,e){X();this.Ob=b;this.ab=c||{};d&&n(e)&&(this.ab.OSID=d,this.ab.OAID=e);this.Aa=new kn(this);this.Aa.Pb=null;this.Aa.h=this.l;this.Aa.connect(a)};
function Hn(a){In(a);if(3==a.f){var b=a.gb++,c=a.rb.clone();N(c,"SID",a.j);N(c,"RID",b);N(c,"TYPE","terminate");Jn(a,c);b=new Om(a,0,a.j,b,void 0);b.Wa=2;b.za=Vg(c.clone());(new Image).src=b.za;b.ib=w();Um(b)}Kn(a)}
function In(a){if(a.Aa){var b=a.Aa;b.da&&(b.da.cancel(),b.da=null);b.xa=-1;a.Aa=null}a.L&&(a.L.cancel(),a.L=null);a.wa&&(m.clearTimeout(a.wa),a.wa=null);Ln(a);a.X&&(a.X.cancel(),a.X=null);a.Ca&&(m.clearTimeout(a.Ca),a.Ca=null)}
function Mn(a,b){if(0==a.f)throw Error("Invalid operation: sending map when state is closed");a.h.push(new Cn(a.Id++,b));2!=a.f&&3!=a.f||Nn(a)}
g.uc=function(){return 0==this.f};
function Nn(a){a.X||a.Ca||(a.Ca=dn(v(a.Gc,a),0),a.bb=0)}
g.Gc=function(a){this.Ca=null;On(this,a)};
function On(a,b){if(1==a.f){if(!b){a.gb=Math.floor(1E5*Math.random());var c=a.gb++,d=new Om(a,0,"",c,void 0);d.Ia=null;var e=Pn(a),f=a.rb.clone();N(f,"RID",c);a.B&&N(f,"CVER",a.B);Jn(a,f);Rm(d,f,e);a.X=d;a.f=2}}else 3==a.f&&(b?Qn(a,b):0!=a.h.length&&(a.X||Qn(a)))}
function Qn(a,b){var c,d;b?6<a.Ga?(a.h=a.o.concat(a.h),a.o.length=0,c=a.gb-1,d=Pn(a)):(c=b.F,d=b.Ka):(c=a.gb++,d=Pn(a));var e=a.rb.clone();N(e,"SID",a.j);N(e,"RID",c);N(e,"AID",a.Sa);Jn(a,e);c=new Om(a,0,a.j,c,a.bb+1);c.Ia=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.X=c;Rm(c,e,d)}
function Jn(a,b){if(a.T){var c=a.T.pc(a);c&&db(c,function(a,c){N(b,c,a)})}}
function Pn(a){var b=Math.min(a.h.length,1E3),c=["count="+b],d;6<a.Ga&&0<b?(d=a.h[0].f,c.push("ofs="+d)):d=0;for(var e=0;e<b;e++){var f=a.h[e].f,h=a.h[e].map,f=6>=a.Ga?e:f-d;try{$c(h,function(a,b){c.push("req"+f+"_"+b+"="+encodeURIComponent(a))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.o=a.o.concat(a.h.splice(0,b));
return c.join("&")}
function Rn(a){a.L||a.wa||(a.A=1,a.wa=dn(v(a.Fc,a),0),a.Qa=0)}
function Sn(a){if(a.L||a.wa||3<=a.Qa)return!1;a.A++;a.wa=dn(v(a.Fc,a),Tn(a,a.Qa));a.Qa++;return!0}
g.Fc=function(){this.wa=null;this.L=new Om(this,0,this.j,"rpc",this.A);this.L.Ia=null;this.L.Rb=0;var a=this.jc.clone();N(a,"RID","rpc");N(a,"SID",this.j);N(a,"CI",this.Db?"0":"1");N(a,"AID",this.Sa);Jn(this,a);if(!K||10<=rd)N(a,"TYPE","xmlhttp"),Tm(this.L,a,!0,this.sb,!1);else{N(a,"TYPE","html");var b=this.L,c=Boolean(this.sb);b.Wa=3;b.za=Vg(a.clone());cn(b,c)}};
function pn(a,b,c){a.Db=c;a.ia=b.xa;a.rd(1,0);a.rb=ln(a,null,a.Ob);Nn(a)}
g.Cc=function(a,b){if(0!=this.f&&(this.L==a||this.X==a))if(this.ia=a.eb,this.X==a&&3==this.f)if(7<this.Ga){var c;try{c=this.l.parse(b)}catch(f){c=null}if(ea(c)&&3==c.length)if(0==c[0])a:{if(!this.wa){if(this.L)if(this.L.ib+3E3<this.X.ib)Ln(this),this.L.cancel(),this.L=null;else break a;Sn(this);X()}}else this.wc=c[1],0<this.wc-this.Sa&&37500>c[2]&&this.Db&&0==this.Qa&&!this.Ha&&(this.Ha=dn(v(this.Jd,this),6E3));else on(this,11)}else"y2f%"!=b&&on(this,11);else if(this.L==a&&Ln(this),!/^[\s\xa0]*$/.test(b)){c=
this.l.parse(b);ea(c);for(var d=0;d<c.length;d++){var e=c[d];this.Sa=e[0];e=e[1];2==this.f?"c"==e[0]?(this.j=e[1],this.sb=e[2],e=e[3],null!=e?this.Ga=e:this.Ga=6,this.f=3,this.T&&this.T.nc(this),this.jc=ln(this,this.jb()?this.sb:null,this.Ob),Rn(this)):"stop"==e[0]&&on(this,7):3==this.f&&("stop"==e[0]?on(this,7):"noop"!=e[0]&&this.T&&this.T.mc(this,e),this.Qa=0)}}};
g.Jd=function(){null!=this.Ha&&(this.Ha=null,this.L.cancel(),this.L=null,Sn(this),X())};
function Ln(a){null!=a.Ha&&(m.clearTimeout(a.Ha),a.Ha=null)}
g.vb=function(a){var b;if(this.L==a)Ln(this),this.L=null,b=2;else if(this.X==a)this.X=null,b=1;else return;this.ia=a.eb;if(0!=this.f)if(a.ma)1==b?(w(),ym(Dn,new Fn(Dn,a.Ka?a.Ka.length:0)),Nn(this),this.o.length=0):Rn(this);else{var c=a.Ja,d;if(!(d=3==c||7==c||0==c&&0<this.ia)){if(d=1==b)this.X||this.Ca||1==this.f||2<=this.bb?d=!1:(this.Ca=dn(v(this.Gc,this,a),Tn(this,this.bb)),this.bb++,d=!0);d=!(d||2==b&&Sn(this))}if(d)switch(c){case 1:on(this,5);break;case 4:on(this,10);break;case 3:on(this,6);
break;case 7:on(this,12);break;default:on(this,2)}}};
function Tn(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
g.rd=function(a){if(!A(arguments,this.f))throw Error("Unexpected channel state: "+this.f);};
function on(a,b){if(2==b||9==b){var c=null;a.T&&(c=null);var d=v(a.Be,a);c||(c=new Cg("//www.google.com/images/cleardot.gif"),Vg(c));hn(c.toString(),1E4,d)}else X();Un(a,b)}
g.Be=function(a){a?X():(X(),Un(this,8))};
function Un(a,b){a.f=0;a.T&&a.T.lc(a,b);Kn(a);In(a)}
function Kn(a){a.f=0;a.ia=-1;if(a.T)if(0==a.o.length&&0==a.h.length)a.T.Ib(a);else{var b=Xa(a.o),c=Xa(a.h);a.o.length=0;a.h.length=0;a.T.Ib(a,b,c)}}
function ln(a,b,c){var d=Wg(c);if(""!=d.h)b&&Eg(d,b+"."+d.h),Fg(d,d.B);else var e=window.location,d=Xg(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c);a.ab&&db(a.ab,function(a,b){N(d,b,a)});
N(d,"VER",a.Ga);Jn(a,d);return d}
g.Kb=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new qn;a.ta=!1;return a};
g.isActive=function(){return!!this.T&&this.T.isActive(this)};
function dn(a,b){if(!ha(a))throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){a()},b)}
g.la=function(){ym(Dn,new Gn(Dn))};
function X(){ym(Dn,new En(Dn))}
g.jb=function(){return!(!K||10<=rd)};
function Vn(){}
g=Vn.prototype;g.nc=function(){};
g.mc=function(){};
g.lc=function(){};
g.Ib=function(){};
g.pc=function(){return{}};
g.isActive=function(){return!0};function Wn(a,b){Bm.call(this);this.l=0;if(ha(a))b&&(a=v(a,b));else if(a&&ha(a.handleEvent))a=v(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a;vf(this,"tick",v(this.A,this));this.stop();Cm(this,5E3+2E4*Math.random())}
x(Wn,Bm);Wn.prototype.A=function(){if(500<this.f){var a=this.f;24E4>2*a&&(a*=2);Cm(this,a)}this.B()};
Wn.prototype.start=function(){Wn.I.start.call(this);this.l=w()+this.f};
Wn.prototype.stop=function(){this.l=0;Wn.I.stop.call(this)};function Xn(a,b){this.K=a;this.o=b;this.j=new F;this.h=new Wn(this.Ie,this);this.f=null;this.J=!1;this.A=null;this.W="";this.F=this.l=0;this.B=[]}
x(Xn,Vn);g=Xn.prototype;g.subscribe=function(a,b,c){return this.j.subscribe(a,b,c)};
g.unsubscribe=function(a,b,c){return this.j.unsubscribe(a,b,c)};
g.oa=function(a){return this.j.oa(a)};
g.D=function(a,b){return this.j.D.apply(this.j,arguments)};
g.dispose=function(){this.J||(this.J=!0,this.j.clear(),Yn(this),dc(this.j))};
g.isDisposed=function(){return this.J};
function Zn(a){return{firstTestResults:[""],secondTestResults:!a.f.Db,sessionId:a.f.j,arrayId:a.f.Sa}}
g.connect=function(a,b,c){if(!this.f||2!=this.f.f){this.W="";this.h.stop();this.A=a||null;this.l=b||0;a=this.K+"/test";b=this.K+"/bind";var d=new Bn("1",c?c.firstTestResults:null,c?c.secondTestResults:null),e=this.f;e&&(e.T=null);d.T=this;this.f=d;e?this.f.connect(a,b,this.o,e.j,e.Sa):c?this.f.connect(a,b,this.o,c.sessionId,c.arrayId):this.f.connect(a,b,this.o)}};
function Yn(a,b){a.F=b||0;a.h.stop();a.f&&(3==a.f.f&&On(a.f),Hn(a.f));a.F=0}
g.sendMessage=function(a,b){var c={_sc:a};b&&ub(c,b);this.h.enabled||2==(this.f?this.f.f:0)?this.B.push(c):this.f&&3==this.f.f&&Mn(this.f,c)};
g.nc=function(){var a=this.h;a.stop();Cm(a,5E3+2E4*Math.random());this.A=null;this.l=0;if(this.B.length){a=this.B;this.B=[];for(var b=0,c=a.length;b<c;++b)Mn(this.f,a[b])}this.D("handlerOpened")};
g.lc=function(a,b){var c=2==b&&401==this.f.ia;if(4!=b&&!c){if(6==b||410==this.f.ia)c=this.h,c.stop(),Cm(c,500);this.h.start()}this.D("handlerError",b)};
g.Ib=function(a,b,c){if(!this.h.enabled)this.D("handlerClosed");else if(c)for(a=0,b=c.length;a<b;++a){var d=c[a].map;d&&this.B.push(d)}};
g.pc=function(){var a={v:2};this.W&&(a.gsessionid=this.W);0!=this.l&&(a.ui=""+this.l);0!=this.F&&(a.ui=""+this.F);this.A&&ub(a,this.A);return a};
g.mc=function(a,b){if("S"==b[0])this.W=b[1];else if("gracefulReconnect"==b[0]){var c=this.h;c.stop();Cm(c,500);this.h.start();Hn(this.f)}else this.D("handlerMessage",new um(b[0],b[1]))};
function $n(a,b){(a.o.loungeIdToken=b)||a.h.stop()}
g.Ie=function(){this.h.stop();var a=this.f,b=0;a.L&&b++;a.X&&b++;0!=b?this.h.start():this.connect(this.A,this.l)};function ao(a){this.videoIds=null;this.index=-1;this.videoId=this.f="";this.volume=this.h=-1;this.l=!1;this.audioTrackId=null;this.A=this.o=0;this.j=null;this.reset(a)}
function bo(a,b){if(a.f)throw Error(b+" is not allowed in V3.");}
function co(a){a.audioTrackId=null;a.j=null;a.h=-1;a.o=0;a.A=w()}
ao.prototype.reset=function(a){this.videoIds=[];this.f="";this.index=-1;this.videoId="";co(this);this.volume=-1;this.l=!1;a&&(this.videoIds=a.videoIds,this.index=a.index,this.f=a.listId,this.videoId=a.videoId,this.h=a.playerState,this.volume=a.volume,this.l=a.muted,this.audioTrackId=a.audioTrackId,this.j=a.trackData,this.o=a.playerTime,this.A=a.playerTimeAt)};
function eo(a){return a.f?a.videoId:a.videoIds[a.index]}
function fo(a){switch(a.h){case 1:return(w()-a.A)/1E3+a.o;case -1E3:return 0}return a.o}
ao.prototype.setVideoId=function(a){bo(this,"setVideoId");var b=this.index;this.index=La(this.videoIds,a);b!=this.index&&co(this);return-1!=b};
function go(a,b,c){bo(a,"setPlaylist");c=c||eo(a);ab(a.videoIds,b)&&c==eo(a)||(a.videoIds=Xa(b),a.setVideoId(c))}
ao.prototype.remove=function(a){bo(this,"remove");var b=eo(this);return Ua(this.videoIds,a)?(this.index=La(this.videoIds,b),!0):!1};
function ho(a){var b={};b.videoIds=Xa(a.videoIds);b.index=a.index;b.listId=a.f;b.videoId=a.videoId;b.playerState=a.h;b.volume=a.volume;b.muted=a.l;b.audioTrackId=a.audioTrackId;b.trackData=sb(a.j);b.playerTime=a.o;b.playerTimeAt=a.A;return b}
ao.prototype.clone=function(){return new ao(ho(this))};function Y(a,b,c){V.call(this);this.A=NaN;this.S=!1;this.J=this.F=this.P=this.K=NaN;this.Z=[];this.j=this.C=this.f=null;this.Na=a;this.Z.push(M(window,"beforeunload",v(this.Cd,this)));this.h=[];this.C=new ao;3==c["mdx-version"]&&(this.C.f="RQ"+b.token);this.ha=b.id;this.f=io(this,c);this.f.subscribe("handlerOpened",this.Od,this);this.f.subscribe("handlerClosed",this.Kd,this);this.f.subscribe("handlerError",this.Ld,this);this.C.f?this.f.subscribe("handlerMessage",this.Md,this):this.f.subscribe("handlerMessage",
this.Nd,this);$n(this.f,b.token);this.subscribe("remoteQueueChange",function(){var a=this.C.videoId;Kk()&&T("yt-remote-session-video-id",a)},this)}
x(Y,V);g=Y.prototype;
g.connect=function(a,b){if(b){if(this.C.f){var c=b.listId,d=b.videoId,e=b.index,f=b.currentTime||0;5>=f&&(f=0);h={videoId:d,currentTime:f};c&&(h.listId=c);n(e)&&(h.currentIndex=e);c&&(this.C.f=c);this.C.videoId=d;this.C.index=e||0}else{var d=b.videoIds[b.index],f=b.currentTime||0;5>=f&&(f=0);var h={videoIds:d,videoId:d,currentTime:f};this.C.videoIds=[d];this.C.index=0}this.C.state=3;c=this.C;c.o=f;c.A=w();this.H("Connecting with setPlaylist and params: "+L(h));this.f.connect({method:"setPlaylist",params:L(h)},
a,Ok())}else this.H("Connecting without params"),this.f.connect({},a,Ok());jo(this)};
g.dispose=function(){this.isDisposed()||(this.D("beforeDispose"),ko(this,3));Y.I.dispose.call(this)};
g.G=function(){lo(this);mo(this);no(this);I(this.F);this.F=NaN;I(this.J);this.J=NaN;this.j=null;Oe(this.Z);this.Z.length=0;this.f.dispose();Y.I.G.call(this);this.h=this.C=this.f=null};
g.H=function(a){Xj("conn",a)};
g.Cd=function(){this.l(2)};
function io(a,b){return new Xn(lk(a.Na,"/bc",void 0,!1),b)}
function ko(a,b){a.D("proxyStateChange",b)}
function jo(a){a.A=H(v(function(){this.H("Connecting timeout");this.l(1)},a),2E4)}
function lo(a){I(a.A);a.A=NaN}
function no(a){I(a.K);a.K=NaN}
function oo(a){mo(a);a.P=H(v(function(){po(this,"getNowPlaying")},a),2E4)}
function mo(a){I(a.P);a.P=NaN}
function qo(a){var b=a.f;return!!b.f&&3==b.f.f&&isNaN(a.A)}
g.Od=function(){this.H("Channel opened");this.S&&(this.S=!1,no(this),this.K=H(v(function(){this.H("Timing out waiting for a screen.");this.l(1)},this),15E3));
Xk(Zn(this.f),this.ha)};
g.Kd=function(){this.H("Channel closed");isNaN(this.A)?Yk(!0):Yk();this.dispose()};
g.Ld=function(a){Yk();isNaN(this.B())?(this.H("Channel error: "+a+" without reconnection"),this.dispose()):(this.S=!0,this.H("Channel error: "+a+" with reconnection in "+this.B()+" ms"),ko(this,2))};
function ro(a,b){b&&(lo(a),no(a));b==qo(a)?b&&(ko(a,1),po(a,"getSubtitlesTrack")):b?(a.O()&&a.C.reset(),ko(a,1),po(a,"getNowPlaying"),so(a)):a.l(1)}
function to(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.C.videoId&&(pb(b.params)?a.C.j=null:a.C.j=b.params,a.D("remotePlayerChange"))}
function uo(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.C.f=b.params.listId||a.C.f;var e=a.C,f=e.videoId;e.videoId=c;e.index=d;c!=f&&co(e);a.D("remoteQueueChange")}
function vo(a,b){b.params=b.params||{};uo(a,b);wo(a,b)}
function wo(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10),d=a.C;d.o=isNaN(c)?0:c;d.A=w();c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.C.h&&(c=-1E3);a.C.h=c;1==a.C.h?oo(a):mo(a);a.D("remotePlayerChange")}
function xo(a,b){var c="true"==b.params.muted;a.C.volume=parseInt(b.params.volume,10);a.C.l=c;a.D("remotePlayerChange")}
g.Md=function(a){a.params?this.H("Received: action="+a.action+", params="+L(a.params)):this.H("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=sd(a.params.devices);this.h=z(a,function(a){return new Fk(a)});
a=!!Pa(this.h,function(a){return"LOUNGE_SCREEN"==a.type});
ro(this,a);break;case "loungeScreenConnected":ro(this,!0);break;case "loungeScreenDisconnected":Va(this.h,function(a){return"LOUNGE_SCREEN"==a.type});
ro(this,!1);break;case "remoteConnected":var b=new Fk(sd(a.params.device));Pa(this.h,function(a){return a.equals(b)})||Ta(this.h,b);
break;case "remoteDisconnected":b=new Fk(sd(a.params.device));Va(this.h,function(a){return a.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":uo(this,a);break;case "nowPlaying":vo(this,a);break;case "onStateChange":wo(this,a);break;case "onVolumeChanged":xo(this,a);break;case "onSubtitlesTrackChanged":to(this,a);break;default:this.H("Unrecognized action: "+a.action)}};
g.Nd=function(a){a.params?this.H("Received: action="+a.action+", params="+L(a.params)):this.H("Received: action="+a.action);yo(this,a);zo(this,a);if(qo(this)){var b=this.C.clone(),c=!1,d,e,f,h,k,l;a.params&&(d=a.params.videoId||a.params.video_id,e=a.params.videoIds||a.params.video_ids,f=a.params.state,h=a.params.currentTime||a.params.current_time,k=a.params.volume,l=a.params.muted,n(a.params.currentError)&&sd(a.params.currentError));if("onSubtitlesTrackChanged"==a.action)d==eo(this.C)&&(delete a.params.videoId,
pb(a.params)?this.C.j=null:this.C.j=a.params,this.D("remotePlayerChange"));else if(eo(this.C)||"onStateChange"!=a.action){"playlistModified"!=a.action&&"nowPlayingPlaylist"!=a.action||e?(d||"nowPlaying"!=a.action&&"nowPlayingPlaylist"!=a.action?d||(d=eo(this.C)):this.C.setVideoId(""),e&&(e=e.split(","),go(this.C,e,d))):go(this.C,[]);e=this.C;var q=d;bo(e,"add");q&&!A(e.videoIds,q)?(e.videoIds.push(q),e=!0):e=!1;e&&po(this,"getPlaylist");d&&this.C.setVideoId(d);b.index==this.C.index&&ab(b.videoIds,
this.C.videoIds)?"playlistModified"!=a.action&&"nowPlayingPlaylist"!=a.action||this.D("remoteQueueChange"):this.D("remoteQueueChange");n(f)&&(a=parseInt(f,10),a=isNaN(a)?-1:a,-1==a&&-1E3==this.C.h&&(a=-1E3),0==a&&"0"==h&&(a=-1),c=c||a!=this.C.h,this.C.h=a,1==this.C.h?oo(this):mo(this));h&&(a=parseInt(h,10),c=this.C,c.o=isNaN(a)?0:a,c.A=w(),c=!0);n(k)&&(a=parseInt(k,10),isNaN(a)||(c=c||this.C.volume!=a,this.C.volume=a),n(l)&&(l="true"==l,c=c||this.C.l!=l,this.C.l=l));c&&this.D("remotePlayerChange")}}};
function yo(a,b){switch(b.action){case "loungeStatus":var c=sd(b.params.devices);a.h=z(c,function(a){return new Fk(a)});
break;case "loungeScreenDisconnected":Va(a.h,function(a){return"LOUNGE_SCREEN"==a.type});
break;case "remoteConnected":var d=new Fk(sd(b.params.device));Pa(a.h,function(a){return a.equals(d)})||Ta(a.h,d);
break;case "remoteDisconnected":d=new Fk(sd(b.params.device)),Va(a.h,function(a){return a.equals(d)})}}
function zo(a,b){var c=!1;if("loungeStatus"==b.action)c=!!Pa(a.h,function(a){return"LOUNGE_SCREEN"==a.type});
else if("loungeScreenConnected"==b.action)c=!0;else if("loungeScreenDisconnected"==b.action)c=!1;else return;if(!isNaN(a.K))if(c)no(a);else return;c==qo(a)?c&&ko(a,1):c?(lo(a),a.O()&&a.C.reset(),ko(a,1),po(a,"getNowPlaying"),so(a)):a.l(1)}
g.re=function(){if(this.j){var a=this.j;this.j=null;this.C.videoId!=a&&po(this,"getNowPlaying")}};
Y.prototype.subscribe=Y.prototype.subscribe;Y.prototype.unsubscribeByKey=Y.prototype.oa;Y.prototype.ta=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.B())?qo(this)&&(a=1):a=2);return a};
Y.prototype.getProxyState=Y.prototype.ta;Y.prototype.l=function(a){this.H("Disconnecting with "+a);lo(this);this.D("beforeDisconnect",a);1==a&&Yk();Yn(this.f,a);this.dispose()};
Y.prototype.disconnect=Y.prototype.l;Y.prototype.sa=function(){var a=this.C;if(this.j){var b=a=this.C.clone(),c=this.j,d=a.index,e=b.videoId;b.videoId=c;b.index=d;c!=e&&co(b)}return ho(a)};
Y.prototype.getPlayerContextData=Y.prototype.sa;Y.prototype.Ma=function(a){var b=new ao(a);b.videoId&&b.videoId!=this.C.videoId&&(this.j=b.videoId,I(this.F),this.F=H(v(this.re,this),5E3));var c=[];this.C.f==b.f&&this.C.videoId==b.videoId&&this.C.index==b.index&&ab(this.C.videoIds,b.videoIds)||c.push("remoteQueueChange");this.C.h==b.h&&this.C.volume==b.volume&&this.C.l==b.l&&fo(this.C)==fo(b)&&L(this.C.j)==L(b.j)||c.push("remotePlayerChange");this.C.reset(a);y(c,function(a){this.D(a)},this)};
Y.prototype.setPlayerContextData=Y.prototype.Ma;Y.prototype.qa=function(){return this.f.o.loungeIdToken};
Y.prototype.getLoungeToken=Y.prototype.qa;Y.prototype.O=function(){var a=this.f.o.id,b=Pa(this.h,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
Y.prototype.getOtherConnectedRemoteId=Y.prototype.O;Y.prototype.B=function(){var a=this.f;return a.h.enabled?a.h.l-w():NaN};
Y.prototype.getReconnectTimeout=Y.prototype.B;Y.prototype.Oa=function(){if(!isNaN(this.B())){var a=this.f.h;a.enabled&&(a.stop(),a.start(),a.A())}};
Y.prototype.reconnect=Y.prototype.Oa;function so(a){I(a.J);a.J=H(v(a.l,a,1),864E5)}
function po(a,b,c){c?a.H("Sending: action="+b+", params="+L(c)):a.H("Sending: action="+b);a.f.sendMessage(b,c)}
Y.prototype.ya=function(a,b){po(this,a,b);so(this)};
Y.prototype.sendMessage=Y.prototype.ya;function Ao(a){V.call(this);this.l=0;this.ka=Bo();this.$a=NaN;this.yb="";this.A=a;this.H("Initializing local screens: "+ik(this.ka));this.j=Co();this.H("Initializing account screens: "+ik(this.j));this.Jb=null;this.f=[];this.h=[];Do(this,pm()||[]);this.H("Initializing DIAL devices: "+pk(this.h));a=gk(Uk());Eo(this,a);this.H("Initializing online screens: "+ik(this.f));this.l=w()+3E5;Fo(this)}
x(Ao,V);var Go=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=Ao.prototype;g.H=function(a){Xj("RM",a)};
g.M=function(a){Xj("RM",a)};
function Co(){var a=Bo(),b=gk(Uk());return Ma(b,function(b){return!xk(a,b)})}
function Bo(){var a=gk(Qk());return Ma(a,function(a){return!a.f})}
function Fo(a){uc("yt-remote-cast-device-list-update",function(){var a=pm();Do(this,a||[])},a);
uc("yt-remote-cast-device-status-update",a.Ee,a);a.Mc();var b=w()>a.l?2E4:1E4;lc(v(a.Mc,a),b)}
g.D=function(a,b){if(this.isDisposed())return!1;this.H("Firing "+a);return this.o.D.apply(this.o,arguments)};
g.Mc=function(){var a=pm()||[];0==a.length||Do(this,a);a=Ho(this);0==a.length||(Na(a,function(a){return!xk(this.j,a)},this)&&Sk()?Io(this):Jo(this,a))};
function Ko(a,b){var c=Ho(a);return Ma(b,function(a){return a.f?(a=wk(this.h,a.f),!!a&&"RUNNING"==a.status):!!xk(c,a)},a)}
function Do(a,b){var c=!1;y(b,function(a){var b=yk(this.ka,a.id);b&&b.name!=a.name&&(this.H("Renaming screen id "+b.id+" from "+b.name+" to "+a.name),b.name=a.name,c=!0)},a);
c&&(a.H("Renaming due to DIAL."),Lo(a));Vk(tk(b));var d=!ab(a.h,b,vk);d&&a.H("Updating DIAL devices: "+pk(a.h)+" to "+pk(b));a.h=b;Eo(a,a.f);d&&a.D("onlineReceiverChange")}
g.Ee=function(a){var b=wk(this.h,a.id);b&&(this.H("Updating DIAL device: "+b.id+"("+b.name+") from status: "+b.status+" to status: "+a.status+" and from activityId: "+b.f+" to activityId: "+a.f),b.f=a.f,b.status=a.status,Vk(tk(this.h)));Eo(this,this.f)};
function Eo(a,b,c){var d=Ko(a,b),e=!ab(a.f,d,dk);if(e||c)0==b.length||Tk(z(d,ek));e&&(a.H("Updating online screens: "+ik(a.f)+" -> "+ik(d)),a.f=d,a.D("onlineReceiverChange"))}
function Jo(a,b){var c=[],d={};y(b,function(a){a.token&&(d[a.token]=a,c.push(a.token))});
var e={method:"POST",R:{lounge_token:c.join(",")},context:a,ca:function(a,b){var c=[];y(b.screens||[],function(a){"online"==a.status&&c.push(d[a.loungeToken])});
var e=this.Jb?Mo(this,this.Jb):null;e&&!xk(c,e)&&c.push(e);Eo(this,c,!0)}};
Sd(lk(a.A,"/pairing/get_screen_availability"),e)}
function Io(a){var b=Ho(a),c=z(b,function(a){return a.id});
0!=c.length&&(a.H("Updating lounge tokens for: "+L(c)),Sd(lk(a.A,"/pairing/get_lounge_token_batch"),{R:{screen_ids:c.join(",")},method:"POST",context:a,ca:function(a,c){No(this,c.screens||[]);this.ka=Ma(this.ka,function(a){return!!a.token});
Lo(this);Jo(this,b)}}))}
function No(a,b){y(Wa(a.ka,a.j),function(a){var d=Pa(b,function(b){return a.id==b.screenId});
d&&(a.token=d.loungeToken)})}
function Lo(a){var b=Bo();ab(a.ka,b,dk)||(a.H("Saving local screens: "+ik(b)+" to "+ik(a.ka)),Pk(z(a.ka,ek)),Eo(a,a.f,!0),Do(a,pm()||[]),a.D("managedScreenChange",Ho(a)))}
function Oo(a,b,c){var d=Qa(b,function(a){return ck(c,a)}),e=0>d;
0>d?b.push(c):b[d]=c;xk(a.f,c)||a.f.push(c);return e}
g.sc=function(a,b){for(var c=Ho(this),c=z(c,function(a){return a.name}),d=a,e=2;A(c,d);)d=b.call(m,e),e++;
return d};
g.Ic=function(a,b,c){var d=!1;b>=Go.length&&(this.H("Pairing DIAL device "+a+" with "+c+" timed out."),d=!0);var e=wk(this.h,a);if(!e)this.H("Pairing DIAL device "+a+" with "+c+" failed: no device for "+a),d=!0;else if("ERROR"==e.status||"STOPPED"==e.status)this.H("Pairing DIAL device "+a+" with "+c+" failed: launch error on "+a),d=!0;d?(Po(this),this.D("screenPair",null)):Sd(lk(this.A,"/pairing/get_screen"),{method:"POST",R:{pairing_code:c},context:this,ca:function(a,b){if(c==this.yb){Po(this);var d=
new ak(b.screen);d.name=e.name;d.f=e.id;this.H("Pairing "+c+" succeeded.");var l=Oo(this,this.ka,d);this.H("Paired with "+(l?"a new":"an old")+" local screen:"+hk(d));Lo(this);this.D("screenPair",d)}},
onError:function(){c==this.yb&&(this.H("Polling pairing code: "+c),I(this.$a),this.$a=H(v(this.Ic,this,a,b+1,c),Go[b]))}})};
function Qo(a,b,c){var d=Z,e="";Po(d);if(wk(d.h,a)){if(!e){var f=e=qk();im();var h=rm(a),k=fm();if(k&&h){var l=new cast.Receiver(h.id,h.name),l=new cast.LaunchRequest("YouTube",l);l.parameters="pairingCode="+f;l.description=new cast.LaunchDescription;l.description.text=document.title;b&&(l.parameters+="&v="+b,c&&(l.parameters+="&t="+Math.round(c)),l.description.url="http://i.ytimg.com/vi/"+b+"/default.jpg");"UNKNOWN"!=h.status&&(h.status="UNKNOWN",nm(h),J("yt-remote-cast-device-status-update",h));
dm("Sending a cast launch request with params: "+l.parameters);k.launch(l,qa(sm,a))}else dm("No cast API or no cast device. Dropping cast launch.")}d.yb=e;d.$a=H(v(d.Ic,d,a,0,e),Go[0])}else d.H("No DIAL device with id: "+a)}
function Po(a){I(a.$a);a.$a=NaN;a.yb=""}
function Mo(a,b){var c=yk(Ho(a),b);a.H("Found screen: "+hk(c)+" with key: "+b);return c}
function Ro(a){var b=Z,c=yk(b.f,a);b.H("Found online screen: "+hk(c)+" with key: "+a);return c}
function So(a){var b=Z,c=wk(b.h,a);if(!c){var d=yk(b.ka,a);d&&(c=wk(b.h,d.f))}b.H("Found DIAL: "+(c?c.toString():"null")+" with key: "+a);return c}
function Ho(a){return Wa(a.j,Ma(a.ka,function(a){return!xk(this.j,a)},a))}
;function To(a){zk.call(this,"ScreenServiceProxy");this.V=a;this.f=[];this.f.push(this.V.$_s("screenChange",v(this.Me,this)));this.f.push(this.V.$_s("onlineScreenChange",v(this.Ud,this)))}
x(To,zk);g=To.prototype;g.$=function(a){return this.V.$_gs(a)};
g.contains=function(a){return!!this.V.$_c(a)};
g.get=function(a){return this.V.$_g(a)};
g.start=function(){this.V.$_st()};
g.Fb=function(a,b,c){this.V.$_a(a,b,c)};
g.remove=function(a,b,c){this.V.$_r(a,b,c)};
g.Cb=function(a,b,c,d){this.V.$_un(a,b,c,d)};
g.G=function(){for(var a=0,b=this.f.length;a<b;++a)this.V.$_ubk(this.f[a]);this.f.length=0;this.V=null;To.I.G.call(this)};
g.Me=function(){this.D("screenChange")};
g.Ud=function(){this.D("onlineScreenChange")};
W.prototype.$_st=W.prototype.start;W.prototype.$_gspc=W.prototype.Ne;W.prototype.$_gsppc=W.prototype.Vc;W.prototype.$_c=W.prototype.contains;W.prototype.$_g=W.prototype.get;W.prototype.$_a=W.prototype.Fb;W.prototype.$_un=W.prototype.Cb;W.prototype.$_r=W.prototype.remove;W.prototype.$_gs=W.prototype.$;W.prototype.$_gos=W.prototype.Uc;W.prototype.$_s=W.prototype.subscribe;W.prototype.$_ubk=W.prototype.oa;function Uo(){var a=!!G("MDX_ENABLE_CASTV2"),b=!!G("MDX_ENABLE_QUEUE"),c={device:"Desktop",app:"youtube-desktop"};a?p("yt.mdx.remote.castv2_",!0,void 0):im();pj&&oj();Hk();Vo||(Vo=new kk,Zk()&&(Vo.f="/api/loungedev"));Z||a||(Z=new Ao(Vo),Z.subscribe("screenPair",Wo),Z.subscribe("managedScreenChange",Xo),Z.subscribe("onlineReceiverChange",function(){J("yt-remote-receiver-availability-change")}));
Yo||(Yo=r("yt.mdx.remote.deferredProxies_")||[],p("yt.mdx.remote.deferredProxies_",Yo,void 0));Zo(b);b=$o();if(a&&!b){var d=new W(Vo);p("yt.mdx.remote.screenService_",d,void 0);b=$o();Il(d,function(a){a?ap()&&am(ap(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){J("yt-remote-receiver-availability-change")})},!(!c||!c.loadCastApiSetupScript))}if(c&&!r("yt.mdx.remote.initialized_")){p("yt.mdx.remote.initialized_",!0,void 0);
bp("Initializing: "+L(c));cp.push(uc("yt-remote-cast2-availability-change",function(){J("yt-remote-receiver-availability-change")}));
cp.push(uc("yt-remote-cast2-receiver-selected",function(){dp(null);J("yt-remote-auto-connect","cast-selector-receiver")}));
cp.push(uc("yt-remote-cast2-session-change",ep));cp.push(uc("yt-remote-connection-change",function(a){a?am(ap(),"YouTube TV"):fp()||(am(null,null),Xl())}));
var e=gp();c.isAuto&&(e.id+="#dial");e.name=c.device;e.app=c.app;bp(" -- with channel params: "+L(e));hp(e);a&&b.start();ap()||ip()}}
function kp(){wc(cp);cp.length=0;dc(lp);lp=null;Yo&&(y(Yo,function(a){a(null)}),Yo.length=0,Yo=null,p("yt.mdx.remote.deferredProxies_",null,void 0));
Z&&(dc(Z),Z=null);Vo=null;mm()}
function mp(){if(np()&&Vl()){var a=[];if(U("yt-remote-cast-available")||r("yt.mdx.remote.cloudview.castButtonShown_")||op())a.push({key:"cast-selector-receiver",name:pp()}),p("yt.mdx.remote.cloudview.castButtonShown_",!0,void 0);return a}return r("yt.mdx.remote.cloudview.initializing_")?[]:qp()}
function qp(){var a=[],a=rp()?$o().V.$_gos():gk(Uk()),b=sp();b&&op()&&(xk(a,b)||a.push(b));rp()||(b=uk(Wk()),b=Ma(b,function(b){return!yk(a,b.id)}),a=Wa(a,b));
return sk(a)}
function tp(){if(np()&&Vl()){var a=Wl();return a?{key:"cast-selector-receiver",name:a}:null}return up()}
function up(){var a=qp(),b=vp(),c=sp();c||(c=fp());return Pa(a,function(a){return c&&bk(c,a.key)||b&&(a=So(a.key))&&a.id==b?!0:!1})}
function pp(){if(np()&&Vl())return Wl();var a=sp();return a?a.name:null}
function sp(){var a=ap();if(!a)return null;if(!Z){var b=$o().$();return yk(b,a)}return Mo(Z,a)}
function ep(a){bp("remote.onCastSessionChange_: "+hk(a));if(a){var b=sp();b&&b.id==a.id?am(b.id,"YouTube TV"):(b&&wp(),xp(a,1))}else wp()}
function yp(a,b){bp("Connecting to: "+L(a));if("cast-selector-receiver"==a.key)dp(b||null),$l(b||null);else{wp();dp(b||null);var c=null;Z?c=Ro(a.key):(c=$o().$(),c=yk(c,a.key));if(c)xp(c,1);else{if(Z&&(c=So(a.key))){zp(c);return}H(function(){Ap(null)},0)}}}
function wp(){Z&&Po(Z);a:{var a=op();if(a&&(a=a.getOtherConnectedRemoteId())){bp("Do not stop DIAL due to "+a);Bp("");break a}(a=vp())?(bp("Stopping DIAL: "+a),tm(a),Bp("")):(a=sp())&&a.f&&(bp("Stopping DIAL: "+a.f),tm(a.f))}Zl()?Rl().stopSession():Ol("stopSession called before API ready.");(a=op())?a.disconnect(1):(xc("yt-remote-before-disconnect",1),xc("yt-remote-connection-change",!1));Ap(null)}
function bp(a){Xj("remote",a)}
function np(){return!!r("yt.mdx.remote.castv2_")}
function rp(){return r("yt.mdx.remote.screenService_")}
function $o(){if(!lp){var a=rp();lp=a?new To(a):null}return lp}
function ap(){return r("yt.mdx.remote.currentScreenId_")}
function Cp(a){p("yt.mdx.remote.currentScreenId_",a,void 0);if(Z){var b=Z;b.l=w()+3E5;if((b.Jb=a)&&(a=Mo(b,a))&&!xk(b.f,a)){var c=Xa(b.f);c.push(a);Eo(b,c,!0)}}}
function vp(){return r("yt.mdx.remote.currentDialId_")}
function Bp(a){p("yt.mdx.remote.currentDialId_",a,void 0)}
function Dp(){return r("yt.mdx.remote.connectData_")}
function dp(a){p("yt.mdx.remote.connectData_",a,void 0)}
function op(){return r("yt.mdx.remote.connection_")}
function Ap(a){var b=op();dp(null);a?Ka(!op()):(Cp(""),Bp(""));p("yt.mdx.remote.connection_",a,void 0);Yo&&(y(Yo,function(b){b(a)}),Yo.length=0);
b&&!a?xc("yt-remote-connection-change",!1):!b&&a&&J("yt-remote-connection-change",!0)}
function fp(){var a=Kk();if(!a)return null;if(rp()){var b=$o().$();return yk(b,a)}return Z?Mo(Z,a):null}
function xp(a,b){Ka(!ap());Cp(a.id);var c=new Y(Vo,a,gp());c.connect(b,Dp());c.subscribe("beforeDisconnect",function(a){xc("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){op()&&(op(),Ap(null))});
Ap(c)}
function zp(a){vp();bp("Connecting to: "+(a?a.toString():"null"));Bp(a.id);var b=Dp();b?Qo(a.id,b.videoIds[b.index],b.currentTime):Qo(a.id)}
function ip(){var a=fp();a?(bp("Resume connection to: "+hk(a)),xp(a,0)):(Yk(),Xl(),bp("Skipping connecting because no session screen found."))}
function Wo(a){bp("Paired with: "+hk(a));a?xp(a,1):Ap(null)}
function Xo(){var a=ap();a&&!sp()&&(bp("Dropping current screen with id: "+a),wp());fp()||Yk()}
var Vo=null,Yo=null,lp=null,Z=null;function Zo(a){var b=gp();if(pb(b)){var b=Jk(),c=U("yt-remote-session-name")||"",d=U("yt-remote-session-app")||"",b={device:"REMOTE_CONTROL",id:b,name:c,app:d};a&&(b["mdx-version"]=3);p("yt.mdx.remote.channelParams_",b,void 0)}}
function gp(){return r("yt.mdx.remote.channelParams_")||{}}
function hp(a){a?(T("yt-remote-session-app",a.app),T("yt-remote-session-name",a.name)):(rj("yt-remote-session-app"),rj("yt-remote-session-name"));p("yt.mdx.remote.channelParams_",a,void 0)}
var cp=[];var Ep=null,Fp=[];function Gp(){Hp();if(tp()){var a=Ep;"html5"!=a.getPlayerType()&&a.loadNewVideoConfig(a.getCurrentVideoConfig(),"html5")}}
function Ip(a){"cast-selector-receiver"==a?Yl():Jp(a)}
function Jp(a){var b=mp();if(a=rk(b,a)){var c=Ep,d=c.getVideoData().video_id,e=c.getVideoData().list,f=c.getCurrentTime();yp(a,{videoIds:[d],listId:e,videoId:d,index:0,currentTime:f});"html5"!=c.getPlayerType()?c.loadNewVideoConfig(c.getCurrentVideoConfig(),"html5"):c.updateRemoteReceivers&&c.updateRemoteReceivers(b,a)}}
function Hp(){var a=Ep;a&&a.updateRemoteReceivers&&a.updateRemoteReceivers(mp(),tp())}
;var Kp=null,Lp=[];function Mp(a){return{externalChannelId:a.externalChannelId,Hd:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function Np(a){Op(Mp(a))}
function Op(a){Di()?(Q(qi,new ki(a.externalChannelId,a.Hd?{itemType:"U",itemId:a.externalChannelId}:null)),(a="/gen_204?"+Hd({event:"subscribe",source:a.source}))&&fh(a)):Pp(a)}
function Pp(a){Ci(function(b){b.subscription_ajax&&Op(a)},null)}
function Qp(a){a=Mp(a);Q(vi,new mi(a.externalChannelId,a.subscriptionId,null));(a="/gen_204?"+Hd({event:"unsubscribe",source:a.source}))&&fh(a)}
function Rp(a){Kp&&Kp.channelSubscribed(a.f,a.subscriptionId)}
function Sp(a){Kp&&Kp.channelUnsubscribed(a.f)}
;function Tp(a){D.call(this);this.h=a;this.h.subscribe("command",this.Lc,this);this.j={};this.o=!1}
x(Tp,D);g=Tp.prototype;g.start=function(){this.o||this.isDisposed()||(this.o=!0,Up(this.h,"RECEIVING"))};
g.Lc=function(a,b){if(this.o&&!this.isDisposed()){var c=b||{};switch(a){case "addEventListener":if(u(c.event)&&(c=c.event,!(c in this.j))){var d=v(this.te,this,c);this.j[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":u(c.event)&&Vp(this,c.event);break;default:this.f.isReady()&&this.f[a]&&(c=Wp(a,b||{}),c=this.f[a].apply(this.f,c),(c=Xp(a,c))&&this.o&&!this.isDisposed()&&Up(this.h,a,c))}}};
g.te=function(a,b){this.o&&!this.isDisposed()&&Up(this.h,a,this.Lb(a,b))};
g.Lb=function(a,b){if(null!=b)return{value:b}};
function Vp(a,b){b in a.j&&(a.removeEventListener(b,a.j[b]),delete a.j[b])}
g.G=function(){this.h.unsubscribe("command",this.Lc,this);this.h=null;for(var a in this.j)Vp(this,a);Tp.I.G.call(this)};function Yp(a,b){Tp.call(this,b);this.f=a;this.start()}
x(Yp,Tp);Yp.prototype.addEventListener=function(a,b){this.f.addEventListener(a,b)};
Yp.prototype.removeEventListener=function(a,b){this.f.removeEventListener(a,b)};
function Wp(a,b){switch(a){case "loadVideoById":return b=wj(b),yj(b),[b];case "cueVideoById":return b=wj(b),yj(b),[b];case "loadVideoByPlayerVars":return yj(b),[b];case "cueVideoByPlayerVars":return yj(b),[b];case "loadPlaylist":return b=xj(b),yj(b),[b];case "cuePlaylist":return b=xj(b),yj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Xp(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Yp.prototype.Lb=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Yp.I.Lb.call(this,a,b)};
Yp.prototype.G=function(){Yp.I.G.call(this);delete this.f};function Zp(){var a=this.h=new $i,b=v(this.pe,this);a.h=b;a.j=null;this.o=[];this.B=!1;this.l=(a=G("POST_MESSAGE_ORIGIN",void 0))&&ah(a)?a:null;this.A={}}
g=Zp.prototype;g.pe=function(a,b){if(this.l&&this.l!=this.h.origin)this.dispose();else if("addEventListener"==a&&b){var c=b[0];this.A[c]||"onReady"==c||(this.addEventListener(c,$p(this,c)),this.A[c]=!0)}else this.Yc(a,b)};
g.Yc=function(){};
function $p(a,b){return v(function(a){this.sendMessage(b,a)},a)}
g.addEventListener=function(){};
g.vd=function(){this.B=!0;this.sendMessage("initialDelivery",this.Mb());this.sendMessage("onReady");y(this.o,this.Zc,this);this.o=[]};
g.Mb=function(){return null};
function aq(a,b){a.sendMessage("infoDelivery",b)}
g.Zc=function(a){this.B?this.h.sendMessage(a):this.o.push(a)};
g.sendMessage=function(a,b){this.Zc({event:a,info:void 0==b?null:b})};
g.dispose=function(){this.h=null};function bq(a){Zp.call(this);this.f=a;this.j=[];this.addEventListener("onReady",v(this.Zd,this));this.addEventListener("onVideoProgress",v(this.xe,this));this.addEventListener("onVolumeChange",v(this.ye,this));this.addEventListener("onApiChange",v(this.se,this));this.addEventListener("onPlaybackQualityChange",v(this.ue,this));this.addEventListener("onPlaybackRateChange",v(this.ve,this));this.addEventListener("onStateChange",v(this.we,this))}
x(bq,Zp);g=bq.prototype;g.Yc=function(a,b){if(this.f[a]){b=b||[];if(0<b.length&&uj(a)){var c;c=b;if(ia(c[0])&&!ea(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=wj.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=vj.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=xj.apply(window,c)}c=d}yj(c);b.length=1;b[0]=c}this.f[a].apply(this.f,b);uj(a)&&aq(this,this.Mb())}};
g.Zd=function(){var a=v(this.vd,this);this.h.f=a};
g.addEventListener=function(a,b){this.j.push({sd:a,listener:b});this.f.addEventListener(a,b)};
g.Mb=function(){if(!this.f)return null;var a=this.f.getApiInterface();Ua(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,h=0;0==f.search("get")?h=3:0==f.search("is")&&(h=2);f=f.charAt(h).toLowerCase()+f.substr(h+1);try{var k=this.f[e]();b[f]=k}catch(l){}}}b.videoData=this.f.getVideoData();return b};
g.we=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),videoUrl:this.f.getVideoUrl(),playlist:this.f.getPlaylist(),playlistIndex:this.f.getPlaylistIndex()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());
this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());aq(this,a)};
g.ue=function(a){aq(this,{playbackQuality:a})};
g.ve=function(a){aq(this,{playbackRate:a})};
g.se=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var h=0,k=f.length;h<k;h++){var l=f[h],q=this.f.getOption(e,l);b[e][l]=q}}this.sendMessage("apiInfoDelivery",b)};
g.ye=function(){aq(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
g.xe=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());aq(this,a)};
g.dispose=function(){bq.I.dispose.call(this);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.f.removeEventListener(b.sd,b.listener)}this.j=[]};function cq(a,b,c){V.call(this);this.f=a;this.h=b;this.j=c}
x(cq,V);function Up(a,b,c){if(!a.isDisposed()){var d=a.f,e=a.h;a=a.j;d.isDisposed()||e!=d.f||(b={id:a,command:b},c&&(b.data=c),d.f.postMessage(L(b),d.j))}}
cq.prototype.G=function(){this.h=this.f=null;cq.I.G.call(this)};function dq(a,b,c){D.call(this);this.f=a;this.j=c;this.o=M(window,"message",v(this.l,this));this.h=new cq(this,a,b);cc(this,qa(dc,this.h))}
x(dq,D);dq.prototype.l=function(a){var b;if(b=!this.isDisposed())if(b=a.origin==this.j)a:{b=this.f;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(c=a.data,u(c))){try{c=sd(c)}catch(d){return}c.command&&(a=this.h,b=c.command,c=c.data,a.isDisposed()||a.D("command",b,c))}};
dq.prototype.G=function(){Oe(this.o);this.f=null;dq.I.G.call(this)};var eq=!1;function fq(a){if(a=a.match(/[\d]+/g))a.length=3,a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(eq=!0,a.description)){fq(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){eq=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(eq=(a=navigator.mimeTypes["application/x-shockwave-flash"])&&a.enabledPlugin)){fq(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");eq=!0;fq(b.GetVariable("$version"));return}catch(c){}try{b=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");eq=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),eq=!0,fq(b.GetVariable("$version"))}catch(c){}})();function gq(a){return(a=a.exec(vb))?a[1]:""}
(function(){if(Sf)return gq(/Firefox\/([0-9.]+)/);if(K||gd||fd)return nd;if(Wf)return gq(/Chrome\/([0-9.]+)/);if(Xf&&!(ed()||B("iPad")||B("iPod")))return gq(/Version\/([0-9.]+)/);if(Tf||Uf){var a;if(a=/Version\/(\S+).*Mobile\/(\S+)/.exec(vb))return a[1]+"."+a[2]}else if(Vf)return(a=gq(/Android\s+([0-9.]+)/))?a:gq(/Version\/([0-9.]+)/);return""})();function hq(a){if(a=a.responseText)iq=(a=a.match(/{"id": "(.*)"}/))&&a[1]?a[1]:"",p("yt.www.ads.data.encryptedBiscottiId",iq,void 0)}
var iq="";function jq(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&fh(c)}}
;function kq(a){O.call(this,1,arguments)}
x(kq,O);function lq(a,b){O.call(this,2,arguments);this.h=a;this.f=b}
x(lq,O);function mq(a,b,c,d){O.call(this,1,arguments);this.f=b;this.j=c||null;this.h=d||null}
x(mq,O);function nq(a,b){O.call(this,1,arguments);this.h=a;this.f=b||null}
x(nq,O);function oq(a){O.call(this,1,arguments)}
x(oq,O);var pq=new P("ypc-core-load",kq),qq=new P("ypc-guide-sync-success",lq),rq=new P("ypc-purchase-success",mq),sq=new P("ypc-subscription-cancel",oq),tq=new P("ypc-subscription-cancel-success",nq),uq=new P("ypc-init-subscription",oq);var vq=!1,wq=[],xq=[];function yq(a){a.f?vq?Q(ui,a):Q(pq,new kq(function(){Q(uq,new oq(a.f))})):zq(a.h,a.o,a.j,a.source)}
function Aq(a){a.f?vq?Q(zi,a):Q(pq,new kq(function(){Q(sq,new oq(a.f))})):Bq(a.h,a.subscriptionId,a.o,a.j,a.source)}
function Cq(a){Dq(Xa(a.f))}
function Eq(a){Fq(Xa(a.f))}
function Gq(a){Hq(a.f,a.isEnabled,null)}
function Iq(a,b,c,d){Hq(a,b,c,d)}
function Jq(a){var b=a.h,c=a.f.subscriptionId;b&&c&&Q(ti,new li(b,c,a.f.channelInfo))}
function Kq(a){var b=a.f;db(a.h,function(a,d){Q(ti,new li(d,a,b[d]))})}
function Lq(a){Q(yi,new ii(a.h.itemId));a.f&&a.f.length&&(Mq(a.f,yi),Mq(a.f,Ai))}
function zq(a,b,c,d){var e=new ii(a);Q(ri,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=G("PLAYBACK_ID"))&&(c.plid=d);(d=G("EVENT_ID"))&&(c.ei=d);b&&Nq(b,c);Sd("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",ac:f,R:c,ca:function(b,c){var d=c.response;Q(ti,new li(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&J("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&jq(d.actions)},
Wb:function(){Q(si,e)}})}
function Bq(a,b,c,d,e){var f=new ii(a);Q(wi,f);var h={};d&&(h.eurl=d);e&&(h.source=e);d={};d.c=a;d.s=b;(a=G("PLAYBACK_ID"))&&(d.plid=a);(a=G("EVENT_ID"))&&(d.ei=a);c&&Nq(c,d);Sd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",ac:h,R:d,ca:function(a,b){var c=b.response;Q(yi,f);c.actions&&jq(c.actions)},
Wb:function(){Q(xi,f)}})}
function Hq(a,b,c,d){if(null!==b||null!==c){var e={};a&&(e.channel_id=a);null===b||(e.email_on_upload=b);null===c||(e.receive_no_updates=c);Sd("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",R:e,onError:function(){d&&d()}})}}
function Dq(a){if(a.length){var b=Za(a,0,40);Q("subscription-batch-subscribe-loading");Mq(b,ri);var c={};c.a=b.join(",");var d=function(){Q("subscription-batch-subscribe-loaded");Mq(b,si)};
Sd("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",R:c,ca:function(c,f){d();var h=f.response,k=h.id;if(ea(k)&&k.length==b.length){var l=h.channel_info_map;y(k,function(a,c){var d=b[c];Q(ti,new li(d,a,l[d]))});
a.length?Dq(a):Q("subscription-batch-subscribe-finished")}},
onError:function(){d();Q("subscription-batch-subscribe-failure")}})}}
function Fq(a){if(a.length){var b=Za(a,0,40);Q("subscription-batch-unsubscribe-loading");Mq(b,wi);var c={};c.c=b.join(",");var d=function(){Q("subscription-batch-unsubscribe-loaded");Mq(b,xi)};
Sd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",R:c,ca:function(){d();Mq(b,yi);a.length&&Fq(a)},
onError:function(){d()}})}}
function Mq(a,b){y(a,function(a){Q(b,new ii(a))})}
function Nq(a,b){var c=Kd(a),d;for(d in c)b[d]=c[d]}
;var Oq,Pq=null,Qq=null,Rq=null,Sq=!1;
function Tq(){var a=G("PLAYER_CONFIG",void 0),b=G("REVERSE_MOBIUS_PERCENT",void 0);if(zg&&100*Math.random()<b)try{Sd("//googleads.g.doubleclick.net/pagead/id",{format:"RAW",method:"GET",ca:hq,withCredentials:!0})}catch(e){}if(G("REQUEST_POST_MESSAGE_ORIGIN")){if(!Oq){Oq=new $i;Oq.f=Tq;return}Oq.origin&&"*"!=Oq.origin&&(a.args.post_message_origin=Oq.origin)}var c=document.referrer,b=G("POST_MESSAGE_ORIGIN"),d=!1;u(c)&&u(b)&&-1<c.indexOf(b)&&ah(b)&&ah(c)&&(d=!0);window!=window.top&&c&&c!=document.URL&&
(a.args.loaderUrl=c);G("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&yj(a.args);Pq=Wh("player",a);c=G("POST_MESSAGE_ID","player");G("ENABLE_JS_API")?Rq=new bq(Pq):G("ENABLE_POST_API")&&u(c)&&u(b)&&(Qq=new dq(window.parent,c,b),Rq=new Yp(Pq,Qq.h));(Sq=d&&!G("ENABLE_CAST_API"))?a.args.disableCast="1":(a=Pq,Uo(),Ep=a,Ep.addEventListener("onReady",Gp),Ep.addEventListener("onRemoteReceiverSelected",Ip),Fp.push(uc("yt-remote-receiver-availability-change",Hp)),Fp.push(uc("yt-remote-auto-connect",
Jp)));G("BG_P")&&(G("BG_I")||G("BG_IU"))&&Jc();ce();Kp=Pq;Kp.addEventListener("SUBSCRIBE",Np);Kp.addEventListener("UNSUBSCRIBE",Qp);Lp.push(nh(ti,Rp),nh(yi,Sp))}
;p("yt.setConfig",ic,void 0);p("yt.setMsg",function(a){jc(hc,arguments)},void 0);
p("yt.logging.errors.log",function(a,b,c,d){if(a&&window&&window.yterr&&!(5<=Yd)){var e=a.stacktrace,f=a.columnNumber;var h=r("window.location.href");if(u(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:h,stack:"Not available"};else{var k,l,q=!1;try{k=a.lineNumber||a.line||"Not available"}catch(E){k="Not available",q=!0}try{l=a.fileName||a.filename||a.sourceURL||m.$googDebugFname||h}catch(E){l="Not available",q=!0}a=!q&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?
a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:k,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;d=d||G("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);k=a.lineNumber.toString();isNaN(k)||isNaN(f)||(k=k+":"+f);Xd[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")||(b={ac:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:k,level:b||"ERROR"},R:{url:G("PAGE_NAME",window.location.href),file:a.fileName,"client.name":c||"WEB"},
method:"POST"},e&&(b.R.stack=e),d&&(b.R["client.version"]=d),Sd("/error_204",b),Xd[a.message]=!0,Yd++)}},void 0);
p("writeEmbed",Tq,void 0);p("yt.www.watch.ads.restrictioncookie.spr",function(a){(a=a+"mac_204?action_fcts=1")&&fh(a);return!0},void 0);
var Uq=kc(function(){th("ol");vq=!0;xq.push(nh(qi,yq),nh(vi,Aq));vq||(xq.push(nh(ui,yq),nh(zi,Aq),nh(ni,Cq),nh(oi,Eq),nh(pi,Gq)),wq.push(uc("subscription-prefs",Iq)),xq.push(nh(rq,Jq),nh(tq,Lq),nh(qq,Kq)));Yf.getInstance();var a=1<window.devicePixelRatio;if(cg(0,119)!=a){var b="f"+(Math.floor(119/31)+1),c=bg(b)||0,c=a?c|67108864:c&-67108865;0==c?delete Zf[b]:(a=c.toString(16),Zf[b]=a.toString());var d,b=[];for(d in Zf)b.push(d+"="+escape(Zf[d]));d=b.join("&");Xe("PREF",d,63072E3)}}),Vq=kc(function(){var a=
Pq;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();G("PL_ATT")&&(Ic=null);for(var a=0,b=ae.length;a<b;a++){var c=ae[a],d=r("yt.scheduler.instance.cancelJob");d?d(c):I(c)}ae.length=0;a=Ec("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))zc(a),b.parentNode.removeChild(b);be=!1;ic("DCLKSTAT",0);wc(wq);wq.length=0;oh(xq);xq.length=0;vq=!1;Kp&&(Kp.removeEventListener("SUBSCRIBE",Op),Kp.removeEventListener("UNSUBSCRIBE",Qp));Kp=null;oh(Lp);Lp.length=0;Sq||(wc(Fp),Fp.length=
0,Ep&&(Ep.removeEventListener("onRemoteReceiverSelected",Ip),Ep.removeEventListener("onReady",Gp),Ep=null),kp());ec(Rq,Qq);Pq&&Pq.destroy()});
window.addEventListener?(window.addEventListener("load",Uq),window.addEventListener("unload",Vq)):window.attachEvent&&(window.attachEvent("onload",Uq),window.attachEvent("onunload",Vq));var Wq=Ui.getInstance(),Xq=S(Wq);Xq in Zi||(Wq.register(),Wq.Kc.push(uc("yt-uix-init-"+Xq,Wq.init,Wq)),Wq.Kc.push(uc("yt-uix-dispose-"+Xq,Wq.dispose,Wq)),Zi[Xq]=Wq);})();
