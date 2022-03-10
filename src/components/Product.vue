<template>
  <section class="product">
    <ProductHeader />
    <ProductContent />
  </section>
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
@import "./src/assets/scss/style.scss";

.product {
  margin-bottom: 32px;
}
</style>
