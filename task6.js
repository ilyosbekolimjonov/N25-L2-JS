function sumArray(arr){
    if(arr.length === 0)
        return "Array bo'sh!"
    
    let sum = 0

    for(let i = 0; i < arr.length; i++)
        sum += arr[i]

    return sum
}

alert(`Natija: ${sumArray([1, 2, 3, 4, 5])}`)