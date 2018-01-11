<template>
	<div class="classification-detail">
		<div class="shoping_info">
			<div class="wz">共<span>{{ goodsData.length }}</span>件商品</div>
			<div class="icon" num="3">
				<img src="/static/images/shopcar.png" alt="">
			</div>
		</div>
		<div class="lis_area">
			<div class="lis" v-for="(item,index) in goodsData" >
				<div class="img">
					<a href="javascript:;" @click="go_to_detail(item.id)"><img :src="item.thumb" alt="" ></a>
				</div>
				<div class="content">
					<div class="base_info">
						<a class="name" @click="go_to_detail(item.id)" href="javascript:;">{{item.goods_name}}({{item.spec}})</a>	
						<div class="jd_wz">
							开奖进度<span>{{ item.already_num/item.total_num*100+'%' }}</span>
						</div>		

						<div class="jdt">
							<div class="black_prog"></div>
							<div class="red_prog" :style="{width:item.already_num/item.total_num*100+'%'}"></div>
						</div>			
					</div>
					<div class="btn">
						<button @click="bottom_show(index)">参与</button>
					</div>
				</div>
			</div>
		</div>
		<div class="masker" v-if="flag"></div>
	  	<transition name="bounce" >
			<div class="bottom_div" v-if="flag">
				<div class="title">
					<div class="thumb">
						<img :src="checkData.thumb" alt="">
					</div>
					<div class="lable">
							请选择参与人次
					</div>
					<i class="fa fa-times" aria-hidden="true" @click="close_div"></i>
				</div>
				<div class="js">
					<div class="bk3"></div>
					<div class="js_box">
						<counter @resval="jsval" :num="checkData.buy_num" :id="checkData.key"></counter>
					</div>
					<div class="prompt">
						参与人数为10的倍数
					</div>
					<div class="label_area">
						<div class="lis" :class="{ac:is_check == 1}" @click="select_num(1,20)">20</div>
						<div class="lis" :class="{ac:is_check == 2}" @click="select_num(2,50)">50</div>
						<div class="lis" :class="{ac:is_check == 3}" @click="select_num(3,100)">100</div>
						<div class="lis" :class="{ac:is_check == 4}" @click="select_num(4,200)">200</div>
					</div>
					<div class="bk1"></div>
					<div class="total_price">
						共<span>{{ total_price.toFixed(2) }}</span>元
					</div>
					<div class="btn" @click="keep">
						确定
					</div>
				</div>
			</div>
		</transition>			
	</div>
</template>
<script>
	//数据
	import {get_list as get_goods_list} from '@/api/goods'	
	// 组件
	import header from '@/view/public/child_header';
	import counter from '@/components/shop_car_computed'
	import { Indicator,Toast } from 'mint-ui';
	export default{
		data(){
			return{
				flag:false,
				is_check:0,
				goodsData:'',
				//选中的要计算数据
				checkData:'',
				single_price:0
			}
		},
		components:{
			"appHeader":header,
			"counter":counter
		},
		computed:{
			total_price(){
				return this.checkData.buy_num*this.single_price;
			}
		},
		created:function(){
			//获取商品数据
			this.get_goods_list();
			//抽奖单价
			this.single_price = this.$store.state.app.singlePrice;
		},
		methods:{
			bottom_show(index){
				this.checkData = this.goodsData[index];
				this.checkData['key'] = index;
				this.flag = !this.flag;
			},
			jsval(res){
				this.goodsData[res.id]['buy_num'] = res.num;
				this.checkData['buy_num'] = res.num;
			},
			select_num(nq,val){
				this.is_check = nq;
				this.checkData.buy_num = val;

			},
			get_goods_list(){
				const self = this;
				get_goods_list().then(response=>{
					let cache = response.data;
					cache.forEach((val,index,arr)=>{
						cache[index]['buy_num']=0;	
					})
					self.goodsData =cache;
				});
			},
			keep(){
				Toast({
				  message: this.checkData.goods_name+'  '+this.checkData.buy_num+'人次'+'加入到购物车'
				});		
			},
			//关闭底部DIV
			close_div(){
				this.flag = false;
				this.is_check = 0;
			},
			//查看商品详情
			go_to_detail(id){
				this.$router.push({path:'/goods/detail',query:{id:id}});
			}
		}
	}
