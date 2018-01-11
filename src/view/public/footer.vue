<template>
	<div class="app-footer">
		<router-link class="lis" v-for="(item,index) in viewData" :to="item.url" :key="index">
			<div class="icon" :class="{action:item.url == $route.path }">
				<i :class="item.icon" aria-hidden="true"></i>			
			</div>
			<div class="text" :class="{action:item.url == $route.path }">
				{{ item.name }}
			</div>
		</router-link>
	</div>
</template>
<script>
	export default{
		data(){
			return{
			    viewData:[
			    	{
				    	icon:'fa fa-home',
				    	name:'首页',
				    	url:'/'
			    	},
			    	{
				    	icon:'fa fa-flag',
				    	name:'最新揭晓',
				    	url:'/announced'
			    	},
			    	{
				    	icon:'fa fa-camera',
				    	name:'晒单',
				    	url:'/thesun'
			    	},
			    	{
				    	icon:'fa fa-shopping-cart',
				    	name:'购物车',
				    	url:'/shopcar'
			    	},
			    	{
				    	icon:'fa fa-user',
				    	name:'我的',
				    	url:'/user'
			    	},
			    ]
			}
		},
		methods:{

		},
		created:function(){

		}
	}
</script>
<style scoped lang="scss">
    @import "src/style/index.scss";
    .app-footer{
    	background:#fff;
    	width: 40rem;
    	position: fixed;
    	bottom: 0rem;
    	height: 6em;
    	border-top: 1px solid #ddd;
    	display: flex;
    	justify-content: space-between;
    	z-index: 10;
	    .action{
	    	color: #FD314C;
	    }
    }

    .app-footer .lis{
    	width: 20%;
    	display: flex;
    	height: 100%;
    	justify-content: center;
    	align-items: center;
    	flex-wrap: wrap;
    	color: #666;
    	.icon{
    		padding-top: 0.5rem;
    		font-size:2.2rem; 
    		width: 100%;
    		text-align: center;

    	}
    	.text{
    		width: 100%;
    		text-align: center;
    		font:1.4rem/2rem '微乳雅黑';
    		padding-bottom: 1rem;
    	}
    }
</style>