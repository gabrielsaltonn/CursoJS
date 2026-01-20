function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById(`txtano`)
    var res = document.getElementById(`res`)

    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert(`Verifique os dados e tente novamente.`)
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - fAno.value
        var gen = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)

        if (fsex[0].checked) {
            gen = `Homem`
            if (idade >= 0 && idade < 12) {
                // crinça
                img.setAttribute(`src`, `menino.png`)
            } else if (idade < 21) {
                // jovem
                img.setAttribute(`src`, `jovem.png`)
            } else if (idade < 60) {
                // adulto
                img.setAttribute(`src`, `homem.png`)
            } else {
                // idoso
                img.setAttribute(`src`, `idoso.png`)
            }
        } else if (fsex[1].checked) {
            gen = `Mulher`
            if (idade >=0 && idade < 12) {
                //criança
                img.setAttribute(`src`, `menina.png`)
            } else if (idade < 21){
                // jovem
                img.setAttribute(`src`, `jovem1.png`)
            } else if (idade < 60) {
                // adulto
                img.setAttribute(`src`, `mulher.png`)
            } else {
                // idoso
                img.setAttribute(`src`, `idosa.png`)
            }
        } else {
            window.alert(`Preencha dos dados corretamente!`)
        }
        res.style.textAlign = `center`
        res.innerHTML = `Detectamos: ${gen} de ${idade} anos.`
        res.appendChild(img)
    }
}