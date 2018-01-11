<template>
	<div class="app-service">
		<app-header></app-header>
		<div class="bk1"></div>
		<div class="text">
			<div class="title">
				联系方式
			</div>
			<div class="p1">如果遇到问题，请采取以下方法联系我们</div>
			<div class="p1">客服热线：0574-15121212</div>
			<div class="p1">客服QQ:465251222</div>
			<div class="p1">（客服工作时间为正常工作日:8:00~17:00。其余时间我们会尽快回复你)</div>
		</div>
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
		}
	}
</script>
<style lang="scss" scoped>
	 @import "src/style/index.scss";	
	 .app-service{
		width: 100%;

	 }
	 .text{
		width: 38rem;
		margin:0 auto;
		.title{
			width: 98%;
			border-left: 4px solid #FF344A;
			height: 2.5rem;
			padding-left: 2%;
			font:bold 1.6rem/2.5rem $yahei;
		}
		.p1{
			width: 97%;
			padding-left: 3%;
			font:1.3rem/2.5rem $yahei;
			color: #656565;
		}
	 }
</style>