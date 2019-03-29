<template>
	<div class="box">
		<div class="tabs">
			<div class="tab">申请时间</div>
			<div class="tab">提现金额</div>
			<div class="tab">到账银行</div>
			<div class="tab">状态</div>
		</div>
		<div class="recordList">
			<div class="recordItem" @click="detail">
				<div class="record time">2019/01/20 18:10</div>
				<div class="record money">-500.00</div>
				<div class="record bank">工商银行尾号2308</div>
				<div class="record success">提现成功</div>
			</div>
		</div>
		<div class="modal" v-if="isModal" @click="isModal = false">
			<div class="modalBox">
				<img class="newcash" src="../../assets/newcash.png">
				<div class="infoList">
					<div class="infoItem">订单编号：124451613354234</div>
					<div class="infoItem">本金金额：158.00</div>
					<div class="infoItem">佣金金额：20.00</div>
					<div class="infoItem">到账银行：中国工商银行</div>
					<div class="infoItem">银行卡号：621033352102308</div>
					<div class="infoItem">失败原因：银行卡号错误</div>
					<div class="infoItem">申请时间：2019-01-20 18:10</div>
					<div class="infoItem">处理时间：2019-01-22 10:33</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.box{
	background:#f3f4f5;
	position:absolute;
	top: 0;
	left:0;
	width:100%;
	height:100%;
	display: flex;
	flex-direction: column;
	padding: .3rem .36rem;
	.tabs{
		background: #fff;
		width: 100%;
		height: .66rem;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: .3rem;
		color: #666;
		padding-left: .12rem;
		padding-right: .12rem;
		.tab{
			width: 22%;
			text-align: center;
		}
	}
	.recordList{
		margin-top: .12rem;
		background: #fff;
		width: 100%;
		padding-left: .12rem;
		padding-right: .12rem;
		flex: 1;
		overflow-y: scroll;
		-webkit-overflow-scrolling:touch;
		.recordItem{
			padding-top: .24rem;
			padding-bottom: .24rem;
			border-bottom:1px solid #f4f4f4;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-around;
			font-size: .3rem;
			color: #999999;
			.record{
				width: 22%;
				text-align: center;
			}
			.success{
				color:#03abff;
			}
		}
	}
	.modal{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.6);
		display: flex;
		align-items: center;
		justify-content: center;
		.modalBox{
			padding-top: 1rem;
			padding-bottom: .5rem;
			position: relative;
			background: #fff;
			border-radius: .18rem;
			width: 4.28rem;
			.newcash{
				position: absolute;
				top: -25%;
				left: 50%;
				transform: translate(-50%);
				width: 2.12rem;
				height: 2.02rem;
			}
			.infoList{
				padding-left: .5rem;
				font-size: .24rem;
				color: #333;
				.infoItem{
					margin-bottom: .1rem;
				}
			}
		}
	}
}
</style>
<script>
	export default{
		data(){
			return{
				isModal:false
			}
		},
		methods:{
			// 点击某一条记录
			detail(){
				this.isModal = true;
			}
		}
	}
</script>










