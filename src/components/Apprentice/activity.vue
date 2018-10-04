<template>
	<div>
		<div v-infinite-scroll="loadMore">	
			<div class="title">
				～<div class="flower"><img src="../../assets/flower.png"></div>
				<div class="txt">活动</div>～
			</div>
			<div class="taskList">
				<div class="listNull" v-if="listNull">
					<div class="img"><img src="../../assets/mascot.png"></div>
					<!-- 系统无任务，有时间 -->
					<div class="txt" v-if="toastTxt == '0'">您当前任务已被领完，下一波</div>
					<div class="txt" v-if="toastTxt == '0'">任务来临时间为{{time}}</div>
					<div class="txt" v-if="toastTxt == '0'">任务数量为{{could}}个，请提前做好准备哦～</div>
					<div v-if="toastTxt == '0'">
						<div class="reload" v-if="reload" @click="reloads">轻触刷新</div>	
						<div class="zhuan" v-else>
							<mt-spinner :type="3" color="#03abff"></mt-spinner>	
						</div>
					</div>
					<!-- 已领取任务 -->
					<div class="txt" v-if="toastTxt == '1'">{{toastxt}}</div>
					<!-- 系统无任务 -->
					<div class="txt" v-if="toastTxt == '2'">系统暂时没有发布新任务哦～</div>
				</div>
				<div class="listshow" v-else>
					<div class="taskItem" v-for="item in taskList">
						<!-- 大图 -->
						<div class="itemImg">
							<img class="taskImg" :src="baseUrl + item.goods_img">
							<div class="sha"></div>
						</div>
						<!-- 下面文字部分 -->
						<div class="itemTxt">
							<!-- 左侧 -->
							<div class="txtLeft">
								<div class="leftName">
									<span v-if="item.shop_type == '淘宝'"><img src="../../assets/taobao.png"></span>
									<span v-else><img src="../../assets/tian mao.png"></span>
									<span class="name">{{item.keyword}}</span>
								</div>
								<div class="leftSub">限<span>{{item.num}}</span>份</div>
							</div>
							<!-- 右侧 -->
							<div class="txtRight">
								<div class="application" @click="detail(item.task_id)">申请任务</div>
								<div class="residual">剩余<span>{{item.residue_num}}</span>份</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="less">
