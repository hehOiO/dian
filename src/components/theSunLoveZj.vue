<template>
	<div class="zj">
		<div class="time">{{ time }}</div>
		<div class="user_action">
			<div class="zan" @click="zjzanAdd">
				<i :class="loveNowIcon" aria-hidden="true"></i>
				<span>{{ love_num }}</span>
			</div>
			<div class="replay" @click="zjreplayAdd">
				<i :class="replayNowIcon" aria-hidden="true"></i>
				<span>{{ replay_num }}</span>
			</div>
		</div>	
	</div>
</template>
<script>
	export default{
		  data () {
		    return {
		    	loveNowIcon:'fa fa-heart-o',
		    	loveIcon:{
		    		normal:'fa fa-heart-o',
		    		action:'fa fa-heart'
		    	},
		    	replayNowIcon:'fa fa-comment-o',
		    	replayIcon:{
		    		normal:'fa fa-comment-o',
		    		action:'fa fa-comment'
		    	}
		    }
		  },
		  props:{
		    time: {
		        default: "刚刚"
		    },
		    love_num:{
		        default:0	
		    },
		    replay_num:{
		        default:0	
		    },
		    activity_key:{
		    	default:0
		    }
		  },
		  computed:{
		  },
		  watch:{
		  },
		  methods:{
		  	zjzanAdd(){
		  		if(this.loveNowIcon == this.loveIcon.action){
		  			return false;
		  		}
		  		this.loveNowIcon = this.loveIcon.action;
		  		this.$emit('zanAdd',this.activity_key)
		  	},
		  	zjreplayAdd(){
		  		if(this.replayNowIcon == this.replayIcon.action){
		  			return false;
		  		}
		  		this.replayNowIcon = this.replayIcon.action;
		  		this.$emit('replayAdd',this.activity_key)		  		
		  	}
		  }


	}
</script>
<style lang="scss" scoped>
	.zj{
		width: 100%;
		display: flex;
		justify-content: space-between;
		.time{
			color: #999;
		}
		.user_action{
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			.zan{
				i{
					color: #F00B21;
					font-size: 1.6rem;
					margin-left: 0.6rem;
				}
				color:#666;
			}
			.replay{
				margin-left: 1rem;
				i{
					color: #5090C5;
					font-size: 1.6rem;
					margin-left: 0.6rem;
				}
				color:#666;
			}
		}
	}	
</style>