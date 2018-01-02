export default {
	state: {
		user: {},
		userId: null,
		cookie: '',
	},
	mutations:{
		setUser(state, user){
			state.user = user
			state.userId = user?user.userId:null
		},
		setCookie(state, str){
			if(str)
				state.cookie = str
		}
	}
}