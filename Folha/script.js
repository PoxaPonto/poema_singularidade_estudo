// Função para tocar a música e abrir a carta
function playAndOpenCarta() {
    // Tocar a música
    var audio = document.getElementById("audioPlayer");
    audio.muted = false;  // Desmutando o áudio
    audio.play();  // Iniciando a música

    // Abrir a carta
    var carta = document.getElementById("folha");
    carta.classList.add("aberta"); // Adiciona a classe para abrir a carta
}
