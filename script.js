const nextCard = document.getElementById('btnNext'); //imagem da seta para proximo slide
const previousCard = document.getElementById('btnPrevious');//imagem da seta pra anterior slide
const projs = document.querySelectorAll('.proj');
const spanDesc = document.querySelector('#spanDesc');
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
    // informar as tecnologias utilizadas
    let spanTec = document.getElementById('spanTec');
    if(idActive == 0) {
        spanDesc.innerHTML = 'Uma calculadora que faz todas as contas báscias necessárias para o nosso dia a dia, com um desing mais "dark", para menor desgaste visual do usuário'
        spanTec.innerHTML = `
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" alt="CSS" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="50" height="50"/>
            &nbsp;
            `;
        linkProject.href = 'https://champs-8.github.io/calculadora';
    }
    if(idActive == 1) {
        spanDesc.innerHTML = 'Um temporizador com função de cronômetro e contador regressivo, ideal para atividades simples que precisa de uma exatidão de tempo'
        spanTec.innerHTML = `
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" alt="CSS" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="50" height="50"/>
            &nbsp;
            `;
        linkProject.href = 'https://champs-8.github.io/contadorTime';
    }
    if(idActive == 2) {
        spanDesc.innerHTML = 'Um sorteador de times, independente do que for jogar ou se divertir, poderá utilizá-lo para poder separar times com confiança e agilidade'
        spanTec.innerHTML = `
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" alt="CSS" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="50" height="50"/>
            &nbsp;
            `;
        linkProject.href = 'https://champs-8.github.io/sorteio';
    }
    if(idActive == 3) {
        spanDesc.innerHTML = 'Uma página criada para baixar mídias diretas do YouTube com segurança e praticidade, em diversos formatos e qualidades, excelente para quem gosta de edições.';
        spanTec.innerHTML = `
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" alt="CSS" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="50" height="50"/>
            &nbsp;
            `;
        linkProject.href = 'https://champs-8.github.io/downMidias';
    }
    if(idActive == 4) {
        spanDesc.innerHTML = 'Precisa criar senhas com certa complixadade e está sem inspiração? um gerador de senhas online e bem simples. Tudo o que precisa é selecionar o que você quer e copiar.';
        spanTec.innerHTML = `
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" alt="CSS" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="50" height="50"/>
            &nbsp;
            `;
        linkProject.href = 'https://champs-8.github.io/gerador-senhas';
    }
    if(idActive == 5) {
        spanDesc.innerHTML = 'Um projeto voltado para donos de comércios, onde o mesmo pode criar um cardápio online, com a possibilidade de adicionar e remover produtos, com um design simples e fácil de usar. Construído com uma API de banco de dados, o que facilita a adição e remoção de produtos.';
        // spanTec.innerHTML = 'Feito com React, React Native, TypeScript, NextJs, NodeJs, Express, PostgreSQL, Prisma, Sass';
        spanTec.innerHTML = `
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" title="React" alt="React" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" title="Typescript" alt="TypeSript" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" title="NextJS" alt="NextJS" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" title="NodeJS" alt="NodeJS" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" title="PostgreSQL" alt="PostgreSQL" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg" title="Prisma" alt="Prisma" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" title="Sass" alt="Sass" width="50" height="50"/>
            &nbsp;
            `;
        linkProject.href = 'https://champizza-web.vercel.app';
    }
    if(idActive == 6) {
        spanDesc.innerHTML = 'Trata-se do clássico jogo da velha com interações visuais, reinicialização de jogo e um design mais "clean", para uma melhor experiência do usuário, construído juntamente com uma API.';
        spanTec.innerHTML = `
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" title="Java" alt="Java" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" title="Spring" alt="Spring" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" title="Docker" alt="Docker" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" alt="CSS" width="50" height="50"/>
            &nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="50" height="50"/>
            &nbsp;
            `;
        linkProject.href = 'https://champs-8.github.io/jogo-da-velha';
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

//link das ancoras
const btnHome = document.getElementById('btnHome');//home para inicio

//metodo para mover ate a coordenada desejada
btnHome.addEventListener('click', () => {
    scroll(0, 0);
})

//sumir com botao home
setInterval(()=>{
    const coordAbout = document.getElementById('hero').getBoundingClientRect();
    if(coordAbout.top >= 0) {
        btnHome.style.visibility = 'hidden';
    }else{
        btnHome.style.visibility = 'visible'
    }
},500)

//data de da ultima atualização, ao lado do botão  contato superior
document.querySelector('#lastUpdate').textContent = new Date(document.lastModified).
toLocaleDateString('pt-BR');

//enviar mensagem do formulário de contato
document.addEventListener("DOMContentLoaded", function () {
const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm('service_txyvj9l', 'template_1at9mx8', form)
    .then(function () {
        alert('Mensagem enviada com sucesso!');
        form.reset();
    }, function (error) {
        alert('Erro ao enviar. Tente novamente.');
        console.log(error);
    });
});
});

