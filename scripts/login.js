// import footer from "./components/footer.js"
//    import navbar from "./navbar.js"
  // import { footer } from "./JS/footer.js";
  // let container = document.getElementById("footer");
  // container.innerHTML = footer();
  // let cont = document.getElementById("navbar")
  // cont.innerHTML = navbar()
  // console.log(navbar())
  // // console.log(container);


let inp = document.querySelector("#number");
console.log(inp);

let btn = document.querySelector(".otp_btn");
console.log(btn);
let a = Math.round(Math.random() * 10000 + 123456);
btn.addEventListener("click", () => {
  if (inp.value) {
    localStorage.setItem("otp", a);
    alert("Your OTP is " + a + ".");
    window.location.assign("index.html");
  }
});
console.log(footer())
console.log(navbar())
