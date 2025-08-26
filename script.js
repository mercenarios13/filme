// Função para realizar a pesquisa de filmes
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('pesquisa');
    const resultsContainer = document.getElementById('resultados-pesquisa');

    // Array de filmes para busca
    const filmes = [
        { titulo: 'Vingadores: Ultimato', genero: 'Ação', imagem: 'filme-acao2.jpg' },
        { titulo: 'Matrix', genero: 'Ficção Científica', imagem: 'filme-ficcao2.jpg' },
        { titulo: 'O Exorcista', genero: 'Terror', imagem: 'filme-terror1.jpg' },
        { titulo: 'O Diário de uma Paixão', genero: 'Romance', imagem: 'filme-romance1.jpg' },
        { titulo: 'Procurando Nemo', genero: 'Animação', imagem: 'filme-animacao1.jpg' },
        { titulo: 'Se Beber, Não Case!', genero: 'Comédia', imagem: 'filme-comedia1.jpg' }
    ];

    // Função para atualizar os resultados da pesquisa
    function mostrarResultados(filmesFiltrados) {
        resultsContainer.innerHTML = '';
        filmesFiltrados.forEach(filme => {
            const filmeCard = document.createElement('div');
            filmeCard.classList.add('filme-card');
            filmeCard.innerHTML = `
                <img src="${filme.imagem}" alt="${filme.titulo}">
                <p>${filme.titulo}</p>
            `;
            resultsContainer.appendChild(filmeCard);
        });
    }

    // Filtra os filmes com base no texto inserido no campo de pesquisa
    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();
        const filmesFiltrados = filmes.filter(filme =>
            filme.titulo.toLowerCase().includes(searchText) || filme.genero.toLowerCase().includes(searchText)
        );
        mostrarResultados(filmesFiltrados);
    });
});
