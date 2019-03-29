<template>
	<div class="box">
		<div v-if="showCon">
			<!-- <div class="userImg"><img :src="wxIcon"></div>
			<div class="regards">亲爱的微信用户：{{wxName}}</div> -->
			<!-- <div class="toast">为了给您更好的服务，请关联一个账号</div> -->
			<div class="buts">
				<div class="wen">已有账号？</div>
				<div class="but" @click="$router.push('/login')">立即关联</div>
				<div class="wen">还没有账号？</div>
				<div class="but" @click="$router.push('/code?tab=res')">快速注册</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.box{
  position:absolute;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  background:#f3f4f5;
}
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
	// border-top:1px solid #cdcdcd;
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
		box-shadow: 0 .02rem .2rem #03abff;
		width: 6.54rem;
		text-align: center;
		height: .9rem;
		line-height: .9rem;
		font-size: .26rem;
		color: #ffffff;
	}
}
</style>
<script>
import resource from '../api/resource.js'
export default{
	data(){
		return{
			showCon: true,			//默认不显示	
			wxName: "",				//微信名	
			wxIcon: "",				//用户头像
		}
	},
	created(){
		document.title = "关联账号";
		this.wxName = sessionStorage.getItem("wxname");
		this.wxIcon = sessionStorage.getItem("wxIcon");
	}
}
</script>









