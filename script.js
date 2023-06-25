const toggleBotao = document.getElementById('barralateral-toggle');
const modoescurobotao = document.querySelector('label.trocar');
const barralateral = document.querySelector('div.barralateral');
const html = document.querySelector('html');

toggleBotao.addEventListener('click', function() {

  barralateral.classList.toggle('show');

});


modoescurobotao.addEventListener('click', () =>{

    barralateral.classList.toggle('dark');
    html.classList.add('dark')
  
  });

function claro() {
  html.classList.add('dark')
}

function escuro() {
  html.classList.remove('dark')
  html.classList.add('')
}

