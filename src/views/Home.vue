<template>
  <main class="home">
    <Product />
    <ModalCarousel />
  </main>
</template>

<script>
import Product from "@/components/Product.vue";
import ModalCarousel from "@/components/ModalCarousel.vue";

export default {
  name: "Home",
  components: {
    Product,
    ModalCarousel,
  },
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
