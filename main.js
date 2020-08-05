import Vue from 'vue'
import App from './App'

import store from './store/index.js'

Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
		store,
    ...App
})
app.$mount()
