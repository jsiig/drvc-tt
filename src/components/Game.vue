<template>
  <div>
    <Balance></Balance>
    <ReelContainer></ReelContainer>
    <SpinButton @roll="roll">SPIN</SpinButton>
    <WinningsTable></WinningsTable>
  </div>
</template>

<script>
import ReelContainer from './ReelContainer'
import SpinButton from './SpinButton'
import WinningsTable from './WinningsTable'
import Balance from './Balance'

export default {
  name: 'Game',
  components: {
    ReelContainer,
    SpinButton,
    Balance,
    WinningsTable
  },
  methods: {
    roll () {
      this.$store.dispatch('gameMove')
    }
  }
}
</script>
