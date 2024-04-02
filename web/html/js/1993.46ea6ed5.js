"use strict";(self["webpackChunkwildfire"]=self["webpackChunkwildfire"]||[]).push([[1993],{74855:function(e,t,i){i.d(t,{Z:function(){return u}});var r=function(){var e=this,t=e._self._c;return t("span",{ref:"me"},[t("input",{staticClass:"inputDefaultClass",class:{titleSize:e.isTitle,mediumSize:e.isMedium,smallSize:e.isSmall,miniSize:e.isMini,fieldValue:!0,fieldControl:!0,warningBorder:e.isInvalid},attrs:{type:"text",placeholder:e.inputPlaceHolder},domProps:{value:e.valueText},on:{change:e.changeEvent}}),t("el-input",{staticStyle:{position:"fixed",width:"2000px",transform:"translateY(-9999px)"},attrs:{size:e.fontSize,readonly:""}},[t("span",{ref:"autowidthspan",class:{titleSize:e.isTitle},attrs:{slot:"prefix"},slot:"prefix"},[e._v(e._s(e.autowidthspanText))])])],1)},o=[],a=i(794),n={name:"EditLabel",model:{prop:"value",event:"input"},props:{value:{type:String},inputPlaceHolder:{String:String},isInvalid:{type:Boolean,default:!1},fontSize:{type:String,default:"medium"},autoWidth:{type:Boolean,default:!0}},data(){return{valueText:""}},watch:{value(e){this.valueText=e,this.$emit("change",e),this.autoWidthAdjust()}},created(){this.valueText=this.value},mounted(){this.autoWidthAdjust()},methods:{changeEvent(e){this.valueText=e.target.value,this.$emit("input",e.target.value),this.$emit("change",e.target.value),this.autoWidthAdjust()},autoWidthAdjust(e){this.autoWidth&&(a.Z.utils.Ignore(e),setTimeout((()=>{if(this.$refs.autowidthspan){var e=this.$refs.autowidthspan.getClientRects(),t=this.$refs.me,i=t.getElementsByClassName("inputDefaultClass")[0];if(e.length>0){var r=e[0].width+12;a.Z.utils.IsEmptyStr(this.inputPrefixIcon)||(r+=25),a.Z.utils.IsEmptyStr(this.inputSuffixIcon)||(r+=25),i.style.width=r+"px"}}}),10))}},computed:{autowidthspanText:function(){return this.valueText&&this.valueText.length>0?this.valueText:this.inputPlaceHolder},isMedium(){return"medium"==a.Z.utils.UnifiedElementFontSize(this.fontSize)},isSmall(){return"small"==a.Z.utils.UnifiedElementFontSize(this.fontSize)},isMini(){return"mini"==a.Z.utils.UnifiedElementFontSize(this.fontSize)},isTitle(){return"title"==this.fontSize}}},s=n,l=i(1001),d=(0,l.Z)(s,r,o,!1,null,"4dd8e01e",null),u=d.exports},44849:function(e,t,i){i.r(t),i.d(t,{default:function(){return _}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"root"},[t("div",{staticClass:"content"},[t("el-page-header",{staticClass:"padding20",attrs:{content:e.$t("message.创建用户标签")},on:{back:e.goBack}}),t("div",{staticClass:"toolbar"}),t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"160px"}},[t("el-form-item",{attrs:{label:e.$t("message.用户标签显示名字"),prop:"label"}},[t("el-input",{on:{input:e.on_change_name},model:{value:e.ruleForm.label,callback:function(t){e.$set(e.ruleForm,"label",t)},expression:"ruleForm.label"}})],1),t("el-form-item",{attrs:{label:e.$t("message.用户标签名字"),prop:"name"}},[t("el-input",{attrs:{disabled:e.editing},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}},[t("template",{slot:"prepend"},[e._v(e._s(e.usertagPrependName))])],2)],1),t("el-form-item",{attrs:{label:e.$t("message.分析时区"),prop:"zone"}},[t("el-select",{attrs:{placeholder:e.$t("message.请选择默认分析时区")},model:{value:e.ruleForm.zone,callback:function(t){e.$set(e.ruleForm,"zone",t)},expression:"ruleForm.zone"}},e._l(e.zones,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:e.$t("message.创建方式"),prop:"mode"}},[t("el-select",{model:{value:e.ruleForm.mode,callback:function(t){e.$set(e.ruleForm,"mode",t)},expression:"ruleForm.mode"}},e._l(e.modes,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),t("div",{staticClass:"flexrowitemreverse mb-2"},[t("el-button",{on:{click:e.addNewTab}},[e._v(e._s(e.$t("message.添加标签值")))])],1),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading_saving,expression:"loading_saving"}],staticClass:"borderprimary1 mb10"},[t("b-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[e._l(e.tabs,(function(i){return[t("b-tab-item",{key:i.id,attrs:{value:i.id},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",{staticClass:"flexrowdir"},[t("EditLabel",{attrs:{isInvalid:!(i.label&&i.label.length>0),inputPlaceHolder:e.$t("message.{请输入标签值}")},model:{value:i.label,callback:function(t){e.$set(i,"label",t)},expression:"tab.label"}}),e.tabs.length>1?t("div",{on:{click:function(t){return e.closetab(i.id)}}},[t("b-icon",{staticClass:"tabclose",attrs:{size:"is-small",icon:"close"}})],1):e._e()],1)]},proxy:!0}],null,!0)},[t("div",{staticClass:"condview"},[t("ConditionGroup",{attrs:{group:i.tagValueGroup},scopedSlots:e._u([{key:"default",fn:function(i){return[t("div",{staticClass:"condipad"},[t("div",{staticClass:"condipadtitle"},[t("div",[t("span",[e._v(e._s(i.item.label))])]),t("b-button",{attrs:{size:"is-small","icon-left":"plus-circle"},on:{click:function(t){return e.addFilterRecord(i.item.condTypeGroup,i.item.label)}}},[e._v(e._s(e.$t("message.添加")))])],1),i.item.label===e.pub.def.UserTagTypeConditionFilter.UserTagTypeConditionFilterPropFilter?t("div",[t("PropConditionGroup",{attrs:{keepLast:!1,eventProps:[],userProps:e.userPropList,filters:i.item.condTypeGroup}})],1):e._e(),i.item.label===e.pub.def.UserTagTypeConditionFilter.UserTagTypeConditionFilterUserMetricFilter?t("div",[t("BehaviorMetricConditionGroup",{attrs:{keepLast:!1,eventGroupOp:e.eventList,userProps:e.userPropList},model:{value:i.item.condTypeGroup,callback:function(t){e.$set(i.item,"condTypeGroup",t)},expression:"slotProps.item.condTypeGroup"}})],1):e._e(),i.item.label===e.pub.def.UserTagTypeConditionFilter.UserTagTypeConditionFilterBehaviorSequnceFilter?t("div",[e.eventListLoadOk?t("EventConditionListGroup",{attrs:{eventList:e.EventListWithoutAny},model:{value:i.item.condTypeGroup,callback:function(t){e.$set(i.item,"condTypeGroup",t)},expression:"slotProps.item.condTypeGroup"}}):e._e()],1):e._e()])]}}],null,!0)})],1)])]}))],2)],1),t("b-field",{attrs:{label:e.$t("message.更新方式")}},[t("div",{staticClass:"refreshModeButtons"},[t("div",{staticClass:"ht60 flexrowcenter mr10"},[t("b-radio",{attrs:{"native-value":e.pub.def.RefreshMode.RefreshModeManual},model:{value:e.refreshMode,callback:function(t){e.refreshMode=t},expression:"refreshMode"}},[e._v(e._s(e.$t("message.手动")))]),t("b-radio",{attrs:{"native-value":e.pub.def.RefreshMode.RefreshModeDaily},model:{value:e.refreshMode,callback:function(t){e.refreshMode=t},expression:"refreshMode"}},[e._v(e._s(e.$t("message.自动")))])],1),t("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"ht60 flexrowcenter"},[t("el-time-select",{directives:[{name:"show",rawName:"v-show",value:e.refreshMode==e.pub.def.RefreshMode.RefreshModeDaily,expression:"refreshMode == pub.def.RefreshMode.RefreshModeDaily"}],attrs:{clearable:!1,"picker-options":{start:"00:00",step:"00:20",end:"23:45"},placeholder:e.$t("message.选择时间")},model:{value:e.refreshModeTime,callback:function(t){e.refreshModeTime=t},expression:"refreshModeTime"}})],1)])])],1),t("div",{staticClass:"flexrowitemreverse"},[t("el-button",{staticClass:"mr10",on:{click:e.goBack}},[e._v(e._s(e.$t("message.取消")))]),t("el-button",{staticClass:"mr10",attrs:{type:"primary",disabled:e.loading_saving},on:{click:function(t){return e.submitCreateProject("ruleForm")}}},[e._v(e._s(e.$t("message.创建")))])],1)])},o=[],a=(i(57658),i(794)),n=i(62147),s=i(16540),l=i(11115),d=i(74855),u=i(17818),c=i(90309),p=i(20178),h=i(55660),m=i(63822),g={components:{EditLabel:d.Z,ConditionGroup:u.Z,PropConditionGroup:c.Z,BehaviorMetricConditionGroup:p.Z,EventConditionListGroup:h.Z},data(){return{keepLast:!1,activeTab:"1",refreshMode:a.Z.def.RefreshMode.RefreshModeManual,refreshModeTime:"00:30",logicOp:a.Z.def.LogicOp.LogicOpAnd,userPropList:[],eventList:[],eventListLoadOk:!1,editing:!1,tabs:[],loading_saving:!1,zones:[],modes:[],filterGroup:{logicop:a.Z.def.LogicOp.LogicOpAnd,children:[{id:1,label:a.Z.def.UserTagTypeConditionFilter.UserTagTypeConditionFilterPropFilter,level:1,condTypeGroup:{logicop:a.Z.def.LogicOp.LogicOpAnd,children:[]}},{id:2,label:a.Z.def.UserTagTypeConditionFilter.UserTagTypeConditionFilterUserMetricFilter,level:1,condTypeGroup:{logicop:a.Z.def.LogicOp.LogicOpAnd,children:[]}},{id:3,label:a.Z.def.UserTagTypeConditionFilter.UserTagTypeConditionFilterBehaviorSequnceFilter,level:1,condTypeGroup:{logicop:a.Z.def.LogicOp.LogicOpAnd,children:[]}}]},ruleForm:{label:"",name:"",zone:8,mode:a.Z.def.UserTagType.UserTagTypeCondition},rules:{name:[{required:!0,message:this.$t("message.请输入项目名称"),trigger:"blur"},{min:2,max:36,message:this.$t("message.长度在 2 到 36 个字符"),trigger:"blur"}],zone:[{required:!0,message:this.$t("message.请选择分析时区"),trigger:"change"}]}}},created(){this.initialize()},mounted(){},methods:{initialize(){this.modes=a.Z.def.UserTagType.getLabelValueList(),this.zones=a.Z.def.TimeZone.getLabelValueList();var e=this.getCurrAppId(),t=n.Z.api.LoadUserProp(e),i=n.Z.api.LoadPlainEventList(e,!0),r=Promise.all([t,i]);r.then((e=>{this.userPropList=e[0],this.eventList=e[1],this.eventListLoadOk=!0;var t=this.$route.params;if(this.editing=!a.Z.utils.IsEmptyObj(t.client_data),this.editing){var i=t.client_data;i&&(this.refresh_mode=i.refresh_mode,this.update_time=i.update_time,this.logicOp=i.logic,this.tabs=i.tabs,this.ruleForm.label=i.label,this.ruleForm.name=i.name.replace(this.usertagPrependName,""))}else this.addNewTab()})).catch((e=>{a.Z.utils.Err(this,e)}))},parseConditionData(e){for(var t=[],i=0;i<e.length;i++){let e={};t.push(e)}return t},addNewTab(){this.tabs.push({tagValueGroup:a.Z.utils.DeepClone(this.filterGroup)});for(var e=0;e<this.tabs.length;e++)this.tabs[e].id=String(e+1);setTimeout((()=>{this.activeTab=String(this.tabs.length)}),100)},closetab(e){for(var t=0;t<this.tabs.length;t++)this.tabs[t].id===e&&this.tabs.splice(t,1);setTimeout((()=>{this.activeTab="1"}),100)},goBack(){this.$router.push({path:"./clienttag"})},on_change_name(){if(!this.editing){var e=(0,l.ZP)(this.ruleForm.label,{style:l.ZP.STYLE_FIRST_LETTER});this.ruleForm.name=e.join("")}},isAnyConitionInvalid(){for(var e=0;e<this.tabs.length;e++){if(a.Z.utils.IsEmptyStr(this.tabs[e].label))return!0;for(var t=0;t<this.tabs[e].tagValueGroup.children.length;t++)if(this.tabs[e].tagValueGroup.children[t].condTypeGroup&&this.tabs[e].tagValueGroup.children[t].condTypeGroup.children)for(var i=0;i<this.tabs[e].tagValueGroup.children[t].condTypeGroup.children.length;i++)if(this.tabs[e].tagValueGroup.children[t].condTypeGroup.children[i].record){if(this.tabs[e].tagValueGroup.children[t].condTypeGroup.children[i].record.warnMessage&&this.tabs[e].tagValueGroup.children[t].condTypeGroup.children[i].record.warnMessage.length>0)return!0}else if(this.tabs[e].tagValueGroup.children[t].condTypeGroup.children[i].children)for(var r=0;r<this.tabs[e].tagValueGroup.children[t].condTypeGroup.children[i].children.length;r++)if(this.tabs[e].tagValueGroup.children[t].condTypeGroup.children[i].children[r].record&&this.tabs[e].tagValueGroup.children[t].condTypeGroup.children[i].children[r].record.warnMessage&&this.tabs[e].tagValueGroup.children[t].condTypeGroup.children[i].children[r].record.warnMessage.length>0)return!0}return!1},getReqEventMatricCondi(e){e.combo=e.filterGroup;var t={date_range:e.timeRange,metric:n.Z.metric.VueEventMetricRecord2ApiEventRecord(e),did_event:e.did_event,op:e.cmp},i=[];return i.push(e.paramNumber1),i.push(e.paramNumber2),t.values=a.Z.utils.ParseStrListSafe(i),t},getConditionDataActionMetricFilter(e){a.Z.utils.Ignore(e);var t={action_metric_cond:[],combo:[]};if(e&&e.children&&e.children.length>0){t.logic=e.logicop;for(var i=0;i<e.children.length;i++)if(e.children[i].record){var r=this.getReqEventMatricCondi(e.children[i].record);t.action_metric_cond.push(r)}else if(e.children[i].children){for(var o={action_metric_cond:[],combo:[]},n=0;n<e.children[i].children.length;n++){var s=this.getReqEventMatricCondi(e.children[i].children[n].record);o.action_metric_cond.push(s)}t.combo.push(o)}}return t},getReqConditionDataBehaviorSequence(e){for(var t={date_range:e.time_range,event_list:[]},i=0;i<e.children.length;i++){let r={event:e.children[i].event,filterGroup:e.children[i].combo},o=n.Z.metric.VueEventFilterGroup2ApiEventFilter(r.event,r.filterGroup);t.event_list.push(o)}return t},getConditionDataBehaviorSequenceFilter(e){a.Z.utils.Ignore(e);var t={action_sequence:[]};if(e&&e.children&&e.children.length>0){t.logic=e.logicop;for(var i=0;i<e.children.length;i++)if(e.children[i].record){var r=this.getReqConditionDataBehaviorSequence(e.children[i].record);t.action_sequence.push(r)}}return t},getConditionData(){for(var e=[],t=0;t<this.tabs.length;t++){for(var i={tag_val:this.tabs[t].label},r=0;r<this.tabs[t].tagValueGroup.children.length;r++)this.tabs[t].tagValueGroup.children[r].label==a.Z.def.UserTagTypeConditionFilter.UserTagTypeConditionFilterPropFilter?i.prop_filter=n.Z.metric.VuePropFilterGroup2ApiPropFilterCombo(this.tabs[t].tagValueGroup.children[r].condTypeGroup):this.tabs[t].tagValueGroup.children[r].label==a.Z.def.UserTagTypeConditionFilter.UserTagTypeConditionFilterUserMetricFilter?i.action_combo=this.getConditionDataActionMetricFilter(this.tabs[t].tagValueGroup.children[r].condTypeGroup):this.tabs[t].tagValueGroup.children[r].label==a.Z.def.UserTagTypeConditionFilter.UserTagTypeConditionFilterBehaviorSequnceFilter&&(i.action_sequence_combo=this.getConditionDataBehaviorSequenceFilter(this.tabs[t].tagValueGroup.children[r].condTypeGroup));e.push(i)}return e},submitCreateProject(e){this.isAnyConitionInvalid()?a.Z.utils.Warn(this,this.$t("message.条件不合法")):this.$refs[e].validate((e=>{if(!e)return a.Z.utils.Warn(this,this.$t("message.条件不合法")),!1;var t={refresh_mode:this.refresh_mode,update_time:this.update_time,logic:this.logicOp,tabs:this.tabs},i=JSON.stringify(t);this.loading_saving=!0;var r={type:a.Z.def.UserTagType.UserTagTypeCondition,label:this.ruleForm.label,name:this.usertagPrependName+this.ruleForm.name,refresh_mode:this.refreshMode,update_time:this.refreshModeTime,zone:this.ruleForm.zone,app:this.getCurrAppId(),condi_data:this.getConditionData(),client_data:i,update_tag:this.editing};s.Z["new"]().add(r).then(function(e){a.Z.utils.Ignore(e),this.loading_saving=!1,this.goBack()}.bind(this)).catch(function(e){a.Z.utils.Err(this,e),this.loading_saving=!1}.bind(this)),this.$event.emit(a.Z.def.EventNames.ProjectListUpdate,1)}))},resetForm(e){this.$refs[e].resetFields()},addFilterRecord(e,t){console.log("addFilterRecord(group)",e),t==a.Z.def.UserTagTypeConditionFilter.UserTagTypeConditionFilterBehaviorSequnceFilter?a.Z.condx.GroupAdd(e,0,1,{}):a.Z.condx.GroupAdd(e,0,1,{record:{selectedOp:"="}})},on_click_add(e,t,i){a.Z.condx.GroupAdd(e,t,i,{name:"namelabel"})},on_click_trash(e,t){a.Z.condx.GroupRemove(e,t.id)},isObjProp(e){return e.indexOf(a.Z.def.PropDelimiter.ObjDelimiter)>-1&&-1===e.indexOf(a.Z.def.PropDelimiter.DimDelimiter)},isDimProp(e){return e.indexOf(a.Z.def.PropDelimiter.DimDelimiter)>-1},loadUserProp(){var e=this.getCurrAppId();n.Z.api.LoadUserProp(e).then((e=>{this.userPropList=e})).catch((e=>{a.Z.utils.Err(this,e)}))}},computed:{...(0,m.Se)({getCurrAppId:"system/getCurrAppId"}),usertagPrependName(){return"usertag_"+this.getCurrAppId()+"_"},EventListWithoutAny(){return this.eventList.filter((e=>e.value!=a.Z.def.AnyEventName))}}},f=g,v=i(1001),b=(0,v.Z)(f,r,o,!1,null,"79385e00",null),_=b.exports},1560:function(e,t,i){i.d(t,{Z:function(){return h}});var r=function(){var e=this,t=e._self._c;return t("div",{ref:"me",attrs:{id:"meClass"}},[t("div",[e.modelValueRef.icon&&e.modelValueRef.icon.length>0?t("b-icon",{staticClass:"mr10",attrs:{icon:e.icon,size:"is-small"}}):e._e(),t("span",[t("QuickDateTimeRangePicker",{staticClass:"mlr5",on:{change:e.on_change_time},model:{value:e.modelValueRef.time_range,callback:function(t){e.$set(e.modelValueRef,"time_range",t)},expression:"modelValueRef.time_range"}}),e._v(e._s(e.$t("message.依次做过"))+" ")],1)],1),e._l(e.modelValueRef.children,(function(i,r){return t("div",{key:i.id},[t("div",{staticClass:"flexrowitemstart"},[t("EventCondition",{staticClass:"mt8",attrs:{keepLast:!1,visibledelete:e.modelValueRef.children.length>1,eventList:e.eventList},on:{change:e.on_change_condition,delete_click:function(t){return e.delete_condition(i.id)}},model:{value:e.modelValueRef.children[r],callback:function(t){e.$set(e.modelValueRef.children,r,t)},expression:"modelValueRef.children[index]"}})],1)])})),t("div",[t("span",{staticClass:"span_button",on:{click:e.add_condition}},[t("b-icon",{attrs:{icon:"plus-circle",size:"is-small"}}),e._v(e._s(e.$t("message.添加事件")))],1)])],2)},o=[],a=i(9808),n=i(78333),s=i(794),l=i(63822),d={components:{EventCondition:n.Z,QuickDateTimeRangePicker:a.Z},model:{prop:"modelvalue",event:"modelvaluechange"},props:{keepLast:{type:Boolean,default:!0},favorites:{type:String,default:"aa"},modelvalue:{type:Object,default:function(){return{icon:"",time_range:{},children:[{id:0,event:"",combo:{logicop:s.Z.def.LogicOp.LogicOpAnd,children:[]}}]}}},eventList:{type:Array,default:()=>[],required:!0}},data(){return{initok:!1,loadingPropsOk:!1,modelValueRef:{}}},created(){this.init()},mounted(){},watch:{},methods:{init(){this.modelValueRef=this.modelvalue},add_condition(){console.log("add_condition"),s.Z.condx.GroupPushBack(this.modelValueRef,{combo:{children:[]}}),console.log("add_condition push",this.modelValueRef),this.confirm()},delete_condition(e){s.Z.condx.GroupRemove(this.modelValueRef,e)},on_change_condition(e){console.log("on_change_condition",e),this.confirm()},on_change_time(e){console.log("on_change_time",e),this.confirm()},confirm(){this.$emit("modelvaluechange",this.modelValueRef),this.$emit("change",this.modelValueRef)}},computed:{...(0,l.Se)({getCurrAppId:"system/getCurrAppId"})}},u=d,c=i(1001),p=(0,c.Z)(u,r,o,!1,null,"1a051d04",null),h=p.exports},55660:function(e,t,i){i.d(t,{Z:function(){return h}});var r=function(){var e=this,t=e._self._c;return t("div",{ref:"me",attrs:{id:"meClass"}},[t("ConditionGroup",{attrs:{group:e.modelValueRef},scopedSlots:e._u([{key:"default",fn:function(i){return[t("div",{staticClass:"flexrowbetween"},[t("EventConditionList",{staticClass:"mt15",attrs:{favorites:e.favorites,eventList:e.eventList},on:{change:e.on_change_condition},model:{value:i.item.record,callback:function(t){e.$set(i.item,"record",t)},expression:"slotProps.item.record"}}),t("b-button",{staticClass:"mt15",attrs:{size:"is-small","icon-left":"trash-can-outline",type:"is-ghost"},on:{click:function(t){return e.delete_list(i.item)}}},[e._v(e._s(e.$t("message.删除")))])],1)]}}])})],1)},o=[],a=i(1560),n=i(17818),s=i(794),l=i(63822),d={components:{EventConditionList:a.Z,ConditionGroup:n.Z},model:{prop:"modelvalue",event:"modelvaluechange"},props:{keepLast:{type:Boolean,default:!0},favorites:{type:String,default:"aa"},modelvalue:{type:Object,default:function(){return{logicop:s.Z.def.LogicOp.LogicOpAnd,children:[]}}},eventList:{type:Array,default:()=>[],required:!0}},data(){return{initok:!1,eventProps:[],loadingPropsOk:!1,modelValueRef:{}}},created(){this.init()},mounted(){},watch:{},methods:{init(){this.modelValueRef=this.modelvalue},on_change_condition(){},delete_list(e){console.log("delete_list1: ",e);for(var t=0;t<this.modelValueRef.children.length;t++)if(this.modelValueRef.children[t].id===e.id)return this.modelValueRef.children.splice(t,1),void this.confirm()},confirm(){this.$emit("modelvaluechange",this.modelValueRef),this.$emit("change",this.modelValueRef)}},computed:{...(0,l.Se)({getCurrAppId:"system/getCurrAppId"})}},u=d,c=i(1001),p=(0,c.Z)(u,r,o,!1,null,"6ed27024",null),h=p.exports}}]);