<template>
  <section
    class="modal"
    v-for="image in getProductsImage"
    :key="image.id"
    v-show="ShowModal"
  >
    <div class="carousel">
      <div class="close-modal">
        <button
          class="btn btn-close-modal"
          @click="activeModalCarousel()"
        ></button>
      </div>

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
    </div>
  </section>
</template>

<script>
export default {
  name: "ModalCarousel",
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
    currentImageThumbnailId(id) {
      this.currentImageId = id;
    },

    toggleactiveImgThumbnail(event) {
      document
        .querySelectorAll(".carousel-thumbnail img")
        .forEach((thumbnailImage) => {
          thumbnailImage.classList.remove("active");
        });
      event.target.classList.toggle("active");
    },
    activeModalCarousel() {
      return this.$store.dispatch("showModal");
    },
  },
  computed: {
    getProductsImage() {
      return this.$store.getters.getProductsImage;
    },
    ShowModal() {
      return this.$store.getters.getActiveModal;
    },
  },
};
</script>

<style lang="scss">
@import "./src/assets/scss/style.scss";

.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 999;

  .carousel {
    max-width: 650px;
  }

  .close-modal {
    text-align: right;
    margin-bottom: 20px;
    height: 30px;

    .btn-close-modal {
      position: relative;
      width: 30px;

      &::before,
      &::after {
        content: " ";
        display: block;
        background-color: $white;
        height: 4px;
        width: 25px;
        position: absolute;
        top: 0;
        left: 0;
        transition: background-color 0.1s ease;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }

      &:hover {
        &::before,
        &::after {
          background-color: $orange;
        }
      }
    }
  }

  .carousel-image {
    max-width: 550px;
    max-height: 540px;
  }

  .carousel-buttons {
    display: flex !important;
    width: 110%;
    left: -5%;
    padding: 0;

    button {
      width: 56px;
      height: 56px;
    }
  }

  .carousel-thumbnail {
    display: block;

    ul {
      justify-content: center;
    }
  }
}
</style>
