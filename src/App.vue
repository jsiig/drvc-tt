<template>
  <div id="slot-machine-app">
    <Game></Game>
    <Debug></Debug>
  </div>
</template>

<script>
import Game from './components/Game'
import Debug from './components/Debug'

export default {
  name: 'App',
  components: {
    Game,
    Debug
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  width: 100%;
  background: #6E4630;
  &, * { box-sizing: border-box; }
  margin: 0;
  font-family: "Roboto Slab", Times, Georgia, serif;

  // Our reels are unfortunately not responsive :(
  min-width: 700px;
}
#slot-machine-app {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  min-height: 100%;
  align-items: center;
  justify-content: space-around;
}
</style>
