<template>
  <section
    class="modal"
    v-for="image in getProductsImage"
    :key="image.id"
    v-show="SowModal"
  >
    <div class="carousel">
      <div class="close-modal">
        <button class="btn btn-close-modal" @click="activeModalCarousel()">
          X
        </button>
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
      isActiveModal: null,
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
    SowModal() {
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
  background-color: #00000061;

  .carousel {
    max-width: 650px;
  }

  .close-modal {
    text-align: right;
  }

  .carousel-image {
    max-width: 550px;
    max-height: 540px;
  }

  .carousel-buttons {
    display: flex !important;
  }

  .carousel-thumbnail {
    display: block;

    ul {
      justify-content: center;
    }
  }
}
</style>
