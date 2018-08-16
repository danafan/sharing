<template>
	<div>
		<!-- 返回按钮 -->
		<back></back>
		<div class="title" v-show="showTask">已完成<span>({{count}})</span></div>
		<div class="loadmore" v-infinite-scroll="loadMore" v-if="showTask">
			<recordItem v-for="(item,index) in recordList" :key="index" taskType="item.task_type">
				<div slot="icon"><img :src="baseUrl + item.goods_img"></div>
				<span slot="name">{{item.keyword}}</span>
				<span slot="code">{{item.order_sn}}</span>
				<span slot="money">¥{{item.payment/100}}</span>
				<span slot="commission">¥{{item.award/100}}</span>
				<span slot="time">{{item.apply_time}}</span>
			</recordItem>	
		</div>
		<!-- 没有任务 -->
		<div class="untask" v-else>
			<div class="img">
				<img src="../../assets/picture 2.png">
			</div>
			<div class="txt">暂时没有完成的任务</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.title{
	z-index: 1;
	background: #ffffff;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding-left: .58rem;
	font-size: .3rem;
	color:#333333;
	font-weight: 700;
	padding-top: .24rem;
	padding-bottom: .24rem;
	span{
		color:#ff5858;
	}
}
.loadmore{
	padding-top: .64rem;
}
.untask{
	.img{
		margin: 2.82rem auto 0;
		width: 4.06rem;
		height: 3.86rem;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.txt{
		margin-top: .24rem;
		width: 100%;
		text-align: center;
		font-size: .24rem;
		color: #999999;
	}
}
</style>
<script>
import recordItem from '../../common/recordItem'
import back from '../../common/back.vue'
import resource from '../../api/resource.js'
export default{
	data(){
		return{
			isLoad: true,				//默认可加载
			count: "",					//总条数
			page: 0,					//页码
			showTask: true,			//默认列表不为空
			recordList:[],				//列表
		}
	},
	created(){
		document.title = "已完成任务";
	},
	methods:{
		//点击查看更多
		loadMore(){
			if(this.isLoad == true){
				this.page += 1;
				this.getusertask();
			}
		},
		//获取任务列表
		getusertask(){
			let taskObj = {
				status: "2",
				page: this.page
			}
			resource.getUserTask(taskObj).then(res => {
				if(res.data.code == "0"){
					this.count = res.data.count;	
					if(this.count == "0"){					//总条数为0
						this.showTask = false;
					}else if(this.count == 12){				//总数为12就不翻页
						this.isLoad = false;
						let recordList = res.data.data;
						this.recordList = this.recordList.concat(Array.from(recordList));
					}else{									//总条数不为0
						let recordList = res.data.data;
						if(recordList.length < "12"){		// 某一页不足12条
							this.isLoad = false;
							this.recordList = this.recordList.concat(Array.from(recordList));
						}else{								//正常
							this.recordList = this.recordList.concat(Array.from(recordList));
						}
					}
				}else{
					this.$toast(res.data.message);
				}
			});
		}
		
	},
	components:{
		recordItem,
		back
	}
}
</script>