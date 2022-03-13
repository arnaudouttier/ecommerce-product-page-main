<template>
  <div v-if="activeCart" class="shipping-cart">
    <div class="s-cart-header">
      <h3>Cart</h3>
    </div>
    <div class="s-cart-content empty" v-if="getProduct == 0">
      <p>Your cart is empty.</p>
    </div>
    <div v-else>
      <div v-for="cartItem in cart" :key="cartItem.id">
        <div class="s-cart-content">
          <div class="s-cart-details">
            <div class="s-cart-featured">
              <img
                src="../assets/images/image-product-1-thumbnail.jpg"
                alt="product"
              />
            </div>
            <div class="s-cart-description">
              <p>Autumn Limited Edition...</p>
              <p>
                $125 x {{ cartItem.quantity }}
                <strong>${{ cartItem.discountProductPrice }}</strong>
              </p>
            </div>
            <div class="s-cart-trash" @click="cleanCart()">
              <svg
                width="14"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path
                    d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                    id="a"
                  />
                </defs>
                <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
              </svg>
            </div>
          </div>
          <button class="btn large-btn orange" @click="emptyCart()">
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShippingCart",
  methods: {
    cleanCart() {
      this.$store.dispatch("cleanCart");
    },
    emptyCart() {
      this.$store.dispatch("emptyCart");
      this.$store.dispatch("activeCart");
    },
  },
  computed: {
    activeCart() {
      return this.$store.getters.getActiveCart;
    },
    cart() {
      return this.$store.getters.cartProducts;
    },
    getProduct() {
      const product = this.$store.getters.getProducts;
      return product.map((productItem) => {
        return productItem.quantity;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/style.scss";

.shipping-cart {
  width: 95%;
  background-color: $white;
  margin: 2.5%;
  border-radius: 5px;
  position: absolute;
  top: 105px;
  z-index: 800;
}

.s-cart-header,
.s-cart-content {
  padding: 25px;
}

.s-cart-header {
  border-bottom: 2px solid $light_grayish_blue;
}

.s-cart-content {
  color: $dark_grayish_blue;

  &.empty {
    padding: 90px;
    text-align: center;
  }
}

.s-cart-content {
  .s-cart-featured,
  .s-cart-trash {
    flex: 1;
  }

  .s-cart-description {
    flex: 4;

    p {
      line-height: 1.5;
    }

    strong {
      margin-left: 5px;
      color: $very_dark_blue;
    }
  }

  .s-cart-details {
    display: flex;
    align-items: center;
    margin-bottom: 25px;

    .s-cart-featured {
      max-width: 50px;
      max-height: 50px;
      margin-right: 15px;
      img {
        border-radius: 4px;
      }
    }

    .s-cart-trash {
      cursor: pointer;
      text-align: right;
    }
  }
}
</style>
