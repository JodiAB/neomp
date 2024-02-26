<template >
    <div class="footer">
        <h2 class="foot">&copy;  <span>{{ currYear }}</span> Jodi Abrahams Portfolio. All rights reserved.</h2>
    </div>
</template>
<script>
import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState({
        footerData: state => state.Footer
      }),
    },
    created() {
      this.$store.dispatch('fetchDataFromAPI'); // Corrected action name
    },
    data() {
            return {
                currYear: new Date().getFullYear()
            }
        }
  }
</script>
<style >

  
  .foot {
   
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }
  
</style>