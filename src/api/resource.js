import http from './request.js'
let path = {	
	authUrl: 'index/api',             	   				//authUrl
	callback: 'index/getUserOpenId',  	   				//callback
	getUserState: 'index/logincheck', 	   				//根据openid获取用户状态
	register: 'index/register',		  	   				//用户注册
	connection: 'index/guanlian',	  	   				//用户关联
	sendcode: 'sms/joinsendsms',		   				//获取验证码
	phonejoin: 'index/virifysms',	  	   				//手机号关联
	isbindphone: 'sms/isbindphone',		   				//判断用户是否绑定了手机号
	sendsms: 'sms/sendsms',				   				//发送短信注册
	bindsendsms: 'sms/bindsendsms',		   				//发送短信绑定
	virifysms: 'sms/virifysms',			   				//手机号验证码
	getWorklist: 'index/getworklist', 	   				//获取工作类型列表
	getBanner: 'banner/get_banner',	   	   				//获取首页banner
	taskList: 'newtask/index',			   				//首页任务列表
	publish: 'group/publish_open',		   				//首页公告
	taskDetail:'newtask/pushuser',		   				//申请任务
	abandTask: 'newtask/abandonapply',	   				//放弃任务
	getTask: 'task/gettaskinfo',		   				//查看任务详情
	firmShopName: 'task/verifyshopname',   					//验证店铺名称
	firmShopMoney: 'task/verifygoodsprice',					//验证商品金额
	taskStatus: 'task/taskprogresslist',   				//任务进度
	abandontask: 'task/abandontask',	   				//放弃任务
	waitTab: 'prentice/waitmastercheck',   				//待审核的徒弟		
	checkpass: 'prentice/checkpass',	   				//已激活的徒弟
	blackTab: 'prentice/blacklist',		   				//黑名单
	notTab: 'prentice/maytask',							//未接单
	notice: 'prentice/notice',							//通知徒弟来接单
	getApprenticeDetail:'prentice/getuserinfo',			//师父查看徒弟详情
	prentice: 'prentice/checkprentice',					//师父审核徒弟
	updatePass: 'index/changepassword',					//用户修改密码
	getUserInfo: 'index/getuserinfo',					//获取用户信息
	myinfo:"my/myinfo",									//我的页面获取预计收入金额
	updateUserInfo: 'index/changepersonziliao',			//修改用户信息
	getUserTask: 'index/usertask',						//获取用户任务列表（已完成或已取消）
	userPay: 'pay/pay',									//用户提现
	redPay: 'hongbao/sendhb',							//用户红包提现
	payHistory: 'my/assetchange',						//用户交易明细
	hieho: 'prentice/waitblacklist',					//待拉黑
	getMasterList: 'index/ranking_list',				//师父排行榜
	verify: 'task/wwverify',							//改版之后的提交订单
	activity: 'task/activity',							//活动任务列表
	applyActiviity: 'task/applyactivetask',				//申请活动任务
	AppraisalList:'evaluate/ableevaluate',				//可接任务列表
	applytask: 'evaluate/applytask',					//接取任务
	completedTask: 'evaluate/accepttask',				//已接任务列表
	evaluatedetail: 'evaluate/userevaluatedetail',		//任务详情
	uploadvideo:"evaluatetask/download",				//下载视频
	abandontasks: 'evaluate/abandontask',				//放弃评价任务
	completeevaluate:'evaluate/completeevaluate',		//完成评价任务
	tasktotal: 'evaluate/tasktotal',					//评价任务数量
	virifytaocode:"task/verifytkliscorrect",			//验证淘口令
	getLocation:"newtask/returnwxgrantparam",			//获取地理位置参数
	getprovinces:"address/getprovinces",				//获取所有省列表
	getcity:"address/getcity",							//获取市列表
	getdistrict:"address/getdistrict",					//获取区列表
	useridentity:"useridentity/ispassidentityinfo",		//验证用户是否使命认证
	uploadidentity:"useridentity/uploadidentityinfo",	//上传认证资料
	commonquestion:"message/commonquestion",			//用户需知列表
	setread:"message/setread",							//标记已读用户须知
	getTaskInfo:"mjx/getusertaskinfo",					//买家秀获取任务详情
	mjxUploadImg:"mjx/uploadimgandvideo",				//买家秀上传图片和视频
	submitExpressInfo:"mjx/commitbackexpressinfo",		//提交快递信息

	new_loginCheck:"login/login_check",					//新增的判断用户是否登录
	new_send_sms:"login/send_sms",						//新增的登录发送验证码
	new_login:"login/login",							//新增登录

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
	//获取验证码
	sendcode(params){
		return http.get(path.sendcode, params)
	},
	//手机号关联
	phonejoin(params){
		return http.get(path.phonejoin, params)
	},
	//判断用户是否关联了手机号
	isbindphone(params){
		return http.post(path.isbindphone, params)
	},
	//发送短信，注册
	sendsms(params){
		return http.post(path.sendsms, params)
	},
	//发送短信，绑定
	bindsendsms(params){
		return http.post(path.bindsendsms, params)
	},
	//手机号验证码
	virifysms(params){
		return http.post(path.virifysms, params)
	},
	//获取工作类型列表
	getWorklist(params){
		return http.get(path.getWorklist, params)
	},
	//获取banner
	getBanner(params){
		return http.get(path.getBanner, params)
	},
	//首页任务列表
	taskList(params){
		return http.post(path.taskList, params)
	},
	publish(params){
		return http.post(path.publish, params)
	},
	//申请任务
	taskDetail(params){
		return http.post(path.taskDetail, params)
	},
	//放弃任务
	abandTask(params){
		return http.post(path.abandTask, params)
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
	//我的页面获取预计收入金额
	myinfo(params){
		return http.get(path.myinfo, params)
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
	//用户红包提现
	redPay(params){
		return http.post(path.redPay, params)
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
	//活动任务列表
	activity(params){
		return http.post(path.activity, params)
	},
	//活动任务列表
	applyActiviity(params){
		return http.post(path.applyActiviity, params)
	},
	//可接评价任务列表
	AppraisalList(params){
		return http.get(path.AppraisalList, params)
	},
	//接取任务
	applytask(params){
		return http.get(path.applytask, params)
	},
	//已接任务列表
	completedTask(params){
		return http.get(path.completedTask, params)
	},
	//任务详情
	evaluatedetail(params){
		return http.get(path.evaluatedetail, params)
	},
	uploadvideo(params){
		return http.get(path.uploadvideo, params)
	},
	//放弃评价任务
	abandontasks(params){
		return http.get(path.abandontasks, params)
	},
	//完成评价任务
	completeevaluate(params){
		return http.get(path.completeevaluate, params)
	},
	//评价任务数量
	tasktotal(params){
		return http.get(path.tasktotal, params)
	},
	//验证淘口令
	virifytaocode(params){
		return http.post(path.virifytaocode, params)
	},
	//获取地理位置参数
	getLocation(params){
		return http.get(path.getLocation, params)
	},
	//获取省
	getprovinces(params){
		return http.get(path.getprovinces, params)
	},
	//获取市
	getcity(params){
		return http.get(path.getcity, params)
	},
	//获取区
	getdistrict(params){
		return http.get(path.getdistrict, params)
	},
	//验证用户是否实名认证
	useridentity(params){
		return http.get(path.useridentity, params)
	},
	//上传认证资料
	uploadidentity(params){
		return http.post(path.uploadidentity, params)
	},
	//用户需知列表
	commonquestion(params){
		return http.get(path.commonquestion, params)
	},
	//标记已读用户须知
	setread(params){
		return http.get(path.setread, params)
	},
	//买家秀获取任务详情
	getTaskInfo(params){
		return http.get(path.getTaskInfo, params)
	},
	//买家秀上传图片和视频
	mjxUploadImg(params){
		return http.post(path.mjxUploadImg, params)
	},
	//提交快递信息
	submitExpressInfo(params){
		return http.post(path.submitExpressInfo, params)
	},
	//新增的验证是否登录
	new_loginCheck(params){
		return http.get(path.new_loginCheck, params)
	},
	//新增的登录发送验证码
	new_send_sms(params){
		return http.post(path.new_send_sms, params)
	},
	//新增登录
	new_login(params){
		return http.post(path.new_login, params)
	}

}