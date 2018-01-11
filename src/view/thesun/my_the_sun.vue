<template>
	<div class="user-the-sun">
		<div class="content" v-if="theSunInfoData">
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
				<div class="no-pl" v-if="!item.evaluate">
					<textarea placeholder="写下购买体会和使用感受来炫耀战利品吧~"></textarea>
					<div class="bk1"></div>
					<div class="pic_area" v-if="picData">
						<img :src="item" alt="" v-for="(item,index) in picData" >
					</div>
					<div class="bk1"></div>
					<div class="iframe"><img-upload @uploadScuess="upload_result">添加晒单图片</img-upload></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
//数据
import {get_my_the_sun_info} from '@/api/user'
//组件
import loveZj from '@/components/theSunLoveZj'
import imgUpload from '@/components/img_upload'
	export default{
		data(){
			return{
				theSunInfoData:'',
				picData:[]
			}
		},
		created:function(){
			this.get_my_the_sun_info();

		},
		components:{
			"love-zj":loveZj,
			"imgUpload":imgUpload
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
			},
			upload_result(res){
				this.picData.push(res);
			}
		}
	}
</script>
<style scoped lang="scss">
    @import "src/style/index.scss";
	.content{
		width: 100%;

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
			.no-pl{
				width: 100%;
				padding: 1rem 0;
				textarea{
					width: 100%;
					border:0px;
					height: 10rem;
					font:1rem/2rem $yahei;
					color: #666;
				}
				.iframe{
					width: 100%;
					display: flex;
					justify-content: center;
				}
				.pic_area{
					width: 100%;
					display: flex;
					justify-content: flex-start;
					flex-wrap: wrap;
					img{
						width: 7rem;
						height: 7rem;
						margin-right: 1rem;
						margin-bottom: 1.5rem;
					}
				}
			}
		}
	}
</style>