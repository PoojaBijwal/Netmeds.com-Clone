
// let arr =["https://www.netmeds.com/images/category/v1/916/cardiac_care_2.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1662576189_Maxirich__wellness_main_banner_web_w45.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664111525_Head_Shoulders_wellness_main_banner_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1663913184_Skin-Elements_Web_Home_title_1680X320.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1663177829_Dabur_Wellness.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1663178433_Zandu__wellness_main_banner_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1663178801_Baidyanath__wellness_main_banner_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664216995_Vogue_Wellness__wellness_main_banner_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664112341_Inlife__wellness_main_banner_web.jpg" ];

// function slide(){

//     let slider = document.getElementById("slider");

//     slider.innerHTML = null;

// let i = 0;


// let img = document.createElement("img");

//   img.src= arr[0];

// slider.append(img);
//  i=i+1

//  setInterval(function (){
//   if(i===9){
//     i = 0;
//   } 

//    img.src= arr[i];
//    i = i + 1;

//    slider.append(img);
// },2000);

// }
// slide();

function addToCart(obj){
  
    let arr;
  
    arr = localStorage.getItem("visited");
  
    if(arr == null){
        
        arr = [];
  
        arr.push(obj);
        
        alert("Item added to cart successfully");
        
    }else{
        
        arr = JSON.parse(localStorage.getItem("visited"));
        
        var flag = 0;
        
        for(let i=0; i<arr.length;i++){
            
            if(arr[i].name == obj.name){
                
                flag = 1;
                
                break;
                
            }
            
        }
        
        if(flag == 0){
            
            arr.push(obj);
            
            alert("Item already present in cart");
            
        }
        if(flag == 1){
            
            alert("Item added to cart successfully");
            
        }
    }
    
    localStorage.setItem("visited",JSON.stringify(arr));
  
    window.location.href="cart.html"
  
  }
  
  
  // ==============================================================================
  // let data_arr = ["https://www.netmeds.com/images/cms/aw_rbslider/slides/1664256264_Web_Homecc.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1661965889_Web_Homekareee.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1661966356_Web_Home.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1654018133_Web_Home_Kareena.jpg"]
  
  let data_arr =["https://www.netmeds.com/images/category/v1/916/cardiac_care_2.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1662576189_Maxirich__wellness_main_banner_web_w45.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664111525_Head_Shoulders_wellness_main_banner_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1663913184_Skin-Elements_Web_Home_title_1680X320.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1663177829_Dabur_Wellness.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1663178433_Zandu__wellness_main_banner_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1663178801_Baidyanath__wellness_main_banner_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664216995_Vogue_Wellness__wellness_main_banner_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664112341_Inlife__wellness_main_banner_web.jpg" ];
  //
  function SlideShow(){
   
      let slidshow = document.querySelector(".mySlides");
  
  
       slidshow.innerHTML = null;
  
      let i = 0;
        
      let img = document.createElement("img");
  
      img.src = data_arr[0];
  
      slidshow.append(img)
  
      i++;
  
     let id = setInterval(function(){
  
      if(i===8)
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
  
  // =======================================================================================
  let data_arr_2 = ["https://i.postimg.cc/R0TtJzHz/img1.png","https://i.postimg.cc/MZfytgk1/img2.png","https://i.postimg.cc/2yN30cvx/img3.png","https://i.postimg.cc/9fGfrPsR/img4.png","https://i.postimg.cc/FzC89qZy/img4.png","https://i.postimg.cc/J7YMCK0r/Simg1.png"]
  
  function SlideShow_2(){
   
      let slidshow = document.querySelector("#Slider_2");
  
  
       slidshow.innerHTML = null;
  
      
  
      let div1 = document.createElement("div")
      let img1 = document.createElement("img");
  
      let div2 = document.createElement("div")
      let img2 = document.createElement("img");
  
      let div3 = document.createElement("div")
      let img3 = document.createElement("img");
  
      let div4 = document.createElement("div")
      let img4 = document.createElement("img");
       
      let div5 = document.createElement("div")
      let img5 = document.createElement("img");
  
      let div6 = document.createElement("div")
      let img6 = document.createElement("img");
  
  
       for(let i=0;i<6;i++)
       {
          div1.append(img1)
          img1.src = data_arr_2[i]; 
      }
  
  
      let i = 0;
        
       i++;
      
          div1.append(img1)
          img1.src = data_arr_2[0];
  
          div2.append(img2)
          img2.src = data_arr_2[1];
  
          div3.append(img3)
          img3.src = data_arr_2[2];
  
          div4.append(img4)
          img4.src = data_arr_2[3];
  
          div5.append(img5)
          img5.src = data_arr_2[4];
  
          div6.append(img6)
          img6.src = data_arr_2[5];
  
          slidshow.append(div1,div2,div3,div4,div5,div6)
  
  
     let id = setInterval(function(){
  
      if(i==6)
      {
           i=0;
      }
       
      
         
      div2.append(img2)
      img2.src = data_arr_2[1];
  
      div3.append(img3)
      img3.src = data_arr_2[2];
  
      div4.append(img4)
      img4.src = data_arr_2[3];
  
      div5.append(img4)
      img5.src = data_arr_2[4];
  
      div6.append(img4)
      img6.src = data_arr_2[5];
  
  
      slidshow.append(div2,div3,div4,div5,div6)
  
      console.log(i)
      
       
      i++;
  
      
      },1000)
  }
  
  SlideShow_2(data_arr_2)