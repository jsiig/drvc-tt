<template>
  <div>
    <Balance></Balance>
    <ReelContainer></ReelContainer>
    <SpinButton @roll="roll"></SpinButton>
  </div>
</template>

<script>
import ReelContainer from './ReelContainer'
import SpinButton from './SpinButton'
import Balance from './Balance'

export default {
  name: 'Game',
  components: {
    ReelContainer,
    SpinButton,
    Balance
  },
  methods: {
    roll () {
      this.$store.dispatch('gameMove')
    }
  }
}
</script>
