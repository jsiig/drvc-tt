import Vue from 'vue'
import Vuex from 'vuex'
import Game, { GameResult } from '../game'

Vue.use(Vuex)
const MIN_STATE = 0
const MAX_STATE = 9

export default new Vuex.Store({
  state: {
    fixed: false,
    fixedParams: {

    },
    reelState: [1, 2, 3],
    balance: 0
  },
  mutations: {
    setDebug (state, fixed) {
      state.fixed = fixed
    },
    setReelState (state, reelOptions) {
      state.reelState = reelOptions
    }
  },

  actions: {
    randomGameMove ({ commit, getters }) {
      const game = new Game()
      const moveResults = game.generateRandom()

      commit('setReelState', moveResults)
      console.log(moveResults)
      console.log(new GameResult(getters.getFullReelState).getFaceNames())
    },

    debugGameMove ({ commit, getters }, data) {
      if (!(data instanceof Array) || data.length !== 3) {
        throw new TypeError('Data must be array of 3 elements')
      }

      commit('setReelState', data)

      console.log(data)
      console.log(new GameResult(getters.getFullReelState).getFaceNames())
    }
  },

  getters: {
    getTopReelState ({ reelState }) {
      return reelState.map(stateItem => {
        const topStateItem = stateItem + 1

        if (topStateItem > MAX_STATE) return MIN_STATE
        else if (topStateItem < MIN_STATE) return MAX_STATE
        else return topStateItem
      })
    },

    getBottomReelState ({ reelState }) {
      return reelState.map(stateItem => {
        const bottomStateItem = stateItem - 1

        if (bottomStateItem > MAX_STATE) return MIN_STATE
        else if (bottomStateItem < MIN_STATE) return MAX_STATE
        else return bottomStateItem
      })
    },

    getFullReelState ({ reelState }, getters) {
      return {
        top: [...getters.getTopReelState],
        middle: [...reelState],
        bottom: [...getters.getBottomReelState]
      }
    }
  },

  modules: {

  }
})
