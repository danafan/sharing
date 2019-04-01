<template>
	<div>
		<div class="minebox">
			<!-- 上面背景图片 -->
			<div class="topImg">	
				<!-- <div class="userIcon">
					<img :src="wximg">
				</div> -->
				<div class="userName">{{wxname}}<span v-if="showMaster">({{usercode}})</span></div>
				<div class="income" v-if="showMaster">
					<div class="incomeItem">
						<div class="incomeTitle">本月预估收入（元）
							<img src="../../assets/problem.png" @click="showMo(1)">
						</div>
						<div class="incomeMoney">¥<span>{{income.awards1}}</span></div>
					</div>
					<div class="line"></div>
					<div class="incomeItem">
						<div class="incomeTitle">本月实际收入（元）
							<img src="../../assets/problem.png" @click="showMo(2)">
						</div>
						<div class="incomeMoney">¥<span>{{income.awards2}}</span></div>
					</div>
				</div>
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
				<!-- 评价任务 -->
				<div class="myTask" :class="{botline:showPing == false}" @click="showping">
					<div class="infoLeft">
						<div class="infoIcon"><img src="../../assets/assess1.png"></div>
						<div class="infoTxt">评价任务</div>
					</div>
					<img v-if="showPing == false" class="infoRight" src="../../assets/advance.png">
					<img v-else class="infoRight" src="../../assets/pull-down.png">
				</div>
				<div class="pingInfo" v-if="showPing">
					<div class="taskItem taskItems" @click="gooAppraisal(0)">
						<div class="key">可接</div>
						<div class="val">{{ableTasksCount}}个</div>
					</div>
					<div class="taskItem taskItems sd" @click="gooAppraisal(1)">
						<div class="key">历史</div>
						<div class="val">{{acceptTasksCount}}个</div>
					</div>
				</div>
				<!-- 我的金库 -->
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
					<div class="taskItem taskItems" @click="getUserCash(1)">
						提现
						<img class="infoRight" src="../../assets/advance.png">
					</div>
					<div class="taskItem taskItems" @click="$router.push('/cashRecord')">
						提现记录
						<img class="infoRight" src="../../assets/advance.png">
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
				<div class="infoItem" @click="ren">
					<div class="infoLeft">
						<div class="infoIcon"><img src="../../assets/certification1.png"></div>
						<div class="infoTxt">实名认证</div>
					</div>
					<img class="infoRight" src="../../assets/advance.png">
				</div>
				<div class="infoItem" @click="getUserCash(2)">
					<div class="infoLeft">
						<div class="infoIcon"><img src="../../assets/new_bank.png"></div>
						<div class="infoTxt">绑定银行卡</div>
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
				<div class="infoItem" @click="$router.push('/help')">
					<div class="infoLeft">
						<div class="infoIcon"><img src="../../assets/help1.png"></div>
						<div class="infoTxt">帮助中心</div>
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
		<div class="modelBox" v-if="showModel">
			<div class="contentBox">
				<div class="text">{{modelTxt}}</div>
				<div class="but" @click="showModel = false">我明白啦</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.minebox{
	margin-bottom: .98rem;
	height: 100%;
	.topImg{
		padding-top: .74rem;
		box-sizing: border-box;
		width: 100%;
		background: #03abff;
		.userIcon{
			margin: 0 auto;
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
			margin: .28rem auto .4rem;
			width: 100%;
			text-align:center;
			font-size: .3rem;
			color:#ffffff;
		}
		.income{
			background:rgb(52,151,234);
			display: flex;
			align-items: center;
			width: 100%;
			height: 1.14rem;
			.incomeItem{
				width: 50%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				color: #fff;
				.incomeTitle{
					font-size: .3rem;
					display: flex;
					align-items: center;
					img{
						display: block;
						width: .26rem;
						height: .26rem;
					}
				}
				.incomeMoney{
					font-size: .24rem;
					span{
						font-size: .32rem;
					}
				}
			}
			.line{
				height: .8rem;
				border-left: 1px solid #fff;
			}
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
		.pingInfo{
			border-bottom:1px solid #f4f4f4;
			padding-right: .58rem;
			padding-left: .58rem;
			.taskItem{
				font-size: .26rem;
				height: .88rem;
				line-height: .88rem;
				.key{
					color: #03abff;
				}
				.val{
					color: #ff5858;
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
//弹框
.modelBox{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,.6);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
	.contentBox{
		border-radius: .18rem;
		padding: .46rem .24rem;
		background: #fff;
		width: 4.06rem;
		font-size: .24rem;
		color: #03abff;
		display: flex;
		flex-direction: column;
		align-items: center;
		.but{
			margin-top: .6rem;
			border-radius: .2rem;
			background: #03abff;
			width: 3.44rem;
			text-align:center;
			height: .48rem;
			line-height: .48rem;
			color:#fff;
			font-size: .2rem;
		}
	}
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
			showPing: false,		//评价任务默认不展开
			ableTasksCount: 0,		//可接评价任务
			acceptTasksCount: 0,	//评价任务记录
			showMoney: false,		//我的金库默认不展开
			showMaster: false,		//默认徒弟身份，佣金排行榜不显示
			award: "",				//佣金
			principal: "",			//本金
			freeze:"",				//冻结资金
			isFreeze: false,		//默认冻结资金栏不展示
			income:{},				//师父的预计收入金额
			showModel:false,		//默认说明弹框不显示
			modelTxt:"",			//显示的说明
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
			//获取师父预计收入金额
			this.getMyInfo();
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
		//判断评价列表是否展开
		let showping = sessionStorage.getItem("showPing");
		if(!showping){
			this.showPing = false;
		}else{
			this.showPing = JSON.parse(showping);
			if(this.showPing == true){
				this.getTotaltask();
			}
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
		//点击提现或绑定银行卡先验证是否已绑定银行卡
		getUserCash(type){
			resource.getUserCash().then(res => {
				if(res.data.code == 1){
					if(res.data.data.bank_card_status == 0){
						this.$toast("请先绑定银行卡信息！");
						this.$router.push('/bindBank')
					}else if(res.data.data.bank_card_status == 1){
						this.$toast("后台正在审核您的银行卡信息！")
					}else if(res.data.data.bank_card_status == 2){
						if(type == 1){	//提现
							this.$router.push('/newCash');
						}else{			//绑定银行卡
							this.$toast("您已绑定过银行卡！")
						}
					}else if(res.data.data.bank_card_status == 3){
						this.$toast("您上传的银行卡信息未通过，请重新提交！")
						this.$router.push('/bindBank')
					}

				}else{
					this.$toast(res.data.msg);
				}
			});
		},
		//点击显示说明
		showMo(type){
			this.showModel = true;
			if(type === 1){
				this.modelTxt = "本月预估收入指的是本月的最大化分佣收入（即如果所有徒弟都按时完成任务的情况下的分佣收入），加油努力达到目标哦！";
			}else{
				this.modelTxt = "本月实际收入指的是本月实际的分佣收入（即所有徒弟已经完成的任务获取的分佣收入）";
			}
		},
		//获取师父预计收入金额
		getMyInfo(){
			resource.myinfo().then(res => {
				if(res.data.code == "0"){
					this.income = res.data;
				}else{
					this.$toast(res.data.message);
				}
			})
		},
		// 点击我的任务
		showtask(){
			this.showTask = !this.showTask;
			sessionStorage.setItem("showTask",JSON.stringify(this.showTask));
		},
		//点击实名认证
		ren(){
			let openid = sessionStorage.getItem("openid");
			resource.useridentity({openid:openid}).then(res => {
				if(res.data.code == "1"){
					if(res.data.check_status1 == "2" && res.data.check_status2 == "2"){				   	   //一审二审都通过
						this.$toast("您已通过实名认证");
					}else if(res.data.check_status1 == "1" || res.data.check_status2 == "1"){
						this.$toast("您已提交过资料，管理员正在审核");
					}else {
						if(res.data.check_status1 == "3"){
							this.$toast(res.data.reject_reason1);
						}else if(res.data.check_status2 == "3"){
							this.$toast(res.data.reject_reason2);
						}
						this.$router.replace('/certification?status1=' + res.data.check_status1 + "&status2=" + res.data.check_status2);
					}
				}else{
					this.$toast(res.data.message);
				}
			});
		},
		// 点击评价列表
		showping(){
			this.showPing = !this.showPing;
			sessionStorage.setItem("showPing",JSON.stringify(this.showPing));
			if(this.showPing == true){
				this.getTotaltask();
			}
		},
		// 点击我的金库
		showmoney(){
			this.showMoney = !this.showMoney;
			sessionStorage.setItem("showMoney",JSON.stringify(this.showMoney));
			if(this.showMoney == true){
				this.getuserinfo();
			}
		},
		//点击可接或历史
		gooAppraisal(type){
			if(type == 0 && this.ableTasksCount == 0){
				this.$toast("当前无可接任务");
			}else if(type == 1 && this.acceptTasksCount == 0){
				this.$toast("当前无历史任务记录");
			}else{
				this.$router.push('/appraisal?type=' + type);
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
		//获取评价任务数量
		getTotaltask(){
			resource.tasktotal().then(res => {
				if(res.data.code == "0"){
					this.ableTasksCount = res.data.ableTasksCount;
					this.acceptTasksCount = res.data.acceptTasksCount;
				}else{
					this.$toast(res.data.message);
				}
			});
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
						this.freeze = userInfo.freeze/100;
					}
				}else{
					this.$toast(res.data.message);
				}
			});
		},
	}
}
</script>














