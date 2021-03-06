import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		menu: uni.getStorageSync('tabbarItem') || 'pages/reservation/reservation',
		menuList: [{
				"pagePath": "../../pages/reservation/reservation",
				"text": "预约",
				"iconPath": "reservation.png",
				"selectedIconPath": "reservation_y.png"
			},
			{
				"pagePath": "../../pages/visitorsQrcode/index",
				"text": "通行码",
				"iconPath": "qrcode.png",
				"selectedIconPath": "qrcode_y.png"
			},
			{
				"pagePath": "../../pages/main/main",
				"text": "我的",
				"iconPath": "my.png",
				"selectedIconPath": "my_y.png"
			}
		]
	},
	mutations: {
		setMenu(state, provider) {
			let url = `../../${getCurrentPages()[1]}`
			if(state.menu!==provider && url!==provider){
				state.menu = provider;
				uni.navigateTo({
					url: provider,
				});
				uni.setStorageSync('tabbarItem', provider);
			}else{
				console.log(getCurrentPages())
			}
		}
	},
	actions: {

	}
})
export default store
