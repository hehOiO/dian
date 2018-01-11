<template>
	<div class="app-system-st">
		<app-header></app-header>
		<div class="bk1"></div>
		<div class="lis_area">
			<router-link to="/system/help">
				<div class="lis">
					新手帮助
				</div>
			</router-link>
			<router-link to="/system/rule">
				<div class="lis">
					开奖规则
				</div>
			</router-link>
			<router-link to="/system/question">
				<div class="lis">
					常见问题
				</div>
			</router-link>
			<router-link to="/system/agreement">
				<div class="lis">
					用户协议
				</div>
			</router-link>
			<router-link to="/system/about">
				<div class="lis">
					关于我们
				</div>
			</router-link>
		</div>
		<div class="bk1"></div>
		<div class="lis_area">
			<div class="lis">
				版本检测
				<span class="edition">V.1.0.0</span>
			</div>	
			<div class="lis" @click="clear_cache">
				清除缓存
			</div>			
		</div>
	</div>
</template>
<script>
	import { Toast } from 'mint-ui';
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
			clear_cache(){
				Toast({
					message:'清除缓存成功'
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	 @import "src/style/index.scss";
	 .lis_area{
	 	width: 100%;
	 	background: #fff;
	 	display: flex;
	 	justify-content: center;
	 	flex-wrap: wrap;
	 	a{
	 		color:#000;
	 	}
	 	.lis{
	 		width: 38rem;
	 		padding: 2rem 0rem;
	 		font:bold 1.5rem/1.5rem $yahei;
	 		border-bottom:1px solid #ccc;

	 		.edition{
	 			color: #999;
	 			font:1.5rem/1.5rem $yahei;
	 			margin-left: 1rem; 
	 			letter-spacing: 2px;
	 		}
	 	}
	 }
</style>