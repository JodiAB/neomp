<template>
    <div>
      <h2>Add New Jewellery</h2>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="jewel.name" />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="jewel.description"></textarea>
      </div>
      <div>
        <label for="category">Category:</label>
        <input type="text" id="category" v-model="jewel.category" />
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="number" id="price" v-model="jewel.price" />
      </div>
      <div>
        <label for="image">Image:</label>
        <input type="file" id="image" @change="onImageChange" accept="image/*" />
      </div>
      <div>
        <button @click="addJewellery">Add Jewellery</button>
      </div>
  
      <!-- Add Jewellery Modal -->
      <div v-if="addModal" class="modal" ref="addModal">
        <div class="modal-content">
          <span class="close" @click="closeModal('addModal')">&times;</span>
          <h2>Add New Jewellery</h2>
          <form @submit.prevent="addJewellery">
            <!-- Your form fields for adding jewellery inside the modal -->
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        jewel: { name: '', description: '', category: '', price: '', image: null },
        addModal: false
      };
    },
    methods: {
      addJewellery() {
        // Handle adding jewellery functionality here
        // You can send the data to the server or perform any other actions
        // Reset the form after adding jewellery
        this.jewel = { name: '', description: '', category: '', price: '', image: null };
        // Close the modal
        this.closeModal('addModal');
      },
      onImageChange(event) {
        // Handle image change functionality here
        // Update the image in the data
        const file = event.target.files[0];
        this.jewel.image = URL.createObjectURL(file);
      },
      openModal() {
        this.addModal = true;
        document.body.classList.add('modal-open');
      },
      closeModal(modalName) {
        this.addModal = false;
        document.body.classList.remove('modal-open');
      }
    }
  };
  </script>
  
  <style>
  /* Your modal and other styles */
  </style>
  