<template>
  <div class="body">
    <h1 class="heading">
      Welcome to Titan Treasures
    </h1>
    <h2 class="sub-heading">
      At Titan Treasures, we are committed to revolutionizing the men's jewelry industry. Since our inception, we've been dedicated to providing high-quality, stylish jewelry pieces that redefine masculine elegance, striving to empower men to express their individuality and elevate their personal style with confidence.
    </h2>


    

    
    <div class="centerflipcards">
      <div class="square-flip">
          <div class='square' >
              <div class="square-container">
                  <div class="align-center"></div>
                  <h2 id="glass">
                    Our Values
                  </h2>
             
                 
              </div>
              <div class="flip-overlay"></div>
          </div>
          <div class='square2'>
              <div class="square-container2">
                  <div class="align-center">
                    <p id="bomb">
                      Integrity, innovation, and excellence are at the core of everything we do. We believe in integrity, innovation, and excellence, and we uphold these principles in every interaction, both internally and externally.
                    </p>
                  </div>
               
                  <br>
                  <br>
                      
                  
              </div>
              
              <div class="flip-overlay"></div>
          </div>
      </div>




  
      <div class="square-flip">
          <div class='square' data-image="https://iili.io/J74tsu1.md.png">
              <div class="square-container">
                  <div class="align-center boxshadow" src="https://iili.io/J74tsu1.md.png" alt="J74tsu1.md.png" border="0" ></div>
                  <h2 id="glass"> What We Do</h2>
                  
              </div>
              <div class="flip-overlay"></div>
          </div>
          <div class='square2' >
              <div class="square-container2">
                  <div class="align-center">
                    <p id="bomb">  We are a team of passionate professionals who believe in the power of the men's jewelry industry. Our diverse backgrounds and expertise allow us to approach challenges from multiple perspectives, ensuring innovative solutions that drive success.</p>
                  </div>
                  <br>
                  <br>
                  
           
               
                
              </div>
              <div class="flip-overlay"></div>
          </div>
      </div>



  
      <div class="square-flip">
          <div class='square '>
              <div class="square-container ">
                  <div class="align-center"><img src="http://titanicthemes.com/files/flipbox/kallyas2.png" class="boxshadow" alt=""></div>
                  <h2 id="glass">
                    Who We Are
                  </h2>
                 
              </div>
              <div class="flip-overlay"></div>
          </div>
          <div class='square2' data-image="http://titanicthemes.com/files/flipbox/kallyas-wedding.jpg">
              <div class="square-container2">
                  <div class="align-center">
                    <p id="bomb">
                      We are a team of passionate experts who believe in the power of the men's jewelry industry. Our diverse backgrounds and expertise allow us to approach challenges from multiple perspectives, ensuring innovative solutions that drive success.
                    </p>
                  </div>
                  
                  <br>
                  <br>
              
                  
         
              </div>
              <div class="flip-overlay"></div>
          </div>
        </div>
        
        <div>
          
          
                <h1 class="heading">Why Choose Us</h1>

      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>


<div class="ab">

</div>
<!-- end ab -->
   
   <div class="content">
      <!-- card -->
      <div class="food">
         
            <div class="icon"><i class='bx bxs-business bx-tada' ></i></div>
            <p class="title">Expertise</p>
            <p class="text">Our team brings years of experience and a deep understanding of men's jewelry industry.</p>
         
      </div>
      <!-- end card -->
      <!-- card -->
      <div class="food">
         
            <div class="icon"><i class='bx bxs-heart bx-tada' ></i></div>
            <p class="title">Customer-Centric Approach</p>
            <p class="text">We prioritize our clients' needs, ensuring personalized solutions and unparalleled support.</p>
         
      </div>
      <!-- end card -->
      <!-- card -->
      <div class="food">
         
            <div class="icon"><i class='bx bx-trending-up bx-tada' ></i></div>
            <p class="title">Results-Driven</p>
            <p class="text">We embrace change and constantly seek ways to innovate and improve our offerings.</p>
         
      </div>
      <!-- end card -->
   

   
   </div>
</div>

    
    </div>

  </div>

</template>
<script>
export default {
  
}
</script>
<style scoped>

.bx{
  font-size: 40px;
}
.body{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
  background: linear-gradient(-50deg, rgb(244, 238, 129), #060606, rgb(7, 7, 7), #9f9da0);
  background-size: 200% 200%; /* Increase the size to cover the entire animation */
  animation: fire 7s ease infinite;
  height: 200vh;
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
#glass{
  color: rgb(249, 239, 136);
  text-align: center;
  font-size: 30px;
  text-transform: uppercase;
}

#bomb{
  color: rgb(249, 239, 136);
  text-align: center;
  font-size: 15px;
  text-transform: uppercase;
}
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

  .sub-heading {
    font-size: 1.2em;
    line-height: 150%;
    text-align: center;
    color: MintCream;
    letter-spacing: .5px;
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
    box-shadow: 10px 10px 30px #bebebe, -10px -10px 30px #ffffff;
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
    margin-bottom: -170px;
  }
  .para-banner{
    display: flex;
    justify-content: center;
    text-align: center;
    color: black;
    z-index: 101;
    font-size: 10px;
  }


