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
			commit('updateOrderList', res.data.orderList);
		}, (err) => {

		})
	}
}

const mutations = {//同步的状态更改
	updateOrderList (state, payload) {
		state.orderList = payload;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}