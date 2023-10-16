// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cookieTry = document.querySelector("#cookieTry")

// Eventos
cookieTry.addEventListener('click', toggleScreen)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(event) {
    if(event.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

function handleResetClick() {
    toggleScreen()
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}