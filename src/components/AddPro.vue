<template>
  <div>
    <div v-if="addModal" class="modal" ref="addModal">
      <div class="modal-content">
        <span class="close" @click="closeModal('addModal')">&times;</span>
        <h2>Add Product</h2>
        <form @submit.prevent="addProduct">
          <label for="productName">Name:</label>
          <input type="text" id="productName" v-model="newProduct.name" required>
          <label for="productDescription">Description:</label>
          <textarea id="productDescription" v-model="newProduct.description" required></textarea>
          <label for="productPrice">Price:</label>
          <input type="number" id="productPrice" v-model="newProduct.price" required>
          <label for="productImage">Image:</label>
        <input type="file" id="productImage" @change="onImageChange" accept="image/*" required>
          <button type="submit" @click="addJewel">Add Product</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
  return{
    jewelID: '',
    jewelCategory: '',
    jewelName: '',
    jewelDescription: '',
    jewelAmount: '',
    jewelImage: ''
  }
},
methods(){

},
computed:{
  addProducts(){
    this.$store.dispatch('addJewel', this$data)
  }
}
}
</script>
<style>
  
</style>