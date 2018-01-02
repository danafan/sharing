<template>
	<div>
		<div class="head">
			<p class="title">{{title}}</p>
		</div>
	</div>
</template>
<style lang="less" scoped>
.head{
	position: relative;
	width: 100%;
	height:.88rem;
	background: #f39700;
	display: flex;
	align-items:center;
}
.back{
	position:absolute;
	left:.32rem;
	width: .32rem;
	height: .48rem;
}
.title{
	position:absolute;
	left: 50%;
	transform:translate(-50%);
	font-size: .32rem;
	color: #ffffff;
}
</style>
<script>
import resource from '../api/resource.js'
export default{
	props:{
		title: {
			default: "标题"
		}
	},
	created(){
		// resource.homeList({id:3153}).then(res => {
  //           if (res.data.code == 0) {
  //             console.log(res);
  //           }else{
  //             console.log(res.data.msg);
  //           }
  //         })
	},
	methods:{
		goback(){
			this.$router.go(-1);
		}
	}
}
</script>