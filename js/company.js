
const progressCircle = document.querySelector('.progressCircle')
const circle1 = document.querySelector('.circle1')
const circle2 = document.querySelector('.circle2')
const loadingText1 = document.querySelector('.loadingText1')
const loadingText2 = document.querySelector('.loadingText2')

let load = 0

window.addEventListener('scroll', checkboxes)
function checkboxes(){
    const triggerbottom = window.innerHeight / 5 * 4

    const boxtop = progressCircle.getBoundingClientRect().top
    if (boxtop < triggerbottom) {
        circle1.classList.add('show')
        circle2.classList.add('show')
    }

    else {
        circle1.classList.remove('show')
        circle2.classList.remove('show')
    }
}
 
let interval1 = setInterval(loading1, 40)
let interval2 = setInterval(loading2, 20)

function loading1() {
    load++

    if(load > 69){
        clearInterval(interval1)
    }

    loadingText1.innerText = `${load}%`
}
 

function loading2() {
    load++

    if(load > 94){
        clearInterval(interval2)
    }

    loadingText2.innerText = `${load}%`
}

const dd = document.querySelectorAll('.dd')

window.addEventListener('scroll', scroll)

function scroll(){
    const triggerbottom = window.innerHeight / 5 * 4

    dd.forEach(dd => {
        const boxtop = dd.getBoundingClientRect().top

        if(boxtop < triggerbottom){
            dd.classList.add('show')
        }
        else{
            dd.classList.remove('show')
        }
    })
}

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
