var botao = document.getElementById('burger')
botao.addEventListener('click', clickMenu)

function clickMenu(){
    let itens = document.getElementById('itens')
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}
