// Barra lateral 

var barralateralOpen = false;
var barralateral = document.getElementById("barralateral");

function openbarralateral() {
  if(!barralateralOpen) {
    barralateral.classList.add("barralateral-responsive");
    barralateralOpen = true;
  }
}

function closebarralateral() {
  if(barralateralOpen) {
    barralateral.classList.remove("barralateral-responsive");
    barralateralOpen = false;
  }
}

function enviarMensagem() {
  var assunto = document.getElementById("assunto").value;
  var descricao = document.getElementById("descricao").value;

  // Substituir espaços por "%20" na descrição
  descricao = descricao.replace(/ /g, "%20");

  // Montar a URL da API do WhatsApp
  var url = "https://api.whatsapp.com/send?phone=61996226716&text=" + assunto + "%20" + descricao;

  // Redirecionar para a URL no WhatsApp
  window.location.href = url;
}



function adicionarItem() {

  const categoriaProduto = document.getElementById('categoriaProduto').value;

  const nomeProduto = document.getElementById('nomeProduto').value;

  const dataValidade = document.getElementById('dataValidade').value;

  const quantProduto = document.getElementById('quantProduto').value;

  const medConsumoProduto = document.getElementById('medConsumoProduto').value;

  

  const item = document.createElement('li');

  

  const categoriaSpan = document.createElement('span');

  categoriaSpan.textContent = `Categoria: `;

  const categoriaStrong = document.createElement('strong');

  categoriaStrong.textContent = categoriaProduto;

  categoriaSpan.appendChild(categoriaStrong);

  item.appendChild(categoriaSpan);

  

  item.appendChild(document.createElement('br'));

  

  const nomeSpan = document.createElement('span');

  nomeSpan.textContent = `Nome: `;

  const nomeStrong = document.createElement('strong');

  nomeStrong.textContent = nomeProduto;

  nomeSpan.appendChild(nomeStrong);

  item.appendChild(nomeSpan);

  

  item.appendChild(document.createElement('br'));

  

  const validadeSpan = document.createElement('span');

  validadeSpan.textContent = `Validade: `;

  const validadeStrong = document.createElement('strong');

  validadeStrong.textContent = dataValidade;

  validadeSpan.appendChild(validadeStrong);

  item.appendChild(validadeSpan);

  

  item.appendChild(document.createElement('br'));

  

  const quantSpan = document.createElement('span');

  quantSpan.textContent = `Quantidade em estoque: `;

  const quantStrong = document.createElement('strong');

  quantStrong.setAttribute('id', `quant-${nomeProduto}`); // Atributo de ID para acessar o elemento da quantidade em estoque

  quantStrong.textContent = quantProduto;

  quantSpan.appendChild(quantStrong);

  item.appendChild(quantSpan);

  

  item.appendChild(document.createElement('br'));

  

  const consumoSpan = document.createElement('span');

  consumoSpan.textContent = `Consumo diário: `;

  const consumoStrong = document.createElement('strong');

  consumoStrong.textContent = medConsumoProduto;

  consumoSpan.appendChild(consumoStrong);

  item.appendChild(consumoSpan);

  

  document.getElementById('listaItens').appendChild(item);

  

  document.getElementById('id01').style.display='none';

  

  // Limpar campos do formulário

  document.getElementById('categoriaProduto').value = '';

  document.getElementById('nomeProduto').value = '';

  document.getElementById('dataValidade').value = '';

  document.getElementById('quantProduto').value = '';

  document.getElementById('medConsumoProduto').value = '';

  

  // Diminuir quantidade em estoque 

  setInterval(() => {

    const quantElement = document.getElementById(`quant-${nomeProduto}`);

    let quantAtual = Number(quantElement.textContent);

    quantAtual -= Number(medConsumoProduto);

    quantElement.textContent = String(quantAtual);

  }, 3000); // 3000 ms = 3 segundos

  atualizarQuantidadeProdutos();
}

function atualizarQuantidadeProdutos() {

  const totalItens = document.getElementById('listaItens').childElementCount;

  document.getElementById('quantiadeDeProdutos').textContent = String(totalItens);

}
