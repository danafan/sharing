<template>
	<div class="Box">
		<!-- 返回按钮 -->
		<back></back>
		<div class="infoBox">
			<!-- 头像 -->
			<div class="infoItem">
				<div class="infoName">头像</div>
				<div class="infoTxt">
					<img class="userImg" :src="userInfo.headimgurl">
				</div>
			</div>
			<!-- 用户名 -->
			<div class="infoItem">
				<div class="infoName">用户名</div>
				<div class="infoTxt">{{userInfo.username}}</div>
			</div>
			<!-- 姓名 -->
			<div class="infoItem">
				<div class="infoName">姓名</div>
				<div class="infoTxt">{{name}}</div>
			</div>
			<!-- 师父代号 -->
			<div class="infoItem" v-if="showMaster == false">
				<div class="infoName">师父代号</div>
				<div class="infoTxt">{{masterCode}}</div>
			</div>
			<!-- 性别 -->
			<div class="infoItem">
				<div class="infoName">性别</div>
				<div class="infoTxt">{{gender == '0'?"男":"女"}}</div>
				</div>
				<!-- 出生日期 -->
				<div class="infoItem">
					<div class="infoName">出生日期</div>
					<div class="infoTxt">{{birth}}</div>
				</div>
				<!-- 职业 -->
				<div class="infoItem" @click="showWork = true">
					<div class="infoName">职业</div>
					<div class="infoTxt">
						<div class="txt">{{work}}</div>
						<div class="icon"><img class="pull" src="../../assets/pull-down.png"></div>	
					</div>
				</div>
				<!-- 微信号 -->
				<div class="infoItem">
					<div class="infoName">微信号</div>
					<div class="infoTxt">
						<div class="txt1"><input type="text" v-model="WXcode"></div>
						<div class="icon"><img src="../../assets/amend.png"></div>	
					</div>
				</div>
				<!-- 手机号 -->
				<div class="infoItem">
					<div class="infoName">手机号</div>
					<div class="infoTxt">{{userInfo.phone}}</div>
				</div>
				<!-- qq号 -->
				<div class="infoItem">
					<div class="infoName">QQ号</div>
					<div class="infoTxt">{{userInfo.qq}}</div>
				</div>
				<!-- 旺旺号 -->
				<div class="infoItem">
					<div class="infoName">旺旺号</div>
					<div class="infoTxt">{{userInfo.wangwang}}</div>
				</div>
				<!-- 修改密码 -->
				<div class="infoItem" @click="$router.push('/updatePass')">
					<div class="infoName">修改密码</div>
					<div class="infoTxt"><img class="pass" src="../../assets/advance.png"></div>
				</div>
			</div>
			<!-- 提交信息按钮 -->
			<div class="subInfo" @click="subInfo">提交信息</div>
			<!-- 日期选择组件 -->
			<mt-datetime-picker
			ref="picker"
			v-model="pickerVisible"
			type="date"
			:startDate="startDate"
			:endDate="endDate"
			@confirm="handleConfirm"
			>
		</mt-datetime-picker>
		<!-- 职业选择弹框 -->
		<div class="workBox" v-if="showWork" @click="showWork = false">
			<div class="workCon" @click.stop>
				<div v-for="item in options" @click="checkWork(item.job_id,item.job_name)"><input type="radio" id="works"/><label for="works"></label><span>{{item.job_name}}</span></div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.Box{
	background: #f3f4f5;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	overflow-y:scroll;
	.infoBox{
		background: #ffffff;
		.infoItem{
			border-bottom:1px solid #f4f4f4;
			padding-left: .58rem;
			padding-right: .58rem;
			display: flex;
			align-items:center;
			justify-content: space-between;
			width: 100%;
			height: .92rem;
			.infoName{
				font-size: .28rem;
				color: #333333;
			}
			.infoTxt{
				position: relative;
				display: flex;
				align-items:center;
				font-size: .26rem;
				color: #999999;
				.radio{
					display: flex;
					align-items:center;
					div{
						position: relative;
						display: flex;
						align-items:center;
						input{
							opacity: 0;
						}
						label {
							position: absolute;
							left: .15rem;
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
				}
				.txt1{
					position: absolute;
					top: 0;
					right: 0;
					input{
						background: 0;
						padding-right: .4rem;
						border: none;
						outline: none;
						max-width: 2rem;
						color: #999999;
						text-align: right;
					}
				}
				.userImg{
					border-radius: 50%;
					width: .5rem;
					height: .5rem;
				}
				.icon {
					margin-left: .06rem;
					display: flex;
					align-items:center;
					img{
						width: .32rem;
						height: .32rem;
					}
					.pull{
						width: .21rem;
						height: .21rem;
					}
				}
				input{
					border: none;
					margin-left: .1rem;
				}
				.pass{
					width: .26rem;
					height: .26rem;
				}
			}
		}
	}
	.subInfo{
		margin: .32rem auto;
		background: #03abff;
		box-shadow: 0 .02rem .2rem rgb(110,189,243);
		border-radius: .04rem;
		width: 6.54rem;
		text-align: center;
		height: .9rem;
		line-height: .9rem;
		font-size: .26rem;
		color:#ffffff;
	}
	.workBox{
		background: rgba(0,0,0,.66);
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		z-index: 3;
		.workCon{
			margin: 3rem auto 0;
			background: #ffffff;
			width: 5rem;
			height: 7rem;
			overflow-y: scroll;
		}
	}
}
.workBox{
	background: rgba(0,0,0,.66);
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 3;
	.workCon{
		margin: 3rem auto 0;
		background: #ffffff;
		width: 5rem;
		height: 7rem;
		overflow-y: scroll;
		div{
			border-bottom: 1px solid #f0f0f0;
			height: .8rem;
			position: relative;
			display: flex;
			align-items:center;
			input{
				opacity: 0;
			}
			label {
				position: absolute;
				left: 30%;
				width: .2rem;
				height: .2rem;
				border-radius: 50%;
				border: 1px solid #999999;
			}
			input:checked+label { 
				background-color: #03abff;
				border: 1px solid #03abff;
			}
			span{
				position: absolute;
				left: 40%;
				font-size: .26rem;
				color:#999999;
			}
		}
	}
}
</style>
<script>
import { DatetimePicker } from 'mint-ui';
import back from '../../common/back.vue'
import resource from '../../api/resource.js'
export default{
	data(){
		return{
			showMaster: false,					//默认徒弟身份，师父代号不显示
			userInfo:{},
			name: "",							//姓名
			gender: "0",						//选中的性别（默认男）
			masterCode: "",						//师父代号
			pickerVisible: "",					//日期
			birth: "1980-01-01",							//显示的出生日期
			startDate: new Date('1980-01-01'),	//最小日期
			endDate: new Date(),				//最大日期
			showWork: false,					//选择职业弹框默认不显示
			options:[],							//职业列表
			work: "",							//显示的职业
			workId: "",							//选择职业的id
			WXcode: "",							//微信号
		}
	},
	created(){
		document.title = "修改资料";
		//判断用户身份师父代号是否显示
		let status = sessionStorage.getItem("status");
		if(status == '0'){
			this.showMaster = true;
		}else if(status == '1'){
			this.showMaster = false;
		}
		//获取用户信息
		this.getuserinfo();
	},
	watch:{
		//职业
		showWork:function(n,o){
			if(n == true){
				//获取工作类型列表
				this.Worklist();
			}
		}
	},
	methods:{
		//获取用户信息
		getuserinfo(){
			resource.getUserInfo().then(res => {
				if(res.data.code == "0"){
					this.userInfo = res.data.data;
					this.name = this.userInfo.real_name;	//姓名
					this.gender = this.userInfo.sex;		//性别
					this.masterCode = this.userInfo.master_code;			//师父代号
					this.WXcode = this.userInfo.wechat;		//微信号
					this.work = this.userInfo.job_name;		//工作
					this.birth = this.userInfo.birth;
				}else{
					this.$toast(res.data.message);
				}
			});
		},
		//获取工作类型列表
		Worklist(){
			resource.getWorklist().then(res => {
				if(res.data.code == '0'){	
					this.options = res.data.data;
				}else{
					this.$toast(res.data.message);
				}
			});
		},
		//选中某个工作
		checkWork(id,name){
			this.showWork = false;
			this.work = name;
			this.workId = id;
		},
		//点击打开日期选择器
		openPicker() {
			this.$refs.picker.open();
		},
		//点击日期选择器确定
		handleConfirm(){
			let date = new Date(this.pickerVisible);
			this.birth = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
		},
		//点击提交信息
		subInfo(){
			if(this.WXcode == ""){
				this.$toast("请填写微信号!");
			}else if(!this.judgmentWeixin.test(this.WXcode)){
				this.$toast("微信号格式不正确!");
			}else{
				let userInfo = {
					job_id: this.workId,
					wechat: this.WXcode
				}
				this.updateInfo(userInfo);
			}
		},
		//修改
		updateInfo(userInfo){
			resource.updateUserInfo(userInfo).then(res => {
				if(res.data.code == "0"){
					this.$toast("修改成功");
					this.$router.go(-1);
				}else{
					this.$toast(res.data.message);
				}
			});
		}
	},
	components:{
		DatetimePicker,
		back
	}
}
</script>