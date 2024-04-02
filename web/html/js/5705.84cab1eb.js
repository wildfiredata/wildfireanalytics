"use strict";(self["webpackChunkwildfire"]=self["webpackChunkwildfire"]||[]).push([[5705],{95705:function(e,t,n){n.d(t,{Z:function(){return f}});var i=function(){var e=this,t=e._self._c;return t("div",{ref:"echartsRef",staticClass:"echartsContainer",style:{width:e.width,height:e.height},attrs:{id:e.id}})},r=[],o=n(16084),a=n.n(o);const s=a()();var l={model:{prop:"modelvalue",event:"modelchange"},props:{modelvalue:{type:String},id:{type:String,default:"echartsId"},width:{type:String,default:"100%"},height:{type:String,default:"100%"},option:{type:Object,reqiured:!0},containerId:{type:String,reqiured:!0}},data(){return{echartsObj:null,debounceTimer:null}},watch:{option:{handler(e,t){t||this.initialize(),this.echartsObj&&e&&(this.echartsObj.setOption(e,!0),this.handleResize())},deep:!0}},created(){},mounted(){this.initialize()},beforeDestroy(){window.removeEventListener("resize",this.handleResize);var e=document.getElementById(this.containerId);this.containerId&&e&&s&&s.uninstall(document.getElementById(this.containerId))},methods:{handleResize(){this.echartsObj&&this.echartsObj.resize()},initialize(){this.option&&(this.echartsObj=this.$echarts.init(this.$refs.echartsRef),this.echartsObj.setOption(this.option,!0),window.addEventListener("resize",this.handleResize),s.listenTo(document.getElementById(this.containerId),(()=>{this.handleResize()})))}},computed:{}},d=l,c=n(1001),u=(0,c.Z)(d,i,r,!1,null,"01db88fc",null),f=u.exports},28845:function(e,t,n){n(57658);var i=n(41373);function r(){var e={},t=0,n=0,i=0;function r(r,o){o||(o=r,r=0),r>n?n=r:r<i&&(i=r),e[r]||(e[r]=[]),e[r].push(o),t++}function o(){for(var t=i;t<=n;t++)for(var r=e[t],o=0;o<r.length;o++){var a=r[o];a()}}function a(){return t}return{add:r,process:o,size:a}}e.exports=function(e){e=e||{};var t=e.reporter,n=i.getOption(e,"async",!0),o=i.getOption(e,"auto",!0);o&&!n&&(t&&t.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),n=!0);var a,s=r(),l=!1;function d(e,t){!l&&o&&n&&0===s.size()&&f(),s.add(e,t)}function c(){l=!0;while(s.size()){var e=s;s=r(),e.process()}l=!1}function u(e){l||(void 0===e&&(e=n),a&&(h(a),a=null),e?f():c())}function f(){a=p(c)}function h(e){var t=clearTimeout;return t(e)}function p(e){var t=function(e){return setTimeout(e,0)};return t(e)}return{add:d,force:u}}},41373:function(e){var t=e.exports={};function n(e,t,n){var i=e[t];return void 0!==i&&null!==i||void 0===n?i:n}t.getOption=n},2499:function(e){var t=e.exports={};t.isIE=function(e){function t(){var e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("msie")||-1!==e.indexOf("trident")||-1!==e.indexOf(" edge/")}if(!t())return!1;if(!e)return!0;var n=function(){var e,t=3,n=document.createElement("div"),i=n.getElementsByTagName("i");do{n.innerHTML="\x3c!--[if gt IE "+ ++t+"]><i></i><![endif]--\x3e"}while(i[0]);return t>4?t:e}();return e===n},t.isLegacyOpera=function(){return!!window.opera}},18485:function(e){var t=e.exports={};t.forEach=function(e,t){for(var n=0;n<e.length;n++){var i=t(e[n]);if(i)return i}}},58862:function(e,t,n){var i=n(2499);e.exports=function(e){e=e||{};var t=e.reporter,n=e.batchProcessor,r=e.stateHandler.getState;if(!t)throw new Error("Missing required dependency: reporter.");function o(e,t){function n(){t(e)}if(i.isIE(8))r(e).object={proxy:n},e.attachEvent("onresize",n);else{var o=l(e);if(!o)throw new Error("Element is not detectable by this strategy.");o.contentDocument.defaultView.addEventListener("resize",n)}}function a(t){var n=e.important?" !important; ":"; ";return(t.join(n)+n).trim()}function s(e,o,s){s||(s=o,o=e,e=null),e=e||{};e.debug;function l(o,s){var l=a(["display: block","position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none","padding: 0","margin: 0","opacity: 0","z-index: -1000","pointer-events: none"]),d=!1,c=window.getComputedStyle(o),u=o.offsetWidth,f=o.offsetHeight;function h(){function n(){if("static"===c.position){o.style.setProperty("position","relative",e.important?"important":"");var n=function(t,n,i,r){function o(e){return e.replace(/[^-\d\.]/g,"")}var a=i[r];"auto"!==a&&"0"!==o(a)&&(t.warn("An element that is positioned static has style."+r+"="+a+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+r+" will be set to 0. Element: ",n),n.style.setProperty(r,"0",e.important?"important":""))};n(t,o,c,"top"),n(t,o,c,"right"),n(t,o,c,"bottom"),n(t,o,c,"left")}}function a(){function e(t,n){if(!t.contentDocument){var i=r(t);return i.checkForObjectDocumentTimeoutId&&window.clearTimeout(i.checkForObjectDocumentTimeoutId),void(i.checkForObjectDocumentTimeoutId=setTimeout((function(){i.checkForObjectDocumentTimeoutId=0,e(t,n)}),100))}n(t.contentDocument)}d||n();var t=this;e(t,(function(e){s(o)}))}""!==c.position&&(n(c),d=!0);var u=document.createElement("object");u.style.cssText=l,u.tabIndex=-1,u.type="text/html",u.setAttribute("aria-hidden","true"),u.onload=a,i.isIE()||(u.data="about:blank"),r(o)&&(o.appendChild(u),r(o).object=u,i.isIE()&&(u.data="about:blank"))}r(o).startSize={width:u,height:f},n?n.add(h):h()}i.isIE(8)?s(o):l(o,s)}function l(e){return r(e).object}function d(e){if(r(e)){var t=l(e);t&&(i.isIE(8)?e.detachEvent("onresize",t.proxy):e.removeChild(t),r(e).checkForObjectDocumentTimeoutId&&window.clearTimeout(r(e).checkForObjectDocumentTimeoutId),delete r(e).object)}}return{makeDetectable:s,addListener:o,uninstall:d}}},28197:function(e,t,n){n(57658),n(30541);var i=n(18485).forEach;e.exports=function(e){e=e||{};var t=e.reporter,n=e.batchProcessor,r=e.stateHandler.getState,o=(e.stateHandler.hasState,e.idHandler);if(!n)throw new Error("Missing required dependency: batchProcessor");if(!t)throw new Error("Missing required dependency: reporter.");var a=u(),s="erd_scroll_detection_scrollbar_style",l="erd_scroll_detection_container";function d(e){f(e,s,l)}function c(t){var n=e.important?" !important; ":"; ";return(t.join(n)+n).trim()}function u(){var e=500,t=500,n=document.createElement("div");n.style.cssText=c(["position: absolute","width: "+2*e+"px","height: "+2*t+"px","visibility: hidden","margin: 0","padding: 0"]);var i=document.createElement("div");i.style.cssText=c(["position: absolute","width: "+e+"px","height: "+t+"px","overflow: scroll","visibility: none","top: "+3*-e+"px","left: "+3*-t+"px","visibility: hidden","margin: 0","padding: 0"]),i.appendChild(n),document.body.insertBefore(i,document.body.firstChild);var r=e-i.clientWidth,o=t-i.clientHeight;return document.body.removeChild(i),{width:r,height:o}}function f(e,t,n){function i(n,i){i=i||function(t){e.head.appendChild(t)};var r=e.createElement("style");return r.innerHTML=n,r.id=t,i(r),r}if(!e.getElementById(t)){var r=n+"_animation",o=n+"_animation_active",a="/* Created by the element-resize-detector library. */\n";a+="."+n+" > div::-webkit-scrollbar { "+c(["display: none"])+" }\n\n",a+="."+o+" { "+c(["-webkit-animation-duration: 0.1s","animation-duration: 0.1s","-webkit-animation-name: "+r,"animation-name: "+r])+" }\n",a+="@-webkit-keyframes "+r+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",a+="@keyframes "+r+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",i(a)}}function h(e){e.className+=" "+l+"_animation_active"}function p(e,n,i){if(e.addEventListener)e.addEventListener(n,i);else{if(!e.attachEvent)return t.error("[scroll] Don't know how to add event listeners.");e.attachEvent("on"+n,i)}}function m(e,n,i){if(e.removeEventListener)e.removeEventListener(n,i);else{if(!e.detachEvent)return t.error("[scroll] Don't know how to remove event listeners.");e.detachEvent("on"+n,i)}}function v(e){return r(e).container.childNodes[0].childNodes[0].childNodes[0]}function g(e){return r(e).container.childNodes[0].childNodes[0].childNodes[1]}function b(e,t){var n=r(e).listeners;if(!n.push)throw new Error("Cannot add listener to an element that is not detectable.");r(e).listeners.push(t)}function y(e,s,d){function u(){if(e.debug){var n=Array.prototype.slice.call(arguments);if(n.unshift(o.get(s),"Scroll: "),t.log.apply)t.log.apply(null,n);else for(var i=0;i<n.length;i++)t.log(n[i])}}function f(e){function t(e){var t=e.getRootNode&&e.getRootNode().contains(e);return e===e.ownerDocument.body||e.ownerDocument.body.contains(e)||t}return!t(e)||null===window.getComputedStyle(e)}function m(e){var t=r(e).container.childNodes[0],n=window.getComputedStyle(t);return!n.width||-1===n.width.indexOf("px")}function b(){var e=window.getComputedStyle(s),t={};return t.position=e.position,t.width=s.offsetWidth,t.height=s.offsetHeight,t.top=e.top,t.right=e.right,t.bottom=e.bottom,t.left=e.left,t.widthCSS=e.width,t.heightCSS=e.height,t}function y(){var e=b();r(s).startSize={width:e.width,height:e.height},u("Element start size",r(s).startSize)}function w(){r(s).listeners=[]}function x(){if(u("storeStyle invoked."),r(s)){var e=b();r(s).style=e}else u("Aborting because element has been uninstalled")}function E(e,t,n){r(e).lastWidth=t,r(e).lastHeight=n}function S(e){return v(e).childNodes[0]}function k(){return 2*a.width+1}function z(){return 2*a.height+1}function A(e){return e+10+k()}function I(e){return e+10+z()}function O(e){return 2*e+k()}function T(e){return 2*e+z()}function D(e,t,n){var i=v(e),r=g(e),o=A(t),a=I(n),s=O(t),l=T(n);i.scrollLeft=o,i.scrollTop=a,r.scrollLeft=s,r.scrollTop=l}function C(){var e=r(s).container;if(!e){e=document.createElement("div"),e.className=l,e.style.cssText=c(["visibility: hidden","display: inline","width: 0px","height: 0px","z-index: -1","overflow: hidden","margin: 0","padding: 0"]),r(s).container=e,h(e),s.appendChild(e);var t=function(){r(s).onRendered&&r(s).onRendered()};p(e,"animationstart",t),r(s).onAnimationStart=t}return e}function L(){function n(){var n=r(s).style;if("static"===n.position){s.style.setProperty("position","relative",e.important?"important":"");var i=function(e,t,n,i){function r(e){return e.replace(/[^-\d\.]/g,"")}var o=n[i];"auto"!==o&&"0"!==r(o)&&(e.warn("An element that is positioned static has style."+i+"="+o+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",t),t.style[i]=0)};i(t,s,n,"top"),i(t,s,n,"right"),i(t,s,n,"bottom"),i(t,s,n,"left")}}function i(e,t,n,i){return e=e?e+"px":"0",t=t?t+"px":"0",n=n?n+"px":"0",i=i?i+"px":"0",["left: "+e,"top: "+t,"right: "+i,"bottom: "+n]}if(u("Injecting elements"),r(s)){n();var o=r(s).container;o||(o=C());var d=a.width,f=a.height,h=c(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden","width: 100%","height: 100%","left: 0px","top: 0px"]),m=c(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden"].concat(i(-(1+d),-(1+f),-f,-d))),v=c(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),g=c(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),b=c(["position: absolute","left: 0","top: 0"]),y=c(["position: absolute","width: 200%","height: 200%"]),w=document.createElement("div"),x=document.createElement("div"),E=document.createElement("div"),S=document.createElement("div"),k=document.createElement("div"),z=document.createElement("div");w.dir="ltr",w.style.cssText=h,w.className=l,x.className=l,x.style.cssText=m,E.style.cssText=v,S.style.cssText=b,k.style.cssText=g,z.style.cssText=y,E.appendChild(S),k.appendChild(z),x.appendChild(E),x.appendChild(k),w.appendChild(x),o.appendChild(w),p(E,"scroll",A),p(k,"scroll",I),r(s).onExpandScroll=A,r(s).onShrinkScroll=I}else u("Aborting because element has been uninstalled");function A(){var e=r(s);e&&e.onExpand?e.onExpand():u("Aborting expand scroll handler: element has been uninstalled")}function I(){var e=r(s);e&&e.onShrink?e.onShrink():u("Aborting shrink scroll handler: element has been uninstalled")}}function j(){function a(t,n,i){var r=S(t),o=A(n),a=I(i);r.style.setProperty("width",o+"px",e.important?"important":""),r.style.setProperty("height",a+"px",e.important?"important":"")}function l(i){var l=s.offsetWidth,c=s.offsetHeight,f=l!==r(s).lastWidth||c!==r(s).lastHeight;u("Storing current size",l,c),E(s,l,c),n.add(0,(function(){if(f)if(r(s))if(d()){if(e.debug){var n=s.offsetWidth,i=s.offsetHeight;n===l&&i===c||t.warn(o.get(s),"Scroll: Size changed before updating detector elements.")}a(s,l,c)}else u("Aborting because element container has not been initialized");else u("Aborting because element has been uninstalled")})),n.add(1,(function(){r(s)?d()?D(s,l,c):u("Aborting because element container has not been initialized"):u("Aborting because element has been uninstalled")})),f&&i&&n.add(2,(function(){r(s)?d()?i():u("Aborting because element container has not been initialized"):u("Aborting because element has been uninstalled")}))}function d(){return!!r(s).container}function c(){function e(){return void 0===r(s).lastNotifiedWidth}u("notifyListenersIfNeeded invoked");var t=r(s);return e()&&t.lastWidth===t.startSize.width&&t.lastHeight===t.startSize.height?u("Not notifying: Size is the same as the start size, and there has been no notification yet."):t.lastWidth===t.lastNotifiedWidth&&t.lastHeight===t.lastNotifiedHeight?u("Not notifying: Size already notified"):(u("Current size not notified, notifying..."),t.lastNotifiedWidth=t.lastWidth,t.lastNotifiedHeight=t.lastHeight,void i(r(s).listeners,(function(e){e(s)})))}function f(){if(u("startanimation triggered."),m(s))u("Ignoring since element is still unrendered...");else{u("Element rendered.");var e=v(s),t=g(s);0!==e.scrollLeft&&0!==e.scrollTop&&0!==t.scrollLeft&&0!==t.scrollTop||(u("Scrollbars out of sync. Updating detector elements..."),l(c))}}function h(){u("Scroll detected."),m(s)?u("Scroll event fired while unrendered. Ignoring..."):l(c)}if(u("registerListenersAndPositionElements invoked."),r(s)){r(s).onRendered=f,r(s).onExpand=h,r(s).onShrink=h;var p=r(s).style;a(s,p.width,p.height)}else u("Aborting because element has been uninstalled")}function H(){if(u("finalizeDomMutation invoked."),r(s)){var e=r(s).style;E(s,e.width,e.height),D(s,e.width,e.height)}else u("Aborting because element has been uninstalled")}function N(){d(s)}function W(){u("Installing..."),w(),y(),n.add(0,x),n.add(1,L),n.add(2,j),n.add(3,H),n.add(4,N)}d||(d=s,s=e,e=null),e=e||{},u("Making detectable..."),f(s)?(u("Element is detached"),C(),u("Waiting until element is attached..."),r(s).onRendered=function(){u("Element is now attached"),W()}):W()}function w(e){var t=r(e);t&&(t.onExpandScroll&&m(v(e),"scroll",t.onExpandScroll),t.onShrinkScroll&&m(g(e),"scroll",t.onShrinkScroll),t.onAnimationStart&&m(t.container,"animationstart",t.onAnimationStart),t.container&&e.removeChild(t.container))}return d(window.document),{makeDetectable:y,addListener:b,uninstall:w,initDocument:d}}},16084:function(e,t,n){n(57658);var i=n(18485).forEach,r=n(45048),o=n(48655),a=n(15509),s=n(56186),l=n(49009),d=n(2499),c=n(28845),u=n(50544),f=n(58862),h=n(28197);function p(e){return Array.isArray(e)||void 0!==e.length}function m(e){if(Array.isArray(e))return e;var t=[];return i(e,(function(e){t.push(e)})),t}function v(e){return e&&1===e.nodeType}function g(e,t,n){var i=e[t];return void 0!==i&&null!==i||void 0===n?i:n}e.exports=function(e){var t;if(e=e||{},e.idHandler)t={get:function(t){return e.idHandler.get(t,!0)},set:e.idHandler.set};else{var n=a(),b=s({idGenerator:n,stateHandler:u});t=b}var y=e.reporter;if(!y){var w=!1===y;y=l(w)}var x=g(e,"batchProcessor",c({reporter:y})),E={};E.callOnAdd=!!g(e,"callOnAdd",!0),E.debug=!!g(e,"debug",!1);var S,k=o(t),z=r({stateHandler:u}),A=g(e,"strategy","object"),I=g(e,"important",!1),O={reporter:y,batchProcessor:x,stateHandler:u,idHandler:t,important:I};if("scroll"===A&&(d.isLegacyOpera()?(y.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),A="object"):d.isIE(9)&&(y.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),A="object")),"scroll"===A)S=h(O);else{if("object"!==A)throw new Error("Invalid strategy name: "+A);S=f(O)}var T={};function D(e,n,r){function o(e){var t=k.get(e);i(t,(function(t){t(e)}))}function a(e,t,n){k.add(t,n),e&&n(t)}if(r||(r=n,n=e,e={}),!n)throw new Error("At least one element required.");if(!r)throw new Error("Listener required.");if(v(n))n=[n];else{if(!p(n))return y.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");n=m(n)}var s=0,l=g(e,"callOnAdd",E.callOnAdd),d=g(e,"onReady",(function(){})),c=g(e,"debug",E.debug);i(n,(function(e){u.getState(e)||(u.initState(e),t.set(e));var f=t.get(e);if(c&&y.log("Attaching listener to element",f,e),!z.isDetectable(e))return c&&y.log(f,"Not detectable."),z.isBusy(e)?(c&&y.log(f,"System busy making it detectable"),a(l,e,r),T[f]=T[f]||[],void T[f].push((function(){s++,s===n.length&&d()}))):(c&&y.log(f,"Making detectable..."),z.markBusy(e,!0),S.makeDetectable({debug:c,important:I},e,(function(e){if(c&&y.log(f,"onElementDetectable"),u.getState(e)){z.markAsDetectable(e),z.markBusy(e,!1),S.addListener(e,o),a(l,e,r);var t=u.getState(e);if(t&&t.startSize){var h=e.offsetWidth,p=e.offsetHeight;t.startSize.width===h&&t.startSize.height===p||o(e)}T[f]&&i(T[f],(function(e){e()}))}else c&&y.log(f,"Element uninstalled before being detectable.");delete T[f],s++,s===n.length&&d()})));c&&y.log(f,"Already detecable, adding listener."),a(l,e,r),s++})),s===n.length&&d()}function C(e){if(!e)return y.error("At least one element is required.");if(v(e))e=[e];else{if(!p(e))return y.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");e=m(e)}i(e,(function(e){k.removeAllListeners(e),S.uninstall(e),u.cleanState(e)}))}function L(e){S.initDocument&&S.initDocument(e)}return{listenTo:D,removeListener:k.removeListener,removeAllListeners:k.removeAllListeners,uninstall:C,initDocument:L}}},45048:function(e){e.exports=function(e){var t=e.stateHandler.getState;function n(e){var n=t(e);return n&&!!n.isDetectable}function i(e){t(e).isDetectable=!0}function r(e){return!!t(e).busy}function o(e,n){t(e).busy=!!n}return{isDetectable:n,markAsDetectable:i,isBusy:r,markBusy:o}}},15509:function(e){e.exports=function(){var e=1;function t(){return e++}return{generate:t}}},56186:function(e){e.exports=function(e){var t=e.idGenerator,n=e.stateHandler.getState;function i(e){var t=n(e);return t&&void 0!==t.id?t.id:null}function r(e){var i=n(e);if(!i)throw new Error("setId required the element to have a resize detection state.");var r=t.generate();return i.id=r,r}return{get:i,set:r}}},48655:function(e,t,n){n(57658),e.exports=function(e){var t={};function n(n){var i=e.get(n);return void 0===i?[]:t[i]||[]}function i(n,i){var r=e.get(n);t[r]||(t[r]=[]),t[r].push(i)}function r(e,t){for(var i=n(e),r=0,o=i.length;r<o;++r)if(i[r]===t){i.splice(r,1);break}}function o(e){var t=n(e);t&&(t.length=0)}return{get:n,add:i,removeListener:r,removeAllListeners:o}}},49009:function(e){e.exports=function(e){function t(){}var n={log:t,warn:t,error:t};if(!e&&window.console){var i=function(e,t){e[t]=function(){var e=console[t];if(e.apply)e.apply(console,arguments);else for(var n=0;n<arguments.length;n++)e(arguments[n])}};i(n,"log"),i(n,"warn"),i(n,"error")}return n}},50544:function(e){var t="_erd";function n(e){return e[t]={},i(e)}function i(e){return e[t]}function r(e){delete e[t]}e.exports={initState:n,getState:i,cleanState:r}}}]);