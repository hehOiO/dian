<template>
	<div class="system-help">
		<div class="bk1"></div>
		<div class="text">
			<div class="title">
				新手帮助
			</div>
			<div class="p1">1、新手需要帮助XXXXXXXX</div>
			<div class="p1">2、新手需要帮助XXXXXXXX</div>
			<div class="p1">3、新手需要帮助XXXXXXXX</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
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