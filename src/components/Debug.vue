<template>
  <div class="debugger">
    <form @submit.prevent="setDebug">
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
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { REEL_FACES } from '../constants/faces'

const defaultDebugOptions = {
  row: 'top',
  value: 0
}

export default {
  name: 'Debug',

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
