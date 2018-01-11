<template>
	<div class="app-header">
		<mt-header :title="$route.name">
		   <mt-button slot="right">
		   		<i class="fa fa-commenting-o icon" aria-hidden="true" style="color:#fff;padding-right:1.5rem;font-size: 2rem;position: relative;z-index: 1;" @click="go_to_notice"></i>
		   		<div class="bs" :num="num"></div>
		   </mt-button>
		</mt-header>

	</div>
</template>
<script>
	//数据
	import {get_notice_list} from '@/api/user'
	export default{
		data(){
			return{
				num:1
			}
		},
		created:function(){
			this.get_notice_list();
		},
		methods:{
			go_to_notice(){
				this.$router.push({path:'/notice'});
			},
			get_notice_list(){
				const self = this;
				get_notice_list().then(response=>{
					self.num = response.data.length;
				});
			}
		}
	}
</script>
<style lang="scss">

</style>
<style scoped lang="scss">
    @import "src/style/index.scss";
    .bs{
    	position: relative;
    }
	.bs:before{
		content:attr(num);
		width: 2rem;
		height: 2rem;
		position: absolute;
		background-color: #FF344A;
		color: #fff;
		top:-2.5rem;
		font-size: 1.6rem;
		border-radius: 50%;
		text-align: center;
	}
</style>