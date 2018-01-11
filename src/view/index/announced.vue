<template>
	<div class="app-announced">
		<div class="content">
			<div class="lis" v-for="(item,index) in list" @click="go_to_detail(item.is_lottery)">
				<div class="img" :class="{ac:item.is_lottery == 0}">
					<img :src="item.thumb" alt="">
				</div>
				<div class="text">
					<div class="goods_name">
						{{ item.goods_name }}
					</div>
					<div class="price">
						价格：&nbsp;￥&nbsp;{{ item.price }}
					</div>
					<div class="time"  v-if="item.is_lottery == 0">
						<i class="fa fa-clock-o" aria-hidden="true"></i>2分57秒33
					</div>
					<div class="other" v-if="item.is_lottery != 0">
						<p>期号：{{ item.qihao }}</p>
						<p>幸运号码：<span>{{ item.lucky_num }}</span></p>
						<p>获奖者：{{ item.lucky_name }}</p>
						<p>本期参与：<span>{{ item.my_participate }}</span>次</p>
						<p>揭晓时间：{{ item.end_time }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {get_list} from '@/api/activity'
	export default{
		data(){
			return{

				list:''
			}
		},
		created:function(){

			this.get_new_lis();
		},
		methods:{
			get_new_lis(){
				const self = this;
 				get_list().then(response=>{
 					self.list = response.data;
 				});
			},
			//跳转到中奖详情
			go_to_detail(flag){
				if(flag == 0){
					return false;
				}
				this.$router.push({path:"/winning/detail"});
			}
		}
	}
</script>
<style lang="scss">
	 @import "src/style/index.scss";
	.mint-tab-item-label{
		font: 1.4rem/2rem $yahei;
	}
</style>
<style lang="scss" scoped>
	 @import "src/style/index.scss";
	 .content{
	 	width: 40rem;
	 	display: flex;
	 	justify-content: center;
	 	flex-wrap: wrap;
	 	background-color: #fff;
	 	.lis{
	 		width:38rem;
	 		display: flex;
	 		justify-content:space-between;
			flex-wrap: wrap;
			padding:1rem 0rem;
			border-bottom: 1px solid #ddd;
			.img{
				width: 10rem;
				height: 10rem;
				position: relative;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.ac:before{
				content: "";
				width: 4rem;
				height: 4rem;
				position: absolute;
				background: url('/static/images/flag.png');
				background-size: 100% 100%;
			}
			.text{
				width: 26rem;
				.goods_name{
					width: 100%;
					word-wrap: break-word;
					font:bold 1.6rem/1.8rem $yahei;
					margin-bottom: 1rem;
				}
				.price{
					width: 100%;
					color: #999;
					font:1.3rem/1.8rem $yahei;
					margin-bottom: 1rem;
				}
				.time{
					color: #F3183A;
					font:bold 3rem/3.5rem $yahei;
					i{
						margin:0 1rem;
					}
				}
				.other{
					width: 100%;
					p{
						width: 100%;
						font:1.1rem/1.5rem $yahei;
						color: #999;
						span{
							color: #F41A3D;
						}
					}
				}
			}
	 	}
	 }
</style>