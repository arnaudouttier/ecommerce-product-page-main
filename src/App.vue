<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "@/commons/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./src/assets/scss/style.scss";

#app {
  position: relative;
}
</style>
