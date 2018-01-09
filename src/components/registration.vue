<template>
	<div>
		<!-- 返回按钮 -->
		<back></back>
		<!-- 用户名 -->
		<div class="item">
			<div class="itemIcon"><img src="../assets/username.png"></div>
			<div class="itemInput"><input type="text" v-model="username" placeholder="请设置您的用户名6～16位之间"></div>
		</div>
		<!-- 密码 -->
		<div class="item">
			<div class="itemIcon"><img src="../assets/passpord.png"></div>
			<div class="itemInput"><input type="password" v-model="oldPass" placeholder="请设置您的密码6～16之间"></div>
		</div>
		<!-- 确认密码 -->
		<div class="item">
			<div class="itemIcon"><img src="../assets/passpord.png"></div>
			<div class="itemInput"><input type="password" v-model="newPass" placeholder="请再次输入您的密码"></div>
		</div>
		<!-- 旺旺号 -->
		<div class="item">
			<div class="itemIcon"><img src="../assets/wangwang.png"></div>
			<div class="itemInput"><input type="text" v-model="wangCode" placeholder="请输入您的旺旺号"></div>
		</div>
		<!-- QQ号 -->
		<div class="item">
			<div class="itemIcon"><img src="../assets/QQ.png"></div>
			<div class="itemInput"><input type="number" v-model="qqCode" placeholder="请输入您的QQ号"></div>
		</div>
		<!-- 手机号 -->
		<div class="item">
			<div class="itemIcon"><img src="../assets/phone.png" height="200" width="200"></div>
			<div class="itemInput"><input type="number" v-model="phone" placeholder="请输入您的手机号"></div>
		</div>
		<!-- 选择师父或徒弟 -->
		<div class="option">
			<div class="select">
				<div><input type="radio" v-model="status" value="master"/><label>师父</label></div>
				<div><input type="radio" v-model="status" value="apprentice"/><label>徒弟</label> </div>
			</div>
			<div class="item1" v-if="status == 'apprentice'">
				<div class="itemIcon"><img src="../assets/referrer.png" height="200" width="200"></div>
				<div class="itemInput"><input type="text" v-model="recomcode" placeholder="请填写推荐人代号"></div>
			</div>
		</div>
		<!-- 推荐人姓名 -->
		<div class="item" v-if="status == 'apprentice'">
			<div class="itemIcon"><img src="../assets/referrer name.png" height="200" width="200"></div>
			<div class="itemInput"><input type="text" v-model="recomname" placeholder="请填写推荐人姓名"></div>
		</div>
		<!-- 注册按钮 -->
		<div class="registration">立即注册</div>
	</div>
</template>
<style lang="less" scoped>
.item{
	border-bottom: 1px solid #eeeeee;
	padding-left: .58rem;
	padding-right: .58rem;
	display: flex;
	align-items:center;
	height: .92rem;
	.itemIcon{
		margin-right: .14rem;
		position: relative;
		width: .33rem;
		height: .33rem;
		img{
			position: absolute;
			width: 100%;
			height: 100%;
		}
	}
	.itemInput{
		flex:1;
		display: flex;
		align-items:center;
		height: .92rem;
		input{
			border: none;
			outline: none;
			width: 100%;
			font-size: .28rem;
		}
	}
}
.option{
	border-bottom: 1px solid #eeeeee;
	padding: .3rem .58rem;
	.select{
		display: flex;
		align-items:center;
		font-size: .26rem;
		div{
			margin-right: .2rem;
			display: flex;
			align-items:center;
			input{
				margin-right: .14rem;
			}
		}
	}
	.item1{
		margin-top: .3rem;
		display: flex;
		align-items:center;
		.itemIcon{
			margin-right: .14rem;
			position: relative;
			width: .33rem;
			height: .33rem;
			img{
				position: absolute;
				width: 100%;
				height: 100%;
			}
		}
		.itemInput{
			flex:1;
			display: flex;
			align-items:center;
			input{
				border: none;
				outline: none;
				width: 100%;
				font-size: .28rem;
			}
		}
	}
}
.registration{
	margin: 1.04rem auto 0;
	border-radius: .08rem;
	background: #03abff;
	width: 5.84rem;
	text-align: center;
	height: .8rem;
	line-height: .8rem;
	font-size: .26rem;
	color: #ffffff;
}
</style>
<script>
import back from '../common/back.vue'
export default{
	data(){
		return{
			username: "",			//用户名
			oldPass: "",			//密码
			newPass: "",			//确认密码
			wangCode: "",			//旺旺号
			qqCode: "",				//QQ号
			phone: "",				//手机号
			status: "apprentice",	//默认徒弟身份
			recomcode: "",			//推荐人代号
			recomname: "",			//推荐人姓名
		}
	},
	components:{
		back
	}
}
</script>