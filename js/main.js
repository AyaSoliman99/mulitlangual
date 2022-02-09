let closeMenu=document.getElementById("close-menu");
let menu=document.querySelector(".navbar-list");

menu.style.top="100%";

closeMenu.addEventListener("click",function(){
      if(menu.style.top=="100%" ){
        menu.style.top="20%";
      }else{
        menu.style.top="100%";
      }
});


// let langMenuSpans=document.querySelectorAll("#lang-menu li a span");
//  console.log(langMenuSpans[0].textContent);