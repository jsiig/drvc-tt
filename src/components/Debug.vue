<template>
  <div class="debugger__wrap">
    <button @click="toggleDebugger" class="debugger__button">Debug</button>
    <div class="debugger" :class="{'debugger--visible': visible}">
      <div class="debugger__inner-wrap">
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
        <SpinButton class="spin-button" @roll="setDebug">SIMULATE SPIN</SpinButton>
      </div>
    </div>
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
      visible: false,
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
    },

    toggleDebugger () {
      this.visible = !this.visible
    }
  }
}
</script>
<style lang="scss" scoped>
  .debugger {
    background-color: $table-background;
    overflow: hidden;
    max-width: 100%;
    max-height: 0;
    transition: max-height 0.5s ease-in-out;
    padding: 0;

    &__inner-wrap {
      padding: 32px;
      justify-content: center;
      display: flex;
      flex-flow: row wrap;

      > div {
        flex: 0 0 auto;
      }
    }

    &--visible {
      max-height: 500px;
    }

    &__button {
      appearance: none;
      outline: none;
      cursor: pointer;
      border: none;
      border-top-left-radius: 12px;
      position: absolute;
      padding:12px;
      right: 0;
      top: -36px;
      height: 36px;
      background-color: $button-background;
      font-family: 'Goblin One', cursive;
    }

    &__wrap {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
    }

    .spin-button {
      padding: 12px;
      font-size: 48px;
      flex: 0 0 auto;
    }
  }
</style>
