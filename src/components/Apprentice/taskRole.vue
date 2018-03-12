<template>
	<div>
		<back></back>
		<!-- 顶部注意事项 -->
		<div class="titleBox">
			<div class="title">注意事项：</div>
			<div class="content">1.3-5天只能做一单，7天内不能接同店铺（系统会自动限制）</div>
			<div class="content">2.接任务不要放弃，当月放弃7单不能接任何任务</div>
			<div class="content">3.提现需要微信实名认证，（能正常收发红包、转账就是已经认证了的）</div>
			<div class="content">4.徒弟本金和佣金审核到账后可以立提，师父本金可立提，佣金只能每月1-3号提现。（提现秒到 微信钱包）</div>
		</div>
		<!-- 标题 -->
		<div class="biao">
			<div class="line"></div>
			<div class="zi">任务流程详解</div>
			<div class="line"></div>
		</div>
		<!-- 每一块内容 -->
		<div class="itemBox">
			<div class="itemTie">第一步：绑定成功后进入首页，点击【申请任务】</div>
			<div class="roleImg" @click="lookImg(1)"><img src="../../assets/lc1.png"></div>
		</div>
		<!-- 每一块内容 -->
		<div class="itemBox">
			<div class="itemTie">第二步：进入【申请任务】页面，输入店铺名称和商品金额并验证通过，在淘宝上浏览商品3分钟，可点击我已付款，关键词不可复制</div>
			<div class="roleImg" @click="lookImg(2)"><img src="../../assets/lc2.png"></div>
		</div>
		<!-- 每一块内容 -->
		<div class="itemBox">
			<div class="itemTie">备注：请确保您的订单已经付款后再进行提交哦！</div>
			<div class="roleImg" @click="lookImg(3)"><img src="../../assets/lc3.png"></div>
		</div>
		<!-- 每一块内容 -->
		<div class="itemBox">
			<div class="itemTie">第三步：订单提交完，跳转到【任务进度】页面，也可以直接进入【任务进度】页面，查看您的订单详情</div>
			<div class="roleImg" @click="lookImg(4)"><img src="../../assets/lc4.png"></div>
		</div>
		<!-- 每一块内容 -->
		<div class="itemBox">
			<div class="itemTie">第四步：申请通过后，如想放弃此任务，可点击‘放弃任务’按钮，根据弹框提示点击‘确认’即可放弃此任务</div>
			<div class="roleImg" @click="lookImg(5)"><img src="../../assets/lc5.png"></div>
		</div>
		<!-- 每一块内容 -->
		<div class="itemBox">
			<div class="itemTie">备注：如若放弃任务一个月超过三次，则本月不能申请任务，请注意哦～</div>
			<div class="roleImg" @click="lookImg(6)"><img src="../../assets/lc6.png"></div>
		</div>
		<!-- 每一块内容 -->
		<div class="itemBox">
			<div class="itemTie">第五步：任务提交完毕后，可以返回微信页面，进入【留客户】通知，查询您的订单审核情况</div>
			<div class="roleImg" @click="lookImg(7)"><img src="../../assets/lc7.png"></div>
		</div>
		<!-- 每一块内容 -->
		<div class="itemBox">
			<div class="itemTie">备注：如若订单被拒绝，请在提示的规定时间完成任务，否则任务到时会自动放弃，请注意哦～</div>
			<div class="roleImg" @click="lookImg(8)"><img src="../../assets/lc8.png"></div>
		</div>
		<!-- 每一块内容 -->
		<div class="itemBox">
			<div class="itemTie">第六步：任务完成后，点击底部导航栏【我的】，点击【我的金库】即可看到【本金】、【佣金】、【资产明细】，点击【提现】即可申请提现</div>
			<div class="roleImg" @click="lookImg(9)"><img src="../../assets/lc9.png"></div>
		</div>
		<!-- 每一块内容 -->
		<div class="itemBox">
			<div class="itemTie">第七步：进入【提现】页面，输入金额或选择‘全部提现’，点击【提现】按钮，即可提现</div>
			<div class="roleImg" @click="lookImg(10)"><img src="../../assets/lc10.png"></div>
		</div>
		<!-- 每一块内容 -->
		<div class="itemBox">
			<div class="itemTie">第八步：点击【提现】弹出‘确认提现xxx元？’确认提现金额后可点击【确认】完成提现</div>
			<div class="roleImg" @click="lookImg(11)"><img src="../../assets/lc11.png"></div>
		</div>
		<!-- 每一块内容 -->
		<div class="itemBox">
			<div class="itemTie">第九步：返回微信页面，查询【服务通知】，可在【服务通知】下看到您到账的金额；还可以通过【资产明细】查询您的资金去向</div>
			<div class="roleImg" @click="lookImg(12)"><img src="../../assets/lc12.png"></div>
			<div class="roleImg sd" @click="lookImg(13)"><img src="../../assets/lc13.png"></div>
		</div>
		<!-- 放大图片框 -->
		<transition name="bounce">
			<div class="bigImg" v-if="showImg" @click="showImg = false">
				<img :src="imgSrc">
			</div>
		</transition>
	</div>
</template>
<style scoped lang="less">
.bounce-enter-active {
	animation: bounce-in .5s;
}
.bounce-leave-active {
	animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
	}
}
.bigImg{
	z-index: 5;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,.8);
	img{
		width: 100%;
		height: 100%;
	}
}
.titleBox{
	margin-bottom: .96rem;
	padding: .27rem .4rem 0 .4rem;
	color: #ff5858;
	.title{
		font-size: .3rem;
	}
	.content{
		font-size: .28rem;
	}
}
.biao{
	margin-bottom: .4rem;
	display: flex;
	align-items:center;
	justify-content:center;
	font-size: .36rem;
	color: #03abff;
	.line{
		border: 1px solid #03abff;
		width: .64rem;
		height: 0;
	}
	.zi{
		margin-left: .1rem;
		margin-right: .1rem;
	}
}
.itemBox{
	margin-bottom: 1.06rem;
	padding-left: .4rem;
	padding-right: .4rem;
	.itemTie{
		font-size: .3rem;
		color: #333;
	}
	.roleImg{
		margin: .1rem auto 0;
		width: 3.7rem;
		height: 6.94rem;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.sd{
		margin-top: .3rem;
	}
}
</style>
<script>
import back from '../../common/back.vue'
export default{
	data(){
		return{
			showImg: false,						//默认放大图片不显示
			imgSrc: "",							//放大的图片路径
		}
	},
	methods:{
		lookImg(id){
			this.showImg = true;
			this.imgSrc = require('../../assets/lc' +id + '.png');
		}
	},
	components:{
		back
	}
};
</script>