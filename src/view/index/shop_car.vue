<template>
	<div class="shop-car">
		<div class="empty" v-if="!recommendData">
				<div class="p">
				<i class="fa fa-shopping-cart" aria-hidden="true"></i><br><span>您的购物车空空如也</span><br><span>是否立即登录</span><br>
				<div class="btn">
					登录
				</div>
				</div>
		</div>
		<div class="shop-car-area" >
			<div class="lis" v-for="(item,index) in shopCarData">
				<div class="action">
					<span></span>
					<span @click="show_method(index)" :id="'editor_wz'+index">编辑</span>
				</div>
				<div class="zt">
					<div class="check">
						<input type="checkbox" name="" id="" :checked="item.is_check" @click="select_box(index)">
					</div>
					<div class="js" >
						<img :src="item.thumb" alt="">
						<div class="goods-select" :id="'editor_car'+index" style="display: none;">
							<div class="num-edit">
								<counter :num="item.buy_num" @resval="jsval" :id="index"></counter>
							</div>
							<div class="del">删除</div>
						</div>
						<div class="wz"  :id="'editor_show'+index" >
							<div class="base_info">
								<p class="name">{{ item.goods_name }}</p>
								<p class="ys">暂无样式</p>
								<p class="spec">
									{{ item.spec }}
								</p>
							</div>
							<div class="price">
								<p class="yj"><s>￥{{ item.price }}</s></p>
								<p class="num">X{{ item.buy_num }}</p>
							</div>
						</div>
					</div>

				</div>
			</div>
			<div class="bk3"></div>
		</div>
		<div class="recommend" v-if="recommendData">
			<div class="label">
				<hr>
				<span class="text">为你推荐</span>
			</div>
			<div class="bk1"></div>
			<div class="other_area">
				<div class="lis" v-for="(item,index) in recommendData">
					<img :src="item.thumb" alt="">
					<div class="wz">
						<div class="bk1"></div>
						<p class="name">{{ item.goods_name}}</p> 
						<div class="param">
							<div class="jd">
								<div class="label_1">
									夺宝进度<span style="margin-left: 0.4rem">{{ item.already_num/item.total_num*100+'%' }}</span>
								</div>
								<div class="nr">
									<div class="line_bg"></div>
									<div class="line_nr" :style="{width:item.already_num/item.total_num*100+'%'}"></div>
								</div>
								<div class="bk1"></div>
							</div>
							<div class="shop_car">
								<i class="fa fa-shopping-cart" aria-hidden="true"></i>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
		<div class="buy">
			<div class="text">
				<div class="all-select"><input type="checkbox" name="" id="" @click="all_select"><span style="margin-left: 0.6rem;position: relative;top:-0.3rem" @click="all_select" v-if="shopCarData[0]">全选</span></div>
				<div class="price">
					<span class="yf">不含运费</span>
					<span class="total-price">￥{{ totalPrice }}</span>
				</div>
			</div>
			<div class="btn">
				结算
			</div>
		</div>
		<!-- 防止全选异常的 -->
		<span style="display: none">{{ allcheck }}</span>
		<div class="bk3"></div>	
	</div>
</template>
<script>
	//数据
	import {get_recommend_list,get_shop_car_list} from '@/api/goods'
	//组件
	import counter from '@/components/shop_car_computed'
	export default{
		data(){
			return{
				recommendData:'',
				shopCarData:'',
				allcheck:false,
				totalPrice:0,
				single_price:0
			}
		},
		created:function(){
			//获取推荐商品数据
			this.get_recommend_list();
			//获取购物车数据
			this.get_shop_car_list();
			//抽奖单价
			this.single_price = this.$store.state.app.singlePrice;
		},
		components:{
			'counter':counter
		},
		methods:{
			get_recommend_list(){
				const self = this;
				get_recommend_list().then(response=>{
					self.recommendData = response.data;
				});
			},
			//购物车面板显示方式
			show_method(id_num){
				let flag = $('#editor_wz'+id_num).html();
				if(flag == '编辑'){
					$('#editor_wz'+id_num).html('取消')
					$('#editor_car'+id_num).show();
					$('#editor_show'+id_num).hide();
				}else{
					$('#editor_wz'+id_num).html('编辑')
					$('#editor_car'+id_num).hide();
					$('#editor_show'+id_num).show();
				}
			},
			get_shop_car_list(){
				const self = this;
				get_shop_car_list().then(response=>{
					self.shopCarData = response.data;
					self.shopCarData.forEach((value,key,arr)=>{
						self.shopCarData[key]['is_check']=false;
					});

				});				
			},
			jsval(res){
				this.shopCarData[res.id]['buy_num'] = res.num;
				this.count_price();
			},
			//选中该商品
			select_box(index){ 
				this.shopCarData[index]['is_check'] = !this.shopCarData[index]['is_check'];
				this.count_price();
			},
			all_select(){
				const self = this;
				self.allcheck = !self.allcheck;
				if(self.allcheck){
					self.shopCarData.forEach((value,key,arr)=>{
						self.shopCarData[key]['is_check'] = true;
					});					
				}else{
					self.shopCarData.forEach((value,key,arr)=>{
						self.shopCarData[key]['is_check'] = false;
					});						
				}
				self.count_price();
			},
			count_price(){
				const self=this;
				self.totalPrice= 0;
				self.shopCarData.forEach((value,key,arr)=>{
					if(self.shopCarData[key]['is_check'] == true){
						self.totalPrice += self.shopCarData[key]['buy_num']*self.single_price;
					}
				});				
			}
		}
	}
