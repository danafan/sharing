<template>
	<div>
		<div class="minebox">
			<!-- 上面背景图片 -->
			<div class="topImg">
				<div class="backImg">
					<img src="../../assets/background (mine).png">
				</div>	
				<div class="userIcon">
					<img :src="wximg">
				</div>
				<div class="userName">{{wxname}}<span v-if="showMaster">({{usercode}})</span></div>
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
					<div class="taskItem taskItems" @click="$router.push('/through')">
						已完成
						<img class="infoRight" src="../../assets/advance.png">
					</div>
					<div class="taskItem taskItems sd" @click="$router.push('/recordTask')">
						已取消
						<img class="infoRight" src="../../assets/advance.png">
					</div>
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
							<span class="money">¥{{principal}}</span>
						</div>
						<div class="cash" @click="goprincipal">提现</div>
					</div>
					<div class="taskItem taskItems">
						<div class="taskLeft">
							<span>佣金</span>
							<span class="money">¥{{award}}</span>
						</div>
						<div class="cash" @click="goaward">提现</div>
					</div>
					<div class="taskItem taskItems" :class="{sd:isFreeze == false}" @click="$router.push('/property')">
						资产明细
						<img class="infoRight" src="../../assets/advance.png">
					</div>
					<div class="taskItem taskItems sd" v-if="isFreeze">
						<div class="taskLeft">
							<span>冻结资金</span>
							<span class="money">¥{{freeze}}</span>
						</div>
					</div>
				</div>
				<div class="infoItem" @click="$router.push('/raking')" v-if="showMaster">
					<div class="infoLeft">
						<div class="infoIcon"><img src="../../assets/ranking list.png"></div>
						<div class="infoTxt">佣金排行榜</div>
					</div>
					<img class="infoRight" src="../../assets/advance.png">
				</div>
				<div class="infoItem" @click="$router.push('/updateInfo')">
					<div class="infoLeft">
						<div class="infoIcon"><img src="../../assets/modified data.png"></div>
						<div class="infoTxt">修改资料</div>
					</div>
					<img class="infoRight" src="../../assets/advance.png">
				</div>
				<div class="infoItem" @click="$router.push('/guest')">
					<div class="infoLeft">
						<div class="infoIcon"><img src="../../assets/call centre.png"></div>
						<div class="infoTxt">客服中心</div>
					</div>
					<img class="infoRight" src="../../assets/advance.png">
				</div>
				<div class="infoItem" @click="$router.push('/about')">
					<div class="infoLeft">
						<div class="infoIcon"><img src="../../assets/about us.png"></div>
						<div class="infoTxt">关于我们</div>
					</div>
					<img class="infoRight" src="../../assets/advance.png">
				</div>
			</div>	
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
			border-radius: 50%;
			width: 1.64rem;
			height: 1.64rem;
			img{
				border-radius: 50%;
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
				.infoRight{
					width: .26rem;
					height: .26rem;
				}
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
					line-height: .3rem;
					font-size: .24rem;
					color:#03abff;
				}
				.money{
					color:#ff5858;
					font-size: .24rem;
				}
			}
			.sd{
				border: none;
			}
		}
	}
}
// 我的任务和我的金库下面的线
.botline{
	border-bottom:1px solid #f4f4f4;
}
</style>
<script>
import {mapActions, mapGetters} from 'vuex'
import resource from '../../api/resource.js'
export default{
	data(){
		return{
			wxname: "",				//微信昵称
			wximg: "",				//微信头像
			usercode: "",			//师父代号
			showTask: false,		//我的任务默认不展开
			showMoney: false,		//我的金库默认不展开
			showMaster: false,		//默认徒弟身份，佣金排行榜不显示
			award: "",				//佣金
			principal: "",			//本金
			freeze:"",				//冻结资金
			isFreeze: false,		//默认冻结资金栏不展示
		}
	},
	created(){
		document.title = "我的";
		this.wxname = sessionStorage.getItem("wxname");
		this.wximg = sessionStorage.getItem("wxIcon");
		this.usercode = sessionStorage.getItem("usercode");
		this.set_route("mine");
		//判断用户身份佣金排行榜是否显示
		let status = sessionStorage.getItem("status");
		if(status == "0" || status == "2"){
			this.showMaster = true;
		}else if(status == '1'){
			this.showMaster = false;
		}
		//判断任务列表是否展开
		let showtask = sessionStorage.getItem("showTask");
		if(!showtask){
			this.showTask = false;
		}else{
			this.showTask = JSON.parse(showtask);
		}
		//判断我的金库是否展开
		let showmoney = sessionStorage.getItem("showMoney");
		if(!showmoney){
			this.showMoney = false;
		}else{
			this.showMoney = JSON.parse(showmoney);
			if(this.showMoney == true){
				this.getuserinfo();
			}
		}
	},
	methods:{
		...mapActions([
			'set_route'
			]),
		// 点击我的任务
		showtask(){
			this.showTask = !this.showTask;
			sessionStorage.setItem("showTask",JSON.stringify(this.showTask));
		},
		// 点击我的金库
		showmoney(){
			this.showMoney = !this.showMoney;
			sessionStorage.setItem("showMoney",JSON.stringify(this.showMoney));
			if(this.showMoney == true){
				this.getuserinfo();
			}
		},
		//点击本金提现
		goprincipal(){
			if(this.principal == "0"){
				this.$toast("您暂时还没有可提现的本金哦～");
			}else{
				this.$router.push(`/cash?type=capital&money=${this.principal}`)
			}
		},
		//点击本金提现
		goaward(){
			if(this.award == "0"){
				this.$toast("您暂时还没有可提现的佣金哦～");
			}else{
				this.$router.push(`/cash?type=commission&money=${this.award}`)
			}
		},
		//获取用户信息
		getuserinfo(){
			resource.getUserInfo().then(res => {
				if(res.data.code == "0"){
					let userInfo = res.data.data;
					this.award = userInfo.award/100;			//佣金
					this.principal = userInfo.principal/100;	//本金
					if(userInfo.freeze != "0"){					//冻结资金
						this.isFreeze = true;
						this.freeze = userInfo.freeze;
					}
				}else{
					this.$toast(res.data.message);
				}
			});
		},
	}
}
</script>