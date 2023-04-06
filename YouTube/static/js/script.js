const menu =document.querySelector('#menu')
const sidebar=document.querySelector('.sidebar');
const content=document.querySelector('.content');
menu.addEventListener('click',function(){
    sidebar.classList.toggle('show-sidebar')
    content.classList.toggle('show-content')
} )













