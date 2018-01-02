<template>
	<div 
	class="container"
	:style="{
		'width': half?'50%':'100%'
	}">
		<!-- 普通输入框 -->
		<mu-text-field
		v-if="type === 'text' || type === 'string'" 
		:label="name" 
		:hintText="placeholder"
		:errorText="errorText" 
		type="text"
		:value="value"
		:disabled="disabled"
		:fullWidth="fullWidth" 
		:labelFloat="labelFloat"
		@input="updateValue($event)"
		@blur="validator"
		@focus="errorText?errorText='':null"/>

		<!-- 密码输入框 -->
		<mu-text-field
		v-if="type === 'password'" 
		:label="name" 
		:hintText="placeholder"
		:errorText="errorText"  
		type="password"
		:value="value"
		:disabled="disabled"
		:fullWidth="fullWidth" 
		:labelFloat="labelFloat"
		@input="updateValue($event)"
		@blur="validator"
		@focus="errorText?errorText='':null"/>

		<!-- 数字输入框 -->
		<mu-text-field
		v-if="type === 'number'" 
		:label="name" 
		:hintText="placeholder"
		:errorText="errorText" 
		type="number"
		:value="value"
		:disabled="disabled"
		:fullWidth="fullWidth" 
		:labelFloat="labelFloat"
		@input="updateValue($event)"
		@blur="validator"
		@focus="errorText?errorText='':null"/>

		<!-- 选择下拉框 -->
		<mu-select-field
		v-if="type === 'select'"
		:value="value"
		:disabled="disabled"
		:labelFocusClass="['label-foucs']"
		:label="name"
		:errorText="errorText"
		@input="updateValue($event)">
		   <mu-menu-item 
		   v-for="(opt,index) in config.options" 
		   :key="opt.key" 
		   :value="opt.key" 
		   :title="opt.label"
		   @click="initErrValidator(opt.key)"/>
		</mu-select-field>

		<!-- 多选下拉框 -->
		<mu-select-field 
		v-if="type === 'multipleSelect'"
		:label="name"
		:value="value"
		:disabled="disabled"
		:errorText="errorText"
		multiple
		v-model="multipleSelect">
		   <mu-menu-item 
		   v-for="(opt,index) in config.options" 
		   :key="opt.key" 
		   :value="opt.key" 
		   :title="opt.label"/>
		</mu-select-field>

		<!-- 日期输入框 -->
		<mu-date-picker
		v-if="type === 'date'" 
		:value="value"
		:disabled="disabled"
		mode="landscape"
		:hintText="placeholder"
		:errorText="errorText"
		:fullWidth="fullWidth"
		@input="updateData($event)"/>

		<!-- 上传文件 -->
		<div>
			<input 
		    v-if="type == 'file' " 
		    type="file"
		    id="uploadFile"
		    @change="uploadFile($event.target.files[0])">
		    <mu-text-field
		    v-if="type == 'file' "  
		    :hintText="name"
		    v-model="fileName" 
		    disabled/>
		    <label 
		    v-if="type == 'file' "
		    for="uploadFile"
		    class="uploadFile">
	        	<mu-icon 
	        	value="add"
	        	color="white"/>
		    </label>
		</div>

		<!-- 单选框 -->
		<mu-radio
		v-if="type == 'radio'"
		:value="value"
		:disabled="disabled"
		style="margin-right: 30px"
		v-for="radio in config.options"
		:key="radio.key" 
		:label="radio.label" 
		:name="'group'" 
		:nativeValue="radio.key" 
		@input="updateValue($event)" 
		class="demo-radio"/>

		 <mu-auto-complete
		 v-if="type == 'asyncAutoCompelete'" 
		 :label="name"
		 :dataSource="dataSource" 
		 :labelFloat="labelFloat" 
		 :fullWidth="fullWidth"/>

	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				multipleSelect: [],
				fileName: '',
				errorText: '',
				dataSource: [{//async异步自动补全输入框中下拉选择的值
					value: 'key1',
					text: 'label1'
				},{
					value: 'key2',
					text: 'label2'
				},{
					value: 'key3',
					text: 'label3'
				}],
			}
		},
		watch: {
			multipleSelect:{
				handler(val) {
					this.initErrValidator(val)
					this.$emit('update:value', val)
				},
				deep: true
			}
		},
		props:{
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


			fullWidth:{
				type: Boolean,
				default: true
			},
			labelFloat:{
				type: Boolean,
				default: true
			},
			half: {
				type: Boolean,
				default: false
			},
		},
		methods:{
			updateValue(val) {
				this.$emit('input', val)
			},
			updateData(val){
				this.initErrValidator(val)
				this.$emit('input', val)
			},
			uploadFile(val){
				if(val){
					this.fileName = val.name
				}
				this.$emit('input', val)
			},
			validator() {
				this._validator()
			},

			/*对于一些无法直接聚焦初始化的输入框进行初始化报错信息*/
			initErrValidator(val) {
				if(this.errorText){
					this.errorText = ''
				}
				this._validator(val)
			},
			_validator(val) {
				//this.value  opt.key  muiltselect  date
				const data = val || this.value
				if(this.config && this.config.validator instanceof Function){
					const res = this.config.validator(data)
					if(res && res.length > 0){
						this.errorText = res
					}
				}
			}
		}
	}
</script>

<style type="text/css" scoped>
	.container{
		width: 50%;
		padding: 0 20px;
	}
	#uploadFile{
		display: none;
	}
	.uploadFile{
		background-color: #7e57c2;
		display: inline-block;
		height: 34px;
		padding: 5px;
		border-radius: 50%;
		cursor: pointer;
		transition: all .5s;
		-webkit-transition: all .5s;
		-moz-transition: all .5s;
		-o-transition: all .5s;

		box-shadow: 0px 0px 10px #888;
	}
	.uploadFile:hover{
		background-color: #ff4081;
	}
</style>