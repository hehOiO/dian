<template>
	<div class="user-detail">
		<div class="ovewview">
			<div class="photo">
				<div class="img">
					<img src="/static/images/default.gif" alt="">
				</div>
				<div class="name">
					象山吴彦祖
				</div>

			</div>
		</div>
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">参与记录</mt-tab-item>
		  <mt-tab-item id="2">幸运记录</mt-tab-item>
		  <mt-tab-item id="3">晒单记录</mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
				<div class="partake">
					<div class="lis">
						<div class="img">
							<img src="/static/images/goods/goods1.jpg" alt="">
						</div>
						<div class="text">
							<div class="black">
								<div class="p1">
									飘柔洗发露(三瓶特惠装)
								</div>
								<div class="p2">期号:1002</div>
								<div class="p2">本期参与:<span>5</span>人次</div>
							</div>
							<div class="blue">
								<router-link to="/winning/detail">参与详情<i class="fa fa-chevron-right" aria-hidden="true"></i></router-link>
							</div>
						</div>
					</div>
					<div class="lis">
						<div class="img">
							<img src="/static/images/goods/goods1.jpg" alt="">
						</div>
						<div class="text">
							<div class="black">
								<div class="p1">
									飘柔洗发露(三瓶特惠装)
								</div>
								<div class="p2">期号:1002</div>
								<div class="p2">本期参与:<span>5</span>人次</div>
							</div>
							<div class="blue">
								<router-link to="/winning/detail">参与详情<i class="fa fa-chevron-right" aria-hidden="true"></i></router-link>
							</div>
						</div>
					</div>
				</div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
				<div class="lucky">
					<div class="lis">
						<div class="img">
							<img src="/static/images/goods/goods1.jpg" alt="">
						</div>
						<div class="text">
							<div class="black">
								<div class="p1">
									飘柔洗发露(三瓶特惠装)
								</div>
								<div class="p2">期号:1002</div>
								<div class="p2">本期参与:<span>5</span>人次</div>
								<div class="p2">幸运号码：<span>10086</span></div>
								<div class="p2">揭晓时间:2017-12-31 12:00:00</div>
							</div>
						</div>
					</div>
				</div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
			<div class="the_sun" v-if="theSunInfoData">
				<div class="lis" v-for="(item,index) in theSunInfoData">
					<div class="base_info">
						<p class="p1">
							<span>期号：{{ item.qihao }}</span>
							<span style="margin-left: 2rem">{{ item.goods_name}}</span>
						</p>
						<p class="p2">
							揭晓时间：{{ item.end_time}}
						</p>
						<p class="p3">
							本期参与<span>&nbsp;{{ item.join_num}}&nbsp;</span>人次
						</p>
						<div class="bk1"></div>
					</div>
					<div class="pl" v-if="item.evaluate">
						<div class="bk1"></div>
						<div class="p1">{{ item.evaluate.pl_text}}</div>
						<div class="pic_show">
							<img :src="value" alt="" v-for="(value,key) in item.evaluate.pl_img">
						</div>
						<love-zj :time="item.evaluate.send_time" :love_num="item.evaluate.love" :replay_num="item.evaluate.replay" :activity_key="index" @zanAdd="changeLoveNum" @replayAdd="changeReplayNum"></love-zj>
					</div>
				</div>
			</div>
		  </mt-tab-container-item>
		</mt-tab-container>		
	</div>
</template>
<script>
	//数据
	import {get_my_the_sun_info} from '@/api/user'
	//组件
	import loveZj from '@/components/theSunLoveZj'
	export default{
		data(){
			return{
				selected:"1",
				theSunInfoData:''
			}
		},
		created:function(){
			this.get_my_the_sun_info();

		},
		components:{
			"love-zj":loveZj
		},
		methods:{
			//获取晒单信息
			get_my_the_sun_info(){
				const self = this;
				get_my_the_sun_info().then(response=>{
					self.theSunInfoData = response.data;
				});
			},
			//喜爱
			love_add(){

			},
			changeLoveNum(res){
				this.theSunInfoData[res].evaluate.love++;
			},
			changeReplayNum(res){
				this.theSunInfoData[res].evaluate.replay++;				
			}
		}
	}
</script>
<style lang="scss">
.mint-navbar .mint-tab-item .mint-tab-item-label{
	padding:5px;
    font-size: 1.3rem;
}
</style>
<style scoped lang="scss">
	@import "src/style/index.scss";	
	.ovewview{
		width: 100%;
    	padding: 0 1rem;
    	height: 19rem;
    	background:url('/static/images/photo_bg.jpg');
    	background-size: 100% 100%;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	flex-wrap: wrap;
    	.photo{
    		width: 100%;
    		display: flex;
    		justify-content: center;
    		flex-wrap: wrap;
			.img{
				width: 7rem;
				height: 7rem;
				img{
					width: 100%;
					height: 100%;
					border-radius: 10px;
				}
			}
			.name{
				width: 100%;
				text-align: center;
				margin-top: 1rem;
				font:1.5rem/2rem $yahei;
				color: #fff;
				text-align: center;
			}

    	}
	}
	.partake{
		width: 100%;
		margin-top: 4px;
		.lis{
			width: 38rem;
			padding:1rem;
			display: flex;
			justify-content: flex-start;
			background: #fff;
			margin-bottom: 1rem;
			.img{
				width: 7rem;
				height: 7rem;
				margin-right: 1rem;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.text{
				width: 30rem;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				.black{
					width: 20rem;
					word-wrap: break-word;	
					.p1{
						font:bold 1.5rem/2rem $yahei;
					}
					.p2{
						color: #999;
						font:1.2rem/2rem $yahei;
						span{
							color: #FF344A;
						}
					}
				}
				.blue{
					height: 7rem;
					width: 10rem;
					display: flex;
					align-items: flex-end;
					justify-content: flex-end;
					font:1.4rem/2rem $yahei;
					a{
						font-weight: bold;
						color: #3498DB;
					}
					i{
						color: #333;
						margin-left: 0.6rem;
						position: relative;

						color: #3498DB;
					}
				}
			}
		}
	}
	.lucky{
		@extend .partake;
	}
	.the_sun{
		width: 100%;
		margin-top: 4px;
		.lis{
			width: 92%;
			padding: 1rem 4%;
			background-color: #fff;
			margin-bottom: 1.5rem;
			.base_info{
				width: 100%;
				border-bottom: 1px solid #ddd;

				font:1.3rem/2.2rem $yahei;
				.p1{
					width: 100%;

					font-weight: bold;
					span{
						color: #2B78B9;
					}
				}
				.p2{
					width: 100%;
			
				}
				.p3{
					width: 100%;

					span{
						color: #F32741;
					}			
				}
			}
			.pl{
				font:1.3rem/2.2rem $yahei;
				width: 100%;
				.p1{
					width: 100%;
					word-wrap: break-word;
					color: #333;	
				}
				.pic_show{
					width: 100%;
					padding: 0.8rem 0 0 0;
					display: flex;
					justify-content: flex-start;
					flex-wrap: wrap;
					img{
						width: 12rem;
						height: 10rem;
						margin-right: 2rem;
						margin-bottom: 2rem;
					}
				}

			}
		}
	}
</style>