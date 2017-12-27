import commonServices from '@/commonServices'

export default {
	data() {
		return {
			definition:[{
				id: 'phone',
				name: '用户名',
				type: 'string',
				placeholder: '请输入用户名',
			},{
				id: 'password',
				name: '密码',
				type: 'password',
				placeholder: '请输入密码',
			}],
			model: {},
		}
	},
	methods:{
		login() {
			console.log(this.model)
			Object.assign(this.model, {
				phone: '18200000001',
				password: 'admin'
			})

			if(!this.model.phone || !this.model.password){
				this.$toast('请输入用户名以及密码')
				return
			}
			// 请求后台api   login
			
			commonServices.transport({
				url: 'sys/login',
				data: this.model,
				Vue: this
			})
			.then(res=>{
				console.log(res)
				if(res.code === 0){
					this.$router.push({
						name: 'index'
					})
				}
			})
			
		}
	},
}