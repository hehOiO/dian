<template>
	<div class="order-my">
		<div v-if="!orderData" class="data-empty">阿偶，竟然没有数据，快来帮助我！</div>
		<div class="order_area">
			<div class="lis" v-if="orderData" v-for="(item,index) in orderData" :class="{ac:item.is_luck == 1}">
				<div class="img">
					<img :src="item.thumb" alt="">
				</div>
				<div class="zw">
					<div class="name">
						<div class="wz">
							{{item.goods_name}}({{item.spec}})
						</div>
						<div class="icon">
							<i class="fa fa-trash-o" aria-hidden="true" @click="del(item.id)"></i>
						</div>
					</div>
					<div class="bk2"></div>
					<div class="fk_info">
						<div class="price">
							<span>共{{ item.num }}次</span>
							<span style="margin-left: 1rem">实付款:<span class="red">￥{{ item.price.toFixed(2) }}</span></span>
						</div>
						<div class="btn" @click="re_buy(item.id)">
							再次购买
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
	//组件
	import { Indicator,Toast } from 'mint-ui';
	//信息
	import { get_myorder_list } from '@/api/order'	
	export default{
		data(){
			return{
				orderData:''
			}
		},
		created:function(){
			this.get_myorder_list();
		},
		methods:{
			get_myorder_list(){
				const  self = this;
				Indicator.open('数据加载中');
				get_myorder_list().then(response=>{
					self.orderData  = response.data;
					Indicator.close();
				},error=>{
					Indicator.close();
				});
			},
			del(id){
				Toast({
				  message: id+'删除成功',
				});	
			},
			re_buy(id){
				Toast({
				  message: id+'重新购买成功',
				});	
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "src/style/index.scss";	
	.order_area{
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.ac{
			position:relative;
		}
		.ac:before{
			content:'';
			width: 6.8rem;
			height: 5rem;
			position: absolute;
			z-index: 1;
			background: url('/static/images/yinzhang.png');
			right: 3.5rem;
			top:0rem;
		}
		.lis{
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
				.name{
					width: 100%;
					display:flex;
					justify-content: space-between;
					.wz{
						width: 75%;
						font:bold 1.5rem/1.8rem 'Microsoft YaHei';
					}
					.icon{
						width: 25%;
						display: flex;
						align-items: flex-end;
						justify-content: flex-end;
						i{
							color: #999;
							font-size: 2.5rem;
						}
					}
				}
				.fk_info{
					width: 100%;
					display: flex;
					justify-content: space-between;
					.price{
						font:1.3rem/2rem 'Microsoft YaHei';
						height: 3rem;
						display: flex;
						align-items: center;
						color: #999;
						.red{
							font-weight: bold;
							color: #FF344A;
							letter-spacing: 1px;
						}
					}
					.btn{
						padding: 0.7rem 1rem;
						font:bold 1.5rem/1.6rem 'Microsoft YaHei';
						color: #FF344A;
						border:1px solid #FF344A;
						border-radius: 10px;
					}
				}
			}
		}
	}	
</style>