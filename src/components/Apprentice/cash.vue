<template>
	<div>
		<!-- 正在提现提示框 -->
		<div class="cashMess" v-if="showcash">系统处理中，请稍等...</div>
		<!-- 返回按钮 -->
		<back></back>
		<!-- 输入金额 -->
		<div class="cashBox">
			<div class="cashFun">
				<div class="funLeft">到账方式</div>
				<div class="funRight" @click="showFun = true">
					<div class="funIcon">
						<img src="../../assets/red packet.png" v-if="selType == 1">
						<img src="../../assets/coin.png" v-else>
					</div>
					<div class="funTxt">{{moneyTxt}}</div>
				</div>
			</div>
			<div class="cashCon">
				<div class="cashTie">提现金额</div>
				<div class="txtInput">
					<div class="icon">¥</div>
					<div class="inputs">
						<input type="number" v-model="money">
					</div>
				</div>
				<div class="subTxt">当前可用{{type}}{{shu}}元，<span @click="money = shu">全部提现</span></div>	
				<div class="submit" @click="subCash">提现</div>
			</div>
		</div>
		<!-- 确认提现弹框 -->
		<div class="passMess" v-if="passMess">
			<div class="bai">
				<div class="baiImg">
					<img src="../../assets/money.png">
				</div>
				<div class="txt">确认提现<span>{{money}}</span>元?</div>
				<div class="buts">
					<div class="but1" @click="state">确认</div>
					<div class="but2" @click="passMess = false">取消</div>
				</div>
			</div>
		</div>
		<!-- 选择到账方式弹框 -->
		<div class="selFun" v-if="showFun">
			<div class="selBox">
				<div class="selBoxTop">选择到账方式</div>
				<div class="selBoxCen" @click="selTab(1)">
					<div class="boxLeft">
						<img src="../../assets/red packet.png">
						<div class="selectTxt">微信红包</div>
					</div>
					<div class="selected">
						<div class="yuan" v-if="selType == 1"></div>
					</div>
				</div>
				<div class="selBoxCen" @click="selTab(2)">
					<div class="boxLeft">
						<img src="../../assets/coin1.png" v-if="cashType == true">
						<img src="../../assets/coin.png" v-else>
						<div class="selectTxt" :class="{unsel:cashType == true}">微信零钱</div>
					</div>
					<div class="selected" :class="{unsels:cashType == true}">
						<div class="yuan" v-if="selType == 2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.ime-mode{ime-mode:disabled}
