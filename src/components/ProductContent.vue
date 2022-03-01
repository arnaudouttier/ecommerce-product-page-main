<template>
  <section class="product-content">
    <div class="product-presentation">
      <h4>Sneaker Company</h4>
      <h3>Fall Limited Edition Sneakers</h3>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
    </div>
    <div class="product-price">
      <h3>{{ this.$store.state.productSalePrice }}</h3>
      <p>50%</p>
      <p>{{ this.$store.state.productPrice }}</p>
      <button
        v-if="this.$store.state.productQuantity > 0"
        @click="productSous()"
      >
        -
      </button>
      <p>{{ this.$store.state.productQuantity }}</p>
      <button @click="productAdd()">+</button>
      <button>Add to cart</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductContent",
  methods: {
    productSous() {
      this.$store.commit("sousProduct");
    },
    productAdd() {
      this.$store.commit("addProduct");
      this.$store.dispatch("discountPrice");
    },
  },
};
</script>

<style scoped lang="scss">
@import './src/assets/scss/style.scss';
</style>
