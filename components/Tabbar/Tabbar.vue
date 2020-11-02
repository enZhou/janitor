<template>
	<view class="tabbar">
		<view v-for="(item,index) in tabbar" :key="index">
			<view class="tabbar-item-icon">
				<image :src="item.iconPath" :mode="item.iconPath" class="iconPath"></image>
				<image :src="item.selectedIconPath" :mode="item.selectedIconPath" class="selectedIconPath"></image>
			</view>
			<text>
				{{
					item.text
				}}
			</text>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				isPath: 1,
				tabbar: [{
						"pagePath": "pages/reservation/reservation",
						"text": "预约",
						"iconPath": "static/icons/reservation.png",
						"selectedIconPath": "static/icons/reservation_y.png"
					},
					{
						"pagePath": "pages/visitorsQrcode/index",
						"text": "通行码",
						"iconPath": "static/icons/qrcode.png",
						"selectedIconPath": "static/icons/qrcode_y.png"
					},
					{
						"pagePath": "pages/main/main",
						"text": "我的",
						"iconPath": "static/icons/reservation.png",
						"selectedIconPath": "static/icons/reservation_y.png"
					}
				]
			};
		},
		computed: {
			...mapState(['menu'])
		},
		methods: {
			...mapMutations(['setMenu'])
		}
	}
</script>

<style>

</style>
