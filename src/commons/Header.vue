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
#site-header {
  height: 40px;
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.logo-navigation {
  height: inherit;
  display: flex;
  align-items: center;
}
</style>
