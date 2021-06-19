const menuButton = document.querySelector('.fa-bars');
const menu = document.querySelector('.navbar');

/* Open the menu with keyboard */ 
menuButton.addEventListener('keypress', function(){
    menu.classList.add('active');
})
document.onclick = function(event){
  let element = event.target.closest('.navbar');
  console.log(element);
  if(!element){
    menu.classList.remove('active');
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

