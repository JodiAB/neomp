<template>
  <div v-if="showModal" class="modal">
    <div v-for="product in $store.state.jewellery" :key="product.jewelID" class="modal" ref="modal" >
    <div class="modal-content product-card" ref="modal">
      <span class="close" @click="closeModal">&times;</span>
      <div class="card">
        <div class="card__title">
          <div class="icon">
            <a href="#"><i class="fa fa-arrow-left"></i></a>
          </div>
          <h3>{{ productData.jewelName }}</h3>
        </div>
        <div class="card__body">
          <div class="half">
            <div class="featured_text">
              <p class="sub">Product Description</p>
              <p class="price">R {{ productData.jewelAmount }}</p>
            </div>
            <div class="image">
              <img :src="productData.jewelImage" alt="Product Image">
            </div>
          </div>
          <div class="half">
            <div class="description">
              <p>{{ productData.jewelAmount }}</p>
            </div>
            <span class="stock"><i class="fa fa-pen"></i> In stock</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  props: {
    showModal: Boolean,
    productData: Object,
  },
  data() {
    return {
      selectedCategory: "",
      minPrice: null,
      maxPrice: null,
      searchQuery: "",
      showModal: false,
      selectedProduct: {}

    };
  },
  computed: {
    products() {
      return this.$store.dispatch('fetchJewellery');
    },
   
  },
  methods: {
    openModal(product) {
      this.selectedProduct = product;
      this.showModal = true;
      document.body.classList.add('modal-open');
    },
    closeModal() {
      this.showModal = false;
      document.body.classList.remove('modal-open');
    },
    async fetchData() {
      try {
        await this.$store.dispatch('fetchJewellery');
      } catch (error) {
        console.error('Error fetching jewellery:', error);
      }
    }
   
  },
  created() {
    this.fetchData();
  
  }
};
</script>

<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding: 20px;
  border-radius: 5px;
  max-width: 600px; /* Adjust the maximum width as needed */
  width: 80%;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 28px;
  color: #aaa;
  cursor: pointer;
}

.close:hover {
  color: black;
}

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: white;
}

.card__title {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.card__title .icon {
  margin-right: 10px;
}

.card__title h3 {
  margin: 0;
}

.card__body {
  display: flex;
}

.half {
  flex: 1;
  padding: 0 10px;
}

.image img {
  max-width: 100%;
  height: auto;
}

.description p {
  margin-bottom: 10px;
}

.stock {
  display: block;
  margin-top: 10px;
  color: #666;
}

.fa {
  color: #666;
}


/* Show modal */
.modal-open {
  overflow: hidden;
}

.modal-open .modal {
  display: block;
}

</style>
