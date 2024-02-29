<template>
    <div>
      <h1>Product list</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in $store.state.jewellery" :key="product.jewelID">
            <td>{{ product.jewelID }}</td>
            <td>{{ product.jewelCategory }}</td>
            <td>{{ product.jewelName }}</td>
            <td>{{ product.jewelDescription }}</td>
            <td>R {{ product.jewelAmount }}</td>
            
            <td><img :src="product.jewelImage" alt="Product Image" style="width: 100px; height: auto;"></td>
            <td>
              <button @click="openModal('edit', product.jewelID)">Edit</button>
              <button @click="openModal('delete', product)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="openModal('add', product)">Add Product</button>


      <h1>User Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Role</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="people in $store.state.users" :key="people.userID">
            <td>{{ people.userID }}</td>
            <td>{{ people.firstName }}</td>
            <td>{{ people.lastName }}</td>
            <td>{{ people.userAge }}</td>
            <td>{{ people.gender }}</td>
            <td>{{ people.emailAdd }}</td>
            <td>{{ people.gender }}</td>
            <td>{{ people.userRole }}</td>
       
  
            <td>
              <button @click="openModal('edit', product)">Edit</button>
              <button @click="openModal('delete', product)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button  @click="AddPro()">Add Product</button>
  
      <!-- Add Product Modal -->
      <AddPro/>
      <!-- <div v-if="addModal" class="modal" ref="addModal">
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
      </div> -->
  
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
            
          </form>
        </div>
      </div>
  
      <!-- Delete Product Modal -->
      <div v-if="deleteModal" class="modal" ref="deleteModal">
        <div class="modal-content">
          <h2>Delete Product</h2>
          <p>Are you sure you want to delete "{{ selectedProduct.name }}"?</p>
          <button @click="deleteJewel">Confirm</button>
          <button @click="closeModal('deleteModal')">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import AddPro from '../components/AddPro.vue';
  export default {
    components:{
      AddPro
    },
    data() {
      return {
        addModal: false,
        editModal: false,
        deleteModal: false,
        selectedProduct: {},
        newProduct: { name: '', description: '', price: 0, image: null },
        editedProduct: { name: '', description: '', price: 0, image: null },
        products: {},
        people: {}
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
     // Add a new jewellery item
  async addJewel(){
    try {
        await this.$store.dispatch('addJewel', );
      } catch (error) {
        console.error('Error adding jewellery:', error);
      }
  },
    // Delete a jewellery item by ID
   async deleteJewel(){
    try {
        await this.$store.dispatch('deleteJewel');
      } catch (error) {
        console.error('Error adding jewellery:', error);
      }
   },
    // Update a jewellery item
    async updateJewel(){
      try {
        await this.$store.dispatch('updateJewel', );
      } catch (error) {
        console.error('Error adding jewellery:', error);
      }
    },
      onImageChange(event) {
      const file = event.target.files[0];
      this.newProduct.image = URL.createObjectURL(file);
    },
    onEditImageChange(event) {
      const file = event.target.files[0];
      this.editedProduct.image = URL.createObjectURL(file);
    },
    async fetchData() {
      try {
        await this.$store.dispatch('fetchJewellery', );
      } catch (error) {
        console.error('Error fetching jewellery:', error);
      }
    },
    async fetchInfo() {
      try {
        await this.$store.dispatch('fetchUsers');
      } catch (error) {
        console.error('Error fetching Users:', error);
      }
    }
    },
    created() {
    this.fetchData();
    this.fetchInfo();
  },
  computed: {
    products() {
      return this.$store.dispatch('fetchJewellery');
    },
    people(){
      return this.$store.dispatch('fetchUsers');
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

@media only screen and (max-width: 400px) {
  /* Table Styling */
  table {
    width: 100%;
    margin-bottom: 15px; /* Adjust margin for better spacing */
  }
  
  th, td {
    padding: 10px; /* Adjust padding for better spacing */
    font-size: 14px; /* Adjust font size for smaller screens */
  }

  /* Button Styling */
  button {
    padding: 8px 12px; /* Adjust padding for better spacing */
    font-size: 14px; /* Adjust font size for smaller screens */
  }

  /* Modal Styling */
  .modal-content {
    width: 90%; /* Adjust modal content width for better fit on smaller screens */
    margin: 15% auto; /* Adjust margin for better centering on smaller screens */
  }
}


</style>