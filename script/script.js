window.addEventListener("scroll", function(){
    let heater = document.getElementById('header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})