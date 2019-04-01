<template>
	<div class="box">
		<div class="tabs">
			<div class="tab">申请时间</div>
			<div class="tab">提现金额</div>
			<div class="tab">到账银行</div>
			<div class="tab">状态</div>
		</div>
		<div class="recordList" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false" v-if="cashLists.length > 0">
			<div class="recordItem" v-for="item in cashLists" @click="detail(item.id)">
				<div class="record time">{{item.apply_time}}</div>
				<div class="record money">-{{item.total}}</div>
				<div class="record bank">{{item.bank_name}}尾号{{item.last_four}}</div>
				<div class="record waing" v-if="item.status == 0 || item.status == 1">{{item.status_name}}</div>
				<div class="record success" v-if="item.status == 2">{{item.status_name}}</div>
				<div class="record error" v-if="item.status == 3">{{item.status_name}}</div>
			</div>
		</div>
		<!-- 没有资产明细 -->
		<div class="untask" v-else>
			<div class="img">
				<img src="../../assets/money 1.png">
			</div>
			<div class="txt">账户暂时无资金变动</div>
		</div>
		<div class="modal" v-if="isModal" @click="isModal = false">
			<div class="modalBox">
				<img class="newcash" src="../../assets/newcash.png">
				<div class="infoList">
					<div class="infoItem">订单编号：{{cashInfo.order_sn}}</div>
					<div class="infoItem">本金金额：{{cashInfo.principal}}</div>
					<div class="infoItem">佣金金额：{{cashInfo.award}}</div>
					<div class="infoItem">到账银行：{{cashInfo.bank_name}}</div>
					<div class="infoItem">银行卡号：{{cashInfo.bank_card_number}}</div>
					<div class="infoItem" v-if="cashInfo.status == 3">失败原因：{{cashInfo.failed_reason}}</div>
					<div class="infoItem">申请时间：{{cashInfo.apply_time}}</div>
					<div class="infoItem">处理时间：{{cashInfo.pay_time}}</div>
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
			font-size: .26rem;
			color: #999999;
			.record{
				width: 22%;
				text-align: center;
			}
			.waing{
				color:#ccc;
			}
			.success{
				color:#03abff;
			}
			.error{
				color:#ff5858;
			}
		}
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
			width: 6rem;
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
	import { Indicator } from 'mint-ui';
	import resource from '../../api/resource.js'
	export default{
		data(){
			return{
				isModal:false,			//默认详情弹框不显示
				cashLists:[],			//提现记录列表
				page: 1,				//页码
				isLoad: true,			//默认可以翻页
				cashInfo:{},			//提现详情
			}
		},
		created(){
			//获取提现记录列表
			this.cashList();
		},
		methods:{
			//点击查看更多
			loadMore(){
				if(this.isLoad == true){
					this.page += 1;
					this.cashList();
				}
			},
			//获取提现记录列表
			cashList(){
				Indicator.open({
					text: '正在加载...',
					spinnerType: 'fading-circle'
				});
				resource.cashList({page:this.page}).then(res => {
					Indicator.close();
					if(res.data.code == 1){
						let list = res.data.data.data;
						this.cashLists = this.cashLists.concat(Array.from(list))

						if(res.data.data.last_page == this.page){
							this.isLoad = false;
						}
					}else{
						this.$toast(res.data.msg);
					}
				});
			},
			// 点击某一条记录
			detail(id){
				resource.cashDetail({record_id:id}).then(res => {
					if(res.data.code == 1){
						this.isModal = true;
						this.cashInfo = res.data.data;
					}else{
						this.$toast(res.data.msg);
					}
				});
			}
		}
	}
</script>










