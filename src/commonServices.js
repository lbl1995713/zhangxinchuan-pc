import axios from './axios_conf'

export default {
	//查询数据
	fetch:(url, params)=>{
		return new Promise((resolve, reject)=>{
			axios.get(url, {
				params: params
			})
			.then(res=>{
				resolve(res)
			}, errRes=>{
				reject(errRes)
			})
			.catch(err=>{
				reject(err)
			})
		})
	},
	//post数据
	transport:(url, data)=>{
		return new Promise((resolve, reject)=>{
			axios.post(url, {
				params: params
			})
			.then(res=>{
				resolve(res)
			},errRes=>{
				reject(errRes)
			})
			.catch(err=>{
				reject(err)
			})
		})
	}
}