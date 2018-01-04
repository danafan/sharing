<template>
	<div>
		<div class="minebox">
			<!-- 上面背景图片 -->
			<div class="topImg">
				<div class="backImg">
					<img src="../../assets/mineBack.jpg">
				</div>	
				<div class="userIcon">
					<img src="../../assets/head portrait.png">
				</div>
				<div class="userName">吕小白</div>
			</div>
			<!-- 信息 -->
			<div class="infoList">
				<div class="myTask" :class="{botline:showTask == false}" @click="showtask">
					<div class="infoLeft">
						<div class="infoIcon"><img src="../../assets/my task.png"></div>
						<div class="infoTxt">我的任务</div>
					</div>
					<img v-if="showTask == false" class="infoRight" src="../../assets/advance.png">
					<img v-else class="infoRight" src="../../assets/pull-down.png">
				</div>
				<div class="taskInfo" v-if="showTask">
					<div class="taskItem taskItems" @click="$router.push('/recordTask')">任务记录</div>
					<div class="taskItem taskItems" @click="$router.push('/through')">审核通过</div>
					<div class="taskItem">审核未通过</div>
				</div>
				<div class="myMoney" :class="{botline:showMoney == false}" @click="showmoney">
					<div class="infoLeft">
						<div class="infoIcon"><img src="../../assets/my value.png"></div>
						<div class="infoTxt">我的金库</div>
					</div>
					<img v-if="showMoney == false" class="infoRight" src="../../assets/advance.png">
					<img v-else class="infoRight" src="../../assets/pull-down.png">
				</div>
				<div class="taskInfo" v-if="showMoney">
					<div class="taskItem taskItems">
						<div class="taskLeft">
							<span>本金</span>
							<span class="money">¥234</span>
						</div>
						<div class="cash">提现</div>
					</div>
					<div class="taskItem taskItems">
						<div class="taskLeft">
							<span>佣金</span>
							<span class="money">¥22</span>
						</div>
						<div class="cash">提现</div>
					</div>
					<div class="taskItem">资产明细</div>
				</div>
				<div class="infoItem">
					<div class="infoLeft">
						<div class="infoIcon"><img src="../../assets/modified data.png"></div>
						<div class="infoTxt">修改资料</div>
					</div>
					<img class="infoRight" src="../../assets/advance.png">
				</div>
				<div class="infoItem">
					<div class="infoLeft">
						<div class="infoIcon"><img src="../../assets/call centre.png"></div>
						<div class="infoTxt">客服中心</div>
					</div>
					<img class="infoRight" src="../../assets/advance.png">
				</div>
				<div class="infoItem">
					<div class="infoLeft">
						<div class="infoIcon"><img src="../../assets/about us.png"></div>
						<div class="infoTxt">关于我们</div>
					</div>
					<img class="infoRight" src="../../assets/advance.png">
				</div>
			</div>	
			<!-- 推出按钮 -->
			<div class="loginOut">退出登录</div>
		</div>	
	</div>
</template>
<style lang="less" scoped>
.minebox{
	margin-bottom: .98rem;
	height: 100%;
	.topImg{
		box-sizing: border-box;
		position: relative;
		width: 100%;
		height: 3.6rem;
		.backImg{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.userIcon{
			position: absolute;
			top: .74rem;
			left: 50%;
			transform:translate(-50%);
			width: 1.64rem;
			height: 1.64rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.userName{
			position: absolute;
			top: 2.64rem;
			left: 50%;
			transform:translate(-50%);
			font-size: .3rem;
			color:#ffffff;
		}
	}
	.infoList{
		background: #ffffff;
		.myTask,.myMoney{
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items:center;
			width: 100%;
			height: .88rem;
			padding-right: .58rem;
			padding-left: .58rem;
			.infoLeft{
				display: flex;
				.infoIcon{
					position: relative;
					width: .4rem;
					height: .4rem;
					margin-right: .15rem;
					img{
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
					}
				}
				.infoTxt{
					font-size: .3rem;
				}
			}
			.infoRight{
				width: .26rem;
				height: .26rem;
			}
		}
		.infoItem{
			border-bottom:1px solid #f4f4f4;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items:center;
			width: 100%;
			height: .88rem;
			padding-right: .58rem;
			padding-left: .58rem;
			.infoLeft{
				display: flex;
				.infoIcon{
					position: relative;
					width: .4rem;
					height: .4rem;
					margin-right: .15rem;
					img{
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
					}
				}
				.infoTxt{
					font-size: .3rem;
				}
			}
			.infoRight{
				width: .26rem;
				height: .26rem;
			}
		}
		.taskInfo{
			border-bottom:1px solid #f4f4f4;
			padding-right: .58rem;
			padding-left: .58rem;
			.taskItem{
				font-size: .26rem;
				color:#999999;
				height: .88rem;
				line-height: .88rem;
			}
			.taskItems{
				border-bottom:1px solid #f4f4f4;
				display: flex;
				justify-content: space-between;
				align-items:center;
				.cash{
					border:1px solid #03abff;
					border-radius: .04rem;
					width: .88rem;
					text-align: center;
					height: .3rem;
					line-height: .33rem;
					font-size: .24rem;
					color:#03abff;
				}
				.money{
					color:#ff5858;
					font-size: .24rem;
				}
			}
		}
	}
	.loginOut{
		margin:.56rem auto;
		border:1px solid #03abff;
		border-radius: .08rem;
		width: 5.83rem;
		text-align: center;
		height: .8rem;
		line-height: .8rem;
		font-size: .26rem;
		color: #03abff;
	}
}
// 我的任务和我的金库下面的线
.botline{
	border-bottom:1px solid #f4f4f4;
}
</style>
<script>
export default{
	data(){
		return{
			showTask: false,		//我的任务默认不展开
			showMoney: false,		//我的金库默认不展开
		}
	},
	created(){
		let showtask = sessionStorage.getItem("showTask");
		if(!showtask){
			this.showTask = false;
		}else{
			this.showTask = JSON.parse(showtask);
		}
		let showmoney = sessionStorage.getItem("showMoney");
		if(!showmoney){
			this.showMoney = false;
		}else{
			this.showMoney = JSON.parse(showmoney);
		}
	},
	methods:{
		// 点击我的任务
		showtask(){
			this.showTask = !this.showTask;
			sessionStorage.setItem("showTask",JSON.stringify(this.showTask));
		},
		// 点击我的金库
		showmoney(){
			this.showMoney = !this.showMoney;
			sessionStorage.setItem("showMoney",JSON.stringify(this.showMoney));
		}
	}
}
</script>