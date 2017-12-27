<template>
	<div>
		<muse-ui-form
		:definition="userInfor.definition"
		:model="userInfor.model"/>
		<mu-raised-button
		style="margin-top: 30px" 
		label="提交" 
		class="demo-raised-button" 
		primary
		@click="submit"/>
	</div>
</template>

<script type="text/javascript">
	export {default} from './userInforController'
</script>

<style type="text/css" scoped>
	
</style>