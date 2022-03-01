<template>
  <section class="carousel">
    <img
      v-for="image in currentImageCarousel"
      :key="image.id"
      :src="require('@/assets/images/' + image.url)"
      :alt="image.name"
    />
    <div class="carousel-buttons">
      <button @click="nextImageCaroussel()">
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
      <button @click="prevImageCaroussel()">
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
  data() {
    return {
      images: [
        {
          id: 1,
          url: "image-product-1.jpg",
          name: "product 1",
        },
        {
          id: 2,
          url: "image-product-2.jpg",
          name: "product 2",
        },
        {
          id: 3,
          url: "image-product-3.jpg",
          name: "product 3",
        },
        {
          id: 4,
          url: "image-product-4.jpg",
          name: "product 4",
        },
      ],
      currentImageId: 1,
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
    currentImageCarousel() {
      return this.images.filter((image) => {
        return image.id == this.currentImageId;
      });
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
    width: 40px;
    height: 40px;
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
