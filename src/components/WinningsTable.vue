<template>
  <table>
    <thead>
      <tr>
        <th>Description</th>
        <th></th>
        <th>Win (coins)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item) in winningsTable" :key="item.kind">
        <td>{{item.description}}</td>
        <td>
          <img v-for="(face, index) in item.examples" :key="index" :src="`/assets/reel/${face}.png`">
        </td>
        <td v-if="item.wins.all">{{item.wins.all}}</td>
        <td v-else>
          Top: {{item.wins.top}} <br>
          Middle: {{item.wins.middle}} <br>
          Bottom: {{item.wins.bottom}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { REEL_FACES } from '../constants/faces'
import { winningsTable } from '../winnings'

export default {
  name: 'WinningsTable',

  components: {

  },

  data () {
    return {
      winningsTable,
      reelFaces: REEL_FACES
    }
  }
}
</script>

<style lang="scss" scoped>
  table {
    width: 100%;
    background: $table-background;
    color: $reel-background;
    border-radius: 32px;
    border-collapse: collapse;
    box-shadow: 2px 2px 8px 0 rgba($reel-background, 0.25);
    margin-top: $game-margin;
    font-family: 'Passion One', cursive;

    img {
      max-width: 28px;
    }

    thead tr:first-child th {
      padding-top: 20px;
    }

    tbody tr:last-child td {
      padding-bottom: 20px;
    }

    tbody tr:nth-child(2n) {
      background-color: rgba($reel-background, 0.05);
    }

    td, th {
      text-align: center;
      padding: 8px;
    }

    td:first-child, th:first-child {
      padding-left: 20px;
      text-align: left;
    }

    th:last-child, td:last-child {
      padding-right: 20px;
      text-align: right;
    }
  }
</style>
