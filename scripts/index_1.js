// let New_arrival = ["https://www.netmeds.com/images/cms/aw_rbslider/slides/1660932220_Satthwa_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664124298_Cannasis_Wellness__mini_banner_for_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664124298_Cannasis_Wellness__mini_banner_for_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664565653_Goli-Soda_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1663220498_Sanosan_Mini_banner_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664538242_Philips_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664538322_Polymed_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664565723_Amazing-Earth_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664538185_The-Infused-Kettle_web.jpg"]

// let arr1_1=[];
// let arr2_2=[];
// let arr3_3=[];


// let Start;
// let End;

// function slider(){
  
//   Start = 0;

//    End=(New_arrival.length/3);

//     arr1_1=[];

//     for(let i=0;i<End;i++){
//         arr1_1.push(New_arrival[i]);
//     }
//     for(let i=3;i<(New_arrival.length/3)+1;i++){
//         arr2_2.push(New_arrival[i]);
//     }
//     for(let i=7;i<(New_arrival.length/3)+1;i++){
//         arr3_3.push(New_arrival[i]);
//     }
//     // for(let i=15;i<(data.length/4)+15;i++){
//     //     arr4.push(data[i]);
//     // }
//     console.log(arr1_1,arr2_2,arr3_3)
//     append(arr1_1,arr2_2,arr3_3)

//     setInterval(function goNxt(){

//     },3000)
// }
    
// slider()






// function Nxt(){
//   setInterval(function(){
//     let arr1_1=[]
//     Start+=1;
//     End+=1;
//     if(End > New_arrival.length){
//         End=(New_arrival.length/3);
//     }
//     if(Start > New_arrival.length - 3){
//         Start=0;
//     }
//     for(let i = Start; i < End; i++){
//         arr1_1.push(New_arrival[i]);
//     }
//     append(arr1_1)

//   },3000)
// }
    


// function Pre(){
//   setInterval(function(){
//     let arr1_1=[]
    
//     End-=1;
//     Start=End-2;
//     if(End<3){
//         End=New_arrival.length-1;
//         Start=(New_arrival.length-1)-2;
//     }
//     // if(start<5){
//     //     start=data.length-5;
//     // }
//     for(let i=End;i>=Start;i--){
//         arr1_1.push(New_arrival[i]);
//     }
//     append(arr1_1)


//   },3000)
// }
    
// // document.getElementById("left_btn").addEventListener("click",goback);
// // document.getElementById("right_btn").addEventListener("click",goNxt);

// function append(New_arrival){
//     let container=document.getElementById("Slider_4");
//     container.innerHTML=null;

//     New_arrival.forEach(function(el){
//         let div=document.createElement("div");
//         div.setAttribute("class","pBox");
//         let img=document.createElement("img");
//         img.src=el;
        
//         div.append(img);
//         container.append(div)
//     });

// }
