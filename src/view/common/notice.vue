<template>
	<div class="app-notice">
		<app-header></app-header>
		<div class="bk1"></div>
		<div class="notice_body">
			<div class="lis" v-if="noticeData" v-for="(item,index) in noticeData">
				<div class="time">
					{{ item.create_time }}
				</div>
				<div class="zt">
					<div class="title" >
						{{ item.title }}
					</div>
					<div class="zw">
						{{ item.text }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	//数据
	import {get_notice_list} from '@/api/user'
	//组件
	import header from '@/view/public/child_header';
	export default{
		data(){
			return{
				noticeData:""
			}
		},
		created:function(){
			this.get_notice_list();
		},
		components:{
			"appHeader":header
		},
		methods:{
			get_notice_list(){
				const self = this;
				get_notice_list().then(response=>{
					self.noticeData = response.data;
				});
			}
		}
	}
</script>
<style lang="scss" scoped>
	 @import "src/style/index.scss";	
	.app-notice{
		font-size: 16px;
	}
	.notice_body{
		width: 38rem;
		padding:0 1rem;
		.lis{
			width: 100%;
			margin-bottom: 1rem;
			.time{
				width: 100%;
				text-align: center;
				color:#666;
				font:1.15rem/3rem $yahei;
				letter-spacing: 1px;
				margin-bottom: 0.5rem;
			}
			.zt{
				width: 36rem;
				padding:1rem;
				background: #fff;
				border-radius: 10px;
				.title{
					width: 100%;
					color: #333;
					font:bold 1.2rem/2.5rem $yahei;
					margin-bottom: 0.3rem;
				}
				.zw{
					width: 100%;
					word-wrap: break-word;
					color: #666;
					font:1.1rem/2.5rem $yahei;
					a{
						color: #3498DB;
					}
				}
			}
		}
	}
</style>