<template>
	<div>
		<div class="Item">
			<div class="itemIcon">
				<slot name="icon"></slot>
			</div>
			<div class="itemCon">
				<div class="name">关键词：<span><slot name="name"></slot></span></div>
				<div class="name">订单编号：<span><slot name="code"></slot></span></div>
				<div class="name">付款金额：<span><slot name="money"></slot></span></div>
				<div class="name">佣金：<span><slot name="commission"></slot></span></div>
				<div class="name">时间：<span><slot name="time"></slot></span></div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.Item{
	border-bottom: 1px solid #e8e8e8;
	box-sizing: border-box;
	display: flex;
	width: 100%;
	padding: .24rem 0 .24rem .58rem;
	.itemIcon{
		position: relative;
		width: 1.88rem;
		height: 1.98rem;
		margin-right: .3rem;
		img{
			position: absolute;
			width: 100%;
			height: 100%;
		}
	}
	.itemCon{
		flex:1;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		.name{
			font-size: .28rem;
			color: #333333;
			margin-bottom: .02rem;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			span{
				color:#666666;
			}
		}
	}
}
</style>
<script>
export default{
	
}
</script>