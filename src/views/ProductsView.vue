<template>
    <div class="products">
      <h1>Products</h1>
      <div class="product" v-for="product in productsData" :key="product.sku">
        <div class="image" @click="viewProduct(product)" :style="{ backgroundImage: 'url(' + product.image + ')' }"></div>
        <div class="name">{{ product.product }}</div>
        <div class="description">{{ product.description }}</div>
        <div class="price">{{ product.price | currency }}</div>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
  
      <!-- Modal -->
      <div class="modalWrapper" v-if="showModal">
        <div class="modal">
          <i class="close" @click="hideModal">✖</i>
          <div class="imageWrapper">
            <div class="image" :style="{ backgroundImage: 'url(' + modalData.image + ')' }"></div>
          </div>
          <div class="name">{{ modalData.product }}</div>
          <div class="description">{{ modalData.description }}</div>
          <div class="details">{{ modalData.details }}</div>
          <h3 class="price">{{ modalData.price | currency }}</h3>
          <label for="modalAmount">QTY</label>
          <input id="modalAmount" v-model="modalAmount" class="amount" @keyup.enter="modalAddToCart(modalData), hideModal()" />
          <button @click="modalAddToCart(modalData), hideModal()">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      productsData: Array,
      cart: Array,
      tax: Number,
      cartSubTotal: Number,
      cartTotal: Number
    },
    data() {
      return {
        showModal: false,
        modalData: {},
        modalAmount: 1
      };
    },
    methods: {
      addToCart(product) {
        // Your addToCart logic
      },
      modalAddToCart(modalData) {
        // Your modalAddToCart logic
      },
      viewProduct(product) {
        // Your viewProduct logic
      },
      hideModal() {
        this.modalData = {};
        this.showModal = false;
      }
    },
    filters: {
      currency(value) {
        // Your currency formatting logic
      }
    }
  };
  </script>
  
  <style scoped>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;400i;700&display=swap');

/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Bitter', serif; /* Apply Bitter font to all elements */
}

/* Define variables */
:root {
  --mobile: 600px;
  --max-width: 80em;
}

/* Mixin for aspect ratio */
.aspect-ratio {
  position: relative;
}

.aspect-ratio:before {
  display: block;
  content: "";
  width: 100%;
}

.aspect-ratio > .content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

/* Keyframes */
@keyframes openUp {
  0% {
    transform: translate(-50%, -50%) scale(0.5);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

/* Button styles */
button {
  appearance: none;
  padding: 0.5em;
  margin: 0.5em 0;
  background: white;
  border: 1px solid black;
  transition: all 0.1s;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
}

button:hover {
  color: white;
  background: black;
}

/* Input styles */
input {
  display: inline-block;
  appearance: none;
  padding: 0.5em;
  margin: 0.5em 0.5em 0.5em 0;
  width: 50px;
  background: white;
  border: 1px solid black;
  transition: all 0.1s;
  font-size: 14px;
}

/* Label styles */
label {
  font-size: 0.75em;
  margin-right: 0.5em;
}

/* Checkout area styles */
.checkout-area table {
  margin: 0 auto;
  padding: 0.5em;
  width: 100%;
  max-width: var(--max-width);
  text-align: left;
}

.checkout-area th,
.checkout-area td {
  padding: 0 0.25em;
}

@media (max-width: var(--mobile)) {
  .checkout-area th:nth-child(3),
  .checkout-area td:nth-child(3) {
    display: none;
  }
}

/* Alignment utility classes */
.align-left {
  text-align: left;
}

.align-center {
  text-align: center;
}

.align-right {
  text-align: right;
}

.vert-bottom {
  vertical-align: bottom;
}

.vert-middle {
  vertical-align: middle;
}

/* Main wrapper styles */
.main-wrapper .header {
  position: relative;
  background: linear-gradient(to left, #16222A, #3A6073);
  background-size: cover;
  height: 25em;
  width: 100vw;
  box-shadow: inset -1px -3px 5px rgba(0, 0, 0, 0.5), inset 1px 3px 5px rgba(0, 0, 0, 0.5);
}

.main-wrapper .header h1 {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3em;
  text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5), -1px -3px 5px rgba(0, 0, 0, 0.5);
}

/* Vue styles */
#vue {
  margin: 0 auto;
  padding: 0.5em;
  text-align: center;
}

#vue .cart {
  position: fixed;
  right: 0em;
  top: 0em;
  text-align: right;
  background: rgba(0, 0, 0, 0.85);
  color: white;
  z-index: 1;
}

/* More styles... */

  </style>
  