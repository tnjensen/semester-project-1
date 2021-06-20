const menuButton = document.querySelector('.fa-bars');
const menu = document.querySelector('.navbar');
const subMenu = document.querySelectorAll('.item');
const dropDown = document.querySelectorAll('.drop-btn');

/* Open the menu with keyboard */ 
menuButton.addEventListener('keypress', function(){
    menu.classList.toggle('active');
})
document.onclick = function(event){
  let element = event.target.closest('.navbar');
  if(!element){
    menu.classList.remove('active');
  }
  let dropElement = event.target.closest('.item');
  if(!dropElement){
    for(i = 0; i < subMenu.length; i++){
      subMenu[i].classList.remove('visible');
    }  
  }
  if(event.target.classList.contains("fa-bars")){
    menu.classList.add('active');
  }
}
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

