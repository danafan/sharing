<template>
	<div>
		<div>
			<div class="banner">
				<swiper :options="swiperOption" ref="mySwiper">
					<swiper-slide v-for="(item,index) in banner">
						<img v-if="index == 0" :src="item.img_url" @click="$router.push('/taskRole')">
						<img v-else :src="item.img_url">
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>			
			<div class="taskList">
				<!-- 普通任务或搜索任务 -->
				<div class="tabBox">
					<div class="item" :class="{'selItem':selTab == 0}" @click="selTab = 0">普通任务</div>
					<div class="item" :class="{'selItem':selTab == 2}" @click="selTab = 2">搜索任务</div>
				</div>
				<div class="listNull" v-if="listNull == true">
					<div class="buttons1">申请任务</div>
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
					<!-- 现在不能接任务 -->
					<div class="txt" v-if="toastTxt == '1'">{{toastxt}}</div>
				</div>
				<div class="listshow" v-if="listNull == false">
					<div class="buttons" @click="application" v-clipboard="message">{{butTxt}}</div>
					<div class="txt">
						<div class="wei" v-if="shen">总任务数量为{{could}}个，当前排队人数为{{ren}}个</div>
						<div class="yi" v-else>
							<div>
								您当前已等待{{showTime}}，如若申请成功，
							</div>
							<div>
								微信将会给您提示，请您耐心等待哦～
							</div>
						</div>
					</div>	
				</div>
			</div>
		</div>
		<!-- 放弃任务弹框部分 -->
		<div class="stateBox" v-if="showState" @click="showState = false">
			<!-- 审核和删除 -->
			<div class="type1" @click.stop>
				<div class="icon"><img src="../../assets/wait.png"></div>	
				<div class="wen">
					<div>确认放弃排队，放弃以后</div>
					<div>您将重新进行排队？</div>
				</div>
				<div class="butss">
					<div class="ok" @click="ok">确认</div>
					<div class="close" @click="showState = false">取消</div>
				</div>
			</div>
		</div>
		<!-- 公告弹框部分 -->
		<div class="bulletinBox" v-if="showBull" @click="showBull = false">
			<div class="inform" @click.stop>
				<img src="../../assets/inform.png">
			</div>
			<div class="bulletin" @click.stop>
				<div class="bulletinTie">公告</div>
				<div class="bullTxt">
					{{bulletinTxt}}
				</div>
				<div class="bullBut" @click="showBull = false">朕已阅</div>
			</div>
		</div>
		<!-- 未绑定手机号提示框 -->
		<div class="bindBox" v-if="showBind">
			<!-- 审核和删除 -->
			<div class="type1" @click.stop>
				<div class="icon"><img src="../../assets/mobile-phone.png"></div>	
				<div class="wen">
					<div>请绑定手机号</div>
					<div class="ti">您还没有绑定手机号，任务将受限制</div>
					<div class="ti">请前去绑定吧！</div>
				</div>
				<div class="butss">
					<div class="ok" @click="$router.push('/code?tab=con')">绑定手机</div>
				</div>
			</div>
		</div>
		<!-- 未实名认证弹框 -->
		<div class="bindBox" v-if="showCer">
			<!-- 审核和删除 -->
			<div class="type2" @click.stop>
				<div class="icon"><img src="../../assets/certification.png"></div>	
				<div class="wen">
					<div>实名认证</div>
					<div class="ti">根据国家法律规定互联网账号必须经过实名认证，为确保账户正常使用及账户安全请尽快完成实名</div>
				</div>
				<div class="butss">
					<div class="ok" @click="$router.push('/certification')">去认证</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="less">
