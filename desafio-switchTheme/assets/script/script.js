function mudaClasse(){
    mudaCor()
    mudaTexto()
}

function mudaTexto(){
    if (botao.classList.contains('dark-mode')){
        botao.innerText = 'Light Mode'
        h1.innerText = 'Dark Mode ON'
    } else {
        botao.innerText = 'Dark Mode'
        h1.innerText = 'Light Mode ON'
    }
}

function mudaCor(){    
    botao.classList.toggle('dark-mode')
    corpo.classList.toggle('dark-mode')
    rodape.classList.toggle('dark-mode')
}

const botao = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const corpo = document.getElementsByTagName('body')[0]
const rodape = document.getElementsByTagName('footer')[0]

botao.addEventListener('click', mudaClasse)