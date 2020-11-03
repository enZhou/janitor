import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		menu: sessionStorage.getItem('tabbarItem')||'pages/reservation/reservation',
		menuList: [{
				"pagePath": "pages/reservation/reservation",
				"text": "预约",
				"iconPath": "reservation.png",
				"selectedIconPath": "reservation_y.png"
			},
			{
				"pagePath": "pages/visitorsQrcode/index",
				"text": "通行码",
				"iconPath": "qrcode.png",
				"selectedIconPath": "qrcode_y.png"
			},
			{
				"pagePath": "pages/main/main",
				"text": "我的",
				"iconPath": "my.png",
				"selectedIconPath": "my_y.png"
			}
		]
	},
	mutations: {
		setMenu(state, provider) {
			state.menu = provider;
			sessionStorage.setItem('tabbarItem',provider)
		}
	},
	actions: {

	}
})
export default store
