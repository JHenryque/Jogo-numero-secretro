

function verificaSeChutepossuiValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)){
        elementchute.innerHTML += '<div>Valor invalido<?div>';
        return
    }

    if (numeroForMaiorOuMenorValorPermitido(numero)){
        elementchute.innerHTML += `
        <div>valor invalido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return
    }
    
    function numeroForMaiorOuMenorValorPermitido(numero) {
        return numero > maiorValor || numero < menorValor
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`
    }else if (numero > numeroSecreto) {
        elementchute.innerHTML += `
        <div class="menor">O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    } else  {
        elementchute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}
function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})