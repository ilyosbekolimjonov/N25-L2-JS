function incrementItems(arr){
    if(arr.length === 0)
        return "Array bo'sh!"
    
    const newArray = []

    for (let i = 0; i < arr.length; i++)
        newArray.push(arr[i]+1)

    return newArray
}

alert(`Natija: ${incrementItems([-1, 0, 1, 2])}`)