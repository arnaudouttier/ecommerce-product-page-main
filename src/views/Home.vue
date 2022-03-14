<template>
  <main class="home">
    <Product />
  </main>
</template>

<script>
import Product from "@/components/Product.vue";

export default {
  name: "Home",
  components: {
    Product,
  },
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
