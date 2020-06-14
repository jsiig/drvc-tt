<template>
  <div class="face">
    <img :src="src">
  </div>
</template>

<script>
export default {
  name: 'Face',
  props: {
    src: {
      type: String,
      required: false,
      default: ''
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
