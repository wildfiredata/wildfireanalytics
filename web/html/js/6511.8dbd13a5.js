"use strict";(self["webpackChunkwildfire"]=self["webpackChunkwildfire"]||[]).push([[6511],{36511:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"root"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("message.标签列表")))]),e("div",{staticClass:"toolbar"},[e("el-button",{staticClass:"toolbaritem",attrs:{size:"small"},on:{click:t.toCreate}},[t._v(t._s(t.$t("message.添加用户标签")))])],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableDataLoading,expression:"tableDataLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,"max-height":"650",border:""}},[e("el-table-column",{attrs:{prop:"name",label:t.$t("message.标签名字")}}),e("el-table-column",{attrs:{prop:"label",label:t.$t("message.显示名字")}}),e("el-table-column",{attrs:{prop:"total_user",label:t.$t("message.用户总数")}}),e("el-table-column",{attrs:{prop:"total_platform_id",label:t.$t("message.平台ID总数")}}),e("el-table-column",{attrs:{prop:"data_type_label",label:t.$t("message.数据类型")}}),e("el-table-column",{attrs:{prop:"zone_label",label:t.$t("message.分析时区")}}),e("el-table-column",{attrs:{prop:"tag_type",label:t.$t("message.类型")}}),e("el-table-column",{attrs:{prop:"date",label:t.$t("message.创建日期")}}),e("el-table-column",{attrs:{label:t.$t("message.操作")},scopedSlots:t._u([{key:"default",fn:function({row:a}){return[e("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(e){return e.preventDefault(),t.editRecord(a)}}},[t._v(t._s(t.$t("message.编辑")))]),e("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(e){return e.preventDefault(),t.refreshRecord(a)}}},[t._v(t._s(t.$t("message.手动刷新")))]),e("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(e){return e.preventDefault(),t.deleteRecord(a)}}},[t._v(t._s(t.$t("message.删除")))])]}}])})],1)],1)},r=[],l=(a(57658),a(794)),o=a(16540),n=a(36797),i=a.n(n),d=a(63822),u={components:{},data(){return{tableData:[],zones:[],tableDataLoading:!1}},mounted(){this.listUsertag()},methods:{listUsertag(){this.tableData=[];var t=this.getCurrAppId();o.Z["new"]().listUsertag({app:t}).then(function(t){console.log(t);for(var e=0;e<t.data.length;e++)this.tableData.push({name:t.data[e].name,label:t.data[e].label,tag_type:l.Z.def.UserTagType.getZhLabel(t.data[e].type),data_type_label:l.Z.def.DataType.getZhLabel(t.data[e].data_type),zone:t.data[e].zone,zone_label:l.Z.def.TimeZone.getZhLabel(t.data[e].zone),app_id:t.data[e].app,timezone:l.Z.def.TimeZone.getZhLabel(t.data[e].timezone),date:i()(1e3*t.data[e].created_at).format("YYYY-MM-DD"),total_user:t.data[e].total_user,total_platform_id:t.data[e].total_platform_id,client_data:t.data[e].client_data})}.bind(this)).catch(function(t){l.Z.utils.Err(this,t)}.bind(this))},deleteRecord(t){console.log("row:",t),this.$confirm(this.$t("message.此操作将永久删除该项目x是否继续?",{name:t.name}),this.$t("message.信息"),{confirmButtonText:this.$t("message.确定"),cancelButtonText:this.$t("message.取消"),type:"warning"}).then((()=>{o.Z["new"]().delete({app:t.app_id,name:t.name}).then(function(t){l.Z.utils.Ignore(t),l.Z.utils.Success(this,this.$t("message.删除成功")),this.listUsertag()}.bind(this)).catch(function(t){l.Z.utils.Err(this,t)}.bind(this))})).catch((()=>{}))},refreshRecord(t){console.log("row:",t),this.tableDataLoading=!0,o.Z["new"]().RefreshUserGroup({name:t.name}).then(function(t){l.Z.utils.Ignore(t),l.Z.utils.Success(this,this.$t("message.刷新成功")),this.listUsertag(),this.tableDataLoading=!1}.bind(this)).catch(function(t){l.Z.utils.Err(this,t),this.tableDataLoading=!1}.bind(this))},handleClose(){this.dialogVisible=!1},toCreate(){this.$router.push({path:"./clienttagcreate"})},editRecord(t){var e=JSON.parse(t.client_data);e.label=t.label,e.name=t.name;var a={name:"clienttagcreate",params:{client_data:e}};this.$router.push(a)}},computed:{...(0,d.Se)({getCurrAppId:"system/getCurrAppId"})}},p=u,c=a(1001),m=(0,c.Z)(p,s,r,!1,null,"e37ee2d0",null),g=m.exports},16540:function(t,e,a){a.d(e,{Z:function(){return o}});var s=a(90948),r=a(91803);class l{addUsertag(t){return console.log("api usertagMock addUsertag",t),new Promise((function(t,e){var a=!0;a?t({code:0,msg:"登录成功",data:{token:"21232f297a57a5a743894a0e4a801fc3"}}):e({code:-1,msg:"登录失败"})}))}}class o{static new(){return(0,s.y7)()?new l:new o}add(t){return(0,r.Z)({url:"/api/reporter/usertag_add",method:"post",data:t})}delete(t){return(0,r.Z)({url:"/api/reporter/usertag_delete",method:"post",data:t})}listUsertag(t){return(0,r.Z)({url:"/api/reporter/list_user_tag",method:"post",data:t})}CreateUserGroup(t){return(0,r.Z)({url:"/api/reporter/create_user_group",method:"post",data:t})}DeleteUserGroup(t){return(0,r.Z)({url:"/api/reporter/delete_user_group",method:"post",data:t})}ListUserGroup(t){return(0,r.Z)({url:"/api/reporter/list_user_group",method:"post",data:t})}RefreshUserGroup(t){return(0,r.Z)({url:"/api/reporter/refresh_user_group",method:"post",data:t})}ListUserTagMember(t){return(0,r.Z)({url:"/api/reporter/list_user_group_member",method:"post",data:t})}}}}]);