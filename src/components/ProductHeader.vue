<template>
  <section class="product-header">
    <Carousel />
  </section>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
  name: "ProductHeader",
  components: {
    Carousel,
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/style.scss";
</style>
