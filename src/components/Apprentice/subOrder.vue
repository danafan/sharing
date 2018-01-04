<template>
	<div>
		<!-- 返回按钮 -->
		<div class="back" @click="$router.go(-1)">
			<img src="../../assets/hover button.png">
		</div>
		<!-- 顶部时间 -->
		<div class="time">
			<div class="timeIcon">
				<img src="../../assets/task(black).png">
			</div>
			<div class="conTime">剩余时间：59:59:34</div>
		</div>
		<!-- 下面内容 -->
		<div class="orderCon">
			<div class="orderImg">
				<img src="../../assets/test2.jpg">
			</div>
			<div class="shopName">商品名称：<span>男士棉袄</span></div>
			<div class="lookCode" @click="$router.push('/orderCode')">如何查询订单编号>></div>
			<div class="codeInput">
				<input type="text" placeholder="请输入您付款的订单编号" v-model="orderCode">
			</div>
			 <div class="prompt">请在<span>59:34:21</span>内提交您的编号，否则任务将自动作废哦！</div>	
			 <div class="submit">提交</div>
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
.time{
	display: flex;
	justify-content: center;
	align-items:center;
	background: #e8e8e8;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: .63rem;
	.timeIcon{
		position: relative;
		margin-right: .1rem;
		width: .44rem;
		height: .44rem;
		img{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
	.conTime{
		font-size: .3rem;
		color:#333333;
	}
}
.orderCon{
	margin-top: 1.18rem;
	.orderImg{
		margin: .55rem auto 0;
		width: 2.86rem;
		height: 2.86rem;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.shopName{
		margin-top: .36rem;
		width: 100%;
		text-align: center;
		font-size: .28rem;
		color: #333333;
		span{
			color:#666666;
		}
	}
	.lookCode{
		margin-top: .12rem;
		width: 100%;
		text-align: center;
		font-size: .28rem;
		color:#03abff;
	}
	.codeInput{
		width: 100%;
		text-align: center;
		input{
			outline: none;
			border:1px solid #bfbfbf;
			border-radius: .08rem;
			width: 5.8rem;
			text-align: center;
			height: .68rem;
		}
	}
	.prompt{
		margin-top: .1rem;
		width: 100%;
		text-align: center;
		font-size: .24rem;
		color:#333333;
		span{
			color: #ff5858;
		}
	}
	.submit{
		margin: 1rem auto 0;
		border-radius: .08rem;
		background: #03abff;
		width: 2.63rem;
		text-align: center;
		height: .68rem;
		line-height: .68rem;
		font-size: .26rem;
		color:#ffffff;
	}
}
</style>
<script>
export default{
	data(){
		return{
			orderCode: "",					//订单编号
		}
	}
}
</script>