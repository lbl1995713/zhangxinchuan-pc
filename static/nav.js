/* 用于管理导航列表 */
export default {
	result: [{
		title: '用户管理',
		icon: 'send',
		url: 'userManage',
		key: 'userManage',
		children: [
			{
				title: '个人信息',
				icon: 'grade',
				url: 'userInfor',
				key: 'userInfor',
			},
			{
				title: '修改密码',
				icon: 'inbox',
				url: 'modifyPwd',
				key: 'modifyPwd',
			},
			{
				title: '用户列表',
				icon: 'drafts',
				url: 'userList',
				key: 'userList',
			}
		]
	}]
}