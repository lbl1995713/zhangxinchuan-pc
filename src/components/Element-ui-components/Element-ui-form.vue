<template>
	<el-form ref="form" :model="form" label-width="80px">
		<el-form-item 
		v-for="def in definition"
		:key="def.id"
		:label="def.name">
			<element-ui-input
			:key="def.id"
			:type="def.type"
			:config="def.config"
			:placeholder="def.placeholder"
			:half="def.half"
			:disabled="def.disabled"
			v-model="model[def.id]"
			@update:value="(val)=>{$set(model, def.id, val)}"/>
		</el-form-item>
	</el-form>
</template>

<script type="text/javascript">

	/**
     * definition type: 1.string
     *                  2.text
     *                  3.password
     *                  4.asyncAutoCompelete
     *                  5.radio
     *                  6.checkbox
     *                  7.number
     *                  8.select
     *                  9.multipleSelect
     *                  10.asyncMultipleAutoCompelete
     *                  11.date
     *                  12.daterange
     *                  13.file
     */
	export default {
		data() {
			return {

			}
		},
		props: {
			definition: {
				type: Array,
				required: true,
				default() {
					return []
				}
			},
			model: {
				type: Object,
				required: true,
				default() {
					return {}
				}
			},
			options: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {

		}
	}
</script>

<style type="text/css" scoped>
	
</style>