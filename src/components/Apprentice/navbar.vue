<template>
	<div>
		<div class="pageWrap">
			<router-view></router-view>	
		</div>
		<div class="navbar">
			<div class="navbarItem" @click="tab('index')">
				<img v-if="selected == 'index'" src="../../assets/home page (blue).png">
				<img v-else src="../../assets/home page(black).png">
				<p class="navbar_txt" :class="{select:selected == 'index'}">首页</p>
			</div>
			<div class="navbarItem" @click="tab('task')">
				<img v-if="selected == 'task'" src="../../assets/task(blue).png">
				<img v-else src="../../assets/task(black).png">
				<p class="navbar_txt" :class="{select:selected == 'task'}">任务进度</p>
			</div>
			<div class="navbarItem" @click="tab('mine')">
				<img v-if="selected == 'mine'" src="../../assets/me(blue).png">
				<img v-else src="../../assets/me(black).png">
				<p class="navbar_txt" :class="{select:selected == 'mine'}">我的</p>
			</div>
		</div>	
	</div>
</template>
<style lang="less" scoped>
.pageWrap{
	box-sizing: border-box;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
}
.navbar{
	position: fixed;
	left: 0;
	bottom: 0;
	box-sizing: border-box;
	background: #eaeaea;
	display: flex;
	justify-content: space-around;
	width: 7.5rem;
	height: .98rem;
	font-size: .24rem;
	color: #333333;
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
export default{
	data(){
		return{
			selected: "index",			//默认首页导航高亮
		}
	},
	created(){
		let tab = sessionStorage.getItem("tab");
		if(!!tab){
			this.selected = tab;
			this.$router.replace(`${tab}`);
		}else{
			this.selected = "index";
			this.$router.replace('/index');
		}
	},
	methods:{
		// 点击切换导航
		tab(tab){
			this.selected = tab;
			sessionStorage.setItem("tab",tab);	//保存底部导航状态
			this.$router.replace(`${tab}`);
		}
	}
}
</script>