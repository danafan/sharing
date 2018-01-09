<template>
	<div class="Box">
		<!-- 返回按钮 -->
		<back></back>
		<div class="infoBox">
			<!-- 头像 -->
			<div class="infoItem">
				<div class="infoName">头像</div>
				<div class="infoTxt">
					<img class="userImg" src="../../assets/head portrait.png">
				</div>
			</div>
			<!-- 用户名 -->
			<div class="infoItem">
				<div class="infoName">用户名</div>
				<div class="infoTxt">吕小白</div>
			</div>
			<!-- 姓名 -->
			<div class="infoItem">
				<div class="infoName">姓名</div>
				<div class="infoTxt">
					<div class="txt1"><input type="text" v-model="name"></div>
					<div class="icon"><img src="../../assets/amend.png"></div>	
				</div>
			</div>
			<!-- 师父代号 -->
			<div class="infoItem" v-if="showMaster == false">
				<div class="infoName">师父代号</div>
				<div class="infoTxt">G2</div>
			</div>
			<!-- 性别 -->
			<div class="infoItem">
				<div class="infoName">性别</div>
				<div class="infoTxt">
					<div class="radio">
						<div>
							<input type="radio" id="radio-1" v-model="gender" value="man"/><label for="radio-1"></label><span>男</span></div>
							<div><input type="radio" id="radio-2" v-model="gender" value="woman"/><label for="radio-2"></label><span>女</span></div>
						</div>	
					</div>
				</div>
				<!-- 出生日期 -->
				<div class="infoItem">
					<div class="infoName">出生日期</div>
					<div class="infoTxt">
						<div class="txt">{{birth}}</div>
						<div class="icon" @click="openPicker"><img src="../../assets/amend.png"></div>	
					</div>
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
					<div class="infoTxt">13067882143</div>
				</div>
				<!-- qq号 -->
				<div class="infoItem">
					<div class="infoName">QQ号</div>
					<div class="infoTxt">945647271</div>
				</div>
				<!-- 旺旺号 -->
				<div class="infoItem">
					<div class="infoName">旺旺号</div>
					<div class="infoTxt">945647271</div>
				</div>
				<!-- 修改密码 -->
				<div class="infoItem" @click="$router.push('/updatePass?passtype=password')">
					<div class="infoName">修改密码</div>
					<div class="infoTxt"><img class="pass" src="../../assets/advance.png"></div>
				</div>
				<!-- 修改交易密码 -->
				<div class="infoItem" @click="$router.push('/updatePass?passtype=transaction')">
					<div class="infoName">修改交易密码</div>
					<div class="infoTxt"><img class="pass" src="../../assets/advance.png"></div>
				</div>
			</div>
			<!-- 提交信息按钮 -->
			<div class="subInfo">提交信息</div>
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
		<div class="workBox" v-if="showWork">
			<div class="workCon">
				<mt-radio
				align="left"
				v-model="work"
				:options="options">
			</mt-radio>
		</div>
	</div>
</div>
</template>
<style lang="less" scoped>
.Box{
	background: #f1f1f1;
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
		border-radius: .04rem;
		width: 5.86rem;
		text-align: center;
		height: .78rem;
		line-height: .78rem;
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
		.workCon{
			margin: 3rem auto 0;
			background: #ffffff;
			width: 5rem;
			height: 7rem;
			overflow-y: scroll;
		}
	}
}
</style>
<script>
import { DatetimePicker,Radio } from 'mint-ui';
import back from '../../common/back.vue'
export default{
	data(){
		return{
			showMaster: false,					//默认徒弟身份，师父代号不显示
			name: "李琳",						//姓名
			gender: "man",						//选中的性别
			pickerVisible: "",					//日期
			birth: "1993-03-21",				//显示的出生日期
			startDate: new Date('1960-01-01'),	//最小日期
			endDate: new Date(),				//最大日期
			showWork: false,					//选择职业弹框默认不显示
			options:["学生","教师","护士","程序员","工人"],//职业列表
			work: "学生",						//选中的职业
			WXcode: "123872",					//微信号
		}
	},
	created(){
		//判断用户身份师父代号是否显示
		let status = sessionStorage.getItem("status");
		if(status == 'master'){
			this.showMaster = true;
		}else if(status == 'apprentice'){
			this.showMaster = false;
		}
	},
	watch:{
		// 性别
		gender:function(n,o){
			console.log(this.gender);
		},
		//职业
		work:function(n,o){
			this.showWork = false;
			console.log(this.work);
		}
	},
	methods:{
		//点击打开日期选择器
		openPicker() {
			this.$refs.picker.open();
		},
		//点击日期选择器确定
		handleConfirm(){
			let date = new Date(this.pickerVisible);
			this.birth = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
			console.log(this.birth);
		}
	},
	components:{
		DatetimePicker,
		Radio,
		back
	}
}
</script>