import http from './request.js'
let path = {
	homeList: 'index',          //客户端首页
}
export default{
	//客户端首页
	homeList(params){
		return http.post(path.homeList, params)
	}
}