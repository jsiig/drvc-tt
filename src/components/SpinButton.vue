<template>
  <button @click="$emit('roll')">SPIN</button>
</template>
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
    //font-family: 'Goblin One', cursive;
    //font-family: 'Passion One', cursive;
    font-family: 'Smokum', cursive;
  }
</style>
