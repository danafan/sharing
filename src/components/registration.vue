<template>
	<div class="box">
		<!-- 返回按钮 -->
		<back></back>
		<!-- 用户名 -->
		<div class="item">
			<div class="itemIcon"><img src="../assets/username.png"></div>
			<div class="itemInput"><input type="text" v-model="username" placeholder="用户名（6-16位字母、数字或下划线）"></div>
		</div>
		<!-- 密码 -->
		<div class="item">
			<div class="itemIcon"><img src="../assets/password.png"></div>
			<div class="itemInput"><input type="password" v-model="oldPass" placeholder="密码（6至16位字母、数字或下划线中的两种）"></div>
		</div>
		<!-- 确认密码 -->
		<div class="item">
			<div class="itemIcon"><img src="../assets/password.png"></div>
			<div class="itemInput"><input type="password" v-model="newPass" placeholder="确认密码（6至16位字母、数字或下划线中的两种）"></div>
		</div>
		<!-- 旺旺号 -->
		<div class="item">
			<div class="itemIcon"><img src="../assets/wangwang.png"></div>
			<div class="itemInput"><input type="text" v-model="wangCode" placeholder="旺旺号(淘宝会员名)"></div>
		</div>
		<!-- QQ号 -->
		<div class="item">
			<div class="itemIcon"><img src="../assets/QQ.png"></div>
			<div class="itemInput"><input type="number" v-model="qqCode" placeholder="QQ号"></div>
		</div>
		<!-- 微信号 -->
		<div class="item">
			<div class="itemIcon"><img src="../assets/weixin.png"></div>
			<div class="itemInput"><input type="text" v-model="wx" placeholder="微信号"></div>
		</div>
		<!-- 手机号 -->
		<!-- <div class="item">
			<div class="itemIcon"><img src="../assets/phone.png"></div>
			<div class="itemInput"><input type="number" v-model="phone" placeholder="手机号"></div>
		</div> -->
		<!-- 姓名 -->
		<div class="item">
			<div class="itemIcon"><img src="../assets/name.png"></div>
			<div class="itemInput"><input type="text" v-model="name" placeholder="真实姓名"></div>
		</div>
		<!-- 性别 -->
		<div class="item">
			<div class="sex">
				<div><input type="radio" id="sex1" v-model="sex" value="0"/><label for="sex1"></label><span>男</span></div>
				<div><input type="radio" id="sex2" v-model="sex" value="1"/><label for="sex2"></label><span>女</span> </div>
			</div>
		</div>
		<!-- 出生日期 -->
		<div class="item">
			<div class="itemIcon"><img src="../assets/fromDay.png"></div>
			<div class="itemInput" @click="openPicker">{{birth}}</div>
		</div>
		<!-- 职业 -->
		<div class="item" @click="showWork = true">
			<div class="itemIcon"><img src="../assets/work.png"></div>
			<div class="itemInput">{{work}}</div>
		</div>
		<!-- 选择师父或徒弟 -->
		<div class="option">
			<div class="select">
				<div><input type="radio" id="status1" v-model="status" value="0"/><label for="status1"></label><span>师父</span></div>
				<div><input type="radio" id="status2" v-model="status" value="1"/><label for="status2"></label><span>徒弟</span> </div>
			</div>
			<div class="item1" v-if="status == '1'">
				<div class="itemIcon"><img src="../assets/referrer.png"></div>
				<div class="itemInput"><input type="text" v-model="recomcode" placeholder="推荐人代号（G开头加数字）"></div>
			</div>
		</div>
		<!-- 推荐人姓名 -->
		<div class="item" v-if="status == '1'">
			<div class="itemIcon"><img src="../assets/referrer name.png"></div>
			<div class="itemInput"><input type="text" v-model="recomname" placeholder="推荐人用户名"></div>
		</div>
		<!-- 注册按钮 -->
		<div class="registration" @click="getlocation">立即注册</div>
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
.box{
	background:#f3f4f5;
	height:100%;
}
.item{
	background:#fff;
	border-bottom: 1px solid #eeeeee;
	padding-left: .58rem;
	padding-right: .58rem;
	display: flex;
	align-items:center;
	height: .92rem;
	.sex{
		display: flex;
		align-items:center;
		font-size: .28rem;
		color: #999999;
		div{
			margin-right: .2rem;
			position: relative;
			display: flex;
			align-items:center;
			input{
				opacity: 0;
			}
			label {
				position: absolute;
				left: .06rem;
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
	.itemIcon{
		margin-right: .14rem;
		position: relative;
		width: .33rem;
		height: .33rem;
		img{
			position: absolute;
			width: 100%;
			height: 100%;
		}
	}
	.itemInput{
		flex:1;
		display: flex;
		align-items:center;
		height: .92rem;
		font-size: .28rem;
		color:#999999;
		input{
			border: none;
			outline: none;
			width: 100%;
			font-size: .28rem;
			color:#999999;
		}
	}
}
.option{
	background:#fff;
	border-bottom: 1px solid #eeeeee;
	padding: .3rem .58rem;
	.select{
		display: flex;
		align-items:center;
		font-size: .26rem;
		div{
			margin-right: .2rem;
			position: relative;
			display: flex;
			align-items:center;
			input{
				opacity: 0;
			}
			label {
				position: absolute;
				left: .06rem;
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
			span{
				font-size: .26rem;
				color:#999999;
			}
		}
	}
	.item1{
		margin-top: .3rem;
		display: flex;
		align-items:center;
		.itemIcon{
			margin-right: .14rem;
			position: relative;
			width: .33rem;
			height: .33rem;
			img{
				position: absolute;
				width: 100%;
				height: 100%;
			}
		}
		.itemInput{
			flex:1;
			display: flex;
			align-items:center;
			input{
				border: none;
				outline: none;
				width: 100%;
				font-size: .28rem;
				color:#999999;
			}
		}
	}
}
.registration{
	margin: .5rem auto;
	border-radius: .08rem;
	background: #03abff;
	box-shadow: 0 .02rem .2rem #03abff;
	width: 6.54rem;
	text-align: center;
	height: .9rem;
	line-height: .9rem;
	font-size: .26rem;
	color: #ffffff;
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
import back from '../common/back.vue'
import { DatetimePicker} from 'mint-ui';
import resource from '../api/resource.js'
import wx from 'weixin-js-sdk'
export default{
	data(){
		return{
			username: "",			//用户名
			oldPass: "",			//密码
			newPass: "",			//确认密码
			wangCode: "",			//旺旺号
			qqCode: "",				//QQ号
			wx: "",					//微信号
			phone: "",				//手机号
			name: "",				//真实姓名
			sex: "0",				//性别（默认男）
			pickerVisible: "1980-01-01",		//日期
			birth: "选择出生日期",		//显示的出生日期
			startDate: new Date('1980-01-01'),	//最小日期
			endDate: new Date(),				//最大日期
			showWork: false,		//选择职业弹框默认不显示
			options:[],				//职业列表
			work: "选择职业",			//显示选择的职业
			workId: "",				//选择职业的id
			status: "1",			//默认徒弟身份
			recomcode: "",			//推荐人代号
			recomname: "",			//推荐人姓名
			ke: true,				//注册按钮返回信息之前只可点击一次
		}
	},
	created(){
		//获取上个页面传过来的手机号
		this.phone = this.$route.query.phone;
		if(!this.phone){
			this.$router.push("/code");
		}
		document.title = "用户注册";
		//获取工作类型列表
		this.Worklist();
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
		//点击立即注册
		registration(latitude,longitude){
			if(this.username == ""){
				this.$toast("请填写用户名!");
			}else if(!this.judgmentName.test(this.username)){
				this.$toast("用户名必须在4-16位之间，且只能是大小写字母，数字，下划线");
			}else if(this.oldPass == ""){
				this.$toast("请填写密码!");
			}else if(!this.judgmentPassword.test(this.oldPass)){
				this.$toast("密码必须在6-16位之间，且至少包含大小写字母，数字，下划线中的两种");
			}else if(this.newPass == ""){
				this.$toast("请确认密码!");
			}else if(!this.judgmentPassword.test(this.newPass)){
				this.$toast("密码必须在6-16位之间，且至少包含大小写字母，数字，下划线中的两种");
			}else if(this.oldPass != this.newPass){
				this.$toast("两次密码不一致！");
			}else if(this.wangCode == ""){
				this.$toast("请填写旺旺号!");
			}else if(this.wangCode.indexOf(" ") != -1){
				this.$toast("旺旺号不能包括空格!");
			}else if(this.wangCode.indexOf("	") != -1){
				this.$toast("旺旺号不能包括空格!");
			}else if(this.qqCode == ""){
				this.$toast("请填写QQ号!");
			}else if(!this.judgmentqq.test(this.qqCode)){
				this.$toast("QQ号格式不正确!");
			}else if(this.wx == ""){
				this.$toast("微信号不能为空!");
			}else if(!this.judgmentWeixin.test(this.wx)){
				this.$toast("微信号格式不正确!");
			}else if(this.phone == ""){
				this.$toast("请填写手机号!");
			}else if(this.phone.indexOf(" ") != -1){
				this.$toast("手机号不能包括空格!");
			}else if(!this.judgmentPhone.test(this.phone)){
				this.$toast("手机号格式不正确!");
			}else if(this.name == ""){
				this.$toast("请填写真实姓名!");
			}else if(this.name.indexOf(" ") != -1){
				this.$toast("真实姓名不能包括空格!");
			}else if(this.birth == "" || this.birth == "选择出生日期"){
				this.$toast("请选择出生日期!");
			}else if(this.work == "" || this.work == "选择职业"){
				this.$toast("请选择职业!");
			}else if(this.status == "1" && this.recomcode == ""){
				this.$toast("请填写推荐人代号!");
			}else if(this.status == "1" && !this.judgmentCode.test(this.recomcode)){
				this.$toast("推荐人代号格式不正确!");
			}else if(this.status == "1" && this.recomname == ""){
				this.$toast("请填写推荐人用户名!");
			}else if(this.status == "1" && this.recomname.indexOf(" ") != -1){
				this.$toast("推荐人用户名不能包括空格!");
			}else{
				let userObj = {
					username: this.username,	//用户名
					password: this.newPass,		//确认后的密码
					wangwang: this.wangCode,	//旺旺号
					qq: this.qqCode,			//qq号
					wechat: this.wx,			//微信号
					phone: this.phone,			//手机号
					realname: this.name,		//真实姓名
					sex: this.sex,				//性别
					birth: this.birth,			//生日
					job_id: this.workId,		//工作
					identity: this.status,		//身份代号（0师父，1徒弟）
					latitude:latitude,
					longitude:longitude
				}
				if(this.status == "0"){		 //选择师父
					userObj.status = "1";
				}else　if(this.status == "1"){//选择徒弟
					userObj.status = "0";
					userObj.master_code = this.recomcode;
					userObj.master_name = this.recomname;
				}
				//请求注册接口
				this.register(userObj);
			}
		},
		//获取地理位置
		getlocation(){
			let url = encodeURIComponent(window.location.href.split('#')[0]);
			resource.getLocation({url2:url}).then(res => {
				var that = this;
				wx.config(res.data);
				wx.ready(function(){
					wx.getLocation({
						type: 'wgs84', 
						success: function (res) {
        					var latitude = res.latitude; 	// 纬度
        					var longitude = res.longitude ; // 经度
        					that.registration(latitude,longitude);
        				},
        				cancel: function () { 
        					that.$toast("地理位置获取失败!");
        				},
        				error: function (res) {
        					that.$toast("地理位置获取失败!");
        				}
        			});
				});
			});
		},
		//请求注册接口
		register(userObj){
			if(this.ke == true){
				this.ke = false;
				resource.register(userObj).then(res => {
					this.ke = true;
					if(res.data.code == '0'){	
						this.$toast("注册成功，审核通过后才能登录哦～");
						this.$router.replace('/connection');
					}else{
						this.$toast(res.data.message);
					}
				});
			}
			
		}
	},
	components:{
		back,
		DatetimePicker
	}
}
</script>