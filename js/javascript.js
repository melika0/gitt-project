let timeframem = "weekly";
let container = document.querySelector('.container');
let 


const menu = document.querySelectorAll('.menu-list');
console.log(menu);

menu.forEach(element =>{
    element.addEventListener('click' ,menuOnClick);

});


//function

function menuOnClick(event){
   //console.log('click');
   menu.forEach(element =>{
       element.classList.remove('menu-active');
   });
       event.target.classList.add('menu-active');

       timeframe =event.target.innerText.toLowerCase();

    }
