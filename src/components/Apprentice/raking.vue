<template>
	<div>
		<back></back>
		<div class="tab">
			<div class="dayRaking" :class="{selTab:backId == 0}" @click="backId = 0">日榜</div>
			<div class="monRaking" :class="{selTab:backId == 1}" @click="backId = 1">月榜</div>
		</div>
		<div class="icon">
			<div class="iconItem two">
				<div class="img">
					<div class="div1">
						<div class="userimg"><img :src="numberTwo.headimgurl"></div>
						<img src="../../assets/Second.png">
					</div>
				</div>
				<div class="code">{{numberTwo.master_code}}</div>
				<div class="money">¥{{numberTwo.sum/100}}</div>
			</div>
			<div class="iconItem one">
				<div class="img">
					<div class="div2">
						<div class="userimg"><img :src="numberOne.headimgurl"></div>
						<img src="../../assets/First.png">
					</div>
				</div>
				<div class="code code1">{{numberOne.master_code}}</div>
				<div class="money">¥{{numberOne.sum/100}}</div>
			</div>
			<div class="iconItem three">
				<div class="img">
					<div class="div3">
						<div class="userimg"><img :src="numberThree.headimgurl"></div>
						<img src="../../assets/Third.png">
					</div>
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
.tab{
	margin-top: .38rem;
	display: flex;
	justify-content:center;
	.dayRaking{
		border: 1px solid #03abff;
		border-radius: .36rem 0 0 .36rem;
		width: 2.52rem;
		text-align: center;
		height: .72rem;
		line-height: .72rem;
		font-size: .3rem;
		font-weight: bold;
		color:#03abff;
	}
	.monRaking{
		border: 1px solid #03abff;
		border-radius: 0 .36rem .36rem 0;
		width: 2.52rem;
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
	.iconItem{
		.img{
			height: 1.9rem; 
			display: flex;
			align-items:center;
			.div1{
				position: relative;
				width: 1.4rem;
				height: 1.52rem;
				.userimg{
					z-index: 1;
					position: absolute;
					right: .05rem;
					bottom: .06rem;
					border-radius: 50%;
					width: 1.1rem;
					height: 1.1rem;
					img{
						border-radius: 50%;
						width: 100%;
						height: 100%;
					}
				}
				img{
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
				}
			}
			.div2{
				position: relative;
				width: 1.38rem;
				height: 1.82rem;
				.userimg{
					z-index: 1;
					position: absolute;
					right: .06rem;
					bottom: .053rem;
					border-radius: 50%;
					width: 1.25rem;
					height: 1.25rem;
					img{
						border-radius: 50%;
						width: 100%;
						height: 100%;
					}
				}
				img{
					width: 100%;
					height: 100%;
				}
			}
			.div3{
				position: relative;
				width: 1.46rem;
				height: 1.5rem;
				.userimg{
					z-index: 1;
					position: absolute;
					left: .07rem;
					bottom: .07rem;
					border-radius: 50%;
					width: 1.12rem;
					height: 1.12rem;
					img{
						border-radius: 50%;
						width: 100%;
						height: 100%;
					}
				}
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
		.code{
			text-align: center;
			font-size: .28rem;
			color:#333333;
		}
		.code1{
			font-size: .3rem;
		}
		.money{
			text-align: center;
			font-size: .26rem;
			color:#fe8d2c;
		}
	}
	.one{
		margin-right: .6rem;
		margin-left: .6rem;
	}
}
.rakList{
	padding-right: .3rem;
	padding-left: .3rem;
	border-radius: .08rem;
	background-color: #f8f8f8;
	margin: .6rem auto 0;
	width: 5.64rem;
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
			border-bottom:1px solid #e0e0e0;
			width: 4.6rem;
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
							"headimgurl":"http://www.gxke88.com/uploads/touxiang/tx.png",
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