"use strict";(self["webpackChunkwildfire"]=self["webpackChunkwildfire"]||[]).push([[9984],{74855:function(t,e,i){i.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("span",{ref:"me"},[e("input",{staticClass:"inputDefaultClass",class:{titleSize:t.isTitle,mediumSize:t.isMedium,smallSize:t.isSmall,miniSize:t.isMini,fieldValue:!0,fieldControl:!0,warningBorder:t.isInvalid},attrs:{type:"text",placeholder:t.inputPlaceHolder},domProps:{value:t.valueText},on:{change:t.changeEvent}}),e("el-input",{staticStyle:{position:"fixed",width:"2000px",transform:"translateY(-9999px)"},attrs:{size:t.fontSize,readonly:""}},[e("span",{ref:"autowidthspan",class:{titleSize:t.isTitle},attrs:{slot:"prefix"},slot:"prefix"},[t._v(t._s(t.autowidthspanText))])])],1)},a=[],n=i(794),l={name:"EditLabel",model:{prop:"value",event:"input"},props:{value:{type:String},inputPlaceHolder:{String:String},isInvalid:{type:Boolean,default:!1},fontSize:{type:String,default:"medium"},autoWidth:{type:Boolean,default:!0}},data(){return{valueText:""}},watch:{value(t){this.valueText=t,this.$emit("change",t),this.autoWidthAdjust()}},created(){this.valueText=this.value},mounted(){this.autoWidthAdjust()},methods:{changeEvent(t){this.valueText=t.target.value,this.$emit("input",t.target.value),this.$emit("change",t.target.value),this.autoWidthAdjust()},autoWidthAdjust(t){this.autoWidth&&(n.Z.utils.Ignore(t),setTimeout((()=>{if(this.$refs.autowidthspan){var t=this.$refs.autowidthspan.getClientRects(),e=this.$refs.me,i=e.getElementsByClassName("inputDefaultClass")[0];if(t.length>0){var s=t[0].width+12;n.Z.utils.IsEmptyStr(this.inputPrefixIcon)||(s+=25),n.Z.utils.IsEmptyStr(this.inputSuffixIcon)||(s+=25),i.style.width=s+"px"}}}),10))}},computed:{autowidthspanText:function(){return this.valueText&&this.valueText.length>0?this.valueText:this.inputPlaceHolder},isMedium(){return"medium"==n.Z.utils.UnifiedElementFontSize(this.fontSize)},isSmall(){return"small"==n.Z.utils.UnifiedElementFontSize(this.fontSize)},isMini(){return"mini"==n.Z.utils.UnifiedElementFontSize(this.fontSize)},isTitle(){return"title"==this.fontSize}}},u=l,o=i(1001),r=(0,o.Z)(u,s,a,!1,null,"4dd8e01e",null),d=r.exports},9984:function(t,e,i){i.r(e),i.d(e,{default:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("div",[e("draggable",t._b({staticClass:"list-group",attrs:{tag:"ul"},on:{start:function(e){t.isDragging=!0},end:function(e){t.isDragging=!1}},model:{value:t.list,callback:function(e){t.list=e},expression:"list"}},"draggable",t.dragOptions,!1),[e("transition-group",{attrs:{type:"transition",name:"flip-list"}},t._l(t.list,(function(i){return e("li",{key:i.id,staticClass:"list-group-item"},[e("div",[e("b-icon",{attrs:{icon:"drag",size:"is-small"}}),e("EditLabel",{staticClass:"EditLabelClass",model:{value:i.name,callback:function(e){t.$set(i,"name",e)},expression:"element.name"}})],1)])})),0)],1),e("el-button",{on:{click:t.btn_click}},[t._v("获取列表")]),e("el-button",{on:{click:t.btn_click_add}},[t._v("加入")])],1)},a=[],n=i(74855),l=i(76983),u=i.n(l),o=i(63822),r={components:{draggable:u(),EditLabel:n.Z},data(){return{tempValue:"tempvalue",isDragging:!1,list:[{name:"John",id:"A"}]}},methods:{...(0,o.nv)({addProductToCart:"cart/addProductToCart"}),start(t){console.log(t)},end(t){console.log(t)},btn_click(){console.log(this.cartProducts)},btn_click_add(){console.log(this.addProductToCart({price:101}))}},computed:{...(0,o.Se)({cartProducts:"cart/cartProducts"}),dragOptions(){return{animation:0,group:"description",disabled:!1,ghostClass:"ghost"}}}},d=r,c=i(1001),h=(0,c.Z)(d,s,a,!1,null,"ceda4582",null),p=h.exports}}]);