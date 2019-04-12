<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	import resource from './api/resource.js'
	export default {
		name: 'app',
		data(){
			return{
				unionid: ""
			}
		},
		created(){
			//新增验证用户状态
			this.new_loginCheck();
		},
		methods:{
			//新增验证用户状态
			new_loginCheck(){
				resource.new_loginCheck().then(res => {
					if(res.data.code == 1){
						//获取用户id和身份
						let uid = res.data.user_info.id;
						let status = res.data.user_info.identity;
						let usercode = res.data.user_info.code;
						sessionStorage.setItem("uid",uid);				//用户id
						sessionStorage.setItem("status",status);		//用户身份
						sessionStorage.setItem("usercode",usercode);	//用户身份
						//判断跳转
						let appTab = sessionStorage.getItem("appTab");
						let appType = sessionStorage.getItem("appType");
						if(!!appTab){
							if(appTab == "taskDetail"){
								this.$router.replace('/taskDetail?id=' + appType);
							}else if(appTab == "appraisal"){
								this.$router.replace('/appraisal?type=' + appType);
							}
						}else{
							this.$router.replace('/navbar');	
						}
					}else if(res.data.code == 2){
						let uid = res.data.user_info.id;
						sessionStorage.setItem("uid",uid);
						this.$router.push('/rejectUpdateInfo');
					}else if(res.data.code == 4){
						let message = res.data.msg;
						let username = res.data.user_info.username;
						this.$router.replace('/verification?mess=' + message + '&username=' + username);
					}else if(res.data.code == -1) {
						this.$router.replace('/connection');
						this.$toast(res.data.msg);
					}
				})
			},
		}
	}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}
</style>
