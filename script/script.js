const dropBtns = document.getElementsByClassName('drop-btn');
const dropdownContent = document.querySelectorAll('.dropdown-content');

/* Shows/hides the dropdown of clicked menu button */
function showSubMenu(a){    
    a.getElementsByClassName('dropdown-content')[0].classList.toggle('hidden');  
}

/* Closes the active menu when pressing escape */
dropdownContent.forEach(function(event){
    event.addEventListener('keyup', function(e){
        if(e.keyCode === 27){
            event.classList.toggle('hidden');  
        }
    })
})


