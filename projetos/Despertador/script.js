// Seleção dos elementos de entrada e botões
const inputHora = document.getElementById('selhora');
const inputMin = document.getElementById('selmin');
const inputSeg = document.getElementById('selseg');
const radioContador = document.getElementById('contador');
const radioCronometro = document.getElementById('cronometro');
const botoes = document.querySelectorAll('.btn');

let tempo = {
    hora: 0,
    min: 0,
    seg: 0,
    intervalo: null
};

// Função auxiliar para formatar com 2 dígitos
function formatar(valor) {
    return valor < 10 ? `0${valor}` : `${valor}`;
}

// Atualiza os inputs a partir do objeto tempo
function atualizarInputs() {
    inputHora.value = formatar(tempo.hora);
    inputMin.value = formatar(tempo.min);
    inputSeg.value = formatar(tempo.seg);
}

// Lê valores dos inputs para o objeto tempo
function lerInputs() {
    tempo.hora = Number(inputHora.value) || 0;
    tempo.min = Number(inputMin.value) || 0;
    tempo.seg = Number(inputSeg.value) || 0;
}

// Reseta os inputs para "00"
function resetarInputs() {
    inputHora.value = '00';
    inputMin.value = '00';
    inputSeg.value = '00';
}

// Decrementa o tempo no modo contador
function decrementarTempo() {
    if (tempo.seg > 0) {
        tempo.seg--;
    } else if (tempo.min > 0) {
        tempo.min--;
        tempo.seg = 59;
    } else if (tempo.hora > 0) {
        tempo.hora--;
        tempo.min = 59;
        tempo.seg = 59;
    } else {
        return false; // tempo esgotado
    }
    return true;
}

// Incrementa o tempo no modo cronômetro
function incrementarTempo() {
    tempo.seg++;
    if (tempo.seg > 59) {
        tempo.seg = 0;
        tempo.min++;
    }
    if (tempo.min > 59) {
        tempo.min = 0;
        tempo.hora++;
    }
    if (tempo.hora >= 72) {
        alert('Você atingiu o limite de 3 dias!');
        pararTemporizador();
    }
}

// Inicia o temporizador
function iniciarTemporizador() {
    lerInputs();
    atualizarInputs();

    if (radioContador.checked) {
        tempo.intervalo = setInterval(() => {
            if (!decrementarTempo()) {
                pararTemporizador();
                alert('FIM meu parceiro.');
            }
            atualizarInputs();
        }, 1000);
    } else if (radioCronometro.checked) {
        tempo.intervalo = setInterval(() => {
            incrementarTempo();
            atualizarInputs();
        }, 1000);
    }
}

// Para o temporizador
function pararTemporizador() {
    clearInterval(tempo.intervalo);
    tempo.intervalo = null;
}

// Botão Iniciar/Pausar
botoes[0].addEventListener('click', () => {
    const botao = botoes[0];
    if (botao.value === 'Iniciar') {
        iniciarTemporizador();
        botao.value = 'Pausar';
        botoes[2].style.visibility = 'hidden'; // botão "Função"
    } else {
        pararTemporizador();
        botao.value = 'Iniciar';
        botoes[2].style.visibility = 'visible';
    }
});

// Botão Zerar
function zerar() {
    pararTemporizador();
    tempo = { hora: 0, min: 0, seg: 0, intervalo: null };
    resetarInputs();
    botoes[0].value = 'Iniciar';
    botoes[2].style.visibility = 'visible';
}

// Torna a função `zerar` disponível globalmente (já que é chamada via onclick no HTML)
window.zerar = zerar;

// Função para limpar o input ao clicar
function zera(id) {
    const input = document.getElementById(id);
    input.value = '';
}

// Torna `zera` também acessível globalmente
window.zera = zera;

// ✅ Zera os campos ao carregar a página
resetarInputs();