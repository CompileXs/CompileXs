
const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-Link');
const registerlink = document.querySelector('.register-Link');
const btnpopup = document.querySelector('.btnLogin-popup');
const iconclose = document.querySelector('.icon-close');



registerlink.addEventListener('click',()=> {
   wrapper.classList.add('active');
})

loginlink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
 })

 btnpopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
 })


 iconclose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
 })


 