.square-flip{
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -ms-perspective: 1000;
    perspective: 1000;

    -webkit-transform: perspective(1000px);
    -moz-transform: perspective(1000px);
    -ms-transform: perspective(1000px);
    transform: perspective(1000px);

    -webkit-transform-style: preserve-3d; 
    -moz-transform-style: preserve-3d; 
    -ms-transform-style: preserve-3d; 
    transform-style: preserve-3d; 


    
    position:relative;
    float:left;
    margin:20px;

    }
    .square-flip{
        width:400px;
        height:400px;
    }
    .square,.square2{
        width:100%;
        height:100%;
    }
    .square{

        background-size: cover;
        background-position:center center;

        -ms-transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
            transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
            -webkit-transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
        overflow: hidden;

        position:absolute;
        top:0;


        -webkit-backface-visibility: hidden; 
        backface-visibility: hidden;
        box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    }
    .square-flip .square{
        -webkit-transform: rotateY(0deg);
        -moz-transform: rotateY(0deg);
        -o-transform: rotateY(0deg);
        -ms-transform: rotateY(0deg);
        transform: rotateY(0deg);
        transform-style: preserve-3d;
        z-index:1;
    }
    .square-flip:hover .square{
        -webkit-transform: rotateY(-180deg);
        -moz-transform: rotateY(-180deg);
        -o-transform: rotateY(-180deg);
        -ms-transform: rotateY(-180deg);
        transform: rotateY(-180deg);
        transform-style: preserve-3d;
        
    }


    .square2{

        background-size: cover;
        background-position:center center;

        -ms-transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
            transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
            -webkit-transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
        overflow: hidden;

        position:absolute;
        top:0;

        -webkit-backface-visibility: hidden; 
        backface-visibility: hidden;
        box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    }
    .square-flip .square2{
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);
        -o-transform: rotateY(180deg);
        -ms-transform: rotateY(180deg);
        transform: rotateY(180deg);
        transform-style: preserve-3d;
        z-index:1;
    }
    .square-flip:hover .square2{
        -webkit-transform: rotateY(0deg);
        -moz-transform: rotateY(0deg);
        -o-transform: rotateY(0deg);
        -ms-transform: rotateY(0deg);
        transform: rotateY(0deg);
        transform-style: preserve-3d;
    }

    /*Square content*/
    .square-container{
        color: aliceblue;
        padding:40px;
        text-align:center;
        position:relative;
        top:50%;

        -ms-transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
            transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
            -webkit-transition: transform 0.60s cubic-bezier(.5,.3,.3,1);

    
        -webkit-transform: translateY(-50%) translateX(0px)  scale(1);
        -ms-transform: translateY(-50%) translateX(0px)  scale(1);
transform: translateY(-50%) translateX(0px)  scale(1);
        transform-style: preserve-3d;
        z-index:2;
    }
    .square-flip:hover .square-container{
        
        -webkit-transform: translateY(-50%) translateX(-650px)  scale(.88);
        -ms-transform: translateY(-50%) translateX(-650px)  scale(.88);
  transform: translateY(-50%) translateX(-650px)  scale(.88);
        transform-style: preserve-3d;

    }

    .square-container2{
        color: aliceblue;
        padding:40px;
        text-align:center;
        position:relative;
        top:50%;

        -ms-transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
            transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
            -webkit-transition: transform 0.60s cubic-bezier(.5,.3,.3,1);

        
        -webkit-transform: translateY(-50%) translateX(650px) translateZ(60px) scale(.88);
        -ms-transform: translateY(-50%) translateX(650px) translateZ(60px) scale(.88);
  transform: translateY(-50%) translateX(650px) translateZ(60px) scale(.88);

        transform-style: preserve-3d;
        z-index:2;
    }
    .square-flip:hover .square-container2{
        
        -webkit-transform: translateY(-50%) translateX(0px) translateZ(0px) scale(1);
        -ms-transform: translateY(-50%) translateX(0px) translateZ(0px) scale(1);
        transform: translateY(-50%) translateX(0px) translateZ(0px) scale(1);
  transform-style: preserve-3d;
    }



    /*Style text*/
    .square-flip h2{
        color:white;
        font-family: "Open Sans";
        font-weight:700;
        font-size:22px;
    }
    .square-flip h3{
        color:white;
        font-family: "Open Sans";
        font-weight:500;
        font-size:16px;
        line-height:26px;
    }
    /*Elements*/
    .flip-overlay{
        display:block;
        background:rgba(0,0,0,0.5);
        width:100%;
        height:100%;
        position:absolute;
        top:0;
    }
    .align-center{
        margin:0 auto;
    }
    

    /*ADD SHADOWS OPTIONAL*/
    .square-flip .square .boxshadow, .square-flip .square .textshadow, .square-flip .square2 .boxshadow, .square-flip .square2 .textshadow{
        -ms-transition: 0.60s;
            transition: 0.60s;
            -webkit-transition: 0.60s;
    }

    .square-flip .square .boxshadow{
        -webkit-box-shadow: 24px 42px 58px -8px rgba(0,0,0,0.3);
        -moz-box-shadow: 24px 42px 58px -8px rgba(0,0,0,0.3);
        box-shadow: 24px 42px 58px -8px rgba(0,0,0,0.3);
    }
    .square-flip .square .textshadow{
        -webkit-text-shadow: 24px 42px 58px -8px rgba(0,0,0,0.3);
        -moz-text-shadow: 24px 42px 58px -8px rgba(0,0,0,0.3);
        text-shadow: 24px 42px 58px -8px rgba(0,0,0,0.3);
    }
    .square-flip:hover .square .boxshadow, .square-flip:hover .square .textshadow{
        -webkit-box-shadow: 240px 42px 58px -8px rgba(0,0,0,0.0);
        -moz-box-shadow: 240px 42px 58px -8px rgba(0,0,0,0.0);
        box-shadow: 240px 42px 58px -8px rgba(0,0,0,0.0);
    }


    .square-flip .square2 .boxshadow{
        -webkit-box-shadow: 240px 42px 58px -8px rgba(0,0,0,0.0);
        -moz-box-shadow: 240px 42px 58px -8px rgba(0,0,0,0.0);
        box-shadow: 240px 42px 58px -8px rgba(0,0,0,0.0);
    }
    .square-flip .square2 .textshadow{
        -webkit-text-shadow: 240px 42px 58px -8px rgba(0,0,0,0.0);
        -moz-text-shadow: 240px 42px 58px -8px rgba(0,0,0,0.0);
        text-shadow: 240px 42px 58px -8px rgba(0,0,0,0.0);
    }
    .square-flip:hover .square2 .boxshadow, .square-flip:hover .square2 .textshadow{
        -webkit-box-shadow: 24px 42px 58px -8px rgba(0,0,0,0.3);
        -moz-box-shadow: 24px 42px 58px -8px rgba(0,0,0,0.3);
        box-shadow: 24px 42px 58px -8px rgba(0,0,0,0.3);
    }

    
    .centerflipcards{
  display:block;
        width:1330px;
  height:440px;
        text-align:center;
        margin:0 auto;
        margin-top:25px;
    }
    
