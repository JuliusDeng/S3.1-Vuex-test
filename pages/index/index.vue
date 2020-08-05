<template>
	<view>
		<view class="d-flex a-center j-center bg-yellow">
			首页
		</view>
		
	</view>
</template>

<script>
	import {mapState} from 'vuex' // state用法二 （须引入mapState 解构赋值）
	export default {
		data() {
			return {
				listShow: ''
			}
		},
		onLoad() {
			
			// console.log(this.$store.state.list);
			// state用法一： 直接从挂载到vue原型上的'$store'里面取
			// console.log(JSON.stringify(this.$store.state.list)); // js-->JSON
			// console.log(JSON.stringify('this.list:',this.list)); // js-->JSON
			// console.log(JSON.stringify('this.list:',this.listTwo)); // js-->JSON
			// console.log('this.newList:', JSON.stringify(this.newList)); // js-->JSON
			console.log('this.list:', JSON.stringify(this.list)); // js-->JSONlist
		},
		computed: {
			// state用法二
			// ...mapState({
			// 	  // (用法)1
			// 	// list: state => state.list
			// 	  // 用法2, 注意这里的属性值必须是个字符串 'list'
			// 	listTwo: 'list',
			// 		// 用法3（对state数据进行处理）
			// 	newList(state) {
			// 		return state.list.filter(v => {
			// 			return v.status
			// 		})
			// 	}
			// }),
			// state方法三 注意里面是数组（如果只是直接拿数据的话可以这样用数组，state里面的数据都会保存为一个数组，你按对应名称取出就行了.但如果想要重命名或对数据进行处理的话须用上面的方法）  
			 // [Vue官方文档]当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
			...mapState([
				'list'
			])
		},
		methods: {
			
		}
	}
</script>

<style>
	
</style>
