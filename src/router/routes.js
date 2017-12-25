
const login = ()=> import('@/pages/login/login'),
      index = ()=> import('@/pages/index/index') 

export default {
	routes:[
        {
        	path: '/',
        	name: 'login',
        	component: login
        },
        {
        	path: '/index',
        	name: 'index',
        	component: index
        }
	]
}