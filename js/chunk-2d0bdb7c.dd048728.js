(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bdb7c","chunk-2d0bdb7c"],{"2cd9":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"h997"},[r("h1",[e._v("404")]),r("br"),e.weather.hasOwnProperty("country")?r("span",[r("img",{attrs:{src:"https://www.tianqiapi.com/static/skin/"+e.img[Math.floor(Math.random()*Math.floor(6))]+"/"+e.weather.wea_img+".png"}}),r("br"),e._v("\n    "+e._s(e.weather.country)+"\n    "+e._s(e.weather.city)+"\n    "+e._s(e.weather.date)+"\n    "+e._s(e.weather.week)+"\n    "+e._s(e.weather.wea)+"\n    "+e._s(e.weather.win)+"\n    "+e._s(e.weather.win_speed)+"\n    "+e._s(e.weather.air_tips)+"\n  ")]):e._e()])},a=[],i=(r("96cf"),r("3b8d")),s={name:"error-404",data:function(){return{weather:{},city:"上海",img:["cherry","durian","cucumber","pitaya","pear","peach","mango"]}},methods:{req:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t="v6",r="25161667",n="y5cW8f2j",e.next=5,this.$Get("/weather",{appid:r,appsecret:n,version:t,city:this.city});case 5:this.weather=e.sent;case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){this.req()}},c=s,h=r("2877"),u=Object(h["a"])(c,n,a,!1,null,null,null);t["default"]=u.exports}}]);