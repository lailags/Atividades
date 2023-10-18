// JavaScript para adicionar funcionalidade à barra de busca
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value;
    alert(`Você buscou por: ${searchTerm}`);
});

function zoomIn(element) {
    element.style.transform = "scale(1.1)"; // Aumenta em 10% quando o cursor passa sobre a imagem
    element.style.transition = "transform 0.3s ease";
}

function zoomOut(element) {
    element.style.transform = "scale(1)"; // Retorna ao tamanho original quando o cursor sai da imagem
    element.style.transition = "transform 0.3s ease";
}
