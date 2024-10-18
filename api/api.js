
let currentIndex = 0;

const songs = [
    './musicas/Fora da cachola - MC Hariel.m4a',
    './musicas/Vida loka pt2.m4a',
    './musicas/Natiruts - Dou Não Dou (Áudio).mp3',
    './musicas/Roddy Ricch - Die Young [Prod. by London on Tha Track] (Dir By JDFilms).mp3'
];


let audioPlayer = new Audio(songs[currentIndex]);

function playMusic(index) {
    audioPlayer.src = songs[index]; 
    togglePlay(audioPlayer.src)
}


function togglePlay(index) {
    const playButton = document.querySelector('.modal__btnPlay1');
    const playIcon = playButton.querySelector('img');

    if (audioPlayer.paused) {
        audioPlayer.play(index);
        playButton.classList.add('playing');
        playIcon.src = './imagens/icone pause.svg';
    } else {
        audioPlayer.pause(); 
        playButton.classList.remove('playing'); 
        playIcon.src = './imagens/Icone Play.svg';
    }
}
