import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		menu:'reservation',
	},
    mutations: {
		setMenu(state, provider){
			console.log(provider);
			state.menu = provider
		}
	},
    actions: {
		
	}
})
export default store