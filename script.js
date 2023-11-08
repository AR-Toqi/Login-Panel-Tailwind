let mobileMenu= document.getElementById("mobile_menu");
let mainMenu= document.getElementById("main_menu");

mobileMenu.addEventListener("click", ()=>{
    mainMenu.classList.toggle("hidden");
})