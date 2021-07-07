<template>
	<view class="content">
		<view class="user-head">
			<view class="_type_box">
					<text>
							您好！{{
								info.name
							}}
					</text>
					<view class="_type" :class="info.type">
						{{
							userType[info.type]
						}}
					</view>
			</view>
			<text class="_vice">
				完成可信认证，开启智慧生活
			</text>
		</view>
		<view class="application">
			<text class="_tit">
				特色应用
			</text>
			<view class="_appList">
				<navigator class="_item"
				 v-for="(application,index) in application" :key='`${index}-app`' :url='application.url'>
					<image :src="`../../static/icons/${application.icon}.svg`" class="_icon"></image>
					<text class="_linkname">
						{{
							application.linkname
						}}
					</text>
				</navigator>
			</view>
		</view>
		<view class="server">
			<text class="_tit">
				特色服务
			</text>
			<view class="_appList">
				<navigator class="_item"
				 v-for="(server,index) in server" :key='index' :url='server.url'>
					<image :src="`../../static/icons/${server.icon}.svg`" class="_icon"></image>
					<text class="_linkname">
						{{
							server.linkname
						}}
					</text>
				</navigator>
			</view>
		</view>
		<view class="life">
			<text class="_tit">
				社区生活
			</text>
			<view class="_appList">
				<navigator class="_item"
				 v-for="(server,index) in life" :key='`${index}-app`' :url='server.url'>
					<image :src="`../../static/icons/${server.icon}.svg`" class="_icon"></image>
					<text class="_linkname">
						{{
							server.linkname
						}}
					</text>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {
					type: "verified",
					name:'用户1'
				},
				userType:{
					'unverified':'未认证',
					'verified':'已认证'
				},
				application:[
					{
						url:'/',
						linkname:"访客邀请",
						icon:'qrcode'
					},
					{
						url:'/',
						linkname:"申请记录",
						icon:'shenqingjilu'
					},
					{
						url:'/',
						linkname:"人脸识别",
						icon:'renlianshibie'
					},
					{
						url:'/',
						linkname:"访客预约",
						icon:'fangkeyuyue'
					}
				],
				server:[
					{
						url:'',
						linkname:"物业公告",
						icon:'gonggao'
					}
				],
				life:[
					{
						url:'/pages/register/index',
						linkname:"注册",
						icon:'gonggao'
					}
				]
			}
		},
		methods: {
	
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		width: 100vw;
		min-height: 100vh;
		box-sizing: border-box;
		background-color: #eee;
		padding: 0 20rpx;
		.user-head{
			background-image: url(../../static/icons/indexBg.jpg);
			background-repeat: no-repeat;
			height:220rpx ;
			border-radius: 10rpx;
			padding: 20rpx;
			color: #fff;
			._type_box{
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				margin-bottom: 30rpx;
				padding-top: 30rpx;
				._type{
					margin-left: 12rpx;
					&.unverified{
						color: red;
					}
					&.verified{
						color: rgb(253,135,8);
					}
				}
				
			}
			._vice{
				font-size: 24rpx;
			}
		}
		.application,
		.server,
		.life{
			position: relative;
			z-index: 1;
			border-color: #fff;
			background-color: #fff;
			border-radius: 10rpx;
			box-shadow: 4rpx 8rpx 24rpx -2rpx rgba($color: #ddd, $alpha: .5);
			margin-top: 20rpx;
			padding: 20rpx 10rpx;
			._tit{
				position: relative;
				font-size: 34rpx;
				padding-left: 30rpx;
				&::before{
					content: '';
					display: inline-block;
					position: absolute;
					left: 0;
					top: 2rpx;
					width: 10rpx;
					height: 100%;
					background-color: red;
				}
			}
			._appList{
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				._item{
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 30%;
					text-align: center;
					padding: 10rpx;
					box-sizing: border-box;
					&:nth-child(3n-1){
						margin: 0 5%;
					}
					._icon{
						width: 80rpx;
						height: 80rpx;
						margin-bottom: 10rpx;
					}
					._linkname{
						font-size: 26rpx;
					}
				}
			}
		}
	
	}
</style>
