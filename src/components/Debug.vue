<template>
  <div class="debugger">
    <div v-for="n in 3" :key="n">
      <select v-model="groups[n - 1].value">
        <option :key="face.value" :value="face.value" v-for="(face) in reelFaces">{{face.name}}</option>
      </select>

      <select v-model="groups[n - 1].row">
        <option value="top">Top</option>
        <option value="middle">Centre</option>
        <option value="bottom">Bottom</option>
      </select>
    </div>
    <SpinButton @roll="setDebug">SPIN</SpinButton>
  </div>
</template>

<script>
import { REEL_FACES } from '../constants/faces'
import SpinButton from './SpinButton'

const defaultDebugOptions = {
  row: 'top',
  value: 0
}

export default {
  name: 'Debug',

  components: {
    SpinButton
  },

  data () {
    return {
      reelFaces: REEL_FACES,
      groups: [
        {
          ...defaultDebugOptions
        },
        {
          ...defaultDebugOptions
        },
        {
          ...defaultDebugOptions
        }
      ]
    }
  },

  methods: {
    setDebug () {
      this.$store.dispatch('gameMove', this.groups)
    }
  }
}
</script>
<style lang="scss" scoped>
  .debugger {

  }
</style>
