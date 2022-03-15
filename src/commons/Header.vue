<template>
  <header id="site-header">
    <div class="logo-navigation">
      <TheNavigation />
      <Logo />
    </div>
    <Shipping />
  </header>
  <ShippingCart />
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
import Logo from "@/components/Logo.vue";
import Shipping from "@/components/Shipping.vue";
import ShippingCart from "@/components/ShippingCart.vue";

export default {
  name: "Header",
  components: {
    TheNavigation,
    Logo,
    Shipping,
    ShippingCart,
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/style.scss";

#site-header {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 25px 25px 30px 25px;
  display: flex;
  justify-content: space-between;
}

.logo-navigation {
  height: inherit;
  display: flex;
  align-items: center;
}

@media (min-width: 1200px) {
  #site-header {
    height: 120px;

    padding: 0;
    margin-bottom: 90px;
    border-bottom: 1px solid $light_grayish_blue;
  }

  .logo-navigation {
    .navigation {
      order: 2;
      margin-left: 60px;
    }
  }
}
</style>
