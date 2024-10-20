import React from 'react'
import "./About.css";
import ab1 from '../../assests/ab1.jpg';
/*import logo3 from '../../assests/logo3.png';*/

const About = () => {
  return (
    <>
   
<div class="div-class">.</div>



        <div class=" p-5 m-5">
       
          <div class="italic text-center text-info"><h1>Hello, We're Clicksturn</h1></div></div>
      
     

       

<div class=" container"><div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 text-light">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src={ab1} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
          </div>
          <div class="col-lg-6">
            
            <p class="lead"><h3>Introducing Clicksturn,</h3> A dynamic newcomer in the digital marketing sphere, poised to revolutionize industry standards with innovative strategies and an unwavering dedication to client satisfaction. Our team is founded on principles of collaboration, working together to forge partnerships and deliver exceptional outcomes for our clients. Specializing in a comprehensive suite of services tailored to drive online visibility and business growth, from targeted PPC campaigns to engaging social media strategies and personalized email campaigns, we adapt our approach to suit each client's unique needs. Committed to excellence and accountability, we take ownership of our actions, ensuring measurable results that surpass expectations. Clicksturn isn't just another digital marketing agency—it's a strategic ally, committed to guiding businesses toward success in today's fast-paced digital landscape..</p>
            
          </div>
        </div>
        </div>
        </div>

        <div class="div-class">.</div>

        <footer class="border-top">
  <div class=" mt-3 text-center text-light">
    <p>
     <h4>Contact Us:</h4>
     Email: contact@clicksturn.com 
    </p>
  </div>
</footer>




       
    </>
  )
}

export default About
