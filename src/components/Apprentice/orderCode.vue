<template>
	<div>
		<!-- 返回按钮 -->
		<div class="back" @click="$router.go(-1)">
			<img src="../../assets/hover button.png">
		</div>
		<div class="fullbox">
			<div class="fullTitle">如何查看订单编号？</div>
			<div class="fullContet">
				<div class="fullItem">
					<div class="title">第一步：打开手机淘宝APP进入我的淘宝，点击页面下方的“我的订单”里的，查看更多订单</div>
					<div class="contentImg">
						<img src="../../assets/ordercode1.png">
					</div>
				</div>
				<div class="fullItem">
					<div class="title">第二步：进入我的订单，点击商品进入订单详情页</div>
					<div class="contentImg">
						<img src="../../assets/ordercode2.png">
					</div>
				</div>
				<div class="fullItem">
					<div class="title">第三步：在这里即可查看订单编号</div>
					<div class="contentImg">
						<img src="../../assets/ordercode3.png">
					</div>
				</div>
			</div>
		</div>
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
.fullbox{
	padding: .36rem .58rem .17rem .58rem;
	.fullTitle{
		margin-bottom: .21rem;
		font-size: .3rem;
		color:#03abff;
		font-weight: 700;
	}
	.fullContet{
		.fullItem{
			margin-bottom: .21rem;
			.title{
				font-size: .26rem;
				color: #333333;
			}
			.contentImg{
				margin-top: .18rem;
				display: flex;
				justify-content: center;
				img{
					width: 2.76rem;
					height: 4.94rem;
				}
			}
		}
	}
}
</style>
<script>
export default{

}
</script>