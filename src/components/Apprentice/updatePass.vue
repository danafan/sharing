<template>
	<div>
		<!-- 返回按钮 -->
		<div class="back" @click="$router.go(-1)">
			<img src="../../assets/hover button.png">
		</div>
		<!-- 原始密码 -->
		<div class="passItem">
			<div class="suo"><img src="../../assets/password.png"></div>
			<div class="passInput"><input type="password" autocomplete="new-password" v-model="oldPass" :placeholder="passtype == true ? '原始密码' : '原交易密码(默认为 000000)'"></div>
		</div>
		<!-- 新密码 -->
		<div class="passItem">
			<div class="suo"><img src="../../assets/password.png"></div>
			<div class="passInput"><input type="password" autocomplete="new-password" v-model="newPass" :placeholder="passtype == true ? '新密码6-16位字母与数字密码' : '新交易密码6位纯数字密码'"></div>
		</div>
		<!-- 确认密码 -->
		<div class="passItem">
			<div class="suo"><img src="../../assets/password.png"></div>
			<div class="passInput"><input type="password" autocomplete="new-password" v-model="okPass" :placeholder="passtype == true ? '确认新密码' : '确认新交易密码'"></div>
		</div>
		<!-- 确认修改按钮 -->
		<div class="ok">确认修改</div>
	</div>
</template>
<style lang="less" scoped>
.back{
		position: fixed;
		top: 45%;
		transform:translate(-50%);
		right: -.4rem;
		width: .84rem;
		height: .84rem;
		img{
			position: absolute;
			width: 100%;
			height: 100%;
		}
	}
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
		input{
			position: relative;
			top: .03rem;
			width: 100%;
			background: 0;
			border: none;
			outline: none;
			font-size: .28rem;
			color: #999999;
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
export default{
	data(){
		return{
			passtype: true,							//默认修改类型是修改密码
			oldPass: "",							//原始密码
			newPass: "",							//新密码
			okPass: "",								//确认新密码
		}
	},
	created(){
		let passType = this.$route.query.passtype;
		if(passType == "password"){//修改密码
			this.passtype = true;
		}else if(passType == "transaction"){//修改交易密码
			this.passtype = false;
		};
	}
}
</script>