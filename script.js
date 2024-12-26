let bars = document.querySelector(".bar");


let disValue = document.querySelectorAll(".number");
let interval = 3500;

disValue.forEach((valdisplay) =>{
    let stValue  = 0;
    let endValue = parseInt(valdisplay.getAttribute("data-val"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function() {
        stValue+=1;
        valdisplay.textContent = stValue;
        if(stValue == endValue){
            clearInterval(counter);
        }
    },duration)
});


const scrollRevealOption = {
    distance: "50px",
    origin: "up",
    duration: 1000,
  };
  
  ScrollReveal().reveal("main .main", {
    ...scrollRevealOption,
    origin: "up",
  });
  ScrollReveal().reveal("main .sec-heading", {
    ...scrollRevealOption,
    origin:"up",
    delay:500,
  });
  ScrollReveal().reveal("main p", {
    ...scrollRevealOption,
    delay:1000,
    origin:"up",
  });
  ScrollReveal().reveal("main button", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  ScrollReveal().reveal(".image .phone", {
    ...scrollRevealOption,
    interval: 500,
    origin:"right",
  });
  ScrollReveal().reveal(".image .laptop", {
    ...scrollRevealOption,
    interval: 600,
    origin:"bottom",
  });
  
  ScrollReveal().reveal(".works-text", {
    ...scrollRevealOption,
    origin: "bottom",
  });
  ScrollReveal().reveal(".card-box", {
    ...scrollRevealOption,
    delay:500,
    origin: "bottom",
  });
  ScrollReveal().reveal(".about-image", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".about ", {
    ...scrollRevealOption,
    origin: "bottom",
  });
  ScrollReveal().reveal(".aboutus-text .heading", {
    ...scrollRevealOption,
    origin: "bottom",
    interval:500,
  });
  ScrollReveal().reveal(".about-text ", {
    ...scrollRevealOption,
    delay:500,
    origin: "bottom",
  });
  ScrollReveal().reveal(".services-sol ", {
    ...scrollRevealOption,
    origin: "bottom",
  });
  ScrollReveal().reveal(".projects-details ", {
    ...scrollRevealOption,
    origin: "right",
  });
  
  ScrollReveal().reveal(".wrapper", {
    duration: 1000,
    interval: 500,
    delay: 500,
    origin:"bottom",
  });
  ScrollReveal().reveal(".client-details ", {
    ...scrollRevealOption,
    origin: "bottom",
  });
  ScrollReveal().reveal(".pricing", {
    ...scrollRevealOption,
    origin: "right",
  });
  
  const swiper = new swiper(".swiper", {
    loop: true,
  });