"use strict";(self["webpackChunkwildfire"]=self["webpackChunkwildfire"]||[]).push([[4492],{1560:function(e,t,i){i.d(t,{Z:function(){return m}});var n=function(){var e=this,t=e._self._c;return t("div",{ref:"me",attrs:{id:"meClass"}},[t("div",[e.modelValueRef.icon&&e.modelValueRef.icon.length>0?t("b-icon",{staticClass:"mr10",attrs:{icon:e.icon,size:"is-small"}}):e._e(),t("span",[t("QuickDateTimeRangePicker",{staticClass:"mlr5",on:{change:e.on_change_time},model:{value:e.modelValueRef.time_range,callback:function(t){e.$set(e.modelValueRef,"time_range",t)},expression:"modelValueRef.time_range"}}),e._v(e._s(e.$t("message.依次做过"))+" ")],1)],1),e._l(e.modelValueRef.children,(function(i,n){return t("div",{key:i.id},[t("div",{staticClass:"flexrowitemstart"},[t("EventCondition",{staticClass:"mt8",attrs:{keepLast:!1,visibledelete:e.modelValueRef.children.length>1,eventList:e.eventList},on:{change:e.on_change_condition,delete_click:function(t){return e.delete_condition(i.id)}},model:{value:e.modelValueRef.children[n],callback:function(t){e.$set(e.modelValueRef.children,n,t)},expression:"modelValueRef.children[index]"}})],1)])})),t("div",[t("span",{staticClass:"span_button",on:{click:e.add_condition}},[t("b-icon",{attrs:{icon:"plus-circle",size:"is-small"}}),e._v(e._s(e.$t("message.添加事件")))],1)])],2)},o=[],l=i(9808),a=i(78333),d=i(794),r=i(63822),c={components:{EventCondition:a.Z,QuickDateTimeRangePicker:l.Z},model:{prop:"modelvalue",event:"modelvaluechange"},props:{keepLast:{type:Boolean,default:!0},favorites:{type:String,default:"aa"},modelvalue:{type:Object,default:function(){return{icon:"",time_range:{},children:[{id:0,event:"",combo:{logicop:d.Z.def.LogicOp.LogicOpAnd,children:[]}}]}}},eventList:{type:Array,default:()=>[],required:!0}},data(){return{initok:!1,loadingPropsOk:!1,modelValueRef:{}}},created(){this.init()},mounted(){},watch:{},methods:{init(){this.modelValueRef=this.modelvalue},add_condition(){console.log("add_condition"),d.Z.condx.GroupPushBack(this.modelValueRef,{combo:{children:[]}}),console.log("add_condition push",this.modelValueRef),this.confirm()},delete_condition(e){d.Z.condx.GroupRemove(this.modelValueRef,e)},on_change_condition(e){console.log("on_change_condition",e),this.confirm()},on_change_time(e){console.log("on_change_time",e),this.confirm()},confirm(){this.$emit("modelvaluechange",this.modelValueRef),this.$emit("change",this.modelValueRef)}},computed:{...(0,r.Se)({getCurrAppId:"system/getCurrAppId"})}},s=c,p=i(1001),u=(0,p.Z)(s,n,o,!1,null,"1a051d04",null),m=u.exports},55660:function(e,t,i){i.d(t,{Z:function(){return m}});var n=function(){var e=this,t=e._self._c;return t("div",{ref:"me",attrs:{id:"meClass"}},[t("ConditionGroup",{attrs:{group:e.modelValueRef},scopedSlots:e._u([{key:"default",fn:function(i){return[t("div",{staticClass:"flexrowbetween"},[t("EventConditionList",{staticClass:"mt15",attrs:{favorites:e.favorites,eventList:e.eventList},on:{change:e.on_change_condition},model:{value:i.item.record,callback:function(t){e.$set(i.item,"record",t)},expression:"slotProps.item.record"}}),t("b-button",{staticClass:"mt15",attrs:{size:"is-small","icon-left":"trash-can-outline",type:"is-ghost"},on:{click:function(t){return e.delete_list(i.item)}}},[e._v(e._s(e.$t("message.删除")))])],1)]}}])})],1)},o=[],l=i(1560),a=i(17818),d=i(794),r=i(63822),c={components:{EventConditionList:l.Z,ConditionGroup:a.Z},model:{prop:"modelvalue",event:"modelvaluechange"},props:{keepLast:{type:Boolean,default:!0},favorites:{type:String,default:"aa"},modelvalue:{type:Object,default:function(){return{logicop:d.Z.def.LogicOp.LogicOpAnd,children:[]}}},eventList:{type:Array,default:()=>[],required:!0}},data(){return{initok:!1,eventProps:[],loadingPropsOk:!1,modelValueRef:{}}},created(){this.init()},mounted(){},watch:{},methods:{init(){this.modelValueRef=this.modelvalue},on_change_condition(){},delete_list(e){console.log("delete_list1: ",e);for(var t=0;t<this.modelValueRef.children.length;t++)if(this.modelValueRef.children[t].id===e.id)return this.modelValueRef.children.splice(t,1),void this.confirm()},confirm(){this.$emit("modelvaluechange",this.modelValueRef),this.$emit("change",this.modelValueRef)}},computed:{...(0,r.Se)({getCurrAppId:"system/getCurrAppId"})}},s=c,p=i(1001),u=(0,p.Z)(s,n,o,!1,null,"6ed27024",null),m=u.exports},86095:function(e,t,i){i.r(t),i.d(t,{default:function(){return m}});var n=function(){var e=this,t=e._self._c;return t("div",[e.loadingOk?t("EventConditionListGroup",{attrs:{eventList:e.EventList},on:{change:e.on_change},model:{value:e.combo1,callback:function(t){e.combo1=t},expression:"combo1"}}):e._e(),t("el-button",[e._v("-----------------------------------")]),t("el-button",{on:{click:function(t){return e.AddCond(e.combo1)}}},[e._v("添加新序列")]),t("el-button",{on:{click:function(t){return e.AddCond(e.combo)}}},[e._v("添加新序列")]),t("el-divider")],1)},o=[],l=i(794),a=i(62147),d=i(63822),r=i(55660),c={components:{EventConditionListGroup:r.Z},data(){return{loadingOk:!1,EventList:[],combo1:{logicop:l.Z.def.LogicOp.LogicOpAnd,children:[]},combo:{logicop:l.Z.def.LogicOp.LogicOpAnd,children:[{icon:"",time_range:{zone:8,expr:"过去30天",start_unit:"",end_unit:"",start_offset:0,end_offset:0,start_dynamic:!1,end_dynamic:!1,quick_range:"last_30day",time_pick:!1,start_time:"2023-06-04 00:00:00",end_time:"2023-07-03 23:59:59"},events:[{id:4,event:"buy",combo:{logicop:"and",children:[{record:{pickersubject:{id:2,value:"$app_id",label:"应用字段",label2:"预定义",type:"string",type_prop_name:"app_id",hide:!1,data_type_label:"文本",prop_type:"predefine",label3:"文本",is_favorite:!1},params:[],selectedOp:"="},id:1,level:1},{record:{pickersubject:{id:19,value:"phone",label:"phone",label2:"自定义",type:"string",type_prop_name:"s_phone",hide:!1,data_type_label:"文本",prop_type:"custom",label3:"文本",is_favorite:!1},params:["111"],selectedOp:"="},id:2,level:1}]}},{id:6,event:"",combo:{logicop:"and",children:[]}}]}]},combo2:{logicop:"and",children:[{icon:"",time_range:{zone:8,expr:"过去30天",start_unit:"",end_unit:"",start_offset:0,end_offset:0,start_dynamic:!1,end_dynamic:!1,quick_range:"last_30day",time_pick:!1,start_time:"2023-06-04 00:00:00",end_time:"2023-07-03 23:59:59"},events:[{id:4,event:"buy",combo:{logicop:"and",children:[{record:{pickersubject:{id:2,value:"$app_id",label:"应用字段",label2:"预定义",type:"string",type_prop_name:"app_id",hide:!1,data_type_label:"文本",prop_type:"predefine",label3:"文本",is_favorite:!1},params:[],selectedOp:"="},id:1,level:1},{record:{pickersubject:{id:19,value:"phone",label:"phone",label2:"自定义",type:"string",type_prop_name:"s_phone",hide:!1,data_type_label:"文本",prop_type:"custom",label3:"文本",is_favorite:!1},params:["111"],selectedOp:"="},id:2,level:1}]}},{id:6,event:"",combo:{logicop:"and",children:[]}}],record:{icon:"",time_range:{zone:8,expr:"今日",start_unit:"",end_unit:"",start_offset:0,end_offset:0,start_dynamic:!1,end_dynamic:!1,quick_range:"today",time_pick:!1,start_time:"2023-07-04 00:00:00",end_time:"2023-07-04 23:59:59"},events:[{id:1,event:"test_event2",combo:{logicop:"and",children:[]}}]},id:1},{icon:"",time_range:{},events:[{id:6,event:"",combo:{logicop:"and",children:[]}}],id:4,level:1,record:{icon:"",time_range:{zone:8,expr:"过去30天",start_unit:"",end_unit:"",start_offset:0,end_offset:0,start_dynamic:!1,end_dynamic:!1,quick_range:"last_30day",time_pick:!1,start_time:"2023-06-04 00:00:00",end_time:"2023-07-03 23:59:59"},events:[{id:0,event:"LeaveGuild",combo:{logicop:"and",children:[{record:{pickersubject:{id:1,value:"listid",label:"listid",label2:"自定义",type:"list_number",type_prop_name:"lf_listid",hide:!1,data_type_label:"数值列表",prop_type:"custom",label3:"数值列表",is_favorite:!1},params:["11111"],selectedOp:"listhave",elSelectedOp:"number"},id:1,level:1}]}},{id:1,event:"app_open",combo:{logicop:"and",children:[{record:{pickersubject:{id:0,value:"$user_id",label:"用户唯一ID",label2:"预定义",type:"string",type_prop_name:"user_id",hide:!1,data_type_label:"文本",prop_type:"predefine",label3:"文本",is_favorite:!1},params:["22222"],selectedOp:"="},id:1,level:1}]}}]}}]}}},created(){this.loadEventGroup()},methods:{loadEventGroup(){var e=this.getCurrAppId();a.Z.api.LoadPlainEventList(e).then((e=>{this.EventList=e,this.loadingOk=!0})).catch((e=>{l.Z.utils.Err(this,e)}))},AddCond(e){l.Z.condx.GroupAdd(e,0,1,{})},on_change(e){console.log(e)}},computed:{...(0,d.Se)({getCurrAppId:"system/getCurrAppId"})}},s=c,p=i(1001),u=(0,p.Z)(s,n,o,!1,null,null,null),m=u.exports}}]);