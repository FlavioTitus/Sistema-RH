const somar = (n1, n2) => n1 + n2; 
const subtrair = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 === 0 ? 0 : n1 / n2;
const calcular = (operacao, n1, n2) => operacao(n1, n2);
const buscaPorId = id => funcionario => funcionario.id === id;

const criarExibirMensagem = funcaoExibeTexto => texto => funcaoExibeTexto(texto);
const exibeMensagemSucesso = criarExibirMensagem(alert);
const exibeMensagemErro = criarExibirMensagem(alert);

let proximoId = 1;
const funcionarios = [];

const inputNome = document.getElementById('nomeFuncionario');
const inputIdade = document.getElementById('idadeFuncionario');
const inputCargo = document.getElementById('cargoFuncionario');
const inputSalario = document.getElementById('salarioFuncionario');
const inputDataAdmissão = document.getElementById('dataAdmissao');

const totalFuncionarios = document.getElementById('somaTC')
const somaDosSalarios = document.getElementById('somaSal')
const mediaDasIdades = document.getElementById('somaIdade')
const mediaDosSalarios = document.getElementById('mediaSal')

const selectTipoBusca = document.getElementById('tipoBusca');
const inputBusca = document.getElementById('inputBusca');
const divVisualizacao = document.getElementById('visualizacao');

const adicionaFuncionario = (nomeFuncionario, idadeFuncionario, cargoFuncionario,salarioFuncionario,dataAdmissao) => {
  
  const funcionario = {
    id: proximoId,
    nomeFuncionario,
    idadeFuncionario,
    cargoFuncionario,
    salarioFuncionario,
    dataAdmissao: dataAdmissao
  }
  funcionarios.push(funcionario)
  proximoId++
  atualizalistaFuncionarios()
  limpaCampos()
  resumoRH()
}

const atualizalistaFuncionarios = (listaFuncionarios) => {
  let cards = ''
  for (funcionario of listaFuncionarios && listaFuncionarios.lenght > 0 ? listaFuncionarios : funcionarios){
    cards += `
    
    <div class="card">
        <div class="descricao-card">
            <p><b>${funcionario.nomeFuncionario}</b></p>
            <p>Idade: <b>${funcionario.idadeFuncionario} anos</b></p>
            <p>Cargo: <b>${funcionario.cargoFuncionario}</b></p>
            <p>Salário: <b>R$ ${funcionario.salarioFuncionario}</b></p>
            <p>Data Admissão: <b>${funcionario.dataAdmissao}</b></p>
        </div>
        <div class="acoes">
            <span class="material-icons acao" onclick="removeFuncionario()">
                delete
            </span>
            <span class="material-icons edit" onclick="editarFuncionario()">edit</span>
        </div>
    </div>
    `
  }
  divVisualizacao.innerHTML = cards
  console.log(funcionarios)
}

const removeFuncionario = (id) => {
  const indiceFuncionario = funcionarios.findIndex(buscaPorId(id));
  funcionarios.splice(indiceFuncionario, 1);
  atualizalistaFuncionarios();
}

const limpaCampos = () => {
  inputNome.value = '';
  inputIdade.value = '';
  inputCargo.value = '';
  inputSalario.value = '';
  inputDataAdmissão.value = '';
}

const resumoRH = () => {
  somaFuncionarios()
  somaSalarios()
  mediaIdade()
  mediaSalarios()
}

const somaFuncionarios = () => {
  return totalFuncionarios.innerHTML = funcionarios.length
}

const somaSalarios = () => {
  const getSalario = funcionario => funcionario.salarioFuncionario
  const totalGeralSalario = funcionarios.map(getSalario).reduce(somar)
  return somaDosSalarios.innerHTML = totalGeralSalario
}

const mediaIdade = () => {
  const getIdade = funcionario => funcionario.idadeFuncionario
  const totalGeralIdade = funcionarios.map(getIdade).reduce(somar)
  const mediaIdade = dividir(totalGeralIdade, funcionarios.length)
  return mediaDasIdades.innerHTML = mediaIdade
}

const mediaSalarios = () => {
  const getSalario = funcionario => funcionario.salarioFuncionario
  const totalGeralSalario = funcionarios.map(getSalario).reduce(somar)
  const mediaSalarial = dividir(totalGeralSalario, funcionarios.length)
  return mediaDosSalarios.innerHTML = mediaSalarial
}