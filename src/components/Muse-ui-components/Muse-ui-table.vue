<template>
	<div>
		<header>
			<div class="header-left">
				<h2>用户列表</h2>

				<!-- 新增按钮 -->
				<mu-float-button
				v-if="options.create && options.create.enable" 
				icon="add"
				class="addBtn"
				@click="create"/>
			</div>
			<div
			v-if="options.search && options.search.enable" 
			class="header-right">

			    <!-- 搜索输入框 -->
				<muse-ui-input
				v-for="def in definition"
				:key="def.id"
				v-if="def.searchable"
				:type="def.type"

				:fullWidth="false"
				:labelFloat="false"
				:placeholder="def.name"
				:config="def.config"
				v-model="searchModel[def.id]"
				@update:value="(val)=>{$set(searchModel, def.id, val)}"/>

				<!-- 搜索按钮 -->
				<mu-raised-button 
				class="searchButton" 
				labelPosition="before"
				label="搜索" 
				icon="search"
				@click="search" 
				primary/>
			</div>
			
		</header>
		<mu-table
		:multiSelectable="config.multiSelectable? config.multiSelectable : false" 
		:enableSelectAll="config.enableSelectAll? config.enableSelectAll : false"
		:showCheckbox="config.showCheckbox? config.showCheckbox : false"
		:selectable="config.selectable? config.selectable : false"
		@rowSelection="rowSelection($event)">
			<mu-thead 
			slot="header">
				<mu-tr>
					<mu-th
					v-text="'序号'"></mu-th>
					<mu-th
					v-for="def in definition"
					:key="def.id"
					v-if="!def.hiddenInTable" 
					:tooltip="def.name">
						<span v-text="def.name"></span>
						<!-- <span class="" style="color:#000"></span>
						<span class="sortDown"></span> -->
					</mu-th>
					<mu-th
					v-text="'操作'"
					style="text-align:center;"></mu-th>
				</mu-tr>
			</mu-thead>
			<mu-tbody>
				<mu-tr
				v-for="mod,index in model"
				:key="mod.id">
					<mu-td
					v-text="index + 1"></mu-td>

					<mu-td
					v-for="def in definition"
					:key="def.id"
					v-if="!def.hiddenInTable"
					v-text="mod[def.id]"></mu-td>

					<mu-td class="tableBtn" ref="tableBtn">

						<button 
						@click="detail(mod)"
						v-if="options.detail && options.detail.enable"
						v-text="options.detail.name || '详情'"></button>

						<button 
						@click="edit"
						v-if="options.edit && options.edit.enable"
						v-text="options.edit.name || '修改'"></button>

						<button 
						@click="showConfirmDelete"
						v-if="options.delete && options.delete.enable"
						v-text="options.delete.name || '删除'"></button>
					</mu-td>
				</mu-tr>
			</mu-tbody>
		</mu-table>


		<!-- 删除确认框 -->
		<mu-dialog :open="showDeleteDialog" 
		title="你确定要删除这条数据么" 
		@close="deleteCancel">
		    <mu-flat-button slot="actions" @click="deleteCancel" primary label="取消"/>
		    <mu-flat-button slot="actions" primary @click="deleteConfirm" label="确定"/>
		</mu-dialog>

		<!-- 新增dialog -->
		<mu-dialog :open="createForm.show"
		title="新增" 
		@close="createCancel">
		    <muse-ui-form
		    :definition="createForm.definition"
		    :model="createForm.model"/>
		    <mu-flat-button slot="actions" @click="createCancel " primary label="取消"/>
		    <mu-flat-button slot="actions" primary @click="createConfirm" label="确定"/>
		</mu-dialog>

		<!-- 详情dialog -->
		<mu-dialog :open="detailForm.show"
		title="详情" 
		@close="detailCancel">
		    <muse-ui-form
		    :definition="detailForm.definition"
		    :model="detailForm.model"/>
		    <mu-flat-button slot="actions" @click="detailCancel" primary label="取消"/>
		    <mu-flat-button slot="actions" primary @click="detailCancel" label="确定"/>
		</mu-dialog>

		<!-- 修改dialog -->
		<mu-dialog :open="editForm.show"
		title="修改" 
		@close="editCancel">
		    <muse-ui-form
		    :definition="editForm.definition"
		    :model="editForm.model"/>
		    <mu-flat-button slot="actions" @click="editCancel" primary label="取消"/>
		    <mu-flat-button slot="actions" primary @click="editConfirm" label="确定"/>
		</mu-dialog>

		
	</div>
