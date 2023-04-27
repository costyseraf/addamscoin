// dropdown
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')
toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
// skip
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.remove('show');
        }else{
            entry.target.classList.add('show');
        }
    });
});
let hiddenElements = document.querySelectorAll('.marcodue');
hiddenElements.forEach((el) => observer.observe(el));
// scrollspy
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header li a');
let skip = document.querySelector('.marcodue');
window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header li a[href*=' + id + ']').classList.add('active');
            });
        };
        if(top > 100){
            skip.classList.add("active");
        } else{
            skip.classList.remove("active");
        }
    });
};
//for iPhone
const ua = detect.parse(navigator.userAgent)
const img = document.querySelector('#adms')
const body = document.querySelector('body')
const about = document.querySelector('#about')
if(ua.device !== null){
    if(ua.device.family === 'iPhone'){
        img.classList.add('iPhone')
        body.classList.add('no-img')
        about.classList.add('margin')
    }
}
