function tabuada() {
    let num = window.document.getElementById(`txtnum`)
    let tab = window.document.getElementById(`seltab`)
    if (num.value.length == 0){
        window.alert(`Por gentileza, digite um número!`)
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ``
        while (c <= 10){
            let item = document.createElement(`option`)
            let result = c * n
            item.text = `${n} x ${c} = ${result}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}