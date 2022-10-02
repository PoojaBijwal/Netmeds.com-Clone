

function shiva_proceed(event){
 let login = JSON.parse(localStorage.getItem("login_data"));

 if(login===null){
  window.location.href="./signup.html";
 }else if(login.email===undefined){
  window.location.href="./login.html";
 }else{
  window.location.href="./payment.html";
 }
 };


let cart=document.querySelector("#shiva_most_selling button");
cart.addEventListener("click",function(el){
  
});









let data_arr = ["https://www.netmeds.com/images/cms/aw_rbslider/slides/1664256264_Web_Homecc.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1661965889_Web_Homekareee.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1661966356_Web_Home.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1654018133_Web_Home_Kareena.jpg"]


function SlideShow(){
 
    let slidshow = document.querySelector(".mySlides");


     slidshow.innerHTML = null;

    let i = 0;
      
    let img = document.createElement("img");

    img.src = data_arr[0];

    slidshow.append(img)

    i++;

   let id = setInterval(function(){

    if(i===4)
    {
        i = 0;
    }
    // console.log(i);

    img.src = data_arr[i];
    // console.log('data_arr:', data_arr)

    slidshow.append(img);
    i++;

    
    },3000)
}

SlideShow(data_arr)

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
};

