<template>
	<div>
		<div class="addBox" v-if="isAdds" @click="$emit('update')">
			<div class="san" @click.stop>
				<!-- 确认和取消按钮 -->
				<div class="ans">
					<p class="an" @click="$emit('update')">取消</p>
					<p class="an" @click="subAddress">确认</p>
				</div>	
				<!-- 省市区头部 -->
				<div class="ressTie">
					<div class="tieItem">{{proviceTie}}</div>
					<div class="tieItem">{{cityTie}}</div>
					<div class="tieItem">{{districtTie}}</div>
				</div>
				<!-- 下面列表框 -->
				<div class="ressListBox">
					<!-- 省份框 -->
					<div class="proviceBox">
						<div class="proviceItem" v-for="(item,index) in proviceList" @click="selWhere('provice',index,item.name,item.id)" :class="{fontColor: proviceId == index}">{{item.name}}</div>
					</div>
					<!-- 城市框 -->
					<div class="cityBox">
						<div v-show="showCit">
							<div class="proviceItem" v-for="(item,index) in cityList" @click="selWhere('city',index,item.name,item.id)" :class="{fontColor: cityId == index}">{{item.name}}</div>
						</div>
					</div>
					<!-- 区框 -->
					<div class="districtBox">
						<div v-show="showDis">
							<div class="proviceItem" v-for="(item,index) in countyList" @click="selWhere('district',index,item.name,item.id)" :class="{fontColor: districtId == index}">{{item.name}}</div>
						</div>
					</div>
				</div>
			</div>	
		</div>
	</div>
</template>
<style lang="less" scoped>
/*下面地址选择*/
.addBox{
	background:rgba(0,0,0,.6);
	position: absolute;
	top: 0;
	left: 0;
	width:100%;
	height:100%;
	z-index: 3;
	.san{
		border-top:1px solid #bcbcbc;
		position: fixed;
		left:0;
		bottom: 0;
		width: 100%;
		z-index: 2;

		/*确认取消按钮框*/
		.ans{
			background-color: #f5f5f5;
			padding-left: .23rem;
			padding-right: .23rem;
			display: flex;
			justify-content: space-between;
			width: 100%;
			height: .8rem;
			.an{
				font-size: .3rem;
				color:#ff5858;
				line-height: .8rem;
			}
		}

		/*头部*/
		.ressTie{
			background-color: #ededed;
			border-bottom:1px solid #bcbcbc;
			display: flex;
			justify-content: space-between;
			width: 100%;
			height: .6rem;
			line-height: .6rem;
			font-size: .3rem;
			.tieItem{
				width: 33.33%;
				text-align: center;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
		}
		/*整个列表框*/
		.ressListBox{
			background-color: #ededed;
			display: flex;
			justify-content: space-between;
			width: 100%;
			height: 4.6rem;
			.proviceBox,.cityBox,.districtBox{
				width: 33.33%;
				text-align: center;
				height: 100%;
				overflow-y: scroll; 
			}
			.proviceBox{
				border-right: 1px solid #bcbcbc;
			}
			.districtBox{
				border-left: 1px solid #bcbcbc;
			}
			.proviceItem{
				height: .4rem;
				line-height: .4rem;
				font-size: .28rem;
				color: #666666;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
			.fontColor{
				color:#ff5858;
			}
		}

	}
}
</style>
<script>
import resource from '../api/resource.js'
export default{
	data(){
		return{
			isAdds: this.isAdd,			//默认组件不显示
			address: "",				//最终选中的可提交的省市区id
			proviceTie: "--",			//展示选中的省
			cityTie: "--",				//展示选中的市				
			districtTie: "--",			//展示选中的区			
			proviceList: [],			//省份列表
			cityList:[],				//城市列表
			countyList:[],				//区列表
			proviceId: "-1",			//选择某一个省份高亮
			cityId: "-1",				//选择某一个城市高亮
			districtId: "-1",			//选择某一个区高亮
			pid: "",					//最后提交的省id
			cid: "",					//最后提交的市id
			did: "",					//最后提交的区id
			showCit: false,				//市框默认不显示
			showDis: false,				//区框默认不显示
		}
	},
	props:{
		"isAdd":{
			default:false
		}
	},
	watch:{
		isAdd:function(n,o){
			this.isAdds = n;
		}
	},
	created(){
		// 获取所有省列表
		this.getProviceList();
	},
	methods:{
		// 获取所有省列表
		getProviceList(){
			resource.getprovinces().then(res => {
				if(res.data.code == "1"){
					this.proviceList = res.data.data;
				}else{
					this.$toast(res.data.msg);
				}
			});
		},
		// 获取所有市列表
		getCityList(id){
			resource.getcity({province_id:id}).then(res => {
				if(res.data.code == "1"){
					this.cityList = res.data.data;
				}else{
					this.$toast(res.data.msg);
				}
			});
		},
		// 获取所有区列表
		getDistrictList(id){
			resource.getdistrict({city_id:id}).then(res => {
				if(res.data.code == "1"){
					this.countyList = res.data.data;
				}else{
					this.$toast(res.data.msg);
				}
			});
		},
		// 点击某一个省份或城市或区
		selWhere(selType,index,name,id){
			if(selType == "provice"){
				this.proviceId = index;
				this.cityId = "-1";
				this.districtId = "-1";
				this.proviceTie = name;
				this.pid = id;
				this.showCit = true;
				this.showDis = false;
				this.cityTie = "--",									
				this.districtTie = "--" ,
				this.getCityList(id);
			}else if(selType == "city"){
				this.cityId = index;
				this.districtId = "-1";
				this.cityTie = name;
				this.cid = id;
				this.showDis = true;
				this.districtTie = "--" ,
				this.getDistrictList(id);
			}else if(selType == "district"){
				this.districtId = index;
				this.districtTie = name;
				this.did = id;
			}
		},
		// 点击确定提交地址
		subAddress(){
			if(this.proviceTie == "--" || this.cityTie == "--" || this.districtTie =="--"){
				this.$toast("请选择正确的地址");
			}else{
				this.address = this.pid + "-" + this.cid + "-" + this.did;
				let addressTxt = this.proviceTie + this.cityTie + this.districtTie;
				this.$emit("ok",{addressId:this.address,addressTxt:addressTxt});
			}
		}

	}


}
</script>









