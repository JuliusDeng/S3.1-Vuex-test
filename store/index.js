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
				num:1
			},
			{
				id: 2,
				name: '商品2',
				status: true,
				num:2
			},
			{
				id: 3,
				name: '商品3',
				status: false,
				num:3
			},
			{
				id: 4,
				name: '商品4',
				status: false,
				num:4
			},
			{
				id: 5,
				name: '商品5',
				status: true,
				num:5
			},
			{
				id: 6,
				name: '商品6',
				status: true,
				num:6
			},
		]
	},
	getters: {
		activeList: (state) => {
			return state.list.filter((v) => {
				return v.status
			})
		},
		getList: (state, getters) => {
			return getters.activeList.filter(v =>{
				return v.num > 5
			})
		},
		getById: (state) => (id) => {
			return state.list.filter(v => {
				return v.id === id
			})
		}
	},
	mutation: {
		
	},
	actions: {
		
	}
})