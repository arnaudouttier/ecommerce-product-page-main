<template>
<<<<<<< HEAD
  <section class="product">
    <ProductHeader />
    <ProductContent />
  </section>
=======
  <div class="product">
    <Productheader />
    <ProductContent />
  </div>
>>>>>>> 3f6672bd498a1ebb39d0377d36daedb677dde0d3
</template>

<script>
import ProductHeader from "@/components/ProductHeader.vue";
import ProductContent from "@/components/ProductContent.vue";

export default {
  name: "Product",
  components: {
    ProductHeader,
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
