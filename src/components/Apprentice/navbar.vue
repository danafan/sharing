<template>
	<div>
		<div class="pageWrap">
			<router-view></router-view>	
		</div>
		<div class="navbar">
			<div class="navbarItem" @click="tab('index')">
				<img v-if="selected == 'index'" src="../../assets/home(blue).png">
				<img v-else src="../../assets/home.png">
				<p class="navbar_txt" :class="{select:selected == 'index'}">首页</p>
			</div>
			<div class="navbarItem" @click="tab('goApp')" v-if="showMaster">
				<img v-if="selected == 'goApp'" src="../../assets/apprentice (blue)1.png">
				<img v-else src="../../assets/apprentice (gray)1.png">
				<p class="navbar_txt" :class="{select:selected == 'goApp'}">徒弟</p>
			</div>
			<div class="navbarItem" @click="tab('activity')">
				<img v-if="selected == 'activity'" src="../../assets/activity(blue).png">
				<img v-else src="../../assets/activity(gray).png">
				<p class="navbar_txt" :class="{select:selected == 'activity'}">活动</p>
			</div>
			<div class="navbarItem" @click="tab('task')">
				<img v-if="selected == 'task'" src="../../assets/duty(blue).png">
				<img v-else src="../../assets/duty(gray).png">
				<p class="navbar_txt" :class="{select:selected == 'task'}">进度</p>
			</div>
			<div class="navbarItem" @click="tab('mine')">
				<img v-if="selected == 'mine'" src="../../assets/mine(blue).png">
				<img v-else src="../../assets/mine(gray).png">
				<p class="navbar_txt" :class="{select:selected == 'mine'}">我的</p>
			</div>
		</div>	
		<!-- 未实名认证弹框 -->
		<div class="bindBox" v-if="showCer">
			<!-- 审核和删除 -->
			<div class="type2" @click.stop>
				<div class="icon"><img src="../../assets/certification.png"></div>	
				<div class="wen">
					<div>实名认证</div>
					<div class="ti">{{msg}}</div>
				</div>
				<div class="butss" v-if="status1 == '0' || status1 == '3'">
					<div class="ok" @click="$router.replace('/certification?status1=' + status1 + '&status2=' + status2)">去认证</div>
				</div>
			</div>
		</div>
		<!-- 禁止点击弹框 -->
		<div class="jia" v-if="bi == true"></div>
	</div>
</template>
<style lang="less" scoped>
.pageWrap{
	background:#f3f4f5;
	box-sizing: border-box;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.navbar{
	font-family: "Source Han Sans";
	position: fixed;
	left: 0;
	bottom: 0;
	box-sizing: border-box;
	background: #fff;
	display: flex;
	justify-content: space-around;
	width: 100%;
	height: .98rem;
	font-size: .26rem;
	color: #999;
	z-index: 999;
	.navbarItem{
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		img{
			margin-top: .1rem;
			width: .46rem;
			height: .46rem;
		}
		.navbar_txt{
			margin-top: .04rem;
			width: 100%;
			text-align: center;
		}
	}
}
// 切换导航改变文字颜色
.select{
	color: #03abff;
	font-weight: bold;
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
	z-index: 999999;
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
//禁止点击弹框
.jia{
	background:rgba(0,0,0,0);
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 99999;
}
</style>
<script>
	import resource from '../../api/resource.js'
	import {mapActions, mapGetters} from 'vuex'
	export default{
		data(){
			return{
			selected: "index",			//默认首页导航高亮
			showMaster: false,			//默认徒弟身份，下面三个导航
			showCer:false,
			msg:"",									 //审核提示弹框内容
		    status1:"",							     //一审状态
		    status2:"",							     //二审状态
		    bi:true
		}
	},
	created(){
		//判断是师父还是徒弟
		let status = sessionStorage.getItem("status");
		if(status == "0" || status == "2"){		//师父
			this.showMaster = true;
		}else if(status == "1"){				//徒弟
			this.showMaster = false;
		}
		let tab = this.get_route;
		this.selected = tab;
		this.$router.push(`${tab}`);
		//验证用户是否实名认证
		this.useridentity();
	},
	watch: {
		get_route: function (n, o) {
			this.selected = n;
			if (n == "index") {
				this.$router.push("/index");
			} else if(n=='goApp') {
				this.$router.push("/goApp");
			}else if(n=='activity') {
				this.$router.push("/activity");
			}else if(n=='task') {
				this.$router.push("/task");
			}else if(n=='mine'){
				this.$router.push("/mine");
			}
		}
	},
	computed: {
		...mapGetters([
			'get_route'
			])
	},
	methods:{
		...mapActions([
			'set_route'
			]),
		// 点击切换导航
		tab(tab){
			this.selected = tab;
			this.set_route(tab);
			this.$router.push(`${tab}`);
		},
		//验证用户是否实名认证
		useridentity(){
			let openid = sessionStorage.getItem("openid");
			resource.useridentity({openid:openid}).then(res => {
				if(res.data.code == "1"){
					//强制、一审未成功
					if(res.data.check_status1 != "2" && res.data.is_constraint == "1"){
						this.showCer = true;
						this.status1 = res.data.check_status1;
						this.status2 = res.data.check_status2;
						if(res.data.check_status1 == "0"){
							this.msg = "根据国家法律规定互联网账号必须经过实名认证，为确保账户正常使用及账户安全请尽快完成实名";
						}else if(res.data.check_status1 == "1"){
							this.msg = "管理员正在审核";
						}else if(res.data.identity == "1" && res.data.check_status1 == "3"){
							this.msg = res.data.reject_reason1;
						}else if(res.data.identity == "1" && res.data.check_status2 == "3"){
							this.msg = res.data.reject_reason2;
						}else if((res.data.identity == "0" || res.data.identity == "2") && res.data.check_status1 == "3"){
							this.msg = res.data.reject_reason1;
						}
					}else{
						this.bi = false;
					}
				}else{
					this.$toast(res.data.message);
				}
			});
		},

	}
}
</script>