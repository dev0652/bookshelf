!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.__esModule?e.default:e}var n={},i={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequired7c6=a),a.register("bpxeT",(function(e,t){"use strict";function r(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function s(e){r(o,i,a,s,u,"next",e)}function u(e){r(o,i,a,s,u,"throw",e)}s(void 0)}))}}})),a.register("2TvXO",(function(e,t){var r=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),o=new O(n||[]);return a._invoke=function(e,t,r){var n=l;return function(i,a){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===i)throw a;return R()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var s=E(o,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(e,t,r);if("normal"===u.type){if(n=r.done?h:d,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(e,r,o),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l="suspendedStart",d="suspendedYield",p="executing",h="completed",v={};function m(){}function g(){}function y(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(A([])));k&&k!==r&&n.call(k,a)&&(b=k);var x=y.prototype=m.prototype=Object.create(b);function I(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(i,a,o,s){var u=f(e[i],e,a);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):t.resolve(l).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,n){function a(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(a,a):a()}}function E(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=f(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function A(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:R}}function R(){return{value:t,done:!0}}return g.prototype=y,u(x,"constructor",y),u(y,"constructor",g),g.displayName=u(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},I(_.prototype),u(_.prototype,o,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new _(c(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},I(x),u(x,s,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=A,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("gD1JV",(function(e,t){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r(e,t)}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return o.apply(null,arguments)};var r,n=(r=a("gD1JV"))&&r.__esModule?r:{default:r};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,r){return(o=i()?Reflect.construct:function(e,t,r){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return r&&n.default(a,r.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("fVNic",(function(e,t){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r(e)}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==n.default(t)&&"function"!=typeof t?r.default(e):t};var r=i(a("ds8z5")),n=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),a.register("6qd2L",(function(e,t){var r,n,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var u,c=[],f=!1,l=-1;function d(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&p())}function p(){if(!f){var e=s(d);f=!0;for(var t=c.length;t;){for(u=c,c=[];++l<t;)u&&u[l].run();l=-1,t=c.length}u=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||f||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n.default(e)););return e};var r,n=(r=a("fVNic"))&&r.__esModule?r:{default:r}})),a.register("dIxxU",(function(t,r){e(t.exports,"default",(function(){return a("ke5Oc").default}));var n=a("ke5Oc");n.default.Axios,n.default.AxiosError,n.default.CanceledError,n.default.isCancel,n.default.CancelToken,n.default.VERSION,n.default.all,n.default.Cancel,n.default.isAxiosError,n.default.spread,n.default.toFormData,n.default.AxiosHeaders,n.default.HttpStatusCode,n.default.formToJSON,n.default.mergeConfig})),a.register("ke5Oc",(function(t,r){e(t.exports,"default",(function(){return k}));var n=a("c4C4W"),i=a("lGmLA"),o=a("9jbh3"),s=a("knWMA"),u=a("c74ni"),c=a("gipWz"),f=a("dW1zJ"),l=a("77MZz"),d=a("lXDKh"),p=a("kLR29"),h=a("12Kat"),v=a("5TB86"),m=a("9BdDr"),g=a("kv87N"),y=a("gHHim"),b=a("5siR6");var w=function e(t){var r=new(0,o.default)(t),a=(0,i.default)(o.default.prototype.request,r);return n.default.extend(a,o.default.prototype,r,{allOwnKeys:!0}),n.default.extend(a,r,null,{allOwnKeys:!0}),a.create=function(r){return e((0,s.default)(t,r))},a}(u.default);w.Axios=o.default,w.CanceledError=f.default,w.CancelToken=l.default,w.isCancel=d.default,w.VERSION=p.VERSION,w.toFormData=h.default,w.AxiosError=v.default,w.Cancel=w.CanceledError,w.all=function(e){return Promise.all(e)},w.spread=m.default,w.isAxiosError=g.default,w.mergeConfig=s.default,w.AxiosHeaders=y.default,w.formToJSON=function(e){return(0,c.default)(n.default.isHTMLForm(e)?new FormData(e):e)},w.HttpStatusCode=b.default,w.default=w;var k=w})),a.register("c4C4W",(function(n,i){e(n.exports,"default",(function(){return z}));var o,s=a("l5bVx"),u=a("lGmLA"),c=Object.prototype.toString,f=Object.getPrototypeOf,l=(o=Object.create(null),function(e){var t=c.call(e);return o[t]||(o[t]=t.slice(8,-1).toLowerCase())}),d=function(e){return e=e.toLowerCase(),function(t){return l(t)===e}},p=function(e){return function(t){return(void 0===t?"undefined":r(s)(t))===e}},h=Array.isArray,v=p("undefined");var m=d("ArrayBuffer");var g=p("string"),y=p("function"),b=p("number"),w=function(e){return null!==e&&"object"==typeof e},k=function(e){if("object"!==l(e))return!1;var t=f(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},x=d("Date"),I=d("File"),_=d("Blob"),E=d("FileList"),T=d("URLSearchParams");function S(e,t){var r,n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.allOwnKeys,o=void 0!==a&&a;if(null!=e)if("object"!=typeof e&&(e=[e]),h(e))for(r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else{var s,u=o?Object.getOwnPropertyNames(e):Object.keys(e),c=u.length;for(r=0;r<c;r++)s=u[r],t.call(null,e[s],s,e)}}function O(e,t){t=t.toLowerCase();for(var r,n=Object.keys(e),i=n.length;i-- >0;)if(t===(r=n[i]).toLowerCase())return r;return null}var A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,R=function(e){return!v(e)&&e!==A};var C,P,N=(C="undefined"!=typeof Uint8Array&&f(Uint8Array),function(e){return C&&e instanceof C}),L=d("HTMLFormElement"),D=(P=Object.prototype.hasOwnProperty,function(e,t){return P.call(e,t)}),M=d("RegExp"),U=function(e,t){var r=Object.getOwnPropertyDescriptors(e),n={};S(r,(function(r,i){!1!==t(r,i,e)&&(n[i]=r)})),Object.defineProperties(e,n)},j="abcdefghijklmnopqrstuvwxyz",B="0123456789",F={DIGIT:B,ALPHA:j,ALPHA_DIGIT:j+j.toUpperCase()+B};var z={isArray:h,isArrayBuffer:m,isBuffer:function(e){return null!==e&&!v(e)&&null!==e.constructor&&!v(e.constructor)&&y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||c.call(e)===t||y(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&m(e.buffer)},isString:g,isNumber:b,isBoolean:function(e){return!0===e||!1===e},isObject:w,isPlainObject:k,isUndefined:v,isDate:x,isFile:I,isBlob:_,isRegExp:M,isFunction:y,isStream:function(e){return w(e)&&y(e.pipe)},isURLSearchParams:T,isTypedArray:N,isFileList:E,forEach:S,merge:function e(){for(var t=(R(this)&&this||{}).caseless,r={},n=function(n,i){var a=t&&O(r,i)||i;k(r[a])&&k(n)?r[a]=e(r[a],n):k(n)?r[a]=e({},n):h(n)?r[a]=n.slice():r[a]=n},i=0,a=arguments.length;i<a;i++)arguments[i]&&S(arguments[i],n);return r},extend:function(e,t,r){var n=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).allOwnKeys;return S(t,(function(t,n){r&&y(t)?e[n]=(0,u.default)(t,r):e[n]=t}),{allOwnKeys:n}),e},trim:function(e){return e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,r,n){e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:function(e,t,r,n){var i,a,o,s={};if(t=t||{},null==e)return t;do{for(a=(i=Object.getOwnPropertyNames(e)).length;a-- >0;)o=i[a],n&&!n(o,e,t)||s[o]||(t[o]=e[o],s[o]=!0);e=!1!==r&&f(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:l,kindOfTest:d,endsWith:function(e,t,r){e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},toArray:function(e){if(!e)return null;if(h(e))return e;var t=e.length;if(!b(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r},forEachEntry:function(e,t){for(var r,n=(e&&e[Symbol.iterator]).call(e);(r=n.next())&&!r.done;){var i=r.value;t.call(e,i[0],i[1])}},matchAll:function(e,t){for(var r,n=[];null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:L,hasOwnProperty:D,hasOwnProp:D,reduceDescriptors:U,freezeMethods:function(e){U(e,(function(t,r){if(y(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;var n=e[r];y(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=function(){throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:function(e,t){var r={},n=function(e){e.forEach((function(e){r[e]=!0}))};return h(e)?n(e):n(String(e).split(t)),r},toCamelCase:function(e){return e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r}))},noop:function(){},toFiniteNumber:function(e,t){return e=+e,Number.isFinite(e)?e:t},findKey:O,global:A,isContextDefined:R,ALPHABET:F,generateString:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F.ALPHA_DIGIT,r="",n=t.length;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&y(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:function(e){var t=new Array(10),r=function(e,n){if(w(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;var i=h(e)?[]:{};return S(e,(function(e,t){var a=r(e,n+1);!v(a)&&(i[t]=a)})),t[n]=void 0,i}}return e};return r(e,0)}}})),a.register("lGmLA",(function(t,r){function n(e,t){return function(){return e.apply(t,arguments)}}e(t.exports,"default",(function(){return n}))})),a.register("9jbh3",(function(t,n){e(t.exports,"default",(function(){return g}));var i=a("8MBJY"),o=a("a2hTj"),s=a("c4C4W"),u=a("6d5Pb"),c=a("JRZh2"),f=a("k04r0"),l=a("knWMA"),d=a("gYMA1"),p=a("9SeBc"),h=a("gHHim"),v=p.default.validators,m=function(){function e(t){r(i)(this,e),this.defaults=t,this.interceptors={request:new(0,c.default),response:new(0,c.default)}}return r(o)(e,[{key:"request",value:function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{};var r,n=(t=(0,l.default)(this.defaults,t)).transitional,i=t.paramsSerializer,a=t.headers;void 0!==n&&p.default.assertOptions(n,{silentJSONParsing:v.transitional(v.boolean),forcedJSONParsing:v.transitional(v.boolean),clarifyTimeoutError:v.transitional(v.boolean)},!1),null!=i&&(s.default.isFunction(i)?t.paramsSerializer={serialize:i}:p.default.assertOptions(i,{encode:v.function,serialize:v.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),(r=a&&s.default.merge(a.common,a[t.method]))&&s.default.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete a[e]})),t.headers=h.default.concat(r,a);var o=[],u=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(u=u&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));var c,d=[];this.interceptors.response.forEach((function(e){d.push(e.fulfilled,e.rejected)}));var m,g=0;if(!u){var y=[f.default.bind(this),void 0];for(y.unshift.apply(y,o),y.push.apply(y,d),m=y.length,c=Promise.resolve(t);g<m;)c=c.then(y[g++],y[g++]);return c}m=o.length;var b=t;for(g=0;g<m;){var w=o[g++],k=o[g++];try{b=w(b)}catch(e){k.call(this,e);break}}try{c=f.default.call(this,b)}catch(e){return Promise.reject(e)}for(g=0,m=d.length;g<m;)c=c.then(d[g++],d[g++]);return c}},{key:"getUri",value:function(e){e=(0,l.default)(this.defaults,e);var t=(0,d.default)(e.baseURL,e.url);return(0,u.default)(t,e.params,e.paramsSerializer)}}]),e}();s.default.forEach(["delete","get","head","options"],(function(e){m.prototype[e]=function(t,r){return this.request((0,l.default)(r||{},{method:e,url:t,data:(r||{}).data}))}})),s.default.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,i){return this.request((0,l.default)(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}m.prototype[e]=t(),m.prototype[e+"Form"]=t(!0)}));var g=m})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e}})),a.register("6d5Pb",(function(t,r){e(t.exports,"default",(function(){return s}));var n=a("c4C4W"),i=a("8zJup");function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function s(e,t,r){if(!t)return e;var a,s=r&&r.encode||o,u=r&&r.serialize;if(a=u?u(t,r):n.default.isURLSearchParams(t)?t.toString():new(0,i.default)(t,r).toString(s)){var c=e.indexOf("#");-1!==c&&(e=e.slice(0,c)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}})),a.register("8zJup",(function(t,r){e(t.exports,"default",(function(){return u}));var n=a("12Kat");function i(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function o(e,t){this._pairs=[],e&&(0,n.default)(e,this,t)}var s=o.prototype;s.append=function(e,t){this._pairs.push([e,t])},s.toString=function(e){var t=e?function(t){return e.call(this,t,i)}:i;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var u=o})),a.register("12Kat",(function(t,r){e(t.exports,"default",(function(){return d}));var n=a("c4C4W"),i=a("5TB86"),o=a("beknR"),s=a("3aNd6").Buffer;function u(e){return n.default.isPlainObject(e)||n.default.isArray(e)}function c(e){return n.default.endsWith(e,"[]")?e.slice(0,-2):e}function f(e,t,r){return e?e.concat(t).map((function(e,t){return e=c(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}var l=n.default.toFlatObject(n.default,{},null,(function(e){return/^is[A-Z]/.test(e)}));var d=function(e,t,r){if(!n.default.isObject(e))throw new TypeError("target must be an object");t=t||new(o.default||FormData);var a=(r=n.default.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!n.default.isUndefined(t[e])}))).metaTokens,d=r.visitor||g,p=r.dots,h=r.indexes,v=(r.Blob||"undefined"!=typeof Blob&&Blob)&&n.default.isSpecCompliantForm(t);if(!n.default.isFunction(d))throw new TypeError("visitor must be a function");function m(e){if(null===e)return"";if(n.default.isDate(e))return e.toISOString();if(!v&&n.default.isBlob(e))throw new(0,i.default)("Blob is not supported. Use a Buffer instead.");return n.default.isArrayBuffer(e)||n.default.isTypedArray(e)?v&&"function"==typeof Blob?new Blob([e]):s.from(e):e}function g(e,r,i){var o=e;if(e&&!i&&"object"==typeof e)if(n.default.endsWith(r,"{}"))r=a?r:r.slice(0,-2),e=JSON.stringify(e);else if(n.default.isArray(e)&&function(e){return n.default.isArray(e)&&!e.some(u)}(e)||(n.default.isFileList(e)||n.default.endsWith(r,"[]"))&&(o=n.default.toArray(e)))return r=c(r),o.forEach((function(e,i){!n.default.isUndefined(e)&&null!==e&&t.append(!0===h?f([r],i,p):null===h?r:r+"[]",m(e))})),!1;return!!u(e)||(t.append(f(i,r,p),m(e)),!1)}var y=[],b=Object.assign(l,{defaultVisitor:g,convertValue:m,isVisitable:u});if(!n.default.isObject(e))throw new TypeError("data must be an object");return function e(r,i){if(!n.default.isUndefined(r)){if(-1!==y.indexOf(r))throw Error("Circular reference detected in "+i.join("."));y.push(r),n.default.forEach(r,(function(r,a){!0===(!(n.default.isUndefined(r)||null===r)&&d.call(t,r,n.default.isString(a)?a.trim():a,i,b))&&e(r,i?i.concat(a):[a])})),y.pop()}}(e),t}})),a.register("5TB86",(function(t,r){e(t.exports,"default",(function(){return u}));var n=a("c4C4W");function i(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}n.default.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n.default.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var o=i.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((function(e){s[e]={value:e}})),Object.defineProperties(i,s),Object.defineProperty(o,"isAxiosError",{value:!0}),i.from=function(e,t,r,a,s,u){var c=Object.create(o);return n.default.toFlatObject(e,c,(function(e){return e!==Error.prototype}),(function(e){return"isAxiosError"!==e})),i.call(c,e.message,t,r,a,s),c.cause=e,c.name=e.name,u&&Object.assign(c,u),c};var u=i})),a.register("beknR",(function(t,r){e(t.exports,"default",(function(){return n}));var n=null})),a.register("3aNd6",(function(t,n){e(t.exports,"Buffer",(function(){return i}),(function(e){return i=e})),e(t.exports,"INSPECT_MAX_BYTES",(function(){return o}),(function(e){return o=e}));var i,o,s=a("ds8z5"),u=a("8MBJY"),c=a("a2hTj"),f=a("eYQtU"),l=a("l5bVx"),d=a("2MbLg"),p=a("5d11t"),h=a("7rddL"),v="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=y,o=50;var m=2147483647;function g(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,y.prototype),t}function y(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return b(e,t,r)}function b(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!y.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var r=0|E(e,t),n=g(r),i=n.write(e,t);i!==r&&(n=n.slice(0,i));return n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(ae(e,Uint8Array)){var t=new Uint8Array(e);return I(t.buffer,t.byteOffset,t.byteLength)}return x(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===e?"undefined":r(l)(e)));if(ae(e,ArrayBuffer)||e&&ae(e.buffer,ArrayBuffer))return I(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(ae(e,SharedArrayBuffer)||e&&ae(e.buffer,SharedArrayBuffer)))return I(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return y.from(i,t,n);var a=function(e){if(y.isBuffer(e)){var t=0|_(e.length),r=g(t);return 0===r.length||e.copy(r,0,0,t),r}if(void 0!==e.length)return"number"!=typeof e.length||oe(e.length)?g(0):x(e);if("Buffer"===e.type&&Array.isArray(e.data))return x(e.data)}(e);if(a)return a;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return y.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===e?"undefined":r(l)(e)))}function w(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function k(e){return w(e),g(e<0?0:0|_(e))}function x(e){for(var t=e.length<0?0:0|_(e.length),r=g(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function I(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,y.prototype),n}function _(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return 0|e}function E(e,t){if(y.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ae(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+(void 0===e?"undefined":r(l)(e)));var n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;for(var a=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return re(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return ne(e).length;default:if(a)return i?-1:re(e).length;t=(""+t).toLowerCase(),a=!0}}function T(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return F(this,t,r);case"utf8":case"utf-8":return M(this,t,r);case"ascii":return j(this,t,r);case"latin1":case"binary":return B(this,t,r);case"base64":return D(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return z(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function S(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function O(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),oe(r=+r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=y.from(t,n)),y.isBuffer(t))return 0===t.length?-1:A(e,t,r,n,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):A(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function A(e,t,r,n,i){var a,o=1,s=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;o=2,s/=2,u/=2,r/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){var f=-1;for(a=r;a<s;a++)if(c(e,a)===c(t,-1===f?0:a-f)){if(-1===f&&(f=a),a-f+1===u)return f*o}else-1!==f&&(a-=a-f),f=-1}else for(r+u>s&&(r=s-u),a=r;a>=0;a--){for(var l=!0,d=0;d<u;d++)if(c(e,a+d)!==c(t,d)){l=!1;break}if(l)return a}return-1}function R(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var a,o=t.length;for(n>o/2&&(n=o/2),a=0;a<n;++a){var s=parseInt(t.substr(2*a,2),16);if(oe(s))return a;e[r+a]=s}return a}function C(e,t,r,n){return ie(re(t,e.length-r),e,r,n)}function P(e,t,r,n){return ie(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function N(e,t,r,n){return ie(ne(t),e,r,n)}function L(e,t,r,n){return ie(function(e,t){for(var r,n,i,a=[],o=0;o<e.length&&!((t-=2)<0);++o)n=(r=e.charCodeAt(o))>>8,i=r%256,a.push(i),a.push(n);return a}(t,e.length-r),e,r,n)}function D(e,t,r){return 0===t&&r===e.length?p.fromByteArray(e):p.fromByteArray(e.slice(t,r))}function M(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var a=e[i],o=null,s=a>239?4:a>223?3:a>191?2:1;if(i+s<=r){var u=void 0,c=void 0,f=void 0,l=void 0;switch(s){case 1:a<128&&(o=a);break;case 2:128==(192&(u=e[i+1]))&&(l=(31&a)<<6|63&u)>127&&(o=l);break;case 3:u=e[i+1],c=e[i+2],128==(192&u)&&128==(192&c)&&(l=(15&a)<<12|(63&u)<<6|63&c)>2047&&(l<55296||l>57343)&&(o=l);break;case 4:u=e[i+1],c=e[i+2],f=e[i+3],128==(192&u)&&128==(192&c)&&128==(192&f)&&(l=(15&a)<<18|(63&u)<<12|(63&c)<<6|63&f)>65535&&l<1114112&&(o=l)}}null===o?(o=65533,s=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=s}return function(e){var t=e.length;if(t<=U)return String.fromCharCode.apply(String,e);var r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=U));return r}(n)}y.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),y.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(y.prototype,"parent",{enumerable:!0,get:function(){if(y.isBuffer(this))return this.buffer}}),Object.defineProperty(y.prototype,"offset",{enumerable:!0,get:function(){if(y.isBuffer(this))return this.byteOffset}}),y.poolSize=8192,y.from=function(e,t,r){return b(e,t,r)},Object.setPrototypeOf(y.prototype,Uint8Array.prototype),Object.setPrototypeOf(y,Uint8Array),y.alloc=function(e,t,r){return function(e,t,r){return w(e),e<=0?g(e):void 0!==t?"string"==typeof r?g(e).fill(t,r):g(e).fill(t):g(e)}(e,t,r)},y.allocUnsafe=function(e){return k(e)},y.allocUnsafeSlow=function(e){return k(e)},y.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==y.prototype},y.compare=function(e,t){if(ae(e,Uint8Array)&&(e=y.from(e,e.offset,e.byteLength)),ae(t,Uint8Array)&&(t=y.from(t,t.offset,t.byteLength)),!y.isBuffer(e)||!y.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,i=0,a=Math.min(r,n);i<a;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},y.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},y.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return y.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=y.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var a=e[r];if(ae(a,Uint8Array))i+a.length>n.length?(y.isBuffer(a)||(a=y.from(a)),a.copy(n,i)):Uint8Array.prototype.set.call(n,a,i);else{if(!y.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(n,i)}i+=a.length}return n},y.byteLength=E,y.prototype._isBuffer=!0,y.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)S(this,t,t+1);return this},y.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)S(this,t,t+3),S(this,t+1,t+2);return this},y.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)S(this,t,t+7),S(this,t+1,t+6),S(this,t+2,t+5),S(this,t+3,t+4);return this},y.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?M(this,0,e):T.apply(this,arguments)},y.prototype.toLocaleString=y.prototype.toString,y.prototype.equals=function(e){if(!y.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===y.compare(this,e)},y.prototype.inspect=function(){var e="",t=o;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},v&&(y.prototype[v]=y.prototype.inspect),y.prototype.compare=function(e,t,n,i,a){if(ae(e,Uint8Array)&&(e=y.from(e,e.offset,e.byteLength)),!y.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+(void 0===e?"undefined":r(l)(e)));if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===a&&(a=this.length),t<0||n>e.length||i<0||a>this.length)throw new RangeError("out of range index");if(i>=a&&t>=n)return 0;if(i>=a)return-1;if(t>=n)return 1;if(this===e)return 0;for(var o=(a>>>=0)-(i>>>=0),s=(n>>>=0)-(t>>>=0),u=Math.min(o,s),c=this.slice(i,a),f=e.slice(t,n),d=0;d<u;++d)if(c[d]!==f[d]){o=c[d],s=f[d];break}return o<s?-1:s<o?1:0},y.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},y.prototype.indexOf=function(e,t,r){return O(this,e,t,r,!0)},y.prototype.lastIndexOf=function(e,t,r){return O(this,e,t,r,!1)},y.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var a=!1;;)switch(n){case"hex":return R(this,e,t,r);case"utf8":case"utf-8":return C(this,e,t,r);case"ascii":case"latin1":case"binary":return P(this,e,t,r);case"base64":return N(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,e,t,r);default:if(a)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),a=!0}},y.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var U=4096;function j(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function B(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function F(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",a=t;a<r;++a)i+=se[e[a]];return i}function z(e,t,r){for(var n=e.slice(t,r),i="",a=0;a<n.length-1;a+=2)i+=String.fromCharCode(n[a]+256*n[a+1]);return i}function W(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function H(e,t,r,n,i,a){if(!y.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<a)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function V(e,t,r,n,i){Q(t,n,i,e,r,7);var a=Number(t&BigInt(4294967295));e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a;var o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,r}function q(e,t,r,n,i){Q(t,n,i,e,r,7);var a=Number(t&BigInt(4294967295));e[r+7]=a,a>>=8,e[r+6]=a,a>>=8,e[r+5]=a,a>>=8,e[r+4]=a;var o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=o,o>>=8,e[r+2]=o,o>>=8,e[r+1]=o,o>>=8,e[r]=o,r+8}function K(e,t,r,n,i,a){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function J(e,t,r,n,i){return t=+t,r>>>=0,i||K(e,0,r,4),h.write(e,t,r,n,23,4),r+4}function G(e,t,r,n,i){return t=+t,r>>>=0,i||K(e,0,r,8),h.write(e,t,r,n,52,8),r+8}y.prototype.slice=function(e,t){var r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,y.prototype),n},y.prototype.readUintLE=y.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||W(e,t,this.length);for(var n=this[e],i=1,a=0;++a<t&&(i*=256);)n+=this[e+a]*i;return n},y.prototype.readUintBE=y.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||W(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},y.prototype.readUint8=y.prototype.readUInt8=function(e,t){return e>>>=0,t||W(e,1,this.length),this[e]},y.prototype.readUint16LE=y.prototype.readUInt16LE=function(e,t){return e>>>=0,t||W(e,2,this.length),this[e]|this[e+1]<<8},y.prototype.readUint16BE=y.prototype.readUInt16BE=function(e,t){return e>>>=0,t||W(e,2,this.length),this[e]<<8|this[e+1]},y.prototype.readUint32LE=y.prototype.readUInt32LE=function(e,t){return e>>>=0,t||W(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},y.prototype.readUint32BE=y.prototype.readUInt32BE=function(e,t){return e>>>=0,t||W(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},y.prototype.readBigUInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24),i=this[++e]+256*this[++e]+65536*this[++e]+r*Math.pow(2,24);return BigInt(n)+(BigInt(i)<<BigInt(32))})),y.prototype.readBigUInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=t*Math.pow(2,24)+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),y.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||W(e,t,this.length);for(var n=this[e],i=1,a=0;++a<t&&(i*=256);)n+=this[e+a]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},y.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||W(e,t,this.length);for(var n=t,i=1,a=this[e+--n];n>0&&(i*=256);)a+=this[e+--n]*i;return a>=(i*=128)&&(a-=Math.pow(2,8*t)),a},y.prototype.readInt8=function(e,t){return e>>>=0,t||W(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},y.prototype.readInt16LE=function(e,t){e>>>=0,t||W(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},y.prototype.readInt16BE=function(e,t){e>>>=0,t||W(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},y.prototype.readInt32LE=function(e,t){return e>>>=0,t||W(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},y.prototype.readInt32BE=function(e,t){return e>>>=0,t||W(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},y.prototype.readBigInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24))})),y.prototype.readBigInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+r)})),y.prototype.readFloatLE=function(e,t){return e>>>=0,t||W(e,4,this.length),h.read(this,e,!0,23,4)},y.prototype.readFloatBE=function(e,t){return e>>>=0,t||W(e,4,this.length),h.read(this,e,!1,23,4)},y.prototype.readDoubleLE=function(e,t){return e>>>=0,t||W(e,8,this.length),h.read(this,e,!0,52,8)},y.prototype.readDoubleBE=function(e,t){return e>>>=0,t||W(e,8,this.length),h.read(this,e,!1,52,8)},y.prototype.writeUintLE=y.prototype.writeUIntLE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||H(this,e,t,r,Math.pow(2,8*r)-1,0);var i=1,a=0;for(this[t]=255&e;++a<r&&(i*=256);)this[t+a]=e/i&255;return t+r},y.prototype.writeUintBE=y.prototype.writeUIntBE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||H(this,e,t,r,Math.pow(2,8*r)-1,0);var i=r-1,a=1;for(this[t+i]=255&e;--i>=0&&(a*=256);)this[t+i]=e/a&255;return t+r},y.prototype.writeUint8=y.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,1,255,0),this[t]=255&e,t+1},y.prototype.writeUint16LE=y.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},y.prototype.writeUint16BE=y.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},y.prototype.writeUint32LE=y.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},y.prototype.writeUint32BE=y.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},y.prototype.writeBigUInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return V(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),y.prototype.writeBigUInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return q(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),y.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);H(this,e,t,r,i-1,-i)}var a=0,o=1,s=0;for(this[t]=255&e;++a<r&&(o*=256);)e<0&&0===s&&0!==this[t+a-1]&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+r},y.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);H(this,e,t,r,i-1,-i)}var a=r-1,o=1,s=0;for(this[t+a]=255&e;--a>=0&&(o*=256);)e<0&&0===s&&0!==this[t+a+1]&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+r},y.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},y.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},y.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},y.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},y.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},y.prototype.writeBigInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return V(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),y.prototype.writeBigInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return q(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),y.prototype.writeFloatLE=function(e,t,r){return J(this,e,t,!0,r)},y.prototype.writeFloatBE=function(e,t,r){return J(this,e,t,!1,r)},y.prototype.writeDoubleLE=function(e,t,r){return G(this,e,t,!0,r)},y.prototype.writeDoubleBE=function(e,t,r){return G(this,e,t,!1,r)},y.prototype.copy=function(e,t,r,n){if(!y.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},y.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!y.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){var i=e.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var a;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(a=t;a<r;++a)this[a]=e;else{var o=y.isBuffer(e)?e:y.from(e,n),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<r-t;++a)this[a+t]=o[a%s]}return this};var Y={};function X(e,t,n){Y[e]=function(n){r(f)(a,n);var i=r(d)(a);function a(){var n;return r(u)(this,a),n=i.call(this),Object.defineProperty(r(s)(n),"message",{value:t.apply(r(s)(n),arguments),writable:!0,configurable:!0}),n.name="".concat(n.name," [").concat(e,"]"),n.stack,delete n.name,n}return r(c)(a,[{key:"code",get:function(){return e},set:function(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}},{key:"toString",value:function(){return"".concat(this.name," [").concat(e,"]: ").concat(this.message)}}]),a}(n)}function $(e){for(var t="",r=e.length,n="-"===e[0]?1:0;r>=n+4;r-=3)t="_".concat(e.slice(r-3,r)).concat(t);return"".concat(e.slice(0,r)).concat(t)}function Q(e,t,n,i,a,o){if(e>n||e<t){var s,u="bigint"===(void 0===t?"undefined":r(l)(t))?"n":"";throw s=o>3?0===t||t===BigInt(0)?">= 0".concat(u," and < 2").concat(u," ** ").concat(8*(o+1)).concat(u):">= -(2".concat(u," ** ").concat(8*(o+1)-1).concat(u,") and < 2 ** ")+"".concat(8*(o+1)-1).concat(u):">= ".concat(t).concat(u," and <= ").concat(n).concat(u),new Y.ERR_OUT_OF_RANGE("value",s,e)}!function(e,t,r){Z(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||ee(t,e.length-(r+1))}(i,a,o)}function Z(e,t){if("number"!=typeof e)throw new Y.ERR_INVALID_ARG_TYPE(t,"number",e)}function ee(e,t,r){if(Math.floor(e)!==e)throw Z(e,r),new Y.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new Y.ERR_BUFFER_OUT_OF_BOUNDS;throw new Y.ERR_OUT_OF_RANGE(r||"offset",">= ".concat(r?1:0," and <= ").concat(t),e)}X("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?"".concat(e," is outside of buffer bounds"):"Attempt to access memory outside buffer bounds"}),RangeError),X("ERR_INVALID_ARG_TYPE",(function(e,t){return'The "'.concat(e,'" argument must be of type number. Received type ').concat(void 0===t?"undefined":r(l)(t))}),TypeError),X("ERR_OUT_OF_RANGE",(function(e,t,n){var i='The value of "'.concat(e,'" is out of range.'),a=n;return Number.isInteger(n)&&Math.abs(n)>Math.pow(2,32)?a=$(String(n)):"bigint"===(void 0===n?"undefined":r(l)(n))&&(a=String(n),(n>Math.pow(BigInt(2),BigInt(32))||n<-Math.pow(BigInt(2),BigInt(32)))&&(a=$(a)),a+="n"),i+=" It must be ".concat(t,". Received ").concat(a)}),RangeError);var te=/[^+/0-9A-Za-z-_]/g;function re(e,t){var r;t=t||1/0;for(var n=e.length,i=null,a=[],o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&a.push(239,191,189);continue}if(o+1===n){(t-=3)>-1&&a.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&a.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&a.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;a.push(r)}else if(r<2048){if((t-=2)<0)break;a.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;a.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return a}function ne(e){return p.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(te,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function ie(e,t,r,n){var i;for(i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function ae(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function oe(e){return e!=e}var se=function(){for(var e="0123456789abcdef",t=new Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)t[n+i]=e[r]+e[i];return t}();function ue(e){return"undefined"==typeof BigInt?ce:e}function ce(){throw new Error("BigInt not supported")}})),a.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n.default(e,t)};var r,n=(r=a("gD1JV"))&&r.__esModule?r:{default:r}})),a.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=r.default();return function(){var r,a=n.default(e);if(t){var o=n.default(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return i.default(this,r)}};var r=o(a("aTHs7")),n=o(a("fVNic")),i=o(a("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("5d11t",(function(t,r){var n,i;e(t.exports,"toByteArray",(function(){return n}),(function(e){return n=e})),e(t.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),n=function(e){var t,r,n=l(e),i=n[0],a=n[1],u=new s(function(e,t,r){return 3*(t+r)/4-r}(0,i,a)),c=0,f=a>0?i-4:i;for(r=0;r<f;r+=4)t=o[e.charCodeAt(r)]<<18|o[e.charCodeAt(r+1)]<<12|o[e.charCodeAt(r+2)]<<6|o[e.charCodeAt(r+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===a&&(t=o[e.charCodeAt(r)]<<2|o[e.charCodeAt(r+1)]>>4,u[c++]=255&t);1===a&&(t=o[e.charCodeAt(r)]<<10|o[e.charCodeAt(r+1)]<<4|o[e.charCodeAt(r+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},i=function(e){for(var t,r=e.length,n=r%3,i=[],o=16383,s=0,u=r-n;s<u;s+=o)i.push(d(e,s,s+o>u?u:s+o));1===n?(t=e[r-1],i.push(a[t>>2]+a[t<<4&63]+"==")):2===n&&(t=(e[r-2]<<8)+e[r-1],i.push(a[t>>10]+a[t>>4&63]+a[t<<2&63]+"="));return i.join("")};for(var a=[],o=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,f=u.length;c<f;++c)a[c]=u[c],o[u.charCodeAt(c)]=c;function l(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function d(e,t,r){for(var n,i,o=[],s=t;s<r;s+=3)n=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),o.push(a[(i=n)>>18&63]+a[i>>12&63]+a[i>>6&63]+a[63&i]);return o.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63})),a.register("7rddL",(function(t,r){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var n,i;e(t.exports,"read",(function(){return n}),(function(e){return n=e})),e(t.exports,"write",(function(){return i}),(function(e){return i=e})),n=function(e,t,r,n,i){var a,o,s=8*i-n-1,u=(1<<s)-1,c=u>>1,f=-7,l=r?i-1:0,d=r?-1:1,p=e[t+l];for(l+=d,a=p&(1<<-f)-1,p>>=-f,f+=s;f>0;a=256*a+e[t+l],l+=d,f-=8);for(o=a&(1<<-f)-1,a>>=-f,f+=n;f>0;o=256*o+e[t+l],l+=d,f-=8);if(0===a)a=1-c;else{if(a===u)return o?NaN:1/0*(p?-1:1);o+=Math.pow(2,n),a-=c}return(p?-1:1)*o*Math.pow(2,a-n)},i=function(e,t,r,n,i,a){var o,s,u,c=8*a-i-1,f=(1<<c)-1,l=f>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:a-1,h=n?1:-1,v=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,o=f):(o=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-o))<1&&(o--,u*=2),(t+=o+l>=1?d/u:d*Math.pow(2,1-l))*u>=2&&(o++,u/=2),o+l>=f?(s=0,o=f):o+l>=1?(s=(t*u-1)*Math.pow(2,i),o+=l):(s=t*Math.pow(2,l-1)*Math.pow(2,i),o=0));i>=8;e[r+p]=255&s,p+=h,s/=256,i-=8);for(o=o<<i|s,c+=i;c>0;e[r+p]=255&o,p+=h,o/=256,c-=8);e[r+p-h]|=128*v}})),a.register("JRZh2",(function(t,n){e(t.exports,"default",(function(){return u}));var i=a("8MBJY"),o=a("a2hTj"),s=a("c4C4W"),u=function(){function e(){r(i)(this,e),this.handlers=[]}return r(o)(e,[{key:"use",value:function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(e){this.handlers[e]&&(this.handlers[e]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(e){s.default.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}]),e}()})),a.register("k04r0",(function(t,r){e(t.exports,"default",(function(){return l}));var n=a("jrAxF"),i=a("lXDKh"),o=a("c74ni"),s=a("dW1zJ"),u=a("gHHim"),c=a("fA43c");function f(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new(0,s.default)(null,e)}function l(e){return f(e),e.headers=u.default.from(e.headers),e.data=n.default.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),c.default.getAdapter(e.adapter||o.default.adapter)(e).then((function(t){return f(e),t.data=n.default.call(e,e.transformResponse,t),t.headers=u.default.from(t.headers),t}),(function(t){return(0,i.default)(t)||(f(e),t&&t.response&&(t.response.data=n.default.call(e,e.transformResponse,t.response),t.response.headers=u.default.from(t.response.headers))),Promise.reject(t)}))}})),a.register("jrAxF",(function(t,r){e(t.exports,"default",(function(){return s}));var n=a("c4C4W"),i=a("c74ni"),o=a("gHHim");function s(e,t){var r=this||i.default,a=t||r,s=o.default.from(a.headers),u=a.data;return n.default.forEach(e,(function(e){u=e.call(r,u,s.normalize(),t?t.status:void 0)})),s.normalize(),u}})),a.register("c74ni",(function(t,r){e(t.exports,"default",(function(){return p}));var n=a("c4C4W"),i=a("5TB86"),o=a("gWbUy"),s=a("12Kat"),u=a("4ue3z"),c=a("d0XKg"),f=a("gipWz"),l={"Content-Type":void 0};var d={transitional:o.default,adapter:["xhr","http"],transformRequest:[function(e,t){var r,i=t.getContentType()||"",a=i.indexOf("application/json")>-1,o=n.default.isObject(e);if(o&&n.default.isHTMLForm(e)&&(e=new FormData(e)),n.default.isFormData(e))return a&&a?JSON.stringify((0,f.default)(e)):e;if(n.default.isArrayBuffer(e)||n.default.isBuffer(e)||n.default.isStream(e)||n.default.isFile(e)||n.default.isBlob(e))return e;if(n.default.isArrayBufferView(e))return e.buffer;if(n.default.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(o){if(i.indexOf("application/x-www-form-urlencoded")>-1)return(0,u.default)(e,this.formSerializer).toString();if((r=n.default.isFileList(e))||i.indexOf("multipart/form-data")>-1){var c=this.env&&this.env.FormData;return(0,s.default)(r?{"files[]":e}:e,c&&new c,this.formSerializer)}}return o||a?(t.setContentType("application/json",!1),function(e,t,r){if(n.default.isString(e))try{return(t||JSON.parse)(e),n.default.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||d.transitional,r=t&&t.forcedJSONParsing,a="json"===this.responseType;if(e&&n.default.isString(e)&&(r&&!this.responseType||a)){var o=!(t&&t.silentJSONParsing)&&a;try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw i.default.from(e,i.default.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:c.default.classes.FormData,Blob:c.default.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.default.forEach(["delete","get","head"],(function(e){d.headers[e]={}})),n.default.forEach(["post","put","patch"],(function(e){d.headers[e]=n.default.merge(l)}));var p=d})),a.register("gWbUy",(function(t,r){e(t.exports,"default",(function(){return n}));var n={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),a.register("4ue3z",(function(t,r){e(t.exports,"default",(function(){return s}));var n=a("c4C4W"),i=a("12Kat"),o=a("d0XKg");function s(e,t){return(0,i.default)(e,new o.default.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,i){return o.default.isNode&&n.default.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}})),a.register("d0XKg",(function(t,r){e(t.exports,"default",(function(){return f}));var n,i=a("i5Hs4"),o=a("aIGDF"),s=a("3ZFaa"),u=("undefined"==typeof navigator||"ReactNative"!==(n=navigator.product)&&"NativeScript"!==n&&"NS"!==n)&&"undefined"!=typeof window&&"undefined"!=typeof document,c="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,f={isBrowser:!0,classes:{URLSearchParams:i.default,FormData:o.default,Blob:s.default},isStandardBrowserEnv:u,isStandardBrowserWebWorkerEnv:c,protocols:["http","https","file","blob","url","data"]}})),a.register("i5Hs4",(function(t,r){e(t.exports,"default",(function(){return i}));var n=a("8zJup"),i="undefined"!=typeof URLSearchParams?URLSearchParams:n.default})),a.register("aIGDF",(function(t,r){e(t.exports,"default",(function(){return n}));var n="undefined"!=typeof FormData?FormData:null})),a.register("3ZFaa",(function(t,r){e(t.exports,"default",(function(){return n}));var n="undefined"!=typeof Blob?Blob:null})),a.register("gipWz",(function(t,r){e(t.exports,"default",(function(){return i}));var n=a("c4C4W");var i=function(e){function t(e,r,i,a){var o=e[a++],s=Number.isFinite(+o),u=a>=e.length;return o=!o&&n.default.isArray(i)?i.length:o,u?(n.default.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!s):(i[o]&&n.default.isObject(i[o])||(i[o]=[]),t(e,r,i[o],a)&&n.default.isArray(i[o])&&(i[o]=function(e){var t,r,n={},i=Object.keys(e),a=i.length;for(t=0;t<a;t++)n[r=i[t]]=e[r];return n}(i[o])),!s)}if(n.default.isFormData(e)&&n.default.isFunction(e.entries)){var r={};return n.default.forEachEntry(e,(function(e,i){t(function(e){return n.default.matchAll(/\w+|\[(\w*)]/g,e).map((function(e){return"[]"===e[0]?"":e[1]||e[0]}))}(e),i,r,0)})),r}return null}})),a.register("gHHim",(function(t,n){e(t.exports,"default",(function(){return y}));var i=a("8MBJY"),o=a("a2hTj"),s=a("1t1Wn"),u=a("8nrFW"),c=a("c4C4W"),f=a("1nUSP"),l=Symbol("internals");function d(e){return e&&String(e).trim().toLowerCase()}function p(e){return!1===e||null==e?e:c.default.isArray(e)?e.map(p):String(e)}function h(e,t,r,n,i){return c.default.isFunction(n)?n.call(this,t,r):(i&&(t=r),c.default.isString(t)?c.default.isString(n)?-1!==t.indexOf(n):c.default.isRegExp(n)?n.test(t):void 0:void 0)}var v=Symbol.iterator,m=Symbol.toStringTag,g=function(){function e(t){r(i)(this,e),t&&this.set(t)}return r(o)(e,[{key:"set",value:function(e,t,r){var n=this;function i(e,t,r){var i=d(t);if(!i)throw new Error("header name must be a non-empty string");var a=c.default.findKey(n,i);(!a||void 0===n[a]||!0===r||void 0===r&&!1!==n[a])&&(n[a||t]=p(e))}var a=function(e,t){return c.default.forEach(e,(function(e,r){return i(e,r,t)}))};return c.default.isPlainObject(e)||e instanceof this.constructor?a(e,t):c.default.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?a((0,f.default)(e),t):null!=e&&i(t,e,r),this}},{key:"get",value:function(e,t){if(e=d(e)){var r=c.default.findKey(this,e);if(r){var n=this[r];if(!t)return n;if(!0===t)return function(e){for(var t,r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;t=n.exec(e);)r[t[1]]=t[2];return r}(n);if(c.default.isFunction(t))return t.call(this,n,r);if(c.default.isRegExp(t))return t.exec(n);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(e,t){if(e=d(e)){var r=c.default.findKey(this,e);return!(!r||void 0===this[r]||t&&!h(0,this[r],r,t))}return!1}},{key:"delete",value:function(e,t){var r=this,n=!1;function i(e){if(e=d(e)){var i=c.default.findKey(r,e);!i||t&&!h(0,r[i],i,t)||(delete r[i],n=!0)}}return c.default.isArray(e)?e.forEach(i):i(e),n}},{key:"clear",value:function(e){for(var t=Object.keys(this),r=t.length,n=!1;r--;){var i=t[r];e&&!h(0,this[i],i,e,!0)||(delete this[i],n=!0)}return n}},{key:"normalize",value:function(e){var t=this,r={};return c.default.forEach(this,(function(n,i){var a=c.default.findKey(r,i);if(a)return t[a]=p(n),void delete t[i];var o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r}))}(i):String(i).trim();o!==i&&delete t[i],t[o]=p(n),r[o]=!0})),this}},{key:"concat",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i;return(i=this.constructor).concat.apply(i,[this].concat(r(u)(t)))}},{key:"toJSON",value:function(e){var t=Object.create(null);return c.default.forEach(this,(function(r,n){null!=r&&!1!==r&&(t[n]=e&&c.default.isArray(r)?r.join(", "):r)})),t}},{key:v,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map((function(e){var t=r(s)(e,2);return t[0]+": "+t[1]})).join("\n")}},{key:m,get:function(){return"AxiosHeaders"}}],[{key:"from",value:function(e){return e instanceof this?e:new this(e)}},{key:"concat",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=new this(e);return r.forEach((function(e){return i.set(e)})),i}},{key:"accessor",value:function(e){var t=(this[l]=this[l]={accessors:{}}).accessors,r=this.prototype;function n(e){var n=d(e);t[n]||(!function(e,t){var r=c.default.toCamelCase(" "+t);["get","set","has"].forEach((function(n){Object.defineProperty(e,n+r,{value:function(e,r,i){return this[n].call(this,t,e,r,i)},configurable:!0})}))}(r,e),t[n]=!0)}return c.default.isArray(e)?e.forEach(n):n(e),this}}]),e}();g.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),c.default.freezeMethods(g.prototype),c.default.freezeMethods(g);var y=g})),a.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r.default(e)||n.default(e,t)||o.default(e,t)||i.default()};var r=s(a("8slrw")),n=s(a("7AJDX")),i=s(a("ifqQW")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r.default(e)||n.default(e)||o.default(e)||i.default()};var r=s(a("kMC0W")),n=s(a("7AJDX")),i=s(a("8CtQK")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("1nUSP",(function(t,r){e(t.exports,"default",(function(){return i}));var n=a("c4C4W").default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),i=function(e){var t,r,i,a={};return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),t=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!t||a[t]&&n[t]||("set-cookie"===t?a[t]?a[t].push(r):a[t]=[r]:a[t]=a[t]?a[t]+", "+r:r)})),a}})),a.register("lXDKh",(function(t,r){function n(e){return!(!e||!e.__CANCEL__)}e(t.exports,"default",(function(){return n}))})),a.register("dW1zJ",(function(t,r){e(t.exports,"default",(function(){return o}));var n=a("5TB86");function i(e,t,r){n.default.call(this,null==e?"canceled":e,n.default.ERR_CANCELED,t,r),this.name="CanceledError"}a("c4C4W").default.inherits(i,n.default,{__CANCEL__:!0});var o=i})),a.register("fA43c",(function(t,r){e(t.exports,"default",(function(){return c}));var n=a("c4C4W"),i=a("beknR"),o=a("btSY7"),s=a("5TB86"),u={http:i.default,xhr:o.default};n.default.forEach(u,(function(e,t){if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var c={getAdapter:function(e){for(var t,r,i=(e=n.default.isArray(e)?e:[e]).length,a=0;a<i&&(t=e[a],!(r=n.default.isString(t)?u[t.toLowerCase()]:t));a++);if(!r){if(!1===r)throw new(0,s.default)("Adapter ".concat(t," is not supported by the environment"),"ERR_NOT_SUPPORT");throw new Error(n.default.hasOwnProp(u,t)?"Adapter '".concat(t,"' is not available in the build"):"Unknown adapter '".concat(t,"'"))}if(!n.default.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:u}})),a.register("btSY7",(function(t,r){e(t.exports,"default",(function(){return y}));var n=a("c4C4W"),i=a("j97bH"),o=a("jFG8L"),s=a("6d5Pb"),u=a("gYMA1"),c=a("9jFfm"),f=a("gWbUy"),l=a("5TB86"),d=a("dW1zJ"),p=a("4ULKu"),h=a("d0XKg"),v=a("gHHim"),m=a("dSDGE");function g(e,t){var r=0,n=(0,m.default)(50,250);return function(i){var a=i.loaded,o=i.lengthComputable?i.total:void 0,s=a-r,u=n(s);r=a;var c={loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:u||void 0,estimated:u&&o&&a<=o?(o-a)/u:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}var y="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,r){var a,m=e.data,y=v.default.from(e.headers).normalize(),b=e.responseType;function w(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}n.default.isFormData(m)&&(h.default.isStandardBrowserEnv||h.default.isStandardBrowserWebWorkerEnv)&&y.setContentType(!1);var k=new XMLHttpRequest;if(e.auth){var x=e.auth.username||"",I=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";y.set("Authorization","Basic "+btoa(x+":"+I))}var _=(0,u.default)(e.baseURL,e.url);function E(){if(k){var n=v.default.from("getAllResponseHeaders"in k&&k.getAllResponseHeaders()),a={data:b&&"text"!==b&&"json"!==b?k.response:k.responseText,status:k.status,statusText:k.statusText,headers:n,config:e,request:k};(0,i.default)((function(e){t(e),w()}),(function(e){r(e),w()}),a),k=null}}if(k.open(e.method.toUpperCase(),(0,s.default)(_,e.params,e.paramsSerializer),!0),k.timeout=e.timeout,"onloadend"in k?k.onloadend=E:k.onreadystatechange=function(){k&&4===k.readyState&&(0!==k.status||k.responseURL&&0===k.responseURL.indexOf("file:"))&&setTimeout(E)},k.onabort=function(){k&&(r(new(0,l.default)("Request aborted",l.default.ECONNABORTED,e,k)),k=null)},k.onerror=function(){r(new(0,l.default)("Network Error",l.default.ERR_NETWORK,e,k)),k=null},k.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||f.default;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new(0,l.default)(t,n.clarifyTimeoutError?l.default.ETIMEDOUT:l.default.ECONNABORTED,e,k)),k=null},h.default.isStandardBrowserEnv){var T=(e.withCredentials||(0,c.default)(_))&&e.xsrfCookieName&&o.default.read(e.xsrfCookieName);T&&y.set(e.xsrfHeaderName,T)}void 0===m&&y.setContentType(null),"setRequestHeader"in k&&n.default.forEach(y.toJSON(),(function(e,t){k.setRequestHeader(t,e)})),n.default.isUndefined(e.withCredentials)||(k.withCredentials=!!e.withCredentials),b&&"json"!==b&&(k.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&k.addEventListener("progress",g(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&k.upload&&k.upload.addEventListener("progress",g(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=function(t){k&&(r(!t||t.type?new(0,d.default)(null,e,k):t),k.abort(),k=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));var S=(0,p.default)(_);S&&-1===h.default.protocols.indexOf(S)?r(new(0,l.default)("Unsupported protocol "+S+":",l.default.ERR_BAD_REQUEST,e)):k.send(m||null)}))}})),a.register("j97bH",(function(t,r){e(t.exports,"default",(function(){return i}));var n=a("5TB86");function i(e,t,r){var i=r.config.validateStatus;r.status&&i&&!i(r.status)?t(new(0,n.default)("Request failed with status code "+r.status,[n.default.ERR_BAD_REQUEST,n.default.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}})),a.register("jFG8L",(function(t,r){e(t.exports,"default",(function(){return i}));var n=a("c4C4W"),i=a("d0XKg").default.isStandardBrowserEnv?{write:function(e,t,r,i,a,o){var s=[];s.push(e+"="+encodeURIComponent(t)),n.default.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.default.isString(i)&&s.push("path="+i),n.default.isString(a)&&s.push("domain="+a),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),a.register("gYMA1",(function(t,r){e(t.exports,"default",(function(){return o}));var n=a("7xjuH"),i=a("ftRZn");function o(e,t){return e&&!(0,n.default)(t)?(0,i.default)(e,t):t}})),a.register("7xjuH",(function(t,r){function n(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}e(t.exports,"default",(function(){return n}))})),a.register("ftRZn",(function(t,r){function n(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}e(t.exports,"default",(function(){return n}))})),a.register("9jFfm",(function(t,r){e(t.exports,"default",(function(){return i}));var n=a("c4C4W"),i=a("d0XKg").default.isStandardBrowserEnv?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=i(window.location.href),function(t){var r=n.default.isString(t)?i(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}})),a.register("4ULKu",(function(t,r){function n(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}e(t.exports,"default",(function(){return n}))})),a.register("dSDGE",(function(t,r){e(t.exports,"default",(function(){return n}));var n=function(e,t){e=e||10;var r,n=new Array(e),i=new Array(e),a=0,o=0;return t=void 0!==t?t:1e3,function(s){var u=Date.now(),c=i[o];r||(r=u),n[a]=s,i[a]=u;for(var f=o,l=0;f!==a;)l+=n[f++],f%=e;if((a=(a+1)%e)===o&&(o=(o+1)%e),!(u-r<t)){var d=c&&u-c;return d?Math.round(1e3*l/d):void 0}}}})),a.register("knWMA",(function(t,r){e(t.exports,"default",(function(){return s}));var n=a("c4C4W"),i=a("gHHim"),o=function(e){return e instanceof i.default?e.toJSON():e};function s(e,t){t=t||{};var r={};function i(e,t,r){return n.default.isPlainObject(e)&&n.default.isPlainObject(t)?n.default.merge.call({caseless:r},e,t):n.default.isPlainObject(t)?n.default.merge({},t):n.default.isArray(t)?t.slice():t}function a(e,t,r){return n.default.isUndefined(t)?n.default.isUndefined(e)?void 0:i(void 0,e,r):i(e,t,r)}function s(e,t){if(!n.default.isUndefined(t))return i(void 0,t)}function u(e,t){return n.default.isUndefined(t)?n.default.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function c(r,n,a){return a in t?i(r,n):a in e?i(void 0,r):void 0}var f={url:s,method:s,data:s,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:c,headers:function(e,t){return a(o(e),o(t),!0)}};return n.default.forEach(Object.keys(e).concat(Object.keys(t)),(function(i){var o=f[i]||a,s=o(e[i],t[i],i);n.default.isUndefined(s)&&o!==c||(r[i]=s)})),r}})),a.register("9SeBc",(function(t,n){e(t.exports,"default",(function(){return f}));var i=a("l5bVx"),o=a("kLR29"),s=a("5TB86"),u={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){u[e]=function(n){return(void 0===n?"undefined":r(i)(n))===e||"a"+(t<1?"n ":" ")+e}}));var c={};u.transitional=function(e,t,r){function n(e,t){return"[Axios v"+o.VERSION+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,i,a){if(!1===e)throw new(0,s.default)(n(i," has been removed"+(t?" in "+t:"")),s.default.ERR_DEPRECATED);return t&&!c[i]&&(c[i]=!0,console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,a)}};var f={assertOptions:function(e,t,r){if("object"!=typeof e)throw new(0,s.default)("options must be an object",s.default.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),i=n.length;i-- >0;){var a=n[i],o=t[a];if(o){var u=e[a],c=void 0===u||o(u,a,e);if(!0!==c)throw new(0,s.default)("option "+a+" must be "+c,s.default.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new(0,s.default)("Unknown option "+a,s.default.ERR_BAD_OPTION)}},validators:u}})),a.register("kLR29",(function(t,r){e(t.exports,"VERSION",(function(){return n}));var n="1.3.5"})),a.register("77MZz",(function(t,n){e(t.exports,"default",(function(){return u}));var i=a("8MBJY"),o=a("a2hTj"),s=a("dW1zJ"),u=function(){function e(t){if(r(i)(this,e),"function"!=typeof t)throw new TypeError("executor must be a function.");var n;this.promise=new Promise((function(e){n=e}));var a=this;this.promise.then((function(e){if(a._listeners){for(var t=a._listeners.length;t-- >0;)a._listeners[t](e);a._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){a.subscribe(e),t=e})).then(e);return r.cancel=function(){a.unsubscribe(t)},r},t((function(e,t,r){a.reason||(a.reason=new(0,s.default)(e,t,r),n(a.reason))}))}return r(o)(e,[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}},{key:"unsubscribe",value:function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}}}],[{key:"source",value:function(){var t;return{token:new e((function(e){t=e})),cancel:t}}}]),e}()})),a.register("9BdDr",(function(t,r){function n(e){return function(t){return e.apply(null,t)}}e(t.exports,"default",(function(){return n}))})),a.register("kv87N",(function(t,r){e(t.exports,"default",(function(){return i}));var n=a("c4C4W");function i(e){return n.default.isObject(e)&&!0===e.isAxiosError}})),a.register("5siR6",(function(t,n){e(t.exports,"default",(function(){return s}));var i=a("1t1Wn"),o={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(o).forEach((function(e){var t=r(i)(e,2),n=t[0],a=t[1];o[a]=n}));var s=o}));var o=a("bpxeT"),s=a("2TvXO"),u=a("4Nugj"),c=a("lzhzI"),f=(o=a("bpxeT"),a("8MBJY")),l=a("a2hTj"),d=a("hKHmD"),p=a("8nrFW"),h=(s=a("2TvXO"),o=a("bpxeT"),f=a("8MBJY"),l=a("a2hTj"),a("1t1Wn")),v=(p=a("8nrFW"),s=a("2TvXO"),a("ds8z5")),m=(f=a("8MBJY"),l=a("a2hTj"),a("eYQtU")),g=(h=a("1t1Wn"),p=a("8nrFW"),{});Object.defineProperty(g,"__esModule",{value:!0}),g.default=function(e){return I(e)};var y=x(a("ge8co")),b=x(a("cZGw3")),w=x(a("fVNic")),k=x(a("gD1JV"));function x(e){return e&&e.__esModule?e:{default:e}}function I(e){var t="function"==typeof Map?new Map:void 0;return I=function(e){if(null===e||!b.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return y.default(e,arguments,w.default(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),k.default(r,e)},I(e)}var _=a("2MbLg"),E=a("6qd2L"),T=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},S={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,f=a>>2,l=(3&a)<<4|s>>4,d=(15&s)<<2|c>>6,p=63&c;u||(p=64,o||(d=64)),n.push(r[f],r[l],r[d],r[p])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(T(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{var s=e[r++],u=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<e.length;){var a=r[e.charAt(i++)],o=i<e.length?r[e.charAt(i)]:0,s=++i<e.length?r[e.charAt(i)]:64,u=++i<e.length?r[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw new O;var c=a<<2|o>>4;if(n.push(c),64!==s){var f=o<<4&240|s>>2;if(n.push(f),64!==u){var l=s<<6&192|u;n.push(l)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},O=function(e){"use strict";r(m)(n,e);var t=r(_)(n);function n(){var e;return r(f)(this,n),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",e}return n}(r(g)(Error)),A=function(e){return function(e){var t=T(e);return S.encodeByteArray(t,!0)}(e).replace(/\./g,"")},R=function(e){try{return S.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var C=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},P=function(){try{return C()||function(){if(void 0!==E&&void 0!==E.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&R(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},N=function(e){var t,r;return null===(r=null===(t=P())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},L=function(){var e;return null===(e=P())||void 0===e?void 0:e.config},D=function(e){var t;return null===(t=P())||void 0===t?void 0:t["_".concat(e)]},M=function(){"use strict";function e(){var t=this;r(f)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,r){t.resolve=e,t.reject=r}))}return r(l)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function j(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function B(){try{return"object"==typeof indexedDB}catch(e){return!1}}function F(){return new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=function(){i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=function(){r=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function z(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W=function(e){"use strict";r(m)(n,e);var t=r(_)(n);function n(e,i,a){var o;return r(f)(this,n),(o=t.call(this,i)).code=e,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(r(v)(o),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(r(v)(o),H.prototype.create),o}return n}(r(g)(Error)),H=function(){"use strict";function e(t,n,i){r(f)(this,e),this.service=t,this.serviceName=n,this.errors=i}return r(l)(e,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=r[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?V(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new W(a,u,i);return c}}]),e}();function V(e,t){return e.replace(q,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var q=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function J(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!n.includes(c))return!1;var f=e[c],l=t[c];if(G(f)&&G(l)){if(!J(f,l))return!1}else if(f!==l)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var d=!0,p=!1,h=void 0;try{for(var v,m=n[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var g=v.value;if(!r.includes(g))return!1}}catch(e){p=!0,h=e}finally{try{d||null==m.return||m.return()}finally{if(p)throw h}}return!0}function G(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Y(e){var t=[],n=!0,i=!1,a=void 0;try{for(var o,s=function(e,n){var i=r(h)(n.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){t.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(e)[Symbol.iterator]();!(n=(o=u.next()).done);n=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw a}}return t.length?"&"+t.join("&"):""}function X(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=r(h)(e.split("="),2),i=n[0],a=n[1];t[decodeURIComponent(i)]=decodeURIComponent(a)}})),t}function $(e){var t=e.indexOf("?");if(!t)return"";var r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q=function(){"use strict";function e(t,n){var i=this;r(f)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){t(i)})).catch((function(e){i.error(e)}))}return r(l)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;var r=!0,n=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=Z),void 0===n.error&&(n.error=Z),void 0===n.complete&&(n.complete=Z);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(e){}})),this.observers.push(n),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function Z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ee=144e5;function te(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,n=t*Math.pow(r,e),i=Math.round(.5*n*(Math.random()-.5)*2);return Math.min(ee,n+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function re(e){return e&&e._delegate?e._delegate:e}var ne=function(){"use strict";function e(t,n,i){r(f)(this,e),this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return r(l)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),ie="[DEFAULT]",ae=function(){"use strict";function e(t,n){r(f)(this,e),this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return r(l)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new M;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:ie})}catch(e){}var t=!0,n=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=r(h)(a.value,2),u=s[0],c=s[1],f=this.normalizeInstanceIdentifier(u);try{var l=this.getOrInitializeService({instanceIdentifier:f});c.resolve(l)}catch(e){}}}catch(e){n=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Array.from(e.instances.values()),t.next=3,Promise.all(r(p)(n.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(r(p)(n.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return t.stop()}}),t)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,n=void 0===t?{}:t,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:n}),o=!0,s=!1,u=void 0;try{for(var c,f=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=f.next()).done);o=!0){var l=r(h)(c.value,2),d=l[0],p=l[1],v=this.normalizeInstanceIdentifier(d);i===v&&p.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==f.return||f.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);var a=this.instances.get(n);return a&&e(a,n),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,i=!1,a=void 0;try{for(var o,s=r[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,i=void 0===n?{}:n,a=this.instances.get(r);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===ie?void 0:t),options:i}),this.instances.set(r,a),this.instancesOptions.set(r,i),this.invokeOnInitCallbacks(a,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie;return this.component?this.component.multipleInstances?e:ie:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe,se,ue=function(){"use strict";function e(t){r(f)(this,e),this.name=t,this.providers=new Map}return r(l)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new ae(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}(),ce=(f=a("8MBJY"),l=a("a2hTj"),d=a("hKHmD"),p=a("8nrFW"),[]);(se=oe||(oe={}))[se.DEBUG=0]="DEBUG",se[se.VERBOSE=1]="VERBOSE",se[se.INFO=2]="INFO",se[se.WARN=3]="WARN",se[se.ERROR=4]="ERROR",se[se.SILENT=5]="SILENT";var fe,le={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},de=oe.INFO,pe=(fe={},r(d)(fe,oe.DEBUG,"log"),r(d)(fe,oe.VERBOSE,"log"),r(d)(fe,oe.INFO,"info"),r(d)(fe,oe.WARN,"warn"),r(d)(fe,oe.ERROR,"error"),fe),he=function(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];var o;if(!(t<e.logLevel)){var s=(new Date).toISOString(),u=pe[t];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(e.name,":")].concat(r(p)(i)))}},ve=function(){"use strict";function e(t){r(f)(this,e),this.name=t,this._logLevel=de,this._logHandler=he,this._userLogHandler=null,ce.push(this)}return r(l)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in oe))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?le[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,oe.DEBUG].concat(r(p)(t))),this._logHandler.apply(this,[this,oe.DEBUG].concat(r(p)(t)))}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,oe.VERBOSE].concat(r(p)(t))),this._logHandler.apply(this,[this,oe.VERBOSE].concat(r(p)(t)))}},{key:"info",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,oe.INFO].concat(r(p)(t))),this._logHandler.apply(this,[this,oe.INFO].concat(r(p)(t)))}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,oe.WARN].concat(r(p)(t))),this._logHandler.apply(this,[this,oe.WARN].concat(r(p)(t)))}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,oe.ERROR].concat(r(p)(t))),this._logHandler.apply(this,[this,oe.ERROR].concat(r(p)(t)))}}]),e}();o=a("bpxeT");var me={};Object.defineProperty(me,"__esModule",{value:!0}),me.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ye.default(e,t,r[t])}))}return e};var ge,ye=(ge=a("hKHmD"))&&ge.__esModule?ge:{default:ge};var be,we;p=a("8nrFW"),s=a("2TvXO"),p=a("8nrFW");var ke=new WeakMap,xe=new WeakMap,Ie=new WeakMap,_e=new WeakMap,Ee=new WeakMap;var Te={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return xe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ie.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Ae(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Se(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(we||(we=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e.apply(Re(this),r),Ae(ke.get(this))}:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return Ae(e.apply(Re(this),r))}:function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];var o,s=(o=e).call.apply(o,[Re(this),t].concat(r(p)(i)));return Ie.set(s,t.sort?t.sort():[t]),Ae(s)}}function Oe(e){return"function"==typeof e?Se(e):(e instanceof IDBTransaction&&function(e){if(!xe.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),n()},a=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));xe.set(e,t)}}(e),t=e,(be||(be=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Te):e);var t}function Ae(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(Ae(t.result)),n()},a=function(){r(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&ke.set(e,t)})).catch((function(){})),Ee.set(r,t),r;var t,r;if(_e.has(e))return _e.get(e);var n=Oe(e);return n!==e&&(_e.set(e,n),Ee.set(n,e)),n}var Re=function(e){return Ee.get(e)};function Ce(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,i=r.upgrade,a=r.blocking,o=r.terminated,s=indexedDB.open(e,t),u=Ae(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(Ae(s.result),e.oldVersion,e.newVersion,Ae(s.transaction))})),n&&s.addEventListener("blocked",(function(){return n()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var Pe=["get","getKey","getAll","getAllKeys","count"],Ne=["put","add","delete","clear"],Le=new Map;function De(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(Le.get(t))return Le.get(t);var n=t.replace(/FromIndex$/,""),i=t!==n,a=Ne.includes(n);if(n in(i?IDBIndex:IDBObjectStore).prototype&&(a||Pe.includes(n))){var u,c=(u=r(o)(r(s).mark((function e(t){var o,u,c,f,l,d,h=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o=h.length,u=new Array(o>1?o-1:0),c=1;c<o;c++)u[c-1]=h[c];return l=this.transaction(t,a?"readwrite":"readonly"),d=l.store,i&&(d=d.index(u.shift())),e.next=7,Promise.all([(f=d)[n].apply(f,r(p)(u)),a&&l.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)});return Le.set(t,c),c}}}Te=function(e){return r(me)({},e,{get:function(t,r,n){return De(t,r)||e.get(t,r,n)},has:function(t,r){return!!De(t,r)||e.has(t,r)}})}(Te);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Me=function(){"use strict";function e(t){r(f)(this,e),this.container=t}return r(l)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}();var Ue,je,Be="@firebase/app",Fe="0.9.7",ze=new ve("@firebase/app"),We="[DEFAULT]",He=(Ue={},r(d)(Ue,Be,"fire-core"),r(d)(Ue,"@firebase/app-compat","fire-core-compat"),r(d)(Ue,"@firebase/analytics","fire-analytics"),r(d)(Ue,"@firebase/analytics-compat","fire-analytics-compat"),r(d)(Ue,"@firebase/app-check","fire-app-check"),r(d)(Ue,"@firebase/app-check-compat","fire-app-check-compat"),r(d)(Ue,"@firebase/auth","fire-auth"),r(d)(Ue,"@firebase/auth-compat","fire-auth-compat"),r(d)(Ue,"@firebase/database","fire-rtdb"),r(d)(Ue,"@firebase/database-compat","fire-rtdb-compat"),r(d)(Ue,"@firebase/functions","fire-fn"),r(d)(Ue,"@firebase/functions-compat","fire-fn-compat"),r(d)(Ue,"@firebase/installations","fire-iid"),r(d)(Ue,"@firebase/installations-compat","fire-iid-compat"),r(d)(Ue,"@firebase/messaging","fire-fcm"),r(d)(Ue,"@firebase/messaging-compat","fire-fcm-compat"),r(d)(Ue,"@firebase/performance","fire-perf"),r(d)(Ue,"@firebase/performance-compat","fire-perf-compat"),r(d)(Ue,"@firebase/remote-config","fire-rc"),r(d)(Ue,"@firebase/remote-config-compat","fire-rc-compat"),r(d)(Ue,"@firebase/storage","fire-gcs"),r(d)(Ue,"@firebase/storage-compat","fire-gcs-compat"),r(d)(Ue,"@firebase/firestore","fire-fst"),r(d)(Ue,"@firebase/firestore-compat","fire-fst-compat"),r(d)(Ue,"fire-js","fire-js"),r(d)(Ue,"firebase","fire-js-all"),Ue),Ve=new Map,qe=new Map;function Ke(e,t){try{e.container.addComponent(t)}catch(r){ze.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function Je(e){var t=e.name;if(qe.has(t))return ze.debug("There were multiple attempts to register component ".concat(t,".")),!1;qe.set(t,e);var r=!0,n=!1,i=void 0;try{for(var a,o=Ve.values()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){Ke(a.value,e)}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!0}function Ge(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ye=(je={},r(d)(je,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),r(d)(je,"bad-app-name","Illegal App name: '{$appName}"),r(d)(je,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),r(d)(je,"app-deleted","Firebase App named '{$appName}' already deleted"),r(d)(je,"no-options","Need to provide options, when not being deployed to hosting via source."),r(d)(je,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),r(d)(je,"invalid-log-argument","First argument to `onLog` must be null or a function."),r(d)(je,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),r(d)(je,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),r(d)(je,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),r(d)(je,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),je),Xe=new H("app","Firebase",Ye),$e=function(){"use strict";function e(t,n,i){var a=this;r(f)(this,e),this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ne("app",(function(){return a}),"PUBLIC"))}return r(l)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Xe.create("app-deleted",{appName:this._name})}}]),e}(),Qe="9.19.1";function Ze(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e;if("object"!=typeof t){var n=t;t={name:n}}var i=Object.assign({name:We,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw Xe.create("bad-app-name",{appName:String(a)});if(r||(r=L()),!r)throw Xe.create("no-options");var o=Ve.get(a);if(o){if(J(r,o.options)&&J(i,o.config))return o;throw Xe.create("duplicate-app",{appName:a})}var s=new ue(a),u=!0,c=!1,f=void 0;try{for(var l,d=qe.values()[Symbol.iterator]();!(u=(l=d.next()).done);u=!0){var p=l.value;s.addComponent(p)}}catch(e){c=!0,f=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw f}}var h=new $e(r,i,s);return Ve.set(a,h),h}function et(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=Ve.get(e);if(!t&&e===We)return Ze();if(!t)throw Xe.create("no-app",{appName:e});return t}function tt(e,t,r){var n,i=null!==(n=He[e])&&void 0!==n?n:e;r&&(i+="-".concat(r));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void ze.warn(s.join(" "))}Je(new ne("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var rt="firebase-heartbeat-store",nt=null;function it(){return nt||(nt=Ce("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(rt)}}).catch((function(e){throw Xe.create("idb-open",{originalErrorMessage:e.message})}))),nt}function at(e){return ot.apply(this,arguments)}function ot(){return(ot=r(o)(r(s).mark((function e(t){var n,i;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,it();case 3:return n=e.sent,e.abrupt("return",n.transaction(rt).objectStore(rt).get(ct(t)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof W?ze.warn(e.t0.message):(i=Xe.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),ze.warn(i.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function st(e,t){return ut.apply(this,arguments)}function ut(){return(ut=r(o)(r(s).mark((function e(t,n){var i,a,o,u;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,it();case 3:return i=e.sent,a=i.transaction(rt,"readwrite"),o=a.objectStore(rt),e.next=8,o.put(n,ct(t));case 8:return e.abrupt("return",a.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof W?ze.warn(e.t0.message):(u=Xe.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),ze.warn(u.message));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function ct(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft=function(){"use strict";function e(t){var n=this;r(f)(this,e),this.container=t,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new ht(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return r(l)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n,i,a;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),a=lt(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==a&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),t)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n,i,a,o,u;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(n=lt(),i=dt(e._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,u=A(JSON.stringify({version:2,heartbeats:a})),e._heartbeatsCache.lastSentHeartbeatDate=n,!(o.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=o,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",u);case 17:case"end":return t.stop()}}),t)})))()}}]),e}();function lt(){return(new Date).toISOString().substring(0,10)}function dt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=r.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),vt(r)>t)return o.dates.pop(),"break"}else if(r.push({agent:a.agent,dates:[a.date]}),vt(r)>t)return r.pop(),"break";n=n.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var f=u(c,s);if("break"===f)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:r,unsentEntries:n}}var pt,ht=function(){"use strict";function e(t){r(f)(this,e),this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return r(l)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return r(o)(r(s).mark((function e(){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",F().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,at(e.app);case 9:return n=t.sent,t.abrupt("return",n||{heartbeats:[]});case 11:case"end":return t.stop()}}),t)})))()}},{key:"overwrite",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i,a;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,t._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,t.read();case 10:return a=r.sent,r.abrupt("return",st(t.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return r.stop()}}),n)})))()}},{key:"add",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i,a;return r(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,t._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,t.read();case 10:return a=n.sent,n.abrupt("return",st(t.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:r(p)(a.heartbeats).concat(r(p)(e.heartbeats))}));case 12:case"end":return n.stop()}}),n)})))()}}]),e}();function vt(e){return A(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pt="",Je(new ne("platform-logger",(function(e){return new Me(e)}),"PRIVATE")),Je(new ne("heartbeat",(function(e){return new ft(e)}),"PRIVATE")),tt(Be,Fe,pt),tt(Be,Fe,"esm2017"),tt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
tt("firebase","9.19.1","app");o=a("bpxeT"),f=a("8MBJY"),l=a("a2hTj"),d=a("hKHmD"),h=a("1t1Wn"),s=a("2TvXO"),o=a("bpxeT"),d=a("hKHmD"),p=a("8nrFW"),s=a("2TvXO");var mt,gt="@firebase/installations",yt="0.6.4",bt=1e4,wt="w:".concat(yt),kt="FIS_v2",xt=36e5,It=(mt={},r(d)(mt,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),r(d)(mt,"not-registered","Firebase Installation is not registered."),r(d)(mt,"installation-not-found","Firebase Installation not found."),r(d)(mt,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),r(d)(mt,"app-offline","Could not process request. Application offline."),r(d)(mt,"delete-pending-registration","Can't delete installation while there is a pending registration request."),mt),_t=new H("installations","Installations",It);function Et(e){return e instanceof W&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function St(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function Ot(e,t){return At.apply(this,arguments)}function At(){return(At=r(o)(r(s).mark((function e(t,n){var i,a;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.json();case 2:return i=e.sent,a=i.error,e.abrupt("return",_t.create("request-failed",{requestName:t,serverCode:a.code,serverMessage:a.message,serverStatus:a.status}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Rt(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Ct(e,t){var r=t.refreshToken,n=Rt(e);return n.append("Authorization",function(e){return"".concat(kt," ").concat(e)}(r)),n}function Pt(e){return Nt.apply(this,arguments)}function Nt(){return(Nt=r(o)(r(s).mark((function e(t){var n;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:if(!((n=e.sent).status>=500&&n.status<600)){e.next=5;break}return e.abrupt("return",t());case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Lt(e,t){return Dt.apply(this,arguments)}function Dt(){return(Dt=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){var i,a,o,u,c,f,l,d,p,h,v,m;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.appConfig,a=t.heartbeatServiceProvider,o=n.fid,u=Tt(i),c=Rt(i),!(f=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,f.getHeartbeatsHeader();case 7:(l=e.sent)&&c.append("x-firebase-client",l);case 9:return d={fid:o,authVersion:kt,appId:i.appId,sdkVersion:wt},p={method:"POST",headers:c,body:JSON.stringify(d)},e.next=13,Pt((function(){return fetch(u,p)}));case 13:if(!(h=e.sent).ok){e.next=22;break}return e.next=17,h.json();case 17:return v=e.sent,m={fid:v.fid||o,registrationStatus:2,refreshToken:v.refreshToken,authToken:St(v.authToken)},e.abrupt("return",m);case 22:return e.next=24,Ot("Create Installation",h);case 24:throw e.sent;case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ut=/^[cdef][\w-]{21}$/;function jt(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){return(t=e,btoa((n=String).fromCharCode.apply(n,r(p)(t))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return Ut.test(t)?t:""}catch(e){return""}}function Bt(e){return"".concat(e.appName,"!").concat(e.appId)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft=new Map;function zt(e,t){var r=Bt(e);Wt(r,t),function(e,t){var r=Vt();r&&r.postMessage({key:e,fid:t});qt()}(r,t)}function Wt(e,t){var r=Ft.get(e);if(r){var n=!0,i=!1,a=void 0;try{for(var o,s=r[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}}var Ht=null;function Vt(){return!Ht&&"BroadcastChannel"in self&&((Ht=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){Wt(e.data.key,e.data.fid)}),Ht}function qt(){0===Ft.size&&Ht&&(Ht.close(),Ht=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt="firebase-installations-store",Jt=null;function Gt(){return Jt||(Jt=Ce("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Kt)}})),Jt}function Yt(e,t){return Xt.apply(this,arguments)}function Xt(){return(Xt=r(o)(r(s).mark((function e(t,n){var i,a,o,u,c;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Bt(t),e.next=3,Gt();case 3:return a=e.sent,o=a.transaction(Kt,"readwrite"),u=o.objectStore(Kt),e.next=8,u.get(i);case 8:return c=e.sent,e.next=11,u.put(n,i);case 11:return e.next=13,o.done;case 13:return c&&c.fid===n.fid||zt(t,n.fid),e.abrupt("return",n);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $t(e){return Qt.apply(this,arguments)}function Qt(){return(Qt=r(o)(r(s).mark((function e(t){var n,i,a;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Bt(t),e.next=3,Gt();case 3:return i=e.sent,a=i.transaction(Kt,"readwrite"),e.next=7,a.objectStore(Kt).delete(n);case 7:return e.next=9,a.done;case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Zt(e,t){return er.apply(this,arguments)}function er(){return(er=r(o)(r(s).mark((function e(t,n){var i,a,o,u,c,f;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Bt(t),e.next=3,Gt();case 3:return a=e.sent,o=a.transaction(Kt,"readwrite"),u=o.objectStore(Kt),e.next=8,u.get(i);case 8:if(c=e.sent,void 0!==(f=n(c))){e.next=15;break}return e.next=13,u.delete(i);case 13:e.next=17;break;case 15:return e.next=17,u.put(f,i);case 17:return e.next=19,o.done;case 19:return!f||c&&c.fid===f.fid||zt(t,f.fid),e.abrupt("return",f);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function tr(e){return rr.apply(this,arguments)}function rr(){return(rr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t){var n,i;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Zt(t.appConfig,(function(e){var r=nr(e),i=ir(t,r);return n=i.registrationPromise,i.installationEntry}));case 3:if(""!==(i=e.sent).fid){e.next=9;break}return e.next=7,n;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:i,registrationPromise:n});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function nr(e){return cr(e||{fid:jt(),registrationStatus:0})}function ir(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(_t.create("app-offline"))};var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=function(e,t){return ar.apply(this,arguments)}(e,r);return{installationEntry:r,registrationPromise:n}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:or(e)}:{installationEntry:t}}function ar(){return(ar=r(o)(r(s).mark((function e(t,n){var i;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Lt(t,n);case 3:return i=e.sent,e.abrupt("return",Yt(t.appConfig,i));case 7:if(e.prev=7,e.t0=e.catch(0),!Et(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,$t(t.appConfig);case 12:e.next=16;break;case 14:return e.next=16,Yt(t.appConfig,{fid:n.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function or(e){return sr.apply(this,arguments)}function sr(){return(sr=r(o)(r(s).mark((function e(t){var n,i,a,o;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ur(t.appConfig);case 2:n=e.sent;case 3:if(1!==n.registrationStatus){e.next=11;break}return e.next=6,Mt(100);case 6:return e.next=8,ur(t.appConfig);case 8:n=e.sent,e.next=3;break;case 11:if(0!==n.registrationStatus){e.next=22;break}return e.next=14,tr(t);case 14:if(i=e.sent,a=i.installationEntry,!(o=i.registrationPromise)){e.next=21;break}return e.abrupt("return",o);case 21:return e.abrupt("return",a);case 22:return e.abrupt("return",n);case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ur(e){return Zt(e,(function(e){if(!e)throw _t.create("installation-not-found");return cr(e)}))}function cr(e){return 1===(t=e).registrationStatus&&t.registrationTime+bt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function fr(e,t){return lr.apply(this,arguments)}function lr(){return(lr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){var i,a,o,u,c,f,l,d,p,h,v;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.appConfig,a=t.heartbeatServiceProvider,o=dr(i,n),u=Ct(i,n),!(c=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,c.getHeartbeatsHeader();case 7:(f=e.sent)&&u.append("x-firebase-client",f);case 9:return l={installation:{sdkVersion:wt,appId:i.appId}},d={method:"POST",headers:u,body:JSON.stringify(l)},e.next=13,Pt((function(){return fetch(o,d)}));case 13:if(!(p=e.sent).ok){e.next=22;break}return e.next=17,p.json();case 17:return h=e.sent,v=St(h),e.abrupt("return",v);case 22:return e.next=24,Ot("Generate Auth Token",p);case 24:throw e.sent;case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function dr(e,t){var r=t.fid;return"".concat(Tt(e),"/").concat(r,"/authTokens:generate")}function pr(e){return hr.apply(this,arguments)}function hr(){return hr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t){var n,i,a,o,u=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]&&u[1],e.next=4,Zt(t.appConfig,(function(e){if(!wr(e))throw _t.create("not-registered");var r=e.authToken;if(!n&&kr(r))return e;if(1===r.requestStatus)return i=vr(t,n),e;if(!navigator.onLine)throw _t.create("app-offline");var a=xr(e);return i=yr(t,a),a}));case 4:if(a=e.sent,!i){e.next=11;break}return e.next=8,i;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=a.authToken;case 12:return o=e.t0,e.abrupt("return",o);case 14:case"end":return e.stop()}}),e)}))),hr.apply(this,arguments)}function vr(e,t){return mr.apply(this,arguments)}function mr(){return(mr=r(o)(r(s).mark((function e(t,n){var i,a;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gr(t.appConfig);case 2:i=e.sent;case 3:if(1!==i.authToken.requestStatus){e.next=11;break}return e.next=6,Mt(100);case 6:return e.next=8,gr(t.appConfig);case 8:i=e.sent,e.next=3;break;case 11:if(0!==(a=i.authToken).requestStatus){e.next=16;break}return e.abrupt("return",pr(t,n));case 16:return e.abrupt("return",a);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function gr(e){return Zt(e,(function(e){if(!wr(e))throw _t.create("not-registered");var t,r=e.authToken;return 1===(t=r).requestStatus&&t.requestTime+bt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function yr(e,t){return br.apply(this,arguments)}function br(){return(br=r(o)(r(s).mark((function e(t,n){var i,a,o;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fr(t,n);case 3:return i=e.sent,a=Object.assign(Object.assign({},n),{authToken:i}),e.next=7,Yt(t.appConfig,a);case 7:return e.abrupt("return",i);case 10:if(e.prev=10,e.t0=e.catch(0),!Et(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,$t(t.appConfig);case 15:e.next=20;break;case 17:return o=Object.assign(Object.assign({},n),{authToken:{requestStatus:0}}),e.next=20,Yt(t.appConfig,o);case 20:throw e.t0;case 21:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function wr(e){return void 0!==e&&2===e.registrationStatus}function kr(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+xt}(e)}function xr(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Ir(){return(Ir=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t){var n,i,a,o;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,tr(n);case 3:return i=e.sent,a=i.installationEntry,(o=i.registrationPromise)?o.catch(console.error):pr(n).catch(console.error),e.abrupt("return",a.fid);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _r(){return _r=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t){var n,i,a,o=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]&&o[1],i=t,e.next=4,Er(i);case 4:return e.next=6,pr(i,n);case 6:return a=e.sent,e.abrupt("return",a.token);case 8:case"end":return e.stop()}}),e)}))),_r.apply(this,arguments)}function Er(e){return Tr.apply(this,arguments)}function Tr(){return(Tr=r(o)(r(s).mark((function e(t){var n;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,tr(t);case 2:if(!(n=e.sent.registrationPromise)){e.next=6;break}return e.next=6,n;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Sr(e){return _t.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Or="installations",Ar=function(e){var t=Ge(e.getProvider("app").getImmediate(),Or).getImmediate(),r={getId:function(){return function(e){return Ir.apply(this,arguments)}(t)},getToken:function(e){return function(e){return _r.apply(this,arguments)}(t,e)}};return r};Je(new ne(Or,(function(e){var t=e.getProvider("app").getImmediate(),r=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw Sr("App Configuration");if(!e.name)throw Sr("App Name");var t=!0,r=!1,n=void 0;try{for(var i,a=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(!e.options[o])throw Sr(o)}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:r,heartbeatServiceProvider:Ge(t,"heartbeat"),_delete:function(){return Promise.resolve()}}}),"PUBLIC")),Je(new ne("installations-internal",Ar,"PRIVATE")),tt(gt,yt),tt(gt,yt,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Rr,Cr="analytics",Pr=6e4,Nr="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Lr="https://www.googletagmanager.com/gtag/js",Dr=new ve("@firebase/analytics"),Mr=(Rr={},r(d)(Rr,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),r(d)(Rr,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),r(d)(Rr,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),r(d)(Rr,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),r(d)(Rr,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),r(d)(Rr,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),r(d)(Rr,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),r(d)(Rr,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),r(d)(Rr,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),r(d)(Rr,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),r(d)(Rr,"invalid-gtag-resource","Trusted Types detected an invalid gtag resource: {$gtagURL}."),Rr),Ur=new H("analytics","Analytics",Mr);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jr(e){if(!e.startsWith(Lr)){var t=Ur.create("invalid-gtag-resource",{gtagURL:e});return Dr.warn(t.message),""}return e}function Br(e){return Promise.all(e.map((function(e){return e.catch((function(e){return e}))})))}function Fr(e,t){var r=function(e,t){var r;return window.trustedTypes&&(r=window.trustedTypes.createPolicy(e,t)),r}("firebase-js-sdk-policy",{createScriptURL:jr}),n=document.createElement("script"),i="".concat(Lr,"?l=").concat(e,"&id=").concat(t);n.src=r?null==r?void 0:r.createScriptURL(i):i,n.async=!0,document.head.appendChild(n)}function zr(e,t,r,n,i,a){return Wr.apply(this,arguments)}function Wr(){return(Wr=r(o)(r(s).mark((function e(t,n,i,a,o,u){var c,f,l;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=a[o],e.prev=1,!c){e.next=7;break}return e.next=5,n[c];case 5:e.next=14;break;case 7:return e.next=9,Br(i);case 9:if(f=e.sent,!(l=f.find((function(e){return e.measurementId===o})))){e.next=14;break}return e.next=14,n[l.appId];case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),Dr.error(e.t0);case 19:t("config",o,u);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})))).apply(this,arguments)}function Hr(e,t,r,n,i){return Vr.apply(this,arguments)}function Vr(){return(Vr=r(o)(r(s).mark((function e(t,n,i,a,o){var u,c,f,l,d,p,h,v,m,g,y;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,u=[],!o||!o.send_to){e.next=38;break}return c=o.send_to,Array.isArray(c)||(c=[c]),e.next=7,Br(i);case 7:f=e.sent,l=!0,d=!1,p=void 0,e.prev=9,h=c[Symbol.iterator]();case 11:if(l=(v=h.next()).done){e.next=24;break}if(m=v.value,g=f.find((function(e){return e.measurementId===m})),!(y=g&&n[g.appId])){e.next=19;break}u.push(y),e.next=21;break;case 19:return u=[],e.abrupt("break",24);case 21:l=!0,e.next=11;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(9),d=!0,p=e.t0;case 30:e.prev=30,e.prev=31,l||null==h.return||h.return();case 33:if(e.prev=33,!d){e.next=36;break}throw p;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return 0===u.length&&(u=Object.values(n)),e.next=41,Promise.all(u);case 41:t("event",a,o||{}),e.next=47;break;case 44:e.prev=44,e.t1=e.catch(0),Dr.error(e.t1);case 47:case"end":return e.stop()}}),e,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function qr(e,t,n,i,a){var u=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];window[i].push(arguments)};return window[a]&&"function"==typeof window[a]&&(u=window[a]),window[a]=function(e,t,n,i){function a(){return(a=r(o)(r(s).mark((function a(o,u,c){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,"event"!==o){r.next=6;break}return r.next=4,Hr(e,t,n,u,c);case 4:r.next=12;break;case 6:if("config"!==o){r.next=11;break}return r.next=9,zr(e,t,n,i,u,c);case 9:r.next=12;break;case 11:"consent"===o?e("consent","update",c):e("set",u);case 12:r.next=17;break;case 14:r.prev=14,r.t0=r.catch(0),Dr.error(r.t0);case 17:case"end":return r.stop()}}),a,null,[[0,14]])})))).apply(this,arguments)}return function(e,t,r){return a.apply(this,arguments)}}(u,e,t,n),{gtagCore:u,wrappedGtag:window[a]}}function Kr(e){var t=window.document.getElementsByTagName("script"),r=!0,n=!1,i=void 0;try{for(var a,o=Object.values(t)[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(s.src&&s.src.includes(Lr)&&s.src.includes(e))return s}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jr=function(){"use strict";function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;r(f)(this,e),this.throttleMetadata=t,this.intervalMillis=n}return r(l)(e,[{key:"getThrottleMetadata",value:function(e){return this.throttleMetadata[e]}},{key:"setThrottleMetadata",value:function(e,t){this.throttleMetadata[e]=t}},{key:"deleteThrottleMetadata",value:function(e){delete this.throttleMetadata[e]}}]),e}(),Gr=new Jr;function Yr(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function Xr(e){return $r.apply(this,arguments)}function $r(){return($r=r(o)(r(s).mark((function e(t){var n,i,a,o,u,c,f,l;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.appId,a=t.apiKey,o={method:"GET",headers:Yr(a)},u=Nr.replace("{app-id}",i),e.next=6,fetch(u,o);case 6:if(200===(c=e.sent).status||304===c.status){e.next=19;break}return f="",e.prev=9,e.next=12,c.json();case 12:l=e.sent,(null===(n=l.error)||void 0===n?void 0:n.message)&&(f=l.error.message),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(9);case 18:throw Ur.create("config-fetch-failed",{httpStatus:c.status,responseMessage:f});case 19:return e.abrupt("return",c.json());case 20:case"end":return e.stop()}}),e,null,[[9,16]])})))).apply(this,arguments)}function Qr(e){return Zr.apply(this,arguments)}function Zr(){return Zr=r(o)(r(s).mark((function e(t){var n,i,a,u,c,f,l,d,p=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=p.length>1&&void 0!==p[1]?p[1]:Gr,i=p.length>2?p[2]:void 0,a=t.options,u=a.appId,c=a.apiKey,f=a.measurementId,u){e.next=4;break}throw Ur.create("no-app-id");case 4:if(c){e.next=8;break}if(!f){e.next=7;break}return e.abrupt("return",{measurementId:f,appId:u});case 7:throw Ur.create("no-api-key");case 8:return l=n.getThrottleMetadata(u)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new sn,setTimeout(r(o)(r(s).mark((function e(){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.abort();case 1:case"end":return e.stop()}}),e)}))),void 0!==i?i:Pr),e.abrupt("return",en({appId:u,apiKey:c,measurementId:f},l,d,n));case 12:case"end":return e.stop()}}),e)}))),Zr.apply(this,arguments)}function en(e,t,r){return tn.apply(this,arguments)}function tn(){return tn=r(o)(r(s).mark((function e(t,n,i){var a,o,u,c,f,l,d,p,h,v,m=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.throttleEndTimeMillis,o=n.backoffCount,u=m.length>3&&void 0!==m[3]?m[3]:Gr,f=t.appId,l=t.measurementId,e.prev=3,e.next=6,rn(i,a);case 6:e.next=14;break;case 8:if(e.prev=8,e.t0=e.catch(3),!l){e.next=13;break}return Dr.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(l)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null===e.t0||void 0===e.t0?void 0:e.t0.message,"]")),e.abrupt("return",{appId:f,measurementId:l});case 13:throw e.t0;case 14:return e.prev=14,e.next=17,Xr(t);case 17:return d=e.sent,u.deleteThrottleMetadata(f),e.abrupt("return",d);case 22:if(e.prev=22,e.t1=e.catch(14),nn(p=e.t1)){e.next=33;break}if(u.deleteThrottleMetadata(f),!l){e.next=32;break}return Dr.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(l)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null==p?void 0:p.message,"]")),e.abrupt("return",{appId:f,measurementId:l});case 32:throw e.t1;case 33:return h=503===Number(null===(c=null==p?void 0:p.customData)||void 0===c?void 0:c.httpStatus)?te(o,u.intervalMillis,30):te(o,u.intervalMillis),v={throttleEndTimeMillis:Date.now()+h,backoffCount:o+1},u.setThrottleMetadata(f,v),Dr.debug("Calling attemptFetch again in ".concat(h," millis")),e.abrupt("return",en(t,v,i,u));case 38:case"end":return e.stop()}}),e,null,[[3,8],[14,22]])}))),tn.apply(this,arguments)}function rn(e,t){return new Promise((function(r,n){var i=Math.max(t-Date.now(),0),a=setTimeout(r,i);e.addEventListener((function(){clearTimeout(a),n(Ur.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function nn(e){if(!(e instanceof W&&e.customData))return!1;var t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}var an,on,sn=function(){"use strict";function e(){r(f)(this,e),this.listeners=[]}return r(l)(e,[{key:"addEventListener",value:function(e){this.listeners.push(e)}},{key:"abort",value:function(){this.listeners.forEach((function(e){return e()}))}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return(un=r(o)(r(s).mark((function e(t,n,i,a,o){var u,c;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||!o.global){e.next=5;break}return t("event",i,a),e.abrupt("return");case 5:return e.next=7,n;case 7:u=e.sent,c=Object.assign(Object.assign({},a),{send_to:u}),t("event",i,c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function cn(e){on=e}function fn(e){an=e}function ln(){return dn.apply(this,arguments)}function dn(){return(dn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B()){e.next=5;break}return Dr.warn(Ur.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),e.abrupt("return",!1);case 5:return e.prev=5,e.next=8,F();case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(5),Dr.warn(Ur.create("indexeddb-unavailable",{errorInfo:null===e.t0||void 0===e.t0?void 0:e.t0.toString()}).message),e.abrupt("return",!1);case 14:return e.abrupt("return",!0);case 15:case"end":return e.stop()}}),e,null,[[5,10]])})))).apply(this,arguments)}function pn(){return(pn=r(o)(r(s).mark((function e(t,n,i,a,o,u,c){var f,l,d,p,v,m,g;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=Qr(t)).then((function(e){i[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&Dr.warn("The measurement ID in the local Firebase config (".concat(t.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(e.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return Dr.error(e)})),n.push(l),d=ln().then((function(e){return e?a.getId():void 0})),e.t0=r(h),e.next=8,Promise.all([l,d]);case 8:return e.t1=e.sent,p=(0,e.t0)(e.t1,2),v=p[0],m=p[1],Kr(u)||Fr(u,v.measurementId),on&&(o("consent","default",on),cn(void 0)),o("js",new Date),(g=null!==(f=null==c?void 0:c.config)&&void 0!==f?f:{}).origin="firebase",g.update=!0,null!=m&&(g.firebase_id=m),o("config",v.measurementId,g),an&&(o("set",an),fn(void 0)),e.abrupt("return",v.measurementId);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hn,vn,mn=function(){"use strict";function e(t){r(f)(this,e),this.app=t}return r(l)(e,[{key:"_delete",value:function(){return delete gn[this.app.options.appId],Promise.resolve()}}]),e}(),gn={},yn=[],bn={},wn="dataLayer",kn="gtag",xn=!1;function In(e,t,r){!function(){var e=[];if(j()&&e.push("This is a browser extension environment."),z()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"(".concat(t+1,") ").concat(e)})).join(" "),r=Ur.create("invalid-analytics-context",{errorInfo:t});Dr.warn(r.message)}}();var n,i,a=e.options.appId;if(!a)throw Ur.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Ur.create("no-api-key");Dr.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=gn[a])throw Ur.create("already-exists",{id:a});if(!xn){n=wn,i=[],Array.isArray(window[n])?i=window[n]:window[n]=i;var o=qr(gn,yn,bn,wn,kn),s=o.wrappedGtag,u=o.gtagCore;vn=s,hn=u,xn=!0}return gn[a]=function(e,t,r,n,i,a,o){return pn.apply(this,arguments)}(e,yn,bn,t,hn,wn,r),new mn(e)}function _n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Ge(e,Cr);if(r.isInitialized()){var n=r.getImmediate();if(J(t,r.getOptions()))return n;throw Ur.create("already-initialized")}var i=r.initialize({options:t});return i}function En(e,t,r,n){e=re(e),function(e,t,r,n,i){return un.apply(this,arguments)}(vn,gn[e.app.options.appId],t,r,n).catch((function(e){return Dr.error(e)}))}var Tn="@firebase/analytics",Sn="0.9.5";Je(new ne(Cr,(function(e,t){var r=t.options;return In(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),r)}),"PUBLIC")),Je(new ne("analytics-internal",(function(e){try{var t=e.getProvider(Cr).getImmediate();return{logEvent:function(e,r,n){return En(t,e,r,n)}}}catch(e){throw Ur.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),tt(Tn,Sn),tt(Tn,Sn,"esm2017");v=a("ds8z5"),o=a("bpxeT"),f=a("8MBJY"),l=a("a2hTj"),d=a("hKHmD");var On={};Object.defineProperty(On,"__esModule",{value:!0}),On.default=function(e,t,r){return Rn(e,t,r)};var An=function(e){return e&&e.__esModule?e:{default:e}}(a("2mz0K"));function Rn(e,t,r){return(Rn="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=An.default(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r||e):i.value}})(e,t,r)}var Cn=a("fVNic");m=a("eYQtU"),h=a("1t1Wn"),p=a("8nrFW"),_=a("2MbLg"),s=a("2TvXO");function Pn(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;Object.create;function Nn(){return r(d)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Ln=Nn,Dn=new H("auth","Firebase",Nn()),Mn=new ve("@firebase/auth");function Un(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var a;Mn.logLevel<=oe.ERROR&&(a=Mn).error.apply(a,["Auth (".concat(Qe,"): ").concat(e)].concat(r(p)(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];throw zn.apply(void 0,[e].concat(r(p)(n)))}function Bn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return zn.apply(void 0,[e].concat(r(p)(n)))}function Fn(e,t,n){var i=Object.assign(Object.assign({},Ln()),r(d)({},t,n));return new H("auth","Firebase",i).create(t,{appName:e.name})}function zn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var a;if("string"!=typeof e){var o,s=n[0],u=r(p)(n.slice(1));return u[0]&&(u[0].appName=e.name),(o=e._errorFactory).create.apply(o,[s].concat(r(p)(u)))}return(a=Dn).create.apply(a,[e].concat(r(p)(n)))}function Wn(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];if(!e)throw zn.apply(void 0,[t].concat(r(p)(i)))}function Hn(e){var t="INTERNAL ASSERTION FAILED: "+e;throw Un(t),new Error(t)}function Vn(e,t){e||Hn(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qn=new Map;function Kn(e){Vn(e instanceof Function,"Expected a class definition");var t=qn.get(e);return t?(Vn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,qn.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e,t){var r=Ge(e,"auth");if(r.isInitialized()){var n=r.getImmediate();if(J(r.getOptions(),null!=t?t:{}))return n;jn(n,"already-initialized")}return r.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Yn(){return"http:"===Xn()||"https:"===Xn()}function Xn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var $n=function(){"use strict";function e(t,n){r(f)(this,e),this.shortDelay=t,this.longDelay=n,Vn(n>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(U())||"object"==typeof navigator&&"ReactNative"===navigator.product}return r(l)(e,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Yn()||j()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(e,t){Vn(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?"".concat(r).concat(t.startsWith("/")?t.slice(1):t):r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zn,ei=function(){"use strict";function e(){r(f)(this,e)}return r(l)(e,null,[{key:"initialize",value:function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),ti=(Zn={},r(d)(Zn,"CREDENTIAL_MISMATCH","custom-token-mismatch"),r(d)(Zn,"MISSING_CUSTOM_TOKEN","internal-error"),r(d)(Zn,"INVALID_IDENTIFIER","invalid-email"),r(d)(Zn,"MISSING_CONTINUE_URI","internal-error"),r(d)(Zn,"INVALID_PASSWORD","wrong-password"),r(d)(Zn,"MISSING_PASSWORD","missing-password"),r(d)(Zn,"EMAIL_EXISTS","email-already-in-use"),r(d)(Zn,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),r(d)(Zn,"INVALID_IDP_RESPONSE","invalid-credential"),r(d)(Zn,"INVALID_PENDING_TOKEN","invalid-credential"),r(d)(Zn,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),r(d)(Zn,"MISSING_REQ_TYPE","internal-error"),r(d)(Zn,"EMAIL_NOT_FOUND","user-not-found"),r(d)(Zn,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),r(d)(Zn,"EXPIRED_OOB_CODE","expired-action-code"),r(d)(Zn,"INVALID_OOB_CODE","invalid-action-code"),r(d)(Zn,"MISSING_OOB_CODE","internal-error"),r(d)(Zn,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),r(d)(Zn,"INVALID_ID_TOKEN","invalid-user-token"),r(d)(Zn,"TOKEN_EXPIRED","user-token-expired"),r(d)(Zn,"USER_NOT_FOUND","user-token-expired"),r(d)(Zn,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),r(d)(Zn,"INVALID_CODE","invalid-verification-code"),r(d)(Zn,"INVALID_SESSION_INFO","invalid-verification-id"),r(d)(Zn,"INVALID_TEMPORARY_PROOF","invalid-credential"),r(d)(Zn,"MISSING_SESSION_INFO","missing-verification-id"),r(d)(Zn,"SESSION_EXPIRED","code-expired"),r(d)(Zn,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),r(d)(Zn,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),r(d)(Zn,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),r(d)(Zn,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),r(d)(Zn,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),r(d)(Zn,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),r(d)(Zn,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),r(d)(Zn,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),r(d)(Zn,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),r(d)(Zn,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),r(d)(Zn,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Zn),ri=new $n(3e4,6e4);function ni(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function ii(e,t,r,n){return ai.apply(this,arguments)}function ai(){return ai=r(o)(r(s).mark((function e(t,n,i,a){var u,c=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=c.length>4&&void 0!==c[4]?c[4]:{},e.abrupt("return",oi(t,u,r(o)(r(s).mark((function e(){var o,u,c,f;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},u={},a&&("GET"===n?u=a:o={body:JSON.stringify(a)}),c=Y(Object.assign({key:t.config.apiKey},u)).slice(1),e.next=6,t._getAdditionalHeaders();case 6:return(f=e.sent)["Content-Type"]="application/json",t.languageCode&&(f["X-Firebase-Locale"]=t.languageCode),e.abrupt("return",ei.fetch()(fi(t,t.config.apiHost,i,c),Object.assign({method:n,headers:f,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),ai.apply(this,arguments)}function oi(e,t,r){return si.apply(this,arguments)}function si(){return(si=r(o)(r(s).mark((function e(t,n,i){var a,o,u,c,f,l,d,p,v;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t._canInitEmulator=!1,a=Object.assign(Object.assign({},ti),n),e.prev=2,o=new li(t),e.next=6,Promise.race([i(),o.promise]);case 6:return u=e.sent,o.clearNetworkTimeout(),e.next=10,u.json();case 10:if(!("needConfirmation"in(c=e.sent))){e.next=13;break}throw di(t,"account-exists-with-different-credential",c);case 13:if(!u.ok||"errorMessage"in c){e.next=17;break}return e.abrupt("return",c);case 17:if(f=u.ok?c.errorMessage:c.error.message,l=r(h)(f.split(" : "),2),d=l[0],p=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==d){e.next=23;break}throw di(t,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==d){e.next=27;break}throw di(t,"email-already-in-use",c);case 27:if("USER_DISABLED"!==d){e.next=29;break}throw di(t,"user-disabled",c);case 29:if(v=a[d]||d.toLowerCase().replace(/[_\s]+/g,"-"),!p){e.next=34;break}throw Fn(t,v,p);case 34:jn(t,v);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof W)){e.next=41;break}throw e.t0;case 41:jn(t,"network-request-failed",{message:String(e.t0)});case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function ui(e,t,r,n){return ci.apply(this,arguments)}function ci(){return ci=r(o)(r(s).mark((function e(t,n,i,a){var o,u,c=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,ii(t,n,i,a,o);case 3:return"mfaPendingCredential"in(u=e.sent)&&jn(t,"multi-factor-auth-required",{_serverResponse:u}),e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)}))),ci.apply(this,arguments)}function fi(e,t,r,n){var i="".concat(t).concat(r,"?").concat(n);return e.config.emulator?Qn(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var li=function(){"use strict";function e(t){var n=this;r(f)(this,e),this.auth=t,this.timer=null,this.promise=new Promise((function(e,t){var r=n;n.timer=setTimeout((function(){return t(Bn(r.auth,"network-request-failed"))}),ri.get())}))}return r(l)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function di(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var i=Bn(e,t,n);return i.customData._tokenResponse=r,i}function pi(e,t){return hi.apply(this,arguments)}function hi(){return(hi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ii(t,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function vi(e,t){return mi.apply(this,arguments)}function mi(){return(mi=r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ii(t,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(){return yi=r(o)(r(s).mark((function e(t){var n,i,a,o,u,c,f=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>1&&void 0!==f[1]&&f[1],i=re(t),e.next=4,i.getIdToken(n);case 4:return a=e.sent,Wn((o=wi(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),u="object"==typeof o.firebase?o.firebase:void 0,c=null==u?void 0:u.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:gi(bi(o.auth_time)),issuedAtTime:gi(bi(o.iat)),expirationTime:gi(bi(o.exp)),signInProvider:c||null,signInSecondFactor:(null==u?void 0:u.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),yi.apply(this,arguments)}function bi(e){return 1e3*Number(e)}function wi(e){var t=r(h)(e.split("."),3),n=t[0],i=t[1],a=t[2];if(void 0===n||void 0===i||void 0===a)return Un("JWT malformed, contained fewer than 3 sections"),null;try{var o=R(i);return o?JSON.parse(o):(Un("Failed to decode base64 JWT payload"),null)}catch(e){return Un("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function ki(e,t){return xi.apply(this,arguments)}function xi(){return xi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){var i=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof W&&Ii(e.t0))){e.next=15;break}if(t.auth.currentUser!==t){e.next=15;break}return e.next=15,t.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),xi.apply(this,arguments)}function Ii(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _i=function(){"use strict";function e(t){r(f)(this,e),this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return r(l)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var t=this.getInterval(e),n=this;this.timerId=setTimeout(r(o)(r(s).mark((function e(){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.iteration();case 2:case"end":return e.stop()}}),e)}))),t)}}},{key:"iteration",value:function(){var e=this;return r(o)(r(s).mark((function t(){return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.user.getIdToken(!0);case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)&&e.schedule(!0),t.abrupt("return");case 9:e.schedule();case 10:case"end":return t.stop()}}),t,null,[[0,5]])})))()}}]),e}(),Ei=function(){"use strict";function e(t,n){r(f)(this,e),this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}return r(l)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=gi(this.lastLoginAt),this.creationTime=gi(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(e){return Si.apply(this,arguments)}function Si(){return(Si=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t){var n,i,a,o,u,c,f,l,d,p,h;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.auth,e.next=4,t.getIdToken();case 4:return a=e.sent,e.next=7,ki(t,vi(i,{idToken:a}));case 7:Wn(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),u=o.users[0],t._notifyReloadListener(u),c=(null===(n=u.providerUserInfo)||void 0===n?void 0:n.length)?Ri(u.providerUserInfo):[],f=Ai(t.providerData,c),l=t.isAnonymous,d=!(t.email&&u.passwordHash||(null==f?void 0:f.length)),p=!!l&&d,h={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new Ei(u.createdAt,u.lastLoginAt),isAnonymous:p},Object.assign(t,h);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oi(){return(Oi=r(o)(r(s).mark((function e(t){var n;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=re(t),e.next=3,Ti(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ai(e,t){var n=e.filter((function(e){return!t.some((function(t){return t.providerId===e.providerId}))}));return r(p)(n).concat(r(p)(t))}function Ri(e){return e.map((function(e){var t=e.providerId,r=Pn(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}function Ci(e,t){return Pi.apply(this,arguments)}function Pi(){return(Pi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){var i;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oi(t,{},r(o)(r(s).mark((function e(){var i,a,o,u,c,f;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Y({grant_type:"refresh_token",refresh_token:n}).slice(1),a=t.config,o=a.tokenApiHost,u=a.apiKey,c=fi(t,o,"/v1/token","key=".concat(u)),e.next=5,t._getAdditionalHeaders();case 5:return(f=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",ei.fetch()(c,{method:"POST",headers:f,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ni=function(){"use strict";function e(){r(f)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return r(l)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){Wn(e.idToken,"internal-error"),Wn(void 0!==e.idToken,"internal-error"),Wn(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,Wn(r=wi(t),"internal-error"),Wn(void 0!==r.exp,"internal-error"),Wn(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}},{key:"getToken",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return r(o)(r(s).mark((function i(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(Wn(!n.accessToken||n.refreshToken,e,"user-token-expired"),t||!n.accessToken||n.isExpired){r.next=3;break}return r.abrupt("return",n.accessToken);case 3:if(!n.refreshToken){r.next=7;break}return r.next=6,n.refresh(e,n.refreshToken);case 6:return r.abrupt("return",n.accessToken);case 7:return r.abrupt("return",null);case 8:case"end":return r.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,t){var n=this;return r(o)(r(s).mark((function i(){var a,o,u,c;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Ci(e,t);case 2:a=r.sent,o=a.accessToken,u=a.refreshToken,c=a.expiresIn,n.updateTokensAndExpiration(o,u,Number(c));case 7:case"end":return r.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return Hn("not implemented")}}],[{key:"fromJSON",value:function(t,r){var n=r.refreshToken,i=r.accessToken,a=r.expirationTime,o=new e;return n&&(Wn("string"==typeof n,"internal-error",{appName:t}),o.refreshToken=n),i&&(Wn("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(Wn("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(e,t){Wn("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Di=function(){"use strict";function e(t){r(f)(this,e);var n=t.uid,i=t.auth,a=t.stsTokenManager,o=Pn(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _i(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?r(p)(o.providerData):[],this.metadata=new Ei(o.createdAt||void 0,o.lastLoginAt||void 0)}return r(l)(e,[{key:"getIdToken",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,ki(t,t.stsTokenManager.getToken(t.auth,e));case 2:if(Wn(i=r.sent,t.auth,"internal-error"),t.accessToken===i){r.next=9;break}return t.accessToken=i,r.next=8,t.auth._persistUserIfCurrent(t);case 8:t.auth._notifyListenersIfCurrent(t);case 9:return r.abrupt("return",i);case 10:case"end":return r.stop()}}),n)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return yi.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Oi.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(Wn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){var r=new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}},{key:"_onReload",value:function(e){Wn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return r(o)(r(s).mark((function i(){var a;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=!1,e.idToken&&e.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(e),a=!0),!t){r.next=5;break}return r.next=5,Ti(n);case 5:return r.next=7,n.auth._persistUserIfCurrent(n);case 7:a&&n.auth._notifyListenersIfCurrent(n);case 8:case"end":return r.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return n=t.sent,t.next=5,ki(e,pi(e.auth,{idToken:n}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),t)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,r){var n,i,a,o,s,u,c,f,l=null!==(n=r.displayName)&&void 0!==n?n:void 0,d=null!==(i=r.email)&&void 0!==i?i:void 0,p=null!==(a=r.phoneNumber)&&void 0!==a?a:void 0,h=null!==(o=r.photoURL)&&void 0!==o?o:void 0,v=null!==(s=r.tenantId)&&void 0!==s?s:void 0,m=null!==(u=r._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=r.createdAt)&&void 0!==c?c:void 0,y=null!==(f=r.lastLoginAt)&&void 0!==f?f:void 0,b=r.uid,w=r.emailVerified,k=r.isAnonymous,x=r.providerData,I=r.stsTokenManager;Wn(b&&I,t,"internal-error");var _=Ni.fromJSON(this.name,I);Wn("string"==typeof b,t,"internal-error"),Li(l,t.name),Li(d,t.name),Wn("boolean"==typeof w,t,"internal-error"),Wn("boolean"==typeof k,t,"internal-error"),Li(p,t.name),Li(h,t.name),Li(v,t.name),Li(m,t.name),Li(g,t.name),Li(y,t.name);var E=new e({uid:b,auth:t,email:d,emailVerified:w,displayName:l,isAnonymous:k,photoURL:h,phoneNumber:p,tenantId:v,stsTokenManager:_,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(E.providerData=x.map((function(e){return Object.assign({},e)}))),m&&(E._redirectEventId=m),E}},{key:"_fromIdTokenResponse",value:function(t,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r(o)(r(s).mark((function a(){var o,u;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(o=new Ni).updateFromServerResponse(n),u=new e({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:i}),r.next=5,Ti(u);case 5:return r.abrupt("return",u);case 6:case"end":return r.stop()}}),a)})))()}}]),e}(),Mi=function(){"use strict";function e(){r(f)(this,e),this.type="NONE",this.storage={}}return r(l)(e,[{key:"_isAvailable",value:function(){return r(o)(r(s).mark((function e(){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,t){var n=this;return r(o)(r(s).mark((function i(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n.storage[e]=t;case 1:case"end":return r.stop()}}),i)})))()}},{key:"_get",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=t.storage[e],r.abrupt("return",void 0===i?null:i);case 2:case"end":return r.stop()}}),n)})))()}},{key:"_remove",value:function(e){var t=this;return r(o)(r(s).mark((function n(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:delete t.storage[e];case 1:case"end":return r.stop()}}),n)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mi.type="NONE";var Ui=Mi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(e,t,r){return"firebase:".concat(e,":").concat(t,":").concat(r)}var Bi=function(){"use strict";function e(t,n,i){r(f)(this,e),this.persistence=t,this.auth=n,this.userKey=i;var a=this.auth,o=a.config,s=a.name;this.fullUserKey=ji(this.userKey,o.apiKey,s),this.fullPersistenceKey=ji("persistence",o.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return r(l)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return n=t.sent,t.abrupt("return",n?Di._fromJSON(e.auth,n):null);case 4:case"end":return t.stop()}}),t)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.persistence!==e){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,t.getCurrentUser();case 4:return i=r.sent,r.next=7,t.removeCurrentUser();case 7:if(t.persistence=e,!i){r.next=10;break}return r.abrupt("return",t.setCurrentUser(i));case 10:case"end":return r.stop()}}),n)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return r(o)(r(s).mark((function a(){var u,c,f,l,d,p,h,v,m,g,y,b,w;return r(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.length){a.next=2;break}return a.abrupt("return",new e(Kn(Ui),t,i));case 2:return a.next=4,Promise.all(n.map(function(){var e=r(o)(r(s).mark((function e(t){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",t);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:u=a.sent.filter((function(e){return e})),c=u[0]||Kn(Ui),f=ji(i,t.config.apiKey,t.name),l=null,d=!0,p=!1,h=void 0,a.prev=9,v=n[Symbol.iterator]();case 11:if(d=(m=v.next()).done){a.next=29;break}return g=m.value,a.prev=13,a.next=16,g._get(f);case 16:if(!(y=a.sent)){a.next=22;break}return b=Di._fromJSON(t,y),g!==c&&(l=b),c=g,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:d=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),p=!0,h=a.t1;case 35:a.prev=35,a.prev=36,d||null==v.return||v.return();case 38:if(a.prev=38,!p){a.next=41;break}throw h;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(w=u.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&w.length){a.next=46;break}return a.abrupt("return",new e(c,t,i));case 46:if(c=w[0],!l){a.next=50;break}return a.next=50,c._set(f,l.toJSON());case 50:return a.next=52,Promise.all(n.map(function(){var e=r(o)(r(s).mark((function e(t){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t===c){e.next=8;break}return e.prev=1,e.next=4,t._remove(f);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return a.abrupt("return",new e(c,t,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Vi(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(zi(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ki(t))return"Blackberry";if(Ji(t))return"Webos";if(Wi(t))return"Safari";if((t.includes("chrome/")||Hi(t))&&!t.includes("edge/"))return"Chrome";if(qi(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function zi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U();return/firefox\//i.test(e)}function Wi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Hi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U();return/crios\//i.test(e)}function Vi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U();return/iemobile/i.test(e)}function qi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U();return/android/i.test(e)}function Ki(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U();return/blackberry/i.test(e)}function Ji(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U();return/webos/i.test(e)}function Gi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Yi(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U();return Gi(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Xi(){return((e=U()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function $i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U();return Gi(e)||qi(e)||Ji(e)||Ki(e)||/windows phone/i.test(e)||Vi(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qi(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Fi(U());break;case"Worker":t="".concat(Fi(U()),"-").concat(e);break;default:t=e}var n=r.length?r.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Qe,"/").concat(n)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zi=function(){"use strict";function e(t){r(f)(this,e),this.auth=t,this.queue=[]}return r(l)(e,[{key:"pushCallback",value:function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var i=this.queue.length-1;return function(){r.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i,a,o,u,c,f,l,d,p,h,v,m,g;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.auth.currentUser!==e){r.next=2;break}return r.abrupt("return");case 2:i=[],r.prev=3,a=!0,o=!1,u=void 0,r.prev=5,c=t.queue[Symbol.iterator]();case 7:if(a=(f=c.next()).done){r.next=15;break}return l=f.value,r.next=11,l(e);case 11:l.onAbort&&i.push(l.onAbort);case 12:a=!0,r.next=7;break;case 15:r.next=21;break;case 17:r.prev=17,r.t0=r.catch(5),o=!0,u=r.t0;case 21:r.prev=21,r.prev=22,a||null==c.return||c.return();case 24:if(r.prev=24,!o){r.next=27;break}throw u;case 27:return r.finish(24);case 28:return r.finish(21);case 29:r.next=52;break;case 31:for(r.prev=31,r.t1=r.catch(3),i.reverse(),d=!0,p=!1,h=void 0,r.prev=35,v=i[Symbol.iterator]();!(d=(m=v.next()).done);d=!0){g=m.value;try{g()}catch(e){}}r.next=43;break;case 39:r.prev=39,r.t2=r.catch(35),p=!0,h=r.t2;case 43:r.prev=43,r.prev=44,d||null==v.return||v.return();case 46:if(r.prev=46,!p){r.next=49;break}throw h;case 49:return r.finish(46);case 50:return r.finish(43);case 51:throw t.auth._errorFactory.create("login-blocked",{originalMessage:null===r.t1||void 0===r.t1?void 0:r.t1.message});case 52:case"end":return r.stop()}}),n,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),e}(),ea=function(){"use strict";function e(t,n,i){r(f)(this,e),this.app=t,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ra(this),this.idTokenSubscription=new ra(this),this.beforeStateQueue=new Zi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}return r(l)(e,[{key:"_initializeWithPersistence",value:function(e,t){t&&(this._popupRedirectResolver=Kn(t));var n=this;return this._initializationPromise=this.queue(r(o)(r(s).mark((function i(){var a,o;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._deleted){r.next=3;break}return r.abrupt("return");case 3:return r.next=5,Bi.create(n,e);case 5:if(n.persistenceManager=r.sent,!n._deleted){r.next=8;break}return r.abrupt("return");case 8:if(!(null===(a=n._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){r.next=16;break}return r.prev=9,r.next=12,n._popupRedirectResolver._initialize(n);case 12:r.next=16;break;case 14:r.prev=14,r.t0=r.catch(9);case 16:return r.next=18,n.initializeCurrentUser(t);case 18:if(n.lastNotifiedUid=(null===(o=n.currentUser)||void 0===o?void 0:o.uid)||null,!n._deleted){r.next=21;break}return r.abrupt("return");case 21:n._isInitialized=!0;case 22:case"end":return r.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(n=t.sent,e.currentUser||n){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!n||e.currentUser.uid!==n.uid){t.next=12;break}return e._currentUser._assign(n),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(n,!0);case 14:case"end":return t.stop()}}),t)})))()}},{key:"initializeCurrentUser",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i,a,o,u,c,f,l;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,t.assertedPersistence.getCurrentUser();case 3:if(a=r.sent,o=a,u=!1,!e||!t.config.authDomain){r.next=15;break}return r.next=9,t.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=t.redirectUser)||void 0===i?void 0:i._redirectEventId,f=null==o?void 0:o._redirectEventId,r.next=13,t.tryRedirectSignIn(e);case 13:l=r.sent,c&&c!==f||!(null==l?void 0:l.user)||(o=l.user,u=!0);case 15:if(o){r.next=17;break}return r.abrupt("return",t.directlySetCurrentUser(null));case 17:if(o._redirectEventId){r.next=33;break}if(!u){r.next=28;break}return r.prev=19,r.next=22,t.beforeStateQueue.runMiddleware(o);case 22:r.next=28;break;case 24:r.prev=24,r.t0=r.catch(19),o=a,t._popupRedirectResolver._overrideRedirectResult(t,(function(){return Promise.reject(r.t0)}));case 28:if(!o){r.next=32;break}return r.abrupt("return",t.reloadAndSetCurrentUserOrClear(o));case 32:return r.abrupt("return",t.directlySetCurrentUser(null));case 33:return Wn(t._popupRedirectResolver,t,"argument-error"),r.next=36,t.getOrInitRedirectPersistenceManager();case 36:if(!t.redirectUser||t.redirectUser._redirectEventId!==o._redirectEventId){r.next=38;break}return r.abrupt("return",t.directlySetCurrentUser(o));case 38:return r.abrupt("return",t.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return r.stop()}}),n,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=null,r.prev=1,r.next=4,t._popupRedirectResolver._completeRedirectFn(t,e,!0);case 4:i=r.sent,r.next=11;break;case 7:return r.prev=7,r.t0=r.catch(1),r.next=11,t._setRedirectUser(null);case 11:return r.abrupt("return",i);case 12:case"end":return r.stop()}}),n,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var t=this;return r(o)(r(s).mark((function n(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Ti(e);case 3:r.next=9;break;case 5:if(r.prev=5,r.t0=r.catch(0),"auth/network-request-failed"===(null===r.t0||void 0===r.t0?void 0:r.t0.code)){r.next=9;break}return r.abrupt("return",t.directlySetCurrentUser(null));case 9:return r.abrupt("return",t.directlySetCurrentUser(e));case 10:case"end":return r.stop()}}),n,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return r(o)(r(s).mark((function t(){return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),t)})))()}},{key:"updateCurrentUser",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(i=e?re(e):null)&&Wn(i.auth.config.apiKey===t.config.apiKey,t,"invalid-user-token"),r.abrupt("return",t._updateCurrentUser(i&&i._clone(t)));case 3:case"end":return r.stop()}}),n)})))()}},{key:"_updateCurrentUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return r(o)(r(s).mark((function i(){return r(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!n._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&Wn(n.tenantId===e.tenantId,n,"tenant-id-mismatch"),t){i.next=6;break}return i.next=6,n.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",n.queue(r(o)(r(s).mark((function t(){return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.directlySetCurrentUser(e);case 2:n.notifyAuthListeners();case 3:case"end":return t.stop()}}),t)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return r(o)(r(s).mark((function t(){return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),t)})))()}},{key:"setPersistence",value:function(e){var t=this;return this.queue(r(o)(r(s).mark((function n(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.assertedPersistence.setPersistence(Kn(e));case 2:case"end":return r.stop()}}),n)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new H("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,t){var n=this;return r(o)(r(s).mark((function i(){var a;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.getOrInitRedirectPersistenceManager(t);case 2:return a=r.sent,r.abrupt("return",null===e?a.removeCurrentUser():a.setCurrentUser(e));case 4:case"end":return r.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.redirectPersistenceManager){r.next=9;break}return Wn(i=e&&Kn(e)||t._popupRedirectResolver,t,"argument-error"),r.next=5,Bi.create(t,[Kn(i._redirectPersistence)],"redirectUser");case 5:return t.redirectPersistenceManager=r.sent,r.next=8,t.redirectPersistenceManager.getCurrentUser();case 8:t.redirectUser=r.sent;case 9:return r.abrupt("return",t.redirectPersistenceManager);case 10:case"end":return r.stop()}}),n)})))()}},{key:"_redirectUserForId",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i,a;return r(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t._isInitialized){n.next=4;break}return n.next=4,t.queue(r(o)(r(s).mark((function e(){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=t._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){n.next=6;break}return n.abrupt("return",t._currentUser);case 6:if((null===(a=t.redirectUser)||void 0===a?void 0:a._redirectEventId)!==e){n.next=8;break}return n.abrupt("return",t.redirectUser);case 8:return n.abrupt("return",null);case 9:case"end":return n.stop()}}),n)})))()}},{key:"_persistUserIfCurrent",value:function(e){var t=this;return r(o)(r(s).mark((function n(){return r(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e!==t.currentUser){n.next=2;break}return n.abrupt("return",t.queue(r(o)(r(s).mark((function n(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",t.directlySetCurrentUser(e));case 1:case"end":return r.stop()}}),n)})))));case 2:case"end":return n.stop()}}),n)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,r,n){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Wn(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var t=this;return r(o)(r(s).mark((function n(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.currentUser&&t.currentUser!==e&&t._currentUser._stopProactiveRefresh(),e&&t.isProactiveRefreshEnabled&&e._startProactiveRefresh(),t.currentUser=e,!e){r.next=8;break}return r.next=6,t.assertedPersistence.setCurrentUser(e);case 6:r.next=10;break;case 8:return r.next=10,t.assertedPersistence.removeCurrentUser();case 10:case"end":return r.stop()}}),n)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return Wn(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qi(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n,i,a;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r(d)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),t.next=5,null===(n=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader();case 5:return(a=t.sent)&&(i["X-Firebase-Client"]=a),t.abrupt("return",i);case 8:case"end":return t.stop()}}),t)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(e){return re(e)}var ra=function(){"use strict";function e(t){var n,i,a=this;r(f)(this,e),this.auth=t,this.observer=null,this.addObserver=(i=new Q((function(e){return a.observer=e}),n)).subscribe.bind(i)}return r(l)(e,[{key:"next",get:function(){return Wn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();function na(e,t,n){var i=ta(e);Wn(i._canInitEmulator,i,"emulator-config-failed"),Wn(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");var a=!!(null==n?void 0:n.disableWarnings),o=ia(t),s=function(e){var t=ia(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};var i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:aa(i.substr(o.length+1))}}var s=r(h)(i.split(":"),2);return{host:s[0],port:aa(s[1])}}(t),u=s.host,c=s.port,f=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(f,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ia(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function aa(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var oa=function(){"use strict";function e(t,n){r(f)(this,e),this.providerId=t,this.signInMethod=n}return r(l)(e,[{key:"toJSON",value:function(){return Hn("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return Hn("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return Hn("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return Hn("not implemented")}}]),e}();function sa(e,t){return ua.apply(this,arguments)}function ua(){return(ua=r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ii(t,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ca(e,t){return fa.apply(this,arguments)}function fa(){return(fa=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ui(t,"POST","/v1/accounts:signInWithPassword",ni(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function la(e,t){return da.apply(this,arguments)}function da(){return(da=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ui(t,"POST","/v1/accounts:signInWithEmailLink",ni(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pa(e,t){return ha.apply(this,arguments)}function ha(){return(ha=r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ui(t,"POST","/v1/accounts:signInWithEmailLink",ni(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var va=function(e){"use strict";r(m)(n,e);var t=r(_)(n);function n(e,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r(f)(this,n),(o=t.call(this,"password",a))._email=e,o._password=i,o._tenantId=s,o}return r(l)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var t=this;return r(o)(r(s).mark((function n(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=t.signInMethod,r.next="password"===r.t0?3:"emailLink"===r.t0?4:5;break;case 3:return r.abrupt("return",ca(e,{returnSecureToken:!0,email:t._email,password:t._password}));case 4:return r.abrupt("return",la(e,{email:t._email,oobCode:t._password}));case 5:jn(e,"internal-error");case 6:case"end":return r.stop()}}),n)})))()}},{key:"_linkToIdToken",value:function(e,t){var n=this;return r(o)(r(s).mark((function i(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=n.signInMethod,r.next="password"===r.t0?3:"emailLink"===r.t0?4:5;break;case 3:return r.abrupt("return",sa(e,{idToken:t,returnSecureToken:!0,email:n._email,password:n._password}));case 4:return r.abrupt("return",pa(e,{idToken:t,email:n._email,oobCode:n._password}));case 5:jn(e,"internal-error");case 6:case"end":return r.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(oa);function ma(e,t){return ga.apply(this,arguments)}function ga(){return(ga=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ui(t,"POST","/v1/accounts:signInWithIdp",ni(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ya=function(e){"use strict";r(m)(n,e);var t=r(_)(n);function n(){var e;return r(f)(this,n),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return r(l)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return ma(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,ma(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,ma(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Y(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):jn("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,i=t.signInMethod,a=Pn(t,["providerId","signInMethod"]);if(!r||!i)return null;var o=new n(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),n}(oa);function ba(e,t){return wa.apply(this,arguments)}function wa(){return(wa=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ii(t,"POST","/v1/accounts:sendVerificationCode",ni(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ka(){return(ka=r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ui(t,"POST","/v1/accounts:signInWithPhoneNumber",ni(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xa(){return(xa=r(o)(r(s).mark((function e(t,n){var i;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ui(t,"POST","/v1/accounts:signInWithPhoneNumber",ni(t,n));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw di(t,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ia=r(d)({},"USER_NOT_FOUND","user-not-found");function _a(){return(_a=r(o)(r(s).mark((function e(t,n){var i;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},n),{operation:"REAUTH"}),e.abrupt("return",ui(t,"POST","/v1/accounts:signInWithPhoneNumber",ni(t,i),Ia));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ea=function(e){"use strict";r(m)(n,e);var t=r(_)(n);function n(e){var i;return r(f)(this,n),(i=t.call(this,"phone","phone")).params=e,i}return r(l)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return ka.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return xa.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return _a.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,r=e.phoneNumber,n=e.verificationId,i=e.verificationCode;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:n,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return r||t||i||a?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:a}):null}}]),n}(oa);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ta=function(){"use strict";function e(t){var n,i,a,o,s,u;r(f)(this,e);var c=X($(t)),l=null!==(n=c.apiKey)&&void 0!==n?n:null,d=null!==(i=c.oobCode)&&void 0!==i?i:null,p=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=c.mode)&&void 0!==a?a:null);Wn(l&&d&&p,"argument-error"),this.apiKey=l,this.operation=p,this.code=d,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return r(l)(e,null,[{key:"parseLink",value:function(t){var r=function(e){var t=X($(e)).link,r=t?X($(t)).deep_link_id:null,n=X($(e)).deep_link_id;return(n?X($(n)).link:null)||n||r||t||e}(t);try{return new e(r)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Sa=function(){"use strict";function e(){r(f)(this,e),this.providerId=e.PROVIDER_ID}return r(l)(e,null,[{key:"credential",value:function(e,t){return va._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var r=Ta.parseLink(t);return Wn(r,"argument-error"),va._fromEmailAndCode(e,r.code,r.tenantId)}}]),e}();Sa.PROVIDER_ID="password",Sa.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Sa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Oa=function(){"use strict";function e(t){r(f)(this,e),this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}return r(l)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),Aa=function(e){"use strict";r(m)(n,e);var t=r(_)(n);function n(){var e;return r(f)(this,n),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return r(l)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return r(p)(this.scopes)}}]),n}(Oa),Ra=function(e){"use strict";r(m)(n,e);var t=r(_)(n);function n(){return r(f)(this,n),t.call(this,"facebook.com")}return r(l)(n,null,[{key:"credential",value:function(e){return ya._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(Aa);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ra.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ra.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ca=function(e){"use strict";r(m)(n,e);var t=r(_)(n);function n(){var e;return r(f)(this,n),(e=t.call(this,"google.com")).addScope("profile"),e}return r(l)(n,null,[{key:"credential",value:function(e,t){return ya._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(Aa);Ca.GOOGLE_SIGN_IN_METHOD="google.com",Ca.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Pa=function(e){"use strict";r(m)(n,e);var t=r(_)(n);function n(){return r(f)(this,n),t.call(this,"github.com")}return r(l)(n,null,[{key:"credential",value:function(e){return ya._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(Aa);Pa.GITHUB_SIGN_IN_METHOD="github.com",Pa.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Na=function(e){"use strict";r(m)(n,e);var t=r(_)(n);function n(){return r(f)(this,n),t.call(this,"twitter.com")}return r(l)(n,null,[{key:"credential",value:function(e,t){return ya._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(Aa);function La(e,t){return Da.apply(this,arguments)}function Da(){return(Da=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ui(t,"POST","/v1/accounts:signUp",ni(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Na.TWITTER_SIGN_IN_METHOD="twitter.com",Na.PROVIDER_ID="twitter.com";var Ma=function(){"use strict";function e(t){r(f)(this,e),this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}return r(l)(e,null,[{key:"_fromIdTokenResponse",value:function(t,n,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r(o)(r(s).mark((function o(){var u,c,f;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Di._fromIdTokenResponse(t,i,a);case 2:return u=r.sent,c=Ua(i),f=new e({user:u,providerId:c,_tokenResponse:i,operationType:n}),r.abrupt("return",f);case 6:case"end":return r.stop()}}),o)})))()}},{key:"_forOperation",value:function(t,n,i){return r(o)(r(s).mark((function a(){var o;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t._updateTokensIfNecessary(i,!0);case 2:return o=Ua(i),r.abrupt("return",new e({user:t,providerId:o,_tokenResponse:i,operationType:n}));case 4:case"end":return r.stop()}}),a)})))()}}]),e}();function Ua(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ja=function(e){"use strict";r(m)(n,e);var t=r(_)(n);function n(e,i,a,o){var s,u;return r(f)(this,n),(s=t.call(this,i.code,i.message)).operationType=a,s.user=o,Object.setPrototypeOf(r(v)(s),n.prototype),s.customData={appName:e.name,tenantId:null!==(u=e.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:a},s}return r(l)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(W);function Ba(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw ja._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(e,t){return za.apply(this,arguments)}function za(){return za=r(o)(r(s).mark((function e(t,n){var i,a,o=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=ki,e.t1=t,e.t2=n,e.t3=t.auth,e.next=7,t.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",Ma._forOperation(t,"link",a));case 14:case"end":return e.stop()}}),e)}))),za.apply(this,arguments)}function Wa(e,t){return Ha.apply(this,arguments)}function Ha(){return Ha=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){var i,a,o,u,c,f,l=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=t.auth,o="reauthenticate",e.prev=3,e.next=6,ki(t,Ba(a,o,n,t),i);case 6:return Wn((u=e.sent).idToken,a,"internal-error"),Wn(c=wi(u.idToken),a,"internal-error"),f=c.sub,Wn(t.uid===f,a,"user-mismatch"),e.abrupt("return",Ma._forOperation(t,o,u));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&jn(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])}))),Ha.apply(this,arguments)}function Va(e,t){return qa.apply(this,arguments)}function qa(){return qa=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){var i,a,o,u,c=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a="signIn",e.next=4,Ba(t,a,n);case 4:return o=e.sent,e.next=7,Ma._fromIdTokenResponse(t,a,o);case 7:if(u=e.sent,i){e.next=11;break}return e.next=11,t._updateCurrentUser(u.user);case 11:return e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)}))),qa.apply(this,arguments)}function Ka(e,t){return Ja.apply(this,arguments)}function Ja(){return(Ja=r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Va(ta(t),n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ga(e,t,r){return Ya.apply(this,arguments)}function Ya(){return(Ya=r(o)(r(s).mark((function e(t,n,i){var a,o,u;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ta(t),e.next=3,La(a,{returnSecureToken:!0,email:n,password:i});case 3:return o=e.sent,e.next=6,Ma._fromIdTokenResponse(a,"signIn",o);case 6:return u=e.sent,e.next=9,a._updateCurrentUser(u.user);case 9:return e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Xa(e,t,r){return Ka(re(e),Sa.credential(t,r))}function $a(e,t,r,n){return re(e).onIdTokenChanged(t,r,n)}function Qa(e,t,r){return re(e).beforeAuthStateChanged(t,r)}function Za(e){return re(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function eo(e,t){return ii(e,"POST","/v2/accounts/mfaEnrollment:start",ni(e,t))}function to(e,t){return ii(e,"POST","/v2/accounts/mfaEnrollment:finalize",ni(e,t))}new WeakMap;var ro="__sak",no=function(){"use strict";function e(t,n){r(f)(this,e),this.storageRetriever=t,this.type=n}return r(l)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(ro,"1"),this.storage.removeItem(ro),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var io=function(e){"use strict";r(m)(n,e);var t=r(_)(n);function n(){var e,i;return r(f)(this,n),(e=t.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,r){return e.onStorageEvent(t,r)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(Wi(i=U())||Gi(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=$i(),e._shouldAllowMigration=!0,e}return r(l)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;if(e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var a=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},o=this.storage.getItem(n);Xi()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,r){s.notifyListeners(e,r)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,r,n){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,t){var i=this,a=this;return r(o)(r(s).mark((function o(){return r(s).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,r(On)(r(Cn)(n.prototype),"_set",i).call(a,e,t);case 2:a.localCache[e]=JSON.stringify(t);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(e){var t=this,i=this;return r(o)(r(s).mark((function a(){var o;return r(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r(On)(r(Cn)(n.prototype),"_get",t).call(i,e);case 2:return o=a.sent,i.localCache[e]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(e){var t=this,i=this;return r(o)(r(s).mark((function a(){return r(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r(On)(r(Cn)(n.prototype),"_remove",t).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return a.stop()}}),a)})))()}}]),n}(no);io.type="LOCAL";var ao=io,oo=function(e){"use strict";r(m)(n,e);var t=r(_)(n);function n(){return r(f)(this,n),t.call(this,(function(){return window.sessionStorage}),"SESSION")}return r(l)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(no);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oo.type="SESSION";var so=oo;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(e){return Promise.all(e.map((t=r(o)(r(s).mark((function e(t){var n;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return t.apply(this,arguments)})));var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var co=function(){"use strict";function e(t){r(f)(this,e),this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return r(l)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i,a,u,c,f,l,d,p;return r(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=(i=e).data,u=a.eventId,c=a.eventType,f=a.data,null==(l=t.handlersMap[c])?void 0:l.size){n.next=5;break}return n.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:u,eventType:c}),d=Array.from(l).map(function(){var e=r(o)(r(s).mark((function e(t){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t(i.origin,f));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.next=9,uo(d);case 9:p=n.sent,i.ports[0].postMessage({status:"done",eventId:u,eventType:c,response:p});case 11:case"end":return n.stop()}}),n)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var r=this.receivers.find((function(e){return e.isListeningto(t)}));if(r)return r;var n=new e(t);return this.receivers.push(n),n}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fo(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */co.receivers=[];var lo=function(){"use strict";function e(t){r(f)(this,e),this.target=t,this.handlers=new Set}return r(l)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return r(o)(r(s).mark((function a(){var o,u,c;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){r.next=3;break}throw new Error("connection_unavailable");case 3:return r.abrupt("return",new Promise((function(r,a){var s=fo("",20);o.port1.start();var f=setTimeout((function(){a(new Error("unsupported_event"))}),n);c={messageChannel:o,onMessage:function(e){var t=e;if(t.data.eventId===s)switch(t.data.status){case"ack":clearTimeout(f),u=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(u),r(t.data.response);break;default:clearTimeout(f),clearTimeout(u),a(new Error("invalid_response"))}}},i.handlers.add(c),o.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:e,eventId:s,data:t},[o.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return r.stop()}}),a)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ho(){return void 0!==po().WorkerGlobalScope&&"function"==typeof po().importScripts}function vo(){return mo.apply(this,arguments)}function mo(){return(mo=r(o)(r(s).mark((function e(){var t;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return t=e.sent,e.abrupt("return",t.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var go="firebaseLocalStorageDb",yo="firebaseLocalStorage",bo="fbase_key",wo=function(){"use strict";function e(t){r(f)(this,e),this.request=t}return r(l)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,r){var n=e;e.request.addEventListener("success",(function(){t(n.request.result)})),e.request.addEventListener("error",(function(){r(n.request.error)}))}))}}]),e}();function ko(e,t){return e.transaction([yo],t?"readwrite":"readonly").objectStore(yo)}function xo(){var e=indexedDB.deleteDatabase(go);return new wo(e).toPromise()}function Io(){var e=indexedDB.open(go,1);return new Promise((function(t,n){e.addEventListener("error",(function(){n(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(yo,{keyPath:bo})}catch(e){n(e)}})),e.addEventListener("success",r(o)(r(s).mark((function n(){var i;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if((i=e.result).objectStoreNames.contains(yo)){r.next=12;break}return i.close(),r.next=5,xo();case 5:return r.t0=t,r.next=8,Io();case 8:r.t1=r.sent,(0,r.t0)(r.t1),r.next=13;break;case 12:t(i);case 13:case"end":return r.stop()}}),n)}))))}))}function _o(e,t,r){return Eo.apply(this,arguments)}function Eo(){return(Eo=r(o)(r(s).mark((function e(t,n,i){var a,o;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=ko(t,!0).put((a={},r(d)(a,bo,n),r(d)(a,"value",i),a)),e.abrupt("return",new wo(o).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function To(e,t){return So.apply(this,arguments)}function So(){return(So=r(o)(r(s).mark((function e(t,n){var i,a;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ko(t,!1).get(n),e.next=3,new wo(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oo(e,t){var r=ko(e,!0).delete(t);return new wo(r).toPromise()}var Ao=function(){"use strict";function e(){r(f)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return r(l)(e,[{key:"_openDb",value:function(){var e=this;return r(o)(r(s).mark((function t(){return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,Io();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),t)})))()}},{key:"_withRetries",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i,a;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:i=0;case 1:return r.prev=2,r.next=5,t._openDb();case 5:return a=r.sent,r.next=8,e(a);case 8:return r.abrupt("return",r.sent);case 11:if(r.prev=11,r.t0=r.catch(2),!(i++>3)){r.next=15;break}throw r.t0;case 15:t.db&&(t.db.close(),t.db=void 0);case 16:r.next=1;break;case 18:case"end":return r.stop()}}),n,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return r(o)(r(s).mark((function t(){return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",ho()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),t)})))()}},{key:"initializeReceiver",value:function(){var e=this;return r(o)(r(s).mark((function t(){return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.receiver=co._getInstance(ho()?self:null),e.receiver._subscribe("keyChanged",function(){var t=r(o)(r(s).mark((function t(n,i){var a;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return a=t.sent,t.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})))()}},{key:"initializeSender",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n,i,a;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,vo();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new lo(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(a=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(n=a[0])||void 0===n?void 0:n.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),t)})))()}},{key:"notifyServiceWorker",value:function(e){var t=this;return r(o)(r(s).mark((function n(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.sender&&t.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===t.activeServiceWorker)){r.next=2;break}return r.abrupt("return");case 2:return r.prev=2,r.next=5,t.sender._send("keyChanged",{key:e},t.serviceWorkerReceiverAvailable?800:50);case 5:r.next=9;break;case 7:r.prev=7,r.t0=r.catch(2);case 9:case"end":return r.stop()}var n}),n,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return r(o)(r(s).mark((function e(){var t;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Io();case 5:return t=e.sent,e.next=8,_o(t,ro,"1");case 8:return e.next=10,Oo(t,ro);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var t=this;return r(o)(r(s).mark((function n(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.pendingWrites++,r.prev=1,r.next=4,e();case 4:return r.prev=4,t.pendingWrites--,r.finish(4);case 7:case"end":return r.stop()}}),n,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,t){var n=this;return r(o)(r(s).mark((function i(){return r(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",n._withPendingWrite(r(o)(r(s).mark((function i(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n._withRetries((function(r){return _o(r,e,t)}));case 2:return n.localCache[e]=t,r.abrupt("return",n.notifyServiceWorker(e));case 4:case"end":return r.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t._withRetries((function(t){return To(t,e)}));case 2:return i=r.sent,t.localCache[e]=i,r.abrupt("return",i);case 5:case"end":return r.stop()}}),n)})))()}},{key:"_remove",value:function(e){var t=this;return r(o)(r(s).mark((function n(){return r(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t._withPendingWrite(r(o)(r(s).mark((function n(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t._withRetries((function(t){return Oo(t,e)}));case 2:return delete t.localCache[e],r.abrupt("return",t.notifyServiceWorker(e));case 4:case"end":return r.stop()}}),n)})))));case 1:case"end":return n.stop()}}),n)})))()}},{key:"_poll",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n,i,a,o,u,c,f,l,d,p,h,v,m,g,y,b,w;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=ko(e,!1).getAll();return new wo(t).toPromise()}));case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,u=!1,c=void 0,t.prev=10,f=n[Symbol.iterator]();!(o=(l=f.next()).done);o=!0)d=l.value,p=d.fbase_key,h=d.value,a.add(p),JSON.stringify(e.localCache[p])!==JSON.stringify(h)&&(e.notifyListeners(p,h),i.push(p));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),u=!0,c=t.t0;case 18:t.prev=18,t.prev=19,o||null==f.return||f.return();case 21:if(t.prev=21,!u){t.next=24;break}throw c;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(v=!0,m=!1,g=void 0,t.prev=27,y=Object.keys(e.localCache)[Symbol.iterator]();!(v=(b=y.next()).done);v=!0)w=b.value,e.localCache[w]&&!a.has(w)&&(e.notifyListeners(w,null),i.push(w));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),m=!0,g=t.t1;case 35:t.prev=35,t.prev=36,v||null==y.return||y.return();case 38:if(t.prev=38,!m){t.next=41;break}throw g;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),t,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(r(o)(r(s).mark((function t(){return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),t)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();Ao.type="LOCAL";var Ro=Ao;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(e,t){return ii(e,"POST","/v2/accounts/mfaSignIn:start",ni(e,t))}function Po(e,t){return ii(e,"POST","/v2/accounts/mfaSignIn:finalize",ni(e,t))}function No(e){return new Promise((function(t,r){var n,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=Bn("internal-error");t.customData=e,r(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(a)}))}function Lo(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Lo("rcb"),new $n(3e4,6e4);var Do="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(e,t,r){return Uo.apply(this,arguments)}function Uo(){return(Uo=r(o)(r(s).mark((function e(t,n,i){var a,o,u,c,f,l,d,p;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,Wn("string"==typeof o,t,"argument-error"),Wn(i.type===Do,t,"argument-error"),!("session"in(u="string"==typeof n?{phoneNumber:n}:n))){e.next=28;break}if(c=u.session,!("phoneNumber"in u)){e.next=19;break}return Wn("enroll"===c.type,t,"internal-error"),e.next=15,eo(t,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:o}});case 15:return f=e.sent,e.abrupt("return",f.phoneSessionInfo.sessionInfo);case 19:return Wn("signin"===c.type,t,"internal-error"),Wn(l=(null===(a=u.multiFactorHint)||void 0===a?void 0:a.uid)||u.multiFactorUid,t,"missing-multi-factor-info"),e.next=24,Co(t,{mfaPendingCredential:c.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return d=e.sent,e.abrupt("return",d.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,ba(t,{phoneNumber:u.phoneNumber,recaptchaToken:o});case 30:return p=e.sent.sessionInfo,e.abrupt("return",p);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jo=function(){"use strict";function e(t){r(f)(this,e),this.providerId=e.PROVIDER_ID,this.auth=ta(t)}return r(l)(e,[{key:"verifyPhoneNumber",value:function(e,t){return Mo(this.auth,e,re(t))}}],[{key:"credential",value:function(e,t){return Ea._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var r=t;return e.credentialFromTaggedObject(r)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.phoneNumber,n=t.temporaryProof;return r&&n?Ea._fromTokenResponse(r,n):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bo(e,t){return t?Kn(t):(Wn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jo.PROVIDER_ID="phone",jo.PHONE_SIGN_IN_METHOD="phone";var Fo=function(e){"use strict";r(m)(n,e);var t=r(_)(n);function n(e){var i;return r(f)(this,n),(i=t.call(this,"custom","custom")).params=e,i}return r(l)(n,[{key:"_getIdTokenResponse",value:function(e){return ma(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return ma(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return ma(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(oa);function zo(e){return Va(e.auth,new Fo(e),e.bypassAuthState)}function Wo(e){var t=e.auth,r=e.user;return Wn(r,t,"internal-error"),Wa(r,new Fo(e),e.bypassAuthState)}function Ho(e){return Vo.apply(this,arguments)}function Vo(){return(Vo=r(o)(r(s).mark((function e(t){var n,i;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.auth,Wn(i=t.user,n,"internal-error"),e.abrupt("return",Fa(i,new Fo(t),t.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qo=function(){"use strict";function e(t,n,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];r(f)(this,e),this.auth=t,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return r(l)(e,[{key:"execute",value:function(){var e,t=this;return new Promise((e=r(o)(r(s).mark((function e(n,i){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pendingPromise={resolve:n,reject:i},e.prev=1,e.next=4,t.resolver._initialize(t.auth);case 4:return t.eventManager=e.sent,e.next=7,t.onExecution();case 7:t.eventManager.registerConsumer(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,r){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i,a,o,u,c,f,l;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.urlResponse,a=e.sessionId,o=e.postBody,u=e.tenantId,c=e.error,f=e.type,!c){r.next=4;break}return t.reject(c),r.abrupt("return");case 4:return l={auth:t.auth,requestUri:i,sessionId:a,tenantId:u||void 0,postBody:o||void 0,user:t.user,bypassAuthState:t.bypassAuthState},r.prev=5,r.t0=t,r.next=9,t.getIdpTask(f)(l);case 9:r.t1=r.sent,r.t0.resolve.call(r.t0,r.t1),r.next=16;break;case 13:r.prev=13,r.t2=r.catch(5),t.reject(r.t2);case 16:case"end":return r.stop()}}),n,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zo;case"linkViaPopup":case"linkViaRedirect":return Ho;case"reauthViaPopup":case"reauthViaRedirect":return Wo;default:jn(this.auth,"internal-error")}}},{key:"resolve",value:function(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),Ko=new $n(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jo=function(e){"use strict";r(m)(n,e);var t=r(_)(n);function n(e,i,a,o,s){var u;return r(f)(this,n),(u=t.call(this,e,i,o,s)).provider=a,u.authWindow=null,u.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=r(v)(u),u}return r(l)(n,[{key:"executeNotNull",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return Wn(n=t.sent,e.auth,"internal-error"),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()}},{key:"onExecution",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Vn(1===e.filter.length,"Popup operations only handle one event"),n=fo(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],n);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=n,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(Bn(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),t)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(Bn(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var r,n;if(null===(n=null===(r=e.authWindow)||void 0===r?void 0:r.window)||void 0===n?void 0:n.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(Bn(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Ko.get())};t()}}]),n}(qo);Jo.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Go=new Map,Yo=function(e){"use strict";r(m)(n,e);var t=r(_)(n);function n(e,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r(f)(this,n),(a=t.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return r(l)(n,[{key:"execute",value:function(){var e=this,t=this;return r(o)(r(s).mark((function i(){var a,o;return r(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=Go.get(t.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Xo(t.resolver,t.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,r(On)(r(Cn)(n.prototype),"execute",e).call(t);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:Go.set(t.auth._key(),a);case 21:return t.bypassAuthState||Go.set(t.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var t=this,i=this,a=function(){return r(On)(r(Cn)(n.prototype),"onAuthEvent",t)};return r(o)(r(s).mark((function t(){var n;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",a().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(n=t.sent)){t.next=16;break}return i.user=n,t.abrupt("return",a().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),t)})))()}},{key:"onExecution",value:function(){return r(o)(r(s).mark((function e(){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),n}(qo);function Xo(e,t){return $o.apply(this,arguments)}function $o(){return($o=r(o)(r(s).mark((function e(t,n){var i,a,o;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=es(n),a=Zo(t),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Qo(e,t){Go.set(e._key(),t)}function Zo(e){return Kn(e._redirectPersistence)}function es(e){return ji("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(e,t){return rs.apply(this,arguments)}function rs(){return rs=r(o)(r(s).mark((function e(t,n){var i,a,o,u,c,f=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],a=ta(t),o=Bo(a,n),u=new Yo(a,o,i),e.next=6,u.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,a._persistUserIfCurrent(c.user);case 11:return e.next=13,a._setRedirectUser(null,n);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)}))),rs.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ns=function(){"use strict";function e(t){r(f)(this,e),this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return r(l)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach((function(n){t.isEventForConsumer(e,n)&&(r=!0,t.sendToConsumer(e,n),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return as(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}},{key:"sendToConsumer",value:function(e,t){var r;if(e.error&&!as(e)){var n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(Bn(this.auth,n))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(is(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(is(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function is(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function as(e){var t=e.type,r=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==r?void 0:r.code)}function os(e){return ss.apply(this,arguments)}function ss(){return ss=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t){var n,i=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",ii(t,"GET","/v1/projects",n));case 2:case"end":return e.stop()}}),e)}))),ss.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var us=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cs=/^https?/;function fs(){return(fs=r(o)(r(s).mark((function e(t){var n,i,a,o,u,c,f;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,os(t);case 4:n=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,u=n[Symbol.iterator]();case 8:if(i=(c=u.next()).done){e.next=20;break}if(f=c.value,e.prev=10,!ls(f)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==u.return||u.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:jn(t,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function ls(e){var t=Gn(),r=new URL(t),n=r.protocol,i=r.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&a.hostname===i}if(!cs.test(n))return!1;if(us.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ds=new $n(3e4,6e4);function ps(){var e=po().___jsl,t=!0,n=!1,i=void 0;if(null==e?void 0:e.H)try{for(var a,o=Object.keys(e.H)[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=a.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=r(p)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){n=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw i}}}var hs=null;function vs(e){return hs=hs||function(e){return new Promise((function(t,r){var n,i,a;function o(){ps(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){ps(),r(Bn(e,"network-request-failed"))},timeout:ds.get()})}if(null===(i=null===(n=po().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=po().gapi)||void 0===a?void 0:a.load)){var s=Lo("iframefcb");return po()[s]=function(){gapi.load?o():r(Bn(e,"network-request-failed"))},No("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return r(e)}))}o()}})).catch((function(e){throw hs=null,e}))}(e),hs}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ms=new $n(5e3,15e3),gs={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ys=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bs(e){var t=e.config;Wn(t.authDomain,e,"auth-domain-config-required");var r=t.emulator?Qn(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),n={apiKey:t.apiKey,appName:e.name,v:Qe},i=ys.get(e.config.apiHost);i&&(n.eid=i);var a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),"".concat(r,"?").concat(Y(n).slice(1))}function ws(e){return ks.apply(this,arguments)}function ks(){return ks=r(o)(r(s).mark((function e(t){var n,i;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,vs(t);case 2:return n=e.sent,Wn(i=po().gapi,t,"internal-error"),e.abrupt("return",n.open({where:document.body,url:bs(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gs,dontclear:!0},(function(e){return new Promise((n=r(o)(r(s).mark((function n(i,a){var o,u,c;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=function(){po().clearTimeout(u),i(e)},r.next=3,e.restyle({setHideOnLeave:!1});case 3:o=Bn(t,"network-request-failed"),u=po().setTimeout((function(){a(o)}),ms.get()),e.ping(c).then(c,(function(){a(o)}));case 7:case"end":return r.stop()}}),n)}))),function(e,t){return n.apply(this,arguments)}));var n})));case 6:case"end":return e.stop()}}),e)}))),ks.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xs={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Is="_blank",_s="http://localhost",Es=function(){"use strict";function e(t){r(f)(this,e),this.window=t,this.associatedEvent=null}return r(l)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function Ts(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},xs),{width:i.toString(),height:a.toString(),top:o,left:s}),f=U().toLowerCase();n&&(u=Hi(f)?Is:n),zi(f)&&(t=t||_s,c.scrollbars="yes");var l=Object.entries(c).reduce((function(e,t){var n=r(h)(t,2),i=n[0],a=n[1];return"".concat(e).concat(i,"=").concat(a,",")}),"");if(Yi(f)&&"_self"!==u)return Ss(t||"",u),new Es(null);var d=window.open(t||"",u,l);Wn(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Es(d)}function Ss(e,t){var r=document.createElement("a");r.href=e,r.target=t;var n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Os="__/auth/handler",As="emulator/auth/handler";function Rs(e,t,n,i,a,o){Wn(e.config.authDomain,e,"auth-domain-config-required"),Wn(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Qe,eventId:a};if(t instanceof Oa){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",K(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));var u=!0,c=!1,f=void 0;try{for(var l,d=Object.entries(o||{})[Symbol.iterator]();!(u=(l=d.next()).done);u=!0){var p=r(h)(l.value,2),v=p[0],m=p[1];s[v]=m}}catch(e){c=!0,f=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw f}}}if(t instanceof Aa){var g=t.getScopes().filter((function(e){return""!==e}));g.length>0&&(s.scopes=g.join(","))}e.tenantId&&(s.tid=e.tenantId);var y,b,w=s,k=!0,x=!1,I=void 0;try{for(var _,E=Object.keys(w)[Symbol.iterator]();!(k=(_=E.next()).done);k=!0){var T=_.value;void 0===w[T]&&delete w[T]}}catch(e){x=!0,I=e}finally{try{k||null==E.return||E.return()}finally{if(x)throw I}}return"".concat((y=e,b=y.config,b.emulator?Qn(b,As):"https://".concat(b.authDomain,"/").concat(Os)),"?").concat(Y(w).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Cs="webStorageSupport",Ps=function(){"use strict";function e(){r(f)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=so,this._completeRedirectFn=ts,this._overrideRedirectResult=Qo}return r(l)(e,[{key:"_openPopup",value:function(e,t,n,i){var a=this;return r(o)(r(s).mark((function o(){var u,c;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return Vn(null===(u=a.eventManagers[e._key()])||void 0===u?void 0:u.manager,"_initialize() not called before _openPopup()"),c=Rs(e,t,n,Gn(),i),r.abrupt("return",Ts(e,c,fo()));case 4:case"end":return r.stop()}}),o)})))()}},{key:"_openRedirect",value:function(e,t,n,i){var a=this;return r(o)(r(s).mark((function o(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a._originValidation(e);case 2:return o=Rs(e,t,n,Gn(),i),po().location.href=o,r.abrupt("return",new Promise((function(){})));case 4:case"end":return r.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,r=e._key();if(this.eventManagers[r]){var n=this.eventManagers[r],i=n.manager,a=n.promise;return i?Promise.resolve(i):(Vn(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[r]={promise:o},o.catch((function(){delete t.eventManagers[r]})),o}},{key:"initAndGetManager",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i,a;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,ws(e);case 2:return i=r.sent,a=new ns(e),i.register("authEvent",(function(t){return Wn(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:a.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),t.eventManagers[e._key()]={manager:a},t.iframes[e._key()]=i,r.abrupt("return",a);case 8:case"end":return r.stop()}}),n)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Cs,{type:Cs},(function(r){var n,i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==i&&t(!!i),jn(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return fs.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return $i()||Wi()||Gi()}}]),e}(),Ns=Ps,Ls=function(){"use strict";function e(t){r(f)(this,e),this.factorId=t}return r(l)(e,[{key:"_process",value:function(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Hn("unexpected MultiFactorSessionType")}}}]),e}(),Ds=function(e){"use strict";r(m)(n,e);var t=r(_)(n);function n(e){var i;return r(f)(this,n),(i=t.call(this,"phone")).credential=e,i}return r(l)(n,[{key:"_finalizeEnroll",value:function(e,t,r){return function(e,t){return ii(e,"POST","/v2/accounts/mfaEnrollment:finalize",ni(e,t))}(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return ii(e,"POST","/v2/accounts/mfaSignIn:finalize",ni(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(Ls);(function(){"use strict";function e(){r(f)(this,e)}return r(l)(e,null,[{key:"assertion",value:function(e){return Ds._fromCredential(e)}}]),e}()).FACTOR_ID="phone",(function(){"use strict";function e(){r(f)(this,e)}return r(l)(e,null,[{key:"assertionForEnrollment",value:function(e,t){return Ms._fromSecret(e,t)}},{key:"assertionForSignIn",value:function(e,t){return Ms._fromEnrollmentId(e,t)}},{key:"generateSecret",value:function(e){return r(o)(r(s).mark((function t(){var n,i;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Wn(void 0!==(n=e).auth,"internal-error"),t.next=4,r=n.auth,a={idToken:n.credential,totpEnrollmentInfo:{}},ii(r,"POST","/v2/accounts/mfaEnrollment:start",ni(r,a));case 4:return i=t.sent,t.abrupt("return",Us._fromStartTotpMfaEnrollmentResponse(i,n.auth));case 6:case"end":return t.stop()}var r,a}),t)})))()}}]),e}()).FACTOR_ID="totp";var Ms=function(e){"use strict";r(m)(n,e);var t=r(_)(n);function n(e,i,a){var o;return r(f)(this,n),(o=t.call(this,"totp")).otp=e,o.enrollmentId=i,o.secret=a,o}return r(l)(n,[{key:"_finalizeEnroll",value:function(e,t,n){var i=this;return r(o)(r(s).mark((function a(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return Wn(void 0!==i.secret,e,"argument-error"),r.abrupt("return",to(e,{idToken:t,displayName:n,totpVerificationInfo:i.secret._makeTotpVerificationInfo(i.otp)}));case 2:case"end":return r.stop()}}),a)})))()}},{key:"_finalizeSignIn",value:function(e,t){var n=this;return r(o)(r(s).mark((function i(){var a;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return Wn(void 0!==n.enrollmentId&&void 0!==n.otp,e,"argument-error"),a={verificationCode:n.otp},r.abrupt("return",Po(e,{mfaPendingCredential:t,mfaEnrollmentId:n.enrollmentId,totpVerificationInfo:a}));case 3:case"end":return r.stop()}}),i)})))()}}],[{key:"_fromSecret",value:function(e,t){return new n(t,void 0,e)}},{key:"_fromEnrollmentId",value:function(e,t){return new n(t,e)}}]),n}(Ls),Us=function(){"use strict";function e(t,n,i,a,o,s,u){r(f)(this,e),this.sessionInfo=s,this.auth=u,this.secretKey=t,this.hashingAlgorithm=n,this.codeLength=i,this.codeIntervalSeconds=a,this.enrollmentCompletionDeadline=o}return r(l)(e,[{key:"_makeTotpVerificationInfo",value:function(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}},{key:"generateQrCodeUrl",value:function(e,t){var r,n=!1;return(js(e)||js(t))&&(n=!0),n&&(js(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),js(t)&&(t=this.auth.name)),"otpauth://totp/".concat(t,":").concat(e,"?secret=").concat(this.secretKey,"&issuer=").concat(t,"&algorithm=").concat(this.hashingAlgorithm,"&digits=").concat(this.codeLength)}}],[{key:"_fromStartTotpMfaEnrollmentResponse",value:function(t,r){return new e(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,r)}}]),e}();function js(e){return void 0===e||0===(null==e?void 0:e.length)}var Bs="@firebase/auth",Fs="0.22.0",zs=function(){"use strict";function e(t){r(f)(this,e),this.auth=t,this.internalListeners=new Map}return r(l)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.assertAuthConfigured(),r.next=3,t.auth._initializationPromise;case 3:if(t.auth.currentUser){r.next=5;break}return r.abrupt("return",null);case 5:return r.next=7,t.auth.currentUser.getIdToken(e);case 7:return i=r.sent,r.abrupt("return",{accessToken:i});case 9:case"end":return r.stop()}}),n)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){Wn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ws,Hs=D("authIdTokenMaxAge")||300,Vs=null,qs=function(e){return t=r(o)(r(s).mark((function t(n){var i,a,o;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=n,!t.t0){t.next=5;break}return t.next=4,n.getIdTokenResult();case 4:t.t0=t.sent;case 5:if(i=t.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>Hs)){t.next=9;break}return t.abrupt("return");case 9:if(o=null==i?void 0:i.token,Vs!==o){t.next=12;break}return t.abrupt("return");case 12:return Vs=o,t.next=15,fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return t.stop()}}),t)}))),function(e){return t.apply(this,arguments)};var t};function Ks(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et(),t=Ge(e,"auth");if(t.isInitialized())return t.getImmediate();var r=Jn(e,{popupRedirectResolver:Ns,persistence:[Ro,ao,so]}),n=D("authTokenSyncURL");if(n){var i=qs(n);Qa(r,i,(function(){return i(r.currentUser)})),$a(r,(function(e){return i(e)}))}var a=N("auth");return a&&na(r,"http://".concat(a)),r}Ws="Browser",Je(new ne("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=n.options,o=a.apiKey,s=a.authDomain;return function(e,t){Wn(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),Wn(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var n={apiKey:o,authDomain:s,clientPlatform:Ws,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qi(Ws)},i=new ea(e,t,n);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Kn);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(i,r),i}(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),Je(new ne("auth-internal",(function(e){var t=ta(e.getProvider("auth").getImmediate());return new zs(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),tt(Bs,Fs,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ws)),tt(Bs,Fs,"esm2017");o=a("bpxeT"),s=a("2TvXO");a("dIxxU");var Js=a("ke5Oc");Js.default.defaults.baseURL="https://books-314f3-default-rtdb.europe-west1.firebasedatabase.app";var Gs,Ys=(Gs=r(o)(r(s).mark((function e(t){var n,i,a,o,u;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("uid"),e.next=3,JSON.parse(n);case 3:return i=e.sent,a=localStorage.getItem("token"),e.next=7,JSON.parse(a);case 7:if(o=e.sent){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,Js.default.post("".concat(i,".json?auth=").concat(o),t);case 12:return u=e.sent,e.abrupt("return",u.data);case 14:case"end":return e.stop()}}),e)}))),function(e){return Gs.apply(this,arguments)}),Xs=function(){var e=r(o)(r(s).mark((function e(){var t,n,i,a,o;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("uid"),e.next=3,JSON.parse(t);case 3:return n=e.sent,i=localStorage.getItem("token"),e.next=7,JSON.parse(i);case 7:if(a=e.sent){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,Js.default.get("".concat(n,".json?auth=").concat(a));case 12:return o=e.sent,e.abrupt("return",o.data);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$s=function(){var e=r(o)(r(s).mark((function e(){var t,n,i,a,o;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("uid"),e.next=3,JSON.parse(t);case 3:return n=e.sent,i=localStorage.getItem("token"),e.next=7,JSON.parse(i);case 7:if(a=e.sent){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,Js.default.delete("".concat(n,".json?auth=").concat(a));case 12:if(o=e.sent){e.next=15;break}return e.abrupt("return","<div>Loading...</div>");case 15:return e.abrupt("return",o.data);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();u=a("4Nugj");a("lzhzI");var Qs=(0,u.default)();!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et(),t=Ge(e=re(e),Cr);t.isInitialized()?t.getImmediate():_n(e)}(Ze({apiKey:"AIzaSyCq9mOndO3g-rUoq_LhFsLf4QY5_4L9fkc",authDomain:"books-314f3.firebaseapp.com",databaseURL:"https://books-314f3-default-rtdb.europe-west1.firebasedatabase.app",projectId:"books-314f3",storageBucket:"books-314f3.appspot.com",messagingSenderId:"627795944798",appId:"1:627795944798:web:853f1b3c49bede1282dbcf",measurementId:"G-L8HC0K2SWK"}));function Zs(e,t,r){Ga(Ks(),e,t,r).then((function(e){var t=e.user.uid,n=e.user.accessToken,i=JSON.stringify(n),a=JSON.stringify(t);return localStorage.setItem("token",i),localStorage.setItem("uid",a),Qs.userName.textContent=r})).catch((function(e){e.code,e.message}))}function eu(e,t){Xa(Ks(),e,t).then((function(e){var t=e.user.uid,r=e.user.accessToken;localStorage.setItem("token",JSON.stringify(r)),localStorage.setItem("uid",JSON.stringify(t));var n=e.user.displayName;return Xs().then((function(e){if(null===e)return console.log("null"),void localStorage.setItem("list",null);var t=Object.keys(e),r=[],n=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value;r.push(e[u])}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}r.map((function(e){var t=JSON.stringify(e);localStorage.setItem("list",t)}))})),Qs.userName.textContent=n})).catch((function(e){e.code,e.message}))}function tu(){Za(Ks()).then((function(){return localStorage.setItem("uid",null),localStorage.setItem("token",null),localStorage.setItem("list",null),Qs.userName.textContent=""})).catch((function(e){console.log(e.message)}))}var ru=(0,u.default)();function nu(){return(nu=r(o)(r(s).mark((function e(t){var n,i,a,o,u,f,l,d;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.currentTarget,i=n.elements,a=i.user_name,o=i.user_email,u=i.user_password,f=a.value,l=o.value,d=u.value,t.currentTarget.reset(),e.next=8,Zs(l,d,f);case 8:(0,c.userLogIn)(),(0,c.handleClickOnSingUpCloseBtn)();case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function iu(){return(iu=r(o)(r(s).mark((function e(t){var n;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(n=JSON.parse(localStorage.getItem("list")))){e.next=6;break}return e.next=5,$s();case 5:Ys(n);case 6:(0,c.userLogOut)(),tu();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}localStorage.setItem("uid",null),localStorage.setItem("list",null),localStorage.setItem("token",null),ru.formSingUp.addEventListener("submit",(function(e){return nu.apply(this,arguments)})),ru.formLogIn.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,r=t.user_email,n=t.user_password,i=r.value,a=n.value;e.currentTarget.reset(),(0,c.userLogIn)(),eu(i,a),(0,c.handleClickOnSingInCloseBtn)()})),ru.logOut.addEventListener("click",(function(e){return iu.apply(this,arguments)}))}();
//# sourceMappingURL=shopping-list.c526b58b.js.map
