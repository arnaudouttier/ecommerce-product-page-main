<template>
  <div class="navigation-mobile" v-if="activeSidebar">
    <button class="btn navigation-close" @click="toggleMenuSidebar()">
      <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fill="#69707D"
          fill-rule="evenodd"
        />
      </svg>
    </button>
    <nav>
      <router-link :to="{ name: 'collections' }">Collections</router-link>
      <router-link :to="{ name: 'men' }">Men</router-link>
      <router-link :to="{ name: 'women' }">Women</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link :to="{ name: 'contact' }">Contact</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavMobile",
  methods: {
    toggleMenuSidebar() {
      this.$store.dispatch("toggleSidebar");
    },
  },
  computed: {
    activeSidebar() {
      return this.$store.getters.getActiveSidebar;
    },
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/style.scss";

.navigation-mobile {
  position: absolute;
  top: 0;
  left: 0;
  padding: 33px 20px 20px 20px;
  background: $white;
  height: 100vh;
  width: 60%;
  z-index: 999;

  nav {
    display: flex;
    flex-direction: column;
    font-size: 18px;

    a {
      font-weight: 700;
      margin-bottom: 30px;
    }
  }
}

.navigation-close {
  margin-bottom: 60px;
}
</style>
