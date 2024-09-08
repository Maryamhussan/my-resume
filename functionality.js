let meu=document.querySelector("#mobile-menu");
let meulist=document.querySelector(".navbar__menu");

//display mobile menu

const meumob=()=>{
     meu?.classList.toggle("is-active")
     meulist?.classList.toggle("active")
}

meu?.addEventListener("click",meumob)