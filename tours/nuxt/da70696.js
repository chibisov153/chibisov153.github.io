(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{269:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(36),r(51),r(44),r(142),{name:"tour",layout:"Background",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("tours",n.tour).fetch().catch((function(t){error({statusCode:404,message:"Page not found"})}));case 3:return o=e.sent,e.abrupt("return",{tour:o});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.tour.title,meta:[{hid:"description",name:"description",content:this.tour.description}]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$parent.$emit("eventTours");case 1:case"end":return e.stop()}}),e)})))()}}),c=r(42),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item-wrap"},[r("div",{staticClass:"item-img"},[r("picture",[r("source",{attrs:{srcset:t.tour.image,media:"(min-width: 992px)"}}),t._v(" "),r("img",{attrs:{src:t.tour.image1000,alt:t.tour.alt}})])]),t._v(" "),r("div",{staticClass:"item-content"},[r("div",{staticClass:"item-wrapper"},[r("h1",{staticClass:"item-h1"},[t._v(t._s(t.tour.title))]),t._v(" "),r("nuxt-content",{attrs:{document:t.tour}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);