webpackJsonp([13],{"6Qob":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={data:function(){return{modalStatus:!1,sendData:{time:60,info:"发送验证码",disabled:!1},loginData:{flag:!1,msg:"快速登录"}}},components:{appHeader:a("3n5W").default},methods:{send_code:function(){if(this.sendData.time--,this.sendData.disabled=!0,setTimeout(this.send_code,1e3),this.sendData.info=this.sendData.time+"s后可发送",this.sendData.time<=0)return this.sendData.info="发送验证码",this.sendData.disabled=!1,!1},change_login_method:function(){this.loginData.flag=!this.loginData.flag,this.loginData?this.loginData.msg="快速登录":this.loginData.msg="普通登录"}}},e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"user-login"},[a("app-header"),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"base-login"},[a("p",{staticClass:"idtion"},[t._v("登录天天惊喜，收货好运吧！")]),t._v(" "),a("div",{staticClass:"bk1"}),t._v(" "),t.loginData.flag?t._e():a("div",{staticClass:"info-fill normal"},[a("input",{staticClass:"username",attrs:{type:"text",placeholder:"请输入用户名"}}),t._v(" "),a("input",{staticClass:"username",attrs:{type:"text",placeholder:"请输入密码"}}),t._v(" "),a("mt-button",{staticStyle:{height:"4rem","font-size":"1.5rem","font-family":"'Microsoft YaHei'","border-radius":"10px"},attrs:{type:"danger",size:"large"}},[t._v("登录")])],1),t._v(" "),t.loginData.flag?a("div",{staticClass:"info-fill fast"},[a("div",{staticClass:"moblie_area"},[a("input",{staticClass:"moblie",attrs:{type:"text",placeholder:"请输入手机号"}}),t._v(" "),a("button",{staticClass:"btn",class:{disabled:t.sendData.disabled},attrs:{disabled:t.sendData.disabled},on:{click:t.send_code}},[t._v(t._s(t.sendData.info))])]),t._v(" "),a("input",{staticClass:"username",attrs:{type:"text",placeholder:"请输入手机验证码"}}),t._v(" "),a("mt-button",{staticStyle:{height:"4rem","font-size":"1.5rem","font-family":"'Microsoft YaHei'","border-radius":"10px"},attrs:{type:"danger",size:"large"}},[t._v("登录")])],1):t._e(),t._v(" "),a("div",{staticClass:"tz_info"},[a("span",{on:{click:t.change_login_method}},[t._v(t._s(t.loginData.msg))]),t._v(" "),a("span",[t._v("找回密码")])])]),t._v(" "),t._m(1),t._v(" "),t.modalStatus?a("div",{staticClass:"masker"},[a("div",{staticClass:"valid-code"},[a("div",{staticClass:"modal-title"},[a("span",[t._v("请输入验证码")]),a("span",[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"},on:{click:function(s){t.modalStatus=!1}}})])]),t._v(" "),t._m(2)])]):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"banner"},[s("img",{attrs:{src:"/static/images/login_banner.jpg",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"three-party"},[s("div",{staticClass:"nav-line"},[s("hr"),this._v(" "),s("div",{staticClass:"lable"},[this._v("第三方快速登录")])]),this._v(" "),s("div",{staticClass:"gam"},[s("div",{staticClass:"lis"},[s("img",{attrs:{src:"/static/images/wechat_icon.png",alt:""}}),this._v(" "),s("div",{staticClass:"text"},[this._v("\n\t\t\t\t\t微信登录\n\t\t\t\t")])]),this._v(" "),s("div",{staticClass:"lis"},[s("img",{attrs:{src:"/static/images/weibo_icon.png",alt:""}}),this._v(" "),s("div",{staticClass:"text"},[this._v("\n\t\t\t\t\t微博登录\n\t\t\t\t")])]),this._v(" "),s("div",{staticClass:"lis"},[s("img",{attrs:{src:"/static/images/qq_icon.png",alt:""}}),this._v(" "),s("div",{staticClass:"text"},[this._v("\n\t\t\t\t\tQQ登录\n\t\t\t\t")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"modal-body"},[s("div",{staticClass:"nk2"})])}]},n=a("VU/8")(i,e,!1,function(t){a("l6Ny")},"data-v-8cabf71a",null);s.default=n.exports},l6Ny:function(t,s){}});
//# sourceMappingURL=13.a680fb1ce2f5f6658893.js.map