export default {
	data() {
		return {
			searchModel: {
				current: 1,
				pageSize: 10,
				total: 50,
			},
			definition: [
				{
					id: 'date',
					name: '日期',
					type: 'date',
					editable: true,
					createable: true,
					searchable: true,
					placeholder: '请输入姓名',
				},
				{
					id: 'name',
					name: '姓名',
					type: 'string',
					editable: true,
					createable: true,
					searchable: true,
					sortable: true,
					placeholder: '请输入姓名',
				},
				{
					id: 'province',
					name: '省份',
					type: 'string',
					editable: true,
					createable: true,
				},
				{
					id: 'city',
					name: '市区',
					type: 'string',
					editable: true,
					createable: true,
				},
				{
					id: 'address',
					name: '地址',
					type: 'string',
				},
				{
					id: 'zip',
					name: '邮编',
					type: 'string',
					hiddenInTable: true,
				},

			],
			model: [],
			config: {},
			options: {
				create: {
					enable: true,
					name: '添加',
				},
				detail: {
					enable: true,
				},
				edit: {
					enable: true,
				},
				delete: {
					enable: true,
				},
				search: {
					enable: true,
				},
				sort: {
					enable: true,
				},
				otherButtons: [
					{
						name: '通过审核',
						enable: true,
						action: (data)=>{
							console.log(data)
						}
					}
				]
			},
			
			 tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
		}
	},
	methods: {
		
	},
	mounted() {
		this.model = this.tableData
	}
}