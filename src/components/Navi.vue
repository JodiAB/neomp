<template >
    <div>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/products">Products</router-link> |
            <router-link to="/contact">Contact</router-link> |
            <router-link to="/admin">Admin</router-link> |
            
          </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
  nav {
    
    padding: 10px;
    background-color: transparent;
    text-align: right;
  }
  
  nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  nav a.router-link-exact-active {
    color: #42b983;
  }
  </style>
  