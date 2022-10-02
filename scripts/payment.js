
function payment(e){
 e.preventDefault();
 // console.log("payment aaja")
 let cardnum=document.getElementById("cardnum").value;
 let date=document.getElementById("date").value;
 let cvv=document.getElementById("cvv").value;
 let name=document.getElementById("name").value;
 let obj={
  cardnum:cardnum,
      date:date,
      cvv:cvv,
      name:name,
 }
if(obj.cardnum.length!==12){
 alert("Envalid Card Number");
  
 }
 else if(obj.date===""){
 alert("Enter Card Expiry date")
 }
 else if(obj.cvv.length!==3){
  alert("Envalid CVV");
 }
 else if(obj.name===""){
  alert("Enter Correct Name")
 }else{
 localStorage.setItem("Payment_details",obj)
 console.log(obj);
window.location.href="otp2.html";
 }
}