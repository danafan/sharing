<template>
	<div>
		<!-- 导航 -->
		<div class="tab">
			<div class="tabItem" :class="{txtColor:colorId == 1}" @click="selTab(1)">待审核<span v-if="colorId == 1">({{waitCode}})</span></div>
			<div class="tabItem" :class="{txtColor:colorId == 2}" @click="selTab(2)">已激活<span v-if="colorId == 2">({{checkCode}})</span></div>
			<div class="tabItem" :class="{txtColor:colorId == 3}" @click="selTab(3)">黑名单<span v-if="colorId == 3">({{blackCode}})</span></div>
		</div>
		<!-- 列表 -->
		<div class="orderList" v-infinite-scroll="loadMore" v-if="nullList == false">
			<div class="orderItem" v-for="item in orderlist">
				<div class="userIcon" @click="detail(item.id)"><img :src="item.headimgurl"></div>
				<div class="userCon">
					<div class="name">{{item.nickname}}</div>
					<div class="conItem" v-if="colorId == 3">姓名：{{item.username}}</div>
					<div class="conItem">旺旺号：{{item.wangwang}}</div>
					<div class="conItem" v-if="colorId == 1 || colorId == 2">手机号：{{item.phone}}</div>
					<div class="conItem" v-if="colorId == 2">本月分得佣金：¥{{item.m_award}}</div>
					<div class="conItem" v-if="colorId == 1">QQ号：{{item.qq}}</div>
					<div class="conItem" v-if="colorId == 3">状态：{{item.status | status}}</div>
					<div class="conItem">
						<div>注册时间：{{item.created_time}}</div>
						<div class="buts" v-if="colorId == 1">
							<div class="verification" @click="though(item.id)">通过</div>
							<div class="delete" @click="Denial(item.id)">拒绝</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 列表为空的情况 -->
		<div class="nullList" v-else>
			<div class="toastImg" v-if="colorId == 1 || colorId == 2">
				<img src="../../assets/picture(duty).png">
			</div>
			<div class="toastImg2" v-else>
				<img src="../../assets/head 1.png">
			</div>
			<div class="toastTxt">{{toastTxt}}</div>
		</div>
		<!-- 弹框 -->
		<div class="stateBox" v-if="showState" @click="closeState">
			<!-- 审核和删除 -->
			<div class="type1" v-if="type1">
				<div class="icon"><img :src="stateImg"></div>	
				<div class="wen">{{toast}}</div>
				<div class="butss">
					<div class="ok" @click="ok">确认</div>
					<div class="close" @click="showState = false">取消</div>
				</div>
			</div>
			<!-- 点击查看详情 -->
			<div class="type2" v-else>
				<div class="icon"><img src="../../assets/message.png"></div>
				<div class="infoList">
					<div class="infoItem">姓名：{{userObj.name}}</div>
					<div class="infoItem">性别：{{userObj.sex}}</div>
					<div class="infoItem">出生日期：{{userObj.birth}}</div>
					<div class="infoItem">职业：{{userObj.job_name}}</div>
					<div class="infoItem">旺旺号：{{userObj.wangwang}}</div>
					<div class="infoItem">QQ号：{{userObj.qq}}</div>
					<div class="infoItem">手机号：{{userObj.phone}}</div>
					<div class="infoItem" v-if="colorId == 2">共计分得佣金：<span>¥{{!!userObj.m_award?userObj.m_award : "0"}}</span></div>
					<div class="infoItem">注册时间：{{userObj.created_time}}</div>
				</div>	
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.tab{
	font-family: "Source Han Sans";
	position: fixed;
	left: 0;
	top: 0;
	display: flex;
	justify-content: space-around;
	align-items:center;
	width: 100%;
	height: 1.05rem;
	background-color: #f5f9fc;
	.tabItem{
		font-size: .3rem;
		color: #333333;
		font-weight: 700;
		span{
			font-weight: 500;
			color: #ff5858;
		}
	}
	.txtColor{
		color: #03abff;
	}
}
.orderList{
	padding-top: 1.05rem;
	margin-bottom: .98rem;
	.orderItem{
		border-bottom:1px solid #e8e8e8;
		padding-left: .58rem;
		display: flex;
		align-items:center;
		height: 2.38rem;
		.userIcon{
			margin-right: .3rem;
			border-radius: .18rem;
			width: 1.8rem;
			height: 1.8rem;
			img{
				border-radius: .18rem;
				width: 100%;
				height: 100%;
			}
		}
		.userCon{
			flex: 1;
			.name{
				font-size: .3rem;
				color:#333333;
			}
			.conItem{
				display: flex;
				font-size: .24rem;
				color: #999999;
				.buts{
					margin-left: .08rem;
					display: flex;
					.verification{
						border-radius: .04rem;
						background-color: #02abff;
						width: .9rem;
						text-align: center;
						height: .32rem;
						line-height: .34rem;
						font-size: .24rem;
						color:#ffffff;
					}
					.delete{
						border-radius: .04rem;
						margin-left: .15rem;
						border:1px solid #03abff;
						width: .9rem;
						text-align: center;
						height: .32rem;
						line-height: .32rem;
						font-size: .24rem;
						color:#03abff;
					}
				}
			}
		}
	}
}
.nullList{
	font-family: "Source Han Sans";
	margin-top: 1.05rem;
	margin-bottom: .98rem;
	.toastImg{
		margin: 3.26rem auto .32rem;
		width: 4.84rem;
		height: 4.04rem;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.toastImg2{
		margin: 2.9rem auto .46rem;
		width: 2.98rem;
		height: 2.98rem;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.toastTxt{
		width: 100%;
		text-align: center;
		font-size: .26rem;
		color:#999999;
	}
}
// 弹框
.stateBox{
	background:rgba(0,0,0,.66);
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	.type1{
		border-radius: .17rem;
		position: relative;
		margin: 4rem auto 0;
		background-color: #ffffff;
		width: 4.71rem;
		height: 3.2rem;
		.icon{
			position: absolute;
			top: -.88rem;
			left: 50%;
			transform: translate(-50%);
			width: 1.78rem;
			height: 1.76rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.verType{
			position: absolute;
			top: 1.28rem;
			width: 100%;
			display: flex;
			align-items:center;
			justify-content:center;
			font-size: .28rem;
			color:#03abff;
			div{
				position: relative;
				display: flex;
				align-items:center;
				input{
					opacity: 0;
				}
				label {
					position: absolute;
					left: .06rem;
					top: .06rem;
					width: .2rem;
					height: .2rem;
					border-radius: 50%;
					border: 1px solid #999999;
				}
				input:checked+label { 
					background-color: #03abff;
					border: 1px solid #03abff;
				}
			}
			.yi{
				margin-right: .43rem;
			}
		}
		.wen{
			position: absolute;
			top: 1.28rem;
			width: 100%;
			text-align: center;
			font-size: .28rem;
			color: #03abff;
		}
		.butss{
			position: absolute;
			top: 2rem;
			left: 50%;
			transform: translate(-50%);
			display: flex;
			.ok{
				border-radius: .04rem;
				margin-right: .4rem;
				background-color: #03abff;
				width: 1.1rem;
				text-align: center;
				height: .4rem;
				line-height: .4rem;
				font-size: .26rem;
				color:#ffffff;
			}
			.close{
				border-radius: .04rem;
				border:1px solid #03abff;
				width: 1.1rem;
				text-align: center;
				height: .4rem;
				line-height: .4rem;
				font-size: .26rem;
				color:#03abff;
			}
		}
	}
	.type2{
		padding-top: 1.38rem;
		padding-bottom: .4rem;
		border-radius: .17rem;
		position: relative;
		margin: 3rem auto 0;
		background-color: #ffffff;
		width: 4.26rem;
		.icon{
			position: absolute;
			top: -1rem;
			left: 50%;
			transform: translate(-50%);
			width: 2.12rem;
			height: 2.02rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.infoList{
			display: flex;
			flex-wrap:wrap;
			justify-content:center;
			.infoItem{
				margin-bottom: .1rem;
				width: 80%;
				font-size: .28rem;
				color:#333333;
				span{
					color: #fd7c2e;
				}
			}
		}
	}
}
</style>
<script>
import resource from '../../api/resource.js'
export default{
	data(){
		return{
			nullList: false,		//默认列表不为空
			toastTxt: "",			//列表为空提示文字
			page: 1,				//页码为0
			isLoad: true,			//默认可以加载
			waitCode: "",			//待审核徒弟的数量
			checkCode: "",			//已激活徒弟的数量
			blackCode: "",			//黑名单徒弟的数量
			id: "",					//徒弟id
			colorId: 1,				//默认选中待审核
			orderlist:[],			//徒弟列表
			verType: 1,				//默认审核通过
			toast: "",				//点击通过或拒绝的提示
			showState: false,		//弹框默认不显示
			type1: true,			//默认显示审核或删除的框
			butType: "",			//默认点击审核
			stateImg: require('../../assets/audit.png'),	//弹框的图片默认审核
			userObj:{},				//徒弟详情对象
		}
	},
	created(){
		document.title = "徒弟";
		this.waitTab();
	},
	watch:{
		showState:function(n,o){
			if(n == false){
				this.verType = 1;
			}
		},
		colorId:function(n,o){
			this.orderlist = [];
			this.page = 1;
			if(n == 1){
				this.waitTab();
			}else if(n == 2){
				this.checkTab();
			}else if(n == 3){
				this.blackTab();
			}
		}, 
	},
	methods:{
		//上拉加载
		loadMore(){
			//获取任务列表
			if(this.isLoad == true){
				this.page += 1;
				if(this.colorId == "1"){
					this.waitTab();
				}else if(this.colorId == "2"){
					this.checkTab();
				}else if(this.colorId == "3"){
					this.blackTab();
				}
			}
		},
		//点击切换导航
		selTab(id){
			this.isLoad = true;
			this.colorId = id;
			this.nullList = false;
		},
		//待审核
		waitTab(){
			resource.waitTab({page: this.page}).then(res => {
				if(res.data.code == "0"){
					let orderlist = res.data.data.data;
					this.waitCode = res.data.data.total;
					//判断任务列表是否为空
					if(this.waitCode == "0"){
						this.isLoad = false;
						this.nullList = true;
						this.toastTxt = "您这里暂时没有要审核的徒弟哦";
					}
					if(orderlist.length < "12" || this.waitCode == "12"){		// 某一页不足12条
						this.isLoad = false;
						this.orderlist = this.orderlist.concat(Array.from(orderlist));
					}else{								//正常
						this.isLoad = true;
						this.orderlist = this.orderlist.concat(Array.from(orderlist));
					}
				}else{
					this.$toast(res.data.msg);
				}
			});
		},
		//已激活
		checkTab(){
			resource.checkpass({page: this.page}).then(res => {
				if(res.data.code == "0"){
					let orderlist = res.data.data.data;
					this.checkCode = res.data.data.total;
					if(this.checkCode == "0"){
						this.nullList = true;
						this.toastTxt = "您这里一个徒弟也没有，赶紧去邀请吧";
					}
					if(orderlist.length < "12" || this.checkCode == "12"){			// 某一页不足12条
						this.isLoad = false;
						this.orderlist = this.orderlist.concat(Array.from(orderlist));
					}else{								//正常
						this.isLoad = true;
						this.orderlist = this.orderlist.concat(Array.from(orderlist));
					}
				}else{
					this.$toast(res.data.msg);
				}
			});
		},
		//黑名单
		blackTab(){
			resource.blackTab({page: this.page}).then(res => {
				if(res.data.code == "0"){
					let orderlist = res.data.data.data;
					this.blackCode = res.data.data.total;
					if(this.blackCode == "0"){
						this.nullList = true;
						this.toastTxt = "呦吼，您的徒弟表现都不错哦，继续努力吧";
					}
					if(orderlist.length < "12" || this.blackCode == "12"){// 某一页不足12条
						this.isLoad = false;
						this.orderlist = this.orderlist.concat(Array.from(orderlist));
					}else{								//正常
						this.isLoad = true;
						this.orderlist = this.orderlist.concat(Array.from(orderlist));
					}
				}else{
					this.$toast(res.data.msg);
				}
			});
		},
		//点击头像查看详情
		detail(id){
			resource.getApprenticeDetail({p_userid:id}).then(res => {
				if(res.data.code == "0"){
					this.userObj = res.data.data;
					this.showState = true;	//弹框显示
					this.type1 = false;		//显示徒弟详情的框
				}else{
					this.$toast(res.data.msg);
				}
			});
		},
		//点击通过
		though(id){
			this.id = id;
			this.showState = true;	//弹框显示
			this.type1 = true;		//显示通过或拒绝的框
			this.butType = "1";		//改变状态（通过）
			//改变弹框图片
			this.stateImg = require('../../assets/audit.png');
			this.toast = "确认通过？"
		},
		//点击拒绝
		Denial(id){
			this.id = id;
			this.showState = true;	//弹框显示
			this.type1 = true;		//显示审核或删除的框
			this.butType = "0";		//改变状态（拒绝）
			//改变弹框图片
			this.stateImg = require('../../assets/delete.png');
			this.toast = "确认拒绝？"
		},
		//点击确认
		ok(){
			let preObj = {
				p_userid: this.id,
				status: this.butType
			}
			resource.prentice(preObj).then(res => {
				if(res.data.code == "0"){
					this.$toast("操作成功");
					this.showState = false;			//弹框隐藏
					this.orderlist = [];
					this.page = 1;
					this.waitTab();
				}else{
					this.$toast(res.data.msg);
				}
			});
		},
		//点击整个弹框关闭弹框
		closeState(){
			if(this.type1 == false){//如果是查看管理员详情的状态时关闭
				this.showState = false;
			}
		}
	},
	filters: {
		// 黑名单状态
		status (txt) {
			if(txt == "3"){
				return "疑似黑号";
			}else if(txt == "4"){
				return "黑号";
			}else if(txt == "5"){
				return "骗子";
			};
		}
	},
}
</script>















