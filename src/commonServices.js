import axios from './axios_conf'

export default {
	//查询数据
	fetch:({url, searchModel, model, Vue})=>{
		Vue.$progress()
		return new Promise((resolve, reject)=>{
			axios.get(url, {
				params: searchModel
			})
			.then(res=>{
				Vue.$done()
				if(res.data.code === 0){
					Vue.$set(Vue[model], 'model', res.data.data.list)
					Vue.$set(Vue[model]['searchModel'], 'total', res.data.data.total)
				}
				resolve(res)
			}, errRes=>{
				Vue.$done()
				Vue.$toast('网络好像出问题了 = v =')
				reject(errRes)
			})
			.catch(err=>{
				Vue.$done()
				Vue.$toast('网络好像出问题了 = v =')
				reject(err)
			})
		})
	},
	//post数据	
	transport:({url, data, Vue})=>{
		Vue.$progress()

		// let params = ''
		// for(let [index, elem] of Object.entries(data)){
		// 	params += index + '=' + elem + '&'
		// }
		// params = params.substring(0, params.length - 1)
		
		return new Promise((resolve, reject)=>{
			axios.post(url, data)
			.then(res=>{
				Vue.$done()
				resolve(res.data)
			},errRes=>{
				Vue.$done()
				Vue.$toast("网络好像出问题了 = v =")
				reject(errRes)
			})
			.catch(err=>{
				Vue.$done()
				Vue.$toast("网络好像出问题了 = v =")
				reject(err)
			})
		})
	}
}