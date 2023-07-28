<template>
  <div>
    <h1>{{ product.name }}</h1>
    <img :src="`http://localhost:8000/images/stock/${product.name}.jpg`" alt="..."/>
    <div class="input-group mb-3" style="width: 180px">
      <input
          v-model="productQuantity"
          type="number"
          class="form-control"
          aria-describedby="basic-addon2"
      >
      <span class="input-group-text" id="basic-addon2">z {{ product.quantity }} sztuk</span>
      <button data-bs-toggle="modal" data-bs-target="#addedToCartModal" class="btn btn-primary">Dodaj do koszyka
      </button>
    </div>

    <AddedToCartModal id="addedToCartModal" :productName="product.name"
                      :productQuantity="productQuantity"/>
  </div>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref} from 'vue';
import {useRoute} from 'vue-router';
import AddedToCartModal from "@/components/AddedToCartModal.vue";

const product: { [key: string]: string } = reactive({});
const productQuantity = ref(1);

const route = useRoute();

onMounted(() => {
  product.name = <string>route.params.name;
  fetchQuantity();
});



function fetchQuantity() {
  fetch(`http://localhost:8000/api/stock/${product.name}`)
      .then(response => response.json())
      .then(data => {
        product.quantity = data;
      })
      .catch(error => console.error('Error fetching entries:', error));
}

</script>

<style scoped>

</style>
