<template>
	<div>
		<muse-ui-table 
		:definition="userList.definition"
		:model="userList.model"
		:options="userList.options"
		:searchModel="userList.searchModel"/>

		<muse-ui-paginator
		:searchModel="userList.searchModel"/>
	</div>
</template>

<script type="text/javascript">
	export {default} from './userListController'
</script>

<style type="text/css" scoped>
	
</style>