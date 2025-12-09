function setFooterHTML(){
    var footercontainer = document.getElementById("footer-container");
    if(!footercontainer) return; // element not yet in DOM

    if(footercontainer.innerHTML.trim().length < 10){
        footercontainer.innerHTML = `<div class="container-fluid bg-dark text-white footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
         <div class="container py-5">
            <div class="row g-5">
               <div class="col-lg-4 col-md-6">
                  <h3 class="mb-4" style="color: #FFD700;">Get In Touch</h3>
                  <p class="mb-2">
                     <i class="fa fa-map-marker-alt me-3"></i>Church Rd, Jamlipada, Kunchi Kurve Nagar, Kalina,
                     Santacruz East, Mumbai, Maharashtra 400098
                  </p>
                  <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>Phone : 26664601</p>
                  <p class="mb-2"><i class="fa fa-envelope me-3"></i>maryimmaculate_kalina@redifmail.com</p>
                  <p class="mb-2"><i class="fab fa-facebook-f me-3"></i>
                     <a href="https://www.facebook.com/profile.php?id=61563919385132" target="_blank" style="text-decoration: none; color: #fff;">
                        MIGHS Kalina &nbsp;<i class="fas fa-external-link-alt me-3"></i>


                     </a></p>
               </div>
               <div class="col-lg-4 col-md-6">
                  <h3 class="mb-4" style="color: #FFD700;">Quick Links</h3>
                  <a class="btn btn-link text-white"  href="/about-us/history.html">About Us</a>
                  <a class="btn btn-link text-white"  href="/contact-us.html">Contact Us</a>
                  <a class="btn btn-link text-white"  href="#ourMentor">Our Mentor</a>
                  <a class="btn btn-link text-white"  href="/infrastructure.html">Infrastructure</a>
                  <a class="btn btn-link text-white"  href="/gallery.html">Gallery</a>
                  <a class="btn btn-link text-white"  href="/calender.html">Calender</a>
                  <a class="btn btn-link text-white"  href="/emagazine.html">Emagazine</a>
               </div>
               <div class="col-lg-4 col-md-6">
                  <h3 class=" mb-4" style="color: #FFD700;">Photo Gallery</h3>
                  <div class="row g-2 pt-2">
                     <div class="col-4">
                        <a href="" >
                           <img class="img-fluid rounded bg-light p-1" src="/img/carousel-1.jpg" alt=""></a>
                     </div>
                     <div class="col-4">
                        <a href="" >
                           <img class="img-fluid rounded bg-light p-1" src="/img/carousel-2.jpg" alt=""></a>
                     </div>
                     <div class="col-4">
                        <a href="" >
                           <img class="img-fluid rounded bg-light p-1" src="/img/carousel-1.jpg" alt=""></a>
                     </div>
                  
                  </div>
               </div>
            </div>
         </div>
         <div class="container">
            <div class="copyright">
               <div class="row">
                  <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  Copyright © 2024. All Rights Reserved.

                     <a class="" href="#"> Mary Immaculate Girls’ High School, Kalina</a>
                  </div>
                  <div class="col-md-6 text-center text-md-end mb-3 mb-md-0">Powered by
                     <a class="" target="_blank" href="https://www.nascorptechnologies.com/"> <img
                           src="/img/logo-white2.png" style="width: 25px;">&nbsp;nascorp</a>
                  </div>
               </div>
            </div>
         </div>
      </div>`;
    }
}

// first attempt immediately
setFooterHTML();

// after 5 sec re-check & set again
setTimeout(function(){
    setFooterHTML();
}, 5000);
