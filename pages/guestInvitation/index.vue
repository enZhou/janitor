<template>
	<view class="guest-invitation">
		<view class="_cnt">
			<label class="item">
				<text class="_tit">来访人姓名</text>
				<input type="text" v-model="guestInfo.name" class="_input" placeholder="请输入您的真实姓名" />
			</label>
			<label class="item">
				<text class="_tit">来访人电话</text>
				<input type="text" v-model="guestInfo.phone" class="_input" placeholder="请输入您的电话" />
			</label>
			<label class="item">
				<text class="_tit">来访日期</text>
				<view class="_input _time">
					<picker class="_pciker" mode="date" :start="startDate" :end="endDate" :value="guestInfo.startTime"  @change="bindSTimeChange">
						<view class="uni-input">{{guestInfo.startTime}}</view>
					</picker>
					至
					<picker class="_pciker" mode="date" :start="startDate" :end="endDate" :value="guestInfo.endTime"  @change="bindETimeChange">
						<view class="uni-input">{{guestInfo.endTime}}</view>
					</picker>
					
				</view>
				<!-- <input type="text" v-model="guestInfo.name" class="_input" placeholder="" /> -->
			</label>
			<label class="item _textarea">
				<text class="_tit">来访事由</text>
				<textarea :value="guestInfo.reason" placeholder="请输入来访事由"class="_input"/>
			</label>
		</view>
		<button type="primary" class="submit">
			生成访客码
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				guestInfo:{
					name:'',
					phone:"",
					startTime:'开始时间',
					endTime:'结束时间',
					reason:''
				}
			}
		},
    computed: {
        startDate() {
            return this.getDate('start');
        },
        endDate() {
            return this.getDate('end');
        }
    },
		methods: {
			bindSTimeChange(e){
				this.guestInfo.startTime = e.target.value
			},
			bindETimeChange(e){
				this.guestInfo.endTime = e.target.value
			},
        getDate(type) {
            const date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();

            if (type === 'start') {
                year = year - 60;
            } else if (type === 'end') {
                year = year + 2;
            }
            month = month > 9 ? month : '0' + month;;
            day = day > 9 ? day : '0' + day;
            return `${year}-${month}-${day}`;
        }
		}
	}
</script>

<style lang="scss" scoped>
.guest-invitation{
	width: 100vw;
	height: 100vh;
	padding: 20rpx;
	box-sizing: border-box;
	background-color: #eee;
	._cnt{
		padding: 20rpx;
		border-radius: 20rpx;
		background-color: #fff;
		.item{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 40rpx;
			._input{
				flex: 1;
				text-align: right;
			}
			&._textarea{
				align-items: flex-start;
			}
			._time{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				margin-left: 20rpx;
				color: #666;
				._pciker{
					display: inline-block;
					width: 200rpx;
				}
			}
			textarea{
				border: 1px solid #ccc;
				margin-left: 20rpx;
				border-radius: 10rpx;
				padding: 20rpx;
				text-align: left !important;
			}
		}
	}
	.submit{
		position: fixed;
		width: 80%;
		left: 50%;
		margin-left: -40%;
		bottom: 30rpx;
	}	
}
</style>
