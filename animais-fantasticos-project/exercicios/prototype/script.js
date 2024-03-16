function teste() {
    return 1+1
}


function Teste2(a) {
    this.a= a
}

Teste2.prototype.pessoa = function () {
    return 'sou uma pessoa'
}
const t2 = new Teste2()

console.log(t2.pessoa())

console.log(Teste2.prototype)
