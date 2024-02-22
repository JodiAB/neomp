<template>
  <div class="body">
    <h1 class="heading">
      Welcome to Company Name
    </h1>
    <h2 class="sub-heading">
      At [Your Company Name], we are committed to revolutionizing [industry/sector]. Since our inception, we've been dedicated to [mission/goal], striving to [what you aim to achieve].
    </h2>

    <p class="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero rerum eius impedit error cumque earum quidem doloremque, ducimus iusto perferendis eum facilis a, debitis, molestias reprehenderit sint accusamus aperiam esse praesentium aliquam vero aliquid quod? Molestiae, tempore ratione minus deleniti molestias esse deserunt quasi iusto consequuntur eos dolorem est! Consequatur?</p>

    <div class="banner-container">
      <h1>Get A Discount</h1>
      <h2>with your first purchase</h2>
    </div>

    <div class="container">
      <div class="card">
        <h4 class="heading-card">
          Welcome to Company Name
        </h4>
        <div class="bg"></div>
        <div class="blob"></div>
      </div>
      <div class="card">
        <h4 class="heading-card">
          What We Do
        </h4>
        <p></p>
        <div class="bg"></div>
        <div class="blob"></div>
      </div>
      <div class="card">
        <h4 class="heading-card">
          Our Values
        </h4>
        <div class="bg"></div>
        <div class="blob"></div>
      </div>
    </div>
    

  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.body{
  background: rgb(70, 101, 111);
  height: 200vh;

}
  .heading{
    display: flex;
    justify-content: center;
    text-align: center;
    color: black;
    z-index: 100;
  }

  .sub-heading{
    display: flex;
    justify-content: center;
    text-align: center;
    color: aliceblue;
  }
  .banner-container{
    position: relative;
    left: 75px;
    width: 1300px;
    height: 250px;
    border-radius: 14px;
    z-index: 1111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    background-image: url('https://i.gifer.com/fxTQ.gif'); /* Replace 'your-image-url.jpg' with the path to your image */
  background-size: cover; /* Ensures the background image covers the entire container */
  background-position: center; /* Centers the background image */
    gap: 1rem;
   margin-bottom: 40px;
   margin-top: 40px;
  }

  .container {
    display: flex;
    justify-content: space-between; /* Adjust spacing between cards */
    max-width: 700px;
    width: 99%;
    margin: 0 auto;
    position: relative;

  }
  .card {
    position: relative;
    width: 200px;
    height: 250px;
    border-radius: 14px;
    z-index: 1111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  }
  
  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 190px;
    height: 240px;
    z-index: 2;
    background: rgba(255, 255, 255, .95);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid white;
  }
  
  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgb(95, 174, 244);
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }
  
  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  
    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }
  
    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }
  
    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }
  
    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
  .para{
    color: aliceblue;
    display: flex;
    justify-content: center;
  }
  .heading-card{
    display: flex;
    justify-content: center;
    text-align: center;
    color: black;
    z-index: 100;
    margin-top: -170px;
  }
  
</style>