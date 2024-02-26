<template>

  <div>

    <div class="desire">
      <div class="container">
      <h1 class="header">Titan Treasures</h1>
      <p class="classy">Crafted for Titans, Worn by Leaders</p>
      <button class="button"> Get in touch <div class="hoverEffect">
        <div>
        </div>
        </div></button>
    </div>


    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

.desire {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
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
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.header{
  font-size: 120px;
  text-transform: uppercase;
  font-family: 'Gambetta', serif;
  letter-spacing: -3px;
  transition: 700ms ease;
  font-variation-settings: "wght" 311;
  margin-bottom: 0.8rem;
  color: rgb(241, 225, 47);
  outline: none;
  text-align: center;
}

.header:hover{
  font-variation-settings: "wght" 582; 
  letter-spacing: 1px;
}

.classy{
  font-size: 1.2em;
  line-height: 150%;
  text-align: center;
  color: MintCream;
  letter-spacing: .5px;
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
  background: linear-gradient(90deg, rgb(206, 203, 204) 0%, rgb(233, 255, 70) 49%, rgb(201, 241, 67) 100%);
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
</style>
