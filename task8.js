function arrBetween(num1, num2, arr){
    if(arr.length === 0)
        return "Array bo'sh!"

    const resultArray = []

    for (let i of arr)
        if (i > num1 && i < num2)
            resultArray.push(i)

    return resultArray
}

alert(`Natija: ${arrBetween(3, 8, [1, 5, 95, 0, 4, 7])}`)