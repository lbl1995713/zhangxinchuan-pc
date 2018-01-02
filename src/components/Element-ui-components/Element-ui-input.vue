

<template>
	<div class="element-ui-input">

		<!-- 普通文本以及密码输入框 -->
		<el-input
		  v-if="type === 'string' || type === 'text' || type === 'password'"
		  :placeholder="placeholder || '请输入内容'"
		  :type="type == 'password'?'password': 'text'"
		  :disabled="disabled"
		  :prefix-icon="config.icon && config.icon.prefix?config.icon.value:''"
		  :suffix-icon="config.icon && config.icon.suffix?config.icon.value:''"
		  :value="value"
		  :clearable="!disabled && value && value.length > 0"
		  size="small"
		  @input="updateValue">
		</el-input>

		<!-- async 文本单选输入框 -->
		<el-autocomplete
		  v-if="type === 'asyncAutoCompelete'"
		  v-model="asyncAutocomplete"
		  :fetch-suggestions="querySearchAsync"
		  :placeholder="placeholder"
		  :valueKey="config.label?config.label:'label'"
		  :disabled="disabled"
		  :value="value"
		  size="small"
		  @select="updateSelectAutocompleteValue"
		></el-autocomplete>

		<!-- radio 选择框 -->
		<el-radio-group 
		v-if="type === 'radio'"
		v-model="radio"
		:disabled="disabled"
		size="small"
		@input="updateValue">
			<el-radio
			v-for="opt in config.options"
			:key="opt.key" 
			:label="opt.key"
			size="medium"
			border>{{opt.label}}</el-radio>
		</el-radio-group>

		<!-- checkbox 选择框 -->
		<el-checkbox-group
		v-if="type === 'checkbox'" 
		v-model="checkbox"
		:disabled="disabled"
		size="small"
		@input="updateValue">
			 <el-checkbox 
			 v-for="opt in config.options"
			 :key="opt.key" 
			 :label="opt.key"
			 size="medium"
			 border>{{opt.label}}</el-checkbox>
		</el-checkbox-group>

		<!-- number 输入框 -->
		<el-input-number 
		v-if="type === 'number'"
		:value="value"
		:disabled="disabled"
		size="small"
		@input="updateValue"></el-input-number>

		<!-- select 选择框 包括多选 -->
		<el-select
		v-if="type === 'select' || type === 'multipleSelect'" 
		v-model="select" 
		:placeholder="placeholder"
		:multiple="type === 'multipleSelect'"
		:disabled="disabled"
		size="small"
		@input="updateValue">
			<el-option
		      v-for="opt in config.options"
		      :key="opt.key"
		      :label="opt.label"
		      :value="opt.key">
		    </el-option>
		</el-select>

		<!-- async input multiple 多选异步加载后台输入框 -->
		<el-select
		v-if="type === 'asyncMultipleAutoCompelete'"
		v-model="asyncMultipleAutoCompelete.value"
		:placeholder="placeholder"
	    :remote-method="queryStringSearchAsync"
	    :loading="asyncMultipleAutoCompelete.loading"
	    :disabled="disabled"
	    size="small"
	    multiple
	    filterable
	    remote
	    reserve-keyword>
			<el-option
		      v-for="item in asyncMultipleAutoCompelete.options"
		      :key="item.key"
		      :label="item.label"
		      :value="item.key">
		    </el-option>
		</el-select>

		<!-- date picker 单个日期选择器 -->
		<el-date-picker
		v-if="type === 'date' || type === 'daterange'"
		v-model="date"
	    :type="type"
	    :placeholder="placeholder"
	    :default-value="new Date()"
	    :disabled="disabled"
	    start-placeholder="开始日期"
        end-placeholder="结束日期"
        size="small"
	    @input="updateValue"/>

	    <!-- upload File 文件上传 -->
	    <el-upload
		  class="upload-demo"
		  v-if="type === 'file'"
		  ref="upload"
		  action="https://jsonplaceholder.typicode.com/posts/"
		  :file-list="fileList"
		  :auto-upload="false"
		  :disabled="disabled"
		  size="small">
		  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
		  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
		  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
		</el-upload>

	</div>
</template>

<script type="text/javascript">
    import commonServices from '@/commonServices'
	export default {
		data() {
			return {
				radio: this.value,
				checkbox: this.value,
				select: this.value,
				
				asyncAutocomplete: null,
				
				date: this.value,
				asyncMultipleAutoCompelete: {
					loading: false,
					value: [],
					options: [],
				},
				fileList: [],
			}
		},
		props: {
			value: {},
			//行的名字
			name: String,
			placeholder: String,
			//输入框类型
			type: {
				type: String,
				required: true
			},
			//输入框的具体配置
			config:{
				type: Object,
				default() {
					return {}
				}
			},
			//禁用输入框
			disabled: Boolean,



			half: {
				type: Boolean,
				default: false
			},
		},
		methods: {
			updateValue(val) {
				// console.log(val)
				this.$emit('input', val)
			},


			updateSelectAutocompleteValue(item){
				this.$emit('update:value', this.config.key?item[this.config.key]:item)
			},

			/**
			 * asyncAutocomplete的查询方法
			 * @param  {[type]}   queryString 输入的值
			 * @param  {Function} cb          将查询的list set出来
			 */
			querySearchAsync(queryString, cb) {
				if(!this.config || !this.config.url){
					throw new Error("请输入需要查询的url")
				}
				// 根据输入值传递给后端
				commonServices.fetch({
					url: this.config.url,
					searchModel: this.config.searchModel,
				})
				.then(res=>{
					console.log(res)
					// cb(this.restaurants)  
				}, err=>{
					console.log(err)
				})
				
			},

			/**
			 * asyncMultipleAutoCompelete的查询方法
			 * @param  {[type]} queryString 输入的值
			 */
			queryStringSearchAsync(queryString) {
				console.log(queryString)
				if(!this.config || !this.config.url){
					throw new Error("请输入需要查询的url")
				}
				if(!queryString){
					this.asyncMultipleAutoCompelete.options = []
					return 
				}
				this.asyncMultipleAutoCompelete.loading = true
				
				commonServices.fetch({
					url: this.config.url,
					searchModel: this.config.searchModel,
				})
				.then(res=>{
					this.asyncMultipleAutoCompelete.loading = false
					console.log(res)
					// this.asyncMultipleAutoCompelete.options = res.list
				}, err=>{
					this.asyncMultipleAutoCompelete.loading = false
					console.log(err)
				})
			},


			/**
			 * 文件上传
			 */
			submitUpload() {
		        this.$refs.upload.submit();
		    },
			
		}
	}
</script>

<style type="text/css" scoped>

	/* 覆盖的样式 */
	.el-autocomplete{
		width: 100%;
	}
</style>