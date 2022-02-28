<template>
  <header id="site-header">
    <TheNavigation />
    <Logo />
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
  padding: 32px 24px;
  display: flex;
  align-items: center;
}
</style>
