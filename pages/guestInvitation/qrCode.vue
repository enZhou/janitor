<template>
	<view class="qrcode">
		<p class='title'> 
			进入时，请访客出示二维码给门岗
		</p>
		<view class="qrcode-box">
			<text class="_tit">
				{{
					info.qrcode.name
				}}
			</text>
			<image :src="info.qrcode.url"  class="_qrcode"></image>
			<text>
				{{
					info.qrcode.code
				}}
			</text>
		</view>
		<view class="_user">
			<label class="_item">
				<text class="_tit">来访人员</text>
				<text class="_val">{{
					info._user.name
				}} </text>
			</label>
			<label class="_item">
				<text class="_tit">来访日期</text>
				<text class="_val">{{
					info._user.time
				}} </text>
			</label>
		</view>
		<view class="_authorize">
			<view class="_item" v-for="(_item,index) in info.authorize" :key='index'>
				<image src="../../static/icons/_icon_out.svg" mode="" class="_icon"></image>
				<text>
					{{
						_item.authorizeName
					}}
				</text>
			</view>
		</view>
		<button type="primary" class="shareBtn">分享至访客</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				info:{
					qrcode:{
						name:'水电大厦',
						url:'data:image/png;base64,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',
						code:'base64qq'
					},
					_user:{
						name:'王大锤',
						time:"2021-06-28"
					},
					authorize:[
						{
							id:0,
							authorizeName:'大门出入口A口'
						},
						{
							id:0,
							authorizeName:'大门出入口B口'
						}
					]
					
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.qrcode{
		width: 100vw;
		height: 100vh;
		padding: 20rpx;
		box-sizing: border-box;
		background-color: #eee;
		.title{
			text-align: center;
			padding: 20rpx;
		}
		.qrcode-box{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			margin:50rpx 100rpx ;
			background-color: #fff;
			padding: 10rpx;
			border-radius: 10rpx;
			._tit{
				font-size: 48rpx;
			}
			._qrcode{
				width: 300rpx;
				height: 300rpx;
				margin: 30rpx 0;
			}
		}
		._user{
			background-color: #fff;
			border-radius: 20rpx;
			padding: 20rpx;
			margin-bottom: 30rpx;
				._item{
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					&:nth-child(1){
						margin-bottom: 30rpx;
					}
				}
		}
		._authorize{
			background-color: #fff;
			padding: 20rpx;
			border-radius: 20rpx;
			._item{
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
					margin-bottom: 30rpx;
				&:last-child{
					margin-bottom: 0;
				}
				._icon{
					width: 40rpx;
					height: 40rpx;
					margin-right: 30rpx;
				}
			}
		}
		.shareBtn{
			position: fixed;
			bottom: 30rpx;
			width: 80%;
			left: 50%;
			margin-left: -40%;
		}
	}
</style>
