function getLastItem(arr){
    if(arr.length === 0)
        return "Array bo'sh!"

    return arr[arr.length - 1]
}

alert(`Natija: ${getLastItem([-1, 0, 1, 2])}`)