// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
      console.log(this.nome + ' andou');
    }
  }

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    function andar() {
        console.log(`${this.nome} andou`);
    }
}
  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos

  const pessoas = []
  pessoas.push(new Pessoa('João', 20))
  pessoas.push(new Pessoa('Maria', 25))
  pessoas.push(new Pessoa('João', 20))
  const p1 = new Pessoa('João', 20)
  const p2 = new Pessoa('Maria', 25)
  const p3 = new Pessoa('Bruno', 15)
  pessoas.forEach(p => console.log(p.nome, p.idade))
  
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos


  function Dom(elemento) {
    this.elements = document.querySelectorAll(elemento)
    this.addClass = function addClass(classe) {
        this.elements.forEach(e => e.classList.add(classe))
    }

    this.removeClass = function addClass(classe) {
        this.elements.forEach(e => e.classList.remove(classe))
    }
  }

  const dom = new Dom('li')
  dom.addClass('ativo')
  console.log('LI1', dom.elements[0].classList);
dom.removeClass('ativo')
  console.log('LI2', dom.elements[0].classList);
  
  