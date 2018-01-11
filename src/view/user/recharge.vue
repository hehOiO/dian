<template>
	<div class="user-recharge">
		<div class="user_info">
			<div class="photo">
				<img src="/static/images/default.gif" alt="">
			</div>
			<div class="base_info">
				<div class="name">
					昵称：象山吴彦祖
				</div>
				<div class="balance">
					余额：￥1.00元
				</div>
			</div>	
		</div>
		<div class="recharge_body">
			<div class="method-1">
				<div class="title">
					1、选择充值金额(元)
				</div>
				<div class="bk1"></div>
				<div class="money_area">
					<div class="lis" :class="{ac:check_money==1}" @click="price_check(1,20)">
						20
					</div>
					<div class="lis" :class="{ac:check_money==2}"  @click="price_check(2,50)">
						50
					</div>
					<div class="lis" style="margin-right: 0" :class="{ac:check_money==3}"  @click="price_check(3,100)">
						100
					</div>
					<div class="lis" :class="{ac:check_money==4}"  @click="price_check(4,200)">
						200
					</div>
					<div class="lis" :class="{ac:check_money==5}"  @click="price_check(5,500)">
						500
					</div>
					<input class="lis" style="margin-right: 0" type="text" placeholder="请输入金额" v-model="cacheMoney" :class="{ac:check_money==6}"  @click="price_check(6,cacheMoney)">
						
					</input>
				</div>
			</div>
			<div class="method-2">
				<div class="title">
					2、充值方式
				</div>	
				<div class="pay_methods">
					<div class="lis">
						<div class="pay_label">
							<img src="/static/images/alipay_f.png" alt="">
							<div>支付宝支付</div>
						</div>
						<div class="option">
							<img :src="payMethods==0?'/static/images/fx_check.png':'/static/images/fx_nocheck.png'" alt="支付宝" @click="payMethods=0">
						</div>
					</div>
					<div class="lis">
						<div class="pay_label" style="line-height: 3rem;">
							<img  src="/static/images/wechat_f.png" alt="" style="height: 3rem;">
							<div>微信支付</div>
						</div>
						<div class="option">
							<img :src="payMethods==1?'/static/images/fx_check.png':'/static/images/fx_nocheck.png'" alt="微信" @click="payMethods=1">
						</div>
					</div>
				</div>			
			</div>
		</div>
		<div class="bk2"></div>
		<button class="btn" @click="keep">确认</button>
		<div class="bk3"></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				payMethods:0,
				formData:{
					money:'',
					payMethods:0
				},
				cacheMoney:'',
				check_money:0
			}
		},
		created:function(){
		},
		mounted:function(){

		},
		watch:{
			cacheMoney(){
				this.formData.money = parseInt(this.cacheMoney);
			}
		},
		methods:{
			price_check(index,price){
				this.check_money=index;
				this.formData.money = price;
			},
			keep(){
				this.formData.payMethods = this.payMethods;
			}
		}
	}
</script>
<style>

</style>
<style scoped lang="scss">
	@import "src/style/index.scss";	
	input{
		outline: none;
	}
	.user-recharge{
		background:#fff;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.user_info{

		width: 38rem;
		display: flex;
		padding:2rem 1rem 1rem 1rem;
		justify-content: flex-start;
		.photo{
			width: 5rem;
			height: 5rem;
			margin-right: 1rem;
			img{
				width: 100%;
				height: 100%;
			} 
		}
		.base_info{
			width: 100%;
			color: #666;
			font:1.3rem/1.8rem $yahei;
			height: 4rem;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;
			.name{
				margin-top: 0.8rem;
				width: 100%;
			}
			.balance{
				width: 100%;
			}
		}
	}
	.recharge_body{
		width: 38rem;
		padding:1rem;
		.method-1{
			width: 100%;
			.title{
				width: 100%; 
				font:bold 1.4rem/2rem $yahei;
				color: #333;
			}
			.money_area{
				width: 100%;
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				.lis{
					width:11rem;
					height: 4rem;
					margin-right: 2rem;
					border:1px solid #333;
					border-radius: 10px;
					text-align: center;
					font:1.4rem/4rem $yahei;
					color: #999;
					margin-bottom: 1rem;
				}
				.ac{
					border:1px solid #1FA9F8;
				}
			}
		}
		.method-2{
			@extend .method-1;
			.title{
				padding-bottom: 1rem;
				border-bottom: 1px solid #aaa;
			}
			.pay_methods{
				width: 100%;
				.lis{
					width: 100%;
					height: 5rem;
					display: flex;
					align-items: center;
					justify-content: space-between;
					border-bottom: 1px solid #aaa;
					.pay_label{
						font:1.5rem/2.5rem $yahei;
						display: flex;
						justify-content: flex-start;
						color: #333;
						img{
							width: 3.5rem;
							height: 2.5rem;
							margin-right: 0.5rem;
						}
					}
					.option{
						margin-right: 2rem;
						img{
							width: 2.5rem;
							height: 2.5rem;
						}
					}
				}
			}
		}

	}
	button{
		width: 24rem;
		height: 4rem;
		background:#F41A3D;
		text-align: center;
		font:1.5rem/4rem $yahei;
		color: #fff;
		border-radius: 10px;
		border:0px;
	}
</style>