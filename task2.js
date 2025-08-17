function getOddValue(arr){
    if(arr.length === 0)
        return "Array bo'sh!"
    
    let oddArray = []

    for (let i of arr)
        if(i%2 == 0)
            oddArray.push(i)

    return oddArray
}

console.log(getOddValue([1, 2, 3, 6]))

alert(`Natija: ${getOddValue([1, 2, 3, 6])}`)