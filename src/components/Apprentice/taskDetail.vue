<template>
	<div>
		<!-- 返回按钮 -->
		<back v-if="pageType"></back>
		<!-- 顶部时间 -->
		<div class="time">
			<div class="timeIcon">
				<img src="../../assets/task(black).png">
			</div>
			<div class="conTime">剩余时间：{{time}}</div>
		</div>
		<!-- 第一页中间详情部分 -->
		<div v-if="pageType">
			<div class="content">
				<!-- 上面部分 -->
				<div class="topCon">
					<div class="tie">商品主图</div>
					<div class="taskIcon">
						<img :src="baseUrl + taskDetail.goods_img">
					</div>
					<div class="taskSubname">请在<span class="txtRed">{{taskDetail.end_time}}</span>前完成以下操作</div>
					<div class="taskSubname">否则任务将自动作废哦！</div>
				</div>
				<!-- 下面部分 -->
				<div class="taskCon">
					<div class="title">任务流程</div>
					<!-- 第一条 -->
					<div class="subTie">1. 打开淘宝客户端，按照以下步骤操作：</div>
					<!-- <div class="operation">
						<div class="operName">点击关键词复制：</div>	
						<div class="operSubname" v-clipboard="keyword"
						@success="$toast('复制成功');">{{keyword}}</div>
					</div> -->
					<div class="operation">
						<div class="operName1">关键词(不可复制)：</div>	
						<div class="operSubname1">{{keyword}}</div>
					</div>
					<!-- 第一条 -->
					<div class="subTie">2. 筛选条件：</div>
					<div class="operation">
						<div class="operName">排序方式：</div>	
						<div class="operSubname">{{taskDetail.sort}}</div>
					</div>
					<div class="operation" v-if="showPrice">
						<div class="operName">价格区间：</div>	
						<div class="operSubname">{{taskDetail.small_price/100}} - {{taskDetail.big_price/100}}</div>
					</div>
					<div class="operation">
						<div class="operName">店铺类型：</div>	
						<div class="operSubname">{{taskDetail.shop_type}}</div>
					</div>
					<div class="operation">
						<div class="operName">货到付款：</div>	
						<div class="operSubname">{{taskDetail.arrive_pay}}</div>
					</div>
					<!-- 第一条 -->
					<div class="subTie">3. 输入店铺全称，验证店铺<span @click="$router.push('/shopFull')">如何查看店铺全称>></span></div>
					<div class="operation">
						<div class="inputTxt">
							<input type="text" v-model="shop">
						</div>	
						<div class="confirmation" v-if="shopId == 0" @click="conShop">验证</div>
						<div class="confirmation through" v-if="shopId == 1">通过</div>
						<div class="confirmation wei" v-if="shopId == 2">失败</div>
					</div>
					<!-- 第一条 -->
					<div class="subTie">4. 输入商品金额，验证金额<span @click="$router.push('/shopMoney')">如何查看商品金额>></span></div>
					<div class="operation">
						<div class="inputTxt">
							<input type="number" v-model="money">
						</div>	
						<div class="confirmation" v-if="moneyId == 0" @click="conMoney">验证</div>
						<div class="confirmation through" v-if="moneyId == 1">通过</div>
						<div class="confirmation wei" v-if="moneyId == 2">失败</div>
					</div>
					<!-- 提示 -->
					<div class="prompt" v-if="prompt">请用您的淘宝账号<span>{{wangwang}}</span>,拍下并付款吧！</div>
					<div class="prompt" v-if="tishi">验证通过，请在淘宝商品页面浏览3分钟</div>
					<div class="prompt" v-if="tishi">剩余时间：{{time2}}</div>
				</div>
			</div>
			<!-- 底部确认按钮 -->
			<!-- <div class="saveSubmit" :class="{backGround: prompt == true}" @click="gosub">下一步
			</div> -->
			<!-- 改版的按钮 -->
			<div class="saveSubmit" :class="{backGround: prompt == true}" @click="gosub">我已付款
			</div>
		</div>
		<!-- 第二页中间详情部分 -->
		<!-- <div v-else>
			<div class="orderCon">
				<div class="orderImg">
					<img :src="baseUrl + taskDetail.goods_img">
				</div>
				<div class="lookCode" @click="$router.push('/orderCode')">如何查询订单编号>></div>
				<div class="codeInput">
					<input type="text" placeholder="请输入您付款的订单编号" v-model="orderCode">
				</div>
				<div class="prompt">请在<span>{{taskDetail.end_time}}</span>内提交您的编号</div>	
				<div class="prompt">否则任务将自动作废哦！</div>
				<div class="submit" @click="subOrder">提交</div>
				<div class="goback" @click="goback">上一步</div>
			</div>
		</div> -->
		<!-- 弹框 -->
		<div class="stateBox" v-if="showState" @click="showState = false">
			<!-- 审核和删除 -->
			<div class="type1" @click.stop>
				<div class="icon"><img src="../../assets/warning.png"></div>	
				<div class="wen">请确保订单付款后再进行提交哦！</div>
				<div class="butss">
					<div class="ok" @click="ok">确认</div>
					<div class="close" @click="showState = false">取消</div>
				</div>
			</div>
		</div>
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
		.tie{
			margin-top: .85rem;
			width: 100%;
			text-align: center;
			font-size: .28rem;
			color: #333333;
		}
		.taskIcon{
			margin: .22rem auto .3rem;
			width: 2.24rem;
			height: 2.24rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.taskSubname{
			margin-bottom: .1rem; 
			text-align: center;
			font-size:.24rem;
			color:#333333;
		}
	}
	.taskCon{
		padding-left: .58rem;
		padding-bottom: 1rem;
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
			width:100%;
			margin-bottom: .12rem;
			padding-left: .2rem;
			display: flex;
			align-items:center;
			font-size: .26rem;
			.operName{
				width:1.5rem;
				color:#333333;
			}
			.operName1{
				width:2.5rem;
				color:#333333;
			}
			.operSubname{
				color:#ff5858;
				width: 2rem;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}
			.operSubname1{
				width: 4.5rem;
				word-wrap:break-word;
				color:#ff5858;

				-webkit-touch-callout:none;  
				-webkit-user-select:none;  
				-khtml-user-select:none;  
				-moz-user-select:none;  
				-ms-user-select:none;  
				user-select:none;  
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
			.through{
				background-color: green;
			}
			.wei{
				background-color: red;
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
.orderCon{
	margin-top: 1.18rem;
	.orderImg{
		margin: .55rem auto 0;
		width: 2.86rem;
		height: 2.86rem;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.lookCode{
		margin-top: .12rem;
		width: 100%;
		text-align: center;
		font-size: .28rem;
		color:#03abff;
	}
	.codeInput{
		width: 100%;
		text-align: center;
		input{
			outline: none;
			border:1px solid #bfbfbf;
			border-radius: .08rem;
			width: 5.8rem;
			text-align: center;
			height: .68rem;
		}
	}
	.prompt{
		margin-top: .1rem;
		width: 100%;
		text-align: center;
		font-size: .24rem;
		color:#333333;
		span{
			color: #ff5858;
		}
	}
	.submit{
		margin: 1rem auto .2rem;
		border-radius: .08rem;
		background: #03abff;
		width: 2.63rem;
		text-align: center;
		height: .68rem;
		line-height: .68rem;
		font-size: .26rem;
		color:#ffffff;
	}
	.goback{
		margin: 0 auto;
		border-radius: .08rem;
		background: #03abff;
		width: 2.63rem;
		text-align: center;
		height: .68rem;
		line-height: .68rem;
		font-size: .26rem;
		color:#ffffff;
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
import {mapActions, mapGetters} from 'vuex'
import resource from '../../api/resource.js'
import back from '../../common/back.vue'
export default{
	data(){
		return{
			pageType: true,		//默认第一页
			id: "",				//任务id
			taskDetail:{},		//任务详情对象
			keyword: "",		//关键词
			time: "",			//剩余时间
			prompt: false,		//默认未通过验证，下面提示不显示
			shop: "",			//输入的店铺名称
			subShop: "",		//最终提交通过的店铺名称
			shopId: 0,			//验证店铺按钮状态（0：验证，1:成功，2:失败）
			money: "",			//输入的商品金额
			subMoney: "",		//最终提交通过的金额
			wangwang: "",		//旺旺号
			orderCode: "",		//订单编号
			moneyId: 0,			//验证金额按钮状态（0：验证，1:成功，2:失败）
			maxtime: 180,		//时间
			tishi: false,		//默认倒数提示不显示
			time2: "",			//倒数时间
			showState: false,	//弹框默认不显示
			showPrice: false,	//价格区间默认不显示
		}
	},
	watch:{
		//监听输入的店铺名称
		shop:function(n,o){
			if(n != o){
				if(n == this.subShop && n != ""){			//修改后的店铺名和验证通过的用户名一致
					this.shopId = 1;
					this.conPrompt();
				}else{
					this.shopId = 0;
					this.prompt = false;
					this.tishi = false;
				}
			}
			
			// 将用户输入的网址粘贴到输入框内
			// var arr=n.match(/(http|https):\/\/([A-Za-z0-9.\/]+)/);    
			// console.log(arr[0]);
			// this.shop=arr[0];
		},
		//监听输入的金额
		money:function(n,o){
			if(n != o){
				if(n == this.subMoney && n != ""){//修改后的商品金额和验证通过的商品金额一致
					this.moneyId = 1;
					this.conPrompt();
				}else{
					this.moneyId = 0;
					this.prompt = false;
					this.tishi = false;
				}
			}
		}
	},
	computed: {
		...mapGetters([
			'get_route'
			])
	},
	created(){
		document.title = "申请任务";
		// 判断是不是查询订单编号页进来的
		let ordercode = sessionStorage.getItem("ordercode");
		if(!!ordercode){
			this.pageType = false;
			sessionStorage.removeItem("ordercode");
		}
		this.id = this.$route.query.id;
		//获取任务详情
		this.getTaskDetail();
	},
	methods:{
		...mapActions([
			'set_route'
			]),
		//获取任务详情
		getTaskDetail(){
			resource.getTask({usertaskid:this.id}).then(res => {
				if(res.data.code == "0"){
					this.taskDetail = res.data.data;
					this.keyword = res.data.data.keyword;	//关键词
					this.wangwang = res.data.data.wangwang;	//淘宝账号
					let time = res.data.data.end_time;		//任务截止时间
					let time1 = time.replace(/-/g, '/');
					let minPic = this.taskDetail.small_price;	//价格区间
					let maxPic = this.taskDetail.big_price;
					if(minPic == "0" && maxPic == "0"){
						this.showPrice = false;
					}else{
						this.showPrice = true;
					}
					//执行倒数函数
					this.timeDown(time1);
				}else if(res.data.code == "1"){
					this.$router.go(-1);
					this.$toast(res.data.msg);
				}else{
					this.$toast(res.data.msg);
				}		
			});
		},
		//时间倒数
		timeDown(endDateStr) {
			    //相差的总豪秒数
			    var totalSeconds = (new Date(endDateStr) - new Date());
			    if(totalSeconds < 0){
			    	this.giving();
			    }else{
			    //小时数
			    var hours = parseInt(totalSeconds / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时
			    //分钟
			    var minutes = parseInt(totalSeconds / 1000 / 60 % 60, 10);//计算剩余的分钟
			    //秒
			    var seconds = parseInt(totalSeconds / 1000 % 60, 10);//计算剩余的秒数 
			    //输出到页面
			    this.time = this.checkTime(hours) + ":" + this.checkTime(minutes) + ":" + this.checkTime(seconds);
			    let _this = this;
			    setTimeout(function () {
			    	_this.timeDown(endDateStr);
			    }, 1000);
			}
		},
		checkTime(i){ 
			if(i<10){ 
				i = "0" + i; 
			} 
			return i; 
		}, 
		//时间倒数结束后自动取消任务
		giving(){
			resource.abandontask({usertaskid:this.id}).then(res => {
				if(res.data.code == "0"){
					this.selected = "index";
					this.$router.push('/index');
				}else{
					this.$toast(res.data.msg);
				}
			});
		},
		//点击验证店铺名称
		conShop(){
			if(this.shop == ""){
				this.$toast("请输入店铺名称");
			}else if(this.shop.indexOf(" ") != -1){
				this.$toast("店铺名不能包含空格");
			}else{
				let shopNameObj = {
					usertaskid: this.id,
					shop_name: this.shop
				}
				resource.firmShopName(shopNameObj).then(res => {
					if(res.data.code == "0"){
						this.shopId = 1;			//修改验证状态（绿色通过）
						this.subShop = this.shop;	//验证通过再保存
						this.conPrompt();			//统一验证提交按钮是否可点击
					}else{
						this.shopId = 2;			//修改验证状态（红色未通过）
						this.$toast(res.data.msg);
					}
				});
			}
		},
		//点击验证金额
		conMoney(){
			if(this.money == ""){
				this.$toast("请输入商品金额");
			}else{
				let shopMoneyObj = {
					usertaskid: this.id,
					goods_price: this.money
				}
				resource.firmShopMoney(shopMoneyObj).then(res => {
					if(res.data.code == "0"){
						this.moneyId = 1;			//修改验证状态（绿色通过）
						this.subMoney = this.money;	//验证通过再保存
						this.conPrompt();			//统一验证提交按钮是否可点击
					}else{
						this.moneyId = 2;			//修改验证状态（红色未通过）
						this.$toast(res.data.msg);
					}
				});
			}
		},
		//同时验证店铺名和金额控制按钮是否可以显示
		conPrompt(){
			if(this.shopId == 1 && this.moneyId == 1){//如果店铺名和金额都通过验证
				this.CountDown();
			}else{
				this.prompt = false;
				this.tishi = false;
			}
		},
		//单纯分钟和秒倒计时
		CountDown() {
			if(this.shopId == 1 && this.moneyId == 1){//如果店铺名和金额都通过验证
				if(!!localStorage.getItem("maxtime") && this.id == localStorage.getItem("taskid")){
					this.xia(localStorage.getItem("maxtime"));
				}else{
					//js获取当前时间
					var date=new Date();
					//获取当前分钟
					var min=date.getMinutes();
					//设置当前时间+5分钟：把当前分钟数+5后的值重新设置为date对象的分钟数
					date.setMinutes(min+3);
					localStorage.setItem("maxtime",date);
					localStorage.setItem("taskid",this.id);
					this.xia(date);
				}
			}
		},
		xia(sheng){
			//相差的总豪秒数
			var totalSeconds = (new Date(sheng) - new Date());
			if(totalSeconds < 0){
				this.prompt = true;
				this.tishi = false;
			}else{
			    	//小时数
			    var hours = parseInt(totalSeconds / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时
			    //分钟
			    var minutes = parseInt(totalSeconds / 1000 / 60 % 60, 10);//计算剩余的分钟
			    //秒
			    var seconds = parseInt(totalSeconds / 1000 % 60, 10);//计算剩余的秒数 
			    //输出到页面
			    this.prompt = false;
			    this.tishi = true;	
			    this.time2 = minutes + "分" + seconds + "秒";
			    let _this = this;
			    setTimeout(function () {
			    	_this.xia(sheng);
			    }, 1000);
			}
		},
		//点击我已付款
		gosub(){
			if(this.prompt == true){//店铺名和金额都确认通过了
				this.showState = true;
			}else{
				this.$toast("请先通过验证！");
			}
		},
		//点击我已付款的确定
		ok(){
			resource.verify({usertaskid: this.id}).then(res => {
				if(res.data.code == "0"){
					this.set_route("task");
					sessionStorage.setItem("toDetil");
					this.$router.push("task");
				}else{
					this.$toast(res.data.message);
					this.showState = false;
				}
			});
		},
		// 下一步
		// gosub(){
		// 	if(this.prompt == true){//店铺名和金额都确认通过了
		// 		this.pageType = false;
		// 	}else{
		// 		this.$toast("请先通过验证！");
		// 	}
		// },
		//提交订单
		// subOrder(){               
		// 	if(this.orderCode == ""){
		// 		this.$toast("请输入您付款的订单编号");
		// 	}else if(!this.judgmentShopNum.test(this.orderCode)){
		// 		this.$toast("订单编号格式不正确");
		// 	}else{
		// 		let orderObj = {
		// 			usertaskid: this.id,
		// 			order_sn: this.orderCode
		// 		}
		// 		resource.subOrder(orderObj).then(res => {
		// 			if(res.data.code == "0"){
		// 				this.set_route("task");
		// 				this.$router.push("task");
		// 			}else{
		// 				this.$toast(res.data.msg);
		// 			}
		// 		});
		// 	}
		// },
		//上一步
		// goback(){
		// 	this.pageType = true;
		// }
	},
	components:{
		back
	}
}
</script>