<template>
    <div class="container vh-100">
        <img class="breath-in" src="https://media.tenor.com/PakfdmVl8nUAAAAM/diamond.gif" alt="" />
</div>
<!-- <div v-else>
    {{ dataAvailable ? data : spinner-box }}
  </div> -->
</template>
<!-- <script>
export default {
    props: {
    data: {
      type: [String, Number, Array, Object],
      default: '', // Default value if not provided
    },
    loading: {
      type: Boolean,
      default: false, // Default value if not provided
    },
  },
    computed: {
    dataAvailable() {
      return (
        (Array.isArray(this.data) && this.data.length > 0) ||
        (typeof this.data === 'object' && Object.keys(this.data).length > 0) ||
        (typeof this.data === 'string' && this.data !== '') ||
        (typeof this.data === 'number' && !isNaN(this.data))
      );
    },
  },
};

</script> -->
<style>
    /* SOLAR SYSTEM */

.solar-system {
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .orbit {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #fafbfC;
      border-radius: 50%;
  } 
  
  .earth-orbit {
      width: 165px;
      height: 165px;
    -webkit-animation: spin 12s linear 0s infinite;
  }
  
  .venus-orbit {
      width: 120px;
      height: 120px;
    -webkit-animation: spin 7.4s linear 0s infinite;
  }
  
  .mercury-orbit {
      width: 90px;
      height: 90px;
    -webkit-animation: spin 3s linear 0s infinite;
  }
  
  .planet {
      position: absolute;
      top: -5px;
    width: 10px;
    height: 10px;
      border-radius: 50%;
    background-color: #3ff9dc;
  }
  
  .sun {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #ffab91;
  }
  
  .leo {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
  }
  
  .blue-orbit {
      width: 165px;
      height: 165px;
    border: 1px solid #91daffa5;
    -webkit-animation: spin3D 3s linear .2s infinite;
  }
  
  .green-orbit {
      width: 120px;
      height: 120px;
    border: 1px solid #91ffbfa5;
    -webkit-animation: spin3D 2s linear 0s infinite;
  }
  
  .red-orbit {
      width: 90px;
      height: 90px;
    border: 1px solid #ffca91a5;
    -webkit-animation: spin3D 1s linear 0s infinite;
  }
  
  .white-orbit {
      width: 60px;
      height: 60px;
    border: 2px solid #ffffff;
    -webkit-animation: spin3D 10s linear 0s infinite;
  }
  
  .w1 {
    transform: rotate3D(1, 1, 1, 90deg);
  }
  
  .w2 {
    transform: rotate3D(1, 2, .5, 90deg);
  }
  
  .w3 {
    transform: rotate3D(.5, 1, 2, 90deg);
  }
</style>