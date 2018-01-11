<template>
	<div class="app-contain">
		<app-header></app-header>
    	<router-view/>
    	<div class="bk0" style="height: 7rem"></div>
		<app-footer></app-footer>
	</div>
</template>
<script >
	import appHeader from '@/view/public/header'
	import appFooter from '@/view/public/footer'

	export default{
		data(){
			return{

			}
		},
		components:{
		    'app-header': appHeader,
		    'app-footer': appFooter
		},
		methods:{

		}
	}
</script>
<style scoped lang="scss">
	
</style>