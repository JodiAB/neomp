<template>
  <div class="back">
    <h1 class="heading">Product Page</h1>
    <div v-for="(product, index) in products" :key="index" class="product-card">
      <img :src="product.image" alt="Product Image">
      <div class="description">
        <h3>{{ product.name }}</h3>
        <p>Description: {{ product.description }}</p>
        <p>Price: R{{ product.price }}</p>
        <button @click="openModal(product)" class="button">View Details<div class="hoverEffect"><div></div></div></button>
        <button class="button"> Get in touch <div class="hoverEffect">
          <div>
          </div>
          </div></button>
      </div>
    </div>
    <div v-for="(product, index) in products" :key="index" class="product-card">
      <img :src="product.image" alt="Product Image">
      <div class="description">
        <h3>{{ product.name }}</h3>
        <p>Description: {{ product.description }}</p>
        <p>Price: R{{ product.price }}</p>
        <button @click="openModal(product)" class="button">View Details<div class="hoverEffect"><div></div></div></button>
        <button class="button"> Get in touch <div class="hoverEffect">
          <div>
          </div>
          </div></button>
      </div>
    </div>
    <div v-for="(product, index) in products" :key="index" class="product-card">
      <img :src="product.image" alt="Product Image">
      <div class="description">
        <h3>{{ product.name }}</h3>
        <p>Description: {{ product.description }}</p>
        <p>Price: R{{ product.price }}</p>
        <button @click="openModal(product)" class="button">View Details<div class="hoverEffect"><div></div></div></button>
        <button class="button"> Get in touch <div class="hoverEffect">
          <div>
          </div>
          </div></button>
      </div>
    </div>
    

   <!-- Modal -->
<div v-if="showModal" class="modal" ref="modal">
  <div class="modal-content">
    <span class="close" @click="closeModal">&times;</span>
    <div class="card">
      <div class="card__title">
        <div class="icon">
          <a href="#"><i class="fa fa-arrow-left"></i></a>
        </div>
        <h3>{{ selectedProduct.name }}</h3>
      </div>
      <div class="card__body">
        <div class="half">
          <div class="featured_text">
            <h1>{{ selectedProduct.name }}</h1>
            <p class="sub">Product Description</p>
            <p class="price">$ {{ selectedProduct.price }}</p>
          </div>
          <div class="image">
            <img :src="selectedProduct.image" alt="Product Image">
          </div>
        </div>
        <div class="half">
          <div class="description">
            <p>{{ selectedProduct.description }}</p>
          </div>
          <span class="stock"><i class="fa fa-pen"></i> In stock</span>
          <!-- For simplicity, we're not including the reviews section in the modal -->
        </div>
      </div>
      <div class="card__footer">
        <div class="recommend">
          <!-- We don't have a recommended by field in the selected product -->
        </div>
        <div class="action">
          <!-- You can add an action button here if needed -->
        </div>
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
      showModal: false,
      selectedProduct: {},
      products: [
        { id: 1, name: 'Silver Necklace', description: 'Beautiful silver necklace with pendant.', price: 50, rating: 4, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Leather Bracelet', description: 'Stylish leather bracelet for men.', price: 30, rating: 3, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Gold Ring', description: 'Elegant gold ring for special occasions.', price: 40, rating: 5, image: 'https://via.placeholder.com/150' },
        // Add more products as needed
      ]
    };
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
    }
  }
}
</script>

<style>
.heading{
  font-size: 60px;
  text-transform: uppercase;
  font-family: 'Gambetta', serif;
  letter-spacing: -3px;
  transition: 700ms ease;
  font-variation-settings: "wght" 311;
  margin-bottom: 0.8rem;
  color: PaleGoldenRod;
  outline: none;
  text-align: center;
  z-index: 100;
}
.heading:hover{
  font-variation-settings: "wght" 582; 
  letter-spacing: 1px;
}
.back{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 155vh;
  background: linear-gradient(-50deg, rgb(244, 238, 129), #060606, rgb(7, 7, 7), #9f9da0);
  background-size: 200% 200%; /* Increase the size to cover the entire animation */
  animation: fire 7s ease infinite;
}

@keyframes fire {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.product-card {
  display: inline-block;
  width: calc(33.33% - 20px);
  margin: 10px;
  vertical-align: top;
  position: relative; /* Required for absolute positioning of pseudo-elements */
  background: linear-gradient(0deg, rgb(243, 240, 241) 0%, rgb(241, 225, 47) 49%, rgb(19, 19, 19) 100%);

}

.product-card::before,
.product-card::after {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  width: calc(100% + 10px);
  height: calc(100% + 10px);
  border: 4px solid #9e9e0f; /* Neon green color */
  border-radius: 5px;
  z-index: -1;
  animation: neon-border 1.5s infinite alternate; /* Neon animation */
}

@keyframes neon-border {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
}
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  border: 0;
  position: relative;
  overflow: hidden;
  border-radius: 10rem;
  transition: all 0.02s;
  font-weight: bold;
  color: rgb(37, 37, 37);
  z-index: 0;
  box-shadow: 0 0px 7px -5px rgba(0, 0, 0, 0.5);
}

.button:hover {
  background: rgb(193, 228, 248);
  color: rgb(33, 0, 85);
}

.button:active {
  transform: scale(0.97);
}

.hoverEffect {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.hoverEffect div {
  background: rgb(222,0,75);
  background: linear-gradient(90deg, rgba(222,0,75,1) 0%, rgba(191,70,255,1) 49%, rgba(0,212,255,1) 100%);
  border-radius: 40rem;
  width: 10rem;
  height: 10rem;
  transition: 0.4s;
  filter: blur(20px);
  animation: effect infinite 3s linear;
  opacity: 0.5;
}

.button:hover .hoverEffect div {
  width: 8rem;
  height: 8rem;
}

@keyframes effect {

  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

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