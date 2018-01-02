import axios from './axios_conf'

export default {
	/**
	 * 查询数据 并且赋值
	 * @param  {[type]} options.url          查询的url
	 * @param  {[type]} options.searchModel  查询的params对应的model
	 * @param  {[type]} options.model        需要赋值的model 例如需要给user.model赋值，传入'user'即可
	 * @param  {[type]} options.Vue          Vue
	 * @param  {[type]} options.progress     是否需要加载动画
	 * @return {[type]}                      response
	 */
	fetchAssignment:({url, searchModel, model, Vue, progress})=>{
		if(progress)  
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
					resolve(res)
				}else{
					reject(res)
				}
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
	fetch: ({url, searchModel, progress})=>{
		if(progress) 
			Vue.$progress()
		return new Promise((resolve, reject)=>{
			axios.get(url, {
				params: searchModel
			})
			.then(res=>{
				Vue.$done()
				if(res.data.code === 0){
					resolve(res)
				}else{
					reject(res)
				}
			}, err=>{
				Vue.$done()
				Vue.$toast('网络好像出问题了 = v =')
				reject(err)
			})
		})
	},
	//post数据	
	transport:({url, data, Vue, progress})=>{
		if(progress)
			Vue.$progress()

		// let params = ''
		// for(let [index, elem] of Object.entries(data)){
		// 	params += index + '=' + elem + '&'
		// }
		// params = params.substring(0, params.length - 1)
		
		return new Promise((resolve, reject)=>{
			axios.post(url, data)
			.then(res=>{
				if(progress)  Vue.$done()
				resolve(res.data)
			},errRes=>{
				if(progress)  Vue.$done()
				Vue.$toast("网络好像出问题了 = v =")
				reject(errRes)
			})
			.catch(err=>{
				if(progress)  Vue.$done()
				Vue.$toast("网络好像出问题了 = v =")
				reject(err)
			})
		})
	}
}