.title{
	font-family: "Source Han Sans";
	margin-top: .34rem;
	display: flex;
	justify-content:center;
	align-items:center;
	width: 100%;
	height: .48rem;
	background: #fff;
	font-size: .28rem;
	.flower{
		margin-left: .1rem;
		margin-right: .1rem;
		position: relative;
		width: .34rem;
		height: .36rem;
		display: flex;
		align-items:center; 
		img{
			position: absolute;
			width: 100%;
			height: 100%;
		}
	}
	.txt{
		font-weight: 700;
		margin-right: .1rem;
		color:#333333;
	}
}
.taskList{
	font-family: "Source Han Sans";
	box-sizing: border-box;
	padding: .4rem .24rem .15rem .24rem;
	margin-bottom: .98rem;
	.listNull{
		margin: 1.42rem auto;
		.img{
			margin: 0 auto .32rem;
			width: 2.96rem;
			height: 2.96rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.txt{
			margin-bottom: .1rem;
			text-align: center;
			font-size: .26rem;
			color:#999999;
		}
		.reload{
			margin: .5rem auto 0;
			border: 1px solid #999999;
			width: 2rem;
			text-align: center;
			height: .8rem;
			line-height: .8rem;
			font-size: .28rem;
			color: #999999;
		}
		.zhuan{
			margin-top: .5rem;
			display: flex;
			justify-content: center;
		}
	}
	.listshow{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.taskItem{
			margin-bottom: .22rem;
			width: 3.4rem;
			.itemImg{
				position: relative;
				width: 3.4rem;
				height: 2.8rem;
				.taskImg{
					width: 100%;
					height: 100%;
				}
				.sha{
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					z-index: 999;
				}
			}
			.itemTxt{
				margin-top: .2rem;
				display: flex;
				justify-content: space-between;
				.txtLeft{
					.leftName{
						line-height: 1.6;
						width: 2rem;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 1;
						-webkit-box-orient: vertical;
						font-size: .28rem;
						color: #333333;
						img{
							width: .34rem;
							height: .34rem;
						}
						.name{
							position: relative;
							top: -3px;
							left: -3px;
						}
					}
					.leftSub{
						font-size: .24rem;
						color:#999999;
						span{
							color:#ff5858;;
						}
					}
				}
				.txtRight{
					text-align: end;
					.application{
						border-radius: .04rem;
						width: 1.2rem;
						text-align: center;
						height: .34rem;
						line-height: .34rem;
						background: #03abff;
						font-size: .24rem;
						color: #ffffff;
					}
					.residual{
						position: relative;
						top:5px;
						font-size: .24rem;
						color:#999999;
						span{
							color: #ff5858;
						}
					}
				}
			}
		}
	}
	
}
</style>
<script>
	import {mapActions, mapGetters} from 'vuex'
	import resource from '../../api/resource.js'
	import { Spinner } from 'mint-ui';
	export default{
		data(){
			return{		
			jia: true,							//等到列表接口成功之后再去加载下一页
			subClick: true,						//默认按钮可点击一次
			isLoad: true,						//默认可以加载
			page: 0,							//当前页码
			taskList:[],						//所有任务列表
			listNull: "",						//默认任务列表为空，显示刷新按钮
			toastTxt: "0",						//提示(0:无任务;1:有任务,没到时间;2:已领取任务)
			toastxt: "",						//错误提示
		    time: "",						 	//下一波任务来临时间
		    could: "",							//任务数量
		    reload: true,						//默认显示刷新字
		    isLoads: true,						//默认刷新按钮可以点击
		}
	},  
	created(){
		document.title = "活动";
		this.set_route("activity");
	},
	methods:{
		...mapActions([
			'set_route'
			]),
		//上拉加载
		loadMore(){
			if(this.jia == true){
				//获取任务列表
				if(this.isLoad == true){
					this.page += 1;
					this.getTaskList(this.page);
				}else{
					console.log("没有更多");
				}
			}
		},
		//获取任务列表
		getTaskList(page){
			this.jia = false;
			resource.activity({page:page}).then(res => {
				this.jia = true;
				if(res.data.code == "0"){
					this.listNull = false;
					let taskList = res.data.data;
					let total = res.data.total;
					let lastPage = res.data.last_page;
					if(taskList.length < "6" || total == "6" || lastPage == this.page){	
					// 某一页不足6条
					this.isLoad = false;
					this.taskList = this.taskList.concat(Array.from(taskList));
					}else{								//正常
						this.taskList = this.taskList.concat(Array.from(taskList));
					}
				}else if(res.data.code == "1"){//三天之内已经接过任务
					this.isLoad = false;
					this.listNull = true;
					this.toastTxt = "1";
					this.toastxt = res.data.msg;
				}else{
					this.$toast(res.data.msg);
				}
			})
		},
		//点击申请任务成功后进入详情
		detail(id){
			if(this.subClick == true){
				this.subClick = false;
				resource.applyActiviity({taskid:id}).then(res => {
					if(res.data.code == "0"){
						let taskid = res.data.usertaskid;
						this.$router.push(`/taskDetail?id=${taskid}`);
					}else{
						this.$toast(res.data.msg);
						this.page = 0;
						this.getTaskList(this.page);
						this.subClick = true;	
					}		
				});
			}
		},
		//点击刷新
		// reloads(){
		// 	if(this.isLoads == true){
		// 		this.isLoads = false;
		// 		this.reload = false;	//开始转
		// 		this.page = 1;
		// 		this.getTaskList(this.page);
		// 		let _this = this;
		// 		setTimeout(function(){
		// 			_this.isLoads = true;
		// 		},30000);
		// 	}else{
		// 		this.$toast("操作频繁，稍后再试！");
		// 	}
		// },
		//获取任务列表
		// getTaskList(page){
		// 	this.jia = false;
		// 	resource.activity({page:page}).then(res => {
		// 		this.jia = true;
		// 		this.reload = true;	//结束转
		// 		if(res.data.code == "0"){
		// 			this.listNull = false;
		// 			let taskList = res.data.data.data;
		// 			let total = res.data.data.total;
		// 			let lastPage = res.data.data.last_page;
		// 			if(taskList.length < "6" || total == "6" || lastPage == this.page){	
		// 			// 某一页不足6条
		// 			this.isLoad = false;
		// 			this.taskList = this.taskList.concat(Array.from(taskList));
		// 			}else{								//正常
		// 				this.taskList = this.taskList.concat(Array.from(taskList));
		// 			}
		// 		}else if(res.data.code == "1"){//三天之内已经接过任务
		// 			this.isLoad = false;
		// 			this.listNull = true;
		// 			this.toastTxt = "1";
		// 			this.toastxt = res.data.msg;
		// 		}else if(res.data.code == "2"){//有任务和时间
		// 			this.isLoad = false;
		// 			this.listNull = true;
		// 			this.toastTxt = "0";
		// 			this.time = res.data.data.start_time;
		// 			this.could = res.data.data.num;
		// 		}else if(res.data.code == "3"){//系统无任务
		// 			this.isLoad = false;
		// 			this.listNull = true;
		// 			this.toastTxt = "2";
		// 		}else{
		// 			this.$toast(res.data.msg);
		// 		}
		// 	})
		// },
		

	},
	components:{
		Spinner
	}
}
</script>










