<template>
	<div style="padding: 20px">
		<element-ui-table
		:definition="definition"
		:model="model"
		:config="config"
		:options="options"
		:searchModel="searchModel"/>

		<element-ui-paginator
		:searchModel="searchModel"/>
	</div>
</template>

<script type="text/javascript">
	export {default} from './testController'
</script>