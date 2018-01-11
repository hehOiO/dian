<template>
	<div class="the-sun">
		<div v-if="!theSunInfoData" class="data-empty">阿偶，竟然没有数据，快来帮助我！</div>
		<div class="content" v-if="theSunInfoData">
			<div class="lis" v-for="(item,index) in theSunInfoData" @click="go_to_detail(item.id)">
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
				<div class="pl">
					<div class="bk1"></div>
					<div class="p1">{{ item.evaluate.pl_text}}</div>
					<div class="pic_show">
						<img :src="value" alt="" v-for="(value,key) in item.evaluate.pl_img">
					</div>
					<love-zj :time="item.evaluate.send_time" :love_num="item.evaluate.love" :replay_num="item.evaluate.replay" :activity_key="index" @zanAdd="changeLoveNum" @replayAdd="changeReplayNum"></love-zj>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
//数据
import {get_the_sun_info} from '@/api/activity'
//组件
import loveZj from '@/components/theSunLoveZj'
	export default{
		data(){
			return{
				theSunInfoData:''
			}
		},
		created:function(){
			this.get_the_sun_info();

		},
		components:{
			"love-zj":loveZj
		},
		methods:{
			//获取晒单信息
			get_the_sun_info(){
				const self = this;
				get_the_sun_info().then(response=>{

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
			},
			go_to_detail(id){
				this.$router.push({path:'/thesun/detail',query:{id:id}});
			}
		}
	}
</script>
<style scoped lang="scss">
    @import "src/style/index.scss";
	.content{
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.lis{
			width: 92%;
			padding: 1rem 4%;
			background-color: #fff;
			margin-bottom: 1.5rem;

			.base_info{
				width: 100%;
				border-bottom: 1px solid #ddd;
				font:1.1rem/2.2rem $yahei;
				.p1{
					width: 100%;
					font-weight: bold;
					font:1rem/2.2rem $yahei;
					span{
						color: #2B78B9;
					}
				}
				.p2{
					width: 100%;
					font:0.9rem/2.2rem $yahei;
				}
				.p3{
					width: 100%;
					font:0.9rem/2.2rem $yahei;
					span{
						color: #F32741;
					}			
				}
			}
			.pl{
				width: 100%;

				.p1{
					width: 100%;
					word-wrap: break-word;
					color: #333;
					font:0.85rem/2.2rem $yahei;	
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