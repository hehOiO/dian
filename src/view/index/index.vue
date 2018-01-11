<template>
	<div class="app-home">
		<mt-swipe :show-indicators="false" style="height: 26rem">
		  <mt-swipe-item>
			 <img src="/static/images/g1.jpg" alt="">
		  </mt-swipe-item>
		  <mt-swipe-item>
			 <img src="/static/images/g2.jpg" alt="">
		  </mt-swipe-item>
		  <mt-swipe-item>
			 <img src="/static/images/g3.gif" alt="">
		  </mt-swipe-item>
		</mt-swipe>
		<div class="classifiction">
			<div class="bk1"></div>
			<div class="lis_area">
				<router-link to="/goods/classification">
					<div class="lis">
						<div class="icon yellow">
							<i class="fa fa-list" aria-hidden="true"></i>
						</div>
						<div class="text">
							分类
						</div>
					</div>
				</router-link>
				<router-link to="/goods/fastopen">
					<div class="lis">
						<div class="icon blue">
							<i class="fa fa-clock-o" aria-hidden="true"></i>
						</div>
						<div class="text">
							秒开专区
						</div>
					</div>
				</router-link>
				<router-link to="/thesun">
					<div class="lis">
						<div class="icon red">
							<i class="fa fa-area-chart" aria-hidden="true"></i>
						</div>
						<div class="text">
							晒单
						</div>
					</div>
				</router-link>
				<router-link to="/system/help">
					<div class="lis">
						<div class="icon green">
							<i class="fa fa-question" aria-hidden="true"></i>
						</div>
						<div class="text">
							新手帮助
						</div>
					</div>
				</router-link>
			</div>
			<div class="bk1"></div>
		</div>
		<div class="notice">
			<div class="zw">
				<i class="fa fa-volume-up" aria-hidden="true"></i>
				<div class="p1">
					<p >恭喜<a class="name">xxx</a>获的<a class="goods">洗发露礼品</a></p>
					<p style="display: none;">恭喜<a class="name">xxx</a>获的<a class="goods">沐浴乳礼品</a></p>	
					<p style="display: none;">恭喜<a class="name">xxx</a>获的<a class="goods">洗洁精礼品</a></p>			
				</div>
			</div>
		</div>
		<div class="bk1" style="height: 1.5rem"></div>
		<div class="good_area">
			<div class="navigation">
				<div class="lis action">人气</div>
				<div class="lis">最新</div>
				<div class="lis">进度</div>
				<div class="lis">价格<i class="fa fa-sort" aria-hidden="true" style="margin-left: 0.5rem;color: #999"></i></div>
			</div>
			<div class="zt">
				<div class="lis" v-for="(item,index) in goods_list">
					<div class="bk1"></div>
					<img :src="item.thumb" alt="">
					<div class="bk1"></div>
					<div class="name">
						{{ item.goods_name }}
					</div>
					<div class="bk1"></div>
					<div class="param">
						<div class="jd">
							<div class="label">
								夺宝进度<span style="margin-left: 0.4rem">{{ item.already_num/item.total_num*100+'%' }}</span>
							</div>
							<div class="nr">
								<div class="line_bg"></div>
								<div class="line_nr" :style="{width:item.already_num/item.total_num*100+'%'}"></div>
							</div>
							<div class="bk1"></div>
						</div>
						<div class="shop_car">
							<i class="fa fa-shopping-cart" aria-hidden="true" @click="add_car"></i>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>s
<script>
	import { Indicator,Toast } from 'mint-ui';
	import {get_list} from '@/api/goods'
	export default{
		data(){
			return{
				goods_list:'',
				timer:''
			}
		},
		created:function(){
			//获取商品数据
			this.get_goods_list();
		},
		mounted:function(){
			//切换公告消息

			this.changeNotice();
		},

        destroyed: function () {
           //组件销毁时，清除定时器
           clearTimeout(this.timer);
        },
		methods:{
			changeNotice(i = 0){
				const self = this;
				$('.notice .p1 p').hide();
				$('.notice .p1 p').removeClass('notice_donghua');
				let pLength = $('.notice .p1 p').length;
				if(i>=pLength){
					i=0;
				}
				$('.notice .p1 p').eq(i).show();
				$('.notice .p1 p').eq(i).addClass('notice_donghua');
				self.timer=setTimeout(function(){
					$('.notice .p1 p').eq(i).hide();
					i++;
					self.changeNotice(i);
				},3200)

			},
			get_goods_list(){
				const self = this;
				Indicator.open('数据加载中');
				get_list().then(response=>{
					self.goods_list = response.data;
					Indicator.close();
				});
			},
			//加入购物车
			add_car(){
				Toast({
				  message: '加入购物车成功',
				});				
			}
		}
	}
