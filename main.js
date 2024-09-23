//Botão Home
function eventoHome(){
    window.location.href = "sobre.html";
}

//Âncora
window.onscroll = function() {
    mostrarBotao();
  };
  
  function mostrarBotao() {
    const ancora = document.getElementById("ancora");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      ancora.style.display = "block";
    } else {
      ancora.style.display = "none";
    }
  }
  
  // Função para rolar ao topo
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


const carrossel = document.querySelector('.carrossel');
const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let indiceAtual = 0;
let tempo; // Armazena o intervalo para a troca automática

function mostrarSlide(indice) {
    if (indice >= slides.length) {
        indiceAtual = 0;
    } else if (indice < 0) {
        indiceAtual = slides.length - 1;
    } else {
        indiceAtual = indice;
    }
    const deslocamento = -indiceAtual * 100;
    carrossel.style.transform = `translateX(${deslocamento}%)`;
}

// Inicia o carrossel para trocar de slide automaticamente
function iniciarTrocaAutomatica() {
    tempo = setInterval(() => {
        mostrarSlide(indiceAtual + 1);
    }, 3000); // Troca de slide a cada 3 segundos
}

// Para a troca automática quando o usuário clica nos botões
function pararTrocaAutomatica() {
    clearInterval(tempo);
}

// Eventos para os botões de navegação
next.addEventListener('click', () => {
    pararTrocaAutomatica(); // Para a troca automática
    mostrarSlide(indiceAtual + 1);
    iniciarTrocaAutomatica(); // Reinicia a troca automática
});

prev.addEventListener('click', () => {
    pararTrocaAutomatica();
    mostrarSlide(indiceAtual - 1);
    iniciarTrocaAutomatica();
});

// Inicia o carrossel com troca automática de slides
iniciarTrocaAutomatica();
  
