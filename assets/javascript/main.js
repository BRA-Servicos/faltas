const label = document.querySelector('.data-hoje');

const hoje = new Date()

const correctData = new Intl.DateTimeFormat('pt-BR').format(hoje);

label.innerText = correctData