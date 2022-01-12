function validArray(arr, num){
    try {
        if (!arr && !num) throw new ReferenceError('Os parâmetros não foram definidos')

        if (typeof(arr) != 'object') throw new TypeError('O parâmetro não é do tipo desejado [OBJECT]')

        if (typeof(num) != 'number') throw new TypeError('O parâmetro não é do tipo desejado [NUMBER]')

        if (arr.length != num) throw new RangeError('O array passado é maior que o definido na passagem da função')

        return arr

    } catch (e) {
        if (e instanceof ReferenceError){
            console.log('Este erro é um ReferenceError')
            console.log(e.message)
        } else if (e instanceof TypeError){
            console.log('Este erro é um TypeError')
            console.log(e.message) 
        } else if (e instanceof RangeError){
            console.log('Este erro é um RangeError')
            console.log(e.message)
        } else
            console.log('Erro não esperado: ' + e)
    }   
}

console.log(validArray([1], 1))