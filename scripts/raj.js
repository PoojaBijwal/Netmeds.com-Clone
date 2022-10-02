import{navbar} from "../components/navbar.js";
import{footer} from "../components/footer.js";

let hdr = document.querySelector("#navbar");
hdr.innerHTML=navbar();
let ftr=document.querySelector("#footer");
ftr.innerHTML=footer();