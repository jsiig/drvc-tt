<template>
  <label>
    <div>$</div>
    <input :disabled="rollInProgress"
           v-model="localBalance"
           @blur="updateGlobalBalance"
           min="0" max="5000" type="number">
  </label>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Balance',
  data () {
    return {
      // Use local balance in component, manually update balance in store
      localBalance: 5,
      error: null
    }
  },

  mounted () {
    this.localBalance = this.balance
  },

  computed: {
    ...mapState(['balance', 'rollInProgress'])
  },

  methods: {
    updateGlobalBalance () {
      const balance = parseInt(this.localBalance)

      if (balance <= 5000 && balance >= 0) {
        this.$store.commit('updateBalance', balance)
      } else if (balance > 5000) {
        this.localBalance = 5000
      } else {
        this.localBalance = 0
      }
    }
  },

  watch: {
    balance (value) {
      this.localBalance = value
    },

    localBalance (value) {
      this.$store.commit('updateBalance', parseInt(value))
    }
  }
}
</script>

<style lang="scss" scoped>
  label {
    display: flex;
    flex-flow: row nowrap;
    background-color: $button-background;
    font-family: 'Goblin One', cursive;
    padding: 24px;
    border-radius: 32px;
    margin-top: $game-margin;
    font-size: 48px;
    color: $reel-background;

    input {
      outline: none;
      font-family: 'Goblin One', cursive;
      appearance: none;
      border: none;
      // border-bottom: 3px solid $reel-background;
      color: $reel-background;
      font-size: 48px;
      background-color: transparent;
      display: block;
      flex: 1 0 auto;
    }
  }
</style>
