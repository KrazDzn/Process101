function openNav() {
    document.getElementById("mobile__menu").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mobile__menu").style.width = "0";
  }
  


const slides= document.querySelector(".slider").children;
const prev= document.querySelector(".prev");
const next= document.querySelector(".next");
const circleIndicator=document.querySelector(".indicator");
let index=0;

prev.addEventListener("click", function() {
  prevSlide()
})

next.addEventListener("click", function()
{ nextSlide()}
)

function circleIndicator(){
  for(let i=0; i<clides.length; i++){
    const div=document.createElement("div");
    div.innerHTML=i+1
  }
}

function prevSlide (){
  if(index==0){
    index-slides.length-1;
  }
  else{
    index--;
  }
  changeSlide();
}

function nextSlide(){
  if(index==slides.length-1){
    index=0;
  }
  else{
    index++;
  }
  changeSlide();
}

function changeSlide(){
  for(let i=0; i<slides.itemlength;i++){
    slides[i].classList.remove("active");
  }
  slides [index].classList.add("active");
}