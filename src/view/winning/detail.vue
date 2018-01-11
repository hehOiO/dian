<template>
	<div class="winning-detail">
		<div class="wining_body">
			<div class="order_info">
				<div class="qihao">
					第16848期 揭晓时间:2017-12-31 18:00:00 
				</div>
				<div class="zt">
					<div class="img">
						<img src="/static/images/goods/goods1.jpg" alt="">
					</div>
					<div class="text">
						飘柔洗发露(三瓶装（500ml/瓶）)
					</div>
				</div>
				<div class="find">
					<div class="left">
						感谢您的参与，欢迎下次光临
					</div>
					<div class="right">
						订单查询<i class="fa fa-chevron-right" aria-hidden="true"></i>
					</div>
				</div>
			</div>
		
			<div class="winning_person">
				<span class="name">张某某</span>
				<span class="moblie">18205859672</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>
<style lang="scss" scoped>
	@import "src/style/index.scss";	
	.order_info{
		width: 38rem;
		padding:0 1rem;
		background: #fff;
		.qihao{
			width: 100%;
			height: 5rem;
			font:bold 1.5rem/5rem $yahei;
			border-bottom: 1px solid #ccc;
			color: #333;
		}
		.zt{
			width: 100%;
			height: 9rem;
			border-bottom:1px solid #ccc;
			display: flex;
			justify-content: flex-start;
			align-items: center;
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
				height: 7rem;
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;;
				align-items: center;
				font:bold 1.5rem/1.8rem $yahei;
			}
		}
		.find{
			width: 100%;
			height: 4rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.left{
				color: #777;
				padding-left: 1rem;
				font:1.3rem/1.3rem $yahei;
			}
			.right{
				color: #F2314C;
				padding-left: 1rem;
				font:1.3rem/1.3rem $yahei;	
				i{
					color: #999;
					margin-left: 1rem;
					margin-right: 0.5rem;
				}			
			}
		}
	}
	.winning_person{
		margin-top: 1rem;
		width: 38rem;
		padding: 0 1rem;
		height: 4rem;
		background: #fff;
		.name{
			font:bold 1.6rem/4rem $yahei;
			margin-right: 5rem;
		}
		.moblie{
			color: #333;
			font:bold 1.4rem/4rem $yahei;
		}
	}
</style>