(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de19e"],{"83e2":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"alnlft"},[s("el-row",{staticClass:"margin1vw"},[s("el-col",{staticClass:"margin1vw-t",attrs:{xs:24,sm:12,md:12,lg:14,xl:16}},[t._v("\n      "+t._s(t.language.requestAddress)+"：\n      "),s("el-autocomplete",{staticClass:"width80",attrs:{placeholder:t.language.requestAddress,"fetch-suggestions":t.querySearch},on:{select:t.handleSelect},model:{value:t.inputUrl,callback:function(e){t.inputUrl=e},expression:"inputUrl"}})],1),s("el-col",{staticClass:"margin1vw-t",attrs:{xs:12,sm:6,md:6,lg:5,xl:4}},[t._v("\n      "+t._s(t.language.requestMode)+"：\n      "),s("el-select",{staticClass:"width50",model:{value:t.select,callback:function(e){t.select=e},expression:"select"}},[s("el-option",{attrs:{value:"get"}}),s("el-option",{attrs:{value:"post"}})],1)],1),s("el-col",{staticClass:"margin1vw-t",attrs:{xs:12,sm:6,md:6,lg:5,xl:4}},[s("mdb",{attrs:{icon:"el-icon-search",type:"primary",disabled:""==t.inputUrl,long:!0},on:{click:t.Request}},[t._v(t._s(t.language.sureRequest))])],1)],1),t._l(t.testData,function(e,a){return s("el-row",{key:a,staticClass:"margin1vw"},[s("el-col",{staticClass:"margin1vw-t",attrs:{xs:12,sm:6,md:6,lg:7,xl:8}},[t._v("key："+t._s(a))]),s("el-col",{staticClass:"margin1vw-t",attrs:{xs:12,sm:6,md:6,lg:7,xl:8}},[t._v("value："+t._s(e))]),s("el-col",{staticClass:"margin1vw-t",attrs:{xs:12,sm:6,md:6,lg:5,xl:4}},[s("mi",{attrs:{icon:"el-icon-edit",tooltip:t.language.modify},on:{click:function(e){return t.modifyData(a)}}})],1),s("el-col",{staticClass:"margin1vw-t",attrs:{xs:12,sm:6,md:6,lg:5,xl:4}},[s("mi",{attrs:{icon:"el-icon-delete",tooltip:t.language.delete},on:{click:function(e){return t.deleData(a)}}})],1)],1)}),s("el-row",{staticClass:"margin1vw"},[s("el-col",{staticClass:"margin1vw-t",attrs:{xs:12,sm:6,md:6,lg:7,xl:8}},[t._v("\n      key：\n      "),s("el-input",{staticClass:"width80",attrs:{placeholder:"key"},model:{value:t.inputKey,callback:function(e){t.inputKey=e},expression:"inputKey"}})],1),s("el-col",{staticClass:"margin1vw-t",attrs:{xs:12,sm:6,md:6,lg:7,xl:8}},[t._v("\n      value：\n      "),s("el-input",{staticClass:"width80",attrs:{placeholder:"value"},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1),s("el-col",{staticClass:"margin1vw-t",attrs:{xs:12,sm:6,md:6,lg:5,xl:4}},[t._v("\n      valueType：\n      "),s("el-select",{staticClass:"width50",model:{value:t.valueType,callback:function(e){t.valueType=e},expression:"valueType"}},[s("el-option",{attrs:{value:"string"}}),s("el-option",{attrs:{value:"number"}})],1)],1),s("el-col",{staticClass:"margin1vw-t",attrs:{xs:12,sm:6,md:6,lg:5,xl:4}},[s("mdb",{attrs:{type:"primary",long:!0},on:{click:t.inputAdd}},[t._v(t._s(t.language.sureAdd))])],1)],1),s("el-row",{staticClass:"margin5vw-t"},[t._v("\n    "+t._s(t.language.requestParamPrev)+"\n    "),s("pre",[t._v(t._s(t.testData))])]),s("el-row",{staticClass:"margin5vw-t"},[t._v("\n    "+t._s(t.language.requestResult)+"\n    "),s("pre",[t._v(t._s(t.reqTest))])])],2)},i=[],l=(s("96cf"),s("3b8d")),n=(s("6762"),s("2fdb"),s("d073")),r={mixins:[s("a496").default],name:"RequestUtil",data:function(){return{select:"get",valueType:"string",inputUrl:"",inputKey:"",inputValue:"",testData:{},reqTest:{},historicalRequest:{}}},methods:{handleSelect:function(t){this.inputUrl=t.value,this.testData=this.$avoid(t.testData)},querySearch:function(t,e){var s=this,a=[];if(t)for(var i in s.historicalRequest)i.includes(t)&&a.push({testData:this.$avoid(s.historicalRequest[i]),value:i});else for(var l in s.historicalRequest)a.push({testData:this.$avoid(s.historicalRequest[l]),value:l});e(a)},modifyData:function(t){this.inputKey=t,this.inputValue=this.testData[t]},deleData:function(t){this.$delete(this.testData,t)},inputAdd:function(){"string"==this.valueType?this.$set(this.testData,this.inputKey,this.inputValue):this.$set(this.testData,this.inputKey,+this.inputValue)},Request:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.$set(this.historicalRequest,this.inputUrl,this.$avoid(this.testData)),"get"!=this.select){t.next=7;break}return t.next=4,this.$Get(this.inputUrl,this.$avoid(this.testData));case 4:this.reqTest=t.sent,t.next=11;break;case 7:if("post"!=this.select){t.next=11;break}return t.next=10,this.$Post(this.inputUrl,this.$avoid(this.testData));case 10:this.reqTest=t.sent;case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.historicalRequest=Object(n["g"])("historicalRequest",{})},beforeDestroy:function(){Object(n["h"])("historicalRequest",this.historicalRequest)}},u=r,c=s("2877"),o=Object(c["a"])(u,a,i,!1,null,null,null);e["default"]=o.exports}}]);