window.onload = function() {
    const modal = document.getElementById('modal');
    modal.close();
};

const musicas = [
    {
        id: 1,
        imagem: "./imagens/Banner dvd mc hariel desktop.png",
        titulo: "Fora da Cachola",
        artista: "MC Hariel",
    },
    {
        id: 2,
        imagem: "./imagens/Banner Vida loka.png",
        titulo: "Vida loka, Pt. 2",
        artista: "Racionais Mc'S",
    },
    {
        id: 3,
        imagem: "./imagens/Banner Natiruts.png",
        titulo: "Dou Não Dou",
        artista: "Natiruts",
    },
    {
        id: 4,
        imagem: "./imagens/banner roddy rich.png",
        titulo: "Die Young",
        artista: "Roddy Rich",
    }
    
];

function abrirModal(id) {
    const modal = document.getElementById('modal');
    const musica = musicas.find(m => m.id === parseInt(id));

    if (musica) {
        modal.classList.add('aberto')
        modal.querySelector('.banner').src = musica.imagem;
        modal.querySelector('.modal__titulo').textContent = musica.titulo;
        modal.querySelector('.modal__artista').textContent = musica.artista;
        modal.showModal();
    } else {
        console.error('Música não encontrada!');
    }
}

function fecharModal() {
    const modal = document.querySelector('dialog');
    modal.classList.remove('aberto');
    modal.close(modal);
}



