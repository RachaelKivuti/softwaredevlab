let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar')

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times'); 
    searchBar.classList.remove('active');
    menu.classList.remove('fa-time');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

//menu bar
menu.addEventListener('click', () =>{
   menu.classList.toggle('fa-time');
   navbar.classList.toggle('active');
})

//search button toggle to x
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
 });

 //form button
 formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
 }); 

//form close
 formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
 }); 