<template>
	<div class="app-classification">
		<div class="lis_area" @click="go_to_detail()">
			<div class="lis">
				<img src="/static/images/aliicon/all.png" alt="" >
				<div class="font">
					全部商品
				</div>
			</div>
		</div>
		<div class="bk1"></div>
		<div class="lis_area">
			<div class="title">
				<span style="margin-left: 0.5rem;">分类浏览</span>
			</div>
			<div class="lis" v-for="(item,index) in typeData" @click="go_to_detail(item.typename)">
				<img :src="item.typeicon" alt="">
				<div class="font">
					{{ item.typename }}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	//数据
	import {get_type_list} from '@/api/type'
	export default{
		data(){
			return{
				typeData:''
			}
		},
		created:function(){
			//获取分类列表
			this.get_type_list();
		},
		methods:{
			get_type_list(){
				const self = this;
				get_type_list().then(response=>{
					self.typeData = response.data;
				});
			},
			go_to_detail(typename=''){
				if(typename == ''){
					this.$router.push({path:'/goods/classificationdetail'});
				}else{
					this.$router.push({path:'/goods/classificationdetail',query:{typename:typename}});					
				}

			}
		}
	}
</script>
<style lang="scss" scoped>
	 @import "src/style/index.scss";
	 .lis_area{
		width: 38rem;
		padding: 0 1rem;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		background: #fff;
		.lis{
			width: 100%;
			height: 5rem;
			border-bottom:1px solid #ccc;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;
			img{
				height: 2.5rem;
				width: 2.5rem;
				margin-right: 1rem;
				margin-left: 1rem;
			}
			.font{
				font:bold 1.5rem/3.5rem $yahei;
				height: 3rem;
				color: #4D4D4D;
			}
		}
		.lis:last-child{
			border-bottom: 0px;
		}
		.title{
			width: 100%;
			height: 4rem;
			border-bottom:1px solid #ccc;
			font:1.4rem/4.5rem $yahei;
			color: #999;
		}
	 }
</style>