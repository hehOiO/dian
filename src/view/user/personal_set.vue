<template>
	<div class="user-set">
		<div class="bk1"></div>
		<div class="base-info">
			<router-link to="/user/updataphoto">
				<div class="lis" style="padding: 1rem">
					<div>头像</div>
					<div class="photo">
						<img src="/static/images/default.gif" alt="">
						<i class="fa fa-angle-right" aria-hidden="true"></i>
					</div>
				</div>
			</router-link>
			<div class="lis">
				<span>ID</span>
				<span class="small">14389438</span>
			</div>
			<router-link :to="{path:'/user/updatanickname',query:{'nickname':'象山吴彦祖'}}">
				<div class="lis">
					<span>昵称</span>
					<span class="small">象山吴彦祖<i class="fa fa-angle-right" aria-hidden="true"></i></span>
				</div>
			</router-link>
		</div>
		<div class="bk1"></div>
		<div class="base-info">
			<router-link to="/user/myaddress">
				<div class="lis">
					<span>我的地址</span>
					<i class="fa fa-angle-right" aria-hidden="true"></i>
				</div>
			</router-link>
		</div>
		<div class="bk1"></div>
		<button class="login_out">退出登录</button>
	</div>
</template>
<script>
	import header from '@/view/public/child_header';
	export default{
		data(){
			return{

			}
		},
		components:{
			"appHeader":header
		},
		methods:{

		}
	}
</script>
<style scoped lang="scss">
	@import "src/style/index.scss";	
	a{
		color: #000;
	}
	.base-info{
		width: 100%;
		.lis{
			width: 38rem;
			padding: 1.5rem 1rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #fff;
			font:bold 1.6rem/1.5rem $yahei;
			border-bottom:1px solid #ddd;

			.small{
				font:1.4rem/1.5rem $yahei;
				color: #999;	
				display: flex;
				align-items: center;			
			}
				i{
					margin-left: 1rem;
					font-size: 2.2rem;
				}
			.photo{
				height: 6rem;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				img{
					width: 6rem;
					height: 6rem;
					border-radius: 15px;
				}

			}
		}
	}	
	.login_out{
		width: 38rem;
		margin-left: 1rem;
		height: 4.5rem;
		text-align: center;
		border:0px;
		border-radius: 10px;
		background: #FF344A;
		color: #fff;
		font:1.6rem/4.5rem $yahei;
	}
</style>