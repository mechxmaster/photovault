var Dg=Object.defineProperty;var yg=(n,e,t)=>e in n?Dg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var U=(n,e,t)=>yg(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Ig=()=>{};var al={};/**
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
 */const md=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},wg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],B=n[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|B&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,B=o?n[s+1]:0,u=s+2<n.length,c=u?n[s+2]:0,h=i>>2,f=(i&3)<<4|B>>4;let p=(B&15)<<2|c>>6,y=c&63;u||(y=64,o||(p=64)),r.push(t[h],t[f],t[p],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(md(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):wg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],B=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const f=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||B==null||c==null||f==null)throw new Tg;const p=i<<2|B>>4;if(r.push(p),c!==64){const y=B<<4&240|c>>2;if(r.push(y),f!==64){const R=c<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Tg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ag=function(n){const e=md(n);return Ed.encodeByteArray(e,!0)},Po=function(n){return Ag(n).replace(/\./g,"")},_d=function(n){try{return Ed.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Rg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vg=()=>Rg().__FIREBASE_DEFAULTS__,bg=()=>{if(typeof process>"u"||typeof al>"u")return;const n=al.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_d(n[1]);return e&&JSON.parse(e)},Xo=()=>{try{return Ig()||vg()||bg()||Pg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Dd=n=>{var e,t;return(t=(e=Xo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},yd=n=>{const e=Dd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Id=()=>{var n;return(n=Xo())==null?void 0:n.config},wd=n=>{var e;return(e=Xo())==null?void 0:e[`_${n}`]};/**
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
 */class Td{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Ad(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Po(JSON.stringify(t)),Po(JSON.stringify(o)),""].join(".")}/**
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function Og(){var e;const n=(e=Xo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ng(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Fg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kg(){const n=Xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function xg(){return!Og()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vg(){try{return typeof indexedDB=="object"}catch{return!1}}function Mg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Gg="FirebaseError";class Qt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Gg,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ug(i,r):"Error",B=`${this.serviceName}: ${o} (${s}).`;return new Qt(s,B,r)}}function Ug(n,e){try{let t=0,r="";for(;t<n.length;){const s=n.indexOf("{$",t);if(s===-1){r+=n.substring(t);break}const i=n.indexOf("}",s+2);if(i===-1){r+=n.substring(t);break}const o=n.substring(s+2,i),B=e[o];r+=n.substring(t,s)+(B!=null?String(B):`<${o}?>`),t=i+1}return r}catch{return n}}function Hg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function lr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Bl(i)&&Bl(o)){if(!lr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Bl(n){return n!==null&&typeof n=="object"}/**
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
 */function yi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ks(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function xs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Jg(n,e){const t=new qg(n,e);return t.subscribe.bind(t)}class qg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");jg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=za),s.error===void 0&&(s.error=za),s.complete===void 0&&(s.complete=za);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function za(){}/**
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
 */function Oe(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Er(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function zB(n){return(await fetch(n,{credentials:"include"})).ok}class Nn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yn="[DEFAULT]";/**
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
 */class Kg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Td;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qg(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const B=this.normalizeInstanceIdentifier(i);r===B&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zg(n){return n===Yn?void 0:n}function Qg(n){return n.instantiationMode==="EAGER"}/**
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
 */class Wg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Kg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(le||(le={}));const $g={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Yg=le.INFO,Xg={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Zg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Xg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class QB{constructor(e){this.name=e,this._logLevel=Yg,this._logHandler=Zg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$g[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const em=(n,e)=>e.some(t=>n instanceof t);let ul,cl;function tm(){return ul||(ul=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nm(){return cl||(cl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rd=new WeakMap,CB=new WeakMap,vd=new WeakMap,Qa=new WeakMap,WB=new WeakMap;function rm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(vn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Rd.set(t,n)}).catch(()=>{}),WB.set(e,n),e}function sm(n){if(CB.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});CB.set(n,e)}let pB={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return CB.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function im(n){pB=n(pB)}function om(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Wa(this),e,...t);return vd.set(r,e.sort?e.sort():[e]),vn(r)}:nm().includes(n)?function(...e){return n.apply(Wa(this),e),vn(Rd.get(this))}:function(...e){return vn(n.apply(Wa(this),e))}}function am(n){return typeof n=="function"?om(n):(n instanceof IDBTransaction&&sm(n),em(n,tm())?new Proxy(n,pB):n)}function vn(n){if(n instanceof IDBRequest)return rm(n);if(Qa.has(n))return Qa.get(n);const e=am(n);return e!==n&&(Qa.set(n,e),WB.set(e,n)),e}const Wa=n=>WB.get(n);function Bm(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),B=vn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(vn(o.result),u.oldVersion,u.newVersion,vn(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),B.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),B}const um=["get","getKey","getAll","getAllKeys","count"],cm=["put","add","delete","clear"],$a=new Map;function ll(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($a.get(e))return $a.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=cm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||um.includes(t)))return;const i=async function(o,...B){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(B.shift())),(await Promise.all([c[t](...B),s&&u.done]))[0]};return $a.set(e,i),i}im(n=>({...n,get:(e,t,r)=>ll(e,t)||n.get(e,t,r),has:(e,t)=>!!ll(e,t)||n.has(e,t)}));/**
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
 */class lm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(hm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function hm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gB="@firebase/app",hl="0.16.1";/**
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
 */const sn=new QB("@firebase/app"),dm="@firebase/app-compat",fm="@firebase/analytics-compat",Cm="@firebase/analytics",pm="@firebase/app-check-compat",gm="@firebase/app-check",mm="@firebase/auth",Em="@firebase/auth-compat",_m="@firebase/database",Dm="@firebase/data-connect",ym="@firebase/database-compat",Im="@firebase/functions",wm="@firebase/functions-compat",Tm="@firebase/installations",Am="@firebase/installations-compat",Rm="@firebase/messaging",vm="@firebase/messaging-compat",bm="@firebase/performance",Pm="@firebase/performance-compat",Sm="@firebase/remote-config",Om="@firebase/remote-config-compat",Nm="@firebase/storage",Lm="@firebase/storage-compat",Fm="@firebase/firestore",km="@firebase/ai",xm="@firebase/firestore-compat",Vm="firebase",Mm="12.18.0";/**
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
 */const mB="[DEFAULT]",Gm={[gB]:"fire-core",[dm]:"fire-core-compat",[Cm]:"fire-analytics",[fm]:"fire-analytics-compat",[gm]:"fire-app-check",[pm]:"fire-app-check-compat",[mm]:"fire-auth",[Em]:"fire-auth-compat",[_m]:"fire-rtdb",[Dm]:"fire-data-connect",[ym]:"fire-rtdb-compat",[Im]:"fire-fn",[wm]:"fire-fn-compat",[Tm]:"fire-iid",[Am]:"fire-iid-compat",[Rm]:"fire-fcm",[vm]:"fire-fcm-compat",[bm]:"fire-perf",[Pm]:"fire-perf-compat",[Sm]:"fire-rc",[Om]:"fire-rc-compat",[Nm]:"fire-gcs",[Lm]:"fire-gcs-compat",[Fm]:"fire-fst",[xm]:"fire-fst-compat",[km]:"fire-vertex","fire-js":"fire-js",[Vm]:"fire-js-all"};/**
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
 */const Xs=new Map,Um=new Map,EB=new Map;function dl(n,e){try{n.container.addComponent(e)}catch(t){sn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function hr(n){const e=n.name;if(EB.has(e))return sn.debug(`There were multiple attempts to register component ${e}.`),!1;EB.set(e,n);for(const t of Xs.values())dl(t,n);for(const t of Um.values())dl(t,n);return!0}function Zo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function mt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Hm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new Di("app","Firebase",Hm);/**
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
 */class Jm{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
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
 */const _r=Mm;function bd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:mB,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Yt.create("bad-app-name",{appName:String(s)});if(t||(t=Id()),!t)throw Yt.create("no-options");const i=Xs.get(s);if(i)if(lr(t,i.options)){if(lr(r,i.config))return i;throw Yt.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(r)})}else throw Yt.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new Wg(s);for(const u of EB.values())o.addComponent(u);const B=new Jm(t,r,o);return Xs.set(s,B),B}function $B(n=mB){const e=Xs.get(n);if(!e&&n===mB&&Id())return bd();if(!e)throw Yt.create("no-app",{appName:n});return e}function fl(){return Array.from(Xs.values())}function Mt(n,e,t){let r=Gm[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sn.warn(o.join(" "));return}hr(new Nn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const qm="firebase-heartbeat-database",jm=1,Zs="firebase-heartbeat-store";let Ya=null;function Pd(){return Ya||(Ya=Bm(qm,jm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Zs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Yt.create("idb-open",{originalErrorMessage:n.message})})),Ya}async function Km(n){try{const t=(await Pd()).transaction(Zs),r=await t.objectStore(Zs).get(Sd(n));return await t.done,r}catch(e){if(e instanceof Qt)sn.warn(e.message);else{const t=Yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sn.warn(t.message)}}}async function Cl(n,e){try{const r=(await Pd()).transaction(Zs,"readwrite");await r.objectStore(Zs).put(e,Sd(n)),await r.done}catch(t){if(t instanceof Qt)sn.warn(t.message);else{const r=Yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});sn.warn(r.message)}}}function Sd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const zm=1024,Qm=30;class Wm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ym(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=pl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Qm){const o=Xm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=pl(),{heartbeatsToSend:r,unsentEntries:s}=$m(this._heartbeatsCache.heartbeats),i=Po(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return sn.warn(t),""}}}function pl(){return new Date().toISOString().substring(0,10)}function $m(n,e=zm){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),gl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),gl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ym{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vg()?Mg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Km(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Cl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Cl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function gl(n){return Po(JSON.stringify({version:2,heartbeats:n})).length}function Xm(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Zm(n){hr(new Nn("platform-logger",e=>new lm(e),"PRIVATE")),hr(new Nn("heartbeat",e=>new Wm(e),"PRIVATE")),Mt(gB,hl,n),Mt(gB,hl,"esm2020"),Mt("fire-js","")}/**
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
 */Zm("");function Od(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eE=Od,Nd=new Di("auth","Firebase",Od());/**
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
 */const So=new QB("@firebase/auth");function Ld(n,...e){So.logLevel<=le.WARN&&So.warn(`Auth (${_r}): ${n}`,...e)}function _o(n,...e){So.logLevel<=le.ERROR&&So.error(`Auth (${_r}): ${n}`,...e)}/**
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
 */function Pt(n,...e){throw YB(n,...e)}function Gt(n,...e){return YB(n,...e)}function Fd(n,e,t){const r={...eE(),[e]:t};return new Di("auth","Firebase",r).create(e,{appName:n.name})}function tn(n){return Fd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function YB(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Nd.create(n,...e)}function re(n,e,...t){if(!n)throw YB(e,...t)}function Xt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw _o(e),new Error(e)}function on(n,e){n||Xt(e)}/**
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
 */function _B(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function tE(){return ml()==="http:"||ml()==="https:"}function ml(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function nE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tE()||Lg()||"connection"in navigator)?navigator.onLine:!0}function rE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ii{constructor(e,t){this.shortDelay=e,this.longDelay=t,on(t>e,"Short delay should be less than long delay!"),this.isMobile=Sg()||Fg()}get(){return nE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function XB(n,e){on(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class kd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const iE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],oE=new Ii(3e4,6e4);function Jn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function un(n,e,t,r,s={}){return xd(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const B=yi({...o,key:n.config.apiKey}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const c={method:e,headers:u,...i};return Ng()||(c.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&Er(n.emulatorConfig.host)&&(c.credentials="include"),kd.fetch()(await Vd(n,n.config.apiHost,t,B),c)})}async function xd(n,e,t){n._canInitEmulator=!1;const r={...sE,...e};try{const s=new BE(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw to(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const B=i.ok?o.errorMessage:o.error.message,[u,c]=B.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw to(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw to(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw to(n,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Fd(n,h,c);Pt(n,h)}}catch(s){if(s instanceof Qt)throw s;Pt(n,"network-request-failed",{message:String(s)})}}async function wi(n,e,t,r,s={}){const i=await un(n,e,t,r,s);return"mfaPendingCredential"in i&&Pt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Vd(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?XB(n.config,s):`${n.config.apiScheme}://${s}`;return iE.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function aE(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class BE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),oE.get())})}}function to(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Gt(n,e,r);return s.customData._tokenResponse=t,s}function El(n){return n!==void 0&&n.enterprise!==void 0}class uE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return aE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function cE(n,e){return un(n,"GET","/v2/recaptchaConfig",Jn(n,e))}/**
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
 */async function lE(n,e){return un(n,"POST","/v1/accounts:delete",e)}async function Oo(n,e){return un(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Js(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hE(n,e=!1){const t=Oe(n),r=await t.getIdToken(e),s=ZB(r);re(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Js(Xa(s.auth_time)),issuedAtTime:Js(Xa(s.iat)),expirationTime:Js(Xa(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xa(n){return Number(n)*1e3}function ZB(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const s=_d(t);return s?JSON.parse(s):(_o("Failed to decode base64 JWT payload"),null)}catch(s){return _o("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function _l(n){const e=ZB(n);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Qt&&dE(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function dE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class fE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class DB{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function No(n){var f;const e=n.auth,t=await n.getIdToken(),r=await Wr(n,Oo(e,{idToken:t}));re(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?Md(s.providerUserInfo):[],o=pE(n.providerData,i),B=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),c=B?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new DB(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function CE(n){const e=Oe(n);await No(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pE(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Md(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function gE(n,e){const t=await xd(n,{},async()=>{const r=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await Vd(n,s,"/v1/token",`key=${i}`),B=await n._getAdditionalHeaders();B["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:B,body:r};return n.emulatorConfig&&Er(n.emulatorConfig.host)&&(u.credentials="include"),kd.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function mE(n,e){return un(n,"POST","/v2/accounts:revokeToken",Jn(n,e))}/**
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
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_l(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){re(e.length!==0,"internal-error");const t=_l(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await gE(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Jr;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
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
 */function pn(n,e){re(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class vt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new fE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new DB(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Wr(this,this.stsTokenManager.getToken(this.auth,e));return re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return hE(this,e)}reload(){return CE(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await No(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(tn(this.auth));const e=await this.getIdToken();return await Wr(this,lE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,B=t.tenantId??void 0,u=t._redirectEventId??void 0,c=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:f,emailVerified:p,isAnonymous:y,providerData:R,stsTokenManager:F}=t;re(f&&F,e,"internal-error");const M=Jr.fromJSON(this.name,F);re(typeof f=="string",e,"internal-error"),pn(r,e.name),pn(s,e.name),re(typeof p=="boolean",e,"internal-error"),re(typeof y=="boolean",e,"internal-error"),pn(i,e.name),pn(o,e.name),pn(B,e.name),pn(u,e.name),pn(c,e.name),pn(h,e.name);const j=new vt({uid:f,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:B,stsTokenManager:M,createdAt:c,lastLoginAt:h});return R&&Array.isArray(R)&&(j.providerData=R.map(ne=>({...ne}))),u&&(j._redirectEventId=u),j}static async _fromIdTokenResponse(e,t,r=!1){const s=new Jr;s.updateFromServerResponse(t);const i=new vt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await No(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Md(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),B=new Jr;B.updateFromIdToken(r);const u=new vt({uid:s.localId,auth:e,stsTokenManager:B,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new DB(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
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
 */const Dl=new Map;function Zt(n){on(n instanceof Function,"Expected a class definition");let e=Dl.get(n);return e?(on(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Dl.set(n,e),e)}/**
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
 */class Gd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Gd.type="NONE";const yl=Gd;/**
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
 */function Do(n,e,t){return`firebase:${n}:${e}:${t}`}class qr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Do(this.userKey,s.apiKey,i),this.fullPersistenceKey=Do("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Oo(this.auth,{idToken:e}).catch(()=>{});return t?vt._fromGetAccountInfoResponse(this.auth,t,e):null}return vt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new qr(Zt(yl),e,r);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Zt(yl);const o=Do(r,e.config.apiKey,e.name);let B=null;for(const c of t)try{const h=await c._get(o);if(h){let f;if(typeof h=="string"){const p=await Oo(e,{idToken:h}).catch(()=>{});if(!p)break;f=await vt._fromGetAccountInfoResponse(e,p,h)}else f=vt._fromJSON(e,h);c!==i&&(B=f),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new qr(i,e,r):(i=u[0],B&&await i._set(o,B.toJSON()),await Promise.all(t.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new qr(i,e,r))}}/**
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
 */function Il(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ud(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kd(e))return"Blackberry";if(zd(e))return"Webos";if(Hd(e))return"Safari";if((e.includes("chrome/")||Jd(e))&&!e.includes("edge/"))return"Chrome";if(jd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ud(n=Xe()){return/firefox\//i.test(n)}function Hd(n=Xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jd(n=Xe()){return/crios\//i.test(n)}function qd(n=Xe()){return/iemobile/i.test(n)}function jd(n=Xe()){return/android/i.test(n)}function Kd(n=Xe()){return/blackberry/i.test(n)}function zd(n=Xe()){return/webos/i.test(n)}function eu(n=Xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function EE(n=Xe()){var e;return eu(n)&&!!((e=window.navigator)!=null&&e.standalone)}function _E(){return kg()&&document.documentMode===10}function Qd(n=Xe()){return eu(n)||jd(n)||zd(n)||Kd(n)||/windows phone/i.test(n)||qd(n)}/**
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
 */function Wd(n,e=[]){let t;switch(n){case"Browser":t=Il(Xe());break;case"Worker":t=`${Il(Xe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_r}/${r}`}/**
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
 */class DE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,B)=>{try{const u=e(i);o(u)}catch(u){B(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function yE(n,e={}){return un(n,"GET","/v2/passwordPolicy",Jn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const IE=6;class wE{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??IE,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class TE{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wl(this),this.idTokenSubscription=new wl(this),this.beforeStateQueue=new DE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Zt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await qr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Oo(this,{idToken:e}),r=await vt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(B=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(B,B))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,B=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===B)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await No(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(tn(this));const t=e?Oe(e):null;return t&&re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yE(this),t=new wE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Di("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await mE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Zt(e)||this._popupRedirectResolver;re(t,this,"argument-error"),this.redirectPersistenceManager=await qr.create(this,[Zt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const B=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(B,this,"internal-error"),B.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Ld(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Dr(n){return Oe(n)}class wl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jg(t=>this.observer=t)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ea={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AE(n){ea=n}function $d(n){return ea.loadJS(n)}function RE(){return ea.recaptchaEnterpriseScript}function vE(){return ea.gapiScript}function bE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class PE{constructor(){this.enterprise=new SE}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class SE{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}/**
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
 */const OE="recaptcha-enterprise",Yd="NO_RECAPTCHA",Tl="onFirebaseAuthREInstanceReady";class _n{constructor(e){this.type=OE,this.auth=Dr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,B)=>{cE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)B(new Error("recaptcha Enterprise site key undefined"));else{const c=new uE(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{B(u)})})}function s(i,o,B){const u=window.grecaptcha;El(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Yd)})}):B(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new PE().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(async B=>{if(!t&&El(window.grecaptcha)&&_n.scriptInjectionDeferred)await _n.scriptInjectionDeferred.promise,s(B,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=RE();u.length!==0&&(u+=B+`&onload=${Tl}`),_n.scriptInjectionDeferred=new Td,window[Tl]=()=>{var c;(c=_n.scriptInjectionDeferred)==null||c.resolve()},$d(u).then(()=>{var c;return(c=_n.scriptInjectionDeferred)==null?void 0:c.promise}).then(()=>{s(B,i,o)}).catch(c=>{o(c)})}}).catch(B=>{o(B)})})}}_n.scriptInjectionDeferred=null;async function Al(n,e,t,r=!1,s=!1){const i=new _n(n);let o;if(s)o=Yd;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const B={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in B){const u=B.phoneEnrollmentInfo.phoneNumber,c=B.phoneEnrollmentInfo.recaptchaToken;Object.assign(B,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in B){const u=B.phoneSignInInfo.recaptchaToken;Object.assign(B,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return B}return r?Object.assign(B,{captchaResp:o}):Object.assign(B,{captchaResponse:o}),Object.assign(B,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(B,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),B}async function yB(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Al(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const B=await Al(n,e,t,t==="getOobCode");return r(n,B)}else return Promise.reject(o)})}/**
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
 */function NE(n,e){const t=Zo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(lr(i,e??{}))return s;Pt(s,"already-initialized")}return t.initialize({options:e})}function LE(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Zt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function FE(n,e,t){const r=Dr(n);re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Xd(e),{host:o,port:B}=kE(e),u=B===null?"":`:${B}`,c={url:`${i}//${o}${u}/`},h=Object.freeze({host:o,port:B,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){re(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),re(lr(c,r.config.emulator)&&lr(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Er(o)?zB(`${i}//${o}${u}`):xE()}function Xd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function kE(n){const e=Xd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Rl(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Rl(o)}}}function Rl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function xE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class tu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,t){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}async function VE(n,e){return un(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ME(n,e){return wi(n,"POST","/v1/accounts:signInWithPassword",Jn(n,e))}/**
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
 */async function GE(n,e){return wi(n,"POST","/v1/accounts:signInWithEmailLink",Jn(n,e))}async function UE(n,e){return wi(n,"POST","/v1/accounts:signInWithEmailLink",Jn(n,e))}/**
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
 */class ei extends tu{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ei(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ei(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yB(e,t,"signInWithPassword",ME);case"emailLink":return GE(e,{email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yB(e,r,"signUpPassword",VE);case"emailLink":return UE(e,{idToken:t,email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function jr(n,e){return wi(n,"POST","/v1/accounts:signInWithIdp",Jn(n,e))}/**
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
 */const HE="http://localhost";class dr extends tu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Pt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new dr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return jr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,jr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jr(e,t)}buildRequest(){const e={requestUri:HE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yi(t)}return e}}/**
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
 */function JE(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qE(n){const e=ks(xs(n)).link,t=e?ks(xs(e)).deep_link_id:null,r=ks(xs(n)).deep_link_id;return(r?ks(xs(r)).link:null)||r||t||e||n}class nu{constructor(e){const t=ks(xs(e)),r=t.apiKey??null,s=t.oobCode??null,i=JE(t.mode??null);re(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=qE(e);try{return new nu(t)}catch{return null}}}/**
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
 */class is{constructor(){this.providerId=is.PROVIDER_ID}static credential(e,t){return ei._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=nu.parseLink(t);return re(r,"argument-error"),ei._fromEmailAndCode(e,r.code,r.tenantId)}}is.PROVIDER_ID="password";is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Zd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ti extends Zd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dn extends Ti{constructor(){super("facebook.com")}static credential(e){return dr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
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
 */class yn extends Ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return dr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return yn.credential(t,r)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
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
 */class In extends Ti{constructor(){super("github.com")}static credential(e){return dr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
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
 */class wn extends Ti{constructor(){super("twitter.com")}static credential(e,t){return dr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return wn.credential(t,r)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
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
 */async function jE(n,e){return wi(n,"POST","/v1/accounts:signUp",Jn(n,e))}/**
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
 */class fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await vt._fromIdTokenResponse(e,r,s),o=vl(r);return new fr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=vl(r);return new fr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function vl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Lo extends Qt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Lo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Lo(e,t,r,s)}}function ef(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Lo._fromErrorAndOperation(n,i,e,r):i})}async function KE(n,e,t=!1){const r=await Wr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return fr._forOperation(n,"link",r)}/**
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
 */async function zE(n,e,t=!1){const{auth:r}=n;if(mt(r.app))return Promise.reject(tn(r));const s="reauthenticate";try{const i=await Wr(n,ef(r,s,e,n),t);re(i.idToken,r,"internal-error");const o=ZB(i.idToken);re(o,r,"internal-error");const{sub:B}=o;return re(n.uid===B,r,"user-mismatch"),fr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Pt(r,"user-mismatch"),i}}/**
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
 */async function tf(n,e,t=!1){if(mt(n.app))return Promise.reject(tn(n));const r="signIn",s=await ef(n,r,e),i=await fr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function QE(n,e){return tf(Dr(n),e)}/**
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
 */async function nf(n){const e=Dr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function WE(n,e,t){if(mt(n.app))return Promise.reject(tn(n));const r=Dr(n),o=await yB(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jE).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&nf(n),u}),B=await fr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(B.user),B}function bl(n,e,t){return mt(n.app)?Promise.reject(tn(n)):QE(Oe(n),is.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&nf(n),r})}/**
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
 */async function $E(n,e){return un(n,"POST","/v1/accounts:update",e)}/**
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
 */async function YE(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Oe(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Wr(r,$E(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const B=r.providerData.find(({providerId:u})=>u==="password");B&&(B.displayName=r.displayName,B.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function XE(n,e,t,r){return Oe(n).onIdTokenChanged(e,t,r)}function ZE(n,e,t){return Oe(n).beforeAuthStateChanged(e,t)}function e_(n,e,t,r){return Oe(n).onAuthStateChanged(e,t,r)}function t_(n){return Oe(n).signOut()}const Fo="__sak";/**
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
 */class rf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Fo,"1"),this.storage.removeItem(Fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const n_=1e3,r_=10;class sf extends rf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,B,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);_E()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,r_):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},n_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sf.type="LOCAL";const s_=sf;/**
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
 */class of extends rf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}of.type="SESSION";const af=of;/**
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
 */function i_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ta(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const B=Array.from(o).map(async c=>c(t.origin,i)),u=await i_(B);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ta.receivers=[];/**
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
 */function ru(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class o_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((B,u)=>{const c=ru("",20);s.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),B(p.data.response);break;default:clearTimeout(h),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ut(){return window}function a_(n){Ut().location.href=n}/**
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
 */function Bf(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function B_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function u_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function c_(){return Bf()?self:null}/**
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
 */const uf="firebaseLocalStorageDb",l_=1,ko="firebaseLocalStorage",cf="fbase_key";class Ai{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function na(n,e){return n.transaction([ko],e?"readwrite":"readonly").objectStore(ko)}function h_(){const n=indexedDB.deleteDatabase(uf);return new Ai(n).toPromise()}function lf(){const n=indexedDB.open(uf,l_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ko,{keyPath:cf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ko)?e(r):(r.close(),await h_(),e(await lf()))})})}async function Pl(n,e,t){const r=na(n,!0).put({[cf]:e,value:t});return new Ai(r).toPromise()}async function d_(n,e){const t=na(n,!1).get(e),r=await new Ai(t).toPromise();return r===void 0?null:r.value}function Sl(n,e){const t=na(n,!0).delete(e);return new Ai(t).toPromise()}const f_=800,C_=3;class hf{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isClosing)throw new Error("Database is closing");return this.dbPromise?this.dbPromise:(this.dbPromise=lf(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(this.isClosing||t++>C_)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Bf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ta._getInstance(c_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await B_(),!this.activeServiceWorker)return;this.sender=new o_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||u_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Pl(e,Fo,"1"),await Sl(e,Fo)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>d_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Sl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(s=>{const i=na(s,!1).getAll();return new Ai(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isClosing||Ld(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),f_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}hf.type="LOCAL";const p_=hf;new Ii(3e4,6e4);/**
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
 */function g_(n,e){return e?Zt(e):(re(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class su extends tu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function m_(n){return tf(n.auth,new su(n),n.bypassAuthState)}function E_(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),zE(t,new su(n),n.bypassAuthState)}async function __(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),KE(t,new su(n),n.bypassAuthState)}/**
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
 */class df{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:B}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(B)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return m_;case"linkViaPopup":case"linkViaRedirect":return __;case"reauthViaPopup":case"reauthViaRedirect":return E_;default:Pt(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const D_=new Ii(2e3,1e4);class Ur extends df{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ur.currentPopupAction&&Ur.currentPopupAction.cancel(),Ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,D_.get())};e()}}Ur.currentPopupAction=null;/**
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
 */const y_="pendingRedirect",yo=new Map;class I_ extends df{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=yo.get(this.auth._key());if(!e){try{const r=await w_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}yo.set(this.auth._key(),e)}return this.bypassAuthState||yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function w_(n,e){const t=R_(e),r=A_(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function T_(n,e){yo.set(n._key(),e)}function A_(n){return Zt(n._redirectPersistence)}function R_(n){return Do(y_,n.config.apiKey,n.name)}async function v_(n,e,t=!1){if(mt(n.app))return Promise.reject(tn(n));const r=Dr(n),s=g_(r,e),o=await new I_(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const b_=10*60*1e3;class P_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!S_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ff(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Gt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=b_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ol(e))}saveEventToCache(e){this.cachedEventUids.add(Ol(e)),this.lastProcessedEventTime=Date.now()}}function Ol(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ff({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function S_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ff(n);default:return!1}}/**
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
 */async function O_(n,e={}){return un(n,"GET","/v1/projects",e)}/**
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
 */const N_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,L_=/^https?/;async function F_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await O_(n);for(const t of e)try{if(k_(t))return}catch{}Pt(n,"unauthorized-domain")}function k_(n){const e=_B(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!L_.test(t))return!1;if(N_.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const x_=new Ii(3e4,6e4);function Nl(){const n=Ut().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function V_(n){return new Promise((e,t)=>{var s,i,o;function r(){Nl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nl(),t(Gt(n,"network-request-failed"))},timeout:x_.get()})}if((i=(s=Ut().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Ut().gapi)!=null&&o.load)r();else{const B=bE("iframefcb");return Ut()[B]=()=>{gapi.load?r():t(Gt(n,"network-request-failed"))},$d(`${vE()}?onload=${B}`).catch(u=>t(u))}}).catch(e=>{throw Io=null,e})}let Io=null;function M_(n){return Io=Io||V_(n),Io}/**
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
 */const G_=new Ii(5e3,15e3),U_="__/auth/iframe",H_="emulator/auth/iframe",J_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},q_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function j_(n){const e=n.config;re(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?XB(e,H_):`https://${n.config.authDomain}/${U_}`,r={apiKey:e.apiKey,appName:n.name,v:_r},s=q_.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${yi(r).slice(1)}`}async function K_(n){const e=await M_(n),t=Ut().gapi;return re(t,n,"internal-error"),e.open({where:document.body,url:j_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:J_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(n,"network-request-failed"),B=Ut().setTimeout(()=>{i(o)},G_.get());function u(){Ut().clearTimeout(B),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const z_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Q_=500,W_=600,$_="_blank",Y_="http://localhost";class Ll{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function X_(n,e,t,r=Q_,s=W_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let B="";const u={...z_,width:r.toString(),height:s.toString(),top:i,left:o},c=Xe().toLowerCase();t&&(B=Jd(c)?$_:t),Ud(c)&&(e=e||Y_,u.scrollbars="yes");const h=Object.entries(u).reduce((p,[y,R])=>`${p}${y}=${R},`,"");if(EE(c)&&B!=="_self")return Z_(e||"",B),new Ll(null);const f=window.open(e||"",B,h);re(f,n,"popup-blocked");try{f.focus()}catch{}return new Ll(f)}function Z_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const eD="__/auth/handler",tD="emulator/auth/handler",nD=encodeURIComponent("fac");async function Fl(n,e,t,r,s,i){re(n.config.authDomain,n,"auth-domain-config-required"),re(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:_r,eventId:s};if(e instanceof Zd){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Hg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Ti){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const B=o;for(const h of Object.keys(B))B[h]===void 0&&delete B[h];const u=await n._getAppCheckToken(),c=u?`#${nD}=${encodeURIComponent(u)}`:"";return`${rD(n)}?${yi(B).slice(1)}${c}`}function rD({config:n}){return n.emulator?XB(n,tD):`https://${n.authDomain}/${eD}`}/**
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
 */const Za="webStorageSupport";class sD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=af,this._completeRedirectFn=v_,this._overrideRedirectResult=T_}async _openPopup(e,t,r,s){var o;on((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Fl(e,t,r,_B(),s);return X_(e,i,ru())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Fl(e,t,r,_B(),s);return a_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(on(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await K_(e),r=new P_(e);return t.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Za,{type:Za},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Za];i!==void 0&&t(!!i),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=F_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qd()||Hd()||eu()}}const iD=sD;var kl="@firebase/auth",xl="1.13.5";/**
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
 */class oD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aD(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BD(n){hr(new Nn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:B}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:B,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wd(n)},c=new TE(r,s,i,u);return LE(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),hr(new Nn("auth-internal",e=>{const t=Dr(e.getProvider("auth").getImmediate());return(r=>new oD(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(kl,xl,aD(n)),Mt(kl,xl,"esm2020")}/**
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
 */const uD=5*60,cD=wd("authIdTokenMaxAge")||uD;let Vl=null;const lD=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>cD)return;const s=t==null?void 0:t.token;Vl!==s&&(Vl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hD(n=$B()){const e=Zo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=NE(n,{popupRedirectResolver:iD,persistence:[p_,s_,af]}),r=wd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=lD(i.toString());ZE(t,o,()=>o(t.currentUser)),XE(t,B=>o(B))}}const s=Dd("auth");return s&&FE(t,`http://${s}`),t}function dD(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}AE({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Gt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",dD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BD("Browser");var fD="firebase",CD="12.18.0";/**
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
 */Mt(fD,CD,"app");var Ml=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bn,Cf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,E){function D(){}D.prototype=E.prototype,A.F=E.prototype,A.prototype=new D,A.prototype.constructor=A,A.D=function(v,T,P){for(var _=Array(arguments.length-2),st=2;st<arguments.length;st++)_[st-2]=arguments[st];return E.prototype[T].apply(v,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,E,D){D||(D=0);const v=Array(16);if(typeof E=="string")for(var T=0;T<16;++T)v[T]=E.charCodeAt(D++)|E.charCodeAt(D++)<<8|E.charCodeAt(D++)<<16|E.charCodeAt(D++)<<24;else for(T=0;T<16;++T)v[T]=E[D++]|E[D++]<<8|E[D++]<<16|E[D++]<<24;E=A.g[0],D=A.g[1],T=A.g[2];let P=A.g[3],_;_=E+(P^D&(T^P))+v[0]+3614090360&4294967295,E=D+(_<<7&4294967295|_>>>25),_=P+(T^E&(D^T))+v[1]+3905402710&4294967295,P=E+(_<<12&4294967295|_>>>20),_=T+(D^P&(E^D))+v[2]+606105819&4294967295,T=P+(_<<17&4294967295|_>>>15),_=D+(E^T&(P^E))+v[3]+3250441966&4294967295,D=T+(_<<22&4294967295|_>>>10),_=E+(P^D&(T^P))+v[4]+4118548399&4294967295,E=D+(_<<7&4294967295|_>>>25),_=P+(T^E&(D^T))+v[5]+1200080426&4294967295,P=E+(_<<12&4294967295|_>>>20),_=T+(D^P&(E^D))+v[6]+2821735955&4294967295,T=P+(_<<17&4294967295|_>>>15),_=D+(E^T&(P^E))+v[7]+4249261313&4294967295,D=T+(_<<22&4294967295|_>>>10),_=E+(P^D&(T^P))+v[8]+1770035416&4294967295,E=D+(_<<7&4294967295|_>>>25),_=P+(T^E&(D^T))+v[9]+2336552879&4294967295,P=E+(_<<12&4294967295|_>>>20),_=T+(D^P&(E^D))+v[10]+4294925233&4294967295,T=P+(_<<17&4294967295|_>>>15),_=D+(E^T&(P^E))+v[11]+2304563134&4294967295,D=T+(_<<22&4294967295|_>>>10),_=E+(P^D&(T^P))+v[12]+1804603682&4294967295,E=D+(_<<7&4294967295|_>>>25),_=P+(T^E&(D^T))+v[13]+4254626195&4294967295,P=E+(_<<12&4294967295|_>>>20),_=T+(D^P&(E^D))+v[14]+2792965006&4294967295,T=P+(_<<17&4294967295|_>>>15),_=D+(E^T&(P^E))+v[15]+1236535329&4294967295,D=T+(_<<22&4294967295|_>>>10),_=E+(T^P&(D^T))+v[1]+4129170786&4294967295,E=D+(_<<5&4294967295|_>>>27),_=P+(D^T&(E^D))+v[6]+3225465664&4294967295,P=E+(_<<9&4294967295|_>>>23),_=T+(E^D&(P^E))+v[11]+643717713&4294967295,T=P+(_<<14&4294967295|_>>>18),_=D+(P^E&(T^P))+v[0]+3921069994&4294967295,D=T+(_<<20&4294967295|_>>>12),_=E+(T^P&(D^T))+v[5]+3593408605&4294967295,E=D+(_<<5&4294967295|_>>>27),_=P+(D^T&(E^D))+v[10]+38016083&4294967295,P=E+(_<<9&4294967295|_>>>23),_=T+(E^D&(P^E))+v[15]+3634488961&4294967295,T=P+(_<<14&4294967295|_>>>18),_=D+(P^E&(T^P))+v[4]+3889429448&4294967295,D=T+(_<<20&4294967295|_>>>12),_=E+(T^P&(D^T))+v[9]+568446438&4294967295,E=D+(_<<5&4294967295|_>>>27),_=P+(D^T&(E^D))+v[14]+3275163606&4294967295,P=E+(_<<9&4294967295|_>>>23),_=T+(E^D&(P^E))+v[3]+4107603335&4294967295,T=P+(_<<14&4294967295|_>>>18),_=D+(P^E&(T^P))+v[8]+1163531501&4294967295,D=T+(_<<20&4294967295|_>>>12),_=E+(T^P&(D^T))+v[13]+2850285829&4294967295,E=D+(_<<5&4294967295|_>>>27),_=P+(D^T&(E^D))+v[2]+4243563512&4294967295,P=E+(_<<9&4294967295|_>>>23),_=T+(E^D&(P^E))+v[7]+1735328473&4294967295,T=P+(_<<14&4294967295|_>>>18),_=D+(P^E&(T^P))+v[12]+2368359562&4294967295,D=T+(_<<20&4294967295|_>>>12),_=E+(D^T^P)+v[5]+4294588738&4294967295,E=D+(_<<4&4294967295|_>>>28),_=P+(E^D^T)+v[8]+2272392833&4294967295,P=E+(_<<11&4294967295|_>>>21),_=T+(P^E^D)+v[11]+1839030562&4294967295,T=P+(_<<16&4294967295|_>>>16),_=D+(T^P^E)+v[14]+4259657740&4294967295,D=T+(_<<23&4294967295|_>>>9),_=E+(D^T^P)+v[1]+2763975236&4294967295,E=D+(_<<4&4294967295|_>>>28),_=P+(E^D^T)+v[4]+1272893353&4294967295,P=E+(_<<11&4294967295|_>>>21),_=T+(P^E^D)+v[7]+4139469664&4294967295,T=P+(_<<16&4294967295|_>>>16),_=D+(T^P^E)+v[10]+3200236656&4294967295,D=T+(_<<23&4294967295|_>>>9),_=E+(D^T^P)+v[13]+681279174&4294967295,E=D+(_<<4&4294967295|_>>>28),_=P+(E^D^T)+v[0]+3936430074&4294967295,P=E+(_<<11&4294967295|_>>>21),_=T+(P^E^D)+v[3]+3572445317&4294967295,T=P+(_<<16&4294967295|_>>>16),_=D+(T^P^E)+v[6]+76029189&4294967295,D=T+(_<<23&4294967295|_>>>9),_=E+(D^T^P)+v[9]+3654602809&4294967295,E=D+(_<<4&4294967295|_>>>28),_=P+(E^D^T)+v[12]+3873151461&4294967295,P=E+(_<<11&4294967295|_>>>21),_=T+(P^E^D)+v[15]+530742520&4294967295,T=P+(_<<16&4294967295|_>>>16),_=D+(T^P^E)+v[2]+3299628645&4294967295,D=T+(_<<23&4294967295|_>>>9),_=E+(T^(D|~P))+v[0]+4096336452&4294967295,E=D+(_<<6&4294967295|_>>>26),_=P+(D^(E|~T))+v[7]+1126891415&4294967295,P=E+(_<<10&4294967295|_>>>22),_=T+(E^(P|~D))+v[14]+2878612391&4294967295,T=P+(_<<15&4294967295|_>>>17),_=D+(P^(T|~E))+v[5]+4237533241&4294967295,D=T+(_<<21&4294967295|_>>>11),_=E+(T^(D|~P))+v[12]+1700485571&4294967295,E=D+(_<<6&4294967295|_>>>26),_=P+(D^(E|~T))+v[3]+2399980690&4294967295,P=E+(_<<10&4294967295|_>>>22),_=T+(E^(P|~D))+v[10]+4293915773&4294967295,T=P+(_<<15&4294967295|_>>>17),_=D+(P^(T|~E))+v[1]+2240044497&4294967295,D=T+(_<<21&4294967295|_>>>11),_=E+(T^(D|~P))+v[8]+1873313359&4294967295,E=D+(_<<6&4294967295|_>>>26),_=P+(D^(E|~T))+v[15]+4264355552&4294967295,P=E+(_<<10&4294967295|_>>>22),_=T+(E^(P|~D))+v[6]+2734768916&4294967295,T=P+(_<<15&4294967295|_>>>17),_=D+(P^(T|~E))+v[13]+1309151649&4294967295,D=T+(_<<21&4294967295|_>>>11),_=E+(T^(D|~P))+v[4]+4149444226&4294967295,E=D+(_<<6&4294967295|_>>>26),_=P+(D^(E|~T))+v[11]+3174756917&4294967295,P=E+(_<<10&4294967295|_>>>22),_=T+(E^(P|~D))+v[2]+718787259&4294967295,T=P+(_<<15&4294967295|_>>>17),_=D+(P^(T|~E))+v[9]+3951481745&4294967295,A.g[0]=A.g[0]+E&4294967295,A.g[1]=A.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,A.g[2]=A.g[2]+T&4294967295,A.g[3]=A.g[3]+P&4294967295}r.prototype.v=function(A,E){E===void 0&&(E=A.length);const D=E-this.blockSize,v=this.C;let T=this.h,P=0;for(;P<E;){if(T==0)for(;P<=D;)s(this,A,P),P+=this.blockSize;if(typeof A=="string"){for(;P<E;)if(v[T++]=A.charCodeAt(P++),T==this.blockSize){s(this,v),T=0;break}}else for(;P<E;)if(v[T++]=A[P++],T==this.blockSize){s(this,v),T=0;break}}this.h=T,this.o+=E},r.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var E=1;E<A.length-8;++E)A[E]=0;E=this.o*8;for(var D=A.length-8;D<A.length;++D)A[D]=E&255,E/=256;for(this.v(A),A=Array(16),E=0,D=0;D<4;++D)for(let v=0;v<32;v+=8)A[E++]=this.g[D]>>>v&255;return A};function i(A,E){var D=B;return Object.prototype.hasOwnProperty.call(D,A)?D[A]:D[A]=E(A)}function o(A,E){this.h=E;const D=[];let v=!0;for(let T=A.length-1;T>=0;T--){const P=A[T]|0;v&&P==E||(D[T]=P,v=!1)}this.g=D}var B={};function u(A){return-128<=A&&A<128?i(A,function(E){return new o([E|0],E<0?-1:0)}):new o([A|0],A<0?-1:0)}function c(A){if(isNaN(A)||!isFinite(A))return f;if(A<0)return M(c(-A));const E=[];let D=1;for(let v=0;A>=D;v++)E[v]=A/D|0,D*=4294967296;return new o(E,0)}function h(A,E){if(A.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(A.charAt(0)=="-")return M(h(A.substring(1),E));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const D=c(Math.pow(E,8));let v=f;for(let P=0;P<A.length;P+=8){var T=Math.min(8,A.length-P);const _=parseInt(A.substring(P,P+T),E);T<8?(T=c(Math.pow(E,T)),v=v.j(T).add(c(_))):(v=v.j(D),v=v.add(c(_)))}return v}var f=u(0),p=u(1),y=u(16777216);n=o.prototype,n.m=function(){if(F(this))return-M(this).m();let A=0,E=1;for(let D=0;D<this.g.length;D++){const v=this.i(D);A+=(v>=0?v:4294967296+v)*E,E*=4294967296}return A},n.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(R(this))return"0";if(F(this))return"-"+M(this).toString(A);const E=c(Math.pow(A,6));var D=this;let v="";for(;;){const T=ce(D,E).g;D=j(D,T.j(E));let P=((D.g.length>0?D.g[0]:D.h)>>>0).toString(A);if(D=T,R(D))return P+v;for(;P.length<6;)P="0"+P;v=P+v}},n.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function R(A){if(A.h!=0)return!1;for(let E=0;E<A.g.length;E++)if(A.g[E]!=0)return!1;return!0}function F(A){return A.h==-1}n.l=function(A){return A=j(this,A),F(A)?-1:R(A)?0:1};function M(A){const E=A.g.length,D=[];for(let v=0;v<E;v++)D[v]=~A.g[v];return new o(D,~A.h).add(p)}n.abs=function(){return F(this)?M(this):this},n.add=function(A){const E=Math.max(this.g.length,A.g.length),D=[];let v=0;for(let T=0;T<=E;T++){let P=v+(this.i(T)&65535)+(A.i(T)&65535),_=(P>>>16)+(this.i(T)>>>16)+(A.i(T)>>>16);v=_>>>16,P&=65535,_&=65535,D[T]=_<<16|P}return new o(D,D[D.length-1]&-2147483648?-1:0)};function j(A,E){return A.add(M(E))}n.j=function(A){if(R(this)||R(A))return f;if(F(this))return F(A)?M(this).j(M(A)):M(M(this).j(A));if(F(A))return M(this.j(M(A)));if(this.l(y)<0&&A.l(y)<0)return c(this.m()*A.m());const E=this.g.length+A.g.length,D=[];for(var v=0;v<2*E;v++)D[v]=0;for(v=0;v<this.g.length;v++)for(let T=0;T<A.g.length;T++){const P=this.i(v)>>>16,_=this.i(v)&65535,st=A.i(T)>>>16,jn=A.i(T)&65535;D[2*v+2*T]+=_*jn,ne(D,2*v+2*T),D[2*v+2*T+1]+=P*jn,ne(D,2*v+2*T+1),D[2*v+2*T+1]+=_*st,ne(D,2*v+2*T+1),D[2*v+2*T+2]+=P*st,ne(D,2*v+2*T+2)}for(A=0;A<E;A++)D[A]=D[2*A+1]<<16|D[2*A];for(A=E;A<2*E;A++)D[A]=0;return new o(D,0)};function ne(A,E){for(;(A[E]&65535)!=A[E];)A[E+1]+=A[E]>>>16,A[E]&=65535,E++}function oe(A,E){this.g=A,this.h=E}function ce(A,E){if(R(E))throw Error("division by zero");if(R(A))return new oe(f,f);if(F(A))return E=ce(M(A),E),new oe(M(E.g),M(E.h));if(F(E))return E=ce(A,M(E)),new oe(M(E.g),E.h);if(A.g.length>30){if(F(A)||F(E))throw Error("slowDivide_ only works with positive integers.");for(var D=p,v=E;v.l(A)<=0;)D=ye(D),v=ye(v);var T=ge(D,1),P=ge(v,1);for(v=ge(v,2),D=ge(D,2);!R(v);){var _=P.add(v);_.l(A)<=0&&(T=T.add(D),P=_),v=ge(v,1),D=ge(D,1)}return E=j(A,T.j(E)),new oe(T,E)}for(T=f;A.l(E)>=0;){for(D=Math.max(1,Math.floor(A.m()/E.m())),v=Math.ceil(Math.log(D)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),P=c(D),_=P.j(E);F(_)||_.l(A)>0;)D-=v,P=c(D),_=P.j(E);R(P)&&(P=p),T=T.add(P),A=j(A,_)}return new oe(T,A)}n.B=function(A){return ce(this,A).h},n.and=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let v=0;v<E;v++)D[v]=this.i(v)&A.i(v);return new o(D,this.h&A.h)},n.or=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let v=0;v<E;v++)D[v]=this.i(v)|A.i(v);return new o(D,this.h|A.h)},n.xor=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let v=0;v<E;v++)D[v]=this.i(v)^A.i(v);return new o(D,this.h^A.h)};function ye(A){const E=A.g.length+1,D=[];for(let v=0;v<E;v++)D[v]=A.i(v)<<1|A.i(v-1)>>>31;return new o(D,A.h)}function ge(A,E){const D=E>>5;E%=32;const v=A.g.length-D,T=[];for(let P=0;P<v;P++)T[P]=E>0?A.i(P+D)>>>E|A.i(P+D+1)<<32-E:A.i(P+D);return new o(T,A.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Cf=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,bn=o}).apply(typeof Ml<"u"?Ml:typeof self<"u"?self:typeof window<"u"?window:{});var no=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pf,Vs,gf,wo,IB,mf,Ef,_f;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof no=="object"&&no];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(a,l){if(l)e:{var d=r;a=a.split(".");for(var C=0;C<a.length-1;C++){var b=a[C];if(!(b in d))break e;d=d[b]}a=a[a.length-1],C=d[a],l=l(C),l!=C&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(l){var d=[],C;for(C in l)Object.prototype.hasOwnProperty.call(l,C)&&d.push([C,l[C]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function B(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function u(a,l,d){return a.call.apply(a.bind,arguments)}function c(a,l,d){return c=u,c.apply(null,arguments)}function h(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var C=d.slice();return C.push.apply(C,arguments),a.apply(this,C)}}function f(a,l){function d(){}d.prototype=l.prototype,a.Z=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(C,b,S){for(var q=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)q[ae-2]=arguments[ae];return l.prototype[b].apply(C,q)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const l=a.length;if(l>0){const d=Array(l);for(let C=0;C<l;C++)d[C]=a[C];return d}return[]}function R(a,l){for(let C=1;C<arguments.length;C++){const b=arguments[C];var d=typeof b;if(d=d!="object"?d:b?Array.isArray(b)?"array":d:"null",d=="array"||d=="object"&&typeof b.length=="number"){d=a.length||0;const S=b.length||0;a.length=d+S;for(let q=0;q<S;q++)a[d+q]=b[q]}else a.push(b)}}class F{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function M(a){o.setTimeout(()=>{throw a},0)}function j(){var a=A;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class ne{constructor(){this.h=this.g=null}add(l,d){const C=oe.get();C.set(l,d),this.h?this.h.next=C:this.g=C,this.h=C}}var oe=new F(()=>new ce,a=>a.reset());class ce{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,ge=!1,A=new ne,E=()=>{const a=Promise.resolve(void 0);ye=()=>{a.then(D)}};function D(){for(var a;a=j();){try{a.h.call(a.g)}catch(d){M(d)}var l=oe;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}ge=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,l),o.removeEventListener("test",d,l)}catch{}return a}();function _(a){return/^[\s\xa0]*$/.test(a)}function st(a,l){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}f(st,T),st.prototype.init=function(a,l){const d=this.type=a.type,C=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&st.Z.h.call(this)},st.prototype.h=function(){st.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var jn="closure_listenable_"+(Math.random()*1e6|0),Jp=0;function qp(a,l,d,C,b){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!C,this.ha=b,this.key=++Jp,this.da=this.fa=!1}function Gi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ui(a,l,d){for(const C in a)l.call(d,a[C],C,a)}function jp(a,l){for(const d in a)l.call(void 0,a[d],d,a)}function oc(a){const l={};for(const d in a)l[d]=a[d];return l}const ac="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bc(a,l){let d,C;for(let b=1;b<arguments.length;b++){C=arguments[b];for(d in C)a[d]=C[d];for(let S=0;S<ac.length;S++)d=ac[S],Object.prototype.hasOwnProperty.call(C,d)&&(a[d]=C[d])}}function Hi(a){this.src=a,this.g={},this.h=0}Hi.prototype.add=function(a,l,d,C,b){const S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);const q=wa(a,l,C,b);return q>-1?(l=a[q],d||(l.fa=!1)):(l=new qp(l,this.src,S,!!C,b),l.fa=d,a.push(l)),l};function Ia(a,l){const d=l.type;if(d in a.g){var C=a.g[d],b=Array.prototype.indexOf.call(C,l,void 0),S;(S=b>=0)&&Array.prototype.splice.call(C,b,1),S&&(Gi(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function wa(a,l,d,C){for(let b=0;b<a.length;++b){const S=a[b];if(!S.da&&S.listener==l&&S.capture==!!d&&S.ha==C)return b}return-1}var Ta="closure_lm_"+(Math.random()*1e6|0),Aa={};function uc(a,l,d,C,b){if(Array.isArray(l)){for(let S=0;S<l.length;S++)uc(a,l[S],d,C,b);return null}return d=hc(d),a&&a[jn]?a.J(l,d,B(C)?!!C.capture:!1,b):Kp(a,l,d,!1,C,b)}function Kp(a,l,d,C,b,S){if(!l)throw Error("Invalid event type");const q=B(b)?!!b.capture:!!b;let ae=va(a);if(ae||(a[Ta]=ae=new Hi(a)),d=ae.add(l,d,C,q,S),d.proxy)return d;if(C=zp(),d.proxy=C,C.src=a,C.listener=d,a.addEventListener)P||(b=q),b===void 0&&(b=!1),a.addEventListener(l.toString(),C,b);else if(a.attachEvent)a.attachEvent(lc(l.toString()),C);else if(a.addListener&&a.removeListener)a.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return d}function zp(){function a(d){return l.call(a.src,a.listener,d)}const l=Qp;return a}function cc(a,l,d,C,b){if(Array.isArray(l))for(var S=0;S<l.length;S++)cc(a,l[S],d,C,b);else C=B(C)?!!C.capture:!!C,d=hc(d),a&&a[jn]?(a=a.i,S=String(l).toString(),S in a.g&&(l=a.g[S],d=wa(l,d,C,b),d>-1&&(Gi(l[d]),Array.prototype.splice.call(l,d,1),l.length==0&&(delete a.g[S],a.h--)))):a&&(a=va(a))&&(l=a.g[l.toString()],a=-1,l&&(a=wa(l,d,C,b)),(d=a>-1?l[a]:null)&&Ra(d))}function Ra(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[jn])Ia(l.i,a);else{var d=a.type,C=a.proxy;l.removeEventListener?l.removeEventListener(d,C,a.capture):l.detachEvent?l.detachEvent(lc(d),C):l.addListener&&l.removeListener&&l.removeListener(C),(d=va(l))?(Ia(d,a),d.h==0&&(d.src=null,l[Ta]=null)):Gi(a)}}}function lc(a){return a in Aa?Aa[a]:Aa[a]="on"+a}function Qp(a,l){if(a.da)a=!0;else{l=new st(l,this);const d=a.listener,C=a.ha||a.src;a.fa&&Ra(a),a=d.call(C,l)}return a}function va(a){return a=a[Ta],a instanceof Hi?a:null}var ba="__closure_events_fn_"+(Math.random()*1e9>>>0);function hc(a){return typeof a=="function"?a:(a[ba]||(a[ba]=function(l){return a.handleEvent(l)}),a[ba])}function Qe(){v.call(this),this.i=new Hi(this),this.M=this,this.G=null}f(Qe,v),Qe.prototype[jn]=!0,Qe.prototype.removeEventListener=function(a,l,d,C){cc(this,a,l,d,C)};function et(a,l){var d,C=a.G;if(C)for(d=[];C;C=C.G)d.push(C);if(a=a.M,C=l.type||l,typeof l=="string")l=new T(l,a);else if(l instanceof T)l.target=l.target||a;else{var b=l;l=new T(C,a),Bc(l,b)}b=!0;let S,q;if(d)for(q=d.length-1;q>=0;q--)S=l.g=d[q],b=Ji(S,C,!0,l)&&b;if(S=l.g=a,b=Ji(S,C,!0,l)&&b,b=Ji(S,C,!1,l)&&b,d)for(q=0;q<d.length;q++)S=l.g=d[q],b=Ji(S,C,!1,l)&&b}Qe.prototype.N=function(){if(Qe.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const d=a.g[l];for(let C=0;C<d.length;C++)Gi(d[C]);delete a.g[l],a.h--}}this.G=null},Qe.prototype.J=function(a,l,d,C){return this.i.add(String(a),l,!1,d,C)},Qe.prototype.K=function(a,l,d,C){return this.i.add(String(a),l,!0,d,C)};function Ji(a,l,d,C){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let b=!0;for(let S=0;S<l.length;++S){const q=l[S];if(q&&!q.da&&q.capture==d){const ae=q.listener,Ue=q.ha||q.src;q.fa&&Ia(a.i,q),b=ae.call(Ue,C)!==!1&&b}}return b&&!C.defaultPrevented}function Wp(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function dc(a){a.g=Wp(()=>{a.g=null,a.i&&(a.i=!1,dc(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class $p extends v{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:dc(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ps(a){v.call(this),this.h=a,this.g={}}f(ps,v);var fc=[];function Cc(a){Ui(a.g,function(l,d){this.g.hasOwnProperty(d)&&Ra(l)},a),a.g={}}ps.prototype.N=function(){ps.Z.N.call(this),Cc(this)},ps.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pa=o.JSON.stringify,Yp=o.JSON.parse,Xp=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function pc(){}function gc(){}var gs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Sa(){T.call(this,"d")}f(Sa,T);function Oa(){T.call(this,"c")}f(Oa,T);var Kn={},mc=null;function qi(){return mc=mc||new Qe}Kn.Ia="serverreachability";function Ec(a){T.call(this,Kn.Ia,a)}f(Ec,T);function ms(a){const l=qi();et(l,new Ec(l))}Kn.STAT_EVENT="statevent";function _c(a,l){T.call(this,Kn.STAT_EVENT,a),this.stat=l}f(_c,T);function tt(a){const l=qi();et(l,new _c(l,a))}Kn.Ja="timingevent";function Dc(a,l){T.call(this,Kn.Ja,a),this.size=l}f(Dc,T);function Es(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function _s(){this.g=!0}_s.prototype.ua=function(){this.g=!1};function Zp(a,l,d,C,b,S){a.info(function(){if(a.g)if(S){var q="",ae=S.split("&");for(let me=0;me<ae.length;me++){var Ue=ae[me].split("=");if(Ue.length>1){const Je=Ue[0];Ue=Ue[1];const Lt=Je.split("_");q=Lt.length>=2&&Lt[1]=="type"?q+(Je+"="+Ue+"&"):q+(Je+"=redacted&")}}}else q=null;else q=S;return"XMLHTTP REQ ("+C+") [attempt "+b+"]: "+l+`
`+d+`
`+q})}function eg(a,l,d,C,b,S,q){a.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+b+"]: "+l+`
`+d+`
`+S+" "+q})}function br(a,l,d,C){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+ng(a,d)+(C?" "+C:"")})}function tg(a,l){a.info(function(){return"TIMEOUT: "+l})}_s.prototype.info=function(){};function ng(a,l){if(!a.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(a=0;a<S.length;a++)if(Array.isArray(S[a])){var d=S[a];if(!(d.length<2)){var C=d[1];if(Array.isArray(C)&&!(C.length<1)){var b=C[0];if(b!="noop"&&b!="stop"&&b!="close")for(let q=1;q<C.length;q++)C[q]=""}}}}return Pa(S)}catch{return l}}var ji={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},yc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ic;function Na(){}f(Na,pc),Na.prototype.g=function(){return new XMLHttpRequest},Ic=new Na;function Ds(a){return encodeURIComponent(String(a))}function rg(a){var l=1;a=a.split(":");const d=[];for(;l>0&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function cn(a,l,d,C){this.j=a,this.i=l,this.l=d,this.S=C||1,this.V=new ps(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new wc}function wc(){this.i=null,this.g="",this.h=!1}var Tc={},La={};function Fa(a,l,d){a.M=1,a.A=zi(Nt(l)),a.u=d,a.R=!0,Ac(a,null)}function Ac(a,l){a.F=Date.now(),Ki(a),a.B=Nt(a.A);var d=a.B,C=a.S;Array.isArray(C)||(C=[String(C)]),Mc(d.i,"t",C),a.C=0,d=a.j.L,a.h=new wc,a.g=rl(a.j,d?l:null,!a.u),a.P>0&&(a.O=new $p(c(a.Y,a,a.g),a.P)),l=a.V,d=a.g,C=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(fc[0]=b.toString()),b=fc);for(let S=0;S<b.length;S++){const q=uc(d,b[S],C||l.handleEvent,!1,l.h||l);if(!q)break;l.g[q.key]=q}l=a.J?oc(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),ms(),Zp(a.i,a.v,a.B,a.l,a.S,a.u)}cn.prototype.ba=function(a){a=a.target;const l=this.O;l&&dn(a)==3?l.j():this.Y(a)},cn.prototype.Y=function(a){try{if(a==this.g)e:{const ae=dn(this.g),Ue=this.g.ya(),me=this.g.ca();if(!(ae<3)&&(ae!=3||this.g&&(this.h.h||this.g.la()||Kc(this.g)))){this.K||ae!=4||Ue==7||(Ue==8||me<=0?ms(3):ms(2)),ka(this);var l=this.g.ca();this.X=l;var d=sg(this);if(this.o=l==200,eg(this.i,this.v,this.B,this.l,this.S,ae,l),this.o){if(this.U&&!this.L){t:{if(this.g){var C,b=this.g;if((C=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(C)){var S=C;break t}}S=null}if(a=S)br(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,xa(this,a);else{this.o=!1,this.m=3,tt(12),zn(this),ys(this);break e}}if(this.R){a=!0;let Je;for(;!this.K&&this.C<d.length;)if(Je=ig(this,d),Je==La){ae==4&&(this.m=4,tt(14),a=!1),br(this.i,this.l,null,"[Incomplete Response]");break}else if(Je==Tc){this.m=4,tt(15),br(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else br(this.i,this.l,Je,null),xa(this,Je);if(Rc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ae!=4||d.length!=0||this.h.h||(this.m=1,tt(16),a=!1),this.o=this.o&&a,!a)br(this.i,this.l,d,"[Invalid Chunked Response]"),zn(this),ys(this);else if(d.length>0&&!this.W){this.W=!0;var q=this.j;q.g==this&&q.aa&&!q.P&&(q.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),ja(q),q.P=!0,tt(11))}}else br(this.i,this.l,d,null),xa(this,d);ae==4&&zn(this),this.o&&!this.K&&(ae==4?Zc(this.j,this):(this.o=!1,Ki(this)))}else Eg(this.g),l==400&&d.indexOf("Unknown SID")>0?(this.m=3,tt(12)):(this.m=0,tt(13)),zn(this),ys(this)}}}catch{}finally{}};function sg(a){if(!Rc(a))return a.g.la();const l=Kc(a.g);if(l==="")return"";let d="";const C=l.length,b=dn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return zn(a),ys(a),"";a.h.i=new o.TextDecoder}for(let S=0;S<C;S++)a.h.h=!0,d+=a.h.i.decode(l[S],{stream:!(b&&S==C-1)});return l.length=0,a.h.g+=d,a.C=0,a.h.g}function Rc(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ig(a,l){var d=a.C,C=l.indexOf(`
`,d);return C==-1?La:(d=Number(l.substring(d,C)),isNaN(d)?Tc:(C+=1,C+d>l.length?La:(l=l.slice(C,C+d),a.C=C+d,l)))}cn.prototype.cancel=function(){this.K=!0,zn(this)};function Ki(a){a.T=Date.now()+a.H,vc(a,a.H)}function vc(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Es(c(a.aa,a),l)}function ka(a){a.D&&(o.clearTimeout(a.D),a.D=null)}cn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(tg(this.i,this.B),this.M!=2&&(ms(),tt(17)),zn(this),this.m=2,ys(this)):vc(this,this.T-a)};function ys(a){a.j.I==0||a.K||Zc(a.j,a)}function zn(a){ka(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,Cc(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function xa(a,l){try{var d=a.j;if(d.I!=0&&(d.g==a||Va(d.h,a))){if(!a.L&&Va(d.h,a)&&d.I==3){try{var C=d.Ba.g.parse(l)}catch{C=null}if(Array.isArray(C)&&C.length==3){var b=C;if(b[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Xi(d),$i(d);else break e;qa(d),tt(18)}}else d.xa=b[1],0<d.xa-d.K&&b[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Es(c(d.Va,d),6e3));Sc(d.h)<=1&&d.ta&&(d.ta=void 0)}else Wn(d,11)}else if((a.L||d.g==a)&&Xi(d),!_(l))for(b=d.Ba.g.parse(l),l=0;l<b.length;l++){let me=b[l];const Je=me[0];if(!(Je<=d.K))if(d.K=Je,me=me[1],d.I==2)if(me[0]=="c"){d.M=me[1],d.ba=me[2];const Lt=me[3];Lt!=null&&(d.ka=Lt,d.j.info("VER="+d.ka));const $n=me[4];$n!=null&&(d.za=$n,d.j.info("SVER="+d.za));const fn=me[5];fn!=null&&typeof fn=="number"&&fn>0&&(C=1.5*fn,d.O=C,d.j.info("backChannelRequestTimeoutMs_="+C)),C=d;const Cn=a.g;if(Cn){const eo=Cn.g?Cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(eo){var S=C.h;S.g||eo.indexOf("spdy")==-1&&eo.indexOf("quic")==-1&&eo.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Ma(S,S.h),S.h=null))}if(C.G){const Ka=Cn.g?Cn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ka&&(C.wa=Ka,Ie(C.J,C.G,Ka))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),C=d;var q=a;if(C.na=nl(C,C.L?C.ba:null,C.W),q.L){Oc(C.h,q);var ae=q,Ue=C.O;Ue&&(ae.H=Ue),ae.D&&(ka(ae),Ki(ae)),C.g=q}else Yc(C);d.i.length>0&&Yi(d)}else me[0]!="stop"&&me[0]!="close"||Wn(d,7);else d.I==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Wn(d,7):Ja(d):me[0]!="noop"&&d.l&&d.l.qa(me),d.A=0)}}ms(4)}catch{}}var og=class{constructor(a,l){this.g=a,this.map=l}};function bc(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Pc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Sc(a){return a.h?1:a.g?a.g.size:0}function Va(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function Ma(a,l){a.g?a.g.add(l):a.h=l}function Oc(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}bc.prototype.cancel=function(){if(this.i=Nc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Nc(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const d of a.g.values())l=l.concat(d.G);return l}return y(a.i)}var Lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ag(a,l){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const C=a[d].indexOf("=");let b,S=null;C>=0?(b=a[d].substring(0,C),S=a[d].substring(C+1)):b=a[d],l(b,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function ln(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof ln?(this.l=a.l,Is(this,a.j),this.o=a.o,this.g=a.g,ws(this,a.u),this.h=a.h,Ga(this,Gc(a.i)),this.m=a.m):a&&(l=String(a).match(Lc))?(this.l=!1,Is(this,l[1]||"",!0),this.o=Ts(l[2]||""),this.g=Ts(l[3]||"",!0),ws(this,l[4]),this.h=Ts(l[5]||"",!0),Ga(this,l[6]||"",!0),this.m=Ts(l[7]||"")):(this.l=!1,this.i=new Rs(null,this.l))}ln.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(As(l,Fc,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(As(l,Fc,!0),"@"),a.push(Ds(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(As(d,d.charAt(0)=="/"?cg:ug,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",As(d,hg)),a.join("")},ln.prototype.resolve=function(a){const l=Nt(this);let d=!!a.j;d?Is(l,a.j):d=!!a.o,d?l.o=a.o:d=!!a.g,d?l.g=a.g:d=a.u!=null;var C=a.h;if(d)ws(l,a.u);else if(d=!!a.h){if(C.charAt(0)!="/")if(this.g&&!this.h)C="/"+C;else{var b=l.h.lastIndexOf("/");b!=-1&&(C=l.h.slice(0,b+1)+C)}if(b=C,b==".."||b==".")C="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){C=b.lastIndexOf("/",0)==0,b=b.split("/");const S=[];for(let q=0;q<b.length;){const ae=b[q++];ae=="."?C&&q==b.length&&S.push(""):ae==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),C&&q==b.length&&S.push("")):(S.push(ae),C=!0)}C=S.join("/")}else C=b}return d?l.h=C:d=a.i.toString()!=="",d?Ga(l,Gc(a.i)):d=!!a.m,d&&(l.m=a.m),l};function Nt(a){return new ln(a)}function Is(a,l,d){a.j=d?Ts(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function ws(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function Ga(a,l,d){l instanceof Rs?(a.i=l,dg(a.i,a.l)):(d||(l=As(l,lg)),a.i=new Rs(l,a.l))}function Ie(a,l,d){a.i.set(l,d)}function zi(a){return Ie(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ts(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function As(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,Bg),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Bg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fc=/[#\/\?@]/g,ug=/[#\?:]/g,cg=/[#\?]/g,lg=/[#\?@]/g,hg=/#/g;function Rs(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function Qn(a){a.g||(a.g=new Map,a.h=0,a.i&&ag(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Rs.prototype,n.add=function(a,l){Qn(this),this.i=null,a=Pr(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function kc(a,l){Qn(a),l=Pr(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function xc(a,l){return Qn(a),l=Pr(a,l),a.g.has(l)}n.forEach=function(a,l){Qn(this),this.g.forEach(function(d,C){d.forEach(function(b){a.call(l,b,C,this)},this)},this)};function Vc(a,l){Qn(a);let d=[];if(typeof l=="string")xc(a,l)&&(d=d.concat(a.g.get(Pr(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)d=d.concat(a[l]);return d}n.set=function(a,l){return Qn(this),this.i=null,a=Pr(this,a),xc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},n.get=function(a,l){return a?(a=Vc(this,a),a.length>0?String(a[0]):l):l};function Mc(a,l,d){kc(a,l),d.length>0&&(a.i=null,a.g.set(Pr(a,l),y(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let C=0;C<l.length;C++){var d=l[C];const b=Ds(d);d=Vc(this,d);for(let S=0;S<d.length;S++){let q=b;d[S]!==""&&(q+="="+Ds(d[S])),a.push(q)}}return this.i=a.join("&")};function Gc(a){const l=new Rs;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function Pr(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function dg(a,l){l&&!a.j&&(Qn(a),a.i=null,a.g.forEach(function(d,C){const b=C.toLowerCase();C!=b&&(kc(this,C),Mc(this,b,d))},a)),a.j=l}function fg(a,l){const d=new _s;if(o.Image){const C=new Image;C.onload=h(hn,d,"TestLoadImage: loaded",!0,l,C),C.onerror=h(hn,d,"TestLoadImage: error",!1,l,C),C.onabort=h(hn,d,"TestLoadImage: abort",!1,l,C),C.ontimeout=h(hn,d,"TestLoadImage: timeout",!1,l,C),o.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=a}else l(!1)}function Cg(a,l){const d=new _s,C=new AbortController,b=setTimeout(()=>{C.abort(),hn(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:C.signal}).then(S=>{clearTimeout(b),S.ok?hn(d,"TestPingServer: ok",!0,l):hn(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),hn(d,"TestPingServer: error",!1,l)})}function hn(a,l,d,C,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),C(d)}catch{}}function pg(){this.g=new Xp}function Ua(a){this.i=a.Sb||null,this.h=a.ab||!1}f(Ua,pc),Ua.prototype.g=function(){return new Qi(this.i,this.h)};function Qi(a,l){Qe.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Qi,Qe),n=Qi.prototype,n.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,bs(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vs(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Uc(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Uc(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?vs(this):bs(this),this.readyState==3&&Uc(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,vs(this))},n.Na=function(a){this.g&&(this.response=a,vs(this))},n.ga=function(){this.g&&vs(this)};function vs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,bs(a)}n.setRequestHeader=function(a,l){this.A.append(a,l)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function bs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Hc(a){let l="";return Ui(a,function(d,C){l+=C,l+=":",l+=d,l+=`\r
`}),l}function Ha(a,l,d){e:{for(C in d){var C=!1;break e}C=!0}C||(d=Hc(d),typeof a=="string"?d!=null&&Ds(d):Ie(a,l,d))}function Se(a){Qe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Se,Qe);var gg=/^https?$/i,mg=["POST","PUT"];n=Se.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,l,d,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ic.g(),this.g.onreadystatechange=p(c(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(S){Jc(this,S);return}if(a=d||"",d=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var b in C)d.set(b,C[b]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const S of C.keys())d.set(S,C.get(S));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(mg,l,void 0)>=0)||C||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,q]of d)this.g.setRequestHeader(S,q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(S){Jc(this,S)}};function Jc(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,qc(a),Wi(a)}function qc(a){a.A||(a.A=!0,et(a,"complete"),et(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,et(this,"complete"),et(this,"abort"),Wi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wi(this,!0)),Se.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?jc(this):this.Xa())},n.Xa=function(){jc(this)};function jc(a){if(a.h&&typeof i<"u"){if(a.v&&dn(a)==4)setTimeout(a.Ca.bind(a),0);else if(et(a,"readystatechange"),dn(a)==4){a.h=!1;try{const S=a.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var C;if(C=S===0){let q=String(a.D).match(Lc)[1]||null;!q&&o.self&&o.self.location&&(q=o.self.location.protocol.slice(0,-1)),C=!gg.test(q?q.toLowerCase():"")}d=C}if(d)et(a,"complete"),et(a,"success");else{a.o=6;try{var b=dn(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",qc(a)}}finally{Wi(a)}}}}function Wi(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,l||et(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function dn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return dn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),Yp(l)}};function Kc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Eg(a){const l={};a=(a.g&&dn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<a.length;C++){if(_(a[C]))continue;var d=rg(a[C]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=l[b]||[];l[b]=S,S.push(d)}jp(l,function(C){return C.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ps(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function zc(a){this.za=0,this.i=[],this.j=new _s,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ps("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ps("baseRetryDelayMs",5e3,a),this.Za=Ps("retryDelaySeedMs",1e4,a),this.Ta=Ps("forwardChannelMaxRetries",2,a),this.va=Ps("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new bc(a&&a.concurrentRequestLimit),this.Ba=new pg,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=zc.prototype,n.ka=8,n.I=1,n.connect=function(a,l,d,C){tt(0),this.W=a,this.H=l||{},d&&C!==void 0&&(this.H.OSID=d,this.H.OAID=C),this.F=this.X,this.J=nl(this,null,this.W),Yi(this)};function Ja(a){if(Qc(a),a.I==3){var l=a.V++,d=Nt(a.J);if(Ie(d,"SID",a.M),Ie(d,"RID",l),Ie(d,"TYPE","terminate"),Ss(a,d),l=new cn(a,a.j,l),l.M=2,l.A=zi(Nt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=l.A,d=!0),d||(l.g=rl(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Ki(l)}tl(a)}function $i(a){a.g&&(ja(a),a.g.cancel(),a.g=null)}function Qc(a){$i(a),a.v&&(o.clearTimeout(a.v),a.v=null),Xi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Yi(a){if(!Pc(a.h)&&!a.m){a.m=!0;var l=a.Ea;ye||E(),ge||(ye(),ge=!0),A.add(l,a),a.D=0}}function _g(a,l){return Sc(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Es(c(a.Ea,a,l),el(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new cn(this,this.j,a);let S=this.o;if(this.U&&(S?(S=oc(S),Bc(S,this.U)):S=this.U),this.u!==null||this.R||(b.J=S,S=null),this.S)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var C=this.i[d];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(l+=C,l>4096){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=$c(this,b,l),d=Nt(this.J),Ie(d,"RID",a),Ie(d,"CVER",22),this.G&&Ie(d,"X-HTTP-Session-Id",this.G),Ss(this,d),S&&(this.R?l="headers="+Ds(Hc(S))+"&"+l:this.u&&Ha(d,this.u,S)),Ma(this.h,b),this.Ra&&Ie(d,"TYPE","init"),this.S?(Ie(d,"$req",l),Ie(d,"SID","null"),b.U=!0,Fa(b,d,null)):Fa(b,d,l),this.I=2}}else this.I==3&&(a?Wc(this,a):this.i.length==0||Pc(this.h)||Wc(this))};function Wc(a,l){var d;l?d=l.l:d=a.V++;const C=Nt(a.J);Ie(C,"SID",a.M),Ie(C,"RID",d),Ie(C,"AID",a.K),Ss(a,C),a.u&&a.o&&Ha(C,a.u,a.o),d=new cn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),l&&(a.i=l.G.concat(a.i)),l=$c(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ma(a.h,d),Fa(d,C,l)}function Ss(a,l){a.H&&Ui(a.H,function(d,C){Ie(l,C,d)}),a.l&&Ui({},function(d,C){Ie(l,C,d)})}function $c(a,l,d){d=Math.min(a.i.length,d);const C=a.l?c(a.l.Ka,a.l,a):null;e:{var b=a.i;let ae=-1;for(;;){const Ue=["count="+d];ae==-1?d>0?(ae=b[0].g,Ue.push("ofs="+ae)):ae=0:Ue.push("ofs="+ae);let me=!0;for(let Je=0;Je<d;Je++){var S=b[Je].g;const Lt=b[Je].map;if(S-=ae,S<0)ae=Math.max(0,b[Je].g-100),me=!1;else try{S="req"+S+"_"||"";try{var q=Lt instanceof Map?Lt:Object.entries(Lt);for(const[$n,fn]of q){let Cn=fn;B(fn)&&(Cn=Pa(fn)),Ue.push(S+$n+"="+encodeURIComponent(Cn))}}catch($n){throw Ue.push(S+"type="+encodeURIComponent("_badmap")),$n}}catch{C&&C(Lt)}}if(me){q=Ue.join("&");break e}}q=void 0}return a=a.i.splice(0,d),l.G=a,q}function Yc(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;ye||E(),ge||(ye(),ge=!0),A.add(l,a),a.A=0}}function qa(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Es(c(a.Da,a),el(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Xc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Es(c(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,tt(10),$i(this),Xc(this))};function ja(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Xc(a){a.g=new cn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=Nt(a.na);Ie(l,"RID","rpc"),Ie(l,"SID",a.M),Ie(l,"AID",a.K),Ie(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ie(l,"TO",a.ia),Ie(l,"TYPE","xmlhttp"),Ss(a,l),a.u&&a.o&&Ha(l,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=zi(Nt(l)),d.u=null,d.R=!0,Ac(d,a)}n.Va=function(){this.C!=null&&(this.C=null,$i(this),qa(this),tt(19))};function Xi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Zc(a,l){var d=null;if(a.g==l){Xi(a),ja(a),a.g=null;var C=2}else if(Va(a.h,l))d=l.G,Oc(a.h,l),C=1;else return;if(a.I!=0){if(l.o)if(C==1){d=l.u?l.u.length:0,l=Date.now()-l.F;var b=a.D;C=qi(),et(C,new Dc(C,d)),Yi(a)}else Yc(a);else if(b=l.m,b==3||b==0&&l.X>0||!(C==1&&_g(a,l)||C==2&&qa(a)))switch(d&&d.length>0&&(l=a.h,l.i=l.i.concat(d)),b){case 1:Wn(a,5);break;case 4:Wn(a,10);break;case 3:Wn(a,6);break;default:Wn(a,2)}}}function el(a,l){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*l}function Wn(a,l){if(a.j.info("Error code "+l),l==2){var d=c(a.bb,a),C=a.Ua;const b=!C;C=new ln(C||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Is(C,"https"),zi(C),b?fg(C.toString(),d):Cg(C.toString(),d)}else tt(2);a.I=0,a.l&&a.l.pa(l),tl(a),Qc(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function tl(a){if(a.I=0,a.ja=[],a.l){const l=Nc(a.h);(l.length!=0||a.i.length!=0)&&(R(a.ja,l),R(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function nl(a,l,d){var C=d instanceof ln?Nt(d):new ln(d);if(C.g!="")l&&(C.g=l+"."+C.g),ws(C,C.u);else{var b=o.location;C=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;const S=new ln(null);C&&Is(S,C),l&&(S.g=l),b&&ws(S,b),d&&(S.h=d),C=S}return d=a.G,l=a.wa,d&&l&&Ie(C,d,l),Ie(C,"VER",a.ka),Ss(a,C),C}function rl(a,l,d){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new Se(new Ua({ab:d})):new Se(a.ma),l.Fa(a.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function sl(){}n=sl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Zi(){}Zi.prototype.g=function(a,l){return new Ct(a,l)};function Ct(a,l){Qe.call(this),this.g=new zc(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!_(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new Sr(this)}f(Ct,Qe),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Ja(this.g)},Ct.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Pa(a),a=d);l.i.push(new og(l.Ya++,a)),l.I==3&&Yi(l)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Ja(this.g),delete this.g,Ct.Z.N.call(this)};function il(a){Sa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}f(il,Sa);function ol(){Oa.call(this),this.status=1}f(ol,Oa);function Sr(a){this.g=a}f(Sr,sl),Sr.prototype.ra=function(){et(this.g,"a")},Sr.prototype.qa=function(a){et(this.g,new il(a))},Sr.prototype.pa=function(a){et(this.g,new ol)},Sr.prototype.oa=function(){et(this.g,"b")},Zi.prototype.createWebChannel=Zi.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,_f=function(){return new Zi},Ef=function(){return qi()},mf=Kn,IB={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ji.NO_ERROR=0,ji.TIMEOUT=8,ji.HTTP_ERROR=6,wo=ji,yc.COMPLETE="complete",gf=yc,gc.EventType=gs,gs.OPEN="a",gs.CLOSE="b",gs.ERROR="c",gs.MESSAGE="d",Qe.prototype.listen=Qe.prototype.J,Vs=gc,Se.prototype.listenOnce=Se.prototype.K,Se.prototype.getLastError=Se.prototype.Ha,Se.prototype.getLastErrorCode=Se.prototype.ya,Se.prototype.getStatus=Se.prototype.ca,Se.prototype.getResponseJson=Se.prototype.La,Se.prototype.getResponseText=Se.prototype.la,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Fa,pf=Se}).apply(typeof no<"u"?no:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.8.6
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository github:le0pard/re2js
* @license MIT
*/var Ee,V=(Ee=class{},U(Ee,"FOLD_CASE",1),U(Ee,"LITERAL",2),U(Ee,"CLASS_NL",4),U(Ee,"DOT_NL",8),U(Ee,"ONE_LINE",16),U(Ee,"NON_GREEDY",32),U(Ee,"PERL_X",64),U(Ee,"UNICODE_GROUPS",128),U(Ee,"WAS_DOLLAR",256),U(Ee,"LOOKBEHIND",512),U(Ee,"MATCH_NL",Ee.CLASS_NL|Ee.DOT_NL),U(Ee,"PERL",Ee.CLASS_NL|Ee.ONE_LINE|Ee.PERL_X|Ee.UNICODE_GROUPS),U(Ee,"POSIX",0),U(Ee,"UNANCHORED",0),U(Ee,"ANCHOR_START",1),U(Ee,"ANCHOR_BOTH",2),Ee);const Or={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},ti=128,wB=new Int32Array(ti),TB=new Int32Array(ti),ro=65535;for(let n=0;n<ti;n++)n>=97&&n<=122?wB[n]=n-32:wB[n]=n,n>=65&&n<=90?TB[n]=n+32:TB[n]=n;var fB,O=(fB=class{static toUpperCase(n){if(n<ti)return wB[n];const e=String.fromCodePoint(n).toUpperCase(),t=e.codePointAt(0)>ro?2:1;if(e.length>t)return n;const r=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),s=r.codePointAt(0)>ro?2:1;return r.length>s||r.codePointAt(0)!==n?n:e.codePointAt(0)}static toLowerCase(n){if(n<ti)return TB[n];const e=String.fromCodePoint(n).toLowerCase(),t=e.codePointAt(0)>ro?2:1;if(e.length>t)return n;const r=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),s=r.codePointAt(0)>ro?2:1;return r.length>s||r.codePointAt(0)!==n?n:e.codePointAt(0)}},U(fB,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["'",39],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["`",96],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]])),fB),g=class{constructor(n,e=!1){this.data=n,this.isStride1=e,this.SIZE=e?2:3}getLo(n){return this.data[n*this.SIZE]}getHi(n){return this.data[n*this.SIZE+1]}getStride(n){return this.isStride1?1:this.data[n*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const Df=new Uint8Array(256);for(let n=0,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-";n<64;n++)Df[e.charCodeAt(n)]=n;const yf=n=>{const e=[];let t=0,r=0;for(let s=0;s<n.length;s++){let i=Df[n.charCodeAt(s)];t|=(i&31)<<r,i&32?r+=5:(e.push(t),t=0,r=0)}return e},m=(n,e)=>{const t=yf(n),r=e?t.length/2:t.length/3,s=new Uint32Array(r*3);let i=0,o=0;for(let B=0;B<r;B++)i+=t[o++],s[B*3]=i,i+=t[o++],s[B*3+1]=i,s[B*3+2]=e?1:t[o++];return s},pD=n=>{const e=yf(n),t=new Map;let r=0;for(let s=0;s<e.length;s+=2){r+=e[s];const i=e[s+1],o=i>>>1^-(i&1);t.set(r,r+o)}return t};var so=class{constructor(n){this.initializer=n,this.cache=new Map}has(n){return n in this.initializer}get(n){if(this.cache.has(n))return this.cache.get(n);const e=this.initializer[n],t=e?e():null;return this.cache.set(n,t),t}},mn,ot=(mn=class{static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=pD("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static get Print(){return this._Print||(this._Print=new g(m("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static get Upper(){return this.CATEGORIES.get("Lu")}},U(mn,"_CASE_ORBIT",null),U(mn,"_Print",null),U(mn,"CATEGORIES",new so({C:()=>new g(m("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new g(m("AfgDgB",!0)),Cf:()=>new g(m("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new g(m("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new g(m("gg2B--B",!0)),L:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new g(m("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new g(m("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new g(m("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new g(m("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new g(m("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new g(m("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new g(m("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new g(m("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new g(m("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new g(m("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new g(m("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new g(m("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new g(m("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new g(m("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new g(m("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new g(m("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new g(m("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new g(m("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new g(m("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new g(m("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new g(m("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new g(m("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new g(m("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new g(m("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new g(m("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new g(m("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new g(m("ohIA",!0)),Zp:()=>new g(m("phIA",!0)),Zs:()=>new g(m("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new g(m("wBJIFbF",!0)),Alphabetic:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new g(m("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new g(m("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new g(m("7-8DE",!0)),Emoji_Modifier_Base:()=>new g(m("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new g(m("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new g(m("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new g(m("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new g(m("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new g(m("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new g(m("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new g(m("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new g(m("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))})),U(mn,"SCRIPTS",new so({Adlam:()=>new g(m("go6DrCFJFB",!0)),Ahom:()=>new g(m("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new g(m("ggxCmS",!0)),Arabic:()=>new g(m("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new g(m("xpBlBDxBDCks9BE",!0)),Avestan:()=>new g(m("g4iC1BEG",!0)),Balinese:()=>new g(m("g4GsCCxB",!0)),Bamum:()=>new g(m("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new g(m("w26CdDF",!0)),Batak:()=>new g(m("g+GzBJD",!0)),Bengali:()=>new g(m("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new g(m("g17CYDY",!0)),Bhaiksuki:()=>new g(m("ggnCICsBCNLc",!0)),Bopomofo:()=>new g(m("qXB6wLqBxDf",!0)),Brahmi:()=>new g(m("ggkCtCFjBKA",!0)),Braille:()=>new g(m("ggK-H",!0)),Buginese:()=>new g(m("gwGbDB",!0)),Buhid:()=>new g(m("g6FT",!0)),Canadian_Aboriginal:()=>new g(m("ggF-TxRlC7tgCP",!0)),Carian:()=>new g(m("g1gCwB",!0)),Caucasian_Albanian:()=>new g(m("wphCzBMA",!0)),Chakma:()=>new g(m("gokC0BCR",!0)),Cham:()=>new g(m("gwqB2BKNDJDD",!0)),Cherokee:()=>new g(m("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new g(m("w9jCb",!0)),Common:()=>new g(m("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new g(m("ifNxkKzDGG",!0)),Cuneiform:()=>new g(m("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new g(m("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new g(m("w8rCiD",!0)),Cyrillic:()=>new g(m("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new g(m("gghCvC",!0)),Devanagari:()=>new g(m("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new g(m("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new g(m("ggmC7B",!0)),Duployan:()=>new g(m("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new g(m("ggsC1iBL68D",!0)),Elbasan:()=>new g(m("gohCnB",!0)),Elymaic:()=>new g(m("g-jCW",!0)),Ethiopic:()=>new g(m("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new g(m("gqjClBEcJB",!0)),Georgian:()=>new g(m("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new g(m("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new g(m("w5gCa",!0)),Grantha:()=>new g(m("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new g(m("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new g(m("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new g(m("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new g(m("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new g(m("go4C5B",!0)),Han:()=>new g(m("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new g(m("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new g(m("gojCnBJJ",!0)),Hanunoo:()=>new g(m("g5FU",!0)),Hatran:()=>new g(m("gniCSCBGE",!0)),Hebrew:()=>new g(m("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new g(m("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new g(m("giiCVCI",!0)),Inherited:()=>new g(m("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new g(m("g7iCSGH",!0)),Inscriptional_Parthian:()=>new g(m("g6iCVDH",!0)),Javanese:()=>new g(m("gsqBtCDJFB",!0)),Kaithi:()=>new g(m("gkkCiCLA",!0)),Kannada:()=>new g(m("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new g(m("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new g(m("g4nCQCoBEc",!0)),Kayah_Li:()=>new g(m("goqBtBCA",!0)),Kharoshthi:()=>new g(m("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new g(m("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new g(m("g8F9CDJHJnPf",!0)),Khojki:()=>new g(m("gwkCRCuB",!0)),Khudawadi:()=>new g(m("w1kC6BGJ",!0)),Kirat_Rai:()=>new g(m("gq7C5B",!0)),Lao:()=>new g(m("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new g(m("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new g(m("ggH3BEOEC",!0)),Limbu:()=>new g(m("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new g(m("gwhC2JKVLH",!0)),Linear_B:()=>new g(m("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new g(m("wmpBvBx1eA",!0)),Lycian:()=>new g(m("g0gCc",!0)),Lydian:()=>new g(m("gpiCZGA",!0)),Mahajani:()=>new g(m("wqkCmB",!0)),Makasar:()=>new g(m("g3nCY",!0)),Malayalam:()=>new g(m("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new g(m("giCbDA",!0)),Manichaean:()=>new g(m("g2iCmBFL",!0)),Marchen:()=>new g(m("wjnCfDVCN",!0)),Masaram_Gondi:()=>new g(m("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new g(m("gy7C6C",!0)),Meetei_Mayek:()=>new g(m("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new g(m("gg6DkGDP",!0)),Meroitic_Cursive:()=>new g(m("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new g(m("gsiCf",!0)),Miao:()=>new g(m("g47CqCF4BIQ",!0)),Modi:()=>new g(m("gwlCkCMJ",!0)),Mongolian:()=>new g(m("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new g(m("gy6CeCJFB",!0)),Multani:()=>new g(m("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new g(m("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new g(m("gkiCeJI",!0)),Nag_Mundari:()=>new g(m("wm5DpB",!0)),Nandinagari:()=>new g(m("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new g(m("gsGrBFZHKEB",!0)),Newa:()=>new g(m("gglC7CCE",!0)),Nko:()=>new g(m("g+B6BDC",!0)),Nushu:()=>new g(m("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new g(m("go4DsBENDJFB",!0)),Ogham:()=>new g(m("g0Fc",!0)),Ol_Chiki:()=>new g(m("wiHvB",!0)),Ol_Onal:()=>new g(m("wu5DqBFA",!0)),Old_Hungarian:()=>new g(m("gkjCyBOyBIF",!0)),Old_Italic:()=>new g(m("g4gCjBKC",!0)),Old_North_Arabian:()=>new g(m("g0iCf",!0)),Old_Permic:()=>new g(m("w6gCqB",!0)),Old_Persian:()=>new g(m("g9gCjBFN",!0)),Old_Sogdian:()=>new g(m("g4jCnB",!0)),Old_South_Arabian:()=>new g(m("gziCf",!0)),Old_Turkic:()=>new g(m("ggjCoC",!0)),Old_Uyghur:()=>new g(m("w7jCZ",!0)),Oriya:()=>new g(m("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new g(m("wlhCjBFjB",!0)),Osmanya:()=>new g(m("gkhCdDJ",!0)),Pahawh_Hmong:()=>new g(m("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new g(m("gjiCf",!0)),Pau_Cin_Hau:()=>new g(m("g2mC4B",!0)),Phags_Pa:()=>new g(m("giqB3B",!0)),Phoenician:()=>new g(m("goiCbEA",!0)),Psalter_Pahlavi:()=>new g(m("g8iCRIDNG",!0)),Rejang:()=>new g(m("wpqBjBMA",!0)),Runic:()=>new g(m("g1FqCEK",!0)),Samaritan:()=>new g(m("ggCtBDO",!0)),Saurashtra:()=>new g(m("gkqBlCJL",!0)),Sharada:()=>new g(m("gskC-ChsCH",!0)),Shavian:()=>new g(m("wihCvB",!0)),Siddham:()=>new g(m("gslC1BDlB",!0)),Sidetic:()=>new g(m("gqiCZ",!0)),SignWriting:()=>new g(m("gg2DrUQECO",!0)),Sinhala:()=>new g(m("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new g(m("w5jCpB",!0)),Sora_Sompeng:()=>new g(m("wmkCYIJ",!0)),Soyombo:()=>new g(m("wymCyC",!0)),Sundanese:()=>new g(m("g8G-BhIH",!0)),Sunuwar:()=>new g(m("g+mChBPJ",!0)),Syloti_Nagri:()=>new g(m("ggqBsB",!0)),Syriac:()=>new g(m("g4BNC7BDCxIK",!0)),Tagalog:()=>new g(m("g4FVKA",!0)),Tagbanwa:()=>new g(m("g7FMCCCB",!0)),Tai_Le:()=>new g(m("wqGdDE",!0)),Tai_Tham:()=>new g(m("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new g(m("g0qBiCZE",!0)),Tai_Yo:()=>new g(m("g25DeCVJB",!0)),Takri:()=>new g(m("g0lC5BHJ",!0)),Tamil:()=>new g(m("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new g(m("wz6CuCCJ",!0)),Tangut:()=>new g(m("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new g(m("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new g(m("g8BxB",!0)),Thai:()=>new g(m("hwD5BGb",!0)),Tibetan:()=>new g(m("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new g(m("wpL3BIBPA",!0)),Tirhuta:()=>new g(m("gklCnCJJ",!0)),Todhri:()=>new g(m("guhCzB",!0)),Tolong_Siki:()=>new g(m("wtnCrBFJ",!0)),Toto:()=>new g(m("w04De",!0)),Tulu_Tigalari:()=>new g(m("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new g(m("g8gCdCA",!0)),Unknown:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new g(m("gopBrJ",!0)),Vithkuqi:()=>new g(m("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new g(m("g24D5BGA",!0)),Warang_Citi:()=>new g(m("glmCyCNA",!0)),Yezidi:()=>new g(m("g0jCpBCCDB",!0)),Yi:()=>new g(m("ggoBskBE2B",!0)),Zanabazar_Square:()=>new g(m("gwmCnC",!0))})),U(mn,"FOLD_CATEGORIES",new so({L:()=>new g(m("laA",!0)),LC:()=>new g(m("laA",!0)),Ll:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new g(m("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new g(m("5cgBgBlgHAB",!1)),Mn:()=>new g(m("5cgBgBlgHAB",!1)),Emoji:()=>new g(m("8mJA",!0)),Extended_Pictographic:()=>new g(m("8mJA",!0)),Lowercase:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new g(m("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))})),U(mn,"FOLD_SCRIPT",new so({Common:()=>new g(m("8cgBgB",!1)),Greek:()=>new g(m("1FwUwU",!1)),Inherited:()=>new g(m("5cgBgBlgHAB",!1))})),mn),_e,Q=(_e=class{static is32(e,t){let r=0,s=e.length;for(;r<s;){const i=r+Math.floor((s-r)/2),o=e.getLo(i),B=e.getHi(i);if(o<=t&&t<=B){const u=e.getStride(i);return(t-o)%u===0}t<o?s=i:r=i+1}return!1}static is(e,t){if(t<=_e.MAX_LATIN1){for(let r=0;r<e.length;r++){if(t>e.getHi(r))continue;const s=e.getLo(r);if(t<s)return!1;const i=e.getStride(r);return(t-s)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&_e.is32(e,t)}static isUpper(e){if(e<=_e.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return _e.is(ot.Upper,e)}static isPrint(e){return e<=_e.MAX_LATIN1?e>=32&&e<_e.MAX_ASCII||e>=161&&e!==173:_e.is(ot.Print,e)}static simpleFold(e){if(ot.CASE_ORBIT.has(e))return ot.CASE_ORBIT.get(e);const t=O.toLowerCase(e);return t!==e?t:O.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=_e.MAX_ASCII&&t<=_e.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let r=_e.simpleFold(e);r!==e;r=_e.simpleFold(r))if(r===t)return!0;return!1}},U(_e,"MAX_RUNE",1114111),U(_e,"MAX_ASCII",127),U(_e,"MAX_LATIN1",255),U(_e,"MAX_BMP",65535),U(_e,"MIN_FOLD",65),U(_e,"MAX_FOLD",125251),U(_e,"MIN_HIGH_SURROGATE",55296),U(_e,"MAX_HIGH_SURROGATE",56319),U(_e,"MIN_LOW_SURROGATE",56320),U(_e,"MAX_LOW_SURROGATE",57343),U(_e,"MIN_SUPPLEMENTARY_CODE_POINT",65536),_e);const iu=256,If=new Uint8Array(iu);for(let n=0;n<iu;n++)If[n]=97<=n&&n<=122||65<=n&&n<=90||48<=n&&n<=57||n===95?1:0;let eB=null,tB=null;var Te,Y=(Te=class{static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||e instanceof Uint8Array}static isalnum(e){return O.CODES.get("0")<=e&&e<=O.CODES.get("9")||O.CODES.get("a")<=e&&e<=O.CODES.get("z")||O.CODES.get("A")<=e&&e<=O.CODES.get("Z")}static unhex(e){return O.CODES.get("0")<=e&&e<=O.CODES.get("9")?e-O.CODES.get("0"):O.CODES.get("a")<=e&&e<=O.CODES.get("f")?e-O.CODES.get("a")+10:O.CODES.get("A")<=e&&e<=O.CODES.get("F")?e-O.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(Q.isPrint(e))Te.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case O.CODES.get('"'):t+='\\"';break;case O.CODES.get("\\"):t+="\\\\";break;case O.CODES.get("	"):t+="\\t";break;case O.CODES.get(`
`):t+="\\n";break;case O.CODES.get("\r"):t+="\\r";break;case O.CODES.get("\b"):t+="\\b";break;case O.CODES.get("\f"):t+="\\f";break;default:{let r=e.toString(16);e<256?(t+="\\x",r.length===1&&(t+="0"),t+=r):t+=`\\x{${r}}`;break}}return t}static stringToRunes(e){const t=String(e),r=[];let s=0;for(;s<t.length;){const i=t.codePointAt(s);r.push(i),s+=i>Q.MAX_BMP?2:1}return r}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<iu?If[e]===1:!1}static emptyOpContext(e,t){let r=0;return e<0&&(r|=Te.EMPTY_BEGIN_TEXT|Te.EMPTY_BEGIN_LINE),e===10&&(r|=Te.EMPTY_BEGIN_LINE),t<0&&(r|=Te.EMPTY_END_TEXT|Te.EMPTY_END_LINE),t===10&&(r|=Te.EMPTY_END_LINE),Te.isWordRune(e)!==Te.isWordRune(t)?r|=Te.EMPTY_WORD_BOUNDARY:r|=Te.EMPTY_NO_WORD_BOUNDARY,r}static quoteMeta(e){return e.split("").map(t=>Te.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>Q.MAX_BMP?2:1}static toArray(e){const t=e.length,r=new Array(t);for(let s=0;s<t;s++)r[s]=e[s];return r}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return eB||(eB=new TextEncoder),eB.encode(e);{let t=[],r=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=i&63|128):(i&64512)===Q.MIN_HIGH_SURROGATE&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===Q.MIN_LOW_SURROGATE?(i=Q.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=i&63|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){tB||(tB=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return tB.decode(t)}else{let t=[],r=0,s=0;for(;r<e.length;){let i=e[r++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[r++];t[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[r++],B=e[r++],u=e[r++],c=((i&7)<<18|(o&63)<<12|(B&63)<<6|u&63)-Q.MIN_SUPPLEMENTARY_CODE_POINT;t[s++]=String.fromCharCode(Q.MIN_HIGH_SURROGATE+(c>>10)),t[s++]=String.fromCharCode(Q.MIN_LOW_SURROGATE+(c&1023))}else{let o=e[r++],B=e[r++];t[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|B&63)}}return t.join("")}}},U(Te,"METACHARACTERS","\\.+*?()|[]{}^$"),U(Te,"EMPTY_BEGIN_LINE",1),U(Te,"EMPTY_END_LINE",2),U(Te,"EMPTY_BEGIN_TEXT",4),U(Te,"EMPTY_END_TEXT",8),U(Te,"EMPTY_WORD_BOUNDARY",16),U(Te,"EMPTY_NO_WORD_BOUNDARY",32),U(Te,"EMPTY_ALL",-1),Te);const wf=(n=[],e=0)=>{const t=Object.create(null);for(let r=0;r<n.length;r++){const s=n[r],i=e+r;t[s]=i,t[i]=s}return Object.freeze(t)};var Rn,Cr=(Rn=class{getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===Rn.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===Rn.Encoding.UTF_16}},U(Rn,"Encoding",wf(["UTF_16","UTF_8"])),Rn),Gl=class extends Cr{constructor(n=null){super(),this.bytes=n}getEncoding(){return Cr.Encoding.UTF_8}asCharSequence(){return Y.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},gD=class extends Cr{constructor(n=null){super(),this.charSequence=n}getEncoding(){return Cr.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return Y.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},tr=class{static utf16(n){return new gD(n)}static utf8(n){return Y.isByteArray(n)?new Gl(n):new Gl(Y.stringToUtf8ByteArray(n))}},rt=class{static EOF(){return-8}constructor(){this.end=0}canCheckPrefix(){return!0}endPos(){return this.end}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},mD=class extends rt{constructor(n,e=0,t=n.length){super(),this.bytes=n,this.start=e,this.end=t}hasString(n,e){const t=n.bytes;if(t.length===0)return!0;const r=this.indexOf(this.bytes,t,this.start+e);return r!==-1&&r<=this.end-t.length}hasAnyString(n,e){return n.ac8?n.ac8.searchUTF8(this.bytes,this.start+e,this.end):!1}step(n){if(n+=this.start,n>=this.end)return rt.EOF();const e=this.bytes[n]&255;if(e<128)return e<<3|1;if(e>=194&&e<=223&&n+1<this.end){const t=this.bytes[n+1]&255;return(t&192)!==128?e<<3|1:((e&31)<<6|t&63)<<3|2}else if(e>=224&&e<=239&&n+2<this.end){const t=this.bytes[n+1]&255;if((t&192)!==128)return e<<3|1;const r=this.bytes[n+2]&255;return(r&192)!==128?e<<3|1:((e&15)<<12|(t&63)<<6|r&63)<<3|3}else if(e>=240&&e<=244&&n+3<this.end){const t=this.bytes[n+1]&255;if((t&192)!==128)return e<<3|1;const r=this.bytes[n+2]&255;if((r&192)!==128)return e<<3|1;const s=this.bytes[n+3]&255;return(s&192)!==128?e<<3|1:((e&7)<<18|(t&63)<<12|(r&63)<<6|s&63)<<3|4}else return e<<3|1}index(n,e){e+=this.start;const t=this.indexOf(this.bytes,n.prefixUTF8,e);return t<0?t:t-e}context(n){n+=this.start;let e=-1;if(n>this.start&&n<=this.end){let r=n-1;if(e=this.bytes[r--],e>=128){let s=n-4;for(s<this.start&&(s=this.start);r>=s&&(this.bytes[r]&192)===128;)r--;r<this.start&&(r=this.start),e=this.step(r-this.start)>>3}}const t=n<this.end?this.step(n-this.start)>>3:-1;return Y.emptyOpContext(e,t)}indexOf(n,e,t=0){let r=e.length;if(r===0)return t<=this.end?t:-1;const s=e[0];let i=this.end-r;const o=typeof n.indexOf=="function";let B=t;for(;B<=i;){if(o){if(B=n.indexOf(s,B),B===-1||B>i)return-1}else{for(;B<=i&&n[B]!==s;)B++;if(B>i)return-1}let u=!0;for(let c=1;c<r;c++)if(n[B+c]!==e[c]){u=!1;break}if(u)return B;B++}return-1}prefixLength(n){return n.prefixUTF8.length}},ED=class extends rt{constructor(n,e=0,t=n.length){super(),this.charSequence=n,this.start=e,this.end=t}hasString(n,e){const t=this.charSequence.indexOf(n.str,this.start+e);return t!==-1&&t<=this.end-n.str.length}hasAnyString(n,e){return n.ac16?n.ac16.searchUTF16(this.charSequence,this.start+e,this.end):!1}step(n){if(n+=this.start,n>=this.end)return rt.EOF();const e=this.charSequence.charCodeAt(n);if(e<Q.MIN_HIGH_SURROGATE||e>Q.MAX_HIGH_SURROGATE||n+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(n+1);return t>=Q.MIN_LOW_SURROGATE&&t<=Q.MAX_LOW_SURROGATE?(e-Q.MIN_HIGH_SURROGATE)*1024+(t-Q.MIN_LOW_SURROGATE)+Q.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(n,e){e+=this.start;const t=this.charSequence.indexOf(n.prefix,e);return t<0||t>this.end-n.prefix.length?-1:t-e}context(n){n+=this.start;const e=n>this.start&&n<=this.end?this.charSequence.charCodeAt(n-1):-1,t=n<this.end?this.charSequence.charCodeAt(n):-1;return Y.emptyOpContext(e,t)}prefixLength(n){return n.prefix.length}},we=class{static fromUTF8(n,e=0,t=n.length){return new mD(n,e,t)}static fromUTF16(n,e=0,t=n.length){return new ED(n,e,t)}},Ri=class extends Error{constructor(n){super(n),this.name="RE2JSException"}},De=class extends Ri{constructor(n,e=null){let t=`error parsing regexp: ${n}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=n,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},_D=class extends Ri{constructor(n){super(n),this.name="RE2JSCompileException"}},it=class extends Ri{constructor(n){super(n),this.name="RE2JSGroupException"}},DD=class extends Ri{constructor(n){super(n),this.name="RE2JSFlagsException"}},qs=class extends Ri{constructor(n){super(n),this.name="RE2JSInternalException"}},rr,Ul=(rr=class{static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(r=>{const s=r.codePointAt(0);return s===O.CODES.get("\\")||s===O.CODES.get("$")?`\\${r}`:r}).join(""):e.indexOf("$")<0?e:e.split("").map(r=>r.codePointAt(0)===O.CODES.get("$")?"$$":r).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const r=this.patternInput.re2();this.patternGroupCount=r.numberOfCapturingGroups(),this.groups=[],this.namedGroups=r.namedGroups,this.numberOfInstructions=r.numberOfInstructions(),t instanceof Cr?this.resetMatcherInput(t):Y.isByteArray(t)?this.resetMatcherInput(tr.utf8(t)):this.resetMatcherInput(tr.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof Cr||(Y.isByteArray(e)?e=tr.utf8(e):e=tr.utf16(e)),this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new it(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new it(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new it(`group '${e}' not found`);e=s}const t=this.start(e),r=this.end(e);return t<0&&r<0?null:this.substring(t,r)}getNamedGroups(){if(!this.hasMatch)throw new it("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new it(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new it("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,r=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!r[0])throw new it("inconsistency in matching group data");this.groups=r[1],this.hasGroups=!0}matches(){return this.genMatch(0,V.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,V.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new it(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?we.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):we.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,V.UNANCHORED)}genMatch(e,t){const r=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return r[0]?(this.groups=r[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?Y.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let r="";const s=this.start(),i=this.end();return this.appendPos<s&&(r+=this.substring(this.appendPos,s)),this.appendPos=i,r+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),r}appendReplacementInternalJava(e){let t="",r=0;const s=e.length;let i=0;for(;i<s;){const o=e.codePointAt(i);if(o===O.CODES.get("\\")){if(r<i&&(t+=e.substring(r,i)),i++,i>=s)throw new it("character to be escaped is missing");r=i,i++;continue}if(o===O.CODES.get("$")){if(r<i&&(t+=e.substring(r,i)),i+1>=s)throw new it("Illegal group reference: group index is missing");const B=e.codePointAt(i+1);if(O.CODES.get("0")<=B&&B<=O.CODES.get("9")){let u=B-O.CODES.get("0"),c=i+2;for(;c<s;c++){const f=e.codePointAt(c);if(f<O.CODES.get("0")||f>O.CODES.get("9")||u*10+f-O.CODES.get("0")>this.patternGroupCount)break;u=u*10+f-O.CODES.get("0")}if(u>this.patternGroupCount)throw new it(`n > number of groups: ${u}`);const h=this.group(u);h!==null&&(t+=h),i=c,r=i}else if(B===O.CODES.get("{")){let u=i+2;for(;u<s&&e.codePointAt(u)!==O.CODES.get("}");)u++;if(u>=s)throw new it("named capture group is missing trailing '}'");const c=e.substring(i+2,u),h=this.group(c);h!==null&&(t+=h),i=u+1,r=i}else throw new it("Illegal group reference");continue}i++}return r<s&&(t+=e.substring(r,s)),t}appendReplacementInternalJs(e){let t="",r=0;const s=e.length;for(let i=0;i<s-1;i++)if(e.codePointAt(i)===O.CODES.get("$")){let o=e.codePointAt(i+1);if(O.CODES.get("$")===o){r<i&&(t+=e.substring(r,i)),t+="$",i++,r=i+1;continue}else if(O.CODES.get("&")===o){r<i&&(t+=e.substring(r,i));const B=this.group(0);B!==null?t+=B:t+="$&",i++,r=i+1;continue}else if(O.CODES.get("`")===o){r<i&&(t+=e.substring(r,i)),t+=this.substring(0,this.start(0)),i++,r=i+1;continue}else if(O.CODES.get("'")===o){r<i&&(t+=e.substring(r,i)),t+=this.substring(this.end(0),this.matcherInputLength),i++,r=i+1;continue}else if(O.CODES.get("1")<=o&&o<=O.CODES.get("9")){let B=o-O.CODES.get("0");for(r<i&&(t+=e.substring(r,i)),i+=2;i<s&&(o=e.codePointAt(i),!(o<O.CODES.get("0")||o>O.CODES.get("9")||B*10+o-O.CODES.get("0")>this.patternGroupCount));i++)B=B*10+o-O.CODES.get("0");if(B>this.patternGroupCount){t+=`$${B}`,r=i,i--;continue}const u=this.group(B);u!==null&&(t+=u),r=i,i--;continue}else if(o===O.CODES.get("<")){r<i&&(t+=e.substring(r,i)),i++;let B=i+1;for(;B<e.length&&e.codePointAt(B)!==O.CODES.get(">")&&e.codePointAt(B)!==O.CODES.get(" ");)B++;if(B===e.length||e.codePointAt(B)!==O.CODES.get(">")){t+=e.substring(i-1,B+1),r=B+1,i=B;continue}const u=e.substring(i+1,B);if(Object.prototype.hasOwnProperty.call(this.namedGroups,u)){const c=this.group(u);c!==null&&(t+=c)}else t+=`$<${u}>`;r=B+1,i=B;continue}}return r<s&&(t+=e.substring(r,s)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,r=!1){let s="";this.reset();const i=typeof e=="function",o=Object.keys(this.namedGroups).length>0;let B=null;if(i){if(this.groupCount()>=rr.MAX_REPLACER_ARGS)throw new it("Too many capture groups to safely invoke replacer function");B=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(s+=i?this.appendReplacementFunc(e,o,B):this.appendReplacement(e,r),!!t););return s+=this.appendTail(),s}appendReplacementFunc(e,t,r){let s="";const i=this.start(),o=this.end();this.appendPos<i&&(s+=this.substring(this.appendPos,i)),this.appendPos=o;const B=this.buildReplacerArgs(i,t,r);return s+=String(e(...B)),s}buildReplacerArgs(e,t,r){const s=[this.group(0)],i=this.groupCount();for(let o=1;o<=i;o++){const B=this.start(o);B<0?s.push(void 0):s.push(this.substring(B,this.end(o)))}if(s.push(e),s.push(r),t){const o=this.getNamedGroups();for(const B in o)o[B]===null&&(o[B]=void 0);s.push(o)}return s}},U(rr,"MAX_REPLACER_ARGS",65535),rr),he,N=(he=class{static isRuneOp(e){return he.RUNE<=e&&e<=he.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let r of e)t+=Y.escapeRune(r);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=[],this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&V.FOLD_CASE?Q.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let r=0,s=t>>1;for(;s>1;){const o=s>>1;r+=this.runes[r+o<<1]<=e?o:0,s-=o}r+=this.runes[r<<1]<=e?1:0;const i=r-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&V.FOLD_CASE?Q.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let r=0,s=t>>1;for(;s>1;){const o=s>>1;r+=this.runes[r+o<<1]<=e?o:0,s-=o}r+=this.runes[r<<1]<=e?1:0;const i=r-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case he.ALT:return`alt -> ${this.out}, ${this.arg}`;case he.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case he.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case he.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case he.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case he.FAIL:return"fail";case he.NOP:return`nop -> ${this.out}`;case he.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case he.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case he.RUNE:return this.runes===null?"rune <null>":["rune ",he.escapeRunes(this.runes),this.arg&V.FOLD_CASE?"/i":""," -> ",this.out].join("");case he.RUNE1:return`rune1 ${he.escapeRunes(this.runes)} -> ${this.out}`;case he.RUNE_ANY:return`any -> ${this.out}`;case he.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},U(he,"ALT",1),U(he,"ALT_MATCH",2),U(he,"CAPTURE",3),U(he,"EMPTY_WIDTH",4),U(he,"FAIL",5),U(he,"MATCH",6),U(he,"NOP",7),U(he,"RUNE",8),U(he,"RUNE1",9),U(he,"RUNE_ANY",10),U(he,"RUNE_ANY_NOT_NL",11),U(he,"LB_WRITE",12),U(he,"LB_CHECK",13),he),Hl=class{constructor(n){this.sparse=new Int32Array(n),this.densePcs=new Int32Array(n),this.denseCaps=null,this.size=0,this.ncap=0}init(n){this.ncap=n;const e=this.densePcs.length*n;(!this.denseCaps||this.denseCaps.length<e)&&(this.denseCaps=new Int32Array(e))}contains(n){const e=this.sparse[n];return e<this.size&&this.densePcs[e]===n}isEmpty(){return this.size===0}add(n){const e=this.size++;return this.sparse[n]=e,this.densePcs[e]=n,e}clear(){this.size=0}toString(){let n="{";for(let e=0;e<this.size;e++)e!==0&&(n+=", "),n+=this.densePcs[e];return n+="}",n}},yD=class AB{static fromRE2(e){const t=new AB;return t.prog=e.prog,t.re2=e,t.q0=new Hl(t.prog.numInst()),t.q1=new Hl(t.prog.numInst()),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}static fromMachine(e){return AB.fromRE2(e.re2)}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?Y.emptyInts():Y.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,r){const s=this.re2.cond;if(s===Y.EMPTY_ALL||(r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);let i=this.prog.numLb>0?0:t,o=t,B=this.q0,u=this.q1,c=e.step(i),h=c>>3,f=c&7,p=-1,y=0;c!==rt.EOF()&&(c=e.step(i+f),p=c>>3,y=c&7);let R;for(i===0?R=Y.emptyOpContext(-1,h):R=e.context(i);;){if(B.isEmpty()){if(s&Y.EMPTY_BEGIN_TEXT&&i!==0||(r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&i!==0||this.matched)break;if(this.prog.numLb===0&&this.re2.prefix.length!==0&&p!==this.re2.prefixRune&&e.canCheckPrefix()){const j=e.index(this.re2,i);if(j<0)break;i+=j,c=e.step(i),h=c>>3,f=c&7,c=e.step(i+f),p=c>>3,y=c&7,R=e.context(i)}}if(i===0&&this.prog.numLb>0)for(let j=0;j<this.prog.lbStarts.length;j++)this.add(B,this.prog.lbStarts[j],i,this.matchcap,0,R);!this.matched&&(i===0||r===V.UNANCHORED)&&i>=o&&(this.ncap>0&&(this.matchcap[0]=i),this.add(B,this.prog.start,i,this.matchcap,0,R));const F=i+f;if(R=e.context(F),this.step(B,u,i,F,h,R,r,i===e.endPos()),f===0||this.ncap===0&&this.matched)break;i+=f,h=p,f=y,h!==-1&&(c=e.step(i+f),p=c>>3,y=c&7);const M=B;B=u,u=M}return u.clear(),this.matched}matchSet(e,t,r){const s=this.re2.cond;if(s===Y.EMPTY_ALL)return[];if((r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,B=this.q0,u=this.q1,c=e.step(i),h=c>>3,f=c&7,p=-1,y=0;c!==rt.EOF()&&(c=e.step(i+f),p=c>>3,y=c&7);let R=i===0?Y.emptyOpContext(-1,h):e.context(i);const F=new Set;for(;!(B.isEmpty()&&(s&Y.EMPTY_BEGIN_TEXT&&i!==0||(r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&i!==0));){if(i===0&&this.prog.numLb>0)for(let ne=0;ne<this.prog.lbStarts.length;ne++)this.add(B,this.prog.lbStarts[ne],i,this.matchcap,0,R);(i===0||r===V.UNANCHORED)&&i>=o&&this.add(B,this.prog.start,i,this.matchcap,0,R);const M=i+f;R=e.context(M);for(let ne=0;ne<B.size;ne++){const oe=B.densePcs[ne],ce=this.prog.inst[oe],ye=ne*this.ncap;let ge=!1;switch(ce.op){case N.MATCH:if(r===V.ANCHOR_BOTH&&i!==e.endPos())break;F.add(ce.arg);break;case N.RUNE:ge=ce.matchRune(h);break;case N.RUNE1:ge=h===ce.runes[0];break;case N.RUNE_ANY:ge=!0;break;case N.RUNE_ANY_NOT_NL:ge=h!==10;break;default:continue}ge&&this.add(u,ce.out,M,B.denseCaps,ye,R)}if(B.clear(),f===0)break;i+=f,h=p,f=y,h!==-1&&(c=e.step(i+f),p=c>>3,y=c&7);const j=B;B=u,u=j}return u.clear(),Array.from(F).sort((M,j)=>M-j)}step(e,t,r,s,i,o,B,u){const c=this.re2.longest;for(let h=0;h<e.size;h++){const f=e.densePcs[h],p=h*this.ncap;if(c&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[p])continue;const y=this.prog.inst[f];let R=!1;switch(y.op){case N.MATCH:if(B===V.ANCHOR_BOTH&&!u)break;if(this.ncap>0&&(!c||!this.matched||this.matchcap[1]<r)){e.denseCaps[p+1]=r;for(let F=0;F<this.ncap;F++)this.matchcap[F]=e.denseCaps[p+F]}c||(e.size=0),this.matched=!0;break;case N.RUNE:R=y.matchRune(i);break;case N.RUNE1:R=i===y.runes[0];break;case N.RUNE_ANY:R=!0;break;case N.RUNE_ANY_NOT_NL:R=i!==10;break;default:continue}R&&this.add(t,y.out,s,e.denseCaps,p,o)}e.clear()}add(e,t,r,s,i,o){for(;;){if(t===0||e.contains(t))return;const B=e.add(t),u=this.prog.inst[t];switch(u.op){case N.FAIL:return;case N.ALT:case N.ALT_MATCH:this.add(e,u.out,r,s,i,o),t=u.arg;continue;case N.EMPTY_WIDTH:if(!(u.arg&~o)){t=u.out;continue}return;case N.NOP:t=u.out;continue;case N.CAPTURE:if(u.arg<this.ncap){const c=s[i+u.arg];s[i+u.arg]=r,this.add(e,u.out,r,s,i,o),s[i+u.arg]=c;return}else{t=u.out;continue}case N.LB_WRITE:this.lbTable[Math.abs(u.arg)]=r,t=u.out;continue;case N.LB_CHECK:if(u.arg>0){if(this.lbTable[u.arg]===r){t=u.out;continue}}else if(this.lbTable[-u.arg]!==r){t=u.out;continue}return;case N.MATCH:case N.RUNE:case N.RUNE1:case N.RUNE_ANY:case N.RUNE_ANY_NOT_NL:if(this.ncap>0){const c=B*this.ncap;for(let h=0;h<this.ncap;h++)e.denseCaps[c+h]=s[i+h]}return;default:throw new qs("unhandled")}}}};const Jl=n=>{let e=-2128831035;for(let t=0;t<n.length;t++)e^=n[t],e=Math.imul(e,16777619);return e},ID=(n,e)=>{if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0};var wD=class{constructor(n,e,t=[]){this.nfaStates=n,this.isMatch=e,this.matchIDs=t,this.nextLatin1=new Array(Q.MAX_LATIN1+1).fill(null),this.nextLatin1Anchored=new Array(Q.MAX_LATIN1+1).fill(null),this.transKeys=[],this.transVals=[],this.lastSeen=0}},$t,TD=($t=class{constructor(e,t=8388608){this.prog=e,this.stateCache=new Map,this.stateCount=0,this.startState=null,this.stateLimit=Math.max(1,Math.floor(t/$t.STATE_MEMORY_ESTIMATE)),this.cacheClears=0,this.failed=!1,this.clock=0}computeClosure(e){const t=new Set,r=[...e];let s=!1;const i=[];for(;r.length>0;){const B=r.pop();if(t.has(B))continue;t.add(B);const u=this.prog.getInst(B);switch(u.op){case N.MATCH:s=!0,i.includes(u.arg)||i.push(u.arg);break;case N.ALT:case N.ALT_MATCH:r.push(u.out),r.push(u.arg);break;case N.NOP:case N.CAPTURE:r.push(u.out);break;case N.EMPTY_WIDTH:case N.LB_WRITE:case N.LB_CHECK:return null}}const o=Int32Array.from(t).sort();return i.sort((B,u)=>B-u),{pcs:o,isMatch:s,matchIDs:i}}getState(e){const t=this.computeClosure(e);if(!t)return null;const r=t.pcs,s=Jl(r);let i=this.stateCache.get(s);if(i)for(let B=0;B<i.length;B++){const u=i[B];if(ID(u.nfaStates,r))return u.lastSeen=++this.clock,u}else i=[],this.stateCache.set(s,i);if(this.failed)return null;if(this.stateCount>=this.stateLimit){if(this.cacheClears++,this.cacheClears>=$t.MAX_CACHE_CLEARS)return this.failed=!0,this.stateCache.clear(),this.stateCount=0,this.startState=null,null;this.evictCache(),i=this.stateCache.get(s),i||(i=[],this.stateCache.set(s,i))}const o=new wD(r,t.isMatch,t.matchIDs);return o.lastSeen=++this.clock,i.push(o),this.stateCount++,o}evictCache(){const e=[];for(const o of this.stateCache.values())for(let B=0;B<o.length;B++)e.push(o[B]);e.sort((o,B)=>o.lastSeen-B.lastSeen);const t=Math.max(1,Math.floor(this.stateLimit/2)),r=e.length-t,s=e.slice(r),i=new Set(s);this.stateCache.clear(),this.stateCount=0;for(let o=0;o<s.length;o++){const B=s[o];B.nextLatin1.fill(null),B.nextLatin1Anchored.fill(null),B.transKeys.length=0,B.transVals.length=0;const u=Jl(B.nfaStates);let c=this.stateCache.get(u);c||(c=[],this.stateCache.set(u,c)),c.push(B),this.stateCount++}this.startState&&!i.has(this.startState)&&(this.startState=null)}step(e,t,r){if(t<=Q.MAX_LATIN1)if(r===V.UNANCHORED){const o=e.nextLatin1[t];if(o!==null)return o}else{const o=e.nextLatin1Anchored[t];if(o!==null)return o}else{const o=t+(r===V.UNANCHORED?0:Q.MAX_RUNE+1),B=e.transKeys,u=B.length;for(let c=0;c<u;c++)if(B[c]===o)return e.transVals[c]}const s=[];for(let o=0;o<e.nfaStates.length;o++){const B=e.nfaStates[o],u=this.prog.getInst(B);N.isRuneOp(u.op)&&u.matchRune(t)&&s.push(u.out)}r===V.UNANCHORED&&s.push(this.prog.start);const i=this.getState(s);if(t<=Q.MAX_LATIN1)r===V.UNANCHORED?e.nextLatin1[t]=i:e.nextLatin1Anchored[t]=i;else{const o=t+(r===V.UNANCHORED?0:Q.MAX_RUNE+1);e.transKeys.push(o),e.transVals.push(i)}return i}match(e,t,r){if((r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&t!==0)return!1;if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;if(i.isMatch)if(r===V.ANCHOR_BOTH){if(t===s)return!0}else return!0;let o=t;for(;o<s;){const B=e.step(o),u=B>>3,c=B&7;if(c===0)break;if(i=r===V.UNANCHORED&&u<=Q.MAX_LATIN1&&i.nextLatin1[u]||this.step(i,u,r),i===null)return null;if(i.lastSeen=++this.clock,i.isMatch)if(r===V.ANCHOR_BOTH){if(o+c===s)return!0}else return!0;if(i.nfaStates.length===0&&r!==V.UNANCHORED)return!1;o+=c}return!1}matchSet(e,t,r){if((r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&t!==0)return[];if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;const o=new Set,B=(c,h)=>{c.isMatch&&(r===V.ANCHOR_BOTH?h===s&&c.matchIDs.forEach(f=>o.add(f)):c.matchIDs.forEach(f=>o.add(f)))};B(i,t);let u=t;for(;u<s;){const c=e.step(u),h=c>>3,f=c&7;if(f===0)break;if(i=r===V.UNANCHORED&&h<=Q.MAX_LATIN1&&i.nextLatin1[h]||this.step(i,h,r),i===null)return null;if(i.lastSeen=++this.clock,u+=f,B(i,u),i.nfaStates.length===0&&r!==V.UNANCHORED)break}return Array.from(o).sort((c,h)=>c-h)}},U($t,"MAX_CACHE_CLEARS",5),U($t,"STATE_MEMORY_ESTIMATE",838),$t);const AD=32,RD=500,nB=256,vD=256*1024;var bD=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(nB),this.jobArg=new Uint8Array(nB),this.jobPos=new Int32Array(nB),this.jobLen=0,this.visited=new Uint32Array(0)}reset(n,e,t){this.end=e,this.jobLen=0,this.ncap=t;const r=n.numInst()*(e+1)+AD-1>>>5;this.visited.length<r?this.visited=new Uint32Array(r):this.visited.fill(0,0,r),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(n,e){const t=n*(this.end+1)+e,r=t>>>5,s=1<<(t&31);return this.visited[r]&s?!1:(this.visited[r]|=s,!0)}push(n,e,t,r){if(n.prog.getInst(e).op!==N.FAIL&&(r||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const s=this.jobPc.length*2,i=new Int32Array(s);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(s);o.set(this.jobArg),this.jobArg=o;const B=new Int32Array(s);B.set(this.jobPos),this.jobPos=B}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=r?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(n,e,t,r,s){const i=n.longest;for(this.push(n,t,r,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],B=this.jobArg[this.jobLen]===1,u=this.jobPos[this.jobLen],c=!0;for(;!(!c&&!this.shouldVisit(o,u));){c=!1;const h=n.prog.getInst(o);switch(h.op){case N.FAIL:throw new qs("unexpected InstFail");case N.ALT:if(B){B=!1,o=h.arg;continue}else{this.push(n,o,u,!0),o=h.out;continue}case N.ALT_MATCH:{const f=n.prog.getInst(h.out);if(N.isRuneOp(f.op)){this.push(n,h.arg,u,!1),o=h.arg,u=this.end;continue}this.push(n,h.out,this.end,!1),o=h.out;continue}case N.RUNE:{const f=e.step(u);if(f===rt.EOF()||!h.matchRune(f>>3))break;u+=f&7,o=h.out;continue}case N.RUNE1:{const f=e.step(u);if(f===rt.EOF()||f>>3!==h.runes[0])break;u+=f&7,o=h.out;continue}case N.RUNE_ANY_NOT_NL:{const f=e.step(u);if(f===rt.EOF()||f>>3===10)break;u+=f&7,o=h.out;continue}case N.RUNE_ANY:{const f=e.step(u);if(f===rt.EOF())break;u+=f&7,o=h.out;continue}case N.CAPTURE:if(B){this.cap[h.arg]=u;break}else{h.arg<this.ncap&&(this.push(n,o,this.cap[h.arg],!0),this.cap[h.arg]=u),o=h.out;continue}case N.EMPTY_WIDTH:{const f=e.context(u);if(h.arg&~f)break;o=h.out;continue}case N.NOP:o=h.out;continue;case N.MATCH:{if(s===V.ANCHOR_BOTH&&u!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=u);const f=this.matchcap[1];if((f===-1||i&&u>0&&u>f)&&this.matchcap.set(this.cap),!i||u===this.end)return!0;break}case N.LB_WRITE:case N.LB_CHECK:throw new qs("Backtracker cannot evaluate Lookbehind instructions");default:throw new qs("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const io=[];var oo=class Tf{static shouldBacktrack(e){return e.numInst()<=RD}static maxBitStateLen(e){return Tf.shouldBacktrack(e)?Math.floor(vD/e.numInst()):0}static execute(e,t,r,s,i){const o=e.cond;if(o===Y.EMPTY_ALL||(s===V.ANCHOR_START||s===V.ANCHOR_BOTH)&&r!==0||o&Y.EMPTY_BEGIN_TEXT&&r!==0)return null;const B=io.length>0?io.pop():new bD,u=t.endPos();B.reset(e.prog,u,i);let c=!1;if(o&Y.EMPTY_BEGIN_TEXT||s===V.ANCHOR_START||s===V.ANCHOR_BOTH)B.ncap>0&&(B.cap[0]=r),B.tryBacktrack(e,t,e.prog.start,r,s)&&(c=!0);else{let f=-1;for(;r<=u&&f!==0;r+=f){if(e.prefix.length>0){const y=t.index(e,r);if(y<0)break;r+=y}if(B.ncap>0&&(B.cap[0]=r),B.tryBacktrack(e,t,e.prog.start,r,s)){c=!0;break}const p=t.step(r);f=p===rt.EOF()?0:p&7}}if(!c)return io.push(B),null;const h=i===0?[]:Y.toArray(B.matchcap.subarray(0,i));return io.push(B),h}},ql=class{constructor(n){this.sparse=new Uint32Array(n),this.dense=new Uint32Array(n),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(n){return n<this.sparse.length&&this.sparse[n]<this.size&&this.dense[this.sparse[n]]===n}insert(n){this.contains(n)||this.insertNew(n)}insertNew(n){n>=this.sparse.length||(this.sparse[n]=this.size,this.dense[this.size]=n,this.size++)}};const PD=(n,e,t,r)=>{const s=n.length,i=e.length;let o=0,B=0;const u=[],c=[];let h=!0,f=-1;const p=y=>{const R=y?n:e,F=y?o:B,M=y?t:r;return f>0&&R[F]<=u[f]?!1:(u.push(R[F],R[F+1]),y?o+=2:B+=2,f+=2,c.push(M),!0)};for(;o<s||B<i;)if(B>=i?h=p(!0):o>=s||e[B]<n[o]?h=p(!1):h=p(!0),!h)return null;return{merged:u,next:c}};var SD=class{constructor(n){this.start=n.start,this.numCap=n.numCap,this.inst=new Array(n.inst.length);for(let e=0;e<n.inst.length;e++){const t=n.inst[e],r=new N(t.op);r.out=t.out,r.arg=t.arg,r.runes=t.runes?t.runes.slice():[],r.next=null,this.inst[e]=r}}};const OD=n=>{const e=new SD(n);for(let t=0;t<e.inst.length;t++){const r=e.inst[t];if(r.op!==N.ALT&&r.op!==N.ALT_MATCH)continue;let s="out",i="arg",o=e.inst[r[i]];if(o.op!==N.ALT&&o.op!==N.ALT_MATCH&&(s="arg",i="out",o=e.inst[r[i]],o.op!==N.ALT&&o.op!==N.ALT_MATCH))continue;const B=e.inst[r[s]];if(B.op===N.ALT||B.op===N.ALT_MATCH)continue;let u="out",c="arg",h=!1;o.out===t?h=!0:o.arg===t&&(h=!0,u="arg",c="out"),h&&(o[u]=r[s]),r[s]===o[u]&&(r[i]=o[c])}return e},ND=n=>{if(n.inst.length>=1e3)return null;const e=new ql(n.inst.length),t=new ql(n.inst.length),r=new Array(n.inst.length),s=new Array(n.inst.length).fill(!1),i=o=>{let B=!0;const u=n.inst[o];if(t.contains(o))return!0;switch(t.insert(o),u.op){case N.ALT:case N.ALT_MATCH:{B=i(u.out)&&i(u.arg);let c=s[u.out],h=s[u.arg];if(c&&h)return!1;if(h){const R=u.out;u.out=u.arg,u.arg=R;const F=c;c=h,h=F}c&&(s[o]=!0,u.op=N.ALT_MATCH);const f=r[u.out]||[],p=r[u.arg]||[],y=PD(f,p,u.out,u.arg);if(!y)return!1;r[o]=y.merged,u.next=new Uint32Array(y.next);break}case N.CAPTURE:case N.EMPTY_WIDTH:case N.NOP:B=i(u.out),s[o]=s[u.out],r[o]=r[u.out]?r[u.out].slice():[],u.next=new Uint32Array(Math.floor(r[o].length/2)+1).fill(u.out);break;case N.MATCH:case N.FAIL:s[o]=u.op===N.MATCH;break;case N.RUNE:{if(s[o]=!1,u.next&&u.next.length>0)break;if(e.insert(u.out),!u.runes||u.runes.length===0){r[o]=[],u.next=new Uint32Array([u.out]);break}let c=[];if(u.runes.length===1&&u.arg&V.FOLD_CASE){const h=u.runes[0];c.push(h,h);for(let f=Q.simpleFold(h);f!==h;f=Q.simpleFold(f))c.push(f,f);c.sort((f,p)=>f-p)}else for(let h=0;h<u.runes.length;h++)c.push(u.runes[h]);r[o]=c,u.next=new Uint32Array(Math.floor(c.length/2)+1).fill(u.out),u.op=N.RUNE;break}case N.RUNE1:{if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out);let c=[];if(u.arg&V.FOLD_CASE){const h=u.runes[0];c.push(h,h);for(let f=Q.simpleFold(h);f!==h;f=Q.simpleFold(f))c.push(f,f);c.sort((f,p)=>f-p)}else c.push(u.runes[0],u.runes[0]);r[o]=c,u.next=new Uint32Array(Math.floor(c.length/2)+1).fill(u.out),u.op=N.RUNE;break}case N.RUNE_ANY:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),r[o]=[0,Q.MAX_RUNE],u.next=new Uint32Array([u.out]);break;case N.RUNE_ANY_NOT_NL:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),r[o]=[0,9,11,Q.MAX_RUNE],u.next=new Uint32Array(Math.floor(r[o].length/2)+1).fill(u.out);break}return B};for(e.clear(),e.insert(n.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<n.inst.length;o++)r[o]&&(n.inst[o].runes=r[o]);return n},LD=(n,e)=>{for(let t=0;t<e.inst.length;t++){const r=e.inst[t];switch(r.op){case N.ALT:case N.ALT_MATCH:case N.RUNE:break;case N.CAPTURE:case N.EMPTY_WIDTH:case N.NOP:case N.MATCH:case N.FAIL:n.inst[t].next=null;break;case N.RUNE1:case N.RUNE_ANY:case N.RUNE_ANY_NOT_NL:n.inst[t].next=null,n.inst[t].op=r.op,n.inst[t].runes=r.runes?r.runes.slice():[];break}}};var jl=class Af{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==N.EMPTY_WIDTH||!(t.arg&Y.EMPTY_BEGIN_TEXT))return null;let r=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===N.ALT||e.inst[i].op===N.ALT_MATCH){r=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],B=e.inst[o.out].op;switch(o.op){case N.ALT:case N.ALT_MATCH:if(B===N.MATCH||e.inst[o.arg].op===N.MATCH)return null;break;case N.EMPTY_WIDTH:if(B===N.MATCH){if((o.arg&Y.EMPTY_END_TEXT)===Y.EMPTY_END_TEXT)continue;return null}break;default:if(B===N.MATCH&&r)return null;break}}let s=OD(e);return s=ND(s),s!==null&&LD(s,e),s}static next(e,t){const r=e.matchRunePos(t);return r>=0?e.next[r]:e.op===N.ALT_MATCH?e.out:0}static execute(e,t,r,s,i){const o=e.onepass;if(!o)return null;const B=new Int32Array(i).fill(-1);let u=!1,c=t.step(r),h=c>>3,f=c&7,p=rt.EOF(),y=-1,R=0;c!==rt.EOF()&&(p=t.step(r+f),p!==rt.EOF()&&(y=p>>3,R=p&7));let F=r===0?Y.emptyOpContext(-1,h):t.context(r),M=o.start,j;for(;;){switch(j=o.inst[M],M=j.out,j.op){case N.MATCH:return s===V.ANCHOR_BOTH&&r!==t.endPos()?null:(u=!0,B.length>0&&(B[0]=0,B[1]=r),i===0?[]:Y.toArray(B));case N.RUNE:if(!j.matchRune(h))return null;break;case N.RUNE1:if(h!==j.runes[0])return null;break;case N.RUNE_ANY:break;case N.RUNE_ANY_NOT_NL:if(h===10)return null;break;case N.ALT:case N.ALT_MATCH:M=Af.next(j,h);continue;case N.FAIL:return null;case N.NOP:continue;case N.EMPTY_WIDTH:if(j.arg&~F)return null;continue;case N.CAPTURE:j.arg<B.length&&(B[j.arg]=r);continue;default:throw new qs("bad inst")}if(f===0)break;F=Y.emptyOpContext(h,y),r+=f,h=y,f=R,h!==-1&&(p=t.step(r+f),p!==rt.EOF()?(y=p>>3,R=p&7):(y=-1,R=0))}return u?i===0?[]:Y.toArray(B):null}},Z,w=(Z=class{static isPseudoOp(e){return e>=Z.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===O.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new Z(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=Z.emptySubs(),this.runes=[],this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=Z.emptySubs(),this.runes=[],this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case Z.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case Z.Op.EMPTY_MATCH:e+="(?:)";break;case Z.Op.STAR:case Z.Op.PLUS:case Z.Op.QUEST:case Z.Op.REPEAT:{const t=this.subs[0];switch(t.op>Z.Op.CAPTURE||t.op===Z.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case Z.Op.STAR:e+="*";break;case Z.Op.PLUS:e+="+";break;case Z.Op.QUEST:e+="?";break;case Z.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}this.flags&V.NON_GREEDY&&(e+="?");break}case Z.Op.CONCAT:for(let t of this.subs)t.op===Z.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case Z.Op.ALTERNATE:{let t="";for(let r of this.subs)e+=t,t="|",e+=r.appendTo();break}case Z.Op.LITERAL:this.flags&V.FOLD_CASE&&(e+="(?i:");for(let t of this.runes)e+=Y.escapeRune(t);this.flags&V.FOLD_CASE&&(e+=")");break;case Z.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case Z.Op.ANY_CHAR:e+="(?s:.)";break;case Z.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case Z.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case Z.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==Z.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case Z.Op.BEGIN_TEXT:e+="\\A";break;case Z.Op.END_TEXT:this.flags&V.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case Z.Op.BEGIN_LINE:e+="^";break;case Z.Op.END_LINE:e+="$";break;case Z.Op.WORD_BOUNDARY:e+="\\b";break;case Z.Op.NO_WORD_BOUNDARY:e+="\\B";break;case Z.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===Q.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const r=this.runes[t]+1,s=this.runes[t+1]-1;e+=Z.quoteIfHyphen(r),e+=Y.escapeRune(r),r!==s&&(e+="-",e+=Z.quoteIfHyphen(s),e+=Y.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){const r=this.runes[t],s=this.runes[t+1];e+=Z.quoteIfHyphen(r),e+=Y.escapeRune(r),r!==s&&(e+="-",e+=Z.quoteIfHyphen(s),e+=Y.escapeRune(s))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===Z.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const r=t.maxCap();e<r&&(e=r)}return e}equals(e){if(!(e!==null&&e instanceof Z)||this.op!==e.op)return!1;switch(this.op){case Z.Op.END_TEXT:if((this.flags&V.WAS_DOLLAR)!==(e.flags&V.WAS_DOLLAR))return!1;break;case Z.Op.LITERAL:case Z.Op.CHAR_CLASS:if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case Z.Op.ALTERNATE:case Z.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case Z.Op.STAR:case Z.Op.PLUS:case Z.Op.QUEST:if((this.flags&V.NON_GREEDY)!==(e.flags&V.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case Z.Op.REPEAT:if((this.flags&V.NON_GREEDY)!==(e.flags&V.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case Z.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case Z.Op.PLB:case Z.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1;break}return!0}},U(Z,"Op",wf(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"])),Z),Kl=class{constructor(n){this.next=[Object.create(null)],this.fail=[0],this.match=[!1];for(const t of n){let r=0;for(let s=0;s<t.length;s++){const i=t[s];i in this.next[r]||(this.next.push(Object.create(null)),this.fail.push(0),this.match.push(!1),this.next[r][i]=this.next.length-1),r=this.next[r][i]}this.match[r]=!0}const e=[];for(const t in this.next[0])if(Object.prototype.hasOwnProperty.call(this.next[0],t)){const r=this.next[0][t];this.fail[r]=0,e.push(r)}for(;e.length>0;){const t=e.shift();for(const r in this.next[t])if(Object.prototype.hasOwnProperty.call(this.next[t],r)){const s=this.next[t][r];let i=this.fail[t];for(;i!==0&&!(r in this.next[i]);)i=this.fail[i];r in this.next[i]?this.fail[s]=this.next[i][r]:this.fail[s]=0,this.match[s]=this.match[s]||this.match[this.fail[s]],e.push(s)}}}searchUTF16(n,e,t){let r=0;for(let s=e;s<t;s++){const i=n.charCodeAt(s);for(;r!==0&&!(i in this.next[r]);)r=this.fail[r];if(i in this.next[r]&&(r=this.next[r][i]),this.match[r])return!0}return!1}searchUTF8(n,e,t){let r=0;for(let s=e;s<t;s++){const i=n[s];for(;r!==0&&!(i in this.next[r]);)r=this.fail[r];if(i in this.next[r]&&(r=this.next[r][i]),this.match[r])return!0}return!1}},Vt,Ce=(Vt=class{constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.ac16=null,this.ac8=null}eval(e,t){switch(this.type){case Vt.Type.NONE:return!0;case Vt.Type.EXACT:return e.hasString(this,t);case Vt.Type.AND:for(let r=0;r<this.subs.length;r++)if(!this.subs[r].eval(e,t))return!1;return!0;case Vt.Type.OR:if(this.ac16&&this.ac8)return e.hasAnyString(this,t);for(let r=0;r<this.subs.length;r++)if(this.subs[r].eval(e,t))return!0;return!1;default:return!0}}},U(Vt,"Type",{NONE:0,EXACT:1,AND:2,OR:3}),Vt),FD=class Wt{static build(e){const t=Wt.fromRegexp(e);return Wt.simplify(t)}static fromRegexp(e){if(!e)return new Ce(Ce.Type.NONE);switch(e.op){case w.Op.PLB:case w.Op.NLB:case w.Op.NO_MATCH:case w.Op.EMPTY_MATCH:case w.Op.BEGIN_LINE:case w.Op.END_LINE:case w.Op.BEGIN_TEXT:case w.Op.END_TEXT:case w.Op.WORD_BOUNDARY:case w.Op.NO_WORD_BOUNDARY:case w.Op.CHAR_CLASS:case w.Op.ANY_CHAR_NOT_NL:case w.Op.ANY_CHAR:return new Ce(Ce.Type.NONE);case w.Op.LITERAL:{if(e.runes.length===0||e.flags&V.FOLD_CASE)return new Ce(Ce.Type.NONE);const t=new Ce(Ce.Type.EXACT);let r="";for(let s=0;s<e.runes.length;s++)r+=String.fromCodePoint(e.runes[s]);return t.str=r,t.bytes=Y.stringToUtf8ByteArray(t.str),t}case w.Op.CAPTURE:case w.Op.PLUS:return Wt.fromRegexp(e.subs[0]);case w.Op.REPEAT:return e.min>=1?Wt.fromRegexp(e.subs[0]):new Ce(Ce.Type.NONE);case w.Op.CONCAT:{const t=new Ce(Ce.Type.AND);for(const r of e.subs)t.subs.push(Wt.fromRegexp(r));return t}case w.Op.ALTERNATE:{const t=new Ce(Ce.Type.OR);for(const r of e.subs)t.subs.push(Wt.fromRegexp(r));return t}default:return new Ce(Ce.Type.NONE)}}static simplify(e){if(e.type===Ce.Type.EXACT||e.type===Ce.Type.NONE)return e;if(e.type===Ce.Type.AND){const t=[];for(const r of e.subs){const s=Wt.simplify(r);if(s.type!==Ce.Type.NONE)if(s.type===Ce.Type.AND)for(let i=0;i<s.subs.length;i++)t.push(s.subs[i]);else t.push(s)}return t.length===0?new Ce(Ce.Type.NONE):t.length===1?t[0]:(e.subs=t,e)}if(e.type===Ce.Type.OR){const t=[];for(const o of e.subs){const B=Wt.simplify(o);if(B.type===Ce.Type.NONE)return new Ce(Ce.Type.NONE);if(B.type===Ce.Type.OR)for(let u=0;u<B.subs.length;u++)t.push(B.subs[u]);else t.push(B)}if(t.length===0)return new Ce(Ce.Type.NONE);if(t.length===1)return t[0];const r=new Set,s=[];for(const o of t)o.type===Ce.Type.EXACT?r.has(o.str)||(r.add(o.str),s.push(o)):s.push(o);e.subs=s;let i=!0;for(const o of s)if(o.type!==Ce.Type.EXACT){i=!1;break}return i&&s.length>1&&(e.ac16=new Kl(s.map(o=>{const B=[];for(let u=0;u<o.str.length;u++)B.push(o.str.charCodeAt(u));return B})),e.ac8=new Kl(s.map(o=>o.bytes))),e}return e}},Tt=class{constructor(n=0,e=0){this.head=n,this.tail=e}},kD=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0}getInst(n){return this.inst[n]}numInst(){return this.inst.length}addInst(n){this.inst.push(new N(n))}skipNop(n){let e=this.inst[n];for(;e.op===N.NOP||e.op===N.CAPTURE;)e=this.inst[n],n=e.out;return e}prefix(){let n="",e=this.skipNop(this.start);if(!N.isRuneOp(e.op)||e.runes.length!==1)return[e.op===N.MATCH,n];for(;N.isRuneOp(e.op)&&e.runes.length===1&&!(e.arg&V.FOLD_CASE);)n+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===N.MATCH,n]}startCond(){let n=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case N.EMPTY_WIDTH:n|=t.arg;break;case N.FAIL:return-1;case N.CAPTURE:case N.NOP:break;default:break e}e=t.out}return n}patch(n,e){let t=n.head;for(;t!==0;){const r=this.inst[t>>1];t&1?(t=r.arg,r.arg=e):(t=r.out,r.out=e)}}append(n,e){if(n.head===0)return e;if(e.head===0)return n;const t=this.inst[n.tail>>1];return n.tail&1?t.arg=e.head:t.out=e.head,new Tt(n.head,e.tail)}toString(){let n="";for(let e=0;e<this.inst.length;e++){const t=n.length;n+=e,e===this.start&&(n+="*"),n+="        ".substring(n.length-t),n+=this.inst[e],n+=`
`}return n}},ao=class{constructor(n=0,e=new Tt,t=!1){this.i=n,this.out=e,this.nullable=t}},xD=class Lr{static ANY_RUNE_NOT_NL(){return[0,O.CODES.get(`
`)-1,O.CODES.get(`
`)+1,Q.MAX_RUNE]}static ANY_RUNE(){return[0,Q.MAX_RUNE]}static compileRegexp(e){const t=new Lr,r=t.compile(e);return t.prog.patch(r.out,t.newInst(N.MATCH).i),t.prog.start=r.i,t.prog}static compileSet(e){const t=new Lr;if(e.length===0)return t.prog.start=t.newInst(N.FAIL).i,t.prog;let r=[];for(let i=0;i<e.length;i++){const o=t.compile(e[i]),B=t.newInst(N.MATCH);t.prog.getInst(B.i).arg=i,t.prog.patch(o.out,B.i),r.push(o.i)}let s=r[0];for(let i=1;i<r.length;i++){const o=t.newInst(N.ALT),B=t.prog.getInst(o.i);B.out=s,B.arg=r[i],s=o.i}return t.prog.start=s,t.prog}constructor(){this.prog=new kD,this.newInst(N.FAIL)}newInst(e){return this.prog.addInst(e),new ao(this.prog.numInst()-1,new Tt,!0)}nop(){const e=this.newInst(N.NOP);return e.out=new Tt(e.i<<1,e.i<<1),e}fail(){return new ao}cap(e){const t=this.newInst(N.CAPTURE);return t.out=new Tt(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new ao(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const r=this.newInst(N.ALT),s=this.prog.getInst(r.i);return s.out=e.i,s.arg=t.i,r.out=this.prog.append(e.out,t.out),r.nullable=e.nullable||t.nullable,r}loop(e,t){const r=this.newInst(N.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=new Tt(r.i<<1,r.i<<1)):(s.out=e.i,r.out=new Tt(r.i<<1|1,r.i<<1|1)),this.prog.patch(e.out,r.i),r}quest(e,t){const r=this.newInst(N.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=new Tt(r.i<<1,r.i<<1)):(s.out=e.i,r.out=new Tt(r.i<<1|1,r.i<<1|1)),r.out=this.prog.append(r.out,e.out),r}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new ao(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(N.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new Tt(t.i<<1,t.i<<1),t}rune(e,t){const r=this.newInst(N.RUNE);r.nullable=!1;const s=this.prog.getInst(r.i);return s.runes=e,t&=V.FOLD_CASE,(e.length!==1||Q.simpleFold(e[0])===e[0])&&(t&=-2),s.arg=t,r.out=new Tt(r.i<<1,r.i<<1),!(t&V.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?s.op=N.RUNE1:e.length===2&&e[0]===0&&e[1]===Q.MAX_RUNE?s.op=N.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===O.CODES.get(`
`)-1&&e[2]===O.CODES.get(`
`)+1&&e[3]===Q.MAX_RUNE&&(s.op=N.RUNE_ANY_NOT_NL),r}lookBehind(e,t){const r=this.newInst(N.LB_WRITE);this.prog.getInst(r.i).arg=t;const s=this.rune(Lr.ANY_RUNE(),0),i=this.star(s,!0),o=this.cat(i,e);this.prog.patch(o.out,r.i);const B=this.newInst(N.LB_CHECK);return this.prog.getInst(B.i).arg=t,this.prog.lbStarts.push(o.i),Math.abs(t)>this.prog.numLb&&(this.prog.numLb=Math.abs(t)),B.out=new Tt(B.i<<1,B.i<<1),B}compile(e){switch(e.op){case w.Op.NO_MATCH:return this.fail();case w.Op.EMPTY_MATCH:return this.nop();case w.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let r of e.runes){const s=this.rune([r],e.flags);t=t===null?s:this.cat(t,s)}return t}case w.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case w.Op.ANY_CHAR_NOT_NL:return this.rune(Lr.ANY_RUNE_NOT_NL(),0);case w.Op.ANY_CHAR:return this.rune(Lr.ANY_RUNE(),0);case w.Op.BEGIN_LINE:return this.empty(Y.EMPTY_BEGIN_LINE);case w.Op.END_LINE:return this.empty(Y.EMPTY_END_LINE);case w.Op.BEGIN_TEXT:return this.empty(Y.EMPTY_BEGIN_TEXT);case w.Op.END_TEXT:return this.empty(Y.EMPTY_END_TEXT);case w.Op.WORD_BOUNDARY:return this.empty(Y.EMPTY_WORD_BOUNDARY);case w.Op.NO_WORD_BOUNDARY:return this.empty(Y.EMPTY_NO_WORD_BOUNDARY);case w.Op.PLB:case w.Op.NLB:return this.lookBehind(this.compile(e.subs[0]),e.lb);case w.Op.CAPTURE:{const t=this.cap(e.cap<<1),r=this.compile(e.subs[0]),s=this.cap(e.cap<<1|1);return this.cat(this.cat(t,r),s)}case w.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&V.NON_GREEDY)!==0);case w.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&V.NON_GREEDY)!==0);case w.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&V.NON_GREEDY)!==0);case w.Op.CONCAT:if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.cat(t,s)}return t}case w.Op.ALTERNATE:if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.alt(t,s)}return t}default:throw new _D("regexp: unhandled case in compile")}}},VD=class pt{static simplify(e){if(e===null)return null;switch(e.op){case w.Op.PLB:case w.Op.NLB:case w.Op.CAPTURE:{const t=pt.simplify(e.subs[0]);if(t!==e.subs[0]){const r=w.fromRegexp(e);return r.runes=[],r.subs=[t],r}return e}case w.Op.CONCAT:case w.Op.ALTERNATE:{const t=[];let r=!1;for(let s=0;s<e.subs.length;s++){const i=e.subs[s],o=pt.simplify(i);if(o!==i&&(r=!0),e.op===w.Op.CONCAT){if(o.op===w.Op.NO_MATCH)return new w(w.Op.NO_MATCH);if(o.op===w.Op.EMPTY_MATCH){r=!0;continue}if(o.op===w.Op.CONCAT){r=!0;for(let B=0;B<o.subs.length;B++)t.push(o.subs[B]);continue}}else if(e.op===w.Op.ALTERNATE){if(o.op===w.Op.NO_MATCH){r=!0;continue}if(o.op===w.Op.ALTERNATE){r=!0;for(let B=0;B<o.subs.length;B++)t.push(o.subs[B]);continue}}t.push(o)}if(r){if(t.length===0)return new w(e.op===w.Op.CONCAT?w.Op.EMPTY_MATCH:w.Op.NO_MATCH);if(t.length===1)return t[0];const s=w.fromRegexp(e);return s.runes=[],s.subs=t,s}return e}case w.Op.CHAR_CLASS:return e.runes===null?e:e.runes.length===0?new w(w.Op.NO_MATCH):e.runes.length===2&&e.runes[0]===0&&e.runes[1]===Q.MAX_RUNE?new w(w.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===O.CODES.get(`
`)-1&&e.runes[2]===O.CODES.get(`
`)+1&&e.runes[3]===Q.MAX_RUNE?new w(w.Op.ANY_CHAR_NOT_NL):e;case w.Op.STAR:case w.Op.PLUS:case w.Op.QUEST:{const t=pt.simplify(e.subs[0]);return pt.simplify1(e.op,e.flags,t,e)}case w.Op.REPEAT:{if(e.min===0&&e.max===0)return new w(w.Op.EMPTY_MATCH);const t=pt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return pt.simplify1(w.Op.STAR,e.flags,t,null);if(e.min===1)return pt.simplify1(w.Op.PLUS,e.flags,t,null);const s=new w(w.Op.CONCAT),i=[];for(let o=0;o<e.min-1;o++)i.push(t);return i.push(pt.simplify1(w.Op.PLUS,e.flags,t,null)),s.subs=i.slice(0),pt.simplify(s)}if(e.min===1&&e.max===1)return t;let r=null;if(e.min>0){r=[];for(let s=0;s<e.min;s++)r.push(t)}if(e.max>e.min){let s=pt.simplify1(w.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const o=new w(w.Op.CONCAT);o.subs=[t,s],s=pt.simplify1(w.Op.QUEST,e.flags,o,null)}if(r===null)return s;r.push(s)}if(r!==null){const s=new w(w.Op.CONCAT);return s.subs=r.slice(0),pt.simplify(s)}return new w(w.Op.NO_MATCH)}}return e}static simplify1(e,t,r,s){if(r.op===w.Op.EMPTY_MATCH)return r;if(r.op===w.Op.NO_MATCH)return e===w.Op.PLUS?r:new w(w.Op.EMPTY_MATCH);if(e===r.op&&(t&V.NON_GREEDY)===(r.flags&V.NON_GREEDY))return r;if(s!==null&&s.op===e&&(s.flags&V.NON_GREEDY)===(t&V.NON_GREEDY)&&r===s.subs[0])return s;const i=new w(e);return i.flags=t,i.subs=[r],i}},fe=class{constructor(n,e){this.sign=n,this.cls=e}};const zl=[48,57],Ql=[9,10,12,13,32,32],Wl=[48,57,65,90,95,95,97,122],$l=new Map([["\\d",new fe(1,zl)],["\\D",new fe(-1,zl)],["\\s",new fe(1,Ql)],["\\S",new fe(-1,Ql)],["\\w",new fe(1,Wl)],["\\W",new fe(-1,Wl)]]),Yl=[48,57,65,90,97,122],Xl=[65,90,97,122],Zl=[0,127],eh=[9,9,32,32],th=[0,31,127,127],nh=[48,57],rh=[33,126],sh=[97,122],ih=[32,126],oh=[33,47,58,64,91,96,123,126],ah=[9,13,32,32],Bh=[65,90],uh=[48,57,65,90,95,95,97,122],ch=[48,57,65,70,97,102],lh=new Map([["[:alnum:]",new fe(1,Yl)],["[:^alnum:]",new fe(-1,Yl)],["[:alpha:]",new fe(1,Xl)],["[:^alpha:]",new fe(-1,Xl)],["[:ascii:]",new fe(1,Zl)],["[:^ascii:]",new fe(-1,Zl)],["[:blank:]",new fe(1,eh)],["[:^blank:]",new fe(-1,eh)],["[:cntrl:]",new fe(1,th)],["[:^cntrl:]",new fe(-1,th)],["[:digit:]",new fe(1,nh)],["[:^digit:]",new fe(-1,nh)],["[:graph:]",new fe(1,rh)],["[:^graph:]",new fe(-1,rh)],["[:lower:]",new fe(1,sh)],["[:^lower:]",new fe(-1,sh)],["[:print:]",new fe(1,ih)],["[:^print:]",new fe(-1,ih)],["[:punct:]",new fe(1,oh)],["[:^punct:]",new fe(-1,oh)],["[:space:]",new fe(1,ah)],["[:^space:]",new fe(-1,ah)],["[:upper:]",new fe(1,Bh)],["[:^upper:]",new fe(-1,Bh)],["[:word:]",new fe(1,uh)],["[:^word:]",new fe(-1,uh)],["[:xdigit:]",new fe(1,ch)],["[:^xdigit:]",new fe(-1,ch)]]);var gn=class En{static charClassToString(e,t){let r="[";for(let s=0;s<t;s+=2){s>0&&(r+=" ");const i=e[s],o=e[s+1];i===o?r+=`0x${i.toString(16)}`:r+=`0x${i.toString(16)}-0x${o.toString(16)}`}return r+="]",r}static cmp(e,t,r,s){const i=e[t]-r;return i!==0?i:s-e[t+1]}static qsortIntPair(e,t,r){const s=((t+r)/2|0)&-2,i=e[s],o=e[s+1];let B=t,u=r;for(;B<=u;){for(;B<r&&En.cmp(e,B,i,o)<0;)B+=2;for(;u>t&&En.cmp(e,u,i,o)>0;)u-=2;if(B<=u){if(B!==u){let c=e[B];e[B]=e[u],e[u]=c,c=e[B+1],e[B+1]=e[u+1],e[u+1]=c}B+=2,u-=2}}t<u&&En.qsortIntPair(e,t,u),B<r&&En.qsortIntPair(e,B,r)}constructor(e=Y.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;En.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const r=this.r[t],s=this.r[t+1];if(r<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=r,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return t&V.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let r=2;r<=4;r+=2)if(this.len>=r){const s=this.r[this.len-r],i=this.r[this.len-r+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-r]=e),t>i&&(this.r[this.len-r+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=Q.MIN_FOLD&&t>=Q.MAX_FOLD)return this.appendRange(e,t);if(t<Q.MIN_FOLD||e>Q.MAX_FOLD)return this.appendRange(e,t);e<Q.MIN_FOLD&&(this.appendRange(e,Q.MIN_FOLD-1),e=Q.MIN_FOLD),t>Q.MAX_FOLD&&(this.appendRange(Q.MAX_FOLD+1,t),t=Q.MAX_FOLD);for(let r=e;r<=t;r++){this.appendRange(r,r);for(let s=Q.simpleFold(r);s!==r;s=Q.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let r=0;r<e.length;r+=2){const s=e[r],i=e[r+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=Q.MAX_RUNE&&this.appendRange(t,Q.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const r=e.getLo(t),s=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(r,s);continue}for(let o=r;o<=s;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let r=0;r<e.length;++r){const s=e.getLo(r),i=e.getHi(r),o=e.getStride(r);if(o===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let B=s;B<=i;B+=o)t<=B-1&&this.appendRange(t,B-1),t=B+1}return t<=Q.MAX_RUNE&&this.appendRange(t,Q.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let r=0;r<this.len;r+=2){const s=this.r[r],i=this.r[r+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=Q.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=Q.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let r=e.cls;return t&&(r=new En().appendFoldedClass(r).cleanClass().toArray()),this.appendClassWithSign(r,e.sign)}toString(){return En.charClassToString(this.r,this.len)}},MD=class{constructor(n){this.str=n,this.position=0}pos(){return this.position}rewindTo(n){this.position=n}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(n){this.position+=n}skipString(n){this.position+=n.length}pop(){const n=this.str.codePointAt(this.position);return this.position+=Y.charCount(n),n}lookingAt(n){return this.str.startsWith(n,this.position)}rest(){return this.str.substring(this.position)}from(n){return this.str.substring(n,this.position)}toString(){return this.rest()}},H,GD=(H=class{static unicodeTable(e){return e==="Any"?{tab:H.ANY_TABLE,fold:H.ANY_TABLE,sign:1}:e==="Ascii"?{tab:H.ASCII_TABLE,fold:H.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:ot.CATEGORIES.get("Cn"),fold:ot.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:ot.CATEGORIES.get("LC"),fold:ot.FOLD_CATEGORIES.get("LC"),sign:1}:ot.CATEGORIES.has(e)?{tab:ot.CATEGORIES.get(e),fold:ot.FOLD_CATEGORIES.get(e),sign:1}:ot.SCRIPTS.has(e)?{tab:ot.SCRIPTS.get(e),fold:ot.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<Q.MIN_FOLD||e>Q.MAX_FOLD)return e;let t=e;const r=e;for(e=Q.simpleFold(e);e!==r;e=Q.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===w.Op.EMPTY_MATCH)return null;if(e.op===w.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===w.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const r=new w(w.Op.LITERAL);return r.flags=t,r.runes=Y.stringToRunes(e),r}static parse(e,t){return new H(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const r=H.parseInt(e);if(r===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=r;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=H.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),r<0||r>1e3||s===-2||s>1e3||s>=0&&r>s)throw new De(H.ERR_INVALID_REPEAT_SIZE,e.from(t));return r<<16|s&Q.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const r=e.codePointAt(t);if(r!==O.CODES.get("_")&&!Y.isalnum(r))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=O.CODES.get("0")&&e.peek()<=O.CODES.get("9");)e.skip(1);const r=e.from(t);return r.length===0||r.length>1&&r.codePointAt(0)===O.CODES.get("0")?-1:r.length>8?-2:parseInt(r,10)}static isCharClass(e){return e.op===w.Op.LITERAL&&e.runes.length===1||e.op===w.Op.CHAR_CLASS||e.op===w.Op.ANY_CHAR_NOT_NL||e.op===w.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case w.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case w.Op.CHAR_CLASS:for(let r=0;r<e.runes.length;r+=2)if(e.runes[r]<=t&&t<=e.runes[r+1])return!0;return!1;case w.Op.ANY_CHAR_NOT_NL:return t!==O.CODES.get(`
`);case w.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case w.Op.ANY_CHAR:break;case w.Op.ANY_CHAR_NOT_NL:H.matchRune(t,O.CODES.get(`
`))&&(e.op=w.Op.ANY_CHAR);break;case w.Op.CHAR_CLASS:t.op===w.Op.LITERAL?e.runes=new gn(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new gn(e.runes).appendClass(t.runes).toArray();break;case w.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=w.Op.CHAR_CLASS,e.runes=new gn().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new De(H.ERR_TRAILING_BACKSLASH);let r=e.pop();e:switch(r){case O.CODES.get("1"):case O.CODES.get("2"):case O.CODES.get("3"):case O.CODES.get("4"):case O.CODES.get("5"):case O.CODES.get("6"):case O.CODES.get("7"):if(!e.more()||e.peek()<O.CODES.get("0")||e.peek()>O.CODES.get("7"))break;case O.CODES.get("0"):{let s=r-O.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<O.CODES.get("0")||e.peek()>O.CODES.get("7"));i++)s=s*8+e.peek()-O.CODES.get("0"),e.skip(1);return s}case O.CODES.get("x"):{if(!e.more())break;if(r=e.pop(),r===O.CODES.get("{")){let o=0,B=0;for(;;){if(!e.more())break e;if(r=e.pop(),r===O.CODES.get("}"))break;const u=Y.unhex(r);if(u<0||(B=B*16+u,B>Q.MAX_RUNE))break e;o++}if(o===0)break e;return B}const s=Y.unhex(r);if(!e.more())break;r=e.pop();const i=Y.unhex(r);if(s<0||i<0)break;return s*16+i}case O.CODES.get("a"):return O.CODES.get("\x07");case O.CODES.get("f"):return O.CODES.get("\f");case O.CODES.get("n"):return O.CODES.get(`
`);case O.CODES.get("r"):return O.CODES.get("\r");case O.CODES.get("t"):return O.CODES.get("	");case O.CODES.get("v"):return O.CODES.get("\v");default:if(r<=Q.MAX_ASCII&&!Y.isalnum(r))return r;break}throw new De(H.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new De(H.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?H.parseEscape(e):e.pop()}static concatRunes(e,t){for(let r=0;r<t.length;r++)e.push(t[r]);return e}static hasCapture(e){if(e===null)return!1;if(e.op===w.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(H.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new w(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>H.MAX_RUNES)throw new De(H.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===w.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(H.MAX_SIZE/this.repeats)?this.repeats=H.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(H.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>H.MAX_SIZE)throw new De(H.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let r=0;switch(e.op){case w.Op.LITERAL:r=e.runes.length;break;case w.Op.PLB:case w.Op.NLB:case w.Op.CAPTURE:case w.Op.STAR:r=2+this.calcSize(e.subs[0]);break;case w.Op.PLUS:case w.Op.QUEST:r=1+this.calcSize(e.subs[0]);break;case w.Op.CONCAT:for(let s of e.subs)r=r+this.calcSize(s);break;case w.Op.ALTERNATE:for(let s of e.subs)r=r+this.calcSize(s);e.subs.length>1&&(r=r+e.subs.length-1);break;case w.Op.REPEAT:{let s=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?r=2+s:r=1+e.min*s;break}r=e.max*s+(e.max-e.min);break}}return r=Math.max(1,r),this.size===null&&(this.size=new Map),this.size.set(e,r),r}checkHeight(e){if(!(this.numRegexp<H.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>H.MAX_HEIGHT)throw new De(H.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let r=1;for(let s of e.subs){const i=this.calcHeight(s);r<1+i&&(r=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,r),r}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!w.isPseudoOp(this.stack[t-1].op);)t--;const r=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),r}push(e){if(this.numRunes+=e.runes.length,e.op===w.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=w.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===w.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&Q.simpleFold(e.runes[0])===e.runes[2]&&Q.simpleFold(e.runes[2])===e.runes[0]||e.op===w.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&Q.simpleFold(e.runes[0])===e.runes[1]&&Q.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|V.FOLD_CASE))return null;e.op=w.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|V.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const r=this.stack.length;if(r<2)return!1;const s=this.stack[r-1],i=this.stack[r-2];return s.op!==w.Op.LITERAL||i.op!==w.Op.LITERAL||(s.flags&V.FOLD_CASE)!==(i.flags&V.FOLD_CASE)?!1:(i.runes=H.concatRunes(i.runes,s.runes),e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1))}newLiteral(e,t){const r=this.newRegexp(w.Op.LITERAL);return r.flags=t,t&V.FOLD_CASE&&(e=H.minFoldRune(e)),r.runes=[e],r}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,r,s,i,o){let B=this.flags;if(B&V.PERL_X&&(i.more()&&i.lookingAt("?")&&(i.skip(1),B^=V.NON_GREEDY),o!==-1))throw new De(H.ERR_INVALID_REPEAT_OP,i.from(o));const u=this.stack.length;if(u===0)throw new De(H.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const c=this.stack[u-1];if(w.isPseudoOp(c.op))throw new De(H.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const h=this.newRegexp(e);if(h.min=t,h.max=r,h.flags=B,h.subs=[c],this.stack[u-1]=h,this.checkLimits(h),e===w.Op.REPEAT&&(t>=2||r>=2)&&!this.repeatIsValid(h,1e3))throw new De(H.ERR_INVALID_REPEAT_SIZE,i.from(s))}repeatIsValid(e,t){if(e.op===w.Op.REPEAT){let r=e.max;if(r===0)return!0;if(r<0&&(r=e.min),r>t)return!1;r>0&&(t=Math.trunc(t/r))}for(let r of e.subs)if(!this.repeatIsValid(r,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(w.Op.EMPTY_MATCH)):this.push(this.collapse(e,w.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(w.Op.NO_MATCH)):this.push(this.collapse(e,w.Op.ALTERNATE))}cleanAlt(e){e.op===w.Op.CHAR_CLASS&&(e.runes=new gn(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===Q.MAX_RUNE?(e.runes=[],e.op=w.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===O.CODES.get(`
`)-1&&e.runes[2]===O.CODES.get(`
`)+1&&e.runes[3]===Q.MAX_RUNE&&(e.runes=[],e.op=w.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let r=0;for(let B of e)r+=B.op===t?B.subs.length:1;let s=new Array(r).fill(null),i=0;for(let B of e)if(B.op===t){for(let u=0;u<B.subs.length;u++)s[i++]=B.subs[u];this.reuse(B)}else s[i++]=B;let o=this.newRegexp(t);if(o.subs=s,t===w.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const B=o;o=o.subs[0],this.reuse(B)}return o}factor(e){if(e.length<2)return e;let t=0,r=e.length,s=0,i=null,o=0,B=0,u=0;for(let h=0;h<=r;h++){let f=null,p=0,y=0;if(h<r){let R=e[t+h];if(R.op===w.Op.CONCAT&&R.subs.length>0&&(R=R.subs[0]),R.op===w.Op.LITERAL&&(f=R.runes,p=R.runes.length,y=R.flags&V.FOLD_CASE),y===B){let F=0;for(;F<o&&F<p&&i[F]===f[F];)F++;if(F>0){o=F;continue}}}if(h!==u)if(h===u+1)e[s++]=e[t+u];else{const R=this.newRegexp(w.Op.LITERAL);R.flags=B,R.runes=i.slice(0,o);for(let j=u;j<h;j++)e[t+j]=this.removeLeadingString(e[t+j],o),this.checkLimits(e[t+j]);const F=this.collapse(e.slice(t+u,t+h),w.Op.ALTERNATE),M=this.newRegexp(w.Op.CONCAT);M.subs=[R,F],e[s++]=M}u=h,i=f,o=p,B=y}r=s,t=0,u=0,s=0;let c=null;for(let h=0;h<=r;h++){let f=null;if(!(h<r&&(f=H.leadingRegexp(e[t+h]),c!==null&&c.equals(f)&&(H.isCharClass(c)||c.op===w.Op.REPEAT&&c.min===c.max&&H.isCharClass(c.subs[0]))))){if(h!==u)if(h===u+1)e[s++]=e[t+u];else{const p=c;for(let F=u;F<h;F++){const M=F!==u;e[t+F]=this.removeLeadingRegexp(e[t+F],M),this.checkLimits(e[t+F])}const y=this.collapse(e.slice(t+u,t+h),w.Op.ALTERNATE),R=this.newRegexp(w.Op.CONCAT);R.subs=[p,y],e[s++]=R}u=h,c=f}}r=s,t=0,u=0,s=0;for(let h=0;h<=r;h++)if(!(h<r&&H.isCharClass(e[t+h]))){if(h!==u)if(h===u+1)e[s++]=e[t+u];else{let f=u;for(let y=u+1;y<h;y++){const R=e[t+f],F=e[t+y];(R.op<F.op||R.op===F.op&&(R.runes!==null?R.runes.length:0)<(F.runes!==null?F.runes.length:0))&&(f=y)}const p=e[t+u];e[t+u]=e[t+f],e[t+f]=p;for(let y=u+1;y<h;y++)H.mergeCharClass(e[t+u],e[t+y]),this.reuse(e[t+y]);this.cleanAlt(e[t+u]),e[s++]=e[t+u]}h<r&&(e[s++]=e[t+h]),u=h+1}r=s,t=0,u=0,s=0;for(let h=0;h<r;++h)h+1<r&&e[t+h].op===w.Op.EMPTY_MATCH&&e[t+h+1].op===w.Op.EMPTY_MATCH||(e[s++]=e[t+h]);return r=s,t=0,e.slice(t,r)}removeLeadingString(e,t){if(e.op===w.Op.CONCAT&&e.subs.length>0){const r=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=r,r.op===w.Op.EMPTY_MATCH)switch(this.reuse(r),e.subs.length){case 0:case 1:e.op=w.Op.EMPTY_MATCH,e.subs=w.emptySubs();break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===w.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=w.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===w.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=w.Op.EMPTY_MATCH,e.subs=w.emptySubs();break;case 1:{const r=e;e=e.subs[0],this.reuse(r);break}}return e}return t&&this.reuse(e),this.newRegexp(w.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&V.LITERAL)return H.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,r=-1;const s=new MD(this.wholeRegexp);for(;s.more();){let i=-1;e:switch(s.peek()){case O.CODES.get("("):if(this.flags&V.LOOKBEHIND){if(s.lookingAt("(?<=")){this.parsePosLookBehind(),s.skip(4);break}if(s.lookingAt("(?<!")){this.parseNegLookBehind(),s.skip(4);break}}if(this.flags&V.PERL_X&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(w.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case O.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case O.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case O.CODES.get("^"):this.flags&V.ONE_LINE?this.op(w.Op.BEGIN_TEXT):this.op(w.Op.BEGIN_LINE),s.skip(1);break;case O.CODES.get("$"):this.flags&V.ONE_LINE?this.op(w.Op.END_TEXT).flags|=V.WAS_DOLLAR:this.op(w.Op.END_LINE),s.skip(1);break;case O.CODES.get("."):this.flags&V.DOT_NL?this.op(w.Op.ANY_CHAR):this.op(w.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case O.CODES.get("["):this.parseClass(s);break;case O.CODES.get("*"):case O.CODES.get("+"):case O.CODES.get("?"):{i=s.pos();let o=null;switch(s.pop()){case O.CODES.get("*"):o=w.Op.STAR;break;case O.CODES.get("+"):o=w.Op.PLUS;break;case O.CODES.get("?"):o=w.Op.QUEST;break}this.repeat(o,t,r,i,s,e);break}case O.CODES.get("{"):{i=s.pos();const o=H.parseRepeat(s);if(o<0){s.rewindTo(i),this.literal(s.pop());break}t=o>>16,r=(o&Q.MAX_BMP)<<16>>16,this.repeat(w.Op.REPEAT,t,r,i,s,e);break}case O.CODES.get("\\"):{const o=s.pos();if(s.skip(1),this.flags&V.PERL_X&&s.more())switch(s.pop()){case O.CODES.get("A"):this.op(w.Op.BEGIN_TEXT);break e;case O.CODES.get("b"):this.op(w.Op.WORD_BOUNDARY);break e;case O.CODES.get("B"):this.op(w.Op.NO_WORD_BOUNDARY);break e;case O.CODES.get("C"):throw new De(H.ERR_INVALID_ESCAPE,"\\C");case O.CODES.get("Q"):{let c=s.rest();const h=c.indexOf("\\E");h>=0?(c=c.substring(0,h),s.skipString(c),s.skipString("\\E")):s.skipString(c);let f=0;for(;f<c.length;){const p=c.codePointAt(f);this.literal(p),f+=Y.charCount(p)}break e}case O.CODES.get("z"):this.op(w.Op.END_TEXT);break e;default:s.rewindTo(o);break}else s.rewindTo(o);const B=this.newRegexp(w.Op.CHAR_CLASS);if(B.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const c=new gn;if(this.parseUnicodeClass(s,c)){B.runes=c.toArray(),this.push(B);break e}}const u=new gn;if(this.parsePerlClassEscape(s,u)){B.runes=u.toArray(),this.push(B);break e}s.rewindTo(o),this.reuse(B),this.literal(H.parseEscape(s));break}default:this.literal(s.pop());break}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new De(H.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),r=e.rest();if(r.startsWith("(?P<")||r.startsWith("(?<")){const B=r.charAt(2)==="P"?4:3,u=r.indexOf(">");if(u<0)throw new De(H.ERR_INVALID_NAMED_CAPTURE,r);const c=r.substring(B,u);if(e.skipString(c),e.skip(B+1),!H.isValidCaptureName(c))throw new De(H.ERR_INVALID_NAMED_CAPTURE,r.substring(0,u+1));const h=this.op(w.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[c])throw new De(H.ERR_DUPLICATE_NAMED_CAPTURE,c);this.namedGroups[c]=this.numCap,h.name=c;return}e.skip(2);let s=this.flags,i=1,o=!1;e:for(;e.more();){const B=e.pop();switch(B){case O.CODES.get("i"):s|=V.FOLD_CASE,o=!0;break;case O.CODES.get("m"):s&=-17,o=!0;break;case O.CODES.get("s"):s|=V.DOT_NL,o=!0;break;case O.CODES.get("U"):s|=V.NON_GREEDY,o=!0;break;case O.CODES.get("-"):if(i<0)break e;i=-1,s=~s,o=!1;break;case O.CODES.get(":"):case O.CODES.get(")"):if(i<0){if(!o)break e;s=~s}B===O.CODES.get(":")&&this.op(w.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new De(H.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(w.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(w.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(w.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===w.Op.VERTICAL_BAR&&H.isCharClass(this.stack[e-1])&&H.isCharClass(this.stack[e-3])){let t=this.stack[e-1],r=this.stack[e-3];if(t.op>r.op){const s=r;r=t,t=s,this.stack[e-3]=r}return H.mergeCharClass(r,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],r=this.stack[e-2];if(r.op===w.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=r,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new De(H.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==w.Op.LEFT_PAREN)throw new De(H.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(H.hasCapture(e))throw new De(H.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=w.Op.PLB:t.op=w.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=w.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const r=e.pos();if(!(this.flags&V.PERL_X)||!e.more()||e.pop()!==O.CODES.get("\\")||!e.more())return!1;e.pop();const s=e.from(r),i=$l.has(s)?$l.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&V.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const r=e.rest(),s=r.indexOf(":]");if(s<0)return!1;const i=r.substring(0,s+2);e.skipString(i);const o=lh.has(i)?lh.get(i):null;if(o===null)throw new De(H.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&V.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const r=e.pos();if(!(this.flags&V.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===O.CODES.get("P")&&(s=-1),!e.more())throw e.rewindTo(r),new De(H.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==O.CODES.get("{"))o=Y.runeToString(i);else{const h=e.rest(),f=h.indexOf("}");if(f<0)throw e.rewindTo(r),new De(H.ERR_INVALID_CHAR_RANGE,e.rest());o=h.substring(0,f),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===O.CODES.get("^")&&(s=0-s,o=o.substring(1));const B=H.unicodeTable(o);if(B===null)throw new De(H.ERR_INVALID_CHAR_RANGE,e.from(r));B.sign<0&&(s=0-s);const u=B.tab,c=B.fold;if(!(this.flags&V.FOLD_CASE)||c===null)t.appendTableWithSign(u,s);else{const h=new gn().appendTable(u).appendTable(c).cleanClass().toArray();t.appendClassWithSign(h,s)}return!0}parseClass(e){const t=e.pos();e.skip(1);const r=this.newRegexp(w.Op.CHAR_CLASS);r.flags=this.flags;const s=new gn;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),this.flags&V.CLASS_NL||s.appendRange(O.CODES.get(`
`),O.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==O.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&!(this.flags&V.PERL_X)&&!o){const h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new De(H.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const B=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(B)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(B);const u=H.parseClassChar(e,t);let c=u;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(c=H.parseClassChar(e,t),c<u)throw new De(H.ERR_INVALID_CHAR_RANGE,e.from(B))}this.flags&V.FOLD_CASE?s.appendFoldedRange(u,c):s.appendRange(u,c)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),r.runes=s.toArray(),this.push(r)}},U(H,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),U(H,"ERR_INVALID_CHAR_RANGE","invalid character class range"),U(H,"ERR_INVALID_ESCAPE","invalid escape sequence"),U(H,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),U(H,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),U(H,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),U(H,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),U(H,"ERR_MISSING_BRACKET","missing closing ]"),U(H,"ERR_MISSING_PAREN","missing closing )"),U(H,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),U(H,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),U(H,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name"),U(H,"ERR_UNEXPECTED_PAREN","unexpected )"),U(H,"ERR_NESTING_DEPTH","expression nests too deeply"),U(H,"ERR_LARGE","expression too large"),U(H,"ERR_INVALID_CAPTURE_IN_LOOKBEHIND","invalid capture in lookbehind"),U(H,"MAX_HEIGHT",1e3),U(H,"MAX_SIZE",3355443),U(H,"MAX_RUNES",33554432),U(H,"ANY_TABLE",new g(new Uint32Array([0,Q.MAX_RUNE,1]))),U(H,"ASCII_TABLE",new g(new Uint32Array([0,127,1]))),U(H,"ASCII_FOLD_TABLE",new g(new Uint32Array([0,127,1,383,383,1,8490,8490,1]))),H),UD=class Xn{static initTest(e){const t=Xn.compile(e),r=new Xn(t.expr,t.prog,t.numSubexp,t.longest);return r.cond=t.cond,r.prefix=t.prefix,r.prefixUTF8=t.prefixUTF8,r.prefixComplete=t.prefixComplete,r.prefixRune=t.prefixRune,r.prefilter=t.prefilter,r}static compile(e){return Xn.compileImpl(e,V.PERL,!1)}static compilePOSIX(e){return Xn.compileImpl(e,V.POSIX,!0)}static compileImpl(e,t,r){let s=GD.parse(e,t);const i=s.maxCap();s=VD.simplify(s);const o=FD.build(s),B=xD.compileRegexp(s),u=new Xn(e,B,i,r);u.prefilter=o.type===Ce.Type.NONE?null:o;const[c,h]=B.prefix();return u.prefixComplete=c,u.prefix=h,u.prefixUTF8=Y.stringToUtf8ByteArray(u.prefix),u.prefix.length>0&&(u.prefixRune=u.prefix.codePointAt(0)),u.namedGroups=s.namedGroups,u}static match(e,t){return Xn.compile(e).match(t)}constructor(e,t,r=0,s=0){this.expr=e,this.prog=t,this.numSubexp=r,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.machinePool=[],this.dfa=new TD(this.prog),this.onepass=jl.compile(this.prog),this.prefilter=null}matchPrefixComplete(e,t,r,s){if((r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const B=e.prefixLength(this);if(r===V.UNANCHORED){const u=e.index(this,t);if(u<0)return null;i=t+u,o=i+B}else if(r===V.ANCHOR_BOTH){if(e.endPos()!==B||e.index(this,0)!==0)return null;i=0,o=B}else if(r===V.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=B}if(i<0)return null;if(s>0){const u=new Int32Array(s).fill(-1);return u[0]=i,u[1]=o,Array.from(u)}return[]}executeEngine(e,t,r,s){if(this.prefixComplete&&(s===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,r,s);if(this.prefilter!==null&&r===V.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return jl.execute(this,e,t,r,s);if(s>0)return this.prog.numLb===0&&e.endPos()<=oo.maxBitStateLen(this.prog)?oo.execute(this,e,t,r,s):this.doExecuteNFA(e,t,r,s);if(this.prog.numLb===0){const i=this.dfa.match(e,t,r);if(i!==null)return i?[]:null;if(e.endPos()<=oo.maxBitStateLen(this.prog))return oo.execute(this,e,t,r,s)}return this.doExecuteNFA(e,t,r,s)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,r,s){let i=this.get();i||(i=yD.fromRE2(this)),i.init(s);const o=i.match(e,t,r)?i.submatches():null;return this.put(i),o}match(e){return this.executeEngine(we.fromUTF16(e),0,V.UNANCHORED,0)!==null}matchWithGroup(e,t,r,s,i){return e instanceof Cr||(Y.isByteArray(e)?e=tr.utf8(e):e=tr.utf16(e)),this.matchMachineInput(e,t,r,s,i)}matchMachineInput(e,t,r,s,i){if(t>r)return[!1,null];const o=e.isUTF16Encoding()?we.fromUTF16(e.asCharSequence(),0,r):we.fromUTF8(e.asBytes(),0,r),B=this.executeEngine(o,t,s,2*i);return B===null?[!1,null]:[!0,B]}matchUTF8(e){return this.executeEngine(we.fromUTF8(e),0,V.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,r){let s=0,i=0,o="";const B=we.fromUTF16(e);let u=0;for(;i<=e.length;){const c=this.executeEngine(B,i,V.UNANCHORED,2);if(c===null||c.length===0)break;o+=e.substring(s,c[0]),(c[1]>s||c[0]===0)&&(o+=t(e.substring(c[0],c[1])),u++),s=c[1];const h=B.step(i)&7;if(i+h>c[1]?i+=h:i+1>c[1]?i++:i=c[1],u>=r)break}return o+=e.substring(s),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let r=new Array(t).fill(-1);for(let s=0;s<e.length;s++)r[s]=e[s];e=r}return e}allMatches(e,t,r=s=>s){let s=[];const i=e.endPos();t<0&&(t=i+1);let o=0,B=0,u=-1;for(;B<t&&o<=i;){const c=this.executeEngine(e,o,V.UNANCHORED,this.prog.numCap);if(c===null||c.length===0)break;let h=!0;if(c[1]===o){c[0]===u&&(h=!1);const f=e.step(o);f<0?o=i+1:o+=f&7}else o=c[1];u=c[1],h&&(s.push(r(this.pad(c))),B++)}return s}findUTF8(e){const t=this.executeEngine(we.fromUTF8(e),0,V.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(we.fromUTF8(e),0,V.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(we.fromUTF16(e),0,V.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(we.fromUTF16(e),0,V.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(we.fromUTF8(e),0,V.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.slice(t[2*s],t[2*s+1]));return r}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(we.fromUTF8(e),0,V.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(we.fromUTF16(e),0,V.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.substring(t[2*s],t[2*s+1]));return r}findSubmatchIndex(e){return this.pad(this.executeEngine(we.fromUTF16(e),0,V.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const r=this.allMatches(we.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return r.length===0?null:r}findAllUTF8Index(e,t){const r=this.allMatches(we.fromUTF8(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAll(e,t){const r=this.allMatches(we.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return r.length===0?null:r}findAllIndex(e,t){const r=this.allMatches(we.fromUTF16(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAllUTF8Submatch(e,t){const r=this.allMatches(we.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.slice(s[2*o],s[2*o+1]));return i});return r.length===0?null:r}findAllUTF8SubmatchIndex(e,t){const r=this.allMatches(we.fromUTF8(e),t);return r.length===0?null:r}findAllSubmatch(e,t){const r=this.allMatches(we.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.substring(s[2*o],s[2*o+1]));return i});return r.length===0?null:r}findAllSubmatchIndex(e,t){const r=this.allMatches(we.fromUTF16(e),t);return r.length===0?null:r}},HD=class Fr{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(e instanceof RegExp&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let r="",s=!1,i=e.length;i===0&&(r="(?:)",s=!0);let o=!1,B=0;for(;B<i;){let c=e[B];if(c==="\\"){if(B+1<i)switch(c=e[B+1],c){case"\\":r+="\\\\",B+=2;continue;case"c":if(B+2<i){let p=e[B+2].charCodeAt(0);if(p>=65&&p<=90||p>=97&&p<=122){let y=p%32;r+="\\x",r+=(y>>4).toString(16).toUpperCase(),r+=(y&15).toString(16).toUpperCase(),B+=3,s=!0;continue}}r+="c",B+=2,s=!0;continue;case"u":if(B+2<i){if(e[B+2]==="{"){let p=B+3,y=!1,R=!1;for(;p<i;){const F=e[p];if(F==="}"){R=!0;break}if(!Fr.isHexadecimal(F))break;y=!0,p++}if(R&&y){r+="\\x",B+=2,s=!0;continue}}else if(B+5<i){let p=!0;for(let y=0;y<4;y++)if(!Fr.isHexadecimal(e[B+2+y])){p=!1;break}if(p){r+="\\x{"+e.substring(B+2,B+6)+"}",B+=6,s=!0;continue}}}r+="u",B+=2,s=!0;continue;case"x":{let p=!1;if(B+2<i&&e[B+2]==="{"){let y=B+3,R=!1,F=!1;for(;y<i;){const M=e[y];if(M==="}"){F=!0;break}if(!Fr.isHexadecimal(M))break;R=!0,y++}F&&R&&(p=!0)}else B+3<i&&Fr.isHexadecimal(e[B+2])&&Fr.isHexadecimal(e[B+3])&&(p=!0);p?(r+="\\x",B+=2):(r+="x",B+=2,s=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":r+="\\"+c,B+=2;continue;default:{let p=e.codePointAt(B+1);if(p>=48&&p<=57||p>=65&&p<=90||p>=97&&p<=122){let y=Y.charCount(p);r+=e.substring(B+1,B+1+y),B+=y+1,s=!0}else{r+="\\";let y=Y.charCount(p);r+=e.substring(B+1,B+1+y),B+=y+1}continue}}}else if(c==="/"){r+="\\/",B+=1,s=!0;continue}else if(c==="[")o=!0;else if(c==="]")o=!1;else if(!o&&c==="("&&B+2<i&&e[B+1]==="?"&&e[B+2]==="<"&&B+3<i&&!"=!>)".includes(e[B+3])){r+="(?P<",B+=3,s=!0;continue}let h=e.codePointAt(B),f=Y.charCount(h);r+=e.substring(B,B+f),B+=f}const u=s?r:e;return t.length>0?`(?${t})${u}`:u}},Fe,ou=(Fe=class{static quote(e){return Y.quoteMeta(e)}static quoteReplacement(e,t=!1){return Ul.quoteReplacement(e,t)}static translateRegExp(e){return HD.translate(e)}static compile(e,t=0){let r=e;if(t&Fe.CASE_INSENSITIVE&&(r=`(?i)${r}`),t&Fe.DOTALL&&(r=`(?s)${r}`),t&Fe.MULTILINE&&(r=`(?m)${r}`),t&-544)throw new DD("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let s=V.PERL;t&Fe.DISABLE_UNICODE_GROUPS&&(s&=-129),t&Fe.LOOKBEHINDS&&(s|=V.LOOKBEHIND);const i=new Fe(e,t);return i.re2Input=UD.compileImpl(r,s,(t&Fe.LONGEST_MATCH)!==0),i}static matches(e,t){return Fe.compile(e).testExact(t)}static initTest(e,t,r){if(e==null)throw new Error("pattern is null");if(r==null)throw new Error("re2 is null");const s=new Fe(e,t);return s.re2Input=r,s}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return Y.isByteArray(e)&&(e=tr.utf8(e)),new Ul(this,e)}test(e){return Y.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=Y.isByteArray(e)?we.fromUTF8(e):we.fromUTF16(e);return this.re2Input.executeEngine(t,0,V.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);if(!t.find())return null;const r=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);r.push(o===null?void 0:o)}r.index=t.start(0),r.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);r.groups=i}else r.groups=void 0;return r}split(e,t=0){const r=this.matcher(e),s=[];let i=0,o=0;for(;r.find();){if(o===0&&r.end()===0){o=r.end();continue}if(t>0&&s.length===t-1)break;if(o===r.start()){if(t===0){i+=1,o=r.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(r.substring(o,r.start())),o=r.end()}if(t===0&&o!==r.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(r.substring(o,r.inputLength()))}return(t!==0||s.length===0&&!(o===r.inputLength()&&o>0))&&s.push(r.substring(o,r.inputLength())),s}*matchAll(e){const t=this.matcher(e);for(;t.find();){const r=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);r.push(o===null?void 0:o)}r.index=t.start(0),r.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);r.groups=i}else r.groups=void 0;yield r}}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}},U(Fe,"CASE_INSENSITIVE",Or.CASE_INSENSITIVE),U(Fe,"DOTALL",Or.DOTALL),U(Fe,"MULTILINE",Or.MULTILINE),U(Fe,"DISABLE_UNICODE_GROUPS",Or.DISABLE_UNICODE_GROUPS),U(Fe,"LONGEST_MATCH",Or.LONGEST_MATCH),U(Fe,"LOOKBEHINDS",Or.LOOKBEHINDS),Fe);/**
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
 */let os="12.18.0";function JD(n){os=n}/**
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
 *//**
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
 */const pr=new QB("@firebase/firestore");function kr(){return pr.logLevel}function z(n,...e){if(pr.logLevel<=le.DEBUG){const t=e.map(au);pr.debug(`Firestore (${os}): ${n}`,...t)}}function an(n,...e){if(pr.logLevel<=le.ERROR){const t=e.map(au);pr.error(`Firestore (${os}): ${n}`,...t)}}function St(n,...e){if(pr.logLevel<=le.WARN){const t=e.map(au);pr.warn(`Firestore (${os}): ${n}`,...t)}}function au(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function ee(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Rf(n,r,t)}function Rf(n,e,t){let r=`FIRESTORE (${os}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw an(r),new Error(r)}function $(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Rf(e,s,r)}function ie(n,e){return n}/**
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
 */function qD(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Bu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=qD(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function RB(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return rB(s)===rB(i)?ue(s,i):rB(s)?1:-1}return ue(n.length,e.length)}const jD=55296,KD=57343;function rB(n){const e=n.charCodeAt(0);return e>=jD&&e<=KD}function $r(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class ve{constructor(e,t){this.comparator=e,this.root=t||Ke.EMPTY}insert(e,t){return new ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bo(this.root,e,this.comparator,!0)}}class Bo{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ke.RED,this.left=s??Ke.EMPTY,this.right=i??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ke(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ke(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ve{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hh(this.data.getIterator())}getIteratorFrom(e){return new hh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ve(this.comparator);return t.data=e,t}}class hh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Qt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */const Yr="__name__";class Ft{constructor(e,t,r){t===void 0?t=0:t>e.length&&ee(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ee(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ft.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ft?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Ft.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const r=Ft.isNumericId(e),s=Ft.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ft.extractNumericId(e).compare(Ft.extractNumericId(t)):RB(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return bn.fromString(e.substring(4,e.length-2))}}class pe extends Ft{construct(e,t,r){return new pe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new pe(t)}static emptyPath(){return new pe([])}}const zD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let It=class xr extends Ft{construct(e,t,r){return new xr(e,t,r)}static isValidIdentifier(e){return zD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xr.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yr}static keyField(){return new xr([Yr])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const B=e[s];if(B==="\\"){if(s+1===e.length)throw new K(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else B==="`"?(o=!o,s++):B!=="."||o?(r+=B,s++):(i(),s++)}if(i(),o)throw new K(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xr(t)}static emptyPath(){return new xr([])}};/**
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
 */class bt{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new bt([])}unionWith(e){let t=new Ve(It.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new bt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $r(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */function xo(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function yr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function QD(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function vf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(pe.fromString(e))}static fromName(e){return new X(pe.fromString(e).popFirst(5))}static empty(){return new X(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new pe(e.slice()))}}/**
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
 */function bf(n,e,t){if(!t)throw new K(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function WD(n,e,t,r){if(e===!0&&r===!0)throw new K(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function dh(n){if(!X.isDocumentKey(n))throw new K(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function fh(n){if(X.isDocumentKey(n))throw new K(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function vi(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ra(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ee(12329,{type:typeof n})}function sr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ra(n);throw new K(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function xe(n,e){const t={typeString:n};return e&&(t.value=e),t}function bi(n,e){if(!vi(n))throw new K(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new K(k.INVALID_ARGUMENT,t);return!0}/**
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
 */const Ch=-62135596800,ph=1e6;class Ae{static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*ph);return new Ae(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ch)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ph}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(bi(e,Ae._jsonSchema))return new Ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ch;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ae._jsonSchemaVersion="firestore/timestamp/1.0",Ae._jsonSchema={type:xe("string",Ae._jsonSchemaVersion),seconds:xe("number"),nanoseconds:xe("number")};/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Pf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Pf("Invalid base64 string: "+i):i}}(e);return new Me(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Me.EMPTY_BYTE_STRING=new Me("");const $D=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ln(n){if($(!!n,39018),typeof n=="string"){let e=0;const t=$D.exec(n);if($(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(n.seconds),nanos:be(n.nanos)}}function be(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Fn(n){return typeof n=="string"?Me.fromBase64String(n):Me.fromUint8Array(n)}/**
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
 */const Sf="server_timestamp",Of="__type__",Nf="__previous_value__",Lf="__local_write_time__";function sa(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Of])==null?void 0:r.stringValue)===Sf}function Pi(n){const e=n.mapValue.fields[Nf];return sa(e)?Pi(e):e}function Xr(n){const e=Ln(n.mapValue.fields[Lf].timestampValue);return new Ae(e.seconds,e.nanos)}/**
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
 */class YD{constructor(e,t,r,s,i,o,B,u,c,h,f,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=B,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=h,this.apiKey=f,this._customHeaders=p,this.grpcFlowControlWindow=y}}const Vo="(default)";class ni{constructor(e,t){this.projectId=e,this.database=t||Vo}static empty(){return new ni("","")}get isDefaultDatabase(){return this.database===Vo}isEqual(e){return e instanceof ni&&e.projectId===this.projectId&&e.database===this.database}}function XD(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new K(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ni(n.options.projectId,e)}/**
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
 */const uu=-1;function ia(n){return n==null}function ri(n){return n===0&&1/n==-1/0}function ZD(n){return typeof n=="number"&&Number.isInteger(n)&&!ri(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function ey(n){return typeof n=="string"}/**
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
 */const Ff="__type__",ty="__max__",uo={mapValue:{}},kf="__vector__",si="value",Zr={nullValue:"NULL_VALUE"},ht={booleanValue:!0},je={booleanValue:!1};function Ge(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?sa(n)?4:ny(n)?9007199254740991:Mo(n)?10:11:ee(28295,{value:n})}function Rt(n,e,t){if(n===e)return!0;const r=Ge(n);if(r!==Ge(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Xr(n).isEqual(Xr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const B=Ln(i.timestampValue),u=Ln(o.timestampValue);return B.seconds===u.seconds&&B.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return Fn(i.bytesValue).isEqual(Fn(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return be(i.geoPointValue.latitude)===be(o.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o,B){if("integerValue"in i&&"integerValue"in o)return be(i.integerValue)===be(o.integerValue);let u,c;if("doubleValue"in i&&"doubleValue"in o)u=be(i.doubleValue),c=be(o.doubleValue);else{if(!(B!=null&&B.t))return!1;u=be(i.integerValue??i.doubleValue),c=be(o.integerValue??o.doubleValue)}return u===c?!!(B!=null&&B.i)||ri(u)===ri(c):!!(B===void 0||B.o)&&isNaN(u)&&isNaN(c)}(n,e,t);case 9:return $r(n.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>Rt(s,i,t));case 10:case 11:return function(i,o,B){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(xo(u)!==xo(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!Rt(u[h],c[h],B)))return!1;return!0}(n,e,t);default:return ee(52216,{left:n})}}function ii(n,e){return(n.values||[]).find(t=>Rt(t,e))!==void 0}function dt(n,e){if(n===e)return 0;const t=Ge(n),r=Ge(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return function(i,o){const B=be(i.integerValue||i.doubleValue),u=be(o.integerValue||o.doubleValue);return B<u?-1:B>u?1:B===u?0:isNaN(B)?isNaN(u)?0:-1:1}(n,e);case 3:return gh(n.timestampValue,e.timestampValue);case 4:return gh(Xr(n),Xr(e));case 5:return RB(n.stringValue,e.stringValue);case 6:return function(i,o){const B=Fn(i),u=Fn(o);return B.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const B=i.split("/"),u=o.split("/");for(let c=0;c<B.length&&c<u.length;c++){const h=ue(B[c],u[c]);if(h!==0)return h}return ue(B.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const B=ue(be(i.latitude),be(o.latitude));return B!==0?B:ue(be(i.longitude),be(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return mh(n.arrayValue,e.arrayValue);case 10:return function(i,o){var p,y,R,F;const B=i.fields||{},u=o.fields||{},c=(p=B[si])==null?void 0:p.arrayValue,h=(y=u[si])==null?void 0:y.arrayValue,f=ue(((R=c==null?void 0:c.values)==null?void 0:R.length)||0,((F=h==null?void 0:h.values)==null?void 0:F.length)||0);return f!==0?f:mh(c,h)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===uo.mapValue&&o===uo.mapValue)return 0;if(i===uo.mapValue)return 1;if(o===uo.mapValue)return-1;const B=i.fields||{},u=Object.keys(B),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const p=RB(u[f],h[f]);if(p!==0)return p;const y=dt(B[u[f]],c[h[f]]);if(y!==0)return y}return ue(u.length,h.length)}(n.mapValue,e.mapValue);default:throw ee(23264,{u:t})}}function gh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=Ln(n),r=Ln(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function mh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=dt(t[s],r[s]);if(i!==void 0&&i!==0)return i}return ue(t.length,r.length)}function es(n){return vB(n)}function vB(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ln(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Fn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return X.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=vB(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${vB(t.fields[o])}`;return s+"}"}(n.mapValue):ee(61005,{value:n})}function To(n){switch(Ge(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pi(n);return e?16+To(e):16;case 5:return 2*n.stringValue.length;case 6:return Fn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+To(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return yr(r.fields,(i,o)=>{s+=i.length+To(o)}),s}(n.mapValue);default:throw ee(13486,{value:n})}}function Eh(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function kt(n){return!!n&&"integerValue"in n}function nr(n){return!!n&&"doubleValue"in n}function kn(n){return kt(n)||nr(n)}function ts(n){return!!n&&"arrayValue"in n}function Dt(n){return!!n&&"nullValue"in n}function ft(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ir(n){return!!n&&"mapValue"in n}function Mo(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ff])==null?void 0:r.stringValue)===kf}function bB(n){var e,t;return(t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[si])==null?void 0:t.arrayValue}function js(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return yr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=js(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=js(n.arrayValue.values[t]);return e}return{...n}}function ny(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ty}/**
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
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ir(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=js(t)}setAll(e){let t=It.emptyPath(),r={},s=[];e.forEach((o,B)=>{if(!t.isImmediateParentOf(B)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=B.popLast()}o?r[B.lastSegment()]=js(o):s.push(B.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ir(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ir(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){yr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Et(js(this.value))}}function xf(n){const e=[];return yr(n.fields,(t,r)=>{const s=new It([t]);if(ir(r)){const i=xf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new bt(e)}/**
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
 */function oa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ri(e)?"-0":e}}function cu(n){return{integerValue:""+n}}function lu(n,e,t){return ZD(e)?cu(e):oa(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class aa{constructor(){this._=void 0}}function ry(n,e,t){return n instanceof oi?function(s,i){const o={fields:{[Of]:{stringValue:Sf},[Lf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&sa(i)&&(i=Pi(i)),i&&(o.fields[Nf]=i),{mapValue:o}}(t,e):n instanceof ai?Mf(n,e):n instanceof Bi?Gf(n,e):n instanceof ui?function(s,i){const o=Vf(s,i),B=Ho(o)+Ho(s.l);return kt(o)&&kt(s.l)?cu(B):oa(s.serializer,B)}(n,e):n instanceof Go?function(s,i){return _h(s,i,Math.min)}(n,e):n instanceof Uo?function(s,i){return _h(s,i,Math.max)}(n,e):void 0}function sy(n,e,t){return n instanceof ai?Mf(n,e):n instanceof Bi?Gf(n,e):t}function Vf(n,e){return n instanceof ui?kn(e)?e:{integerValue:0}:null}class oi extends aa{}class ai extends aa{constructor(e){super(),this.elements=e}}function Mf(n,e){const t=Uf(e);for(const r of n.elements)t.some(s=>Rt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Bi extends aa{constructor(e){super(),this.elements=e}}function Gf(n,e){let t=Uf(e);for(const r of n.elements)t=t.filter(s=>!Rt(s,r));return{arrayValue:{values:t}}}class hu extends aa{constructor(e,t){super(),this.serializer=e,this.l=t}}class ui extends hu{}class Go extends hu{}class Uo extends hu{}function _h(n,e,t){if(!kn(e))return n.l;const r=t(Ho(e),Ho(n.l));return kt(e)&&kt(n.l)?cu(r):oa(n.serializer,r)}function Ho(n){return be(n.integerValue||n.doubleValue)}function Uf(n){return ts(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class iy{constructor(e,t){this.field=e,this.transform=t}}function oy(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ai&&s instanceof ai||r instanceof Bi&&s instanceof Bi?$r(r.elements,s.elements,Rt):r instanceof ui&&s instanceof ui||r instanceof Go&&s instanceof Go||r instanceof Uo&&s instanceof Uo?Rt(r.l,s.l):r instanceof oi&&s instanceof oi}(n.transform,e.transform)}class ay{constructor(e,t){this.version=e,this.transformResults=t}}class Ht{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ao(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ba{}function Hf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new du(n.key,Ht.none()):new Si(n.key,n.data,Ht.none());{const t=n.data,r=Et.empty();let s=new Ve(It.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ir(n.key,r,new bt(s.toArray()),Ht.none())}}function By(n,e,t){n instanceof Si?function(s,i,o){const B=s.value.clone(),u=yh(s.fieldTransforms,i,o.transformResults);B.setAll(u),i.convertToFoundDocument(o.version,B).setHasCommittedMutations()}(n,e,t):n instanceof Ir?function(s,i,o){if(!Ao(s.precondition,i))return void i.convertToUnknownDocument(o.version);const B=yh(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Jf(s)),u.setAll(B),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ks(n,e,t,r){return n instanceof Si?function(i,o,B,u){if(!Ao(i.precondition,o))return B;const c=i.value.clone(),h=Ih(i.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ir?function(i,o,B,u){if(!Ao(i.precondition,o))return B;const c=Ih(i.fieldTransforms,u,o),h=o.data;return h.setAll(Jf(i)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),B===null?null:B.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(i,o,B){return Ao(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):B}(n,e,t)}function uy(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Vf(r.transform,s||null);i!=null&&(t===null&&(t=Et.empty()),t.set(r.field,i))}return t||null}function Dh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&$r(r,s,(i,o)=>oy(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Si extends Ba{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ir extends Ba{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Jf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function yh(n,e,t){const r=new Map;$(n.length===t.length,32656,{h:t.length,T:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,B=e.data.field(i.field);r.set(i.field,sy(o,B,t[s]))}return r}function Ih(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,ry(i,o,e))}return r}class du extends Ba{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cy extends Ba{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Jo{constructor(e,t){this.position=e,this.inclusive=t}}function wh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),t.key):r=dt(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Th(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Rt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class qf{}class ke extends qf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new hy(e,t,r):t==="array-contains"?new Cy(e,r):t==="in"?new py(e,r):t==="not-in"?new gy(e,r):t==="array-contains-any"?new my(e,r):new ke(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new dy(e,r):new fy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(dt(t,this.value)):t!==null&&Ge(this.value)===Ge(t)&&this.matchesComparison(dt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ot extends qf{constructor(e,t){super(),this.filters=e,this.op=t,this.P=null}static create(e,t){return new Ot(e,t)}matches(e){return jf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.P!==null||(this.P=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.P}getFilters(){return Object.assign([],this.filters)}}function jf(n){return n.op==="and"}function Kf(n){return ly(n)&&jf(n)}function ly(n){for(const e of n.filters)if(e instanceof Ot)return!1;return!0}function PB(n){if(n instanceof ke)return n.field.canonicalString()+n.op.toString()+es(n.value);if(Kf(n))return n.filters.map(e=>PB(e)).join(",");{const e=n.filters.map(t=>PB(t)).join(",");return`${n.op}(${e})`}}function zf(n,e){return n instanceof ke?function(r,s){return s instanceof ke&&r.op===s.op&&r.field.isEqual(s.field)&&Rt(r.value,s.value)}(n,e):n instanceof Ot?function(r,s){return s instanceof Ot&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,B)=>i&&zf(o,s.filters[B]),!0):!1}(n,e):void ee(19439)}function Qf(n){return n instanceof ke?function(t){return`${t.field.canonicalString()} ${t.op} ${es(t.value)}`}(n):n instanceof Ot?function(t){return t.op.toString()+" {"+t.getFilters().map(Qf).join(" ,")+"}"}(n):"Filter"}class hy extends ke{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class dy extends ke{constructor(e,t){super(e,"in",t),this.keys=Wf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class fy extends ke{constructor(e,t){super(e,"not-in",t),this.keys=Wf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Wf(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>X.fromName(r.referenceValue))}class Cy extends ke{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ts(t)&&ii(t.arrayValue,this.value)}}class py extends ke{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ii(this.value.arrayValue,t)}}class gy extends ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ii(this.value.arrayValue,t)}}class my extends ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ts(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ii(this.value.arrayValue,r))}}/**
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
 */class ci{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ey(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Ae(0,0))}static max(){return new se(new Ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ye{constructor(e,t,r,s,i,o,B){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=B}static newInvalidDocument(e){return new Ye(e,0,se.min(),se.min(),se.min(),Et.empty(),0)}static newFoundDocument(e,t,r,s){return new Ye(e,1,t,se.min(),r,s,0)}static newNoDocument(e,t){return new Ye(e,2,t,se.min(),se.min(),Et.empty(),0)}static newUnknownDocument(e,t){return new Ye(e,3,t,se.min(),se.min(),Et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */const li=-1;function _y(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Ae(t+1,0):new Ae(t,r));return new xn(s,X.empty(),e)}function Dy(n){return new xn(n.readTime,n.key,li)}class xn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new xn(se.min(),X.empty(),li)}static max(){return new xn(se.max(),X.empty(),li)}}function yy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
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
 */class Iy{constructor(e,t=null,r=[],s=[],i=null,o=null,B=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=B,this.R=null}}function Ah(n,e=null,t=[],r=[],s=null,i=null,o=null){return new Iy(n,e,t,r,s,i,o)}function $f(n){const e=ie(n);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>PB(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ia(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>es(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>es(r)).join(",")),e.R=t}return e.R}function Yf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Ey(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!zf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Th(n.startAt,e.startAt)&&Th(n.endAt,e.endAt)}function Zn(n){return!!n.isCorePipeline}function Xf(n){return!!n.path&&X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class as{constructor(e,t=null,r=[],s=[],i=null,o="F",B=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=B,this.endAt=u,this.I=null,this.A=null,this.V=null,this.startAt,this.endAt}}function wy(n,e,t,r,s,i,o,B){return new as(n,e,t,r,s,i,o,B)}function fu(n){return new as(n)}function Rh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ty(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Zf(n){return n.collectionGroup!==null}function zs(n){const e=ie(n);if(e.I===null){e.I=[];const t=new Set;for(const i of e.explicitOrderBy)e.I.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let B=new Ve(It.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(B=B.add(c.field))})}),B})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.I.push(new ci(i,r))}),t.has(It.keyField().canonicalString())||e.I.push(new ci(It.keyField(),r))}return e.I}function Jt(n){const e=ie(n);return e.A||(e.A=Ay(e,zs(n))),e.A}function Ay(n,e){if(n.limitType==="F")return Ah(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ci(s.field,i)});const t=n.endAt?new Jo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Jo(n.startAt.position,n.startAt.inclusive):null;return Ah(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function SB(n,e){const t=n.filters.concat([e]);return new as(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ry(n,e){const t=n.explicitOrderBy.concat([e]);return new as(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function OB(n,e,t){return new as(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function vy(n,e){return Yf(Jt(n),Jt(e))&&n.limitType===e.limitType}function Qs(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Qf(s)).join(", ")}]`),ia(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>es(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>es(s)).join(",")),`Target(${r})`}(Jt(n))}; limitType=${n.limitType})`}function ua(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of zs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,B,u){const c=wh(o,B,u);return o.inclusive?c<=0:c<0}(r.startAt,zs(r),s)||r.endAt&&!function(o,B,u){const c=wh(o,B,u);return o.inclusive?c>=0:c>0}(r.endAt,zs(r),s))}(n,e)}function Cu(n){return(e,t)=>{let r=!1;for(const s of zs(n)){const i=by(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function by(n,e,t){const r=n.field.isKeyField()?X.comparator(e.key,t.key):function(i,o,B){const u=o.data.field(i),c=B.data.field(i);return u!==null&&c!==null?dt(u,c):ee(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:n.dir})}}/**
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
 */class Py{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Le,de;function Sy(n){switch(n){case k.OK:return ee(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return ee(15467,{code:n})}}function eC(n){if(n===void 0)return an("GRPC error has no .code"),k.UNKNOWN;switch(n){case Le.OK:return k.OK;case Le.CANCELLED:return k.CANCELLED;case Le.UNKNOWN:return k.UNKNOWN;case Le.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Le.INTERNAL:return k.INTERNAL;case Le.UNAVAILABLE:return k.UNAVAILABLE;case Le.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Le.NOT_FOUND:return k.NOT_FOUND;case Le.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Le.ABORTED:return k.ABORTED;case Le.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Le.DATA_LOSS:return k.DATA_LOSS;default:return ee(39323,{code:n})}}(de=Le||(Le={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class wr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){yr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return vf(this.inner)}size(){return this.innerSize}}/**
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
 */const Oy=new ve(X.comparator);function ct(){return Oy}const tC=new ve(X.comparator);function Vr(...n){let e=tC;for(const t of n)e=e.insert(t.key,t);return e}function nC(n){let e=tC;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Tn(){return Ws()}function rC(){return Ws()}function Ws(){return new wr(n=>n.toString(),(n,e)=>n.isEqual(e))}const Ny=new ve(X.comparator),Ly=new Ve(X.comparator);function Be(...n){let e=Ly;for(const t of n)e=e.add(t);return e}const Fy=new Ve(ue);function ky(){return Fy}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function xy(){return new TextEncoder}/**
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
 */const Vy=new bn([4294967295,4294967295],0);function vh(n){const e=xy().encode(n),t=new Cf;return t.update(e),new Uint8Array(t.digest())}function bh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new bn([t,r],0),new bn([s,i],0)]}class pu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ms(`Invalid padding: ${t}`);if(r<0)throw new Ms(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ms(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ms(`Invalid padding when bitmap length is 0: ${t}`);this.m=8*e.length-t,this.p=bn.fromNumber(this.m)}S(e,t,r){let s=e.add(t.multiply(bn.fromNumber(r)));return s.compare(Vy)===1&&(s=new bn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.p).toNumber()}v(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.m===0)return!1;const t=vh(e),[r,s]=bh(t);for(let i=0;i<this.hashCount;i++){const o=this.S(r,s,i);if(!this.v(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new pu(i,s,t);return r.forEach(B=>o.insert(B)),o}insert(e){if(this.m===0)return;const t=vh(e),[r,s]=bh(t);for(let i=0;i<this.hashCount;i++){const o=this.S(r,s,i);this.D(o)}}D(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Oi{constructor(e,t,r,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ni.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Oi(se.min(),s,new ve(ue),ct(),ct(),Be())}}class Ni{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ni(r,t,Be(),Be(),Be())}}/**
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
 */class Ro{constructor(e,t,r,s){this.C=e,this.removedTargetIds=t,this.key=r,this.F=s}}class sC{constructor(e,t){this.targetId=e,this.O=t}}class iC{constructor(e,t,r=Me.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ph{constructor(e){this.targetId=e,this.M=0,this.N=Sh(),this.L=Me.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get k(){return this.M!==0}get q(){return this.U}$(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}K(){let e=Be(),t=Be(),r=Be();return this.N.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}}),new Ni(this.L,this.B,e,t,r)}W(){this.U=!1,this.N=Sh()}G(e,t){this.U=!0,this.N=this.N.insert(e,t)}j(e){this.U=!0,this.N=this.N.remove(e)}H(){this.M+=1}J(){this.M-=1,$(this.M>=0,3241,{M:this.M,targetId:this.targetId})}Y(){this.U=!0,this.B=!0}}const Os="WatchChangeAggregator";class My{constructor(e){this.Z=e,this.X=new Map,this.ee=ct(),this.te=co(),this.ne=ct(),this.re=co(),this.ie=new ve(ue)}se(e){for(const t of e.C)e.F&&e.F.isFoundDocument()?this._e(t,e.F):this.oe(t,e.key,e.F);for(const t of e.removedTargetIds)this.oe(t,e.key,e.F)}ae(e){this.forEachTarget(e,t=>{const r=this.X.get(t);if(r)switch(e.state){case 0:this.ue(t)&&r.$(e.resumeToken);break;case 1:r.J(),r.k||r.W(),r.$(e.resumeToken);break;case 2:r.J(),r.k||this.removeTarget(t);break;case 3:this.ue(t)&&(r.Y(),r.$(e.resumeToken));break;case 4:this.ue(t)&&(this.ce(t),r.$(e.resumeToken));break;default:ee(56790,{state:e.state})}else z(Os,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.X.forEach((r,s)=>{this.ue(s)&&t(s)})}le(e){var t;return Zn(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:Xf(e)}Ee(e){const t=e.targetId,r=e.O.count,s=this.he(t);if(s){const i=s.target;if(this.le(i))if(r===0){const o=new X(Zn(i)?pe.fromString(i.getPipelineDocuments()[0]):i.path);this.oe(t,o,Ye.newNoDocument(o,se.min()))}else $(r===1,20013,"Single document existence filter with count: "+r);else{const o=this.Te(t);if(o!==r){const B=this.Pe(e),u=B?this.Re(B,e,o):1;if(u!==0){this.ce(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ie=this.ie.insert(t,c)}}}}}Pe(e){const t=e.O.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,B;try{o=Fn(r).toUint8Array()}catch(u){if(u instanceof Pf)return St("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{B=new pu(o,s,i)}catch(u){return St(u instanceof Ms?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return B.m===0?null:B}Re(e,t,r){return t.O.count===r-this.Ve(e,t.targetId)?0:2}Ve(e,t){const r=this.Z.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Z.Ae(),B=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(B)||(this.oe(t,i,null),s++)}),s}de(e){const t=new Map;this.X.forEach((i,o)=>{const B=this.he(o);if(B){if(i.current&&this.le(B.target)){const u=Zn(B.target)?pe.fromString(B.target.getPipelineDocuments()[0]):B.target.path,c=new X(u);this.fe(c).has(o)||this.me(o,c)||this.oe(o,c,Ye.newNoDocument(c,e))}i.q&&(t.set(o,i.K()),i.W())}});let r=Be();this.re.forEach((i,o)=>{let B=!0;o.forEachWhile(u=>{const c=this.he(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(B=!1,!1)}),B&&(r=r.add(i))}),this.ee.forEach((i,o)=>o.setReadTime(e)),this.ne.forEach((i,o)=>o.setReadTime(e));const s=new Oi(e,t,this.ie,this.ee,this.ne,r);return this.ee=ct(),this.te=co(),this.ne=ct(),this.re=co(),this.ie=new ve(ue),s}_e(e,t){const r=this.X.get(e);if(!r||!this.ue(e))return void z(Os,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.me(e,t.key)?2:0;r.G(t.key,s),Zn(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t.key,t):this.ee=this.ee.insert(t.key,t),this.te=this.te.insert(t.key,this.fe(t.key).add(e)),this.re=this.re.insert(t.key,this.pe(t.key).add(e))}oe(e,t,r){const s=this.X.get(e);s&&this.ue(e)?(this.me(e,t)?s.G(t,1):s.j(t),this.re=this.re.insert(t,this.pe(t).delete(e)),this.re=this.re.insert(t,this.pe(t).add(e)),r&&(Zn(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t,r):this.ee=this.ee.insert(t,r))):z(Os,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.X.delete(e)}Te(e){const t=this.X.get(e);if(!t)return 0;const r=t.K();return this.Z.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}H(e){let t=this.X.get(e);t||(z(Os,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Ph(e),this.X.set(e,t)),t.H()}pe(e){let t=this.re.get(e);return t||(t=new Ve(ue),this.re=this.re.insert(e,t)),t}fe(e){let t=this.te.get(e);return t||(t=new Ve(ue),this.te=this.te.insert(e,t)),t}ue(e){const t=this.he(e)!==null;return t||z(Os,"Detected inactive target",e),t}he(e){const t=this.X.get(e);return t===void 0||t.k?null:this.Z.ge(e)}ce(e){this.X.set(e,new Ph(e)),this.Z.getRemoteKeysForTarget(e).forEach(t=>{this.oe(e,t,null)})}me(e,t){return this.Z.getRemoteKeysForTarget(e).has(t)}}function co(){return new ve(X.comparator)}function Sh(){return new ve(X.comparator)}const Gy={asc:"ASCENDING",desc:"DESCENDING"},Uy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hy={and:"AND",or:"OR"};class Jy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function NB(n,e){return n.useProto3Json||ia(e)?e:{value:e}}function qo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gu(n){const e=Ln(n);return new Ae(e.seconds,e.nanos)}function oC(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function vo(n,e){return qo(n,e.toTimestamp())}function qt(n){return $(!!n,49232),se.fromTimestamp(gu(n))}function mu(n,e){return LB(n,e).canonicalString()}function LB(n,e){const t=function(s){return new pe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function aC(n){const e=pe.fromString(n);return $(hC(e),10190,{key:e.toString()}),e}function jo(n,e){return mu(n.databaseId,e.path)}function sB(n,e){const t=aC(e);if(t.get(1)!==n.databaseId.projectId)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(uC(t))}function BC(n,e){return mu(n.databaseId,e)}function qy(n){const e=aC(n);return e.length===4?pe.emptyPath():uC(e)}function FB(n){return new pe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function uC(n){return $(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Oh(n,e,t){return{name:jo(n,e),fields:t.value.mapValue.fields}}function jy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,h){return c.useProto3Json?($(h===void 0||typeof h=="string",58123),Me.fromBase64String(h||"")):($(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Me.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,B=o&&function(c){const h=c.code===void 0?k.UNKNOWN:eC(c.code);return new K(h,c.message||"")}(o);t=new iC(r,s,i,B||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=sB(n,r.document.name),i=qt(r.document.updateTime),o=r.document.createTime?qt(r.document.createTime):se.min(),B=new Et({mapValue:{fields:r.document.fields}}),u=Ye.newFoundDocument(s,i,o,B),c=r.targetIds||[],h=r.removedTargetIds||[];t=new Ro(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=sB(n,r.document),i=r.readTime?qt(r.readTime):se.min(),o=Ye.newNoDocument(s,i),B=r.removedTargetIds||[];t=new Ro([],B,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=sB(n,r.document),i=r.removedTargetIds||[];t=new Ro([],i,s,null)}else{if(!("filter"in e))return ee(11601,{ye:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Py(s,i),B=r.targetId;t=new sC(B,o)}}return t}function Ky(n,e){let t;if(e instanceof Si)t={update:Oh(n,e.key,e.value)};else if(e instanceof du)t={delete:jo(n,e.key)};else if(e instanceof Ir)t={update:Oh(n,e.key,e.data),updateMask:nI(e.fieldMask)};else{if(!(e instanceof cy))return ee(16599,{we:e.type});t={verify:jo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const B=o.transform;if(B instanceof oi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(B instanceof ai)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:B.elements}};if(B instanceof Bi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:B.elements}};if(B instanceof ui)return{fieldPath:o.field.canonicalString(),increment:B.l};if(B instanceof Go)return{fieldPath:o.field.canonicalString(),minimum:B.l};if(B instanceof Uo)return{fieldPath:o.field.canonicalString(),maximum:B.l};throw ee(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:vo(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)}(n,e.precondition)),t}function zy(n,e){return n&&n.length>0?($(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?qt(s.updateTime):qt(i);return o.isEqual(se.min())&&(o=qt(i)),new ay(o,s.transformResults||[])}(t,e))):[]}function Qy(n,e){return{documents:[BC(n,e.path)]}}function Wy(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=BC(n,s);const i=function(c){if(c.length!==0)return lC(Ot.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:Mr(p.field),direction:Zy(p.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const B=NB(n,e.limit);return B!==null&&(t.structuredQuery.limit=B),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{be:t,parent:s}}function $y(n){let e=qy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){$(r===1,65062);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(f){const p=cC(f);return p instanceof Ot&&Kf(p)?p.getFilters():[p]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(p=>function(R){return new ci(Gr(R.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(p))}(t.orderBy));let B=null;t.limit&&(B=function(f){let p;return p=typeof f=="object"?f.value:f,ia(p)?null:p}(t.limit));let u=null;t.startAt&&(u=function(f){const p=!!f.before,y=f.values||[];return new Jo(y,p)}(t.startAt));let c=null;return t.endAt&&(c=function(f){const p=!f.before,y=f.values||[];return new Jo(y,p)}(t.endAt)),wy(e,s,o,i,B,"F",u,c)}function Yy(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Xy(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(n))}}}}function cC(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Gr(t.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Gr(t.unaryFilter.field);return ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Gr(t.unaryFilter.field);return ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Gr(t.unaryFilter.field);return ke.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(n):n.fieldFilter!==void 0?function(t){return ke.create(Gr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ot.create(t.compositeFilter.filters.map(r=>cC(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(t.compositeFilter.op))}(n):ee(30097,{filter:n})}function Zy(n){return Gy[n]}function eI(n){return Uy[n]}function tI(n){return Hy[n]}function Mr(n){return{fieldPath:n.canonicalString()}}function Gr(n){return It.fromServerFormat(n.fieldPath)}function lC(n){return n instanceof ke?function(t){if(t.op==="=="){if(ft(t.value))return{unaryFilter:{field:Mr(t.field),op:"IS_NAN"}};if(Dt(t.value))return{unaryFilter:{field:Mr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ft(t.value))return{unaryFilter:{field:Mr(t.field),op:"IS_NOT_NAN"}};if(Dt(t.value))return{unaryFilter:{field:Mr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mr(t.field),op:eI(t.op),value:t.value}}}(n):n instanceof Ot?function(t){const r=t.getFilters().map(s=>lC(s));return r.length===1?r[0]:{compositeFilter:{op:tI(t.op),filters:r}}}(n):ee(54877,{filter:n})}function nI(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function hC(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function dC(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function hi(n,e){const t={fields:{}};return e.forEach((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)}),{mapValue:t}}function fC(n){return{stringValue:n}}/**
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
 */function ca(n){return new Jy(n,!0)}/**
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
 */class At{constructor(e){this._byteString=e}static fromBase64String(e){try{return new At(Me.fromBase64String(e))}catch(t){throw new K(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new At(Me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:At._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(bi(e,At._jsonSchema))return At.fromBase64String(e.bytes)}}At._jsonSchemaVersion="firestore/bytes/1.0",At._jsonSchema={type:xe("string",At._jsonSchemaVersion),bytes:xe("string")};/**
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
 */class Eu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function rI(){return new Eu(Yr)}/**
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
 */class _u{constructor(e){this._methodName=e}}/**
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
 */class jt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:jt._jsonSchemaVersion}}static fromJSON(e){if(bi(e,jt._jsonSchema))return new jt(e.latitude,e.longitude)}}jt._jsonSchemaVersion="firestore/geoPoint/1.0",jt._jsonSchema={type:xe("string",jt._jsonSchemaVersion),latitude:xe("number"),longitude:xe("number")};/**
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
 */class $e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
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
 */class or{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class CC{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t($e.UNAUTHENTICATED))}shutdown(){}}class iI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class oI{constructor(e){this.ve=e,this.currentUser=$e.UNAUTHENTICATED,this.De=0,this.forceRefresh=!1,this.auth=null}start(e,t){$(this.xe===void 0,42304);let r=this.De;const s=u=>this.De!==r?(r=this.De,t(u)):Promise.resolve();let i=new or;this.xe=()=>{this.De++,this.currentUser=this.Ce(),i.resolve(),i=new or,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},B=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.xe&&(this.auth.addAuthTokenListener(this.xe),o())};this.ve.onInit(u=>B(u)),setTimeout(()=>{if(!this.auth){const u=this.ve.getImmediate({optional:!0});u?B(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new or)}},0),o()}getToken(){const e=this.De,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.De!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($(typeof r.accessToken=="string",31837,{Fe:r}),new CC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.xe&&this.auth.removeAuthTokenListener(this.xe),this.xe=void 0}Ce(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string",2055,{Oe:e}),new $e(e)}}class aI{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.Be=new Map}Ue(){return this.Le?this.Le():null}get headers(){this.Be.set("X-Goog-AuthUser",this.Me);const e=this.Ue();return e&&this.Be.set("Authorization",e),this.Ne&&this.Be.set("X-Goog-Iam-Authorization-Token",this.Ne),this.Be}}class BI{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r}getToken(){return Promise.resolve(new aI(this.Me,this.Ne,this.Le))}start(e,t){e.enqueueRetryable(()=>t($e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uI{constructor(e,t){this.ke=t,this.forceRefresh=!1,this.appCheck=null,this.qe=null,this.$e=null,mt(e)&&e.settings.appCheckToken&&(this.$e=e.settings.appCheckToken)}start(e,t){$(this.xe===void 0,3512);const r=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.qe;return this.qe=i.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.xe=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.xe&&this.appCheck.addTokenListener(this.xe)};this.ke.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.ke.getImmediate({optional:!0});i?s(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.$e)return Promise.resolve(new Nh(this.$e));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?($(typeof t.token=="string",44558,{tokenResult:t}),this.qe=t.token,new Nh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.xe&&this.appCheck.removeTokenListener(this.xe),this.xe=void 0}}function pC(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */class cI{Ke(e){}shutdown(){}}/**
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
 */const Lh="ConnectivityMonitor";class Fh{constructor(){this.Qe=()=>this.We(),this.Ge=()=>this.ze(),this.je=[],this.He()}Ke(e){this.je.push(e)}shutdown(){window.removeEventListener("online",this.Qe),window.removeEventListener("offline",this.Ge)}He(){window.addEventListener("online",this.Qe),window.addEventListener("offline",this.Ge)}We(){z(Lh,"Network connectivity changed: AVAILABLE");for(const e of this.je)e(0)}ze(){z(Lh,"Network connectivity changed: UNAVAILABLE");for(const e of this.je)e(1)}static Je(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let lo=null;function kB(){return lo===null?lo=function(){return 268435456+Math.round(2147483648*Math.random())}():lo++,"0x"+lo.toString(16)}/**
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
 */const iB="RestConnection",lI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class hI{get Ye(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ze=t+"://"+e.host,this.Xe=`projects/${r}/databases/${s}`,this.et=this.databaseId.database===Vo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}tt(e,t,r,s,i){const o=kB(),B=this.nt(e,t.toUriEncodedString());z(iB,`Sending RPC '${e}' ${o}:`,B,r);const u={"google-cloud-resource-prefix":this.Xe,"x-goog-request-params":this.et};this.rt(u,s,i);const{host:c}=new URL(B),h=Er(c);return this.it(e,B,u,r,h).then(f=>(z(iB,`Received RPC '${e}' ${o}: `,f),f),f=>{throw St(iB,`RPC '${e}' ${o} failed with error: `,f,"url: ",B,"request:",r),f})}st(e,t,r,s,i,o){return this.tt(e,t,r,s,i)}rt(e,t,r){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+os}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}nt(e,t){const r=lI[e];let s=`${this.Ze}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class dI{constructor(e){this._t=e._t,this.ot=e.ot}ut(e){this.ct=e}lt(e){this.Et=e}ht(e){this.Tt=e}onMessage(e){this.Pt=e}close(){this.ot()}send(e){this._t(e)}Rt(){this.ct()}It(){this.Et()}At(e){this.Tt(e)}Vt(e){this.Pt(e)}}/**
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
 */const We="WebChannelConnection",Ns=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Kr extends hI{constructor(e){super(e),this.dt=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static ft(){if(!Kr.gt){const e=Ef();Ns(e,mf.STAT_EVENT,t=>{t.stat===IB.PROXY?z(We,"STAT_EVENT: detected buffering proxy"):t.stat===IB.NOPROXY&&z(We,"STAT_EVENT: detected no buffering proxy")}),Kr.gt=!0}}it(e,t,r,s,i){const o=kB();return new Promise((B,u)=>{const c=new pf;c.setWithCredentials(!0),c.listenOnce(gf.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case wo.NO_ERROR:const f=c.getResponseJson();z(We,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),B(f);break;case wo.TIMEOUT:z(We,`RPC '${e}' ${o} timed out`),u(new K(k.DEADLINE_EXCEEDED,"Request time out"));break;case wo.HTTP_ERROR:const p=c.getStatus();if(z(We,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const R=y==null?void 0:y.error;if(R&&R.status&&R.message){const F=function(j){const ne=j.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(ne)>=0?ne:k.UNKNOWN}(R.status);u(new K(F,R.message))}else u(new K(k.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new K(k.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{yt:e,streamId:o,wt:c.getLastErrorCode(),bt:c.getLastError()})}}finally{z(We,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);z(We,`RPC '${e}' ${o} sending request:`,s),c.send(t,"POST",h,r,15)})}St(e,t,r){const s=kB(),i=[this.Ze,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),B={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(B.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(B.useFetchStreams=!0),this.rt(B.initMessageHeaders,t,r),B.encodeInitMessageHeaders=!0;const c=i.join("");z(We,`Creating RPC '${e}' stream ${s}: ${c}`,B);const h=o.createWebChannel(c,B);this.vt(h);let f=!1,p=!1;const y=new dI({_t:R=>{p?z(We,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(f||(z(We,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),z(We,`RPC '${e}' stream ${s} sending:`,R),h.send(R))},ot:()=>h.close()});return Ns(h,Vs.EventType.OPEN,()=>{p||(z(We,`RPC '${e}' stream ${s} transport opened.`),y.Rt())}),Ns(h,Vs.EventType.CLOSE,()=>{p||(p=!0,z(We,`RPC '${e}' stream ${s} transport closed`),y.At(),this.Dt(h))}),Ns(h,Vs.EventType.ERROR,R=>{p||(p=!0,St(We,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),y.At(new K(k.UNAVAILABLE,"The operation could not be completed")))}),Ns(h,Vs.EventType.MESSAGE,R=>{var F;if(!p){const M=R.data[0];$(!!M,16349);const j=M,ne=(j==null?void 0:j.error)||((F=j[0])==null?void 0:F.error);if(ne){z(We,`RPC '${e}' stream ${s} received error:`,ne);const oe=ne.status;let ce=function(A){const E=Le[A];if(E!==void 0)return eC(E)}(oe),ye=ne.message;oe==="NOT_FOUND"&&ye.includes("database")&&ye.includes("does not exist")&&ye.includes(this.databaseId.database)&&St(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ce===void 0&&(ce=k.INTERNAL,ye="Unknown error status: "+oe+" with message "+ne.message),p=!0,y.At(new K(ce,ye)),h.close()}else z(We,`RPC '${e}' stream ${s} received:`,M),y.Vt(M)}}),Kr.ft(),setTimeout(()=>{y.It()},0),y}terminate(){this.dt.forEach(e=>e.close()),this.dt=[]}vt(e){this.dt.push(e)}Dt(e){this.dt=this.dt.filter(t=>t===e)}rt(e,t,r){super.rt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return _f()}}/**
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
 */function fI(n){return new Kr(n)}Kr.gt=!1;class gC{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xt=e,this.timerId=t,this.Ct=r,this.Ft=s,this.Ot=i,this.Mt=0,this.Nt=null,this.Lt=Date.now(),this.reset()}reset(){this.Mt=0}Bt(){this.Mt=this.Ot}Ut(e){this.cancel();const t=Math.floor(this.Mt+this.kt()),r=Math.max(0,Date.now()-this.Lt),s=Math.max(0,t-r);s>0&&z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Mt} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Nt=this.xt.enqueueAfterDelay(this.timerId,s,()=>(this.Lt=Date.now(),e())),this.Mt*=this.Ft,this.Mt<this.Ct&&(this.Mt=this.Ct),this.Mt>this.Ot&&(this.Mt=this.Ot)}qt(){this.Nt!==null&&(this.Nt.skipDelay(),this.Nt=null)}cancel(){this.Nt!==null&&(this.Nt.cancel(),this.Nt=null)}kt(){return(Math.random()-.5)*this.Mt}}/**
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
 */const kh="PersistentStream";class mC{constructor(e,t,r,s,i,o,B,u){this.xt=e,this.$t=r,this.Kt=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=B,this.listener=u,this.state=0,this.Qt=0,this.Wt=null,this.Gt=null,this.stream=null,this.zt=0,this.jt=new gC(e,t)}Ht(){return this.state===1||this.state===5||this.Jt()}Jt(){return this.state===2||this.state===3}start(){this.zt=0,this.state!==4?this.auth():this.Yt()}async stop(){this.Ht()&&await this.close(0)}Zt(){this.state=0,this.jt.reset()}Xt(){this.Jt()&&this.Wt===null&&(this.Wt=this.xt.enqueueAfterDelay(this.$t,6e4,()=>this.en()))}tn(e){this.nn(),this.stream.send(e)}async en(){if(this.Jt())return this.close(0)}nn(){this.Wt&&(this.Wt.cancel(),this.Wt=null)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}async close(e,t){this.nn(),this.rn(),this.jt.cancel(),this.Qt++,e!==4?this.jt.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(an(t.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.jt.Bt()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.sn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ht(t)}sn(){}auth(){this.state=1;const e=this._n(this.Qt),t=this.Qt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Qt===t&&this.an(r,s)},r=>{e(()=>{const s=new K(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.un(s)})})}an(e,t){const r=this._n(this.Qt);this.stream=this.cn(e,t),this.stream.ut(()=>{r(()=>this.listener.ut())}),this.stream.lt(()=>{r(()=>(this.state=2,this.Gt=this.xt.enqueueAfterDelay(this.Kt,1e4,()=>(this.Jt()&&(this.state=3),Promise.resolve())),this.listener.lt()))}),this.stream.ht(s=>{r(()=>this.un(s))}),this.stream.onMessage(s=>{r(()=>++this.zt==1?this.En(s):this.onNext(s))})}Yt(){this.state=5,this.jt.Ut(async()=>{this.state=0,this.start()})}un(e){return z(kh,`close with error: ${e}`),this.stream=null,this.close(4,e)}_n(e){return t=>{this.xt.enqueueAndForget(()=>this.Qt===e?t():(z(kh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CI extends mC{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}cn(e,t){return this.connection.St("Listen",e,t)}En(e){return this.onNext(e)}onNext(e){this.jt.reset();const t=jy(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?qt(o.readTime):se.min()}(e);return this.listener.hn(t,r)}Tn(e){const t={};t.database=FB(this.serializer),t.addTarget=function(i,o){let B;const u=o.target;if(B=Zn(u)?{pipelineQuery:Xy(i,u)}:Xf(u)?{documents:Qy(i,u)}:{query:Wy(i,u).be},B.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){B.resumeToken=oC(i,o.resumeToken);const c=NB(i,o.expectedCount);c!==null&&(B.expectedCount=c)}else if(o.snapshotVersion.compareTo(se.min())>0){B.readTime=qo(i,o.snapshotVersion.toTimestamp());const c=NB(i,o.expectedCount);c!==null&&(B.expectedCount=c)}return B}(this.serializer,e);const r=Yy(this.serializer,e);r&&(t.labels=r),this.tn(t)}Pn(e){const t={};t.database=FB(this.serializer),t.removeTarget=e,this.tn(t)}}class pI extends mC{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Rn(){return this.zt>0}start(){this.lastStreamToken=void 0,super.start()}sn(){this.Rn&&this.In([])}cn(e,t){return this.connection.St("Write",e,t)}En(e){return $(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$(!e.writeResults||e.writeResults.length===0,55816),this.listener.An()}onNext(e){$(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.jt.reset();const t=zy(e.writeResults,e.commitTime),r=qt(e.commitTime);return this.listener.Vn(r,t)}dn(){const e={};e.database=FB(this.serializer),this.tn(e)}In(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Ky(this.serializer,r))};this.tn(t)}}/**
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
 */class gI{}class mI extends gI{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.fn=!1}mn(){if(this.fn)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.")}tt(e,t,r,s){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.tt(e,LB(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(k.UNKNOWN,i.toString())})}st(e,t,r,s,i){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,B])=>this.connection.st(e,LB(t,r),s,o,B,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(k.UNKNOWN,o.toString())})}terminate(){this.fn=!0,this.connection.terminate()}}function EI(n,e,t,r){return new mI(n,e,t,r)}/**
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
 */const _I="ComponentProvider",xh=new Map;function DI(n,e,t,r,s){return new YD(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,pC(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r,s._customHeaders,s.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Vh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},EC=41943040;class at{static withCacheSize(e){return new at(e,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}at.DEFAULT_COLLECTION_PERCENTILE=10,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,at.DEFAULT=new at(EC,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),at.DISABLED=new at(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
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
 */class la{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.pn(r),this.gn=r=>t.writeSequenceNumber(r))}pn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.gn&&this.gn(e),e}}la.yn=-1;/**
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
 */const yI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class II{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Bs(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==yI)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):x.reject(t)}static resolve(e){return new x((t,r)=>{t(e)})}static reject(e){return new x((t,r)=>{r(e)})}static waitFor(e){return new x((t,r)=>{let s=0,i=0,o=!1;e.forEach(B=>{++s,B.next(()=>{++i,o&&i===s&&t()},u=>r(u))}),o=!0,i===s&&t()})}static or(e){let t=x.resolve(!1);for(const r of e)t=t.next(s=>s?x.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new x((r,s)=>{const i=e.length,o=new Array(i);let B=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next(h=>{o[c]=h,++B,B===i&&r(o)},h=>s(h))}})}static doWhile(e,t){return new x((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function wI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function us(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const Mh="LruGarbageCollector",TI=1048576;function Gh([n,e],[t,r]){const s=ue(n,t);return s===0?ue(e,r):s}class AI{constructor(e){this.Jn=e,this.buffer=new Ve(Gh),this.Yn=0}Zn(){return++this.Yn}Xn(e){const t=[e,this.Zn()];if(this.buffer.size<this.Jn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Gh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class RI{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.tr(6e4)}stop(){this.er&&(this.er.cancel(),this.er=null)}get started(){return this.er!==null}tr(e){z(Mh,`Garbage collection scheduled in ${e}ms`),this.er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){us(t)?z(Mh,"Ignoring IndexedDB error during garbage collection: ",t):await Bs(t)}await this.tr(3e5)})}}class vI{constructor(e,t){this.nr=e,this.params=t}calculateTargetCount(e,t){return this.nr.rr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return x.resolve(la.yn);const r=new AI(t);return this.nr.forEachTarget(e,s=>r.Xn(s.sequenceNumber)).next(()=>this.nr.ir(e,s=>r.Xn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.nr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.nr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Vh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vh):this.sr(e,t))}getCacheSize(e){return this.nr.getCacheSize(e)}sr(e,t){let r,s,i,o,B,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,B=Date.now(),this.removeTargets(e,r,t))).next(f=>(i=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),kr()<=le.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(B-o)+`ms
	Removed ${i} targets in `+(u-B)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function bI(n,e){return new vI(n,e)}/**
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
 */const _C="firestore.googleapis.com",Uh=!0;class Hh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_C,this.ssl=Uh}else this.host=e.host,this.ssl=e.ssl??Uh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=EC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<TI)throw new K(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(WD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pC(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new K(k.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(r,s){if(r===s)return!0;if(!r||!s)return!1;const i=Object.keys(r),o=Object.keys(s);if(i.length!==o.length)return!1;for(const B of i)if(r[B]!==s[B])return!1;return!0}(this._customHeaders,e._customHeaders)}}let ha=class{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sI;switch(r.type){case"firstParty":return new BI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=xh.get(t);r&&(z(_I,"Removing Datastore"),xh.delete(t),r.terminate())}(this),Promise.resolve()}};function PI(n,e,t,r={}){var c;n=sr(n,ha);const s=Er(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},B=`${e}:${t}`;s&&zB(`https://${B}`),i.host!==_C&&i.host!==B&&St("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:B,ssl:s,emulatorOptions:r};if(!lr(u,o)&&(n._setSettings(u),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=$e.MOCK_USER;else{h=Ad(r.mockUserToken,(c=n._app)==null?void 0:c.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new K(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new $e(p)}n._authCredentials=new iI(new CC(h,f))}}/**
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
 */class Tr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Tr(this.firestore,e,this._query)}}class Ne{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}toJSON(){return{type:Ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(bi(t,Ne._jsonSchema))return new Ne(e,r||null,new X(pe.fromString(t.referencePath)))}}Ne._jsonSchemaVersion="firestore/documentReference/1.0",Ne._jsonSchema={type:xe("string",Ne._jsonSchemaVersion),referencePath:xe("string")};class Pn extends Tr{constructor(e,t,r){super(e,t,fu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new X(e))}withConverter(e){return new Pn(this.firestore,e,this._path)}}function DC(n,e,...t){if(n=Oe(n),bf("collection","path",e),n instanceof ha){const r=pe.fromString(e,...t);return fh(r),new Pn(n,null,r)}{if(!(n instanceof Ne||n instanceof Pn))throw new K(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pe.fromString(e,...t));return fh(r),new Pn(n.firestore,null,r)}}function yC(n,e,...t){if(n=Oe(n),arguments.length===1&&(e=Bu.newId()),bf("doc","path",e),n instanceof ha){const r=pe.fromString(e,...t);return dh(r),new Ne(n,null,new X(r))}{if(!(n instanceof Ne||n instanceof Pn))throw new K(k.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pe.fromString(e,...t));return dh(r),new Ne(n.firestore,n instanceof Pn?n.converter:null,new X(r))}}/**
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
 *//**
 * @license
 * Copyright 2024 Google LLC
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
 */class lt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:lt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(bi(e,lt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new lt(e.vectorValues);throw new K(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}lt._jsonSchemaVersion="firestore/vectorValue/1.0",lt._jsonSchema={type:xe("string",lt._jsonSchemaVersion),vectorValues:xe("object")};/**
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
 */const SI=/^__.*__$/;class OI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ir(e,this.data,this.fieldMask,t,this.fieldTransforms):new Si(e,this.data,t,this.fieldTransforms)}}function IC(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{dataSource:n})}}class Du{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Du({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Ko(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(IC(this.dataSource)&&SI.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class NI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ca(e)}createContext(e,t,r,s=!1){return new Du({dataSource:e,methodName:t,targetDoc:r,path:It.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wC(n){const e=n._freezeSettings(),t=ca(n._databaseId);return new NI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function LI(n,e,t,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);RC("Data must be an object, but it was:",o,r);const B=TC(r,o);let u,c;if(i.merge)u=new bt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const p=Li(e,f,t);if(!o.contains(p))throw new K(k.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);VI(h,p)||h.push(p)}u=new bt(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new OI(new Et(B),u,c)}class yu extends _u{_toFieldTransform(e){return new iy(e.path,new oi)}isEqual(e){return e instanceof yu}}function FI(n,e,t,r=!1){return ns(t,n.createContext(r?4:3,e))}function ns(n,e,t){if(AC(n=Oe(n)))return RC("Unsupported field value:",e,n),TC(n,e);if(n instanceof _u)return function(s,i){if(!IC(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const o=[];let B=0;for(const u of s){let c=ns(u,i.childContextForArray(B));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),B++}return{arrayValue:{values:o}}}(n,e)}return function(s,i,o){if((s=Oe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return lu(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const B=Ae.fromDate(s);return{timestampValue:qo(i.serializer,B)}}if(s instanceof Ae){const B=new Ae(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:qo(i.serializer,B)}}if(s instanceof jt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof At)return{bytesValue:oC(i.serializer,s._byteString)};if(s instanceof Ne){const B=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(B))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${B.projectId}/${B.database}`);return{referenceValue:mu(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof lt)return function(u,c){const h=u instanceof lt?u.toArray():u;return{mapValue:{fields:{[Ff]:{stringValue:kf},[si]:{arrayValue:{values:h.map(p=>{if(typeof p!="number")throw c.createError("VectorValues must only contain numeric values.");return oa(c.serializer,p)})}}}}}}(s,i);if(dC(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${ra(s)}`)}(n,e)}function TC(n,e){const t={};return vf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yr(n,(r,s)=>{const i=ns(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function AC(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ae||n instanceof jt||n instanceof At||n instanceof Ne||n instanceof _u||n instanceof lt||dC(n))}function RC(n,e,t){if(!AC(t)||!vi(t)){const r=ra(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Li(n,e,t){if((e=Oe(e))instanceof Eu)return e._internalPath;if(typeof e=="string")return xI(n,e);throw Ko("Field path arguments must be of type string or ",n,!1,void 0,t)}const kI=new RegExp("[~\\*/\\[\\]]");function xI(n,e,t){if(e.search(kI)>=0)throw Ko(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Eu(...e.split("."))._internalPath}catch{throw Ko(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ko(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let B=`Function ${e}() called with invalid data`;t&&(B+=" (via `toFirestore()`)"),B+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new K(k.INVALID_ARGUMENT,B+n+u)}function VI(n,e){return n.some(t=>t.isEqual(e))}function MI(n){return typeof n._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class Ze{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=Et.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const o=e[s];let B;i.nestedOptions&&vi(o)?B={mapValue:{fields:new Ze(i.nestedOptions).getOptionsProto(t,o)}}:o&&(B=ns(o,t)??void 0),B&&r.set(It.fromServerFormat(i.serverName),B)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(QD(r,(o,B)=>[It.fromServerFormat(B),o!==void 0?ns(o,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function GI(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!vi(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function UI(){return new yu("serverTimestamp")}function HI(n){return new lt(n)}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function J(n){let e;return n instanceof Ar?n:(e=vi(n)?QI(n):n instanceof Array?WI(n):vC(n,void 0),e)}function oB(n){if(n instanceof Ar)return n;if(n instanceof lt)return di(n);if(Array.isArray(n))return di(HI(n));throw new Error("Unsupported value: "+typeof n)}function Iu(n){return ey(n)?jI(n):J(n)}class Ar{constructor(){this._protoValueType="ProtoValue"}add(e){return new L("add",[this,J(e)],"add")}asBoolean(){if(this instanceof Vn)return this;if(this instanceof cs)return new PC(this);if(this instanceof Fi)return new zI(this);if(this instanceof L)return new bC(this);throw new K("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new L("subtract",[this,J(e)],"subtract")}multiply(e){return new L("multiply",[this,J(e)],"multiply")}divide(e){return new L("divide",[this,J(e)],"divide")}mod(e){return new L("mod",[this,J(e)],"mod")}equal(e){return new L("equal",[this,J(e)],"equal").asBoolean()}notEqual(e){return new L("not_equal",[this,J(e)],"notEqual").asBoolean()}lessThan(e){return new L("less_than",[this,J(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new L("less_than_or_equal",[this,J(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new L("greater_than",[this,J(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new L("greater_than_or_equal",[this,J(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map(s=>J(s));return new L("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new L("array_contains",[this,J(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Gs(e.map(J),"arrayContainsAll"):e;return new L("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Gs(e.map(J),"arrayContainsAny"):e;return new L("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new L("array_reverse",[this])}arrayLength(){return new L("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Gs(e.map(J),"equalAny"):e;return new L("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Gs(e.map(J),"notEqualAny"):e;return new L("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new L("exists",[this],"exists").asBoolean()}charLength(){return new L("char_length",[this],"charLength")}like(e){return new L("like",[this,J(e)],"like").asBoolean()}regexContains(e){return new L("regex_contains",[this,J(e)],"regexContains").asBoolean()}regexFind(e){return new L("regex_find",[this,J(e)],"regexFind")}regexFindAll(e){return new L("regex_find_all",[this,J(e)],"regexFindAll")}regexMatch(e){return new L("regex_match",[this,J(e)],"regexMatch").asBoolean()}stringContains(e){return new L("string_contains",[this,J(e)],"stringContains").asBoolean()}startsWith(e){return new L("starts_with",[this,J(e)],"startsWith").asBoolean()}endsWith(e){return new L("ends_with",[this,J(e)],"endsWith").asBoolean()}toLower(){return new L("to_lower",[this],"toLower")}toUpper(){return new L("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(J(e)),new L("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(J(e)),new L("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(J(e)),new L("rtrim",t,"rtrim")}type(){return new L("type",[this])}isType(e){return new L("is_type",[this,di(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(J);return new L("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new L("string_index_of",[this,J(e)],"stringIndexOf")}stringRepeat(e){return new L("string_repeat",[this,J(e)],"stringRepeat")}stringReplaceAll(e,t){return new L("string_replace_all",[this,J(e),J(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new L("string_replace_one",[this,J(e),J(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(J);return new L("concat",[this,...r],"concat")}reverse(){return new L("reverse",[this],"reverse")}arrayFilter(e,t){return new L("array_filter",[this,J(e),t],"arrayFilter")}arrayTransform(e,t){return new L("array_transform",[this,J(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new L("array_transform",[this,J(e),J(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,J(e)];return t!==void 0&&r.push(J(t)),new L("array_slice",r,"arraySlice")}arrayFirst(){return new L("array_first",[this],"arrayFirst")}arrayFirstN(e){return new L("array_first_n",[this,J(e)],"arrayFirstN")}arrayLast(){return new L("array_last",[this],"arrayLast")}arrayLastN(e){return new L("array_last_n",[this,J(e)],"arrayLastN")}arrayMaximum(){return new L("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new L("maximum_n",[this,J(e)],"arrayMaximumN")}arrayMinimum(){return new L("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new L("minimum_n",[this,J(e)],"arrayMinimumN")}arrayIndexOf(e){return new L("array_index_of",[this,J(e),J("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new L("array_index_of",[this,J(e),J("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new L("array_index_of_all",[this,J(e)],"arrayIndexOfAll")}byteLength(){return new L("byte_length",[this],"byteLength")}ceil(){return new L("ceil",[this])}floor(){return new L("floor",[this])}abs(){return new L("abs",[this])}exp(){return new L("exp",[this])}mapGet(e){return new L("map_get",[this,di(e)],"mapGet")}mapSet(e,t,...r){const s=[this,J(e),J(t),...r.map(J)];return new L("map_set",s,"mapSet")}mapKeys(){return new L("map_keys",[this],"mapKeys")}mapValues(){return new L("map_values",[this],"mapValues")}mapEntries(){return new L("map_entries",[this],"mapEntries")}getField(e){return new L("get_field",[this,J(e)],"get_field")}count(){return gt._create("count",[this],"count")}sum(){return gt._create("sum",[this],"sum")}average(){return gt._create("average",[this],"average")}minimum(){return gt._create("minimum",[this],"minimum")}maximum(){return gt._create("maximum",[this],"maximum")}first(){return gt._create("first",[this],"first")}last(){return gt._create("last",[this],"last")}arrayAgg(){return gt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return gt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return gt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new L("maximum",[this,...r.map(J)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new L("minimum",[this,...r.map(J)],"minimum")}vectorLength(){return new L("vector_length",[this],"vectorLength")}cosineDistance(e){return new L("cosine_distance",[this,oB(e)],"cosineDistance")}dotProduct(e){return new L("dot_product",[this,oB(e)],"dotProduct")}euclideanDistance(e){return new L("euclidean_distance",[this,oB(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new L("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new L("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new L("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new L("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new L("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new L("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new L("timestamp_add",[this,J(e),J(t)],"timestampAdd")}timestampSubtract(e,t){return new L("timestamp_subtract",[this,J(e),J(t)],"timestampSubtract")}timestampDiff(e,t){return new L("timestamp_diff",[this,Iu(e),J(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,J(e)];return t&&r.push(J(t)),new L("timestamp_extract",r,"timestampExtract")}documentId(){return new L("document_id",[this],"documentId")}parent(){return new L("parent",[this],"parent")}substring(e,t){const r=J(e);return new L("substring",t===void 0?[this,r]:[this,r,J(t)],"substring")}arrayGet(e){return new L("array_get",[this,J(e)],"arrayGet")}isError(){return new L("is_error",[this],"isError").asBoolean()}ifError(e){const t=new L("if_error",[this,J(e)],"ifError");return e instanceof Vn?t.asBoolean():t}isAbsent(){return new L("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new L("map_remove",[this,J(e)],"mapRemove")}mapMerge(e,...t){const r=J(e),s=t.map(J);return new L("map_merge",[this,r,...s],"mapMerge")}pow(e){return new L("pow",[this,J(e)])}trunc(e){return e===void 0?new L("trunc",[this]):new L("trunc",[this,J(e)],"trunc")}round(e){return e===void 0?new L("round",[this]):new L("round",[this,J(e)],"round")}collectionId(){return new L("collection_id",[this])}length(){return new L("length",[this])}ln(){return new L("ln",[this])}sqrt(){return new L("sqrt",[this])}stringReverse(){return new L("string_reverse",[this])}ifAbsent(e){return new L("if_absent",[this,J(e)],"ifAbsent")}ifNull(e){return new L("if_null",[this,J(e)],"ifNull")}coalesce(e,...t){return new L("coalesce",[this,J(e),...t.map(J)],"coalesce")}join(e){return new L("join",[this,J(e)],"join")}log10(){return new L("log10",[this])}arraySum(){return new L("sum",[this])}split(e){return new L("split",[this,J(e)])}timestampTruncate(e,t){const r=[this,J(e)];return t&&r.push(J(t)),new L("timestamp_trunc",r)}ascending(){return $I(this)}descending(){return YI(this)}as(e){return new qI(this,e,"as")}}class gt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new gt(e,t);return s._methodName=r,s}as(e){return new JI(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class JI{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class qI{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Gs extends Ar{constructor(e,t){super(),this.ur=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.ur.map(t=>t._toProto(e))}}}_readUserData(e){this.ur.forEach(t=>t._readUserData(e))}}class Fi extends Ar{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new L("geo_distance",[this,J(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function jI(n){return KI(n,"field")}function KI(n,e){return new Fi(typeof n=="string"?Yr===n?rI()._internalPath:Li("field",n):n._internalPath,e)}class cs extends Ar{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new cs(e,void 0);return t._protoValue=e,t}_toProto(e){return $(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,GI(this._protoValue)||(this._protoValue=ns(this.value,e))}}function di(n,e){return vC(n,"constant")}function vC(n,e){const t=new cs(n,e);return typeof n=="boolean"?new PC(t):t}class L extends Ar{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new Ze({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Vn extends Ar{get _methodName(){return this._expr._methodName}countIf(){return gt._create("count_if",[this],"countIf")}not(){return new L("not",[this],"not").asBoolean()}conditional(e,t){return new L("conditional",[this,e,t],"conditional")}ifError(e){const t=J(e),r=new L("if_error",[this,t],"ifError");return t instanceof Vn?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class bC extends Vn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class PC extends Vn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class zI extends Vn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function QI(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(di(r)),t.push(J(s))}return new L("map",t,"map")}function WI(n){return function(t,r){return new L("array",t.map(s=>J(s)),r)}(n,"array")}function $I(n){return new SC(Iu(n),"ascending","ascending")}function YI(n){return new SC(Iu(n),"descending","descending")}class SC{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:fC(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class wt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class OC extends wt{get _name(){return"add_fields"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[hi(e,this.fields)]}}_readUserData(e){super._readUserData(e),Mn(this.fields,e)}}class NC extends wt{get _name(){return"aggregate"}get _optionsUtil(){return new Ze({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[hi(e,this.accumulators),hi(e,this.groups)]}}_readUserData(e){super._readUserData(e),Mn(this.groups,e),Mn(this.accumulators,e)}}class LC extends wt{get _name(){return"distinct"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[hi(e,this.groups)]}}_readUserData(e){super._readUserData(e),Mn(this.groups,e)}}class da extends wt{get _name(){return"collection"}get _optionsUtil(){return new Ze({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Er=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Er}]}}_readUserData(e){super._readUserData(e)}}class fa extends wt{get _name(){return"collection_group"}get _optionsUtil(){return new Ze({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class wu extends wt{get _name(){return"database"}get _optionsUtil(){return new Ze({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class Tu extends wt{get _name(){return"documents"}get _optionsUtil(){return new Ze({})}constructor(e,t){if(super(t),!e||e.length===0)throw new K(k.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(r);if(s.size!==r.length)throw new K(k.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.hr=r,this.Tr=s}_toProto(e){return{...super._toProto(e),args:this.hr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class Au extends wt{get _name(){return"where"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Mn(this.condition,e)}}class fi extends wt{get _name(){return"limit"}get _optionsUtil(){return new Ze({})}constructor(e,t){$(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[lu(e,this.limit)]}}}class Jh extends wt{get _name(){return"offset"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[lu(e,this.offset)]}}}class XI extends wt{get _name(){return"select"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[hi(e,this.selections)]}}_readUserData(e){super._readUserData(e),Mn(this.selections,e)}}class Ru extends wt{get _name(){return"sort"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),Mn(this.orderings,e)}}class vu extends wt{get _name(){return"replace_with"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),fC(vu.Pr)]}}_readUserData(e){super._readUserData(e),Mn(this.map,e)}}vu.Pr="full_replace";function Mn(n,e){return MI(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}// Copyright 2024 Google LLC* @license
class ut{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return Ca(this)}getPipelineCollectionGroup(){return bu(this)}getPipelineCollectionId(){return ZI(this)}getPipelineDocuments(){return xB(this)}getPipelineFlavor(){return function(t){let r="exact";return t.stages.forEach((s,i)=>{s._name!==LC.name&&s._name!==NC.name||(r="keyless"),s._name===XI.name&&r==="exact"&&(r="augmented"),s._name===OC.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return Sn(this)}}function Sn(n){const e=n.stages[0];return e instanceof da||e instanceof fa||e instanceof wu||e instanceof Tu?e._name:"unknown"}function Ca(n){if(Sn(n)==="collection")return n.stages[0].Er}function bu(n){if(Sn(n)==="collection_group")return n.stages[0].collectionId}function ZI(n){switch(Sn(n)){case"collection":return pe.fromString(Ca(n)).lastSegment();case"collection_group":return bu(n);default:return}}function xB(n){if(Sn(n)==="documents")return n.stages[0].hr}class I{constructor(e,t){this.type=e,this.value=t}static dr(){return new I("ERROR",void 0)}static mr(){return new I("UNSET",void 0)}static pr(){return new I("NULL",Zr)}static newValue(e){return Dt(e)?new I("NULL",Zr):function(r){return!!r&&"booleanValue"in r}(e)?new I("BOOLEAN",e):kt(e)?new I("INT",e):nr(e)?new I("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new I("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new I("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new I("BYTES",e):e.referenceValue?new I("REFERENCE",e):e.geoPointValue?new I("GEO_POINT",e):ts(e)?new I("ARRAY",e):Mo(e)?new I("VECTOR",e):ir(e)?new I("MAP",e):new I("ERROR",void 0)}gr(){return this.type==="ERROR"||this.type==="UNSET"}yr(){return this.type==="NULL"}}function $s(n){if(!n.gr())return n.value}function FC(n){return n instanceof Vn?n._expr:n}function te(n){if((n=FC(n))instanceof Fi)return new ew(n);if(n instanceof cs)return new tw(n);if(n instanceof Gs)return new nw(n);if(n instanceof L){if(n.name==="add")return new iw(n);if(n.name==="subtract")return new ow(n);if(n.name==="multiply")return new aw(n);if(n.name==="divide")return new Bw(n);if(n.name==="mod")return new uw(n);if(n.name==="and")return new cw(n);if(n.name==="equal")return new yw(n);if(n.name==="not_equal")return new Iw(n);if(n.name==="less_than")return new ww(n);if(n.name==="less_than_or_equal")return new Tw(n);if(n.name==="greater_than")return new Aw(n);if(n.name==="greater_than_or_equal")return new Rw(n);if(n.name==="array_concat")return new vw(n);if(n.name==="array_reverse")return new bw(n);if(n.name==="array_contains")return new Pw(n);if(n.name==="array_contains_all")return new Sw(n);if(n.name==="array_contains_any")return new Ow(n);if(n.name==="array_length")return new Nw(n);if(n.name==="array_element")return new Lw(n);if(n.name==="equal_any")return new kC(n);if(n.name==="not_equal_any")return new hw(n);if(n.name==="is_nan")return new dw(n);if(n.name==="is_not_nan")return new fw(n);if(n.name==="is_null")return new Cw(n);if(n.name==="is_not_null")return new pw(n);if(n.name==="is_error")return new gw(n);if(n.name==="exists")return new mw(n);if(n.name==="not")return new pa(n);if(n.name==="or")return new lw(n);if(n.name==="xor")return new Pu(n);if(n.name==="conditional")return new Ew(n);if(n.name==="maximum")return new _w(n);if(n.name==="minimum")return new Dw(n);if(n.name==="reverse")return new Fw(n);if(n.name==="replace_first")return new kw(n);if(n.name==="replace_all")return new xw(n);if(n.name==="char_length")return new Vw(n);if(n.name==="byte_length")return new Mw(n);if(n.name==="like")return new Gw(n);if(n.name==="regex_contains")return new Uw(n);if(n.name==="regex_match")return new Hw(n);if(n.name==="string_contains")return new Jw(n);if(n.name==="starts_with")return new qw(n);if(n.name==="ends_with")return new jw(n);if(n.name==="to_lower")return new Kw(n);if(n.name==="to_upper")return new zw(n);if(n.name==="trim")return new Qw(n);if(n.name==="string_concat")return new Ww(n);if(n.name==="map_get")return new $w(n);if(n.name==="cosine_distance")return new Yw(n);if(n.name==="dot_product")return new Xw(n);if(n.name==="euclidean_distance")return new Zw(n);if(n.name==="vector_length")return new eT(n);if(n.name==="unix_micros_to_timestamp")return new iT(n);if(n.name==="timestamp_to_unix_micros")return new BT(n);if(n.name==="unix_millis_to_timestamp")return new oT(n);if(n.name==="timestamp_to_unix_millis")return new uT(n);if(n.name==="unix_seconds_to_timestamp")return new aT(n);if(n.name==="timestamp_to_unix_seconds")return new cT(n);if(n.name==="timestamp_add")return new lT(n);if(n.name==="timestamp_subtract")return new hT(n)}throw new Error(`Unknown Expr : ${n}`)}class ew{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Yr)return I.newValue({referenceValue:jo(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return I.newValue({timestampValue:vo(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return I.newValue({timestampValue:vo(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?sa(r)?I.newValue(function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:vo(i.serializer,se.fromTimestamp(Xr(o)))};if(i.serverTimestampBehavior==="previous"){const B=Pi(o);if(B)return B}return{nullValue:"NULL_VALUE"}}(e,r)):I.newValue(r):I.mr()}}class tw{constructor(e){this.expr=e}evaluate(e,t){return I.newValue(this.expr._getValue())}}class nw{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.ur.map(s=>te(s).evaluate(e,t));return r.some(s=>s.gr())?I.dr():I.newValue({arrayValue:{values:r.map(s=>s.value)}})}}function ze(n){return nr(n)?Number(n.doubleValue):Number(n.integerValue)}function Kt(n){return BigInt(n.integerValue)}const rw=BigInt("0x7fffffffffffffff"),sw=-BigInt("0x8000000000000000");class ki{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length>=2,24778);const r=te(this.expr.params[0]).evaluate(e,t),s=te(this.expr.params[1]).evaluate(e,t);let i=this.wr(r,s);for(const o of this.expr.params.slice(2)){const B=te(o).evaluate(e,t);i=this.wr(i,B)}return i}wr(e,t){if(e.gr()||t.gr())return I.dr();if(e.yr()||t.yr())return I.pr();const r=e.value,s=t.value;if(!nr(r)&&!kt(r)||!nr(s)&&!kt(s))return I.dr();if(nr(r)||nr(s)){const i=this.br(r,s);return i?I.newValue(i):I.dr()}if(kt(r)&&kt(s)){const i=this.Sr(r,s);return i===void 0?I.dr():typeof i=="number"?I.newValue({doubleValue:i}):i<sw||i>rw?I.dr():I.newValue({integerValue:`${i}`})}return I.dr()}}function Bn(n,e){return Ge(n)!==Ge(e)?"TYPE_MISMATCH":ft(n)||ft(e)?"NOT_EQ":Dt(n)&&Dt(e)?"EQ":Dt(n)||Dt(e)?"NULL":ts(n)&&ts(e)?function(r,s){var o,B,u;if(((o=r.values)==null?void 0:o.length)!==((B=s.values)==null?void 0:B.length))return"NOT_EQ";let i=!1;for(let c=0;c<(((u=r.values)==null?void 0:u.length)??0);c++){const h=r.values[c],f=s.values[c];switch(Bn(h,f)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:ee(44609,{vr:h,Dr:f})}}return i?"NULL":"EQ"}(n.arrayValue,e.arrayValue):Mo(n)&&Mo(e)||ir(n)&&ir(e)?function(r,s){const i=r.fields||{},o=s.fields||{};if(xo(i)!==xo(o))return"NOT_EQ";let B=!1;for(const u in i)if(i.hasOwnProperty(u)){if(o[u]===void 0)return"NOT_EQ";switch(Bn(i[u],o[u])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":B=!0}}return B?"NULL":"EQ"}(n.mapValue,e.mapValue):function(r,s){return Rt(r,s,{o:!1,t:!0,i:!0})}(n,e)?"EQ":"NOT_EQ"}class iw extends ki{Sr(e,t){return Kt(e)+Kt(t)}br(e,t){return{doubleValue:ze(e)+ze(t)}}}class ow extends ki{constructor(e){super(e),this.expr=e}Sr(e,t){return Kt(e)-Kt(t)}br(e,t){return{doubleValue:ze(e)-ze(t)}}}class aw extends ki{constructor(e){super(e),this.expr=e}Sr(e,t){return Kt(e)*Kt(t)}br(e,t){return{doubleValue:ze(e)*ze(t)}}}class Bw extends ki{constructor(e){super(e),this.expr=e}Sr(e,t){const r=Kt(t);if(r!==BigInt(0))return Kt(e)/r}br(e,t){const r=ze(t);return r===0?{doubleValue:ri(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:ze(e)/r}}}class uw extends ki{constructor(e){super(e),this.expr=e}Sr(e,t){const r=Kt(t);if(r!==BigInt(0))return Kt(e)%r}br(e,t){const r=ze(t);if(r!==0)return{doubleValue:ze(e)%r}}}class cw{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const B=te(o).evaluate(e,t);switch(B.type){case"BOOLEAN":if(!((i=B.value)!=null&&i.booleanValue))return I.newValue(je);break;case"NULL":s=!0;break;default:r=!0}}return r?I.dr():s?I.pr():I.newValue(ht)}}class pa{constructor(e){this.expr=e}evaluate(e,t){var s;$(this.expr.params.length===1,9634);const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return I.newValue({booleanValue:!((s=r.value)!=null&&s.booleanValue)});case"NULL":return I.pr();default:return I.dr()}}}class lw{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const B=te(o).evaluate(e,t);switch(B.type){case"BOOLEAN":if((i=B.value)!=null&&i.booleanValue)return I.newValue(ht);break;case"NULL":s=!0;break;default:r=!0}}return r?I.dr():s?I.pr():I.newValue(je)}}class Pu{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const B=te(o).evaluate(e,t);switch(B.type){case"BOOLEAN":r=Pu.xor(r,!!((i=B.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return I.dr()}}return s?I.pr():I.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class kC{constructor(e){this.expr=e}evaluate(e,t){var o,B;$(this.expr.params.length===2,55094);let r=!1;const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return I.dr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.dr()}if(r)return I.pr();for(const u of((B=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:B.values)??[])switch(Dt(s.value)&&Dt(u)?"EQ":Bn(s.value,u)){case"EQ":return I.newValue(ht);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:ee(44608,{value:s.value,candidate:u})}return r?I.pr():I.newValue(je)}}class hw{constructor(e){this.expr=e}evaluate(e,t){return new pa(new L("not",[new L("equal_any",this.expr.params)])).evaluate(e,t)}}class dw{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,23322);const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return I.newValue(je);case"DOUBLE":return I.newValue({booleanValue:isNaN(ze(r.value))});case"NULL":return I.pr();default:return I.dr()}}}class fw{constructor(e){this.expr=e}evaluate(e,t){return $(this.expr.params.length===1,50406),new pa(new L("not",[new L("is_nan",this.expr.params)])).evaluate(e,t)}}class Cw{constructor(e){this.expr=e}evaluate(e,t){switch($(this.expr.params.length===1,23123),te(this.expr.params[0]).evaluate(e,t).type){case"NULL":return I.newValue(ht);case"UNSET":case"ERROR":return I.dr();default:return I.newValue(je)}}}class pw{constructor(e){this.expr=e}evaluate(e,t){return $(this.expr.params.length===1,23167),new pa(new L("not",[new L("is_null",this.expr.params)])).evaluate(e,t)}}class gw{constructor(e){this.expr=e}evaluate(e,t){return $(this.expr.params.length===1,5228),te(this.expr.params[0]).evaluate(e,t).type==="ERROR"?I.newValue(ht):I.newValue(je)}}class mw{constructor(e){this.expr=e}evaluate(e,t){switch($(this.expr.params.length===1,6877),te(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return I.dr();case"UNSET":return I.newValue(je);default:return I.newValue(ht)}}}class Ew{constructor(e){this.expr=e}evaluate(e,t){var s;$(this.expr.params.length===3,11706);const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return(s=r.value)!=null&&s.booleanValue?te(this.expr.params[1]).evaluate(e,t):te(this.expr.params[2]).evaluate(e,t);case"NULL":return te(this.expr.params[2]).evaluate(e,t);default:return I.dr()}}}class _w{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>te(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||dt(i.value,s.value)>0?i:s}return s===void 0?I.pr():s}}class Dw{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>te(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||dt(i.value,s.value)<0?i:s}return s===void 0?I.pr():s}}class ls{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return I.dr()}const s=te(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return I.dr()}return this.Cr(r,s)}}class yw extends ls{constructor(e){super(e),this.expr=e}Cr(e,t){if(e.yr()&&t.yr())return I.newValue(ht);if(e.yr()||t.yr()||ft(e.value)||ft(t.value)||Ge(e.value)!==Ge(t.value))return I.newValue(je);switch(Bn(e.value,t.value)){case"EQ":return I.newValue(ht);case"NOT_EQ":return I.newValue(je);case"NULL":return I.pr();default:ee(44615,{left:e,right:t})}}}class Iw extends ls{constructor(e){super(e),this.expr=e}Cr(e,t){switch(Bn(e.value,t.value)){case"EQ":return I.newValue(je);case"NOT_EQ":case"TYPE_MISMATCH":return I.newValue(ht);case"NULL":return I.pr();default:ee(44614,{left:e,right:t})}}}class ww extends ls{constructor(e){super(e),this.expr=e}Cr(e,t){return Ge(e.value)!==Ge(t.value)||ft(e.value)||ft(t.value)?I.newValue(je):I.newValue({booleanValue:dt(e.value,t.value)<0})}}class Tw extends ls{constructor(e){super(e),this.expr=e}Cr(e,t){return Ge(e.value)!==Ge(t.value)||ft(e.value)||ft(t.value)?I.newValue(je):Bn(e.value,t.value)==="EQ"?I.newValue(ht):I.newValue({booleanValue:dt(e.value,t.value)<0})}}class Aw extends ls{constructor(e){super(e),this.expr=e}Cr(e,t){return Ge(e.value)!==Ge(t.value)||ft(e.value)||ft(t.value)?I.newValue(je):I.newValue({booleanValue:dt(e.value,t.value)>0})}}class Rw extends ls{constructor(e){super(e),this.expr=e}Cr(e,t){return Ge(e.value)!==Ge(t.value)||ft(e.value)||ft(t.value)?I.newValue(je):Bn(e.value,t.value)==="EQ"?I.newValue(ht):I.newValue({booleanValue:dt(e.value,t.value)>0})}}class vw{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class bw{constructor(e){this.expr=e}evaluate(e,t){var s;$(this.expr.params.length===1,216);const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return I.pr();case"ARRAY":{const i=((s=r.value.arrayValue)==null?void 0:s.values)??[];return I.newValue({arrayValue:{values:[...i].reverse()}})}default:return I.dr()}}}class Pw{constructor(e){this.expr=e}evaluate(e,t){return $(this.expr.params.length===2,52884),new kC(new L("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class Sw{constructor(e){this.expr=e}evaluate(e,t){var u,c,h,f;$(this.expr.params.length===2,1392);let r=!1;const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.dr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.dr()}if(r)return I.pr();const o=((c=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:c.values)??[],B=((f=(h=s.value)==null?void 0:h.arrayValue)==null?void 0:f.values)??[];for(const p of o){let y=!1;r=!1;for(const R of B){switch(Dt(p)&&Dt(R)?"EQ":Bn(p,R)){case"EQ":y=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:ee(44613,{value:R,search:p})}if(y)break}if(!y)return I.newValue(je)}return I.newValue(ht)}}class Ow{constructor(e){this.expr=e}evaluate(e,t){var u,c,h,f;$(this.expr.params.length===2,2680);let r=!1;const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.dr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.dr()}if(r)return I.pr();const o=((c=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:c.values)??[],B=((f=(h=s.value)==null?void 0:h.arrayValue)==null?void 0:f.values)??[];for(const p of B)for(const y of o)switch(Dt(p)&&Dt(y)?"EQ":Bn(p,y)){case"EQ":return I.newValue(ht);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:ee(60403,{value:p,search:y})}return r?I.pr():I.newValue(je)}}class Nw{constructor(e){this.expr=e}evaluate(e,t){var s,i,o;$(this.expr.params.length===1,38605);const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return I.pr();case"ARRAY":return I.newValue({integerValue:`${((o=(i=(s=r.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return I.dr()}}}class Lw{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Fw{constructor(e){this.expr=e}evaluate(e,t){var s,i;$(this.expr.params.length===1,1508);const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return I.pr();case"BYTES":{const o=(s=r.value)==null?void 0:s.bytesValue;if(typeof o=="string"){const B=Me.fromBase64String(o).toUint8Array();return B.reverse(),I.newValue({bytesValue:Me.fromUint8Array(B).toBase64()})}return I.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=r.value)==null?void 0:i.stringValue,B=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),u=Array.from(B,c=>c.segment).reverse();return I.newValue({stringValue:u.join("")})}default:return I.dr()}}}class kw{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class xw{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Vw{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,19400);const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return I.pr();case"STRING":{const s=function(o){let B=0;for(let u=0;u<o.length;u++){const c=o.codePointAt(u);if(c===void 0)return;if(c<=65535)if(c>=55296&&c<=57343)if(c<=56319){const h=o.codePointAt(u+1);h!==void 0&&h>=56320&&h<=57343?(B+=1,u++):B+=1}else B+=1;else B+=1;else{if(!(c<=1114111))return;B+=1,u++}}return B}(r.value.stringValue);return s===void 0?I.dr():I.newValue({integerValue:s})}default:return I.dr()}}}class Mw{constructor(e){this.expr=e}evaluate(e,t){var s,i;$(this.expr.params.length===1,8486);const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const o=(s=r.value)==null?void 0:s.bytesValue;return typeof o=="string"?I.newValue({integerValue:Me.fromBase64String(o).toUint8Array().length}):I.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=function(u){let c=0;for(let h=0;h<u.length;h++){const f=u.codePointAt(h);if(f===void 0)return;if(f>=55296&&f<=57343){if(!(f<=56319))return;{const p=u.codePointAt(h+1);if(p===void 0||!(p>=56320&&p<=57343))return;c+=4,h++}}else if(f<=127)c+=1;else if(f<=2047)c+=2;else if(f<=65535)c+=3;else{if(!(f<=1114111))return;c+=4,h++}}return c}((i=r.value)==null?void 0:i.stringValue);return o===void 0?I.dr():I.newValue({integerValue:o})}case"NULL":return I.pr();default:return I.dr()}}}class hs{constructor(e){this.expr=e}evaluate(e,t){var o,B;$(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return I.dr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return I.dr()}return r?I.pr():this.Fr((o=s.value)==null?void 0:o.stringValue,(B=i.value)==null?void 0:B.stringValue)}}class Gw extends hs{Fr(e,t){try{const r=function(o){let B="";for(let u=0;u<o.length;u++){const c=o.charAt(u);switch(c){case"_":B+=".";break;case"%":B+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":B+="\\"+c;break;default:B+=c}}return"^"+B+"$"}(t),s=ou.compile(r);return I.newValue({booleanValue:s.matches(e)})}catch(r){return St(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),I.dr()}}}class Uw extends hs{Fr(e,t){try{const r=ou.compile(t);return I.newValue({booleanValue:r.test(e)})}catch{return St(`Invalid regex pattern found in regex_contains: ${t}, returning error`),I.dr()}}}class Hw extends hs{Fr(e,t){try{return I.newValue({booleanValue:ou.compile(t).matches(e)})}catch{return St(`Invalid regex pattern found in regex_match: ${t}, returning error`),I.dr()}}}class Jw extends hs{Fr(e,t){return I.newValue({booleanValue:e.includes(t)})}}class qw extends hs{Fr(e,t){return I.newValue({booleanValue:e.startsWith(t)})}}class jw extends hs{Fr(e,t){return I.newValue({booleanValue:e.endsWith(t)})}}class Kw{constructor(e){this.expr=e}evaluate(e,t){var s,i;$(this.expr.params.length===1,29079);const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return I.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return I.pr();default:return I.dr()}}}class zw{constructor(e){this.expr=e}evaluate(e,t){var s,i;$(this.expr.params.length===1,60487);const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return I.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return I.pr();default:return I.dr()}}}class Qw{constructor(e){this.expr=e}evaluate(e,t){var s,i;$(this.expr.params.length===1,28544);const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return I.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return I.pr();default:return I.dr()}}}class Ww{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(o=>te(o).evaluate(e,t));let s="",i=!1;for(const o of r)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return I.dr()}return i?I.pr():I.newValue({stringValue:s})}}class $w{constructor(e){this.expr=e}evaluate(e,t){var o,B,u,c;$(this.expr.params.length===2,4483);const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return I.mr();case"MAP":break;default:return I.dr()}const s=te(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return I.dr();const i=(c=(B=(o=r.value)==null?void 0:o.mapValue)==null?void 0:B.fields)==null?void 0:c[(u=s.value)==null?void 0:u.stringValue];return i===void 0?I.mr():I.newValue(i)}}class Su{constructor(e){this.expr=e}evaluate(e,t){var c,h;$(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return I.dr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return I.dr()}if(r)return I.pr();const o=bB(s.value),B=bB(i.value);if(o===void 0||B===void 0||((c=o.values)==null?void 0:c.length)!==((h=B.values)==null?void 0:h.length))return I.dr();const u=this.Or(o,B);return u===void 0||isNaN(u)?I.dr():I.newValue({doubleValue:u})}}class Yw extends Su{Or(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return;let i=0,o=0,B=0;for(let c=0;c<r.length;c++){if(!kn(r[c])||!kn(s[c]))return;const h=ze(r[c]),f=ze(s[c]);i+=h*f,o+=h*h,B+=f*f}const u=Math.sqrt(o)*Math.sqrt(B);if(u!==0)return 1-Math.max(-1,Math.min(1,i/u))}}class Xw extends Su{Or(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!kn(r[o])||!kn(s[o]))return;i+=ze(r[o])*ze(s[o])}return i}}class Zw extends Su{Or(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!kn(r[o])||!kn(s[o]))return;const B=ze(r[o]),u=ze(s[o]);i+=Math.pow(B-u,2)}return Math.sqrt(i)}}class eT{constructor(e){this.expr=e}evaluate(e,t){var s;$(this.expr.params.length===1,39044);const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const i=bB(r.value);return I.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return I.pr();default:return I.dr()}}}const Ci=BigInt(-62135596800),pi=BigInt(253402300799),zo=BigInt(1e3),On=BigInt(1e6),tT=Ci*zo,nT=pi*zo+BigInt(999),rT=Ci*On,sT=pi*On+BigInt(999999);function Ou(n){return n>=rT&&n<=sT}function xC(n){return n>=Ci&&n<=pi}function gi(n,e){const t=BigInt(n);return!(t<Ci||t>pi)&&!(e<0||e>=1e9)&&(t!==Ci||e===0)&&!(t===pi&&e>999999999)}function VC(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function Nu(n){return BigInt(n.seconds)*On+BigInt(Math.trunc(n.nanoseconds/1e3))}class Lu{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return I.pr();default:return I.dr()}}}class iT extends Lu{toTimestamp(e){if(!Ou(e))return I.dr();let t=Number(e/On),r=Number(e%On*BigInt(1e3));const s=VC(t,r);return t=s.seconds,r=s.nanos,gi(t,r)?I.newValue({timestampValue:{seconds:t,nanos:r}}):I.dr()}}class oT extends Lu{toTimestamp(e){if(!function(o){return o>=tT&&o<=nT}(e))return I.dr();let t=Number(e/zo),r=Number(e%zo*BigInt(1e6));const s=VC(t,r);return t=s.seconds,r=s.nanos,gi(t,r)?I.newValue({timestampValue:{seconds:t,nanos:r}}):I.dr()}}class aT extends Lu{toTimestamp(e){if(!xC(e))return I.dr();const t=Number(e);return I.newValue({timestampValue:{seconds:t,nanos:0}})}}class Fu{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return I.pr();default:return I.dr()}const s=gu(r.value.timestampValue);return gi(s.seconds,s.nanoseconds)?this.Mr(s):I.dr()}}class BT extends Fu{Mr(e){const t=Nu(e);return Ou(t)?I.newValue({integerValue:`${t.toString()}`}):I.dr()}}class uT extends Fu{Mr(e){const t=Nu(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?I.newValue({integerValue:r.toString()}):I.newValue({integerValue:(r-BigInt(1)).toString()})}}class cT extends Fu{Mr(e){const t=BigInt(e.seconds);return xC(t)?I.newValue({integerValue:t.toString()}):I.dr()}}class MC{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return I.dr()}const i=te(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=function(ne){switch(ne){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),o===void 0)return I.dr();break;case"NULL":r=!0;break;default:return I.dr()}const B=te(this.expr.params[2]).evaluate(e,t);switch(B.type){case"INT":break;case"NULL":r=!0;break;default:return I.dr()}if(r)return I.pr();const u=BigInt(B.value.integerValue);let c;try{switch(o){case"microsecond":c=u;break;case"millisecond":c=u*BigInt(1e3);break;case"second":c=u*BigInt(1e6);break;case"minute":c=u*BigInt(6e7);break;case"hour":c=u*BigInt(36e8);break;case"day":c=u*BigInt(864e8);break;default:return I.dr()}if(o!=="microsecond"&&u!==BigInt(0)&&c/u!==BigInt(this.Nr(o)))return I.dr()}catch(j){return St(`Error during timestamp arithmetic: ${j}`),I.dr()}const h=gu(s.value.timestampValue);if(!gi(h.seconds,h.nanoseconds))return I.dr();const f=Nu(h),p=this.Lr(f,c);if(!Ou(p))return I.dr();const y=Number(p/On),R=p%On,F=Number((R<0?R+On:R)*BigInt(1e3)),M=R<0?y-1:y;return gi(M,F)?I.newValue({timestampValue:{seconds:M,nanos:F}}):I.dr()}Nr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class lT extends MC{Lr(e,t){return e+t}}class hT extends MC{Lr(e,t){return e-t}}function mi(n){if((n=FC(n))instanceof Fi)return`fld(${n.fieldName})`;if(n instanceof cs)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Ne?`ref(${t.path})`:t instanceof lt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof L)return`fn(${n.name},[${n.params.map(mi).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.ur.map(mi).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function dT(n){if(n instanceof OC)return`${n._name}(${ho(n.fields)})`;if(n instanceof NC){let e=`${n._name}(${ho(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${ho(n.groups)})`),e}if(n instanceof LC)return`${n._name}(${ho(n.groups)})`;if(n instanceof da)return`${n._name}(${n.Er})`;if(n instanceof fa)return`${n._name}(${n.collectionId})`;if(n instanceof wu)return`${n._name}()`;if(n instanceof Tu)return`${n._name}(${n.hr.sort()})`;if(n instanceof Au)return`${n._name}(${mi(n.condition)})`;if(n instanceof fi)return`${n._name}(${n.limit})`;if(n instanceof Ru)return`${n._name}(${function(t){return t.map(r=>`${mi(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function ho(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${mi(t)}`).join(",")}`}function nn(n){return n.stages.map(e=>dT(e)).join("|")}function GC(n,e){return nn(n)===nn(e)}function He(n){return n instanceof ut}function qh(n){return He(n)?nn(n):Qs(n)}function UC(n){return He(n)?nn(n):function(t){return`${$f(Jt(t))}|lt:${t.limitType}`}(n)}function ga(n,e){return n instanceof ut&&e instanceof ut?GC(n,e):!(n instanceof ut&&!(e instanceof ut)||!(n instanceof ut)&&e instanceof ut)&&vy(n,e)}function HC(n){return Zn(n)?nn(n):$f(n)}function JC(n,e){return n instanceof ut&&e instanceof ut?GC(n,e):!(n instanceof ut&&!(e instanceof ut)||!(n instanceof ut)&&e instanceof ut)&&Yf(n,e)}/**
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
 */class fT{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&By(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ks(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ks(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=rC();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let B=this.applyToLocalView(o,i.mutatedFields);B=t.has(s.key)?null:B;const u=Hf(o,B);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Be())}isEqual(e){return this.batchId===e.batchId&&$r(this.mutations,e.mutations,(t,r)=>Dh(t,r))&&$r(this.baseMutations,e.baseMutations,(t,r)=>Dh(t,r))}}class ku{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){$(e.mutations.length===r.length,58842,{Br:e.mutations.length,Ur:r.length});let s=function(){return Ny}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ku(e,t,r,s)}}/**
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
 */const qC="";function CT(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=jh(e)),e=pT(n.get(t),e);return jh(e)}function pT(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case qC:t+="";break;default:t+=i}}return t}function jh(n){return n+qC+""}/**
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
 */class gT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class en{constructor(e,t,r,s,i=se.min(),o=se.min(),B=Me.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=B,this.expectedCount=u}withSequenceNumber(e){return new en(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new en(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new en(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new en(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class mT{constructor(e){this.qr=e}}function ET(n){const e=$y({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?OB(e,e.limit,"L"):e}/**
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
 */class _T{constructor(){this.Yi=new DT}addToCollectionParentIndex(e,t){return this.Yi.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Yi.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(xn.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(xn.min())}updateCollectionGroup(e,t,r){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class DT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ve(pe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ve(pe.comparator)).toArray()}}/**
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
 */class Gn{constructor(e){this.gs=e}next(){return this.gs+=2,this.gs}static ys(){return new Gn(0)}static ws(){return new Gn(-1)}}// Copyright 2024 Google LLC* @license
function jC(n,e){var r;let t=e;for(const s of n.stages)t=IT({serializer:n.serializer,serverTimestampBehavior:(r=n.listenOptions)==null?void 0:r.serverTimestampBehavior},s,t);return t}function ma(n,e){return jC(n,[e]).length>0}function yT(n,e){return He(n)?ma(n,e):ua(n,e)}function IT(n,e,t){if(e instanceof da)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&`/${B.key.getCollectionPath().canonicalString()}`===i.Er)}(0,e,t);if(e instanceof Au)return function(s,i,o){return o.filter(B=>{const u=$s(te(i.condition).evaluate(s,B));return u!==void 0&&Rt(u,ht)})}(n,e,t);if(e instanceof fa)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&B.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof wu)return function(s,i,o){return o.filter(B=>B.isFoundDocument())}(0,0,t);if(e instanceof Tu)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&i.Tr.has(B.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof fi)return function(s,i,o){return o.slice(0,i.limit)}(0,e,t);if(e instanceof Ru)return function(s,i,o){const B=i.orderings.map(u=>({Os:te(u.expr),direction:u.direction}));return[...o].sort((u,c)=>{for(const{Os:h,direction:f}of B){const p=$s(h.evaluate(s,u)),y=$s(h.evaluate(s,c)),R=dt(p??Zr,y??Zr);if(R!==0)return f==="ascending"?R:-R}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function VB(n){const e=function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof Ru)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,r)=>{for(const s of e){const i=$s(te(s.expr).evaluate({serializer:n.serializer},t)),o=$s(te(s.expr).evaluate({serializer:n.serializer},r)),B=dt(i||Zr,o||Zr);if(B!==0)return s.direction==="ascending"?B:-B}return 0}}function aB(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof fi)return{limit:t.limit}}}/**
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
 */class wT{constructor(){this.changes=new wr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?x.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class TT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class AT{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Ks(r.mutation,s,bt.empty(),Ae.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Be()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Be()){const s=Tn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Vr();return i.forEach((B,u)=>{o=o.insert(B,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Tn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Be()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,B)=>{t.set(o,B)})})}computeViews(e,t,r,s){let i=ct();const o=Ws(),B=function(){return Ws()}();return t.forEach((u,c)=>{const h=r.get(c.key);s.has(c.key)&&(h===void 0||h.mutation instanceof Ir)?i=i.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ks(h.mutation,c,h.mutation.getFieldMask(),Ae.now())):o.set(c.key,bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,h)=>o.set(c,h)),t.forEach((c,h)=>B.set(c,new TT(h,o.get(c)??null))),B))}recalculateAndSaveOverlays(e,t){const r=Ws();let s=new ve((o,B)=>o-B),i=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const B of o)B.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let h=r.get(u)||bt.empty();h=B.applyToLocalView(c,h),r.set(u,h);const f=(s.get(B.batchId)||Be()).add(u);s=s.insert(B.batchId,f)})}).next(()=>{const o=[],B=s.getReverseIterator();for(;B.hasNext();){const u=B.getNext(),c=u.key,h=u.value,f=rC();h.forEach(p=>{if(!i.has(p)){const y=Hf(t.get(p),r.get(p));y!==null&&f.set(p,y),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return He(t)?this.getDocumentsMatchingPipeline(e,t,r,s):Ty(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Zf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):x.resolve(Tn());let B=li,u=i;return o.next(c=>x.forEach(c,(h,f)=>(B<f.largestBatchId&&(B=f.largestBatchId),i.get(h)?x.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,Be())).next(h=>({batchId:B,changes:nC(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next(r=>{let s=Vr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Vr();return this.indexManager.getCollectionParents(e,i).next(B=>x.forEach(B,u=>{const c=function(f,p){return new as(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>this.retrieveMatchingLocalDocuments(i,o,B=>ua(t,B)))}getDocumentsMatchingPipeline(e,t,r,s){if(Sn(t)==="collection_group"){const i=bu(t);let o=Vr();return this.indexManager.getCollectionParents(e,i).next(B=>x.forEach(B,u=>{const c=function(f,p){const y=f.stages.map(R=>R instanceof fa?new da(p.canonicalString(),{}):R);return new ut(f.serializer,y)}(t,u.child(i));return this.getDocumentsMatchingPipeline(e,c,r,s).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next(o=>{switch(i=o,Sn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let B=Be();for(const u of xB(t))B=B.add(X.fromPath(u));return this.remoteDocumentCache.getEntries(e,B);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new K("invalid-argument",`Invalid pipeline source to execute offline: ${nn(t)}`)}}).next(o=>this.retrieveMatchingLocalDocuments(i,o,B=>ma(t,B)))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach((i,o)=>{const B=o.getKey();t.get(B)===null&&(t=t.insert(B,Ye.newInvalidDocument(B)))});let s=Vr();return t.forEach((i,o)=>{const B=e.get(i);B!==void 0&&Ks(B.mutation,o,bt.empty(),Ae.now()),r(o)&&(s=s.insert(i,o))}),s}getOverlaysForPipeline(e,t,r){switch(Sn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,pe.fromString(Ca(t)),r);case"collection_group":throw new K("invalid-argument",`Unexpected collection group pipeline: ${nn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,xB(t).map(s=>X.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new K("invalid-argument",`Failed to get overlays for pipeline: ${nn(t)}`)}}}/**
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
 */class RT{constructor(e){this.serializer=e,this.Ks=new Map,this.Qs=new Map}getBundleMetadata(e,t){return x.resolve(this.Ks.get(t))}saveBundleMetadata(e,t){return this.Ks.set(t.id,function(s){return{id:s.id,version:s.version,createTime:qt(s.createTime)}}(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Qs.get(t))}saveNamedQuery(e,t){return this.Qs.set(t.name,function(s){return{name:s.name,query:ET(s.bundledQuery),readTime:qt(s.readTime)}}(t)),x.resolve()}}/**
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
 */class vT{constructor(){this.overlays=new ve(X.comparator),this.Ws=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Tn();return x.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}getAllOverlays(e,t){const r=Tn();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&r.set(s,i)}),x.resolve(r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Yr(e,t,i)}),x.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ws.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ws.delete(r)),x.resolve()}getOverlaysForCollection(e,t,r){const s=Tn(),i=t.length+1,o=new X(t.child("")),B=this.overlays.getIteratorFrom(o);for(;B.hasNext();){const u=B.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return x.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ve((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let h=i.get(c.largestBatchId);h===null&&(h=Tn(),i=i.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const B=Tn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>B.set(c,h)),!(B.size()>=s)););return x.resolve(B)}Yr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ws.get(s.largestBatchId).delete(r.key);this.Ws.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new gT(t,r));let i=this.Ws.get(t);i===void 0&&(i=Be(),this.Ws.set(t,i)),this.Ws.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class bT{constructor(){this.sessionToken=Me.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
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
 */class xu{constructor(){this.Gs=new Ve(qe.zs),this.js=new Ve(qe.Hs)}isEmpty(){return this.Gs.isEmpty()}addReference(e,t){const r=new qe(e,t);this.Gs=this.Gs.add(r),this.js=this.js.add(r)}Js(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ys(new qe(e,t))}Zs(e,t){e.forEach(r=>this.removeReference(r,t))}Xs(e){const t=new X(new pe([])),r=new qe(t,e),s=new qe(t,e+1),i=[];return this.js.forEachInRange([r,s],o=>{this.Ys(o),i.push(o.key)}),i}e_(){this.Gs.forEach(e=>this.Ys(e))}Ys(e){this.Gs=this.Gs.delete(e),this.js=this.js.delete(e)}t_(e){const t=new X(new pe([])),r=new qe(t,e),s=new qe(t,e+1);let i=Be();return this.js.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new qe(e,0),r=this.Gs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,t){this.key=e,this.n_=t}static zs(e,t){return X.comparator(e.key,t.key)||ue(e.n_,t.n_)}static Hs(e,t){return ue(e.n_,t.n_)||X.comparator(e.key,t.key)}}/**
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
 */class PT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Wr=1,this.r_=new Ve(qe.zs)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Wr;this.Wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fT(i,t,r,s);this.mutationQueue.push(o);for(const B of s)this.r_=this.r_.add(new qe(B.key,i)),this.indexManager.addToCollectionParentIndex(e,B.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,t){return x.resolve(this.i_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.s_(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?uu:this.Wr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new qe(t,0),s=new qe(t,Number.POSITIVE_INFINITY),i=[];return this.r_.forEachInRange([r,s],o=>{const B=this.i_(o.n_);i.push(B)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ve(ue);return t.forEach(s=>{const i=new qe(s,0),o=new qe(s,Number.POSITIVE_INFINITY);this.r_.forEachInRange([i,o],B=>{r=r.add(B.n_)})}),x.resolve(this.__(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const o=new qe(new X(i),0);let B=new Ve(ue);return this.r_.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(B=B.add(u.n_)),!0)},o),x.resolve(this.__(B))}__(e){const t=[];return e.forEach(r=>{const s=this.i_(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){$(this.o_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.r_;return x.forEach(t.mutations,s=>{const i=new qe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.r_=r})}jr(e){}containsKey(e,t){const r=new qe(t,0),s=this.r_.firstAfterOrEqual(r);return x.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}o_(e,t){return this.s_(e)}s_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}i_(e){const t=this.s_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class ST{constructor(e){this.a_=e,this.docs=function(){return new ve(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.a_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return x.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(t))}getEntries(e,t){let r=ct();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ye.newInvalidDocument(s))}),x.resolve(r)}getAllEntries(e){let t=ct();return this.docs.forEach((r,s)=>{t=t.insert(r,s.document)}),x.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,o;He(t)?(i=pe.fromString(Ca(t)),o=h=>ma(t,h)):(i=t.path,o=h=>ua(t,h));let B=ct();const u=new X(i.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||yy(Dy(f),r)<=0||(s.has(f.key)||o(f))&&(B=B.insert(f.key,f.mutableCopy()))}return x.resolve(B)}getAllFromCollectionGroup(e,t,r,s){ee(9500)}u_(e,t){return x.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new OT(this)}getSize(e){return x.resolve(this.size)}}class OT extends wT{constructor(e){super(),this.qs=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.qs.addEntry(e,s)):this.qs.removeEntry(r)}),x.waitFor(t)}getFromCache(e,t){return this.qs.getEntry(e,t)}getAllFromCache(e,t){return this.qs.getEntries(e,t)}}/**
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
 */class NT{constructor(e){this.persistence=e,this.c_=new wr(t=>HC(t),JC),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.l_=0,this.E_=new xu,this.targetCount=0,this.h_=Gn.ys()}forEachTarget(e,t){return this.c_.forEach((r,s)=>t(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.l_)}allocateTargetId(e){return this.highestTargetId=this.h_.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.l_&&(this.l_=t),x.resolve()}vs(e){this.c_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.h_=new Gn(t),this.highestTargetId=t),e.sequenceNumber>this.l_&&(this.l_=e.sequenceNumber)}addTargetData(e,t){return this.vs(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.vs(t),x.resolve()}removeTargetData(e,t){return this.c_.delete(t.target),this.E_.Xs(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.c_.forEach((o,B)=>{B.sequenceNumber<=t&&r.get(B.targetId)===null&&(this.c_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,B.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const r=this.c_.get(t)||null;return x.resolve(r)}addMatchingKeys(e,t,r){return this.E_.Js(t,r),x.resolve()}removeMatchingKeys(e,t,r){this.E_.Zs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.E_.Xs(t),x.resolve()}getMatchingKeysForTargetId(e,t){const r=this.E_.t_(t);return x.resolve(r)}containsKey(e,t){return x.resolve(this.E_.containsKey(t))}}/**
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
 */class KC{constructor(e,t){this.T_={},this.overlays={},this.P_=new la(0),this.R_=!1,this.R_=!0,this.I_=new bT,this.referenceDelegate=e(this),this.A_=new NT(this),this.indexManager=new _T,this.remoteDocumentCache=function(s){return new ST(s)}(r=>this.referenceDelegate.V_(r)),this.serializer=new mT(t),this.d_=new RT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.T_[e.toKey()];return r||(r=new PT(t,this.referenceDelegate),this.T_[e.toKey()]=r),r}getGlobalsCache(){return this.I_}getTargetCache(){return this.A_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.d_}runTransaction(e,t,r){z("MemoryPersistence","Starting transaction:",e);const s=new LT(this.P_.next());return this.referenceDelegate.f_(),r(s).next(i=>this.referenceDelegate.m_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}p_(e,t){return x.or(Object.values(this.T_).map(r=>()=>r.containsKey(e,t)))}}class LT extends II{constructor(e){super(),this.currentSequenceNumber=e}}class Vu{constructor(e){this.persistence=e,this.g_=new xu,this.y_=null}static w_(e){return new Vu(e)}get b_(){if(this.y_)return this.y_;throw ee(60996)}addReference(e,t,r){return this.g_.addReference(r,t),this.b_.delete(r.toString()),x.resolve()}removeReference(e,t,r){return this.g_.removeReference(r,t),this.b_.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.b_.add(t.toString()),x.resolve()}removeTarget(e,t){this.g_.Xs(t.targetId).forEach(s=>this.b_.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.b_.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}f_(){this.y_=new Set}m_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.b_,r=>{const s=X.fromPath(r);return this.S_(e,s).next(i=>{i||t.removeEntry(s,se.min())})}).next(()=>(this.y_=null,t.apply(e)))}updateLimboDocument(e,t){return this.S_(e,t).next(r=>{r?this.b_.delete(t.toString()):this.b_.add(t.toString())})}V_(e){return 0}S_(e,t){return x.or([()=>x.resolve(this.g_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.p_(e,t)])}}class Qo{constructor(e,t){this.persistence=e,this.v_=new wr(r=>CT(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=bI(this,t)}static w_(e,t){return new Qo(e,t)}f_(){}m_(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}rr(e){const t=this.xs(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}xs(e){let t=0;return this.ir(e,r=>{t++}).next(()=>t)}ir(e,t){return x.forEach(this.v_,(r,s)=>this.Fs(e,r,s).next(i=>i?x.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.u_(e,o=>this.Fs(e,o,t).next(B=>{B||(r++,i.removeEntry(o,se.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.v_.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.v_.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,t,r){return this.v_.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.v_.set(t,e.currentSequenceNumber),x.resolve()}V_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=To(e.data.value)),t}Fs(e,t,r){return x.or([()=>this.persistence.p_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.v_.get(t);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Mu{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ao=r,this.Vo=s}static fo(e,t){let r=Be(),s=Be();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Mu(e,t.fromCache,r,s)}}/**
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
 */function FT(n,e){return X.comparator(n.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class kT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xT{constructor(){this.mo=!1,this.po=!1,this.yo=100,this.wo=function(){return xg()?8:wI(Xe())>0?6:4}()}initialize(e,t){this.bo=e,this.indexManager=t,this.mo=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.So(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.vo(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new kT;return this.Do(e,t,o).next(B=>{if(i.result=B,this.po)return this.xo(e,t,o,B.size)})}).next(()=>i.result)}xo(e,t,r,s){return He(t)?x.resolve():r.documentReadCount<this.yo?(kr()<=le.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Qs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.yo,"documents"),x.resolve()):(kr()<=le.DEBUG&&z("QueryEngine","Query:",Qs(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.wo*s?(kr()<=le.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Qs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jt(t))):x.resolve())}So(e,t){if(He(t))return x.resolve(null);let r=t;if(Rh(r))return x.resolve(null);let s=Jt(r);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=OB(r,null,"F"),s=Jt(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const B=Be(...o);return this.bo.getDocuments(e,B).next(u=>this.indexManager.getMinOffset(e,s).next(c=>{const h=this.Co(r,u);return this.Fo(r,h,B,c.readTime)?this.So(e,OB(r,null,"F")):this.Oo(e,h,r,c)}))})))}vo(e,t,r,s){return(He(t)?function(o){for(const B of o.stages){if(B instanceof fi||B instanceof Jh)return!1;if(B instanceof Au){if(B.condition instanceof bC&&B.condition._expr.name==="exists"&&B.condition._expr.params[0]instanceof Fi&&B.condition._expr.params[0].fieldName===Yr)continue;return!1}}return!0}(t):Rh(t))||s.isEqual(se.min())?x.resolve(null):this.bo.getDocuments(e,r).next(i=>{const o=this.Co(t,i);return this.Fo(t,o,r,s)?x.resolve(null):(kr()<=le.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qh(t)),this.Oo(e,o,t,_y(s,li)).next(B=>B))})}Co(e,t){let r,s;return He(e)?(r=new Ve(FT),s=i=>ma(e,i)):(r=new Ve(Cu(e)),s=i=>ua(e,i)),t.forEach((i,o)=>{s(o)&&(r=r.add(o))}),r}Fo(e,t,r,s){if(He(e))return function(B){return B.stages.some(u=>u instanceof fi||u instanceof Jh)}(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Do(e,t,r){return kr()<=le.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",qh(t)),this.bo.getDocumentsMatchingQuery(e,t,xn.min(),r)}Oo(e,t,r,s){return this.bo.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Gu="LocalStore",VT=3e8;class MT{constructor(e,t,r,s){this.persistence=e,this.Mo=t,this.serializer=s,this.No=new ve(ue),this.Lo=new wr(i=>HC(i),JC),this.Bo=new Map,this.Uo=e.getRemoteDocumentCache(),this.A_=e.getTargetCache(),this.d_=e.getBundleCache(),this.ko(r)}ko(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AT(this.Uo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Uo.setIndexManager(this.indexManager),this.Mo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.No))}}function GT(n,e,t,r){return new MT(n,e,t,r)}async function zC(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ko(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],B=[];let u=Be();for(const c of s){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of i){B.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return t.localDocuments.getDocuments(r,u).next(c=>({qo:c,removedBatchIds:o,addedBatchIds:B}))})})}function UT(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Uo.newChangeBuffer({trackRemovals:!0});return function(B,u,c,h){const f=c.batch,p=f.keys();let y=x.resolve();return p.forEach(R=>{y=y.next(()=>h.getEntry(u,R)).next(F=>{const M=c.docVersions.get(R);$(M!==null,48541),F.version.compareTo(M)<0&&(f.applyToRemoteDocument(F,c),F.isValidDocument()&&(F.setReadTime(c.commitVersion),h.addEntry(F)))})}),y.next(()=>B.mutationQueue.removeMutationBatch(u,f))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(B){let u=Be();for(let c=0;c<B.mutationResults.length;++c)B.mutationResults[c].transformResults.length>0&&(u=u.add(B.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function QC(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.A_.getLastRemoteSnapshotVersion(t))}function HT(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.No;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Uo.newChangeBuffer({trackRemovals:!0});s=t.No;const B=[];e.targetChanges.forEach((h,f)=>{const p=s.get(f);if(!p)return;B.push(t.A_.removeMatchingKeys(i,h.removedDocuments,f).next(()=>t.A_.addMatchingKeys(i,h.addedDocuments,f)));let y=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(Me.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),s=s.insert(f,y),function(F,M,j){return F.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=VT?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(p,y,h)&&B.push(t.A_.updateTargetData(i,y))});let u=ct(),c=Be();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&B.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),B.push(JT(i,o,e.documentUpdates).next(h=>{u=h.$o,c=h.Ko})),!r.isEqual(se.min())){const h=t.A_.getLastRemoteSnapshotVersion(i).next(f=>t.A_.setTargetsMetadata(i,i.currentSequenceNumber,r));B.push(h)}return x.waitFor(B).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(t.No=s,i))}function JT(n,e,t){let r=Be(),s=Be();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=ct();return t.forEach((B,u)=>{const c=i.get(B);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(B)),u.isNoDocument()&&u.version.isEqual(se.min())?(e.removeEntry(B,u.readTime),o=o.insert(B,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(B,u)):z(Gu,"Ignoring outdated watch update for ",B,". Current version:",c.version," Watch version:",u.version)}),{$o:o,Ko:s}})}function qT(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=uu),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jT(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.A_.getTargetData(r,e).next(i=>i?(s=i,x.resolve(s)):t.A_.allocateTargetId(r).next(o=>(s=new en(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.A_.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.No.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.No=t.No.insert(r.targetId,r),t.Lo.set(e,r.targetId)),r})}async function MB(n,e,t){const r=ie(n),s=r.No.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!us(o))throw o;z(Gu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.No=r.No.remove(e),r.Lo.delete(s.target)}function Kh(n,e,t){const r=ie(n);let s=se.min(),i=Be();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=ie(u),p=f.Lo.get(h);return p!==void 0?x.resolve(f.No.get(p)):f.A_.getTargetData(c,h)}(r,o,He(e)?e:Jt(e)).next(B=>{if(B)return s=B.lastLimboFreeSnapshotVersion,r.A_.getMatchingKeysForTargetId(o,B.targetId).next(u=>{i=u})}).next(()=>r.Mo.getDocumentsMatchingQuery(o,e,t?s:se.min(),t?i:Be())).next(B=>(KT(r,B),{documents:B,Qo:i})))}function KT(n,e){e.forEach((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Bo.get(s)||se.min();r.readTime.compareTo(i)>0&&n.Bo.set(s,r.readTime)})}/**
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
 */class zT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Jo=0,this.Yo=null,this.Zo=!0}Xo(){this.Jo===0&&(this.ea("Unknown"),this.Yo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Yo=null,this.ta("Backend didn't respond within 10 seconds."),this.ea("Offline"),Promise.resolve())))}na(e){this.state==="Online"?this.ea("Unknown"):(this.Jo++,this.Jo>=1&&(this.ra(),this.ta(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ea("Offline")))}set(e){this.ra(),this.Jo=0,e==="Online"&&(this.Zo=!1),this.ea(e)}ea(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ta(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Zo?(an(t),this.Zo=!1):z("OnlineStateTracker",t)}ra(){this.Yo!==null&&(this.Yo.cancel(),this.Yo=null)}}/**
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
 */const zt="RemoteStore";class QT{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ia=[],this.sa=new Map,this._a=new Map,this.oa=new Map,this.aa=new Gn(1e3),this.ua=new Gn(1001),this.ca=new Set,this.la=[],this.Ea=i,this.Ea.Ke(o=>{r.enqueueAndForget(async()=>{Rr(this)&&(z(zt,"Restarting streams for network reachability change."),await async function(u){const c=ie(u);c.ca.add(4),await xi(c),c.ha.set("Unknown"),c.ca.delete(4),await Ea(c)}(this))})}),this.ha=new zT(r,s)}}async function Ea(n){if(Rr(n))for(const e of n.la)await e(!0)}async function xi(n){for(const e of n.la)await e(!1)}function GB(n,e){return n._a.get(e)||void 0}function WC(n,e){const t=ie(n),r=GB(t,e.targetId);if(r!==void 0&&t.sa.has(r))return;const s=function(B,u){const c=GB(B,u);c!==void 0&&B.oa.delete(c);const h=function(p,y){return y%2!=0?p.ua.next():p.aa.next()}(B,u);return B._a.set(u,h),B.oa.set(h,u),h}(t,e.targetId);z(zt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new en(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.sa.set(s,i),qu(t)?Ju(t):ds(t).Jt()&&Hu(t,i)}function Uu(n,e){const t=ie(n),r=ds(t),s=GB(t,e);z(zt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.sa.delete(s),t._a.delete(e),t.oa.delete(s),r.Jt()&&$C(t,s),t.sa.size===0&&(r.Jt()?r.Xt():Rr(t)&&t.ha.set("Unknown"))}function Hu(n,e){if(n.Ta.H(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.oa.get(e.targetId);if(t===void 0)return void z(zt,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}ds(n).Tn(e)}function $C(n,e){n.Ta.H(e),ds(n).Pn(e)}function Ju(n){n.Ta=new My({getRemoteKeysForTarget:e=>{const t=n.oa.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):Be()},ge:e=>n.sa.get(e)||null,Ae:()=>n.datastore.serializer.databaseId}),ds(n).start(),n.ha.Xo()}function qu(n){return Rr(n)&&!ds(n).Ht()&&n.sa.size>0}function Rr(n){return ie(n).ca.size===0}function YC(n){n.Ta=void 0}async function WT(n){n.ha.set("Online")}async function $T(n){n.sa.forEach((e,t)=>{Hu(n,e)})}async function YT(n,e){YC(n),qu(n)?(n.ha.na(e),Ju(n)):n.ha.set("Unknown")}async function XT(n,e,t){if(n.ha.set("Online"),e instanceof iC&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const B of i.targetIds){if(s.sa.has(B)){const u=s.oa.get(B);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s._a.delete(u),s.oa.delete(B)),s.sa.delete(B)}s.Ta.removeTarget(B)}}(n,e)}catch(r){z(zt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Wo(n,r)}else if(e instanceof Ro?n.Ta.se(e):e instanceof sC?n.Ta.Ee(e):n.Ta.ae(e),!t.isEqual(se.min()))try{const r=await QC(n.localStore);t.compareTo(r)>=0&&await function(i,o){const B=i.Ta.de(o);B.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.sa.get(h);f&&i.sa.set(h,f.withResumeToken(c.resumeToken,o))}}),B.targetMismatches.forEach((c,h)=>{const f=i.sa.get(c);if(!f)return;i.sa.set(c,f.withResumeToken(Me.EMPTY_BYTE_STRING,f.snapshotVersion)),$C(i,c);const p=new en(f.target,c,h,f.sequenceNumber);Hu(i,p)});const u=function(h,f){const p=new Map;f.targetChanges.forEach((R,F)=>{const M=h.oa.get(F);M!==void 0&&p.set(M,R)});let y=new ve(ue);return f.targetMismatches.forEach((R,F)=>{const M=h.oa.get(R);M!==void 0&&(y=y.insert(M,F))}),new Oi(f.snapshotVersion,p,y,f.documentUpdates,f.augmentedDocumentUpdates,f.resolvedLimboDocuments)}(i,B);return i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){z(zt,"Failed to raise snapshot:",r),await Wo(n,r)}}async function Wo(n,e,t){if(!us(e))throw e;n.ca.add(1),await xi(n),n.ha.set("Offline"),t||(t=()=>QC(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z(zt,"Retrying IndexedDB access"),await t(),n.ca.delete(1),await Ea(n)})}function XC(n,e){return e().catch(t=>Wo(n,t,e))}async function _a(n){const e=ie(n),t=Un(e);let r=e.ia.length>0?e.ia[e.ia.length-1].batchId:uu;for(;ZT(e);)try{const s=await qT(e.localStore,r);if(s===null){e.ia.length===0&&t.Xt();break}r=s.batchId,eA(e,s)}catch(s){await Wo(e,s)}ZC(e)&&ep(e)}function ZT(n){return Rr(n)&&n.ia.length<10}function eA(n,e){n.ia.push(e);const t=Un(n);t.Jt()&&t.Rn&&t.In(e.mutations)}function ZC(n){return Rr(n)&&!Un(n).Ht()&&n.ia.length>0}function ep(n){Un(n).start()}async function tA(n){Un(n).dn()}async function nA(n){const e=Un(n);for(const t of n.ia)e.In(t.mutations)}async function rA(n,e,t){const r=n.ia.shift(),s=ku.from(r,e,t);await XC(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await _a(n)}async function sA(n,e){e&&Un(n).Rn&&await async function(r,s){if(function(o){return Sy(o)&&o!==k.ABORTED}(s.code)){const i=r.ia.shift();Un(r).Zt(),await XC(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await _a(r)}}(n,e),ZC(n)&&ep(n)}async function zh(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),z(zt,"RemoteStore received new credentials");const r=Rr(t);t.ca.add(3),await xi(t),r&&t.ha.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.ca.delete(3),await Ea(t)}async function iA(n,e){const t=ie(n);e?(t.ca.delete(2),await Ea(t)):e||(t.ca.add(2),await xi(t),t.ha.set("Unknown"))}function ds(n){return n.Pa||(n.Pa=function(t,r,s){const i=ie(t);return i.mn(),new CI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ut:WT.bind(null,n),lt:$T.bind(null,n),ht:YT.bind(null,n),hn:XT.bind(null,n)}),n.la.push(async e=>{e?(n.Pa.Zt(),qu(n)?Ju(n):n.ha.set("Unknown")):(await n.Pa.stop(),YC(n))})),n.Pa}function Un(n){return n.Ra||(n.Ra=function(t,r,s){const i=ie(t);return i.mn(),new pI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ut:()=>Promise.resolve(),lt:tA.bind(null,n),ht:sA.bind(null,n),An:nA.bind(null,n),Vn:rA.bind(null,n)}),n.la.push(async e=>{e?(n.Ra.Zt(),await _a(n)):(await n.Ra.stop(),n.ia.length>0&&(z(zt,`Stopping write stream with ${n.ia.length} pending writes`),n.ia=[]))})),n.Ra}/**
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
 */class oA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ia(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ia(this.observer.error,e):an("Uncaught Error in snapshot listener:",e.toString()))}Aa(){this.muted=!0}Ia(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class ju{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,B=new ju(e,t,o,s,i);return B.start(r),B}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ku(n,e){if(an("AsyncQueue",`${e}: ${n}`),us(n))return new K(k.UNAVAILABLE,`${e}: ${n}`);throw n}class Qh{constructor(){this.activeTargetIds=ky()}La(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ba(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Na(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aA{constructor(){this.du=new Qh,this.fu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.du.La(e),this.fu[e]||"not-current"}updateQueryState(e,t,r){this.fu[e]=t}removeLocalQueryTarget(e){this.du.Ba(e)}isLocalQueryTarget(e){return this.du.activeTargetIds.has(e)}clearQueryState(e){delete this.fu[e]}getAllActiveQueryTargets(){return this.du.activeTargetIds}isActiveQueryTarget(e){return this.du.activeTargetIds.has(e)}start(){return this.du=new Qh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function BB(){return typeof document<"u"?document:null}/**
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
 */class ar{static emptySet(e){return new ar(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=Vr(),this.sortedSet=new ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ar)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ar;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Wh{constructor(){this.mu=new ve(X.comparator)}track(e){const t=e.doc.key,r=this.mu.get(t);r?e.type!==0&&r.type===3?this.mu=this.mu.insert(t,e):e.type===3&&r.type!==1?this.mu=this.mu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.mu=this.mu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.mu=this.mu.remove(t):e.type===1&&r.type===2?this.mu=this.mu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):ee(63341,{ye:e,pu:r}):this.mu=this.mu.insert(t,e)}gu(){const e=[];return this.mu.inorderTraversal((t,r)=>{e.push(r)}),e}}class rs{constructor(e,t,r,s,i,o,B,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=B,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(B=>{o.push({type:0,doc:B})}),new rs(e,t,ar.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ga(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class BA{constructor(){this.yu=void 0,this.wu=[]}bu(){return this.wu.some(e=>e.Su())}}class uA{constructor(){this.queries=$h(),this.onlineState="Unknown",this.vu=new Set}terminate(){(function(t,r){const s=ie(t),i=s.queries;s.queries=$h(),i.forEach((o,B)=>{for(const u of B.wu)u.onError(r)})})(this,new K(k.ABORTED,"Firestore shutting down"))}}function $h(){return new wr(n=>UC(n),ga)}async function cA(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.bu()&&e.Su()&&(r=2):(i=new BA,r=e.Su()?0:1);try{switch(r){case 0:i.yu=await t.onListen(s,!0);break;case 1:i.yu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const B=Ku(o,`Initialization of query '${He(e.query)?nn(e.query):Qs(e.query)}' failed`);return void e.onError(B)}t.queries.set(s,i),i.wu.push(e),e.Du(t.onlineState),i.yu&&e.xu(i.yu)&&zu(t)}async function lA(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.wu.indexOf(e);o>=0&&(i.wu.splice(o,1),i.wu.length===0?s=e.Su()?0:1:!i.bu()&&e.Su()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function hA(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const B of o.wu)B.xu(s)&&(r=!0);o.yu=s}}r&&zu(t)}function dA(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.wu)i.onError(t);r.queries.delete(e)}function zu(n){n.vu.forEach(e=>{e.next()})}var UB;(function(n){n.Default="default",n.Cache="cache"})(UB||(UB={}));class fA{constructor(e,t,r){this.query=e,this.Cu=t,this.Fu=!1,this.Ou=null,this.onlineState="Unknown",this.options=r||{}}xu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Mu(e)&&(this.Cu.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.Lu(e),t=!0),this.Ou=e,t}onError(e){this.Cu.error(e)}Du(e){this.onlineState=e;let t=!1;return this.Ou&&!this.Fu&&this.Nu(this.Ou,e)&&(this.Lu(this.Ou),t=!0),t}Nu(e,t){if(!e.fromCache||!this.Su())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Mu(e){if(e.docChanges.length>0)return!0;const t=this.Ou&&this.Ou.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Lu(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Cu.next(e)}Su(){return this.options.source!==UB.Cache}}/**
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
 */class tp{constructor(e){this.key=e}}class np{constructor(e){this.key=e}}class CA{constructor(e,t){this.query=e,this.Gu=t,this.zu=null,this.hasCachedResults=!1,this.current=!1,this.ju=Be(),this.mutatedKeys=Be(),this.Hu=He(e)?VB(e):Cu(e),this.Ju=new ar(this.Hu)}get Yu(){return this.Gu}Zu(e,t){const r=t?t.Xu:new Wh,s=t?t.Ju:this.Ju;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,B=!1;const[u,c]=this.ec(this.query,s);e.inorderTraversal((f,p)=>{const y=s.get(f),R=yT(this.query,p)?p:null,F=!!y&&this.mutatedKeys.has(y.key),M=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let j=!1;y&&R?y.data.isEqual(R.data)?F!==M&&(r.track({type:3,doc:R}),j=!0):this.tc(y,R)||(r.track({type:2,doc:R}),j=!0,(u&&this.Hu(R,u)>0||c&&this.Hu(R,c)<0)&&(B=!0)):!y&&R?(r.track({type:0,doc:R}),j=!0):y&&!R&&(r.track({type:1,doc:y}),j=!0,(u||c)&&(B=!0)),j&&(R?(o=o.add(R),i=M?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))});const h=this.nc(this.query);if(h)if(He(this.query)){const f=[];o.forEach(R=>f.push(R));const p=jC(this.query,f);let y=new ar(VB(this.query));for(const R of p)y=y.add(R);o.forEach(R=>{y.has(R.key)||(i=i.delete(R.key),r.track({type:1,doc:R}))}),o=y}else{const f=this.rc(this.query);for(;o.size>h;){const p=f==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}}return{Ju:o,Xu:r,Fo:B,mutatedKeys:i}}nc(e){var t;return He(e)?(t=aB(e))==null?void 0:t.limit:e.limit||void 0}rc(e){if(He(e)){const t=aB(e);return t&&t.limit<0?"L":"F"}return e.limitType}ec(e,t){var r;if(He(e)){const s=(r=aB(e))==null?void 0:r.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.nc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.nc(this.query)?t.first():null]}tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ju;this.Ju=e.Ju,this.mutatedKeys=e.mutatedKeys;const o=e.Xu.gu();o.sort((h,f)=>function(y,R){const F=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{ye:M})}};return F(y)-F(R)}(h.type,f.type)||this.Hu(h.doc,f.doc)),this.sc(r),s=s??!1;const B=t&&!s?this._c():[],u=this.ju.size===0&&this.current&&!s?1:0,c=u!==this.zu;return this.zu=u,o.length!==0||c?{snapshot:new rs(this.query,e.Ju,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),oc:B}:{oc:B}}Du(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ju:this.Ju,Xu:new Wh,mutatedKeys:this.mutatedKeys,Fo:!1},!1)):{oc:[]}}ac(e){return!this.Gu.has(e)&&!!this.Ju.has(e)&&!this.Ju.get(e).hasLocalMutations}sc(e){e&&(e.addedDocuments.forEach(t=>this.Gu=this.Gu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Gu=this.Gu.delete(t)),this.current=e.current)}_c(){if(!this.current)return[];const e=this.ju;this.ju=Be(),this.Ju.forEach(r=>{this.ac(r.key)&&(this.ju=this.ju.add(r.key))});const t=[];return e.forEach(r=>{this.ju.has(r)||t.push(new np(r))}),this.ju.forEach(r=>{e.has(r)||t.push(new tp(r))}),t}uc(e){this.Gu=e.Qo,this.ju=Be();const t=this.Zu(e.documents);return this.applyChanges(t,!0)}cc(){return rs.fromInitialDocuments(this.query,this.Ju,this.mutatedKeys,this.zu===0,this.hasCachedResults)}}const Qu="SyncEngine";class pA{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class gA{constructor(e){this.key=e,this.lc=!1}}class mA{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ec={},this.hc=new wr(B=>UC(B),ga),this.Tc=new Map,this.Pc=new Set,this.Rc=new ve(X.comparator),this.Ic=new Map,this.Ac=new xu,this.Vc={},this.dc=new Map,this.fc=Gn.ws(),this.onlineState="Unknown",this.mc=void 0}get isPrimaryClient(){return this.mc===!0}}async function EA(n,e,t=!0){const r=Bp(n);let s;const i=r.hc.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cc()):s=await rp(r,e,t,!0),s}async function _A(n,e){const t=Bp(n);await rp(t,e,!0,!1)}async function rp(n,e,t,r){const s=await jT(n.localStore,He(e)?e:Jt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let B;return r&&(B=await DA(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&WC(n.remoteStore,s),B}async function DA(n,e,t,r,s){n.gc=(f,p,y)=>async function(F,M,j,ne){let oe=M.view.Zu(j);oe.Fo&&(oe=await Kh(F.localStore,M.query,!1).then(({documents:A})=>M.view.Zu(A,oe)));const ce=ne&&ne.targetChanges.get(M.targetId),ye=ne&&ne.targetMismatches.get(M.targetId)!=null,ge=M.view.applyChanges(oe,F.isPrimaryClient,ce,ye);return Xh(F,M.targetId,ge.oc),ge.snapshot}(n,f,p,y);const i=await Kh(n.localStore,e,!0),o=new CA(e,i.Qo),B=o.Zu(i.documents),u=Ni.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),c=o.applyChanges(B,n.isPrimaryClient,u);Xh(n,t,c.oc);const h=new pA(e,t,o);return n.hc.set(e,h),n.Tc.has(t)?n.Tc.get(t).push(e):n.Tc.set(t,[e]),c.snapshot}async function yA(n,e,t){const r=ie(n),s=r.hc.get(e),i=r.Tc.get(s.targetId);if(i.length>1)return r.Tc.set(s.targetId,i.filter(o=>!ga(o,e))),void r.hc.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await MB(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Uu(r.remoteStore,s.targetId),HB(r,s.targetId)}).catch(Bs)):(HB(r,s.targetId),await MB(r.localStore,s.targetId,!0))}async function IA(n,e){const t=ie(n),r=t.hc.get(e),s=t.Tc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Uu(t.remoteStore,r.targetId))}async function wA(n,e,t){const r=SA(n);try{const s=await function(o,B){const u=ie(o),c=Ae.now(),h=B.reduce((y,R)=>y.add(R.key),Be());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let R=ct(),F=Be();return u.Uo.getEntries(y,h).next(M=>{R=M,R.forEach((j,ne)=>{ne.isValidDocument()||(F=F.add(j))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,R)).next(M=>{f=M;const j=[];for(const ne of B){const oe=uy(ne,f.get(ne.key).overlayedDocument);oe!=null&&j.push(new Ir(ne.key,oe,xf(oe.value.mapValue),Ht.exists(!0)))}return u.mutationQueue.addMutationBatch(y,c,j,B)}).next(M=>{p=M;const j=M.applyToLocalDocumentSet(f,F);return u.documentOverlayCache.saveOverlays(y,M.batchId,j)})}).then(()=>({batchId:p.batchId,changes:nC(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,B,u){let c=o.Vc[o.currentUser.toKey()];c||(c=new ve(ue)),c=c.insert(B,u),o.Vc[o.currentUser.toKey()]=c}(r,s.batchId,t),await Vi(r,s.changes),await _a(r.remoteStore)}catch(s){const i=Ku(s,"Failed to persist write");t.reject(i)}}async function sp(n,e){const t=ie(n);try{const r=await HT(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Ic.get(i);o&&($(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lc=!0:s.modifiedDocuments.size>0?$(o.lc,14607):s.removedDocuments.size>0&&($(o.lc,42227),o.lc=!1))}),await Vi(t,r,e)}catch(r){await Bs(r)}}function Yh(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.hc.forEach((i,o)=>{const B=o.view.Du(e);B.snapshot&&s.push(B.snapshot)}),function(o,B){const u=ie(o);u.onlineState=B;let c=!1;u.queries.forEach((h,f)=>{for(const p of f.wu)p.Du(B)&&(c=!0)}),c&&zu(u)}(r.eventManager,e),s.length&&r.Ec.hn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TA(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ic.get(e),i=s&&s.key;if(i){let o=new ve(X.comparator);o=o.insert(i,Ye.newNoDocument(i,se.min()));const B=Be().add(i),u=new Oi(se.min(),new Map,new ve(ue),o,ct(),B);await sp(r,u),r.Rc=r.Rc.remove(i),r.Ic.delete(e),Wu(r)}else await MB(r.localStore,e,!1).then(()=>HB(r,e,t)).catch(Bs)}async function AA(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await UT(t.localStore,e);op(t,r,null),ip(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Vi(t,s)}catch(s){await Bs(s)}}async function RA(n,e,t){const r=ie(n);try{const s=await function(o,B){const u=ie(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,B).next(f=>($(f!==null,37113),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,B)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);op(r,e,t),ip(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Vi(r,s)}catch(s){await Bs(s)}}function ip(n,e){(n.dc.get(e)||[]).forEach(t=>{t.resolve()}),n.dc.delete(e)}function op(n,e,t){const r=ie(n);let s=r.Vc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vc[r.currentUser.toKey()]=s}}function HB(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tc.get(e))n.hc.delete(r),t&&n.Ec.yc(r,t);n.Tc.delete(e),n.isPrimaryClient&&n.Ac.Xs(e).forEach(r=>{n.Ac.containsKey(r)||ap(n,r)})}function ap(n,e){n.Pc.delete(e.path.canonicalString());const t=n.Rc.get(e);t!==null&&(Uu(n.remoteStore,t),n.Rc=n.Rc.remove(e),n.Ic.delete(t),Wu(n))}function Xh(n,e,t){for(const r of t)r instanceof tp?(n.Ac.addReference(r.key,e),vA(n,r)):r instanceof np?(z(Qu,"Document no longer in limbo: "+r.key),n.Ac.removeReference(r.key,e),n.Ac.containsKey(r.key)||ap(n,r.key)):ee(19791,{wc:r})}function vA(n,e){const t=e.key,r=t.path.canonicalString();n.Rc.get(t)||n.Pc.has(r)||(z(Qu,"New document in limbo: "+t),n.Pc.add(r),Wu(n))}function Wu(n){for(;n.Pc.size>0&&n.Rc.size<n.maxConcurrentLimboResolutions;){const e=n.Pc.values().next().value;n.Pc.delete(e);const t=new X(pe.fromString(e)),r=n.fc.next();n.Ic.set(r,new gA(t)),n.Rc=n.Rc.insert(t,r),WC(n.remoteStore,new en(Jt(fu(t.path)),r,"TargetPurposeLimboResolution",la.yn))}}async function Vi(n,e,t){const r=ie(n),s=[],i=[],o=[];r.hc.isEmpty()||(r.hc.forEach((B,u)=>{o.push(r.gc(u,e,t).then(c=>{var h;if((c||t)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){s.push(c);const f=Mu.fo(u.targetId,c);i.push(f)}}))}),await Promise.all(o),r.Ec.hn(s),await async function(u,c){const h=ie(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>x.forEach(c,p=>x.forEach(p.Ao,y=>h.persistence.referenceDelegate.addReference(f,p.targetId,y)).next(()=>x.forEach(p.Vo,y=>h.persistence.referenceDelegate.removeReference(f,p.targetId,y)))))}catch(f){if(!us(f))throw f;z(Gu,"Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const y=h.No.get(p),R=y.snapshotVersion,F=y.withLastLimboFreeSnapshotVersion(R);h.No=h.No.insert(p,F)}}}(r.localStore,i))}async function bA(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){z(Qu,"User change. New user:",e.toKey());const r=await zC(t.localStore,e);t.currentUser=e,function(i,o){i.dc.forEach(B=>{B.forEach(u=>{u.reject(new K(k.CANCELLED,o))})}),i.dc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vi(t,r.qo)}}function PA(n,e){const t=ie(n),r=t.Ic.get(e);if(r&&r.lc)return Be().add(r.key);{let s=Be();const i=t.Tc.get(e);if(!i)return s;for(const o of i??[]){const B=t.hc.get(o);s=s.unionWith(B.view.Yu)}return s}}function Bp(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=sp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TA.bind(null,e),e.Ec.hn=hA.bind(null,e.eventManager),e.Ec.yc=dA.bind(null,e.eventManager),e}function SA(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RA.bind(null,e),e}class $o{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ca(e.databaseInfo.databaseId),this.sharedClientState=this.Sc(e),this.persistence=this.vc(e),await this.persistence.start(),this.localStore=this.Dc(e),this.gcScheduler=this.xc(e,this.localStore),this.indexBackfillerScheduler=this.Cc(e,this.localStore)}xc(e,t){return null}Cc(e,t){return null}Dc(e){return GT(this.persistence,new xT,e.initialUser,this.serializer)}vc(e){return new KC(Vu.w_,this.serializer)}Sc(e){return new aA}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$o.provider={build:()=>new $o};class OA extends $o{constructor(e){super(),this.cacheSizeBytes=e}xc(e,t){$(this.persistence.referenceDelegate instanceof Qo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new RI(r,e.asyncQueue,t)}vc(e){const t=this.cacheSizeBytes!==void 0?at.withCacheSize(this.cacheSizeBytes):at.DEFAULT;return new KC(r=>Qo.w_(r,t),this.serializer)}}class JB{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bA.bind(null,this.syncEngine),await iA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uA}()}createDatastore(e){const t=ca(e.databaseInfo.databaseId),r=fI(e.databaseInfo);return EI(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,B){return new QT(r,s,i,o,B)}(this.localStore,this.datastore,e.asyncQueue,t=>Yh(this.syncEngine,t,0),function(){return Fh.Je()?new Fh:new cI}())}createSyncEngine(e,t){return function(s,i,o,B,u,c,h){const f=new mA(s,i,o,B,u,c);return h&&(f.mc=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ie(s);z(zt,"RemoteStore shutting down."),i.ca.add(5),await xi(i),i.Ea.shutdown(),i.ha.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}JB.provider={build:()=>new JB};/**
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
 */const Hn="FirestoreClient";class NA{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=$e.UNAUTHENTICATED,this.clientId=Bu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{z(Hn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(z(Hn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ku(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uB(n,e){n.asyncQueue.verifyOperationInProgress(),z(Hn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await zC(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Zh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await LA(n);z(Hn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>zh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>zh(e.remoteStore,s)),n._onlineComponents=e}async function LA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z(Hn,"Using user provided OfflineComponentProvider");try{await uB(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;St("Error using user provided cache. Falling back to memory cache: "+t),await uB(n,new $o)}}else z(Hn,"Using default OfflineComponentProvider"),await uB(n,new OA(void 0));return n._offlineComponents}async function up(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z(Hn,"Using user provided OnlineComponentProvider"),await Zh(n,n._uninitializedComponentsProvider._online)):(z(Hn,"Using default OnlineComponentProvider"),await Zh(n,new JB))),n._onlineComponents}function FA(n){return up(n).then(e=>e.syncEngine)}async function ed(n){const e=await up(n),t=e.eventManager;return t.onListen=EA.bind(null,e.syncEngine),t.onUnlisten=yA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_A.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=IA.bind(null,e.syncEngine),t}function kA(n,e,t,r){const s=new oA(r),i=new fA(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>cA(await ed(n),i)),()=>{s.Aa(),n.asyncQueue.enqueueAndForget(async()=>lA(await ed(n),i))}}function xA(n,e){const t=new or;return n.asyncQueue.enqueueAndForget(async()=>wA(await FA(n),e,t)),t.promise}/**
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
 */let cp=class{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Li("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},VA=class extends cp{data(){return super.data()}};/**
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
 */class MA{convertValue(e,t="none"){switch(Ge(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Fn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return yr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[si].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>be(o.doubleValue));return new lt(t)}convertGeoPoint(e){return new jt(be(e.latitude),be(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Pi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Xr(e));default:return null}}convertTimestamp(e){const t=Ln(e);return new Ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=pe.fromString(e);$(hC(r),9688,{name:e});const s=new ni(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(t)||an(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function GA(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */const td="AsyncQueue";class nd{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Qc=null,this.Wc=!1,this.Gc=!1,this.zc=[],this.jt=new gC(this,"async_queue_retry"),this.jc=()=>{const r=BB();r&&z(td,"Visibility state changed to "+r.visibilityState),this.jt.qt()},this.Hc=e;const t=BB();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=BB();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise(()=>{});const t=new or;return this.Yc(()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.qc.push(e),this.Zc()))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.jt.reset()}catch(e){if(!us(e))throw e;z(td,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.jt.Ut(()=>this.Zc())}}Yc(e){const t=this.Hc.then(()=>(this.Wc=!0,e().catch(r=>{throw this.Qc=r,this.Wc=!1,an("INTERNAL UNHANDLED ERROR: ",rd(r)),r}).then(r=>(this.Wc=!1,r))));return this.Hc=t,t}enqueueAfterDelay(e,t,r){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const s=ju.createAndSchedule(this,e,t,r,i=>this.Xc(i));return this.Kc.push(s),s}Jc(){this.Qc&&ee(47125,{el:rd(this.Qc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then(()=>{this.Kc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()})}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function rd(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ei extends ha{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new nd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new nd(e),this._firestoreClient=void 0,await e}}}function UA(n,e){const t=typeof n=="object"?n:$B(),r=typeof n=="string"?n:Vo,s=Zo(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=yd("firestore");i&&PI(s,...i)}return s}function lp(n){if(n._terminated)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||HA(n),n._firestoreClient}function HA(n){var r,s,i,o;const e=n._freezeSettings(),t=DI(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new NA(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class hp extends MA{constructor(e){super(),this.firestore=e}convertBytes(e){return new At(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,t)}}class Us{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Br extends cp{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Li("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Br._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Br._jsonSchemaVersion="firestore/documentSnapshot/1.0",Br._jsonSchema={type:xe("string",Br._jsonSchemaVersion),bundleSource:xe("string","DocumentSnapshot"),bundleName:xe("string"),bundle:xe("string")};class bo extends Br{data(e={}){return super.data(e)}}class zr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Us(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new bo(this._firestore,this._userDataWriter,r.key,r,new Us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(B=>{He(s._snapshot.query)?VB(s._snapshot.query):Cu(s.query._query);const u=new bo(s._firestore,s._userDataWriter,B.doc.key,B.doc,new Us(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);return B.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(B=>i||B.type!==3).map(B=>{const u=new bo(s._firestore,s._userDataWriter,B.doc.key,B.doc,new Us(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,h=-1;return B.type!==0&&(c=o.indexOf(B.doc.key),o=o.delete(B.doc.key)),B.type!==1&&(o=o.add(B.doc),h=o.indexOf(B.doc.key)),{type:JA(B.type),doc:u,oldIndex:c,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=zr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Bu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function JA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:n})}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */zr._jsonSchemaVersion="firestore/querySnapshot/1.0",zr._jsonSchema={type:xe("string",zr._jsonSchemaVersion),bundleSource:xe("string","QuerySnapshot"),bundleName:xe("string"),bundle:xe("string")};/**
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
 */function qA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $u{}class dp extends $u{}function jA(n,e,...t){let r=[];e instanceof $u&&r.push(e),r=r.concat(t),function(i){const o=i.filter(u=>u instanceof Xu).length,B=i.filter(u=>u instanceof Yu).length;if(o>1||o>0&&B>0)throw new K(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Yu extends dp{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Yu(e,t,r)}_apply(e){const t=this._parse(e);return fp(e._query,t),new Tr(e.firestore,e.converter,SB(e._query,t))}_parse(e){const t=wC(e.firestore);return function(i,o,B,u,c,h,f){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new K(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){id(f,h);const R=[];for(const F of f)R.push(sd(u,i,F));p={arrayValue:{values:R}}}else p=sd(u,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||id(f,h),p=FI(B,o,f,h==="in"||h==="not-in");return ke.create(c,h,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Xu extends $u{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Xu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ot.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const B=i.getFlattenedFilters();for(const u of B)fp(o,u),o=SB(o,u)}(e._query,t),new Tr(e.firestore,e.converter,SB(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Zu extends dp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Zu(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new K(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new K(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ci(i,o)}(e._query,this._field,this._direction);return new Tr(e.firestore,e.converter,Ry(e._query,t))}}function KA(n,e="asc"){const t=e,r=Li("orderBy",n);return Zu._create(r,t)}function sd(n,e,t){if(typeof(t=Oe(t))=="string"){if(t==="")throw new K(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zf(e)&&t.indexOf("/")!==-1)throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(pe.fromString(t));if(!X.isDocumentKey(r))throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Eh(n,new X(r))}if(t instanceof Ne)return Eh(n,t._key);throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ra(t)}.`)}function id(n,e){if(!Array.isArray(n)||n.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fp(n,e){const t=function(s,i){for(const o of s)for(const B of o.getFlattenedFilters())if(i.indexOf(B.op)>=0)return B.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}/**
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
 */function od(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}function zA(n,e,t){n=sr(n,Ne);const r=sr(n.firestore,Ei),s=GA(n.converter,e),i=wC(r);return Cp(r,[LI(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ht.none())])}function QA(n){return Cp(sr(n.firestore,Ei),[new du(n._key,Ht.none())])}function WA(n,...e){var c,h,f;n=Oe(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||od(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(od(e[r])){const p=e[r];e[r]=(c=p.next)==null?void 0:c.bind(p),e[r+1]=(h=p.error)==null?void 0:h.bind(p),e[r+2]=(f=p.complete)==null?void 0:f.bind(p)}let i,o,B;if(n instanceof Ne)o=sr(n.firestore,Ei),B=fu(n._key.path),i={next:p=>{e[r]&&e[r]($A(o,n,p))},error:e[r+1],complete:e[r+2]};else{const p=sr(n,Tr);o=sr(p.firestore,Ei),B=p._query;const y=new hp(o);i={next:R=>{e[r]&&e[r](new zr(o,y,p,R))},error:e[r+1],complete:e[r+2]},qA(n._query)}const u=lp(o);return kA(u,B,s,i)}function Cp(n,e){const t=lp(n);return xA(t,e)}function $A(n,e,t){const r=t.docs.get(e._key),s=new hp(n);return new Br(n,s,e._key,r,new Us(t.hasPendingWrites,t.fromCache),e.converter)}const ad="@firebase/firestore",Bd="4.17.1";(function(e,t=!0){JD(_r),hr(new Nn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),B=new Ei(new oI(r.getProvider("auth-internal")),new uI(o,r.getProvider("app-check-internal")),XD(o,s),o);return i={useFetchStreams:t,...i},B._setSettings(i),B},"PUBLIC").setMultipleInstances(!0)),Mt(ad,Bd,e),Mt(ad,Bd,"esm2020")})();/**
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
 */const pp="firebasestorage.googleapis.com",gp="storageBucket",YA=2*60*1e3,XA=10*60*1e3,ZA=1e3;/**
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
 */class Pe extends Qt{constructor(e,t,r=0){super(cB(e),`Firebase Storage: ${t} (${cB(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return cB(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Re;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Re||(Re={}));function cB(n){return"storage/"+n}function ec(){const n="An unknown error occurred, please check the error payload for server response.";return new Pe(Re.UNKNOWN,n)}function eR(n){return new Pe(Re.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function tR(n){return new Pe(Re.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function nR(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Pe(Re.UNAUTHENTICATED,n)}function rR(){return new Pe(Re.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function sR(n){return new Pe(Re.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function mp(){return new Pe(Re.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ep(){return new Pe(Re.CANCELED,"User canceled the upload/download.")}function iR(n){return new Pe(Re.INVALID_URL,"Invalid URL '"+n+"'.")}function oR(n){return new Pe(Re.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function aR(){return new Pe(Re.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+gp+"' property when initializing the app?")}function _p(){return new Pe(Re.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function BR(){return new Pe(Re.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function uR(){return new Pe(Re.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function cR(n){return new Pe(Re.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qB(n){return new Pe(Re.INVALID_ARGUMENT,n)}function Dp(){return new Pe(Re.APP_DELETED,"The Firebase app was deleted.")}function lR(n){return new Pe(Re.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ys(n,e){return new Pe(Re.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ls(n){throw new Pe(Re.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class yt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=yt.makeFromUrl(e,t)}catch{return new yt(e,"")}if(r.path==="")return r;throw oR(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(ce){ce.path.charAt(ce.path.length-1)==="/"&&(ce.path_=ce.path_.slice(0,-1))}const o="(/(.*))?$",B=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(ce){ce.path_=decodeURIComponent(ce.path)}const h="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",y=new RegExp(`^https?://${f}/${h}/b/${s}/o${p}`,"i"),R={bucket:1,path:3},F=t===pp?"(?:storage.googleapis.com|storage.cloud.google.com)":t,M="([^?#]*)",j=new RegExp(`^https?://${F}/${s}/${M}`,"i"),oe=[{regex:B,indices:u,postModify:i},{regex:y,indices:R,postModify:c},{regex:j,indices:{bucket:1,path:2},postModify:c}];for(let ce=0;ce<oe.length;ce++){const ye=oe[ce],ge=ye.regex.exec(e);if(ge){const A=ge[ye.indices.bucket];let E=ge[ye.indices.path];E||(E=""),r=new yt(A,E),ye.postModify(r);break}}if(r==null)throw iR(e);return r}}class hR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function dR(n,e,t){let r=1,s=null,i=null,o=!1,B=0;function u(){return B===2}let c=!1;function h(...M){c||(c=!0,e.apply(null,M))}function f(M){s=setTimeout(()=>{s=null,n(y,u())},M)}function p(){i&&clearTimeout(i)}function y(M,...j){if(c){p();return}if(M){p(),h.call(null,M,...j);return}if(u()||o){p(),h.call(null,M,...j);return}r<64&&(r*=2);let oe;B===1?(B=2,oe=0):oe=(r+Math.random())*1e3,f(oe)}let R=!1;function F(M){R||(R=!0,p(),!c&&(s!==null?(M||(B=2),clearTimeout(s),f(0)):M||(B=1)))}return f(0),i=setTimeout(()=>{o=!0,F(!0)},t),F}function fR(n){n(!1)}/**
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
 */function CR(n){return n!==void 0}function pR(n){return typeof n=="function"}function gR(n){return typeof n=="object"&&!Array.isArray(n)}function Da(n){return typeof n=="string"||n instanceof String}function ud(n){return tc()&&n instanceof Blob}function tc(){return typeof Blob<"u"}function cd(n,e,t,r){if(r<e)throw qB(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw qB(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function fs(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function yp(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var ur;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ur||(ur={}));/**
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
 */function Ip(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class mR{constructor(e,t,r,s,i,o,B,u,c,h,f,p=!0,y=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=B,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.isUsingEmulator=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,F)=>{this.resolve_=R,this.reject_=F,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new fo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=B=>{const u=B.loaded,c=B.lengthComputable?B.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const B=i.getErrorCode()===ur.NO_ERROR,u=i.getStatus();if(!B||Ip(u,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===ur.ABORT;r(!1,new fo(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new fo(c,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,B=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(B,B.getResponse());CR(u)?i(u):i()}catch(u){o(u)}else if(B!==null){const u=ec();u.serverResponse=B.getErrorText(),this.errorCallback_?o(this.errorCallback_(B,u)):o(u)}else if(s.canceled){const u=this.appDelete_?Dp():Ep();o(u)}else{const u=mp();o(u)}};this.canceled_?t(!1,new fo(!1,null,!0)):this.backoffId_=dR(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&fR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fo{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function ER(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function _R(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function DR(n,e){e&&(n["X-Firebase-GMPID"]=e)}function yR(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function IR(n,e,t,r,s,i,o=!0,B=!1){const u=yp(n.urlParams),c=n.url+u,h=Object.assign({},n.headers);return DR(h,e),ER(h,t),_R(h,i),yR(h,r),new mR(c,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,B)}/**
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
 */function wR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function TR(...n){const e=wR();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(tc())return new Blob(n);throw new Pe(Re.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function AR(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function RR(n){if(typeof atob>"u")throw cR("base-64");return atob(n)}/**
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
 */const xt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class lB{constructor(e,t){this.data=e,this.contentType=t||null}}function vR(n,e){switch(n){case xt.RAW:return new lB(wp(e));case xt.BASE64:case xt.BASE64URL:return new lB(Tp(n,e));case xt.DATA_URL:return new lB(PR(e),SR(e))}throw ec()}function wp(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function bR(n){let e;try{e=decodeURIComponent(n)}catch{throw Ys(xt.DATA_URL,"Malformed data URL.")}return wp(e)}function Tp(n,e){switch(n){case xt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ys(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case xt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ys(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=RR(e)}catch(s){throw s.message.includes("polyfill")?s:Ys(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Ap{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ys(xt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=OR(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function PR(n){const e=new Ap(n);return e.base64?Tp(xt.BASE64,e.rest):bR(e.rest)}function SR(n){return new Ap(n).contentType}function OR(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class An{constructor(e,t){let r=0,s="";ud(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(ud(this.data_)){const r=this.data_,s=AR(r,e,t);return s===null?null:new An(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new An(r,!0)}}static getBlob(...e){if(tc()){const t=e.map(r=>r instanceof An?r.data_:r);return new An(TR.apply(null,t))}else{const t=e.map(o=>Da(o)?vR(xt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let B=0;B<o.length;B++)s[i++]=o[B]}),new An(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Rp(n){let e;try{e=JSON.parse(n)}catch{return null}return gR(e)?e:null}/**
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
 */function NR(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function LR(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function vp(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function FR(n,e){return e}class nt{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||FR}}let Co=null;function kR(n){return!Da(n)||n.length<2?n:vp(n)}function bp(){if(Co)return Co;const n=[];n.push(new nt("bucket")),n.push(new nt("generation")),n.push(new nt("metageneration")),n.push(new nt("name","fullPath",!0));function e(i,o){return kR(o)}const t=new nt("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new nt("size");return s.xform=r,n.push(s),n.push(new nt("timeCreated")),n.push(new nt("updated")),n.push(new nt("md5Hash",null,!0)),n.push(new nt("cacheControl",null,!0)),n.push(new nt("contentDisposition",null,!0)),n.push(new nt("contentEncoding",null,!0)),n.push(new nt("contentLanguage",null,!0)),n.push(new nt("contentType",null,!0)),n.push(new nt("metadata","customMetadata",!0)),Co=n,Co}function xR(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new yt(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function VR(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return xR(r,n),r}function Pp(n,e,t){const r=Rp(e);return r===null?null:VR(n,r,t)}function MR(n,e,t,r){const s=Rp(e);if(s===null||!Da(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const h=n.bucket,f=n.fullPath,p="/b/"+o(h)+"/o/"+o(f),y=fs(p,t,r),R=yp({alt:"media",token:c});return y+R})[0]}function Sp(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class vr{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function rn(n){if(!n)throw ec()}function nc(n,e){function t(r,s){const i=Pp(n,s,e);return rn(i!==null),i}return t}function GR(n,e){function t(r,s){const i=Pp(n,s,e);return rn(i!==null),MR(i,s,n.host,n._protocol)}return t}function Mi(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=rR():s=nR():t.getStatus()===402?s=tR(n.bucket):t.getStatus()===403?s=sR(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function rc(n){const e=Mi(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=eR(n.path)),i.serverResponse=s.serverResponse,i}return t}function UR(n,e,t){const r=e.fullServerUrl(),s=fs(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,B=new vr(s,i,nc(n,t),o);return B.errorHandler=rc(e),B}function HR(n,e,t){const r=e.fullServerUrl(),s=fs(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,B=new vr(s,i,GR(n,t),o);return B.errorHandler=rc(e),B}function JR(n,e){const t=e.fullServerUrl(),r=fs(t,n.host,n._protocol),s="DELETE",i=n.maxOperationRetryTime;function o(u,c){}const B=new vr(r,s,o,i);return B.successCodes=[200,204],B.errorHandler=rc(e),B}function qR(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Op(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=qR(null,e)),r}function jR(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function B(){let oe="";for(let ce=0;ce<2;ce++)oe=oe+Math.random().toString().slice(2);return oe}const u=B();o["Content-Type"]="multipart/related; boundary="+u;const c=Op(e,r,s),h=Sp(c,t),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+u+"--",y=An.getBlob(f,r,p);if(y===null)throw _p();const R={name:c.fullPath},F=fs(i,n.host,n._protocol),M="POST",j=n.maxUploadRetryTime,ne=new vr(F,M,nc(n,t),j);return ne.urlParams=R,ne.headers=o,ne.body=y.uploadData(),ne.errorHandler=Mi(e),ne}class Yo{constructor(e,t,r,s){this.current=e,this.total=t,this.finalized=!!r,this.metadata=s||null}}function sc(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{rn(!1)}return rn(!!t&&(e||["active"]).indexOf(t)!==-1),t}function KR(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o=Op(e,r,s),B={name:o.fullPath},u=fs(i,n.host,n._protocol),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=Sp(o,t),p=n.maxUploadRetryTime;function y(F){sc(F);let M;try{M=F.getResponseHeader("X-Goog-Upload-URL")}catch{rn(!1)}return rn(Da(M)),M}const R=new vr(u,c,y,p);return R.urlParams=B,R.headers=h,R.body=f,R.errorHandler=Mi(e),R}function zR(n,e,t,r){const s={"X-Goog-Upload-Command":"query"};function i(c){const h=sc(c,["active","final"]);let f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{rn(!1)}f||rn(!1);const p=Number(f);return rn(!isNaN(p)),new Yo(p,r.size(),h==="final")}const o="POST",B=n.maxUploadRetryTime,u=new vr(t,o,i,B);return u.headers=s,u.errorHandler=Mi(e),u}const ld=256*1024;function QR(n,e,t,r,s,i,o,B){const u=new Yo(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw BR();const c=u.total-u.current;let h=c;s>0&&(h=Math.min(h,s));const f=u.current,p=f+h;let y="";h===0?y="finalize":c===h?y="upload, finalize":y="upload";const R={"X-Goog-Upload-Command":y,"X-Goog-Upload-Offset":`${u.current}`},F=r.slice(f,p);if(F===null)throw _p();function M(ce,ye){const ge=sc(ce,["active","final"]),A=u.current+h,E=r.size();let D;return ge==="final"?D=nc(e,i)(ce,ye):D=null,new Yo(A,E,ge==="final",D)}const j="POST",ne=e.maxUploadRetryTime,oe=new vr(t,j,M,ne);return oe.headers=R,oe.body=F.uploadData(),oe.progressCallback=B||null,oe.errorHandler=Mi(n),oe}const Bt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function hB(n){switch(n){case"running":case"pausing":case"canceling":return Bt.RUNNING;case"paused":return Bt.PAUSED;case"success":return Bt.SUCCESS;case"canceled":return Bt.CANCELED;case"error":return Bt.ERROR;default:return Bt.ERROR}}/**
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
 */class WR{constructor(e,t,r){if(pR(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function Nr(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}/**
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
 */class $R{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ur.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ur.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ur.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw Ls("cannot .send() more than once");if(Er(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ls("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ls("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ls("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ls("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class YR extends $R{initXhr(){this.xhr_.responseType="text"}}function er(){return new YR}/**
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
 */class XR{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=bp(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Re.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Ip(s.status,[]))if(i)s=mp();else{this.sleepTime=Math.max(this.sleepTime*2,ZA),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Re.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=KR(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,er,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const s=zR(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,er,t,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=ld*this._chunkMultiplier,t=new Yo(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=QR(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const B=this._ref.storage._makeRequest(o,er,s,i,!1);this._request=B,B.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){ld*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=UR(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,er,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=jR(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,er,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Ep(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=hB(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,s){const i=new WR(t||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(hB(this._state)){case Bt.SUCCESS:Nr(this._resolve.bind(null,this.snapshot))();break;case Bt.CANCELED:case Bt.ERROR:const t=this._reject;Nr(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(hB(this._state)){case Bt.RUNNING:case Bt.PAUSED:e.next&&Nr(e.next.bind(e,this.snapshot))();break;case Bt.SUCCESS:e.complete&&Nr(e.complete.bind(e))();break;case Bt.CANCELED:case Bt.ERROR:e.error&&Nr(e.error.bind(e,this._error))();break;default:e.error&&Nr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class gr{constructor(e,t){this._service=e,t instanceof yt?this._location=t:this._location=yt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new gr(e,t)}get root(){const e=new yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vp(this._location.path)}get storage(){return this._service}get parent(){const e=NR(this._location.path);if(e===null)return null;const t=new yt(this._location.bucket,e);return new gr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw lR(e)}}function ZR(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new XR(n,new An(e),t)}function ev(n){n._throwIfRoot("getDownloadURL");const e=HR(n.storage,n._location,bp());return n.storage.makeRequestWithTokens(e,er).then(t=>{if(t===null)throw uR();return t})}function tv(n){n._throwIfRoot("deleteObject");const e=JR(n.storage,n._location);return n.storage.makeRequestWithTokens(e,er)}function nv(n,e){const t=LR(n._location.path,e),r=new yt(n._location.bucket,t);return new gr(n.storage,r)}/**
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
 */function rv(n){return/^[A-Za-z]+:\/\//.test(n)}function sv(n,e){return new gr(n,e)}function Np(n,e){if(n instanceof ic){const t=n;if(t._bucket==null)throw aR();const r=new gr(t,t._bucket);return e!=null?Np(r,e):r}else return e!==void 0?nv(n,e):n}function iv(n,e){if(e&&rv(e)){if(n instanceof ic)return sv(n,e);throw qB("To use ref(service, url), the first argument must be a Storage instance.")}else return Np(n,e)}function hd(n,e){const t=e==null?void 0:e[gp];return t==null?null:yt.makeFromBucketSpec(t,n)}function ov(n,e,t,r={}){n.host=`${e}:${t}`;const s=Er(e);s&&zB(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Ad(i,n.app.options.projectId))}class ic{constructor(e,t,r,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=pp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=YA,this._maxUploadRetryTime=XA,this._requests=new Set,s!=null?this._bucket=yt.makeFromBucketSpec(s,this._host):this._bucket=hd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yt.makeFromBucketSpec(this._url,e):this._bucket=hd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){cd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){cd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new gr(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new hR(Dp());{const o=IR(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const dd="@firebase/storage",fd="0.14.5";/**
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
 */const Lp="storage";function av(n,e,t){return n=Oe(n),ZR(n,e,t)}function Bv(n){return n=Oe(n),ev(n)}function uv(n){return n=Oe(n),tv(n)}function Fp(n,e){return n=Oe(n),iv(n,e)}function cv(n=$B(),e){n=Oe(n);const r=Zo(n,Lp).getImmediate({identifier:e}),s=yd("storage");return s&&lv(r,...s),r}function lv(n,e,t,r={}){ov(n,e,t,r)}/**
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
 */function hv(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new ic(t,r,s,e,_r)}function dv(){hr(new Nn(Lp,hv,"PUBLIC").setMultipleInstances(!0)),Mt(dd,fd,""),Mt(dd,fd,"esm2020")}dv();const Fs={apiKey:"AIzaSyAufxj2o9oOeU2PcfzgGmYtn1-NJdYWAU4",authDomain:"photovault-a4d6d.firebaseapp.com",projectId:"photovault-a4d6d",storageBucket:"photovault-a4d6d.firebasestorage.app",messagingSenderId:"571034997782",appId:"1:571034997782:web:03e2f88a64f2ffcf475137",measurementId:"G-B6FW5HPXL9"};let po=null,cr=null,mr=null,_i=null,jB=!1;if(Fs.apiKey&&Fs.projectId&&Fs.apiKey!=="YOUR_API_KEY")try{po=fl().length===0?bd(Fs):fl()[0],cr=hD(po),mr=UA(po),_i=cv(po),jB=!0,console.log("[PhotoVault] Connected to Firebase Project:",Fs.projectId)}catch(n){console.error("[PhotoVault] Firebase initialization error:",n),jB=!1}else console.info("[PhotoVault] Firebase project keys pending in src/firebaseConfig.js. Running in secure local preview mode.");const fv="PhotoVaultMockDB",Cv=1;function ya(){return new Promise((n,e)=>{const t=indexedDB.open(fv,Cv);t.onupgradeneeded=r=>{const s=r.target.result;if(s.objectStoreNames.contains("users")||s.createObjectStore("users",{keyPath:"email"}),!s.objectStoreNames.contains("photos")){const i=s.createObjectStore("photos",{keyPath:"id"});i.createIndex("uid","uid",{unique:!1}),i.createIndex("createdAt","createdAt",{unique:!1})}},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}let ss=JSON.parse(sessionStorage.getItem("demo_current_user")||"null");const KB=new Set;function pv(n){return KB.add(n),n(ss),()=>KB.delete(n)}function kp(){sessionStorage.setItem("demo_current_user",JSON.stringify(ss));for(const n of KB)n(ss)}async function gv(n){const e=n.trim(),t=e.toLowerCase(),r=await ya();return new Promise((s,i)=>{const B=r.transaction(["users"],"readwrite").objectStore("users"),u=B.get(t);u.onsuccess=()=>{let c=u.result;c||(c={uid:"usr_"+t.replace(/[^a-z0-9]/g,"_"),email:t,displayName:e,createdAt:new Date().toISOString()},B.add(c)),ss={uid:c.uid,email:c.displayName,displayName:c.displayName},kp(),s(ss)},u.onerror=()=>i(u.error)})}async function mv(){ss=null,sessionStorage.removeItem("demo_current_user"),kp()}function Ev(n,e,t){return new Promise((r,s)=>{if(!e){s(new Error("Permission denied: Authenticated user required."));return}const i="ph_"+Math.random().toString(36).substring(2,9)+"_"+Date.now(),o=`users/${e}/photos/${i}_${n.name}`;let B=0;const u=setInterval(()=>{if(B+=Math.floor(Math.random()*25)+15,B>=100){B=100,clearInterval(u),t&&t(100);const c=new FileReader;c.onload=async()=>{try{const h=c.result,f={id:i,uid:e,filename:n.name,storagePath:o,downloadURL:h,fileSize:n.size,contentType:n.type,createdAt:new Date().toISOString()},y=(await ya()).transaction(["photos"],"readwrite");y.objectStore("photos").add(f),y.oncomplete=()=>r(f),y.onerror=()=>s(y.error)}catch(h){s(h)}},c.onerror=()=>s(c.error),c.readAsDataURL(n)}else t&&t(B)},80)})}async function _v(n){if(!n)return[];const e=await ya();return new Promise((t,r)=>{const B=e.transaction(["photos"],"readonly").objectStore("photos").index("uid").getAll(IDBKeyRange.only(n));B.onsuccess=()=>{const u=B.result||[];u.sort((c,h)=>new Date(h.createdAt)-new Date(c.createdAt)),t(u)},B.onerror=()=>r(B.error)})}async function Dv(n,e){if(!e)throw new Error("Unauthenticated user cannot delete.");const t=await ya();return new Promise((r,s)=>{const i=t.transaction(["photos"],"readwrite"),o=i.objectStore("photos"),B=o.get(n);B.onsuccess=()=>{const u=B.result;if(!u){r();return}if(u.uid!==e){s(new Error("Permission denied: Cannot delete another user photo."));return}o.delete(n),i.oncomplete=()=>r(),i.onerror=()=>s(i.error)},B.onerror=()=>s(B.error)})}function qn(){return jB&&cr!==null}function yv(n){return`${n.trim().toLowerCase().replace(/[^a-z0-9_]/g,"")||"user"}@vault.app`}function Iv(n){return`Vault_Secret_${n.trim().toLowerCase().replace(/[^a-z0-9_]/g,"")}_Key99!`}function wv(n){return qn()?e_(cr,e=>{if(e){const t=e.displayName||e.email.split("@")[0];n({uid:e.uid,username:t,displayName:t,isAnonymous:e.isAnonymous})}else n(null)}):pv(n)}async function Tv(n){const e=n.trim().toLowerCase().replace(/[^a-z0-9_]/g,"");if(!e||e.length<2)throw new Error("Please enter a username with at least 2 characters.");if(qn()){const t=yv(e),r=Iv(e);try{return{uid:(await bl(cr,t,r)).user.uid,username:e,displayName:e}}catch(s){if(s.code==="auth/user-not-found"||s.code==="auth/invalid-credential")try{const i=await WE(cr,t,r);return await YE(i.user,{displayName:e}),{uid:i.user.uid,username:e,displayName:e}}catch(i){if(i.code==="auth/email-already-in-use")return{uid:(await bl(cr,t,r)).user.uid,username:e,displayName:e};throw i}throw s}}else return await gv(e)}async function Av(){qn()?await t_(cr):await mv()}function Rv(n,e,t){return e?qn()&&_i?new Promise((r,s)=>{const i=n.name.replace(/[^a-zA-Z0-9._-]/g,"_"),o=Date.now()+"_"+Math.random().toString(36).substring(2,7),B=`users/${e}/photos/${o}_${i}`,u=Fp(_i,B),c={contentType:n.type,customMetadata:{originalName:n.name,uploadedBy:e}},h=av(u,n,c);h.on("state_changed",f=>{const p=Math.round(f.bytesTransferred/f.totalBytes*100);t&&t(p)},f=>{console.error("Firebase Storage Upload Error:",f),s(f)},async()=>{try{const f=await Bv(h.snapshot.ref);r({downloadURL:f,storagePath:B,filename:n.name,fileSize:n.size,contentType:n.type||"image/jpeg"})}catch(f){s(f)}})}):Ev(n,e,t):Promise.reject(new Error("Authentication required to upload photos."))}async function vv(n){if(qn()&&_i&&n)try{const e=Fp(_i,n);await uv(e)}catch(e){if(e.code==="storage/object-not-found"){console.warn("Storage object not found, skipping delete:",n);return}throw e}}async function bv(n,e){if(!n)throw new Error("Unauthenticated user cannot save photo.");if(qn()&&mr){const t=DC(mr,"users",n,"photos"),r=yC(t),s={id:r.id,uid:n,filename:e.filename,storagePath:e.storagePath,downloadURL:e.downloadURL,fileSize:e.fileSize,contentType:e.contentType,createdAt:UI(),isoDate:new Date().toISOString()};return await zA(r,s),s}else return e}function Pv(n,e,t){if(!n)return e([]),()=>{};if(qn()&&mr){const r=DC(mr,"users",n,"photos"),s=jA(r,KA("createdAt","desc"));return WA(s,i=>{const o=i.docs.map(B=>{const u=B.data();let c=u.isoDate||new Date().toISOString();return u.createdAt&&typeof u.createdAt.toDate=="function"&&(c=u.createdAt.toDate().toISOString()),{id:B.id,...u,createdAt:c}});e(o)},i=>{console.error("Firestore subscription error:",i),t&&t(i)})}else{let r=!0;const s=async()=>{if(r)try{const o=await _v(n);r&&e(o)}catch(o){r&&t&&t(o)}};s();const i=setInterval(s,1e3);return()=>{r=!1,clearInterval(i)}}}async function xp(n,e){if(!e||n.uid!==e)throw new Error("Permission denied: You can only delete your own photos.");if(qn()&&mr){n.storagePath&&await vv(n.storagePath);const t=yC(mr,"users",e,"photos",n.id);await QA(t)}else await Dv(n.id,e)}async function Sv(n,e){if(!e)throw new Error("Unauthenticated user.");const t=[];for(const r of n)try{await xp(r,e)}catch(s){console.error(`Failed to delete photo ${r.id}:`,s),t.push({photoId:r.id,error:s.message})}if(t.length>0)throw new Error(`Failed to delete ${t.length} of ${n.length} photos.`)}const W={currentUser:null,photos:[],selectedPhotoIds:new Set,searchQuery:"",sortBy:"newest",currentLightboxIndex:-1,activeUploads:new Map,confirmAction:null,unsubscribePhotos:null},G={userNavSection:document.getElementById("user-nav-section"),navUserAvatar:document.getElementById("nav-user-avatar"),navUserName:document.getElementById("nav-user-name"),navUserUid:document.getElementById("nav-user-uid"),btnLogout:document.getElementById("btn-logout"),authSection:document.getElementById("auth-section"),authForm:document.getElementById("auth-form"),authUsername:document.getElementById("auth-username"),authErrorBox:document.getElementById("auth-error-box"),btnAuthSubmit:document.getElementById("btn-auth-submit"),authSubmitLabel:document.getElementById("auth-submit-label"),authSubmitSpinner:document.getElementById("auth-submit-spinner"),dashboardSection:document.getElementById("dashboard-section"),dropzone:document.getElementById("dropzone"),fileInput:document.getElementById("file-input"),uploadQueue:document.getElementById("upload-queue"),queueCount:document.getElementById("queue-count"),queueTotalPercent:document.getElementById("queue-total-percent"),queueOverallBar:document.getElementById("queue-overall-bar"),uploadItemsList:document.getElementById("upload-items-list"),gallerySearch:document.getElementById("gallery-search"),btnClearSearch:document.getElementById("btn-clear-search"),sortSelect:document.getElementById("sort-select"),checkboxSelectAll:document.getElementById("checkbox-select-all"),btnBulkDelete:document.getElementById("btn-bulk-delete"),selectedCount:document.getElementById("selected-count"),galleryCountBadge:document.getElementById("gallery-count-badge"),galleryGrid:document.getElementById("gallery-grid"),galleryEmptyState:document.getElementById("gallery-empty-state"),galleryNoResults:document.getElementById("gallery-no-results"),galleryLoading:document.getElementById("gallery-loading"),btnEmptyUpload:document.getElementById("btn-empty-upload"),btnResetSearch:document.getElementById("btn-reset-search"),lightboxModal:document.getElementById("lightbox-modal"),lightboxBackdrop:document.getElementById("lightbox-backdrop"),lightboxFilename:document.getElementById("lightbox-filename"),lightboxImg:document.getElementById("lightbox-img"),btnLightboxPrev:document.getElementById("btn-lightbox-prev"),btnLightboxNext:document.getElementById("btn-lightbox-next"),btnLightboxDownload:document.getElementById("btn-lightbox-download"),btnLightboxDelete:document.getElementById("btn-lightbox-delete"),btnLightboxClose:document.getElementById("btn-lightbox-close"),lightboxMetaDate:document.getElementById("lightbox-meta-date"),lightboxMetaSize:document.getElementById("lightbox-meta-size"),lightboxMetaType:document.getElementById("lightbox-meta-type"),lightboxMetaPath:document.getElementById("lightbox-meta-path"),confirmModal:document.getElementById("confirm-modal"),confirmBackdrop:document.getElementById("confirm-backdrop"),confirmTitle:document.getElementById("confirm-title"),confirmMessage:document.getElementById("confirm-message"),btnConfirmCancel:document.getElementById("btn-confirm-cancel"),btnConfirmOk:document.getElementById("btn-confirm-ok"),toastContainer:document.getElementById("toast-container")};function Ov(){Nv(),kv(),Vv(),Gv(),Uv(),wv(n=>{W.currentUser=n,Fv(),n?xv(n.uid):(W.unsubscribePhotos&&(W.unsubscribePhotos(),W.unsubscribePhotos=null),W.photos=[],W.selectedPhotoIds.clear(),Hr())})}function Nv(){G.authForm.addEventListener("submit",async n=>{n.preventDefault();const e=G.authUsername.value.trim();if(!e){pd("Please enter your unique username.");return}Cd(!0),Lv();try{await Tv(e),_t(`Welcome to your vault, @${e}!`,"success"),G.authForm.reset()}catch(t){console.error("Auth error:",t),pd(t.message||"Authentication failed.")}finally{Cd(!1)}}),G.btnLogout.addEventListener("click",async()=>{try{await Av(),_t("Logged out successfully.","info")}catch(n){_t("Failed to log out: "+n.message,"error")}})}function Cd(n){G.btnAuthSubmit.disabled=n,n?(G.authSubmitLabel.classList.add("hidden"),G.authSubmitSpinner.classList.remove("hidden")):(G.authSubmitLabel.classList.remove("hidden"),G.authSubmitSpinner.classList.add("hidden"))}function pd(n){G.authErrorBox.textContent=n,G.authErrorBox.classList.remove("hidden")}function Lv(){G.authErrorBox.textContent="",G.authErrorBox.classList.add("hidden")}function Fv(){if(W.currentUser){G.authSection.classList.add("hidden"),G.dashboardSection.classList.remove("hidden"),G.userNavSection.classList.remove("hidden");const n=W.currentUser.username||W.currentUser.displayName||"User";G.navUserName.textContent=`@${n}`,G.navUserAvatar.textContent=n[0].toUpperCase();const e=W.currentUser.uid?W.currentUser.uid.substring(0,8)+"...":"";G.navUserUid.textContent=`UID: ${e}`}else G.authSection.classList.remove("hidden"),G.dashboardSection.classList.add("hidden"),G.userNavSection.classList.add("hidden")}function kv(){const n=G.dropzone,e=G.fileInput;n.addEventListener("click",()=>e.click()),G.btnEmptyUpload.addEventListener("click",()=>e.click()),["dragenter","dragover"].forEach(t=>{n.addEventListener(t,r=>{r.preventDefault(),r.stopPropagation(),n.classList.add("drag-over")})}),["dragleave","dragend"].forEach(t=>{n.addEventListener(t,r=>{r.preventDefault(),r.stopPropagation(),n.classList.remove("drag-over")})}),n.addEventListener("drop",t=>{var s;t.preventDefault(),t.stopPropagation(),n.classList.remove("drag-over");const r=(s=t.dataTransfer)==null?void 0:s.files;r&&r.length>0&&gd(Array.from(r))}),e.addEventListener("change",t=>{const r=t.target.files;r&&r.length>0&&(gd(Array.from(r)),e.value="")})}async function gd(n){if(!W.currentUser){_t("Please log in first.","error");return}const e=n.filter(s=>s.type.startsWith("image/"));if(e.length===0){_t("Please select valid image files (JPG, PNG, WEBP, GIF).","error");return}e.length<n.length&&_t(`${n.length-e.length} non-image file(s) were skipped.`,"info"),G.uploadQueue.classList.remove("hidden"),G.queueCount.textContent=e.length;let t=0;e.length;const r=e.map(async(s,i)=>{const o=`upload_${Date.now()}_${i}_${Math.random().toString(36).substr(2,5)}`;W.activeUploads.set(o,{name:s.name,percent:0}),go();try{const B=await Rv(s,W.currentUser.uid,u=>{const c=W.activeUploads.get(o);c&&(c.percent=u,go())});await bv(W.currentUser.uid,B),t++,W.activeUploads.delete(o),go()}catch(B){console.error(`Upload failed for ${s.name}:`,B),W.activeUploads.delete(o),go(),_t(`Upload failed for ${s.name}: ${B.message}`,"error")}});await Promise.allSettled(r),t>0&&_t(`Successfully uploaded ${t} photo${t>1?"s":""}!`,"success"),W.activeUploads.size===0&&setTimeout(()=>{W.activeUploads.size===0&&G.uploadQueue.classList.add("hidden")},1500)}function go(){const n=Array.from(W.activeUploads.values());if(n.length===0)return;const e=Math.round(n.reduce((t,r)=>t+r.percent,0)/n.length);G.queueTotalPercent.textContent=`${e}%`,G.queueOverallBar.style.width=`${e}%`,G.uploadItemsList.innerHTML=n.map(t=>`
    <div class="upload-item-row">
      <span class="upload-item-name">${Hs(t.name)}</span>
      <span class="upload-item-pct">${t.percent}%</span>
    </div>
  `).join("")}function xv(n){G.galleryLoading.classList.remove("hidden"),G.galleryGrid.classList.add("hidden"),G.galleryEmptyState.classList.add("hidden"),G.galleryNoResults.classList.add("hidden"),W.unsubscribePhotos&&W.unsubscribePhotos(),W.unsubscribePhotos=Pv(n,e=>{W.photos=e,G.galleryLoading.classList.add("hidden"),G.galleryGrid.classList.remove("hidden"),Hr()},e=>{console.error("Failed to subscribe to user photos:",e),G.galleryLoading.classList.add("hidden"),_t("Error syncing gallery: "+e.message,"error")})}function Vv(){G.gallerySearch.addEventListener("input",n=>{W.searchQuery=n.target.value.trim().toLowerCase(),W.searchQuery?G.btnClearSearch.classList.remove("hidden"):G.btnClearSearch.classList.add("hidden"),Hr()}),G.btnClearSearch.addEventListener("click",()=>{G.gallerySearch.value="",W.searchQuery="",G.btnClearSearch.classList.add("hidden"),Hr()}),G.btnResetSearch.addEventListener("click",()=>{G.gallerySearch.value="",W.searchQuery="",G.btnClearSearch.classList.add("hidden"),Hr()}),G.sortSelect.addEventListener("change",n=>{W.sortBy=n.target.value,Hr()}),G.checkboxSelectAll.addEventListener("change",n=>{const e=n.target.checked,t=Cs();e?t.forEach(r=>W.selectedPhotoIds.add(r.id)):W.selectedPhotoIds.clear(),Qr(),Mv()}),G.btnBulkDelete.addEventListener("click",()=>{const n=W.selectedPhotoIds.size;n!==0&&Mp({title:`Delete ${n} Photo${n>1?"s":""}?`,message:`Are you sure you want to permanently delete these ${n} photos? They will be removed from Firebase Storage and Firestore. This action cannot be undone.`,onConfirm:async()=>{const e=W.photos.filter(t=>W.selectedPhotoIds.has(t.id));try{await Sv(e,W.currentUser.uid),W.selectedPhotoIds.clear(),Qr(),_t(`Successfully deleted ${n} photo(s).`,"success")}catch(t){_t("Failed to delete photos: "+t.message,"error")}}})})}function Cs(){let n=[...W.photos];switch(W.searchQuery&&(n=n.filter(e=>e.filename.toLowerCase().includes(W.searchQuery))),W.sortBy){case"newest":n.sort((e,t)=>new Date(t.createdAt)-new Date(e.createdAt));break;case"oldest":n.sort((e,t)=>new Date(e.createdAt)-new Date(t.createdAt));break;case"name-asc":n.sort((e,t)=>e.filename.localeCompare(t.filename));break;case"name-desc":n.sort((e,t)=>t.filename.localeCompare(e.filename));break;case"size-desc":n.sort((e,t)=>(t.fileSize||0)-(e.fileSize||0));break;case"size-asc":n.sort((e,t)=>(e.fileSize||0)-(t.fileSize||0));break}return n}function Hr(){const n=Cs();if(W.searchQuery?G.galleryCountBadge.textContent=`${n.length} of ${W.photos.length} photos`:G.galleryCountBadge.textContent=`${W.photos.length} photo${W.photos.length!==1?"s":""}`,W.photos.length===0){G.galleryGrid.classList.add("hidden"),G.galleryNoResults.classList.add("hidden"),G.galleryEmptyState.classList.remove("hidden"),G.checkboxSelectAll.disabled=!0,G.checkboxSelectAll.checked=!1,Qr();return}if(G.checkboxSelectAll.disabled=!1,G.galleryEmptyState.classList.add("hidden"),n.length===0){G.galleryGrid.classList.add("hidden"),G.galleryNoResults.classList.remove("hidden");return}G.galleryNoResults.classList.add("hidden"),G.galleryGrid.classList.remove("hidden"),G.galleryGrid.innerHTML=n.map((e,t)=>{const r=W.selectedPhotoIds.has(e.id),s=Up(e.fileSize),i=Hp(e.createdAt);return`
      <div class="photo-card ${r?"selected":""}" data-id="${e.id}" data-index="${t}">
        <!-- Multi-select Checkbox -->
        <div class="card-checkbox-wrap" onclick="event.stopPropagation();">
          <input type="checkbox" class="custom-checkbox card-select-cb" data-id="${e.id}" ${r?"checked":""}>
        </div>

        <!-- Card Quick Action Buttons -->
        <div class="card-quick-actions" onclick="event.stopPropagation();">
          <a href="${e.downloadURL}" download="${Hs(e.filename)}" class="quick-action-btn" title="Download original" target="_blank">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="12" x2="12" y2="3"/>
            </svg>
          </a>
          <button class="quick-action-btn delete-btn card-delete-btn" data-id="${e.id}" title="Delete photo">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 6h18"/>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
            </svg>
          </button>
        </div>

        <!-- Thumbnail Image -->
        <div class="photo-thumb-wrap">
          <img src="${e.downloadURL}" alt="${Hs(e.filename)}" loading="lazy">
        </div>

        <!-- Photo Metadata -->
        <div class="photo-info">
          <div class="photo-name" title="${Hs(e.filename)}">${Hs(e.filename)}</div>
          <div class="photo-meta-row">
            <span>${i}</span>
            <span>${s}</span>
          </div>
        </div>
      </div>
    `}).join(""),G.galleryGrid.querySelectorAll(".photo-card").forEach(e=>{const t=e.dataset.id,r=parseInt(e.dataset.index,10);e.addEventListener("click",()=>{Vp(r)});const s=e.querySelector(".card-select-cb");s&&s.addEventListener("change",o=>{o.target.checked?(W.selectedPhotoIds.add(t),e.classList.add("selected")):(W.selectedPhotoIds.delete(t),e.classList.remove("selected")),Qr()});const i=e.querySelector(".card-delete-btn");i&&i.addEventListener("click",o=>{o.stopPropagation();const B=W.photos.find(u=>u.id===t);B&&Gp(B)})}),Qr()}function Mv(){G.galleryGrid.querySelectorAll(".photo-card").forEach(n=>{const e=n.dataset.id,t=n.querySelector(".card-select-cb"),r=W.selectedPhotoIds.has(e);t&&(t.checked=r),r?n.classList.add("selected"):n.classList.remove("selected")})}function Qr(){const n=W.selectedPhotoIds.size,e=Cs();n>0?(G.btnBulkDelete.classList.remove("hidden"),G.selectedCount.textContent=n):G.btnBulkDelete.classList.add("hidden"),e.length>0&&n===e.length?(G.checkboxSelectAll.checked=!0,G.checkboxSelectAll.indeterminate=!1):n>0&&n<e.length?(G.checkboxSelectAll.checked=!1,G.checkboxSelectAll.indeterminate=!0):(G.checkboxSelectAll.checked=!1,G.checkboxSelectAll.indeterminate=!1)}function Gv(){G.btnLightboxClose.addEventListener("click",mo),G.lightboxBackdrop.addEventListener("click",mo),G.btnLightboxPrev.addEventListener("click",()=>Eo(-1)),G.btnLightboxNext.addEventListener("click",()=>Eo(1)),window.addEventListener("keydown",n=>{G.lightboxModal.classList.contains("hidden")||(n.key==="Escape"?mo():n.key==="ArrowLeft"?Eo(-1):n.key==="ArrowRight"&&Eo(1))}),G.btnLightboxDelete.addEventListener("click",()=>{const e=Cs()[W.currentLightboxIndex];e&&Gp(e,()=>{mo()})})}function Vp(n){const e=Cs();if(n<0||n>=e.length)return;W.currentLightboxIndex=n;const t=e[n];G.lightboxFilename.textContent=t.filename,G.lightboxImg.src=t.downloadURL,G.btnLightboxDownload.href=t.downloadURL,G.btnLightboxDownload.setAttribute("download",t.filename),G.lightboxMetaDate.textContent=Hp(t.createdAt),G.lightboxMetaSize.textContent=Up(t.fileSize),G.lightboxMetaType.textContent=t.contentType||"image/jpeg",G.lightboxMetaPath.textContent=t.storagePath||"—",G.btnLightboxPrev.style.display=e.length>1?"flex":"none",G.btnLightboxNext.style.display=e.length>1?"flex":"none",G.lightboxModal.classList.remove("hidden"),document.body.style.overflow="hidden"}function mo(){G.lightboxModal.classList.add("hidden"),G.lightboxImg.src="",document.body.style.overflow="",W.currentLightboxIndex=-1}function Eo(n){const e=Cs();if(e.length===0)return;let t=W.currentLightboxIndex+n;t<0&&(t=e.length-1),t>=e.length&&(t=0),Vp(t)}function Uv(){G.btnConfirmCancel.addEventListener("click",dB),G.confirmBackdrop.addEventListener("click",dB),G.btnConfirmOk.addEventListener("click",async()=>{if(W.confirmAction){const n=W.confirmAction;dB(),await n()}})}function Mp({title:n,message:e,onConfirm:t}){G.confirmTitle.textContent=n,G.confirmMessage.textContent=e,W.confirmAction=t,G.confirmModal.classList.remove("hidden")}function dB(){G.confirmModal.classList.add("hidden"),W.confirmAction=null}function Gp(n,e){Mp({title:"Delete Photo?",message:`Are you sure you want to permanently delete "${n.filename}"? This will remove the image file from Firebase Storage and its Firestore metadata.`,onConfirm:async()=>{try{await xp(n,W.currentUser.uid),W.selectedPhotoIds.delete(n.id),Qr(),_t(`"${n.filename}" deleted successfully.`,"success"),e&&e()}catch(t){_t("Failed to delete photo: "+t.message,"error")}}})}function _t(n,e="info"){const t=document.createElement("div");t.className=`toast ${e}`,t.textContent=n,G.toastContainer.appendChild(t),setTimeout(()=>{t.style.opacity="0",t.style.transform="translateY(12px)",t.style.transition="all 0.25s ease",setTimeout(()=>{t.remove()},250)},3500)}function Up(n){if(!n||n===0)return"0 B";const e=1024,t=["B","KB","MB","GB"],r=Math.floor(Math.log(n)/Math.log(e));return parseFloat((n/Math.pow(e,r)).toFixed(1))+" "+t[r]}function Hp(n){if(!n)return"Just now";try{return new Date(n).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return"Recent"}}function Hs(n){return n?n.replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e]||e):""}Ov();
