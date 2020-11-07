<template>
	<!-- v-model -->
	
	<!-- 使用组件 -->
	<!-- <vvSelect placeholder="请选择所属类别" :list="categorys" label="name" valueKey="id" @change="pickerChange"></vvSelect> -->
	<picker mode="multiSelector"
		@change="bindMultiPickerChange"
		@columnchange="bindMultiPickerColumnChange"
		range-key="name"
		:value="multiIndex"
    :disabled="disabled"
		:range="multiArray">
		
		<view class="vv-input__body text-right">
			<view class="vv-input__control">
				<text v-if="checkLabels" :class="{'disabled': disabled}">{{checkLabels}}</text>
				<text class="vv-input__placeholder" v-else>{{placeholder}}</text>
			</view>
			
			<!-- <uni-icons type="arrowright" size="14" color="#808080"></uni-icons> -->
		</view>
	</picker>
</template>

<script>

	/**
	 * vv-select 选择
	 * @description picker再封装
	 * @property {String} valueKey 绑定的key
	 * @property {String} label 绑定的label
	 * @property {Array} list 数据
	 * @property {Array} level 层级 默认3级 即：省-市-区
	 * @property {Boolean} disabled 是否禁用
	 * @event {Function} change 
	 */

	export default {
		name: 'vv-select-area',
		props: {
			value: {
				type: [Array]
			},
			placeholder: {
				type: String,
				default: '请选择'
			},
			list: {
				type: [Array]
			},
			level: {
				type: Number,
				default: 3
			},
      disabled: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				city: [],
				multiArray: [],
				multiIndex: [],
				checkLabels: '',
				checkValues: [],
			}
		},
		watch: {
			value: {
				handler: function(newVal) {
					if (this.list.length > 0 && this.value.length > 0) {
						this.init();
					}
				},
				immediate: true
			},
			list: {
				handler: function(newVal) {
					if (this.list.length > 0) {
						this.init();
					}
					
				},
				immediate: true
			}
		},
		created() {
		},
		methods: {
			init: function() {
				this.city = [...this.list];
				this.multiArray[0] = this.city;
				this.setMultiData(0, 0); // 默认值
				if (this.value && this.value.length > 0) {
					// 有初始值
					this.setCheck(this.value);
				}
			},
			setCheck: function(codes) {
				if (codes.length == 0 ) return false;
				let indexs = [];
				let _labes = [];
				for(let i = 0, l = codes.length; i < l; i++) {
					let index = this.multiArray[i].findIndex((item)=> {return item.id == codes[i]});
					indexs.push(index);
					let item = this.multiArray[i].find((item)=> {return item.id == codes[i]});
					_labes.push(item.name);
					this.setMultiData(i, index);
				}
				this.multiIndex = indexs;
				this.checkValues = codes;
				this.checkLabels = _labes.join('-');
			},
			setMultiData: function(column,index) {
				var data = {
					multiArray: this.multiArray,
					multiIndex: this.multiIndex
				};
				data.multiIndex[column] = index; // 
				
				switch (column) {
					case 0: //拖动第1列
						if (this.city[index].childs) {
							data.multiArray[1] = this.city[index].childs;
							if (data.multiArray[1][0] && data.multiArray[1][0].childs) {
								data.multiArray[2] = data.multiArray[1][0].childs;
								
								if (this.level > 3) {
									if (data.multiArray[2][0] && data.multiArray[2][0].childs) {
										data.multiArray[3] = data.multiArray[2][0].childs;
									} else {
										data.multiArray[3] = [];
									}
								}
							} else {
								data.multiArray[2] = [];
								if (this.level > 3) {
									data.multiArray[3] = [];
								}
							}
						} else {
							data.multiArray[1] = [];
							data.multiArray[2] = [];
							if (this.level > 3) {
								data.multiArray[3] = [];
							}
						}
						
						
						this.multiIndex.splice(1, 1, 0)
						this.multiIndex.splice(2, 1, 0)
						if (this.level > 3) {
							this.multiIndex.splice(3, 1, 0)
						}
						break
					case 1: //拖动第2列
						if (data.multiArray[1][index] && data.multiArray[1][index].childs) {
							data.multiArray[2] = data.multiArray[1][index].childs;
							if (this.level > 3) {
								if (data.multiArray[2][0] && data.multiArray[2][0].childs) {
									data.multiArray[3] = data.multiArray[2][0].childs;
								} else {
									data.multiArray[3] = [];
								}
							}
						} else {
							data.multiArray[2] = [];
							if (this.level > 3) {
								data.multiArray[3] = [];
							}
						}
						this.multiIndex.splice(2, 1, 0)
						if (this.level > 3) {
							this.multiIndex.splice(3, 1, 0)
						}
						break
					case 2: //拖动第3列
						if (this.level < 4) {
							break
						}
						if (data.multiArray[2][index] && data.multiArray[2][index].childs) {
							data.multiArray[3] = data.multiArray[2][index].childs;
						} else {
							data.multiArray[3] = [];
						}
						this.multiIndex.splice(3, 1, 0)
						break
				}
				
				this.multiArray = data.multiArray;
				this.multiIndex = data.multiIndex;
				this.$forceUpdate();
			},
			
			bindMultiPickerColumnChange: function(e) {
				
				this.setMultiData(e.detail.column,e.detail.value);
				
			},
			bindMultiPickerChange: function(e) {
				let _labes = [];
				let _values = [];
				for(let i = 0, l = this.multiArray.length; i < l; i++) {
					let item = this.multiArray[i];
					let index = this.multiIndex[i];
					if (item.length === 0) {
						break;
					}
					_labes.push(item[index].name);
					_values.push(item[index].id);
				}
				console.log(_labes,_values)
				// console.log(
				//   this.multiArray[0][e.detail.value[0]],
				//   this.multiArray[1][e.detail.value[1]]
				// ); // {value: "431000", label: "郴州市", level: 2}
				// this.multiIndex = e.detail.value;
				// this.$apply();
				this.checkLabels = _labes.join('-');
				this.checkValues = _values;
				// 返回这个值到父级
				this.$emit('change',_values);
				this.$emit('input',_values);
				this.$emit('on-change',_values);
			},
			
		}
	}
</script>
<style lang="scss" scoped>
	
</style>
