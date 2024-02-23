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

    
    <div class="centerflipcards">
      <div class="square-flip">
          <div class='square' >
              <div class="square-container">
                  <div class="align-center"></div>
                  <h2 class="textshadow">
                    Our Values
                  </h2>
                  <img class="PI" >
                 
              </div>
              <div class="flip-overlay"></div>
          </div>
          <div class='square2'>
              <div class="square-container2">
                  <div class="align-center">
                    <p>
                      Integrity, innovation, and excellence are at the core of everything we do. We believe in [value 1], [value 2], and [value 3], and we uphold these principles in every interaction, both internally and externally.
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
                  <h2 class="textshadow"> What We Do</h2>
                  <img class="PI" >
              </div>
              <div class="flip-overlay"></div>
          </div>
          <div class='square2' >
              <div class="square-container2">
                  <div class="align-center">
                    <p>  We are a team of passionate [professionals/experts] who believe in the power of [industry/sector]. Our diverse backgrounds and expertise allow us to approach challenges from multiple perspectives, ensuring innovative solutions that drive success.</p>
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
                  <h2 class="textshadow">
                    Who We Are
                  </h2>
                  <img class="PI">
              </div>
              <div class="flip-overlay"></div>
          </div>
          <div class='square2' data-image="http://titanicthemes.com/files/flipbox/kallyas-wedding.jpg">
              <div class="square-container2">
                  <div class="align-center">
                    <p>
                      We are a team of passionate [professionals/experts] who believe in the power of [industry/sector]. Our diverse backgrounds and expertise allow us to approach challenges from multiple perspectives, ensuring innovative solutions that drive success.
                    </p>
                  </div>
                  
                  <br>
                  <br>
              
                  
         
              </div>
              <div class="flip-overlay"></div>
          </div>
      </div>
    
    <div>
      <h1>Why Choose Us</h1>
      <h3>Expertise</h3>
      <p>Our team brings years of experience and a deep understanding of [industry/sector].</p>


      <h3>Customer-Centric Approach</h3>
      <p>We prioritize our clients' needs, ensuring personalized solutions and unparalleled support.</p>


      <h3>Results-Driven</h3>
      <p>We are committed to delivering measurable results that drive growth and success.</p>



      <h3>Continuous Improvement</h3>
      <p>We embrace change and constantly seek ways to innovate and improve our offerings.</p>

      
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

  button{
    margin-right: 10px;
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

    /*border:1px solid #efefef;*/
    
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

    
    /*You can delete this style*/
    .centerflipcards{
  display:block;
        width:1330px;
  height:440px;
        text-align:center;
        margin:0 auto;
        margin-top:25px;
    }
    .centerflipcardsb{
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
.PI{
    width:100%;
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
  
</style>