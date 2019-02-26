<template>
	<div>
		<!-- 有任务 -->
		<div class="box" v-if="showTask == 1" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false">
			<div class="taskItem" v-for="item in taskList">
				<div class="top">
					<div class="imgs">
						<img class="type" src="../../assets/task0.png" v-if="item.task_type === 0">
						<img class="type" src="../../assets/task1.png" v-if="item.task_type === 1">
						<img class="type" src="../../assets/task2.png" v-if="item.task_type === 2">
						<img class="icons" :src="item.goods_img">
					</div>
					<div class="content">
						<div class="txt">
							<div class="titles">关键词：</div>
							<div class="cons">{{item.keyword}}</div>
						</div>
						<div class="txt">
							<div class="titles">状态：</div>
							<div class="consred">{{item.status_name}}</div>
						</div>
						<div class="txt" v-if="item.status === 3">
							<div class="titles">原因：</div>
							<div class="cons">{{item.reason}}</div>
						</div>
						<div class="txt">
							<div class="titles">申请时间：</div>
							<div class="cons">{{item.apply_time}}</div>
						</div>
					</div>
				</div>
				<div class="center" v-if="item.status !== 1">
					请在 <span>{{item.end_time}}</span> 前完成提交任务，否则将自动放弃！
				</div>
				<div class="buts" v-if="item.status === 3">
					<div class="but leftBut" @click="giving(2,item.usertaskid)">放弃申请</div>
					<div class="but rightBut" @click="$router.push(`/taskDetail?id=${item.usertaskid}`)">重新提交</div>
				</div>
				<div class="buts" v-if="item.status === 1">
					<div class="but haha">待审核</div>
				</div>
				<div class="buts" v-if="item.status === 0">
					<div class="but leftBut" @click="giving(1,item.usertaskid)">放弃任务</div>
					<div class="but rightBut" @click="$router.push(`/taskDetail?id=${item.usertaskid}`)">继续任务</div>
				</div>
			</div>
		</div>
		<!-- 没有任务 -->
		<div class="untask" v-if="showTask == 2">
			<div class="img">
				<img src="../../assets/picture 2.png">
			</div>
			<div class="txt">没有正在执行的任务哦，马上去申请</div>
			<div class="gotask" @click="gotask">去申请</div>
		</div>
		<!-- 弹框 -->
		<div class="stateBox" v-if="showState">
			<!-- 审核和删除 -->
			<div class="type1">
				<div class="icon">
					<img v-if="ballType == true" src="../../assets/abort mission.png">
					<img v-else src="../../assets/abandon applicaton.png">
				</div>	
				<div class="wen">{{mess}}</div>
				<div class="buts">
					<div class="ok" @click="ok">确认</div>
					<div class="close" @click="showState = false">取消</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
