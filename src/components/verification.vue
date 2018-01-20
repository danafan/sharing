<template>
	<div>
		<!-- 返回按钮 -->
		<back></back>
		<div class="img">
			<img src="../assets/pictue.png">
		</div>
		<div class="toast">
			<div>很抱歉，您微信绑定的共享客账号无法登录，</div>
			<div>原因{{mess}}，请立即和管理员联系</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.img{
	margin: 3.54rem auto 0;
	width: 2.94rem;
	height: 2.94rem;
	img{
		width: 100%;
		height: 100%;
	}
}
.toast{
	margin-top: .38rem;
	font-size: .26rem;
	color: #999999;
	div{
		text-align: center;
	}
}
</style>
<script>
import back from '../common/back.vue'
export default{
	data(){
		return{
			mess: "",		//错误原因
		}
	},
	created(){
		this.mess = this.$route.query.mess;
	},
	components:{
		back
	}
}
</script>