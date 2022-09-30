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
    console.log(i);

    img.src = data_arr[i];
    console.log('data_arr:', data_arr)

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
}

let data_slider_2 = ["https://www.netmeds.com/images/cms/aw_rbslider/slides/1664560049_Dabur_Home.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664559741_Emami_Mini-banner-web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664111731_Sri_Sri_Tattva_Mini_banner_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664560087_Himalaya_Mini-banner-web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664560311_Kerala-Ayurveda_-wellness--main-banner-mobile-.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664560311_Kerala-Ayurveda_-wellness--main-banner-mobile-.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664560461_Baidyanath_Mini_banner_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664560825_Kapiva_Mobile_home.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1661967766_Accusure_Mini_banner_web.jpg"]

let arr1=[];
let arr2=[];
let arr3=[];

let start;
let end;
   
function slider(){
  
    start=0;
    end=(data_slider_2.length/3);
    arr1=[]
    for(let i=start;i<end;i++){
        arr1.push(data_slider_2[i]);
    }
    for(let i=3;i<(data_slider_2.length/3)+1;i++){
        arr2.push(data_slider_2[i]);
    }
    for(let i=7;i<(data_slider_2.length/3)+1;i++){
        arr3.push(data_slider_2[i]);
    }
    // for(let i=15;i<(data.length/4)+15;i++){
    //     arr4.push(data[i]);
    // }
    console.log(arr1,arr2,arr3)
    append(arr1,arr2,arr3)

    setInterval(function goNxt(){

    },3000)
}
    
slider()






function goNxt(){
  setInterval(function(){
    let arr1=[]
    start+=1;
    end+=1;
    if(end > data_slider_2.length){
        end=(data_slider_2.length/3);
    }
    if(start > data_slider_2.length - 3){
        start=0;
    }
    for(let i = start; i < end; i++){
        arr1.push(data_slider_2[i]);
    }
    append(arr1)

  },3000)
}
    


function goback(){
  setInterval(function(){
    let arr1=[]
    
    end-=1;
    start=end-2;
    if(end<3){
        end=data_slider_2.length-1;
        start=(data_slider_2.length-1)-2;
    }
    // if(start<5){
    //     start=data.length-5;
    // }
    for(let i=end;i>=start;i--){
        arr1.push(data_slider_2[i]);
    }
    append(arr1)


  },3000)
}
    
// document.getElementById("left_btn").addEventListener("click",goback);
// document.getElementById("right_btn").addEventListener("click",goNxt);

function append(data_slider_2){
    let container=document.getElementById("slider_3");
    container.innerHTML=null;

    data_slider_2.forEach(function(el){
        let div=document.createElement("div");
        div.setAttribute("class","pBox");
        let img=document.createElement("img");
        img.src=el;
        
        div.append(img);
        container.append(div)
    });

}
