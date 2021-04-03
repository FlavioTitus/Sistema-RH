const somar = (n1, n2) => n1 + n2; 
const subtrair = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 === 0 ? 0 : n1 / n2;
const calcular = (operacao, n1, n2) => operacao(n1, n2);

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
    dataAdmissao
  }

  funcionarios.push(funcionario)
  proximoId++
  atualizalistaFuncionarios()

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
}