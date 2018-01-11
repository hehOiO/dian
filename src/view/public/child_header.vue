<template>
	<div class="app-header">
		<mt-header :title="$route.query != '' && $route.query.typename != undefined?$route.query.typename:$route.name">
		  <div slot="left">
		  	<mt-button icon="back" @click="back"></mt-button>
		  </div>
		   <mt-button slot="right">
		   		<i class="fa fa-commenting-o icon" aria-hidden="true" style="color:#fff;padding-right:1.5rem;font-size: 2rem;position: relative;z-index: 1;" @click="go_to_notice"></i>
		   		<div class="bs" :num="num"></div>
		   </mt-button>
		</mt-header>
		<router-view>
			
		</router-view>
	</div>
</template>
<script>
	//数据
	import {get_notice_list} from '@/api/user'
	export default{
		data(){
			return{
				num:1,
				title:''
			}
		},
		created:function(){
			this.get_notice_list();

			if(this.fTitle != ''){
				this.title = this.fTitle;
			}else{
				this.title = this.$route.name;				
			}

		},
		props:{
			fTitle:{
				default:''
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
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