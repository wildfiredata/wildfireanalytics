"use strict";(self["webpackChunkwildfire"]=self["webpackChunkwildfire"]||[]).push([[8965],{82615:function(i,e,d){d.r(e),d.d(e,{default:function(){return n}});var m=function(){var i=this,e=i._self._c;return e("div",[e("TablePlusSummaryCellEdit",{on:{clicksuffix:i.onClicksuffix},scopedSlots:i._u([{key:"dim2",fn:function(d){return[e("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:d.row["dim2"],callback:function(e){i.$set(d.row,"dim2",e)},expression:"slotRow.row['dim2']"}})]}}]),model:{value:i.val2,callback:function(e){i.val2=e},expression:"val2"}}),e("TablePlusSummaryCellEdit",{scopedSlots:i._u([{key:"dim2",fn:function(d){return[e("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:d.row["dim2"],callback:function(e){i.$set(d.row,"dim2",e)},expression:"slotRow.row['dim2']"}})]}}]),model:{value:i.val2,callback:function(e){i.val2=e},expression:"val2"}})],1)},r=[],a=d(36144),t={components:{TablePlusSummaryCellEdit:a.Z},data(){return{val0:{columns:[{sort_type:"string",sortable:!0,visible:!0,array_display:"first",field:"dim0",label:"日期"},{sort_type:"string",sortable:!0,visible:!0,array_display:"smart",field:"dim1",label:"操作系统"},{sort_type:"string",sortable:!0,visible:!0,array_display:"",field:"dim2",label:"win"},{sort_type:"number",sortable:!0,visible:!0,array_display:"vertical",field:"A",label:"buy总次数",modifier:"round"}],data:[]},val1:{columns:[{sort_type:"string",sortable:!0,visible:!0,array_display:"first",field:"dim0",label:"日期"},{sort_type:"string",sortable:!0,visible:!0,array_display:"smart",field:"dim1",label:"操作系统"},{sort_type:"string",sortable:!0,visible:!0,array_display:"smart",field:"dim2",label:"win"},{sort_type:"number",sortable:!0,visible:!0,array_display:"vertical",field:"A",label:"buy总次数",modifier:"round"}],data:[{dim0:"2023-08-24",dim1:"ios",dim2:"true",A:0},{dim0:"2023-08-24",dim1:"ios",dim2:"false",A:0},{dim0:"2023-08-24",dim1:"android",dim2:"false",A:7},{dim0:"2023-08-24",dim1:"android",dim2:"true",A:5},{dim0:"2023-08-24",dim1:"android",dim2:"",A:28},{dim0:"2023-08-23",dim1:"android",dim2:"false",A:0},{dim0:"2023-08-23",dim1:"android",dim2:"true",A:0},{dim0:"2023-08-23",dim1:"android",dim2:"",A:0},{dim0:"2023-08-23",dim1:"ios",dim2:"true",A:0},{dim0:"2023-08-23",dim1:"ios",dim2:"false",A:0},{dim0:"2023-08-22",dim1:"android",dim2:"false",A:0},{dim0:"2023-08-22",dim1:"android",dim2:"true",A:0},{dim0:"2023-08-22",dim1:"android",dim2:"",A:0},{dim0:"2023-08-22",dim1:"ios",dim2:"true",A:0},{dim0:"2023-08-22",dim1:"ios",dim2:"false",A:0},{dim0:"2023-08-21",dim1:"android",dim2:"false",A:0},{dim0:"2023-08-21",dim1:"android",dim2:"true",A:0},{dim0:"2023-08-21",dim1:"android",dim2:"",A:0},{dim0:"2023-08-21",dim1:"ios",dim2:"true",A:0},{dim0:"2023-08-21",dim1:"ios",dim2:"false",A:0},{dim0:"2023-08-20",dim1:"android",dim2:"false",A:0},{dim0:"2023-08-20",dim1:"android",dim2:"true",A:0},{dim0:"2023-08-20",dim1:"android",dim2:"",A:0},{dim0:"2023-08-20",dim1:"ios",dim2:"true",A:10},{dim0:"2023-08-20",dim1:"ios",dim2:"false",A:10},{dim0:"2023-08-19",dim1:"android",dim2:"false",A:0},{dim0:"2023-08-19",dim1:"android",dim2:"true",A:0},{dim0:"2023-08-19",dim1:"android",dim2:"",A:0},{dim0:"2023-08-19",dim1:"ios",dim2:"false",A:1},{dim0:"2023-08-19",dim1:"ios",dim2:"true",A:9},{dim0:"2023-08-18",dim1:"android",dim2:"false",A:0},{dim0:"2023-08-18",dim1:"android",dim2:"true",A:0},{dim0:"2023-08-18",dim1:"android",dim2:"",A:0},{dim0:"2023-08-18",dim1:"ios",dim2:"true",A:0},{dim0:"2023-08-18",dim1:"ios",dim2:"false",A:0}],vs:!1,timegrain_at_row:!0,sql_timegrain_dim_field:"dim0",sql_breaks:[{type_prop_name:"os",cluster_name:"os",event_name:"buy",params:[],label:"操作系统",break_option:"",break_type:"prop",table_type:"events",client_sort_type:"string",HeaderId:"dim1"},{type_prop_name:"b_win",cluster_name:"b_win",event_name:"buy",params:[],label:"win",break_option:"",break_type:"prop",table_type:"events",client_sort_type:"string",HeaderId:"dim2"}],sql_HeaderId:["dim0","dim1","dim2","A"],sql_metric:[{id:"A",label:"buy.总次数",event_name:"buy",type_prop_name:"",filter:{event_name:"buy",combo:{logic:"",record:[],combo:[],group:[],tag:[]}},category:"Event",metric_type:"count",fomular:"",modifier:"round",hide:!1,HeaderId:"A"}]},val2:{columns:[{sortable:!0,field:"dim0",sql_dim_type:"time_grain",type_prop_name:"",label:"日期",sort_type:"string",visible:!0},{sortable:!0,field:"A",modifier:"round",sql_dim_type:"metric",type_prop_name:"",label:"任意事件.总次数",suffixicon:"arrow-up",visible:!0}],data:[{dim0:["2023-08-24","2023-08-23"],A:[10,100]},{dim0:["2023-08-23","2023-08-22"],A:[12,160]},{dim0:["2023-08-22","2023-08-21"],A:[110,220]},{dim0:["2023-08-21","2023-08-20"],A:[80,140]},{dim0:["2023-08-20","2023-08-19"],A:[140,62]},{dim0:["2023-08-19","2023-08-18"],A:[62,4]},{dim0:["2023-08-18","2023-08-17"],A:[0,0]}],vs:!0,timegrain_at_row:!0,sql_timegrain_dim_field:"dim0",sql_breaks:[],sql_HeaderId:["dim0","A"],sql_metric:[{id:"A",label:"任意事件.总次数",event_name:"*",type_prop_name:"",filter:{event_name:"*",combo:{logic:"",record:[],combo:[],group:[],tag:[]}},category:"Event",metric_type:"count",fomular:"",modifier:"round",hide:!1,HeaderId:"A"}],src0:{columns:[{sortable:!0,field:"dim0",sql_dim_type:"time_grain",type_prop_name:"",label:"日期",sort_type:"string",visible:!0},{sortable:!0,field:"A",modifier:"round",sql_dim_type:"metric",type_prop_name:"",label:"任意事件.总次数",visible:!0}],data:[{dim0:"2023-08-24",A:312},{dim0:"2023-08-23",A:0},{dim0:"2023-08-22",A:0},{dim0:"2023-08-21",A:0},{dim0:"2023-08-20",A:140},{dim0:"2023-08-19",A:62},{dim0:"2023-08-18",A:0}],vs:!1,timegrain_at_row:!0,sql_timegrain_dim_field:"dim0",sql_breaks:[],sql_HeaderId:["dim0","A"],sql_metric:[{id:"A",label:"任意事件.总次数",event_name:"*",type_prop_name:"",filter:{event_name:"*",combo:{logic:"",record:[],combo:[],group:[],tag:[]}},category:"Event",metric_type:"count",fomular:"",modifier:"round",hide:!1,HeaderId:"A"}]},src1:{columns:[{sortable:!0,field:"dim0",sql_dim_type:"time_grain",type_prop_name:"",label:"日期",sort_type:"string",visible:!0},{sortable:!0,field:"A",modifier:"round",sql_dim_type:"metric",type_prop_name:"",label:"任意事件.总次数",visible:!0}],data:[{dim0:"2023-08-23",A:0},{dim0:"2023-08-22",A:0},{dim0:"2023-08-21",A:0},{dim0:"2023-08-20",A:140},{dim0:"2023-08-19",A:62},{dim0:"2023-08-18",A:0},{dim0:"2023-08-17",A:0}],vs:!1,timegrain_at_row:!0,sql_timegrain_dim_field:"dim0",sql_breaks:[],sql_HeaderId:["dim0","A"],sql_metric:[{id:"A",label:"任意事件.总次数",event_name:"*",type_prop_name:"",filter:{event_name:"*",combo:{logic:"",record:[],combo:[],group:[],tag:[]}},category:"Event",metric_type:"count",fomular:"",modifier:"round",hide:!1,HeaderId:"A"}]}},val3:{columns:[{sort_type:"string",sortable:!0,visible:!0,array_display:"first",field:"dim0",label:"日期"},{sort_type:"string",sortable:!0,visible:!0,array_display:"smart",field:"dim1",label:"操作系统"},{sort_type:"number",sortable:!0,visible:!0,array_display:"vertical",field:"A",label:"buy总次数",modifier:"round"}],data:[{dim0:["2023-08-24"],dim1:"ios",A:[0]},{dim0:["2023-08-24"],dim1:"android",A:[312]},{dim0:["2023-08-23"],dim1:"android",A:[0]},{dim0:["2023-08-23"],dim1:"ios",A:[0]},{dim0:["2023-08-22"],dim1:"android",A:[0]},{dim0:["2023-08-22"],dim1:"ios",A:[0]},{dim0:["2023-08-21"],dim1:"android",A:[0]},{dim0:["2023-08-21","2023-08-23"],dim1:"ios",A:[0,0]},{dim0:["2023-08-20"],dim1:"android",A:[0]},{dim0:["2023-08-20","2023-08-21"],dim1:"ios",A:[140,0]},{dim0:["2023-08-19"],dim1:"android",A:[0]},{dim0:["2023-08-19","2023-08-19"],dim1:"ios",A:[62,62]},{dim0:["2023-08-18"],dim1:"android",A:[0]},{dim0:["2023-08-18","2023-08-17"],dim1:"ios",A:[0,0]},{dim0:["","2023-08-22"],dim1:"ios",A:["",0]},{dim0:["","2023-08-20"],dim1:"ios",A:["",140]},{dim0:["","2023-08-18"],dim1:"ios",A:["",0]}],vs:!0,timegrain_at_row:!0,sql_timegrain_dim_field:"dim0",sql_breaks:[{type_prop_name:"os",cluster_name:"os",event_name:"*",params:[],label:"操作系统",break_option:"",break_type:"prop",table_type:"events",client_sort_type:"string",HeaderId:"dim1"}],sql_HeaderId:["dim0","dim1","A"],sql_metric:[{id:"A",label:"任意事件.总次数",event_name:"*",type_prop_name:"",filter:{event_name:"*",combo:{logic:"",record:[],combo:[],group:[],tag:[]}},category:"Event",metric_type:"count",fomular:"",modifier:"round",hide:!1,HeaderId:"A"}],src0:{columns:[{sortable:!0,field:"dim0",sql_dim_type:"time_grain",type_prop_name:"",label:"日期",sort_type:"string",visible:!0},{sortable:!0,field:"dim1",sql_dim_type:"break",type_prop_name:"os",label:"操作系统",sort_type:"string",visible:!0},{sortable:!0,field:"A",modifier:"round",sql_dim_type:"metric",type_prop_name:"",label:"任意事件.总次数",visible:!0}],data:[{dim0:"2023-08-24",dim1:"ios",A:0},{dim0:"2023-08-24",dim1:"android",A:312},{dim0:"2023-08-23",dim1:"android",A:0},{dim0:"2023-08-23",dim1:"ios",A:0},{dim0:"2023-08-22",dim1:"android",A:0},{dim0:"2023-08-22",dim1:"ios",A:0},{dim0:"2023-08-21",dim1:"android",A:0},{dim0:"2023-08-21",dim1:"ios",A:0},{dim0:"2023-08-20",dim1:"android",A:0},{dim0:"2023-08-20",dim1:"ios",A:140},{dim0:"2023-08-19",dim1:"android",A:0},{dim0:"2023-08-19",dim1:"ios",A:62},{dim0:"2023-08-18",dim1:"android",A:0},{dim0:"2023-08-18",dim1:"ios",A:0}],vs:!1,timegrain_at_row:!0,sql_timegrain_dim_field:"dim0",sql_breaks:[{type_prop_name:"os",cluster_name:"os",event_name:"*",params:[],label:"操作系统",break_option:"",break_type:"prop",table_type:"events",client_sort_type:"string",HeaderId:"dim1"}],sql_HeaderId:["dim0","dim1","A"],sql_metric:[{id:"A",label:"任意事件.总次数",event_name:"*",type_prop_name:"",filter:{event_name:"*",combo:{logic:"",record:[],combo:[],group:[],tag:[]}},category:"Event",metric_type:"count",fomular:"",modifier:"round",hide:!1,HeaderId:"A"}]},src1:{columns:[{sortable:!0,field:"dim0",sql_dim_type:"time_grain",type_prop_name:"",label:"日期",sort_type:"string",visible:!0},{sortable:!0,field:"dim1",sql_dim_type:"break",type_prop_name:"os",label:"操作系统",sort_type:"string",visible:!0},{sortable:!0,field:"A",modifier:"round",sql_dim_type:"metric",type_prop_name:"",label:"任意事件.总次数",visible:!0}],data:[{dim0:"2023-08-23",dim1:"ios",A:0},{dim0:"2023-08-22",dim1:"ios",A:0},{dim0:"2023-08-21",dim1:"ios",A:0},{dim0:"2023-08-20",dim1:"ios",A:140},{dim0:"2023-08-19",dim1:"ios",A:62},{dim0:"2023-08-18",dim1:"ios",A:0},{dim0:"2023-08-17",dim1:"ios",A:0}],vs:!1,timegrain_at_row:!0,sql_timegrain_dim_field:"dim0",sql_breaks:[{type_prop_name:"os",cluster_name:"os",event_name:"*",params:[],label:"操作系统",break_option:"",break_type:"prop",table_type:"events",client_sort_type:"string",HeaderId:"dim1"}],sql_HeaderId:["dim0","dim1","A"],sql_metric:[{id:"A",label:"任意事件.总次数",event_name:"*",type_prop_name:"",filter:{event_name:"*",combo:{logic:"",record:[],combo:[],group:[],tag:[]}},category:"Event",metric_type:"count",fomular:"",modifier:"round",hide:!1,HeaderId:"A"}]}}}},methods:{onClicksuffix(i,e){console.log(i,e)}}},o=t,l=d(1001),s=(0,l.Z)(o,m,r,!1,null,"1878443e",null),n=s.exports}}]);