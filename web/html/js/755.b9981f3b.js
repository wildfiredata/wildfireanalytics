"use strict";(self["webpackChunkwildfire"]=self["webpackChunkwildfire"]||[]).push([[755],{80755:function(t,e,s){s.r(e),s.d(e,{default:function(){return m}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"root"},[e("div",{staticClass:"containerClass"},[e("splitpanes",{staticClass:"default-theme"},[e("pane",{attrs:{size:t.paneSize,"min-size":"10","max-size":"40"}},[[e("div",{staticClass:"toptitle"},[t._v(t._s(t.$t("message.平台管理")))]),e("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.activeItem},on:{select:t.on_select}},[e("el-menu-item",{attrs:{index:"/project/system-platform/system-license"}},[e("span",{staticClass:"pr5"},[e("b-icon",{attrs:{icon:"license",size:"default"}})],1),e("span",{staticClass:"noneselect",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("message.许可证")))])]),e("el-menu-item",{attrs:{index:"/project/system-platform/system-manage"}},[e("span",{staticClass:"pr5"},[e("b-icon",{attrs:{icon:"bank-outline",size:"default"}})],1),e("span",{staticClass:"noneselect",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("message.项目列表")))])])],1)]],2),e("pane",{attrs:{size:100-t.paneSize}},[e("router-view")],1)],1)],1)])},i=[],n=(s(57658),s(83581)),l={components:{Splitpanes:n.F,Pane:n.X},created(){},mounted(){this.initialize()},data:()=>({activeItem:"",paneSize:15}),methods:{initialize(){this.activeItem=this.$route.path},on_select(t){this.activeItem!=t&&(this.$router.push({path:t}),this.activeItem=t)}}},c=l,r=s(1001),o=(0,r.Z)(c,a,i,!1,null,"734ed842",null),m=o.exports}}]);