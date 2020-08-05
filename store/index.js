import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		list: [
			{
				id: 1,
				name: '商品1',
				status: false,
			},
			{
				id: 2,
				name: '商品2',
				status: true,
			},
			{
				id: 3,
				name: '商品3',
				status: false,
			},
			{
				id: 4,
				name: '商品',
				status: false,
			},
			{
				id: 5,
				name: '商品5',
				status: true,
			},
			{
				id: 6,
				name: '商品6',
				status: false,
			},
		]
	},
	getters: {
		
	},
	mutation: {
		
	},
	actions: {
		
	}
})