.banner{
	width: 100%;
	height: 2.96rem;
	.swiper-container{
		width: 100%;
		height: 100%;
		.swiper-slide{
			width: 100%;
			height: 100%; 
			img{
				width: 100%;
				height: 100%;
			}
		}
		.swiper-pagination{
			height: .001rem;
			bottom: 70px;
		}
	}
}
.taskList{
	height:100%;
	box-sizing: border-box;
	margin-bottom: .98rem;
	.tabBox{
		display:flex;
		align-items: center;
		justify-content:space-around; 
		font-size: .3rem;
		color: #333;
		height: 1rem;
		.item{
			padding-bottom: .05rem;
		}
		.selItem{
			color: #03abff;
			border-bottom: .04rem solid #03abff;
		}
	}
	.listNull{
		margin: 1.42rem auto;
		.buttons1{
			display:flex;
			align-items:center;
			justify-content:center;
			margin: 1.66rem auto .5rem;
			border-radius: 50%;
			width:2.62rem;
			height:2.62rem;
			background: -webkit-linear-gradient(#eee, #eee); /* Safari 5.1 - 6.0 */
			background: -o-linear-gradient(#eee, #eee); /* Opera 11.1 - 12.0 */
			background: -moz-linear-gradient(#eee, #eee); /* Firefox 3.6 - 15 */
			background: linear-gradient(#eee, #eee); /* 标准的语法 */
			box-shadow: 0 .08rem .4rem #eee;
			font-size:.32rem;
			color: #fff;
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
		.buttons{
			display:flex;
			align-items:center;
			justify-content:center;
			margin: 1.66rem auto 0;
			border-radius: 50%;
			width:2.62rem;
			height:2.62rem;
			background: -webkit-linear-gradient(#66a6ff, #89f7fe); /* Safari 5.1 - 6.0 */
			background: -o-linear-gradient(#66a6ff, #89f7fe); /* Opera 11.1 - 12.0 */
			background: -moz-linear-gradient(#66a6ff, #89f7fe); /* Firefox 3.6 - 15 */
			background: linear-gradient(#66a6ff, #89f7fe); /* 标准的语法 */
			box-shadow: 0 .08rem .4rem #89f7fe;
			font-size:.32rem;
			color: #fff;
		}
		.txt{
			margin-top:.5rem;
			width:100%;
			font-size: .28rem;
			color: #666;
			text-align: center;
		}
	}
}
// 取消任务弹框
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
			width: 2rem;
			height: 1.76rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.wen{
			position: absolute;
			top: 1.2rem;
			width: 100%;
			text-align: center;
			font-size: .28rem;
			color: #03abff;
		}
		.butss{
			position: absolute;
			top: 2.3rem;
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
// 公告弹框
.bulletinBox{
	background:rgba(0,0,0,.66);
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	.inform{
		position:absolute;
		top: 3.1rem;
		left:.56rem;
		width:2.36rem;
		height:2.36rem;
		img{
			width:100%;
			height:100%;
		}
	}
	.bulletin{
		margin: 4.66rem auto 0;
		background:#fff;
		border-radius: .16rem;
		width: 4.7rem;
		padding-bottom: .3rem;
		// height:4.44rem;
		.bulletinTie{
			font-size:.3rem;
			color:#FFF;
			border-radius: .16rem .16rem 0 0;
			background:#03abff;
			width: 4.7rem;
			text-align:center;
			height:1.12rem;
			line-height:1.12rem;
		}
		.bullTxt{
			margin: .6rem auto 0;
			width:4.2rem;
			text-align:center;
			font-size:.28rem;
			color: #03abff;
		}
		.bullBut{
			margin:.6rem auto .3rem;
			border-radius:.2rem;
			background:#03abff;
			width:3.42rem;
			text-align:center;
			height:.46rem;
			line-height:.46rem;
			font-size:.26rem;
			color: #fff;
		}
	}
}
// 取消任务弹框
.bindBox{
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
			width: 2rem;
			height: 1.68rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.wen{
			position: absolute;
			top: .9rem;
			width: 100%;
			text-align: center;
			font-size: .3rem;
			color: #03abff;
			.ti{
				font-size:.26rem;
				color: #666;
			}
		}
		.butss{
			position: absolute;
			top: 2.3rem;
			left: 50%;
			transform: translate(-50%);
			display: flex;
			.ok{
				border-radius: .04rem;
				background-color: #03abff;
				width: 1.4rem;
				text-align: center;
				height: .45rem;
				line-height: .45rem;
				font-size: .26rem;
				color:#ffffff;
			}
		}
	}
	.type2{
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
			width: 2rem;
			height: 1.68rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.wen{
			position: absolute;
			top: .9rem;
			width: 100%;
			text-align: center;
			font-size: .3rem;
			color: #03abff;
			.ti{
				margin: .05rem auto 0;
				width: 90%;
				font-size:.26rem;
				color: #666;
			}
		}
		.butss{
			position: absolute;
			top: 2.6rem;
			left: 50%;
			transform: translate(-50%);
			display: flex;
			.ok{
				border-radius: .04rem;
				background-color: #03abff;
				width: 1.4rem;
				text-align: center;
				height: .45rem;
				line-height: .45rem;
				font-size: .26rem;
				color:#ffffff;
			}
		}
	}
}
</style>
<script>
	import {mapActions, mapGetters} from 'vuex'
	import { swiper, swiperSlide } from "vue-awesome-swiper"
	import resource from '../../api/resource.js'
	export default{
		data(){
			return{		
			subClick: true,							//默认按钮可点击一次
			banner: [],
			listNull: 3,							//默认任务列表为空，显示刷新按钮
			toastTxt: "0",							//提示(0:无任务;1:有任务,没到时间;2:已领取任务)
			toastxt: "",							//错误提示
			swiperOption: {                   
		    	loop: true,                          //循环播放
		        initialSlide: 0,					 //默认显示第一个图片
		        autoplay: 3000,                      //自动播放间隔时间
		        setWrapperSize: true,				 //flex布局
		        pagination: '.swiper-pagination',	 //分页器
		        paginationClickable: true,           //点击某一个圆点跳转到相应图片
		        autoplayDisableOnInteraction: false  //操作之后会继续自动滑动
		    },
		    time: "",						 		 //下一波任务来临时间
		    shen: true,								 //默认当前有任务可以申请
		    could: "",							 	 //当前任务总数量
		    ren: "",								 //当前排队人数
		    reload: true,							 //默认显示刷新字
		    isLoads: true,							 //默认刷新按钮可以点击
		    butTxt: "申请任务",						 //中间按钮的文字
		    showState: false,						 //默认取消排队弹框不显示
		    applyTime: "",							 //任务申请成功的时间
		    showTime: "",							 //计算好的已等待的时间
		    showBull: false,						 //公告默认不显示
		    bulletinTxt: "注意，注意，每月本金可立马提现，佣金每月1-3号可提现哦～",  //公告内容
		    showBind: false,						 //默认未绑定手机号弹框不显示
		    message: "",							 //复制的淘链接
		    showCer: false,						     //未实名认证弹框默认不显示
		    selTab: 0,								 //默认选中普通任务
		}
	},  
	created(){
		document.title = "首页";
		this.set_route("index");
		// 获取首页任务列表
		this.getTaskList();
		//获取首页公告
		this.publishs();
		//获取首页banner
		this.getBanner();
		//判断用户是否关联了手机号
		this.isbindphone();
	},
	watch:{
		selTab:function(n){
			//获取任务列表
			this.getTaskList();
		}
	},
	methods:{
		...mapActions([
			'set_route'
			]),
		//点击刷新
		reloads(){
			if(this.isLoads == true){
				this.isLoads = false;
				this.reload = false;	//开始转
				this.getTaskList();
				let _this = this;
				setTimeout(function(){
					_this.isLoads = true;
				},5000);
			}else{
				this.$toast("操作频繁，稍后再试！");
			}
		},
		//获取banner
		getBanner(){
			let uid = sessionStorage.getItem("uid");
			resource.getBanner({userid:uid}).then(res => {
				if(res.data.code == "0"){
					this.banner = res.data.data.res;
					this.banner.unshift({img_url:require('../../assets/background2.png')});
					this.message = res.data.copy_code;
				}else{
					console.log("无banner");
				}
			})
		},
		//判断用户是否关联了手机号
		isbindphone(){
			resource.isbindphone().then(res => {
				if(res.data.code == "0"){
					this.showBind = true;
				}else{
					console.log(res.data.msg);
				}
			});
		},
		//获取公告
		publishs(){
			resource.publish().then(res => {
				if(res.data.code == "0"){
					let sessionPubid = localStorage.getItem("pubId");
					let pubid = res.data.data.id;
					if(!!pubid && sessionPubid != pubid){
						this.showBull = true;
						this.bulletinTxt = res.data.data.content;
						localStorage.setItem("pubId",res.data.data.id);
					}else if(!pubid){
						this.showBull = true;
						this.bulletinTxt = res.data.data.content;
						localStorage.setItem("pubId",res.data.data.id);
					}else{
						this.showBull = false;
					}
				}else{
					console.log("无公告");
				}
			})
		},
		//获取任务列表
		getTaskList(){
			resource.taskList({task_type:this.selTab}).then(res => {
				this.reload = true;						//结束转
				if(res.data.code == "0"){				//可以申请任务
					this.listNull = false;
					this.could = res.data.task_num;
					this.ren = res.data.user_num;
					this.shen = true;
					this.butTxt = " 申请任务";
				}else if(res.data.code == "1"){			//三天之内已经接过任务或系统无任务
					this.listNull = true;				//不显示大按钮
					this.toastTxt = "1";
					this.toastxt = res.data.msg;
				}else if(res.data.code == "2"){			//有任务和时间
					this.listNull = true;				//不显示大按钮
					this.toastTxt = "0";
					this.time = res.data.data.start_time;
					this.could = res.data.data.num;
				}else if(res.data.code == "3"){			//排队中
					//排队成功的时间
					this.applyTime = parseInt(res.data.apply_time);
					//计算与此时的时间差并且展示到页面
					this.chaTime();
					this.listNull = false;
					this.shen = false;
					this.butTxt = "排队中";
				}else{
					this.$toast(res.data.msg);
				}
			})
		},
		//点击中间大按钮
		application(){
			if(this.shen == true){	//申请任务
				resource.taskDetail({task_type:this.selTab}).then(res => {
					if(res.data.code == "0"){
						//排队成功的时间
						this.applyTime = res.data.apply_time;
						//计算与此时的时间差并且展示到页面
						this.chaTime();
						// 修改状态
						this.shen = false;
						this.butTxt = "排队中";
					}else{
						this.getTaskList();
						this.$toast(res.data.msg);
					}
				});
			}else{					//排队中
				this.showState = true;
			}
		},
		chaTime(){
			var date = new Date(this.applyTime * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
			let Y = date.getFullYear() + '/';
			let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '/';
			let D = date.getDate() + ' ';
			let h = date.getHours() + ':';
			let m = date.getMinutes() + ':';
			let s = date.getSeconds();
			let shi = Y + M + D + h + m + s;
			var totalSeconds = (new Date() - new Date(shi));
			//小时数
			var hours = parseInt(totalSeconds / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时
			//分钟
			var minutes = parseInt(totalSeconds / 1000 / 60 % 60, 10);//计算剩余的分钟
			//秒
			var seconds = parseInt(totalSeconds / 1000 % 60, 10);//计算剩余的秒数 
			//输出到页面
			this.showTime = this.checkTime(hours) + ":" + this.checkTime(minutes) + ":" + this.checkTime(seconds);
			let _this = this;
			setTimeout(function () {
				_this.chaTime();
			}, 1000);
		},
		checkTime(i){ 
			if(i<10){ 
				i = "0" + i; 
			} 
			return i; 
		}, 
		//点击确认放弃排队
		ok(){
			resource.abandTask().then(res => {
				if(res.data.code == "0"){
					this.$toast("放弃成功!");
					this.showState = false;
					this.getTaskList();
				}else{
					this.showState = false;
					this.getTaskList();
					this.$toast(res.data.msg);
				}
			});
		}

	},
	components:{
		swiper,
		swiperSlide
	}
}
</script>










