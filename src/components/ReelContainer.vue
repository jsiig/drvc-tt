<template>
  <div class="reel-container">
    <Reel ref="reel1" :all-positions="reelPositions" :position="reelPositions[0]" :rolling-time-min="2500" />
    <Reel ref="reel2" :all-positions="reelPositions" :position="reelPositions[1]" :rolling-time-min="3000" />
    <Reel ref="reel3" :all-positions="reelPositions" :position="reelPositions[2]" :rolling-time-min="3500" />
    <SpinButton @roll="roll"></SpinButton>
  </div>
</template>

<script>
import Reel from './Reel'
import SpinButton from './SpinButton'

export default {
  name: 'ReelContainer',
  components: { Reel, SpinButton },
  data () {
    return {

    }
  },
  computed: {
    reelPositions () {
      return this.$store.state.reelState
    }
  },
  methods: {
    roll () {
      this.$store.dispatch('randomGameMove')
    }
  }
}
</script>

<style lang="scss" scoped>
  .reel-container {
    display: flex;
    flex-direction: row;
    background-color: #000;
    width: 600px;
  }
</style>
