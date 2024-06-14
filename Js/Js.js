// Show Menu

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu');
const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// change navigatin-bar 
const fixed = document.getElementsByClassName('nav_link');
fixed[0].classList.add('active-link');
fixed[0].style.color = '#DA2535';
const navbar = document.getElementsByClassName('nav_item');
Array.from(navbar).forEach(e =>{
    e.addEventListener('click',()=>{
        const baraction = e.querySelector('.nav_link');
        
        const barremove = document.querySelectorAll('.nav_link');
        Array.from(barremove).forEach(p=>{
            p.classList.remove('active-link');
            p.style.color = '#161212';
        });
        baraction.classList.add('active-link');
        baraction.style.color = '#DA2535';
       
    });
});


// change baackground header
function scrollHeader(){
    const nav = document.getElementById('header');
    
    if(this.scrollY >= 260){
         nav.classList.add('scroll-header');   
    }
    else{
            nav.classList.remove('scroll-header');
            
            
        } 
}

window.addEventListener('scroll',scrollHeader)
function Navfixed(){
    const nav = document.getElementById('nav')
    if(this.scrollY >= 60) nav.classList.add('nav1');
    else nav.classList.remove('nav1');
}
window.addEventListener('scroll',Navfixed)
// Show Scroll Top
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >=560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollTop)


