<template>
	<div>
		<div class="appraisalBox">
			<div class="appItem" v-for="item in appList">
				<div class="img"><img :src="baseUrl + item.goods_img"></div>
				<div class="txt">
					<div class="code">订单编号：{{item.order_sn}}</div>
					<div class="time">时间：{{item.updated_time | updateTime}}</div>
					<div class="time" v-if="type == 1">状态：{{item.status | status}}</div>
					<div class="but" @click="applytasks(item.total_id,item.eva_usertaskid?item.eva_usertaskid:0)" v-if="item.status != 1 || item.status != 2 || item.status != 4">{{butTxt}}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.appItem{
	border-bottom:1px solid #e8e8e8;
	padding: .26rem .48rem .26rem .58rem;
	display: flex;
	.img{
		margin-right: .28rem;
		border-radius: .18rem;
		position: relative;
		width: 1.46rem;
		height: 1.44rem;
		img{
			border-radius: .18rem;
			position:absolute;
			width: 100%;
			height: 100%;
		}
	}
	.txt{
		flex:1;
		position:relative;
		.code{
			margin-bottom: .1rem;
			font-size: .3rem;
			color: #666;
		}
		.time{
			margin-bottom: .1rem;
			font-size: .26rem;
			color: #999;
		}
		.but{
			position:absolute;
			bottom: 0;
			right: 0;
			border:1px solid #03abff;
			border-radius:.24rem;
			font-size:.26rem;
			color:#03abff;
			padding: .02rem .26rem;
		}
	}
}
</style>
<script>
	import resource from '../../api/resource.js'
	export default{
		data(){
			return{
			type: "",				//判断展示列表（0:可接；1:记录）
			appList: [],			//任务列表
			butTxt: "",				//按钮文字
		}
	},
	created(){
		this.type = this.$route.query.type;
		if(this.type == 0){
			//可接评价任务列表
			this.butTxt = "接取";
			this.getApprailslList();
		}else{
			//已接任务列表
			this.butTxt = "重新提交";
			this.completedTask();
		}
	},
	methods:{
		//可接评价任务列表
		getApprailslList(){
			resource.AppraisalList().then(res => {
				if(res.data.code == "0"){
					this.appList = res.data.data.data;
				}else{
					this.$toast(res.data.msg);
				}
			})
		},
		//已接任务列表
		completedTask(){
			resource.completedTask().then(res => {
				if(res.data.code == "0"){
					this.appList = res.data.data.data;
				}else{
					this.$toast(res.data.msg);
				}
			})
		},
		//接取任务或查看详情
		applytasks(totalId,id){
			if(this.type == "0"){//接取任务
				resource.applytask({total_id:totalId}).then(res => {
					if(res.data.code == "0"){
						this.$router.push('/appraisalDetail?id=' + res.data.eva_usertaskid); 
					}else{
						this.$toast(res.data.msg);
					}
				})
			}else{				//跳转任务详情
				this.$router.push('/appraisalDetail?id=' + id); 
			}
			
		}
	},
	filters:{
		updateTime:function(val){
			var date = new Date(val * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
			let Y = date.getFullYear() + '-';
			let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
			let D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate());
			return Y + M + D;
		},
		status:function(val){
			if(val == "0"){
				return "待提交";
			}else if(val == "1"){
				return "待审核";
			}else if(val == "2"){
				return "已完成";
			}else if(val == "3"){
				return "拒绝";
			}else if(val == "4"){
				return "放弃";
			}
		}
	}


}
</script>