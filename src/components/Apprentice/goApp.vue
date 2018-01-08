<template>
	<div>
		<!-- 导航 -->
		<div class="tab">
			<div class="tabItem" :class="{txtColor:colorId == 1}" @click="colorId = 1">待审核<span>(3)</span></div>
			<div class="tabItem" :class="{txtColor:colorId == 2}" @click="colorId = 2">已激活<span>(3)</span></div>
			<div class="tabItem" :class="{txtColor:colorId == 3}" @click="colorId = 3">黑名单<span>(3)</span></div>
		</div>
		<!-- 列表 -->
		<div class="orderList">
			<div class="orderItem" v-for="item in orderlist">
				<div class="userIcon"><img :src="item.img"></div>
				<div class="userCon">
					<div class="name">{{item.name}}</div>
					<div class="conItem" v-if="colorId == 3">姓名：{{item.username}}</div>
					<div class="conItem">旺旺号：{{item.wangCode}}</div>
					<div class="conItem" v-if="colorId == 1 || colorId == 2">手机号：{{item.phone}}</div>
					<div class="conItem" v-if="colorId == 2">本月分得佣金：¥{{item.phone}}</div>
					<div class="conItem" v-if="colorId == 1">QQ号：{{item.qq}}</div>
					<div class="conItem" v-if="colorId == 3">状态：{{item.state}}</div>
					<div class="conItem">
						<div>注册时间：{{item.time}}</div>
						<div class="buts" v-if="colorId == 1">
							<div class="verification" @click="sub(true)">审核</div>
							<div class="delete" @click="sub(false)">删除</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 弹框 -->
		<div class="stateBox" v-if="showState">
			<!-- 审核和删除 -->
			<div class="type1">
				<div class="icon"><img :src="stateImg"></div>	
				<div class="verType" v-if="butType == true">
					<div class="yi"><input type="radio" v-model="verType" value="1"/><label>审核通过</label> </div> 
					<div></div><input type="radio" v-model="verType" value="0"/><label>审核未通过</label> 
				</div>
				<div class="wen" v-else>确认删除？</div>
				<div class="butss">
					<div class="ok" @click="ok">确认</div>
					<div class="close" @click="showState = false">关闭</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<style lang="less" scoped>
.tab{
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
	overflow-y: scroll;
	margin-top: 1.05rem;
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
				display: flex;
				align-items:center;
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
}
</style>
<script>
export default{
	data(){
		return{
			colorId: 1,				//默认选中待审核
			orderlist:[
			{
				img: require('../../assets/test1.jpg'),
				name: "zhuo1986",
				wangCode: "234234",
				phone: "13067882143",
				qq: "945647271",
				time: "2017-03-12",
				money: "234",
				username: "刘大大",
				state: "黑户"
			},
			{
				img: require('../../assets/test1.jpg'),
				name: "zhuo1986",
				wangCode: "234234",
				phone: "13067882143",
				qq: "945647271",
				time: "2017-03-12",
				money: "234",
				username: "刘大大",
				state: "黑户"
			},
			{
				img: require('../../assets/test1.jpg'),
				name: "zhuo1986",
				wangCode: "234234",
				phone: "13067882143",
				qq: "945647271",
				time: "2017-03-12",
				money: "234",
				username: "刘大大",
				state: "黑户"
			},

			],	
			verType: 1,				//默认审核通过
			showState: false,		//弹框默认不显示
			butType: true,			//默认点击审核
			stateImg: require('../../assets/audit.png'),	//弹框的图片默认审核
		}
	},
	methods:{
		//点击审核或删除
		sub(type){
			this.showState = true;	//弹框显示
			this.butType = type;	//改变状态
			//改变弹框内容
			if(type == true){//审核
				this.stateImg = require('../../assets/audit.png');
			}else{//删除
				this.stateImg = require('../../assets/delete.png');
			}
		},
		//点击确认
		ok(){
			this.showState = false;	//弹框隐藏
			if(this.butType ==true){//审核
				console.log(this.verType);//0未通过，1通过
			}else{					//删除
				console.log("删除");
			}
		}
	}
}
</script>















