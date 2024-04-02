"use strict";(self["webpackChunkwildfire"]=self["webpackChunkwildfire"]||[]).push([[3581],{83581:function(e,t,i){i.d(t,{F:function(){return S},X:function(){return _}});i(57658);var s=Object.defineProperty,n=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,l=(e,t,i)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,p=(e,t)=>{for(var i in t||(t={}))o.call(t,i)&&l(e,i,t[i]);if(r)for(var i of r(t))h.call(t,i)&&l(e,i,t[i]);return e},d=(e,t)=>n(e,a(t)),u=(e,t)=>{var i={};for(var s in e)o.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&r)for(var s of r(e))t.indexOf(s)<0&&h.call(e,s)&&(i[s]=e[s]);return i};function c(e,t,i,s,n,a,r,o){var h,l="function"===typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=i,l._compiled=!0),s&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),r?(h=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=h):n&&(h=o?function(){n.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:n),h)if(l.functional){l._injectStyles=h;var p=l.render;l.render=function(e,t){return h.call(t),p(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,h):[h]}return{exports:e,options:l}}const m={name:"splitpanes",props:{horizontal:{type:Boolean},pushOtherPanes:{type:Boolean,default:!0},dblClickSplitter:{type:Boolean,default:!0},rtl:{type:Boolean,default:!1},firstSplitter:{type:Boolean}},provide(){return{requestUpdate:this.requestUpdate,onPaneAdd:this.onPaneAdd,onPaneRemove:this.onPaneRemove,onPaneClick:this.onPaneClick}},data:()=>({container:null,ready:!1,panes:[],touch:{mouseDown:!1,dragging:!1,activeSplitter:null},splitterTaps:{splitter:null,timeoutId:null}}),computed:{panesCount(){return this.panes.length},indexedPanes(){return this.panes.reduce(((e,t)=>(e[t.id]=t)&&e),{})}},methods:{updatePaneComponents(){this.panes.forEach((e=>{e.update&&e.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[e.id].size}%`})}))},bindEvents(){document.addEventListener("mousemove",this.onMouseMove,{passive:!1}),document.addEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.addEventListener("touchmove",this.onMouseMove,{passive:!1}),document.addEventListener("touchend",this.onMouseUp))},unbindEvents(){document.removeEventListener("mousemove",this.onMouseMove,{passive:!1}),document.removeEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.removeEventListener("touchmove",this.onMouseMove,{passive:!1}),document.removeEventListener("touchend",this.onMouseUp))},onMouseDown(e,t){this.bindEvents(),this.touch.mouseDown=!0,this.touch.activeSplitter=t},onMouseMove(e){this.touch.mouseDown&&(e.preventDefault(),this.touch.dragging=!0,this.calculatePanesSize(this.getCurrentMouseDrag(e)),this.$emit("resize",this.panes.map((e=>({min:e.min,max:e.max,size:e.size})))))},onMouseUp(){this.touch.dragging&&this.$emit("resized",this.panes.map((e=>({min:e.min,max:e.max,size:e.size})))),this.touch.mouseDown=!1,setTimeout((()=>{this.touch.dragging=!1,this.unbindEvents()}),100)},onSplitterClick(e,t){"ontouchstart"in window&&(e.preventDefault(),this.dblClickSplitter&&(this.splitterTaps.splitter===t?(clearTimeout(this.splitterTaps.timeoutId),this.splitterTaps.timeoutId=null,this.onSplitterDblClick(e,t),this.splitterTaps.splitter=null):(this.splitterTaps.splitter=t,this.splitterTaps.timeoutId=setTimeout((()=>{this.splitterTaps.splitter=null}),500)))),this.touch.dragging||this.$emit("splitter-click",this.panes[t])},onSplitterDblClick(e,t){let i=0;this.panes=this.panes.map(((e,s)=>(e.size=s===t?e.max:e.min,s!==t&&(i+=e.min),e))),this.panes[t].size-=i,this.$emit("pane-maximize",this.panes[t])},onPaneClick(e,t){this.$emit("pane-click",this.indexedPanes[t])},getCurrentMouseDrag(e){const t=this.container.getBoundingClientRect(),{clientX:i,clientY:s}="ontouchstart"in window&&e.touches?e.touches[0]:e;return{x:i-t.left,y:s-t.top}},getCurrentDragPercentage(e){e=e[this.horizontal?"y":"x"];const t=this.container[this.horizontal?"clientHeight":"clientWidth"];return this.rtl&&!this.horizontal&&(e=t-e),100*e/t},calculatePanesSize(e){const t=this.touch.activeSplitter;let i={prevPanesSize:this.sumPrevPanesSize(t),nextPanesSize:this.sumNextPanesSize(t),prevReachedMinPanes:0,nextReachedMinPanes:0};const s=0+(this.pushOtherPanes?0:i.prevPanesSize),n=100-(this.pushOtherPanes?0:i.nextPanesSize),a=Math.max(Math.min(this.getCurrentDragPercentage(e),n),s);let r=[t,t+1],o=this.panes[r[0]]||null,h=this.panes[r[1]]||null;const l=o.max<100&&a>=o.max+i.prevPanesSize,p=h.max<100&&a<=100-(h.max+this.sumNextPanesSize(t+1));if(l||p)l?(o.size=o.max,h.size=Math.max(100-o.max-i.prevPanesSize-i.nextPanesSize,0)):(o.size=Math.max(100-h.max-i.prevPanesSize-this.sumNextPanesSize(t+1),0),h.size=h.max);else{if(this.pushOtherPanes){const e=this.doPushOtherPanes(i,a);if(!e)return;({sums:i,panesToResize:r}=e),o=this.panes[r[0]]||null,h=this.panes[r[1]]||null}null!==o&&(o.size=Math.min(Math.max(a-i.prevPanesSize-i.prevReachedMinPanes,o.min),o.max)),null!==h&&(h.size=Math.min(Math.max(100-a-i.nextPanesSize-i.nextReachedMinPanes,h.min),h.max))}},doPushOtherPanes(e,t){const i=this.touch.activeSplitter,s=[i,i+1];return t<e.prevPanesSize+this.panes[s[0]].min&&(s[0]=this.findPrevExpandedPane(i).index,e.prevReachedMinPanes=0,s[0]<i&&this.panes.forEach(((t,n)=>{n>s[0]&&n<=i&&(t.size=t.min,e.prevReachedMinPanes+=t.min)})),e.prevPanesSize=this.sumPrevPanesSize(s[0]),void 0===s[0])?(e.prevReachedMinPanes=0,this.panes[0].size=this.panes[0].min,this.panes.forEach(((t,s)=>{s>0&&s<=i&&(t.size=t.min,e.prevReachedMinPanes+=t.min)})),this.panes[s[1]].size=100-e.prevReachedMinPanes-this.panes[0].min-e.prevPanesSize-e.nextPanesSize,null):t>100-e.nextPanesSize-this.panes[s[1]].min&&(s[1]=this.findNextExpandedPane(i).index,e.nextReachedMinPanes=0,s[1]>i+1&&this.panes.forEach(((t,n)=>{n>i&&n<s[1]&&(t.size=t.min,e.nextReachedMinPanes+=t.min)})),e.nextPanesSize=this.sumNextPanesSize(s[1]-1),void 0===s[1])?(e.nextReachedMinPanes=0,this.panes[this.panesCount-1].size=this.panes[this.panesCount-1].min,this.panes.forEach(((t,s)=>{s<this.panesCount-1&&s>=i+1&&(t.size=t.min,e.nextReachedMinPanes+=t.min)})),this.panes[s[0]].size=100-e.prevPanesSize-e.nextReachedMinPanes-this.panes[this.panesCount-1].min-e.nextPanesSize,null):{sums:e,panesToResize:s}},sumPrevPanesSize(e){return this.panes.reduce(((t,i,s)=>t+(s<e?i.size:0)),0)},sumNextPanesSize(e){return this.panes.reduce(((t,i,s)=>t+(s>e+1?i.size:0)),0)},findPrevExpandedPane(e){const t=[...this.panes].reverse().find((t=>t.index<e&&t.size>t.min));return t||{}},findNextExpandedPane(e){const t=this.panes.find((t=>t.index>e+1&&t.size>t.min));return t||{}},checkSplitpanesNodes(){const e=Array.from(this.container.children);e.forEach((e=>{const t=e.classList.contains("splitpanes__pane"),i=e.classList.contains("splitpanes__splitter");if(!t&&!i)return e.parentNode.removeChild(e),void console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed.")}))},addSplitter(e,t,i=!1){const s=e-1,n=document.createElement("div");n.classList.add("splitpanes__splitter"),i||(n.onmousedown=e=>this.onMouseDown(e,s),"undefined"!==typeof window&&"ontouchstart"in window&&(n.ontouchstart=e=>this.onMouseDown(e,s)),n.onclick=e=>this.onSplitterClick(e,s+1)),this.dblClickSplitter&&(n.ondblclick=e=>this.onSplitterDblClick(e,s+1)),t.parentNode.insertBefore(n,t)},removeSplitter(e){e.onmousedown=void 0,e.onclick=void 0,e.ondblclick=void 0,e.parentNode.removeChild(e)},redoSplitters(){const e=Array.from(this.container.children);e.forEach((e=>{e.className.includes("splitpanes__splitter")&&this.removeSplitter(e)}));let t=0;e.forEach((e=>{e.className.includes("splitpanes__pane")&&(!t&&this.firstSplitter?this.addSplitter(t,e,!0):t&&this.addSplitter(t,e),t++)}))},requestUpdate(e){var t=e,{target:i}=t,s=u(t,["target"]);const n=this.indexedPanes[i._uid];Object.entries(s).forEach((([e,t])=>n[e]=t))},onPaneAdd(e){let t=-1;Array.from(e.$el.parentNode.children).some((i=>(i.className.includes("splitpanes__pane")&&t++,i===e.$el)));const i=parseFloat(e.minSize),s=parseFloat(e.maxSize);this.panes.splice(t,0,{id:e._uid,index:t,min:isNaN(i)?0:i,max:isNaN(s)?100:s,size:null===e.size?null:parseFloat(e.size),givenSize:e.size,update:e.update}),this.panes.forEach(((e,t)=>e.index=t)),this.ready&&this.$nextTick((()=>{this.redoSplitters(),this.resetPaneSizes({addedPane:this.panes[t]}),this.$emit("pane-add",{index:t,panes:this.panes.map((e=>({min:e.min,max:e.max,size:e.size})))})}))},onPaneRemove(e){const t=this.panes.findIndex((t=>t.id===e._uid)),i=this.panes.splice(t,1)[0];this.panes.forEach(((e,t)=>e.index=t)),this.$nextTick((()=>{this.redoSplitters(),this.resetPaneSizes({removedPane:d(p({},i),{index:t})}),this.$emit("pane-remove",{removed:i,panes:this.panes.map((e=>({min:e.min,max:e.max,size:e.size})))})}))},resetPaneSizes(e={}){e.addedPane||e.removedPane?this.panes.some((e=>null!==e.givenSize||e.min||e.max<100))?this.equalizeAfterAddOrRemove(e):this.equalize():this.initialPanesSizing(),this.ready&&this.$emit("resized",this.panes.map((e=>({min:e.min,max:e.max,size:e.size}))))},equalize(){const e=100/this.panesCount;let t=0,i=[],s=[];this.panes.forEach((n=>{n.size=Math.max(Math.min(e,n.max),n.min),t-=n.size,n.size>=n.max&&i.push(n.id),n.size<=n.min&&s.push(n.id)})),t>.1&&this.readjustSizes(t,i,s)},initialPanesSizing(){this.panesCount;let e=100,t=[],i=[],s=0;this.panes.forEach((n=>{e-=n.size,null!==n.size&&s++,n.size>=n.max&&t.push(n.id),n.size<=n.min&&i.push(n.id)}));let n=100;e>.1&&(this.panes.forEach((t=>{null===t.size&&(t.size=Math.max(Math.min(e/(this.panesCount-s),t.max),t.min)),n-=t.size})),n>.1&&this.readjustSizes(e,t,i))},equalizeAfterAddOrRemove({addedPane:e,removedPane:t}={}){let i=100/this.panesCount,s=0,n=[],a=[];e&&null!==e.givenSize&&(i=(100-e.givenSize)/(this.panesCount-1)),this.panes.forEach((e=>{s-=e.size,e.size>=e.max&&n.push(e.id),e.size<=e.min&&a.push(e.id)})),Math.abs(s)<.1||(this.panes.forEach((t=>{e&&null!==e.givenSize&&e.id===t.id||(t.size=Math.max(Math.min(i,t.max),t.min)),s-=t.size,t.size>=t.max&&n.push(t.id),t.size<=t.min&&a.push(t.id)})),s>.1&&this.readjustSizes(s,n,a))},readjustSizes(e,t,i){let s;s=e>0?e/(this.panesCount-t.length):e/(this.panesCount-i.length),this.panes.forEach(((n,a)=>{if(e>0&&!t.includes(n.id)){const t=Math.max(Math.min(n.size+s,n.max),n.min),i=t-n.size;e-=i,n.size=t}else if(!i.includes(n.id)){const t=Math.max(Math.min(n.size+s,n.max),n.min),i=t-n.size;e-=i,n.size=t}n.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[n.id].size}%`})})),Math.abs(e)>.1&&this.$nextTick((()=>{this.ready&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints.")}))}},watch:{panes:{deep:!0,immediate:!1,handler(){this.updatePaneComponents()}},horizontal(){this.updatePaneComponents()},firstSplitter(){this.redoSplitters()},dblClickSplitter(e){const t=[...this.container.querySelectorAll(".splitpanes__splitter")];t.forEach(((t,i)=>{t.ondblclick=e?e=>this.onSplitterDblClick(e,i):void 0}))}},beforeDestroy(){this.ready=!1},mounted(){this.container=this.$refs.container,this.checkSplitpanesNodes(),this.redoSplitters(),this.resetPaneSizes(),this.$emit("ready"),this.ready=!0},render(e){return e("div",{ref:"container",class:["splitpanes","splitpanes--"+(this.horizontal?"horizontal":"vertical"),{"splitpanes--dragging":this.touch.dragging}]},this.$slots.default)}};let z,v;const f={};var x=c(m,z,v,!1,P,null,null,null);function P(e){for(let t in f)this[t]=f[t]}var S=function(){return x.exports}(),g=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"splitpanes__pane",style:e.style,on:{click:function(t){return e.onPaneClick(t,e._uid)}}},[e._t("default")],2)},M=[];const C={name:"pane",inject:["requestUpdate","onPaneAdd","onPaneRemove","onPaneClick"],props:{size:{type:[Number,String],default:null},minSize:{type:[Number,String],default:0},maxSize:{type:[Number,String],default:100}},data:()=>({style:{}}),mounted(){this.onPaneAdd(this)},beforeDestroy(){this.onPaneRemove(this)},methods:{update(e){this.style=e}},computed:{sizeNumber(){return this.size||0===this.size?parseFloat(this.size):null},minSizeNumber(){return parseFloat(this.minSize)},maxSizeNumber(){return parseFloat(this.maxSize)}},watch:{sizeNumber(e){this.requestUpdate({target:this,size:e})},minSizeNumber(e){this.requestUpdate({target:this,min:e})},maxSizeNumber(e){this.requestUpdate({target:this,max:e})}}},b={};var y=c(C,g,M,!1,E,null,null,null);function E(e){for(let t in b)this[t]=b[t]}var _=function(){return y.exports}()}}]);