<template>
	<view class="bg-light h-vh100">
		<!-- 头部 -->
		<view class="position-relative" style="height: 375rpx">
			<!-- 红色背景图 -->
			<!-- <image src="/static/person/user_bg.png" style="height: 375rpx;border-radius: 0 0 5% 5%;"></image> -->
			<image src="/static/person/user_bg.png" style="height: 375rpx;"></image>
			<!-- 头像部分 -->
			<view class="position-absolute" style="top:125rpx">
				<view class="d-flex a-center">
					<image :src="userAvataur ||'/static/person/missing-face.png' " mode=""
					class="rounded-half" style="margin-left: 30rpx;width: 130rpx;height: 130rpx;"></image>
					<button open-type="getUserInfo" @getuserinfo="login()" style="height: 60rpx;" 
					class="ml-2 d-flex a-center j-center font-30 ">
						{{userName || '请登录'}}
					</button>
				</view>
			</view>
			
			<view class="position-absolute px-3 mt-1" style="bottom:-16rpx;">
				<view class="position-relative">
					<image src="/static/person/vip-card.png" style="width: 690rpx;height: 100rpx;opacity:0.6;border-radius: 12rpx;"></image>
					<view class="position-absolute w-100" style="top: 0rpx;height: 60rpx;">
						<view class="d-flex j-sb px-2 mt-2 text-yellow">
							<view>积分：<text class="font-40">5200</text></view>
							<view class="px-1 bg-gradual-orange text-black rounded-12 d-flex a-center">每日签到</view>
						</view>
					</view>
				</view>
			</view>
			 <!-- <view class="pl-4 pt-4 d-flex a-center bg-white" style="height: 180rpx;">
				<template v-if="!userAvataur">
					<image src="/static/person/p10.jpg" style="width: 120rpx;height: 120rpx;" class="rounded-half mr-2"></image>
					 <button open-type="getUserInfo" @getuserinfo="login()">
						请登录
					</button>
					<u-button size="mini" ripple="true" open-type="getUserInfo" @getuserinfo="login()">
						请登录
					</u-button>
				</template>
				<template v-else>
					<image :src="userAvataur" style="width: 120rpx;height: 120rpx;" class="rounded-half mr-2"></image>
					<view class="d-flex flex-column j-center" >
						<text class="font-35 ">{{userName}}</text>
						<view class=" line-h">
							<text class="font-30 mr-1">积分:</text>
							<text class="font-35 border-bottom-red">{{userIntegral}}</text>
						</view>
					</view>
				</template>
				
			</view> --> 
		</view>
		<divider></divider>
		<!-- 下面主体 --> 
		  <!-- 两行 -->
		<view class="d-flex a-center j-sb px-3 py-2 border-bottom" @click="$navigate('per-convert')">
			<view class="d-flex a-center">
				<u-icon name="grid" size="46" color="#fe505a"></u-icon>
				<text class="ml-1 font-33">兑换记录</text>
			</view>
			<u-icon name="arrow-right" size="30" color="text-muted"></u-icon>
		</view>
		<view class="d-flex a-center j-sb px-3 py-2 border-bottom"  @click="$navigate('per-address')">
			<view class="d-flex a-center">
				<u-icon name="gift" size="46" color="#fe505a"></u-icon>
				<text class="ml-1 font-33">收货地址</text>
			</view>
			<u-icon name="arrow-right" size="30" color="text-muted"></u-icon>
		</view>
		<divider></divider>
		  <!-- 四行 -->
		<view class="d-flex a-center j-sb px-3 py-2 border-bottom">
			<view class="d-flex a-center" @click="$navigate('item.goto')">
				<u-icon name="rmb-circle" size="46" color="#fe505a"></u-icon>
				<text class="ml-1 font-33">意见反馈</text>
			</view>
			<u-icon name="arrow-right" size="30" color="text-muted"></u-icon>
		</view>
		<view class="d-flex a-center j-sb px-3 py-2 border-bottom">
			<view class="d-flex a-center" @click="$navigate('item.goto')">
				<u-icon name="map" size="46" color="#fe505a"></u-icon>
				<text class="ml-1 font-33">常见问题</text>
			</view>
			<u-icon name="arrow-right" size="30" color="text-muted"></u-icon>
		</view>
		<view class="d-flex a-center j-sb px-3 py-2 border-bottom">
			<view class="d-flex a-center" @click="$navigate('item.goto')">
				<u-icon name="order" size="46" color="#fe505a"></u-icon>
				<text class="ml-1 font-33">隐私条款</text>
			</view>
			<u-icon name="arrow-right" size="30" color="text-muted"></u-icon>
		</view>
		<view class="d-flex a-center j-sb px-3 py-2 border-bottom">
			<view class="d-flex a-center" @click="$navigate('item.goto')">
				<u-icon name="heart" size="46" color="#fe505a"></u-icon>
				<text class="ml-1 font-33">关于我们</text>
			</view>
			<u-icon name="arrow-right" size="30" color="text-muted"></u-icon>
		</view>
		<!-- 积分兑换 -->
		<view class="mx-3">
			<view class="border-bottom my-3" style="height: 60rpx;">
				<input type="text" placeholder="请输入兑换码" />
			</view>
			<!-- <u-field v-model="mobile" placeholder="请输入兑换码" required :error-message="errorMessage" style="background-color: #0F6674;"></u-field> -->
			<view class="bg-yellow d-flex a-center j-center text-white rounded-12 py-1" hover-class="bg-yellow-light">
				点击兑换
			</view>
		</view>
		<!-- 底部客服 -->
		<view class="fixed-bottom pb-1 font-25 text-light-muted d-flex j-center a-center">
			客服电话：400-0286-519
		</view>
		
	</view> 
</template>

<script>
	export default {
		data() {
			return {
				userAvataur: '',
				userName: "",
				userIntegral: "",
				errorMessage: ""
			}
		},
		methods: {
			run() {
				uni.authorize({
				    scope: 'scope.userLocation',
				    success() {
				        uni.getLocation()
				    }
				})
			},
			login() {
				console.log('login');
				uni.login({
				  provider: 'weixin',
				  success:  (res) => {
				    console.log(res); 
						// "021YGdoM1YGuz81R6KlM1cdboM1YGdoI"
						// 061evGCC1pktw80cV3zC1qUICC1evGCX
						// 获取用户信息
						 uni.getUserInfo({
						      provider: 'weixin',
						      success:  (res) => {
										console.log(res);
										this.userAvataur = res.userInfo.avatarUrl
										this.userName = res.userInfo.nickName
										this.userIntegral = 5200
						        console.log('用户昵称为：' + res.userInfo.nickName);
										
						      },
									fail: res => {
										console.log('fail');
									},
									complete: res => {
										console.log('complete');
									}
						    });
				  }
				});
			}
		}
	}
</script>

<style>

</style>
