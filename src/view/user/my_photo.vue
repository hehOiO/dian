<template>
	<div class="user-photo">
		<div class="bk1"></div>
		<div class="base-info">
			<router-link to="/user/updataphoto">
				<div class="lis" style="padding: 1rem">
					<div>头像</div>
					<div class="photo">
						<img :src="photoData" alt="">
						<i class="fa fa-angle-right" aria-hidden="true"></i>
					</div>
				</div>
			</router-link>
			<div class="lis">
				<div>修改头像</div>
				<img-upload @uploadScuess="upload_result"></img-upload>
			</div>
		</div>

		<div class="bk1"></div>
	</div>
</template>
<script>
	import ImgUpload from '@/components/img_upload'
	export default{
		data(){
			return{
				photoData:'/static/images/default.gif'
			}
		},
		components:{
			'imgUpload':ImgUpload
		},
		methods:{
			upload_result(res){
				this.photoData = res;
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "src/style/index.scss";	
	a{
		color: #000;
	}
	.base-info{
		width: 100%;
		.lis{
			width: 38rem;
			padding: 1.5rem 1rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #fff;
			font:bold 1.6rem/1.5rem $yahei;
			border-bottom:1px solid #ddd;
			i{
				margin-left: 1rem;
				font-size: 2.2rem;
			}
			.small{
				font:1.4rem/1.5rem $yahei;
				color: #999;	
				display: flex;
				align-items: center;			
			}
			.photo{
				height: 6rem;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				img{
					width: 6rem;
					height: 6rem;
					border-radius: 15px;
				}

			}
		}
	}	
</style>