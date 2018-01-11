import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/view/layout'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
  	  //主页面
	  {
	    path: '',
	    component: layout,
	    children: [
	      { path: '', name: '首页',component: resolve => require(['@/view/index/index.vue'], resolve) },
	      { path: '/announced', name: '最新揭晓',component: resolve => require(['@/view/index/announced.vue'], resolve) },
	      { path: '/thesun', name: '晒单',component: resolve => require(['@/view/index/the_sun.vue'], resolve) },
	      { path: '/shopcar', name: '购物车',component: resolve => require(['@/view/index/shop_car.vue'], resolve) },
	      { path: '/user', name: '我的',component: resolve => require(['@/view/index/user.vue'], resolve) }
	    ]
	  },
	  //用户中心
	  {
	    path: '/user',
	    component: resolve => require(['@/view/public/child_header.vue'], resolve),
	    children: [
	      { path: '/user/detail', name: '个人详情',component: resolve => require(['@/view/user/detail.vue'], resolve) },
	      { path: '/user/set', name: '账号设置',component: resolve => require(['@/view/user/personal_set.vue'], resolve) },
	      { path: '/user/updataphoto', name: '修改头像',component: resolve => require(['@/view/user/my_photo.vue'], resolve) },
	      { path: '/user/updatanickname', name: '修改昵称',component: resolve => require(['@/view/user/my_nickname.vue'], resolve) },
	      { path: '/user/myaddress', name: '收货地址',component: resolve => require(['@/view/user/my_address.vue'], resolve) },
	      { path: '/user/myaddressadd', name: '新增地址',component: resolve => require(['@/view/user/my_address_add.vue'], resolve) },
	      { path: '/user/recharge', name: '充值中心',component: resolve => require(['@/view/user/recharge.vue'], resolve) },
	      { path: '/user/withdrawals', name: '充值提现',component: resolve => require(['@/view/user/withdrawals.vue'], resolve) }
	    ]
	  },
	  //订单
	  {
	    path: '/order',
	    component: resolve => require(['@/view/public/child_header.vue'], resolve),
	    children: [
	      { path: '/order/myorder', name: '我的订单',component: resolve => require(['@/view/order/my_order.vue'], resolve) }
	    ]
	  },
	  //中奖纪录
	  {
	    path: '/winning',
	    component: resolve => require(['@/view/public/child_header.vue'], resolve),
	    children: [
	      { path: '/winning/mywinning', name: '中奖纪录',component: resolve => require(['@/view/winning/my_winning.vue'], resolve) },
	      { path: '/winning/detail', name: '中奖详情',component: resolve => require(['@/view/winning/detail.vue'], resolve) }
	    ]
	  },
	  //晒单
	  {
	    path: '/thesun',
	    component: resolve => require(['@/view/public/child_header.vue'], resolve),
	    children: [
	      { path: '/thesun/detail', name: '晒单详情',component: resolve => require(['@/view/thesun/detail.vue'], resolve) },
	      { path: '/thesun/mythesun', name: '我的晒单',component: resolve => require(['@/view/thesun/my_the_sun.vue'], resolve) },
	      { path: '/thesun/share', name: '晒单分享',component: resolve => require(['@/view/thesun/input.vue'], resolve) }
	    ]
	  },
	  //APP常见配置
	  {
	    path: '/system',
	    component: resolve => require(['@/view/public/child_header.vue'], resolve),
	    children: [
	      { path: '/system/help', name: '新手帮助',component: resolve => require(['@/view/system/help.vue'], resolve) },
	      { path: '/system/rule', name: '开奖规则',component: resolve => require(['@/view/system/rule.vue'], resolve) },
	      { path: '/system/question', name: '常见问题',component: resolve => require(['@/view/system/question.vue'], resolve) },
	      { path: '/system/agreement', name: '用户协议',component: resolve => require(['@/view/system/agreement.vue'], resolve) },
	      { path: '/system/about', name: '关于我们',component: resolve => require(['@/view/system/about.vue'], resolve) }
	    ]   
	  },
	  //分类
	  {
	    path: '/goods',
	    component: resolve => require(['@/view/public/child_header.vue'], resolve),
	    children: [
	      { path: '/goods/classification', name: '商品分类',component: resolve => require(['@/view/goods/classification.vue'], resolve) },
	      { path: '/goods/detail', name: '商品详情',component: resolve => require(['@/view/goods/detail.vue'], resolve) },
	      { path: '/goods/fastopen', name: '秒开专区',component: resolve => require(['@/view/goods/fast_open.vue'], resolve) },
	 	  { path: '/goods/classificationdetail', name: '全部商品',component: resolve => require(['@/view/goods/classification_detail.vue'], resolve) },
	 	  { path: '/goods/rule', name: '计算规则',component: resolve => require(['@/view/goods/rule.vue'], resolve) }
	    ]   
	  },	
	  //通用模块
	  {
	  	path: '/service',name: '客服',component: resolve => require(['@/view/common/service.vue'], resolve) 
	  },
	  {
	  	path: '/notice',name: '消息',component: resolve => require(['@/view/common/notice.vue'], resolve) 
	  },
	  {
	  	path: '/systemset',name: '系统设置',component: resolve => require(['@/view/common/system_set.vue'], resolve) 
	  },
	  {
	  	path: '/login',name: '登录',component: resolve => require(['@/view/login/login.vue'], resolve) 
	  },
	  {
	  	path: '/register',name: '注册',component: resolve => require(['@/view/login/register.vue'], resolve) 
	  }	  
  ]
})
 