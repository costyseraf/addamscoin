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



// Coin swap
// let = ;
var startingX , movingX;

function touchstart1(evt){
    startingX = evt.touches[0].clientX ;
}
function touchmove1(evt){
    movingX = evt.touches[0].clientX ;
}
function touchend1(){
    if(startingX+100 < movingX){
        open('https://pancakeswap.finance/swap?outputCurrency=0x5e2211970f80B6bFB9Ba3A71F24766bFBc872fAf&inputCurrency=BNB');
    }
}

function touchstart(evt){
    startingX = evt.touches[0].clientX ;
}
function touchmove(evt){
    movingX = evt.touches[0].clientX ;
}
function touchend(){
    if(startingX+100 < movingX){
        open('https://pancakeswap.finance/swap?outputCurrency=0x5e2211970f80B6bFB9Ba3A71F24766bFBc872fAf&inputCurrency=BNB');
    } else if(startingX-100 > movingX){
        open("https://www.geckoterminal.com/bsc/pools/0xf9fdc3be08ebe0a2b55bc768e29ea2ec9f7c8a56?utm_source=coingecko&utm_medium=referral&utm_campaign=searchresults");
    }
}


// var el, avail;

// function dragStart(evt){
//     el = evt.target;
//     if(el.getAttribute('draggable') == 'true'){
//         avail = 'available';
//     } else{
//         avail = '';
//     }
// }
// function drag(evt){
//     if(avail == 'available'){
//         el.style.position = "absolute";
//         el.style.left = evt.touches[0].clientX-el.clientWidth/2;
//         } else{

//         }
//     evt.preventDefault();
// }