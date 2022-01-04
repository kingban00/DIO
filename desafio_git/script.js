function contar(){
    var mult = document.getElementById('txtmult')
    var res = document.getElementById('res')

    if (mult.value == ''){
        window.alert('Por favor, digite um número!')
    } else{
        res.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            var conta = c * Number(mult.value)
            item.text = `${c} X ${mult.value} = ${conta}`
            res.appendChild(item)
        }
    }
}