const burgerDeFacto = document.getElementsByClassName('burger')[1];
burgerDeFacto.addEventListener('click', () => {
    burgerDeFacto.classList.toggle('active')
    document.getElementsByClassName('ul-header')[0].classList.toggle('collapsible')
    document.getElementsByTagName('input')[0].classList.toggle('collapsible')
})