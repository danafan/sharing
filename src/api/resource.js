import http from './request.js'
let path = {	
	authUrl: 'index/api',             	   //authUrl
	callback: 'index/getUserOpenId',  	   //callback
	getUserState: 'index/logincheck', 	   //根据openid获取用户状态
	register: 'index/register',		  	   //用户注册
	connection: 'index/guanlian',	  	   //用户关联
	getWorklist: 'index/getworklist', 	   //获取工作类型列表
	taskList: 'task/tasklist',        	   //首页任务列表
	taskDetail:'task/applytask',		   //申请任务
	getTask: 'task/gettaskinfo',		   //查看任务详情
	firmShopName: 'task/verifyshopname',   //验证店铺名称
	firmShopMoney: 'task/verifygoodsprice',//验证商品金额
	subOrder: 'task/commitorder',		   //提交订单
	taskStatus: 'task/taskcondition',	   //任务进度
	abandontask: 'task/abandontask',	   //放弃任务
	waitTab: 'prentice/waitmastercheck',   //待审核的徒弟		
	checkpass: 'prentice/checkpass',	   //已激活的徒弟
	blackTab: 'prentice/blacklist',		   //黑名单
	notTab: 'prentice/maytask',				//未接单
	notice: 'prentice/notice',				//通知徒弟来接单
	getApprenticeDetail:'prentice/getuserinfo',	//师父查看徒弟详情
	prentice: 'prentice/checkprentice',		//师父审核徒弟
	updatePass: 'index/changepassword',		//用户修改密码
	getUserInfo: 'index/getuserinfo',		//获取用户信息
	updateUserInfo: 'index/changepersonziliao',	//修改用户信息
	getUserTask: 'index/usertask',			//获取用户任务列表（已完成或已取消）
	userPay: 'pay/pay',						//用户提现
	payHistory: 'my/assetchange',			//用户交易明细
	hieho: 'prentice/waitblacklist',		//待拉黑
	getMasterList: 'index/ranking_list',	//师父排行榜
	verify: 'task/wwverify',				//改版之后的提交订单
}
export default{
	//authUrl
	authUrl(params){
		return http.get(path.authUrl, params)
	},
	//callback
	callback(params){
		return http.get(path.callback, params)
	},
	//根据openid获取用户状态
	getUserState(params){
		return http.get(path.getUserState, params)
	},
	//用户注册
	register(params){
		return http.post(path.register, params)
	},
	//用户关联
	connection(params){
		return http.post(path.connection, params)
	},
	//获取工作类型列表
	getWorklist(params){
		return http.get(path.getWorklist, params)
	},
	//首页任务列表
	taskList(params){
		return http.post(path.taskList, params)
	},
	//申请任务
	taskDetail(params){
		return http.post(path.taskDetail, params)
	},
	//任务详情
	getTask(params){
		return http.post(path.getTask, params)
	},
	//验证店铺名称
	firmShopName(params){
		return http.post(path.firmShopName, params)
	},
	//验证商品金额
	firmShopMoney(params){
		return http.post(path.firmShopMoney, params)
	},
	//提交订单
	subOrder(params){
		return http.post(path.subOrder, params)
	},
	//任务进度
	taskStatus(params){
		return http.get(path.taskStatus, params)
	},
	//放弃任务
	abandontask(params){
		return http.post(path.abandontask, params)
	},
	//待审核的徒弟
	waitTab(params){
		return http.post(path.waitTab, params)
	},
	//已激活的徒弟
	checkpass(params){
		return http.post(path.checkpass, params)
	},
	//黑名单的徒弟
	blackTab(params){
		return http.post(path.blackTab, params)
	},
	//未接单
	notTab(params){
		return http.post(path.notTab, params)
	},
	notice(params){
		return http.post(path.notice, params)
	},
	//师父查看徒弟详情
	getApprenticeDetail(params){
		return http.post(path.getApprenticeDetail, params)
	},
	//师父审核徒弟
	prentice(params){
		return http.post(path.prentice, params)
	},
	//用户修改密码
	updatePass(params){
		return http.post(path.updatePass, params)
	},
	//获取用户信息
	getUserInfo(params){
		return http.get(path.getUserInfo, params)
	},
	//修改用户信息
	updateUserInfo(params){
		return http.post(path.updateUserInfo, params)
	},
	//获取用户任务列表（已完成或已取消）
	getUserTask(params){
		return http.get(path.getUserTask, params)
	},
	//用户提现
	userPay(params){
		return http.get(path.userPay, params)
	},
	//用户交易明细
	payHistory(params){
		return http.post(path.payHistory, params)
	},
	// 待拉黑
	hieho(params){
		return http.post(path.hieho, params)
	},
	//师父排行榜
	getMasterList(params){
		return http.get(path.getMasterList, params)
	},
	//改版后的提交订单
	verify(params){
		return http.post(path.verify, params)
	},
}