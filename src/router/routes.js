
const login = ()=> import('@/pages/login/login'),
      index = ()=> import('@/pages/index/index'),
      userInfor = () => import('@/pages/userInfor/userInfor'),
      modifyPwd = ()=> import('@/pages/modifyPwd/modifyPwd'),
      userList = ()=> import('@/pages/userList/userList'),
      elementTest = ()=> import('@/pages/element-ui-test/test'),
      tableTest = ()=> import('@/pages/element-ui-tableTest/test'),
      navMenu = ()=> import('@/pages/element-ui-navMenu/test')

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
          // meta: {
          //    requireAuth: true
          // },
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
        },
        {
        	path: '/test',
        	name: 'test',
        	component: elementTest
        },
        {
          path: '/tableTest',
          name: 'tableTest',
          component: tableTest
        },
        {
          path: '/navMenu',
          name: navMenu,
          component: navMenu
        }
	]
}