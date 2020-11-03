<template>
	<view class="visitors-qrcode">
		<h2 class='visitors-qrcode_title'>我的访客码</h2>
		<view class="qrcode-box">
			<h3>
				{{
					qrcode.address
				}}
			</h3>
			<image :src="qrcode.img" class="_qrcode"></image>
			<view class="visitors-info">
				<view class="visitors-info_item">
					<span>
						姓名：
					</span>
					<p>
						{{qrcode.name}}
					</p>
				</view>
				<view class="visitors-info_item">
					<span>
						电话：
					</span>
					<p>
						{{qrcode.phone}}
					</p>
				</view>
				<view class="visitors-info_item">
					<span>
						到访时间：
					</span>
					<p>
						{{qrcode.time}}
					</p>
				</view>

			</view>
		</view>
		<button type="primary" class="scan_it">扫一扫</button>
		<Tabbar />
	</view>
</template>

<script>
	import Tabbar from '../../components/Tabbar/Tabbar.vue'
	export default {
		components: {
			Tabbar
		},
		data() {
			return {
				qrcode: {
					address: "水电大厦A口",
					img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAEECAYAAADOCEoKAAAXb0lEQVR4Xu3c23YbSw4D0Pj/PzqzlDU5vsS2dlWju0oW5nVYIAiSEKWT5OX379+/f/V/VaAKVIFfv3691BA6B1WgCvxVoIbQWagCVeA/BWoIHYYqUAVqCJ2BKlAF/lWgF0KnogpUgV4InYEqUAV6IXQGqkAV+EaBfmXoeFSBKjD2leHl5aWSvVHg0f8sV7KfqoXkVCwZRsknOD8lRrWlC6Hivh8LFXfXYUr2U7WQnIoluko+wfkpMaptDWGi4yruBPQlT5LLolpITsUSkSSf4PyUGNW2hjDRcRV3AvqSJ8llUS0kp2KJSJJPcH5KjGpbQ5jouIo7AX3Jk+SyqBaSU7FEJMknOD8lRrWtIUx0XMWdgL7kSXJZVAvJqVgikuQTnJ8So9rWECY6ruJOQF/yJLksqoXkVCwRSfIJzk+JUW1rCBMdV3EnoC95klwW1UJyKpaIJPkE56fEqLY1hImOq7gT0Jc8SS6LaiE5FUtEknyC81NiVNsawkTHVdwJ6EueJJdFtZCciiUiST7B+Skxqm3UEDTpriLrEEmdiiVaSL4bjuZUPOGWjEnyT2Ila0xjpeusIbzpUFJcxZIB0QXWnIon3JIxSf5JrGSNaax0nTWEGkJ6RqfxksOdxJou6IKH6TprCDWEC8bWUiSHO4ll7NdEpeusIdQQ1kzyJ1mTw53E2kagkzX78zuU/DPsFfd9J+Q7uGomwyb5+qPieyVVf9VW+rQiJl1nDaEXwoo5/jRncriTWNsI1Avh2lYkh0ixpEL9FNOciifckjFJ/kmsZI1prHSdvRB6IaRndBovOdxJrOmCLniYrvNyQ9ACklrqJ6JyUzypQXJqPsESTiMxym0EMxGrWih/xUtw/4sh3JSXYC35UVELuFrYVT/KiR7czAX/9qVyS/ZTsETXG47yVzzhpjHCTXkJVg3hQ2fS4krjJSc3s4bwn+Siaw3h3wntV4aTfkMQM9CrpIagar7G1RDea8YzdPWfQ9BGjY/A1y9YDPyEVTypQfTQfIIlnEZilNsIZiJWtVD+ipfg3t8Qkip+gpVuuuJJWTJomk+whNNIjHIbwUzEqhbKX/ES3GsISRVrCCerOXeKXkrqhL8KXkM46bv1rsLq9/lbnH6qyBKIHppPsITTSIxyG8FMxKoWyl/xEtx7ISRV7IVwspq9EK4SWMxKjUqw/nwo9kfF1/amxZXBkZzcTPxRVHhpjHJTvFSc6Dpy7Sleir9yU17apxrCA3w10mYmh1EHLZlTsUQP5S9YI18ntQaJE27xOnshnHMhaKNSgyE4IzFJ/iN5JXbJomx6fWmfRLN+ZfgwfUlxFSu1AIIzEpPkP5JXYmW4lb9g9UJ4kEWR4dHvYiNNlyHSgZQaJJ/gjMQk+Y/klVjRQ/kL1shsCH+NEW7xOvuVoV8ZPhtQHTQd7mTckkXpV4b9F0WHTAZo5FNA8JILJflUC41L8tecGid6KH/BGpkNrUHihFu8zl4I+xufDIYM2EiMDtoIZipW9FD+glVD6G8I386uDJEOpCyJ5BOckZgk/5G8Eit6KH/BqiHUEGoIC74zixncYmSJawjv1RTN/hhfvzL0K8Nni6gLpUucjJPhVv6C1QuhF8LhCyG5AGksWRZdFOV2dU7Jp9dGDaGGUEP4/Vt3neJkQZMmJPlqCP+2rl8Z3miSHiLalAVBUmdyOfUTNplTaqwh1BC+Xb/0EC3YdUopdSaXs4ZAbfknSHogvRwyvv6oeM6PinMjcM0rGSIZxhG2V+eUfEOLsuC/ukgP4nXWEGoIny22DGMNYUSB8VjpQQ1hXFf679Z61o58qkxQveSJDJEM4wjZq3NKvpFeKt6IJvdipQfKS7D+7EAvhF4IvRDureavX7p495E8QpZYeQlWDeFDb9LieuuvjZQ6dYCU+dU5JV8vhH+7d/mFoAO0Ii45RCuwVLPksq+oU/gneamuK+LSddYQ3nQxKe4KLB1IWSjFWlGn8E/yUi1WxKXrrCHUEA7NcXIgd8U6JNDJj5OaLfkN4WR9DsEnxV2BpcXLJ6xirahT+Cd5qRYr4tJ19kLohXBojpMDuSvWIYFOfpzUrBfCif+VIdkoxdLZk09YxVJuknNXLNViRVxSsxpCDeHwDCcHcleswyKdCJDUrIZQQzg8qsmB3BXrsEgnAiQ1qyHUEA6PanIgd8U6LNKJAEnNagg1hMOjmhzIXbEOi3QiQFKzuCGcWPdW0I/+A5kMkdT4Z4DwrwUL3gqsrQbrRDKifw1hsgEi7orhFl66xEmsW07BW6HZ5Ag83DPRv4Yw2VYRd8VwC68awmTTH/wZz0byrz8/uGZMX8StIbyXc1fNuOkPHij690KYbLKIW0OoIUyO1ynPZGZrCJPSi7g1hBrC5Hid8kxmtoYwKb2IW0OoIUyO1ynPZGZrCJPSi7g1hBrC5Hid8kxmtoYwKb2IW0OoIUyO1ynPZGZrCJPSi7g1hBrC5Hid8kxmlg3hFIYF3VoBNbQVRehwr+D26DnpH0h59CLLf1yBGsK4Zj/hRQ3hJ3TxhBpqCCeI+gCQNYQHaNIKijWEFaqvz1lDWN+DLRnUELZsy+mkaginS/yYCWoIj9m3o6xrCEcV/KHvawg/tLF3yqohPGff71ZdQ7gr0Y8MqCH8yLYeL6qGcFzDR0QgQ9h5OER0/YMsrfNVTdVM9L/FiLaa82qsG3/hJrwUK60Z9+kZ/oEUaaY2QIVdEZesU7G0TlkWzXk1li6x8FIsnUfVjPtUQ3iVShuq4l4dp8MhdSqW1pjMeTWWLrHwUqwagk7WRJwOtzZ0gsIlT5J1KpYWJtpqzquxdImFl2LVEHSyJuKSgzaR/rInyToVS4uTZdGcV2PpEgsvxaoh6GRNxCUHbSL9ZU+SdSqWFifLojmvxtIlFl6KVUPQyZqISw7aRPrLniTrVCwtTpZFc16NpUssvBSrhqCTNRGXHLSJ9Jc9SdapWFqcLIvmvBpLl1h4KVYNQSdrIi45aBPpL3uSrFOxtDhZFs15NZYusfBSrBqCTtZEXHLQJtJf9iRZp2JpcbIsmvNqLF1i4aVYNYQPk6XDIQO5c6OEm2ohWCMDebW2O/MXLdJ9SuYUrD8mtOsfTFJxpdD0oAme8r8aq4bwfmJEf5mxEV1X5NQaaghvlNp1iZO8RgZXhkiHW2pIYgl3PcsVS2pclVNrqCHUEHRWPo1LLnESS4vSnIJXQxCVJmNUXIHXpmtOwdsVqxdCvzJ8tzO9EHohiKd+GSPmqCaUxNKiNKfgJT8EJJ/qqlh/vs70R8VXuZIN3RUrPUS6UKJHEkuXQHMKntTY3xBEyU9iVFyB16ZrTsHbFauG0K8M/crw8iK+Qf8qjjp8DeG95KKHGO0qQ5MBkhp1fiRfWgv+yqDkJG5F04VXulGaU+JWDJrwOmMgJa/OkGCptoKlMcp/CTf5DUELlbitxcBLQupMxuhgqLYruCVzJutUbVfwX8KthvDa6uSgJQdIB2MFf+WW1CNZ5878l3CrIdQQjizrkqENXnI781/CrYZQQ6ghHFFg/K1eODWEN9ouESP4yTM+Jl+/UC100FZwS+ZM1qnaruC/hFsvhF4IR4Z9ydAGjXtn/ku41RBqCDWEIwqMv9ULp4bQrwyfTpcOhg7a+Agf/zqTzJmsU7VdwX8Jt14IvRCODPuSoe1XhiMt+/Yt/eUmzb7CuR89p2orcbqcSc2El8as4J/MmcRKa6Z4NYSJryldKB2vsbidF0p6vjN/7UQNoYags3J63M4LVUOYaL+IprCPPhxaZzJuhWaPzj+pWRJLddWcitcLoReCzsrpcTrcu37w7Mxfm1dDqCHorJwet/NCiQntzF+bV0OoIeisnB6380LVECbaL6Ip7KMPh9aZjFuh2aPzT2qWxFJdNafi9ULohaCzcnqcDveuHzw789fm1RBqCDorp8ftvFBiQjvz1+aRIYgYt4QqiJDTnIKlvDSn4gk3yan5BEs4pXupOR89Lqn/qh7UEN5MoTZUF1QGXHJqPsESTquGUbntGpfUf1UPagg1hE/3S01o1+VcwauG8EH15BAlxVVemlPxZCglp+YTLOG06tNJue0al9R/VQ96IfRC6IUQcpgaQi+Ew6MkQ9QL4bDMlwBIL0eIaN9HMO/F9kLohdAL4d6W4P9fQ+iFgKPydZgMkX5SCJYS1pyK9wxxSf37G8KHiUmKq8OtORVPlkByaj7BEk6rhlG57RqX1H9VD6JfGaRROtyCdYtJNiHJLclLtVD+SW7JnEmsFZopf+UmfYrnlH9kVYhpkfECNv0HN5OapbVNctN+Ss4k1grNlL9yS2rGOWsIr1IlGyrN1CZpnPJPckvmTGKt0Ez5KzfpUzxnDaGGoAP6WZwOZHK4BUtrWsFfuUmdyp9z1hBqCDosNYTvlYovJ3wdjuesIdQQagj3FVjyaV1DuN+YjxHSKEVNum2SV5p/kptqJjmTWCs0U/7KLakZ5+yF0AtBh6VfGfqV4Y8C4lQ6VCtcdAW3pGZp/klu2k/JmcRaoZnyV25JzThnL4ReCDosvRB6IQxdCOKQ4nq3pIKVvl50MZSb4qXi0tqmeClOkr9iKTeJ23UuhPvfmOgfXRZBtFGCVUN43+q0tiODlIhN8lesBO+/GDqzyZxprBrChKK7Nl6X4Bn4qxYT7f/yya66jtRYQxhR6/+xuzZel+AZ+KsWE+2vIai4MmhJrH5l6FeGr7ZT56yG8GGGkv+VoYaQHK9xLF0C6dN49uMvkvwV6zjrV4RddR2psV8ZRtTqV4YJtfyJLrEsnmI5u/uRwus+ytqIGsKE/rs2XpfgGfirFhPt728IKq4MWhKrvyH0N4T+hpC0tF+/eiFM6CnGNwF7+EnabA8TGgRI8lesQYrfhu86FyM1bmsII0Xci003SoYtmVPy3dPgrP8/WadyFD125aU1aly6zhqCKv8m7uqBlHwTZUSepAdSSIkeu/KS+kZi0nXWEEbU/3/s1QMp+SbKiDxJD6SQEj125SX1jcSk66whjKhfQ/hHrfRASjtqCK8qpfWvIcgEfoi5eiAl30QZkSfpgRRSoseuvKS+kZh0nTWEEfV7IfRC+GZexKgmxu3bJzWECUXjol38j1+uGDSVOa2t5BU9duUl9Y3EpOvshTCifi+EXgi9EPzfVBS3Enef2NFrz6peCP/pLT1P91NmaFdeaS3SdW57IWihMhzpJuyKp5oJ/+oqKr2PSep/Q5YexHP2rz+PN37XF8nhkGHcVYdVvJL61xA+dFHF7eC+CqeaycJUV1GpF8Lh7+o6aDrcijfe3sd7oZpJZdVVVKoh1BDG5+SyFzWEy6T+NFFS/35l6FeGw9OcHMheCOPtSOpfQ6ghjE/gpGaSqIYgKvUrQ78yjM/JZS+Sn1A1hPG2JfXvhTD5adfB7X9lGF/dc17UECaWWBdYxVW8c0ZgL1TVTFhXV1HpSb8yjEvTF8mFSi76qlNUJkI1S+uR5CZYK/gLrz+zIX9SUcEa96qADrdolh4g4ZbOKXUKrxvOztykzhX8hVcNQVWaiNPhFuj0AAm3dE6pU3jVEETJ+ZheCPPafftSh1vSp5dTuKVzSp3Cq4YgSs7H1BDmtashhLWrIYQFnYCrIUyIJk90uAUr/Wkt3NI5pU7h1QtBlJyPqSHMa9cLIaxdDSEs6ARcDWFCNHmiwy1Y6U9r4ZbOKXUKr14IouR8TA1hXrteCGHtaghhQSfgyBC0URP5H/KJfHqqZoKlIu2cU2uQONEsrYXgCa9bfYIlOpxxLdUQVPk3cdJ4bbpgKcWdc2oNEieapbUQPOFVQ5AOP1iMNF4GKO3wO+dMtniF/qKt8KohJCdhEyxpvAxQDWGuoSv0l34KrxrCXM+3fiWNlwGqIcy1eYX+0k/hVUOY6/nWr6TxMkA1hLk2r9Bf+im8aghzPd/6lTReBqiGMNfmFfpLP4VXDWGu51u/ksbLANUQ5tq8Qn/pp/CqIcz1fOtX0ngZoBrCXJtX6C/9FF41hLmeb/1KGi8DVEOYa/MK/aWfwuupDEEFmRuD819J01cs8QpdVYvzu/JvhmfRY0md8k+o6XCsKCA5kCvqlJwrdBVeSe1HsJ5FjyV11hBeR1GXINkoyZnMp4snvBQrHfcseiyps4ZQQ/hsYWsI71VZoUcNIf1RMoinTU82SnIm86kkwkux0nHPoseSOnsh9ELohXDfslYYZA3hfl9OjdCmJxslOZP5VEDhpVjpuGfRY0mdvRB6IfRCuG9ZKwyyhnC/L6dGaNOTjZKcyXwqoPBSrHTcs+ixpM5eCL0QeiHct6wVBvkUhrCzsMpNGqVY90fRI4TXDU24KZazux8pvO6j7B+h2ooeiqWqRP9NRSEnRSp5jRNeuii3OMF79DqlRtVf41ZoptyScaqt6KFYyr+G8EYpaUANQUdrPE71H0fe64UuseihWKpADaGG8OmspAdNBlIWQHB2j1FtRQ/FUk1qCDWEGoJuSyhOl7iGEBL8I0yyAf3KcFKT8MfO87Jfh5ycR8XS6noh9ELohaDbEorTJe6FEBK8F8L3Qq4YNGmt8BKc3WNqCBOfwsmmJhvQrwzJzrzHqiGM66GzrV3rV4YJs5Im7Dzcwp8H6OWFQpM5KSEGaZ9W8FduUqryryHUEGSevozRodWBPERm4vHO/JWblK361xBqCDJPNYTfvw/pNPO4hjCjGrxhdwyev8lmQolDIaqHgGqdyZzCS2N25q/cpFbVvxdCLwSZp14IvRBeZ0CdSlxIsQ5N6YfHwuv2RLkJnmIl61Qs4a9YWmcyp3KTuJ35KzepU/XvhdALQeapF0IvhF4IX22BuG3S3Q9t7CePhb/m1DqTOZWbxO3MX7lJnap/L4ReCDJPvRB6IfRC6IVw3yv0U0w/oe5nzEbszF+5iSKqfy+ExReCNkqanhwgyXeLSfLXnBKnWih/wUtiqbbCS7FucTWEGoLs15cxugSHkkw8ji8K/BkV1SLJLYlVQ/gwaElxk1i6D5pT8SROl0CwkjGqhfIXvCSWfqoLL8WqIdQQDu+gLsHhRIMA8UXphfDagaS4ijXY/2/DdWiVm+AlsVQLzal4EidaCE46RrVQ/oKXxNJPdeGlWL0QeiEc3kNdgsOJBgHii9ILoRfCVzMoS5AeSNkHzSlYGiNaKFYyTrVQ/oKXxNJPdeGlWL0QeiEc3kFdgsOJBgHii9ILoRdCL4T7W1hDeNVItUiaVRKrF0IvhPsbfydCl+BwokGA+KL0QjjnQhjs66XhySFSrGSBupwruK2oU3KqFqrt1TnT/C//k4oi2KqYpLiKlaxVh3YFtxV1Sk7VQrW9Omeafw3hTQeT4iqWDJDG6NCu4KY1SJzWKViqxa450/xrCDUE2ZutYnZdThUpucRJrCU/KqpoK+KS4ipWsk5dlBXcVtQpOVUL1fbqnGn+vRB6IcgMbxWz63KqSMklTmL1QvjQwaS4iqVDJHG6KCu4CX+N0ToFT7XYNWeafy+EXgiyN1vF7LqcKlJyiZNYvRB6IegMbxVXQ3htx9aGsNXUnEhGBlIbdSLNQ9BS46EEnzxWzYSbYmkNK3IqN4kT/vELQYj9hBgRNz2QV+smNaY5qWbCTbG0hhU5lZvECf8agij5SYyImx7ISarTz6TGafAvHqpmwk2xtIYVOZWbxAn/GoIoWUOYVGn8mS6xDLdiKcsVOZWbxAn/GoIoWUOYVGn8mS6xDLdiKcsVOZWbxAn/GoIoWUOYVGn8mS6xDLdiKcsVOZWbxAn/GoIoWUOYVGn8mS6xDLdiKcsVOZWbxAn/GoIoWUOYVGn8mS6xDLdiKcsVOZWbxAn/GoIoWUOYVGn8mS6xDLdiKcsVOZWbxAn/GoIoWUOYVGn8mS6xDLdiKcsVOZWbxAl/NgRJ2JgqUAUeXwH6y02PX2YrqAJVQBSoIYhKjakCT6JADeFJGt0yq4AoUEMQlRpTBZ5EgRrCkzS6ZVYBUaCGICo1pgo8iQI1hCdpdMusAqJADUFUakwVeBIFaghP0uiWWQVEgf8BMnBlP48mZhQAAAAASUVORK5CYII=',
					name: "王*路",
					phone: "133****4422",
					time: "2020.02.02-2020.02.03"
				}
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.visitors-qrcode {
		text-align: center;
		padding: 0 20rpx;

		&_title {
			font-size: 48rpx;
			padding: 20rpx 0;
		}

		.qrcode-box {
			box-shadow: 0 0 20rpx #ccc;
			border-radius: 20rpx;
			padding: 20rpx;

			._qrcode {
				width: 500rpx;
				height: 500rpx;
			}

			.visitors-info {
				&_item {
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					padding: 10rpx;
					span{
						display: inline-block;
						width: 200rpx;
						text-align: left;
					}
				}
			}
		}
		.scan_it{
			margin-top: 30rpx;
		}
	}
</style>
