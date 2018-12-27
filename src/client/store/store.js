import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import VuexPersist from 'vuex-persist'
// import { resolve } from 'dns'
// import { rejects } from 'assert'

Vue.use(Vuex)

const vuexSessionStorage = new VuexPersist({
  key: 'chInfo', // The key to store the state on in the storage provider.
  storage: window.sessionStorage // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

export const store = new Vuex.Store({
  state: {
    searchChParamObj: null,
    chDetailsObj: null
  },
  getters: {
    GET_SEARCH_CHPARAM: state => {
      return state.searchChParamObj
    },
    GET_CH_DETAILS_OBJ: state => {
      return state.chDetailsObj
    }
  },
  mutations: {
    SET_SEARCH_CHPARAM: (state, payloadParam) => {
      state.searchChParamObj = payloadParam
    },
    SET_CH_DETAILS_DB: (state, payloadDB) => {
      state.chDetailsObj = payloadDB
      window.sessionStorage.setItem('chInfo', payloadDB)
    }
  },
  // actions: {
  //   GET_CH_DETAILS_DB: async (context, payload) => {
  //     let url = 'http://localhost:3600/ch/getch'
  //     console.log('Store get ChName', payload.selChurchName)
  //     let param = {
  //       selDiocese: payload.selDiocese,
  //       selChurchLocation: payload.selChurchLocation,
  //       selChurchName: payload.selChurchName
  //     }
  //     await axios.post(url, param).then((response) => {
  //       let chDetailsDBObj = response.data
  //       console.log('Store Ch details obj from DB: ', chDetailsDBObj)
  //       context.commit('SET_CH_DETAILS_DB', chDetailsDBObj)
  //     })
  //   }
  //   // GET_CH_DETAILS_DB ({ commit }) {
  //   //   return new Promise((resolve, reject) => {
  //   //     Vue.http.post('http://localhost:3600/ch/getch')
  //   //       .then(function (response) {
  //   //         commit('SET_CH_DETAILS_DB', response.data)
  //   //         resolve()
  //   //       })
  //   //       .catch((error) => {
  //   //         console.log(error.statusText)
  //   //       })
  //   //   })
  //   // }
  // },
  plugins: [vuexSessionStorage.plugin]
})
