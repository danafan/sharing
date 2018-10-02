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
</style>
<script>
import {mapActions, mapGetters} from 'vuex'
export default{
	data(){
		return{
			selected: "index",			//默认首页导航高亮
			showMaster: false,			//默认徒弟身份，下面三个导航
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
		}
	}
}
</script>