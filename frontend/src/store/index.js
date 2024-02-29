import { createStore } from 'vuex'
import axios from 'axios'
const baseUrl = 'https://node-project-1-qhgf.onrender.com/'



export default createStore({
  state: {
    jewellery: null,
    users: null
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
      const res = await axios.get(`${baseUrl}jewellery`)
      console.log(res.data.results);
      commit('setJewellery', res.data.results)
      return res
    },
    async fetchUsers({commit}){
      const res = await axios.get(`${baseUrl}users`)
      console.log(res.data.results);
      commit('setUsers', res.data.results)
      return res
    }

  },
  modules: {
  }
})
