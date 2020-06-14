<template>
  <div class="reel">
    <div class="scene" :style="reelPositionStyle">
      <div class="reel-cylinder">
        <div v-for="index in 10" class="face" :class="'s'+ index" :key="index">
          <div class="reel-image">
            <Face :src="'/assets/reel/' + reelFaces[index-1].src"></Face>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { REEL_FACES } from '../constants/faces'
import Face from './Face'

import { mapActions } from 'vuex'

const EACH_FRAME_DEGREE_CHANGE = 18

export default {
  name: 'TestReel',
  components: {
    Face
  },
  props: {
    allPositions: {
      type: Array,
      required: true
    },

    rollingTimeMin: {
      type: Number,
      required: true
    },

    reelIndex: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      currentReelPositionDeg: 18,
      reelFaces: REEL_FACES.concat(REEL_FACES),
      timer: null,
      minRollingTime: 2000,
      iteration: 1
    }
  },
  computed: {
    reelPositionStyle () {
      return {
        transform: `rotateX(${this.currentReelPositionDeg}deg) rotateY(0deg)`
      }
    },
    position () {
      return this.allPositions[this.reelIndex]
    }
  },
  methods: {
    ...mapActions(['rollFinished']),

    rollTheReel (position) {
      const positionDeg = (360 / 20) * position * -1

      this.timer = performance.now()

      this.rollTheReelToPosition(positionDeg)
    },

    rollTheReelToPosition (toPositionDeg) {
      if (typeof toPositionDeg === 'undefined') return

      this.currentReelPositionDeg = this.currentReelPositionDeg - EACH_FRAME_DEGREE_CHANGE

      const remainder = this.currentReelPositionDeg % 360

      if ((performance.now() - this.timer) > this.rollingTimeMin &&
        remainder === toPositionDeg
      ) {
        this.rollFinished(this.reelIndex)
        return
      }
      requestAnimationFrame(() => this.rollTheReelToPosition(toPositionDeg))
    }
  },

  mounted () {
    // this.rollTheReel(this.position + 3)
  },

  watch: {
    allPositions () {
      this.rollTheReel(this.position)
    }
  }
}
</script>

<style lang="scss" scoped>
  .reel {
    perspective: 650px;
    position: relative;
    overflow: hidden;
    width: 200px;
    height: 225px;
    background: #000;
    font-size: 175%;
    &:after {
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      left: -24px;
      right: -24px;
      box-shadow: inset 0 0 20px 4px rgba(0,0,0,1)
    }
  }

  .scene, .reel-cylinder, .face {
    position: absolute;
    transform-style: preserve-3d;
  }

  .scene {
    width: 100em;
    height: 100em;
    top: 50%;
    left: 50%;
    margin: -50em 0 0 -50em;
    transition: transform 0.5s ease-out;
  }

  .face {
    overflow: hidden;
    transform-origin: 0 0;
    backface-visibility: hidden;
    background-size: 100% 100%;
    background-position: center;
    padding: 0.5em;
  }

  .reel-image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .reel-cylinder {
    $width: 5em;
    top: 50%;
    left: 47.5%;
    transform-origin: 0 50%;
    transform: translate3D(0, 0, 0) rotateZ(0deg);
    opacity: 1;
    height: 7em;
    width: $width;
    margin: 0 0 -#{$width} 0  ;

    .face {
      height: calc(6em / 1.83);
      width: $width;
      background-color:#FFFFFF;

      &:after {
        position: absolute;
        content: '';
        top: -36px;
        bottom: -36px;
        left: 0;
        right: 0;
        box-shadow: inset 0 0 20px 4px rgba(0,0,0,0.25)
      }
    }

    @for $i from 1 through 10 {
      .s#{$i} {
        transform: rotateX(#{($i - 1) * 36}deg) translate3D( 0, -50%, 5em);
      }
    }
  }

</style>
