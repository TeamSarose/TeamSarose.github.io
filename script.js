const menu = document.querySelector('.menu')      // Toggle Show Menu
const menuList = document.querySelector('nav ul')

menu.addEventListener('click',()=>{
    menuList.classList.toggle('showMenu')
})

var typed = new Typed(".skills", {       // Type script for Skill Text
    strings: ["Software Engineer","Undergraduate","Full-Stake Developer","Tech Enthusiast"],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop : true
});
