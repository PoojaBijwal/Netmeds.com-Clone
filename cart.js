

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