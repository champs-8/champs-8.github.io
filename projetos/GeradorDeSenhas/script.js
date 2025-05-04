let charset = document.getElementById('charset');
let quantity = document.getElementById('quantity');
const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const number = ['0','1','2','3','4','5','6','7','8','9'];
const symbols = ['.','*','_','-','$','!','@','#','+'];


let arr = [];

function verify_include() {
    arr = [];
    
    let up = document.getElementById('upper');
    let lo = document.getElementById('lower');
    let nu = document.getElementById('number');
    let sy = document.getElementById('symbols');

    //testes para adicionar os valores ao array
    if(up.checked){
        arr.push(...upper)
    }
    if(lo.checked){
        arr.push(...lower)
    }
    if(nu.checked){
        arr.push(...number)
    }
    if(sy.checked){
        arr.push(...symbols)
    }
    //se nao tiver nada marcada, retornará
    if (!up.checked && !lo.checked && !nu.checked && !sy.checked) {
        alert('É necessário ter uma opção marcada.')
        arr.push('');
        return
        
    }

    console.log(arr);
}

//animação de mostrar quantos caracteres terá a senha
charset.addEventListener('input', () => {
    quantity.innerHTML = charset.value    
})

//vai dar inicio a geraçao
async function generate () {
    //aqui vai verificar o que foi selecionado nas configs 
    verify_include()
    
    //limpa a div password
    document.getElementById('textRandom').value = '';

    //aqui vai escolhe os caracteres
    for (let i = 0; i<charset.value; i++ ) {
        let rand = Math.floor(Math.random()*arr.length)
        document.getElementById('textRandom').value += arr[rand];
    }
}
//evento para copiar
let copy = document.getElementById('copy');
copy.addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('textRandom').value).then(() => {
        alert('Texto copiado');
    })
})