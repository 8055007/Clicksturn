import React from 'react'
import re1 from '../../assests/re1.jpeg';
import w1 from '../../assests/w1.jpg';

const recruit = () => {
  return (
   <>
      <div class="div-class "></div> 

      <div class="container col-xxl-8 px-4 py-5">
<div class="row flex-lg-row-reverse align-items-center g-5 py-5 text-light">
    <div class="col-10 col-sm-8 col-lg-6">
        <img src={re1} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
       </div>
       <div class="col-lg-6">
       <h1 class="display-5 fw-bold lh-1 mb-3 text-light">Transforming Talent Acquisition.</h1>
       <div class="div-class "></div> 
     <p class="lead"><h3>Setting New Standards in Recruitment.</h3>
     <ul><li>70% of hiring challenges stem from ineffective processes.</li>
         <li>A thriving organization begins with the right talent.</li>
         <li>Let our expertise guide you in identifying exceptional candidates.</li></ul></p>
       </div>
</div>
</div>

<div class="container col-xxl-8 px-4 py-5">
  <div class="row flex-lg-row-reverse align-items-center g-5 py-5 text-light">
    
    <div class="col-lg-6">
       <h1 class="display-5 fw-bold lh-1 mb-3 text-light">Why Choose ClickTurn?</h1>
       <div class="div-class "></div> 
     <p class="lead">
     <ul><li>70% of hiring challenges stem from ineffective processes.</li>
         <li>A thriving organization begins with the right talent.</li>
         <li>Let our expertise guide you in identifying exceptional candidates.</li></ul></p> </div>
         <div class="col-10 col-sm-8 col-lg-6"> 
      <img src={w1} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
    </div>
  </div>
  </div>




  <div class="container px-4 py-5 bg-secondary rounded-3" id="featured-3 bg-warning">
    <h2 class="pb-2 border-bottom text-light ">Our Services:</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 text-light">
         
        </div>
        <h3 class="fs-2 text-body-emphasis text-light">Performance-Based Recruitment:</h3>
        <p ><ul>
          <li>You only invest in our services when we deliver the ideal candidate for your specific roles.</li>
          <li>Our focus is on long-term success, ensuring the right talent joins your team.</li></ul></p>
       
      </div>
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
         
        </div>
        <h3 class="fs-2 text-body-emphasis text-light">Dedicated Recruitment Support:</h3>
        <p><ul>
          <li>Perfect for organizations needing additional recruitment bandwidth</li>
          <li>Our dedicated team integrates with your operations, overseeing the hiring process from start to finish.</li>
          <li>You’ll receive a comprehensive strategy to maintain top-tier recruiting practices post-engagement.</li></ul></p>
      </div>
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          
        </div>
        <h3 class="fs-2 text-body-emphasis text-light">Leadership Search Services:</h3>
        <p><li>65% of firms identify a gap in their leadership capabilities.</li>
        <li>We partner with you to understand your strategic vision and culture before seeking out the best executive talent.</li>
        <li>Our process ensures that your next leader aligns with your organizational goals</li></p>
        </div>
    </div>
  </div>

  <div class="div-class "></div> 

  <div class="container py-5 text-light bg-secondary rounded-4">
    <h2 class="text-center">Our Recruitment Process:</h2>
    <h3 >A Closer Look at How We Work:</h3>
    <div>
      <p><ol>
      <li >Initial Consultation:</li>
       <ul> <li>We kick off with a collaborative meeting to explore your company’s values, ambitions, and the type of talent needed to drive those objectives.</li></ul>

    <li>In-Depth Talent Search:</li>
        <ul><li>Our team employs advanced sourcing techniques and leverages extensive networks to discover candidates that fit your criteria.</li></ul>

    <li>Comprehensive Screening:</li>
    <ul><li> We conduct thorough evaluations of candidates based on their skills, enthusiasm, and compatibility with your company culture.</li></ul>

    <li>Facilitated Interviews:</li>
    <ul><li> We coordinate the interview process, ensuring smooth communication between your team and candidates, along with tailored interview preparation.</li></ul>

   <li>Offer and Onboarding Assistance:</li> 
   <ul><li>  Our support continues beyond hiring, as we assist with offer negotiations and onboarding processes, ensuring a seamless transition for new hires.</li></ul>
      </ol></p>
    </div>
  </div>

  <div class="my-5">
  <div class="p-5 bg-secondary">
    <div class="container py-5">
      <h1 class="text-light ">Key Achievements:</h1>
      <p class="text-light lead">
      <ul><li>Average Hiring Time: Under 30 Days.</li>
    <li>Candidate Retention Rate: 98% ensuring lasting partnerships.</li>
    <li>Global Reach: Successfully placed candidates across 5+ countries (US, UK, Canada, Australia, India).</li></ul>
      </p>
    </div>
  </div>
</div>

<footer class="border-top">
  <div class=" mt-3 text-center text-light">
    <p>
     <h4>Contact Us:</h4>
     Email: contact@clickturn.com 
    </p>
  </div>
</footer>



    </>
  )
}

export default recruit
