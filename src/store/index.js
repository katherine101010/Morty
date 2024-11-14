import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: []
    
  },
  getters: {
   
  },
  mutations: {
    setCharacters(state, payload ){
      state.characters = payload
    },

    setCharactersFilter(state, payload){
      state.charactersFilter = payload
    }
    

  },
  actions: {
    async getCharacters({commit}){
      try{
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)
      }catch(error){
      console.error(error)
      }
    }, 

    filterByStatus({commit, state}, status) {
      const filter = state.characters.filter((character) => {
        return character.status.includes(status)
      })
      commit('setCharactersFilter', filter)
    
  },

    filterByOrigin({ commit, state }, species) {
      const filter = state.characters.filter((character) => character.species.includes(species))
      commit('setCharactersFilter', filter)
    }
  }, 
  modules: {
  }
})