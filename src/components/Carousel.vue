<template>
  <ul>
    <li v-for="(image, index) in productsImg" :key="index">
      <p>
        {{ image }}
      </p>
    </li>
  </ul>
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
