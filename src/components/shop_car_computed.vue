<template>
	<div class="counter">
		<button class="minus" @click="numMinus">－</button>
		<input type="text" :value="nowNum" disabled>
		<button class="plus" @click="numPlus">＋</button>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				nowNum:0
			}
		},
		props:{
			num:{
				default:0
			},
			id:{
				default:1
			}
		},
		mounted:function(){
			this.nowNum=this.num;
		},
		watch:{
			num(){
				this.nowNum=this.num;	
				let resData = {id:this.id,num:this.nowNum};
				this.jsVal(resData);		
			}
		},
		methods:{
			numMinus(){
				if(this.nowNum<=0){
					return false;
				}
				this.nowNum--;
				let resData = {id:this.id,num:this.nowNum};
				this.jsVal(resData);
			},
			numPlus(){
				this.nowNum++;
				let resData = {id:this.id,num:this.nowNum};
				this.jsVal(resData);
			},
			jsVal(resData){
				this.$emit('resval',resData);	
			}
		}
	}
</script>
<style lang="scss" scoped>
	.counter{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		.minus{
			width: 25%;
			height: 100%;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 1.8rem;
			border:1px solid #ddd;
			background-color: #fff;
		}
		input{
			height:95%;
			width: 50%;
			border: 0;
			border:1px solid #ddd;
			text-align: center;
			font-size: 1.6rem;
		}
		.plus{
			width: 25%;
			height: 100%;
			border:1px solid #ddd;		
			background-color: #fff;
			font-size: 1.8rem;
		}
	}
</style>