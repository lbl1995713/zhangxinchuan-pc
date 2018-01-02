<template>
	<div style="">
		<mu-list 
		@change="handleListChange" 
		:value="activeList">
			<mu-list-item
			v-for="nav in navList"
			:key="nav.title" 
			:title="nav.title" 
			:value="nav.key"
			:toggleNested="nav.children.length > 0"
			:append="true && !nav.children.length > 0"
            :href="nav.children.length > 0? null : nav.url">
	           <mu-icon 
	           slot="left" 
	           :value="nav.icon" />
	           <mu-list-item
	           v-for="child in nav.children"
	           slot="nested" 
	           :key="child.title"
	           :title="child.title"
	           :value="child.key"
	           :append="true"
	           :href="'#/index/' + child.url" >
	              <mu-icon slot="left" 
	              :value="child.icon"/>
	           </mu-list-item>
	        </mu-list-item>
		</mu-list>
	</div>
</template>

<script type="text/javascript">
	import navData from '../../../static/nav.js'
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
	}
</script>

<style type="text/css" scoped>
	
</style>