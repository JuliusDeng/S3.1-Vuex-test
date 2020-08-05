# 本仓库为学习Vuex所建
# vue
# vuex
 
## 一、 state
## 二、 getters
##     1. [vue官方[](https://vuex.vuejs.org/zh/guide/getters.html)]：Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
##     2. Getter 接受 state 作为其第一个参数：    
  ##      Getter 也可以接受其他 getter 作为第二个参数： 
##     3. 通过属性访问
##         -Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值：store.getters.doneTodos // -> [{ id: 1, text: '...', done: true }]
  ##     通过方法访问
  ##       你也可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用。
##     4. mapGetters 辅助函数
    ##     mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
			 ##     import { mapGetters } from 'vuex'
							export default {
								// ...
								computed: {
								// 使用对象展开运算符将 getter 混入 computed 对象中
									...mapGetters([
										'doneTodosCount',
										'anotherGetter',
										// ...
									])
								}
							}
			## 如果你想将一个 getter 属性另取一个名字，使用对象形式：
			 ...mapGetters({
				// 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
				doneCount: 'doneTodosCount'
			})