<template>
	<div class="the-sun-detail">
			<div class="post">
				<div class="base_info">
					<p class="p1">
						<span>期号：10086</span>
						<span style="margin-left: 2rem">飘柔洗发露(三瓶特惠装)</span>
					</p>
					<p class="p2">
						揭晓时间：2017-12-31 18:00:00
					</p>
					<p class="p3">
						本期参与<span>&nbsp;5&nbsp;</span>人次
					</p>
					<div class="bk1"></div>
				</div>
				<div class="pl">
					<div class="bk1"></div>
					<div class="p1">这是一条评论</div>
					<div class="pic_show">
						<img src="/static/images/goods/goods1.jpg" alt="">
					</div>
					<love-zj time="2017-12-31 18:00:00" love_num="300" :replay_num="200" :activity_key="6" @zanAdd="changeLoveNum" @replayAdd="changeReplayNum"></love-zj>
				</div>
			</div>	
			<div class="replay">
				<div class="title">
					共有{{ ReplayData.length || 0 }}条回复
				</div>
				<div class="lis" v-for="(item,index) in ReplayData">
					<div class="img">
						<img :src="item.photo" alt="">
					</div>
					<div class="text">
						<div class="username">
							{{ item.username }}
						</div>
						<div class="time">
							{{ item.publish_time }}
						</div>
						<div class="content">
							{{ item.content }}
						</div>
					</div>
				</div>
			</div>	
			<div class="bk0" style="height: 7rem"></div>
			<div class="publish">
				<div class="content">
					<input type="text" class="input" v-model="msgData" placeholder="对于狗拖，你想说点什么呢">
					<div class="send">
						<a href="javascript:;" @click="sendMsg"><span style="position: relative;top:0.5rem">发送</span></a>
					</div>
				</div>
			</div>
	</div>
</template>
<script>
//数据
import {get_replay_list} from '@/api/post'
//组件
import loveZj from '@/components/theSunLoveZj'
import { Indicator,Toast } from 'mint-ui';
	export default{
		data(){
			return{
				ReplayData:"",
				msgData:""
			}
		},
		created:function(){
			//获取回复信息
			this.get_replay_list();
		},
		components:{
			"love-zj":loveZj
		},
		methods:{
			changeLoveNum(res){

			},
			changeReplayNum(res){
		
			},
			get_replay_list(){
				const self = this;
				get_replay_list().then(response=>{
					self.ReplayData = response.data;
				});
			},
			sendMsg(){
			   if(this.msgData == ""){
			   		Toast({
			   			message: '发表的数据不能为空',
			   		})
			   		return false;
			   }
			   let sendData ={
			   		username:"象山吴彦祖",
			   		photo:"/static/images/default.gif",
			   		publish_time:"刚刚",
			   		content:this.msgData
			   }
			   this.ReplayData.push(sendData);
			  this.msgData = "";
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import "src/style/index.scss";	
	input{
		outline: none;
	}
	.the-sun-detail{
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.post{
			width: 92%;
			padding: 1rem 4%;
			background-color: #fff;
			margin-bottom: 1.5rem;
		
			.base_info{
				width: 100%;
				border-bottom: 1px solid #ddd;

				.p1{
					width: 100%;
					font-weight: bold;
					font:1.4rem/2.2rem $yahei;
					span{
						color: #2B78B9;
					}
				}
				.p2{
					width: 100%;
					font:1.3rem/2.2rem $yahei;
				}
				.p3{
					width: 100%;
					font:1.3rem/2.2rem $yahei;
					span{
						color: #F32741;
					}			
				}
			}
			.pl{
				width: 100%;
					font:1.3rem/2.2rem $yahei;	
				.p1{
					width: 100%;
					word-wrap: break-word;
					color: #333;
					font:1.3rem/2.2rem $yahei;	
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
		.replay{
			width: 38rem;
			margin-top: 1rem;
			background: #fff;
			padding: 1rem;
			padding-bottom: 0rem;
			padding-top: 0rem;
			.title{
				width: 100%;
				height: 3rem;
				font:bold 1.4rem/3rem $yahei;
				margin-bottom: 1rem;
			}
			.lis{
				width: 100%;
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				padding-bottom: 1.5rem;
				border-bottom: 1px solid #ccc;
				padding-top:1rem;
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
					width: 28rem;
					.username{
						width: 100%;
						font:1.4rem/2rem $yahei;
						color: #4B8DC4;
					}
					.time{
						width: 100%;
						font:1.3rem/2rem $yahei;
						color: #999;	
						margin-bottom: 0.6rem;					
					}
					.content{
						width: 100%;
						word-wrap: break-word;
						font:1.4rem/1.8rem $yahei;
						color: #333;
					}
				}
			}
			.lis:last-child{
				border:0px;
			}
		}
		.publish{
			width: 100%;
			position: fixed;
			bottom: 0px;
			height: 6rem;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			background: #fff;
			align-items: center;
			.content{
				width: 36rem;
				display: flex;
				justify-content: flex-start;
				.input{
					width: 26rem;
					padding-left: 2rem;

					height: 4rem;
					border:1px solid #aaa;
					border-radius: 2rem;
					font:1.6rem/4rem $yahei;
				}
				.send{
					width:6rem;
					font:bold 1.7rem/4rem $yahei;
					text-align: center;
					a{
						color: #3498DB;

					}
				}
			}
		}
	}
</style>