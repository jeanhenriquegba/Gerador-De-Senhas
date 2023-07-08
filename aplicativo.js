const btnGerar   = document.querySelector(".btn");
const historyer  = document.getElementById("Senhas");
const ranger     = document.getElementById("Ranger");
const visual     = document.getElementById("saidaRanger");
const senhaAtual = document.getElementById("senhaAtual");

visual.innerHTML = ranger.value + ' Caracteres';
ranger.oninput = function(){
    visual.innerHTML = this.value + ' Caracteres';
};

function gerador(){
const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let resultado = "";

    for(i = 0; i < ranger.value ; i++){
        resultado += letras.charAt(Math.floor(Math.random()*62))
    }    
 historyer.innerHTML += `<span>${resultado}</span><hr>`
 senhaAtual.innerHTML = resultado
let scrollar = document.querySelector(".historyContainer");
    scrollar.scrollTop = scrollar.scrollHeight;
}


btnGerar.addEventListener("click", function(){
     gerador();
 });

