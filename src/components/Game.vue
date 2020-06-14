<template>
  <div>
    <ReelContainer></ReelContainer>
    <SpinButton @roll="roll"></SpinButton>
  </div>
</template>

<script>
import ReelContainer from './ReelContainer'
import SpinButton from './SpinButton'

export default {
  name: 'Game',
  components: {
    ReelContainer,
    SpinButton
  },
  methods: {
    roll () {
      this.$store.dispatch('gameMove')
    }
  }
}
</script>
