<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>${{ product.price }}</td>
            <td><img :src="product.image" alt="Product Image" style="width: 100px; height: auto;"></td>
            <td>
              <button @click="openModal('edit', product)">Edit</button>
              <button @click="openModal('delete', product)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="openModal('add', product)">Add Product</button>
  
      <!-- Add Product Modal -->
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
            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>
  
      <!-- Edit Product Modal -->
      <div v-if="editModal" class="modal" ref="editModal">
        <div class="modal-content">
          <span class="close" @click="closeModal('editModal')">&times;</span>
          <h2>Edit Product</h2>
          <form @submit.prevent="editProduct">
            <label for="editProductName">Name:</label>
            <input type="text" id="editProductName" v-model="editedProduct.name" required>
            <label for="editProductDescription">Description:</label>
            <textarea id="editProductDescription" v-model="editedProduct.description" required></textarea>
            <label for="editProductPrice">Price:</label>
            <input type="number" id="editProductPrice" v-model="editedProduct.price" required>
            <label for="editProductImage">Image:</label>
          <input type="file" id="editProductImage" @change="onEditImageChange" accept="image/*" required>
          <button type="submit">Save Changes</button>
            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
  
      <!-- Delete Product Modal -->
      <div v-if="deleteModal" class="modal" ref="deleteModal">
        <div class="modal-content">
          <h2>Delete Product</h2>
          <p>Are you sure you want to delete "{{ selectedProduct.name }}"?</p>
          <button @click="deleteProduct">Confirm</button>
          <button @click="closeModal('deleteModal')">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        addModal: false,
        editModal: false,
        deleteModal: false,
        selectedProduct: {},
        newProduct: { name: '', description: '', price: 0, image: null },
        editedProduct: { name: '', description: '', price: 0, image: null },
        products: [
          { id: 1, name: 'Silver Necklace', description: 'Beautiful silver necklace with pendant.', price: 50, rating: 4, image: 'https://via.placeholder.com/150' },
          { id: 2, name: 'Leather Bracelet', description: 'Stylish leather bracelet for men.', price: 30, rating: 3, image: 'https://via.placeholder.com/150' },
          { id: 3, name: 'Gold Ring', description: 'Elegant gold ring for special occasions.', price: 40, rating: 5, image: 'https://via.placeholder.com/150' },
          // Add more products as needed
        ]
      };
    },
    methods: {
      openModal(type, product) {
        if (type === 'add') {
          this.addModal = true;
        } else if (type === 'edit') {
          this.editedProduct = { ...product }; // Create a copy of the product to edit
          this.editModal = true;
        } else if (type === 'delete') {
          this.selectedProduct = product;
          this.deleteModal = true;
        }
        document.body.classList.add('modal-open');
      },
      closeModal(modalName) {
        this[modalName] = false;
        document.body.classList.remove('modal-open');
      },
      addProduct() {
        // Add the new product to the products array
        this.products.push({ ...this.newProduct, id: this.products.length + 1 });
        this.newProduct = { name: '', description: '', price: 0, image: null }; // Reset new product data
        this.closeModal('addModal');
      },
      editProduct() {
        // Find the index of the edited product
        const index = this.products.findIndex(product => product.id === this.editedProduct.id);
        if (index !== -1) {
          // Update the product with the edited data
          this.products[index] = { ...this.editedProduct };
          this.closeModal('editModal');
        }
      },
      deleteProduct() {
        const index = this.products.findIndex(product => product.id === this.selectedProduct.id);
        if (index !== -1) {
          this.products.splice(index, 1);
          this.closeModal('deleteModal');
        }
      },
      onImageChange(event) {
      const file = event.target.files[0];
      this.newProduct.image = URL.createObjectURL(file);
    },
    onEditImageChange(event) {
      const file = event.target.files[0];
      this.editedProduct.image = URL.createObjectURL(file);
    }
    }
  }
  </script>
  
  <style>
/* Table Styling */
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  text-align: left;
}

/* Button Styling */
button {
  padding: 8px 12px;
  border: none;
  cursor: pointer;
}

.edit-btn {
  background-color: #4CAF50;
  color: white;
}

.delete-btn {
  background-color: #f44336;
  color: white;
}

.confirm-delete-btn {
  background-color: #f44336;
  color: white;
}

.cancel-delete-btn {
  background-color: #ccc;
  color: black;
}

/* Modal Styling */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 5px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

/* Show modal */
.modal-open {
  overflow: hidden;
}

.modal-open .modal {
  display: block;
}
</style>