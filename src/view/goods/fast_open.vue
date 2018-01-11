<template>
	<div class="fast-open">
		<div class="content" v-if="goodsData">
			<div class="lis" v-for="(item,index) in goodsData">
				<div class="img" >
					<img :src="item.thumb" alt="">
				</div>
				<div class="text">
					<div class="goods_name">
						{{item.goods_name}}
					</div>
					<div class="price">
						价格：&nbsp;<s>￥&nbsp;{{item.price}}</s><span>￥1</span>
					</div>
					<div class="time">
						剩余时间<span>{{ item.surplus }}</span>
					</div>
				</div>
				<div class="btn">
						<button @click="bottom_show(index)">参与</button>
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
	import {get_fast_goods_data} from '@/api/goods'
	import {strTotime,secondToTime} from '@/func/common'

	//组件
	import counter from '@/components/shop_car_computed'
	import { Indicator,Toast } from 'mint-ui';

	export default{
		data(){
			return{
				goodsData:'',
				flag:false,
				is_check:0,
				//选中的要计算数据
				checkData:'',
				single_price:0,
				timer:''
			}
		},
		created:function(){
			//获取秒开专区数据
			this.get_fast_goods_data();
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
			get_fast_goods_data(){
				const self = this;
				get_fast_goods_data().then(response=>{
					let cache = response.data;
					cache.forEach((val,index,arr)=>{
						cache[index]['buy_num']=0;	
					})
					self.goodsData =cache;
					self.count_down();					
				});
			},
			//倒计时
			count_down(){
				const self = this;
				let newstartTime =new Date().getTime();
				self.goodsData.forEach((value,index,arr)=>{
					let newendTime =strTotime(self.goodsData[index].end_time).getTime();
					let diffTime = (newendTime-newstartTime)/1000;
					if(diffTime == NaN && diffTime == undefined && diffTime == null){
						return '时间格式错误';
					}
					if(diffTime<=0){
						self.goodsData.is_lottery =1;
						return false;
					}
					diffTime = Math.floor(diffTime);
					self.$set(self.goodsData[index],'surplus',secondToTime(diffTime,'时','分'));			
				});
				self.timer = setTimeout(this.count_down,1000);
			},
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
 	.content{
	 	width: 40rem;
	 	display: flex;
	 	justify-content: center;
	 	flex-wrap: wrap;
	 	background-color: #fff;
	 	.lis{
	 		width:38rem;
	 		display: flex;
	 		justify-content:flex-start;
			flex-wrap: wrap;
			padding:1rem 0rem;
			border-bottom: 1px solid #ddd;
			.img{
				width: 10rem;
				height: 10rem;
				position: relative;
				margin-right: 1rem;
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
				width: 18rem;
				margin-top: 1rem;
				.goods_name{
					width: 100%;
					word-wrap: break-word;
					font:bold 1.6rem/1.8rem $yahei;
					margin-bottom: 0.6rem;
				}
				.price{
					width: 100%;
					color: #999;
					font:1.3rem/1.8rem $yahei;
					margin-bottom: 0.3rem;
					span{
						margin-left: 1rem;
						font:bold 1.7rem/1.8rem $yahei;
						color: #F3183A;
					}
				}
				.time{
					width: 100%;
					font:1.3rem/3.5rem $yahei;
					color: #999;
					span{
						color: #F3183A;
						font:bold 2rem/3.5rem $yahei;
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
			.btn{
				width: 9rem;
				display: flex;
				justify-content: flex-end;
				flex-wrap: wrap;
				align-items:center;
				height: 9rem;
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