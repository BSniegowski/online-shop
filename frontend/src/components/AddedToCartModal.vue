<script setup lang="ts">
const props = defineProps(['productName', 'productQuantity'])
</script>

<template>
  <div class="modal fade" tabindex="-1" aria-labelledby="addedToCartModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Dodano {{props.productName}}({{props.productQuantity}})</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Check
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kupuj dalej</button>
          <button type="button" class="btn btn-primary">Idź do koszyka</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>