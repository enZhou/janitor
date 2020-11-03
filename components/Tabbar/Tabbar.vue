<template>
	<view class="tabbar">
		<view v-for="(item,index) in menuList" :key="index" class="tabbar-item" :class="{'active':item.pagePath===menu}"
		 @click="clickMenu(item)">
			<view class="tabbar-item-box">
				<view class="tabbar-item-icon">
					<image :src="require(`../../static/icons/${item.iconPath}`)" class="iconPath inIconPath"></image>
					<image :src="require(`../../static/icons/${item.selectedIconPath}`)" class="iconPath selectedIconPath"></image>
				</view>
				<text class="tabbar-txt">
					{{
						item.text
					}}
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		name: "Tabbar",
		data() {
			return {
				isPath: 1,
			};
		},
		computed: {
			...mapState(['menu', 'menuList'])
		},
		mounted() {
			console.log(this.menu)
		},
		methods: {
			...mapMutations(['setMenu']),
			clickMenu(menu) {
				this.setMenu(menu.pagePath);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tabbar {
		position: fixed;
		width: 100%;
		// height: 150rpx;
		background: #fff;
		bottom: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 10rpx;

		.tabbar-item {
			width: 33.3%;
			text-align: center;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			.tabbar-item-icon {
				.iconPath {
					width: 50rpx;
					height: 50rpx;
				}

				.inIconPath {
					display: block;
				}

				.selectedIconPath {
					display: none;
				}
			}

			.tabbar-item-box {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
			}

			&:nth-child(2) {
				.tabbar-item-box {
					width: 120rpx;
					height: 120rpx;
					border-radius: 50%;
					position: relative;
					top: -25rpx;
					background: #fff;

					.iconPath {
						width: 80rpx;
						height: 80rpx;
					}
				}
			}
			
				.tabbar-txt{
					color: #ccc;
				}
		}

		.active {
			.inIconPath {
				display: none !important;
			}

			.selectedIconPath {
				display: block !important;
			}

			.tabbar-txt {
				color: #1296db;
			}
		}
	}
</style>
