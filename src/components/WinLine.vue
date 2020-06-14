<template>
  <div v-show="win && !rollInProgress" class="win-line" :style="style"></div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'WinLine',

  props: {
    win: {
      type: Object,
      required: false
    }
  },

  computed: {
    ...mapState(['rollInProgress']),
    style () {
      if (!this.win) return {}
      let result

      switch (this.win.row) {
        case 'top':
          result = 60
          break
        case 'middle':
          result = 112
          break
        case 'bottom':
          result = (225 - 60)
          break
      }

      return {
        top: result + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .win-line {
    position: absolute;
    left: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 0;
    border-bottom: 2px solid red;
    z-index: 2;
  }
</style>
