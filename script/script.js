const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.navbar');


/* Open the menu */ 
menuButton.onclick = function(e){
 
    if(menu.classList.contains('active')){
      menu.classList.remove('active');
    }
    else{
      menu.classList.add('active');
    }
    
}

/* Open the menu with keyboard */
menuButton.addEventListener('keypress', function(){
    menu.classList.toggle('active');
})

/* Open the menu dropdown elements */
document.querySelectorAll('.has-dropdown').forEach(item =>
  { 
      item.addEventListener('click', event => {
          item.classList.toggle('visible');
      })
      item.addEventListener('keypress', event =>{
        item.classList.toggle('visible');
      })
  })

function isClickOutside(e){
    if(!e.target.closest('.navbar')){
        menu.classList.toggle('active')
    }
}
document.addEventListener('click', isClickOutside);

/* function menuDropdown(event){
  console.log(event.target);
  if(!event.target.closest('.navbar')){
    menu.classList.remove('active');
  }
} */

/* document.addEventListener('click', menuDropdown, false); */
/* menuButton.addEventListener('click', function(e){
    if(!menu.classList.contains('active')){
      menu.classList.add('active');
    }  
    else{
      menu.classList.remove('active');
    }
}) */
/* window.onclick = function(e){
  if(!menu.classList.contains('active')){
    menu.classList.add('active');
  }  
  else{
    menu.classList.remove('active');
  }

} */
/* function closeMenu(e){
  let isClickInside = e.target;
  console.log(e.target);
    if(!isClickInside && menu.classList.contains('active')){
      menu.classList.remove('active');
     
    }
}

document.addEventListener('click', closeMenu, false); */
/*const dropbtns = document.querySelectorAll('.drop-btn');

for (var i = 0; i < menuItems.length; i++){
    if(menuItems[i].textContent.toLowerCase() == document.title.split('|')[1].toLowerCase()){
        document.menuItems[i].className = 'active';
    }
    /* console.log(menuItems[i].textContent.toLowerCase()); 
    console.log(document.title.split('|')[1].toLowerCase());
} */
/* const dropbtns = document.querySelector('button');

for(var i = 0; i < dropbtns.length; i++){
    if(dropbtns[i].textContent.toLowerCase() == document.title.split('|')[1].toLowerCase()){
        document.dropbtns[i].className = 'active';
    }
    console.log(document.title.split('|')[1].toLowerCase());
    /* Prints the menu item in lowercase
    console.log(dropbtns[i].textContent.toLowerCase());

    /* Prints the url content before the .html
    console.log(document.URL.split('/')[3].split('.')[0]);
} */
/* const dropbtns = document.querySelectorAll('.drop-btn');

for(var i = 0; i < dropbtns.length; i++){
  if(dropbtns[i].textContent.toLowerCase() == document.title.split('|')[1].toLowerCase()){
    document.dropbtns[i].classList.add('active');
}
    console.log(dropbtns[i].textContent.toLowerCase());
    console.log(document.title.split('|')[1].toLowerCase());
} */
/* const links = document.querySelectorAll('.menu-item');

for (var i = 0; i < links.length; i++){
  if (document.links[i].textContent == document.URL.split('/')[3].split('.')[0]) {
    document.links[i].className = 'active';
    
  }
  console.log(document.links[i].textContent);
  console.log(document.URL.split('/')[3].split('.')[0]);
} */

/* if(document.location.href.indexOf(document.links[i].href)>=0){ */
/* const parentDOM = document.getElementById('menu');

var menuItems = parentDOM.getElementsByClassName('has-dropdown')[0]; */

/* document.querySelectorAll('.navbar a').forEach(item =>
{ 
    item.addEventListener('click', event => {
        item.classList.toggle('active');
        console.log(item);
    })
}) */

/* const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".navbar"); */

/* Toggle mobile menu */
/* function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>";
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class='fa fa-times'></i>";
    }
} */
 
/* Event Listener */
/* toggle.addEventListener("click", toggleMenu, false); */

/* const items = document.querySelectorAll(".item"); */
 
/* Activate dropdown */
/* function toggleItem()  {
  if (this.classList.contains("dropdown-active")) {
    this.classList.remove("dropdown-active");
  } else if (menu.querySelector(".dropdown-active")) {
    menu.querySelector(".dropdown-active").classList.remove("dropdown-active");
    this.classList.add("dropdown-active");
  } else {
    this.classList.add("dropdown-active");
  }
} */ 
 
/* Event Listeners */
/* for (let item of items) {
    if (item.querySelector(".dropdown")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }   
} */
/* Close dropdown From Anywhere */
/* function closedropdown(e) {
    let isClickInside = menu.contains(e.target);
   
    if (!isClickInside && menu.querySelector(".dropdown-active")) {
      menu.querySelector(".dropdown-active").classList.remove("dropdown-active");
    }
  }
    */
  /* Event listener */
 /*  document.addEventListener("click", closedropdown, false); */
/* const dropElements = document.querySelector('.navbar');*/
/* const dropdownContent = document.querySelectorAll('.dropdown'); */

/* Shows/hides the dropdown of clicked menu button */
/* function showdropdown(a){    
    a.getElementsByClassName('dropdown-content').classList.toggle('hidden');  
} */

/* Closes the active menu when pressing escape */
/* dropdownContent.forEach(function(event){
    event.addEventListener('keypress', function(e){
        if(e.keyCode === 27){
            event.classList.toggle('visible');  
        }
    })
}) */
/* var links = document.querySelector('navbar [href="'+document.URL+'"]');

for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href == document.URL) {
        document.links[i].className = 'active';
    }
} */



