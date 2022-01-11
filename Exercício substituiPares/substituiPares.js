function substituir(){
    let arr = [1, 3, 9, 4, 10, 7, 8]
    if (!arr.length)
        console.log(-1)
    else if (!arr)
        console.log(-1)
    else {
        for (c in arr){
            if (isNaN(arr[c]))
                return -1
            if (arr[c] == 0)
               continue
            else if (!(arr[c] % 2))
                arr[c] = 0
        }
        console.log(arr)
    }    
}

substituir()