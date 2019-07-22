import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import team from './modules/team'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    team
  },
  //定义状态
  state: {
    'serviceId': 16, //服务ID
    'serviceName': "意见反馈" //服务名称
  },
  mutations: {},
  actions: {},
  getters

})

export default store




