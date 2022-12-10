const elementchute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.leng = 'pt-Br';
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute)
    verificaSeChutepossuiValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementchute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>

    `
}

recognition.addEventListener('end', () => recognition.start())