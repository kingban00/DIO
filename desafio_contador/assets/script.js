function incrementar(){
    var conta = document.getElementById('conta')
    var aux = Number(conta.innerText)
    aux++
    conta.innerText = aux
}

function subtrair(){
    var conta = document.getElementById('conta')
    var aux = Number(conta.innerText)
    if (aux == 0){
        window.alert('Não é possível subtrair mais!')
    } else{
        aux--
        conta.innerText = aux
    }
    
}