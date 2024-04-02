"use strict";(self["webpackChunkwildfire"]=self["webpackChunkwildfire"]||[]).push([[1503],{11503:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"root"},[t("div",{staticClass:"title"},[e._v(e._s(e.$t("message.事件属性")))]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-key":"id","min-height":"250",border:"","default-expand-all":"","tree-props":{children:"children"}}},[t("el-table-column",{attrs:{sortable:"",prop:"id",label:e.$t("message.ID")}}),t("el-table-column",{attrs:{sortable:"",prop:"name",label:e.$t("message.属性埋点名字")}}),t("el-table-column",{attrs:{sortable:"",prop:"label",label:e.$t("message.属性别名")}}),t("el-table-column",{attrs:{sortable:"",prop:"data_type_label",label:e.$t("message.数据类型")}}),t("el-table-column",{attrs:{sortable:"",prop:"prop_type_label",label:e.$t("message.属性类型")}}),t("el-table-column",{attrs:{sortable:"",prop:"desc",label:e.$t("message.备注")}}),t("el-table-column",{attrs:{sortable:"",prop:"hide",label:e.$t("message.隐藏")}}),t("el-table-column",{attrs:{prop:"id",label:e.$t("message.操作")},scopedSlots:e._u([{key:"default",fn:function({row:a}){return[e.isNotDimField(a)?t("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(t){return t.preventDefault(),e.displayDetail(a)}}},[e._v(e._s(e.$t("message.详情")))]):e._e(),e.ableToSetDimTable(a)?t("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(t){return t.preventDefault(),e.setDimTable(a)}}},[e._v(e._s(e.$t("message.设置维度表")))]):e._e(),e.isTopLayerCustomProp(a)?t("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(t){return t.preventDefault(),e.deleteProp(a)}}},[e._v(e._s(e.$t("message.删除")))]):e._e()]}}])})],1),t("DialogDeleteEventProp",{ref:"dialogdelete",on:{confirm:e.on_delete_prop}}),t("el-drawer",{attrs:{title:e.$t("message.属性详情"),"close-on-press-escape":"",visible:e.drawer,direction:e.direction,size:800},on:{"update:visible":function(t){e.drawer=t}}},[t("el-descriptions",{staticClass:"padding20",attrs:{column:1}},[t("el-descriptions-item",{attrs:{label:e.$t("message.属性埋点名字")}},[e._v(e._s(e.rowDetail.name))]),t("el-descriptions-item",{attrs:{label:e.$t("message.属性别名")}},[e.editingRow?e._e():t("span",[e._v(e._s(e.rowDetail.label))]),e.editingRow?t("el-input",{attrs:{size:"mini"},model:{value:e.editingLabel,callback:function(t){e.editingLabel=t},expression:"editingLabel"}}):e._e(),e.editingRow?e._e():t("i",{staticClass:"el-icon-edit marginleft20",on:{click:function(t){return e.editPropLabel(e.rowDetail)}}}),e.editingRow?t("el-button",{staticClass:"marginleft20",attrs:{type:"text",size:"mini"},nativeOn:{click:function(t){return t.preventDefault(),e.updatePropLabel(e.row)}}},[e._v(e._s(e.$t("message.确定")))]):e._e()],1),t("el-descriptions-item",{attrs:{label:e.$t("message.数据类型")}},[e._v(e._s(e.rowDetail.data_type_label))]),t("el-descriptions-item",{attrs:{label:e.$t("message.属性类型")}},[e._v(e._s(e.rowDetail.prop_type_label))]),t("el-descriptions-item",{attrs:{label:e.$t("message.ID")}},[e._v(e._s(e.rowDetail.id))]),t("el-descriptions-item",{attrs:{label:e.$t("message.隐藏")}},[e._v(e._s(e.rowDetail.hide))])],1),t("el-table",{staticClass:"root padding20",staticStyle:{width:"100%"},attrs:{data:e.rowDetail.events,"row-key":"id","min-height":"250",border:""}},[t("el-table-column",{attrs:{sortable:"",prop:"name",label:e.$t("message.事件埋点名字")}}),t("el-table-column",{attrs:{sortable:"",prop:"label",label:e.$t("message.事件别名")}}),t("el-table-column",{attrs:{sortable:"",prop:"event_group",label:e.$t("message.事件分组")}}),t("el-table-column",{attrs:{sortable:"",prop:"event_desc",label:e.$t("message.备注")}})],1)],1),t("el-dialog",{attrs:{title:e.$t("message.设置维度表"),"append-to-body":!0,"close-on-click-modal":!1,visible:e.dialogVisible,width:"700px",top:"7vh"},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("b-message",{staticStyle:{"font-size":"12px"}},[e._v(" 1. "+e._s(e.$t("message.只能选择主键数据类型与事件属性数据类型相同的维度表"))+" ")]),t("el-form",{ref:"formName",staticClass:"ruleFormClass",attrs:{model:e.rowDetail,"label-width":"120px"}},[t("el-form-item",{attrs:{label:e.$t("message.维度表名称"),prop:"name"}},[t("el-select",{attrs:{filterable:"",placeholder:e.$t("message.请选择")},model:{value:e.dimensionOptionSelected,callback:function(t){e.dimensionOptionSelected=t},expression:"dimensionOptionSelected"}},e._l(e.dimenions[e.getElementPrimaryDataType(e.rowDetail.data_type)],(function(a){return t("el-option",{key:a.dim_name,attrs:{label:a.label,value:a.dim_name}},[t("span",{staticStyle:{float:"left"}},[e._v(e._s(a.label))]),t("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(a.dim_name))])])})),1)],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:e.getDimTableSchema(e.dimensionOptionSelected,e.getElementPrimaryDataType(e.rowDetail.data_type))}},[t("el-table-column",{attrs:{prop:"name",label:e.$t("message.字段名字")},scopedSlots:e._u([{key:"default",fn:function(a){return[t("b-icon",{attrs:{icon:a.row.keyicon,size:"is-small"}}),t("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(a.row.name))])]}}])}),t("el-table-column",{attrs:{prop:"label",label:e.$t("message.显示名字")}}),t("el-table-column",{attrs:{prop:"primary_type_label",label:"数据类型"}})],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.unsetDimTable}},[e._v(e._s(e.$t("message.解除维度表关联")))]),t("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v(e._s(e.$t("message.取 消")))]),t("el-button",{attrs:{type:"primary"},on:{click:e.confirmDimTable}},[e._v(e._s(e.$t("message.确 定")))])],1)],1)],1)},l=[],s=(a(57658),a(47056)),o=a(794),r=function(){var e=this,t=e._self._c;return t("div",{ref:"me",attrs:{id:"crf_deleteeventprop"}},[t("div",{attrs:{readonly:""},on:{click:function(t){e.newDialog.show=!0}}},[e._t("default")],2),t("el-dialog",{attrs:{visible:e.newDialog.show,width:"450px","show-close":!1,"close-on-click-modal":!1,"append-to-body":""},on:{"update:visible":function(t){return e.$set(e.newDialog,"show",t)}}},[t("div",{staticClass:"dialog-header",attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.$t("message.删除事件属性")))]),t("div",{staticClass:"dialogBody"},[t("el-form",{ref:"formData",attrs:{"label-width":"140px",model:e.formData,rules:e.rules}},[t("el-form-item",{attrs:{label:e.$t("message.属性名字"),prop:"name"}},[t("span",[e._v(e._s(e.formData.name))])]),t("el-form-item",{attrs:{label:e.$t("message.显示名字"),prop:"label"}},[t("span",[e._v(e._s(e.formData.label))])]),t("el-form-item",{attrs:{label:e.$t("message.选择事件"),prop:"eventName"}},[t("el-select",{attrs:{placeholder:e.$t("message.请选择")},model:{value:e.formData.eventName,callback:function(t){e.$set(e.formData,"eventName",t)},expression:"formData.eventName"}},e._l(e.row.events,(function(a){return t("el-option",{key:a.name,attrs:{label:a.label,value:a.name}},[t("span",{staticStyle:{float:"left"}},[e._v(e._s(a.label))]),t("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(a.name))])])})),1)],1)],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{staticClass:"dialogfooterButton",attrs:{size:"mini"},on:{click:function(t){e.newDialog.show=!1}}},[e._v(e._s(e.$t("message.取 消")))]),t("el-button",{staticClass:"dialogfooterButton",attrs:{size:"mini"},on:{click:function(t){return e.confirm("formData")}}},[e._v(e._s(e.$t("message.确 定")))])],1)])],1)},n=[],p=(a(30541),a(8993)),m=a(63822),d={props:{},data(){return{row:{},newDialog:{show:!1},formData:{name:"",label:"",eventName:""},rules:{}}},created(){},mounted(){},beforeDestroy(){},methods:{showDialog(e){this.row=o.Z.utils.DeepClone(e),this.row.events.unshift({label:this.$t("message.全部"),name:""}),this.formData.name=e.name,this.formData.label=e.label,this.newDialog.show=!0},confirm(){p.Z["new"]().deleteEventProp({type_prop_name:this.row.type_prop_name,event_name:this.formData.eventName,app_id:this.getCurrAppId()}).then(function(e){o.Z.utils.Ignore(e),this.$emit("confirm"),this.newDialog.show=!1}.bind(this)).catch(function(e){o.Z.utils.Err(this,e)}.bind(this))}},computed:{...(0,m.Se)({getCurrAppId:"system/getCurrAppId"})}},c=d,b=a(1001),u=(0,b.Z)(c,r,n,!1,null,"01a0820e",null),_=u.exports;const h=a(36797),f="key";var g={components:{DialogDeleteEventProp:_},data(){return{dialogVisible:!1,drawer:!1,direction:"rtl",tableData:[],dimenions:{},dimensionOptionSelected:"",rowDetail:{},editingRow:!1,editingLabel:""}},mounted(){this.initialize()},methods:{initialize(){this.loadEventProp(),this.listDimTable()},deleteProp(e){e&&this.$refs.dialogdelete.showDialog(e)},on_delete_prop(){o.Z.utils.Success(this,this.$t("message.删除成功")),this.initialize()},isTopLayerCustomProp(e){return!(!o.Z.def.PropDelimiter.isTopLayerProp(e.name)||e.prop_type!=o.Z.def.PropertyType.PropertyTypeCustom)},getElementPrimaryDataType(e){var t=o.Z.def.DataType.getElementPrimaryType(e);return t},unsetDimTable(){this.dialogVisible=!1;var e=this.getCurrAppId();s.Z["new"]().unsetPropLinkDimTable({app_id:e,type_prop_name:this.rowDetail.type_prop_name,table_type:o.Z.def.TableType.TableTypeEvent}).then(function(e){var t=e.data;console.log("response, unsetDimTable",e,t),this.loadEventProp()}.bind(this)).catch((function(e){console.log(e)}))},editPropLabel(e){this.editingRow=!0,this.editingLabel=e.label},updatePropLabel(){this.editingRow=!1;var e=this.getCurrAppId();s.Z["new"]().setPropLabel({app_id:e,label:this.editingLabel,type_prop_name:this.rowDetail.type_prop_name,table_type:o.Z.def.TableType.TableTypeEvent}).then(function(){this.rowDetail.label=this.editingLabel,this.loadEventProp()}.bind(this)).catch(function(e){o.Z.utils.Err(this,e)}.bind(this))},confirmDimTable(){this.dialogVisible=!1;var e=this.getCurrAppId();s.Z["new"]().setPropLinkDimTable({app_id:e,dim_name:this.dimensionOptionSelected,event_name:"",type_prop_name:this.rowDetail.type_prop_name,table_type:o.Z.def.TableType.TableTypeEvent}).then(function(e){var t=e.data;console.log("response, setDimTable",e,t),this.loadEventProp()}.bind(this)).catch((function(e){console.log(e)}))},isNotDimField(e){return e.prop_type!==o.Z.def.PropertyType.PropertyTypeDimension},ableToSetDimTable(e){return e.prop_type!==o.Z.def.PropertyType.PropertyTypeDimension&&(e.data_type!==o.Z.def.DataType.DataTypeObject&&e.data_type!==o.Z.def.DataType.DataTypeListObject)},getDimTableSchema(e,t){console.log("getDimTableSchema",e,t);var a=this.dimenions[t];if(a)for(var i=0;i<a.length;i++)if(console.log("getDimTableSchema---10",a[i].dim_name,e),a[i].dim_name===e)return console.log("getDimTableSchema---1",e,t,a[i].schema),a[i].schema;return[]},setDimTable(e){this.dialogVisible=!0,this.rowDetail=e,this.dimensionOptionSelected=e.dim_name},listDimTable(){var e=this.getCurrAppId();s.Z["new"]().listDimTable({app_id:e}).then(function(e){var t=e.data;if(t)for(var a=0;a<t.length;a++){var i={dim_name:t[a].dim_name,label:t[a].label,memo:t[a].memo,update_time:t[a].update_time,schema:t[a].schema};i.schema[0].keyicon=f;for(var l=0;l<i.schema.length;l++)i.schema[l].primary_type_label=o.Z.def.PrimaryDataType.getZhLabel(i.schema[l].primary_type);i.update_time=h(1e3*i.update_time).format("YYYY-MM-DD"),this.dimenions[i.schema[0].primary_type]&&this.dimenions[i.schema[0].primary_type].length>0?this.dimenions[i.schema[0].primary_type].push(i):this.dimenions[i.schema[0].primary_type]=[i]}}.bind(this)).catch((function(e){console.log(e)}))},moveDimToSubordinate(){for(var e=[],t=[],a=0;a<this.tableData.length;a++)-1===this.tableData[a].type_prop_name.indexOf(o.Z.def.PropDelimiter.DimDelimiter)?e.push(this.tableData[a]):t.push(this.tableData[a]);for(a=0;a<t.length;a++)for(var i=t[a].type_prop_name.split(o.Z.def.PropDelimiter.DimDelimiter),l=0;l<e.length;l++)i[0]===e[l].type_prop_name&&(e[l].children||(e[l].children=[]),e[l].children.push(t[a]));e.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),this.tableData=e},isObjProp(e){return e.indexOf(o.Z.def.PropDelimiter.ObjDelimiter)>-1&&-1===e.indexOf(o.Z.def.PropDelimiter.DimDelimiter)},isDimProp(e){return e.indexOf(o.Z.def.PropDelimiter.DimDelimiter)>-1},loadEventProp(){this.tableData=[];var e=this.getCurrAppId();s.Z["new"]().propListOfEvent({app_id:e,include_obj_schema:!0,include_dim_schema:!0,include_obj_dim_schema:!0}).then(function(e){var t=e.data.Props;if(t){for(var a=0;a<t.length;a++){var i={id:a,name:t[a].name,type_prop_name:t[a].type_prop_name,label:t[a].prop_label,obj_label:t[a].obj_label,hide:t[a].hide,desc:t[a].desc,data_type:t[a].data_type,data_type_label:o.Z.def.DataType.getZhLabel(t[a].data_type),prop_type:t[a].prop_type,prop_type_label:o.Z.def.PropertyType.getZhLabel(t[a].prop_type),events:t[a].events,dim_label:t[a].dim_label,dim_name:t[a].dim_name};this.isObjProp(i.name)&&(i.label=i.obj_label),this.isDimProp(i.name)&&(i.label=i.dim_label),i.hide?i.hide=this.$t("message.是"):i.hide=this.$t("message.否"),this.tableData.push(i)}this.moveDimToSubordinate()}}.bind(this)).catch((function(e){console.log(e)}))},displayDetail(e){this.drawer=!0,this.rowDetail=e}},computed:{...(0,m.Se)({getCurrAppId:"system/getCurrAppId"})}},y=g,D=(0,b.Z)(y,i,l,!1,null,"0d14d43a",null),v=D.exports},8993:function(e,t,a){a.d(t,{Z:function(){return s}});var i=a(90948),l=a(91803);class s{static new(){if(!(0,i.y7)())return new s}deleteEvent(e){return(0,l.Z)({url:"/api/saver/app/delete_event",method:"post",data:e})}deleteEventProp(e){return(0,l.Z)({url:"/api/saver/app/delete_event_prop",method:"post",data:e})}deleteUserProp(e){return(0,l.Z)({url:"/api/saver/app/delete_user_prop",method:"post",data:e})}uploadCustomProps(e){return(0,l.Z)({url:"/api/saver/app/upload_custom_props",method:"post",data:e})}GetDownloadCode(e){return(0,l.Z)({url:"/api/saver/app/get_download_code",method:"post",data:e})}}}}]);