<template>
	<div>
		<el-pagination
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="searchModel.current"
	      :page-sizes="searchModel.pageSizes || [10, 15, 20, 25, 30]"
	      :page-size="searchModel.pageSize || 10"
	      :total="searchModel.total"
	      layout="total, prev, pager, next, sizes, jumper"
	      background>
	    </el-pagination>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				// currentPage: 1
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
			/**
			 * 修改每页显示条数
			 */
			handleSizeChange(val) {
		       console.log(`每页 ${val} 条`);
		       
		       this.searchModel.pageSize = val
		       console.log(this.searchModel)
		    },

		    /**
		     * 修改当前页
		     */
		    handleCurrentChange(val) {
		       console.log(`当前页: ${val}`);
		       
		       this.searchModel.current = val
		       console.log(this.searchModel)
		    }
		}
	}
</script>

<style type="text/css" scoped>
	.el-pagination{
		display: flex !important;
		/*flex-direction: row !important;*/
		justify-content: flex-end !important;
	}
</style>