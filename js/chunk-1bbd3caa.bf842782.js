(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bbd3caa","chunk-2d225df0"],{7880:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",[i("mt",[t._v(t._s(t.language[t.$options.name]))]),i("div",{staticClass:"margin1vw alnrit",staticStyle:{height:"5%"}},[t._v("\n        "+t._s(t.language.switchButtonShowMode)+"：\n        "),i("el-radio-group",{model:{value:t.buttonDisplay,callback:function(e){t.buttonDisplay=e},expression:"buttonDisplay"}},[i("el-radio-button",{attrs:{label:"show"}},[t._v(t._s(t.language.hide))]),i("el-radio-button",{attrs:{label:"display"}},[t._v(t._s(t.language.prohibit))])],1)],1),i("div",{staticClass:"margin1vw",staticStyle:{height:"80%"}},[i("UiPageTable",{ref:"tableBasicUsage",attrs:{tableData:t.dataList,TableConfig:t.TableConfig,PageConfig:t.PageConfig,DataConfig:a("e5f0").default()},on:{clickPage:t.clickPage,select:t.selectTable}})],1)],1)},n=[],l={mixins:[a("a496").default],name:"tableBasicUsage",data:function(){return{page:1,pageSize:30,total:0,dataList:[],selectTableItem:{},buttonDisplay:"display"}},components:{UiPageTable:function(){return a.e("chunk-2d224900").then(a.bind(null,"e153"))}},computed:{PageConfig:function(){return{total:this.total,size:this.pageSize}},TableConfig:function(){return{border:!0,stripe:!0,highlight:!0,disabled:!1,button:{value:"state",display:this.buttonDisplay,list:[{text:"state:1,2",type:"primary",value:[1,2]},{text:"state:1,3",type:"success",value:[1,3]},{text:"state:1,4",type:"warning",value:[1,4]},{text:"state:2,3",type:"danger",value:[2,3]},{text:"state:2,4",type:"info",value:[2,4]},{text:"state:3,4",type:"",value:[3,4]}]}}}},methods:{clickPage:function(t,e){this.page=t,this.pageSize=e,this.getRequest()},selectTable:function(t){this.selectTableItem=t.length>0?this.$avoid(t[0]):{}},getRequest:function(){var t=this;this.post("/data/table",{maxState:4,page:this.page,pageSize:this.pageSize,data:["username","email"]}).then(function(e){t.dataList=e.data,t.total=e.total})}},mounted:function(){this.getRequest()}},s=l,u=a("2877"),o=Object(u["a"])(s,i,n,!1,null,null,null);e["default"]=o.exports},e5f0:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return n});var i=a("c0d6");function n(){var t=i["a"].getters.getLanguage,e=[{width:"220",prop:"username",align:"right",label:t.userName,fixed:!0},{width:"220",prop:"email",align:"right",label:t.email,fixed:!0},{width:"220",prop:"state",align:"center",label:t.buttonState,fixed:!0}];return e}}}]);