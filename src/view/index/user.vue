<template>
	<div class="app-user">
		<div class="no-login"  style="display: none;">
			<div class="login-template">
				<p>欢迎使用一元夺宝</p>
				<div class="btn">
					<router-link to="/login"><mt-button type="danger" style="width: 11rem;height: 3.5rem;font-size: 1.5rem;font-family: 'Microsoft YaHei'">登录</mt-button></router-link>
					<router-link to="/register"><mt-button type="primary" style="width: 11rem;height: 3.5rem;font-size: 1.5rem;font-family: 'Microsoft YaHei'">注册</mt-button></router-link>
				</div>
			</div>
		</div>
		<div class="top-area" >
			<div class="left-div">
				<div class="photo">
					<router-link to="/user/detail">
						<img src="/static/images/default.gif" alt="">
					</router-link>
					<div class="userinfo">
						<div class="bk3"></div>
						<router-link to="/user/detail">象山吴彦祖</router-link><br>
						<span style="color: #eee">夺宝ID：54389438</span>
					</div>
				</div>
			</div>
			<div class="right-div">
				<div class="bk1"></div>
				<div style="float: right;"><router-link to="user/set"><i class="fa fa-cog" aria-hidden="true"></i></router-link></div>
				<div class="bk0" style="height: 12rem"></div>
				<div style="color: #fff;font:1.2rem/2rem 'Microsoft YaHei';text-align: right;">积分:100001</div>
				<div class="bk0"></div>
			</div>
		</div>
		<div class="balance">
			<span class="label">余额:</span><span class="money">￥100.00</span>
			<div class="btn" @click="chongzhi">充值</div>
		</div>
		<div class="bk2"></div>
		<div class="base-info">
			<router-link to="/order/myorder">
				<div class="lis">
					<div class="div"><i class="fa fa-user" aria-hidden="true" style="color: #5AB1E7"></i>我的订单</div>
					<div class="div" style="display: flex;justify-content: flex-start;"><div class="notice-icon">9+</div><i class="fa fa-angle-right" aria-hidden="true"></i></div>
				</div>
			</router-link>
			<router-link to="/winning/mywinning">
				<div class="lis">
					<div class="div"><i class="fa fa-gift" aria-hidden="true" style="color: #F9679C"></i>中奖记录</div>
					<div class="div"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
				</div>
			</router-link>
			<router-link to="/user/withdrawals">
				<div class="lis">
					<div class="div"><i class="fa fa-usd" aria-hidden="true" style="color: #FCA04A"></i>充值提现</div>
					<div class="div"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
				</div>
			</router-link>
			<router-link to="/thesun/mythesun">
				<div class="lis">
					<div class="div"><i class="fa fa-camera-retro" aria-hidden="true" style="color: #E84040"></i>我的晒单</div>
					<div class="div"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
				</div>
			</router-link>
			<router-link to="/user/myaddress">
				<div class="lis">
					<div class="div"><i class="fa fa-map-marker" aria-hidden="true" style="color: #9FDF2F"></i>收货地址</div>
					<div class="div"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
				</div>
			</router-link>
		</div>
		<div class="bk2"></div>
		<div class="base-info">
			<router-link to="/service">
				<div class="lis">
					<div class="div"><i class="fa fa-headphones" aria-hidden="true" style="color: #5ECD96"></i>客服</div>
					<div class="div"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
				</div>
			</router-link>
			<router-link to="/notice">
				<div class="lis">
					<div class="div"><i class="fa fa-envelope-o" aria-hidden="true" style="color: #FEA854"></i>消息</div>
					<div class="div"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
				</div>
			</router-link>
		</div>
		<div class="bk1"></div>	
		<div class="base-info">	
			<router-link to="/systemset">
				<div class="lis">
					<div class="div"><i class="fa fa-cog" aria-hidden="true" style="color: #FF5722"></i>设置</div>
					<div class="div"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
				</div>
			</router-link>
		</div>
	</div>
