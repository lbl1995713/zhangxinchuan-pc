export default {
	data() {
		return {
			definition: [
				{
					id: 'string',
					name: 'string',
					type: 'string',
					placeholder: '输入text',
					config: {
						icon: {
							prefix: true,
							value: 'el-icon-search',
						}
					},
					editable: true,
				},
				{
					id: 'password',
					name: 'password',
					type: 'password',
					placeholder: '输入密码',
					editable: true,
				},
				{
					id: 'asyncAutoCompelete',
					name: 'asyncAutoCompelete',
					type: 'asyncAutoCompelete',
					placeholder: 'asyncAutoCompelete',
					config: {
						url: '',
						label: '',
						key: 'address'
					},
					editable: true,
				},
				{
					id: 'radio',
					name: 'radio',
					type: 'radio',
					config: {
						options: [
							{
								key: 'male',
								label: '男'
							},
							{
								key: 'female',
								label: '女'
							}
						]
					}
				},
				{
					id: 'checkbox',
					name: 'checkbox',
					type: 'checkbox',
					config: {
						options: [
							{
								key: 'male',
								label: '男'
							},
							{
								key: 'female',
								label: '女'
							},
							{
								key: 'middlefemale',
								label: '人妖'
							},
							{
								key: 'middlemale',
								label: '基佬'
							}
						]
					}
				},
				{
					id: 'number',
					name: 'number',
					type: 'number',
				},
				{
					id: 'select',
					name: 'select',
					type: 'select',
					config: {
						options: [
							{
								key: '1',
						        label: '黄金糕'
							},
							{
								key: '2',
								label: '双皮奶'
							},
							{
								key: '3',
								label: '蚵仔煎'
							},
							{
								key: '4',
								label: '龙须面'
							},
							{
								key: '5',
								label: '北京烤鸭'
							}
						]
					}
				},
				{
					id: 'multipleSelect',
					name: 'multipleSelect',
					type: 'multipleSelect',
					config: {
						options: [
							{
								key: '1',
						        label: '黄金糕'
							},
							{
								key: '2',
								label: '双皮奶'
							},
							{
								key: '3',
								label: '蚵仔煎'
							},
							{
								key: '4',
								label: '龙须面'
							},
							{
								key: '5',
								label: '北京烤鸭'
							}
						]
					}
				},
				{
					id: 'asyncMultipleAutoCompelete',
					name: 'asyncMultipleAutoCompelete',
					type: 'asyncMultipleAutoCompelete',
					config: {
						url: '',
						label: '',
						key: '',
					}
				},
				{
					id: 'date',
					name: 'date',
					type: 'date',
				},
				{
					id: 'daterange',
					name: 'daterange',
					type: 'daterange',
				},
				{
					id: 'file',
					name: 'file',
					type: 'file',
				}
			],
			model: {
				string: 'userName',
				password: 'suprise mother fucker',
				radio: 'female',
				checkbox: ['male', 'female'],
				number: 5,
				select: '2',
				multipleSelect: ['1', '2', '3'],
				date: '2017-12-12',
				daterange: ['2017-12-12', '2017-12-25']
			}
		}
	},
	methods:{
		submit() {
			console.log(this.model)
		}
	}
}