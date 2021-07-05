<template>
	<view class="property-announcement">
		<view class="_list" v-for="(list,index) in list" :key='index'>
			<view class="_top">
				<text class="_title">
					{{
						list.tit
					}}
				</text>
				<text class="_time">
					
						{{
							list.time
						}}
				</text>
			</view>
			<view class="_cnt">
				{{
					list.article
				}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					},
					{
						tit:'标题',
						time:"2021-07-20 14:30",
						article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.property-announcement{
	width: 100vw;
	min-height: 100vh;
	padding: 20rpx;
	box-sizing: border-box;
	background-color: #eee;
	padding-top: 20rpx;
	._list{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		background-color: #fff;
		padding: 20rpx;
		border-radius: 20rpx;
		margin-bottom: 10rpx;
		._top{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			._title{
				font-size: 40rpx;
			}
			._time{
				font-size: 24rpx;
			}
		}
		._cnt{
			color: #333;
		}
	}
}
</style>
