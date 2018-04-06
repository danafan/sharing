<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import resource from './api/resource.js'
export default {
	name: 'app',
	created(){
		if(!sessionStorage.getItem("callback")){
			if(!!sessionStorage.getItem("authUrl")){ //有authurl过
				let url = window.location.href;
				let code = url.split("?")[1].split("&")[0].split("=")[1];	// 获取code
				this.callback(code);
			}else{
				//this.getAuthurl();

				sessionStorage.setItem("status","0");
				this.$router.push('/navbar');

				//this.$router.push('/taskDetail');
				//this.$router.push('/registration');
			}
		}else{
			console.log("授权过");
		}
},
methods:{
		//获取authUrl
		getAuthurl(){
			resource.authUrl().then(res => {
				if(res.data.code == "0"){
					sessionStorage.setItem("authUrl","1");
					window.location.href = res.data.data.url;
				}else{
					this.$toast(res.data.message);
				}
			})
		},
		//callback
		callback(code){
			resource.callback({code:code}).then(res => {
				if(res.data.code == "0"){
					sessionStorage.setItem("callback","1");
					let openid = res.data.data.data.openid;
					let wxname = res.data.data.data.nickname;
					let wxIcon = res.data.data.data.headimgurl;
					sessionStorage.setItem("openid",openid);
					sessionStorage.setItem("wxname",wxname);
					sessionStorage.setItem("wxIcon",wxIcon);
					//根据openid获取用户状态
					this.getserstate(openid,wxname,wxIcon);
				}else if(res.data.code == "1"){
					this.$router.replace('/attention');
				}else{
					this.$toast(res.data.message);
				}
			})
		},
		//根据openid获取用户状态
		getserstate(openid,wxname,wxIcon){
			let wxObj = {
				openid: openid,
				nickname: wxname,
				headimgurl: wxIcon
			}
			resource.getUserState(wxObj).then(res => {
				if(res.data.code == "0"){							//关联过,跳转首页
					//获取用户id和身份
					let uid = res.data.data.userinfo.id;
					let status = res.data.data.userinfo.identity;
					let usercode = res.data.data.userinfo.code;
					sessionStorage.setItem("uid",uid);				//用户id
					sessionStorage.setItem("status",status);		//用户身份
					sessionStorage.setItem("usercode",usercode);	//用户身份
					this.$router.replace('/navbar');	
				}else if(res.data.code == "2"){					//未关联,跳转关联或注册页
					this.$router.replace('/connection');
				}else{											//异常，跳转提示页
					let message = res.data.message;
					let username = res.data.username;
					this.$router.replace('/verification?mess=' + message + '&username=' + username);
				}
			})
		}

	}


}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}
</style>
