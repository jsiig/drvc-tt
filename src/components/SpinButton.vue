<template>
  <button :disabled="rollInProgress" @click="$emit('roll')"><slot></slot></button>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SpinButton',

  computed: {
    ...mapState(['rollInProgress'])
  }
}
</script>

<style lang="scss" scoped>
  button {
    margin-top: $game-margin;
    appearance: none;
    border: none;
    display: block;
    width: 100%;
    padding: 24px;
    border-radius: 32px;
    background-color: $button-background;
    font-size: 64px;
    line-height: 32px;
    outline: none;
    cursor: pointer;
    font-family: 'Smokum', cursive;
  }
</style>