.clearfix{clear:both;}
.centerflipcards p{
  font-family:"Open Sans";
  font-size:13px;
  margin-top:10px;
  font-weight:700;
}

@media only screen and (min-width: 375px) and (max-width: 768px) {

    .centerflipcards{
        display: flex;
    flex-direction: column;
    height: 1010px;
    margin-left: 140px;
    }

    .square-container{
        padding: 1px;
    }
    .centerflipcardsb{
        display: flex;
        flex-direction: column;
        height: 1010px;
        margin-left: 140px;
    }

}



.ab {
  position: fixed;
  z-index: 10;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  transition: all 0.2s ease;
}

.ab .bg_links {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 100%;
  backdrop-filter: blur(5px);
  position: absolute;
}

.ab .logo {
  width: 40px;
  height: 40px;
  z-index: 9;
  background-image: url(https://rafaelalucas91.github.io/assets/codepen/logo_white.svg);
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: 10px 7px;
  opacity: 0.9;
  transition: all 1s 0.2s ease;
  bottom: 0;
  right: 0;
}

.ab .social {
  opacity: 0;
  right: 0;
  bottom: 0;
}

.ab .social .icon {
  width: 100%;
  height: 100%;
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  display: flex;
  transition: all 0.2s ease, background-color 0.4s ease;
  opacity: 0;
  border-radius: 100%;
}

.ab .social.portfolio .icon {
  background-image: url(https://rafaelalucas91.github.io/assets/codepen/link.svg);
}

.ab .social.dribbble .icon {
  background-image: url(https://rafaelalucas91.github.io/assets/codepen/dribbble.svg);
}

.ab .social.linkedin .icon {
  background-image: url(https://rafaelalucas91.github.io/assets/codepen/linkedin.svg);
}

.ab:hover {
  width: 105px;
  height: 105px;
  transition: all 0.6s cubic-bezier(0.64, 0.01, 0.07, 1.65);
}

.ab:hover .logo {
  opacity: 1;
  transition: all 0.6s ease;
}

.ab:hover .social {
  opacity: 1;
}

.ab:hover .social .icon {
  opacity: 0.9;
  font-size: 50px;
}

.ab:hover .social.portfolio {
  right: 0;
  bottom: calc(100% - 40px);
  transition: all 0.3s cubic-bezier(0.64, 0.01, 0.07, 1.65);
}

.ab:hover .social.dribbble {
  bottom: 45%;
  right: 45%;
  transition: all 0.3s cubic-bezier(0.64, 0.01, 0.07, 1.65) 0.15s;
}

.ab:hover .social.linkedin {
  bottom: 0;
  right: calc(100% - 40px);
  transition: all 0.3s cubic-bezier(0.64, 0.01, 0.07, 1.65) 0.25s;
}

.wrapper {
  width: 100vw;
  margin: 0 auto;
  height: 400px;
  background-color: #161616;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;
}

@media screen and (max-width: 767px) {
  .wrapper {
     height: 700px;
  }
}

.content {
  max-width: 1024px;
  width: 100%;
  padding: 0 4%;
  padding-top: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 767px) {
  .content {
     padding-top: 300px;
     flex-direction: column;
  }
}

.food {
  width: 100%;
  max-width: 300px;
  min-width: 200px;
  height: 250px;
  background-color: #292929;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
  border: 2px solid rgba(7, 7, 7, 0.12);
  font-size: 16px;   
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease;
}

.icon {
  margin: 0 auto;
  width: 100%;
  height: 80px;
  max-width:80px;
  background: linear-gradient(90deg, #f6ff7e 0%, #c5ff48 40%, rgba(0, 0, 0, 0.28) 60%);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(8, 8, 8);
  transition: all 0.8s ease;
  background-position: 0px;
  background-size: 200px;
}


.food .title {
  width: 100%;
  margin: 0;
  text-align: center;
  margin-top: 30px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 4px;
}

.food .text {
  width: 80%;
  margin: 0 auto;
  font-size: 13px;
  text-align: center;
  margin-top: 20px;
  color: white;
  font-weight: 200;
  letter-spacing: 2px;
  opacity: 0;
  max-height:0;
  transition: all 0.3s ease;
}

.food:hover {
  height: 270px;
}

.food:hover .info {
  height: 90%;
}

.food:hover .text {
  transition: all 0.3s ease;
  opacity: 1;
  max-height:40px;
}

.food:hover .icon {
  background-position: -120px;
  transition: all 0.3s ease;
}

.food:hover .icon i {
  background: gold;
  -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
  opacity: 1;
  transition: all 0.3s ease;
}

/* Existing styles */

@media only screen and (max-width: 300px) {
  /* Adjust styles for heading */
  .heading {
    font-size: 40px;
    margin-bottom: 0.5rem; /* Adjust margin for smaller screens */
  }

  /* Adjust styles for sub-heading */
  .sub-heading {
    font-size: 1em;
    line-height: 130%;
    margin-bottom: 0.5rem; /* Adjust margin for smaller screens */
  }

  /* Adjust styles for container */
  .container {
    max-width: 90%; /* Adjust max width for smaller screens */
    margin: 0 auto; /* Center container horizontally */
  }

  /* Adjust styles for card */
  .card {
    width: 90%; /* Adjust card width for smaller screens */
    max-width: none; /* Remove maximum width constraint */
    height: auto; /* Allow cards to adjust height based on content */
    margin: 1rem auto; /* Center cards horizontally and add spacing between them */
  }

  /* Adjust styles for icon within card */
  .food .icon {
    height: 60px; /* Adjust icon height for smaller screens */
    max-width: 60px; /* Adjust icon width for smaller screens */
  }

  /* Adjust styles for title within card */
  .food .title {
    margin-top: 20px; /* Adjust spacing above the title for smaller screens */
  }

  /* Adjust styles for text within card */
  .food .text {
    margin-top: 10px; /* Adjust spacing above the text for smaller screens */
    font-size: 12px; /* Adjust font size for smaller screens */
    max-height: none; /* Allow text to expand beyond initial height */
    opacity: 1; /* Ensure text is visible by default */
  }

  /* Add other component adjustments as needed */

.centerflipcards {
  width: 100%; /* Adjust width to occupy full width */
  margin-left: 0; /* Remove left margin */
  margin-right: 0; /* Remove right margin */
}
.content {
  padding-top: 100px; /* Increase top padding for better spacing */
  flex-direction: column; /* Change flex direction to stack elements vertically */
}
.body {
  background: linear-gradient(-50deg, rgb(244, 238, 129), #060606, rgb(7, 7, 7), #9f9da0);
  height: 424vh;/* Allow body height to adjust based on content */
 
}
.square-flip {
  width: 250px;
  height: 400px;
}
.food{
  width: 80%;
}
}
</style>