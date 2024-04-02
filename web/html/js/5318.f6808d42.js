"use strict";(self["webpackChunkwildfire"]=self["webpackChunkwildfire"]||[]).push([[5318],{15318:function(e,t,i){i.r(t),i.d(t,{default:function(){return c}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"rootproject"},[t("div",{staticClass:"title"},[e._v(e._s(e.$t("message.项目配置")))]),t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"380px"}},[t("el-form-item",{attrs:{label:e.$t("message.项目名称")}},[t("el-input",{staticClass:"width300",attrs:{disabled:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:e.$t("message.时区")}},[e.formEditing.zone?t("div",[e.formEditing.zone?t("el-select",{attrs:{placeholder:e.$t("message.请选择默认分析时区")},model:{value:e.formEdit.zone,callback:function(t){e.$set(e.formEdit,"zone",t)},expression:"formEdit.zone"}},e._l(e.zones,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e(),t("el-button",{staticClass:"ml15",attrs:{type:"text",size:"small"},on:{click:e.confirmZone}},[e._v(e._s(e.$t("message.确定")))]),t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.editClick()}}},[e._v(e._s(e.$t("message.取消")))]),t("b-message",{staticClass:"mt10",attrs:{type:"is-warning","has-icon":""}},[e._v(" "+e._s(e.$t("message.在新上传的追踪数据时，未带时区的时间字符串，将以此时区进行入库"))+" ")])],1):t("div",[t("span",{staticClass:"width300",attrs:{disabled:""}},[e._v(e._s(e.GetCurrZoneName))]),t("span",{staticClass:"editicon",on:{click:function(t){return e.editClick("zone")}}},[t("i",{staticClass:"el-icon-edit"})])])]),t("el-form-item",{attrs:{label:e.$t("message.报表、用户分群等数据自动更新时间")}},[e.formEditing.refresh_time?t("div",[t("el-time-select",{attrs:{clearable:!1,"picker-options":{start:"00:30",step:"00:30",end:"23:30"},placeholder:"选择时间"},model:{value:e.formEdit.refresh_time,callback:function(t){e.$set(e.formEdit,"refresh_time",t)},expression:"formEdit.refresh_time"}}),t("el-button",{staticClass:"ml15",attrs:{type:"text",size:"small"},on:{click:e.confirmRefresTime}},[e._v(e._s(e.$t("message.确定")))]),t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.editClick()}}},[e._v(e._s(e.$t("message.取消")))])],1):t("div",[t("span",{staticClass:"width300",attrs:{disabled:""}},[e._v(e._s(e.getCurrAppRefreshTime()))]),t("span",{staticClass:"editicon",on:{click:function(t){return e.editClick("refresh_time")}}},[t("i",{staticClass:"el-icon-edit"})])])])],1)],1)},r=[],a=(i(57658),i(63822)),n=i(94029),o=i(794),l={components:{},data(){return{zones:[],appZoneName:"",form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:"",zone:8,refresh_time:""},formEdit:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:"",zone:8,refresh_time:""},formEditing:{name:!1,region:!1,date1:!1,date2:!1,delivery:!1,type:!1,resource:!1,desc:!1,zone:!1,refresh_time:!1}}},mounted(){this.initialize()},methods:{...(0,a.nv)({setApp:"system/setApp"}),initialize(){this.form.name=this.getCurrAppName(),this.form.zone=this.getCurrAppTimeZone(),this.form.refresh_time=this.getCurrAppRefreshTime(),this.loadZones()},editClick(e){this.formEditing={name:!1,region:!1,date1:!1,date2:!1,delivery:!1,type:!1,resource:!1,desc:!1,zone:!1,refresh_time:!1},e&&(this.formEdit=o.Z.utils.DeepClone(this.form),this.formEditing[e]=!0)},confirmRefresTime(){var e={app_id:this.getCurrAppId(),field_name:"refresh_time",str_value:this.formEdit.refresh_time};n.Z["new"]().setAppField(e).then(function(e){e.data&&(this.form.refresh_time=this.formEdit.refresh_time,this.setApp(e.data),this.editClick())}.bind(this)).catch((e=>{o.Z.utils.Err(this,e)}))},confirmZone(){var e={app_id:this.getCurrAppId(),field_name:"timezone",int_value:this.formEdit.zone};n.Z["new"]().setAppField(e).then(function(e){e.data&&(this.form.zone=this.formEdit.zone,this.setApp(e.data),this.editClick())}.bind(this)).catch((e=>{o.Z.utils.Err(this,e)}))},loadZones(){this.zones.push({label:o.Z.def.TimeZone.getZhLabel(o.Z.def.TimeZone.Utcp8),value:o.Z.def.TimeZone.Utcp8});var e=-12;while(e<13)8!==e&&this.zones.push({label:o.Z.def.TimeZone.getZhLabel(e),value:e}),e+=1}},computed:{...(0,a.Se)({getCurrAppId:"system/getCurrAppId",getCurrAppName:"system/getCurrAppName",getCurrAppTimeZone:"system/getCurrAppTimeZone",getCurrAppRefreshTime:"system/getCurrAppRefreshTime"}),GetCurrZoneName:function(){return o.Z.def.TimeZone.getZhLabel(this.form.zone)}}},m=l,d=i(1001),f=(0,d.Z)(m,s,r,!1,null,"67f40206",null),c=f.exports}}]);