</script>
<style lang="scss" scoped>
    @import "src/style/index.scss";
    .shop-car{
    	display: flex;
		justify-content: center;
		flex-wrap: wrap;
		width: 100%;
		background-color: #fff;
    }
    .empty{
    	width: 100%;
    	background-color: #F4F4F4;
    	height: 32rem;
    	display: flex;
    	justify-content: center;
    	flex-wrap: wrap;
    	text-align: center;
		.p{
			width: 100%;
			height: 10rem;
			margin-top: 6rem;
    		i{
    			color: #C3C3C3;
    			font-size: 10rem;
    		}
    		font:1.7rem/2.2rem $yahei;
    		color:#999;
		}
		.btn{
			width: 12rem;
			height: 4rem;
			background-color: #F41A3D;
			margin:0 auto;
			border-radius: 0.5rem;
			margin-top: 1rem;
			font:1.4rem/4rem $yahei;
			color: #fff;
			text-align: center;
		}
    }
    .shop-car-area{
    	width: 100%;
    	display: flex;
    	justify-content: center;
    	flex-wrap: wrap;
    	background-color: #F1F1F1;
    	.lis{
    		width: 38rem;
    		background-color: #fff;
    		height: 15rem;
    		padding: 0 1rem;
    		margin-bottom: 0.5rem;
    		.action{
    			width: 100%;
    			display: flex;
    			height: 3rem;
    			justify-content: space-between;
    			border-bottom: 1px solid #ddd;
    			font:1.4rem/3rem $yahei;
    			color: #999;
    		}
    		.zt{
    			width: 100%;
    			display: flex;
    			flex-wrap:wrap;
    			height: 12rem;
    			justify-content: flex-start;
    			.check{
    				width: 3rem;
    				height: 100%;
    				display: flex;
    				align-items: center;
    				justify-content: center;
    				input[type="checkbox"]{
    					width: 2rem;
    					height: 2rem;
    				}
    			}
    			.js{
    				width: 34rem;
    				padding: 1rem 0.5rem;
    				display: flex;
    				justify-content: flex-start;
    				img{
						height: 10rem;
						width: 11rem;
						margin-right: 1rem;
    				}
					.goods-select{
						width: 22rem;
						display: flex;
						justify-content: space-between;	
						.del{
							width: 6rem;
							background-color: #FF344A;
							height: 100%;
							text-align: center;
							display: flex;
							justify-content: center;
							align-items: center;
							color: #fff;
							font:1.4rem/1.6rem $yahei;
						}
						.num-edit{
							width: 14rem;
							padding: 0 1rem;
							height: 3rem;
							margin-top: 3.5rem;
						}
					}
    				.wz{
    					width: 22rem;
    					display: flex;
    					justify-content: space-between;
    					.base_info{
    						width: 16rem;
    						padding-top: 1rem;
    						.name{
								font:1.6rem/2.3rem $yahei;
    						}
     						.ys{
    							font:1.3rem/2rem $yahei;
    							color: #999;
    						}
    						.spec{
    							font:1.3rem/2rem $yahei;
    							color: #999;
    						}
    					}
    					.price{
    						width: 6rem;
    						text-align: right;
    						color: #FF344A;
    						.yj{
     							font:bold 1.3rem/2rem $yahei;   							
    						}
							.num{
								font:1.1rem/2rem $yahei;
								color: #999;
							}

    					}
    				}
    			}
    		}
    	}
    }
    .recommend{
    	width: 100%;
    	display: flex;
    	justify-content: center;
    	flex-wrap: wrap;
    	.label{
    		width: 100%;
    		height: 3rem;
    		display: flex;
    		justify-content: center;
    		align-items: center;
    		flex-wrap: wrap;
    		position: relative;
    		hr{
    			width: 100%;
    			height: 1px;
				border:1px solid #ddd;
    		}
    		.text{
    			text-align: center;
    			background-color: #fff;
    			width: 10rem;
    			position:absolute;
    			z-index: 1;
    			font:1.3rem/2rem $yahei;
    			color: #999;

    		}
    	}
    	.other_area{
    		width: 38rem;
    		display: flex;
			flex-wrap:wrap;
			justify-content: flex-start;
			.lis{
				padding: 1rem;
				width: 16.9rem;
				border-bottom: 0.1rem solid #ddd;
				img{
					width: 100%;
					height: 16rem;

				}
				.wz{
					width: 100%;
					.name{
						 font:bold 1.5rem/2rem $yahei;
					}
				}
				.param{
					width:17.8rem;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					.jd{
						width: 12.9rem;
						.label_1{
							width: 100%;
							font:1.2rem/1.4rem $yahei;
							color: #999;
							text-align: left;
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
			.lis:nth-child(odd){
				border-right: 0.1rem solid #ddd;
			}
    	}
    }
    .buy{
    	width: 100%;
    	display: flex;
    	justify-content: flex-start;
    	flex-wrap: wrap;
    	position: fixed;
    	height: 4rem;
		background-color: #fff;
		border-bottom: 1px solid #ddd;
    	bottom: 5.9rem;
    	z-index: 4;
    	.text{
    		width: 30rem;
    		padding: 0 1rem;
    		height: 100%;
    		display: flex;
    		justify-content: space-between;
    		align-items: center;
    		input[type="checkbox"]{
    			width: 1.5rem;
    			height: 1.5rem;
    		}
    		.all-select{
    			font:1.4rem/1.4rem $yahei;
    		}
    		.price{
    			.yf{
    				font:1.2rem/1.4rem $yahei;
    				color: #999;
    			}
    			.total-price{
    				color: #FF344A;
    				font:bold 1.5rem/1.5rem $yahei;
    			}
    		}
    	}
    	.btn{
    		width: 8rem;
    		height: 100%;
    		background-color: #FF344A;
    		font:1.4rem/4rem $yahei;
    		color:#fff;
    		text-align: center;
    		background-color: #FF344A;
    	}
    }
</style>