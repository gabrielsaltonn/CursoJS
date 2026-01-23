let num = window.document.getElementById(`fnum`)
let lista = window.document.getElementById(`flista`)
let res = window.document.getElementById(`res`)
let valores = []

// Funções para validação do número adicionado.

// Saber se é um número:
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Saber se o número está na lista:
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

// Botão de adicionar valores
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        // Adicionar valor dentro do vetor
        valores.push(Number(num.value))
        // Apresentar valores da lista no select
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ``
    } else {
        window.alert(`Valor inválido ou já adicionado na lista.`)
    }
    num.value = ``
    num.focus()
}

// Botão de finalização
function finalizar() {
    if (valores.length == 0) {
        window.alert(`Adicione valores para finalizar`)
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            media = soma / valores.length
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        res.innerHTML = ``        
        res.innerHTML += `<p>Ao todo, temos ${total} números adicionados!</p>`
        res.innerHTML += `<p>O maior número fornecido é ${maior}. </p>`
        res.innerHTML += `<p>O menor número fornecido é ${menor}. </p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}. </p>`
        res.innerHTML += `<p>A média dos valores é ${media}. <p>`
    }
}