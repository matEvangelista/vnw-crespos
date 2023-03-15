const burgerDeFacto = document.getElementsByClassName('burger')[1];
burgerDeFacto.addEventListener('click', () => {
    burgerDeFacto.classList.toggle('active')
    document.getElementsByClassName('links-header')[0].classList.toggle('collapsible')
})