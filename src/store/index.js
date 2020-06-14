import Vue from 'vue'
import Vuex from 'vuex'
import Game from '../game'
import GameResult from '../gameResult'
import translateDirection from '../translateDirection'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fixed: false,
    reelState: [1, 2, 3],
    balance: 5,
    rollInProgress: false,
    winHistory: []
  },
  mutations: {
    setDebug (state, fixed) {
      state.fixed = fixed
    },

    setReelState (state, reelOptions) {
      state.reelState = reelOptions
      state.rollInProgress = true
    },

    updateBalance (state, newBalance) {
      state.balance = newBalance
    },

    pushWinnings (state, winning) {
      state.winHistory.push(winning)
    }
  },

  actions: {
    gameMove ({ commit, state }, moveTo = []) {
      commit('updateBalance', state.balance - 1)
      const game = new Game(moveTo)

      commit('setReelState', game.roll())
    },

    rollFinished ({ commit, getters, state }, reelIndex) {
      if (reelIndex !== 2) return

      const gameResult = new GameResult(getters.fullReelState)
      const winnings = gameResult.getWinnings()

      if (winnings) {
        console.log('WIN!')
        commit('pushWinnings', winnings)
        commit('updateBalance', state.balance + winnings.amount)
        console.log(state.balance)
      }

      console.log(gameResult.getFaceNames(), winnings)
    }
  },

  getters: {
    topReelState ({ reelState }) {
      return translateDirection.translateAbove(reelState)
    },

    bottomReelState ({ reelState }) {
      return translateDirection.translateBelow(reelState)
    },

    fullReelState ({ reelState }, getters) {
      return {
        top: [...getters.topReelState],
        middle: [...reelState],
        bottom: [...getters.bottomReelState]
      }
    },

    lastWin ({ winHistory }) {
      return winHistory[winHistory.length - 1] || undefined
    }
  },

  modules: {

  }
})
