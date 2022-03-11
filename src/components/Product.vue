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
  margin-bottom: 32px;
}
</style>
