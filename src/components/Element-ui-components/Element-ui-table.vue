<template>
	<div>
		<!-- 表格顶部的按钮及查询等 -->
		<header>
			<div class="header-left">
				<h2>用户列表</h2>
				<!-- 新增按钮 -->
				<el-button
				v-if="options.create && options.create.enable"
				size="mini" 
				type="primary" 
				icon="el-icon-circle-plus-outline"
				@click="create">{{options.create.name || '新增'}}</el-button>
			</div>
			<div 
			v-if="options.search && options.search.enable" 
			class="header-right">
				<!-- 搜索输入框 -->
				<element-ui-input
				style="margin-right: 20px"
				v-for="def in definition"
				v-if="def.searchable"
				:key="def.id"
				:type="def.type"
				:config="def.config"
				:placeholder="def.placeholder"
				:half="def.half"
				:disabled="def.disabled"
				v-model="searchModel[def.id]"
				@update:value="(val)=>{$set(searchModel, def.id, val)}"/>

				<!-- 搜索按钮 -->
				<el-button 
				type="primary"
				icon="el-icon-search"
				size="mini"
				@click="search">搜索</el-button>
			</div>
		</header>

		<!-- 主表格 -->
		<el-table
		:data="model"
		border
		@sort-change="sort"
	    style="width: 100%">
			<el-table-column
		      type="index">
		    </el-table-column>
			<el-table-column
			  v-for="def in definition"
			  v-if="!def.hiddenInTable"
			  :key="def.id"
		      :prop="def.id"
		      :sortable="def.sortable && options.sort && options.sort.enable?'custorm':false"
		      :label="def.name">
		    </el-table-column>
		    <el-table-column label="操作">
		    	<template slot-scope="scope">
		    		<el-button
			          v-if="options.detail && options.detail.enable"
			          icon="el-icon-view"
			          size="mini"
			          @click="detail({
			          	data: scope.row,
			            index: scope.$index
			        })"></el-button>
			        <el-button
			          v-if="options.edit && options.edit.enable"
			          icon="el-icon-edit"
			          size="mini"
			          type="primary"
			          @click="edit({
			          	data: scope.row,
			            index: scope.$index
			        })"></el-button>
			        <el-button
			          v-if="options.delete && options.delete.enable"
			          icon="el-icon-delete"
			          size="mini"
			          type="danger"
			          @click="showConfirmDelete({
			          	data: scope.row,
			            index: scope.$index
			        })"></el-button>


			        <el-tooltip 
			        class="item" 
			        effect="dark" 
			        content="更多操作" 
			        placement="top">
				        <el-dropdown 
				         v-if="options.otherButtons && options.otherButtons.length > 0" 
				         trigger="click">
						      <span class="el-dropdown-link"
						      style="cursor: pointer;">
						        <i class="el-icon-arrow-down el-icon--right"></i>
						      </span>
						      <el-dropdown-menu slot="dropdown">
						        <el-dropdown-item
						        v-for="opt in options.otherButtons"
						        :key="opt.name"
						        v-if="opt.enable">
						        	<span v-text="opt.name"
						        	@click="opt.action(scope.row)"></span>
						        </el-dropdown-item>
						      </el-dropdown-menu>
					    </el-dropdown>
				    </el-tooltip>
			       

			    </template>
		    </el-table-column>
		</el-table>

		<!-- 新增form -->
		<el-dialog title="新增" :visible.sync="createForm.show">
			<element-ui-form 
			:definition="createForm.definition"
			:model="createForm.model"/>
			<div slot="footer" class="dialog-footer">
			    <el-button @click="createCancel">取 消</el-button>
			    <el-button type="primary" @click="createConfirm">确 定</el-button>
			</div>
		</el-dialog>

		<!-- 修改form -->
		<el-dialog title="修改" :visible.sync="editForm.show">
			<element-ui-form 
			:definition="editForm.definition"
			:model="editForm.model"/>
			<div slot="footer" class="dialog-footer">
			    <el-button @click="editCancel">取 消</el-button>
			    <el-button type="primary" @click="editConfirm">确 定</el-button>
			</div>
		</el-dialog>

		<!-- 详情form -->
		<el-dialog title="详细内容" :visible.sync="detailForm.show">
			<element-ui-form 
			:definition="detailForm.definition"
			:model="detailForm.model"/>
		</el-dialog>


	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				createForm: { //新增form
					show: false,
					model: {},
					definition: []
				},
				editForm:{ //修改form
					show: false,
					model: {},
					definition: []
				},
				detailForm: { //详情form
					show: false,
					model: {},
					definition: []
				},

			}
		},
		props: {
			/* 表格的定义 */
			definition: {
				type: Array,
				required: true,
				default() {
					return []
				}
			},
			/* 表格数据的model */
			model: {
				type: Array,
				required: true,
				default() {
					return []
				}
			},
			/* 对表格整体的配置 */
			config: {
				type: Object,
				/**
				 * multiSelectable  是否可以多选
				 * enableSelectAll  是否允许选择全部
				 * showCheckbox  是否显示复选框
				 * selectable  是否可以选择
				 */
				default() {
					return {}
				}
			},
			/* 对表格按钮的配置 */
			options: {
				type: Object,
				/**
				 * search 搜索
				 * create 新增
				 * delete 删除
				 * edit 修改
				 * sort 排序
				 * 
				 */
				default() {
					return {}
				}
			},
			/* 查询的model */
			searchModel: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			/**
			 * 表格 上部的按钮
			 */
			/* 新增按钮 */
			create() {
				this.createForm.show = true
			},
			/* 排序按钮 */
			sort(arg) {
				console.log(arg)
			},
			
			/* 搜索按钮 */
			async search() {
				console.log(this.searchModel)
				if(!this.options.search.action){
					throw new Error('搜索方法未定义')
				}else{
					// new Promise((resolve, reject)=>{
					// 	const result = await this.options.search.action()
					// 	if(true){//根据不同的返回进行判断是否出错
					// 		resolve(result)
					// 	}else{
					// 		reject(result)
					// 	}
						
					// })
					// .then(res=>{
					// 	//将res赋值， 可能每个服务器端的返回时不同的
					// }, err=>{
					// 	this.$toast('网络好像出问题了 = v =')
					// })
				}	
			},


			/**
			 * 表格中的按钮
			 */
			
			detail({data, index}) {
				
				this.$set(this.detailForm, 'model', JSON.parse(JSON.stringify(data)))
				this.detailForm.show = true
			},

			edit({data, index}) {

				this.$set(this.editForm, 'model', JSON.parse(JSON.stringify(data)))
				this.editForm.show = true
			},

			showConfirmDelete({data, index}) {
				console.log(index, data)
				this.$confirm('此操作将永久删除这条数据, 是否继续?', '提示', {
					confirmButtonText: '确认',
					cancelButtonText: '取消',
			        type: 'warning'
				})
				.then(()=>{

					/* 确定删除调用删除api */

					//删除成功
					this.$message({
						showClose: true,
						type: 'success',
			            message: '删除成功!',
					})

				})
				.catch(()=>{
					//取消的回调
				})
			},

			/**
			 * form对应的不同方法
			 */
			
			/* 新增form的方法 */
			async createConfirm() {
				// this.$axios.post('user/save', this.createForm.model)
				// .then(res=>{
				// 	console.log(res)
				// })

				if(this.options.create.beforeAction)
					this.options.create.beforeAction(this.createForm.model)

				if(!this.options.create.action){
					commonServices.transport({
						url: this.options.create.url, 
						data: this.createForm.model, 
						Vue: this})
					.then(res=>{
						console.log(res)

					}, err=>{
						console.log(err)
					})
				}else{
					this.options.create.action(this.createForm.model)
				}

				this.createForm.show = false
			},
			createCancel() {
				this.createForm.show = false
			},

			

			/* 修改form的对应方法 */
			editConfirm() {
				//确认修改对应的方法 
				
				this.editForm.show = false
			},
			editCancel() {

				this.editForm.show = false
			},



			/**
			 * 私有方法
			 */
			_definitionCreateListernner() {
				let defArr = []
				for(let i = 0 ; i < this.definition.length; i++){
					if(this.definition[i].createable){
						defArr.push(this.definition[i])
					}
				}
				this.$set(this.createForm, 'definition', defArr)
			},
			_definitionDetailListenner() {
				let defArr = [],
				    cloneDef = JSON.parse(JSON.stringify(this.definition))
				for(let i = 0 ; i < cloneDef.length; i++){
					if(!cloneDef[i].hiddenInDetail){
						defArr.push(cloneDef[i])
						defArr[i].disabled = true
					}
				}
				this.$set(this.detailForm, 'definition', defArr)
			},
			_definitionEditableListenner() {
				let defArr = [],
				    cloneDef = JSON.parse(JSON.stringify(this.definition))

				for(let i = 0 ; i < cloneDef.length; i++){
					if(cloneDef[i].editable){
						defArr.push(cloneDef[i])
					}
				}
				this.$set(this.editForm, 'definition', defArr)
				console.log(this.editForm)
			},

		},
		mounted() {
			this._definitionCreateListernner()
			this._definitionDetailListenner()
			this._definitionEditableListenner()
		}
	}
</script>

<style type="text/css">
	header{
		margin: 5px 0;
		display: flex;
		/*flex-direction: row;*/
		justify-content: space-between;
	}
	.header-left{
		display: flex;
		/*justify-content: start;*/
	}
	.header-left h2{
		line-height: 33px;
		margin-right: 15px;
	}

	.header-right{
		display: flex;
	}

    /*覆盖样式*/
	.cell{
		white-space: nowrap !important;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>