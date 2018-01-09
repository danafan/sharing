<template>
	<div>
		<div class="back" id="back" @touchstart="start($event)" @touchmove.prevent="move($event)" @touchend="end($event)" @click="$router.go(-1)">
			<img src="../assets/hover button.png">
		</div>
	</div>
</template>
<style lang="less" scoped>
.back{
	z-index: 3;
	position: fixed;
	top: 45%;
	transform:translate(-50%);
	right: -.4rem;
	width: .84rem;
	height: .84rem;
	img{
		position: absolute;
		width: 100%;
		height: 100%;
	}
}
</style>
<script>
export default{
	data(){
		return{
			flag: false,						//默认鼠标没有按下
			cur: {
				x:0,
				y:0
			},
			nx: "",
			ny: "",
			dx:"",
			dy:"",
			x:"",
			y:""
		}
	},
	methods:{
		//返回按钮鼠标按下事件
		start(event){
			let back = document.getElementById("back");
        	this.flag = true;	//已按下
        	let touch ;
        	if(event.touches){
        		touch = event.touches[0];
        	}else {
        		touch = event;
        	}
        	this.cur.x = touch.clientX;	//当前鼠标指针相对于浏览器窗口的横向坐标
        	this.cur.y = touch.clientY;	//当前鼠标指针相对于浏览器窗口的纵向坐标
        	this.dx = back.offsetLeft;	//当前返回按钮的左边框距离可见区域的左边框的距离
        	this.dy = back.offsetTop;	//当前返回按钮的上边框距离可见区域的上边框的距离
        },
        //拖动
        move(event){
        	let back = document.getElementById("back");
        	if(this.flag == true){
        		let touch ;
        		if(event.touches){
        			touch = event.touches[0];
        		}else {
        			touch = event;
        		}
        		this.nx = touch.clientX - this.cur.x;
        		this.ny = touch.clientY - this.cur.y;
        		this.x = this.dx+this.nx;
        		this.y = this.dy+this.ny;
        		back.style.left = this.x+"px";
        		back.style.top = this.y +"px";
        	}
        },
        //鼠标抬起
        end(){
        	this.flag = false;
        },
    }
}
</script>