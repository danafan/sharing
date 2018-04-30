<template>
	<div class="box">
		<div class="img">
			公共二维码
			<img src="../assets/QR code.png">
			<!-- 文艺男二维码 -->
			<!-- <img src="../assets/wenyinancode.png"> -->
		</div>
		<div class="txt1">请先关注公众号</div>
		<div class="txt2">长按图片【识别二维码】公众号</div>
		<div class="txt3"></div>
		<div class="txt4">无法识别二维码</div>
		<div class="txt5">1.打开微信，点击“添加朋友”</div>
		<div class="txt5">2.点击“公众号”</div>
		<div class="txt5">3.搜索公众号：“留客户”</div>
		<div class="txt5">4.点击“关注”，完成</div>
	</div>
</template>
<style scoped lang="less">
.box{
  position:absolute;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  background:#f3f4f5;
}
.img{
	margin: .84rem auto 0;
	width: 2.14rem;
	height: 2.12rem;
	img{
		width: 100%;
		height: 100%;
	}
}
.txt1{
	margin:.26rem auto 0;
	font-size: .28rem;
	color: #03abff;
	width: 100%;
	text-align: center;
}
.txt2{
	margin:.2rem auto 0;
	font-size: .26rem;
	color: #333;
	width: 100%;
	text-align: center;
}
.txt3{
	margin:.6rem auto 0;
	width:100%;
	border-bottom: 1px solid #f4f4f4;
}
.txt4{
	margin:.26rem auto .1rem;
	font-size: .28rem;
	color: #333;
	width: 100%;
	text-align: center;
}
.txt5{
	margin:.22rem auto 0;
	font-size: .26rem;
	color: #999;
	padding-left: 2rem;
}
</style>
<script>
export default{

}
</script>