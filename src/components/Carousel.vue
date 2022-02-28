<template>
  <section class="carousel">
    <img
      v-for="image in currentImageCarousel"
      :key="image.id"
      :src="require('@/assets/images/' + image.url)"
      :alt="image.name"
    />
    <button @click="nextImageCaroussel()">Suivant</button>
    <button @click="prevImageCaroussel()">Précedent</button>
  </section>
  {{ currentImageId }}
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

<style scoped lang="scss" >
</style>