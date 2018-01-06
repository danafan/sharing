<template>
	<div class="stateBox">
		<!-- 返回按钮 -->
		<div class="back" @click="$router.go(-1)">
			<img src="../../assets/hover button.png">
		</div>
		<div class="begin">
			<div class="beginIcon"></div>
			<div class="beginCon">
				<div class="beginTxt">发起提现申请</div>
			</div>
		</div>
		<div class="thing">
			<div class="thingIcon"><img src="../../assets/time.png"></div>
			<div class="thingCon">
				<div class="thingTie">系统处理中</div>
				<div class="thingTxt">预计2017-01-20 12:00:00前到账</div>
			</div>
		</div>
		<div class="begin">
			<div class="beginIcon1"></div>
			<div class="beginCon">
				<div class="beginTxt">到账成功</div>
			</div>
		</div>
		<div class="botBox">
			<div class="botItem">
				<div class="itemName">提现金额</div>
				<div class="itemTxt">¥100</div>
			</div>
			<div class="botItem">
				<div class="itemName">手续费</div>
				<div class="itemTxt">¥0.00</div>
			</div>
			<div class="botItem">
				<div class="itemName">到账方式</div>
				<div class="itemTxt">微信钱包</div>
			</div>
		</div>
		<div class="ok">确定</div>
	</div>
</template>
<style lang="less" scoped>
// 返回按钮
.back{
	z-index: 1;
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
.stateBox{
	padding-top: .96rem;
}
.begin{
	display: flex;
	align-items:center;
	padding-left: .8rem;
	.beginIcon{
		margin-right: .2rem;
		border-radius: 50%;
		background: #ff5858;
		width: .36rem;
		height: .36rem;
	}
	.beginIcon1{
		margin-right: .2rem;
		border-radius: 50%;
		background: #999999;
		width: .36rem;
		height: .36rem;
	}
	.beginCon{
		.conTie{
			font-size: .28rem;
			color:#333333;
		}
		.beginTxt{
			font-size: .28rem;
			color:#999999;
		}
	}
}
.thing{
	margin-top: .84rem;
	margin-bottom: .84rem;
	display: flex;
	align-items:center;
	padding-left: .68rem;
	.thingIcon{
		position: relative;
		margin-right: .2rem;
		width: .6rem;
		height: .6rem;
		img{
			position: absolute;
			width: 100%;
			height: 100%;
		}
	}
	.thingCon{
		.thingTie{
			font-size: .28rem;
			color:#333333;
		}
		.thingTxt{
			font-size: .28rem;
			color:#999999;
		}
	}
}
.botBox{
	border-top:1px solid #f4f4f4;
	width: 6.38rem;
	margin: .48rem auto 0;
	.botItem{
		margin-top: .21rem;
		font-size: .24rem;
		color: #999999;
		display: flex;
		justify-content: space-between;
		.itemTxt{
			color:#333333;
		}
	}
}
.ok{
	margin: 1.02rem auto 0;
	border:1px solid #03abff;
	border-radius: .04rem;
	width: 4.46rem;
	text-align: center;
	height: .74rem;
	line-height: .74rem;
	font-size: .26rem;
	color: #03abff;
}
</style>
<script>
export default{

}
</script>