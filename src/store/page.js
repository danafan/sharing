
export default{
	//当前状态
	state:{
		text: 'index'
	},
	//异步
	actions:{
		set_route(state,txt){
			state.commit('SET_ROUTE',txt);
		}
	},
	//同步
	mutations:{
		SET_ROUTE(state,txt){
			state.text = txt;
		}
	},
	//状态更新
	getters:{
		get_route(state){
			return state.text;
		}
	}
}
