function findNumberIndex(arr, number){
    if(arr.length === 0)
        return "Array bo'sh!"

    for (let i = 0; i < arr.length; i++)
        if (arr[i] === number)
            return i;

    return -1;
}

alert(`Natija: ${findNumberIndex([1, 5, 3], 3)} \nNatija: ${findNumberIndex([1, 2, 3], 4)}`)