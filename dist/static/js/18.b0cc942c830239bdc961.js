webpackJsonp([18],{"2wXl":function(t,s){},EYSd:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("vMJZ"),i=a("E6Sy"),c={data:function(){return{addressData:"",box_check:{check:"/static/images/fx_check.png",no_check:"/static/images/fx_nocheck.png"}}},created:function(){this.get_address()},methods:{get_address:function(){var t=this;Object(e.a)().then(function(s){t.addressData=s.data,t.addressData.forEach(function(s,a,e){t.addressData[a].moblie=Object(i.a)(s.moblie,3,4)})})},check_default:function(t){var s=this;s.addressData.forEach(function(t,a,e){s.addressData[a].is_default=0}),s.addressData[t].is_default=1},add_address:function(){this.$router.push({path:"/user/myaddressadd"})}}},d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"user-address"},[a("div",{staticClass:"address_area"},[t._l(t.addressData,function(s,e){return a("div",{staticClass:"lis"},[a("div",{staticClass:"text"},[a("div",{staticClass:"base_info"},[a("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),a("span",{staticClass:"moblie"},[t._v("18205859672")])]),t._v(" "),a("div",{staticClass:"tz_info"},[t._v("\n\t\t\t\t\t"+t._s(s.base_address)+t._s(s.tz_address)+"\n\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"operation"},[a("div",{staticClass:"default"},[a("img",{staticClass:"circle",attrs:{src:1==s.is_default?t.box_check.check:t.box_check.no_check,alt:""},on:{click:function(s){t.check_default(e)}}}),t._v(" "),a("div",{staticClass:"wz",on:{click:function(s){t.check_default(e)}}},[t._v("默认地址")])]),t._v(" "),t._m(0,!0)])])}),t._v(" "),a("button",{staticClass:"btn",on:{click:t.add_address}},[a("i",{staticClass:"fa fa-plus",staticStyle:{"margin-right":"1rem"},attrs:{"aria-hidden":"true"}}),t._v("新增收货地址")])],2)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"edit"},[s("span",{staticClass:"bj"},[s("i",{staticClass:"fa fa-pencil-square-o",attrs:{"aria-hidden":"true"}}),this._v("编辑")]),this._v(" "),s("span",{staticClass:"sc"},[s("i",{staticClass:"fa fa-trash-o",attrs:{"aria-hidden":"true"}}),this._v("删除")])])}]},n=a("VU/8")(c,d,!1,function(t){a("2wXl")},"data-v-70eef9e0",null);s.default=n.exports}});
//# sourceMappingURL=18.b0cc942c830239bdc961.js.map