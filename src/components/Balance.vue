<template>
  <label>
    Balance
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
    display: block;
    input {
      display: block;
    }
  }
</style>
