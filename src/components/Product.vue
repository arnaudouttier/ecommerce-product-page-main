<template>
  <section class="product">
    <Productheader />
    <ProductContent />
  </section>
</template>

<script>
import Productheader from "@/components/Productheader.vue";
import ProductContent from "@/components/ProductContent.vue";

export default {
  name: "Product",
  components: {
    Productheader,
    ProductContent,
  },
};
</script>

<style scoped lang="scss">
@import './src/assets/scss/style.scss';

.product {
  margin-bottom: 32px;
}
</style>
