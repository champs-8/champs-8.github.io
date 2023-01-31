const nextCard = document.getElementById('btnNext'); //imagem da seta para proximo slide
const previousCard = document.getElementById('btnPrevious');//imagem da seta pra anterior slide
const projs = document.querySelectorAll('.proj');
const spanDesc = document.querySelector('#spanDesc')
let arr = [];//mandar os projetos como node;

//id dinamico
let idslide = 0;
for (let a of projs ) {
    a.setAttribute('id', `proj${idslide}`);
    idslide++;
    arr.push(a);
}//conseguir manupilar os projetos com mais facilidade

//inserindo os descrições dos projetos nos spans
const verifyDesc = () => {
    let linkProject = document.getElementById('linkProject');
    if(idActive == 0) {
        spanDesc.innerHTML = 'Uma calculadora que faz todas as contas báscias necessárias para o nosso dia a dia, com um desing mais "dark", para menor desgaste visual do usuário'
    }   linkProject.href = 'https://champs-8.github.io/Projetos/Calculadora/index.html'
    if(idActive == 1) {
        spanDesc.innerHTML = 'Um temporizador com função de cronômetro e contador regressivo, ideal para atividades simples que precisa de uma exatidão de tempo'
        linkProject.href = 'https://champs-8.github.io/Projetos/Despertador/index.html';
    }
    if(idActive == 2) {
        spanDesc.innerHTML = 'Um sorteador de times, independente do que for jogar ou se divertir, poderá utilizá-lo para poder separar times com confiança e agilidade'
        linkProject.href = 'https://champs-8.github.io/Projetos/SorteioFutebol/index.html';
    }
    if(idActive == 3) {
        spanDesc.innerHTML = 'Uma página criada para baixar mídias diretas do YouTube com segurança e praticidade, em diversos formatos e qualidades, excelente para quem gosta de edições.'
        linkProject.href = 'https://champs-8.github.io/Projetos/Down_midias/index.html';
    }
}

//trocar a imagem e descrção    //OK
let idActive = 0
previousCard.style.visibility = 'hidden';//setinha pra cima escondida
verifyDesc()
nextCard.addEventListener('click', () => {

    //retirar class ativa e passar para o proximo id
    let active = document.querySelector('.activeSlide');
    active.classList.remove('activeSlide');
    idActive++;
    console.log(idActive);
    arr[idActive].classList.add('activeSlide');
    
    //se o elelmento ativo for o ultimo, vai esconder a seta
    if(arr[arr.length-1] == arr[idActive]) {
        nextCard.style.visibility = 'hidden';
    }
    //verificando o id para adicionar a descrição e link
    verifyDesc()

    //setinha para cima aparecer
    previousCard.style.visibility = 'visible';
    return idActive
})

//se o elelmento ativo for o primeiro, vai esconder a seta
previousCard.addEventListener('click', () => {
    nextCard.style.visibility = 'visible';

    //retirar class ativa e passar para o id anterior
    let active = document.querySelector('.activeSlide');
    active.classList.remove('activeSlide');
    idActive--;
    console.log(idActive);
    arr[idActive].classList.add('activeSlide');

    if(arr[0] == arr[idActive]) {
        previousCard.style.visibility = 'hidden'
    }
    verifyDesc();
    return idActive;
})


//obtendo coordenadas das sections.     TESTES  
// const coordProj = document.getElementById('projects').getBoundingClientRect();
// setInterval(() => {
//     const coord = document.body.getBoundingClientRect();
//     console.log(coord.y);
// }, 100);

//link das ancoras
const ancoraS = document.getElementById('s');//sobre
const ancoraT = document.getElementById('t');//tecnologias
const ancoraP = document.getElementById('p');//projetos
const ancoraM = document.getElementById('m');//mais
const btnHome = document.getElementById('btnHome');//home para inicio
const ancoraL = document.getElementById('logo');//logo
const btnCont = document.getElementById('btnCont');//contato


//metodo para mover ate a coordenada desejada
//fui foraçado a colocar o valor fixo
//obs: consertar valores todas as vezes que alterar dimensões das divs
btnCont.addEventListener('click', () => {
    scroll(0, 2806);
});
ancoraP.addEventListener('click', () => {
    scroll(0, 2082);
});
ancoraT.addEventListener('click', () => {
    scroll(0, 1401);
})
ancoraS.addEventListener('click', () => {
    scroll(0, 744);
})
ancoraL.addEventListener('click', () => {
    scroll(0, 118);
})
btnHome.addEventListener('click', () => {
    scroll(0, 0);
})
//sumir com botao home
setInterval(()=>{
    const coordAbout = document.getElementById('about').getBoundingClientRect();
    if(coordAbout.top >= 0) {
        btnHome.style.visibility = 'hidden';
    }else{
        btnHome.style.visibility = 'visible'
    }
},500)



