<template>
  <section class="product-header">
    <Carousel :product="product" />
  </section>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
  name: "Productheader",
  components: {
    Carousel,
  },
  props: {
    product: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/style.scss";
</style>
