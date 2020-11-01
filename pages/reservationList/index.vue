<template>
	<view>
		<h2>预约</h2>
		<view class="reservation-box">
			<view class="reservation-type">
				<span>
					{{
						reservationData.reservation
					}}
				</span>
				<h3>
					今日预约
				</h3>
			</view>
			<view class="reservation-type">
				<span>
					{{
						reservationData.wait
					}}
				</span>
				<h3>
					待审批预约
				</h3>
			</view>
			<view class="reservation-type">
				<span>
					{{
						reservationData.approved
					}}
				</span>
				<h3>
					已审批预约
				</h3>
			</view>
		</view>
		<view class="reservation-nav">
			<span>
				{{
					nowTime
				}}
			</span>
			<button type="default">
				全部预约
			</button>
		</view>
		<view class="reservation-list">
			<view v-for="(item,index) in reservationList" :key="index">
				<view class="reservation-item">
					<view class="_top">
						<span class='_name'>
							{{
								item.name
							}}
						</span>
						<span class='_phone'>
							{{
								item.phone
							}}
						</span>
						<span class='_time'>
							{{
								item.approveTime
							}}
						</span>
					</view>
					<view class="_center">
						<span class="_type">
							{{
								appointmentType[item.type]
							}}
						</span>
						<span class="_state">
							{{
								appointmentState[item.state]
							}}
						</span>
					</view>
					<view class="_bottom">
						<span>
							{{
								item.applicationTime
							}}
						</span>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				appointmentType: {
					1: '美团',
					2: '拜访',
					3: '推销'
				},
				appointmentState: {
					1: '未审批',
					2: '已通过',
					3: '已拒绝'
				},
				reservationData: {
					reservation: 0,
					wait: 0,
					approved: 0
				},
				nowTime: new Date().getTime(),
				reservationList: [{
					name: '王璐',
					phone: '18308198574',
					approveTime: new Date().getTime(),
					type: '1',
					state: '1',
					applicationTime: 'new Date().getTime()'
				}]
			};
		},
		methods: {
			createtab() {
				console.log('121')
			}
		}
	}
</script>

<style lang="scss">

</style>
