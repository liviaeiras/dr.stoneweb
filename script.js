// Alternância do Tema Claro/Escuro
document.getElementById('toggle-tema').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  this.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
});

// Função para mostrar as seções de forma suave
function showSection(sectionId) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
      section.classList.remove('active');
  });

  const activeLink = document.querySelector('nav ul li a.active');
  if (activeLink) {
      activeLink.classList.remove('active');
  }

  // Exibe a seção selecionada
  document.getElementById(sectionId).classList.add('active');
  const clickedLink = document.querySelector(`a[href='javascript:void(0)'][onclick="showSection('${sectionId}')"]`);
  if (clickedLink) {
      clickedLink.classList.add('active');
  }
}

// Função para abrir o trailer do episódio
function openTrailer(url) {
  window.open(url, '_blank');
}

// Ao carregar a página, mostra a seção inicial
document.addEventListener('DOMContentLoaded', function() {
  showSection('intro'); // Define a página inicial a ser exibida
});
function openTrailer(url) {
  const modal = document.getElementById('episodio-modal');
  const modalIframe = document.getElementById('modal-video');
  modalIframe.src = url;
  modal.style.display = 'block';
}

function fecharModal() {
  const modal = document.getElementById('episodio-modal');
  const modalIframe = document.getElementById('modal-video');
  modalIframe.src = '';
  modal.style.display = 'none';
}