</template>
<script>
	import { Indicator,Toast } from 'mint-ui';
	export default{
		data(){
			return{

			}
		},
		methods:{
			chongzhi(){
				this.$router.push({path:'/user/recharge'});
			}
		}
	}
</script>
<style scoped lang="scss">
    @import "src/style/index.scss";
    .app-user{
    	width: 100%;
    }
    .top-area{
    	width: 38rem;
    	padding: 0 1rem;
    	height: 16rem;
    	background:url('/static/images/photo_bg.jpg');
    	background-size: 100% 100%;
    	display: flex;
    	justify-content: space-between;
    	flex-wrap: wrap;
    	.left-div{
    		width: 30rem;
    		display: flex;
    		justify-content: flex-start;
    		align-items: flex-end;
    		a{
    			color:#fff;
    		}
    		.photo{
    			margin-bottom: 1rem;
    			width: 100%;
    			display: flex;
    			justify-content: flex-start;
    			img{
    				width:7rem;
    				height: 7rem;
    				border-radius: 10px;
    			}
    			.userinfo{
    				width: 22rem;
    				padding-left: 1rem;
    				height: 7rem;
    				color: #fff;
    				font:1.3rem/2rem $yahei;
    				p{
    					width: 100%;
    				}
    			}
    		}
    	}
    	.right-div{
    		width: 8rem;
			i{
				color: #fff;
				font-size: 2.5rem;
			}
    	}
    }
	.no-login{
		@extend .top-area;
    	background:url('/static/images/photo_2_bg.jpg');
    	background-size: 100% 100%;
    	.set-icon{
    		width: 100%;
    		text-align: right;
    		height: 4rem;
    		i{
				color: #fff;
				font-size: 2.5rem;
			}
    	}
    	.login-template{
			width: 100%;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			height: 12rem;
			margin-top:2rem;
			align-items: center;
			p{
				width: 100%;
				text-align: center;
				font:1.5rem/1.6rem $yahei;
				color: #fff;
			}
			.btn{
				width: 30rem;
				display: flex;
				margin-top: -3rem;

				justify-content: space-between;
			}
    	}		
	}
    .balance{
    	width: 38rem;
    	padding: 0 1rem;
    	background:#fff;
    	height: 5rem;
    	display: flex;
    	justify-content: flex-start;
    	align-items: center;
    	.label{
    		color: #000;
    		font:1.6rem/1.6rem $yahei;
    		margin-right: 0.5rem;
    		letter-spacing: 4px;
    	}
    	.money{
    		color: #FF344A;
    		font:bold 1.6rem/1.6rem $yahei;
    		margin-right: 4rem;
    	}
    	.btn{
    		height: 3.2rem;
    		text-align: center;
    		width: 8rem;
    		background: #FF344A;
    		color: #fff;
    		font:1.5rem/3.2rem $yahei;
    		border-radius: 8px;
    	}
    }
    .base-info{
    	width: 100%;
    	display: flex;
    	justify-content: center;
    	flex-wrap: wrap;
    	a{
    		color: #000;
    	}
    	.lis{
    		width: 37rem;
    		padding: 0 1rem 0 2rem;
    		background: #fff;
    		display: flex;
    		justify-content: space-between;
    		align-items: center;
    		height: 5rem;
    		font:bold 1.5rem/1.5rem $yahei;
			border-bottom: 1px solid #ddd;
			i{
				font-size: 2rem;
				margin-right: 1rem;
				position: relative;
				top:0.3rem;
				width: 2rem;
			}
    	}
    }
    .notice-icon{
    	width: 2rem;
    	height: 2rem;
    	background: #F3193D;
    	text-align: center;
    	color: #fff;
    	font:1.2rem/2rem $yahei;
    	border-radius: 50%;
    	margin-right: 0.8rem;
    	position: relative;
    	top:0.1rem;
    }
</style>