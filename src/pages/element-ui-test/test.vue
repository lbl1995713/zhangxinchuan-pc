<template>
	<div class="container">
		<!-- <element-ui-input
		v-for="def in definition"
		:key="def.id"
		:type="def.type"
		:config="def.config"
		:placeholder="def.placeholder"
		v-model="model[def.id]"
		@update:value="(val)=>{$set(model, def.id, val)}"/> -->
		<element-ui-form 
		:definition="definition"
		:model="model"/>

		<el-button
		style="margin-top:20px" 
		type="primary"
		@click="submit"
		v-text="'提交输出值'"/>
	</div>
</template>

<script type="text/javascript">
	export {default} from './testController'
</script>

<style type="text/css" scoped>
	.container{
		padding:  50px;
	}
</style>