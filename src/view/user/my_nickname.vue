<template>
	<div class="user-nickname">
		<div class="bk1"></div>
		<input type="text" class="nickname" :placeholder="$route.query!=undefined?$route.query.nickname:'无'">
		<p class="notice">请勿用手机号/真实姓名作为昵称</p>
		<button @click="keep" class="btn">保存</button>
	</div>
</template>
<script>
	export default{
        data(){
        	return{

        	}
        },
        created:function(){

        },
        methods:{
        	keep(){

        	}
        }
	}
</script>
<style scoped lang="scss">
	@import "src/style/index.scss";	
	input{
		outline: none;
	}
	.user-nickname{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.nickname{
		width:94%;
		padding: 1rem 4%;
		background:#fff;
		border:0px;
		height: 3.5rem;
		font:1.4rem/3.5rem $yahei;
		margin-bottom: 0.2rem;
	}
	.notice{
		width:94%;
		padding: 0rem 4%;
		color: #999;
		font:1.4rem/3rem $yahei;	
		margin: 0.3rem;	
	}
	.btn{
		width: 98%;
		text-align: center;
		height: 4rem;
		background:#00D762;
		border:0;
		border:10px;
		font:1.7rem/4rem $yahei;
		color: #fff;
		text-align: center;
	}
</style>