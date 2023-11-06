function trocarImagem() {
    var imagem = document.getElementById('minhaImagem');
    if (imagem.src.endsWith('pinguim.png')) {
        imagem.src = 'foto2.jpg';
    } else {
        imagem.src = 'pinguim.png';
    }
}