<template>
  <div class="navigation">
    <div class="navigation-btn" @click="toggleMenuSidebar()">
      <button class="btn">
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
            fill="#69707D"
            fill-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <nav class="site-navigation">
      <router-link :to="{ name: 'collections' }">Collections</router-link>
      <router-link :to="{ name: 'men' }">Men</router-link>
      <router-link :to="{ name: 'women' }">Women</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link :to="{ name: 'contact' }">Contact</router-link>
    </nav>
    <TheNavigationMobile v-if="activeSidebar" />
  </div>
</template>

<script>
import TheNavigationMobile from "@/components/TheNavigationMobile.vue";

export default {
  name: "TheNavigation",
  components: {
    TheNavigationMobile,
  },
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

<style lang="scss">
@import "./src/assets/scss/style.scss";

.navigation {
  margin-right: 15px;
  color: $dark_grayish_blue;
}
.site-navigation {
  display: none;
}

@media (min-width: 1200px) {
  .navigation,
  .site-navigation {
    height: inherit;
    display: flex;

    a {
      height: inherit;
      display: flex;
      align-items: center;
      margin-right: 30px;

      &:hover {
        border-bottom: 2px solid $orange;
      }
    }
  }

  .navigation-btn {
    display: none;
  }
}
</style>
