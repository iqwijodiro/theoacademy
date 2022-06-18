<template>
  <section class="hero training">
    <div class="overlay"></div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero.training {
  height: 100vh;
  width: 100vw;
  background-image: url('../../assets/images/bible_bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 0;
  .overlay {
    background-color: rgba($color: #fff, $alpha: 0.2);
    min-width: 100%;
    min-height: 100%;
  }
}
</style>
