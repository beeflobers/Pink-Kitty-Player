const btn = document.getElementById('botão-controle');
const playIcon = btn.querySelector('.Play');
const pauseIcon = btn.querySelector('.Pause');

btn.addEventListener('click', () => {
  if (playIcon.style.display === 'none') {
    // Se o play está escondido, mostra o play e esconde o pause
    playIcon.style.display = 'inline-block';
    pauseIcon.style.display = 'none';
    console.log("Música pausada"); // Aqui você colocaria musica.pause()
  } else {
    // Se o play está visível, esconde ele e mostra o pause
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline-block';
    console.log("Música tocando"); // Aqui você colocaria musica.play()
  }
});
