const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".navbar");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>";
    } else {
        menu.classList.add("active");
         
       /*  // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class='fa fa-times'></i>"; */
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);

const items = document.querySelectorAll(".item");
 
/* Activate dropdown */
function toggleItem() {
  if (this.classList.contains("dropdown-active")) {
    this.classList.remove("dropdown-active");
  } else if (menu.querySelector(".dropdown-active")) {
    menu.querySelector(".dropdown-active").classList.remove("dropdown-active");
    this.classList.add("dropdown-active");
  } else {
    this.classList.add("dropdown-active");
  }
}
 
/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".dropdown")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }   
}
/* Close dropdown From Anywhere */
function closedropdown(e) {
    let isClickInside = menu.contains(e.target);
   
    if (!isClickInside && menu.querySelector(".dropdown-active")) {
      menu.querySelector(".dropdown-active").classList.remove("dropdown-active");
    }
  }
   
  /* Event listener */
  document.addEventListener("click", closedropdown, false);
/* const dropElements = document.querySelector('.navbar');
const dropdownContent = document.querySelectorAll('.dropdown-content');
 */
/* Shows/hides the dropdown of clicked menu button */
/* function showdropdown(a){    
    a.getElementsByClassName('dropdown-content').classList.toggle('hidden');  
} */

/* Closes the active menu when pressing escape */
/* dropdownContent.forEach(function(event){
    event.addEventListener('keyup', function(e){
        if(e.keyCode === 27){
            event.classList.toggle('hidden');  
        }
    })
}) */
/* var links = document.querySelector('navbar [href="'+document.URL+'"]');

for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href == document.URL) {
        document.links[i].className = 'active';
    }
} */



