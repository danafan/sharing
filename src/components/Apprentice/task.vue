<template>
	<div>
		<!-- 有任务 -->
		<div v-if="showTask == 1">
			<div class="taskbox">
				<div class="backBox">
					<div class="backImg">
						<img :src="baseUrl + statusObj.goods_img">
					</div>
					<div class="meng"></div>
				</div>
				<div class="bottomBox"></div>
			</div>
			<div class="title" v-if="statusObj.status == '0'">已接未提交</div>
			<div class="title" v-if="statusObj.status == '1'">已提交待审核</div>
			<div class="title" v-if="statusObj.status == '3'">审核未通过</div>
			<!-- 上面的框 -->
			<div class="topBox">
				<div class="icon">
					<img class="aaa" :src="baseUrl + statusObj.goods_img">
				</div>
				<div class="guan">关键词：<span>{{keyword}}</span></div>
				<div class="orderCode" v-if="statusObj.status == '1' || statusObj.status == '3'">旺旺号：<span>{{statusObj.wangwang}}</span></div>
				<div class="orderCode" v-if="statusObj.status == '3'">原因：<span>{{statusObj.reason}}</span></div>
				<div class="toast" v-if="statusObj.status == '0' || statusObj.status == '3'">请在<span>{{statusObj.end_time}}</span>前完成提交任务，</div>
				<div class="toast" v-if="statusObj.status == '0' || statusObj.status == '3'">否则将自动放弃哦～</div>
				<div class="hong" v-if="statusObj.status == '0' && statusObj.task_type == 0">离任务完成还差一步，请提交订单编号</div>
				<div class="hong" v-if="statusObj.status == '0' && statusObj.task_type == 2">离任务完成还差一步，请上传图片</div>
				<div class="buts" v-if="statusObj.status == '0'">
					<div class="hui" @click="giving(1)">放弃任务</div>
					<div class="lan" @click="$router.push(`/taskDetail?id=${statusObj.usertaskid}`)">继续任务</div>
				</div>
				<div class="buts" v-if="statusObj.status == '1'">
					<div class="dai">待审核</div>
				</div>
				<div class="buts" v-if="statusObj.status == '3'">
					<div class="hui" @click="giving(2)">放弃申请</div>
					<div class="lan" @click="$router.push(`/taskDetail?id=${statusObj.usertaskid}`)">重新提交</div>
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
					<img v-if="id == true" src="../../assets/abort mission.png">
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
.taskbox{
	margin-bottom: .98rem;
	.backBox{
		position: relative;
		width: 100%;
		height: 6.94rem;
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
		.meng{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0,0,0,.47);
			z-index: 1;
		}
	}
	.bottomBox{
		background-color: #f3f4f5;
		width: 100%;
		height: 5.45rem;
	}
}
.title{
	position: absolute;
	top: .92rem;
	left: 50%;
	transform:translate(-50%);
	font-size: .3rem;
	color: #ffffff;
	z-index: 2;
}
.topBox{
	position: absolute;
	top: 4.38rem;
	left: 50%;
	transform:translate(-50%);
	z-index: 2;
	border-radius: .28rem;
	background-color: #ffffff;
	width: 6.67rem;
	height: 5.54rem;
	.icon{
		position: relative;
		margin: -1rem auto 0;
		border-radius: .34rem;
		width: 2.94rem;
		height: 2.94rem;
		.aaa{
			border-radius: .34rem;
			width: 100%;
			height: 100%;
		}
	}
	.guan{
		margin: .42rem auto 0;
		width: 5rem;
		text-align: center;
		font-size: .28rem;
		color: #333333;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		span{
			color:#999999;
		}
	}
	.orderCode{
		margin-top: .1rem;
		width: 100%;
		text-align: center;
		font-size: .28rem;
		color: #333333;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		span{
			color:#999999;
		}
	}
	.toast{
		margin-top: .1rem;
		width: 100%;
		text-align: center;
		font-size: .26rem;
		color: #333333;
		span{
			color:#ff5858;
		}
	}
	.hong{
		margin-top: .18rem;
		width: 100%;
		text-align: center;
		font-size: .24rem;
		color: #ff5858;
	}
	.buts{
		margin-top: .2rem;
		display: flex;
		justify-content: center;
		div{
			border-radius: .04rem;
			font-size: .28rem;
			width: 1.9rem;
			text-align: center;
			height: .64rem;
			line-height: .64rem;
		}
		.hui{
			margin-right: .16rem;
			border: 1px solid #dbdbdb;
			color: #dbdbdb;
		}
		.lan{
			border: 1px solid #03abff;
			background-color: #03abff;
			color: #ffffff;
		}
		.dai{
			background-color: #dfdfdf;
			box-shadow: 0 .02rem .2rem #dfdfdf;
			color: #ffffff;
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
			keyword: "",			//关键词
			showTask: 0,			//默认有任务
			statusObj: {},			//任务进度对象
			showState: false,		//弹框默认不显示
			id: true,				//弹框标签默认放弃任务
			mess: "",				//弹框提示语
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
		//获取任务进度
		getTaskStatus(){
			resource.taskStatus().then(res => {
				if(res.data.code == "0"){
					this.showTask = 1;
					this.statusObj = res.data.data;
					this.keyword = this.statusObj.keyword;
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
		giving(id){
			this.showState = true;
			if(id == 1){
				this.mess = "确认放弃任务？";
				this.id = true;
			}else if(id == 2){
				this.mess = "确认放弃申请？";
				this.id = false;
			}
		},
		//点击放弃任务或放弃申请的确定
		ok(){
			let usertaskid = this.statusObj.usertaskid;
			resource.abandontask({usertaskid:usertaskid}).then(res => {
				if(res.data.code == "0"){
					this.showState = false;
					this.getTaskStatus();
				}else{
					this.$toast(res.data.msg);
				}
			});
		}
	}
}
</script>