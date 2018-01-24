<template>
	<div>
		<!-- 返回按钮 -->
		<back></back>
		<!-- 原始密码 -->
		<div class="passItem">
			<div class="suo"><img src="../../assets/password.png"></div>
			<div class="passInput"><input type="password" autocomplete="new-password" v-model="oldPass" placeholder="原始密码"></div>
		</div>
		<!-- 新密码 -->
		<div class="passItem">
			<div class="suo"><img src="../../assets/password.png"></div>
			<div class="passInput"><input type="password" autocomplete="new-password" v-model="newPass" placeholder="6至16位字母、数字或下划线中的两种"></div>
		</div>
		<!-- 确认密码 -->
		<div class="passItem">
			<div class="suo"><img src="../../assets/password.png"></div>
			<div class="passInput"><input type="password" autocomplete="new-password" v-model="okPass" placeholder="确认新密码"></div>
		</div>
		<!-- 确认修改按钮 -->
		<div class="ok" @click="update">确认修改</div>
	</div>
</template>
<style lang="less" scoped>
.passItem{
	padding-left: .58rem;
	padding-right: .58rem;
	border-bottom: 1px solid #f4f4f4;
	height: .86rem;
	display: flex;
	align-items:center;
	.suo{
		margin-right: .14rem;
		position: relative;
		width: .28rem;
		height: .28rem;
		img{
			position: absolute;
			width: 100%;
			height: 100%;
		}
	}
	.passInput{
		height: .86rem;
		display: flex;
		flex:1;
		align-items:center;
		:-moz-placeholder { 
			color: #999999;
		}

		::-moz-placeholder { 
			color: #999999;
		}

		input:-ms-input-placeholder{
			color: #999999;
		}

		input::-webkit-input-placeholder{
			color: #999999;
		}
		input{
			position: relative;
			width: 100%;
			background: 0;
			border: none;
			outline: none;
			font-size: .28rem;
			color: #333333;
		}
	}
}
.ok{
	border-radius: .08rem;
	background: #03abff;
	margin: 1.1rem auto;
	width: 5.86rem;
	text-align: center;
	height: .8rem;
	line-height: .8rem;
	font-size: .26rem;
	color:#ffffff;
}
</style>
<script>
import back from '../../common/back.vue'
import resource from '../../api/resource.js'
export default{
	data(){
		return{
			oldPass: "",							//原始密码
			newPass: "",							//新密码
			okPass: "",								//确认新密码
		}
	},
	created(){
		document.title = "修改密码";
	},
	methods:{
		//点击确认修改
		update(){
			if(this.oldPass == ""){
				this.$toast("原始密码不能为空!");
			}else if(!this.judgmentName.test(this.oldPass)){
				this.$toast("密码为6-16位，包含字母、数字、下划线中的两种!");
			}else if(this.newPass == ""){
				this.$toast("新密码不能为空!");
			}else if(!this.judgmentName.test(this.newPass)){
				this.$toast("密码为6-16位，包含字母、数字、下划线中的两种!");
			}else if(this.okPass == ""){
				this.$toast("请确认密码!");
			}else if(!this.judgmentName.test(this.okPass)){
				this.$toast("密码为6-16位，包含字母、数字、下划线中的两种!");
			}else if(this.newPass != this.okPass){
				this.$toast("两次密码不一样");
			}else{
				let passObj = {
					oldPass: this.oldPass,
					newPass: this.newPass,
					okPass: this.okPass
				}
				this.updatePass(passObj);
			}
		},
		//修改
		updatePass(){
			let passObj = {
				oldpassword: this.oldPass,
				newpassword: this.okPass
			}
			resource.updatePass(passObj).then(res => {
				if(res.data.code == "0"){
					this.$toast("修改成功");
					this.$router.go(-1);
				}else{
					this.$toast(res.data.message);
				}
			});
		}
	},
	components:{
		back
	}
}
</script>