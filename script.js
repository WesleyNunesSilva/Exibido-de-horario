let now = new Date
let time = now.getHours()
let image = document.getElementById('picture')
let body = document.querySelector('body')
let description = document.querySelector('h4')

function carregar() {
if(time >= 12 && time < 18){
    body.style.background = 'rgb(236, 174, 81)'
    image.setAttribute('src', "./files/entardecer.jpg")
    image.display
    
} else if(time >= 18){
    body.style.background = 'rgb(54, 53, 53)'
    image.setAttribute('src', "./files/anoitecer.jpg")
}
description.innerHTML = `Agora são ${time} horas`
}