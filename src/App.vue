<template>
  <div id="slot-machine-app">
    <Game></Game>
    <Debug></Debug>
    <!-- <TestReel></TestReel> -->
  </div>
</template>

<script>
import Game from './components/Game'
import Debug from './components/Debug'
// import TestReel from './components/TestReel'

export default {
  name: 'App',
  components: {
    Game,
    Debug
    // TestReel
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
  font-family: Helvetica, Arial, sans-serif;

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
