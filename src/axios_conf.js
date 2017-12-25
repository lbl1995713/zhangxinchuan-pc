import axios from 'axios'


// axios.defaults.withCredentials = true
const axiosConfig = axios.create({
	baseURL: 'http://192.168.20.2:/',
	timeout: 5000,
	// withCredentials: false,//表示跨域请求时是否需要使用凭证
	// `transformRequest` 允许在向服务器发送前，修改请求数据  后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
	// `transformResponse` 在传递给 then/catch 前，允许修改响应数据
	// `onUploadProgress` 允许为上传处理进度事件
	// `onDownloadProgress` 允许为下载处理进度事件
	// `maxContentLength` 定义允许的响应内容的最大尺寸
	// `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
    // `keepAlive` 默认没有启用
    // 'proxy' 定义代理服务器的主机名称和端口
})

export default axiosConfig

// axios.post(url, model)
// .then(res=>{

// },err=>{

// })
// .catch(err=>{

// })