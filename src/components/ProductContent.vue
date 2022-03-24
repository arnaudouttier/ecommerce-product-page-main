<template>
  <section
    class="product-content"
    v-for="product in products"
    :key="product.id"
  >
    <div class="product-presentation">
      <h4>{{ product.category }}</h4>
      <h3>{{ product.title }}</h3>
      <p>{{ product.description }}</p>
    </div>
    <div class="product-manager">
      <div class="product-price">
        <div class="discount-price">
          <h3>${{ discountCartTotal }}.00</h3>
          <p>50%</p>
        </div>
        <div class="product-unit-price">
          <p>${{ cartTotal }}.00</p>
        </div>
      </div>
      <div class="product-quantity">
        <button class="btn" @click="deCrementProductQuantity(product)">
          -
        </button>
        <p>{{ product.quantity }}</p>
        <button class="btn" @click="incrementProductQuantity(product)">
          +
        </button>
      </div>
      <div class="add-to-cart">
        <button class="btn large-btn orange" @click="addProductToCart(product)">
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fill-rule="nonzero"
            />
          </svg>
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductContent",
  data() {
    return {
      productQuantity: 1,
    };
  },
  methods: {
    productSous() {
      if (this.productQuantity > 0) {
        this.productQuantity--;
      }
    },
    incrementProductQuantity(product) {
      this.$store.dispatch("incrementProductQuantity", product);
    },
    deCrementProductQuantity(product) {
      if (product.quantity > 0) {
        this.$store.dispatch("deCrementProductQuantity", product);
      }
    },
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    },
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
    productsQuantity() {
      return this.$store.getters.productsQuantity;
    },
    discountCartTotal() {
      return this.$store.getters.discountCartTotal;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/style.scss";

.product-presentation {
  padding: 25px 25px 10px 25px;

  h4 {
    color: $orange;
    margin-bottom: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 12px;
  }

  h3 {
    color: $very_dark_blue;
    font-size: clamp(30px, calc(1.875rem + ((1vw - 3.75px) * 0.9709)), 45px);
    min-height: 0vw;
    margin-bottom: 20px;
  }

  p {
    color: $dark_grayish_blue;
    line-height: 1.7;
    font-size: 16px;
  }
}

.product-manager {
  padding: 0 25px 25px 25px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 26px;
}

.product-price {
  min-width: 200px;
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .discount-price {
    display: flex;

    h3 {
      font-size: 30px;
      margin-right: 20px;
      color: $very_dark_blue;
    }
    p {
      color: $orange;
      padding: 6px;
      background-color: $pale_orange;
      line-height: normal;
      border-radius: 10px;
      font-weight: 700;
    }
  }

  .product-unit-price {
    color: $grayish_blue;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: end;

    p {
      position: relative;
      &::after {
        content: " ";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: $grayish_blue;
      }
    }
  }
}
.product-quantity {
  grid-area: 2 / 1 / 3 / 3;
  display: flex;
  align-items: center;
  background-color: $light_grayish_blue;
  border-radius: 10px;
  font-weight: 700;

  padding: 0 20px;

  button {
    font-size: 30px;
    color: $orange;

    &:hover {
      color: $pale_orange;
    }
  }

  p {
    flex-grow: 4;
    text-align: center;
    align-self: center;
  }
}

.add-to-cart {
  grid-area: 3 / 1 / 4 / 3;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 22px;

    svg {
      margin-right: 20px;

      path {
        fill: $white;
      }
    }
  }
}

@media (min-width: 1200px) {
  .product-content {
    padding: 60px 0 80px 0;
  }

  .product-manager {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 25px;
  }

  .product-price {
    grid-area: 1 / 1 / 2 / 2;
    display: block;

    .product-unit-price {
      display: inline-block;
      margin-top: 10px;
    }
  }
  .product-quantity {
    grid-area: 2 / 1 / 3 / 2;
    margin-right: 15px;
    padding: 13px;
  }
  .add-to-cart {
    grid-area: 2 / 2 / 3 / 4;
  }
}
</style>
