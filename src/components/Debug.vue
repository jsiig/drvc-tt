<template>
  <form @submit.prevent="setDebug">
    <input type="number" min="0" max="9" v-model="debugMode.middle[0]">
    <input type="number" min="0" max="9" v-model="debugMode.middle[1]">
    <input type="number" min="0" max="9" v-model="debugMode.middle[2]">
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'Debug',

  data () {
    return {
      debugMode: {
        middle: ['', '', '']
      }
    }
  },

  methods: {
    setDebug () {
      const debugMode = this.debugMode.middle.map(i => i.length ? parseInt(i) : null)
      this.$store.dispatch('debugGameMove', debugMode)
    }
  }
}
</script>
