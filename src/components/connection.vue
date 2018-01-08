<template>
	<div>
		<div class="userImg"><img src="../assets/test1.jpg"></div>
		<div class="regards">亲爱的微信用户：{{username}}</div>
		<div class="toast">为了给您更好的服务，请管理一个共享客账号</div>
		<div class="buts">
			<div class="wen">已有共享客账号？</div>
			<div class="but" @click="$router.push('/login')">立即关联</div>
			<div class="wen">还没有共享客账号？</div>
			<div class="but" @click="$router.push('/navbar')">快速注册</div>
			<!-- <div class="but" @click="$router.push('/registration')">快速注册</div> -->
		</div>
	</div>
</template>
<style lang="less" scoped>
.userImg{
	margin: .96rem auto 0;
	border-radius: .08rem;
	width: 1.96rem;
	height: 1.96rem;
	img{
		border-radius: .08rem;
		width: 100%;
		height: 100%;
	}
}
.regards{
	margin-top: .2rem;
	width: 100%;
	text-align: center;
	font-size: .26rem;
	color: #333333;
}
.toast{
	margin-top: .22rem;
	width: 100%;
	text-align: center;
	font-size: .24rem;
	color: #999999;
}
.buts{
	border-top:1px solid #f4f4f4;
	margin-top: .36rem;
	padding-top: .36rem;
	.wen{
		margin-bottom: .26rem;
		width: 100%;
		text-align: center;
		font-size: .24rem;
		color:#999999;
	}
	.but{
		border-radius: .08rem;
		margin:0 auto .36rem; 
		background: #03abff;
		width: 4.64rem;
		text-align: center;
		height: .62rem;
		line-height: .62rem;
		font-size: .26rem;
		color: #ffffff;
	}
}
</style>
<script>
export default{
	data(){
		return{
			username: "刘倩娜",		//用户名		
		}
	}
}
</script>