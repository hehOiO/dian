<template>
	<div class="withdrawals">
		<div class="user_info">
			<div class="photo">
				<img src="/static/images/default.gif" alt="">
			</div>
			<div class="base_info">
				<div class="name">
					昵称：象山吴彦祖
				</div>
				<div class="balance">
					余额：￥{{maxMoney.toFixed(2)}}元
				</div>
			</div>	
		</div>
		<div class="recharge_body">
			<div class="method-1">
				<div class="title">
					1、输入退款金额(元)
				</div>
				<div class="ipt">
					<input type="text" v-model="money" placeholder="请输入提现金额">
					<a href="javascript:;" class="max" @click="for_max">最大</a>
				</div>
			</div>
			<div class="bk1"></div>
			<div class="method-1">
				<div class="title">
					2、输入选择退款方式
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
			<div class="bk1"></div>
			<div class="method-1">
				<div class="title">
					3、请输入退款账号
				</div>
				<div class="div">
					<div class="ipt">
						<input type="text" placeholder="请输入微信号" v-if="payMethods==1" v-model="formData.account">
						<input type="text" placeholder="请输入支付宝账号" v-if="payMethods==0" v-model="formData.account">
					</div>
				</div>
			</div>
		</div>
		<div class="bk1"></div>
		<button class="btn" @click="keep">确认</button>
		<div class="bk2"></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				maxMoney:100,
				payMethods:0,
				money:"",
				formData:{
					money:"",
					payMethods:0,
					account:""					
				}
			}
		},
		watch:{
			money(){
				if(this.money>this.maxMoney){
					this.money=this.maxMoney;
				}
			}
		},
		methods:{
			for_max(){
				this.money=this.maxMoney;
			},
			keep(){
				this.formData.money = this.money;
				this.formData.payMethods = this.payMethods;
				console.log(this.formData);
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "src/style/index.scss";		
	.withdrawals{
		background:#fff;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.user_info{

		width: 38rem;
		display: flex;
		padding:1rem 1rem 1rem 1rem;
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
		.title{
			width: 100%; 
			font:bold 1.4rem/2rem $yahei;
			color: #333;
		}
		.method-1{
			width: 100%;
			.ipt{
				width: 100%;
				position: relative;
				input{
					width: 37rem;
					padding-left: 1rem;
					margin-top: 1rem;
					border-radius: 10px;
					text-align: left;
					font:1.4rem/4rem $yahei;
					color: #999;	
					border:0;	
					border:1px solid #aaa;			
				}
				.max{
					position: absolute;
					top:1rem;
					font:bold 1.5rem/4rem $yahei;
					color: #3498DB;
					right: 1rem;

				}
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