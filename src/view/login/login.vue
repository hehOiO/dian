<template>
	<div class="user-login">
		<app-header></app-header>
		<div class="banner">
			<img src="/static/images/login_banner.jpg" alt="">
		</div>
		<div class="base-login">
			<p class="idtion">登录天天惊喜，收货好运吧！</p>
			<div class="bk1"></div>
			<div class="info-fill normal" v-if="!loginData.flag">
				<input type="text" class="username" placeholder="请输入用户名">
				<input type="text" class="username" placeholder="请输入密码">
				<mt-button type="danger" style="height: 4rem;font-size: 1.5rem;font-family: 'Microsoft YaHei';border-radius: 10px" size="large">登录</mt-button>
			</div>
			<div class="info-fill fast" v-if="loginData.flag">
				<div class="moblie_area">
					<input type="text" class="moblie" placeholder="请输入手机号" >
					<button class="btn" @click="send_code" :disabled="sendData.disabled" :class="{disabled:sendData.disabled}">{{ sendData.info }}</button>
				</div>
				<input type="text" class="username" placeholder="请输入手机验证码">
				<mt-button type="danger" style="height: 4rem;font-size: 1.5rem;font-family: 'Microsoft YaHei';border-radius: 10px" size="large">登录</mt-button>
			</div>			
			<div class="tz_info">
				<span @click="change_login_method">{{ loginData.msg}}</span>
				<span>找回密码</span>
			</div>
		</div>
		<div class="three-party">
			<div class="nav-line">
				<hr>
				<div class="lable">第三方快速登录</div>
			</div>
			<div class="gam">
				<div class="lis">
					<img src="/static/images/wechat_icon.png" alt="">
					<div class="text">
						微信登录
					</div>
				</div>
				<div class="lis">
					<img src="/static/images/weibo_icon.png" alt="">
					<div class="text">
						微博登录
					</div>
				</div>
				<div class="lis">
					<img src="/static/images/qq_icon.png" alt="">
					<div class="text">
						QQ登录
					</div>
				</div>
			</div>
		</div>
		<div class="masker" v-if="modalStatus" >
			<div class="valid-code">
				<div class="modal-title"><span>请输入验证码</span><span><i class="fa fa-times" aria-hidden="true" @click="modalStatus=false"></i></span></div>
				<div class="modal-body">
					<div class="nk2"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import header from '@/view/public/child_header';
	export default{
		data(){
			return{
				modalStatus:false,
				sendData:{
					time:60,
					info:'发送验证码',
					disabled:false
				},
				loginData:{
					//false普通登录，true快速登录（即手机号登录）
					flag:false,
					msg:'快速登录'
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
				// this.modalStatus=true;
			},
			//切换登录方式
			change_login_method(){
				this.loginData.flag = !this.loginData.flag;
				if(this.loginData){
					this.loginData.msg="快速登录"
				}else{
					this.loginData.msg="普通登录"
				}
			}
		}
	}
</script>
<style scoped lang="scss">
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
			font:1.3rem/2rem $yahei;
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
				font:1.5rem/3.5rem $yahei;
				margin-bottom: 1rem;
			}
			.moblie{
				width: 77%;
				padding-left: 3%;
				border:1px solid #DDDDDD;
				height: 3.5rem;
				border-radius: 1rem 0 0 1rem;
				font:1.5rem/3.5rem $yahei;
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
					font:1.2rem/3.5rem $yahei;
					color: #fff;
					border-radius: 0rem 1rem 1rem 0rem;
					border:0;
				}
				.disabled{
					background:#d2d2d2;
				}
			}
		}
		.tz_info{
			width: 38rem;
			display: flex;
			justify-content: space-between;
			font:1.2rem/2rem $yahei;
			color: #999;
			margin-top: 1rem;
		}
	}
	.three-party{
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.nav-line{
			width: 38rem;
			.hr{
				height: 2px;
				border:2px solid #ddd;
			}
			.lable{
				position: relative;
				width: 12rem;
				text-align: center;
				background:#eee;
				font:1.2rem/2rem $yahei;
				margin:0 auto;
				z-index: 1;
				top:-1.5rem;
				color: #999;
			}
		}
		.gam{
			width: 28rem;
			display: flex;
			justify-content: space-between;
			.lis{
				width: 5rem;
				img{
					width: 5rem;
					height: 5rem;
				}
				.text{
					height: 3rem;
					font:1.1rem/3rem $yahei;
					color: #999;
					width: 100%;
					text-align: center;
				}
			}
		}
	}
	.masker{
		width: 100%;
		position: fixed;
		height:100%;
		top:0;
		z-index: 11;
		background:rgba(0,0,0,0.6);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		.valid-code{
			position:absolute;;
			z-index:12;
			width: 60%;
			background:#fff;
			.modal-title{
				width: 92%;
				padding: 0 4%;
				height: 3rem;
				font:1.4rem/3rem $yahei;
				background:#ddd;
				color: #666;
				display: flex;
				justify-content: space-between;
			}
			.modal-body{
				width: 100%;
				background: #fff;
				height: 12rem;
			}
		}
	}
</style>