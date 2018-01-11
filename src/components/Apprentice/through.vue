<template>
	<div>
		<!-- 返回按钮 -->
		<back></back>
		
		<div class="title">审核通过<span>(4)</span></div>
		<div v-infinite-scroll="loadMore">
			<recordItem v-for="(item,index) in recordList" :key="index" :state="false">
				<div slot="icon"><img src="../../assets/test4.jpg"></div>
				<span slot="name">男士棉袄</span>
				<span slot="code">3465293645837456</span>
				<span slot="money">487</span>
				<span slot="commission">578</span>
			</recordItem>	
		</div>
		<div class="loadMore" @click="loadMore">查看更多</div>
	</div>
</template>
<style lang="less" scoped>
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
import back from '../../common/back.vue'
export default{
	data(){
		return{
			recordList:[,,,,,,,,,,]
		}
	},
	methods:{
		//点击查看更多
		loadMore(){
			let arr = [,,,,,,,,,,];
			this.recordList = this.recordList.concat(arr);
		}
	},
	components:{
		recordItem,
		back
	}
}
</script>