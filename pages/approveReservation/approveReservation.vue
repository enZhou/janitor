<template>
	<view class="approve">
		<view class="reservation-box">
			<view class="_title">
				访客
			</view>
			<view class="_info_item">
				<text class="_name">
					姓名:
				</text>
				<text class="_cnt">
					{{
						approve.name
					}}
				</text>
			</view>
			<view class="_info_item">
				<text class="_name">
					手机号:
				</text>
				<text class="_cnt">
					{{
						approve.phone
					}}
				</text>
			</view>
			<view class="_info_item">
				<text class="_name">
					事由:
				</text>
				<text class="_cnt">
					{{
						approve.cause
					}}
				</text>
			</view>
			<view class="_info_item">
				<text class="_name">
					时间:
				</text>
				<text class="_cnt">
					{{
						approve.time
					}}
				</text>
			</view>
		</view>
		<view class="approve-radio">
			<text class="radio_title">上是否限定进入次数:</text>
			<radio-group class="radio-list" @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in radioItems" :key="index">
					<view class="_radio">
						<radio :id="item.name" :value="item.name" :checked="item.checked"></radio>
					</view>
					<view class="_radio">
						<label class="label-2-text" :for="item.name">
							<text>{{item.value}}</text>
						</label>
					</view>
				</label>
			</radio-group>
		</view>

		<view class="approve-limit">
			<text class="_title">限定进入次数:</text>
			<input type="text" v-model="approve.limit" />
		</view>
		<view class="approve-area">
			<textarea v-model="approve.area" placeholder="" />
		</view>
		<view class="approve-btn">
			<button type="warn">拒绝</button>
			<button type="primary">通过</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				radioItems: [{
						name: '1',
						value: '是'
					},
					{
						name: '1',
						value: '否'
					}
				],
				approve: {
					name: '啊啊实',
					phone: "13366662222",
					cause: "送外卖",
					time: "2019-2-31",
					limit: 1,
					area:"adasddasdasdasdas"
				}
			}
		},
		methods: {
			radioChange(e) {
				var checked = e.target.value
				var changed = {}
				for (var i = 0; i < this.radioItems.length; i++) {
					if (checked.indexOf(this.radioItems[i].name) !== -1) {
						changed['radioItems[' + i + '].checked'] = true
					} else {
						changed['radioItems[' + i + '].checked'] = false
					}
				}
				console.log(checked)
			}
		}
	}
</script>

<style lang="scss" scoped>
.approve{
	padding: 20rpx;
	.reservation-box{
		box-shadow: 0 0 20rpx rgba(100,210,197,0.5);
		border-radius: 10rpx;
		margin-bottom: 30rpx;
		background-color: rgba(100,210,197,0.5);
		color: #fff;
		._title{
			width: 100%;
			font-size: 56rpx;
			padding: 15rpx 30rpx;
			border-bottom: 1px solid #fff;
			margin-bottom: 20rpx;
		}
		._info_item{
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			padding: 10rpx 30rpx;
			._name{
				display: inline-block;
				min-width:150rpx ;
			}
		}
	}	
	.approve-radio{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 30rpx;
		.radio_title{
			display: inline-block;
			max-width:350rpx ;
		}
		.radio-list{
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			.uni-list-cell{
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				margin-left: 30rpx;
			}
		}
	}
	.approve-limit{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 30rpx;
		._title{
			display: inline-block;
			min-width: 150rpx;
		}
		input{
			margin-left: 30rpx;
		}
	}
	.approve-area{
		border: 1px solid #eee;
		padding: 30rpx;
		border-radius: 10rpx;
	}
	.approve-btn{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 30rpx;
		button{
			padding: 0 60rpx;
		}
	}
}
</style>
