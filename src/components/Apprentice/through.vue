<template>
	<div>
		<!-- 返回按钮 -->
		<div class="back" @click="$router.go(-1)">
			<img src="../../assets/hover button.png">
		</div>
		<div class="title">审核通过<span>(4)</span></div>
		<recordItem v-for="(item,index) in recordList" :key="index" :state="false">
			<div slot="icon"><img src="../../assets/test4.jpg"></div>
			<span slot="name">男士棉袄</span>
			<span slot="code">3465293645837456</span>
			<span slot="money">487</span>
			<span slot="commission">578</span>
		</recordItem>	
		<div class="loadMore">查看更多</div>
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
.title{
	padding-left: .58rem;
	font-size: .3rem;
	color:#333333;
	font-weight: 700;
	margin-top: .24rem;
	span{
		color:#ff5858;
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
import recordItem from '../../common/recordItem'
export default{
	data(){
		return{
			recordList:[
				{},{},{},{},{},{},{}
			]
		}
	},
	components:{
		recordItem
	}
}
</script>