<template>
  <div class="shipping">
    <div class="cart" @click="toggleShippingCart()">
      <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
          fill="#69707D"
          fill-rule="nonzero"
        />
      </svg>
      <p v-for="cartItem in cart" :key="cartItem.id">{{ cartItem.quantity }}</p>
    </div>
    <div
      class="avatar"
      :class="{ active: activeAvatar }"
      @click="
        toggleActiveAvatar();
        toggleShippingCart();
      "
    >
      <img src="@/assets/images/image-avatar.png" alt="avatar" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Shipping",
  data() {
    return {
      activeAvatar: false,
    };
  },
  methods: {
    toggleShippingCart() {
      this.$store.dispatch("activeCart");
    },
    toggleActiveAvatar() {
      this.activeAvatar = !this.activeAvatar;
    },
  },
  computed: {
    cart() {
      return this.$store.getters.cartProducts;
    },
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/style.scss";

.shipping {
  height: inherit;
  display: flex;
  align-items: center;
}

.cart,
.avatar {
  cursor: pointer;
  align-self: center;
}

.cart {
  position: relative;

  p {
    color: $white;
    position: absolute;
    top: -8px;
    right: -10px;
    padding: 2px 8px;
    background: $orange;
    border-radius: 10px;
    font-size: 12px;
    font-weight: 700;
  }
}

.avatar {
  max-width: 25px;
  max-height: 32px;
  margin-left: 20px;
}

@media (min-width: 1200px) {
  .avatar {
    max-width: 50px;
    max-height: 50px;
    margin-left: 45px;
    border: 2px solid $light_grayish_blue;
    border-radius: 50%;
    transition: 0.5s ease border;

    &.active {
      border-radius: 50%;
      border: 2px solid $orange;
    }
  }
}
</style>
