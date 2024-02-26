import { createStore } from 'vuex'
import axios from 'axios'
const baseUrl = 'https://node-project-vuyx.onrender.com/'
export default createStore({
  state: {
    jewellery: [],
    users: []
  },
  getters: {
    jewellery: state => state.jewellery,
    users: state => state.users
  },
  mutations: {
    setJewellery(state, data){
      state.jewellery = data
    },
    setUsers(state, data){
      state.users = data
    }

  },
  actions: {
    async fetchJewellery({commit}){
      const jewelleryResponse = await axios.get(baseUrl)
      console.log(jewelleryResponse);
      commit('setJewellery', jewelleryResponse.data)
      return jewelleryResponse
    }
  },
  modules: {
  }
})
