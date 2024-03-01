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
    },
    deleteJewel(state, jewelID){
      state.data = state.data.filter(
        (jewellery) => jewelID !== jewelID
      );

    },
editJewel(state, updateJewel){
  state.data = state.data.map((jewellery) => {
    if(jewellery.jewelID === updateJewel.jewelID){
    }
    return updateJewel;
  });
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
    },
     
    async addJewel({commit},jewelData) {
      try {
        const response = await axios.post(`https://node-project-1-qhgf.onrender.com/jewellery/addJewel`, jewelData);
        // Handle response data as needed
        console.log(response.data);
      } catch (error) {
        console.error('Error adding jewellery item:', error);
      }
    },
    
    async updateJewel(jewelData) {
      try {
        const response = await axios.patch(`https://node-project-1-qhgf.onrender.com/jewellery/updateJewel/${id}`, jewelData);
        // Handle response data as needed
        console.log(response.data);
      } catch (error) {
        console.error('Error updating jewellery item:', error);
      }
    },
    
    async deleteJewel({commit},id) {
      try {
        const response = await axios.delete(`https://node-project-1-qhgf.onrender.com/Jewellery/deleteJewel/${id}`, {
          method: 'DELETE',
        });
        commit("deleteJewel", jewelID);
        if (!response.ok) {
          throw new Error("Failed to delete product");
        }
        // Handle response data as needed
        
      } catch (error) {
        console.error('Error deleting jewellery item:', error);
      }
    }
    // async deleteJewel(context,jewelID){
    //   await axios.delete(`https://node-project-1-qhgf.onrender.com/Jewellery/deleteJewel/${jewelID}`);
    //   console.log("Delete was okay");
    //   window.location.reload();
    // }
  },
  

  
  modules: {
  }
})
