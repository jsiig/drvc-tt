<template>
  <label>
    <div>Balance:</div>
    <input v-model.number="balance" min="0" max="5000" type="number">
  </label>
</template>

<script>
export default {
  name: 'Balance',
  computed: {
    balance: {
      get () {
        return this.$store.state.balance
      },
      set (value) {
        this.$store.commit('updateBalance', value)
      }
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

    input {
      outline: none;
      font-family: 'Goblin One', cursive;
      appearance: none;
      border: none;
      border-bottom: 3px solid $reel-background;
      color: $reel-background;
      font-size: 48px;
      background-color: transparent;
      display: block;
      flex: 1 0 auto;
    }
  }
</style>
