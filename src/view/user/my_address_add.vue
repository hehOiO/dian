<template>
	<div class="user-address-add" >
		<div v-if="!showAddressPicket">

			<div class="fill_area" >
				<div class="bk1"></div>
				<div class="lis">
					<div class="label">联系人</div>
					<div class="srk">
						<input type="text" class="name" placeholder="你的姓名">
						<div class="bk1" style="border-bottom: 1px solid #ddd"></div>
						<div class="sex_check">
							<span :class="{action:formData.sex==1}" @click="formData.sex=1">先生</span>
							<span style="margin-left: 2rem" :class="{action:formData.sex==0}" @click="formData.sex=0">女士</span>
						</div>
					</div>
				</div>
				<div class="lis other">
					<div class="left">
						<div class="label">手机号</div>
						<input type="text" class="normal"  >
					</div>
					<i class="fa fa-plus" aria-hidden="true" style="color: #0D95EB"></i>
				</div>
				<div class="lis other" @click="showAddressPicket=true">
					<div class="left">
						<div class="label">位置</div>
						<input type="text" class="normal" disabled="" placeholder="请选择地址" v-model="formData.address">
					</div>
					<i class="fa fa-angle-right" aria-hidden="true"></i>
				</div>
				<div class="lis other">
					<div class="left">
						<div class="label">详细地址</div>
						<input type="text" class="normal" placeholder="请输入详细地址">
					</div>
					<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
				</div>
				<div class="bk1"></div>

			</div>
			<button class="btn" >保存</button>
		</div>
		<div class="div" v-if="showAddressPicket">
			<button class="btn" style="width: 100%;background: #ccc" @click="showAddressPicket=false">取消选择</button>
			<v-distpicker type="mobile" @selected="result_address"></v-distpicker>		
		</div>

	</div>
</template>
<script>
import VDistpicker from 'v-distpicker'
	export default{
		data(){
			return{
				showAddressPicket:false,
				formData:{
					address:'',
					sex:1
				}
			}
		},
		created:function(){
			$('.address').css('font-size','1.2rem');
		},
		components:{
			VDistpicker 
		},
		methods:{
			result_address(res){
				this.formData.address=res.province.value+res.city.value+res.area.value;
				this.showAddressPicket =false
			}
		}
	}
</script>
<style>
	.address{
		font:1.2rem/2rem 'Microsoft YaHei';
	}
</style>
<style scoped lang="scss">
	@import "src/style/index.scss";	
	input{
		outline: none;
	}
	.fill_area{
		width: 94%;
		padding: 0 3%;
		background: #fff;
		.lis{
			width: 100%;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #ddd;
			.label{
				width: 15%;
				font:bold 1.6rem/3rem $yahei;
			}
			.srk{
				width: 82%;
				.name{
					width: 98%;
					border:0px;
					padding-left: 2%;
					background:#fff;
					height: 3rem;
					font:1.6rem/3rem $yahei;
				}	
				.sex_check{
					height: 5rem;
					width: 100%;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					span{
						border:1px solid #ddd;
						padding: 0.7rem 1.5rem;
						text-align: center;
						font:1.5rem/1.6rem $yahei;
					}
					.action{
						background:#01AAED;
						color: #fff;
						border:0px;
					}
				}
			}
			.left{
				.label{
					width: 30%;
					font:bold 1.6rem/3rem $yahei;
				}
				width: 80%;
				display: flex;
				justify-content: flex-start;	
				.normal{
					width: 65%;
					width: 98%;
					border:0px;
					padding-left: 2%;
					background:#fff;
					height: 3rem;
					font:1.6rem/3rem $yahei;			
				}
			}
			i{
				font-size: 2rem;
				margin-top: 0.6rem;
				color: #999;
			}
		}
		.other{
			padding-bottom: 1rem;
			padding-top: 1rem;
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
</style>