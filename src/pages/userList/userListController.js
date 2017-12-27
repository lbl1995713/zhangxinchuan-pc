import commonServices from '@/commonServices'

export default {
	data() {
		return {
			userList: {
				searchModel: {
					total: 1,
					current: 1,
					pageSize: 10,
				},
				definition: [
					{
						id: 'phone',
						name: '用户名',
						type: 'string',
						searchable: true,
						createable: true,
						editable: true,
						half: true,
					},
					{
						id: 'nickname',
						name: '昵称',
						type: 'string',
						createable: true,
						half: true,
					},
					{
						id: 'password',
						name: '密码',
						type: 'password',
						createable: true,
						editable: true,
						hiddenInTable: true,
						hiddenInDetail: true,
					},
					{
						id: 'age',
						name: '年龄',
						type: 'string',
					},
					{
						id: 'description',
						name: '描述',
						type: 'string',
					},
					{
						id: 'interests',
						name: '兴趣爱好',
						type: 'asyncAutoCompelete',
						createable: true,
						hiddenInDetail: true,
						hiddenInTable: true,
					}
				],
				model: [],
				options: {
					create: {
						enable: true,
						url: 'user/save',
					},
					delete: {
						enable: true,
						name: '删了',
						url: 'user/del',
					},
					edit: {
						enable: true,
						name: '改了',
						url: 'user/update',
					},
					detail: {
						enable: true,
						name: '查看详情',
						action(data) {

						},
					},
					search: {
						enable: true,
						action(data) {
							console.log(data)
						}
					}
				}
			}
		}
	},
	methods: {
		_fetchData(searchModel) {
			commonServices.fetch({
				url: 'user/list',
				searchModel: searchModel,
				model: 'userList',
				Vue: this
			})
			.then(res=>{
				// console.log(this.userList.searchModel)

			})
		}
	},
	mounted() {
		this._fetchData(this.userList.searchModel)
		// console.log(this.userList.model)
	}
}