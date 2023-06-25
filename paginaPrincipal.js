// Script sobre calendario.
let numeros = document.querySelector('.diaMes');

for (i = 1; i <= 31; i++) {

  numeros.innerHTML += `<span>${i}</span>`;

}

// Pegar nova date, ano e mês atual
const dataAtual = document.querySelector(".dataAtual"),
diaMarcacao = document.querySelector(".dias"),
proximoIcones = document.querySelectorAll(".icones span");


let data = new Date(),
anoAtual = data.getFullYear(),
mesAtual = data.getMonth();

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const renderizarCalendario = () => 
{
    let primeroDataMes = new Date(anoAtual, mesAtual, 1).getDay(), //Pegar primero dia do mês 
    ultimaDataMes = new Date(anoAtual, mesAtual + 1, 0).getDate(), //Pegar ultima data do mês
    ultimaDiaMes = new Date(anoAtual, mesAtual, ultimaDataMes).getDay(), //Pegar ultimo dia do mês
    ultimaDataMesPassado = new Date(anoAtual, mesAtual, 0).getDate(); //Pegar ultima dia do mês passado
    let liTag = "";

    for(let i = primeroDataMes; i > 0; i--){ //Cria li de meses anteriores dos ultimos dias
        liTag += `<li class="inativo">${ultimaDataMesPassado - i + 1}</li>`;
    }

    for(let i = 1; i <= ultimaDataMes; i++){//Cria li de todos os dias atuais desse mês
        let diaHoje = i === data.getDate() && mesAtual === new Date().getMonth()
                      && anoAtual === new Date().getFullYear() ? "ativo" : "";
        liTag += `<li class="${diaHoje}">${i}</li>`;
    }

    for(let i = ultimaDiaMes; i < 6; i++){//Cria li de todos os primeiros dias do proximo mês
        liTag += `<li class="inativo">${i - ultimaDiaMes + 1}</li>`;
    }
    dataAtual.innerText = `${meses[mesAtual]} ${anoAtual}`;
    diaMarcacao.innerHTML = liTag;
} 
renderizarCalendario();
proximoIcones.forEach(icone => { //Adcionar evento ao click
    icone.addEventListener("click", () => { 
        //Incrementar ou retirar mais um
        mesAtual = icone.id === "voltar" ? mesAtual - 1 : mesAtual + 1;
        renderizarCalendario();
    })
})