const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.navbar');

document.onclick = function(event){
  if(!event.target.closest(".site-header")){
    menu.classList.remove('active');
  }
  if(event.target.classList.contains("fa-bars")){
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

