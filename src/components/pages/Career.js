import React from 'react'
import './career.css';
import c1 from '../../assests/c1.jpeg';


const Career = () => {
  return (
    <>
    <div class="div-class">,</div>


    <div class="bg-secondary p-5 mt-5">
        <div class=" p-5 m-5">
          <div class="italic text-center"><h1>"Your experience + our knowledge = your ideal job."</h1></div></div>
      </div>


      <div class="container col-xxl-8 px-4 py-5">
  <div class="row flex-lg-row-reverse align-items-center g-5 py-5 text-light">
    
    <div class="col-lg-6">
       <h1 class="display-5 fw-bold lh-1 mb-3 text-light">Our Career Service</h1>
       <div class="div-class "></div> 
     <p class="lead">
     Job searching can be stressful, but with our Career Service, you're never alone. Our dedicated team of career consultants is here to support you at every step. We go beyond the basics to offer personalized services that put you ahead of the competition. Whether you need a resume revamp, in-depth interview coaching, or salary negotiation tips, we have you covered.

      <p class="mb-3">Bring your passion and experience — we’ll provide the industry insights, expert guidance, and ongoing support to help you land your next big opportunity. With us, your career is in trusted hands, and your success is our mission.</p></p> </div>
         <div class="col-10 col-sm-8 col-lg-6"> 
      <img src={c1} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
    </div>
  </div>
  </div>

  <div class="bg-secondary p-5 mt-5">
        <div class=" p-5 m-5">
          <div class="italic text-center"><h1>"We don’t just help you find a job — we help you build your career. Our Career Service brings your professional dreams to life, faster and more effectively than ever."</h1></div></div>
      </div>
      

      <div class="div-class">,</div>



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

export default Career
