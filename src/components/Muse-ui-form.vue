<template>
	<div class="muse-ui-form">
		<muse-ui-input
		v-for="def in definition"
		:key="def.id"
		:type="def.type"
		:name="def.name"
		:placeholder="def.placeholder"
		:config="def.config"
		v-model="model[def.id]"
		@update:value="(val)=>{$set(model, def.id, val)}"/>
	</div>
</template>

<script type="text/javascript">
    /**
     * definition type: 1.string
     *                  2.password
     *                  3.date
     *                  4.number
     *                  5.select
     *                  6.multipleSelect
     *                  7.file
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
		methods:{

		},
	}
</script>

<style type="text/css" scoped>
	.muse-ui-form{
		width: 100%;
	}
</style>