<template>
	<div stlye="text-align:center">
		<mu-pagination 
		:total="total" 
		:showSizeChanger="showSizeChanger" 
		:pageSizeOption="pageSizeOption" 
		@pageSizeChange="handleClick"
		@pageChange="fetchData">
	    </mu-pagination>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
		        showSizeChanger: true,
		        pageSizeOption: [10, 20, 30, 40]
			}
		},
		computed: {
			current() {
				return this.searchModel.current
			},
			total() {
				return this.searchModel.total
			}
		},
		props: {
			searchModel:{
				type: Object,
				required: true,
				default() {
					return {
						total: 0,
						current: 1,
					}
				}
			}
		},
		methods: {
			handleClick (newIndex) {
		      console.log('page size change event', newIndex)
		      this.$set(this.searchModel, 'pageSize', newIndex)
		    },
		    fetchData(page) {
		    	console.log(page)
		    }
		}
	}
</script>

<style type="text/css" scoped>
	.mu-pagination{
		justify-content: center;
	}
</style>