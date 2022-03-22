<template>
  <section class="carousel" v-for="image in getProductsImage" :key="image.id">
    <div class="carousel-image">
      <img
        @click="activeModalCarousel()"
        :src="require(`@/assets/images/${image[currentImageId].imageUrl}`)"
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
    </div>

    <div class="carousel-thumbnail">
      <ul>
        <li
          v-for="im in image"
          :key="im.id"
          @click="currentImageThumbnailId(im.id)"
        >
          <img
            @click="toggleactiveImgThumbnail($event)"
            :src="require(`@/assets/images/${im.imageThumbnailUrl}`)"
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
        this.etProductImae(this.currentImageId);
      }
    },
    prevImageCaroussel() {
      if (this.currentImageId > 0) {
        this.currentImageId = this.currentImageId - 1;
        this.etProductImae(this.currentImageId);
      }
    },
    currentImageThumbnailId(id) {
      this.currentImageId = id;
    },

    toggleactiveImgThumbnail(event) {
      document.querySelectorAll(".carousel-thumbnail img").forEach((tImg) => {
        tImg.classList.remove("active");
      });
      event.target.classList.toggle("active");
    },
    activeModalCarousel() {
      return this.$store.dispatch("sowModal");
    },
  },
  computed: {
    getProductsImage() {
      return this.$store.getters.getProductsImage;
    },
  },
};
</script>

<style lang="scss">
@import "./src/assets/scss/style.scss";

.carousel {
  position: relative;
  cursor: pointer;
}

.carousel-image {
  display: flex;

  .carousel-buttons {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-self: center;
    position: absolute;
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
    display: none !important;
  }

  .carousel-thumbnail {
    display: block;

    ul {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      gap: 30px;
    }

    img {
      max-width: 90px;
      max-height: 90px;

      &:hover {
        opacity: 0.4;
      }
      &.active {
        border: 2px solid $orange;
      }
    }
  }
}
</style>
