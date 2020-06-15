<template>
  <div class="face">
    <img :src="src">
  </div>
</template>

<script>
export default {
  name: 'Face',
  props: {
    name: {
      type: String,
      required: false,
      default: ''
    }
  },

  computed: {
    src () {
      return '/assets/reel/' + this.name + '.png'
    }
  }
}
</script>

<style lang="scss" scoped>
  .face {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
</style>
