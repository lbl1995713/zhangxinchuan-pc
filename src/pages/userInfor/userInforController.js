export default {
	data() {
		return {
			userInfor: {
				definition: [
			        {
			        	id: 'realName',
			        	name: '真实姓名',
			        	type: 'string',
			        },
			        {
			        	id: 'gender',
			        	name: '性别',
			        	type: 'radio',
			        	config: {
			        		options: [
						        {
						        	key: 'male',
						        	label: '男',
						        },{
						        	key: 'female',
						        	label: '女',
						        }
			        		]
			        	},
			        },
			        {
			        	id: 'age',
			        	name: '年龄',
			        	type: 'number',
			        }
				],
				model: new Map(),
			}
		}
	},
	methods: {
		submit() {
			console.log(this.userInfor.model)
		}
	}
}