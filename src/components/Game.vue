<template>
  <div>
    <Balance></Balance>
    <ReelContainer></ReelContainer>
    <SpinButton @roll="gameMove">SPIN</SpinButton>
    <WinningsTable></WinningsTable>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
    ...mapActions(['gameMove'])
  }
}
</script>
