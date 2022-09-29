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


let data_arr_2 = ["https://www.netmeds.com/images/cms/aw_rbslider/slides/1663139989_436x224_copy.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1660801057_Wellness_Mini.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1660801237_Ayurverda_Mini.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1661963801_Web_Mini_Bannerffewr.jpg"]

// function SlideShow_2(){
 
//     let slidshow = document.querySelector("#Slider_2");


//      slidshow.innerHTML = null;

    

//     let div1 = document.createElement("div")
//     let img1 = document.createElement("img");

//     let div2 = document.createElement("div")
//     let img2 = document.createElement("img");

//     let div3 = document.createElement("div")
//     let img3 = document.createElement("img");

//     let div4 = document.createElement("div")
//     let img4 = document.createElement("img");
     
    
//      for(let i=0;i<3;i++)
//      {
//         div1.append(img1)
//         img1.src = data_arr_2[i]; 
//     }


// //     let i = 0;
      
// //      i++;
    
// //         div1.append(img1)
// //         img1.src = data_arr_2[0];

// //         div2.append(img2)
// //         img2.src = data_arr_2[1];

// //         div3.append(img3)
// //         img3.src = data_arr_2[2];

// //         slidshow.append(div1,div2,div3)


// //    let id = setInterval(function(){

// //     if(i==3)
// //     {
// //          i=0;
// //     }
     
    
       
// //     div2.append(img2)
// //     img2.src = data_arr_2[1];

// //     div3.append(img3)
// //     img3.src = data_arr_2[2];

// //     div4.append(img4)
// //     img4.src = data_arr_2[3];

// //     slidshow.append(div2,div3,div4)

// //     console.log(i)
    
     
// //     i++;

    
// //     },1000)
// // }

// SlideShow_2(data_arr_2)