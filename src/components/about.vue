<template>
	<div>
		<!-- 返回按钮 -->
		<div class="back" @click="$router.go(-1)">
			<img src="../assets/hover button.png">
		</div>
		<div class="logo">
			<img src="../assets/logo.png">
		</div>
		<div class="script">功能介绍</div>
		<div class="code">www.52gxk.com</div>
	</div>
</template>
<style lang="less" scoped>
.back{
	position: fixed;
	top: 50%;
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
.logo{
	margin: 1.22rem auto 0;
	width: 1.18rem;
	height: 1.68rem;
	img{
		width: 100%;
		height: 100%;
	}
}
.script{
	margin-top: .5rem;
	width: 100%;
	text-align: center;
	font-size: .26rem;
	color:#333333;
}
.code{
	margin-top: 6.32rem;
	width: 100%;
	text-align: center;
	font-size: .24rem;
	color:#999999;
}
</style>
