//animação de clique
const btn = document.getElementsByTagName('button');

const soltou = (data) => {
    let tag = document.getElementById(data);
    if(tag.classList.contains('clicado')){
        tag.classList.remove('clicado');
    }
}
const clicou = (data) => {
    let tag = document.getElementById(data);
    if(tag.classList.contains('clicado') == false){
        tag.classList.add('clicado');
    }
}
//tudo ok
//=========================================================


//calculos

const insert = (num) => {
    document.querySelector('#contas').innerHTML += num;
}

const calcular = () => {
    let contas = document.querySelector('#contas').innerHTML;
    if(contas) {
        let final = (document.querySelector('#contas').innerHTML = eval(contas));
        document.querySelector('#contas').innerHTML = '';
        document.querySelector('#resultado').innerHTML = final;
    }else{
        document.querySelector('#resultado').innerHTML = '0';
    }
}
//=========================================================


//funções quadrado e raiz quadrada





//=========================================================

//demais funções
const limpar = () => {
    document.getElementById('contas').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}

const deletar = () => {
    let del = document.getElementById('contas').innerHTML;
    document.getElementById('contas').innerHTML = del.substring(0, del.length-1);
}

//funções das teclas
