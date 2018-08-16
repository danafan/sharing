<template>
	<div class="box">
		<!-- 返回按钮 -->
		<back></back>
		<!-- 顶部时间 -->
		<div class="time">
			<div class="timeIcon">
				<img src="../../assets/task(black).png">
			</div>
			<div class="conTime">剩余时间：{{time}}</div>
		</div>
		<div class="content">
			<div class="item">
				店铺名称：{{title}}
			</div>
			<div class="item">
				订单编号：{{ordersn}}
			</div>
			<div class="item shuo">
				说明：找到上面订单号的订单，用系统提供的图片+评语发布5星好评后提交任务即可！PS：如果接任务前已经好评，使用图片+评语追加评价即可
			</div>
			<div class="imgbox">
				<div class="title">评价图片或视频（图片长按保存）</div>
				<div class="imglist">
					<div class="img" v-for = "item in imgList"><img :src="baseUrl1 + item"></div>
					<div class="video" v-if="video != ''" @click="uploadVideo">下载视频</div>  
				</div>
			</div>
			<div class="evaluation">评语（可复制）</div>
			<div class="evaluationTxt">
				{{content}}
			</div>
		</div>
		<div class="buts">
			<div class="but giving" @click="tan(0)">放弃</div>
			<div class="but submit" @click="tan(1)">提交</div>
		</div>
		<!-- 弹框 -->
		<div class="mondel" v-if="showTan == true" @click="showTan = false">
			<div class="content" @click.stop>
				<div class="icon"><img src="../../assets/assess.png"></div>
				<div class="txt">
					<div class="title">{{toast}}</div>
					<div class="subs">
						<div class="sub qu" @click="showTan = false">取消</div>
						<div class="sub ok" @click="ok">确定</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.box{
	background:#f3f4f5;
	position:absolute;
	top: 0;
	left:0;
	width:100%;
	height:100%;
}
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
	.item{
		border-bottom: 1px solid #e8e8e8;
		padding: .26rem .58rem;
		font-size:.3rem;
		color: #333;
	}
	.shuo{
		color: #ff5858;
	}
	.imgbox{
		.title{
			padding: .26rem .58rem;
			font-size:.3rem;
			color: #333;
		}
		.imglist{
			padding-bottom: .24rem;
			border-bottom: 1px solid #e8e8e8;
			padding-left: .58rem;
			display:flex;
			flex-wrap: wrap;
			.img{
				margin-right:.2rem;
				margin-bottom: .2rem;
				position:relative;
				width:1.46rem;
				height:1.46rem;
				img{
					position:absolute;
					width:100%;
					height:100%;
				}
			}
			.video{
				background: rgba(0,0,0,.6);
				width:1.46rem;
				text-align: center;
				height:1.46rem;
				line-height: 1.46rem;
				font-size:.26rem;
				color: #fff;
			}
		}
	}
	.evaluation{
		padding: .26rem .58rem;
		font-size:.3rem;
		color: #333;
	}
	.evaluationTxt{
		padding-left: .58rem;
		font-size:.28rem;
		color: #666;
	}
}
.buts{
	display:flex;
	position:fixed;
	bottom: 0;
	left:0;
	width:100%;
	height:.92rem;
	font-size:.26rem;
	.but{
		width:50%;
		text-align: center;
		height:.92rem;
		line-height: .92rem;
	}
	.giving{
		border-top: 1px solid #e8e8e8;
		color: #999;
	}
	.submit{
		background:#03abff;
		color: #fff;
	}
}
.mondel{
	background:rgba(0,0,0,.6);
	position:absolute;
	top: 0;
	left:0;
	width:100%;
	height:100%;
	z-index: 1;
	.content{
		position:absolute;
		top: 3.85rem;
		left:50%;
		transform: translate(-50%);
		border-radius: .18rem;
		background:#fff;
		width:6.08rem;
		height:4.18rem;
		.icon{
			position:relative;
			top: -1.33rem;
			left:50%;
			transform:translate(-50%);
			width:3rem;
			height:2.66rem;
			img{
				position:absolute;
				width:100%;
				height:100%;
			}
		}
		.txt{
			margin-top:-1rem;
			.title{
				margin-bottom:.5rem;
				width:100%;
				text-align:center;
				font-size:.3rem;
				color: #03abff;
			}
			.subs{
				display:flex;
				justify-content:center;
				.sub{
					width:1.52rem;
					text-align:center;
					height:.56rem;
					line-height:.56rem;
					font-size:.26rem;
				}
				.qu{
					margin-right:.4rem;
					border:1px solid #03abff;
					border-radius:.04rem;
					color: #03abff;
				}
				.ok{
					border:1px solid #03abff;
					border-radius:.04rem;
					background:#03abff;
					color: #fff;
				}
			}
		}
	}
}
</style>
<script>
	import back from '../../common/back.vue'
	import resource from '../../api/resource.js'
	export default{
		data(){
			return{
			time: "",						//顶部剩余时间
			showTan: false,					//弹框默认不显示
			type: "",						//判断点击的哪一个按钮（0:放弃；1:提交）
			toast: "",						//弹框提示文字
			id: "",							//任务id
			title: "",						//店铺名
			ordersn: "",					//订单编号
			imgList:[],						//图片
			content: "",					//文字
			video:"",						//视频地址
		}
	},
	created(){
		this.id = this.$route.query.id;
		this.getTaskDetail();
	},
	methods:{
		//获取任务详情
		getTaskDetail(){
			resource.evaluatedetail({eva_usertaskid:this.id}).then(res => {
				if(res.data.code == "0"){
					let taskObj = res.data.data;
					this.title = taskObj.shop_name;
					this.ordersn = taskObj.order_sn;
					this.imgList = taskObj.img;
					this.content = taskObj.content;
					if(taskObj.video_url != ""){
						this.video = taskObj.video_url;
					}
					let time1 = taskObj.stale_time;
					//执行倒数函数
					this.timeDown(time1);
				}else{
					this.$toast(res.data.msg);
					this.$router.go(-1);
				}
			})
		},
		//时间倒数
		timeDown(endDateStr) {
			    //相差的总豪秒数
			    var totalSeconds = (new Date(endDateStr)*1000 - new Date());
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
			resource.abandontasks({order_sn:this.ordersn}).then(res => {
				if(res.data.code == "0"){
					this.$toast("已放弃");
					this.$router.go(-1);
				}else{
					this.$toast(res.data.msg);
				}
			})
		},
		//点击下载视频
		uploadVideo(){
			window.location.href = "http://www.52gxk.com/weiapi/evaluatetask/download?url=" + this.baseUrl1 + this.video;
		},
		//点击放弃或者提交按钮
		tan(type){
			this.showTan = true;
			this.type = type;
			if(type == 0){	//放弃
				this.toast = "是否放弃该评价？";
			}else if(type == 1){	//提交
				this.toast = "是否提交该评价？";
			}
		},
		//点击确定
		ok(){
		 	if(this.type == 0){			//放弃
		 		console.log("放弃");
		 		this.giving();
			}else if(this.type == 1){	//提交
				console.log("提交");
				let orderObj = {
					order_sn: this.ordersn,
					eva_usertaskid: this.id
				}
				resource.completeevaluate(orderObj).then(res => {
					if(res.data.code == "0"){
						this.$toast("已提交");
						this.$router.go(-1);
					}else{
						this.$toast(res.data.msg);
					}
				})
			}
			this.showTan = false;
		}
	},
	components:{
		back
	}
}
</script>