// 输入金额
.cashBox{
	position: absolute;
	background: #f1f1f1;
	width: 100%;
	height: 100%;
	.cashFun{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 .76rem 0 .76rem;
		background:#f6f6f6;
		margin: 3.73rem auto 0;
		width:5.55rem;
		height:.86rem;
		.funLeft{
			font-size:.28rem;
			color: #333333;
		}
		.funRight{
			display: flex;
			align-items: center;
			font-size:.26rem;
			color: #03abff;
			.funIcon{
				margin-right:.06rem;
				position:relative;
				width: .2rem;
				height:.24rem;
				img{
					position:absolute;
					width: 100%;
					height:100%;
				}
			}
		}
	}
	.cashCon{
		box-sizing: border-box;
		padding: .48rem .76rem 0 .76rem;
		margin:0 auto ;
		background: #ffffff;
		width: 5.55rem;
		height: 4.6rem;
		.cashTie{
			font-size: .28rem;
			color:#333333;
		}
		.txtInput{
			margin-top: .6rem;
			display: flex;
			align-items:center;
			font-size: .36rem;
			.icon{
				display: flex;
				align-items:center;
				width: .36rem;
				height: .36rem;
			}
			.inputs{
				box-sizing: border-box;
				display: flex;
				align-items:center;
				input{
					border: none;
					outline: none;
					width: 100%;
					font-size: .38rem;
				}
			}
		}
		.subTxt{
			padding-top: .08rem;
			margin-top: .2rem;
			border-top: 1px solid #dadada;
			font-size: .24rem;
			color: #999999;
			span{
				color:#03abff;
			}
		}
		.submit{
			margin-top: .54rem;
			margin-bottom: .6rem;
			background: #03abff;
			border-radius: .08rem;
			width: 3.98rem;
			text-align: center;
			height: .68rem;
			line-height: .74rem;
			font-size: .26rem;
			color: #ffffff;
		}
	}	
}
// 输入密码
.passMess{
	background: rgba(0,0,0,.66);
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 999999;
	.bai{
		margin: 4.18rem auto 0;
		border-radius: .18rem;
		background: #ffffff;
		width: 4.7rem;
		height: 3.22rem;
		.baiImg{
			position: relative;
			top: -1.2rem;
			left: 50%;
			transform: translate(-50%);
			width: 2.08rem;
			height: 2.08rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.txt{
			position: relative;
			top: -0.9rem;
			width: 100%;
			text-align: center;
			font-size: .28rem;
			color:#03abff;		
		}
		.buts{
			position: relative;
			top: -0.4rem;
			display: flex;
			justify-content: center; 
			div{
				font-size: .26rem;
				width: 1.12rem;
				text-align: center;
				height: .4rem;
				line-height: .4rem;
			}
			.but1{
				margin-right: .44rem;
				border: 1px solid #03abff;
				background: #03abff;
				border-radius: .04rem;
				color: #ffffff;
			}
			.but2{
				border: 1px solid #03abff;
				border-radius: .04rem;
				color: #03abff;
			}
		}
	}
}
// 选择到账方式弹框
.selFun{
	background: rgba(0,0,0,.66);
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 999999;
	.selBox{
		position: absolute;
		left: 0;
		bottom: 0;
		background:#fff;
		width:100%;
		height:3.44rem;
		padding-left: .48rem;
		padding-right: 1.46rem;
		.selBoxTop{
			font-size:.28rem;
			color:#03abff;
			margin-top:.5rem;
		}
		.selBoxCen{
			display:flex;
			justify-content:space-between;
			align-items:center;
			font-size:.26rem;
			margin-top:.6rem;
			.boxLeft{
				display:flex;
				justify-content:space-between;
				align-items:center;
				color:#333;
				img{
					margin-right:.14rem;
					width: .2rem;
					height:.24rem;
				}
			}
			.unsel{
				color: #999;
			}
			.selected{
				display:flex;
				justify-content:center;
				align-items:center;
				border:1px solid #03abff;
				width:.2rem;
				height:.2rem;
				border-radius:50%;
				.yuan{
					background: #03abff;
					border:1px solid #03abff;
					width:.08rem;
					height:.08rem;
					border-radius:50%;
				}
			}
			.unsels{
				border:1px solid #999;
			}
		}
	}
}
.cashMess{
	border-radius: .1rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform:translate(-50%,-50%);
	background: rgba(0,0,0,.8);
	width: 3.5rem;
	text-align: center;
	height: 0.8rem;
	line-height: 0.8rem;
	font-size: .26rem;
	color: #fff;
	z-index: 1000000000;
}
</style>
<script>
import back from '../../common/back.vue'
import resource from '../../api/resource.js'
export default{
	data(){
		return{
			showcash: false,		//默认提现提示不显示
			isPay: true,			//可提现
			openid: "",				//openid
			moneyType: "",			//体现类型
			money: "",				//输入的金额
			passMess: false ,		//默认输入密码框不显示
			type: "本金",			//区分类型
			shu: "",				//总共可用金额
			showFun: false,			//默认选择到账方式弹框不显示
			moneyTxt: "微信零钱",		//头部默认文字
			selType: 2,				//到账方式默认红包（2是零钱）
			cashType: false,		//默认所有人到账方式可选，如果是徒弟1-3号只能选择红包提现
		}	
	},
	created(){
		//获取用户状态，0:师父；1:徒弟，徒弟每月1-3号只能选择红包提现
		let status = sessionStorage.getItem("status");
		if(status == "1"){//徒弟
			let date = new Date();
			let days = date.getDate();
			if(days == "1" || days == "2" || days == "3"){//徒弟只能红包提现
				this.selType = 1;	//默认提现方式为红包
				this.moneyTxt = "微信红包";
				this.cashType = true;
			}
		}
		this.openid = sessionStorage.getItem("openid");
		let types = this.$route.query.type;
		let money = this.$route.query.money;
		this.shu = money;				//总金额
		// 判断输入金额显示类型
		if(types == "capital"){
			document.title = "本金提现";
			this.type = "本金";
			this.moneyType = "0";
		}else if(types == "commission"){
			document.title = "佣金提现";
			this.type = "佣金";
			this.moneyType = "1";
		}
	},
	methods:{
		//点击提现
		subCash(){
			if(this.money == ""){
				this.$toast("请输入提现金额");
			}else if(parseInt(this.money) < 1){
				this.$toast("提现金额不能少于1元");
			}else if(parseInt(this.money) > parseInt(this.shu)){
				this.$toast("提现金额不能超过账户余额");
			}else if(this.selType == 1 && parseInt(this.money) > 200){
				this.$toast("红包提现不能超过200元,自动切换到零钱");
				this.selType = 2;
				this.moneyTxt = "微信零钱";
			}else{
				//确认弹框框显示
				this.passMess = true;
			}
		},
		//点击切换到账方式
		selTab(num){
			this.showFun = false;
			if(num == 1){
				this.selType = 1;
				this.moneyTxt = "微信红包";
			}else{
				if(this.cashType == true){
					this.selType = 1;
					this.$toast("每月1-3号只能选择红包提现哦～");
				}else{
					this.selType = 2;
					this.moneyTxt = "微信零钱";
				}
			}
		},
		//点击确认金额跳转明细
		state(){
			let moneyObj = {
				openid: this.openid,
				amount: this.money,
				type: this.moneyType
			}
			this.showcash = true;
			if(this.isPay == true){
				this.isPay = false;
				if(this.selType == 1){			//红包提现
					resource.redPay(moneyObj).then(res => {
						this.showcash = false;
						if(res.data.code == "0"){
							this.$toast("提现成功");
							this.$router.replace('/property');
						}else if(res.data.code == "1"){
							this.$toast(res.data.message);
						};
						this.passMess = false;
						this.isPay = true;
					});
					
				}else{							// 零钱提现
					resource.userPay(moneyObj).then(res => {
						this.showcash = false;
						if(res.data.code == "0"){
							this.$toast("提现成功");
							this.$router.replace('/property');
						}else if(res.data.code == "1"){
							this.$toast(res.data.message);
						}else if(res.data.code == "2"){
							this.$toast(res.data.data.message.err_code_des);
						};
						this.passMess = false;
						this.isPay = true;
					});
				}
			}
		}

	},
	components:{
		back
	}
}
</script>

















