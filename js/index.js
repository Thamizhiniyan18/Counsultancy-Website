// slidebar 

const slidebar = document.querySelector('.slidebar')
const slide = document.querySelectorAll('.slide')
const prev = document.querySelector('.previous')
const next = document.querySelector('.next')
const round = document.querySelectorAll('.round')

// Progress Buttons Properties

let currentActive = 0 

/*
next.addEventListener('click', () => {
    currentActive++
    if(currentActive > slide.length - 1)
    {
        currentActive = 0
    }

    setBgToBody()
    setActiveSlide()
    update()
    removeactiveclasses() 
})

prev.addEventListener('click', () => {
    currentActive--
    if(currentActive < 0)
    {
        currentActive = slide.length - 1
    }
    
    setBgToBody()
    setActiveSlide()
    update()
    removeactiveclasses() 
})

*/

function update() {
    round.forEach((round, idx) => {
        if(idx <= currentActive)
        {
            round.classList.add('active');
        }
        else
        {
            round.classList.remove('active');
        }
    })
}

function removeactiveclasses() { 
    round.forEach((round ,idx) => {
        if(idx !== currentActive)
        {
            round.classList.remove('active');
        }
    })
}

setBgToBody()

function setBgToBody() {
  slidebar.style.backgroundImage = slide[currentActive].style.backgroundImage
}

function setActiveSlide() {
  slide.forEach((slide) => slide.classList.remove('show'))

  slide[currentActive].classList.add('show')
}

setInterval(function(){
    currentActive++;
    if(currentActive > slide.length - 1)
    {
        currentActive = 0;
    }
    
    setBgToBody()
    setActiveSlide()
    update()
    removeactiveclasses() 
}
, 5000);

const developmentdiv = document.querySelectorAll('.developmentdiv')
window.addEventListener('scroll', checkboxes)
function checkboxes(){
    const triggerbottom = window.innerHeight / 5 * 4

    developmentdiv.forEach(developmentdiv => {
        const boxtop = developmentdiv.getBoundingClientRect().top

        if(boxtop < triggerbottom){
            developmentdiv.classList.add('show')
        }
        else{
            developmentdiv.classList.remove('show')
        }
    })
}
