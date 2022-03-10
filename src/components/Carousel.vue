<template>
<<<<<<< HEAD
  <ul>
    <li v-for="(image, index) in productsImg" :key="index">
      <p>
        {{ image }}
      </p>
    </li>
  </ul>
=======
  <section class="carousel">
    <img
      v-for="(imae, index) in products"
      :key="index"
      :src="require('@/assets/images/' + imae.imageUrl[currentImageId])"
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
>>>>>>> 3f6672bd498a1ebb39d0377d36daedb677dde0d3
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
<<<<<<< HEAD
    // nextImageCaroussel() {
    //   if (this.currentImageId < this.images.length) {
    //     this.currentImageId = this.currentImageId + 1;
    //   }
    // },
    // prevImageCaroussel() {
    //   if (this.currentImageId > 1) {
    //     this.currentImageId = this.currentImageId - 1;
    //   }
    // },
  },
  computed: {
    productsImg() {
      return this.$store.getters.getProductsImage;
=======
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
      return this.$store.getters.availableProducts;
>>>>>>> 3f6672bd498a1ebb39d0377d36daedb677dde0d3
    },
  },
};
</script>

<style scoped lang="scss">
@import './src/assets/scss/style.scss';

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