</template>

<script type="text/javascript">
	import commonServices from '@/commonServices'

	export default {
		data() {
			return {
				showDeleteDialog: false,//删除dialog
				createForm: { //新增form
					show: false,
					model: {},
					definition: [],
				},
				editForm:{ //修改form
					show: false,
					model: {},
					definition: [],
				},
				detailForm: { //详情form
					show: false,
					model: {},
					definition: [],
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
			 * [rowSelection description] 选择表格中的一行或者多行时候触发，传入对应的Index
			 */
			rowSelection(selectedRowsIndex){
				console.log(selectedRowsIndex)
			},



			/**
			 * table 上部的按钮
			 */
			
			/* 新增按钮 */
			create() {
				this.createForm.show = true
			},

			/* 排序按钮 */
			sort() {},
			
			/* 搜索按钮 */
			async search() {
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
			 * table 内部的按钮
			 */
			
			/* table Buttons  */
			detail(data) {
				console.log(data)
				this.$set(this.detailForm, 'model', JSON.parse(JSON.stringify(data)))
				console.log(this.detailForm.model)
				this.detailForm.show = true
			},
			edit() {
				this.editForm.show = true
			},
			showConfirmDelete() {
				this.showDeleteDialog = true
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

			/* 删除form的对应方法 */
			deleteConfirm() {
				//确认删除对应的方法
				
				this.showDeleteDialog = false
			},
			deleteCancel() {
				this.showDeleteDialog = false
			},

			/* 修改form的对应方法 */
			editConfirm() {
				//确认删除对应的方法 
				
				this.editForm.show = false
			},
			editCancel() {

				this.editForm.show = false
			},

			/* 详情form的对应方法 */
			detailCancel() {
				this.detailForm.show = false
			},




			/* 以下为工具方法,即按钮不会调用的方法 */
			_definitionCreateListernner() {
				let defArr = []
				for(let i = 0 ; i < this.definition.length; i++){
					if(this.definition[i].createable){
						defArr.push(this.definition[i])
					}
				}
				this.$set(this.createForm, 'definition', defArr)
			},
			_definitionEditableListenner() {
				let defArr = []
				for(let i = 0 ; i < this.definition.length; i++){
					if(this.definition[i].editable){
						defArr.push(this.definition[i])
					}
				}
				this.$set(this.editForm, 'definition', defArr)
			},
			_definitionDetailListenner() {
				let defArr = []
				for(let i = 0 ; i < defArr.length; i++){
					if(!this.definition[i].hiddenInDetail){
						defArr[i].disabled = true
					}
				}

				this.$set(this.detailForm, 'definition', defArr)
			},

			
		},

		mounted() {
			this._definitionEditableListenner();
			this._definitionDetailListenner();
			this._definitionCreateListernner();
		},
	}
</script>

<style type="text/css" scoped>
     /* 修改muse-ui 中的一些样式 */
     .mu-td{
     	overflow: hidden;
		/*white-space: pre-wrap;*/
	}
	 /* end */

	header{
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
	.addBtn{
		width: 28px;
		height: 28px;
	}

	.header-right{
		display: flex;
	}
	.tableBtn{
		text-align: center;
	}
	.tableBtn button{
		border: none;
		color: #fff;
		background-color: #474a4f;
		border-radius: 2px;
		cursor: pointer;
		padding: 3px 6px;
		font-size: 12px;
		font-family: '微软雅黑';
	}

	/* 排序样式 */
	.sortUp{
		display: inline-block;
		position: relative;
		/*margin-top: 10px;*/
        width: 0;
        height: 0;
        border: 7px solid transparent;
	}

	.triangle-top {
        border-top-color: coral;
    }
    
    .triangle-right {
        border-right-color: lightblue;
    }
    
    .triangle-bottom {
        border-bottom-color: lightgreen;
    }
    
    .triangle-left {
        border-left-color: mediumpurple;
    }

</style>