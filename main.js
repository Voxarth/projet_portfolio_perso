function menuBurger(){

 var menu = document.getElementById("nav");

 if (menu.classList.contains("hidden")){
    menu.classList.add("visible");
    menu.classList.remove("hidden");
 }else if(menu.classList.contains("visible"))  {
     menu.classList.remove("visible");
     menu.classList.add("hidden");

 }

}


document.addEventListener("scroll", pinedNavbar);

function pinedNavbar(){

    var navbar = document.getElementById("nav");

    if (navbar.classList.contains("fixed")){
        navbar.classList.add()
    }
}


