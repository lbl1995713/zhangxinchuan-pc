<template>
	<div style="">
		<mu-list 
		@change="handleListChange" 
		:value="activeList">
			<mu-list-item
			v-for="nav in navList"
			:key="nav.title" 
			:title="nav.title" 
			:value="nav.key" >
	           <mu-icon 
	           slot="left" 
	           :value="nav.icon" />
	           <mu-list-item
	           v-for="child in nav.children"
	           :key="child.title"
	           slot="nested" 
	           :title="child.title" 
	           :value="child.key">
	              <mu-icon slot="left" 
	              :value="child.icon"/>
	           </mu-list-item>
	        </mu-list-item>
		</mu-list>
	</div>
</template>

<script type="text/javascript">
	import navData from '../../static/nav.js'
	export default {
		data() {
			return {
				 navList: navData.result,
				 activeList: '',
			}
		},
		methods:{
			handleListChange (val) {
		      this.activeList = val
		    }
		},
		mounted() {
			console.log(navData)
		}
	}
</script>

<style type="text/css" scoped>
	
</style>