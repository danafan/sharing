<template>
	<div>
		<!-- 返回按钮 -->
		<back></back>
		<!-- 上边背景 -->
		<div class="backImg">
			<img class="helpimg" src="../../assets/helpcon.png">
			<div class="shang">
				<div class="qqimg"><img src="../../assets/Qqq.png"></div>
				<div class="consultation">QQ咨询</div>
				<div class="conTime">咨询时间为：10:00 - 19:00</div>
				<div class="nowCon" @click="goQQ">立即咨询</div>
			</div>
		</div>
		<!-- 标题 -->
		<div class="title">- 常见热门问题 -</div>
		<!-- 下面列表 -->
		<div class="problemList">
			<!-- 问题1 -->
			<div class="itemBox">
				<div class="wen">
					<div class="fire"><img src="../../assets/fire.png"></div>
					<div class="itemTie">微信登陆后提示无法登陆，参数异常？</div>
					<div class="jian" @click="switchType(1)">
						<img src="../../assets/jians.png" v-if="showClick == '1'">
						<img src="../../assets/pull-down.png" v-else>
						
					</div>
				</div>
				<div class="da" v-if="showClick == '1'">修改微信昵称，去掉特殊符号</div>
			</div>
			<!-- 问题2 -->
			<div class="itemBox">
				<div class="wen">
					<div class="fire"><img src="../../assets/fire.png"></div>
					<div class="itemTie">微信登陆后提示无法登陆，有提示相对应的原因</div>
					<div class="jian" @click="switchType(2)">
						<img src="../../assets/jians.png" v-if="showClick == '2'">
						<img src="../../assets/pull-down.png" v-else>
					</div>
				</div>
				<div class="da" v-if="showClick == '2'">看提示的原因，是待审核还是黑名单，审核不通过的发旺旺号给管理员解决</div>
			</div>
			<!-- 问题3 -->
			<div class="itemBox">
				<div class="wen">
					<div class="fire"><img src="../../assets/fire.png"></div>
					<div class="itemTie">注册页面提示‘推荐人代号不正确’</div>
					<div class="jian" @click="switchType(3)">
						<img src="../../assets/jians.png" v-if="showClick == '3'">
						<img src="../../assets/pull-down.png" v-else>
					</div>
				</div>
				<div class="da" v-if="showClick == '3'">检查推荐人代号填写是否以G开头，有无空格</div>
			</div>
			<!-- 问题4 -->
			<div class="itemBox">
				<div class="wen">
					<div class="fire"><img src="../../assets/fire.png"></div>
					<div class="itemTie">注册页面提示‘请填写正确的师父信息’</div>
					<div class="jian" @click="switchType(4)">
						<img src="../../assets/jians.png" v-if="showClick == '4'">
						<img src="../../assets/pull-down.png" v-else>
					</div>
				</div>
				<div class="da" v-if="showClick == '4'">检查推荐人的用户名，填写有无错误</div>
			</div>
			<!-- 问题5 -->
			<div class="itemBox">
				<div class="wen">
					<div class="fire"><img src="../../assets/fire.png"></div>
					<div class="itemTie">关联时提示账号不存在，后台检查无误</div>
					<div class="jian" @click="switchType(5)">
						<img src="../../assets/jians.png" v-if="showClick == '5'">
						<img src="../../assets/pull-down.png" v-else>
					</div>
				</div>
				<div class="da" v-if="showClick == '5'">账号前后有空格，发管理员对应旺旺号说明问题</div>
			</div>
			<!-- 问题6 -->
			<div class="itemBox">
				<div class="wen">
					<div class="fire"><img src="../../assets/fire.png"></div>
					<div class="itemTie">账号有符号，无法登陆</div>
					<div class="jian" @click="switchType(6)">
						<img src="../../assets/jians.png" v-if="showClick == '6'">
						<img src="../../assets/pull-down.png" v-else>
					</div>
				</div>
				<div class="da" v-if="showClick == '6'">发管理员对应旺旺号说明问题</div>
			</div>
			<!-- 问题7 -->
			<div class="itemBox">
				<div class="wen">
					<div class="fire"><img src="../../assets/fire.png"></div>
					<div class="itemTie">关联后提示无法登陆，账号为‘待审核’、‘黑名单’等状态，后台查询却是通过</div>
					<div class="jian" @click="switchType(7)">
						<img src="../../assets/jians.png" v-if="showClick == '7'">
						<img src="../../assets/pull-down.png" v-else>
					</div>
				</div>
				<div class="da" v-if="showClick == '7'">出现这种状况99%的原因是绑定错账号了，发管理员对应旺旺号说明问题</div>
			</div>
			<!-- 问题8 -->
			<div class="itemBox">
				<div class="wen">
					<div class="fire"><img src="../../assets/fire.png"></div>
					<div class="itemTie">进入首页显示系统无任务</div>
					<div class="jian" @click="switchType(8)">
						<img src="../../assets/jians.png" v-if="showClick == '8'">
						<img src="../../assets/pull-down.png" v-else>
					</div>
				</div>
				<div class="da" v-if="showClick == '8'">如果确认当前是有任务的情况下，发管理员对应旺旺号说明问题</div>
			</div>
			<!-- 问题9 -->
			<div class="itemBox">
				<div class="wen">
					<div class="fire"><img src="../../assets/fire.png"></div>
					<div class="itemTie">为什么有些人任务需要抢，而有些人首页任务却很多</div>
					<div class="jian" @click="switchType(9)">
						<img src="../../assets/jians.png" v-if="showClick == '9'">
						<img src="../../assets/pull-down.png" v-else>
					</div>
				</div>
				<div class="da" v-if="showClick == '9'">限制的7天不能接同店铺的任务（首页也不会显示），这种情况是7天内做过同一个店铺的任务了</div>
			</div>
			<!-- 问题10 -->
			<div class="itemBox">
				<div class="wen">
					<div class="fire"><img src="../../assets/fire.png"></div>
					<div class="itemTie">提交订单号的时候直接提示与绑定旺旺号不匹配，无法提交</div>
					<div class="jian" @click="switchType(10)">
						<img src="../../assets/jians.png" v-if="showClick == '10'">
						<img src="../../assets/pull-down.png" v-else>
					</div>
				</div>
				<div class="da" v-if="showClick == '10'">每一个用户的旺旺号都有唯一的订单号后4位，这种提示是因为提交的订单号与系统绑定的后4位不一致，确定旺旺号没错的情况下发管理员对应旺旺号说明问题</div>
			</div>
			<!-- 问题11 -->
			<div class="itemBox">
				<div class="wen">
					<div class="fire"><img src="../../assets/fire.png"></div>
					<div class="itemTie">提交后被拒绝，提示旺旺号不一致</div>
					<div class="jian" @click="switchType(11)">
						<img src="../../assets/jians.png" v-if="showClick == '11'">
						<img src="../../assets/pull-down.png" v-else>
					</div>
				</div>
				<div class="da" v-if="showClick == '11'">这种情况发管理员对应订单编号说明问题</div>
			</div>
			<!-- 问题12 -->
			<div class="itemBox">
				<div class="wen">
					<div class="fire"><img src="../../assets/fire.png"></div>
					<div class="itemTie">提交后被拒绝，提示订单号错误</div>
					<div class="jian" @click="switchType(12)">
						<img src="../../assets/jians.png" v-if="showClick == '12'">
						<img src="../../assets/pull-down.png" v-else>
					</div>
				</div>
				<div class="da" v-if="showClick == '12'">1.可能是订单号打错了</div>
				<div class="da" v-if="showClick == '12'">2.不是我们公司店铺购买的订单号</div>
				<div class="da" v-if="showClick == '12'">3.订单没付款</div>
				<div class="da" v-if="showClick == '12'">4.发货系统没同步更新(极少情况会出现)</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="less">
