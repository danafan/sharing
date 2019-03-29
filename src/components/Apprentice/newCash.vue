<template>
	<div class="box">
		<div class="cashBox">
			<div class="title">提现金额</div>
			<div class="money">¥ 58</div>
			<div class="line"></div>
			<div class="desc">当前可用金额¥262.00（本金¥200，佣金¥62）</div>
			<div class="cash" @click="cash">提现</div>
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
	align-items: center;
	justify-content: center;
	.cashBox{
		padding: .24rem;
		background: #fff;
		border-radius: .04rem;
		width: 5.8rem;
		.title{
			font-size: .3rem;
			color: #333;
		}
		.money{
			margin-top: .6rem;
			font-size: .48rem;
			color: #333;
		}
		.line{
			margin-top: .2rem;
			border-bottom: 1px solid #dadada;
			width: 100%;
		}
		.desc{
			margin-top: .1rem;
			font-size: .2rem;
			color: #999;
		}
		.cash{
			margin: .5rem auto;
			border-radius: .04rem;
			background: #03abff;
			width: 4rem;
			text-align: center;
			height: .68rem;
			line-height: .68rem;
			font-size: .26rem;
			color: #fff;
		}
	}
}	
</style>
<script>
	import { MessageBox } from 'mint-ui';
	export default{
		methods:{
			//点击提现按钮
			cash(){
				MessageBox.confirm('确认提现到【中国邮政】尾号【8888】的账户上?').then(action => {
					if(action == 'confirm'){
						//提现接口
						this.deposit();
					}
				});
			},
			//提现接口
			deposit(){
				console.log("提现")
			}
		}
	}
</script>