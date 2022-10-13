const menu = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const dropItem = document.querySelectorAll('.has-dropdown');
const subMenu = document.querySelectorAll('.dropdown');
const currentDropItem = document.querySelector('#dropdown');
const year = document.getElementById('year');

let date = new Date().getFullYear();
if( date > 2021){
  year.innerHTML = `- `+ date;
}else{
  year.innerHTML = date;
}
 

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
/* Open current dropdown elements  */
/* document.querySelectorAll('#dropdown').forEach(item =>
  { 
      item.addEventListener('click', event => {
          item.classList.add('visible');
      })
  }) */
// Ensure only one dropdown open 
document.addEventListener('click', function (event) {

	for (var i = 0; i < dropItem.length; i++) {

		// If the item is the one clicked, skip it
		if (dropItem[i] === event.target) continue;

		dropItem[i].classList.remove('visible');
	}
})
/* Close menu when clicking outside */
/* window.addEventListener('mouseup', function(event){
  if(event.target !== menu && event.target.parentNode !== menu && event.target.parentNode.parentNode !== menu){
    menu.classList.remove('active');
  }
}) */
/* Open and close menu */
menuBtn.onclick = function(event){
  if(menu.classList.contains('active')){
    menu.classList.remove('active');
  }else{
    menu.classList.add('active');
  }
}
window.addEventListener('mouseup', function(element){
   if(!element.target.closest('.menu-btn') && element.target !== menu && element.target.parentNode !== menu && element.target.parentNode.parentNode !== menu){
     menu.classList.remove('active');
   }
})

