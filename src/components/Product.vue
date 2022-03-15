<template>
  <div class="product">
    <ProductHeader />
    <ProductContent />
  </div>
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
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/style.scss";

.product {
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 32px;
}

@media (min-width: 1200px) {
  .product {
    display: flex;
    column-gap: 120px;
  }
}
</style>
