// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}. Idade ${this.idade} anos`;
    }

}

const p1 = new Pessoa('aelcio', 'jozias', 21)
console.log(p1.nomeCompleto())

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
console.log(Object.getOwnPropertyNames(NodeList.prototype))
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype))

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');


li.constructor
li.click;
li.innerText;
li.value.constructor;
li.hidden;
li.offsetLeft;
li.click();

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