.backImg{
	position: relative;
	width: 100%;
	height: 3.2rem;
	.helpimg{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.shang{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		.qqimg{
			margin: .46rem auto 0;
			position: relative;
			width: .8rem;
			height: .88rem;
			img{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		}
		.consultation{
			margin-top: .1rem;
			width: 100%;
			text-align: center;
			font-size: .26rem;
			color: #fff;
		}
		.conTime{
			margin-top: .1rem;
			width: 100%;
			text-align: center;
			font-size: .24rem;
			color: #fff;
		}
		.nowCon{
			margin: .1rem auto 0;
			border-radius: .04rem;
			border: 1px solid #fff;
			width: 1.48rem;
			text-align: center;
			height: .42rem;
			line-height: .42rem;
			font-size: .26rem;
			color: #fff;
		}
	}
}
.title{
	margin-top: .66rem;
	margin-bottom: .16rem;
	display: flex;
	align-items: center;
	justify-content: center; 
	width: 100%;
	font-size: .3rem;
	font-weight: bold;
	color: #333;
}
.problemList{
	margin-bottom:1.46rem;
	.itemBox{
		border-bottom: 1px solid #f4f4f4;
		padding-top:.26rem;
		padding-bottom: .26rem;
		margin-left: .26rem;
		.wen{
			display: flex;
			align-items:center;
			padding-right: .34rem;
			.fire{
				position: relative;
				width: .56rem;
				height: .56rem;
				margin-right: .1rem;
				img{
					position: absolute;
					width: 100%;
					height: 100%;
				}
			}
			.itemTie{
				width: 5.88rem;
				font-size: .28rem;
				color: #666;
			}
			.jian{
				margin-left: .2rem;
				position: relative;
				width: .36rem;
				height: .36rem;
				img{
					position: absolute;
					width: 100%;
					height: 100%;
				}
			}
		}
		.da{
			font-size: .26rem;
			color: #999;
			padding-left: .34rem;
			padding-top: .16rem;
		}
	}
}
</style>
<script>
import back from '../../common/back.vue'
export default{
	data(){
		return{
			showClick: 0
		}
	},
	created(){
		document.title = "帮助中心";
	},
	methods:{
		switchType(id){
			if(this.showClick == '0'){
				this.showClick = id;
			}else{
				if(this.showClick == id){
					this.showClick = 0;
				}else{
					this.showClick = 0;
					this.showClick = id;
				};
			}
		},
		goQQ(){
			//window.location.href = "http://wpa.qq.com/msgrd?v=3&uin=77602991&site=qq&menu=yes"
		}
	},
	components:{
		back
	}
}
</script>


















