const Open = document.querySelector('.open')
const Close = document.querySelector('.close')
const navlinks = document.querySelector('.navlinks')
const home = document.querySelector('.home')
const services = document.querySelector('.services')
const company = document.querySelector('.company')
const consultancy = document.querySelector('.consultancy')
const industries = document.querySelector('.industries')
const contact = document.querySelector('.contact')

Open.addEventListener('click', () => {
    Open.classList.add('show')
    Close.classList.add('show')
    navlinks.classList.add('show')
    home.classList.add('show')
    services.classList.add('show')
    company.classList.add('show')
    consultancy.classList.add('show')
    industries.classList.add('show')
    contact.classList.add('show')
})

Close.addEventListener('click', () => {
    Open.classList.remove('show')
    Close.classList.remove('show')
    navlinks.classList.remove('show')
    home.classList.remove('show')
    services.classList.remove('show')
    company.classList.remove('show')
    industries.classList.remove('show')
    consultancy.classList.remove('show')
    contact.classList.remove('show')
})


const developmentDiv = document.querySelectorAll('.developmentDiv')
window.addEventListener('scroll', checkboxes)
function checkboxes(){
    const triggerbottom = window.innerHeight / 5 * 4

    developmentDiv.forEach(developmentDiv => {
        const boxtop = developmentDiv.getBoundingClientRect().top

        if(boxtop < triggerbottom){
            developmentDiv.classList.add('show')
        }
        else{
            developmentDiv.classList.remove('show')
        }
    })
}