// 弹框
.stateBox{
	background:rgba(0,0,0,.66);
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 6;
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
		.buts{
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
// 新版
.box{
	padding: .1rem .1rem 1.08rem .1rem;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	-webkit-overflow-scrolling:touch;
	.taskItem{
		border-radius: .08rem;
		margin-bottom: .12rem;
		padding: .14rem;
		background: #fff;
		width: 100%;
		.top{
			display: flex;
			.imgs{
				margin-right: .22rem;
				position: relative;
				width: 1.48rem;
				height: 1.44rem;
				.type{
					position: absolute;
					top: -.04rem;
					left: -.04rem;
					display: block;
					width: 1.06rem;
					height: .92rem;
					z-index: 1;
				}
				.icons{
					position: absolute;
					top: 0;
					left: 0;
					border-radius: .08rem;
					display: block;
					width: 1.48rem;
					height: 1.44rem;
				}
			}
			.content{
				flex:1;
				.txt{
					display: flex;
					font-size: .28rem;
					.titles{
						max-width: 1.5rem;
						color: #000;
					}
					.cons{
						flex:1;
						color: #666666;
					}
					.consred{
						flex:1;
						color: #ff5858;
					}
				}
			}
		}
		.center{
			margin-top: .1rem;
			font-size: .24rem;
			color: #666;
			span{
				color: #ff5858;
			}
		}
		.buts{
			margin-top: .18rem;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.but{
				width: 1.28rem;
				text-align:center;
				height: .4rem;
				line-height: .38rem;
				font-size: .26rem;
			}
			.leftBut{
				border: 1px solid #999;
				border-radius: .2rem;
				color: #999;
			}
			.haha{
				border: 1px solid #dddddd;
				background:#dddddd;
				border-radius: .2rem;
				color: #fff;
			}
			.rightBut{
				margin-left: .16rem;
				border: 1px solid #03abff;
				background:#03abff;
				border-radius: .2rem;
				color: #fff;
			}
		}
	}
}
.untask{
	.img{
		margin: 2.82rem auto 0;
		width: 4.06rem;
		height: 3.86rem;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.txt{
		margin-top: .24rem;
		width: 100%;
		text-align: center;
		font-size: .24rem;
		color: #999999;
	}
	.gotask{
		border-radius: .04rem;
		background-color: #03abff;
		box-shadow: 0 .02rem .2rem rgb(110,189,243);
		margin:.24rem auto 0;
		width: 6.54rem;
		text-align: center;
		height: .9rem;
		line-height: .9rem;
		font-size: .26rem;
		color:#ffffff;
	}
}

</style>
<script>
	import resource from '../../api/resource.js'
	import {mapActions, mapGetters} from 'vuex'
	export default{
		data(){
			return{
				taskList:[],			//任务列表
				taskId:"",				//点击的任务id
				showTask: 0,			//默认有任务
				showState: false,		//弹框默认不显示
				ballType: true,			//弹框标签默认放弃任务
				mess: "",				//弹框提示语
				page:1,
				isLoad:true,
			}
		},
		created(){
			document.title = "任务进度";
			this.set_route("task");
			//获取任务进度
			this.getTaskStatus();
			//如果从任务详情过来的，直接定位到首页
			let _this = this;
			window.addEventListener("popstate", function(e) { 
				if(!!sessionStorage.getItem("toDetil")){
					sessionStorage.removeItem("toDetil");
					_this.set_route("index");
					_this.$router.push("index");
				}
			}, false); 
		},
		methods:{
			...mapActions([
				'set_route'
				]),
			//上拉加载
			loadMore(){
				if(this.isLoad == true){
					this.page += 1;
					//获取任务进度
					this.getTaskStatus();
				}
			},
			//获取任务进度
			getTaskStatus(){
				resource.taskStatus({page:this.page,pagesize:8}).then(res => {
					let data = res.data.data;
					if(res.data.code == "0"){
						let tasklist = data.data;
						this.taskList = this.taskList.concat(Array.from(tasklist));
						if(this.page == data.last_page){
							this.isLoad = false;
						}else{
							this.isLoad = true;
						}
						this.showTask = 1;
					}else if(res.data.code == "1"){
						this.showTask = 2;
					}else{
						this.$toast(res.data.msg);
					}
				});
			},
			//点击去申请
			gotask(){
				this.set_route("index");
				this.$router.push("index");
			},
			//点击放弃任务或放弃申请
			giving(type,id){
				this.taskId = id;
				this.showState = true;
				if(type == 1){
					this.mess = "确认放弃任务？";
					this.ballType = true;
				}else if(type == 2){
					this.mess = "确认放弃申请？";
					this.ballType = false;
				}
			},
			//点击放弃任务或放弃申请的确定
			ok(){
				resource.abandontask({usertaskid:this.taskId}).then(res => {
					if(res.data.code == "0"){
						this.$toast("操作成功！");
						this.showState = false;
						this.taskList = [];
						this.page = 1;
						this.getTaskStatus();
					}else{
						this.$toast(res.data.msg);
					}
				});
			}
		}
	}
</script>