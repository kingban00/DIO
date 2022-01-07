function analise(){
    let palindromo = document.getElementById('palin')
    let palavra = palindromo.value
    let res = document.getElementById('res')
    palavra = palavra.replace(/ /g, '')

    if (palavra.split('').reverse().join('') === palavra)
        res.innerHTML = '<p>É um palíndromo!</p>'
    else
        res.innerHTML = '<p>Não é um palíndromo!</p>'
}
