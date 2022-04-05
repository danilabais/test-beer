import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    user:null
  },
  getters: {
  },
  mutations: {
    STATE_USER(state,payload) {
      state.user=payload
    }
  },
  actions: {
    async fetchUser({dispatch,commit}){
       let user = null
        try {
         const response = await axios.get(
           `https://random-data-api.com/api/users/random_user`
         );
         user = response.data
       } catch (e) {
         console.log('При первом получении пользователя была ошибка, еще раз будет сделан запрос',e)
         dispatch("fetchUser")
         
       }
       commit("STATE_USER",user)
       console.log(user)
    }
  },
 
  getters: {
    user:(state)=>state.user,
 
}
})
