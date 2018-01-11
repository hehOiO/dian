<template>
	<div class="winning">
		<div class="winning_body">
		<router-link to="/winning/detail">	
			<div class="lis ac">
				<div class="img">
					<img src="/static/images/goods/goods1.jpg" alt="">
				</div>
				<div class="zw">
					<div class="name">
						<div class="wz">飘柔洗发露(三瓶装（500ml/瓶）)</div>
					</div>
					<div class="bk2"></div>
					<div class="btn_area">
						<div class="btn">
							删除订单
						</div>
						<div class="btn">
							晒单评价
						</div>
						<div class="btn red">
							再次购买
						</div>
					</div>
				</div>
			</div>
		</router-link>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		methods:{

		}
	}
</script>
<style scoped lang="scss">
	@import "src/style/index.scss";	
	.winning_body{
		width: 100%;
		.ac{
			position:relative;
		}
		.ac:before{
			content:'';
			width: 6.8rem;
			height: 5rem;
			position: absolute;
			z-index: 1;
			background: url('/static/images/yinzhang2.png');
			right: 2rem;
			top:0rem;
		}
		.lis{
			box-shadow: 3px 3px 3px #ddd;
			width: 38rem;
			background: #fff;
			margin-top: 1rem;
			padding:1rem;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			position: relative;
			.img{
				width:8rem;
				margin-right: 1rem;
				img{
					width: 100%;	
				}
			}
			.zw{
				width: 29rem;
				padding-top: 1rem;
				width: 29rem;
				padding-top: 1rem;
				.name{
					width: 100%;
					display:flex;
					justify-content: space-between;
					.wz{
						width: 90%;
						color: #333;
						font:bold 1.6rem/1.8rem $yahei;
					}
				}
				.btn_area{
					width: 95%;
					display: flex;
					justify-content: space-between;
					.btn{
						padding: 0.7rem 1rem;
						font:bold 1.4rem/1.6rem $yahei;
						color: #6E6E6E;
						border:1px solid #6E6E6E;
						border-radius: 10px;
					}
					.red{
						border:1px solid #FF344A;
						color: #FF344A;
					}
				}
			}
		}
	}
</style>