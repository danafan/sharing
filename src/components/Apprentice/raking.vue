<template>
	<div class="box">
		<back></back>
		<div class="tab">
			<div class="dayRaking" :class="{selTab:backId == 0}" @click="backId = 0">日榜</div>
			<div class="monRaking" :class="{selTab:backId == 1}" @click="backId = 1">月榜</div>
		</div>
		<div class="icon">
			<div class="iconItem two">
				<div class="img">
					<div class="userimg"><img :src="numberTwo.headimgurl"></div>
					<img src="../../assets/Second.png">
				</div>
				<div class="code">{{numberTwo.master_code}}</div>
				<div class="money">¥{{numberTwo.sum/100}}</div>
			</div>
			<div class="iconItem one">
				<div class="img">
					<div class="userimg"><img :src="numberOne.headimgurl"></div>
					<img src="../../assets/First.png">
				</div>
				<div class="code">{{numberOne.master_code}}</div>
				<div class="money">¥{{numberOne.sum/100}}</div>
			</div>
			<div class="iconItem three">
				<div class="img">
					<div class="userimg"><img :src="numberThree.headimgurl"></div>
					<img src="../../assets/Third.png">
				</div>
				<div class="code">{{numberThree.master_code}}</div>
				<div class="money">¥{{numberThree.sum/100}}</div>
			</div>
		</div>
		<div class="rakList">
			<div class="rakItem" v-for="(item,index) in rakingList">
				<div class="itemLeft">{{index + 4}}</div>
				<div class="itemRight">
					<div class="user">
						<div class="userIcon"><img :src="item.headimgurl"></div>
						<div class="userCode">{{item.master_code}}</div>
					</div>
					<div class="money">¥{{item.sum/100}}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.box{
	position:absolute;
	top: 0;
	left:0;
	width:100%;
	background: #f4f5f6;
	height:100%;
}
.tab{
	box-shadow: 0 .06rem .2rem rgb(172,221,246);
	border-radius: .12rem;
	width:5rem;
	margin: .38rem auto 0;
	display: flex;
	justify-content:center;
	.dayRaking{
		background:#fff;
		border-radius: .12rem 0 0 .12rem;
		width: 2.5rem;
		text-align: center;
		height: .72rem;
		line-height: .72rem;
		font-size: .3rem;
		font-weight: bold;
		color:#03abff;
	}
	.monRaking{
		background:#fff;
		border-radius: 0 .12rem .12rem 0;
		width: 2.5rem;
		text-align: center;
		height: .72rem;
		line-height: .72rem;
		font-size: .3rem;
		font-weight: bold;
		color:#03abff;
	}
	.selTab{
		background-color: #03abff;
		color: #ffffff;
	}
}
.icon{
	margin-top: .22rem;
	width: 100%;
	display: flex;
	justify-content:center;
	align-items:center;
	.iconItem{
		.code{
			text-align: center;
			font-size: .28rem;
			color:#fff;
		}
		.money{
			text-align: center;
			font-size: .24rem;
			color:#e0e0df;
		}
	}
	.two{
		background:#ffb55b;
		box-shadow: 0 .06rem .2rem #ffb544;
		border-radius:.08rem;
		width:1.68rem;
		height:2.3rem;
		padding-top: .1rem;
		.img{
			position: relative;
			width: 100%;
			height:1.4rem;
			img{
				width: 1.34rem;
				height: 1.32rem;
			}
			.userimg{
				z-index: 1;
				position: absolute;
				top:.26rem;
				left: .3rem;
				border-radius: 50%;
				width: 1.04rem;
				height: 1.04rem;
				img{
					border-radius: 50%;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.one{
		background:#ff6792;
		box-shadow: 0 .06rem .2rem #ff5993;
		border-radius:.08rem;
		width:2.02rem;
		height:2.66rem;
		margin-right: .4rem;
		margin-left: .4rem;
		padding-top: .1rem;
		.img{
			display: flex;
			align-items:center;
			justify-content:center;
			position: relative;
			width: 100%;
			img{
				width: 1.38rem;
				height: 1.82rem;
			}
			.userimg{
				z-index: 1;
				position: absolute;
				top:.47rem;
				left: 50%;
				transform: translate(-50%);
				border-radius: 50%;
				width: 1.34rem;
				height: 1.34rem;
				img{
					border-radius: 50%;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.three{
		background:#5cb5fe;
		box-shadow: 0 .06rem .2rem #45d0ff;
		border-radius:.08rem;
		width:1.68rem;
		height:2.3rem;
		padding-top: .1rem;
		.img{
			position: relative;
			width: 100%;
			height:1.4rem;
			img{
				position:absolute;
				right: 0;
				width: 1.34rem;
				height: 1.32rem;
			}
			.userimg{
				z-index: 1;
				position: absolute;
				top:.29rem;
				left: .34rem;
				border-radius: 50%;
				width: 1.04rem;
				height: 1.04rem;
				img{
					border-radius: 50%;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
.rakList{
	padding-right: .3rem;
	padding-left: .3rem;
	border-radius: .08rem;
	background-color: #fff;
	margin: .6rem auto 0;
	width: 6.26rem;
	height: 7.08rem;
	overflow-y: scroll;
	.rakItem{
		display: flex;
		width: 100%;
		height: .88rem;
		.itemLeft{
			display: flex;
			align-items:center;
			flex:1;
			font-size: .28rem;
			color:#333333;
		}
		.itemRight{
			border-bottom:1px solid #f4f4f4;
			width: 5.08rem;
			display: flex;
			align-items:center;
			justify-content: space-between;
			.user{
				display: flex;
				align-items:center;
				.userIcon{
					position: relative;
					margin-right: .2rem;
					border-radius: 50%;
					width: .5rem;
					height: .5rem;
					img{
						position: absolute;
						border-radius: 50%;
						width: 100%;
						height: 100%;
					}
				}
				.userCode{
					font-size: .28rem;
					color:#333333;
				}
			}
			.money{
				font-size: .26rem;
				color:#fd8e2c;
			}
		}
	}
}
</style>
<script>
import resource from '../../api/resource.js'
import back from '../../common/back.vue'
export default{
	data(){
		return{
			rakingList: [],		//所有列表
			numberOne: {},		//第一名
			numberTwo: {},		//第二名
			numberThree: {},	//第三名
			backId: 0,			//默认显示日榜
			usercode: "",		//师父代号
		}
	},
	created(){
		document.title = "佣金排行榜";
		//获取师父代号
		this.usercode = sessionStorage.getItem("usercode");
		this.getmaster(this.backId);
	},
	watch:{
		backId:function(n,o){
			this.getmaster(n);
		}
	},
	methods:{
		getmaster(type){
			resource.getMasterList({type: type}).then(res =>{
				if(res.data.code == "0"){
					let rakingList = res.data.data;
					let diff = 100 - rakingList.length;	//和100做对比
					if(diff > 0){
						let rakObj = {
							"headimgurl":"http://gxke88.com/uploads/touxiang/tx.png",
							"master_code":"虚位以待",
							"sum":"0"
						}
						for (let i = 0; i < diff; i++) {
							rakingList.push(rakObj);
						}
						this.rakingList = rakingList.slice(3,100);
					}else if(diff == 0){
						this.rakingList = rakingList.slice(3,100);
					}
					this.numberOne = rakingList[0];	//第一名
					this.numberTwo = rakingList[1];	//第二名
					this.numberThree = rakingList[2];	//第三名
				}else{
					this.$toast(res.data.message);
				}
			});
		}
	},
	components:{
		back
	}
}
</script>