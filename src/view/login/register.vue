<template>
	<div class="user-register">
		<app-header></app-header>
		<div class="banner">
			<img src="/static/images/login_banner.jpg" alt="">
		</div>
		<div class="base-login">
			<p class="idtion">登录天天惊喜，收货好运吧！</p>
			<div class="bk1"></div>
			<div class="info-fill normal">
				<input type="text" class="username" placeholder="请输入用户名">
				<input type="text" class="username" placeholder="请输入密码">
				<div class="moblie_area">
					<input type="text" class="moblie" placeholder="请输入手机号" >
					<button class="btn" @click="send_code" :disabled="sendData.disabled" :class="{disabled:sendData.disabled}">{{ sendData.info }}</button>
				</div>
				<input type="text" class="username" placeholder="请输入手机验证码">
				<mt-button type="danger" style="height: 4rem;font-size: 1.5rem;font-family: 'Microsoft YaHei';border-radius: 10px" size="large">注册</mt-button>
			</div>			
		</div>
		<p class="fz-font">注册立送15元代金券?&nbsp;&nbsp;<router-link to="/custome">有疑问，请咨询客服</router-link></p>
	</div>
</template>
<script>
	import header from '@/view/public/child_header';
	export default{
		data(){
			return{
				sendData:{
					time:60,
					info:'发送验证码',
					disabled:false
				}
			}
		},
		components:{
			"appHeader":header
		},
		methods:{
			send_code(){
				this.sendData.time--;
				this.sendData.disabled=true;
				setTimeout(this.send_code,1000);
				this.sendData.info = this.sendData.time+'s后可发送'
				if(this.sendData.time<=0){
					this.sendData.info='发送验证码';	
					this.sendData.disabled=false;
					return false;

				}
		
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import "src/style/index.scss";	
	.banner{
		width: 100%;
		.img{
			width: 100%;
			height: 16rem;
		}
	}
	.base-login{
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		padding: 1rem 0 2rem 0;
		.idtion{
			width: 100%;
			text-align: center;
			font:1.3rem/2rem 'Microsoft YaHei';
			color: #999;

		}
		.info-fill{
			width: 38rem;
			position: relative;
			.username{
				width: 97%;
				padding-left: 3%;
				border:1px solid #DDDDDD;
				height: 3.5rem;
				border-radius: 1rem;
				font:1.5rem/3.5rem 'Microsoft YaHei';
				margin-bottom: 1rem;
			}
			.moblie{
				width: 77%;
				padding-left: 3%;
				border:1px solid #DDDDDD;
				height: 3.5rem;
				border-radius: 1rem 0 0 1rem;
				font:1.5rem/3.5rem 'Microsoft YaHei';
				margin-bottom: 1rem;	
				position: relative;			
			}
			.moblie_area{
				width: 100%;
				display: flex;
				justify-content: space-between;
				.btn{
					width: 20%;
					height:3.5rem;
					background: #4CAFE9;
					text-align: center;
					font:1.2rem/3.5rem 'Microsoft YaHei';
					color: #fff;
					border-radius: 0rem 1rem 1rem 0rem;
					border:0;
				}
				.disabled{
					background:#d2d2d2;
				}
			}
		}

	}
	.fz-font{
		width: 100%;
		text-align: center;
		font:1.3rem/2rem 'Microsoft YaHei';
		color: #999;
		a{
			color: #FF344A;

		}

	}
</style>