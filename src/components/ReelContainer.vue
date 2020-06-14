<template>
  <div class="reel-container__wrap">
    <WinLine :win="lastWin"></WinLine>
    <div class="reel-container">
      <Reel ref="reel1" :all-positions="reelState" :reel-index="0" :rolling-time-min="2000" />
      <Reel ref="reel2" :all-positions="reelState" :reel-index="1" :rolling-time-min="2500" />
      <Reel ref="reel3" :all-positions="reelState" :reel-index="2" :rolling-time-min="3000" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Reel from './Reel'
import WinLine from './WinLine'

export default {
  name: 'ReelContainer',
  components: { Reel, WinLine },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['lastWin']),
    ...mapState(['reelState'])
  }
}
</script>

<style lang="scss" scoped>
  .reel-container {
    display: flex;
    flex-direction: row;
    background-color: $reel-background;
    width: 700px;
    padding-left: 50px;
    padding-right: 50px;
    position: relative;
    overflow: hidden;
    border-radius: 32px;

    &:after {
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      left: -24px;
      right: -24px;
      box-shadow: inset 0 0 20px 4px rgba(0,0,0,1)
    }

    &__wrap {
      position: relative;
      margin-top: $game-margin;
      border-radius: 32px;
      display: block;
      box-shadow: 2px 2px 8px 0 rgba($reel-background, 0.25);
    }
  }
</style>
