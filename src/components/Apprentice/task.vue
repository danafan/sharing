<template>
	<div class="taskbox">
		<!-- 已接未提交 -->
		<div class="progress">
			<!-- 头部 -->
			<div class="title" @click="showUnsub = !showUnsub">
				<div class="titleTxt">已接未提交<span class="txtRed">(3)</span></div>
				<img v-if="showUnsub == false" src="../../assets/advance.png">
				<img v-else class="infoRight" src="../../assets/pull-down.png">
			</div>
			<!-- 下面列表 -->
			<div class="progressList" v-if="showUnsub">
				<div class="proItem">
					<div class="itemTop">
						<div class="topIcon">
							<img src="../../assets/test4.jpg">
						</div>
						<div class="topTxt">
							<div class="txtName">商品名称：<span class="subtxt">男士棉袄</span></div>
							<div class="txtSub">
								<div class="sunTxt">请在<span class="txtRed">59:43:23</span>点前完成提交任务，否则将自动放弃哦！</div>
							</div>
						</div>
					</div>
					<div class="itemCenter txtRed">离任务完成还差一步，请提交订单编号</div>
					<div class="itemBot">
						<div class="giving">放弃任务</div>
						<div class="continuation">继续任务</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 已提交待审核 -->
		<div class="progress">
			<!-- 头部 -->
			<div class="title" @click="showWaiting = !showWaiting">
				<div class="titleTxt">已提交待审核<span class="txtRed">(3)</span></div>
				<img v-if="showWaiting == false" src="../../assets/advance.png">
				<img v-else class="infoRight" src="../../assets/pull-down.png">
			</div>
			<!-- 下面列表 -->
			<div class="progressList" v-if="showWaiting">
				<div class="proItem">
					<div class="itemTop">
						<div class="topIcon">
							<img src="../../assets/test4.jpg">
						</div>
						<div class="topTxt">
							<div class="txtName">商品名称：<span class="subtxt">男士棉袄</span></div>
							<div class="txtCode">
								订单编号：<span class="subtxt">42342347862837</span>
							</div>
							<div class="waiting">待审核</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 审核未通过 -->
		<div class="progress">
			<!-- 头部 -->
			<div class="title" @click="showGining = !showGining">
				<div class="titleTxt">审核未通过<span class="txtRed">(3)</span></div>
				<img v-if="showGining == false" src="../../assets/advance.png">
				<img v-else class="infoRight" src="../../assets/pull-down.png">
			</div>
			<!-- 下面列表 -->
			<div class="progressList" v-if="showGining">
				<div class="proItem">
					<div class="itemTop">
						<div class="topIcon">
							<img src="../../assets/test4.jpg">
						</div>
						<div class="topTxt">
							<div class="txtName">商品名称：<span class="subtxt">男士棉袄</span></div>
							<div class="txtCode">
								订单编号：<span class="subtxt">42342347862837</span>
							</div>
							<div class="txtCode">
								原因：<span class="subtxt">42342347862837</span>
							</div>
							<div class="txtSub">
								<div class="sunTxt">请在<span class="txtRed">59:43:23</span>点前完成提交任务，否则将自动放弃哦！</div>
							</div>
						</div>
					</div>
					<div class="itemBot">
						<div class="giving">放弃申请</div>
						<div class="continuation">重新提交</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.taskbox{
	padding-top: .13rem;
	padding-bottom: .2rem;
	margin-bottom: .98rem;
	height: 100%;
}
.progress{
	border-bottom:1px solid #e8e8e8;
	padding-left: .58rem;
	padding-right: .58rem;
	.title{
		height: .88rem;
		display: flex;
		justify-content: space-between;
		align-items:center;
		font-size: .3rem;
		color:#333333;
		font-weight: 700;
		img{
			width: .26rem;
			height: .26rem;
		}
	}
	.progressList{
		.proItem{
			margin-bottom:.16rem;
			padding-bottom: .16rem;
			// border-bottom:1px solid #e8e8e8;
			.itemTop{
				display: flex;
				.topIcon{
					margin-right: .31rem;
					width: 1.86rem;
					height: 1.86rem;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.topTxt{
					position: relative;
					flex:1;
					.txtName{
						font-size: .28rem;
						color:#333333;
					}
					.txtSub{
						margin-top: .1rem;
						display: flex;
						align-items:center;
						img{
							width: .52rem;
							height: .52rem;
						}
						.sunTxt{
							flex:1;
							font-size: .24rem;
						}
					}
					.txtCode{
						margin-top: .1rem;
						font-size: .28rem;
					}
					.waiting{
						position: absolute;
						right: 0;
						bottom: 0;
						background: #dbdbdb;
						border:1px solid #dbdbdb;
						border-radius: .04rem;
						width: 1.45rem;
						text-align: center;
						height: .45rem;
						line-height: .45rem;
						font-size: .26rem;
						color:#ffffff;
					}
				}
			}
			.itemCenter{
				margin-top: .1rem;
				font-size: .24rem;
			}
			.itemBot{
				margin-top: .14rem;
				display: flex;
				justify-content: flex-end;
				.giving{
					border:1px solid #dbdbdb;
					border-radius: .04rem;
					width: 1.45rem;
					text-align: center;
					height: .45rem;
					line-height: .45rem;
					font-size: .26rem;
					color:#d1d1d1;
				}
				.continuation{
					margin-left: .18rem;
					background: #03abff;
					border:1px solid #03abff;
					border-radius: .04rem;
					width: 1.45rem;
					text-align: center;
					height: .45rem;
					line-height: .45rem;
					font-size: .26rem;
					color:#ffffff;
				}
			}
		}
	}
}
.txtRed{
	color:#ff5858;
}
.subtxt{
	color:#666666;
}
</style>
<script>
export default{
	data(){
		return{
			showUnsub: true,		//已接未提交列表默认不显示
			showWaiting: false,		//已提交待审核列表默认不显示
			showGining: true,		//审核未通过列表默认不显示
		}
	}
}
</script>