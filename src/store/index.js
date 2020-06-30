import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, info) {
      console.log(info);
      // 1.查看是否添加过
      const oldInfo = state.cartList.find(item => item.iid === info.iid)

      // 2.+1或者新添加
      if (oldInfo) {
        oldInfo.count += 1
      } else {
        info.count = 1
        info.checked = true
        state.cartList.push(info)
      }
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    cartLength(state){
      return state.cartList.length
    },
    cartList(state){
      return state.cartList
    }
  }
})
