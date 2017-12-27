
const login = ()=> import('@/pages/login/login'),
      index = ()=> import('@/pages/index/index'),
      userInfor = () => import('@/pages/userInfor/userInfor'),
      modifyPwd = ()=> import('@/pages/modifyPwd/modifyPwd'),
      userList = ()=> import('@/pages/userList/userList')

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
        	component: index,
        	children: [
				{
					path: 'userInfor',
					name: 'userInfor',
					component: userInfor
				},
				{
					path: 'modifyPwd',
					name: 'modifyPwd',
					component: modifyPwd
				},
				{
					path: 'userList',
					name: 'userList',
					component: userList
				}
        	]
        }
	]
}