var itens = document.getElementById('itens')
var botao = document.getElementById('burger')
botao.addEventListener('click', clickMenu)



function clickMenu(){  
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}
function mudouTamanho(){
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}