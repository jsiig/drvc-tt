<template>
  <div class="debugger__outer" :class="{'debugger__outer--active': visible}">
    <div class="debugger__wrap">
      <button @click="toggleDebugger" class="debugger__button">Debug</button>
      <div class="debugger" :class="{'debugger--visible': visible}">
        <div class="debugger__inner-wrap">
          <div class="debugger__column" v-for="(group, groupIndex) in groups" :key="groupIndex">
            <label>
              <select v-model="group.value">
                <option :key="face.value" :value="face.value" v-for="(face) in reelFaces">{{face.name}}</option>
              </select>
            </label>

            <label>
              <select v-model="group.row">
                <option value="top">Top</option>
                <option value="middle">Centre</option>
                <option value="bottom">Bottom</option>
              </select>
            </label>
          </div>
          <SpinButton class="spin-button" @roll="setDebug">DEBUG SPIN</SpinButton>
        </div>
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

    &__outer {
      &--active {
        padding-top: 200px;
      }
    }

    &--visible {
      max-height: 200px;
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

    &__column {
      padding: 0 10px;
    }

    &__wrap {
      z-index: 5;
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      box-shadow: -2px 0 8px 0 rgba(0,0,0, 0.25);
    }
  }

  .spin-button {
    padding: 12px;
    font-size: 48px;
    flex: 0 0 auto;
    margin-top: 16px;
  }

  label {
    position: relative;
    color: $reel-background;

    &:not(:last-child) {
      margin-right: 4px;
    }

    &:after {
      color: $reel-background;
      font-family: Helvetica, Arial sans-serif;
      content: '\25BC';
      position: absolute;
      right: 8px;
      top: 7px;
      font-size: 10px;
    }
  }

  select {
    font-family: 'Roboto Slab', serif;
    appearance: none;
    background: transparent;
    outline: none;
    border: 1px solid $reel-background;
    padding: 8px 18px 8px 8px;
    color: $reel-background;
  }
</style>
