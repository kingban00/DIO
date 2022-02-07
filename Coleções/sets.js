const array = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valor(array){
    const set = new Set(array)

    return [...set]
}

console.log(valor(array))