!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(e,a));return n&&r.default(i,n.prototype),i}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=a("fVNic"))&&n.__esModule?n:{default:n}}));var i=a("bpxeT"),o=a("2TvXO"),s=a("4Nugj"),u=a("lzhzI"),c=(i=a("bpxeT"),a("8MBJY")),l=a("a2hTj"),f=a("hKHmD"),p=a("8nrFW"),d=(o=a("2TvXO"),i=a("bpxeT"),c=a("8MBJY"),l=a("a2hTj"),a("1t1Wn")),h=(p=a("8nrFW"),o=a("2TvXO"),a("ds8z5")),v=(c=a("8MBJY"),l=a("a2hTj"),a("eYQtU")),m=(d=a("1t1Wn"),p=a("8nrFW"),{});Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e){return I(e)};var g=w(a("ge8co")),y=w(a("cZGw3")),k=w(a("fVNic")),b=w(a("gD1JV"));function w(e){return e&&e.__esModule?e:{default:e}}function I(e){var t="function"==typeof Map?new Map:void 0;return I=function(e){if(null===e||!y.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return g.default(e,arguments,k.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),b.default(n,e)},I(e)}var x,_,T,S=a("2MbLg"),E=x={};function O(){throw new Error("setTimeout has not been defined")}function C(){throw new Error("clearTimeout has not been defined")}function R(e){if(_===setTimeout)return setTimeout(e,0);if((_===O||!_)&&setTimeout)return _=setTimeout,setTimeout(e,0);try{return _(e,0)}catch(t){try{return _.call(null,e,0)}catch(t){return _.call(this,e,0)}}}!function(){try{_="function"==typeof setTimeout?setTimeout:O}catch(e){_=O}try{T="function"==typeof clearTimeout?clearTimeout:C}catch(e){T=C}}();var A,N=[],P=!1,D=-1;function L(){P&&A&&(P=!1,A.length?N=A.concat(N):D=-1,N.length&&M())}function M(){if(!P){var e=R(L);P=!0;for(var t=N.length;t;){for(A=N,N=[];++D<t;)A&&A[D].run();D=-1,t=N.length}A=null,P=!1,function(e){if(T===clearTimeout)return clearTimeout(e);if((T===C||!T)&&clearTimeout)return T=clearTimeout,clearTimeout(e);try{T(e)}catch(t){try{return T.call(null,e)}catch(t){return T.call(this,e)}}}(e)}}function U(e,t){this.fun=e,this.array=t}function j(){}E.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];N.push(new U(e,t)),1!==N.length||P||R(M)},U.prototype.run=function(){this.fun.apply(null,this.array)},E.title="browser",E.browser=!0,E.env={},E.argv=[],E.version="",E.versions={},E.on=j,E.addListener=j,E.once=j,E.off=j,E.removeListener=j,E.removeAllListeners=j,E.emit=j,E.prependListener=j,E.prependOnceListener=j,E.listeners=function(e){return[]},E.binding=function(e){throw new Error("process.binding is not supported")},E.cwd=function(){return"/"},E.chdir=function(e){throw new Error("process.chdir is not supported")},E.umask=function(){return 0};
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
var F=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=63&a|128):55296==(64512&a)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=63&a|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=63&a|128)}return t},V={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],a=0;a<e.length;a+=3){var i=e[a],o=a+1<e.length,s=o?e[a+1]:0,u=a+2<e.length,c=u?e[a+2]:0,l=i>>2,f=(3&i)<<4|s>>4,p=(15&s)<<2|c>>6,d=63&c;u||(d=64,o||(p=64)),r.push(n[l],n[f],n[p],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(F(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){var i=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){var o=((7&a)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],a=0;a<e.length;){var i=n[e.charAt(a++)],o=a<e.length?n[e.charAt(a)]:0,s=++a<e.length?n[e.charAt(a)]:64,u=++a<e.length?n[e.charAt(a)]:64;if(++a,null==i||null==o||null==s||null==u)throw new z;var c=i<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var f=s<<6&192|u;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},z=function(t){"use strict";e(v)(r,t);var n=e(S)(r);function r(){var t;return e(c)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",t}return r}(e(m)(Error)),B=function(e){return function(e){var t=F(e);return V.encodeByteArray(t,!0)}(e).replace(/\./g,"")},H=function(e){try{return V.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
var W=function(){
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
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},q=function(){try{return W()||function(){if(void 0!==x&&void 0!==x.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&H(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},K=function(e){var t,n;return null===(n=null===(t=q())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},J=function(){var e;return null===(e=q())||void 0===e?void 0:e.config},G=function(e){var t;return null===(t=q())||void 0===t?void 0:t["_".concat(e)]},$=function(){"use strict";function t(){var n=this;e(c)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(l)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
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
function X(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Y(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Q(){try{return"object"==typeof indexedDB}catch(e){return!1}}function Z(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=function(){a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=function(){n=!1},a.onerror=function(){var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function ee(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
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
 */var te=function(t){"use strict";e(v)(r,t);var n=e(S)(r);function r(t,a,i){var o;return e(c)(this,r),(o=n.call(this,a)).code=t,o.customData=i,o.name="FirebaseError",Object.setPrototypeOf(e(h)(o),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(h)(o),ne.prototype.create),o}return r}(e(m)(Error)),ne=function(){"use strict";function t(n,r,a){e(c)(this,t),this.service=n,this.serviceName=r,this.errors=a}return e(l)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=n[0]||{},i="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?re(o,a):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(i,")."),c=new te(i,u,a);return c}}]),t}();function re(e,t){return e.replace(ae,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var ae=/\{\$([^}]+)}/g;
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
 */function ie(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function oe(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),a=!0,i=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(a=(s=u.next()).done);a=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],f=t[c];if(se(l)&&se(f)){if(!oe(l,f))return!1}else if(l!==f)return!1}}catch(e){i=!0,o=e}finally{try{a||null==u.return||u.return()}finally{if(i)throw o}}var p=!0,d=!1,h=void 0;try{for(var v,m=r[Symbol.iterator]();!(p=(v=m.next()).done);p=!0){var g=v.value;if(!n.includes(g))return!1}}catch(e){d=!0,h=e}finally{try{p||null==m.return||m.return()}finally{if(d)throw h}}return!0}function se(e){return null!==e&&"object"==typeof e}
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
function ue(t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=function(t,r){var a=e(d)(r.value,2),i=a[0],o=a[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(i)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(i)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n.length?"&"+n.join("&"):""}function ce(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(d)(t.split("="),2),a=r[0],i=r[1];n[decodeURIComponent(a)]=decodeURIComponent(i)}})),n}function le(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */var fe=function(){"use strict";function t(n,r){var a=this;e(c)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(a)})).catch((function(e){a.error(e)}))}return e(l)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,a=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,a=void 0;try{for(var i,o=t[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=pe),void 0===r.error&&(r.error=pe),void 0===r.complete&&(r.complete=pe);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{a.finalError?r.error(a.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function pe(){}
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
var de=144e5;function he(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=t*Math.pow(n,e),a=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(de,r+a)}
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
function ve(e){return e&&e._delegate?e._delegate:e}var me=function(){"use strict";function t(n,r,a){e(c)(this,t),this.name=n,this.instanceFactory=r,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(l)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),ge="[DEFAULT]",ye=function(){"use strict";function t(n,r){e(c)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(l)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new $;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:ge})}catch(e){}var n=!0,r=!1,a=void 0;try{for(var i,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=e(d)(i.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(i)(e(o).mark((function n(){var r;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(p)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(p)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error("".concat(this.name,"(").concat(a,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var i=this.getOrInitializeService({instanceIdentifier:a,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=e(d)(c.value,2),p=f[0],h=f[1],v=this.normalizeInstanceIdentifier(p);a===v&&h.resolve(i)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return i}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),a=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;a.add(e),this.onInitCallbacks.set(r,a);var i=this.instances.get(r);return i&&e(i,r),function(){a.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,a=!1,i=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){a=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,a=void 0===r?{}:r,i=this.instances.get(n);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===ge?void 0:t),options:a}),this.instances.set(n,i),this.instancesOptions.set(n,a),this.invokeOnInitCallbacks(i,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,i)}catch(e){}return i||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge;return this.component?this.component.multipleInstances?e:ge:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
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
 */var ke,be,we=function(){"use strict";function t(n){e(c)(this,t),this.name=n,this.providers=new Map}return e(l)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new ye(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),Ie=(c=a("8MBJY"),l=a("a2hTj"),f=a("hKHmD"),p=a("8nrFW"),[]);(be=ke||(ke={}))[be.DEBUG=0]="DEBUG",be[be.VERBOSE=1]="VERBOSE",be[be.INFO=2]="INFO",be[be.WARN=3]="WARN",be[be.ERROR=4]="ERROR",be[be.SILENT=5]="SILENT";var xe,_e={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},Te=ke.INFO,Se=(xe={},e(f)(xe,ke.DEBUG,"log"),e(f)(xe,ke.VERBOSE,"log"),e(f)(xe,ke.INFO,"info"),e(f)(xe,ke.WARN,"warn"),e(f)(xe,ke.ERROR,"error"),xe),Ee=function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i];var o;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=Se[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(p)(a)))}},Oe=function(){"use strict";function t(n){e(c)(this,t),this.name=n,this._logLevel=Te,this._logHandler=Ee,this._userLogHandler=null,Ie.push(this)}return e(l)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in ke))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?_e[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ke.DEBUG].concat(e(p)(n))),this._logHandler.apply(this,[this,ke.DEBUG].concat(e(p)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ke.VERBOSE].concat(e(p)(n))),this._logHandler.apply(this,[this,ke.VERBOSE].concat(e(p)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ke.INFO].concat(e(p)(n))),this._logHandler.apply(this,[this,ke.INFO].concat(e(p)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ke.WARN].concat(e(p)(n))),this._logHandler.apply(this,[this,ke.WARN].concat(e(p)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ke.ERROR].concat(e(p)(n))),this._logHandler.apply(this,[this,ke.ERROR].concat(e(p)(n)))}}]),t}();i=a("bpxeT");var Ce={};Object.defineProperty(Ce,"__esModule",{value:!0}),Ce.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ae.default(e,t,n[t])}))}return e};var Re,Ae=(Re=a("hKHmD"))&&Re.__esModule?Re:{default:Re};var Ne,Pe;p=a("8nrFW"),o=a("2TvXO"),p=a("8nrFW");var De=new WeakMap,Le=new WeakMap,Me=new WeakMap,Ue=new WeakMap,je=new WeakMap;var Fe={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Le.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Me.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Be(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Ve(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Pe||(Pe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(He(this),n),Be(De.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Be(t.apply(He(this),n))}:function(n){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var o,s=(o=t).call.apply(o,[He(this),n].concat(e(p)(a)));return Me.set(s,n.sort?n.sort():[n]),Be(s)}}function ze(e){return"function"==typeof e?Ve(e):(e instanceof IDBTransaction&&function(e){if(!Le.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=function(){t(),r()},i=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));Le.set(e,t)}}(e),t=e,(Ne||(Ne=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Fe):e);var t}function Be(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",a),t.removeEventListener("error",i)},a=function(){e(Be(t.result)),r()},i=function(){n(t.error),r()};t.addEventListener("success",a),t.addEventListener("error",i)}))).then((function(e){e instanceof IDBCursor&&De.set(e,t)})).catch((function(){})),je.set(n,t),n;var t,n;if(Ue.has(e))return Ue.get(e);var r=ze(e);return r!==e&&(Ue.set(e,r),je.set(r,e)),r}var He=function(e){return je.get(e)};function We(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,a=n.upgrade,i=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=Be(s);return a&&s.addEventListener("upgradeneeded",(function(e){a(Be(s.result),e.oldVersion,e.newVersion,Be(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),i&&e.addEventListener("versionchange",(function(){return i()}))})).catch((function(){})),u}var qe=["get","getKey","getAll","getAllKeys","count"],Ke=["put","add","delete","clear"],Je=new Map;function Ge(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(Je.get(n))return Je.get(n);var r=n.replace(/FromIndex$/,""),a=n!==r,s=Ke.includes(r);if(r in(a?IDBIndex:IDBObjectStore).prototype&&(s||qe.includes(r))){var u,c=(u=e(i)(e(o).mark((function t(n){var i,u,c,l,f,d,h=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i=h.length,u=new Array(i>1?i-1:0),c=1;c<i;c++)u[c-1]=h[c];return f=this.transaction(n,s?"readwrite":"readonly"),d=f.store,a&&(d=d.index(u.shift())),t.next=7,Promise.all([(l=d)[r].apply(l,e(p)(u)),s&&f.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return u.apply(this,arguments)});return Je.set(n,c),c}}}Fe=function(t){return e(Ce)({},t,{get:function(e,n,r){return Ge(e,n)||t.get(e,n,r)},has:function(e,n){return!!Ge(e,n)||t.has(e,n)}})}(Fe);
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
var $e=function(){"use strict";function t(n){e(c)(this,t),this.container=n}return e(l)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var Xe,Ye,Qe="@firebase/app",Ze="0.9.7",et=new Oe("@firebase/app"),tt="[DEFAULT]",nt=(Xe={},e(f)(Xe,Qe,"fire-core"),e(f)(Xe,"@firebase/app-compat","fire-core-compat"),e(f)(Xe,"@firebase/analytics","fire-analytics"),e(f)(Xe,"@firebase/analytics-compat","fire-analytics-compat"),e(f)(Xe,"@firebase/app-check","fire-app-check"),e(f)(Xe,"@firebase/app-check-compat","fire-app-check-compat"),e(f)(Xe,"@firebase/auth","fire-auth"),e(f)(Xe,"@firebase/auth-compat","fire-auth-compat"),e(f)(Xe,"@firebase/database","fire-rtdb"),e(f)(Xe,"@firebase/database-compat","fire-rtdb-compat"),e(f)(Xe,"@firebase/functions","fire-fn"),e(f)(Xe,"@firebase/functions-compat","fire-fn-compat"),e(f)(Xe,"@firebase/installations","fire-iid"),e(f)(Xe,"@firebase/installations-compat","fire-iid-compat"),e(f)(Xe,"@firebase/messaging","fire-fcm"),e(f)(Xe,"@firebase/messaging-compat","fire-fcm-compat"),e(f)(Xe,"@firebase/performance","fire-perf"),e(f)(Xe,"@firebase/performance-compat","fire-perf-compat"),e(f)(Xe,"@firebase/remote-config","fire-rc"),e(f)(Xe,"@firebase/remote-config-compat","fire-rc-compat"),e(f)(Xe,"@firebase/storage","fire-gcs"),e(f)(Xe,"@firebase/storage-compat","fire-gcs-compat"),e(f)(Xe,"@firebase/firestore","fire-fst"),e(f)(Xe,"@firebase/firestore-compat","fire-fst-compat"),e(f)(Xe,"fire-js","fire-js"),e(f)(Xe,"firebase","fire-js-all"),Xe),rt=new Map,at=new Map;function it(e,t){try{e.container.addComponent(t)}catch(n){et.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function ot(e){var t=e.name;if(at.has(t))return et.debug("There were multiple attempts to register component ".concat(t,".")),!1;at.set(t,e);var n=!0,r=!1,a=void 0;try{for(var i,o=rt.values()[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){it(i.value,e)}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return!0}function st(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
var ut=(Ye={},e(f)(Ye,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(f)(Ye,"bad-app-name","Illegal App name: '{$appName}"),e(f)(Ye,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(f)(Ye,"app-deleted","Firebase App named '{$appName}' already deleted"),e(f)(Ye,"no-options","Need to provide options, when not being deployed to hosting via source."),e(f)(Ye,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(f)(Ye,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(f)(Ye,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(f)(Ye,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(f)(Ye,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(f)(Ye,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),Ye),ct=new ne("app","Firebase",ut),lt=function(){"use strict";function t(n,r,a){var i=this;e(c)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new me("app",(function(){return i}),"PUBLIC"))}return e(l)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw ct.create("app-deleted",{appName:this._name})}}]),t}(),ft="9.19.1";function pt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var a=Object.assign({name:tt,automaticDataCollectionEnabled:!1},t),i=a.name;if("string"!=typeof i||!i)throw ct.create("bad-app-name",{appName:String(i)});if(n||(n=J()),!n)throw ct.create("no-options");var o=rt.get(i);if(o){if(oe(n,o.options)&&oe(a,o.config))return o;throw ct.create("duplicate-app",{appName:i})}var s=new we(i),u=!0,c=!1,l=void 0;try{for(var f,p=at.values()[Symbol.iterator]();!(u=(f=p.next()).done);u=!0){var d=f.value;s.addComponent(d)}}catch(e){c=!0,l=e}finally{try{u||null==p.return||p.return()}finally{if(c)throw l}}var h=new lt(n,a,s);return rt.set(i,h),h}function dt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=rt.get(e);if(!t&&e===tt)return pt();if(!t)throw ct.create("no-app",{appName:e});return t}function ht(e,t,n){var r,a=null!==(r=nt[e])&&void 0!==r?r:e;n&&(a+="-".concat(n));var i=a.match(/\s|\//),o=t.match(/\s|\//);if(i||o){var s=['Unable to register library "'.concat(a,'" with version "').concat(t,'":')];return i&&s.push('library name "'.concat(a,'" contains illegal characters (whitespace or "/")')),i&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void et.warn(s.join(" "))}ot(new me("".concat(a,"-version"),(function(){return{library:a,version:t}}),"VERSION"))}
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
var vt="firebase-heartbeat-store",mt=null;function gt(){return mt||(mt=We("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(vt)}}).catch((function(e){throw ct.create("idb-open",{originalErrorMessage:e.message})}))),mt}function yt(e){return kt.apply(this,arguments)}function kt(){return(kt=e(i)(e(o).mark((function t(n){var r,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,gt();case 3:return r=e.sent,e.abrupt("return",r.transaction(vt).objectStore(vt).get(It(n)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof te?et.warn(e.t0.message):(a=ct.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),et.warn(a.message));case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function bt(e,t){return wt.apply(this,arguments)}function wt(){return(wt=e(i)(e(o).mark((function t(n,r){var a,i,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,gt();case 3:return a=e.sent,i=a.transaction(vt,"readwrite"),s=i.objectStore(vt),e.next=8,s.put(r,It(n));case 8:return e.abrupt("return",i.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof te?et.warn(e.t0.message):(u=ct.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),et.warn(u.message));case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function It(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var xt=function(){"use strict";function t(n){var r=this;e(c)(this,t),this.container=n,this._heartbeatsCache=null;var a=this.container.getProvider("app").getImmediate();this._storage=new Et(a),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(l)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(i)(e(o).mark((function n(){var r,a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),a=r.getPlatformInfoString(),i=_t(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==i&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===i}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:i,agent:a});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(i)(e(o).mark((function n(){var r,a,i,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=_t(),a=Tt(t._heartbeatsCache.heartbeats),i=a.heartbeatsToSend,s=a.unsentEntries,u=B(JSON.stringify({version:2,heartbeats:i})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(s.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=s,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",u);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function _t(){return(new Date).toISOString().substring(0,10)}function Tt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),a=!0,i=!1,o=void 0;try{for(var s,u=function(e,a){var i=a.value,o=n.find((function(e){return e.agent===i.agent}));if(o){if(o.dates.push(i.date),Ot(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:i.agent,dates:[i.date]}),Ot(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var l=u(c,s);if("break"===l)break}}catch(e){i=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(i)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var St,Et=function(){"use strict";function t(n){e(c)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(l)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Q()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",Z().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(i)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,yt(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(i)(e(o).mark((function r(){var a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return i=e.sent,e.abrupt("return",bt(n.app,{lastSentHeartbeatDate:null!==(a=t.lastSentHeartbeatDate)&&void 0!==a?a:i.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(i)(e(o).mark((function r(){var a,i;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return i=r.sent,r.abrupt("return",bt(n.app,{lastSentHeartbeatDate:null!==(a=t.lastSentHeartbeatDate)&&void 0!==a?a:i.lastSentHeartbeatDate,heartbeats:e(p)(i.heartbeats).concat(e(p)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function Ot(e){return B(JSON.stringify({version:2,heartbeats:e})).length}
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
 */St="",ot(new me("platform-logger",(function(e){return new $e(e)}),"PRIVATE")),ot(new me("heartbeat",(function(e){return new xt(e)}),"PRIVATE")),ht(Qe,Ze,St),ht(Qe,Ze,"esm2017"),ht("fire-js","");
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
ht("firebase","9.19.1","app");i=a("bpxeT"),c=a("8MBJY"),l=a("a2hTj"),f=a("hKHmD"),d=a("1t1Wn"),o=a("2TvXO"),i=a("bpxeT"),f=a("hKHmD"),p=a("8nrFW"),o=a("2TvXO");var Ct,Rt="@firebase/installations",At="0.6.4",Nt=1e4,Pt="w:".concat(At),Dt="FIS_v2",Lt=36e5,Mt=(Ct={},e(f)(Ct,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),e(f)(Ct,"not-registered","Firebase Installation is not registered."),e(f)(Ct,"installation-not-found","Firebase Installation not found."),e(f)(Ct,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),e(f)(Ct,"app-offline","Could not process request. Application offline."),e(f)(Ct,"delete-pending-registration","Can't delete installation while there is a pending registration request."),Ct),Ut=new ne("installations","Installations",Mt);function jt(e){return e instanceof te&&e.code.includes("request-failed")}
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
 */function Ft(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function Vt(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function zt(e,t){return Bt.apply(this,arguments)}function Bt(){return(Bt=e(i)(e(o).mark((function t(n,r){var a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:return a=e.sent,i=a.error,e.abrupt("return",Ut.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status}));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ht(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Wt(e,t){var n=t.refreshToken,r=Ht(e);return r.append("Authorization",function(e){return"".concat(Dt," ").concat(e)}(n)),r}function qt(e){return Kt.apply(this,arguments)}function Kt(){return(Kt=e(i)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(!((r=e.sent).status>=500&&r.status<600)){e.next=5;break}return e.abrupt("return",n());case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Jt(e,t){return Gt.apply(this,arguments)}function Gt(){return(Gt=
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
e(i)(e(o).mark((function t(n,r){var a,i,s,u,c,l,f,p,d,h,v,m;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.appConfig,i=n.heartbeatServiceProvider,s=r.fid,u=Ft(a),c=Ht(a),!(l=i.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,l.getHeartbeatsHeader();case 7:(f=e.sent)&&c.append("x-firebase-client",f);case 9:return p={fid:s,authVersion:Dt,appId:a.appId,sdkVersion:Pt},d={method:"POST",headers:c,body:JSON.stringify(p)},e.next=13,qt((function(){return fetch(u,d)}));case 13:if(!(h=e.sent).ok){e.next=22;break}return e.next=17,h.json();case 17:return v=e.sent,m={fid:v.fid||s,registrationStatus:2,refreshToken:v.refreshToken,authToken:Vt(v.authToken)},e.abrupt("return",m);case 22:return e.next=24,zt("Create Installation",h);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function $t(e){return new Promise((function(t){setTimeout(t,e)}))}
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
var Xt=/^[cdef][\w-]{21}$/;function Yt(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var n=function(t){return(n=t,btoa((r=String).fromCharCode.apply(r,e(p)(n))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var n,r}
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
 */(t);return Xt.test(n)?n:""}catch(e){return""}}function Qt(e){return"".concat(e.appName,"!").concat(e.appId)}
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
 */var Zt=new Map;function en(e,t){var n=Qt(e);tn(n,t),function(e,t){var n=rn();n&&n.postMessage({key:e,fid:t});an()}(n,t)}function tn(e,t){var n=Zt.get(e);if(n){var r=!0,a=!1,i=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){a=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}}}var nn=null;function rn(){return!nn&&"BroadcastChannel"in self&&((nn=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){tn(e.data.key,e.data.fid)}),nn}function an(){0===Zt.size&&nn&&(nn.close(),nn=null)}
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
 */var on="firebase-installations-store",sn=null;function un(){return sn||(sn=We("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(on)}})),sn}function cn(e,t){return ln.apply(this,arguments)}function ln(){return(ln=e(i)(e(o).mark((function t(n,r){var a,i,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Qt(n),e.next=3,un();case 3:return i=e.sent,s=i.transaction(on,"readwrite"),u=s.objectStore(on),e.next=8,u.get(a);case 8:return c=e.sent,e.next=11,u.put(r,a);case 11:return e.next=13,s.done;case 13:return c&&c.fid===r.fid||en(n,r.fid),e.abrupt("return",r);case 15:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function fn(e){return pn.apply(this,arguments)}function pn(){return(pn=e(i)(e(o).mark((function t(n){var r,a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Qt(n),e.next=3,un();case 3:return a=e.sent,i=a.transaction(on,"readwrite"),e.next=7,i.objectStore(on).delete(r);case 7:return e.next=9,i.done;case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function dn(e,t){return hn.apply(this,arguments)}function hn(){return(hn=e(i)(e(o).mark((function t(n,r){var a,i,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Qt(n),e.next=3,un();case 3:return i=e.sent,s=i.transaction(on,"readwrite"),u=s.objectStore(on),e.next=8,u.get(a);case 8:if(c=e.sent,void 0!==(l=r(c))){e.next=15;break}return e.next=13,u.delete(a);case 13:e.next=17;break;case 15:return e.next=17,u.put(l,a);case 17:return e.next=19,s.done;case 19:return!l||c&&c.fid===l.fid||en(n,l.fid),e.abrupt("return",l);case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function vn(e){return mn.apply(this,arguments)}function mn(){return(mn=
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
e(i)(e(o).mark((function t(n){var r,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,dn(n.appConfig,(function(e){var t=gn(e),a=yn(n,t);return r=a.registrationPromise,a.installationEntry}));case 3:if(""!==(a=e.sent).fid){e.next=9;break}return e.next=7,r;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:a,registrationPromise:r});case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function gn(e){return xn(e||{fid:Yt(),registrationStatus:0})}function yn(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(Ut.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return kn.apply(this,arguments)}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:bn(e)}:{installationEntry:t}}function kn(){return(kn=e(i)(e(o).mark((function t(n,r){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Jt(n,r);case 3:return a=e.sent,e.abrupt("return",cn(n.appConfig,a));case 7:if(e.prev=7,e.t0=e.catch(0),!jt(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,fn(n.appConfig);case 12:e.next=16;break;case 14:return e.next=16,cn(n.appConfig,{fid:r.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function bn(e){return wn.apply(this,arguments)}function wn(){return(wn=e(i)(e(o).mark((function t(n){var r,a,i,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,In(n.appConfig);case 2:r=e.sent;case 3:if(1!==r.registrationStatus){e.next=11;break}return e.next=6,$t(100);case 6:return e.next=8,In(n.appConfig);case 8:r=e.sent,e.next=3;break;case 11:if(0!==r.registrationStatus){e.next=22;break}return e.next=14,vn(n);case 14:if(a=e.sent,i=a.installationEntry,!(s=a.registrationPromise)){e.next=21;break}return e.abrupt("return",s);case 21:return e.abrupt("return",i);case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function In(e){return dn(e,(function(e){if(!e)throw Ut.create("installation-not-found");return xn(e)}))}function xn(e){return 1===(t=e).registrationStatus&&t.registrationTime+Nt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function _n(e,t){return Tn.apply(this,arguments)}function Tn(){return(Tn=
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
e(i)(e(o).mark((function t(n,r){var a,i,s,u,c,l,f,p,d,h,v;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.appConfig,i=n.heartbeatServiceProvider,s=Sn(a,r),u=Wt(a,r),!(c=i.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,c.getHeartbeatsHeader();case 7:(l=e.sent)&&u.append("x-firebase-client",l);case 9:return f={installation:{sdkVersion:Pt,appId:a.appId}},p={method:"POST",headers:u,body:JSON.stringify(f)},e.next=13,qt((function(){return fetch(s,p)}));case 13:if(!(d=e.sent).ok){e.next=22;break}return e.next=17,d.json();case 17:return h=e.sent,v=Vt(h),e.abrupt("return",v);case 22:return e.next=24,zt("Generate Auth Token",d);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Sn(e,t){var n=t.fid;return"".concat(Ft(e),"/").concat(n,"/authTokens:generate")}function En(e){return On.apply(this,arguments)}function On(){return On=
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
e(i)(e(o).mark((function t(n){var r,a,i,s,u=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]&&u[1],e.next=4,dn(n.appConfig,(function(e){if(!Dn(e))throw Ut.create("not-registered");var t=e.authToken;if(!r&&Ln(t))return e;if(1===t.requestStatus)return a=Cn(n,r),e;if(!navigator.onLine)throw Ut.create("app-offline");var i=Mn(e);return a=Nn(n,i),i}));case 4:if(i=e.sent,!a){e.next=11;break}return e.next=8,a;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=i.authToken;case 12:return s=e.t0,e.abrupt("return",s);case 14:case"end":return e.stop()}}),t)}))),On.apply(this,arguments)}function Cn(e,t){return Rn.apply(this,arguments)}function Rn(){return(Rn=e(i)(e(o).mark((function t(n,r){var a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,An(n.appConfig);case 2:a=e.sent;case 3:if(1!==a.authToken.requestStatus){e.next=11;break}return e.next=6,$t(100);case 6:return e.next=8,An(n.appConfig);case 8:a=e.sent,e.next=3;break;case 11:if(0!==(i=a.authToken).requestStatus){e.next=16;break}return e.abrupt("return",En(n,r));case 16:return e.abrupt("return",i);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function An(e){return dn(e,(function(e){if(!Dn(e))throw Ut.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+Nt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function Nn(e,t){return Pn.apply(this,arguments)}function Pn(){return(Pn=e(i)(e(o).mark((function t(n,r){var a,i,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_n(n,r);case 3:return a=e.sent,i=Object.assign(Object.assign({},r),{authToken:a}),e.next=7,cn(n.appConfig,i);case 7:return e.abrupt("return",a);case 10:if(e.prev=10,e.t0=e.catch(0),!jt(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,fn(n.appConfig);case 15:e.next=20;break;case 17:return s=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}),e.next=20,cn(n.appConfig,s);case 20:throw e.t0;case 21:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function Dn(e){return void 0!==e&&2===e.registrationStatus}function Ln(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Lt}(e)}function Mn(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Un(){return(Un=
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
e(i)(e(o).mark((function t(n){var r,a,i,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,e.next=3,vn(r);case 3:return a=e.sent,i=a.installationEntry,(s=a.registrationPromise)?s.catch(console.error):En(r).catch(console.error),e.abrupt("return",i.fid);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function jn(){return jn=
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
e(i)(e(o).mark((function t(n){var r,a,i,s=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],a=n,e.next=4,Fn(a);case 4:return e.next=6,En(a,r);case 6:return i=e.sent,e.abrupt("return",i.token);case 8:case"end":return e.stop()}}),t)}))),jn.apply(this,arguments)}function Fn(e){return Vn.apply(this,arguments)}function Vn(){return(Vn=e(i)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,vn(n);case 2:if(!(r=e.sent.registrationPromise)){e.next=6;break}return e.next=6,r;case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function zn(e){return Ut.create("missing-app-config-values",{valueName:e})}
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
 */var Bn="installations",Hn=function(e){var t=st(e.getProvider("app").getImmediate(),Bn).getImmediate(),n={getId:function(){return function(e){return Un.apply(this,arguments)}(t)},getToken:function(e){return function(e){return jn.apply(this,arguments)}(t,e)}};return n};ot(new me(Bn,(function(e){var t=e.getProvider("app").getImmediate(),n=
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
function(e){if(!e||!e.options)throw zn("App Configuration");if(!e.name)throw zn("App Name");var t=!0,n=!1,r=void 0;try{for(var a,i=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var o=a.value;if(!e.options[o])throw zn(o)}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:st(t,"heartbeat"),_delete:function(){return Promise.resolve()}}}),"PUBLIC")),ot(new me("installations-internal",Hn,"PRIVATE")),ht(Rt,At),ht(Rt,At,"esm2017");
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
var Wn,qn="analytics",Kn=6e4,Jn="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Gn="https://www.googletagmanager.com/gtag/js",$n=new Oe("@firebase/analytics"),Xn=(Wn={},e(f)(Wn,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),e(f)(Wn,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),e(f)(Wn,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),e(f)(Wn,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),e(f)(Wn,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(f)(Wn,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(f)(Wn,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),e(f)(Wn,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),e(f)(Wn,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),e(f)(Wn,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),e(f)(Wn,"invalid-gtag-resource","Trusted Types detected an invalid gtag resource: {$gtagURL}."),Wn),Yn=new ne("analytics","Analytics",Xn);
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
function Qn(e){if(!e.startsWith(Gn)){var t=Yn.create("invalid-gtag-resource",{gtagURL:e});return $n.warn(t.message),""}return e}function Zn(e){return Promise.all(e.map((function(e){return e.catch((function(e){return e}))})))}function er(e,t){var n=function(e,t){var n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:Qn}),r=document.createElement("script"),a="".concat(Gn,"?l=").concat(e,"&id=").concat(t);r.src=n?null==n?void 0:n.createScriptURL(a):a,r.async=!0,document.head.appendChild(r)}function tr(e,t,n,r,a,i){return nr.apply(this,arguments)}function nr(){return(nr=e(i)(e(o).mark((function t(n,r,a,i,s,u){var c,l,f;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=i[s],e.prev=1,!c){e.next=7;break}return e.next=5,r[c];case 5:e.next=14;break;case 7:return e.next=9,Zn(a);case 9:if(l=e.sent,!(f=l.find((function(e){return e.measurementId===s})))){e.next=14;break}return e.next=14,r[f.appId];case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),$n.error(e.t0);case 19:n("config",s,u);case 20:case"end":return e.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}function rr(e,t,n,r,a){return ar.apply(this,arguments)}function ar(){return(ar=e(i)(e(o).mark((function t(n,r,a,i,s){var u,c,l,f,p,d,h,v,m,g,y;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,u=[],!s||!s.send_to){e.next=38;break}return c=s.send_to,Array.isArray(c)||(c=[c]),e.next=7,Zn(a);case 7:l=e.sent,f=!0,p=!1,d=void 0,e.prev=9,h=c[Symbol.iterator]();case 11:if(f=(v=h.next()).done){e.next=24;break}if(m=v.value,g=l.find((function(e){return e.measurementId===m})),!(y=g&&r[g.appId])){e.next=19;break}u.push(y),e.next=21;break;case 19:return u=[],e.abrupt("break",24);case 21:f=!0,e.next=11;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(9),p=!0,d=e.t0;case 30:e.prev=30,e.prev=31,f||null==h.return||h.return();case 33:if(e.prev=33,!p){e.next=36;break}throw d;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return 0===u.length&&(u=Object.values(r)),e.next=41,Promise.all(u);case 41:n("event",i,s||{}),e.next=47;break;case 44:e.prev=44,e.t1=e.catch(0),$n.error(e.t1);case 47:case"end":return e.stop()}}),t,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function ir(t,n,r,a,s){var u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];window[a].push(arguments)};return window[s]&&"function"==typeof window[s]&&(u=window[s]),window[s]=function(t,n,r,a){function s(){return(s=e(i)(e(o).mark((function i(s,u,c){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"event"!==s){e.next=6;break}return e.next=4,rr(t,n,r,u,c);case 4:e.next=12;break;case 6:if("config"!==s){e.next=11;break}return e.next=9,tr(t,n,r,a,u,c);case 9:e.next=12;break;case 11:"consent"===s?t("consent","update",c):t("set",u);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),$n.error(e.t0);case 17:case"end":return e.stop()}}),i,null,[[0,14]])})))).apply(this,arguments)}return function(e,t,n){return s.apply(this,arguments)}}(u,t,n,r),{gtagCore:u,wrappedGtag:window[s]}}function or(e){var t=window.document.getElementsByTagName("script"),n=!0,r=!1,a=void 0;try{for(var i,o=Object.values(t)[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value;if(s.src&&s.src.includes(Gn)&&s.src.includes(e))return s}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return null}
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
 */var sr=function(){"use strict";function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;e(c)(this,t),this.throttleMetadata=n,this.intervalMillis=r}return e(l)(t,[{key:"getThrottleMetadata",value:function(e){return this.throttleMetadata[e]}},{key:"setThrottleMetadata",value:function(e,t){this.throttleMetadata[e]=t}},{key:"deleteThrottleMetadata",value:function(e){delete this.throttleMetadata[e]}}]),t}(),ur=new sr;function cr(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function lr(e){return fr.apply(this,arguments)}function fr(){return(fr=e(i)(e(o).mark((function t(n){var r,a,i,s,u,c,l,f;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.appId,i=n.apiKey,s={method:"GET",headers:cr(i)},u=Jn.replace("{app-id}",a),e.next=6,fetch(u,s);case 6:if(200===(c=e.sent).status||304===c.status){e.next=19;break}return l="",e.prev=9,e.next=12,c.json();case 12:f=e.sent,(null===(r=f.error)||void 0===r?void 0:r.message)&&(l=f.error.message),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(9);case 18:throw Yn.create("config-fetch-failed",{httpStatus:c.status,responseMessage:l});case 19:return e.abrupt("return",c.json());case 20:case"end":return e.stop()}}),t,null,[[9,16]])})))).apply(this,arguments)}function pr(e){return dr.apply(this,arguments)}function dr(){return dr=e(i)(e(o).mark((function t(n){var r,a,s,u,c,l,f,p,d=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=d.length>1&&void 0!==d[1]?d[1]:ur,a=d.length>2?d[2]:void 0,s=n.options,u=s.appId,c=s.apiKey,l=s.measurementId,u){t.next=4;break}throw Yn.create("no-app-id");case 4:if(c){t.next=8;break}if(!l){t.next=7;break}return t.abrupt("return",{measurementId:l,appId:u});case 7:throw Yn.create("no-api-key");case 8:return f=r.getThrottleMetadata(u)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new br,setTimeout(e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.abort();case 1:case"end":return e.stop()}}),t)}))),void 0!==a?a:Kn),t.abrupt("return",hr({appId:u,apiKey:c,measurementId:l},f,p,r));case 12:case"end":return t.stop()}}),t)}))),dr.apply(this,arguments)}function hr(e,t,n){return vr.apply(this,arguments)}function vr(){return vr=e(i)(e(o).mark((function t(n,r,a){var i,s,u,c,l,f,p,d,h,v,m=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.throttleEndTimeMillis,s=r.backoffCount,u=m.length>3&&void 0!==m[3]?m[3]:ur,l=n.appId,f=n.measurementId,e.prev=3,e.next=6,mr(a,i);case 6:e.next=14;break;case 8:if(e.prev=8,e.t0=e.catch(3),!f){e.next=13;break}return $n.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(f)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null===e.t0||void 0===e.t0?void 0:e.t0.message,"]")),e.abrupt("return",{appId:l,measurementId:f});case 13:throw e.t0;case 14:return e.prev=14,e.next=17,lr(n);case 17:return p=e.sent,u.deleteThrottleMetadata(l),e.abrupt("return",p);case 22:if(e.prev=22,e.t1=e.catch(14),gr(d=e.t1)){e.next=33;break}if(u.deleteThrottleMetadata(l),!f){e.next=32;break}return $n.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(f)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null==d?void 0:d.message,"]")),e.abrupt("return",{appId:l,measurementId:f});case 32:throw e.t1;case 33:return h=503===Number(null===(c=null==d?void 0:d.customData)||void 0===c?void 0:c.httpStatus)?he(s,u.intervalMillis,30):he(s,u.intervalMillis),v={throttleEndTimeMillis:Date.now()+h,backoffCount:s+1},u.setThrottleMetadata(l,v),$n.debug("Calling attemptFetch again in ".concat(h," millis")),e.abrupt("return",hr(n,v,a,u));case 38:case"end":return e.stop()}}),t,null,[[3,8],[14,22]])}))),vr.apply(this,arguments)}function mr(e,t){return new Promise((function(n,r){var a=Math.max(t-Date.now(),0),i=setTimeout(n,a);e.addEventListener((function(){clearTimeout(i),r(Yn.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function gr(e){if(!(e instanceof te&&e.customData))return!1;var t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}var yr,kr,br=function(){"use strict";function t(){e(c)(this,t),this.listeners=[]}return e(l)(t,[{key:"addEventListener",value:function(e){this.listeners.push(e)}},{key:"abort",value:function(){this.listeners.forEach((function(e){return e()}))}}]),t}();
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
 */function wr(){return(wr=e(i)(e(o).mark((function t(n,r,a,i,s){var u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s||!s.global){e.next=5;break}return n("event",a,i),e.abrupt("return");case 5:return e.next=7,r;case 7:u=e.sent,c=Object.assign(Object.assign({},i),{send_to:u}),n("event",a,c);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ir(e){kr=e}function xr(e){yr=e}function _r(){return Tr.apply(this,arguments)}function Tr(){return(Tr=
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
e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Q()){e.next=5;break}return $n.warn(Yn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),e.abrupt("return",!1);case 5:return e.prev=5,e.next=8,Z();case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(5),$n.warn(Yn.create("indexeddb-unavailable",{errorInfo:null===e.t0||void 0===e.t0?void 0:e.t0.toString()}).message),e.abrupt("return",!1);case 14:return e.abrupt("return",!0);case 15:case"end":return e.stop()}}),t,null,[[5,10]])})))).apply(this,arguments)}function Sr(){return(Sr=e(i)(e(o).mark((function t(n,r,a,i,s,u,c){var l,f,p,h,v,m,g;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(f=pr(n)).then((function(e){a[e.measurementId]=e.appId,n.options.measurementId&&e.measurementId!==n.options.measurementId&&$n.warn("The measurement ID in the local Firebase config (".concat(n.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(e.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return $n.error(e)})),r.push(f),p=_r().then((function(e){return e?i.getId():void 0})),t.t0=e(d),t.next=8,Promise.all([f,p]);case 8:return t.t1=t.sent,h=(0,t.t0)(t.t1,2),v=h[0],m=h[1],or(u)||er(u,v.measurementId),kr&&(s("consent","default",kr),Ir(void 0)),s("js",new Date),(g=null!==(l=null==c?void 0:c.config)&&void 0!==l?l:{}).origin="firebase",g.update=!0,null!=m&&(g.firebase_id=m),s("config",v.measurementId,g),yr&&(s("set",yr),xr(void 0)),t.abrupt("return",v.measurementId);case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
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
 */var Er,Or,Cr=function(){"use strict";function t(n){e(c)(this,t),this.app=n}return e(l)(t,[{key:"_delete",value:function(){return delete Rr[this.app.options.appId],Promise.resolve()}}]),t}(),Rr={},Ar=[],Nr={},Pr="dataLayer",Dr="gtag",Lr=!1;function Mr(e,t,n){!function(){var e=[];if(Y()&&e.push("This is a browser extension environment."),ee()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"(".concat(t+1,") ").concat(e)})).join(" "),n=Yn.create("invalid-analytics-context",{errorInfo:t});$n.warn(n.message)}}();var r,a,i=e.options.appId;if(!i)throw Yn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Yn.create("no-api-key");$n.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=Rr[i])throw Yn.create("already-exists",{id:i});if(!Lr){r=Pr,a=[],Array.isArray(window[r])?a=window[r]:window[r]=a;var o=ir(Rr,Ar,Nr,Pr,Dr),s=o.wrappedGtag,u=o.gtagCore;Or=s,Er=u,Lr=!0}return Rr[i]=function(e,t,n,r,a,i,o){return Sr.apply(this,arguments)}(e,Ar,Nr,t,Er,Pr,n),new Cr(e)}function Ur(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=st(e,qn);if(n.isInitialized()){var r=n.getImmediate();if(oe(t,n.getOptions()))return r;throw Yn.create("already-initialized")}var a=n.initialize({options:t});return a}function jr(e,t,n,r){e=ve(e),function(e,t,n,r,a){return wr.apply(this,arguments)}(Or,Rr[e.app.options.appId],t,n,r).catch((function(e){return $n.error(e)}))}var Fr="@firebase/analytics",Vr="0.9.5";ot(new me(qn,(function(e,t){var n=t.options;return Mr(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),n)}),"PUBLIC")),ot(new me("analytics-internal",(function(e){try{var t=e.getProvider(qn).getImmediate();return{logEvent:function(e,n,r){return jr(t,e,n,r)}}}catch(e){throw Yn.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),ht(Fr,Vr),ht(Fr,Vr,"esm2017");h=a("ds8z5"),i=a("bpxeT"),c=a("8MBJY"),l=a("a2hTj"),f=a("hKHmD");var zr={};Object.defineProperty(zr,"__esModule",{value:!0}),zr.default=function(e,t,n){return Hr(e,t,n)};var Br=function(e){return e&&e.__esModule?e:{default:e}}(a("2mz0K"));function Hr(e,t,n){return(Hr="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Br.default(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(n||e):a.value}})(e,t,n)}var Wr=a("fVNic");v=a("eYQtU"),d=a("1t1Wn"),p=a("8nrFW"),S=a("2MbLg"),o=a("2TvXO");function qr(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}Object.create;Object.create;function Kr(){return e(f)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Jr=Kr,Gr=new ne("auth","Firebase",Kr()),$r=new Oe("@firebase/auth");function Xr(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];var i;$r.logLevel<=ke.ERROR&&(i=$r).error.apply(i,["Auth (".concat(ft,"): ").concat(t)].concat(e(p)(r)))}
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
 */function Yr(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];throw ea.apply(void 0,[t].concat(e(p)(r)))}function Qr(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return ea.apply(void 0,[t].concat(e(p)(r)))}function Zr(t,n,r){var a=Object.assign(Object.assign({},Jr()),e(f)({},n,r));return new ne("auth","Firebase",a).create(n,{appName:t.name})}function ea(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];var i;if("string"!=typeof t){var o,s=r[0],u=e(p)(r.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(p)(u)))}return(i=Gr).create.apply(i,[t].concat(e(p)(r)))}function ta(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i];if(!t)throw ea.apply(void 0,[n].concat(e(p)(a)))}function na(e){var t="INTERNAL ASSERTION FAILED: "+e;throw Xr(t),new Error(t)}function ra(e,t){e||na(t)}
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
 */var aa=new Map;function ia(e){ra(e instanceof Function,"Expected a class definition");var t=aa.get(e);return t?(ra(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,aa.set(e,t),t)}
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
 */function oa(e,t){var n=st(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(oe(n.getOptions(),null!=t?t:{}))return r;Yr(r,"already-initialized")}return n.initialize({options:t})}
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
function sa(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ua(){return"http:"===ca()||"https:"===ca()}function ca(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
var la=function(){"use strict";function t(n,r){e(c)(this,t),this.shortDelay=n,this.longDelay=r,ra(r>n,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X())||"object"==typeof navigator&&"ReactNative"===navigator.product}return e(l)(t,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ua()||Y()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),t}();
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
 */function fa(e,t){ra(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
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
 */var pa,da=function(){"use strict";function t(){e(c)(this,t)}return e(l)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void na("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void na("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void na("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),ha=(pa={},e(f)(pa,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(f)(pa,"MISSING_CUSTOM_TOKEN","internal-error"),e(f)(pa,"INVALID_IDENTIFIER","invalid-email"),e(f)(pa,"MISSING_CONTINUE_URI","internal-error"),e(f)(pa,"INVALID_PASSWORD","wrong-password"),e(f)(pa,"MISSING_PASSWORD","missing-password"),e(f)(pa,"EMAIL_EXISTS","email-already-in-use"),e(f)(pa,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(f)(pa,"INVALID_IDP_RESPONSE","invalid-credential"),e(f)(pa,"INVALID_PENDING_TOKEN","invalid-credential"),e(f)(pa,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(f)(pa,"MISSING_REQ_TYPE","internal-error"),e(f)(pa,"EMAIL_NOT_FOUND","user-not-found"),e(f)(pa,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(f)(pa,"EXPIRED_OOB_CODE","expired-action-code"),e(f)(pa,"INVALID_OOB_CODE","invalid-action-code"),e(f)(pa,"MISSING_OOB_CODE","internal-error"),e(f)(pa,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(f)(pa,"INVALID_ID_TOKEN","invalid-user-token"),e(f)(pa,"TOKEN_EXPIRED","user-token-expired"),e(f)(pa,"USER_NOT_FOUND","user-token-expired"),e(f)(pa,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(f)(pa,"INVALID_CODE","invalid-verification-code"),e(f)(pa,"INVALID_SESSION_INFO","invalid-verification-id"),e(f)(pa,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(f)(pa,"MISSING_SESSION_INFO","missing-verification-id"),e(f)(pa,"SESSION_EXPIRED","code-expired"),e(f)(pa,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(f)(pa,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(f)(pa,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(f)(pa,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(f)(pa,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(f)(pa,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(f)(pa,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(f)(pa,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(f)(pa,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(f)(pa,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(f)(pa,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),pa),va=new la(3e4,6e4);function ma(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function ga(e,t,n,r){return ya.apply(this,arguments)}function ya(){return ya=e(i)(e(o).mark((function t(n,r,a,s){var u,c=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=c.length>4&&void 0!==c[4]?c[4]:{},t.abrupt("return",ka(n,u,e(i)(e(o).mark((function t(){var i,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={},u={},s&&("GET"===r?u=s:i={body:JSON.stringify(s)}),c=ue(Object.assign({key:n.config.apiKey},u)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",da.fetch()(xa(n,n.config.apiHost,a,c),Object.assign({method:r,headers:l,referrerPolicy:"no-referrer"},i)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),ya.apply(this,arguments)}function ka(e,t,n){return ba.apply(this,arguments)}function ba(){return(ba=e(i)(e(o).mark((function t(n,r,a){var i,s,u,c,l,f,p,h,v;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,i=Object.assign(Object.assign({},ha),r),t.prev=2,s=new _a(n),t.next=6,Promise.race([a(),s.promise]);case 6:return u=t.sent,s.clearNetworkTimeout(),t.next=10,u.json();case 10:if(!("needConfirmation"in(c=t.sent))){t.next=13;break}throw Ta(n,"account-exists-with-different-credential",c);case 13:if(!u.ok||"errorMessage"in c){t.next=17;break}return t.abrupt("return",c);case 17:if(l=u.ok?c.errorMessage:c.error.message,f=e(d)(l.split(" : "),2),p=f[0],h=f[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==p){t.next=23;break}throw Ta(n,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==p){t.next=27;break}throw Ta(n,"email-already-in-use",c);case 27:if("USER_DISABLED"!==p){t.next=29;break}throw Ta(n,"user-disabled",c);case 29:if(v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-"),!h){t.next=34;break}throw Zr(n,v,h);case 34:Yr(n,v);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof te)){t.next=41;break}throw t.t0;case 41:Yr(n,"network-request-failed",{message:String(t.t0)});case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function wa(e,t,n,r){return Ia.apply(this,arguments)}function Ia(){return Ia=e(i)(e(o).mark((function t(n,r,a,i){var s,u,c=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,ga(n,r,a,i,s);case 3:return"mfaPendingCredential"in(u=e.sent)&&Yr(n,"multi-factor-auth-required",{_serverResponse:u}),e.abrupt("return",u);case 6:case"end":return e.stop()}}),t)}))),Ia.apply(this,arguments)}function xa(e,t,n,r){var a="".concat(t).concat(n,"?").concat(r);return e.config.emulator?fa(e.config,a):"".concat(e.config.apiScheme,"://").concat(a)}var _a=function(){"use strict";function t(n){var r=this;e(c)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(Qr(n.auth,"network-request-failed"))}),va.get())}))}return e(l)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Ta(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var a=Qr(e,t,r);return a.customData._tokenResponse=n,a}function Sa(e,t){return Ea.apply(this,arguments)}function Ea(){return(Ea=
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
e(i)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ga(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Oa(e,t){return Ca.apply(this,arguments)}function Ca(){return(Ca=e(i)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ga(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function Ra(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function Aa(){return Aa=e(i)(e(o).mark((function t(n){var r,a,i,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],a=ve(n),e.next=4,a.getIdToken(r);case 4:return i=e.sent,ta((s=Pa(i))&&s.exp&&s.auth_time&&s.iat,a.auth,"internal-error"),u="object"==typeof s.firebase?s.firebase:void 0,c=null==u?void 0:u.sign_in_provider,e.abrupt("return",{claims:s,token:i,authTime:Ra(Na(s.auth_time)),issuedAtTime:Ra(Na(s.iat)),expirationTime:Ra(Na(s.exp)),signInProvider:c||null,signInSecondFactor:(null==u?void 0:u.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),Aa.apply(this,arguments)}function Na(e){return 1e3*Number(e)}function Pa(t){var n=e(d)(t.split("."),3),r=n[0],a=n[1],i=n[2];if(void 0===r||void 0===a||void 0===i)return Xr("JWT malformed, contained fewer than 3 sections"),null;try{var o=H(a);return o?JSON.parse(o):(Xr("Failed to decode base64 JWT payload"),null)}catch(e){return Xr("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function Da(e,t){return La.apply(this,arguments)}function La(){return La=
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
e(i)(e(o).mark((function t(n,r){var a=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.length>2&&void 0!==a[2]&&a[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof te&&Ma(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),La.apply(this,arguments)}function Ma(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */var Ua=function(){"use strict";function t(n){e(c)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(l)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(i)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&t.schedule(!0),e.abrupt("return");case 9:t.schedule();case 10:case"end":return e.stop()}}),n,null,[[0,5]])})))()}}]),t}(),ja=function(){"use strict";function t(n,r){e(c)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(l)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=Ra(this.lastLoginAt),this.creationTime=Ra(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
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
 */function Fa(e){return Va.apply(this,arguments)}function Va(){return(Va=
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
e(i)(e(o).mark((function t(n){var r,a,i,s,u,c,l,f,p,d,h;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.auth,e.next=4,n.getIdToken();case 4:return i=e.sent,e.next=7,Da(n,Oa(a,{idToken:i}));case 7:ta(null==(s=e.sent)?void 0:s.users.length,a,"internal-error"),u=s.users[0],n._notifyReloadListener(u),c=(null===(r=u.providerUserInfo)||void 0===r?void 0:r.length)?Ha(u.providerUserInfo):[],l=Ba(n.providerData,c),f=n.isAnonymous,p=!(n.email&&u.passwordHash||(null==l?void 0:l.length)),d=!!f&&p,h={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:l,metadata:new ja(u.createdAt,u.lastLoginAt),isAnonymous:d},Object.assign(n,h);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function za(){return(za=e(i)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=ve(n),e.next=3,Fa(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ba(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(p)(r).concat(e(p)(n))}function Ha(e){return e.map((function(e){var t=e.providerId,n=qr(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function Wa(e,t){return qa.apply(this,arguments)}function qa(){return(qa=
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
e(i)(e(o).mark((function t(n,r){var a;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ka(n,{},e(i)(e(o).mark((function t(){var a,i,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ue({grant_type:"refresh_token",refresh_token:r}).slice(1),i=n.config,s=i.tokenApiHost,u=i.apiKey,c=xa(n,s,"/v1/token","key=".concat(u)),e.next=5,n._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",da.fetch()(c,{method:"POST",headers:l,body:a}));case 8:case"end":return e.stop()}}),t)}))));case 2:return a=t.sent,t.abrupt("return",{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
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
 */var Ka=function(){"use strict";function t(){e(c)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(l)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){ta(e.idToken,"internal-error"),ta(void 0!==e.idToken,"internal-error"),ta(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,ta(n=Pa(t),"internal-error"),ta(void 0!==n.exp,"internal-error"),ta(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(i)(e(o).mark((function a(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ta(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),a)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(i)(e(o).mark((function a(){var i,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Wa(t,n);case 2:i=e.sent,s=i.accessToken,u=i.refreshToken,c=i.expiresIn,r.updateTokensAndExpiration(s,u,Number(c));case 7:case"end":return e.stop()}}),a)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return na("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,a=n.accessToken,i=n.expirationTime,o=new t;return r&&(ta("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),a&&(ta("string"==typeof a,"internal-error",{appName:e}),o.accessToken=a),i&&(ta("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}}]),t}();
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
 */function Ja(e,t){ta("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Ga=function(){"use strict";function t(n){e(c)(this,t);var r=n.uid,a=n.auth,i=n.stsTokenManager,o=qr(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ua(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=a,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(p)(o.providerData):[],this.metadata=new ja(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(l)(t,[{key:"getIdToken",value:function(t){var n=this;return e(i)(e(o).mark((function r(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Da(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(ta(a=e.sent,n.auth,"internal-error"),n.accessToken===a){e.next=9;break}return n.accessToken=a,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Aa.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return za.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(ta(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){var n=new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}},{key:"_onReload",value:function(e){ta(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(i)(e(o).mark((function a(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),i=!0),!n){e.next=5;break}return e.next=5,Fa(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:i&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),a)})))()}},{key:"delete",value:function(){var t=this;return e(i)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,Da(t,Sa(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,a,i,o,s,u,c,l,f=null!==(r=n.displayName)&&void 0!==r?r:void 0,p=null!==(a=n.email)&&void 0!==a?a:void 0,d=null!==(i=n.phoneNumber)&&void 0!==i?i:void 0,h=null!==(o=n.photoURL)&&void 0!==o?o:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=n.createdAt)&&void 0!==c?c:void 0,y=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,k=n.uid,b=n.emailVerified,w=n.isAnonymous,I=n.providerData,x=n.stsTokenManager;ta(k&&x,e,"internal-error");var _=Ka.fromJSON(this.name,x);ta("string"==typeof k,e,"internal-error"),Ja(f,e.name),Ja(p,e.name),ta("boolean"==typeof b,e,"internal-error"),ta("boolean"==typeof w,e,"internal-error"),Ja(d,e.name),Ja(h,e.name),Ja(v,e.name),Ja(m,e.name),Ja(g,e.name),Ja(y,e.name);var T=new t({uid:k,auth:e,email:p,emailVerified:b,displayName:f,isAnonymous:w,photoURL:h,phoneNumber:d,tenantId:v,stsTokenManager:_,createdAt:g,lastLoginAt:y});return I&&Array.isArray(I)&&(T.providerData=I.map((function(e){return Object.assign({},e)}))),m&&(T._redirectEventId=m),T}},{key:"_fromIdTokenResponse",value:function(n,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(i)(e(o).mark((function i(){var s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=new Ka).updateFromServerResponse(r),u=new t({uid:r.localId,auth:n,stsTokenManager:s,isAnonymous:a}),e.next=5,Fa(u);case 5:return e.abrupt("return",u);case 6:case"end":return e.stop()}}),i)})))()}}]),t}(),$a=function(){"use strict";function t(){e(c)(this,t),this.type="NONE",this.storage={}}return e(l)(t,[{key:"_isAvailable",value:function(){return e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(i)(e(o).mark((function a(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),a)})))()}},{key:"_get",value:function(t){var n=this;return e(i)(e(o).mark((function r(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.storage[t],e.abrupt("return",void 0===a?null:a);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(i)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
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
 */$a.type="NONE";var Xa=$a;
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
 */function Ya(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Qa=function(){"use strict";function t(n,r,a){e(c)(this,t),this.persistence=n,this.auth=r,this.userKey=a;var i=this.auth,o=i.config,s=i.name;this.fullUserKey=Ya(this.userKey,o.apiKey,s),this.fullPersistenceKey=Ya("persistence",o.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(l)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(i)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?Ga._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(i)(e(o).mark((function r(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return a=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!a){e.next=10;break}return e.abrupt("return",n.setCurrentUser(a));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(i)(e(o).mark((function s(){var u,c,l,f,p,d,h,v,m,g,y,k,b;return e(o).wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(r.length){s.next=2;break}return s.abrupt("return",new t(ia(Xa),n,a));case 2:return s.next=4,Promise.all(r.map(function(){var t=e(i)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:u=s.sent.filter((function(e){return e})),c=u[0]||ia(Xa),l=Ya(a,n.config.apiKey,n.name),f=null,p=!0,d=!1,h=void 0,s.prev=9,v=r[Symbol.iterator]();case 11:if(p=(m=v.next()).done){s.next=29;break}return g=m.value,s.prev=13,s.next=16,g._get(l);case 16:if(!(y=s.sent)){s.next=22;break}return k=Ga._fromJSON(n,y),g!==c&&(f=k),c=g,s.abrupt("break",29);case 22:s.next=26;break;case 24:s.prev=24,s.t0=s.catch(13);case 26:p=!0,s.next=11;break;case 29:s.next=35;break;case 31:s.prev=31,s.t1=s.catch(9),d=!0,h=s.t1;case 35:s.prev=35,s.prev=36,p||null==v.return||v.return();case 38:if(s.prev=38,!d){s.next=41;break}throw h;case 41:return s.finish(38);case 42:return s.finish(35);case 43:if(b=u.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&b.length){s.next=46;break}return s.abrupt("return",new t(c,n,a));case 46:if(c=b[0],!f){s.next=50;break}return s.next=50,c._set(l,f.toJSON());case 50:return s.next=52,Promise.all(r.map(function(){var t=e(i)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===c){e.next=8;break}return e.prev=1,e.next=4,n._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return s.abrupt("return",new t(c,n,a));case 53:case"end":return s.stop()}}),s,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
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
 */function Za(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ri(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ei(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ii(t))return"Blackberry";if(oi(t))return"Webos";if(ti(t))return"Safari";if((t.includes("chrome/")||ni(t))&&!t.includes("edge/"))return"Chrome";if(ai(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function ei(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();return/firefox\//i.test(e)}function ti(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ni(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();return/crios\//i.test(e)}function ri(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();return/iemobile/i.test(e)}function ai(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();return/android/i.test(e)}function ii(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();return/blackberry/i.test(e)}function oi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();return/webos/i.test(e)}function si(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ui(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();return si(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function ci(){return((e=X()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function li(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();return si(e)||ai(e)||oi(e)||ii(e)||/windows phone/i.test(e)||ri(e)}
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
function fi(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Za(X());break;case"Worker":t="".concat(Za(X()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(ft,"/").concat(r)}
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
 */var pi=function(){"use strict";function t(n){e(c)(this,t),this.auth=n,this.queue=[]}return e(l)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var a=this.queue.length-1;return function(){n.queue[a]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(i)(e(o).mark((function r(){var a,i,s,u,c,l,f,p,d,h,v,m,g;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=2;break}return e.abrupt("return");case 2:a=[],e.prev=3,i=!0,s=!1,u=void 0,e.prev=5,c=n.queue[Symbol.iterator]();case 7:if(i=(l=c.next()).done){e.next=15;break}return f=l.value,e.next=11,f(t);case 11:f.onAbort&&a.push(f.onAbort);case 12:i=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),s=!0,u=e.t0;case 21:e.prev=21,e.prev=22,i||null==c.return||c.return();case 24:if(e.prev=24,!s){e.next=27;break}throw u;case 27:return e.finish(24);case 28:return e.finish(21);case 29:e.next=52;break;case 31:for(e.prev=31,e.t1=e.catch(3),a.reverse(),p=!0,d=!1,h=void 0,e.prev=35,v=a[Symbol.iterator]();!(p=(m=v.next()).done);p=!0){g=m.value;try{g()}catch(e){}}e.next=43;break;case 39:e.prev=39,e.t2=e.catch(35),d=!0,h=e.t2;case 43:e.prev=43,e.prev=44,p||null==v.return||v.return();case 46:if(e.prev=46,!d){e.next=49;break}throw h;case 49:return e.finish(46);case 50:return e.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===e.t1||void 0===e.t1?void 0:e.t1.message});case 52:case"end":return e.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),t}(),di=function(){"use strict";function t(n,r,a){e(c)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vi(this),this.idTokenSubscription=new vi(this),this.beforeStateQueue=new pi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gr,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=a.sdkClientVersion}return e(l)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=ia(n));var r=this;return this._initializationPromise=this.queue(e(i)(e(o).mark((function a(){var i,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Qa.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(i=r._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(s=r.currentUser)||void 0===s?void 0:s.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),a,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(i)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(i)(e(o).mark((function r(){var a,i,s,u,c,l,f;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(i=e.sent,s=i,u=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return c=null===(a=n.redirectUser)||void 0===a?void 0:a._redirectEventId,l=null==s?void 0:s._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:f=e.sent,c&&c!==l||!(null==f?void 0:f.user)||(s=f.user,u=!0);case 15:if(s){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(s._redirectEventId){e.next=33;break}if(!u){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(s);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),s=i,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!s){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(s));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return ta(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==s._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(s));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(s));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(i)(e(o).mark((function r(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:a=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(i)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Fa(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)){e.next=9;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 9:return e.abrupt("return",n.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(i)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(i)(e(o).mark((function r(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=t?ve(t):null)&&ta(a.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(a&&a._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(i)(e(o).mark((function a(){return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!r._deleted){a.next=2;break}return a.abrupt("return");case 2:if(t&&ta(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){a.next=6;break}return a.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return a.abrupt("return",r.queue(e(i)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return a.stop()}}),a)})))()}},{key:"signOut",value:function(){var t=this;return e(i)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(i)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(ia(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new ne("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(i)(e(o).mark((function a(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return i=e.sent,e.abrupt("return",null===t?i.removeCurrentUser():i.setCurrentUser(t));case 4:case"end":return e.stop()}}),a)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(i)(e(o).mark((function r(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return ta(a=t&&ia(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,Qa.create(n,[ia(a._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(i)(e(o).mark((function r(){var a,s;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(a=n._currentUser)||void 0===a?void 0:a._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(s=n.redirectUser)||void 0===s?void 0:s._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(i)(e(o).mark((function r(){return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(i)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var a=this;if(this._deleted)return function(){};var i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ta(o,this,"internal-error"),o.then((function(){return i(a.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(i)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return ta(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fi(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(i)(e(o).mark((function n(){var r,a,i;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e(f)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(a["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(i=n.sent)&&(a["X-Firebase-Client"]=i),n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})))()}}]),t}();
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
 */function hi(e){return ve(e)}var vi=function(){"use strict";function t(n){var r,a,i=this;e(c)(this,t),this.auth=n,this.observer=null,this.addObserver=(a=new fe((function(e){return i.observer=e}),r)).subscribe.bind(a)}return e(l)(t,[{key:"next",get:function(){return ta(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();function mi(t,n,r){var a=hi(t);ta(a._canInitEmulator,a,"emulator-config-failed"),ta(/^https?:\/\//.test(n),a,"invalid-emulator-scheme");var i=!!(null==r?void 0:r.disableWarnings),o=gi(n),s=function(t){var n=gi(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!r)return{host:"",port:null};var a=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(a);if(i){var o=i[1];return{host:o,port:yi(a.substr(o.length+1))}}var s=e(d)(a.split(":"),2);return{host:s[0],port:yi(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);a.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function gi(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function yi(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var ki=function(){"use strict";function t(n,r){e(c)(this,t),this.providerId=n,this.signInMethod=r}return e(l)(t,[{key:"toJSON",value:function(){return na("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return na("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return na("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return na("not implemented")}}]),t}();function bi(e,t){return wi.apply(this,arguments)}function wi(){return(wi=e(i)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ga(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ii(e,t){return xi.apply(this,arguments)}function xi(){return(xi=
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
e(i)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",wa(n,"POST","/v1/accounts:signInWithPassword",ma(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function _i(e,t){return Ti.apply(this,arguments)}function Ti(){return(Ti=
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
e(i)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",wa(n,"POST","/v1/accounts:signInWithEmailLink",ma(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Si(e,t){return Ei.apply(this,arguments)}function Ei(){return(Ei=e(i)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",wa(n,"POST","/v1/accounts:signInWithEmailLink",ma(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Oi=function(t){"use strict";e(v)(r,t);var n=e(S)(r);function r(t,a,i){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(c)(this,r),(o=n.call(this,"password",i))._email=t,o._password=a,o._tenantId=s,o}return e(l)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(i)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Ii(t,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",_i(t,{email:n._email,oobCode:n._password}));case 5:Yr(t,"internal-error");case 6:case"end":return e.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(i)(e(o).mark((function a(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",bi(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",Si(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:Yr(t,"internal-error");case 6:case"end":return e.stop()}}),a)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(ki);function Ci(e,t){return Ri.apply(this,arguments)}function Ri(){return(Ri=
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
e(i)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",wa(n,"POST","/v1/accounts:signInWithIdp",ma(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Ai=function(t){"use strict";e(v)(r,t);var n=e(S)(r);function r(){var t;return e(c)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(l)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Ci(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,Ci(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Ci(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ue(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Yr("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,a=t.signInMethod,i=qr(t,["providerId","signInMethod"]);if(!n||!a)return null;var o=new r(n,a);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}}]),r}(ki);function Ni(e,t){return Pi.apply(this,arguments)}function Pi(){return(Pi=
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
e(i)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ga(n,"POST","/v1/accounts:sendVerificationCode",ma(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Di(){return(Di=e(i)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",wa(n,"POST","/v1/accounts:signInWithPhoneNumber",ma(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Li(){return(Li=e(i)(e(o).mark((function t(n,r){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,wa(n,"POST","/v1/accounts:signInWithPhoneNumber",ma(n,r));case 2:if(!(a=e.sent).temporaryProof){e.next=5;break}throw Ta(n,"account-exists-with-different-credential",a);case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Mi=e(f)({},"USER_NOT_FOUND","user-not-found");function Ui(){return(Ui=e(i)(e(o).mark((function t(n,r){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",wa(n,"POST","/v1/accounts:signInWithPhoneNumber",ma(n,a),Mi));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var ji=function(t){"use strict";e(v)(r,t);var n=e(S)(r);function r(t){var a;return e(c)(this,r),(a=n.call(this,"phone","phone")).params=t,a}return e(l)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Di.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Li.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Ui.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,a=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:a}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,a=e.phoneNumber,i=e.temporaryProof;return n||t||a||i?new r({verificationId:t,verificationCode:n,phoneNumber:a,temporaryProof:i}):null}}]),r}(ki);
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
 */var Fi=function(){"use strict";function t(n){var r,a,i,o,s,u;e(c)(this,t);var l=ce(le(n)),f=null!==(r=l.apiKey)&&void 0!==r?r:null,p=null!==(a=l.oobCode)&&void 0!==a?a:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=l.mode)&&void 0!==i?i:null);ta(f&&p&&d,"argument-error"),this.apiKey=f,this.operation=d,this.code=p,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=l.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=l.tenantId)&&void 0!==u?u:null}return e(l)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=ce(le(e)).link,n=t?ce(le(t)).deep_link_id:null,r=ce(le(e)).deep_link_id;return(r?ce(le(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
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
var Vi=function(){"use strict";function t(){e(c)(this,t),this.providerId=t.PROVIDER_ID}return e(l)(t,null,[{key:"credential",value:function(e,t){return Oi._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Fi.parseLink(t);return ta(n,"argument-error"),Oi._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();Vi.PROVIDER_ID="password",Vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
var zi=function(){"use strict";function t(n){e(c)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(l)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),Bi=function(t){"use strict";e(v)(r,t);var n=e(S)(r);function r(){var t;return e(c)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(l)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(p)(this.scopes)}}]),r}(zi),Hi=function(t){"use strict";e(v)(r,t);var n=e(S)(r);function r(){return e(c)(this,r),n.call(this,"facebook.com")}return e(l)(r,null,[{key:"credential",value:function(e){return Ai._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Bi);
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
 */Hi.FACEBOOK_SIGN_IN_METHOD="facebook.com",Hi.PROVIDER_ID="facebook.com";
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
var Wi=function(t){"use strict";e(v)(r,t);var n=e(S)(r);function r(){var t;return e(c)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(l)(r,null,[{key:"credential",value:function(e,t){return Ai._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,a=t.oauthAccessToken;if(!n&&!a)return null;try{return r.credential(n,a)}catch(e){return null}}}]),r}(Bi);Wi.GOOGLE_SIGN_IN_METHOD="google.com",Wi.PROVIDER_ID="google.com";
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
var qi=function(t){"use strict";e(v)(r,t);var n=e(S)(r);function r(){return e(c)(this,r),n.call(this,"github.com")}return e(l)(r,null,[{key:"credential",value:function(e){return Ai._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Bi);qi.GITHUB_SIGN_IN_METHOD="github.com",qi.PROVIDER_ID="github.com";
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
var Ki=function(t){"use strict";e(v)(r,t);var n=e(S)(r);function r(){return e(c)(this,r),n.call(this,"twitter.com")}return e(l)(r,null,[{key:"credential",value:function(e,t){return Ai._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,a=t.oauthTokenSecret;if(!n||!a)return null;try{return r.credential(n,a)}catch(e){return null}}}]),r}(Bi);function Ji(e,t){return Gi.apply(this,arguments)}function Gi(){return(Gi=
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
e(i)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",wa(n,"POST","/v1/accounts:signUp",ma(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */Ki.TWITTER_SIGN_IN_METHOD="twitter.com",Ki.PROVIDER_ID="twitter.com";var $i=function(){"use strict";function t(n){e(c)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(l)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,a){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(i)(e(o).mark((function i(){var u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ga._fromIdTokenResponse(n,a,s);case 2:return u=e.sent,c=Xi(a),l=new t({user:u,providerId:c,_tokenResponse:a,operationType:r}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),i)})))()}},{key:"_forOperation",value:function(n,r,a){return e(i)(e(o).mark((function i(){var s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(a,!0);case 2:return s=Xi(a),e.abrupt("return",new t({user:n,providerId:s,_tokenResponse:a,operationType:r}));case 4:case"end":return e.stop()}}),i)})))()}}]),t}();function Xi(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
var Yi=function(t){"use strict";e(v)(r,t);var n=e(S)(r);function r(t,a,i,o){var s,u;return e(c)(this,r),(s=n.call(this,a.code,a.message)).operationType=i,s.user=o,Object.setPrototypeOf(e(h)(s),r.prototype),s.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:a.customData._serverResponse,operationType:i},s}return e(l)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,a){return new r(e,t,n,a)}}]),r}(te);function Qi(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw Yi._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */function Zi(e,t){return eo.apply(this,arguments)}function eo(){return eo=e(i)(e(o).mark((function t(n,r){var a,i,s=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>2&&void 0!==s[2]&&s[2],e.t0=Da,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=a,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return i=e.sent,e.abrupt("return",$i._forOperation(n,"link",i));case 14:case"end":return e.stop()}}),t)}))),eo.apply(this,arguments)}function to(e,t){return no.apply(this,arguments)}function no(){return no=
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
e(i)(e(o).mark((function t(n,r){var a,i,s,u,c,l,f=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f.length>2&&void 0!==f[2]&&f[2],i=n.auth,s="reauthenticate",e.prev=3,e.next=6,Da(n,Qi(i,s,r,n),a);case 6:return ta((u=e.sent).idToken,i,"internal-error"),ta(c=Pa(u.idToken),i,"internal-error"),l=c.sub,ta(n.uid===l,i,"user-mismatch"),e.abrupt("return",$i._forOperation(n,s,u));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&Yr(i,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),t,null,[[3,15]])}))),no.apply(this,arguments)}function ro(e,t){return ao.apply(this,arguments)}function ao(){return ao=
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
e(i)(e(o).mark((function t(n,r){var a,i,s,u,c=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]&&c[2],i="signIn",e.next=4,Qi(n,i,r);case 4:return s=e.sent,e.next=7,$i._fromIdTokenResponse(n,i,s);case 7:if(u=e.sent,a){e.next=11;break}return e.next=11,n._updateCurrentUser(u.user);case 11:return e.abrupt("return",u);case 12:case"end":return e.stop()}}),t)}))),ao.apply(this,arguments)}function io(e,t){return oo.apply(this,arguments)}function oo(){return(oo=e(i)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ro(hi(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function so(e,t,n){return uo.apply(this,arguments)}function uo(){return(uo=e(i)(e(o).mark((function t(n,r,a){var i,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=hi(n),e.next=3,Ji(i,{returnSecureToken:!0,email:r,password:a});case 3:return s=e.sent,e.next=6,$i._fromIdTokenResponse(i,"signIn",s);case 6:return u=e.sent,e.next=9,i._updateCurrentUser(u.user);case 9:return e.abrupt("return",u);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function co(e,t,n){return io(ve(e),Vi.credential(t,n))}function lo(e,t){return fo.apply(this,arguments)}function fo(){return(fo=
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
e(i)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ga(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function po(e,t){return ho.apply(this,arguments)}function ho(){return(ho=
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
e(i)(e(o).mark((function t(n,r){var a,i,s,u,c,l,f;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.displayName,i=r.photoURL,void 0!==a||void 0!==i){e.next=3;break}return e.abrupt("return");case 3:return s=ve(n),e.next=6,s.getIdToken();case 6:return u=e.sent,c={idToken:u,displayName:a,photoUrl:i,returnSecureToken:!0},e.next=10,Da(s,lo(s.auth,c));case 10:return l=e.sent,s.displayName=l.displayName||null,s.photoURL=l.photoUrl||null,(f=s.providerData.find((function(e){return"password"===e.providerId})))&&(f.displayName=s.displayName,f.photoURL=s.photoURL),e.next=17,s._updateTokensIfNecessary(l);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function vo(e,t,n,r){return ve(e).onIdTokenChanged(t,n,r)}function mo(e,t,n){return ve(e).beforeAuthStateChanged(t,n)}function go(e){return ve(e).signOut()}
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
function yo(e,t){return ga(e,"POST","/v2/accounts/mfaEnrollment:start",ma(e,t))}function ko(e,t){return ga(e,"POST","/v2/accounts/mfaEnrollment:finalize",ma(e,t))}new WeakMap;var bo="__sak",wo=function(){"use strict";function t(n,r){e(c)(this,t),this.storageRetriever=n,this.type=r}return e(l)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(bo,"1"),this.storage.removeItem(bo),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
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
 */var Io=function(t){"use strict";e(v)(r,t);var n=e(S)(r);function r(){var t,a;return e(c)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(ti(a=X())||si(a))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=li(),t._shouldAllowMigration=!0,t}return e(l)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var a,i=Object.keys(this.listeners)[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var o=a.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var a=this.storage.getItem(r);if(e.newValue!==a)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var i=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);ci()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,a=!1,i=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){a=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var a=this,s=this;return e(i)(e(o).mark((function i(){return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e(zr)(e(Wr)(r.prototype),"_set",a).call(s,t,n);case 2:s.localCache[t]=JSON.stringify(n);case 3:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this,a=this;return e(i)(e(o).mark((function i(){var s;return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e(zr)(e(Wr)(r.prototype),"_get",n).call(a,t);case 2:return s=i.sent,a.localCache[t]=JSON.stringify(s),i.abrupt("return",s);case 5:case"end":return i.stop()}}),i)})))()}},{key:"_remove",value:function(t){var n=this,a=this;return e(i)(e(o).mark((function i(){return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e(zr)(e(Wr)(r.prototype),"_remove",n).call(a,t);case 2:delete a.localCache[t];case 3:case"end":return i.stop()}}),i)})))()}}]),r}(wo);Io.type="LOCAL";var xo=Io,_o=function(t){"use strict";e(v)(r,t);var n=e(S)(r);function r(){return e(c)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(l)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(wo);
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
 */_o.type="SESSION";var To=_o;
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
 */function So(t){return Promise.all(t.map((n=e(i)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
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
 */var Eo=function(){"use strict";function t(n){e(c)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(l)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(i)(e(o).mark((function r(){var a,s,u,c,l,f,p,d;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=(a=t).data,u=s.eventId,c=s.eventType,l=s.data,null==(f=n.handlersMap[c])?void 0:f.size){r.next=5;break}return r.abrupt("return");case 5:return a.ports[0].postMessage({status:"ack",eventId:u,eventType:c}),p=Array.from(f).map(function(){var t=e(i)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(a.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,So(p);case 9:d=r.sent,a.ports[0].postMessage({status:"done",eventId:u,eventType:c,response:d});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
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
function Oo(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */Eo.receivers=[];var Co=function(){"use strict";function t(n){e(c)(this,t),this.target=n,this.handlers=new Set}return e(l)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,a=this;return e(i)(e(o).mark((function i(){var s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,i){var o=Oo("",20);s.port1.start();var l=setTimeout((function(){i(new Error("unsupported_event"))}),r);c={messageChannel:s,onMessage:function(t){var n=t;if(n.data.eventId===o)switch(n.data.status){case"ack":clearTimeout(l),u=setTimeout((function(){i(new Error("timeout"))}),3e3);break;case"done":clearTimeout(u),e(n.data.response);break;default:clearTimeout(l),clearTimeout(u),i(new Error("invalid_response"))}}},a.handlers.add(c),s.port1.addEventListener("message",c.onMessage),a.target.postMessage({eventType:t,eventId:o,data:n},[s.port2])})).finally((function(){c&&a.removeMessageHandler(c)})));case 6:case"end":return e.stop()}}),i)})))()}}]),t}();
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
 */function Ro(){return window}
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
function Ao(){return void 0!==Ro().WorkerGlobalScope&&"function"==typeof Ro().importScripts}function No(){return Po.apply(this,arguments)}function Po(){return(Po=e(i)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
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
var Do="firebaseLocalStorageDb",Lo="firebaseLocalStorage",Mo="fbase_key",Uo=function(){"use strict";function t(n){e(c)(this,t),this.request=n}return e(l)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function jo(e,t){return e.transaction([Lo],t?"readwrite":"readonly").objectStore(Lo)}function Fo(){var e=indexedDB.deleteDatabase(Do);return new Uo(e).toPromise()}function Vo(){var t=indexedDB.open(Do,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(Lo,{keyPath:Mo})}catch(e){r(e)}})),t.addEventListener("success",e(i)(e(o).mark((function r(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=t.result).objectStoreNames.contains(Lo)){e.next=12;break}return a.close(),e.next=5,Fo();case 5:return e.t0=n,e.next=8,Vo();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(a);case 13:case"end":return e.stop()}}),r)}))))}))}function zo(e,t,n){return Bo.apply(this,arguments)}function Bo(){return(Bo=e(i)(e(o).mark((function t(n,r,a){var i,s;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=jo(n,!0).put((i={},e(f)(i,Mo,r),e(f)(i,"value",a),i)),t.abrupt("return",new Uo(s).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Ho(e,t){return Wo.apply(this,arguments)}function Wo(){return(Wo=e(i)(e(o).mark((function t(n,r){var a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=jo(n,!1).get(r),e.next=3,new Uo(a).toPromise();case 3:return i=e.sent,e.abrupt("return",void 0===i?null:i.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function qo(e,t){var n=jo(e,!0).delete(t);return new Uo(n).toPromise()}var Ko=function(){"use strict";function t(){e(c)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(l)(t,[{key:"_openDb",value:function(){var t=this;return e(i)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,Vo();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(i)(e(o).mark((function r(){var a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return i=e.sent,e.next=8,t(i);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(a++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(i)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ao()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(i)(e(o).mark((function n(){return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=Eo._getInstance(Ao()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(i)(e(o).mark((function n(r,a){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return i=e.sent,e.abrupt("return",{keyProcessed:i.includes(a.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(i)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(i)(e(o).mark((function n(){var r,a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,No();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new Co(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(i=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=i[0])||void 0===r?void 0:r.fulfilled)&&(null===(a=i[0])||void 0===a?void 0:a.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(i)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(i)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Vo();case 5:return n=e.sent,e.next=8,zo(n,bo,"1");case 8:return e.next=10,qo(n,bo);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(i)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(i)(e(o).mark((function a(){return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",r._withPendingWrite(e(i)(e(o).mark((function a(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return zo(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),a)})))));case 1:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var n=this;return e(i)(e(o).mark((function r(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Ho(e,t)}));case 2:return a=e.sent,n.localCache[t]=a,e.abrupt("return",a);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(i)(e(o).mark((function r(){return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(i)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return qo(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(i)(e(o).mark((function n(){var r,a,i,s,u,c,l,f,p,d,h,v,m,g,y,k,b;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=jo(e,!1).getAll();return new Uo(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(a=[],i=new Set,s=!0,u=!1,c=void 0,e.prev=10,l=r[Symbol.iterator]();!(s=(f=l.next()).done);s=!0)p=f.value,d=p.fbase_key,h=p.value,i.add(d),JSON.stringify(t.localCache[d])!==JSON.stringify(h)&&(t.notifyListeners(d,h),a.push(d));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),u=!0,c=e.t0;case 18:e.prev=18,e.prev=19,s||null==l.return||l.return();case 21:if(e.prev=21,!u){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,m=!1,g=void 0,e.prev=27,y=Object.keys(t.localCache)[Symbol.iterator]();!(v=(k=y.next()).done);v=!0)b=k.value,t.localCache[b]&&!i.has(b)&&(t.notifyListeners(b,null),a.push(b));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),m=!0,g=e.t1;case 35:e.prev=35,e.prev=36,v||null==y.return||y.return();case 38:if(e.prev=38,!m){e.next=41;break}throw g;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",a);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,a=!1,i=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){a=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(i)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();Ko.type="LOCAL";var Jo=Ko;
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
 */function Go(e,t){return ga(e,"POST","/v2/accounts/mfaSignIn:start",ma(e,t))}function $o(e,t){return ga(e,"POST","/v2/accounts/mfaSignIn:finalize",ma(e,t))}function Xo(e){return new Promise((function(t,n){var r,a,i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=function(e){var t=Qr("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(a=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==a?a:document).appendChild(i)}))}function Yo(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
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
Yo("rcb"),new la(3e4,6e4);var Qo="recaptcha";
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
 */function Zo(e,t,n){return es.apply(this,arguments)}function es(){return(es=e(i)(e(o).mark((function t(n,r,a){var i,s,u,c,l,f,p,d;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,a.verify();case 3:if(s=e.sent,e.prev=4,ta("string"==typeof s,n,"argument-error"),ta(a.type===Qo,n,"argument-error"),!("session"in(u="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(c=u.session,!("phoneNumber"in u)){e.next=19;break}return ta("enroll"===c.type,n,"internal-error"),e.next=15,yo(n,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:s}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return ta("signin"===c.type,n,"internal-error"),ta(f=(null===(i=u.multiFactorHint)||void 0===i?void 0:i.uid)||u.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Go(n,{mfaPendingCredential:c.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:s}});case 24:return p=e.sent,e.abrupt("return",p.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Ni(n,{phoneNumber:u.phoneNumber,recaptchaToken:s});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,a._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
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
var ts=function(){"use strict";function t(n){e(c)(this,t),this.providerId=t.PROVIDER_ID,this.auth=hi(n)}return e(l)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Zo(this.auth,e,ve(t))}}],[{key:"credential",value:function(e,t){return ji._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?ji._fromTokenResponse(n,r):null}}]),t}();
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
function ns(e,t){return t?ia(t):(ta(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */ts.PROVIDER_ID="phone",ts.PHONE_SIGN_IN_METHOD="phone";var rs=function(t){"use strict";e(v)(r,t);var n=e(S)(r);function r(t){var a;return e(c)(this,r),(a=n.call(this,"custom","custom")).params=t,a}return e(l)(r,[{key:"_getIdTokenResponse",value:function(e){return Ci(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Ci(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Ci(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(ki);function as(e){return ro(e.auth,new rs(e),e.bypassAuthState)}function is(e){var t=e.auth,n=e.user;return ta(n,t,"internal-error"),to(n,new rs(e),e.bypassAuthState)}function os(e){return ss.apply(this,arguments)}function ss(){return(ss=e(i)(e(o).mark((function t(n){var r,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,ta(a=n.user,r,"internal-error"),e.abrupt("return",Zi(a,new rs(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var us=function(){"use strict";function t(n,r,a,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(c)(this,t),this.auth=n,this.resolver=a,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(l)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(i)(e(o).mark((function t(r,a){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:a},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(i)(e(o).mark((function r(){var a,i,s,u,c,l,f;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.urlResponse,i=t.sessionId,s=t.postBody,u=t.tenantId,c=t.error,l=t.type,!c){e.next=4;break}return n.reject(c),e.abrupt("return");case 4:return f={auth:n.auth,requestUri:a,sessionId:i,tenantId:u||void 0,postBody:s||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(l)(f);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return as;case"linkViaPopup":case"linkViaRedirect":return os;case"reauthViaPopup":case"reauthViaRedirect":return is;default:Yr(this.auth,"internal-error")}}},{key:"resolve",value:function(e){ra(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){ra(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),cs=new la(2e3,1e4);
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
 */var ls=function(t){"use strict";e(v)(r,t);var n=e(S)(r);function r(t,a,i,o,s){var u;return e(c)(this,r),(u=n.call(this,t,a,o,s)).provider=i,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(h)(u),u}return e(l)(r,[{key:"executeNotNull",value:function(){var t=this;return e(i)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return ta(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(i)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ra(1===t.filter.length,"Popup operations only handle one event"),r=Oo(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(Qr(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(Qr(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var a=e;e.pollId=window.setTimeout((function(){a.pollId=null,a.reject(Qr(a.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,cs.get())};t()}}]),r}(us);ls.currentPopupAction=null;
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
var fs=new Map,ps=function(t){"use strict";e(v)(r,t);var n=e(S)(r);function r(t,a){var i,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(c)(this,r),(i=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],a,void 0,o)).eventId=null,i}return e(l)(r,[{key:"execute",value:function(){var t=this,n=this;return e(i)(e(o).mark((function a(){var i,s;return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(i=fs.get(n.auth._key())){a.next=21;break}return a.prev=2,a.next=5,ds(n.resolver,n.auth);case 5:if(!a.sent){a.next=12;break}return a.next=9,e(zr)(e(Wr)(r.prototype),"execute",t).call(n);case 9:a.t0=a.sent,a.next=13;break;case 12:a.t0=null;case 13:s=a.t0,i=function(){return Promise.resolve(s)},a.next=20;break;case 17:a.prev=17,a.t1=a.catch(2),i=function(){return Promise.reject(a.t1)};case 20:fs.set(n.auth._key(),i);case 21:return n.bypassAuthState||fs.set(n.auth._key(),(function(){return Promise.resolve(null)})),a.abrupt("return",i());case 23:case"end":return a.stop()}}),a,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,a=this,s=function(){return e(zr)(e(Wr)(r.prototype),"onAuthEvent",n)};return e(i)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",s().call(a,t));case 4:if("unknown"!==t.type){e.next=7;break}return a.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,a.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return a.user=r,e.abrupt("return",s().call(a,t));case 16:a.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(us);function ds(e,t){return hs.apply(this,arguments)}function hs(){return(hs=e(i)(e(o).mark((function t(n,r){var a,i,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=gs(r),i=ms(n),e.next=4,i._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,i._get(a);case 8:return e.t0=e.sent,s="true"===e.t0,e.next=12,i._remove(a);case 12:return e.abrupt("return",s);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function vs(e,t){fs.set(e._key(),t)}function ms(e){return ia(e._redirectPersistence)}function gs(e){return Ya("pendingRedirect",e.config.apiKey,e.name)}
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
 */function ys(e,t){return ks.apply(this,arguments)}function ks(){return ks=e(i)(e(o).mark((function t(n,r){var a,i,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>2&&void 0!==l[2]&&l[2],i=hi(n),s=ns(i,r),u=new ps(i,s,a),e.next=6,u.execute();case 6:if(!(c=e.sent)||a){e.next=13;break}return delete c.user._redirectEventId,e.next=11,i._persistUserIfCurrent(c.user);case 11:return e.next=13,i._setRedirectUser(null,r);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),t)}))),ks.apply(this,arguments)}
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
var bs=function(){"use strict";function t(n){e(c)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(l)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Is(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!Is(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Qr(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ws(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(ws(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function ws(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Is(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function xs(e){return _s.apply(this,arguments)}function _s(){return _s=
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
e(i)(e(o).mark((function t(n){var r,a=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},e.abrupt("return",ga(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),_s.apply(this,arguments)}
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
 */var Ts=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ss=/^https?/;function Es(){return(Es=e(i)(e(o).mark((function t(n){var r,a,i,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,xs(n);case 4:r=e.sent.authorizedDomains,a=!0,i=!1,s=void 0,e.prev=6,u=r[Symbol.iterator]();case 8:if(a=(c=u.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!Os(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:a=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),i=!0,s=e.t1;case 26:e.prev=26,e.prev=27,a||null==u.return||u.return();case 29:if(e.prev=29,!i){e.next=32;break}throw s;case 32:return e.finish(29);case 33:return e.finish(26);case 34:Yr(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Os(e){var t=sa(),n=new URL(t),r=n.protocol,a=n.hostname;if(e.startsWith("chrome-extension://")){var i=new URL(e);return""===i.hostname&&""===a?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===a}if(!Ss.test(r))return!1;if(Ts.test(e))return a===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}
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
 */var Cs=new la(3e4,6e4);function Rs(){var t=Ro().___jsl,n=!0,r=!1,a=void 0;if(null==t?void 0:t.H)try{for(var i,o=Object.keys(t.H)[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(p)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}}var As=null;function Ns(e){return As=As||function(e){return new Promise((function(t,n){var r,a,i;function o(){Rs(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Rs(),n(Qr(e,"network-request-failed"))},timeout:Cs.get()})}if(null===(a=null===(r=Ro().gapi)||void 0===r?void 0:r.iframes)||void 0===a?void 0:a.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Ro().gapi)||void 0===i?void 0:i.load)){var s=Yo("iframefcb");return Ro()[s]=function(){gapi.load?o():n(Qr(e,"network-request-failed"))},Xo("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw As=null,e}))}(e),As}
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
 */var Ps=new la(5e3,15e3),Ds={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ls=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ms(e){var t=e.config;ta(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?fa(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:ft},a=Ls.get(e.config.apiHost);a&&(r.eid=a);var i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),"".concat(n,"?").concat(ue(r).slice(1))}function Us(e){return js.apply(this,arguments)}function js(){return js=e(i)(e(o).mark((function t(n){var r,a;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ns(n);case 2:return r=t.sent,ta(a=Ro().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:Ms(n),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ds,dontclear:!0},(function(t){return new Promise((r=e(i)(e(o).mark((function r(a,i){var s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){Ro().clearTimeout(u),a(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:s=Qr(n,"network-request-failed"),u=Ro().setTimeout((function(){i(s)}),Ps.get()),t.ping(c).then(c,(function(){i(s)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),js.apply(this,arguments)}
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
 */var Fs={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vs="_blank",zs="http://localhost",Bs=function(){"use strict";function t(n){e(c)(this,t),this.window=n,this.associatedEvent=null}return e(l)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function Hs(t,n,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-a)/2,0).toString(),u="",c=Object.assign(Object.assign({},Fs),{width:a.toString(),height:i.toString(),top:o,left:s}),l=X().toLowerCase();r&&(u=ni(l)?Vs:r),ei(l)&&(n=n||zs,c.scrollbars="yes");var f=Object.entries(c).reduce((function(t,n){var r=e(d)(n,2),a=r[0],i=r[1];return"".concat(t).concat(a,"=").concat(i,",")}),"");if(ui(l)&&"_self"!==u)return Ws(n||"",u),new Bs(null);var p=window.open(n||"",u,f);ta(p,t,"popup-blocked");try{p.focus()}catch(e){}return new Bs(p)}function Ws(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */var qs="__/auth/handler",Ks="emulator/auth/handler";function Js(t,n,r,a,i,o){ta(t.config.authDomain,t,"auth-domain-config-required"),ta(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:a,v:ft,eventId:i};if(n instanceof zi){n.setDefaultLanguage(t.languageCode),s.providerId=n.providerId||"",ie(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,p=Object.entries(o||{})[Symbol.iterator]();!(u=(f=p.next()).done);u=!0){var h=e(d)(f.value,2),v=h[0],m=h[1];s[v]=m}}catch(e){c=!0,l=e}finally{try{u||null==p.return||p.return()}finally{if(c)throw l}}}if(n instanceof Bi){var g=n.getScopes().filter((function(e){return""!==e}));g.length>0&&(s.scopes=g.join(","))}t.tenantId&&(s.tid=t.tenantId);var y,k,b=s,w=!0,I=!1,x=void 0;try{for(var _,T=Object.keys(b)[Symbol.iterator]();!(w=(_=T.next()).done);w=!0){var S=_.value;void 0===b[S]&&delete b[S]}}catch(e){I=!0,x=e}finally{try{w||null==T.return||T.return()}finally{if(I)throw x}}return"".concat((y=t,k=y.config,k.emulator?fa(k,Ks):"https://".concat(k.authDomain,"/").concat(qs)),"?").concat(ue(b).slice(1))}
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
var Gs="webStorageSupport",$s=function(){"use strict";function t(){e(c)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=To,this._completeRedirectFn=ys,this._overrideRedirectResult=vs}return e(l)(t,[{key:"_openPopup",value:function(t,n,r,a){var s=this;return e(i)(e(o).mark((function i(){var u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ra(null===(u=s.eventManagers[t._key()])||void 0===u?void 0:u.manager,"_initialize() not called before _openPopup()"),c=Js(t,n,r,sa(),a),e.abrupt("return",Hs(t,c,Oo()));case 4:case"end":return e.stop()}}),i)})))()}},{key:"_openRedirect",value:function(t,n,r,a){var s=this;return e(i)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s._originValidation(t);case 2:return i=Js(t,n,r,sa(),a),Ro().location.href=i,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var i}),i)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],a=r.manager,i=r.promise;return a?Promise.resolve(a):(ra(i,"If manager is not set, promise should be"),i)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(t){var n=this;return e(i)(e(o).mark((function r(){var a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Us(t);case 2:return a=e.sent,i=new bs(t),a.register("authEvent",(function(e){return ta(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:i.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:i},n.iframes[t._key()]=a,e.abrupt("return",i);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Gs,{type:Gs},(function(n){var r,a=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==a&&t(!!a),Yr(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Es.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return li()||ti()||si()}}]),t}(),Xs=$s,Ys=function(){"use strict";function t(n){e(c)(this,t),this.factorId=n}return e(l)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return na("unexpected MultiFactorSessionType")}}}]),t}(),Qs=function(t){"use strict";e(v)(r,t);var n=e(S)(r);function r(t){var a;return e(c)(this,r),(a=n.call(this,"phone")).credential=t,a}return e(l)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return ga(e,"POST","/v2/accounts/mfaEnrollment:finalize",ma(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return ga(e,"POST","/v2/accounts/mfaSignIn:finalize",ma(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(Ys);(function(){"use strict";function t(){e(c)(this,t)}return e(l)(t,null,[{key:"assertion",value:function(e){return Qs._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var Zs=function(){"use strict";function t(){e(c)(this,t)}return e(l)(t,null,[{key:"assertionForEnrollment",value:function(e,t){return eu._fromSecret(e,t)}},{key:"assertionForSignIn",value:function(e,t){return eu._fromEnrollmentId(e,t)}},{key:"generateSecret",value:function(t){return e(i)(e(o).mark((function n(){var r,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ta(void 0!==(r=t).auth,"internal-error"),e.next=4,n=r.auth,i={idToken:r.credential,totpEnrollmentInfo:{}},ga(n,"POST","/v2/accounts/mfaEnrollment:start",ma(n,i));case 4:return a=e.sent,e.abrupt("return",tu._fromStartTotpMfaEnrollmentResponse(a,r.auth));case 6:case"end":return e.stop()}var n,i}),n)})))()}}]),t}();Zs.FACTOR_ID="totp";var eu=function(t){"use strict";e(v)(r,t);var n=e(S)(r);function r(t,a,i){var o;return e(c)(this,r),(o=n.call(this,"totp")).otp=t,o.enrollmentId=a,o.secret=i,o}return e(l)(r,[{key:"_finalizeEnroll",value:function(t,n,r){var a=this;return e(i)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ta(void 0!==a.secret,t,"argument-error"),e.abrupt("return",ko(t,{idToken:n,displayName:r,totpVerificationInfo:a.secret._makeTotpVerificationInfo(a.otp)}));case 2:case"end":return e.stop()}}),i)})))()}},{key:"_finalizeSignIn",value:function(t,n){var r=this;return e(i)(e(o).mark((function a(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ta(void 0!==r.enrollmentId&&void 0!==r.otp,t,"argument-error"),i={verificationCode:r.otp},e.abrupt("return",$o(t,{mfaPendingCredential:n,mfaEnrollmentId:r.enrollmentId,totpVerificationInfo:i}));case 3:case"end":return e.stop()}}),a)})))()}}],[{key:"_fromSecret",value:function(e,t){return new r(t,void 0,e)}},{key:"_fromEnrollmentId",value:function(e,t){return new r(t,e)}}]),r}(Ys),tu=function(){"use strict";function t(n,r,a,i,o,s,u){e(c)(this,t),this.sessionInfo=s,this.auth=u,this.secretKey=n,this.hashingAlgorithm=r,this.codeLength=a,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=o}return e(l)(t,[{key:"_makeTotpVerificationInfo",value:function(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}},{key:"generateQrCodeUrl",value:function(e,t){var n,r=!1;return(nu(e)||nu(t))&&(r=!0),r&&(nu(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),nu(t)&&(t=this.auth.name)),"otpauth://totp/".concat(t,":").concat(e,"?secret=").concat(this.secretKey,"&issuer=").concat(t,"&algorithm=").concat(this.hashingAlgorithm,"&digits=").concat(this.codeLength)}}],[{key:"_fromStartTotpMfaEnrollmentResponse",value:function(e,n){return new t(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}}]),t}();function nu(e){return void 0===e||0===(null==e?void 0:e.length)}var ru="@firebase/auth",au="0.22.0",iu=function(){"use strict";function t(n){e(c)(this,t),this.auth=n,this.internalListeners=new Map}return e(l)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(i)(e(o).mark((function r(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return a=e.sent,e.abrupt("return",{accessToken:a});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){ta(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
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
var ou,su=G("authIdTokenMaxAge")||300,uu=null,cu=function(t){return n=e(i)(e(o).mark((function n(r){var a,i,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=5;break}return e.next=4,r.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(a=e.t0,!((i=a&&((new Date).getTime()-Date.parse(a.issuedAtTime))/1e3)&&i>su)){e.next=9;break}return e.abrupt("return");case 9:if(s=null==a?void 0:a.token,uu!==s){e.next=12;break}return e.abrupt("return");case 12:return uu=s,e.next=15,fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:"Bearer ".concat(s)}:{}});case 15:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};ou="Browser",ot(new me("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),i=r.options,o=i.apiKey,s=i.authDomain;return function(e,t){ta(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),ta(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:ou,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fi(ou)},a=new di(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ia);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(a,n),a}(r,a)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),ot(new me("auth-internal",(function(e){var t=hi(e.getProvider("auth").getImmediate());return new iu(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ht(ru,au,
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
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ou)),ht(ru,au,"esm2017");i=a("bpxeT"),o=a("2TvXO");var lu=a("dIxxU");lu.default.defaults.baseURL="https://books-314f3-default-rtdb.europe-west1.firebasedatabase.app";var fu,pu,du,hu,vu=(fu=e(i)(e(o).mark((function t(n){var r,a,i,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("uid"),e.next=3,JSON.parse(r);case 3:return a=e.sent,i=localStorage.getItem("token"),e.next=7,JSON.parse(i);case 7:if(s=e.sent){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,lu.default.post("".concat(a,".json?auth=").concat(s),n);case 12:return u=e.sent,e.abrupt("return",u.data);case 14:case"end":return e.stop()}}),t)}))),function(e){return fu.apply(this,arguments)}),mu=function(){var t=e(i)(e(o).mark((function t(){var n,r,a,i,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("uid"),e.next=3,JSON.parse(n);case 3:return r=e.sent,a=localStorage.getItem("token"),e.next=7,JSON.parse(a);case 7:if(i=e.sent){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,lu.default.get("".concat(r,".json?auth=").concat(i));case 12:return s=e.sent,e.abrupt("return",s.data);case 14:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),gu=function(){var t=e(i)(e(o).mark((function t(){var n,r,a,i,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("uid"),e.next=3,JSON.parse(n);case 3:return r=e.sent,a=localStorage.getItem("token"),e.next=7,JSON.parse(a);case 7:if(i=e.sent){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,lu.default.delete("".concat(r,".json?auth=").concat(i));case 12:if(s=e.sent){e.next=15;break}return e.abrupt("return","<div>Loading...</div>");case 15:return e.abrupt("return",s.data);case 16:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),yu=(s=a("4Nugj"),u=a("lzhzI"),(0,s.default)()),ku=(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt(),t=st(e=ve(e),qn);t.isInitialized()?t.getImmediate():Ur(e)}(pt({apiKey:"AIzaSyCq9mOndO3g-rUoq_LhFsLf4QY5_4L9fkc",authDomain:"books-314f3.firebaseapp.com",databaseURL:"https://books-314f3-default-rtdb.europe-west1.firebasedatabase.app",projectId:"books-314f3",storageBucket:"books-314f3.appspot.com",messagingSenderId:"627795944798",appId:"1:627795944798:web:853f1b3c49bede1282dbcf",measurementId:"G-L8HC0K2SWK"})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt(),t=st(e,"auth");if(t.isInitialized())return t.getImmediate();var n=oa(e,{popupRedirectResolver:Xs,persistence:[Jo,xo,To]}),r=G("authTokenSyncURL");if(r){var a=cu(r);mo(n,a,(function(){return a(n.currentUser)})),vo(n,(function(e){return a(e)}))}var i=K("auth");return i&&mi(n,"http://".concat(i)),n}());function bu(e,t,n){so(ku,e,t,n).then((function(e){po(ku.currentUser,{displayName:n}),xu(e,n)})).catch((function(e){e.code,e.message}))}function wu(e,t){co(ku,e,t).then((function(e){var t=e.user.displayName;return xu(e,t),mu().then((function(e){if(null===e)return console.log("null"),void localStorage.setItem("list",null);var t=Object.keys(e),n=[],r=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n.push(e[u])}}catch(e){a=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}n.map((function(e){var t=JSON.stringify(e);localStorage.setItem("list",t)}))})),yu.userName.textContent=t})).catch((function(e){e.code,e.message}))}function Iu(){go(ku).then((function(){return localStorage.setItem("uid",null),localStorage.setItem("token",null),localStorage.setItem("list",null),localStorage.setItem("userName",null),yu.userName.textContent=""})).catch((function(e){console.log(e.message)}))}function xu(e,t){var n=e.user.uid,r=e.user.accessToken;return localStorage.setItem("token",JSON.stringify(r)),localStorage.setItem("uid",JSON.stringify(n)),localStorage.setItem("userName",t),yu.userName.textContent=t}pu=function(e){if(e)return(0,u.userLogIn)(),yu.userName.textContent=e.displayName;console.log("User is signed out")},ve(ku).onAuthStateChanged(pu,du,hu);var _u=(0,s.default)();function Tu(){return(Tu=e(i)(e(o).mark((function t(n){var r,a,i,s,c,l,f,p;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=n.currentTarget,a=r.elements,i=a.user_name,s=a.user_email,c=a.user_password,l=i.value,f=s.value,p=c.value,n.currentTarget.reset(),e.next=8,bu(f,p,l);case 8:(0,u.userLogIn)(),(0,u.handleClickOnSingUpCloseBtn)();case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Su(){return(Su=e(i)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!(r=JSON.parse(localStorage.getItem("list")))){e.next=6;break}return e.next=5,gu();case 5:vu(r);case 6:(0,u.userLogOut)(),Iu();case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}_u.formSingUp.addEventListener("submit",(function(e){return Tu.apply(this,arguments)})),_u.formLogIn.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.user_email,r=t.user_password,a=n.value,i=r.value;e.currentTarget.reset(),(0,u.userLogIn)(),wu(a,i),(0,u.handleClickOnSingInCloseBtn)()})),_u.logOut.addEventListener("click",(function(e){return Su.apply(this,arguments)}))}();
//# sourceMappingURL=shopping-list.53d8c2e9.js.map
