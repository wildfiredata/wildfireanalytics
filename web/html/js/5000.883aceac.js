"use strict";(self["webpackChunkwildfire"]=self["webpackChunkwildfire"]||[]).push([[5e3,2185],{33471:function(e,t,s){s.r(t),s.d(t,{default:function(){return E}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"root"},[t("div",{staticClass:"title"},[e._v(e._s(e.$t("message.组合报表")))]),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.tableDataLoading,expression:"tableDataLoading"}]},["view"==e.status||"edit"==e.status?t("div",[t("el-page-header",{attrs:{title:e.$t("message.返回组合报表列表"),content:e.currentPageTitle},on:{back:e.back_list}}),"view"==e.status?t("MergedReportTableView",{attrs:{modeldata:e.rowDetail,ElementListid:e.viewReportAnalsisIdList},on:{fail:e.on_fail_view}}):"edit"==e.status?t("AnalysisMerge",{attrs:{modeldata:e.rowDetail},on:{change:e.on_save_success}}):e._e()],1):t("div",[e.FunPointEnableEdit()?t("div",{staticClass:"toolbar"},[t("el-button",{staticClass:"toolbaritem",attrs:{size:"small"},on:{click:e.toCreate}},[e._v(e._s(e.$t("message.添加组合报表")))])],1):e._e(),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"max-height":"650",border:"","row-class-name":e.tableRowClassName}},[t("el-table-column",{attrs:{prop:"id",label:"ID"}}),t("el-table-column",{attrs:{prop:"name",label:e.$t("message.名称")},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[s.refresh_err?t("span",[e._v(e._s(s["name"]))]):t("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.view_merged_analysis(s)}}},[e._v(e._s(s["name"]))])]}}])}),t("el-table-column",{attrs:{prop:"analysis_name_list",label:e.$t("message.组合报表列表")}}),t("el-table-column",{attrs:{prop:"creator_label",label:e.$t("message.创建者")}}),t("el-table-column",{attrs:{label:e.$t("message.共享列表")},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[s.share_to?t("div",{staticClass:"csssharelist"},e._l(s.share_to,(function(s){return t("div",{key:s.id},[t("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:s.value,placement:"top"}},[s.value&&s.value.length>0?t("div",{staticClass:"circleword"},[e._v(e._s(s.value[0]))]):t("div",{staticClass:"circleword"},[e._v(e._s(s.value))])])],1)})),0):e._e()]}}])}),t("el-table-column",{attrs:{prop:"date",label:e.$t("message.创建日期")}}),t("el-table-column",{attrs:{prop:"refresh_time_str",label:e.$t("message.刷新日期")}}),e.FunPointEnableEdit()?t("el-table-column",{attrs:{label:e.$t("message.操作")},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[s.refresh_err?t("el-button",{staticClass:"danger",attrs:{type:"text",size:"small"},nativeOn:{click:function(t){return t.preventDefault(),e.showRefreshErr(s)}}},[e._v(e._s(e.$t("message.异常")))]):e._e(),s.refresh_err?e._e():t("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(t){return t.preventDefault(),e.editRecord(s)}}},[e._v(e._s(e.$t("message.编辑")))]),s.refresh_err?e._e():t("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(t){return t.preventDefault(),e.refreshRecord(s)}}},[e._v(e._s(e.$t("message.手动刷新")))]),s.refresh_err?e._e():t("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(t){return t.preventDefault(),e.shareRecord(s)}}},[e._v(e._s(e.$t("message.共享")))]),t("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(t){return t.preventDefault(),e.deleteRecord(s)}}},[e._v(e._s(e.$t("message.删除")))])]}}],null,!1,952216941)}):e._e()],1),t("el-pagination",{staticClass:"paginator",attrs:{small:"","hide-on-single-page":!0,"page-size":e.PageInfo.page_size,"pager-count":7,"current-page":e.PageInfo.page,layout:"prev, pager, next",total:e.PageInfo.total},on:{"current-change":e.on_choose_page}})],1)]),t("DialogShareMerged",{ref:"dialogsharemerged",on:{confirm:e.on_share_confirm}})],1)},i=[],r=(s(57658),s(794)),l=s(47056),n=s(63822),o=s(7564),h=function(){var e=this,t=e._self._c;return t("div",{ref:"me",attrs:{id:"crf_sharemerged"}},[t("div",{attrs:{readonly:""},on:{click:function(t){e.newDialog.show=!0}}},[e._t("default")],2),t("el-dialog",{attrs:{visible:e.newDialog.show,width:"450px","show-close":!1},on:{"update:visible":function(t){return e.$set(e.newDialog,"show",t)}}},[t("div",{staticClass:"dialog-header",attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(e.$t("message.共享"))+" "),t("span",[e._v(e._s(e.formData.name))])]),t("div",{staticClass:"dialogBody"},[t("el-select",{staticClass:"w200",attrs:{placeholder:e.$t("message.请选择"),size:"small"},model:{value:e.selectShareItem,callback:function(t){e.selectShareItem=t},expression:"selectShareItem"}},e._l(e.SelectableShare,(function(s){return t("el-option-group",{key:s.label,attrs:{label:s.label,size:"small"}},e._l(s.children,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e}})})),1)})),1),t("el-button",{staticClass:"w80 ml15",attrs:{size:"small"},on:{click:e.on_click_add}},[e._v(e._s(e.$t("message.添加")))]),t("div",{staticClass:"sharetable"},[t("div",{staticClass:"sharerow"},[t("div",{staticClass:"sharecell1 shareheader"},[e._v(" "+e._s(e.$t("message.名称"))+" ")]),t("div",{staticClass:"sharecell2 shareheader"},[e._v(" "+e._s(e.$t("message.操作"))+" ")])]),e.ShareToAccoutList.length>0?t("div",{staticClass:"sharerowcontent"},e._l(e.ShareToAccoutList,(function(s){return t("div",{key:s.id,staticStyle:{width:"100%"}},[t("div",{staticClass:"sharerow"},[t("div",{staticClass:"sharecell1"},[e._v(" "+e._s(s.label)+" ")]),t("div",{staticClass:"sharecell2"},[t("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(t){return t.preventDefault(),e.deleteRow(s.id,e.ShareToAccoutList)}}},[e._v("移除")])],1)])])})),0):t("el-empty",{attrs:{description:e.$t("message.暂无数据")}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{staticClass:"dialogfooterButton",attrs:{size:"mini"},on:{click:function(t){e.newDialog.show=!1}}},[e._v(e._s(e.$t("message.取 消")))]),t("el-button",{staticClass:"dialogfooterButton",attrs:{size:"mini"},on:{click:e.confirm}},[e._v(e._s(e.$t("message.确 定")))])],1)])],1)},d=[],u=s(32900),c={props:{},data(){return{SelectableShare:[],AccountAllMap:new Map,GroupAllMap:new Map,ShareToAccoutList:[],selectShareItem:"",newDialog:{show:!1},formData:{id:0,name:"",reportGroup:"",position:0}}},created(){},mounted(){},beforeDestroy(){},methods:{showDialog(e,t,s){this.formData.name=t,this.formData.id=e,this.initialize(),this.ShareToAccoutList=r.Z.utils.DeepClone(s),this.newDialog.show=!0},initialize(){this.SelectableShare=[];var e=this.loadMemberList(),t=this.loadMemberGroupList(),s=Promise.all([e,t]);s.then((e=>{var t={label:this.$t("message.成员组"),children:[]},s={label:this.$t("message.成员"),children:[]};t.children=e[1].data,t.children.forEach((e=>{e.label=e.name,e.value="s"+e.id,e.member_list=[],this.GroupAllMap.set(e.value,e)})),s.children=e[0].data,s.children=s.children.filter((e=>e.id!=this.getCurrAccountId())),s.children.forEach((e=>{e.value="a"+e.id,this.AccountAllMap.set(e.value,e),e.group_list&&e.group_list.length>0&&e.group_list.forEach((t=>{var s=this.GroupAllMap.get("s"+t);void 0!==s&&s.member_list.push(e.id)}))})),this.SelectableShare=[t,s]})).catch((e=>{r.Z.utils.Err(this,e)}))},loadMemberList(){return u.Z["new"]().MemberList({})},loadMemberGroupList(){return u.Z["new"]().MemberGroupList({})},deleteRow(e){this.ShareToAccoutList=this.ShareToAccoutList.filter((t=>t.id!=e))},on_click_add(){if(this.selectShareItem&&this.selectShareItem.value&&0==this.selectShareItem.value.indexOf("s")){var e=this.GroupAllMap.get(this.selectShareItem.value);e.member_list.forEach((e=>{var t=this.AccountAllMap.get("a"+e);void 0!==t&&this.append_account(t)}))}else if(this.selectShareItem&&this.selectShareItem.value&&0==this.selectShareItem.value.indexOf("a")){var t=this.AccountAllMap.get(this.selectShareItem.value);void 0!==t&&this.append_account(t)}},append_account(e){for(var t=0;t<this.ShareToAccoutList.length;t++)if(this.ShareToAccoutList[t].id==e.id)return;this.ShareToAccoutList.push(e)},postShareReport(){var e=[];this.ShareToAccoutList.forEach((t=>{e.push(t.id)})),l.Z["new"]().MergedAnalysisShareTo({id:this.formData.id,account_id:e}).then(function(e){r.Z.utils.Ignore(e),this.$emit("confirm"),this.newDialog.show=!1}.bind(this)).catch(function(e){r.Z.utils.Err(this,e)}.bind(this))},confirm(){this.postShareReport()}},computed:{...(0,n.Se)({getCurrAppId:"system/getCurrAppId",getCurrAccountId:"system/getCurrAccountId"})}},m=c,p=s(1001),f=(0,p.Z)(m,h,d,!1,null,"4b975ce6",null),_=f.exports,g=function(){var e=this,t=e._self._c;return t("div",{staticClass:"root"},[t("TablePlusSummaryCellEdit",{staticClass:"mergedataviewer",attrs:{tableData:e.JoinTable}})],1)},b=[],y=s(36144),v=s(62147);const w="-";var S={components:{TablePlusSummaryCellEdit:y.Z},props:{ElementListid:{type:Array},modeldata:{type:Object}},data(){return{DisplayTypeList:[],RefreshMode:r.Z.def.RefreshMode.RefreshModeDaily,analysisList:[],analysisIdQueryAnalysis:{},filters:[{analysis_id:"",columns:[],desc:[],joinfield:"",taberr:!1,colerr:!1,joinerr:!1}],paneSize:45,Name:"",MergedId:0,EmptyNameErr:!1,JoinTable:{columns:[],data:[]},ListOfSubtable:[],rebinding:!1}},mounted(){this.initialize()},methods:{...(0,n.nv)({setApp:"system/setApp"}),initialize(){this.DisplayTypeList=r.Z.def.DisplayType.getLabelValueList(),l.Z["new"]().analysisListListByid({id:this.ElementListid}).then(function(e){if(this.analysisList=[],e.data.length==this.ElementListid.length){var t=[];e.data.forEach((e=>{var s=r.Z.utils.ParseJsonObjectSafe(e.post_resp_data);r.Z.utils.IsEmptyObj(s)&&(e.refresh_err=this.$t("message.发现子分析数据缺失")),e.refresh_err||(e._tabledata=v.Z.QueryTableData(e.analysis_type,s),e.idname=`${e.id}.${e.name}`,this.analysisIdQueryAnalysis[e.id]=e,e.analysis_type!=r.Z.def.AnalysisType.AnalysisTypePath&&t.push(e)),e.refresh_err&&this.$emit("fail",e.refresh_err)})),this.analysisList=t,this.modeldata&&this.modeldata.id&&!r.Z.utils.IsEmptyStr(this.modeldata.id)&&(this.MergedId=this.modeldata.id,this.Name=this.modeldata.name,this.RefreshMode=this.modeldata.refresh_mode,this.filters=this.modeldata.filters,this.refresh_filter_title(),this.merge_join_table_columns(),this.join_table_data())}else this.$emit("fail",this.$t("message.子分析数据缺失"))}.bind(this)).catch((e=>{r.Z.utils.Err(this,e)}))},rebindData(){this.rebinding=!0,setTimeout((()=>{this.rebinding=!1}),100)},checkFilter(){if(this.EmptyNameErr=!1,r.Z.utils.IsEmptyStr(this.Name))return this.EmptyNameErr=!0,!1;for(var e=0;e<this.filters.length;e++){if(this.filters[e].taberr=!1,this.filters[e].colerr=!1,this.filters[e].joinerr=!1,r.Z.utils.IsEmptyStr(this.filters[e].analysis_id))return this.filters[e].taberr=!0,!1;if(0==this.filters[e].columns.length)return this.filters[e].colerr=!0,!1;if(this.filters.length>1&&r.Z.utils.IsEmptyStr(this.filters[e].joinfield))return this.filters[e].joinerr=!0,!1}return!0},refresh_filter_title(){for(var e=0;e<this.filters.length;e++)for(var t=0;t<this.filters[e].desc.length;t++){var s=this.filters[e].desc[t];s.analysis_name=this.analysisIdQueryAnalysis[s.analysis_id].name,s.title=`${s.label}(${s.analysis_id}.${s.analysis_name})`}},make_merge_column_desc(){for(var e=0;e<this.filters.length;e++){this.filters[e].desc=[];for(var t=0;t<this.filters[e].columns.length;t++){var s=this.analysisIdQueryAnalysis[this.filters[e].analysis_id]._tabledata,a={analysis_id:this.filters[e].analysis_id,analysis_name:"",id:"",field:"",label:"",sort_type:"",visible:!0,align:"right"};a.analysis_name=this.analysisIdQueryAnalysis[this.filters[e].analysis_id].name,s.columns.forEach((s=>{s.field==this.filters[e].columns[t]&&(a.label=s.label,a.sort_type=s.sort_type,s.display_type?a.display_type=s.display_type:a.display_type=r.Z.def.DisplayType.fromSortType(s.sort_type),a.modifier=s.modifier,a.analysis_column_field=this.filters[e].columns[t])})),a.id=`${a.analysis_id}.${a.analysis_column_field}`,a.field=`${a.analysis_id}.${a.analysis_column_field}`,a.title=`${a.label}(${a.analysis_id}.${a.analysis_name})`,this.filters[e].desc.push(a)}}},merge_join_table_columns(){var e=[];this.filters.forEach((t=>{e=e.concat(t.desc)})),this.JoinTable.columns=e},join_table_data(){this.JoinTable.data=[];var e=this.analysisIdQueryAnalysis[this.filters[0].analysis_id]._tabledata;e.data.forEach((e=>{for(var t={},s=0;s<this.filters[0].columns.length;s++)t[`${this.filters[0].analysis_id}.${this.filters[0].columns[s]}`]=e[this.filters[0].columns[s]];r.Z.utils.IsEmptyStr(this.filters[0].joinfield)||(t[w]=r.Z.utils.ParseStrSafe(e[this.filters[0].joinfield])),this.JoinTable.data.push(t),r.Z.utils.SortObjArrayByField(this.JoinTable.data,w,r.Z.def.BreakSortType.BreakSortTypeString)}));for(var t=[],s=1;s<this.filters.length;s++){var a=this.analysisIdQueryAnalysis[this.filters[s].analysis_id]._tabledata,i={analysis_id:this.filters[s].analysis_id,data:[]};a.data.forEach((e=>{for(var t={},a=0;a<this.filters[s].columns.length;a++)t[`${this.filters[s].analysis_id}.${this.filters[s].columns[a]}`]=e[this.filters[s].columns[a]];r.Z.utils.IsEmptyStr(this.filters[s].joinfield)||(t[w]=r.Z.utils.ParseStrSafe(e[this.filters[s].joinfield])),i.data.push(t)})),r.Z.utils.SortObjArrayByField(i.data,w,r.Z.def.BreakSortType.BreakSortTypeString),t.push(i)}for(this.ListOfSubtable=t,s=0;s<t.length;s++)if(0!=t[s].data.length){for(var l=[],n=0;n<this.JoinTable.data.length;n++){for(var o=this.JoinTable.data[n],h=!1,d=0;d<t[s].data.length;d++){var u=t[s].data[d];if(o[w]==u[w]){let e={...o,...u};l.push(e),h=!0}else if(1==h)break}h||l.push(o)}this.JoinTable.data=l}},apply_join(){this.checkFilter()&&(this.make_merge_column_desc(),this.merge_join_table_columns(),this.join_table_data()),this.rebindData()},MergedAnalysisUpdate(){if(this.checkFilter()){this.tableData=[];var e=this.getCurrAppId();l.Z["new"]().MergedAnalysisUpdate({app:e,id:this.MergedId,name:this.Name,filters:this.filters,refresh_mode:this.RefreshMode}).then(function(e){for(var t={id:e.data.id,name:this.Name,filters:this.filters,analysis_name_list:""},s=0;s<this.filters.length;s++)0!=s&&(t.analysis_name_list=t.analysis_name_list+","),t.analysis_name_list=t.analysis_name_list+this.analysisIdQueryAnalysis[this.filters[s].analysis_id].name;this.$emit("change",t),r.Z.utils.Success(this,this.$t("message.保存成功"))}.bind(this)).catch(function(e){r.Z.utils.Err(this,e)}.bind(this))}}},computed:{...(0,n.Se)({getCurrAppId:"system/getCurrAppId"}),dragOptions(){return{animation:0,group:"description",disabled:!1,ghostClass:"ghost"}}}},A=S,Z=(0,p.Z)(A,g,b,!1,null,"4bf56fac",null),D=Z.exports,$=s(36797),I=s.n($),C={components:{AnalysisMerge:o["default"],DialogShareMerged:_,MergedReportTableView:D},data(){return{PageInfo:{page:1,page_size:10,total:0,page_count:0},tableData:[],zones:[],UserList:[],refresh:!1,currentPageTitle:"",rowDetail:null,status:"list",tableDataLoading:!1,viewReportAnalsisIdList:[]}},mounted(){this.initialize()},methods:{FunPointEnableEdit(){return this.$store.getters["system/getGrantCheck"]("dashboard/merge/edit")},on_choose_page(e){console.log(e,this.PageInfo),this.PageInfo.page=e,this.initialize()},on_fail_view(e){this.rowDetail.refresh_err=e,this.status="list"},tableRowClassName({row:e}){return e.refresh_err?"warning-row":""},initialize(){this.tableData=[];var e=this.getCurrAppId();l.Z["new"]().MergedAnalysisList({app:e,page:this.PageInfo.page,page_size:this.PageInfo.page_size}).then(function(e){this.tableData=e.data.list,this.PageInfo=e.data.page_info,this.tableData.forEach((e=>{e.creator&&(e.creator_label=e.creator.value),e.share_to&&e.share_to.forEach((e=>{e.label=e.value})),e.date=I()(1e3*e.date).utcOffset(this.getCurrAppTimeZone()).format("YYYY-MM-DD HH:mm:ss"),e.refresh_time_str=I()(1e3*e.refresh_time).format("YYYY-MM-DD HH:mm:ss")}))}.bind(this)).catch(function(e){r.Z.utils.Err(this,e)}.bind(this))},view_merged_analysis(e){this.currentPageTitle=e["name"],this.rowDetail=e,this.viewReportAnalsisIdList=[],e.filters.forEach((e=>{this.viewReportAnalsisIdList.push(e.analysis_id)})),this.status="view"},shareRecord(e){this.$refs.dialogsharemerged.showDialog(e.id,e.name,e.share_to)},on_share_confirm(){this.initialize()},deleteRecord(e){console.log("row:",e),this.$confirm(this.$t("message.此操作将永久删除该项目x是否继续?",{name:e.name}),this.$t("message.信息"),{confirmButtonText:this.$t("message.确定"),cancelButtonText:this.$t("message.取消"),type:"warning"}).then((()=>{l.Z["new"]().MergedAnalysisDelete({id:e.id}).then(function(e){r.Z.utils.Ignore(e),r.Z.utils.Success(this,this.$t("message.删除成功")),this.initialize()}.bind(this)).catch(function(e){r.Z.utils.Err(this,e)}.bind(this))})).catch((()=>{}))},refreshRecord(e){this.tableData=[],this.tableDataLoading=!0,l.Z["new"]().MergedAnalysisRefresh({id:e["id"]}).then(function(e){console.log(e),r.Z.utils.Success(this,this.$t("message.刷新成功")),this.initialize(),this.tableDataLoading=!1}.bind(this)).catch(function(e){r.Z.utils.Err(this,e),this.tableDataLoading=!1}.bind(this))},handleClose(){this.dialogVisible=!1},toCreate(){this.currentPageTitle="",this.rowDetail=null,this.status="edit"},back_list(){this.rowDetail=null,this.status="list"},showRefreshErr(e){this.$alert(this.$t("message.数据刷新错误")+":"+e.refresh_err,this.$t("message.提示"),{confirmButtonText:this.$t("message.确定")})},editRecord(e){this.currentPageTitle=e["name"],this.rowDetail=e,this.status="edit"},on_save_success(){this.status="list",this.initialize()}},computed:{...(0,n.Se)({getCurrAppId:"system/getCurrAppId",getCurrAppTimeZone:"system/getCurrAppTimeZone"})}},M=C,T=(0,p.Z)(M,a,i,!1,null,"23b1c456",null),E=T.exports},32900:function(e,t,s){s.d(t,{Z:function(){return i}});var a=s(91803);class i{static new(){return new i}login(e){return(0,a.Z)({url:"/api/portal/login",method:"post",data:e})}chpwd(e){return(0,a.Z)({url:"/api/portal/user/chpwd",method:"post",data:e})}Setpwd(e){return(0,a.Z)({url:"/api/portal/user/setpwd",method:"post",data:e})}MemberList(e){return(0,a.Z)({url:"/api/portal/user/list",method:"post",data:e})}MemberAdd(e){return(0,a.Z)({url:"/api/portal/user/add",method:"post",data:e})}MemberDelete(e){return(0,a.Z)({url:"/api/portal/user/delete",method:"post",data:e})}MemberUpdate(e){return(0,a.Z)({url:"/api/portal/user/update",method:"post",data:e})}MemberGet(e){return(0,a.Z)({url:"/api/portal/user/get",method:"post",data:e})}MemberGroupList(e){return(0,a.Z)({url:"/api/portal/usergroup/list",method:"post",data:e})}MemberGroupAdd(e){return(0,a.Z)({url:"/api/portal/usergroup/add",method:"post",data:e})}MemberGroupUpdate(e){return(0,a.Z)({url:"/api/portal/usergroup/update",method:"post",data:e})}MemberGroupDelete(e){return(0,a.Z)({url:"/api/portal/usergroup/delete",method:"post",data:e})}RoleList(e){return(0,a.Z)({url:"/api/portal/role/list",method:"post",data:e})}RoleAdd(e){return(0,a.Z)({url:"/api/portal/role/add",method:"post",data:e})}RoleUpdate(e){return(0,a.Z)({url:"/api/portal/role/update",method:"post",data:e})}RoleDelete(e){return(0,a.Z)({url:"/api/portal/role/delete",method:"post",data:e})}}}}]);