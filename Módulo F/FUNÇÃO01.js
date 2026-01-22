function parimpar(n){
    if (n % 2 == 0){
        return `PAR!`
        } else {
            return `ÍMPAR!`
        }
}

let res = parimpar(4)
console.log(`O número é ${res}`)