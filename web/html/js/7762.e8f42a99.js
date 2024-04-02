"use strict";(self["webpackChunkwildfire"]=self["webpackChunkwildfire"]||[]).push([[7762],{85004:function(e,t,a){a.d(t,{Z:function(){return m}});var s=function(){var e=this,t=e._self._c;return t("div",{ref:"me",attrs:{id:"crf_DateTimeRangePicker"}},[t("el-input",{staticStyle:{position:"fixed",width:"2000px",transform:"translateY(-99990px)","z-index":"300"},attrs:{size:e.fontSize,readonly:""}},[t("span",{ref:"autowidthspan",attrs:{slot:"prefix"},slot:"prefix"},[e._v(e._s(e.autowidthspanText))])]),t("el-input",{class:{inputDefaultClass:!0,activeInput:e.viewshow},attrs:{size:e.fontSize,placeholder:e.inputPlaceHolder,"suffix-icon":"el-icon-date",readonly:""},on:{focus:e.onValueInput},model:{value:e.valueText,callback:function(t){e.valueText=t},expression:"valueText"}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.viewshow,expression:"viewshow"}],staticClass:"pickview"},[t("div",{staticClass:"pad"},[t("div",{staticClass:"rightpad"},[t("div",{staticClass:"pickers"},[t("div",{staticClass:"picker1"},[t("b-datepicker",{staticClass:"picker1View",attrs:{locale:e.locale,"first-day-of-week":1,size:"is-small",inline:""},on:{input:e.picker1_change},model:{value:e.actualZoneDate1,callback:function(t){e.actualZoneDate1=t},expression:"actualZoneDate1"}}),e.TimePick?t("VueTimepicker",{attrs:{hideClearButton:"",format:"HH:mm:ss","close-on-complete":""},scopedSlots:e._u([{key:"icon",fn:function(){return[t("i",{staticClass:"el-icon-time"})]},proxy:!0}],null,!1,1083033051),model:{value:e.selectTimeHMS1,callback:function(t){e.selectTimeHMS1=t},expression:"selectTimeHMS1"}}):e._e()],1),t("div",{staticClass:"picker2"},[t("b-datepicker",{staticClass:"picker2View",attrs:{locale:e.locale,"first-day-of-week":1,size:"is-small",inline:""},on:{input:e.picker2_change},model:{value:e.actualZoneDate2,callback:function(t){e.actualZoneDate2=t},expression:"actualZoneDate2"}}),e.TimePick?t("VueTimepicker",{attrs:{hideClearButton:"",format:"HH:mm:ss","close-on-complete":""},scopedSlots:e._u([{key:"icon",fn:function(){return[t("i",{staticClass:"el-icon-time"})]},proxy:!0}],null,!1,1083033051),model:{value:e.selectTimeHMS2,callback:function(t){e.selectTimeHMS2=t},expression:"selectTimeHMS2"}}):e._e()],1)])])]),t("div",{staticClass:"pickerfooter"},[t("div",[t("span",[e._v(e._s(e.CurrentPicked()))]),e._v(" "),t("span",{staticClass:"warnings"},[e._v(e._s(e.warningText()))])]),t("div",[t("b-button",{staticStyle:{"margin-right":"5px"},attrs:{size:"is-small"},on:{click:e.cancel}},[e._v(e._s(e.$t("message.取消")))]),t("b-button",{attrs:{size:"is-small",disabled:!e.isValidTimeRange()},on:{click:e.confirm}},[e._v(e._s(e.$t("message.确定")))])],1)])])],1)},i=[],l=a(23637),n=a(794);const o=a(36797);var r={name:"DateTimeRangePicker",components:{VueTimepicker:l.Z},model:{prop:"modelvalue",event:"change"},props:{modelvalue:String,msg:String,Zone:{type:Number,defualt:480},fontSize:{type:String,default:"mini"},inputPlaceHolder:{type:String,default:"请选择日期范围"},defaulted:{type:Boolean,default:!0},TimePick:Boolean},data(){return{locale:"",input1:null,actualZoneDate1:null,actualZoneDate2:null,selectTimeHMS1:"",selectTimeHMS2:"",valueText:"",viewshow:!1,warnings:"wwwwwwwwwwww",timepickergrain:{incrementMinutes:59,incrementHours:1}}},created(){this.initialize()},mounted(){document.addEventListener("click",this.dc,!0)},beforeDestroy(){document.removeEventListener("click",this.dc,!0)},methods:{initialize(){if(this.locale=this.$i18n.browerlocale,this.selectTimeHMS1="00:00:00",this.selectTimeHMS2="23:59:59",this.modelvalue&&this.modelvalue.length>=10){var e=this.modelvalue.split(n.Z.def.TimeRangeJoint);e[0]&&e[0].length>12?(this.actualZoneDate1=o(e[0],"YYYY-MM-DD HH:mm:ss").toDate(),this.TimePick&&e[0].split(" ").length>1&&(this.selectTimeHMS1=e[0].split(" ")[1])):e[0]&&10===e[0].length&&(this.actualZoneDate1=o(e[0],"YYYY-MM-DD").toDate()),e.length>1&&(e[1]&&e[1].length>12?(this.actualZoneDate2=o(e[1],"YYYY-MM-DD HH:mm:ss").toDate(),this.TimePick&&e[1].split(" ").length>1&&(this.selectTimeHMS2=e[1].split(" ")[1])):e[1]&&10===e[1].length&&(this.actualZoneDate2=o(e[1],"YYYY-MM-DD").toDate())),this.displayValueText()}else this.defaulted?(this.actualZoneDate1=o(o().format(),"YYYY-MM-DD 00:00:00").toDate(),this.actualZoneDate2=o(o().format(),"YYYY-MM-DD 23:59:59").toDate(),this.confirm()):this.displayValueText()},dc(e){this.viewshow=this.$el.contains(e.target)},picker1_change:function(){},picker2_change:function(){},CurrentPicked(){var e;return null===this.actualZoneDate1||null===this.actualZoneDate2?"":(e=this.TimePick?o(this.actualZoneDate1).format("YYYY-MM-DD")+" "+this.selectTimeHMS1+n.Z.def.TimeRangeJoint+o(this.actualZoneDate2).format("YYYY-MM-DD")+" "+this.selectTimeHMS2:o(this.actualZoneDate1).format("YYYY-MM-DD")+n.Z.def.TimeRangeJoint+o(this.actualZoneDate2).format("YYYY-MM-DD"),e)},isValidTimeRange(){return!(this.actualZoneDate2<this.actualZoneDate1)},warningText(){return this.isValidTimeRange()?"":this.$t("message.无效的时间范围")},onValueInput(){this.viewshow=!this.viewshow,this.adjustPopPosition()},adjustPopPosition(){var e=this.$refs.me,t=e.getElementsByClassName("pickview")[0];window.innerHeight-e.getBoundingClientRect().top>415?t.style.top=String(e.getBoundingClientRect().height+5)+"px":t.style.top="-385px",window.innerWidth-e.getBoundingClientRect().left>732?t.style.left="0px":e.getBoundingClientRect().right>732&&(t.style.left="-530px")},cancel(){this.viewshow=!1},displayValueText(){var e=this.CurrentPicked();return this.valueText=e.split("|")[0],this.autoWidthAdjust(),e},confirm(){var e=this.displayValueText();this.$emit("change",e),this.viewshow=!1},autoWidthAdjust(){setTimeout((()=>{if(this.$refs.autowidthspan){var e=this.$refs.autowidthspan.getClientRects(),t=this.$refs.me,a=t.getElementsByClassName("inputDefaultClass")[0];a.style.width=e[0].width+22+25+"px"}}),10)}},watch:{},computed:{autowidthspanText:function(){return this.valueText&&this.valueText.length>0?this.valueText:void 0!==this.$i18n.messages[this.inputPlaceHolder]?this.$t("message."+this.inputPlaceHolder):this.inputPlaceHolder}}},c=r,u=a(1001),d=(0,u.Z)(c,s,i,!1,null,"267f1c44",null),m=d.exports},59787:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"root"},[t("div",{staticClass:"title"},[e._v(e._s(e.$t("message.分群列表")))]),t("div",[e.showUserListTrackEventList?t("div",[t("el-page-header",{attrs:{title:e.$t("message.返回分群列表"),content:e.currentListingGroupName},on:{back:function(t){e.showUserListTrackEventList=!1}}}),e.refresh?e._e():t("UserListEventTrack",{attrs:{UserList:e.UserList}})],1):t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.tableDataLoading,expression:"tableDataLoading"}]},[t("div",{staticClass:"toolbar"},[t("el-button",{staticClass:"toolbaritem",attrs:{size:"small"},on:{click:e.toCreate}},[e._v(e._s(e.$t("message.添加用户分群")))])],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"max-height":"650",border:""}},[t("el-table-column",{attrs:{prop:"name",label:e.$t("message.分群名字")},scopedSlots:e._u([{key:"default",fn:function({row:a}){return[t("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.ListUserTagMember(a["name"],a["label"])}}},[e._v(e._s(a["name"]))])]}}])}),t("el-table-column",{attrs:{prop:"label",label:e.$t("message.显示名字")}}),t("el-table-column",{attrs:{prop:"total_user",label:e.$t("message.用户总数")}}),t("el-table-column",{attrs:{prop:"total_platform_id",label:e.$t("message.平台ID总数")}}),t("el-table-column",{attrs:{prop:"zone_label",label:e.$t("message.分析时区")}}),t("el-table-column",{attrs:{prop:"tag_type",label:e.$t("message.类型")}}),t("el-table-column",{attrs:{prop:"date",label:e.$t("message.创建日期")}}),t("el-table-column",{attrs:{prop:"update_date",label:e.$t("message.刷新日期")}}),t("el-table-column",{attrs:{label:e.$t("message.操作")},scopedSlots:e._u([{key:"default",fn:function({row:a}){return[t("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(t){return t.preventDefault(),e.editRecord(a)}}},[e._v(e._s(e.$t("message.编辑")))]),t("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(t){return t.preventDefault(),e.refreshRecord(a)}}},[e._v(e._s(e.$t("message.手动刷新")))]),t("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(t){return t.preventDefault(),e.deleteRecord(a)}}},[e._v(e._s(e.$t("message.删除")))])]}}])})],1)],1)])])},i=[],l=(a(57658),a(30541),a(794)),n=a(16540),o=a(36797),r=a.n(o),c=a(63822),u=a(54085),d={components:{UserListEventTrack:u.Z},data(){return{tableData:[],zones:[],UserList:[],refresh:!1,showUserListTrackEventList:!1,currentListingGroupName:"",tableDataLoading:!1}},mounted(){this.ListUserGroup()},methods:{ListUserGroup(){this.tableData=[];var e=this.getCurrAppId();n.Z["new"]().ListUserGroup({app:e}).then(function(e){console.log(e);for(var t=0;t<e.data.length;t++)this.tableData.push({name:e.data[t].name,label:e.data[t].label,tag_type:l.Z.def.UserTagType.getZhLabel(e.data[t].type),data_type_label:l.Z.def.DataType.getZhLabel(e.data[t].data_type),zone:e.data[t].zone,zone_label:l.Z.def.TimeZone.getZhLabel(e.data[t].zone),app_id:e.data[t].app,date:r()(1e3*e.data[t].created_at).format("YYYY-MM-DD HH:mm:ss"),update_date:r()(1e3*e.data[t].updated_at).format("YYYY-MM-DD HH:mm:ss"),client_data:e.data[t].client_data,total_user:e.data[t].total_user,total_platform_id:e.data[t].total_platform_id,refresh_mode:e.data[t].refresh_mode})}.bind(this)).catch(function(e){l.Z.utils.Err(this,e)}.bind(this))},ListUserTagMember(e,t){this.currentListingGroupName=t,n.Z["new"]().ListUserTagMember({app:this.getCurrAppId(),name:e}).then(function(e){l.Z.utils.Ignore(e),e.data.Rows||(e.data.Rows=[]);var t,a=[],s=[];e.data.Rows.forEach((t=>{for(var s={},i=0;i<e.data.columns.length;i++)s[e.data.columns[i].column_name]=t[i];a.push(s)}));for(var i=0;i<e.data.columns.length;i++)e.data.columns[i].field=e.data.columns[i].column_name,e.data.columns[i].index=i,e.data.columns[i].column_name==l.Z.def.UserColUserId&&(t=e.data.columns[i]),s.push(e.data.columns[i]);t&&(s.splice(t.index,1),s.unshift(t)),this.refresh=!0,setTimeout((()=>{this.UserList={columns:s,data:a},this.refresh=!1,this.showUserListTrackEventList=!0}),100)}.bind(this)).catch(function(e){l.Z.utils.Err(this,e)}.bind(this))},deleteRecord(e){console.log("row:",e),this.$confirm(this.$t("message.此操作将永久删除该项目x是否继续?",{name:e.name}),this.$t("message.信息"),{confirmButtonText:this.$t("message.确定"),cancelButtonText:this.$t("message.取消"),type:"warning"}).then((()=>{n.Z["new"]().DeleteUserGroup({app:e.app_id,name:e.name}).then(function(e){l.Z.utils.Ignore(e),l.Z.utils.Success(this,this.$t("message.删除成功")),this.ListUserGroup()}.bind(this)).catch(function(e){l.Z.utils.Err(this,e)}.bind(this))})).catch((()=>{}))},refreshRecord(e){console.log("row:",e),this.tableDataLoading=!0,n.Z["new"]().RefreshUserGroup({name:e.name}).then(function(e){l.Z.utils.Ignore(e),l.Z.utils.Success(this,this.$t("message.刷新成功")),this.ListUserGroup(),this.tableDataLoading=!1}.bind(this)).catch(function(e){l.Z.utils.Err(this,e),this.tableDataLoading=!1}.bind(this))},handleClose(){this.dialogVisible=!1},toCreate(){this.$router.push({path:"./clientgroupcreate"})},editRecord(e){var t=JSON.parse(e.client_data);t.label=e.label,t.name=e.name,t.refresh_mode=e.refresh_mode;var a={name:"clientgroupcreate",params:{client_data:t}};this.$router.push(a)}},computed:{...(0,c.Se)({getCurrAppId:"system/getCurrAppId"})}},m=d,h=a(1001),p=(0,h.Z)(m,s,i,!1,null,"010cbbea",null),f=p.exports}}]);