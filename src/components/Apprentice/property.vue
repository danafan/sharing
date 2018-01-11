<template>
	<div>
		<!-- 返回按钮 -->
		<back></back>
		<div v-infinite-scroll="loadMore">
			<div class="propertyItem" v-for="item in property">
				<div class="itemLeft">
					<div class="top"><span>完成任务：</span>订单编号86834768372645</div>
					<div class="data">2017-12-10 10:23:34</div>
				</div>
				<div class="itemRight">+28</div>
			</div>
			<div class="loadMore" @click="loadMore">查看更多</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.propertyItem{
	border-bottom:1px solid #f4f4f4;
	display: flex;
	justify-content: space-between;
	padding: .32rem .58rem;
	.itemLeft{
		.top{
			font-size: .28rem;
			color:#666666;
			span{
				color: #333333;
			}
		}
		.data{
			margin-top: .1rem;
			font-size: .24rem;
			color:#999999;
		}
	}
	.itemRight{
		display: flex;
		align-items:center;
		font-size: .3rem;
		color:#03abff;
	}
	// 加减不一样的文字颜色
	.txtColor{
		color:red;
	}
}
.loadMore{
	width: 100%;
	text-align: center;
	height: 1.9rem;
	line-height: 1.9rem;
	font-size:.26rem;
	color:#03abff;
}
</style>
<script>
import back from '../../common/back.vue'
export default{
	data(){
		return{
			property:[,,,,,,,,,,],
			cor: true
		}
	},
	methods:{
		//点击查看更多
		loadMore(){
			let arr = [,,,,,,,,,,];
			this.property = this.property.concat(arr);
		}
	},
	components:{
		back
	}
}
</script>