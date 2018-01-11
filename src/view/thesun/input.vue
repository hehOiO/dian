<template>
	<div class="the-sun-input">
		<div class="content">
			<div class="lis">
				<div class="base_info">
					<p class="p1">
						<span>期号：10086</span>
						<span style="margin-left: 2rem">ipone7</span>
					</p>
					<p class="p2">
						揭晓时间：2018-1-1 12:00:00
					</p>
					<p class="p3">
						本期参与<span>&nbsp;3&nbsp;</span>人次
					</p>
					<div class="bk1"></div>
				</div>
				<div class="no-pl">
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
		<button class="btn" @click="keep">
			保存
		</button>	
	</div>
</template>
<script>
	//组件
	import loveZj from '@/components/theSunLoveZj'
	import imgUpload from '@/components/img_upload'
	import { Indicator,Toast } from 'mint-ui';
	export default{
		data(){
			return{
				picData:[]
			}
		},
		components:{
			"love-zj":loveZj,
			"imgUpload":imgUpload
		},
		methods:{
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
			},
			keep(){
				Toast({
					message:'保存成功'
				})
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
				font:1.6rem/2.2rem $yahei;
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
			.no-pl{
				width: 100%;
				padding: 1rem 0;
				textarea{
					width: 100%;
					border:0px;
					height: 10rem;
					font:1.3rem/2rem $yahei;
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
	.btn{
		width: 38rem;
		margin-left: 1rem;
		height: 4.5rem;
		text-align: center;
		border:0px;
		border-radius: 10px;
		background: #FF344A;
		color: #fff;
		font:1.6rem/4.5rem $yahei;

	}
</style>