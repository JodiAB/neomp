<template>

  <div>

    <div class="desire">
      <h1>Welcome to the store</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, officia!</p>
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
  background: linear-gradient(-50deg, rgb(196, 244, 241), #f9d7f9, rgb(247, 244, 244), #9f9da0);
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

</style>
