function contador(){
    var inicio = document.getElementById(`txtin`)
    var final = document.getElementById(`txtfin`)
    var passo = document.getElementById(`passo`)
    var res = document.getElementById(`res`)

    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Por favor preencha todos os campos!`
        res.style.color = `red`
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert(`Passo inválido. Consirando como passo = 1...`)
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c}, `
            }
        } else {
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c}, `
            }
        }
        res.innerHTML += `Fim!`
    }
}