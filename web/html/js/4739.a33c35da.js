"use strict";(self["webpackChunkwildfire"]=self["webpackChunkwildfire"]||[]).push([[4739],{77927:function(e,t,l){l.r(t),l.d(t,{default:function(){return v}});var i=function(){var e=this,t=e._self._c;return t("div",[e.loadingOk?t("EventCondition",{attrs:{favorites:"favorites1688395127902",keepLast:!1,eventList:e.EventList},model:{value:e.modValue,callback:function(t){e.modValue=t},expression:"modValue"}}):e._e(),e.loadingOk?t("EventCondition",{attrs:{favorites:"favorites1688395127912",keepLast:!1,eventList:e.EventList},model:{value:e.modValue1,callback:function(t){e.modValue1=t},expression:"modValue1"}}):e._e(),t("el-divider")],1)},a=[],o=l(794),n=l(62147),p=l(63822),d=l(78333),r={components:{EventCondition:d.Z},data(){return{loadingOk:!1,EventList:[],modValue:{event:"",combo:{logicop:o.Z.def.LogicOp.LogicOpAnd,children:[]}},modValue1:{event:"app_open",combo:{logicop:"and",children:[{level:1,id:1,logicop:"and",children:[{record:{pickersubject:{id:3,value:"$os",label:"操作系统",label2:"预定义",type:"string",type_prop_name:"os",hide:!1,data_type_label:"文本",prop_type:"predefine",label3:"文本",is_favorite:!1},params:["android"],selectedOp:"="},id:2,level:2},{record:{pickersubject:{id:11,value:"$ip",label:"IP地址",label2:"预定义",type:"string",type_prop_name:"ip",hide:!1,data_type_label:"文本",prop_type:"predefine",label3:"文本",is_favorite:!1},params:["192.168.1.1"],selectedOp:"="},id:3,level:2}]},{record:{pickersubject:{id:12,value:"phone",label:"phone",label2:"自定义",type:"string",type_prop_name:"s_phone",hide:!1,data_type_label:"文本",prop_type:"custom",label3:"文本",is_favorite:!1},params:["15100001111"],selectedOp:"="},id:4,level:1}]}}}},created(){this.loadEventGroup()},methods:{loadEventGroup(){var e=this.getCurrAppId();n.Z.api.LoadPlainEventList(e).then((e=>{this.EventList=e,this.loadingOk=!0})).catch((e=>{o.Z.utils.Err(this,e)}))}},computed:{...(0,p.Se)({getCurrAppId:"system/getCurrAppId"})}},s=r,c=l(1001),u=(0,c.Z)(s,i,a,!1,null,null,null),v=u.exports}}]);