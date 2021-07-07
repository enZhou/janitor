<template>
	<view class="user-center">
		<view class="_header">
			<label class="_item">
				<text class="_tit">姓名</text>
				<text class="_val">{{
					user.name
				}} </text>
			</label>
			<label class="_item">
				<text class="_tit">手机号</text>
				<text class="_val">{{
					user.phone | mobileFilter
				}} </text>
			</label>
		</view>
		<view class="area-list">
			<view class="area_item" v-for="(areaList,index) in areaList" :key='index' :class="'area-'+areaList.type">
				<view class="_left">
					<p class="_name">
						{{
							areaList.name
						}}
					</p>
					<p class="_department">
						{{
							areaList.departent ||' &nbsp;'
						}}
					</p>
					<p class='_type'>
						{{
							areaType[areaList.type]
						}}
					</p>
					
				</view>
				<view class="_check">
					{{
						index===1?'已选择':'切换'
					}}
				</view>
			</view>
			
		</view>
		<navigator url="./addArea"  class="add-area">
			<button type="primary" >
						新增区域
			</button>
		</navigator>
	</view>
</template>

<script>
	export default {
		filters:{
			mobileFilter(val){
			  let reg = /^(.{3}).*(.{4})$/
			  return val.replace(reg,'$1****$2')
			}
		  },
		data() {
			return {
				user:{
					name:'王大锤',
					phone:'13322221111'
				},
				areaType:{
					permanent:'常驻人员',
					visitor:'访客'
				},
				areaList:[
					{
						name:'水电大厦',
						departent:'安保部',
						type:"permanent"
					},
					{
						name:'汇融广场',
						departent:'',
						type:"visitor"
					}
				]
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
.user-center{
	width: 100vw;
	height: 100vh;
	padding: 20rpx;
	box-sizing: border-box;
	background-color: #eee;
	._header{
		padding: 20rpx;
		border-radius: 20rpx;
		background-color: #53b6df;
		box-shadow: 4rpx 8rpx 24rpx -2rpx rgba($color: #aaa, $alpha: .5);
		margin-bottom: 100rpx;
		color: #fff;
		._item{
			display: block;
			&:nth-child(1){
				margin-bottom: 30rpx;
			}
			._tit{
				display: inline-block;
				min-width: 140rpx;
			}
			._val{
				color: #eee;
			}
		}
		
	}
	.area-list{
		.area_item{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx 40rpx;
			border-radius: 20rpx;
			background-color: #53b6df;
			box-shadow: 4rpx 8rpx 24rpx -2rpx rgba($color: #aaa, $alpha: .5);
			margin-bottom: 20rpx;
			color: #fff;
		}
		.area-permanent{
			background-color: rgba($color: rgb(26,198,5), $alpha: .5);
		}
		.area-visitor{
			background-color: rgba($color: rgb(11,102,220), $alpha: .5);
		}
	}
	.add-area{
		position: fixed;
		width: 80%;
		left: 50%;
		margin-left: -40%;
		
		bottom: 30rpx;
	}
}
</style>
