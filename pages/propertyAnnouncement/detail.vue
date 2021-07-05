<template>
	<view class="property_detail">
		<view class="_detail">
			<p class='_title'>
				{{
					detali.title
				}}
			</p>
			<view class="_time">
				{{
					detali.time
				}}
			</view>
			<view class="_article">
				{{
					detali.article
				}}
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data(){
			return{
				detali:{
					title:'标题',
					time:'2021-05-09',
					article:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra commodo'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.property_detail{
		width: 100vw;
		min-height: 100vh;
		padding:0 20rpx;
		box-sizing: border-box;
		background-color: #eee;
		._detail{
			background-color: #fff;
			min-height: 100vh;
			padding: 20rpx;
			._title{
				font-size: 48rpx;
				text-align: center;
			}
			._time{
				text-align: right;
				color: #ccc;
				font-size: 24rpx;
				margin-right: 30rpx;
				margin-bottom: 20rpx;
			}
			._article{
				color: #333;
				font-size: 28rpx;
			}
		}
		
	}
</style>
