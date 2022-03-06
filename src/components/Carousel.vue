<template>
  <section class="carousel">
    <img
      v-for="image in currentImageCarousel"
      :key="image.id"
      :src="require('@/assets/images/' + image.url)"
      :alt="image.name"
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
  </section>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    product: {
      type: Object,
    },
  },
  data() {
    return {
      currentImageId: 1,
      productId: Number,
    };
  },
  methods: {
    nextImageCaroussel() {
      if (this.currentImageId < this.images.length) {
        this.currentImageId = this.currentImageId + 1;
      }
    },
    prevImageCaroussel() {
      if (this.currentImageId > 1) {
        this.currentImageId = this.currentImageId - 1;
      }
    },
  },
  computed: {
    productsId() {
      return this.$store.state.products.id;
    },

    currentImageCarousel() {
      return this.product.filter((p) => {
        return p.id == this.productsId;
      });
    },
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
</style>
