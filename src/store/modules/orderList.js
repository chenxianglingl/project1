import Vue from 'vue'

const state = {
	orderList: [],
	params: {}
}

const getters = {
	getOrderList: state => state.orderList
}

const actions = {//可进行异步请求
	fetchOrderList ({ commit, state }) {
		Vue.http.post('api/getOrderList', state.params)
		.then((res) => {
			commit('updateOrderList', res.data.list);
		}, (err) => {

		})
	}
}

const mutations = {//同步的状态更改
	updateOrderList (state, payload) {
		state.orderList = payload;
	},
	updateParams (state, {key, val}) {
		state.params[key] = val;
		console.log(state.params)
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}