const menuBar = document.querySelector('.menu-bar');
const navLink = document.querySelector('.nav_link');
const backMenu = document.querySelector('.back-menu');

menuBar.addEventListener('click', function(){
    if(navLink > menuBar){
        navLink.style.display = "flex";
    }
    else{
        navLink.style.display = "block";
    }
});
backMenu.addEventListener('click', function(){
    if(navLink > backMenu){
        navLink.style.display = "none";
    }
    else{
        navLink.style.display = "block";
    }
})

//  onloading
var preloader = document.querySelector(".loader");
function myFunction(){
    preloader.style.display = 'none';
}



