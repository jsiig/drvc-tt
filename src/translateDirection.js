const MIN_STATE = 0
const MAX_STATE = 9

export default {
  translateAbove (reelState) {
    return reelState.map(stateItem => this.translateSingle(stateItem, 'up'))
  },

  translateBelow (reelState) {
    return reelState.map(stateItem => this.translateSingle(stateItem, 'down'))
  },

  translateSingle (stateItem, direction) {
    const bottomStateItem = direction === 'up' ? stateItem + 1 : stateItem - 1

    if (bottomStateItem > MAX_STATE) return MIN_STATE
    else if (bottomStateItem < MIN_STATE) return MAX_STATE
    else return bottomStateItem
  }
}
