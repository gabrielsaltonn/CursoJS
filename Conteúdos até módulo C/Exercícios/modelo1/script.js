function carregar() {
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`img`)
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}`

    if (hora >= 0 && hora < 12) {
        img.src = "manha.png"
        document.body.style.backgroundColor = "#F2C94C"
        document.querySelector("section").style.backgroundColor = "#e9c969ff"
    } else if (hora >= 12 && hora < 19) {
        img.src = "tarde.png"
        document.body.style.backgroundColor = "#e28246ff"
        document.querySelector("section").style.backgroundColor = "#fcd5bd9a"
    } else {
        img.src = "noite.png"
        document.body.style.backgroundColor = "#171b31ff"
        document.querySelector("section").style.backgroundColor = "#52597eff"
    }
}