</script>
<style lang="scss" scoped>
	 @import "src/style/index.scss";
	/*过度效果*/
	.bounce-enter-active {
	  animation: bounce-in .3s;
	}
	.bounce-leave-active {
	  animation: bounce-in .3s reverse;
	}
	@keyframes bounce-in {
	  0% {
	    height: 0rem;
	  }
	  100% {
	    height: 30rem;
	  }
	}

	
	.shoping_info{	
		width: 38rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		height: 4rem;
		padding: 0 1rem;
		background: #fff;
		align-items: center;
		position: relative;
		.wz{
			font:bold 1.5rem/3rem $yahei;

			span{
				margin:0 0.6rem;
				color: #FF344A;
			}
		}
		.icon{
			margin-right: 1rem;
			position: relative;
			img{
				width: 2.5rem;
				height: 2.5rem;
			}
		}
		.icon:before{
			content:attr(num);
			position: absolute;
			width: 1.5rem;
			height: 1.5rem;
			border-radius: 50%;
			top:-0.5rem;
			left:2rem;
			text-align: center;
			font:1.1rem/1.7rem $yahei;
			color:#fff;
			background: #FF344A;
		}
	}
	.lis_area{
		width: 100%;
		.lis{
			width: 38rem;
			padding: 1.5rem 1rem;
			background: #fff;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			border-top:1px solid #ccc;
			.img{
				width: 8rem;
				height: 8rem;
				margin-right: 1rem;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.content{
				width: 29rem;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				.base_info{
					width: 18rem;
					.name{
						width: 100%;
						word-wrap: break-word;
						font:bold 1.3rem/2rem $yahei;
						color: #000;
					}
					.jd_wz{
						width: 100%;
						color: #999;
						font:1.2rem/2rem $yahei;
						margin-bottom: 0.6rem;
						span{
							color: #3498DB;
							letter-spacing: 2px;
							margin-left: 3px;
						}
					}
					.jdt{
						width: 80%;
						position: relative;
						.black_prog{
							width: 100%;
							height: 1rem;
							border-radius: 0.5rem;
							background: #E3E3DC;
						}
						.red_prog{
							@extend .black_prog;
							background: #FF344A;
							position: absolute;
							top:0;
							z-index: 1;
						}
					}
				}
				.btn{
					width: 10rem;
					display: flex;
					flex-wrap: wrap;
					justify-content: flex-end;
					align-items: center;
					button{
						width: 8rem;
						height: 3.5rem;
						border:2px solid #FF344A;
						background: #fff;
						text-align: center;
						border-radius: 15px;
						font:1.5rem/2.8rem '微软雅黑';
						color: #FF344A;
					}
				}
			}
		}
	}
	.masker{
		width: 100%;
		height: 100%;
		position: fixed;
		top:0;
		background: rgba(0,0,0,0.4);
		z-index: 1;
	}
	.bottom_div{
		height: 30rem;
		width: 40rem;
		position: fixed;
		bottom: 0rem;
		opacity: 1;
		z-index: 10;
		.title{
			width: 100%;
			height: 4.5rem;
			background: #fff;
			display: flex;
			position: relative;
			align-items: center;
			.thumb{
				width: 7rem;
				height: 7rem;
				margin-left: 2rem;
				position: absolute;
				top:-5rem;

				img{
					width: 100%;
					height: 100%;
					border:1px solid #aaa;
				}
			}
			.lable{
				font:bold 1.5rem/2rem $yahei;
				margin:0 auto;

			}
			i{
				margin-right: 1rem;
				font-size: 2.5rem;
				color: #999;
				position: absolute;
				right: 1rem;
			}
		}
		.js{
			width: 100%;
			height: 25.5rem;
			background: #F5F5F5;
			flex-wrap: wrap;
			.js_box{
				width: 28rem;
				height: 4rem;
				margin:0 auto;
			}
			.prompt{
				width: 100%;
				height: 3rem;
				font:1.3rem/3rem $yahei;
				color: #999;
				text-align: center;
				margin-bottom: 0.6rem;
			}
			.label_area{
				width: 28rem;
				margin:0 auto;
				height: 3.5rem;
				display: flex;
				justify-content: space-between;
				.lis{
					width: 6rem;
					border:1px solid #aaa;
					text-align: center;
					font:bold 1.3rem/3.5rem $yahei;
					color: #666;

				}
				.ac{
					border:1px solid #3498DB;	
					color: #3498DB;				
				}
			}
			.total_price{
				width: 100%;
				height: 4rem;
				font:bold 1.6rem/4rem '微软雅黑';
				letter-spacing: 2px;
				text-align: center;
				margin-bottom: 0.8rem;
				span{
					color: #FF344A;
				}
			}
			.btn{
				width: 16rem;
				height: 4rem;
				background: #F41A3D;
				border-radius: 10px;
				text-align: center;
				margin:0 auto;
				color: #fff;
				font:bold 1.4rem/4rem '微软雅黑';
			}
		}
	}
</style>