const links = document.querySelectorAll('.menu a [href="'+document.URL+'"]');

for (var i = 0; i < document.links.length; i++){
    if(document.links[i].href == document.URL){
        document.links[i].className = 'active';
    }
}

const dropbtns = document.querySelectorAll('button');

for(var i = 0; i < dropbtns.length; i++){
    if(dropbtns[i].textContent.toLowerCase() == document.title.split('|')[1].toLowerCase()){
        document.dropbtns[i].className = 'active';
    }
    console.log(document.title.split('|')[1].toLocaleLowerCase());
    /* Prints the menu item in lowercase*/
    console.log(dropbtns[i].textContent.toLowerCase());

    /* Prints the url content before the .html
    console.log(document.URL.split('/')[3].split('.')[0]);*/
}
/* const links = document.querySelector('navbar a');
const linkUrl = document.URL.split('/');
for (var i = 0; i < linkUrl.length; i++){
   /*  if(document.links[i].textContent === document.URL){
        linkUrl[i].className = 'active';
        console.log(linkUrl[i]);
  /*   } 
} */
/* const parentDOM = document.getElementById('menu');

var menuItems = parentDOM.getElementsByClassName('has-dropdown')[0]; */

/* document.querySelectorAll('.menu a').forEach(item =>
{ 
    console.log(item);
    item.addEventListener('click', event => {
        item.classList.toggle('active');
        console.log(item);
    })
}) */

document.querySelectorAll('.has-dropdown').forEach(item =>
{ 
    item.addEventListener('click', event => {
        item.classList.toggle('visible');
       /*  console.log(item); */
    })
})
