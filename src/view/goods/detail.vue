<template>
	<div class="goods-detail">
		<div class="base_info" v-if="goodData">
			<div class="banner" v-if="goodData.pic_area">
				<mt-swipe :show-indicators="true" style="height: 22.5rem" >
				  <mt-swipe-item v-for="(item,index) in goodData.pic_area" :key="index">
					 <img :src="item" alt="">
				  </mt-swipe-item>
				</mt-swipe>
			</div>
			<div class="shopinfo">
				<div class="goodsname">
					<span>{{ goodData.is_jiexiao | setStatusInfo}}</span>{{ goodData.goods_name}}({{ goodData.spec}})
				</div>
				<div class="disc">
					&nbsp;{{ goodData.disc}}
				</div>
				<div class="qihao">
					&nbsp;期号:{{ goodData.id}}
				</div>
			</div>	
			<div class="lucky"v-if="goodData.is_jiexiao == 1">
				<div class="title">
					<div class="number">
						幸运号码:12580
					</div>
					<div class="methods">
						计算详情
					</div>
				</div>
				<div class="content">
					<div class="person">
						<div class="img">
							<img src="/static/images/default.gif" alt="">		
						</div>
						<div class="text">
							<div class="username">
								<span>象山吴彦祖~</span>
								<span class="address">杭州市</span>
							</div>
							<div class="p1">
								用户ID：123061
							</div>
							<div class="p1">
								揭晓时间：2017-12-31 15:00:00
							</div>
							<div class="p1">
								本期参与<span>4</span>人次
							</div>
						</div>
					</div>
					<div class="join">
						<a href="">参与详情></a>
					</div>
				</div>
			</div>		
			<div class="countdown" v-if="goodData.is_jiexiao == 0">
				<div class="title">
					<div class="number">
						揭晓倒计时:{{ surplus }}
					</div>
					<div class="methods" @click="go_to_rule">
						计算详情
					</div>
				</div>				
			</div>
		</div>
		<div class="bk1"></div>
		<div class="operation">
			<div class="lis" @click="go_to_share(goodData.id)">
				<div class="left">
					<img src="/static/images/aliicon/camera_icon.png" alt="">
					<span>晒单分享</span>
				</div>
				<div class="right">
					<i class="fa fa-angle-right" aria-hidden="true"></i>
				</div>
			</div>
			<div class="new">
				<div class="wz">
					新的一期火爆进行中...					
				</div>
				<div class="btn" @click="bottom_show">
					立即参与
				</div>
			</div>
		</div>
		<div class="bk1"></div>
		<div class="history">
			<div class="title">
				<div class="label">本期参与记录</div>
				<div class="time">截止到({{  nowtime }})</div>
			</div>
			<div class="zt" v-if="goodData.join_data">
				<div class="lis" v-for="(item,index) in goodData.join_data">
					<div class="person">
						<div class="img">
							<img :src="item.photo" alt="">		
						</div>
						<div class="text">
							<div class="username">
								<span class="name">{{ item.username}}~</span>
								<div class="address"><span>{{ item.join_num}}</span>人次</div>
							</div>
							<div class="p1">
								{{ item.address }}
							</div>
							<div class="p1">
								{{ item.create_time}}
							</div>
						</div>
					</div>					
				</div>
			</div>
		</div>
		<div class="bk3"></div>
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
						<counter @resval="jsval" :num="checkData.buy_num"></counter>
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
	//组件
	import counter from '@/components/shop_car_computed'
	import { Indicator,Toast } from 'mint-ui';
	//数据
	import {fetch_goods_data} from '@/api/goods'
	import {strTotime,secondToTime} from '@/func/common'
	export default{
		data(){
			return{
				goodData:'',
				nowtime:'',
				surplus:'',
				flag:false,
				is_check:0,
				checkData:'',
				single_price:0,
				//定时器
				timer:''
			}
		},
		created:function(){
			//获取商品详情
			this.fetch_goods_data();
			this.nowtime = new Date().Format("yyyy-MM-dd hh:mm:ss");
			//抽奖单价
			this.single_price = this.$store.state.app.singlePrice;
		},
        destroyed: function () {
           //组件销毁时，清除定时器
           clearTimeout(this.timer);
        },
		components:{
			"counter":counter
		},
		computed:{
			total_price(){
				return this.checkData.buy_num*this.single_price;
			}
		},
		methods:{
			fetch_goods_data(){
				const self = this;
				fetch_goods_data().then(response=>{
					let cache = response.data;
					cache['buy_num']=0;	
					self.goodData =cache;
					if(self.goodData.is_jiexiao == 0){
						self.count_down();
					}
				});
			},
			//倒计时
			count_down(){
				let newstartTime =new Date().getTime();
				let newendTime =strTotime(this.goodData.surplus_time).getTime();
				let diffTime = (newendTime-newstartTime)/1000;
				if(diffTime == NaN && diffTime == undefined && diffTime == null){
					return '时间格式错误';
				}
				if(diffTime<=0){
					this.goodData.is_jiexiao =1;
					return false;
				}
				diffTime = Math.floor(diffTime);
				this.surplus = secondToTime(diffTime);
				this.timer = setTimeout(this.count_down,1000);
			},
			bottom_show(){
				this.checkData = this.goodData;
				this.flag = !this.flag;
			},
			jsval(res){
				this.goodData['buy_num'] = res.num;
				this.checkData['buy_num'] = res.num;
			},
			select_num(nq,val){
				this.is_check = nq;
				this.checkData.buy_num = val;
			},
			//关闭底部DIV
			close_div(){
				this.flag = false;
				this.is_check = 0;
			},
			//提交
			keep(){
				Toast({
				  message: this.checkData.goods_name+'  '+this.checkData.buy_num+'人次'+'加入到购物车'
				});						
			},
			//晒单分享
			go_to_share(id){
				this.$router.push({path:'/thesun/share',query:{id:id}});
			},
			go_to_rule(){
				this.$router.push({path:'/goods/rule'});
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
	 .base_info{
	 	 width: 100%;
	 	 background: #fff;
	 	 padding-bottom: 1rem;
		 .banner{
		 	width: 100%;
		 	margin-bottom: 0.6rem;
		 	img{
		 		width: 40rem;
		 		height: 22.5rem;
		 	}
		 }
		 .shopinfo{
			width: 38rem;
			padding:0 1rem;
			.goodsname{
				width: 100%;
				font:bold 1.5rem/2.5rem $yahei;
				span{
					padding:0.2rem 0.8rem;
					border:2px solid #2778BA;
					font:1.2rem/2.5rem $yahei;
					color: #2778BA;
					margin-right: 1rem;
					border-radius: 0.3rem;
				}
			}
			.disc{
				margin-top: 0.3rem;
				font:1.3rem/2rem $yahei;	
				color: #666;	
				margin-bottom: 0.3rem;	
			}
			.qihao{
				@extend .disc;
			}
		 }
		 .lucky{
		 	width: 38rem;
		 	padding:0 1rem;
		 	.title{
		 		width: 36rem;
		 		padding:0 1rem;
		 		height: 4rem;
				border-radius: 10px 10px 0 0;
		 		background: #F41A3D;
		 		display: flex;
		 		justify-content: space-between;
		 		align-items: center;
		 		.number{
		 			font:1.5rem/2rem $yahei;
		 			color: #fff;
		 		}
		 		.methods{
		 			padding: 0.4rem 0.7rem;
		 			font:1.2rem/1.4rem $yahei;
		 			color: #fff;
		 			border:2px solid #fff;
		 			border-radius: 5px;
		 		}
		 	}
		 	.content{
		 		padding:1rem;
		 		width: 36rem;
		 		background: #F9F7F8;
		 		border-radius: 0 0 10px 10px;
		 		.person{
		 			width: 100%;
		 			display: flex;
		 			justify-content: flex-start;
		 			flex-wrap: wrap;
					.img{
						width: 5rem;
						height: 5rem;
						margin-right: 1rem;
						img{
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}
					.text{
						width: 30rem;
						.username{
							width: 100%;
							font:bold 1.4rem/2rem $yahei;
							color: #4B8DC4;
							display: flex;
							justify-content: space-between;
							.address{
								color: #000;
							}
						}
						.p1{
							width: 100%;
							font:1.1rem/1.6rem $yahei;
							color: #999;	
							span{
								color: #F41A3D;
								padding:0 0.3rem;
							}
						}
					}		 			
		 		}
			 	.join{
			 		width: 100%;
			 		height: 2rem;
			 		display: flex;
			 		justify-content: flex-end;
			 		a{
						font:bold 1.4rem/2rem $yahei;
						color: #4B8DC4;
			 		}
			 	}
		 	}

		 }	
		 .countdown{
		 	@extend .lucky;
		 } 	
	 }
	 .operation{
	 	width: 38rem;
		padding:0 1rem;
		background: #fff;
		.lis{
			width: 100%;
			height: 5rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #ddd;

			.left{
				display: flex;
				justify-content: flex-start;
				font:bold 1.4rem/2rem $yahei;
				img{
					width:2rem;
					height: 2rem;
					margin-right: 1rem;
				}
			}
			.right{
				i{
					font-size: 2.5rem;
					color: #999;
				}
			}
		}
		.new{
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			padding: 1rem 0;
			.wz{
				font:bold 1.5rem/3rem $yahei;
			}	
			.btn{
				width: 8rem;
				height: 3rem;
				font:1.4rem/3rem $yahei;
				color: #fff;
				background: #F41A3D;
				border-radius: 10px;
				text-align: center;
			}		
		}
	 }
	 .history{
	 	width: 38rem;
	 	padding:0 1rem;
	 	background: #fff;
	 	.title{
	 		height: 5rem;
	 		display: flex;
	 		justify-content: space-between;
	 		align-items: center;
	 		border-bottom: 1px solid #ddd;
	 		.label{
	 			font:bold 1.4rem/2rem '微软雅黑';
	 		}
	 		.time{
	 			font:1.3rem/2rem '微软雅黑';
	 			color: #999;
	 			letter-spacing: 1px;	 			
	 		}
	 	}
	 	.zt{
	 		width: 100%;
			.lis{
				width: 100%;
				padding:1rem 0;
				border-bottom: 1px solid #ddd;
		 		.person{
		 			width: 100%;
		 			display: flex;
		 			justify-content: flex-start;
		 			flex-wrap: wrap;
					.img{
						width: 5rem;
						height: 5rem;
						margin-right: 1rem;
						img{
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}
					.text{
						width: 31rem;
						.username{
							width: 100%;
							font:bold 1.4rem/2rem $yahei;
							color: #4B8DC4;
							display: flex;
							justify-content: space-between;
							.address{
								color: #999;
								letter-spacing: 2px;
								span{
									color: #F41A3D;
								}
							}

						}
						.p1{
							width: 100%;
							font:1.1rem/1.6rem $yahei;
							color: #999;	

							span{
								color: #F41A3D;
								padding:0 0.3rem;
							}
						}
					}		 			
		 		}
			}
			.lis:last-child{
				border-bottom: 0px;
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