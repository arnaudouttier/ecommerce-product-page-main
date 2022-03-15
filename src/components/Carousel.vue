<template>
  <section class="carousel" v-for="product in products" :key="product.id">
    <img
      :src="require(`@/assets/images/${product.imageUrl[currentImageId]}`)"
      width="520"
      height="520"
      loading="eager"
      decoding="sync"
    />
    <div class="carousel-buttons">
      <button @click="prevImageCaroussel()">
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </button>
      <button @click="nextImageCaroussel()">
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div class="carousel-thumbnail">
      <ul>
        <li>
          <img
            v-for="imaeTumbnail in product.imageUrl"
            :key="imaeTumbnail.id"
            :src="require(`@/assets/images/${imaeTumbnail}`)"
            width="90"
            height="90"
            loading="eager"
            decoding="sync"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      currentImageId: 0,
    };
  },
  methods: {
    nextImageCaroussel() {
      if (this.currentImageId < 3) {
        this.currentImageId = this.currentImageId + 1;
      }
    },
    prevImageCaroussel() {
      if (this.currentImageId > 0) {
        this.currentImageId = this.currentImageId - 1;
      }
    },
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/style.scss";

.carousel {
  position: relative;
}

.carousel-buttons {
  width: 90%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  padding: 0 5%;

  button {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: $white;

    &:hover {
      svg {
        path {
          stroke: $orange;
        }
      }
    }
  }
}

.carousel-thumbnail {
  display: none;
}

@media (min-width: 1200px) {
  .carousel {
    img {
      border-radius: 20px;
    }
  }

  .carousel-buttons {
    display: none;
  }

  .carousel-thumbnail {
    img {
      max-width: 90px;
      max-height: 90px;
    }
  }
}
</style>
