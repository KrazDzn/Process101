function openNav() {
    document.getElementById("mobile__menu").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mobile__menu").style.width = "0";
  }
  


const slides= document.querySelector(".slider").children;
const prev= document.querySelector(".prev");
const next= document.querySelector(".next");
let index=0;

prev.addEventListener("click", function() {
  prevSlide()
})

next.addEventListener("click", function()
{prevSlide()}
)

