<template>
	<div class="user-address">
		<div class="address_area">
			<div class="lis" v-for="(item,index) in addressData">
				<div class="text">
					<div class="base_info">
						<span class="name">{{ item.name }}</span>
						<span class="moblie">18205859672</span>
					</div>
					<div class="tz_info">
						{{item.base_address}}{{item.tz_address}}
					</div>
				</div>
				<div class="operation">
					<div class="default">
						<img :src="item.is_default==1?box_check.check:box_check.no_check" alt="" class="circle" @click="check_default(index)">
						<div class="wz" @click="check_default(index)">默认地址</div>
					</div>
					<div class="edit">
						<span class="bj"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>编辑</span>
						<span class="sc"><i class="fa fa-trash-o" aria-hidden="true"></i>删除</span>
					</div>
				</div>
			</div>
			<button class="btn" @click="add_address"><i class="fa fa-plus" aria-hidden="true" style="margin-right: 1rem"></i>新增收货地址</button>
		</div>
	</div>
</template>
<script>
	//api数据
	import {get_address} from '@/api/user'
	//引入公共函数库
	import {hidden_str} from '@/func/common'
	export default{
		data(){
			return{
				addressData:'',
				box_check:{
					check:'/static/images/fx_check.png',
					no_check:'/static/images/fx_nocheck.png'
				}
			}
		},
		created:function(){
			this.get_address();
		},
		methods:{
			get_address(){
				const self=this;
				get_address().then(response=>{
				   self.addressData = response.data;
				   self.addressData.forEach((value,index,arr)=>{
				   		self.addressData[index]['moblie'] = hidden_str(value['moblie'],3,4);
				   });
				});	
			},
			check_default(index){
				const self=this;
				self.addressData.forEach((value,key,arr)=>{
					self.addressData[key]['is_default'] = 0;
				});
				self.addressData[index]['is_default'] = 1;
			},
			//新增收货地址
			add_address(){
				this.$router.push({path:'/user/myaddressadd'});
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "src/style/index.scss";	
	@import "src/style/form.scss";	
	.address_area{
		width: 100%;
		.lis{
			width: 38rem;
			padding: 2rem 1rem 0rem 1rem;
			background:#fff;
			margin-bottom: 1.5rem;
			.text{
				width: 100%;
				padding-bottom: 1.5rem;
				border-bottom: 1px solid #ddd;
				.base_info{
					width: 100%;
					display: flex;
					justify-content: flex-start;
					font:bold 1.5rem/2rem $yahei;
					.moblie{
						margin-left: 4rem;
					}
					margin-bottom:0.5rem;
				}
				.tz_info{
					width: 100%;
					font:1.3rem/2rem $yahei;
					color: #999;

				}
			}
			.operation{
				width: 96%;
				padding: 0 2%;
				height: 5rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.default{
					display: flex;
					justify-content: flex-start;
					font:1.6rem/1.6rem $yahei;
					align-items: center;
					.circle{
						width: 2.5rem;
						height: 2.5rem;
						border-radius: 50%;
					}

					.wz{
						margin-left: 0.8rem;
					}
				}
				.edit{
					font:1.6rem/1.6rem $yahei;
					color: #666;
						i{
							margin-right: 0.8rem;
							font-size: 2rem;
						}
					.bj{
						margin-right:1.2rem;

					}
				}
			}
		}
		.btn{
			width: 98%;
			text-align: center;
			height: 4rem;
			background:#00D762;
			border:0;
			border:10px;
			font:1.7rem/4rem $yahei;
			color: #fff;
			text-align: center;
		}
	}

</style>