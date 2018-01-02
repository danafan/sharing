
export default{
	//当前状态
	state:{
		text: '默认'
	},
	//异步
	actions:{
		set_txt(state,txt){
			state.commit('SET_TXT',txt);
		}
	},
	//同步
	mutations:{
		SET_TXT(state,txt){
			state.text = txt;
		}
	},
	//状态更新
	getters:{
		get_txt(state){
			return state.text;
		}
	}
}
