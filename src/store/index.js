import Vue from 'vue'
import Vuex from 'vuex'
import Game from '../game'
import GameResult from '../gameResult'
import translateDirection from '../translateDirection'

Vue.use(Vuex)

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
      const gameResult = new GameResult(getters.getFullReelState)
      console.log(moveResults)
      console.log(gameResult.getFaceNames())
      console.log(gameResult.getWinnings())
    },

    gameMove ({ commit, getters }, data = []) {
      const game = new Game(data)

      commit('setReelState', game.roll())

      console.log(data)
      console.log(new GameResult(getters.getFullReelState).getFaceNames())
    }
  },

  getters: {
    topReelState ({ reelState }) {
      return translateDirection.translateAbove(reelState)
    },

    bottomReelState ({ reelState }) {
      return translateDirection.translateBelow(reelState)
    },

    getFullReelState ({ reelState }, getters) {
      return {
        top: [...getters.topReelState],
        middle: [...reelState],
        bottom: [...getters.bottomReelState]
      }
    }
  },

  modules: {

  }
})
