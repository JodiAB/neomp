<template>
  <div class="back">
    <h1 class="heading">Product Page</h1>
    <div v-for="product in $store.state.jewellery" :key="product.jewelID" class="product-card">
      <div class="description">
        <h3>{{ product.jewelName }}</h3>
        <p>Price: R{{ product.jewelAmount }}</p>
       
        <button @click="openModal(index)" class="button">View Details<div class="hoverEffect"><div></div></div></button>
        <button class="button"> Get in touch <div class="hoverEffect">
          <div>
          </div>
          </div></button>
      </div>
    </div>
    
    <!-- Modal -->
    <div v-if="showModal" v-for="product in $store.state.jewellery" :key="product.jewelID" class="modal" ref="modal" >
      <div class="modal-content product-card">
        <span class="close" @click="closeModal">&times;</span>
        <div class="card">
          <div class="card__title">
            <div class="icon">
              <a href="#"><i class="fa fa-arrow-left"></i></a>
            </div>
            <h3>{{ product.jewelName }}</h3>
          </div>
          <div class="card__body">
            <div class="half">
              <div class="featured_text">
                <h4>{{ product.jewelName }}</h4>
                <p class="sub">Product Description</p>
                <p class="price">R {{ product.jewelAmount }}</p>
              </div>
              <div class="image">
                <img :src="product.image" alt="Product Image">
              </div>
            </div>
            <div class="half">
              <div class="description">
                <p>{{ product.jewelAmount }}</p>
              </div>
              <span class="stock"><i class="fa fa-pen"></i> In stock</span>
              <!-- For simplicity, we're not including the reviews section in the modal -->
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
  height: 600vh;
  background: linear-gradient(-50deg, rgb(244, 238, 129), #060606, rgb(7, 7, 7), #9f9da0);
  background-size: 200% 200%; /* Increase the size to cover the entire animation */
  animation: fire 7s ease infinite;
  z-index: -1;
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
  height: 211px;
  vertical-align: top;
  position: relative; /* Required for absolute positioning of pseudo-elements */
  background: aliceblue;
  z-index: 1;
}

.product-card::before,
.product-card::after {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  width: calc(100% + 10px);
  height: calc(100% + 10px);
  border: 4px solid #ede218; /* Neon green color */
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
  z-index: 1000;
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


@media only screen and (max-width: 300px) {
  .heading {
    font-size: 30px; /* Adjust heading font size for smaller screens */
  }

  .back {
    height: auto; /* Allow background height to adjust based on content */
  }

  .product-card {
    width: 100%; /* Adjust product card width to fit the full screen */
    margin: 10px 0; /* Adjust margin for better spacing */
    height: auto; /* Allow product card height to adjust based on content */
  }

  .product-card::before,
  .product-card::after {
    display: none; /* Hide neon border on smaller screens */
  }

  .button {
    width: 100%; /* Adjust button width to fit the full screen */
  }

  .modal-content {
    width: 90%; /* Adjust modal content width for better fit on smaller screens */
    margin: 10% auto; /* Adjust margin for better centering on smaller screens */
  }
}
</style>