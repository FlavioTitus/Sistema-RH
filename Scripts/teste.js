const somar = (n1, n2) => n1 + n2; 
const subtrair = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 === 0 ? 0 : n1 / n2;
const calcular = (operacao, n1, n2) => operacao(n1, n2);

const nomes = [
  {nome:'predro', idade: 20, salario: 500},
  {nome:'ze', idade: 10, salario: 1500},
  {nome:'juca', idade: 40, salario: 800},
  {nome:'nuno', idade: 10, salario: 700}
]

const getIdade = pessoa => pessoa.idade
const getSalario = pessoa => pessoa.salario
const totalGeralIdade = nomes.map(getIdade).reduce(somar)
const totalGeralSalario = nomes.map(getSalario).reduce(somar)

const mediaIdade = dividir(totalGeralIdade, nomes.length)
const mediaSalario = dividir(totalGeralSalario, nomes.length)

console.log(nomes.length)
console.log(totalGeralSalario)
console.log(mediaIdade)
console.log(mediaSalario)

