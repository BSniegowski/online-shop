<script setup lang="ts">

</script>

<template>
  <div id="gallery" class="carousel slide" data-bs-ride="carousel" data-bs-interval=4000>
    <h1>Welcome to our gallery</h1>
    <div class="carousel-inner">
      <div v-for="(image, idx) in galleryImages" :class="{'carousel-item': true,active: idx===0}" :key="idx">
          <img :src="`http://localhost:8000/images/gallery/${image}`" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#gallery" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#gallery" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      galleryImages: [],
    };
  },
  mounted() {
    this.fetchEntries();
  },
  methods: {
    fetchEntries() {
      // Replace 'YOUR_BACKEND_API_ENDPOINT' with the actual API endpoint URL
      fetch('http://localhost:8000/api/gallery')
          .then(response => response.json())
          .then(data => {
            console.log(data);
            (this.galleryImages = data)
          })
          .catch(error => console.error('Error fetching entries:', error));
    },
  }
};
</script>

<style scoped>

</style>