const menu = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const subMenu = document.querySelectorAll('.has-dropdown');

/* Open the dropdown elements with click or keyboard */
document.querySelectorAll('.has-dropdown').forEach(item =>
{ 
    item.addEventListener('click', event => {
        item.classList.toggle('visible');
    })
    item.addEventListener('keypress', event =>{
      item.classList.toggle('visible');
    })
})

/* Close menu and dropdowns when clicking outside */
document.onclick = function(event){
  /* let element = event.target.closest('.menu-btn');
  if(!element && !menu.classList.contains('active')){
    menu.classList.remove('active');
  } */
  let dropElement = event.target.closest('.item');
  if(!event.target){
    subMenu.classList.remove('visible');
  }
  if(!dropElement){
    for(i = 0; i < subMenu.length; i++){
      subMenu[i].classList.remove('visible');
    }  
  }
}
// Ensure only one dropdown open 
document.addEventListener('click', function (event) {

	for (var i = 0; i < subMenu.length; i++) {

		// If the item is the one clicked, skip it
		if (subMenu[i] === event.target) continue;

		subMenu[i].classList.remove('visible');
	}
})
//Toggle dropdown menu
menuBtn.onclick = function(){
  menu.classList.toggle('active');
}