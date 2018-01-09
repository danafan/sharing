<template>
	<div>
		<!-- 返回按钮 -->
		<back></back>
		<!-- 输入金额 -->
		<div class="cashBox">
			<div class="cashCon">
				<div class="cashTie">提现金额</div>
				<div class="txtInput">
					<div class="icon">¥</div>
					<div class="inputs">
						<input type="number" v-model="money">
					</div>
				</div>
				<div class="subTxt">当前可用{{type}}{{shu}}元，<span>全部提现</span></div>	
				<div class="submit" @click="subCash">提现</div>
			</div>
		</div>
		<!-- 输入密码 -->
		<div class="passMess" v-if="passMess">
			<input id="password" type="number" unselectable="on" v-model="password">
			<div class="passBox">
				<div class="passTie">
					<div class="userImg"><img src="../../assets/test2.jpg"></div>
					<div class="userTxt">请输入交易密码</div>
					<div class="close" @click="closePassMess">
						<img src="../../assets/corss.png">
					</div>
				</div>
				<div class="name">提现金额</div>
				<div class="moneyTxt">¥{{money}}</div>
				<div class="passInput">
					<div class="passTxt">
						<div class="passItem" v-for="item in passList"></div>
					</div>
					<div class="passTxt" @click="but">
						<div class="passItem1" v-for="item in passList2"><img class="yuan" src="../../assets/point 1.png"></div>
					</div>
				</div>
				<div class="submit" :class="{backColor:colorId == true}" @click="state">确定</div>
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
	.cashCon{
		box-sizing: border-box;
		padding: .48rem .76rem 0 .76rem;
		margin: 3.73rem auto 0;
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
			margin-top: .56rem;
			border-top: 1px solid #dadada;
			font-size: .24rem;
			color: #999999;
			span{
				color:#03abff;
			}
		}
		.submit{
			margin-top: .54rem;
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
	z-index: 20;
	.passBox{
		margin: 3.73rem auto 0;
		background: #ffffff;
		width: 5.55rem;
		height: 4.6rem;
		.passTie{
			padding: .18rem .21rem .18rem .21rem;
			border-bottom:1px solid #f1f1f1;
			display: flex;
			align-items:center;
			.userImg{
				margin-right: .08rem;
				position: relative;
				width: .4rem;
				height: .4rem;
				img{
					border-radius: .04rem;
					position: absolute;
					width: 100%;
					height: 100%;
				}
			}
			.userTxt{
				flex:1;
				font-size: .3rem;
				color:#333333;
			}
			.close{
				position: relative;
				width: .42rem;
				height: .42rem;
				img{
					position: absolute;
					width: 100%;
					height: 100%;
				}
			}
		}
		.name{
			margin-top: .4rem;
			font-size: .24rem;
			color:#333333;
			width: 100%;
			text-align: center;
		}
		.moneyTxt{
			margin-top: .14rem;
			font-size: .36rem;
			color:#333333;
			width: 100%;
			text-align: center;
		}
		.passInput{
			margin-top: .34rem;
			position: relative;
			font-size: .36rem;
			color:#333333;
			width: 100%;
			text-align: center;
			height: .74rem;
			display: flex;
			justify-content:center;
			.passTxt{
				border-left: 1px solid #f1f1f1;
				position: absolute;
				left: 50%;
				transform: translate(-50%);
				height: .74rem;
				z-index: 3;
				width: 5.06rem;
				display: flex;
				.passItem{
					border-top: 1px solid #f1f1f1;
					border-right: 1px solid #f1f1f1;
					border-bottom: 1px solid #f1f1f1;
					display: flex;
					align-items:center;
					justify-content:center;
					width: .84rem;
					height: .74rem;
				}
				.passItem1{
					display: flex;
					align-items:center;
					justify-content:center;
					width: .84rem;
					height: .74rem;
					.yuan{
						width: .12rem;
						height: .12rem;
					}
				}
			}
		}
		.submit{
			margin: .32rem auto 0;
			border-radius: .04rem;
			background: #eeeeee;
			width: 3rem;
			text-align: center;
			height: .76rem;
			line-height: .76rem;
			font-size: .26rem;
			color:#ffffff;
		}
		.backColor{
			background: #03abff;
			margin: .32rem auto 0;
			border-radius: .04rem;
			width: 3rem;
			text-align: center;
			height: .76rem;
			line-height: .76rem;
			font-size: .26rem;
			color:#ffffff;
		}
	}
	input{
		position: absolute;
		top: 6rem;
		left: 0;
		width: 0;
		height: 0;
		z-index: -1;
		opacity: 0;
		outline: none;
	}
}
</style>
<script>
import back from '../../common/back.vue'
export default{
	data(){
		return{
			passList: ["","","","","",""],			//所有密码框
			passList2: [],
			money: "263",			//输入的金额
			passMess: false,		//默认输入密码框不显示
			password: "",			//输入的密码
			passNum: "",			//最终输入的密码
			colorId: false,			//默认密码不完整，确认按钮灰色
			type: "本金",			//区分类型
			shu: "263",				//总共可用金额
		}
	},
	watch:{
		password:function(n,o){
			let nLength = [...n].length;
			let oLength = [...o].length;
			if(this.passList2.length < 6 && nLength > oLength){
				this.passList2.push(n);
			}else if(this.passList2.length <= 6 && nLength < oLength){
				this.passList2.pop();
				this.colorId = false;
			}
			console.log(this.passList2);
		},
		passList2:function(val){
			if(val.length == 6){
				this.colorId = true;
				// 最终输入的密码
				this.passNum = this.passList2[5];
			}
		}
	},
	created(){
		let types = this.$route.query.type;
		// 判断输入金额显示类型
		if(types == "capital"){
			this.type = "本金";
		}else if(types == "commission"){
			this.type = "佣金";
		}
	},
	methods:{
		but(){
			console.log("but");
			document.getElementById("password").focus();
		},
		//点击提现
		subCash(){
			//密码框显示
			this.passMess = true;
		},
		//点击关闭
		closePassMess(){
			this.passList2 = [];
			this.passMess = false;
			this.passNum = "";
		},
		//点击密码确认跳转明细
		state(){
			if(this.colorId == true){
				console.log(this.passNum);
				//this.$router.push('/cashState');
			}
		}
	},
	components:{
		back
	}
}
</script>

















