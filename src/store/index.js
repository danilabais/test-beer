import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    user:null,
    beer:null,
    recomendedBeer:null,
  },
  getters: {
  },
  mutations: {
    STATE_USER(state,payload) {
      state.user=payload
    },
    STATE_BEER(state,payload) {
      state.beer=payload
    },
    STATE_RECOMENDED_BEER(state,payload) {
      state.recomendedBeer=payload
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
         console.log('При первом получении пользователя была ошибка, запрос будет сделан еще раз',e)
         dispatch("fetchUser")
         
       }
       dispatch('recomendedBeer')
       commit("STATE_USER",user)
       console.log(user)
    },
    async fetchBeer({dispatch,commit}){
      let beer = null
       try {
        const response = await axios.get(
          `https://random-data-api.com/api/beer/random_beer?size=9`
        );
        beer = response.data
      } catch (e) {
        console.log('При первом получении пользователя была ошибка, запрос будет сделан еще раз',e)
        dispatch("fetchBeer")
        
      }
      commit("STATE_BEER",beer)
      dispatch('recomendedBeer')
      console.log(beer)
     },
     recomendedBeer({state,commit}){
        let random = Math.floor(Math.random()*9)
        commit("STATE_RECOMENDED_BEER",random)
     }  
  },
 
  getters: {
    user:(state)=>state.user,
    beer:(state)=>state.beer,
    recomendedBeer:(state)=>state.recomendedBeer,
}
})
