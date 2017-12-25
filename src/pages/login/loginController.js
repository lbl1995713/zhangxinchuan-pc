import commonServices from '@/commonServices'

export default {
	data() {
		return {
			definition:[{
				id: 'userName',
				name: '用户名',
				type: 'string',
				placeholder: '请输入用户名',
			},{
				id: 'password',
				name: '密码',
				type: 'password',
				placeholder: '请输入密码',
			}],
			model: new Map()
		}
	},
	methods:{
		login() {
			console.log(this.model)
			if(!this.model.userName || !this.model.password){
				this.$toast('请输入用户名以及密码')
				return
			}
			// 请求后台api
			
			// 跳转
			this.$router.push({
				name: 'index'
			})
		}
	}
}