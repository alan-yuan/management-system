(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d224c59"],{e20f:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",[s("mt",[t._v(t._s(t.language[t.$options.name]))]),s("div",{staticClass:"margin1vw",staticStyle:{height:"80%"}},[s("el-col",{staticClass:"normal",attrs:{span:24}},[t._v(t._s(t.language.clickBottomSetIcoTitle))]),s("el-col",{staticClass:"margin1vw-t h100",attrs:{xs:24,sm:24,md:12,lg:10,xl:8}},t._l(t.icoT,function(e,a){return s("el-col",{key:a,attrs:{span:6}},[s("div",{staticClass:"icon-img-div inblock",on:{click:function(s){return t.setIcoAndTitleFun(e)}}},[s("img",{staticStyle:{"object-fit":"contain"},attrs:{src:e.ico}})]),s("div",{staticClass:"alncnt emphasize"},[t._v(t._s(e.title))])])}),1),s("el-col",{staticClass:"margin1vw-t h100",attrs:{xs:24,sm:24,md:12,lg:10,xl:8}},[s("el-form",{attrs:{"label-width":"50%"}},[s("el-form-item",[s("span",{staticClass:"emphasize",attrs:{slot:"label"},slot:"label"}),t._v("\n                    "+t._s(t.language.clickSetIcoTitle)+"\n                ")]),s("el-form-item",[s("span",{staticClass:"emphasize",attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.language.icoUrl))]),s("el-input",{staticClass:"width80",attrs:{type:"textarea",autosize:"",clearable:"",maxlength:300},model:{value:t.ico,callback:function(e){t.ico=e},expression:"ico"}})],1),t.ico?s("el-form-item",[s("span",{staticClass:"emphasize",attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.language.icoPreview))]),s("img",{staticClass:"themeSpan",staticStyle:{"object-fit":"contain"},attrs:{src:t.ico}})]):t._e(),s("el-form-item",[s("span",{staticClass:"emphasize",attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.language.title))]),s("el-input",{staticClass:"width80",attrs:{clearable:"",maxlength:30},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),s("el-form-item",[s("span",{staticClass:"emphasize",attrs:{slot:"label"},slot:"label"}),s("mdb",{attrs:{tooltip:t.language.icoUrlType},on:{click:function(e){return t.setIcoAndTitleFun({ico:t.ico,title:t.title})}}},[t._v(t._s(t.language.sure))])],1)],1)],1)],1)],1)},l=[],i={mixins:[s("a496").default],name:"icoAndTitle",data:function(){return{ico:"",title:"",icoT:[{ico:"https://gitee.com/cloud_users/Cloud-management-system/raw/master/yun.ico",title:"彩虹云"},{ico:"https://gitee.com/cloud_users/Cloud-management-system/raw/master/santa.ico",title:"圣诞帽"},{ico:"https://gitee.com/cloud_users/Cloud-management-system/raw/master/christmas.ico",title:"圣诞袜"},{ico:"https://gitee.com/cloud_users/Cloud-management-system/raw/master/love.ico",title:"一颗小心心"},{ico:"https://gitee.com/cloud_users/Cloud-management-system/raw/master/superman.ico",title:"超人"},{ico:"https://gitee.com/cloud_users/Cloud-management-system/raw/master/sword.ico",title:"魔法剑"},{ico:"https://gitee.com/cloud_users/Cloud-management-system/raw/master/valentines.ico",title:"跟你在一起的日子"}]}},methods:{setIcoAndTitleFun:function(t){this.$setIco(t.ico),this.$setTitle(t.title)}},mounted:function(){}},o=i,c=s("2877"),n=Object(c["a"])(o,a,l,!1,null,null,null);e["default"]=n.exports}}]);