<template>
	<div>
		<!-- 返回按钮 -->
		<back></back>
		<!-- 顶部时间 -->
		<div class="time">
			<div class="timeIcon">
				<img src="../../assets/task(black).png">
			</div>
			<div class="conTime">剩余时间：59:59:34</div>
		</div>
		<!-- 中间详情部分 -->
		<div class="content">
			<!-- 上面部分 -->
			<div class="topCon">
				<div class="taskIcon">
					<img src="../../assets/test3.jpeg">
				</div>
				<div class="taskInfo">
					<div class="taskName">商品名称：<span class="subtxt">男士棉袄</span></div>
					<div class="taskSubname">请在<span class="txtRed">59:34:20</span>前完成一下操作，否则任务将自动作废哦！</div>
				</div>
			</div>
			<!-- 下面部分 -->
			<div class="taskCon">
				<div class="title">任务流程</div>
				<!-- 第一条 -->
				<div class="subTie">1. 打开淘宝客户端，按照以下步骤操作：</div>
				<div class="operation">
					<div class="operName">点击关键词复制：</div>	
					<div class="operSubname" v-clipboard="keyWord"
						@success="handleSuccess">{{keyWord}}</div>
					<div class="replace">换一换</div>	
				</div>
				<!-- 第一条 -->
				<div class="subTie">2. 筛选条件：</div>
				<div class="operation">
					<div class="operName">排序方式：</div>	
					<div class="operSubname">综合排序</div>
				</div>
				<div class="operation">
					<div class="operName">店铺类型：</div>	
					<div class="operSubname">淘宝</div>
				</div>
				<div class="operation">
					<div class="operName">货到付款：</div>	
					<div class="operSubname">是</div>
				</div>
				<!-- 第一条 -->
				<div class="subTie">3. 输入店铺全称，验证店铺<span @click="$router.push('/shopFull')">如何查看店铺全称>></span></div>
				<div class="operation">
					<div class="inputTxt">
						<input type="text" v-model="shop">
					</div>	
					<div class="confirmation">验证</div>
				</div>
				<!-- 第一条 -->
				<div class="subTie">4. 输入商品金额，验证金额<span @click="$router.push('/shopMoney')">如何查看商品金额>></span></div>
				<div class="operation">
					<div class="inputTxt">
						<input type="text" v-model="money">
					</div>	
					<div class="confirmation">验证</div>
				</div>
				<!-- 提示 -->
				<div class="prompt" v-if="prompt">验证通过,请用您的淘宝账号<span>1322342323</span>,拍下并付款吧！</div>
			</div>
		</div>
		<!-- 底部确认按钮 -->
		<div class="saveSubmit" :class="{backGround: prompt == true}" @click="subOrder">商品已购买，提交订单号</div>	
	</div>
</template>
<style lang="less" scoped>
.time{
	display: flex;
	justify-content: center;
	align-items:center;
	background: #e8e8e8;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: .63rem;
	.timeIcon{
		position: relative;
		margin-right: .1rem;
		width: .44rem;
		height: .44rem;
		img{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
	.conTime{
		font-size: .3rem;
		color:#333333;
	}
}
.content{
	margin-top: .63rem;
	margin-bottom: .98rem;
	.topCon{
		border-bottom: 1px solid #f4f4f4;
		padding: .36rem .58rem .4rem .58rem;
		display: flex;
		.taskIcon{
			margin-right: .2rem;
			width: 2.22rem;
			height: 2.22rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.taskInfo{
			flex:1;
			.taskName{
				margin-bottom: .16rem;
				font-size: .28rem;
				color: #333333;
			}
			.taskSubname{
				font-size:.24rem;
				color:#333333;
			}
		}
	}
	.taskCon{
		padding-left: .58rem;
		.title{
			margin-top: .32rem;
			margin-bottom: .22rem;
			font-weight: 700;
			font-size: .3rem;
			color:#333333;
		}
		.subTie{
			margin-bottom: .1rem;
			font-weight: 700;
			font-size: .28rem;
			color:#333333;
			span{
				margin-left: .16rem;
				color: #03abff;
			}
		}
		.operation{
			margin-bottom: .12rem;
			padding-left: .2rem;
			display: flex;
			align-items:center;
			font-size: .26rem;
			.operName{
				color:#333333;
			}
			.operSubname{
				color:#ff5858;
			}
			.replace{
				margin-left: .3rem;
				border:1px solid #03abff;
				border-radius: .04rem;
				width: .96rem;
				text-align: center;
				height: .28rem;
				line-height: .28rem;
				color:#03abff;
			}
			.inputTxt{
				input{
					border: 1px solid #e8e8e8;
					outline: none;
					width: 2.16rem;
					height: .36rem;
				}
			}
			.confirmation{
				margin-left: .3rem;
				border-radius: .04rem;
				background: #03abff;
				width: 1rem;
				text-align: center;
				height: .36rem;
				line-height: .36rem;
				font-size: .26rem;
				color:#ffffff;
			}
		}
		.prompt{
			margin-top: .2rem;
			padding-left: .2rem;
			font-size: .24rem;
			color: #ff5858;
		}
	}
}
.saveSubmit{
	background: #e8e8e8;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	text-align: center;
	height: .98rem;
	line-height: .98rem;
	font-size: .3rem;
	color: #ffffff;
}
.subtxt{
	color:#666666;
}
.txtRed{
	color:#ff5858;
}
.backGround{
	background: #03abff;
}
</style>
<script>
import back from '../../common/back.vue'
export default{
	data(){
		return{
			prompt: true,	//默认未通过验证，下面提示不显示
			shop: "",		//店铺名称
			keyWord: "男士棉袄",	//关键词
			money: "",		//商品金额
		}
	},
	methods:{
		// 点击提交订单
		subOrder(){
			if(this.prompt == true){
				this.$router.push('/subOrder');
			}
		},
		//复制关键词回调
		handleSuccess(){
			this.$toast("复制成功");
		}
	},
	components:{
		back
	}
}
</script>