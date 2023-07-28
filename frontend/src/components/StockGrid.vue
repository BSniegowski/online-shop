<template>
  <div class="container">
    <h1>Our stock</h1>
    <div class="row">
      <div v-for="product in products" :key="product.type" class="col-md-4">
        <div class="card">
          <img :src="`http://localhost:8000/images/stock/${product.type}.jpg`" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Miód {{ product.type }}</h5>
            <p class="card-text">Pozostało {{ product.quantity }} sztuk.</p>
              <router-link class="btn btn-primary" :to="`/product/${product.type}`">Dodaj do koszyka</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchEntries();
  },
  methods: {
    fetchEntries() {
      fetch('http://localhost:8000/api/stock')
          .then(response => response.json())
          .then(data => {
            console.log(data);
            (this.products = data)
          })
          .catch(error => console.error('Error fetching entries:', error));
    },
  }
};
</script>


<style>
.card {
  margin: 8px;
}
</style>