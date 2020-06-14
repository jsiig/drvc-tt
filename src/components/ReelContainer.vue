<template>
  <div class="reel-container">
    <Reel ref="reel1" :all-positions="reelPositions" :reel-index="0" :rolling-time-min="2000" />
    <Reel ref="reel2" :all-positions="reelPositions" :reel-index="1" :rolling-time-min="2500" />
    <Reel ref="reel3" :all-positions="reelPositions" :reel-index="2" :rolling-time-min="3000" />
  </div>
</template>

<script>
import Reel from './Reel'

export default {
  name: 'ReelContainer',
  components: { Reel },
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
