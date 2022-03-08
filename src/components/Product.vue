<template>
  <div class="product">
    <Productheader />
    <ProductContent />
  </div>
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
  computed: {
    products() {
      return this.$store.getters.availableProducts;
    },
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped lang="scss">
@import './src/assets/scss/style.scss';

.product {
  margin-bottom: 32px;
}
</style>