</script>
<style scoped lang="scss">
    @import "src/style/index.scss";
	.app-home{
		width: 100%;
	}
	@keyframes donghua
	{
		0% {top:0rem;}
		30% {top:-3rem;}
		70% {top:-3rem;}
		100%{top:-6rem;}
	}
	.classifiction{
		width: 100%;
		background: #fff;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.lis_area{
			width: 36rem;
			display: flex;
			justify-content: space-between;
			.lis{
				width: 5rem;
				height: 8rem;
				.yellow{
					background: #FA9A36;
				}
				.red{
					background: #4DC7FA;
				}
				.blue{
					background: #FE4E78;
				}
				.green{
					background: #47D686;
				}
				.icon{
					border-radius: 50%;
					width: 5rem;
					height: 5rem;
					display: flex;
					align-items: center;
					justify-content: center;
					i{
						color: #fff;
						font-size: 2.5rem;
					}					
				}
				.text{
					width: 100%;
					text-align: center;
					font:1.2rem/3rem $yahei;
					color: #333;
				}
			}
		}
	}
	.notice{
		width: 100%;
		margin-top: 0.1rem;
		background: #fff;
		display: flex;
		justify-content: center;
		height: 4rem;
		align-items: center;
		overflow: hidden;
		.zw{
			width:36rem;
			display: flex;
			justify-content: flex-start;
			i{
				color: #DD7794;
				font-size: 2rem;
				margin-right: 1.5rem;
			}
			.p1{
				font:1.4rem/2rem $yahei;
				color: #999;
				width: 34rem;
				position: relative;
				top:3rem;
				letter-spacing:4px;
				.notice_donghua{
					animation:donghua 4s infinite;
				}
				p{
					width: 100%;
					position: relative;
				}
				.name{
					color: #4DC7FA;
				}
				.goods{
					color: #333;
				}
			}
		}
	}
	.good_area{
		width:100%;
		background: #fff;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.navigation{
			width: 100%;
			display: flex;
			justify-content: space-between;
			height: 4rem;
			border-top: 1px solid #eee;
			.lis{
				width: 25%;
				text-align: center;
				color: #333;
				display: flex;
				justify-content: center;
				align-items: center;
				font:1.5rem/4rem $yahei;
				color: #333;
			}
			.action{
				color: #DD7794;
			}
		}
		.zt{
			width: 39.8rem;
			border-bottom:1px solid #bbb;
			border-top:1px solid #ddd;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			.lis{
				width: 19.75rem;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				border:1px solid #ddd;
				img{
					width: 12rem;
					height: 12rem
				}
				.name{
					width: 19.8rem;
					font:bold 1.2rem/2.2rem $yahei;
					text-align: center;
				}
				.param{
					width:17.8rem;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					.jd{
						width: 12.9rem;
						.label{
							width: 100%;
							font:1.2rem/1.4rem $yahei;
							color: #999;
							span{
								font:1.2rem/1.4rem $yahei;
								color: #4297A5;
							}
						}
						.nr{
							width: 100%;
							margin-top: 0.5rem;
							position: relative;
							height: 1rem;
							.line_bg{
								width: 95%;
								height: 0.8rem;
								border-radius: 0.25rem;
								background-color: #E3E3DC;
								position: absolute;
							}
							.line_nr{
								width: 95%;
								height: 0.8rem;
								border-radius: 0.25rem;
								background-color: #F5BD0D;
								position: absolute;								
							}
						}
					}
					.shop_car{
						width: 4.9rem;
						display: flex;
						justify-content: center;
						i{
							font-size: 2.5rem;
							color: #BE5473;
							margin-top: 1rem;
						}
					}
				}
			}
		}
	}
</style>